import React, { useEffect, useState } from 'react'
import Appbar from '../../components/appbar';
import Menu from '../../components/menu';
import { Grid } from '@material-ui/core';
import { Conteudo } from '../../assets/styles';
import { useSelector, useDispatch } from 'react-redux';
import { enrollmentInRequest } from '../../store/modules/enrollment/actions';
import { coursesInRequest } from '../../store/modules/courses/actions'

const Dashboard = () => {
    const [cursosAtivos, setCursosAtivos] = useState([]);

    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.token)
    const id = useSelector(state => state.user.profile.id)
    const matriculas = useSelector(state => state.enrollment.data)
    const cursos = useSelector(state => state.courses.data)

    useEffect(() => {
        dispatch(enrollmentInRequest(token, id))
    }, [])

    useEffect(() => {
        if (matriculas && matriculas.length) {
            matriculas.map((data, i) =>
                dispatch(coursesInRequest(token, data.curso))
            )
        }
    }, [matriculas])

    useEffect(() => {
        if (cursos && cursos.length) {
            setCursosAtivos([...cursosAtivos, cursos[0]])
        }
    }, [cursos])

    useEffect(() => {
        console.log('cursosAtivos ->',cursosAtivos)
    }, [cursosAtivos])

    return (
        <>
            <Appbar />
            <Grid container>
                <Grid item xs={12} md={3} lg={3}>
                    <Menu />
                </Grid>
                {cursosAtivos && cursosAtivos.length ?
                    <Grid item xs={12} md={9} lg={9} style={{marginLeft: '-22px'}}>
                        <Grid container spacing={3}>
                        {cursosAtivos.map((data, i) =>
                            <Grid item xs={12} md={4} lg={4} key={i}>
                                <Conteudo>
                                    <p>{data.nome}</p>
                                    <p>{data.descricao}</p>
                                    <p>{data.imagem}</p>
                                </Conteudo>
                            </Grid>
                        )}
                        </Grid>
                    </Grid>
                : null}
            </Grid>
        </>
    )
}

export default Dashboard
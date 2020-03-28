export function coursesInRequest(token, id) {
    return {
      type: "@courses/COURSES_IN_REQUEST",
      payload: { token, id }
    };
  }
  
  export function coursesInSuccess(token, courses) {
    return {
      type: "@courses/COURSES_IN_SUCCESS",
      payload: { token, courses }
    };
  }
  
  export function coursesFailure() {
    return {
      type: "@courses/COURSES_FAILURE"
    };
  }
  
  
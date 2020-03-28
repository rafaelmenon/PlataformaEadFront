export function enrollmentInRequest(token, id) {
    return {
      type: "@enrollment/ENROLLMENT_IN_REQUEST",
      payload: { token, id }
    };
  }
  
  export function enrollmentInSuccess(token, enrollment) {
    return {
      type: "@enrollment/ENROLLMENT_IN_SUCCESS",
      payload: { token, enrollment }
    };
  }
  
  export function enrollmentFailure() {
    return {
      type: "@enrollment/ENROLLMENT_FAILURE"
    };
  }
  
  
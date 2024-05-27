export const addprofile = (message) => async (dispatch) => {
  try {
    dispatch({
      type: "SAVE_PROFILE_DETAILS",
      payload: {
        name: message.name,
        email: message.email,
        token: message.token,
        role: message.role,
        scholarNumber: message.scholarNumber,
        fatherName: message.fatherName,
        motherName: message.motherName,
        mobile: message.mobile,
        dateOfBirth: message.dateOfBirth,
        gender: message.gender,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
export const remove = (message) => async (dispatch) => {
  try {
    dispatch({
      type: "Remove",
    });
  } catch (error) {
    console.log(error);
  }
};

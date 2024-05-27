const profileReducer = (state = {}, action) => {
  switch (action.type) {
    case "SAVE_PROFILE_DETAILS":
      return {
        ...state,
        profile: {
          token: action.payload.token,
          role: action.payload.role,
          name: action.payload.name,
          email: action.payload.email,
          scholarNumber: action.payload.scholarNumber,
          fatherName: action.payload.fatherName,
          motherName: action.payload.motherName,
          mobile: action.payload.mobile,
          dateOfBirth: action.payload.dateOfBirth,
          gender: action.payload.gender,
        },
      };
    case "Remove":
      return {
        ...state,
        profile: {
          token: null,
          role: null,
          name: null,
          email: null,
          scholarNumber: null,
          fatherName: null,
          motherName: null,
          mobile: null,
          dateOfBirth: null,
          gender: null,
        },
      };
    default:
      return state;
  }
};

export default profileReducer;

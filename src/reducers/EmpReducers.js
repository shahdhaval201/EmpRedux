const EmpReducers = (state = { empdetail: [] }, action) => {
  switch (action.type) {
    case "ADD_EMP":
      return { empdetail: action.payload };
    case "REMOVE_EMP":
      return { empdetail: action.payload };
    case "UPDATE_EMP":
      return { empdetail: action.payload };
    default:
      return state;
  }
};

export default EmpReducers;

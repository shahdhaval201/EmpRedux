export const AddEmpAction = (emp) => (dispatch, getState) => {
  const {
    EMPDETAILS: { empdetail },
  } = getState();

  const hasEmp = empdetail.find((i) => i.emp === emp);

  if (!hasEmp && empdetail !== "") {
    dispatch({
      type: "ADD_EMP",
      payload: [{ id: emp, emp }, ...empdetail],
    });
  }
};

export const RemoveEmpAction = (emp) => (dispatch, getState) => {
  const {
    EMPDETAILS: { empdetail },
  } = getState();

  dispatch({
    type: "REMOVE_EMP",
    payload: empdetail.filter((t) => t.id !== emp.id),
  });
};

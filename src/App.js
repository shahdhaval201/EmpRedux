import "./App.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  AddEmpAction,
  RemoveEmpAction,
  UpdateEmpAction,
} from "./actions/EmpActions";

function App() {
  const [emp, setEmployee] = useState();
  const [NewEmp, setNewEmp] = useState("");

  const dispatch = useDispatch();
  const EMPDETAILS = useSelector((state) => state.EMPDETAILS);

  const { empdetail } = EMPDETAILS;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddEmpAction(emp));
  };

  const handleRemove = (t) => {
    dispatch(RemoveEmpAction(t));
  };

  const handleUpdate = (obj) => {
    console.log(obj);
    dispatch(UpdateEmpAction({ id: obj.id, emp: NewEmp }));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Employee Details Web Application</h2>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Enter Employee Name"
            style={{
              width: 350,
              borderRadius: 25,
              padding: 10,
              border: "none",
              fontSize: 20,
              fontFamily: "fantasy",
            }}
            onChange={(e) => setEmployee(e.target.value)}
          />
          <button
            type="submit"
            style={{
              margin: 10,
              borderRadius: 20,
              padding: 10,
              border: "1px solid white",
              backgroundColor: "orangered",
              color: "white",
            }}
          >
            Add Employee
          </button>
          <ul className="allTodos">
            {empdetail &&
              empdetail.map((t) => (
                <li key={t.id} className="singleTodo">
                  <span className="todoText">{t.emp}</span>

                  <input
                    type="text"
                    placeholder="Update Employee Name"
                    onChange={(e) => setNewEmp(e.target.value)}
                  />
                  <button type="button" onClick={() => handleUpdate(t)}>
                    Update
                  </button>

                  <button type="button" onClick={() => handleRemove(t)}>
                    Delete
                  </button>
                </li>
              ))}
          </ul>
        </form>
      </header>
    </div>
  );
}

export default App;

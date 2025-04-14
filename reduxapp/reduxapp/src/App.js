import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AddData, RemoveData, SearchData, SortData, UpdateData } from './action/action';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const selector = useSelector(selector => (selector));
  const [object, setObject] = useState({ name: "", date: "" });
  const [IsEdite, setIsEdite] = useState(-1)
  const [searchtrem, setSearchtrem] = useState("")

  const handleChange = (e) => {
    setObject({ ...object, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    if (IsEdite !== -1) {
      dispatch(UpdateData(object, IsEdite))
    }
    else {
      dispatch(AddData(object))
    }
    setObject({ name: "", date: "", })
    setIsEdite(-1)

  }
  const handleRemove = (index) => {
    dispatch(RemoveData(index))
  }
  const handleSort = () => {
    dispatch(SortData(object))
  }

  const handleSearch = () => {
    dispatch(SearchData(searchtrem))
  }

  const handleEdite = (item, index) => {
    setObject(item)
    setIsEdite(index)
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", padding: "100px" }}>
        <label htmlFor='name'>Name: </label>
        <input type='text' name='name' id='name' value={object.name} onChange={handleChange} />
        <label htmlFor='dob'>DOB</label>
        <input type='date' name='date' id='date' value={object.date} onChange={handleChange} />
        <br />
        <button type='submit' onClick={handleSubmit}>submit</button>
        <br></br>
        <button type='sort' onClick={handleSort}>SORT</button>
        <br></br>
        <input
          type='text'
          value={searchtrem}
          onChange={(e) => setSearchtrem(e.target.value)}
        />
        <br></br>
        <button onClick={handleSearch}>SEARCH</button>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <table border={1}>
          <thead>
            <tr>
              <th>Name:</th>
              <th>DOB:</th>
              <th>Remove:</th>
              <th>Edite:</th>
            </tr>
          </thead>
          <tbody>
            {
              selector?.FormReducer?.map((item, index) => {
                return (
                  <tr>
                    <td>{item?.name}</td>
                    <td>{item?.date}</td>
                    <td>
                      <button onClick={() => handleRemove(index)}>REMOVE</button>
                    </td>
                    <td>
                      <button onClick={() => handleEdite(item, index)}>EDITE</button>
                    </td>
                  </tr>
                )
              })
            }

          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;

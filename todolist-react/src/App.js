// import Header from './components/Header.js';
// import Footer from './components/Footer.js';
// import Create from './components/Create.js';
// import Table from './components/Table';
import { Routes, Route, Link } from "react-router-dom";
import React, { useState } from "react";




function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<HeaderFooterCreate />} />
        <Route path="/create" element={<HeaderFooterTable />} />
      </Routes>
    </div>
  );
}

const GetTask =localStorage.getItem('task');
const GetDate  =localStorage.getItem('date');

const HeaderFooterTable = () => {
 
   
  return (
    <>
      <div className="header" >
        <div className="navbar navar  bg-light d-flex justify-content-evenly py-2"

>
          <h3 className="text">saboori</h3>
          <Link to="/" className="btn btn-danger">create</Link>
          {/* <button onClick={fuck}>hasdljkfalsd</button> */}

        </div>
      </div>
 



      <div className="div-mother">
        <input type="date" />
        <table>
          <thead> 
          <tr>
            <th>title</th>
            <th>date</th>
            <th>created at</th>
            <th>action</th>
          </tr>
          </thead>
          <tbody> 
            <tr>
              <td>{GetTask}</td>
              <td>{GetDate}</td>
             </tr>
              </tbody>
         </table>
      </div>




      <div id="footer">
        <p>all content blong to arun saboori</p>
      </div>






    </>
  )
}

const HeaderFooterCreate = () => {

  const [task, setTask] = useState('');
  const [date, setDate] = useState('');

  function onChangeTask(e) {
    setTask(e.target.value)
  }
  function onChangeDate(e) {
    setDate(e.target.value)
  }

  function onSubmit(e) {
    e.preventDefault()
    localStorage.setItem('task', task);
    localStorage.setItem('date', date);
  }

  // function getData() {
  //     console.log(localStorage.getItem('task'));
  //     console.log(localStorage.getItem('date'))
  // }
  


  return (
    <>
      <div className="header" >
        <div
          className="navbar navar-expand-lg bg-light d-flex justify-content-evenly py-2">
          <h3 className="text">saboori</h3>
          <Link to="/create" className='btn btn-danger'>table data</Link>
        </div>
      </div>


      <div className="style" id="createPage">
        <div className=".style2 w-50">
          <form onSubmit={onSubmit}>
            <h2 className="m-4">CREATE TASK</h2>
            <label  >task</label>
            <input type="text" id="task" className="form-control m-3" value={task} onChange={onChangeTask} />
            <label  >date</label>
            <input type="date" id="time" className="form-control m-3" name="date" value={date} onChange={onChangeDate} />
            <button className="btn btn-warning w-25 m-3" type="Submit" onClick={()=>alert('your data stored')} >submit</button>
             {/* <button className="btn btn-warning w-25 m-3"  type="button" onClick={getData}>get data</button> */}
          </form>
        </div>
      </div>




      <div id="footer">
        <p>all content blong to arun saboori</p>
      </div>

    </>
  )
}




export default App;

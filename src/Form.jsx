import React ,{useState}from 'react'
import Menu from './Menu';
import './Form.css';
import './Menu.css';


function Form() {


    const submitforms=()=>{
       

        alert("Form Successfully Submitted");
}
    
    return (
        <>
        <Menu/>
        <div className="form_container">

            <div className="upper">
             <div className="img">
                 <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIyIiBoZWlnaHQ9IjM4NCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgPGRlZnM+CiAgICA8ZmlsdGVyIHg9Ii0xNS44JSIgeT0iLTYzLjIlIiB3aWR0aD0iMTMxLjUlIiBoZWlnaHQ9IjIyNi40JSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0iYSI+CiAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjguOTI1IiBpbj0iU291cmNlR3JhcGhpYyIvPgogICAgPC9maWx0ZXI+CiAgICA8ZmlsdGVyIHg9Ii04My43JSIgeT0iLTIyMy4xJSIgd2lkdGg9IjI2Ny4zJSIgaGVpZ2h0PSI1NDYuMyUiIGZpbHRlclVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCIgaWQ9ImIiPgogICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSI4LjkyNSIgaW49IlNvdXJjZUdyYXBoaWMiLz4KICAgIDwvZmlsdGVyPgogICAgPGxpbmVhckdyYWRpZW50IHgxPSIyNy4yMDglIiB5MT0iMCUiIHgyPSI1Ni4zNTIlIiB5Mj0iMTAwJSIgaWQ9ImMiPgogICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRjlGOEY4IiBvZmZzZXQ9IjAlIi8+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNFOUU5RTkiIG9mZnNldD0iMTAwJSIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNzguMTI4JSIgeTE9IjY4LjIwMyUiIHgyPSI5Ny40MTclIiB5Mj0iNzcuMzgyJSIgaWQ9ImQiPgogICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRjBGMEYwIiBvZmZzZXQ9IjAlIi8+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNEOUQ4RDgiIG9mZnNldD0iMTAwJSIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iOC43MzglIiB5MT0iNDkuMzA1JSIgeDI9IjUwJSIgeTI9IjUwLjk0MyUiIGlkPSJmIj4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0ZERkRGRCIgb2Zmc2V0PSIwJSIvPgogICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjRkJGQkZCIiBvZmZzZXQ9IjEwMCUiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8ZWxsaXBzZSBpZD0iZSIgY3g9IjkwLjc3NyIgY3k9IjEyLjQ2NCIgcng9IjkwLjc3NyIgcnk9IjEyLjQ2NCIvPgogICAgPGxpbmVhckdyYWRpZW50IHgxPSI1MCUiIHkxPSIwJSIgeDI9IjUwJSIgeTI9IjEwMCUiIGlkPSJoIj4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iI0M4QzhDOCIgc3RvcC1vcGFjaXR5PSIuMiIgb2Zmc2V0PSIwJSIvPgogICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjOTc5Nzk3IiBzdG9wLW9wYWNpdHk9Ii4zIiBvZmZzZXQ9IjEwMCUiLz4KICAgIDwvbGluZWFyR3JhZGllbnQ+CiAgICA8bGluZWFyR3JhZGllbnQgeDE9IjUwJSIgeTE9IjAlIiB4Mj0iNTAlIiB5Mj0iMTAwJSIgaWQ9ImkiPgogICAgICA8c3RvcCBzdG9wLWNvbG9yPSIjQzhDOEM4IiBzdG9wLW9wYWNpdHk9Ii4yIiBvZmZzZXQ9IjAlIi8+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiM5Nzk3OTciIHN0b3Atb3BhY2l0eT0iLjMiIG9mZnNldD0iMTAwJSIvPgogICAgPC9saW5lYXJHcmFkaWVudD4KICAgIDxsaW5lYXJHcmFkaWVudCB4MT0iNTAlIiB5MT0iMCUiIHgyPSI1MCUiIHkyPSIxMDAlIiBpZD0iaiI+CiAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiNDOEM4QzgiIHN0b3Atb3BhY2l0eT0iLjIiIG9mZnNldD0iMCUiLz4KICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzk3OTc5NyIgc3RvcC1vcGFjaXR5PSIuMyIgb2Zmc2V0PSIxMDAlIi8+CiAgICA8L2xpbmVhckdyYWRpZW50PgogIDwvZGVmcz4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPHBhdGggZD0iTTkzLjA1MiAzNTkuMDVjMi4xMjUgMCA5MC45NjItNi45MzcgOTAuOTYyLTIwLjA4NSAwLTEzLjc2Ny00My42MjItMjIuMjctOTAuODM4LTIyLjI3LTQ3LjIxNiAwLTc5LjA1OSAyLjU3LTc5LjA1OSAxNi4zMzcgMCAxMy43NjggMzEuNzE5IDI2LjAxOCA3OC45MzUgMjYuMDE4eiIgZmlsbD0iIzYwNjM3QiIgb3BhY2l0eT0iLjIiIGZpbHRlcj0idXJsKCNhKSIgdHJhbnNmb3JtPSJzY2FsZSgtMSAxKSByb3RhdGUoLTIgNDguODU1IDY0OTcuNTQzKSIvPgogICAgPHBhdGggZmlsbD0iIzYwNjM3QiIgb3BhY2l0eT0iLjIiIGZpbHRlcj0idXJsKCNiKSIgZD0iTTE2MSAzMTNoMzJ2MTJoLTMyeiIgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMjE1IDIpIi8+CiAgICA8cGF0aCBkPSJNMTU4LjA5NSAyOTdoMjQuMTk1YzUuOTE1IDAgMTAuNzEtNC43OTUgMTAuNzEtMTAuNzF2LTQ3LjU4YzAtNS45MTUtNC43OTUtMTAuNzEtMTAuNzEtMTAuNzFoLTI0LjI3Yy40NDQtOS40NjQgOC4yNTctMTcgMTcuODMtMTdoMTYuM2M5Ljg1OCAwIDE3Ljg1IDcuOTkyIDE3Ljg1IDE3Ljg1djY2LjNjMCA5Ljg1OC03Ljk5MiAxNy44NS0xNy44NSAxNy44NWgtMTYuM2MtOS4yMzQgMC0xNi44My03LjAxMS0xNy43NTUtMTZ6bS0uMDk1LTEuODV2LTY2LjMgNjYuM3oiIGZpbGw9InVybCgjYykiIHRyYW5zZm9ybT0ibWF0cml4KC0xIDAgMCAxIDIxNSAyKSIvPgogICAgPHBhdGggZD0iTTE0LjIwMyAzMzYuOTc4bC0uNzk3LjAxOEwuOTQ2IDE4Ny40M2gxODMuMzM1TDE3MS4wMyAzMzIuMzZjLjI5Mi40NjguNDQyLjk0My40NDIgMS40MjRDMTcxLjQ3MiAzNDEuMTU5IDEzNi40OTkgMzUyIDkzIDM1MmMtNDEuNTkgMC03NS44NjgtNy44ODQtNzguNzk3LTE1LjAyMnoiIGZpbGw9InVybCgjZCkiIHRyYW5zZm9ybT0ibWF0cml4KC0xIDAgMCAxIDIxNSAyKSIvPgogICAgPHBhdGggZD0iTTY4LjEyIDMxOS4wNDNjMy42NjUuMzk1IDYuOTM3LTIuMTE0IDcuMzA3LTUuNjA2LjM3LTMuNDkzLTIuMzEyLTYuNTI4LTUuOTktNi43NzYtMy42NzgtLjI0Ni02Ljk1IDIuMjctNy4zMDcgNS42MTYtLjM1OCAzLjM0NCAyLjMyNCA2LjM3MyA1Ljk5IDYuNzY2em0yMS43MTctLjQ4MmMyLjA1LTIuNDQ0IDIuMTMyLTYuMDM5LjAxLTguNTI4LTIuNDI0LTIuODAyLTYuODAyLTMuMDk0LTkuNzcxLS43My0yLjk2NiAyLjMyLTMuMzk4IDYuNDA0LS45NzMgOS4yLjMuMzUuNjMuNjY0Ljk4NS45NDFsLTguNjY4IDYuNDUzIDMuNTA1IDQuMTQyIDE1LTExLjM3My0uMDg4LS4xMDV6IiBmaWxsPSIjMDAwIiBvcGFjaXR5PSIuMSIvPgogICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoLTEgMCAwIDEgMjE0LjA1MyAxNzcuODU2KSI+CiAgICAgIDxtYXNrIGlkPSJnIiBmaWxsPSIjZmZmIj4KICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNlIi8+CiAgICAgIDwvbWFzaz4KICAgICAgPGVsbGlwc2Ugc3Ryb2tlPSJ1cmwoI2YpIiBzdHJva2Utd2lkdGg9IjIuNjc4IiBjeD0iOTAuNzc3IiBjeT0iMTIuNDY0IiByeD0iOTIuMTE2IiByeT0iMTMuODAzIi8+CiAgICAgIDxwYXRoIGQ9Ik04OS44ODcgNDQuNTE0YzUwLjYyNyAwIDkxLjY2OC02Ljc3NiA5MS42NjgtMTUuMTM1cy00MS4wNDEtMTUuMTM1LTkxLjY2OC0xNS4xMzVDMzkuMjYxIDE0LjI0NC0xLjc4IDIxLjAyLTEuNzggMjkuMzhzNDEuMDQgMTUuMTM1IDkxLjY2NyAxNS4xMzV6IiBmaWxsPSIjNTcyQzJDIiBtYXNrPSJ1cmwoI2cpIi8+CiAgICAgIDxlbGxpcHNlIGZpbGw9IiM3NzU4NDEiIG9wYWNpdHk9Ii44IiBtYXNrPSJ1cmwoI2cpIiBjeD0iOTIuNTU3IiBjeT0iMzIuMDUiIHJ4PSI2Ny42MzgiIHJ5PSIxMi40NjQiLz4KICAgIDwvZz4KICAgIDxwYXRoIGQ9Ik00Ni4zMzUgMTg3LjE2Yy03LjEyLTEwLjA5LTguOS0yMC4xOC01LjM0LTMwLjI3IDUuMzQtMTUuMTM0IDI3LjU5LTUuMzQgMjcuNTktMzUuNjFzLTIyLjAzLTMwLjcwNC0yNy41OS0xNC4yNDRjLTMuNzA1IDEwLjk3My43NDUgMTUuNzIgMTMuMzUgMTQuMjQ0IiBzdHJva2U9InVybCgjaCkiIHN0cm9rZS13aWR0aD0iMi42NzgiIG9wYWNpdHk9Ii40IiB0cmFuc2Zvcm09Im1hdHJpeCgtMSAwIDAgMSAyMTUgMikiLz4KICAgIDxwYXRoIGQ9Ik0xMjEuMDkzIDIwMi4xNmMtNy4xMi0xNC4zODUtOC45LTI4Ljc3LTUuMzQtNDMuMTU2IDUuMzQtMjEuNTc4IDE4LjY5LTQxLjg4NyAxOC42OS04NS4wNDMiIHN0cm9rZT0idXJsKCNpKSIgc3Ryb2tlLXdpZHRoPSIzLjU3IiBvcGFjaXR5PSIuNCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMzLjQxNiAyKSIvPgogICAgPHBhdGggZD0iTTg0LjQ0IDE5OS42MjRjLTcuMTItMTkuNTgtOC45LTM5LjE2LTUuMzQtNTguNzQgNS4zNC0yOS4zNyAzOS4xODgtNDIuMDEzIDM5LjE4OC0xMDAuNzU0IDAtMzkuMTYtMTcuNDY1LTQ5LjY2LTUyLjM5Ni0zMS41LTguOTgyIDI5LS45OTggNDMuNSAyMy45NTMgNDMuNSIgc3Ryb2tlPSJ1cmwoI2opIiBzdHJva2Utd2lkdGg9IjMuNTciIG9wYWNpdHk9Ii40IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzNC4zODYgMikiLz4KICA8L2c+Cjwvc3ZnPg==" alt="cupoftea"/>
             </div>
             <div className="heading">
                 <h1>Hey,Hi There!</h1>
             </div>

            </div>
          <div className="lower">
              <div className="empty"></div>
              <div className="forms">
                  <h3>
                  One little form from you to us,<br></br>
could be one giant leap for mankind!<br></br>
You never know.
                  </h3>
                  <form className="form_section">
                <label name="name " for="n1" >Name</label><br></br>
                <input required type="text" id="n1" placeholder="Enter your Name"></input><br></br>
                <div className="mainwrap">

                <div className="wrap3">

<label name="name " for="n1" >Email</label><br></br>
<input required type="email" id="n1" placeholder="Enter your Email"></input><br></br>
</div>
<div className="wrap4">

<label name="name " for="n1" >Phone Number</label><br></br>
<input required type="number" id="n1" placeholder="Enter your Mobile Number"></input><br></br>
</div>
                </div>
                
                
                <label name="tell me">Can you tell us something about your project?</label><br></br>
                <textarea placeholder="A Good place to talk about your place" name="desc"></textarea>
                  <button onClick={submitforms} className="submit_form">I'm Done</button>
                  </form>
                  
              </div>
          </div>
          
        </div>
        
        </>
    )
}

export default Form;

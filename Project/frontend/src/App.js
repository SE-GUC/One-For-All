import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Homepage from './components/homepage'
import TaskList from './components/task-list'
import adminaccept from './components/admin-accept-task'
import adminreject from './components/admin-reject-task'
import DeleteTask from './components/delete-task'
import memberList from './components/member-list'
import CreateMember from './components/create-member'
import PartnerList from './components/partner-list'
import CreatePartner from './components/create-partner';
import Slots from './components/slots-list';
import PostSlots from './components/post-slot';

import LocationList from './components/locationList'
import updateLocation from './components/updateLocation'
import AppointmentList from './components/appointment-list'
import BookAppointment from './components/book-appointment'
import BookAppointmentlife from './components/lifecoach-booking'
import UpdateTask from './components/updatetask'
import addATT from './components/addATT'
import ScheduleList from './components/show-schedule'
import PostSchedule from './components/post-schedule'
import ApplyForTask from './components/Apply'
import certainTask from './components/certain-task'


import lifeCoach from './components/lifeCoach'
import CoachSchedule from './components/coachSchedule'
import CoachAppointment from './components/coachAppointment'
import CreateCoach from './components/create-coach'
import DeleteMember from './components/delete-member'
import UpdateMember from './components/updateMember'
import memberNotification from './components/memberNotification'
import CreateLocation from './components/createLocation'
import DeleteLocation from './components/deleteLocation'

import LifecoachNotification from './components/lifecoachNotification'
import updateCoach from './components/update-lifecoach'
import DeleteLifecoach from './components/delete-lifecoach'
import SearchTask from './components/search-task'
import viewTask from "./components/viewTask"
import DeletePartner from './components/delete-partner'
import updatePartner from './components/updatePartner'
import CreateTask from './components/create task'
import Createtask from './components/create task'
import SuggestLocation from './components/Map'

import Register from './components/register'
import AdminList from './components/admin-list'
import deleteadmin from "./components/delete-admin"
import updateadmin from "./components/update-admin"

import Candidates from './components/candidates'
import pickCandidate from './components/pickcandidate'
import searchedTask from "./components/searchedTask"
import Profile from './components/profile'

import logo from './logo.png'

class App extends Component {
  render() {
    if(localStorage.getItem('jwtToken')){
      if(localStorage.getItem('jwtToken').startsWith('A')){
        return (  
          <Router>
            <div className='container'>
    
            <nav className="navbar navbar-expand-lg navbar-light bg-light">

        <a className="navbar-brand"  target="_blank">
              <img src={logo} width="200" height="141" alt="CodingTheSmartWay.com" />
            </a>
              <div className="collpase nav-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                    <Link to="/profile" className="nav-link">Profile</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/tasks" className="nav-link">Tasks</Link>
                  </li>
                  <li className="navbar-item">
                  <Link to="/members" className="nav-link">Members</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/admins" className="nav-link">admins</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/partners" className="nav-link">Partners</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/lifecoach" className="nav-link">Life Coach</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/slots" className="nav-link">Slots</Link>
                </li>
              <li className="navbar-item">
                  <Link to="/locations" className="nav-link">Locations</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/appointments" className="nav-link">Appointments</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/schedules" className="nav-link">Schedules</Link>
                </li>
                  <li className="navbar-item">
                    <Link to="/" className="nav-link">Logout</Link>
                  </li>
                </ul>
              </div>
            </nav>
    
            <Route path='/' exact component={Homepage} />
            <Route path='/tasks' exact component={TaskList} />
            <Route path='/delete/:id' component={DeleteTask} />
            <Route path='/members' exact component={memberList} />
            <Route path='/members/createMember' exact component={CreateMember} />
            <Route path='/partners' exact component={PartnerList} />
            <Route path='/partners/createPartner' exact component={CreatePartner} />
            <Route path='/slots/:id' exact component={Slots} />
            <Route path='/post-slot/:id' exact component={PostSlots} />

            <Route path='/update/:id' component={UpdateTask} />
            <Route path='/addATT/:id' component={addATT} />
            <Route path='/locations' exact component={LocationList} />
            <Route path='/put/:id' component={updateLocation} />
            <Route path='/appointments' exact component={AppointmentList} />
            <Route path='/appointments/createAppointment' component={BookAppointment} />
            <Route path='/schedules' exact component={ScheduleList} />
            <Route path='/schedule/postSchedule' component={PostSchedule} />
            <Route path='/task/createTask' exact component={CreateTask} />
            <Route path='/admins' exact component={AdminList} />

            <Route path='/lifecoach' component={lifeCoach} />
            <Route path='/Coachschedule/:id' component={CoachSchedule} />
            <Route path='/Coachappointments/:id' component={CoachAppointment} />
            <Route path='/CreateCoach' component={CreateCoach} />
            <Route path='/members/delete/:id' component={DeleteMember} />
            <Route path='/members/update/:id' component={UpdateMember} />

            <Route path='/updateCoach/:id' component={updateCoach} />
            <Route path='/lifecoach/delete/:id' component={DeleteLifecoach} />
            <Route path='/lifecoach/delete/:id' component={DeleteLifecoach} />

            <Route path='/locations/CreateLocation' exact component={CreateLocation} />
            <Route path='/locations/delete/:id' component={DeleteLocation} />

            <Route path='/LifecoachNotification/:id' component={LifecoachNotification} />
            <Route path='/accepttask/:id' exact component={adminaccept} />
            <Route path='/rejecttask/:id' exact component={adminreject} />
            <Route path='/deleteadmin/:id' component={deleteadmin} />
            <Route path='/view' component={viewTask} />
          
            <Route path='/updateadmin/:id' component={updateadmin} />
            <Route path='/search/' component={SearchTask} />
            <Route path='/searched/:id' component={searchedTask} />

            <Route path='/partners/delete/:id' component={DeletePartner} />
            <Route path='/partners/put/:id' component={updatePartner} />
            <Route path='/partners/task/:id' component={CreateTask} />
            <Route path='/candidates/:id' component={Candidates} />
            <Route path='/pickcandidate/:mid/:id' component={pickCandidate} />
    
            <Route path='/partners/task/:id' component={Createtask} />
              <Route path='/locations/suggest/' component={SuggestLocation} />
              <Route path='/profile' component={Profile} />

            </div>
          </Router>
        )
      } else if(localStorage.getItem('jwtToken').startsWith('L')){
        return (  
          <Router>
            <div className='container'>
    
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
         
          <a className="navbar-brand"  target="_blank">
                <img src={logo} width="200" height="141" alt="CodingTheSmartWay.com" />
              </a>
              <div className="collpase nav-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                    <Link to="/profile" className="nav-link">Profile</Link>
                  </li>
                <li className="navbar-item">
                  <Link to="/lifecoach" className="nav-link">Life Coach</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/slots" className="nav-link">Slots</Link>
                </li>
              <li className="navbar-item">
                  <Link to="/locations" className="nav-link">Locations</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/appointments" className="nav-link">Appointments</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/schedules" className="nav-link">Schedules</Link>
                </li>
                  <li className="navbar-item">
                    <Link to="/" className="nav-link">Logout</Link>
                  </li>
                </ul>
              </div>
            </nav>
            <Route path='/' exact component={Homepage} />
            <Route path='/slots' exact component={Slots} />
            <Route path='/addATT/:id' component={addATT} />
            <Route path='/locations' exact component={LocationList} />
            <Route path='/put/:id' component={updateLocation} />
            <Route path='/appointments' exact component={AppointmentList} />
            <Route path='/appointments/createAppointment' component={BookAppointment} />
            <Route path='/schedules' exact component={ScheduleList} />
            <Route path='/schedule/postSchedule' component={PostSchedule} />
            <Route path='/lifecoach' component={lifeCoach} />
            <Route path='/Coachschedule/:id' component={CoachSchedule} />
            <Route path='/Coachappointments/:id' component={CoachAppointment} />
            <Route path='/CreateCoach' component={CreateCoach} />
            <Route path='/updateCoach/:id' component={updateCoach} />
            <Route path='/lifecoach/delete/:id' component={DeleteLifecoach} />
            <Route path='/locations/CreateLocation' exact component={CreateLocation} />
            <Route path='/locations/delete/:id' component={DeleteLocation} />
            <Route path='/LifecoachNotification/:id' component={LifecoachNotification} />
              <Route path='/locations/suggest/' component={SuggestLocation} />
              <Route path='/profile' component={Profile} />
   

            </div>
          </Router>
        )
      } else if(localStorage.getItem('jwtToken').startsWith('M')){
          return (  
            <Router>
              <div className='container'>
      
              <nav className="navbar navbar-expand-lg navbar-light bg-light">
           
            <a className="navbar-brand"  target="_blank">
                  <img src={logo} width="200" height="141" alt="CodingTheSmartWay.com" />
                </a>
                <div className="collpase nav-collapse">
                  <ul className="navbar-nav mr-auto">
                    <li className="navbar-item">
                      <Link to="/profile" className="nav-link">Profile</Link>
                    </li>

                    <li className="navbar-item">
                    <Link to="/tasks" className="nav-link">Tasks</Link>
                  </li>
                  <li className="navbar-item">
                  <Link to="/members" className="nav-link">Members</Link>
                </li>
                  <li className="navbar-item">
                    <Link to="/lifecoach" className="nav-link">Life Coaches</Link>
                  </li>

                  <li className="navbar-item">
                    <Link to="/appointments" className="nav-link">Appointments</Link>
                  </li>

                    <li className="navbar-item">
                      <Link to="/" className="nav-link">Logout</Link>
                    </li>
                  </ul>
                </div>
              </nav>
      
              <Route path='/' exact component={Homepage} />
              <Route path='/tasks' exact component={TaskList} />
              <Route path='/delete/:id' component={DeleteTask} />
              <Route path='/members' exact component={memberList} />
              <Route path='/members/createMember' exact component={CreateMember} />
              <Route path='/partners' exact component={PartnerList} />
              <Route path='/partners/createPartner' exact component={CreatePartner} />
              <Route path='/slots/:id' exact component={Slots} />
              <Route path='/post-slot/:id' exact component={PostSlots} />

              <Route path='/update/:id' component={UpdateTask} />
              <Route path='/addATT/:id' component={addATT} />
              <Route path='/locations' exact component={LocationList} />
              <Route path='/put/:id' component={updateLocation} />
              <Route path='/appointments' exact component={AppointmentList} />
              <Route path='/appointments/createAppointment/:id/:mid' component={BookAppointment} />
              <Route path='/schedules' exact component={ScheduleList} />
              <Route path='/schedule/postSchedule' component={PostSchedule} />
              <Route path='/task/createTask' exact component={CreateTask} />
              <Route path='/members/notification/:id' component={memberNotification} />


              <Route path='/lifecoach' component={lifeCoach} />
              <Route path='/Coachschedule/:id' component={CoachSchedule} />
              <Route path='/Coachappointments/:id' component={CoachAppointment} />
              <Route path='/CreateCoach' component={CreateCoach} />
              <Route path='/members/delete/:id' component={DeleteMember} />
              <Route path='/members/update/:id' component={UpdateMember} />
              <Route path='/updateCoach/:id' component={updateCoach} />
              <Route path='/lifecoach/delete/:id' component={DeleteLifecoach} />
              <Route path='/task/apply/:id/:mid' component={ApplyForTask} />

              <Route path='/locations/CreateLocation' exact component={CreateLocation} />
              <Route path='/locations/delete/:id' component={DeleteLocation} />

              <Route path='/LifecoachNotification/:id' component={LifecoachNotification} />
              <Route path='/accepttask/:id' exact component={adminaccept} />
              <Route path='/rejecttask/:id' exact component={adminreject} />
              <Route path='/view' component={viewTask} />
            
              <Route path='/search/' component={SearchTask} />
              <Route path='/searched/:id' component={searchedTask} />

              <Route path='/partners/delete/:id' component={DeletePartner} />
              <Route path='/partners/put/:id' component={updatePartner} />
              <Route path='/partners/task/:id' component={CreateTask} />
              <Route path='/candidates/:id' component={Candidates} />
              <Route path='/pickcandidate/:mid/:id' component={pickCandidate} />
      
              <Route path='/partners/task/:id' component={Createtask} />
                <Route path='/locations/suggest/' component={SuggestLocation} />
                <Route path='/profile' component={Profile} />

              </div>
            </Router>
          )
      }
      else if(localStorage.getItem('jwtToken').startsWith('P')){
        return (  
          <Router>
            <div className='container'>
    
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
         
          <a className="navbar-brand"  target="_blank">
                <img src={logo} width="200" height="141" alt="CodingTheSmartWay.com" />
              </a>
              <div className="collpase nav-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                    <Link to="/profile" className="nav-link">Profile</Link>
                  </li>
                  <li className="navbar-item">
                  <Link to="/partners" className="nav-link">Partners</Link>
                </li>
                  <li className="navbar-item">
                    <Link to="/tasks" className="nav-link">Tasks</Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/" className="nav-link">Logout</Link>
                  </li>
                </ul>
              </div>
            </nav>
    
            <Route path='/' exact component={Homepage} />
            <Route path='/tasks' exact component={TaskList} />
            <Route path='/delete/:id' component={DeleteTask} />
            <Route path='/members' exact component={memberList} />
            <Route path='/members/createMember' exact component={CreateMember} />
            <Route path='/partners' exact component={PartnerList} />
            <Route path='/partners/createPartner' exact component={CreatePartner} />
            <Route path='/slots/:id' exact component={Slots} />
            <Route path='/post-slot/:id' exact component={PostSlots} />

            <Route path='/update/:id' component={UpdateTask} />
            <Route path='/addATT/:id' component={addATT} />
            <Route path='/locations' exact component={LocationList} />
            <Route path='/put/:id' component={updateLocation} />
            <Route path='/appointments' exact component={AppointmentList} />
            <Route path='/appointments/createAppointment' component={BookAppointment} />
            <Route path='/schedules' exact component={ScheduleList} />
            <Route path='/schedule/postSchedule' component={PostSchedule} />
            <Route path='/task/createTask' exact component={CreateTask} />
            <Route path='/members/notification/:id' component={memberNotification} />


            <Route path='/lifecoach' component={lifeCoach} />
            <Route path='/Coachschedule/:id' component={CoachSchedule} />
            <Route path='/Coachappointments/:id' component={CoachAppointment} />
            <Route path='/CreateCoach' component={CreateCoach} />
            <Route path='/members/delete/:id' component={DeleteMember} />
            <Route path='/members/update/:id' component={UpdateMember} />
            <Route path='/updateCoach/:id' component={updateCoach} />
            <Route path='/lifecoach/delete/:id' component={DeleteLifecoach} />
            <Route path='/task/apply/:id/:mid' component={ApplyForTask} />

            <Route path='/locations/CreateLocation' exact component={CreateLocation} />
            <Route path='/locations/delete/:id' component={DeleteLocation} />

            <Route path='/LifecoachNotification/:id' component={LifecoachNotification} />
            <Route path='/accepttask/:id' exact component={adminaccept} />
            <Route path='/rejecttask/:id' exact component={adminreject} />
            <Route path='/view' component={viewTask} />
          
            <Route path='/search/' component={SearchTask} />
            <Route path='/searched/:id' component={searchedTask} />

            <Route path='/partners/delete/:id' component={DeletePartner} />
            <Route path='/partners/put/:id' component={updatePartner} />
            <Route path='/partners/certaintask/:id' component={certainTask} />

            
            <Route path='/candidates/:id' component={Candidates} />
            <Route path='/pickcandidate/:mid/:id' component={pickCandidate} />
    
            <Route path='/partners/task/:id' component={Createtask} />
              <Route path='/locations/suggest/' component={SuggestLocation} />
              <Route path='/profile' component={Profile} />

            </div>
          </Router>
        )
    }
      else if(localStorage.getItem('jwtToken').startsWith('L')){
        return (  
          <Router>
            <div className='container'>
    
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
         
          <a className="navbar-brand"  target="_blank">
                <img src={logo} width="200" height="141" alt="CodingTheSmartWay.com" />
              </a>
              <div className="collpase nav-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                    <Link to="/profile" className="nav-link">Profile</Link>
                  </li>

                <li className="navbar-item">
                  <Link to="/appointments" className="nav-link">My Appointments</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/schedules" className="nav-link">My Schedule</Link>
                </li>
                  <li className="navbar-item">
                    <Link to="/" className="nav-link">Logout</Link>
                  </li>
                </ul>
              </div>
            </nav>
    
            <Route path='/' exact component={Homepage} />
            <Route path='/tasks' exact component={TaskList} />
            <Route path='/delete/:id' component={DeleteTask} />
            <Route path='/members' exact component={memberList} />
            <Route path='/members/createMember' exact component={CreateMember} />
            <Route path='/partners' exact component={PartnerList} />
            <Route path='/partners/createPartner' exact component={CreatePartner} />
            <Route path='/slots/:id' exact component={Slots} />
            <Route path='/post-slot/:id' exact component={PostSlots} />

            <Route path='/update/:id' component={UpdateTask} />
            <Route path='/addATT/:id' component={addATT} />
            <Route path='/locations' exact component={LocationList} />
            <Route path='/put/:id' component={updateLocation} />
            <Route path='/appointments' exact component={AppointmentList} />
            <Route path='/appointments/createAppointmentlife/:id/:mid' component={BookAppointmentlife} />
            <Route path='/schedules' exact component={ScheduleList} />
            <Route path='/schedule/postSchedule' component={PostSchedule} />
            <Route path='/task/createTask' exact component={CreateTask} />

            <Route path='/lifecoach' component={lifeCoach} />
            <Route path='/Coachschedule/:id' component={CoachSchedule} />
            <Route path='/Coachappointments/:id' component={CoachAppointment} />
            <Route path='/CreateCoach' component={CreateCoach} />
            <Route path='/members/delete/:id' component={DeleteMember} />
            <Route path='/members/update/:id' component={UpdateMember} />
            <Route path='/updateCoach/:id' component={updateCoach} />
            <Route path='/lifecoach/delete/:id' component={DeleteLifecoach} />

            <Route path='/locations/CreateLocation' exact component={CreateLocation} />
            <Route path='/locations/delete/:id' component={DeleteLocation} />

            <Route path='/LifecoachNotification/:id' component={LifecoachNotification} />
            <Route path='/accepttask/:id' exact component={adminaccept} />
            <Route path='/rejecttask/:id' exact component={adminreject} />
            <Route path='/view' component={viewTask} />
          
            <Route path='/search/' component={SearchTask} />
            <Route path='/searched/:id' component={searchedTask} />

            <Route path='/partners/delete/:id' component={DeletePartner} />
            <Route path='/partners/put/:id' component={updatePartner} />
            <Route path='/partners/task/:id' component={CreateTask} />
            <Route path='/candidates/:id' component={Candidates} />
            <Route path='/pickcandidate/:mid/:id' component={pickCandidate} />
    
            <Route path='/partners/task/:id' component={Createtask} />
              <Route path='/locations/suggest/' component={SuggestLocation} />
              <Route path='/profile' component={Profile} />

            </div>
          </Router>
        )
      }
    }

    return (  
      <Router>
        <div className='container'>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand"  target="_blank">
              <img src={logo} width="200" height="141" alt="CodingTheSmartWay.com" />
            </a>
        </nav>

          <Route path='/' exact component={Homepage} />
          <Route path='/register' component={Register} />
          <Route path='/CreateCoach' component={CreateCoach} />
          <Route path='/members/createMember' exact component={CreateMember} />
          <Route path='/partners/createPartner' exact component={CreatePartner} />


        </div>
      </Router>
    )
  }
}

export default App;
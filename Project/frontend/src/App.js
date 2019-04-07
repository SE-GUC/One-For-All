import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Homepage from './components/homepage'
import TaskList from './components/task-list'
import DeleteTask from './components/delete-task'
import memberList from './components/member-list'
import CreateMember from './components/create-member'
import PartnerList from './components/partner-list'
import CreatePartner from './components/create-partner';
import Slots from './components/slots-list';
import Appointments from './components/appointment-list';
import LocationList from './components/locationList'
import updateLocation from './components/updateLocation'
import ScheduleList from './components/show-schedule'
import PostSchedule from './components/post-schedule'

class App extends Component {
  render() {
    return (  
      <Router>
        <div className='container'>

        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand">Litern-HUB</Link>
          <div className="collpase nav-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Homepage</Link>
              </li>
              <li className="navbar-item">
                <Link to="/tasks" className="nav-link">Tasks</Link>
              </li>
              <li className="navbar-item">
                <Link to="/members" className="nav-link">Members</Link>
              </li>
              <li className="navbar-item">
                <Link to="/partners" className="nav-link">Partners</Link>
              </li>
              <li className="navbar-item">
                <Link to="/slots" className="nav-link">Slots</Link>
              </li>
              <li className="navbar-item">
                <Link to="/appointments" className="nav-link">Appointments</Link>
              </li>
              <li className="navbar-item">
                <Link to="/locations" className="nav-link">Locations</Link>
              </li>
              <li className="navbar-item">
                <Link to="/schedules" className="nav-link">Schedule</Link>
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
          <Route path='/slots' exact component={Slots} />
          <Route path='/appointments' exact component={Appointments} />
          <Route path='/locations' exact component={LocationList} />
          <Route path='/put/:id' component={updateLocation} />
          <Route path='/schedules' exact component={ScheduleList} />
          <Route path='/schedule/postSchedule' component={PostSchedule} />

        </div>
      </Router>
    )
  }
}

export default App;

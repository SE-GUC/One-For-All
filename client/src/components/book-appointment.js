import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
export default class MemberBooking extends Component {
    constructor(props) {
        super(props)
    }
        render(){
            return(
                axios.post('/api/appointments/createAppointment/'+ this.props.match.params.id +'/'+localStorage.getItem('userid'))
                .then(response => {                })
                .catch(function (error) {
                    console.log(error);
                }),
                window.location.assign("/lifecoach")
            )
            }
        }
import React, {Component} from 'react'
import axios from 'axios'
export default class updateMember extends Component {
  
       constructor(props){
        super(props)
        this.onChangeName=this.onChangeName.bind(this);
        this.onChangeAge=this.onChangeAge.bind(this);
        this.onChangeSkills=this.onChangeSkills.bind(this);
        this.onChangeIntrests=this.onChangeIntrests.bind(this);
        this.onChangePastEvents=this.onChangePastEvents.bind(this);
        this.onChangeCompletedProjects=this.onChangeCompletedProjects.bind(this);
        this.onChangeReviews=this.onChangeReviews.bind(this);
        this.onChangeCertificates=this.onChangeCertificates.bind(this);
        this.onUpdate= this.onUpdate.bind(this);
        this.state ={

        }
    }
    onChangeName(e){
      this.setState({
        name:e.target.value
      });
    }
    onChangeAge(e){
      this.setState({
        age:e.target.value
      });
    }
    onChangeSkills(e){
      this.setState({
        skills:e.target.value
      });
    }
    onChangeIntrests(e){
      this.setState({
        intrests:e.target.value
      });
    }
    onChangePastEvents(e){
      this.setState({
        pastEvents:e.target.value
      });
    }
    onChangeCompletedProjects(e){
      this.setState({
        completedProjects:e.target.value
      });
    }
    onChangeReviews(e){
      this.setState({
        reviews:e.target.value
      });
    }
    onChangeCertificates(e){
      this.setState({
        certificates:e.target.value
      });
    }
    onUpdate(e){
      e.preventDefault();
      const upMember ={
        name: this.state.name,
        age:this.state.age,
        skills:this.state.skills,
        intrests:this.state.intrests,
        pastEvents:this.state.pastEvents,
        completedProjects:this.state.completedProjects,
        reviews:this.state.reviews,
        certificates:this.state.certificates
      } 
      axios.put('http://localhost:3001/api/members/update/'+window.location.href.match(/\/([^\/]+)\/?$/)[1],upMember).then(response =>response.data);
      
      this.setState({

      });
      alert("Member updated Successfully")
      window.location.assign("http://localhost:3000/profile");
    }
      
      render() {
          return (
           <div style={{marginTop: 20}}>
                <h3>Update your info</h3>
                <form onSubmit={this.onUpdate}>
                    <div className="form-group">
                        <label>Name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeName}
                                />
                    </div>
                    <div className="form-group">
                        <label>Age: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.age}
                                onChange={this.onChangeAge}
                                />
                    </div>
                    <div className="form-group">
                        <label>Skills: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.skills}
                                onChange={this.onChangeSkills}
                                />
                    </div>
                    <div className="form-group">
                        <label>Intrests: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.intrests}
                                onChange={this.onChangeIntrests}
                                />
                    </div>
                    <div className="form-group">
                        <label>Past Events: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.pastEvents}
                                onChange={this.onChangePastEvents}
                                />
                    </div>
                    <div className="form-group">
                        <label>Completed Projects: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.completedProjects}
                                onChange={this.onChangeCompletedProjects}
                                />
                    </div>
                    <div className="form-group">
                        <label>Reviews: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.reviews}
                                onChange={this.onChangeReviews}
                                />
                    </div>
                    <div className="form-group">
                        <label>Certificates: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.certificates}
                                onChange={this.onChangeCertificates}
                                />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Update Member" className="btn btn-primary" />
                    </div>
                </form>
            </div>
          );
      }
}
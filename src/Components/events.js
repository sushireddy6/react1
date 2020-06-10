import React, {Component} from 'react'

import axios from "axios";

class Event extends Component {
    constructor(props) {
        super(props);

        this.state = {
            patronID: "",
            celebrityPatronID: "",
            eventPic: "",
            evetServices: "",
            eventInterests: "",
            beneficiaryNGO: "",
            IntroductionText: "",
            InspirationText: "",
            CelebrityText: "",
            targetToServe: "",
            targetCurrency: "",
            targetToServeType: "",
            startDate: "",
            endDate: "",
            invitePatrons: "",
            publishSocialMedia: "",
            status: "Active"
           
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    patronIDHandler = (event) => {
        this.setState({
            patronID: event.target.value
        })
    };
    celebrityPatronIDHandler = (event) => {
        this.setState({
            celebrityPatronID: event.target.value
        })
    };
    eventPicHandler = (event) => {
        this.setState({
            eventPic: event.target.value
        })
    };
    eventServicesHandler = (event) => {
        this.setState({
            eventServices: event.target.value
        })
    };
    
    eventInterestsHandler = (event) => {
        this.setState({
            eventInterests: event.target.value
        })
    };
    beneficiaryNGOHandler = (event) => {
        this.setState({
            beneficiaryNGO: event.target.value
        })
    };
    startDateHandler = (event) => {
        this.setState({
            startDate: event.target.value
        })
    };
    endDateHandler = (event) => {
        this.setState({
            endDate: event.target.value
        })
    };
    targetToServeHandler = (event) => {
        this.setState({
            targetToServe: event.target.value
        })
    };
    statusHandler = (event) => {
        this.setState({
            status: event.target.value
        })
    };

    handleSubmit = (event) => {
    
        this.addNewEvent();
        event.preventDefault()
       
    };

    addNewEvent = () => {
        axios.post('http://localhost:8080/api/events',
                {
                    patronID: this.state.PatronID,
                    celebrityPatronID: this.state.celebrityPatronID,
                    eventPic: this.state.eventPic,
                    eventServices : this.state.evetServices,
                    eventInterests: this.state.eventInterests,
                    beneficiaryNGO: this.state.beneficiaryNGO,
                    startDate: this.state.startDate,
                    endDate: this.state.endDate,
                    targetToServe: this.state.targetToServe,
                    status: "Active",
                    
                })
            .then(response => {
                console.log(response);
                alert(`${this.state.patronID}   Registered Successfully !!!!`)
                
            })
            .catch(error => {
                console.log(error);
            });
    };

    getEventDetails = () => {
        axios.get('http://localhost:8080/api/events')
            .then(response => {
                console.log(response.data);
                this.setState({eventsData: response.data})

            })
            .catch(error => {
                console.log(error);
            });
    };

    getEvent = (eventId) => {
        axios.get('http://localhost:8080/api/events/' + eventId)
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    render() {
        return (
            <div className="background bold">
                <center>
                <form onSubmit={this.handleSubmit}>
                    <h1 className="color">Event Registration</h1><br/>
                    <label className="marginfirst">patronID :</label>< input type="text" value={this.state.patronID} onChange={this.patronIDHandler}/><br/><br/>
                    <label className="marginmiddle">celebrityPatronID :</label> <input type="text" value={this.state.celebrityPatronID} onChange={this.celebrityPatronIDHandler} /><br/><br/>
                    <label>eventPic :</label> <input type="text" value={this.state.eventPic} onChange={this.eventPicHandler} /><br/><br/>
                    <label className="marginorigin">eventServices : </label> <input type="text" value={this.state.eventServices} onChange={this.eventServicesHandler} /><br/><br/>
                    <label className="marginemail">eventInterests :</label> <input type="email" value={this.state.eventInterests} onChange={this.eventInterestsHandler} /><br/><br/>
                    {/* should be used react-phone-number-input for below*/}
                    <label className="marginphone">beneficiaryNGO :</label> <input type="text" value={this.state.beneficiaryNGO}  onChange={this.beneficiaryNGOHandler} /><br/><br/>
                    <label>startDate :</label> <input type="text" value={this.state.startDate} onChange={this.startDateHandler}/><br/><br/>
                    <label>endDate :</label> <input type="text" value={this.state.endDate} onChange={this.endDateHandler}/><br/><br/>
                    <label>targetToServe :</label> <input type="text" value={this.state.targetToServe} onChange={this.targetToServeHandler}/><br/><br/>
                    <input type="submit" value="Submit"/>
                 
                </form>
                </center>
            </div>
        )
    }
}

export default Event
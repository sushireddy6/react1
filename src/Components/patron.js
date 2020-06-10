import React, {Component} from 'react'

import axios from "axios";

class Patron extends Component {
    constructor(props) {
        super(props);

        this.state = {
            patronName: "",
            firstName: "",
            middleName: "",
            lastName: "",
            dob: "",
            gender: "",
            origination: "",
            emailId: "",
            phone: "",
            password: "",
            verifiedEmail: "Waiting - Confirmation",
            verifiedPhone: "Yes - OTP",
            verifiedCaptcha: "Yes"
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    firstHandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    };
    middleHandler = (event) => {
        this.setState({
            middleName: event.target.value
        })
    };
    lastHandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    };
    dobHandler = (event) => {
        this.setState({
            dob: event.target.value
        })
    };
    genderHandler = (event) => {
        this.setState({
            gender: event.target.value
        })
    };
    originationHandler = (event) => {
        this.setState({
            origination: event.target.value
        })
    };
    emailIdHandler = (event) => {
        this.setState({
            emailId: event.target.value
        })
    };
    phoneHandler = (event) => {
        this.setState({
            phone: event.target.value
        })
    };
    passwordHandler = (event) => {
        this.setState({
            password: event.target.value
        })
    };
    verifiedEmailHandler = (event) => {
        this.setState({
            verifiedEmail: event.target.value
        })
    };
    verifiedPhoneHandler = (event) => {
        this.setState({
            verifiedPhone: event.target.value
        })
    };
    verifiedCaptchaHandler = (event) => {
        this.setState({
            verifiedCaptcha: event.target.value
        })
    };

    handleSubmit = (event) => {
    
        this.addNewPatron();
        event.preventDefault()
       
    };

    addNewPatron = () => {
        axios.post('http://localhost:8080/api/patrons',
                {
                    firstName: this.state.firstName,
                    middleName: this.state.middleName,
                    lastName: this.state.lastName,
                    dob: this.state.dob,
                    gender: this.state.gender,
                    origination: this.state.origination,
                    emailId: this.state.emailId,
                    phone: this.state.phone,
                    password: this.state.password,
                    verifiedEmail: "Waiting - Confirmation",
                    verifiedPhone: "Yes - OTP",
                    verifiedCaptcha: "Yes"
                })
            .then(response => {
                console.log(response);
                alert(`${this.state.firstName} ${this.state.lastName}  Registered Successfully !!!!`)
                
            })
            .catch(error => {
                console.log(error);
            });
    };

    getPatronsDetails = () => {
        axios.get('http://localhost:8080/api/patrons')
            .then(response => {
                console.log(response.data);
                this.setState({patronsData: response.data})

            })
            .catch(error => {
                console.log(error);
            });
    };

    getPatron = (patronId) => {
        axios.get('http://localhost:8080/api/patrons/' + patronId)
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
                    <h1 className="color">Patron Registration</h1><br/>
                    <label className="marginfirst">FirstName :</label>< input type="text" value={this.state.firstName} onChange={this.firstHandler} placeholder="FirstName..."/><br/><br/>
                    <label className="marginmiddle">MiddleName :</label> <input type="text" value={this.state.middleName} onChange={this.middleHandler}placeholder="middleName..." /><br/><br/>
                    <label>LastName :</label> <input type="text" value={this.state.lastName} onChange={this.lastHandler} placeholder="LastName..."/><br/><br/>
                    <label className="margindob">DOB : </label> <input type="date" value={this.state.dob} onChange={this.dobHandler}/> <br/><br/>
                    <label className="margingender">Gender :</label><select onChange={this.genderHandler} defaultValue="Select Gender">
                        <option defaultValue>Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select><br/><br/>
                    <label className="marginorigin">Origination : </label> <input type="text" value={this.state.origination} onChange={this.originationHandler} /><br/><br/>
                    <label className="marginemail">Email Id :</label> <input type="email" value={this.state.emailId} aria-describedby="emailHelp" onChange={this.emailIdHandler} /><br/><br/>
                    {/* should be used react-phone-number-input for below*/}
                    <label className="marginphone">Phone Number :</label> <input type="text" value={this.state.phone}  onChange={this.phoneHandler} /><br/><br/>
                    <label>Password :</label> <input type="password" value={this.state.password} onChange={this.passwordHandler} placeholder="Password..."/><br/><br/>

                    <input type="submit" value="Submit"/>
                 
                </form>
                </center>
            </div>
        )
    }
}

export default Patron
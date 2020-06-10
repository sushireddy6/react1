import React, {Component} from 'react'

import axios from "axios";

class Ngo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            NGOName: "",
            address1: "",
            address2: "",
            city: "",
            state: "",
            country: "",
            founderFirstName: "",
            founderMiddleName: "",
            founderFirstNameLastName:"",
            dob:"",
            gender:"",
            doincorporation:"",
            NGOGovtId:"",
            taxRebateToDonor:"",
            taxRebateGovtId:"",
            origination:"",
            emailid:"",
            phone: "",
            password: "",
            verifiedEmail: "Waiting - Confirmation",
            verifiedPhone: "Yes - OTP",
            verifiedCaptcha: "Yes"
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    NGONameHandler = (event) => {
        this.setState({
            NGOName: event.target.value
        })
    };
    address1Handler = (event) => {
        this.setState({
            address1: event.target.value
        })
    };
    address2Handler = (event) => {
        this.setState({
            address2: event.target.value
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
            emailid: event.target.value
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
    
        this.addNewNgo();
        event.preventDefault()
       
    };

    addNewNgo = () => {
        axios.post('http://localhost:8080/api/ngo',
                {
                    NGOName: this.state.NGOName,
                    address1: this.state.address1,
                    address2: this.state.address2,
                    dob: this.state.dob,
                    gender: this.state.gender,
                    origination: this.state.origination,
                    emailid: this.state.emailid,
                    phone: this.state.phone,
                    password: this.state.password,
                    verifiedEmail: "Waiting - Confirmation",
                    verifiedPhone: "Yes - OTP",
                    verifiedCaptcha: "Yes"
                })
            .then(response => {
                console.log(response);
                alert(`${this.state.NGOName}   Registered Successfully !!!!`)
                
            })
            .catch(error => {
                console.log(error);
            });
    };

    getNgoDetails = () => {
        axios.get('http://localhost:8080/api/ngo')
            .then(response => {
                console.log(response.data);
                this.setState({ngoData: response.data})

            })
            .catch(error => {
                console.log(error);
            });
    };

    getNgo = (ngoId) => {
        axios.get('http://localhost:8080/api/ngo/' + ngoId)
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
                    <h1 className="color">NGO Registration</h1><br/>
                    <label className="marginfirst">NGOName :</label>< input type="text" value={this.state.NGOName} onChange={this.NGONameHandler}></input><br/><br/>
                    <label className="marginmiddle">address1 :</label> <input type="text" value={this.state.address1} onChange={this.address1Handler}/><br/><br/>
                    <label>address2:</label> <input type="text" value={this.state.address2} onChange={this.address2Handler} /><br/><br/>
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

export default Ngo
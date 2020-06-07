import React, { Component } from 'react';
import styled from 'styled-components';

import './App.css';
import Person from './Person/Person';
import Patron from './Patron/patron';
import axios from 'axios';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
    color: black;
  }
`;

class App extends Component {
  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    patronsData : [
      {
          _id: "5ed75e9fe4842e1874422c88",
          create_date: "2020-06-03T08:26:07.493Z",
          firstName: "test1",
          middleName: "test2",
          lastName: "test3",
          gender: "M",
          phone: "0980880980980",
          __v: 0
      }
  ],
    showPatrons: false
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };
  togglePatronsHandler = () =>{
    const doesShow = this.state.showPatrons;
    this.setState({showPatrons: !doesShow});
  };


  getPatronsDetails = () => {
    axios.get('http://localhost:8080/api/patrons')
    .then(response=>{
      console.log(response.data);
      this.setState({patronsData:response.data})

    })
    .catch(error=>{
      console.log(error);
    });
  }
  
  getPatron = (patronId) => {
    axios.get('http://localhost:8080/api/patrons/'+ patronId)
    .then(response=>{
      console.log(response.data);
    })
    .catch(error=>{
      console.log(error);
    });
  }


  componentDidMount=()=>{
    this.getPatronsDetails();
    this.getPatron('5ed75e9fe4842e1874422c88');
  }


  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;
    let patrons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => 
            {
              return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={event => this.nameChangedHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

    if(this.state.showPatrons){
      patrons = (
        <div>
          {
            this.state.patronsData.map((patron,index)=>
            {
              return(
                <Patron 
                id = {patron._id}
                name = {patron.firstName+patron.middleName+patron.lastName}
                />
              );
            })
          }
        </div>
      )
    };

      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // };
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red'); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold'); // classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is really working!</p>
        <StyledButton alt={this.state.showPatrons} onClick={this.togglePatronsHandler}>
          Toggle Patrons
        </StyledButton>
        {patrons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;

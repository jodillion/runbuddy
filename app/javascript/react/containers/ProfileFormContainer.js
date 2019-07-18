import React, { Component } from 'react';
import ProfileTextField from '../components/ProfileTextField';

class ProfileFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      age: "",
      gender: "",
      zipcode: "",
      errors: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClearForm = this.handleClearForm.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.validateFirstNameChange = this.validateFirstNameChange.bind(this)
    this.validateAgeChange = this.validateAgeChange.bind(this)
    this.validateGenderChange = this.validateGenderChange.bind(this)
    this.validateZipcodeChange = this.validateZipcodeChange.bind(this)
  }

  handleClearForm() {
    this.setState({
      first_name: "",
      age: "",
      gender: "",
      zipcode: ""
    })
  }

  validateFirstNameChange(input) {
    if(input.trim() === '') {
      let newError = { first_name: "You must enter your first name." }
      this.setState({ errors: Object.assign({}, this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.inputError
      this.setState({ errors: errorState })
      return true
    }
  }

  validateAgeChange(input) {
    if(input.trim() === '') {
      let newError = { age: "You must enter your age name." }
      this.setState({ errors: Object.assign({}, this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.inputError
      this.setState({ errors: errorState })
      return true
    }
  }

  validateGenderChange(input) {
    if(input.trim() === '') {
      let newError = { gender: "You must enter your gender." }
      this.setState({ errors: Object.assign({}, this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.inputError
      this.setState({ errors: errorState })
      return true
    }
  }

  validateZipcodeChange(input) {
    if(input.trim() === '') {
      let newError = { zipcode: "You must enter your zipcode." }
      this.setState({ errors: Object.assign({}, this.state.errors, newError) })
      return false
    } else {
      let errorState = this.state.errors
      delete errorState.inputError
      this.setState({ errors: errorState })
      return true
    }
  }

  handleChange(event) {
    let value = event.target.value
    let name = event.target.name
    this.setState({ [name]: value })
  }

  handleFormSubmit(event) {
    event.preventDefault();
    if(
      this.validateFirstNameChange(this.state.first_name) &&
      this.validateAgeChange(this.state.age) &&
      this.validateGenderChange(this.state.gender) &&
      this.validateZipcodeChange(this.state.zipcode)
    ) {
      let newProfileObject = {
        first_name: this.state.first_name,
        age: this.state.age,
        gender: this.state.gender,
        zipcode: this.state.zipcode
      }
      fetch('/api/v1/profiles', {
        credentials: 'same-origin',
        method: 'POST',
        body: JSON.stringify(newProfileObject),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw(error)
        }
      })
      .then((responseBody) => {
        this.props.history.push(`/profiles/${responseBody.profile.id}`)
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }
  }

  render(){
    let errorDiv;
    let errorItems;

    if (Object.keys(this.state.errors).length > 0) {
      errorItems = Object.values(this.state.errors).map((error) => {
        return(<li key={error}>{error}</li>)
      })
      errorDiv = <div className="callout alert">{errorItems}</div>
    }

    return(
      <div>
        <h1>Create Your Profile</h1>
        <form onSubmit={this.handleFormSubmit}>
          {errorDiv}
          <ProfileTextField
            label="First Name"
            name="first_name"
            value={this.state.first_name}
            handleChange={this.handleChange}
          />

          <ProfileTextField
            label="Age"
            name="age"
            value={this.state.age}
            handleChange={this.handleChange}
          />

          <ProfileTextField
            label="Gender"
            name="gender"
            value={this.state.gender}
            handleChange={this.handleChange}
          />

          <ProfileTextField
            label="Zip Code"
            name="zipcode"
            value={this.state.zipcode}
            handleChange={this.handleChange}
          />

          <input className="button" type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default ProfileFormContainer

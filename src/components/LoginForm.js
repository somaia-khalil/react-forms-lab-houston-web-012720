import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleChange = event => {
    let name = event.target.name
    let value = event.target.value
    this.setState({
      [name]: value
    })
  }

  submitForm = event => {
    event.preventDefault()
    if (this.state.username != "" && this.state.password != "")
      this.props.handleLogin(this.state)
    else
      console.log("invalid submit")
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        <div>
          <label>
            Username
            <input id="username" onChange={this.handleChange} name="username" type="text" value={this.state.username}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" onChange={this.handleChange} name="password" type="password" value={this.state.password}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;

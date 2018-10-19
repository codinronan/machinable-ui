import React, { Component } from 'react';
import {Button, Card, Modal, Input} from 'turtle-ui';
import Logo from '../../components/Logo';


class Register extends Component {

	constructor(props) {
	    super(props);
		this.state = {
		  email: "",
		  password: "",
		  password_confirm: "",
		  errors: [],
		  isOpen: false,
		  loading: false
		}
  	}

 	handleResponse = (response) => {
		// const history = this.props.history;
		// API.setData(response.data, function(){
		//   history.push('/sites');
		// });
	}

	handleError = (err) => {
		// var error = 'Issue registering, please try again.'
		// this.setState({
		//     loading: false,
		//     errors: [error]
		//   });
	}

  	onChange = (event) => {
	    // const target = event.target;
	    // const value = target.type === 'checkbox' ? target.checked : target.value;
	    // const name = target.name;

	    // this.setState({
	    // 	[name]: value
	    // });
  	}

  	onSubmit = (event) => {
    	// event.preventDefault();
    	// var errors = [];

	    // if(!this.state.email) {
	    //   errors.push('Invalid email');
	    // }

	    // if(!this.state.password) {
	    //   errors.push('Invalid password');
	    // }

	    // if(this.state.password !== this.state.password_confirm) {
	    //   errors.push('Passwords must match');
	    // }

	    // this.setState({
	    //   errors: errors
	    // });

	    // var arr = errors.map(function(k) { return k });

	    // if(arr.join('').length === 0) {

	    //   this.setState({
	    //     loading: true
	    //   });

	    //   API.register(
	    //     this.state.email, 
	    //     this.state.name, 
	    //     this.state.password)
	    //     .then(this.handleResponse)
	    //     .catch(this.handleError);
	    // }
  	}

  	Login = () => {
        this.props.history.push('/login');
  	}

  	componentDidMount = () => {

  	}

	render() {

		return (
            <div className="grid grid-8">
                <div className="project-hover col-2-8">
                    <form onSubmit={this.onSubmit}>
                        <Card
                            classes="footer-plain"
                            footer={
                                <div className="grid grid-2">
                                    <div className="col-2 col-right">
                                        <Button classes="plain text" onClick={this.Login}>Login</Button>	
                                        <Button classes="accent margin-left" type="submit" loading={this.state.loading}>Register</Button>	
                                    </div>
                                </div>
                            }>
                            <br/>
                            <h2 className="text-center">Register</h2>

                            { this.state.errors.length > 0 &&
                                <Card
                                    classes="danger margin-bottom-more">
                                    <div className="text-danger">
                                        {this.state.errors.map(function(error){
                                            return (<div className="text-400">{error}</div>)
                                        })}
                                    </div>
                                </Card>
                            }

                            <div>
                                <Input placeholder="email address" label="Email" name="email" value={this.state.email} onChange={this.onChange}/>
                            </div>
                            
                            <div className="margin-top-more">
                                <Input placeholder="password" type="password" label="Password" name="password" value={this.state.password} onChange={this.onChange}/>
                            </div>

                            <div className="margin-top-more">
                                <Input placeholder="confirm password" type="password" label="Confirm Password" name="password_confirm" value={this.state.password_confirm} onChange={this.onChange}/>
                            </div>
                        </Card>
                    </form>
                </div>
            </div>
		  );
	}
}

export default Register;
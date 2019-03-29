import React, { Component } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

class Register extends Component{
    constructor(props){
        super(props);

        this.state = {
            first_name:'',
            last_name:'',
            email: '', 
            password: '',
            first_name_error:false,
            last_name_error:false,
            email_error:false,
            password_error:false,
        }
    }

    onChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    onSubmit = (e)=>{
        e.preventDefault();
        
        let error = false;

        if (this.state.first_name === '') {
        this.setState({first_name_error: true})
        error = true
        } else {
        this.setState({first_name_error: false})
        error = false
        }

        if (this.state.last_name === '') {
        this.setState({last_name_error: true})
        error = true
        } else {
        this.setState({last_name_error: false})
        error = false
        }

        if (this.state.email === '') {
            this.setState({email_error: true})
            error = true
        } else {
            this.setState({email_error: false})
            error = false
        }

        if (this.state.password === '') {
            this.setState({password_error: true})
            error = true
        } else {
            this.setState({password_error: false})
            error = false
        } 
  
        if(error === false){
            Axios.post('/users/register', {
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
                password: this.state.password,
            }).then(res=>{
                console.log('res', res)
                if(res.data.error){
                    alert('you cant login '+res.data.error)
                }else{
                    this.props.history.push('/login')
                    return res.data
                }
            })
        }
    }

    render(){
        var {first_name_error} = this.state
        var {last_name_error} = this.state
        var {email_error} = this.state
        var {password_error} = this.state
        return(
            <div className="ui container">
                <div className="ui grid">
                    <div className="four wide column"></div>
                    <div className="eight wide column">
                        <div className="ui segment">
                            <h1 className="login_register">Create a trello account</h1>
                            <p>Or <Link to="/login" >sign in to your account</Link></p>
                            <form className="ui large form" onSubmit={this.onSubmit}>
                                <div className={first_name_error?"field error required":"field required"}>
                                    <label>First Name</label>
                                    <input type="text" name="first_name" value={this.state.first_name} onChange={this.onChange}/>
                                    {first_name_error?<p className='errorList'>this filed is required</p>:""}
                                </div>
                                <div className={last_name_error?"field error required":"field required"}>
                                    <label>Last Name</label>
                                    <input type="text" name="last_name" value={this.state.last_name} onChange={this.onChange}/>
                                    {last_name_error?<p className='errorList'>this filed is required</p>:""}
                                </div>
                                <div className={email_error?"field error required":"field required"}>
                                    <label>Email</label>
                                    <input type="email" name="email" value={this.state.email} onChange={this.onChange} />
                                    {email_error?<p className='errorList'>this filed is required</p>:""}                                
                                </div>
                                <div className={password_error?"field error required":"field required"}>
                                    <label>Password</label>
                                    <input type="password" name="password" value={this.state.password} onChange={this.onChange} />
                                    {password_error?<p className='errorList'>this filed is required</p>:""}                                
                                </div>
                                <div className="field">
                                    <button className="ui large fluid blue button">sign in</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="four wide column"></div>
                </div>
            </div>
        )
    }
}
export default Register
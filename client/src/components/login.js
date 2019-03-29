import React, { Component } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom/cjs/react-router-dom';

class Login extends Component{
    constructor(props){
        super(props);

        this.state = {
            email: '', 
            password: '',
            email_error:false,
            password_error:false,
            is_found:false,
            is_found_val:""
        }
    }

    onChange = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e)=>{
        e.preventDefault();
        this.setState({
            is_found:false,
            is_found_val:''
        })
       let error = false;

        if(this.state.email === ""){
           this.setState({email_error:true})
           error = true
        }else{
            this.setState({email_error: false})
            error = false
        }

        if(this.state.password === ""){
            this.setState({password_error:true})
            error = true
        }else{
             this.setState({password_error: false})
             error = false
        }

        if(!error){
            Axios.post('/users/login', {
                email: this.state.email,
                password: this.state.password
        
            }).then(res=>{
                console.log('res', res)
                if(res.data.error){
                    // alert('you cant login '+res.data.error)
                    this.setState({
                        is_found:true,
                        is_found_val:res.data.error
                    })
                   
                }else{
                    localStorage.setItem('usertoken', res.data)
                    this.props.history.push('/profiles')
                    return res.data
                }
            })
            this.setState({
                password:'',
               
            })
        }
    }

    render(){
        var {email_error} = this.state
        var {password_error} = this.state
        var {is_found} = this.state
        var {is_found_val} = this.state
        return(
            <div className="ui container">
                <div className="ui grid">
                    <div className="four wide column"></div>
                    <div className="eight wide column" style={{ "marginTop":"50px"}}>
                        <div className="ui segment">
                            <h1 className="login_register">Login to Trello</h1>
                            <p>Or <Link to="/register">create an account</Link> </p>
                            <form className="ui large form" onSubmit={this.onSubmit}>
                                <div className={email_error?"field required error":"field required"}>
                                    <label>Username or Email</label>
                                    <input autoComplete="off" type="email" name="email" value={this.state.value} onChange={this.onChange} />
                                    {email_error?<p className='errorList'>this filed is required</p>:""}
                                </div>
                                <div className={password_error?"field required error":"field required"}>
                                    <label>Password</label>
                                    <input type="password" name="password" value={this.state.password} onChange={this.onChange} />
                                    {password_error?<p className='errorList'>this filed is required</p>:""}
                                </div>
                                <div className="field">
                                    <button className="ui large blue fluid button">sign in</button>
                                </div>
                            </form>
                            {is_found?<p className='errorList'>{is_found_val}</p>:""}
                        </div>
                    </div>
                    <div className="four wide column"></div>
                </div>
            </div>
        )
    }
}

export default Login
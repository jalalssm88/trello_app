import React, { Component } from 'react'
import Axios from 'axios';

export default class Createteam extends Component {
    constructor(props){
        super(props);
        this.state = {
            team:'',
        }
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log('team nameeeee', this.state)
        Axios({
            method: 'post',
            url: '/teams',
            data: this.state
        })
        .then( (res)=> {
            console.log(res);
        })
        .catch( (error)=> {
            console.log(error);
        });
            window.location.pathname = '/profiles';

        this.setState({
            team:'',
        })
    }

    render() {
        return (
            <div className="ui container">
                <div className="ui grid stackable">
                    <div className="eight wide column">
                        <h2>Create Team</h2>
                        <form onSubmit={this.submitHandler}>
                            <div className="ui form">
                                <div className="field">
                                    <label>Board Name</label>
                                    <input type="text" name="team" value={this.state.team} onChange={this.changeHandler}/>
                                </div>
                                <div className="field">
                                    <button className="ui blue labeled fluid icon button"><i className="plus icon"></i>create</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

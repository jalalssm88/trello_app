import React, { Component } from 'react'
import Axios from 'axios';
import {Link} from 'react-router-dom'

export default class Teamboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            team:'',
            category:'',
            // teamOptions: []
        }
    }

    // componentDidMount(){
    //     Axios.get('/teams').then(res=>{
    //         console.log('console from create team view', res)
    //         this.setState({
    //             teamOptions:res.data
    //         })
    //     })
    // }

    changeHandler = (e) => {
        // this.setState({
        //     [e.target.name]:e.target.value
        // })
    }

    submitHandler = (e) => {
        e.preventDefault();
        // Axios({
        //     method: 'post',
        //     url: '/boards',
        //     data: this.state
        // })
        // .then( (res)=> {
        //     console.log(res);
        // })
        // .catch( (error)=> {
        //     console.log(error);
        // });
        //     window.location.pathname = '/';

        // this.setState({
        //     name:'',
        //     team:'',
        //     category:''
        // })
    }

    render() {
        console.log('teamoptions', this.state.teamOptions)
        var option_team = this.state.teamOptions;
        return (
            <div className="ui container">
                <div className="ui grid stackable">
                    <div className="eight wide column">
                        <h2>Create Board</h2>
                        <form onSubmit={this.submitHandler}>
                            <div className="ui form">
                                <div className="field">
                                    <label>Board Name</label>
                                    <input type="text" name="name" value={this.state.name} onChange={this.changeHandler}/>
                                </div>
                                <div className="field">
                                    <label>Select Team</label>
                                    <select name="team" value={this.state.team} onChange={this.changeHandler} >
                                        <option>select team</option>
                                        {
                                           option_team.length == 0 ? console.log('team lod'):
                                           option_team.map(item=>(
                                                <option key={item._id} value={item.team}>{item.team}</option>
                                            )) 
                                        }
                                    </select>
                                </div>
                                <div className="field">
                                    <label>Select Category</label>
                                    <select name="category" value={this.state.category} onChange={this.changeHandler} >
                                        <option>select category</option>
                                        <option value='private'>private</option>
                                        <option value='public'>public</option>
                                    </select>
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

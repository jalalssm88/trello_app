import React, { Component } from 'react'
import Axios from 'axios';

export default class Createboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            team:'',
            category:'',
            teamOptions: [],
            board_color:'',
            color_chose_status:false

        }
    }
    getColor = (e) =>{
        // e.preventDefault();
        console.log('eeeee', e)
        this.setState({
            board_color:e,
            color_chose_status:true
        })
    }
    componentDidMount(){
        Axios.get('/teams').then(res=>{
            console.log('console from create team view', res)
            this.setState({
                teamOptions:res.data
            })
        })
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log('stadfsf', this.state)
        Axios({
            method: 'post',
            url: '/boards',
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
            name:'',
            team:'',
            category:''
        })
    }

    render() {
        console.log('teamoptions', this.state.teamOptions)
        var option_team = this.state.teamOptions;
        var {color_chose_status} = this.state
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
                                           option_team.length === 0 ? console.log('team lod'):
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
                    <div className="eight wide column">
                            <h1>Choose color for board</h1>
                        <div className="ui segment">
                            <div className="ui three column grid">
                                <div className="column">
                                    <div style={{'background':'#FF0000'}} className="board_colors" onClick={this.getColor.bind(this,'#FF0000') }> red </div>
                                </div>
                                <div className="column">
                                    <div style={{'background':'#008000'}} className="board_colors" onClick={this.getColor.bind(this, '#008000')} > green </div>
                                </div>
                                <div className="column">
                                    <div style={{'background':'#0000FF'}} className="board_colors" onClick={this.getColor.bind(this, '#0000FF')}> blue </div>
                                </div>
                                <div className="column">
                                    <div style={{'background':'#00FFFF'}} className="board_colors" onClick={this.getColor.bind(this, '#00FFFF')}> cyan </div>
                                </div>
                                <div className="column">
                                    <div style={{'background':'#800080'}} className="board_colors" onClick={this.getColor.bind(this, '#800080')}> purple </div>
                                </div>
                                <div className="column">
                                    <div style={{'background':'#FF00FF'}} className="board_colors" onClick={this.getColor.bind(this, '#FF00FF')}> Magenta </div>
                                </div>
                            </div>
                            <div className="colorss" style={{'background':this.state.board_color,'height':'50px'}}>selected</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

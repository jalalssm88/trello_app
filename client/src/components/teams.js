import React, { Component } from 'react'
import Axios from "axios"
import { Link } from 'react-router-dom';

export default class Team extends Component {
    constructor(props){
        super(props)
        this.state = {
            team_detail:[] 
        }
    }
    componentDidMount(){
        console.log('view team detail', this.props.location.state)
        const current_id = this.props.location.state.team_id
        Axios.get(`/teams/${current_id}`).then(res=>{
            console.log('resssss of single teammm------', res.data.doc)
            this.setState({
                team_detail:res.data.doc
            })
        })
    }
    render() {
      console.log('team detail state ===========', this.state.team_detail)
      var team_view = this.state.team_detail;
        return (
            <div className="ui container">
                {
                    team_view.length === 0 || team_view === ''?<div className="ui loader active menu_loader"></div>:
                    <div key={team_view._id} className="ui sixteen wide column" >
                        <i className="user large icon"></i>
                        <h2>
                            {
                                team_view.team
                            }
                        </h2>
                        <div className="ui secondary  menu">
                            <Link to="" className="active item">
                                Team Boards
                            </Link>
                            <Link to="" className="item">
                                Members
                            </Link>
                        </div>
                        <div className="sixteen wide column">
                            <div className="ui four column grid">
                                <div className="column">
                                    create
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

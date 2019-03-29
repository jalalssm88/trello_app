import React, { Component } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom'

export default class Boards extends Component {
    constructor(props){
        super(props);
        this.state = {
            boards:[],
            teams:[]
        }
    }

    componentDidMount(){
        Axios.get('/boards').then(res=>{
            this.setState({
               boards:res.data
            })
        })  

        Axios.get('/teams').then(res=>{
            console.log('resss1111111', res)
            this.setState({
               teams:res.data
            })
        })
    }

    

    // deleteHandler = (e) =>{
    //     console.log('eeeeeeeeee', e)
    //     Axios.delete(`/create/${e}`).then(res=>{
    //     })
    //     window.location.reload();
    // }

    render() {
        console.log('state', this.state.boards)
        console.log('state teams', this.state.teams)

        return (
            this.state.boards.length === 0 && this.state.teams.length === 0? <div className="ui loader active"></div>:
            <div className="ui container">
                <div className="ui grid stackable">
                    <div className="four wide column">
                        <div className="ui middle aligned selection list">
                            <div className="item">
                                <i className="home icon"></i>
                                <div className="content">
                                    <div className="header">Boards</div>
                                </div>
                            </div>
                            
                            <div className="item">
                                <i className="home icon"></i>
                                <div className="content">
                                    <div className="header">Home</div>
                                </div>
                            </div>
                        </div>

                        <div className="ui middle aligned selection list">
                            <h4 style={{'marginLeft':'10px', 'marginTop':'10px'}}>Teams</h4>
                            <Link to="/create_team" style={{'marginBottom':'20px'}} className="ui labeled icon blue button"><i className="plus icon"></i> Create Team</Link>
                            {
                                this.state.teams.length === 0 ? console.log('ldl'):
                                this.state.teams.map(teamm=>(
                                    <div key={teamm._id} className="item">
                                        <i className="users icon"></i>

                                    <Link to={{
                                        pathname: `/team/${teamm._id}`,
                                        state: { team_id:teamm._id}
                                    }}>
                                        <div className="content">
                                        
                                            <div className="header">{teamm.team}</div>
                                        </div>
                                    </Link>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    
                    <div className="twelve wide column ">
                        <div className="ui stackable three column centered grid ">
                            {
                                this.state.boards.length === 0 && this.state.teams.length === 0 ?  <div className="ui loader active"></div>:
                                this.state.boards.map((item, index) =>(
                                    
                                   <div key={index} className="column">
                                        <div style={{"background":item.board_color}} className="board_items">
                                            <Link to={{ 
                                                        pathname: `/board/${item._id}`,
                                                        state: { board: item.name, board_id: item._id}
                                                    }}>
                                                <h3>{item.name}</h3>
                                                <div className="ui divider"></div>
                                                <p>{item.team}</p>
                                            </Link> 
                                        
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

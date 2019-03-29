import React, { Component } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom'

export default class BoardView extends Component {
    constructor(props){
        super(props);
        this.state = {
            board_detail:[],
            task:'',
            task_arr : []
        }
    }

    componentDidMount(){
        console.log('view board detail', this.props.location.state)
        const current_id = this.props.location.state.board_id
        console.log('currrrrrrr', current_id)
        Axios.get(`/boards/${current_id}`).then(res=>{
            console.log('resssss of single board', res.data.doc)
            this.setState({
                board_detail:res.data.doc
            })
        })
    }
    change = (e) => {
        
        this.setState({
            task:e.target.value
        })
    }
    sub = (e) => {
        e.preventDefault();


    }
    render() {
        console.log('board detail state', this.state.board_detail)
        var board_view = this.state.board_detail;
        return (
            <div className="ui container fluid">
                {
                    board_view.length === 0 || board_view === ''?<div className="ui loader active menu_loader"></div>:
                    <div key={board_view._id} className="ui menu detail_menu" >
                        <Link to="#" className="item">{board_view.name}</Link>
                        <Link to="#" className="item">{board_view.team}</Link>
                        <Link to="#" className="item">{board_view.category}</Link> 
                    </div>
                }

                <div className="ui four column grid">
                    <div className="column">
                        <input type="text" className="ui input" /><br />
                        <button>add</button>

                    </div>
                    
                </div>
            </div>
        )
    }
}

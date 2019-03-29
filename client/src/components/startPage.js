import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';
import trello  from '../components/start_image.svg'


class Startpage extends Component{
    render(){
        return(
            <div className="ui container fluid" style={{'marginTop':"-20px"}}>
                <div className="ui grid" style={{"height":"690px", "background":"blue"}}>
                    <div className="ui container">
                        <div className="ui grid">
                            <div className="eight wide column">
                                <h1 className="start_header">Trello lets you work with team, collaboreatly and get done more</h1>
                                <p className="start_para">Trello’s boards, lists, and cards
                                    enable you to organize and prioritize your projects in a fun,
                                     flexible, and rewarding way.
                                </p>
                                <Link to="/register" className="ui massive green button">sign up it is free</Link>
                            </div>
                            <div className="eight wide column">
                                <img src={trello} />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Startpage;
import React, { Component } from 'react'
import{ Link, withRouter } from 'react-router-dom';

class Navbar extends Component {
    logout (e){
        e.preventDefault();
        localStorage.removeItem('usertoken')
        this.props.history.push('/')
    }
    render() {
        const loginRegLink = (
            <div className="sixteen wide column" style={{'marginBottom':'20px'}}>
                <div className="ui large menu main_menu">
                    <div className="item">
                        <Link to="" className="ui small icon labeld button"><i className="icon home"></i>Trello </Link>
                    </div>
                    <div className="right menu">
                        <div className="item">
                            <Link style={{"color":"white", "fontSize":"20px"}} to="/login">Login</Link>
                        </div>
                        <div className="item">
                            <Link style={{"color":"white", "fontSize":"20px"}} to="/register">register</Link>
                        </div>
                    </div>
                </div>
            </div>
        )

        const userLink = (
            <div className="sixteen wide column" style={{'marginBottom':'20px'}}>
                <div className="ui small menu main_menu">
                    <div className="item">
                        <Link to="/profiles"><button className="ui icon button"><i className="icon home"></i></button></Link>
                    </div>
                    <div className="item">
                        <button className="ui labeled icon button"><i className="icon home"></i>Boards</button>
                    </div>
                    <div className="item ">
                        <Link to="/create_board"><button className="ui icon button"><i className="plus icon"></i></button> </Link>
                    </div>
                    <div className="item right floated">
                        <button className="ui green button small" onClick={this.logout.bind(this)} to="/register">log out</button>
                    </div>
                </div>
            </div>
        )

        return(
            <div>
                {
                    localStorage.usertoken? userLink:loginRegLink
                }
            </div>
        )
    }
}

export default withRouter(Navbar)


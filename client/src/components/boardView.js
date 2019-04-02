import React, { Component } from 'react'
import Axios from 'axios';
import { Link } from 'react-router-dom'
import { Modal, Form, Button, Icon, Actions } from 'semantic-ui-react';

export default class BoardView extends Component {
    constructor(props){
        super(props);
        this.state = {
            board_detail:[],
            task:'',
            board_list: '',
            board_list_data : [],
            showModal: false
        }
    }

    handleChangeForms = (e, { value }) => {
        this.setState({ board_list: value });
    }
    
    handleCreateButton(evt) {
        evt.preventDefault()
        Axios({
            method: 'post',
            url: '/lists',
            data: this.state
        })
        .then( (res)=> {
        })
        .catch( (error)=> {
            console.log(error);
        });
            window.location.reload();
       
        this.closeModal();
    }

    closeModal = () => {
        this.setState({ showModal: false, board_list:'' })
    }
    
    componentDidMount(){
        const current_id = this.props.location.state.board_id
        Axios.get(`/boards/${current_id}`).then(res=>{
            console.log('resssss of single board', res.data.doc)
            this.setState({
                board_detail:res.data.doc
            })
        })
        Axios.get(`/lists`).then(res=>{
            console.log('ressssss of list data', res.data)
            this.setState({
                board_list_data:res.data
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

    myChange = (e) =>{
        
    }
    render() {
        console.log('list fetched state', this.state.board_list_data)
        const {
            board_list,
            showModal
          } = this.state
        var board_view = this.state.board_detail;
        return (
            <div className="ui container fluid">
                {
                    board_view.length === 0 || board_view === ''?<div className="ui loader active menu_loader"></div>:
                    <div style={{'background':board_view.board_color}} key={board_view._id} className="ui menu detail_menu" >
                        <Link style={{'color':'white'}} to="#" className="item">{board_view.name}</Link>
                        <Link style={{'color':'white'}} to="#" className="item">{board_view.team}</Link>
                        <Link style={{'color':'white'}} to="#" className="item">{board_view.category}</Link> 
                    </div>
                }
                <div className="ui sixteen wide column">
                    <Modal size='tiny' open={showModal} trigger={<Button onClick={() => this.setState({ showModal: true })}><Icon className='plus' />Add New List</Button>}>
                        <Modal.Header>Add List</Modal.Header>
                        <Modal.Content>
                        <Form>
                            <Form.Input
                            label='list'
                            value={board_list}
                            onChange={this.handleChangeForms}
                            />
                        </Form>
                        </Modal.Content>
                        <Modal.Actions>
                        <Button onClick={(evt) => this.handleCreateButton(evt)} content='Submit' icon='right arrow' labelPosition='left' color='blue'/>
                        <Button onClick={this.closeModal} content='Cancel' icon='close icon' labelPosition='left' color='red'/>
                        </Modal.Actions>
                    </Modal>
                </div>
                <div className="ui four column grid">
                    {
                        this.state.board_list_data.length === 0?console.log('ddd'):this.state.board_list_data.map(list=>(
                            <div key={list._id} className="column">
                                <div className="ui segment">
                                    <p>{list.board_list}</p>
                                    <Modal size='tiny' open={showModal} trigger={<Button onClick={() => this.setState({ showModal: true })}><Icon className='plus' />Create Card</Button>}>
                                        <Modal.Header>Add List</Modal.Header>
                                        <Modal.Content>
                                        <Form>
                                            <Form.Input
                                            label='create card'
                                            value={board_list}
                                            onChange={this.handleChangeForms}
                                            />
                                        </Form>
                                        </Modal.Content>
                                        <Modal.Actions>
                                        <Button onClick={(evt) => this.handleCreateButton(evt)} content='Submit' icon='right arrow' labelPosition='left' color='blue'/>
                                        <Button onClick={this.closeModal} content='Cancel' icon='close icon' labelPosition='left' color='red'/>
                                        </Modal.Actions>
                                    </Modal>

                                </div>
                            </div>
                        ))
                        
                    }
                </div>
            </div>
        )
    }
}

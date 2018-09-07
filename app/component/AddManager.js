import React from 'react'
import ManagerNavbar from './ManagerNavbar'
import AddTemplate from './AddTemplate'
import Staff from './staff'

export default class AddManager extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(itme){
    }
    render(){
        return(
            <div>
                <ManagerNavbar />
                <AddTemplate addClick={this.handleSubmit} />
            </div>
        );
    }
}
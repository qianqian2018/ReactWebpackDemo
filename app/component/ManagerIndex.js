import React from 'react'

import ManagerNavbar from './ManagerNavbar'
import ManagerBody from './ManagerBody'

import '../../assets/bootstrap/css/bootstrap.min.css'
import '../../assets/bootstrap/css/bootstrap-theme.css'
import '../style/main.css'

export default class ManagerIndex extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div> 
                <ManagerNavbar />
                <ManagerBody  />
            </div>
        );
    }
}
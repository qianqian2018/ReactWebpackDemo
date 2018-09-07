import React from 'react'
import {Route,Link} from 'react-router-dom'

export default class ManagerNavbar extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Bootstrap theme</a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav" ref="">
                            <li className="active">
                                <Link to="/">查看所有人员信息</Link>
                            </li>
                            <li className="hide">
                                <Link to="/add">人员新增</Link>
                            </li>
                            <li className="hide">
                                <Link to="/update">人员修改</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
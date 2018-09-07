import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import ManagerIndex from '../component/ManagerIndex'
import AddManager from '../component/AddManager'

export default class ManagerRouter extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={ManagerIndex}></Route>
                    <Route path="/add" component={AddManager}></Route>
                </Switch>
            </BrowserRouter>
        )
    }
}
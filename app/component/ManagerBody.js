import React from 'react'

import ManagerHeader from './ManagerHeader'
import ManagerPanel from './ManagerPanel'
import ManagerAdd from './ManagerAdd'
import StaffData from './staff'

export default class ManagerBody extends React.Component {
    constructor(props){
        super(props);
        this.searchStaff = this.searchStaff.bind(this);
        this.addStaffItem = this.addStaffItem.bind(this);
        
        this.state = {
            data: new StaffData,
        }
    }

    componentDidMount(){
        console.log(123)
        this.setState({data: new StaffData});
    }
    
    searchStaff(value){
        const filterData = this.state.data.searchStaff(value);
         this.setState({
             data: filterData
         });
    }

    addStaffItem(item){
        this.setState({
            data : this.state.data.addStaffItem(item)
        })
    }

    deleteStaffItem(id){
        this.setState({
        });
    }

    render(){
        return(
            <div className="container">
                <div className="panel panel-default panel-manager">
                    <ManagerHeader searchManager={this.searchStaff}/>
                    <ManagerPanel items={this.state.data} deleteStaff={this.deleteStaffItem.bind(this)} />
                </div>
                
                <ManagerAdd addItem={this.addStaffItem} />
            </div>
        );
    }
}
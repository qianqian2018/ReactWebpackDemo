import React from 'react'
import {Link} from 'react-router-dom'

export default class ManagerItem extends React.Component {
    constructor(props){
        super(props);
    }

    handleDelete(index, e){
        this.props.delStaff(index);
    }

    render(){
        return(
            <tr>
                <th scope="row">{this.props.index + 1}</th>
                <td>{this.props.managerItem.name}</td>
                <td>{this.props.managerItem.age}</td>
                <td>{this.props.managerItem.id}</td>
                <td>{this.props.managerItem.sex}</td>
                <td>{this.props.managerItem.descrip}</td>
                <td>
                    <a href="javascript:;">操作</a>&nbsp;&nbsp;&nbsp;
                    <a href="javascript:;" onClick={this.handleDelete.bind(this,this.props.index +1 )}>删除</a>
                </td>
            </tr>
        );
    }
}
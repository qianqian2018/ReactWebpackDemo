import React from 'react'

import ManagerItem from './ManagerItem'

export default class ManagerPanel extends React.Component {
    constructor(props){
        super(props)
    }

    handleDelete(id){
        this.props.deleteStaff(id)
    }

    render(){
        let html = [];
        let result = this.props.items.staff;
        if (result.length === 0) {
            html.push(<tr colspan="7"><td>暂无用户</td></tr>);
        } else {
            result.map((item,index) => {
                html.push(<ManagerItem delStaff={this.handleDelete.bind(this)} key={index +1 } managerItem={item.info} index={index} />)
            });
        }

        return(
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>姓名</th>
                        <th>年龄</th>
                        <th>身份</th>
                        <th>性别</th>
                        <th>描述</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {html}
                </tbody>
            </table>
        );
    }
}
import React from 'react'
import Staff from './staff'

export default class AddTemplate extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            age: '',
            sex: '1',
            id: '',
            descrip: '',
            staff: new Staff
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event){
        //this.props.addClick(this.state);
        this.state.staff.addStaffItem(this.state);
        console.log(this.state.staff.staff);
        event.preventDefault();
    }

    handleChange(event){
        var selectName = event.target.name;
        this.setState({
            [selectName] : event.target.value
        });
    }

    render(){
        return(
            <div className="container">
                <div className="panel panel-default panel-add">
                    <div className="panel-body">
                        <form className="form-horizontal" id="form-add">
                            <div className="form-group">
                                <label for="name" className="col-sm-2 control-label">姓名</label>
                                <div className="col-sm-10">
                                    <input type="text" value={this.state.name} className="form-control" name="name" id="name" placeholder="your name" onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="age" className="col-sm-2 control-label">年龄</label>
                                <div className="col-sm-10">
                                    <input type="text" value={this.state.age} className="form-control" name="age" id="age" placeholder="your age(0-150)" onChange={this.handleChange} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="sex" className="col-sm-2 control-label">性别</label>
                                <div className="col-sm-10">
                                    <select name="sex" id="sex" value={this.state.sex} className="form-control" onChange={this.handleChange}>
                                        <option value="0">男</option>
                                        <option value="1">女</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="id" className="col-sm-2 control-label">身份</label>
                                <div className="col-sm-10">
                                    <select name="id" id="id" value={this.state.id} className="form-control"  onChange={this.handleChange}>
                                        <option value="1">主任</option>
                                        <option value="2">老师</option>
                                        <option value="3">学生</option>
                                        <option value="4">实习</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label for="descrip" className="col-sm-2 control-label">个人描述</label>
                                <div className="col-sm-10">
                                    <textarea className="form-control" rows="3" name="descrip" id="descrip" value={this.state.descrip}  onChange={this.handleChange}></textarea>
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <div className="col-sm-offset-2 col-sm-10">
                                    <button className="btn btn-default" onClick={this.handleSubmit}>提交</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
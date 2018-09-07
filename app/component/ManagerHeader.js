import React from 'react'

export default class ManagerHeader extends React.Component {
    constructor(props){
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSelectId = this.handleSelectId.bind(this);
        this.handleSelectSort = this.handleSelectSort.bind(this);
    }

    handleSearch(){
        let input = this.refs.searchInput;
        this.props.searchManager(input.value);
    }

    handleSelectId(){

    }

    handleSelectSort(){

    }

    render(){
        return(
            <div className="panel-body">
                <form className="navbar-form navbar-left" role="search">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Search" ref="searchInput" onChange={this.handleSearch}  />
                    </div>
                    
                    <div className="form-group hide">
                        <label for="selectManager">人员筛选</label>
                        <select className="form-control" name="sel-filter" id="sel-filter" onChange={this.handleSelectId}>
                            <option value="0">全部</option>
                            <option value="1">主任</option>
                            <option value="2">老师</option>
                            <option value="3">学生</option>
                            <option value="4">实习</option>
                        </select>
                    </div>
                        
                    <div className="form-group hide">
                        <label for="sortManager">排列方式</label>
                        <select className="form-control" name="sel-sort" id="sel-sort" onChange={this.handleSelectSort}>
                            <option value="0">身份</option>
                            <option value="1">年龄升</option>
                            <option value="2">年龄降</option>
                        </select>
                    </div>
                </form>
            </div>
        )
    }
}
class staffItem {
    constructor(item){
        this.info = {};
        this.info.name = item.name;
        this.info.age = item.age || 0;
        this.info.sex = item.sex;
        this.info.id = item.id;
        this.info.descrip = item.descrip || '';
        this.info.index = ++index;
    }
}

let index = 0;

export default class STAFF {

    constructor(){
        this.allStaff = [
            new staffItem(STAFF.rawData[0]),
            new staffItem(STAFF.rawData[1]),
            new staffItem(STAFF.rawData[2]),
            new staffItem(STAFF.rawData[3]),
            new staffItem(STAFF.rawData[4]),
            new staffItem(STAFF.rawData[5]),
            new staffItem(STAFF.rawData[6]),
            new staffItem(STAFF.rawData[7]),
            new staffItem(STAFF.rawData[8]),
            new staffItem(STAFF.rawData[9]),
            new staffItem(STAFF.rawData[10])
        ];
        this.staff = this.allStaff;
        this.word = '';  //搜索关键字
    }

    //增
    addStaffItem(item) {
        let newItem = new staffItem(item);
        this.allStaff.push(newItem);
        this.staff = this.allStaff;
        return this;
    }

    //搜索
    searchStaff(word){
        this.word = word;
        this.staff = this.allStaff;
        //在staff中搜索
        this.staff = this.staff.filter(item => {
            return item.info.name.indexOf(word)!=-1 || 
                   (item.info.age+'').indexOf(word)!=-1 || 
                   item.info.id.indexOf(word)!=-1 ||
                   item.info.sex.indexOf(word)!=-1;
        });
        return this;
    }

    deleteStaff(index){
        this.staff = this.allStaff;
        this.staff = this.staff.map(item => {
            if(item.info.index === index){
            }
        });

        return this;
    }
}

STAFF.rawData = [{ descrip:'我是一匹来自远方的狼。', sex: '男', age: 20, name: '张三', id: '主任'},
                 { descrip:'我是一匹来自远方的狼。', sex: '女', age: 21, name: 'qqq', id: '学生'},
                 { descrip:'我是一匹来自远方的狼。', sex: '女', age: 22, name: 'www', id: '学生'},
                 { descrip:'我是一匹来自远方的狼。', sex: '女', age: 24, name: 'eee', id: '实习'},
                 { descrip:'我是一匹来自远方的狼。', sex: '男', age: 23, name: 'rrr', id: '实习'},
                 { descrip:'我是一匹来自远方的狼。', sex: '男', age: 22, name: 'ttt', id: '学生'},
                 { descrip:'我是一匹来自远方的狼。', sex: '男', age: 24, name: 'yyy', id: '主任'},
                 { descrip:'我是一匹来自远方的狗。', sex: '男', age: 35, name: '李四', id: '老师'},
                 { descrip:'我是一匹来自远方的猪。', sex: '男', age: 42, name: '王五', id: '学生'},
                 { descrip:'我是一匹来自远方的牛。', sex: '男', age: 50, name: '赵六', id: '实习'},
                 { descrip:'我是一匹来自远方的马。', sex: '男', age: 60, name: '孙七', id: '实习'}];
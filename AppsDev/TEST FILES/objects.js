let teacher = function(idnum, prefix, fname, lname, suffix){
    return{
        idnum:idnum,
        prefix:prefix,
        fname:fname,
        lname:lname,
        suffix:suffix,

        toString:function(){
            return `${this.idnum}, ${this.prefix} ${this.fname} ${this.lname},${this.suffix}`;
        }   
    }
}
// let teacher1 = new teacher(1110,'Dr.','Gregg','Gabison','DIT')
// document.write(teacher1 + '<br>');

let student = function(stdIdNum,fname,lname,program,year){
    return{
       stdIdNum :stdIdNum,
       fname:fname,
       lname:lname,
       program:program,
       year:year,

       toString:function(){
            return `${this.stdIdNum},  ${this.fname} ${this.lname},${this.program}, ${this.year}`;
        }
    }
}

// let student1 = new student(20200,'John','Galeos','BSIT','3')
// document.write(student1 + '<br>');

let schedule = function(schedCode,schedDays,schedTime){
    return{
        schedCode:schedCode,
        schedDays:schedDays,
        schedTime:schedTime,
        schedColl: [],

        addToSched : function(){
            this.schedColl.push(this);
        },

        searchSchedule: function(scheduleCode) {
            return this.schedColl.find(schedule => schedule.schedCode === scheduleCode);
        },

        toString:function(){
            return `${this.schedCode},  ${this.schedDays} ${this.schedTime}`;
        }
    }
}
// let scheduleCodeCollection1 = new schedule(1, 'MWF', '08:00am - 09:00am');
// let newsched2 = new schedule(2, 'TTH', '09:00am - 10:30am');
// let newsched3 = new schedule(3, 'MWF', '09:00am - 10:30am');
// let newsched4 = new schedule(4, 'MWF', '07:00am - 8:00am');


// scheduleCodeCollection1.addToSched();
// scheduleCodeCollection1.schedColl.push(newsched2);
// scheduleCodeCollection1.schedColl.push(newsched3);
// scheduleCodeCollection1.schedColl.push(newsched4);

// let searchSchedule = scheduleCodeCollection1.searchSchedule(3);
// console.log(searchSchedule);
// document.write(searchSchedule +'<br>');

// 
let Course = function (cCode, cName, cDesc) {
    return {
        cCode: cCode,
        cName: cName,
        cDesc: cDesc,
        cTeacher: [],
        cStudent: [],
        cSchedule: [],

        addTeacher: function (teacher) {
            this.cTeacher.push(teacher);
        },

        addStudent: function (student) {
            this.cStudent.push(student);
        },

        addSchedule: function (schedule) {
            this.cSchedule = schedule;
        },

        getTeacher: function () {
            return this.cTeacher;
        },

        getStudents: function () {
            return this.cStudent;
        },

        getCourseCode: function () {
            return this.cCode;
        },

        getCourseName: function () {
            return this.cName;
        },

        getCourseDescription: function () {
            return this.cDesc;
        },

        getCourseSchedule: function () {
            return this.cSchedule;
        },
    };
};

let teacher1 = new teacher(1110, 'Dr.', 'Gregg', 'Gabison', 'PhD');
let student1 = new student(1001, 'John', 'Galeos', 'BSIT', 3);
let schedule1 = new schedule(1, 'MWF', '08:00am - 09:00am');
let schedule2 = new schedule(2, 'TTG', '8:30am - 10:00am')

let course1 = new Course(11100, 'Apps Dev 1', 'Applications Development and Emerging Technologies');
course1.addTeacher(teacher1);
course1.addStudent(student1);
course1.addSchedule(schedule1);
course1.addSchedule(schedule2); 

console.log(`Course Code: ${course1.getCourseCode()}`);
console.log(`Course Name: ${course1.getCourseName()}`);
console.log(`Course Description: ${course1.getCourseDescription()}`);
console.log('Teachers:', course1.getTeacher().map(teacher => teacher.toString()));
console.log('Students:', course1.getStudents().map(student => student.toString()));
console.log('Schedules:', course1.getCourseSchedule()); 

document.write(`<h2>Teacher:</h2>${teacher1.toString()}<br>`);
document.write(`<h2>Student:</h2>${student1.toString()}<br>`);
document.write(`<h2>Schedules:</h2>${course1.getCourseSchedule().map(schedule => schedule.toString()).join('<br>')}`);
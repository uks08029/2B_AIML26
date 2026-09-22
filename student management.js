class student {
    static totalstudents=0;
    constructor(RollNo,Name,Marks){
        this.Rollno=RollNo;
        this.Name=Name;
        this.Marks=Marks;
        totalstudents++;
    }
    DisplayResult(){
        console.log(this.RollNo);
        console.log(this.Name);
        console.log(this.Marks);
    }

}
let s1=new student(135,"utkarsh",85);
let s2=new student(142,"Shovit",95);
let s3=new student(167,"nischal",89);
s1.DisplayResult();
s2.DisplayResult();
s3.DisplayResult();
import Bottom from "./Bottom";
import CourseItem from "./CourseItem";
import Menu from "./Menu";

const Course = () => {
    return (
        <div>
            <Menu/>
            <h2>강좌관리</h2>
            <table style={{width:'100%'}}>
            <CourseItem no="P001" name="데이터베이스" dept="컴퓨터공학과" room="123호"/>
            <CourseItem no="P002" name="스프링" dept="소프트웨어과" room="203호"/>
            <CourseItem no="P003" name="자바" dept="컴공" room="223호"/>
            </table>
            <Bottom/>
        </div>
    )
}
export default Course;
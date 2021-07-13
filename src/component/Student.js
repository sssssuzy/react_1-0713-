import Bottom from './Bottom';
import Menu from './Menu';
import StudentItem from './StudentItem';

const Student = () => {
    return(
        <div>
            <Menu/>
            <h1>학생관리</h1>
            <div>
            <StudentItem no='01' name='김수지' address='인천 남동구' tel='010-6612-4493'/>
            <StudentItem no='02' name='김지성' address='인천 남구' tel='010-8418-4493'/>
            <StudentItem no='03' name='김현성' address='인천 부평구' tel='010-8415-4493'/>
            </div>            
            <Bottom/>
        </div>

    )
}
export default Student;
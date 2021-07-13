const CourseItem = ({no,name,dept,room}) => {
    return(
        <tr>
            <td>{no}</td>
            <td>{name}</td>
            <td>{dept}</td>
            <td>{room}</td>
        </tr>
    )
}
export default CourseItem;
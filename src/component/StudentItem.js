const StudentItem = ({no,name,address,tel}) => {
    return(
        <div>
        <span>{no}</span>
        <span>{name}</span>
        <span>{address}</span>
        <span>{tel}</span>
        <hr/>
        </div>
    )
}
export default StudentItem;
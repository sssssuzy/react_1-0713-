import { useState } from "react";

const User = () =>{
    const [form,setForm] = useState({
        id:'user01',
        password:'pass',
        name:'김수지'
    });
    const {id,password,name} =form;
    const onChange = (e) =>{
        const newForm ={
            ...form,
            [e.target.name]:e.target.value
        }
        setForm(newForm);
    }
    const onKeyPress = (e) =>{
        if(e.key==='Enter'){
            alert(`아이디:${id}\n비밀번호:${password}`);
        }
    }   
    return(
        <div>
            <h1>사용자등록</h1>
            <div>아이디:<input name="id" value={id} onChange={onChange}/></div>
            <div>비밀번호:<input name="password" value={password} onChange={onChange}/></div>
            <div>성명:<input name="name" value={name} onChange={onChange} onKeyPress={onKeyPress}/></div>
            <hr/>
            <div>아이디 : {id}</div>
            <div>비밀번호 : {password}</div>
            <div>성명 : {name}</div>
        </div>
    )
}
export default User;
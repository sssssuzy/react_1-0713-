import { useState } from "react"

const Input =()=>{
    const [form,setForm] = useState({
        name:'홍길동',
        address:'인천',
        tel:'010-1234-1234'
    });
    const {name,address,tel}=form;
    const onChange = (e) =>{
        const nextForm = {
            ...form,
            [e.target.name]: e.target.value
        }
        setForm(nextForm);
    }

    const onKeyPressAddress = (e) => {
        if(e.key==='Enter') onClickOutput();
    }
    const onClickOutput = ()=> {
        alert(`이름:${name}\n주소:${address}\n전화번호:${tel}`);
    }
    return(
        <div>
            이름:<input name="name" value={name} onChange={onChange} />
            <hr/>
            주소:<input name="address" value={address} onChange={onChange} onKeyPress={onKeyPressAddress}/>
            <hr/>
            전화번호:<input name="tel" value={tel} onChange={onChange}/>
            <hr/>
            <h1>이름:{name}</h1>
            <h1>주소:{address}</h1>
            <h1>전화번호:{tel}</h1>

            <button onClick={onClickOutput}>출력</button>
        </div>
    )
}
export default Input;
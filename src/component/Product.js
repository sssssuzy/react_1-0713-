import { useState } from "react";

const Product = () => {
    const [form,setForm] = useState({
       code:'P001',
       name:'냉장고',
       price:'100' 
    });
    const{code,name,price} =form;
    const onChange = (e) =>{
        const newForm =  {
            ...form,
            [e.target.name]:e.target.value
        }      
        setForm(newForm);
    }
    const onKeyPress = (e) =>{
        if(e.key==='Enter'){
            alert(`상품명:${name}\n가격:${price}`);
        }
    }
    return(
        <div>
            <h1>[상품등록]</h1>
            <div>상품코드:<input name="code" value={code} onChange={onChange}/></div>
            <div>상품명:<input name="name" value={name} onChange={onChange}/></div>
            <div>가격:<input name="price" value={price} onChange={onChange} onKeyPress={onKeyPress}/></div>
            <hr/>
            <h2>[상품내용]</h2>
            <div>상품코드:{code}</div>
            <div>상품명:{name}</div>
            <div>가격:{price}</div>
        </div>
    )
}
export default Product;
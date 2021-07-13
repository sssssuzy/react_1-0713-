import { useState } from "react"

const Say = () => {
    const [message,setMessage]=useState('...');
    const onClickEnter = () => {
        setMessage('안녕하세요!');
    }
    const onClickESC = () => {
        setMessage('안녕히가세요!');
    }
    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickESC}>퇴장</button>
            <h1>{message}</h1>
        </div>
    )
}
export default Say;
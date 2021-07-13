import { useEffect, useState } from "react";

const Todo = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [id, setId] = useState(4);

    //REST API 호출
    const callAPI = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => res.json())
        .then(json => {
            console.log('..........' + json.title)
            setTitle(json.title);
            setBody(json.body);
        });
    }

    useEffect(() => {
        callAPI()
    },[id]);
    
    const onNext = () => {
        setId(id+1);
    }
    const onPre = () => {
        setId(id-1);
    }
    return(
        <div>
            <h1>게시글{id}</h1>
            <h2>제목 : {title}</h2>
            <hr/>
            {body}
            <hr/>
            <button onClick={onPre} disabled={id===1&&true}>이전</button>&nbsp;<button onClick={onNext} disabled={id===5&&true}>다음</button>
        </div>
    )
}

export default Todo;
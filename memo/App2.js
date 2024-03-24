import React, { useState } from 'react';

export default function app() {
    const font = {
        textAlign: "center"
    };

    const [number, setNumber] = useState(0);

    const add = () => {
        setNumber(number + 1);
    };

    const sub = () => {
        setNumber(number - 1);
    };

    return (
        <div style={font}>
            <h1>카운트 사이트</h1>
            <button onClick={add}>더하기 버튼</button>
            <button onClick={sub}>빼기 버튼</button>
            <p>현재 숫자: {number}</p>
        </div>
    );
}

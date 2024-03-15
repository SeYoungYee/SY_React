import React, { useState } from "react";



export default function Hello() {

    const [number, setNumber] = useState(0);
    const [backgroundColor, setBackgroundColor] = useState('pink'); // 배경색 상태 선언
    
    
    const changeColor = function() {
        setBackgroundColor(prevColor => prevColor === "pink" ? "blue" : "pink");
    }

    //함수형 함수가 더 자주 사용되므로 위쪽 코드 사용
    // const changeColor = function() {
    //     setBackgroundColor(backgroundColor === "pink" ? "blue" : "pink");
    // }


    const up = function() {
        setNumber(number + 1);
    }

    const down = function() {
        setNumber(number - 1);
    }
    
    const font = {
        textAlign: 'center',
        backgroundColor: backgroundColor,
    }

    return (
        <div style={font}>
            <h1>State</h1>
            <button onClick={up}>Up</button>
            <button onClick={down}>Down</button>

            <button onClick={changeColor}>change</button>
            <h1>{number}</h1>


        </div>
    );
}

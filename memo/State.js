import React, { useState } from 'react';

export default function Hello() {
    const [inputValue, setInputValue] = useState(''); // 입력값을 저장할 상태 선언
    const [displayText, setDisplayText] = useState(''); // 화면에 표시될 텍스트를 저장할 상태 선언
    const [backgroundColor, setBackgroundColor] = useState('pink'); // 배경색 상태 선언

    function showText() {
        console.log(inputValue);
        setDisplayText(inputValue); // 입력값을 화면에 표시될 텍스트로 설정
    }

    function handleInputChange(e) {
        setInputValue(e.target.value); // 입력값이 변경될 때마다 상태 업데이트
    }

    function changeColor(){
        setBackgroundColor(prevColor => prevColor === 'pink' ? 'black' : 'pink'); // 배경색 상태 변경
    }

    const font = {
        color: 'blue',
        backgroundColor: backgroundColor,
        textAlign: 'center',
        margin: 'auto',
    }

    function ShowName() {
        alert("SeYoung");
    }

    function ShowAge() {
        alert(25);
    }

    return (
        
        <div style={font}>
            <h1>Hello React</h1>
            <button onClick={ShowName}>Show Name</button>
            <button onClick={ShowAge}>Show Age</button>
            <button onClick={changeColor}>change Color</button>
            <br />
            <input type="text" value={inputValue} onChange={handleInputChange} />
            <button onClick={showText}>Submit</button>
            <br />
            <div>{displayText}</div> {/* 입력된 텍스트를 화면에 출력 */}
        </div>
    );
}

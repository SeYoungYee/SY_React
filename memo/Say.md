# Say 컴포넌트

이 React 컴포넌트는 count, color, message 상태를 관리하기 위한 기본 useState 훅을 시연합니다. 사용자는 count를 증가시키거나 감소시키거나 초기화할 수 있고, 입장하거나 퇴장함으로써 메시지를 변경하며, 메시지의 색상을 변경할 수 있습니다.

## 컴포넌트 코드

```jsx
import { useState } from 'react';

const Say = () => {
    const [count, setCounter] = useState(0);
    const [color, setColor] = useState('black');
    const [message, setMessage] = useState('기본값');

    const onClickAdd = () => {
        setCounter(count + 1);
    };

    const onClickSub = () => {
        setCounter(count - 1);
    };

    const onDefault = () => {
        setCounter(0);
    };

    const onClickEnter = () => setMessage('안녕하세요');
    const onClickLeave = () => setMessage('안녕히가세요');

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>

                <div>
                    <button onClick={onClickEnter}>입장</button>
                    <button onClick={onClickLeave}>퇴장</button>
                </div>

                <div>
                    <button style={{ color: 'red' }} onClick={() => setColor('red')}>빨간색</button>
                    <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>파란색</button>
                    <button style={{ color: 'black' }} onClick={() => setColor('black')}>검은색</button>
                </div>

            </div>

            <div style={{ textAlign: 'center', display:'flex', justifyContent: 'left'}}>
                <button onClick={onClickAdd}>add</button>
                <button onClick={onClickSub}>sub</button>
                <button onClick={onDefault}>초기화</button>
            </div>
            <h1 style={{ color, textAlign: 'center' }}>{message}</h1>
            <h1 style={{ textAlign: 'center' }}>{count}</h1>
        </div>
    );
};

export default Say;

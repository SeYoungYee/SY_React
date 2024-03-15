import img from './img/pinggu.jpg';

const person = {
    name: 'PingGu'
};

const imgTheme = {
    color: 'red',
    backgroundColor: 'pink',
    margin: 'auto', // 'auto'는 따옴표로 감싸야 합니다
    textAlign: 'center', // 내용을 가로로 가운데 정렬합니다
};

const font ={
    color: 'green',
    backgroundColor: 'yellow',
};

export default function TodoList() {
    return (
        <div>

            <div style={imgTheme}>
                <img src={img} width='450px' alt='PingGu'/>
            </div>

            <h1 style={{ textAlign: 'center' }}> {person.name}</h1>

            <ul style={font}>
                <li>공부하기</li>
                <li>잠자기</li>
                <li>밥먹기</li>
            </ul>

        </div>
    );
}

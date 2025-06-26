import React from 'react';
import ReactDOM from 'react-dom/client';
import { Button } from '../src/components/Button/Button';
import { TextField } from '../src/components/TextField/TextField';

const App = () => {
    const [value, setValue] = React.useState('');

    return (
        <div style={{ padding: '20px' }}>
            <h1>Демо библиотека</h1>
            <TextField value={value} placeholder="Введите текст" onChange={(e) => setValue(e.target.value)} />
            <br />
            <Button size="medium" onClick={() => alert(value)}>Показать значение</Button>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);

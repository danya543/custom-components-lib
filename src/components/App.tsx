import { useState } from 'react'

import * as styles from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';
import A from '@/assets/icons8.png';
import B from '@/assets/snapedit_1748871283906.jpg';
import C from '@/assets/icons8.svg';

export const App = () => {

    const [count, setCount] = useState<number>(0);
    const handleCount = () => setCount(prev => ++prev)

    return (
        <div>
            <img src={A} alt="" />
            <img src={B} alt="" width={100} height={100} />
            <C color={'green'} width={100} height={100} />
            <h1>{count}</h1>
            <button className={styles.btn} onClick={handleCount}>count</button>
            <Outlet />
        </div>
    )
}

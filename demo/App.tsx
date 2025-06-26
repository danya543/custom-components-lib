import React from 'react';
import { Button } from '../src/components/Button/Button';
import * as styles from './App.module.scss';

export const App = () => {

    return (
        <div style={{ padding: '20px' }}>
            <h1>Demo</h1>
            <div className={styles.part}>
                <h3>Buttons</h3>
                <div className={styles.into_part}>
                    <Button size="small" onClick={() => alert('contained')}>contained</Button>
                    <Button size="medium" onClick={() => alert('contained')}>contained</Button>
                    <Button size="large" onClick={() => alert('contained')}>contained</Button>
                    <Button size="large" onClick={() => alert('contained')} disabled>contained</Button>
                </div>
                <div className={styles.into_part}>
                    <Button size="small" onClick={() => alert('outlined')} variant='outlined' >outlined</Button>
                    <Button size="medium" onClick={() => alert('outlined')} variant='outlined'>outlined</Button>
                    <Button size="large" onClick={() => alert('outlined')} variant='outlined'>outlined</Button>
                    <Button size="large" onClick={() => alert('outlined')} variant='outlined' disabled>outlined</Button>
                </div>
                <div className={styles.into_part}>
                    <Button size="small" onClick={() => alert('text')} variant='text' >text</Button>
                    <Button size="medium" onClick={() => alert('text')} variant='text'>text</Button>
                    <Button size="large" onClick={() => alert('text')} variant='text'>text</Button>
                    <Button size="large" onClick={() => alert('text')} variant='text' disabled>text</Button>
                </div>
            </div>
        </div>
    );
};
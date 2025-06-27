import React, { useState } from 'react';

import { Button } from '../src/components/Button/Button';
import { Select } from '../src/components/Select/Select';
import { Switch } from '../src/components/Switch/Switch';
import { TextField } from '../src/components/TextField/TextField';
import * as styles from './App.module.scss';

export const App = () => {
  const [value, setValue] = useState('');
  const [value1, setValue1] = useState('');

  const [isChecked, setIsChecked] = useState(false);

  const [selected, setSelected] = React.useState<string | number | null>(null);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Demo</h1>
      <div className={styles.part}>
        <h3>Buttons</h3>
        <div className={styles.into_part}>
          <Button size="small" onClick={() => alert('contained')}>
            contained
          </Button>
          <Button size="medium" onClick={() => alert('contained')}>
            contained
          </Button>
          <Button size="large" onClick={() => alert('contained')}>
            contained
          </Button>
          <Button size="large" onClick={() => alert('contained')} disabled>
            contained
          </Button>
        </div>
        <div className={styles.into_part}>
          <Button
            size="small"
            onClick={() => alert('outlined')}
            variant="outlined">
            outlined
          </Button>
          <Button
            size="medium"
            onClick={() => alert('outlined')}
            variant="outlined">
            outlined
          </Button>
          <Button
            size="large"
            onClick={() => alert('outlined')}
            variant="outlined">
            outlined
          </Button>
          <Button
            size="large"
            onClick={() => alert('outlined')}
            variant="outlined"
            disabled>
            outlined
          </Button>
        </div>
        <div className={styles.into_part}>
          <Button size="small" onClick={() => alert('text')} variant="text">
            text
          </Button>
          <Button size="medium" onClick={() => alert('text')} variant="text">
            text
          </Button>
          <Button size="large" onClick={() => alert('text')} variant="text">
            text
          </Button>
          <Button
            size="large"
            onClick={() => alert('text')}
            variant="text"
            disabled>
            text
          </Button>
        </div>

        <div className={styles.part}>
          <h3>TextFields</h3>
          <TextField
            value={value}
            placeholder="Enter text"
            onChange={e => setValue(e.target.value)}
          />
          <TextField
            value={value1}
            placeholder="Enter text1"
            onChange={e => setValue1(e.target.value)}
            error={true}
          />
        </div>

        <div className={styles.part}>
          <h3>Switch</h3>
          <Switch checked={isChecked} onChange={setIsChecked} />
        </div>

        <div className={styles.part}>
          <h3>Select</h3>
          <Select
            label="Category"
            value={selected}
            onChange={setSelected}
            options={[
              { label: 'first', value: 1 },
              { label: 'second', value: 2 },
              { label: 'third', value: 3 },
            ]}
            placeholder="choose"
          />
        </div>
      </div>
    </div>
  );
};

import { useState } from 'react';

import * as styles from './App.module.scss';
import { Checkbox,TextField,Switch,Select,Button } from '@/index';
import { Modal } from '@/components/Modal/Modal';

export const App = () => {
  const [value, setValue] = useState('');
  const [value1, setValue1] = useState('');

  const [isChecked, setIsChecked] = useState(false);
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);

  const [selected, setSelected] = useState<string | number | null>(null);

  const [open, setOpen] = useState(false);

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
        <Switch checked={isChecked1} onChange={setIsChecked1} disabled />
      </div>

      <div className={styles.part}>
        <h3>Select</h3>
        <Select
          value={selected}
          onChange={setSelected}
          options={[
            { label: 'first', value: 1 },
            { label: 'second', value: 2 },
            { label: 'third', value: 3 },
          ]}
          placeholder="Category"
        />
      </div>

      <div className={styles.part}>
        <h3>Checkbox</h3>
        <Checkbox checked={isChecked2} onChange={setIsChecked2} />
        <Checkbox checked={isChecked3} onChange={setIsChecked3} disabled />
      </div>

      <div className={styles.part}>
      <Button onClick={() => setOpen(true)} size={'large'}>open modal</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <h2>Hi!</h2>
        <p>It's modal window</p>
      </Modal>
      </div>
    </div>
  );
};

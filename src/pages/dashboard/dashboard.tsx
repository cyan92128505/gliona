import { Button } from '@material-ui/core';
import React from 'react';
import Counter from '../../components/Counter/Counter';
import { Hello } from '../../components/hello/hello';
import { IUIStore, UIStore } from '../../providers/ui_store';
import './dashboard.css';

function toggleMode(s: IUIStore) {
  s.isDarkMode = !s.isDarkMode;
}

function Dashboard() {
  const isDarkMode = UIStore.useState((s) => s.isDarkMode);

  return (
    <div
      className="dashboard"
      style={{
        background: isDarkMode ? '#282c34' : 'white',
        color: isDarkMode ? 'white' : '#282c34',
      }}
    >
      <header className="dahsboard-header">
        <Hello />
        <Counter />
        <br />
        <Button variant="contained" color="primary" onClick={() => UIStore.update(toggleMode)}>
          Toggle Dark Mode
        </Button>{' '}
      </header>
    </div>
  );
}

export default Dashboard;

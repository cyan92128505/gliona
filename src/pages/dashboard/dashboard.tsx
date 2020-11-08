import React from 'react';
import Counter from '../../components/Counter/Counter';
import { Hello } from '../../components/hello/hello';
import './dashboard.css';

function Dashboard() {
  return (
    <div className="dahsboard">
      <header className="dahsboard-header">
        <Hello />
        <Counter />
      </header>
    </div>
  );
}

export default Dashboard;

import React, { useState } from 'react';
import styles from './Counter.module.scss';

type Props = {
  initialClick?: number;
};

const Counter: React.FC<Props> = ({ initialClick = 0 }) => {
  const [click, setClick] = useState(initialClick);

  return (
    <div className={styles.hello}>
      <p>Click: {click}</p>
      <button onClick={() => setClick(click + 1)}>Click Me!</button>
    </div>
  );
};

export default Counter;

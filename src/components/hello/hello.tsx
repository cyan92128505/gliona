import React from 'react';
import styles from './hello.module.scss';

export const Hello: React.FC<{ name?: string }> = ({ name = `world` }) => {
  return (
    <div className={styles.hello} data-testid="hello">
      hello {name}
    </div>
  );
};

import React from 'react';
import PropTypes from 'prop-types';

import styles from './hello.module.scss';

type Prop = { name?: string };

export const Hello: React.FC<Prop> = ({ name = `world` as string }) => {
  return (
    <div className={styles.hello} data-testid="hello">
      hello {name}
    </div>
  );
};

Hello.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Hello;

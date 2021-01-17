import React from 'react';
import PropTypes from 'prop-types';

import styles from './hello.module.scss';
import { AppMainLogo } from '../shared/app_icons';

type Prop = { name?: string };

export const Hello: React.FC<Prop> = ({ name = `world` as string }) => {
  return (
    <div className={styles.hello} data-testid="hello">
      <AppMainLogo />
      hello {name}
    </div>
  );
};

Hello.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Hello;

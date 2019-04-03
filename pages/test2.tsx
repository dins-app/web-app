import React, { useContext } from 'react';
import { Context } from '../components';
import { NextStatelessComponent } from 'next';

const test2: NextStatelessComponent<{}> = (): JSX.Element => {
  const context = useContext(Context);
  return <div style={{ margin: '80px' }}>{context.state.data}</div>;
};

test2.getInitialProps = async (): Promise<any> => {
  await alert('is this thing on: says the next page');
  const posts = [];
  return { posts };
};

export default test2;

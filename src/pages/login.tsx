import { Input, Button } from 'antd';
import { useState } from 'react';
import { useModel } from 'umi';

import styles from './login.less';

export default function IndexPage() {
  const { signin, loading } = useModel('useAuthModel');

  const [usernameState, setUsernameState] = useState('');
  const [passwordState, setPasswordState] = useState('');

  const loadingElement = loading && <div>loading...</div>;

  return (
    <div>
      <h1 className={styles.title}>Login</h1>
      {loadingElement}
      <Input
        placeholder="Username"
        onInput={(e) => {
          setUsernameState(e.currentTarget.value);
        }}
      />
      <Input
        placeholder="Password"
        onInput={(e) => {
          setPasswordState(e.currentTarget.value);
        }}
      />
      <Button
        type="primary"
        onClick={() => signin(usernameState, passwordState)}
      >
        Login
      </Button>
    </div>
  );
}

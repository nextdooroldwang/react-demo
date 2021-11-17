import { useState, useCallback } from 'react';
import { useRequest, history } from 'umi';

export default function useAuthModel() {
  const [token, setToken] = useState();

  const { loading, run } = useRequest(
    (username, password) => ({
      url: '/api/users/login',
      method: 'post',
      data: { username, password },
    }),
    {
      manual: true,
      debounceInterval: 500,
      onSuccess: (res) => {
        setToken(res.data.token);
        history.push('/');
      },
    },
  );

  const signin = useCallback(
    (username: string, password: string) => {
      run(username, password);
    },
    [run],
  );

  const signout = useCallback(() => {
    setToken(undefined);
  }, []);

  return {
    loading,
    token,
    signin,
    signout,
  };
}

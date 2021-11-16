import { IRouteComponentProps, Redirect, useAccess, useModel } from 'umi';

export default (props: IRouteComponentProps) => {
  const access = useAccess();
  const { token } = useModel('useAuthModel');
  const isLogin = access.isLogin;

  if (isLogin(token)) {
    return <>{props.children}</>;
  } else {
    return <Redirect to="/login" />;
  }
};

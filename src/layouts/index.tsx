import { IRouteComponentProps } from 'umi';

export default function Layout({ children, location }: IRouteComponentProps) {
  if (location.pathname === '/login') {
    return <div>Login----{children}</div>;
  }

  return <div>Layout----{children}</div>;
}

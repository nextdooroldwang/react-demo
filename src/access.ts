export default function () {
  return {
    isAdmin: (role: string) => role === 'admin',
    isLogin: (token?: string) => token,
  };
}

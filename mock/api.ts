import mockjs from 'mockjs';

export default {
  '/api/initial': mockjs.mock({ 'id|1': 1, nickname: mockjs.Random.name() }),

  'POST /api/users/login': mockjs.mock(() => {
    return {
      data: { token: '123' },
      code: 200,
      msg: 'suceess',
    };
  }),
};

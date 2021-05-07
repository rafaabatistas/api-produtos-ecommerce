const user = process.env.USER_ENV;
const pass = process.env.PASS_ENV;

module.exports = {
  production: {
    client: 'pg',
    connection: {
      database: 'bd_ibira',
      user: user,
      password: pass,
    },
  }
};

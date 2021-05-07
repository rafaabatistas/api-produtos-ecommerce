const user = process.env.USER_ENV;
const pass = process.env.PASS_ENV;
const hostRemoto = process.env.HOST_REMOTO;
const userRemoto = process.env.USER_REMOTO;
const passRemoto = process.env.PASS_REMOTO;
const databaseRemoto = process.env.DATABASE_REMOTO;

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'bd_ibira',
      user: user,
      password: pass,
    }
  },
  production: {
    client: 'pg',
    connection: {
      host: hostRemoto,
      database: databaseRemoto,
      user: userRemoto,
      password: passRemoto,
    }
  }
};

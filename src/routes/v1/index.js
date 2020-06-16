const userRoute = require('./userRoute');
const companyRoute = require('./companyRoute');

module.exports = (app) => {
  app.use('/api/v1/user', userRoute);
  app.use('/api/v1/company', companyRoute);
};

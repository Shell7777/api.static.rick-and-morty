
const serverless = require('serverless-http');
const logger = require("./logger")
const app = require('./app');
//module.exports.handler = serverless(app);

const serverlessHandler = serverless(app);

module.exports.handler = async (event, context) => {
  logger.addContext(context);
  logger.info('Lambda invoked', {
    path: event.rawPath,
    method: event.requestContext.http.method
  });
   logger.appendKeys({
    stage: process.env.STAGE || 'dev',
    path: event.rawPath,
    method: event.requestContext?.http?.method,
  });
    logger.info('Lambda invoked');

  return serverlessHandler(event, context);

};
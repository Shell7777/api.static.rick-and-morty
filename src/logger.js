const { Logger } = require('@aws-lambda-powertools/logger');

const logger = new Logger({
  serviceName: 'person-api',
  logLevel: process.env.LOG_LEVEL || 'INFO',
});

module.exports = logger;
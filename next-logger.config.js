/* eslint-disable unicorn/filename-case */
const pino = require('pino');

const logger = (defaultConfig) => {
  return pino({
    ...defaultConfig,
    formatters: {
      level: (label) => ({ level: label }),
    },
  });
};

module.exports = {
  logger,
};

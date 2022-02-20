import pino from 'pino';

export const createLogger = (name = ''): pino.Logger => {
  return pino({
    level: process.env.PINO_LOG_LEVEL || 'info',
    name,
  });
};

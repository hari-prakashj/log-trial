const { createLogger, transports, format} = require('winston')

const {combine,timestamp,printf} = format;

const myFormat = printf(({level,message,timestamp}) => {
    return `${timestamp}  ${level}: ${message}`;
});   
//   ----logging function----------

const logger = createLogger({ 
    transports: [
        new transports.File({
            filename:'info.log',
            level: 'info',
            format: format.combine(timestamp({format: 'DD-MM-YYYY HH:mm:ss'}),myFormat)
        }),
        new transports.File({
            filename:'error.log',
            level: 'error',
            format: format.combine(format.timestamp({format: 'DD-MM-YYYY HH:mm:ss'}),format.json(),myFormat)
        }),
    ]
})

module.exports = {logger}
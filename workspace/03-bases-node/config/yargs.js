const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Is the base of the multiplication table.'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'The base has to be a number.'
        }
        return true;
    })
    .option('u', {
        alias: 'until',
        type: 'number',
        demandOption: false,
        default: '10',
        describe: 'Until what number do you want to multipliply.'
    })
    .check((argv, options) => {
        if (isNaN(argv.u)) {
            throw 'The limit must be a number.'
        }
        return true;
    })
    .option('l', {
        alias: 'list',
        type: 'boolean',
        demandOption: false,
        default: false,
        describe: 'List the multiplication table per screen.'
    })
    .argv;

module.exports = argv;
const { createTable } = require('./helpers/multiplication');
const argv = require('./config/yargs');

console.clear();

createTable(argv.base, argv.l, argv.u)
    .then(outgoingMessage => console.log(`${outgoingMessage}`))
    .catch(err => console.log(`${err}`));
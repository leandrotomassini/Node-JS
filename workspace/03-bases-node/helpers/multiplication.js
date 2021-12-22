const fs = require('fs');
const colors = require('colors');

const createTable = async(base = 1, toList = false, until = 10) => {

    try {

        let exit = '';

        for (let i = 1; i <= until; i++) {
            exit += `${base} x ${i} ${'='} ${i*base}\n`;
        }

        if (toList) {
            console.log(`==================`.trap);
            console.log(`${base} table`.rainbow);
            console.log(`==================`.trap);
            console.log(exit.blue);
        }

        fs.writeFileSync(`./data/tabla-del-${base}.txt`, exit);

        return `The ${base} table file was created correctly.`.underline.green;

    } catch (error) {
        throw error;
    }
}

module.exports = {
    createTable
}
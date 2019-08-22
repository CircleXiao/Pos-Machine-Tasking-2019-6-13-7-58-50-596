const printReciept = require('../main');

it ('should settle the cart from barcodes to receipt', () => {
    expect(printReciept(['0001', '0003', '0005', '0003'])).toBe('Receipts\n------------------------------------------------\nCoca Cola\t\t\t3\t\t1\nPepsi-Cola\t\t\t5\t\t2\nDr Pepper\t\t\t7\t\t1\n\n------------------------------------------------\nPrice：20');
});

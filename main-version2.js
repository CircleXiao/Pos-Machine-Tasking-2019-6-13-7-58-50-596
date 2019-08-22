'use strict'

const goodsDataBase = [
    {"id": "0001", "name" : "Coca Cola", "price": 3},
    {"id": "0002", "name" : "Diet Coke", "price": 4},
    {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
    {"id": "0004", "name" : "Mountain Dew", "price": 6},
    {"id": "0005", "name" : "Dr Pepper", "price": 7},
    {"id": "0006", "name" : "Sprite", "price": 8},
    {"id": "0007", "name" : "Diet Pepsi", "price": 9},
    {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
    {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
    {"id": "0010", "name" : "Fanta", "price": 12}
];

function printReciept(barcodes) {
    var goodsInfo = queryGoodsDB(barcodes);
    var cartResult = checkoutCart(goodsInfo);
    var receipt = transformFormat(cartResult);
    return receipt;
}

function countItems(items) {
    let itemsMap = new Map();
    for (let i = 0; i < items.length; i++) {
        if (itemsMap.get(items[i]) == null) {
            itemsMap.set(items[i], 1);
        } else {
            itemsMap.set(items[i], itemsMap.get(items[i]) + 1);
        }       
    }
    return itemsMap;
    
}
console.log(countItems(['0001', '0003', '0005', '0003']));

function queryGoodsDB(barcodes) {
    const goodsDataBase = [
        {"id": "0001", "name" : "Coca Cola", "price": 3},
        {"id": "0002", "name" : "Diet Coke", "price": 4},
        {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
        {"id": "0004", "name" : "Mountain Dew", "price": 6},
        {"id": "0005", "name" : "Dr Pepper", "price": 7},
        {"id": "0006", "name" : "Sprite", "price": 8},
        {"id": "0007", "name" : "Diet Pepsi", "price": 9},
        {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
        {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
        {"id": "0010", "name" : "Fanta", "price": 12}
    ];

    if (barcodes !== null) {
        for (let i = 0; i < barcodes.length; i++) {
            const singleGoodsInfo = {};
            for (let j = 0; j < goodsDataBase.length; j++) {
                if (barcodes[i] === goodsDataBase[j].id) {
                    singleGoodsInfo.name = goodsDataBase[j].name;
                    singleGoodsInfo.price = goodsDataBase[j].price;
                    // TODO
                }
                
                
            }
            // TODO
            
        }
    }
}

function checkoutCart(goodsInfo) {
    // TODO
}

function transformFormat(cartResult) {
    // TODO
}

module.exports = printReciept;
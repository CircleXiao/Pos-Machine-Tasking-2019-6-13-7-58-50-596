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
    let itemsMap = countItems(barcodes);
    let cartGoodsInfo = fillItems(itemsMap);
    let totalMoney = calcuTotal(cartGoodsInfo);
    let receipt = createRecipt(cartGoodsInfo, totalMoney);
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

function fillItems(itemsMap) {
    let cartGoodsInfo = [];

    itemsMap.forEach(function (key, value) {
        cartGoodsInfo.push({id: value, count: key});
    });

    for (let i = 0; i < cartGoodsInfo.length; i++) {
        for (let j = 0; j < goodsDataBase.length; j++) {
            if (cartGoodsInfo[i].id === goodsDataBase[j].id) {
                cartGoodsInfo[i] = {
                    name: goodsDataBase[j].name,
                    price: goodsDataBase[j].price,
                    count: cartGoodsInfo[i].count
                };
            }           
        }       
    }
    return cartGoodsInfo; 
}

function calcuTotal(cartGoodsInfo) {
    let totalMoney = 0;
    for (let i = 0; i < cartGoodsInfo.length; i++) {
        totalMoney += cartGoodsInfo[i].price * cartGoodsInfo[i].count;       
    }
    return totalMoney;   
}

function createRecipt(cartGoodsInfo, totalMoney) {
    let separator = '\n------------------------------------------------\n';
    let receiptTitle = 'Receipts' + separator;
    let receiptBody = createReciptBody(cartGoodsInfo);
    let receiptFooter = separator + 'Price：' + totalMoney; 
    let receipt = receiptTitle + receiptBody + receiptFooter;
    return receipt;
}

function createReciptBody(cartGoodsInfo) {
    let receiptBody = '';
    for (let i = 0; i < cartGoodsInfo.length; i++) {
        receiptBody += cartGoodsInfo[i].name + '\t\t\t' + cartGoodsInfo[i].price + '\t\t' + cartGoodsInfo[i].count + '\n';     
    }
    return receiptBody;
}

module.exports = printReciept;


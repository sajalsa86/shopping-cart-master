//iPhone 11 128GB Black balanceMobile
document.getElementById('plusBtnMobile').addEventListener('click', function () {

    const newFieldNumber = updateFieldNumber('countMobile', true);
    getElementTotalBalance(newFieldNumber, 1219, 'balanceMobile');
    calculateSubtotal();

});

document.getElementById('minusBtnMobile').addEventListener('click', function () {

    const newFieldNumber = updateFieldNumber('countMobile', false);
    getElementTotalBalance(newFieldNumber, 1219, 'balanceMobile');
    calculateSubtotal();
});

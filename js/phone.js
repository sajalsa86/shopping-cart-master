//iPhone 11 128GB Black balanceMobile
document.getElementById('plusBtnMobile').addEventListener('click', function () {

    const newFieldNumber = updateFieldNumber('countMobile', true);
    getElementTotalBalance(newFieldNumber, 1200, 'balanceMobile');
    calculateSubtotal();

});

document.getElementById('minusBtnMobile').addEventListener('click', function () {

    const newFieldNumber = updateFieldNumber('countMobile', false);
    getElementTotalBalance(newFieldNumber, 1200, 'balanceMobile');
    calculateSubtotal();
});

document.getElementById('mobileItem').addEventListener('click', function () {
    deleteCartItem('delete-first-item');
});
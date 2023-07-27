//iPhone 11 Silicone Case - Black
document.getElementById('plusBtnCase').addEventListener('click', function () {

    const newFieldNumber = updateFieldNumber('countCase', true);
    getElementTotalBalance(newFieldNumber, 59, 'balanceCase');
    calculateSubtotal();
});

document.getElementById('minusBtnCase').addEventListener('click', function () {

    const newFieldNumber = updateFieldNumber('countCase', false);
    getElementTotalBalance(newFieldNumber, 59, 'balanceCase');
    calculateSubtotal();
}); 
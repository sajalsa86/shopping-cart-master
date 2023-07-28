document.getElementById('plusBtnComputer').addEventListener('click', function () {
    const newFieldNumber = updateFieldNumber('countComputer', true);
    getElementTotalBalance(newFieldNumber, 5000, 'balanceComputer');
    calculateSubtotal();
});

document.getElementById('minusBtnComputer').addEventListener('click', function () {
    const newFieldNumber = updateFieldNumber('countComputer', false);
    getElementTotalBalance(newFieldNumber, 5000, 'balanceComputer');
    calculateSubtotal();
});
document.getElementById('computerItem').addEventListener('click', function () {
    deleteCartItem('delete-third-item');
});
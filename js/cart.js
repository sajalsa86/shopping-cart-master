//utility
function updateFieldNumber(fieldId, isIncrese) {
    const getNumberField = document.getElementById(fieldId);
    const getNumberString = getNumberField.value;
    const previousFieldNumber = parseInt(getNumberString);
    let newFieldNumber;
    if (isIncrese === true) {
        newFieldNumber = previousFieldNumber + 1;
    }
    else {
        newFieldNumber = previousFieldNumber - 1;
    }
    //set value
    getNumberField.value = newFieldNumber;
    return newFieldNumber;
};

//iPhone 11 128GB Black
document.getElementById('plusBtnMobile').addEventListener('click', function () {

    updateFieldNumber('countMobile', true);
});

document.getElementById('minusBtnMobile').addEventListener('click', function () {

    updateFieldNumber('countMobile', false);

});

//iPhone 11 Silicone Case - Black
document.getElementById('plusBtnCase').addEventListener('click', function () {

    updateFieldNumber('countCase', true);

});

document.getElementById('minusBtnCase').addEventListener('click', function () {

    updateFieldNumber('countCase', false);
}); 
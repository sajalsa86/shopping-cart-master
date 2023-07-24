
document.getElementById('plusBtnMobile').addEventListener('click', function () {
    const countInputField = document.getElementById('countMobile');
    const countInputValueString = countInputField.value;
    const privousCountInputValue = parseInt(countInputValueString);
    const newCountInputValue = privousCountInputValue + 1;
    //set value
    countInputField.value = newCountInputValue;
});

document.getElementById('minusBtnMobile').addEventListener('click', function () {
    const countInputField = document.getElementById('countMobile');
    const countInputValueString = countInputField.value;
    const privousCountInputValue = parseInt(countInputValueString);
    const newCountInputValue = privousCountInputValue - 1;
    //set value
    countInputField.value = newCountInputValue;
});

//utility function-1
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
//utility function-2
function getElementTotalBalance(newFieldNumber, elementValue, elementid) {
    const totalPriceOfElement = newFieldNumber * elementValue;
    const balanceElement = document.getElementById(elementid);
    balanceElement.innerText = totalPriceOfElement;
};

//utility function-3
function getElementTotalOfValue(totalElementId) {
    const totalElement = document.getElementById(totalElementId);
    const totalElementString = totalElement.innerText;
    const totalElementValue = parseInt(totalElementString);
    return totalElementValue;
};
//sub-total
function calculateSubtotal() {
    const totalElementValueOfMobile = getElementTotalOfValue('balanceMobile');
    const totalElementValueOfCase = getElementTotalOfValue('balanceCase');
    const currentSubTotal = totalElementValueOfMobile + totalElementValueOfCase;
    const subTotalElement = document.getElementById('sub-total');
    subTotalElement.innerText = currentSubTotal;
};


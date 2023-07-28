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

function setTextElementById(textElement, value) {
    const subTotalElement = document.getElementById(textElement);
    subTotalElement.innerText = value;
}
function calculateSubtotal() {
    //calculate total
    const totalElementValueOfMobile = getElementTotalOfValue('balanceMobile');
    const totalElementValueOfCase = getElementTotalOfValue('balanceCase');
    const totalElementValueOfComputer = getElementTotalOfValue('balanceComputer');
    const currentSubTotal = totalElementValueOfMobile + totalElementValueOfCase + totalElementValueOfComputer;
    setTextElementById('sub-total', currentSubTotal);
    //calculate tax
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementById('tax-amout', taxAmount);
    //final calculate
    const finalAmount = currentSubTotal + taxAmount;
    setTextElementById('final-total', finalAmount);
};

function deleteCartItem(itemId) {
    const deleteItem = document.getElementById(itemId);
    deleteItem.style.display = 'none';
}


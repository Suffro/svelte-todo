export const removeFromArray = (arrToRemoveFrom, elementToRemove) => {
    let array = arrToRemoveFrom;
    let index = array.indexOf(elementToRemove);
    if (index !== -1) {
        array.splice(index, 1);
    }
    return (array);
}
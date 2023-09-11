export const noReactive = (el) => {
    return JSON.parse(JSON.stringify(el));
};
export const getDifference = (arr1, arr2) => {
    return arr1.filter(
        (object1) => !arr2.some((object2) => object1.id === object2.id)
    );
};

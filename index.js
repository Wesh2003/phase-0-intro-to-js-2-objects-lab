// Write your solution in this file!
const employee = {
    name: "Jimmy",
    streetAddress: "12 Broadway",

};

function updateEmployeeWithKeyAndValue(empl, ky, val) {
    let newemploy = {...empl};
    newemploy.ky = val;
    return newemploy;

}
function destructivelyUpdateEmployeeWithKeyAndValue(empl, ky, val) {
    empl.ky = val;
    return empl;

}

function deleteFromEmployeeByKey(empl, ky) {
    let newemploy = {...empl};
    delete newemploy.ky;
    return newemploy;
}

function destructivelyDeleteFromEmployeeByKey(empl, ky) {
    delete empl.ky;
    return empl;
}

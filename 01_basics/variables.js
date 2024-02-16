const accountId = 144553//cannot change the constant variables

let accountEmail = "Kottarychethan@gmail.com"
var accountPassword="12345"
accountCity = "Jaipur"
let accountState;
// accountId = 2
accountEmail="test@gmail.com"
accountPassword="54321"
accountCity="Mangalore"

console.log(accountId);
console.table([accountEmail,accountId,accountPassword,accountCity,accountState])

// prefer not using var. instead use let and const
// because of scope issues({})
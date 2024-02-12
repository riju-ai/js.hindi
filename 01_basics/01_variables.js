const accountId = 144553
let accountEmail = "swarnava@google.com "
var accountPassword = "12345"
accountCity = "kolkata"
let accountState; /*if there is no value added in variable 
then the javascript declear this as undefined. */


// accountId = 2  // not allowed ( because we use const previously )

accountEmail = "sd@sd.com"
accountPassword = "qywtfda"
accountCity = "jaypur"

console.log(accountId);

/* prefer not to use var 
   because of issue in block scope and functional scope */

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);

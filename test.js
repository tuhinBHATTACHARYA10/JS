const accountId = '1234567890';
let accountEmail = 'user@example.com';
var accountPassword = 'securePassword123';
accountCity = 'New York';

console.log(`Account ID is: ${accountId}`);
console.table([accountId, accountEmail, accountPassword, accountCity]);
accountEmail = 'newuser@example.com';
accountPassword = 'newSecurePassword456';
accountCity = 'Los Angeles';
console.log(`Updated Account Email is: ${accountEmail}`);
console.table([accountId, accountEmail, accountPassword, accountCity]);
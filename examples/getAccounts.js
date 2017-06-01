var getRoutes = require('../lib/getRoutes.js');

var options = {
  user: process.env.JAMF_API_USER,
  password: process.env.JAMF_API_PASSWORD,
  jamfUrl: process.env.JAMF_URL,
  json: true
}

getRoutes.getAccounts(options);
var JamfApiClient = require('jamf');

var config = {
  user: process.env.JAMF_API_USER,
  password: process.env.JAMF_API_PASSWORD,
  jamfUrl: process.env.JAMF_URL,
  format: 'json'
}

var jamf = new JamfApiClient(config);

// Get a list of all JSS accounts
jamf.get('/accounts', function (err, res){
  if (err) console.log(err)
  console.log(res)
});

// Get information on computer #32
jamf.get('/computers/id/32', function (err, res){
  if (err) console.log(err)
  console.log(res)
});

// Get the the Scopes subset of information about OS X Configuration Profile #3
jamf.get('/osxconfigurationprofiles/id/3/subset/Scopes', function (err, res){
  if (err) console.log(err)
  console.log(res)
});

// Add mobile device #85 to group #17
var xml = '<?xml version="1.0" encoding="UTF-8"?><mobile_device_group><mobile_device_additions><mobile_device><id>85</id></mobile_device></mobile_device_additions></mobile_device_group>';
jamf.put('/mobiledevicegroups/id/17', xml, function (err, res){
  if (err) console.log(err)
  console.log(res)
});

// Send a blank push to mobile device #85
var xml = ''; // Not all device commands require XML
jamf.post('/mobiledevicecommands/command/BlankPush/id/85', xml, function(err, res){
  if (err) console.log(err)
  console.log(res)
});

const figlet = require('figlet');

figlet("Neeraj Negi!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

// npm install package_name
// npm install -g package_name
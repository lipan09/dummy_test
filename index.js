const http = require('./src/server/http');

http.listen(process.env.PORT || 5000, function() {
    console.log("Server running");
    console.log("Host : "+process.env.DB_HOST);
    console.log("Port : "+ process.env.PORT || 5000);
});
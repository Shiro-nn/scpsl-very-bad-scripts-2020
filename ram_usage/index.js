const express = require("express");
const si = require('systeminformation');
app = express();
app.get('*', async function (req, res, next) {
    const memoryUsage = await si.mem();
    let memory = `${Math.round(memoryUsage.used/memoryUsage.total*100)}`;
    res.send(memory);
});
app.listen(1337, 'localhost', function() {
    console.log("... port %d in %s mode", app.address().port, app.settings.env);
});
process.on("unhandledRejection", (err) => {});
process.on("uncaughtException", (err) => {});
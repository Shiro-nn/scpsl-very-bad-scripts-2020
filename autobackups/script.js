const fs = require('fs');
const os = require("os");
const { exec } = require('child_process');
const path = require('path');
const _home = os.homedir();
const backupsDir = path.join(_home, 'mongobackups');
setInterval(() => {
    if (!fs.existsSync(backupsDir)) fs.promises.mkdir(backupsDir, {recursive: true});
    const _dateName = GetDate();
    const _backupDir = path.join(backupsDir, _dateName);
    if (!fs.existsSync(_backupDir)) fs.promises.mkdir(_backupDir, {recursive: true});
    exec(`mongodump --uri="mongodb://fydne:<pass>@scpsl.database.fydne.dev:27020" --out ${_backupDir}`, () => {
        setTimeout(() => exec(`cd ${backupsDir} && zip -r backup-${_dateName}.zip ${_dateName}`, () => {
            setTimeout(() => {try{fs.rmSync(_backupDir, {recursive:true});}catch{}}, 1000);
        }), 1000);
    });
}, 1000 * 60 * 60 * 24);
function GetDate(){
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    if (parseInt(day) < 10) {
        var t = "0";
        t += day;
        day = t;
    }
    if (parseInt(month) == 13) {
        month = "01";
        year = date.getFullYear() + 1;
    }
    if (parseInt(month) < 10) {
        var t = "0";
        t += month;
        month = t;
    }
    return day + "." + month + "." + year;
}
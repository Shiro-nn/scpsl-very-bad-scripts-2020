const { exec } = require("child_process");
(async() => {
console.log('Запуск инфраструктуры...');
exec(`tmux kill-session -t mongodb`, () => {
    setTimeout(() => exec(`tmux new -s mongodb -d`, () => {
        setTimeout(() => exec(`tmux send-keys -t mongodb 'clear && /usr/bin/mongod --config /home/qurre/mongodb/mongod.conf' && tmux send-keys -t mongodb Enter`, () => {
            setTimeout(() => exec(`pm2 stop qurre_startup`), 1000);
        }), 500);
    }), 1000);
});
console.log('Инфраструктура запущена');
setInterval(() => {}, 1000000);
})();
function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}
process.on("unhandledRejection", (err) => console.error(err));
process.on("uncaughtException", (err) => console.error(err));
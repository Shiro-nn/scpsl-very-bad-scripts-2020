const { exec } = require("child_process");
(async() => {
console.log('Запуск инфраструктуры...');
exec(`tmux kill-session -t system`, () => {
    setTimeout(() => exec(`tmux new -s system -d`, () => {
        setTimeout(() => exec(`tmux send-keys -t system 'clear && /home/modules/system-stats' && tmux send-keys -t system Enter`, () => {
            
            exec(`tmux kill-session -t abs`, () => {
                setTimeout(() => exec(`tmux new -s abs -d`, () => {
                    setTimeout(() => exec(`tmux send-keys -t abs 'clear && /home/modules/abs' && tmux send-keys -t abs Enter`, () => {
                        setTimeout(() => exec(`pm2 stop mod_startup`), 1000);
                    }), 500);
                }), 1000);
            });

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
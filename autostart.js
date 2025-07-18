const { exec } = require("child_process");
const net = require('net');
Init();
async function Init() {
    console.log('Запуск инфраструктуры...');
    exec(`tmux new -s QurreBot -d`, ()=>{
        setTimeout(() => exec(`tmux send-keys -t QurreBot 'cd /root/js/QurreBot' && tmux send-keys -t QurreBot Enter`, ()=>{
            setTimeout(() => exec(`tmux send-keys -t QurreBot 'clear && node .' && tmux send-keys -t QurreBot Enter`), 100);
        }), 100);
    });
    exec(`tmux new -s freeze -d`, ()=>{
        setTimeout(() => exec(`tmux send-keys -t freeze 'cd /root/modules' && tmux send-keys -t freeze Enter`, ()=>{
            setTimeout(() => exec(`tmux send-keys -t freeze 'chmod 555 ./fix_freeze && clear && ./fix_freeze' && tmux send-keys -t freeze Enter`), 100);
        }), 100);
    });
    exec(`tmux new -s logs -d`, ()=>{
        setTimeout(() => exec(`tmux send-keys -t logs 'cd /root/modules' && tmux send-keys -t logs Enter`, ()=>{
            setTimeout(() => exec(`tmux send-keys -t logs 'chmod 555 ./scpdiscordlogs-linux && clear && ./scpdiscordlogs-linux' && tmux send-keys -t logs Enter`), 100);
        }), 100);
    });
    exec(`tmux new -s ral -d`, ()=>{
        setTimeout(() => exec(`tmux send-keys -t ral 'cd /root/modules' && tmux send-keys -t ral Enter`, ()=>{
            setTimeout(() => exec(`tmux send-keys -t ral 'chmod 555 ./ral-linux && clear && ./ral-linux' && tmux send-keys -t ral Enter`), 100);
        }), 100);
    });
    exec(`tmux new -s ram -d`, ()=>{
        setTimeout(() => exec(`tmux send-keys -t ram 'cd /root/modules' && tmux send-keys -t ram Enter`, ()=>{
            setTimeout(() => exec(`tmux send-keys -t ram 'chmod 555 ./ram_usage-linux && clear && ./ram_usage-linux' && tmux send-keys -t ram Enter`), 100);
        }), 100);
    });
    exec(`tmux new -s stats -d`, ()=>{
        setTimeout(() => exec(`tmux send-keys -t stats 'cd /root/modules' && tmux send-keys -t stats Enter`, ()=>{
            setTimeout(() => exec(`tmux send-keys -t stats 'chmod 555 ./system-stats-linux && clear && ./system-stats-linux' && tmux send-keys -t stats Enter`), 100);
        }), 100);
    });
    exec(`tmux new -s medium -d`, ()=>{
        setTimeout(() => exec(`tmux send-keys -t medium 'cd /root/scp && ./LocalAdmin 7666' && tmux send-keys -t medium Enter`), 100);
    });
    await sleep(5000);
    exec(`tmux new -s ffon -d`, ()=>{
        setTimeout(() => exec(`tmux send-keys -t ffon 'cd /root/scp && ./LocalAdmin 7777' && tmux send-keys -t ffon Enter`), 100);
    });
    await sleep(5000);
    exec(`tmux new -s ffoff -d`, ()=>{
        setTimeout(() => exec(`tmux send-keys -t ffoff 'cd /root/scp && ./LocalAdmin 7778' && tmux send-keys -t ffoff Enter`), 100);
    });
    await sleep(5000);
    exec(`tmux new -s nr5 -d`, ()=>{
        setTimeout(() => exec(`tmux send-keys -t nr5 'cd /root/scp && ./LocalAdmin 7779' && tmux send-keys -t nr5 Enter`), 100);
    });
    await sleep(5000);
    exec(`tmux new -s clans -d`, ()=>{
        setTimeout(() => exec(`tmux send-keys -t clans 'cd /root/scp && ./LocalAdmin 7788' && tmux send-keys -t clans Enter`), 100);
    });
    console.log('Инфраструктура запущена');
    net.createServer(function(sock) {sock.on("error", function() {});}).listen(5182, 'localhost');
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
process.on("unhandledRejection", (err) => console.error(err));
process.on("uncaughtException", (err) => console.error(err));
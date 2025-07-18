const { execSync } = require('child_process');
const sleep = async(ms) => new Promise(resolve => setTimeout(resolve, ms));

(async() => {
    await sleep(4000);
    try{execSync('tmux send-keys -t nr \'sr\' && tmux send-keys -t nr Enter');}catch{}
    await sleep(1000);
    try{execSync('tmux kill-session -t nr');}catch{}
    await sleep(1000);
    execSync('tmux new -s nr -d');
    await sleep(500);
    execSync('tmux send-keys -t nr \'cd ~/server && ./LocalAdmin 7779\' && tmux send-keys -t nr Enter');
    await sleep(1000);
    try{execSync('tmux send-keys -t mrp \'sr\' && tmux send-keys -t mrp Enter');}catch{}
    await sleep(1000);
    try{execSync('tmux kill-session -t mrp');}catch{}
    await sleep(1000);
    execSync('tmux new -s mrp -d');
    await sleep(500);
    execSync('tmux send-keys -t mrp \'cd ~/server && ./LocalAdmin 7666\' && tmux send-keys -t mrp Enter');
    await sleep(2000);
    execSync('pm2 stop verify');
})();
setInterval(() => {}, 1000000);

process.on('unhandledRejection', (err) => console.error(err));
process.on('uncaughtException', (err) => console.error(err));
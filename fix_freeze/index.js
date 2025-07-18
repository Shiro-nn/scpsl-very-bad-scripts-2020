const net = require('net');
const { exec } = require("child_process");
const servers = [
    {id: 1, name: 'ff:off', tmux: 'ffoff'},
    {id: 2, name: 'ff:on', tmux: 'ffon'},
    {id: 3, name: 'NoRules #1', tmux: 'scp'},
    {id: 4, name: 'NoRules #2', tmux: 'nr'},
    {id: 5, name: 'NoRules #3', tmux: 'scp'},
    {id: 6, name: 'NoRules #4', tmux: 'scp'},
    {id: 7, name: 'NoRules #5', tmux: 'nr5'},
    {id: 8, name: 'Medium RP', tmux: 'medium'},
    {id: 9, name: 'ClansWars', tmux: 'clans'},
    {id: 10, name: 'Anarchy', tmux: 'anarchy'},
    {id: 11, name: 'NoRules #6', tmux: 'nr6'},
];
CreateNet();
function CreateNet() {
    net.createServer(function(sock) {
        sock.on('data', function(data) {
            const array = data.toString().split(':');
            const _data = parseInt(array[0]);
            const port = parseInt(array[1]);
            if(JSON.parse(array[2].toLowerCase())){
                const _tmux = servers.find(x => x.id == _data).tmux;
                exec(`tmux send-keys -t ${_tmux} C-c`, ()=>{
                    setTimeout(() => exec(`tmux send-keys -t ${_tmux} 'cd /root/scp && ./LocalAdmin ${port}' && tmux send-keys -t ${_tmux} Enter`), 100);
                });
            }
        });
        sock.on("error", function() {});
    }).listen(836, 'localhost');
}
process.on("unhandledRejection", (err) => console.error(err));
process.on("uncaughtException", (err) => console.error(err));
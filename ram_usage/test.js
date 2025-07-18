(async()=>{
    const si = require('systeminformation');
    const memoryUsage = await si.mem();
    console.log(`${Math.round(memoryUsage.used/memoryUsage.total*100)}`);
})();
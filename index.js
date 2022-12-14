const compile = require("@adguard/hostlist-compiler");
const core = require('@actions/core');
const fs = require('fs');

;(async () => {
    // Compile filters
    var obj = JSON.parse(fs.readFileSync(core.getInput("config"), 'utf8'));

    const result = await compile(obj);
    
    // Write to file
    fs.writeFileSync(core.getInput("output"), result.join('\n'));
})();
#!/usr/bin/env node
const router = require('./interfaces/cli/router');

const args = process.argv.slice(2);
const mainCommand = args[0];

router(mainCommand)(args);

return;

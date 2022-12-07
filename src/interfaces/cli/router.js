const commands = require('../../commands');

function router(mainCommand) {
	switch (mainCommand) {
		case 'hello':
			return commands.hello;
		default:
			return commands.defaultScreen;
	}
}

module.exports = router;

log('Welcome to the terminal playground!')

// Command - Hey

register_cmd('hey', function (cmd) {
	var parameters = cmd.split(' ').slice(1)
	for (var i = 0; i < parameters.length; i++) {
		block_log('Hello ' + parameters[i])
	}
})

// Command - Sum

register_cmd('sum', function (cmd) {
	var parameters = cmd.split(' ').slice(1)
	var sum = 0
	for (var i = 0; i < parameters.length; i++) {
		sum += parseInt(parameters[i])
	}
	block_log('Sum: ' + sum)
})

// Command - Diff

register_cmd('diff', function (cmd) {
	var parameters = cmd.split(' ').slice(1)
	var diff = 0
	for (var i = 0; i < parameters.length; i++) {
		if (i == 0) {
			diff += parseInt(parameters[i])
		} else {
			diff -= parseInt(parameters[i])
		}
	}
	block_log('Difference: ' + diff)
})

update_user_title('hello @ user')

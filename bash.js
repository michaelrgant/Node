//OutPut a prompt

process.stdout.write('prompt > ')

//The stdin 'data' event fires after a user types in a line
process.stdin.on('data', (data) => {
    
    const cmd = process.cwd(data.toString().trim());

    process.stdout.write('you typed: ' + cmd);
    process.stdout.write('\nprompt > ');
});


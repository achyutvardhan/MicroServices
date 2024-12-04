const autocannon = require('autocannon');

const run = (url) => {
    const instance = autocannon({
        url: url,
        duration: 30
    });

    autocannon.track(instance);

    instance.on('done', (result) => {
        console.log(`Test completed for ${url}`);
        console.log(`Duration: ${result.duration} seconds`);
    });
};

run('http://localhost:3000/');
run('http://localhost:3000/stress-test');
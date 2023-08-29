// Import redis

import { createClient } from 'redis';

const client = createClient();
// checking server connection
client.on('connect',() => console.log('Redis client connected to the server'));
//checking sever connection and if it fail throw error message
client.on('error', (err) => console.log(`Redis client not connected to the server:${err.message}`));

function setNewSchool(schoolName, value){
	// set a redis value and print redis message
	client.set(schoolName, value, redis.print);
}

function displaySchoolValue(schoolName) {
	client.get(schoolName, (err, result) => {
	        if (err) {
			console.log(err);
			throw err;
		}
	console.log(result);
	});
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');

// Import redis

import { createClient } from 'redis';
import redis from 'redis';

const { promisify } = require('util');

const client = createClient();

const asyncGet = promisify(client.get).bind(client);
// checking server connection
client.on('connect',() => console.log('Redis client connected to the server'));
//checking sever connection and if it fail throw error message
client.on('error', (err) => console.log(`Redis client not connected to the server:${err.message}`));

function setNewSchool(schoolName, value){
	// set a redis value and print redis message
	client.set(schoolName, value, redis.print);
}

async function displaySchoolValue(schoolName) {
	console.log(await asyncGet(schoolName));
}

displaySchoolValue('Holberton');
setNewSchool('HolbertonSanFrancisco', '100');
displaySchoolValue('HolbertonSanFrancisco');

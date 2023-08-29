// Import redis

import { createClient } from 'redis';

const client = createClient();
// checking server connection
client.on('connect',() => console.log('Redis client connected to the server'));
//checking sever connection and if it fail throw error message
client.on('error', (err) => console.log(`Redis client not connected to the server:${err.message}`));

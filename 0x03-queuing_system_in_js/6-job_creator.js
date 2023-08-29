
const kue = require('kue')

const queue = kue.createQueue();

const queueName = 'push_notification_code';
const job = queue.create(queueName, {
    phoneNumber: 251947722051,
    message: 'This is my phone number'
}).save();

job.on('enqueue', () => console.log(`Notification job created: ${job.id}`))
    .on('complete', () => console.log('Notification job completed'))
    .on('failed', () => console.log('Notification job failed'));

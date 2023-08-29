import kue from 'kue';

const screenedNo = ['18781', '41381'];

const queue = kue.createQueue();
const queueName = 'push_notification_code_2';

function sendNotification(phoneNumber, message, job) {
    const total = 100;

    job.progress(0, total);

    if (screenedNo.includes(phoneNumber)) {
        done(Error(`Phone number ${phoneNumber} is screenedNo`));
        return;
    }

    job.progress(50, total);
    console.log(
        `Sending notification to ${phoneNumber}, with message: ${message}`
    );
    done();
}

queue.process(queueName, 2, (job, done) => {
    const { phoneNumber, message } = job.data;
    sendNotification(phoneNumber, message, job, done);
});

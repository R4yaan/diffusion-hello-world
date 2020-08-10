#!/usr/bin/env node
const diffusion = require('diffusion');

const args = process.argv.slice(2);
if (args.length < 5) {
    console.error(`wrong # args, try ${process.argv[1]} host principal credentials topic-path topic-value`);
    process.exit(1);
}
const [host, principal, credentials, topicPath, topicValue] = args;

diffusion.connect({
    host,
    principal,
    credentials,
}).then(session => {
    const stringType = diffusion.datatypes.string();
    const stringTopicSpec = new diffusion.topics.TopicSpecification(diffusion.topics.TopicType.STRING);

    return session.topicUpdate.set(topicPath, stringType, topicValue, {specification: stringTopicSpec})
}).then(() => {
    process.exit(0);
}).catch(error => {
    console.error(`Cannot set ${topicPath} on ${host}: ${error}`);
    process.exit(1);
})
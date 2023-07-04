#!/usr/bin/env node
const { Console } = require('console');
const diffusion = require('diffusion');

const args = process.argv.slice(2);
if (args.length < 4) {
    console.error(`wrong # args, try ${process.argv[1]} host principal credentials topic-path`);
    process.exit(1);
}
const [host, principal, credentials, topicPath, startValue] = args;

diffusion.connect({
    host,
    principal,
    credentials,
}).then(session => {
    const stringType = diffusion.datatypes.string();
    const stringTopicSpec = new diffusion.topics.TopicSpecification(diffusion.topics.TopicType.STRING);
    
    let i;
    const fs = require('fs');
    if (startValue != undefined){
        fs.writeFile('count.txt', startValue.toString(), (err) => {
            if (err) throw err;
        });
    }
    fs.readFile('count.txt', (err, inputD) => {
        if (err) throw err;
        i = parseInt(inputD, 10);
        let topicValue = `Hello World ${i}`;
        i++;
        fs.writeFile('count.txt', i.toString(), (err) => {
            if (err) throw err;
        });

        session.topicUpdate.set(topicPath, stringType, topicValue, { specification: stringTopicSpec })
            .then(() => {
                process.exit(0);
            })
            .catch(error => {
                console.error(`Cannot set ${topicPath} on ${host}: ${error}`);
                process.exit(1);
            });
    });
}).catch(error => {
    console.error(`Cannot connect to ${host}: ${error}`);
    process.exit(1);
});
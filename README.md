# Diffusion Cloud "Hello World"

The briefest of projects, illustrating publication and subscription of test data to and from a
Diffusion Cloud instance.

# Requirements
* A Diffusion Cloud service, version 6.5.0 or greater.
    * a new principal in Diffusion Cloud holding role `TOPIC_CONTROL`.
    * Configure your Diffusion Cloud service to allow anonymous sessions.
* node.js v12.
* npm v6.


# Installation

```
npm install
```

Taylor `public/index.html` line 18 to refer to your own Diffusion Cloud instance.

# Execution

```
npm run pub -- $HOST $USER $PASSWORD my/topic 'hello world!'
```
.. to create string topic `my/topic` with value `hello world!`.

```
npm run sub
```
... to run a minimal web server, and open a web browser that subscribes to the same Diffusion Cloud Service and subscribes to topic `my/topic`.

Re-run the publisher to change the value of `my/topic` and see the web-page update.

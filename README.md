# Diffusion Cloud "Hello World"

The briefest of projects, illustrating production and consumption of test data to and from a Diffusion Cloud instance.

# Requirements
* A Diffusion Cloud service, version 6.5.0 or greater.
    * Configure your Diffusion Cloud service to allow anonymous sessions.
* node.js v12.
* npm v6.
* A Web browser supported by Diffusion.

# Installation
```
npm install
```

Set lines 18 of `public/index.html` to the hostname of your Diffusion Cloud service, which you can find in your service dashboard.

# Execution

## Step 1
To create string topic `my/topic` with value `hello world!`:
```
npm run pub -- $HOST $USER $PASSWORD my/topic 'hello world!'
```
Where
* `$HOST` is the hostname of your Diffusion Cloud service, which you can find in your service dashboard.
* `$USER` will be `admin`, unless you create another principal holding the `TOPIC_CONTROL` role.
* `$PASSWORD` is the credentials for `$USER`


## Step 2
To run a minimal web server, and open a web browser that subscribes to the same Diffusion Cloud Service and subscribes to topic `my/topic`.

```
npm run sub
```

Re-run step 1 to change the value of `my/topic` and observe the web-page update.

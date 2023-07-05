# Diffusion "Hello World"

The briefest of projects, illustrating publishing and consumption of test data to and from a Diffusion instance.

# Requirements
* A Diffusion instance or cluster running locally, remotely or on the cloud
* node.js v12.
* npm v6.
* A Web browser supported by Diffusion.

# Installation
```
git clone https://github.com/R4yaan/diffusion-hello-world
cd ./diffusion-hello-world/
npm install
code .
```

Change HOST on line 18 of `public/index.html` to "localhost" if installed locally, or to the server name where diffusion is running on the cloud
Change the port in line 27 to 8080 or any specific port used by diffusion server \n Change secure on line 28 to false

1. Open the directory of the installation of Diffusion, open the folder 'clients', then 'js'
2. Copy the diffusion uniminified file and paste it into 'public/clientlib'
3. Copy the relative path for that file ('./clientlib/diffusion-unminified-6.9.1.js') to replace the url in line 15 of `public/index.html`

# Execution

## Step 1 - Running publisher
To create string topic `my/topic` with value `hello world!`:
```
npm run pub -- $HOST $USER $PASSWORD my/topic 'hello world!' $STARTVALUE
```
Where
* `$HOST` is 'localhost:8080' if you are running locally, else use the server host name where diffusion is running
* `$USER` will be `admin`, unless you create another principal holding the `TOPIC_CONTROL` role.
* `$PASSWORD` is the credentials for `$USER`, which is 'password' by default
* `$STARTVALUE` is the value you want to start iterating at after 'Hello World '. This can be left  empty to continue iterating


## Step 2 - Accessing the web console
Go to 'localhost:8080' on a web browser
Click 'Go to console'
Enter login information (Default - admin/password)
Go to the Topics section
In the Topic Browser, find my/topic and click on it
The current value should be 'hello world!'


## Step 3 - Running subscriber
```
npm run sub
```
This opens a webpage showing the value of my/topic


Re-run step 1 to change the value of `my/topic` and observe both web pages update.

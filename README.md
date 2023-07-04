# Diffusion "Hello World"

The briefest of projects, illustrating production and consumption of test data to and from a Diffusion instance.

# Requirements
* A Diffusion Local Host service, version 6.5.0 or greater.
* node.js v12.
* npm v6.
* A Web browser supported by Diffusion.

# Installation
```
npm install
```

Change HOST on line 18 of `public/index.html` to "localhost" and change the port in line 27 to 8080

Open the directory of the installation of Diffusion, open the folder 'clients', then open the folder 'js'
Copy the file 'diffusion-unminified-6.9.1.js' (possibly a different version), and paste it in 'public/clientlib'
Copy the relative path for that file ('./clientlib/diffusion-unminified-6.9.1.js') to replace the url in line 15 of `public/index.html`

# Execution

## Step 1
To create string topic `my/topic` with value `hello world!`:
```
npm run pub -- $HOST $USER $PASSWORD my/topic 'hello world!' $STARTVALUE
```
Where
* `$HOST` is 'localhost:8080'
* `$USER` will be `admin`, unless you create another principal holding the `TOPIC_CONTROL` role.
* `$PASSWORD` is the credentials for `$USER`, which is 'password' by default
* `$STARTVALUE` is the value you want to start iterating at after 'Hello World '. This can be left  empty to continue iterating


## Step 2
Go to 'localhost:8080' on a web browser
Click 'Go to console'
Enter login information (Default - admin/password)
Go to the Topics section
In the Topic Browser, find my/topic and click on it
The current value should be 'hello world!'

Alternatively:
```
npm run sub
```
This opens a webpage showing the value of my/topic


Re-run step 1 to change the value of `my/topic` and observe the both web-pages update.
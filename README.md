# Command Line Password Generator

Original video: [https://www.youtube.com/watch?v=3Xx83JAktXk](https://www.youtube.com/watch?v=3Xx83JAktXk)

Github Repo: [https://github.com/bradtraversy/passgen](https://github.com/bradtraversy/passgen)

Node.js command line app to generate random passwords

## Usage

Install dependencies

```
npm install
```

Run file

```
node index (options)
```

To create a symlink to run "passgen" from anywhere

```
npm link

# Now you can run
passgen (options)

# To remove symlink
npm unlink
```

## Options

| Short | Long              | Description                     |
| ----- | ----------------- | ------------------------------- |
| -l    | --length <number> | length of password (default: 8) |
| -s    | --save            | save password to passwords.txt  |
| -nn   | --no-numbers      | remove numbers                  |
| -ns   | --no-symbols      | remove symbols                  |
| -h    | --help            | display help for command        |
| -V    | --version         | Show the version                |

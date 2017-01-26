# nodejs-runner

## Usage

```
npm install nodejs-runner -g
mkdir /tmp/foo && cd /tmp/foo
echo 'console.log "hello world"' > bar.coffee
npm init
npm install coffee-script --save-dev
noder /tmp/foo/bar.coffee
```

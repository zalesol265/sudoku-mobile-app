


# Sudoku Mobile App Frontend 
<img src="https://www.svgrepo.com/show/45383/sudoku.svg" alt="Sudoku" style="width: 100px; height: 100px; filter: invert(1);">

This is the React Native frontend component to the sudoku solver. Either a smartphone or an emulator is required to interact with the application. 




## Running

Use the package manager [npm](https://docs.npmjs.com/) to install all dependencies.

```bash
npm install
```


Once all dependencies are available start the app with npm start

```bash
npm start
```


Cmd displays a QR code to scan with a smartphone.
If using an emulator (must already be installed), Press 'a' to open the Android emulator or the corresponding command for ios. 





## Troubleshooting


**Error:** 
```bash 
expo not recognized as a command
```

**Solution:**
```bash
npm install
```


**Error:** Network response timed out. 

**Solution:** Try switching the network private/public setting.



**Error:** 
```bash
FetchError: request to https://api.expo.dev/v2/sdks/49.0.0/native-modules failed, reason: 
FetchError: request to https://api.expo.dev/v2/sdks/49.0.0/native-modules failed, reason: 
    at ClientRequest.<anonymous> (\node_modules\node-fetch\lib\index.js:1501:11)
    at ClientRequest.emit (node:events:514:28)
    at TLSSocket.socketErrorListener (node:_http_client:495:9)
    at TLSSocket.emit (node:events:514:28)
    at emitErrorNT (node:internal/streams/destroy:151:8)
    at emitErrorCloseNT (node:internal/streams/destroy:116:3)
    at process.processTicksAndRejections (node:internal/process/task_queues:82:21)
```

**Solution:** Stop the application and restart it with the following command - 
```bash
npm start -- --reset-cache
```

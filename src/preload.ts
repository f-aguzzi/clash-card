const { contextBridge, ipcRenderer } = require('electron');

const testString = "This is a test";

contextBridge.exposeInMainWorld('test', testString);
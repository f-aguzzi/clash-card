import { contextBridge, ipcRenderer } from "electron"

export const API = {
  test: "TEST",
}

contextBridge.exposeInMainWorld("api", API);

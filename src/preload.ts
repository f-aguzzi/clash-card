import { contextBridge, ipcRenderer } from "electron"

export const API = {
  test: string
}

contextBridge.exposeInMainWorld("api", API);

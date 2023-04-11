import { API } from "../preload";

export enum Pages {
    MainMenu,
    Quiz,
    Create,
}

declare global {
  /**
   * We define all IPC APIs here to give devs auto-complete
   * use window.electron anywhere in app
   * Also note the capital "Window" here
   */
  interface Window {
    api: typeof API
  }
}

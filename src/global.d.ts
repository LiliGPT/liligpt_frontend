type VSCodeAPI = {
  postMessage(message: any): void;
  getState(): any;
  setState(state: any): void;
};

declare const acquireVsCodeApi: () => VSCodeAPI;

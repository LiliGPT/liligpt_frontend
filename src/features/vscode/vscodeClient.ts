class VSCodeClient {
  vscode?: VSCodeAPI;

  constructor() {}

  setVscode(vscode: VSCodeAPI) {
    this.vscode = vscode;
  }

  displayErrorMessage(message: string) {
    this.vscode!.postMessage({
      command: 'alert',
      message,
    });
  }

  login() {
    this.vscode!.postMessage({
      command: 'login',
    });
  }
}

export const vscodeClient = new VSCodeClient();

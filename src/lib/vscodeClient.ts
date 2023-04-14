class VSCodeClient {
  vscode: VSCodeAPI;

  constructor() {
    this.vscode = acquireVsCodeApi();

    if (!this.vscode) {
      console.error("[VSCodeAPI] VSCODE Not found!");
      return;
    }
  }

  displayErrorMessage(message: string) {
    this.vscode.postMessage({
      command: 'alert',
      message,
    });
  }
}

export const vscodeClient = new VSCodeClient();

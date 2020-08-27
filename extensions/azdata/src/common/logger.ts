/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import * as vscode from 'vscode';

export class Log {
	private _output: vscode.OutputChannel;

	constructor() {
		this._output = vscode.window.createOutputChannel('azdata');
	}

	log(msg: string): void {
		this._output.appendLine(msg);
		console.log(msg);
	}

	show(): void {
		this._output.show(true);
	}
}
const Logger = new Log();
export default Logger;

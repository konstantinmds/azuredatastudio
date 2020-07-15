/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

export default interface ITableModel {

	//Name of the table
	name: string;

	//Summary of the table
	summary: string;

	//Map containing columns pointing to their types
	columns: Map<string, string>;

	//Map containing primary key (or composite primary) pointing to it(s) types
	primaryKey: Map<string, string>;

	//Map containing foreign key pointing to it(s) types
	foreignKey: Map<string, string>[];

	/*Map containing related tables and relationship information
	Example:
	<DepartmentTableModel, {cardinality: "1:Many", reference: "FK_EmployeeHistory_Employee_EmployeeID" }
	*/

	relationships: Map<ITableModel, JSON>;

	getName(): string;
	getSummary(): string;
	getPrimaryKey(): Map<string, string>;
	getForeignKey(): Map<string, string>[];
	getRelationships(): Map<ITableModel, JSON>;

}

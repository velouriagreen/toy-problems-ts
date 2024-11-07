/**
 * const data = [
	{
		name: "jane",
		role: "manager",
		id: "2334",
		directReports: [
			{
				name: "jim",
				role: "developer",
				id: "23423",
				directReports: [],
			},
			{
				name: "jill",
				role: "lead developer",
				id: "4135",
				directReports: [
					{
						name: "jack",
						role: "associate developer",
						id: "8989",
						directReports: [],
					},
					{ name: "jennifer", role: "manager", id: "5676", directReports: [] },
				],
			},
		],
	},
];


Above data should be refactored to look like the following:
const output = [
	{
		name: "jane",
		role: "manager",
		id: "2334",
		directReports: ["23423", "4135"], //jim and jill
		// Relate jane to jim
	},
	{
		name: "jim",
		role: "developer",
		id: "23423",
		directReports: [], //none
	},
	//...restOfEmployees
];
 */

/**
 * Plan:
 * Base Case: Function should stop calling itself when employeesList array is empty. The 
 * 						starting length is 1, so we should stop recursing once we exit out of the object
 * 
 * Recursive Case: Traversing through each employee's directReports array
 * 								 Start off with Jane's directReports
 * Create a global person's array. 
 */

interface EmployeeObj {
	name: string;
	role: string;
	id: string;
	directReports: EmployeeObj[];
}

interface DirectReports {
	directReports: string[]
}

interface SimplifiedEmployee {
  name: string;
  role: string;
  id: string;
  directReports: string[];
}

const employeesList : EmployeeObj[] = [
	{
		name: "jane",
		role: "manager",
		id: "2334",
		directReports: [
			{
				name: "jim",
				role: "developer",
				id: "23423",
				directReports: [],
			},

			{
				name: "jill",
				role: "lead developer",
				id: "4135",
				directReports: [
					{
						name: "jack",
						role: "associate developer",
						id: "8989",
						directReports: [],
					},

					{
						name: "jennifer",
						role: "manager",
						id: "5676",
						directReports: []
					},
				],
			},
		],
	},
];


const fixedEmployeesList: SimplifiedEmployee[] = [];
const fixListOfEmployees = (data: EmployeeObj[]) : void => {
  if(data.length === 0) {
		return;
	} else {
		for(let i = 0; i < data.length; i++) {
			let { name, role, id, directReports } = data[i];
			let employeeIdsArray = directReports.length !== 0 ? directReports.map(employee => employee.id) : [];
			fixedEmployeesList.push({
				name,
				role,
				id,
				directReports: employeeIdsArray
			});
			fixListOfEmployees(data[i].directReports);
		}
	};
};
 
console.log(fixListOfEmployees(employeesList));
console.log('fixed Employees List:', fixedEmployeesList);
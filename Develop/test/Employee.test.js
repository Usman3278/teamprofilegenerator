const Employee = require("../lib/employee");name

test("Create new Employee Class", () => {
  const employee = new Employee();
  expect(typeof(employee)).toBe("object");
});

test("setting employee name", () => {
  const name = "name";
  const employee = new Employee(name);
  expect(employee.name).toBe(name);
});

test("setting employee id", () => {
  const val = 1;
  const employee = new Employee("name", val);
  expect(employee.id).toBe(val);
});

test("setting employee email", () => {
  const val = "example@test.com";
  const employee = new Employee("name", 1, val);
  expect(employee.email).toBe(val);
});

test("getName() fn should return employee's name", () => {
  const val = "Osman";
  const employee = new Employee(val);
  expect(employee.getName()).toBe(val);
});

test("getId() fn should return id", () => {
  const val = 1;
  const employee = new Employee("name", val);
  expect(employee.getId()).toBe(val);
});

test("getEmail() fn should return emplyee email", () => {
  const val = "example@test.com";
  const employee = new Employee("name", 1, val);
  expect(employee.getEmail()).toBe(val);
});

test("getRole() fn should return employee", () => {
  const val = "Employee";
  const employee = new Employee("name", 1, "example@test.com");
  expect(employee.getRole()).toBe(val);
});


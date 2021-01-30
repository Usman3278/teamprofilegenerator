const Manager = require('../lib/manager')


test("setting officenumber", () => {
  const val = 100;
  const employee = new Manager("name", 1, "example@test.com", val);
  expect(employee.officeNumber).toBe(val);
});

test('getRole() fn should return manger', () => {
  const val = "Manager";
  const employee = new Manager("name", 1, "example@test.com", 100);
  expect(employee.getRole()).toBe(val);
});

test("getOffice() fn should return officeNuber", () => {
  const val = 100;
  const employee = new Manager("name", 1, "example@test.com", val);
  expect(employee.getOfficeNumber()).toBe(val);
});

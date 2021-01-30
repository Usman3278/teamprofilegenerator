const Intern = require('../lib/intern')

test("set school", () => {
    const val = "some school";
    const employee = new Intern("name", 1, "test@test.com", val);
    expect(employee.school).toBe(val);
  });
  
  test("getRole() should return Intern", () => {
    const val = "Intern";
    const employee = new Intern("name", 1, "test@test.com", "UCLA");
    expect(employee.getRole()).toBe(val);
  });
  
  test("getSchool() fn should return school", () => {
    const val = "some school";
    const employee = new Intern("name", 1, "test@test.com", val);
    expect(employee.getSchool()).toBe(val);
  });
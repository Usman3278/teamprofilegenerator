const Engineer = require('../lib/engineer')

test("set github", () => {
    const val = "user";
    const employee = new Engineer("name", 1, "example@test.com", val);
    expect(employee.github).toBe(val);
  });
  
  test("getRole() fn should return engineer", () => {
    const val = "Engineer";
    const employee = new Engineer("name", 1, "example@test.com", "user");
    expect(employee.getRole()).toBe(val);
  });
  
  test("getGithub() should return github info", () => {
    const val = "user";
    const employee = new Engineer("name", 1, "example@test.com", val);
    expect(employee.getGithub()).toBe(val);
  });
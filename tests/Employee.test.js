
const Employee = require('../lib/Employee');
const employee = new Employee('Aaron', '2368901', 'Turneraaron97@gmail.com', 'Employee');

test('test if we can get the constructor values for the employee object', () => {
    expect(employee.name).toBe('Aaron');
    expect(employee.id).toBe('2368901');
    expect(employee.email).toBe('Turneraaron97@gmail.com');
    expect(employee.role).toBe('Employee')
});
test('test using getName() method', () => {
    expect(employee.getName()).toBe('Aaron');
});

test('test using getId() method', () => {
    expect(employee.getId()).toBe('2368901');
});
test('test using getEmail() method', () => {
    expect(employee.getEmail()).toBe('Turneraaron97@gmail.com');
});
test('test using getRole() method', () => {
    expect(employee.getRole()).toBe('Employee')
})

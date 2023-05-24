const Intern = require('../lib/Intern');
const intern = new Intern('Aaron', '5768098', 'Turneraaron97@gmail.com', 'UCF');

test('test if we can get the constructor values for the engineer object', () => {
    expect(intern.name).toBe('Aaron');
    expect(intern.id).toBe('5768098');
    expect(intern.email).toBe('Turneraaron97@gmail.com');
    expect(intern.school).toBe('UCF');
});

test('test if we can get the name from the getName() method', () => {
    expect(intern.getName()).toBe('Aaron');
});

test('test if we can get the id from the getId() method', () => {
    expect(intern.getId()).toBe('5768098');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(intern.getEmail()).toBe('Turneraaron97@gmail.com');
});

test ('test if we can get the school name from the getSchool() method', () => {
    expect(intern.getSchool()).toBe('UCF');
});

test('test if we can get the role from the getRole() method', () => {
    expect(intern.getRole()).toBe('Intern')
})
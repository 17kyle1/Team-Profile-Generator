const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Aaron', '5768098', 'Turneraaron97@gmail.com', '17kyle1');

test('test if wwe can get the constructor values for the engineer object', () => {
    expect(engineer.name).toBe('Aaron');
    expect(engineer.id).toBe('5768098');
    expect(engineer.email).toBe('Turneraaron97@gmail.com');
    expect(engineer.githubUsername).toBe('17kyle1');
});

test('test if we can get the name from the getName() method', () => {
    expect(engineer.getName()).toBe('Aaron');
});

test('test if we can get the id from the getId() method', () => {
    expect(engineer.getId()).toBe('5768098');
});

test('test if we can get the email from the getEmail() method', () => {
    expect(engineer.getEmail()).toBe('Turneraaron97@gmail.com');
});

test('test if we can get the github username from the github username from the getGithub() method', () => {
    expect(engineer.getGithub()).toBe('17kyle1');
})
test('test if we can get the role from the getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});
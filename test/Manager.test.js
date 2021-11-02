const Manager = require('../lib/Manager');

// creating manager object  
test('creates an Manager object', () => {
    const manager = new Manager('Dalton', 13, 'Dalton.uhl@yahoo.com', 7);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// gets role from getRole()
test('gets role of employee', () => {
    const manager = new Manager('Dalton', 13, 'Dalton.uhl@yahoo.com.com');

    expect(manager.getRole()).toEqual("Manager");
}); 
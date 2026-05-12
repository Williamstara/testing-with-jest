const stack = require('../src/stack');

test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
});

test('peek on stack with one element returns that element', () => {
    stack.push(1);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1);
});

test('peek on stack with two or more elements returns the top element', () => {
    stack.push(1);
    stack.push("wow");
    stack.push(42);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(42);
});


//Eget test för att kolla att stacken poppar i rätt ordning, denna gång förväntas testst inte funka 
test('pop does pop in last in-first out', () => {

    stack.push(3);
    stack.push("Hej");
    stack.push(7);
    expect(stack.peek()).toBeDefined();
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe("Hej");
    expect(stack.pop()).toBe(7);
});
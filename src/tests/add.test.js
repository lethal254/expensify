const add= (a,b)=>a+b;
const generateGreeting =(name)=>`Hello ${name}`

test('should add 2 numbers', ()=>{
    const result = add(3,4);
expect(result).toBe(7)
})
test ("should generate greeting", ()=>{
    const result = generateGreeting("BEN")
    expect(result).toBe("Hello BEN")
})
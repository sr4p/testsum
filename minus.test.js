const minus = require('./minus');

// 29 - 3 เท่ากับ 26
test('29 - 3 เท่ากับ 26', ()=>{
    expect(minus(29,3)).toBe(26);
})

// 15 - 9 เท่ากับ 6
test('15 - 9 เท่ากับ 6', ()=> {
    expect(minus(15,9)).toBe(6);
})

// 55 - 14 เท่ากับ  41

test('55 - 14 เท่ากับ  41', ()=> {
    expect(minus(55,14)).toBe(41);
})
// 44 - 23 เท่ากับ  21

test('44 - 23 เท่ากับ  21', ()=>{
    expect(minus(44,23)).toBe(21);
})

// 9 - 4 เท่ากับ 5

test('9 - 4 เท่ากับ 5', ()=> {
    expect(minus(9,4)).toBe(5);
})

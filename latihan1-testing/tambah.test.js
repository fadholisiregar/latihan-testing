const tambah = require('./tambah');

test('hasil 1 + 2 adalah 3', () => {
    expect(tambah(1, 2)).toBe(3)
})

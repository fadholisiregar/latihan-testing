const filterByTerm = require('./filterByTerm')

describe("Fungsi filter pencarian", () => {
    test("Cari data URL berdasarkan keyword (mis. 'link')", () => {
        const dataUrl = [
            { id: 1, url: "https://www.url1.dev" },
            { id: 2, url: "https://www.url2.dev" },
            { id: 3, url: "https://www.link3.dev" },
        ]

        const output = [{ id: 3, url: "https://www.link3.dev" }]
        const kataKunci = "link"
        expect(filterByTerm(dataUrl, kataKunci)).toEqual(output)
    })
})
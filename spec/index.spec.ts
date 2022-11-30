jest.setTimeout(10000)
describe(`something`, function () {
    let page
    beforeAll(async () => {
        console.log(await globalThis.__BROWSER_GLOBAL__.version())
        page = await globalThis.__BROWSER_GLOBAL__.newPage()
        await page.goto('https://baidu.com')
    })

    it('should load without error', async () => {
        const text = await page.evaluate(() => document.body.textContent)
        expect(text).toContain('baidu')
    })
})
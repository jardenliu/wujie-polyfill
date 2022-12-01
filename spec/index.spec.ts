describe(`something`, function () {
    beforeAll(async () => {
        await page.goto('http://localhost:9876')
        await page.waitForSelector('wujie-app')
        await page.waitFor(2000)
    })

    it('should load wujie subapp without error', async () => {
        const title = await page.evaluate(() => document.title)
        const appContent = await page.evaluate(() => window[0].document.body.innerText)
        expect(title).toContain('wujie-polyfill')
        expect(appContent.toLowerCase()).toContain('app')
    })
})
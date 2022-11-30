describe(`something`, function () {
    beforeAll(async () => {
        await page.goto('http://localhost:9876', {
            timeout: 60000,
        })
    })

    it('should load without error', async () => {
        const title = await page.evaluate(() => document.title)
        expect(title).toContain('wujie-polyfill')
    })
})
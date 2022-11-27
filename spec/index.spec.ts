test('use jsdom and set the URL in this test file', () => {
    expect(window.location.href).toBe('http://localhost/');
});
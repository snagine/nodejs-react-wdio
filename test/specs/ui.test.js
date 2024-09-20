describe('Simple React App', () => {
    before(async () => {
        await browser.url('http://localhost:3000');
    });

    it('should have a textbox and input value', async () => {
        const textBox = await $('[data-testid="textbox"]');
        await textBox.setValue('Test Input');
        expect(await textBox.getValue()).toBe('Test Input');
    });

    it('should select a radio button', async () => {
        const radioOption1 = await $('[data-testid="radio-option1"]');
        await radioOption1.click();
        expect(await radioOption1.isSelected()).toBe(true);
    });

    it('should check a checkbox', async () => {
        const checkBox = await $('[data-testid="checkbox"]');
        await checkBox.click();
        expect(await checkBox.isSelected()).toBe(true);
    });

    it('should contain a valid link', async () => {
        const link = await $('[data-testid="link"]');
        expect(await link.getAttribute('href')).toBe('https://example.com');
    });

    it('should display the image', async () => {
        const image = await $('[data-testid="image"]');
        expect(await image.isDisplayed()).toBe(true);
    });

    it('should have a submit button', async () => {
        const submitButton = await $('[data-testid="submit-button"]');
        expect(await submitButton.isDisplayed()).toBe(true);
    });
});


////////////////////////////////////////
// describe('Simple React App', () => {
//     before(() => {
//         browser.url('http://localhost:3000');  // Assuming the React app is running locally
//     });

//     it('should have a textbox and input value', () => {
//         const textBox = $('[data-testid="textbox"]');
//         textBox.setValue('Test Input');
//         expect(textBox.getValue()).toBe('Test Input');
//     });

//     it('should select a radio button', () => {
//         const radioOption1 = $('[data-testid="radio-option1"]');
//         radioOption1.click();
//         expect(radioOption1.isSelected()).toBe(true);
//     });

//     it('should check a checkbox', () => {
//         const checkBox = $('[data-testid="checkbox"]');
//         checkBox.click();
//         expect(checkBox.isSelected()).toBe(true);
//     });

//     it('should contain a valid link', () => {
//         const link = $('[data-testid="link"]');
//         expect(link.getAttribute('href')).toBe('https://example.com');
//     });

//     it('should display the image', () => {
//         const image = $('[data-testid="image"]');
//         expect(image.isDisplayed()).toBe(true);
//     });

//     it('should have a submit button', () => {
//         const submitButton = $('[data-testid="submit-button"]');
//         expect(submitButton.isDisplayed()).toBe(true);
//     });
// });
////////////////////////////////////
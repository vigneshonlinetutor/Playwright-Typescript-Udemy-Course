import {test} from '@playwright/test'

const credentials=[
    {
        "username": "Admin",
        "password": "admin123"
    },
    {
        "username": "Admin123",
        "password": "admin"
    }
]

credentials.forEach(data=>{
    test(`Login Test with credentials ${data.username} + ${data.password}`,async({page})=>{
        await page.goto('https://opensource-demo.orangehrmlive.com');
        await page.locator('input[placeholder="Username"]').fill(data.username);
        await page.locator('input[placeholder="Password"]').fill(data.password);
        await page.locator('button[type="submit"]').click();
        await page.locator('.oxd-userdropdown-tab').click();
        await page.locator('text=Logout').click();
        await page.close();
    })
})
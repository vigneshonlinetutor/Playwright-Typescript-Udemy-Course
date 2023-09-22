import {test} from '@playwright/test'

test.skip('Skipped test', async()=>{
    console.log('I am a Skipped Test');
})

test('Skip in Webkit', async({page, browserName})=>{
    test.skip(browserName === 'webkit', 'This feature is not implemented for Mac');
    console.log('I am Skip with Condition test');
})

test('Not yet Ready test', async()=>{
    test.fail();
})

test('Fail in Webkit', async({page, browserName})=>{
    test.fail(browserName === 'webkit', 'This feature is not implemented for Mac');
    console.log('I am Fail with Condition test');
})

test.fixme('Fix me Test', async()=>{
    console.log('I am a Fix me test');
})

test('Slow Test', async()=>{
    console.log('I am a Slow test');
    test.slow();
})

test('Slow Test with Condition', async({browserName})=>{
    test.slow(browserName === 'webkit', 'This feature is not implemented for Mac');
})

test.only('Only Test', async()=>{
    console.log('I am Only test');
})
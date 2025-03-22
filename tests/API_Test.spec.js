import {test, expect} from '@playwright/test'

/*
1. to run the in debug mode npx playwright test filename.spec.js --ui
2. Run with tag: npx playwright test filename.spec.js -grep '@post' --ui
*/

test('Demo API test @post', async ({ request }) => {
    
    const response = await request.post('https://reqres.in/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            "name": "morpheus",
            "job": "leader"
        }
    });

    expect(response.status()).toBe(201);

    const responseBody = await response.json();
    console.log(responseBody);

    expect(responseBody.name).toBe('morpheus')
});


test('Demo Api test : @get', async({request}) => { 
    
    const response= await request.get('https://reqres.in/api/users/2')

    expect(response.status()).toBe(200)

    console.log(await response.json())

    const text = await response.text()
    expect(text).toContain('Janet')

    const json = await response.json()

    expect(json.data.first_name.toLowerCase()).toBe('janet')
    console.log(json.support.url)

})

test('Demo Api test : @put', async({request}) => { 
    
    const response= await request.put('https://reqres.in/api/users/2', {
        "data": 
            {
                "name": "morpheus",
                "job": "zion resident",
                "updatedAt": "2025-03-22T05:25:46.996Z"
            }
        
    })
    expect(response.status()).toBe(200)

    const responseBody = await response.json();

    console.log(responseBody)
    expect(responseBody.name).toBe('morpheus')




})

test('Demo Api test : @delete', async({request}) => { 
    
    const response= await request.delete('https://reqres.in/api/users/2')
    expect(response.status()).toBe(204)

})
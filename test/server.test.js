const fetch = require('node-fetch')

describe('Test Suite Server Graphql', ()=> {

    var authorization = Buffer.from('Htorres:abc').toString('base64')

    it('Test 0, check quey me', ()=>{
        var body = '{me{id,name}}'
        var variables= {}

        fetch('http://localhost:4000/graphql', {
            method: 'post',
            body: JSON.stringify({query: body,variables: variables}),
            headers: {
                    'Content-Type': 'application/json',
                    // 'Authorization': 'Basic SHRvcnJlczphYmM=',
                    'Authorization': 'Basic ' + authorization, //basic Htorres:abc
            },
    })

.then(response => response.json())
.then((response) =>{
    expect(response).toEqual({"data": {"me": {"id": "5","name": "kenneth"} } } )
})
})
})


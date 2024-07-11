const axios=require('axios');
require('dotenv').config()
const testserver = axios.create({
  baseURL: 'http://20.244.56.144/test/companies',
  headers: {
    'Authorization': `Bearer ${process.env.TOKEN}`,
  },
});

async function testServer(compName,catgName,n,p,q)
{
    try
    {
        const result=await testserver.get(`${compName}/categories/${catgName}/products`,{params:{'top':n,'minPrice':p,'maxPrice':q}})
        console.log(result)
    }
    catch(error)
    {
        console.log(error)
    }
}

module.exports={testServer}
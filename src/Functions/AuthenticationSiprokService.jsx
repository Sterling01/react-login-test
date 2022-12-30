console.log(process.env);

const siprokBaseUrl = 'https://kiacolombia.siprok.com.co/api/auth/login';

const authenticate = async function (loginObject) {
    const resquestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(loginObject)
    }
    const response = await fetch(siprokBaseUrl, resquestOptions);
    return await response.json();
}


export default authenticate;
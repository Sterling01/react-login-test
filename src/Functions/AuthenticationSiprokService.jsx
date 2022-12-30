const authenticate = async function (loginObject) {
    const resquestOptions = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(loginObject)
    }
    const response = await fetch(`${process.env.REACT_APP_BASE_URL}auth/login`, resquestOptions);
    let accessToken = await response.json();

    if(accessToken && accessToken.token){
        localStorage.setItem('token', JSON.stringify(accessToken.token))
    }
}


export default authenticate;
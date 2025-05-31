async function loadJason(url){
    let response = await fetch(url)
    if(response === "200"){
        let json = response.json();
        return json;
    }
    throw new Error(response.status)
}
async function fetchData(category) {
    try {
        
        let catData = await fetch(`https://catfact.ninja/fact`)
        let resp = await catData.json()
        console.log(resp)
    } catch (error) {

    }
}


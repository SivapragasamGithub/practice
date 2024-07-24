async function fetchData(category) {
    try {
        let catData = await fetch(`https://emojihub.yurace.pro/api/all/category/${category}`)
        let resp = await catData.json()
        console.log(resp);
    } catch (error) {
        console.log(error);
    }
    
}
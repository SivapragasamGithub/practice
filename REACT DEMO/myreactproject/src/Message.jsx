function Message() {
    let a = 5;
    let b = 6;
    let peoples = [
        {
            name: "person 1",
            age: 20
        },
        {
            name: "person 2",
            age: 30
        }
    ];
    let handleClick = ()=>{
        
    }
    
    return (
        <div>
            {
                peoples.map((people)=>{
                    return <div>
                        <h1>Name: {people.name}</h1>
                        <h1>age: {people.age}</h1>
                    </div>
                })
            }
            <button onClick={handleClick} ><a href="https://www.google.com.sg/?gfe_rd=cr&ei=XcAoV4iMDdTD8QX9yYHIDg">google</a></button>
            
        </div>
    )
}
export default Message 
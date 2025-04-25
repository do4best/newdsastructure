function OnlyColors({colorsAgain}) {
    const onlyColors1 = colorsAgain.map((item,index)=>{
        
        return <h1 key={index}>{item.color}</h1>
    })
    return (<>
    
    {onlyColors1}
    </>  );
}

export default OnlyColors;
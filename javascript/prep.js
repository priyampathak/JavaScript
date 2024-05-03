let pr = new Promise((resolve, reject) => {
    let a = 2;
    if(a==4){
        resolve( )
        //*Some logic
    }else{
        reject()
        //*Some logic
    }
})

pr.then( ()=>{
    console.log("Executed")
}).catch(()=>{
    console.log('Error')
}).finally(()=>{
    console.log("Finally")
})
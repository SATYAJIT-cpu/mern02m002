console.log("today Fetch Api");


function getdata(userid,next){

    setTimeout(()=>{
        console.log("user id :",userid);
        next();
       
    },3000)
}



getdata(1,()=>{
    getdata(2,()=>getdata(3,()=>getdata(5)))
})


//promises

function getdata(userid){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
         console.log("user id :",userid);
         resolve("resolve ho geya")
        })


       
    },3000)
}

console.log(getdata(1));



//let Promise new(Promise(res,rej))=>{
  //  setTimeout(()=>{
    //    res("success")
      //  rej("error")
    //},3000)
//}


getdata(1).then((res) => {
    return getdata(2).then(()=>{
        return getdata(3).then((res)=>{
            console.log("result :",res);
        })
    })

    
}).catch((err) => {
    console.log("error is:",err);
    
});


//async await
async function getdata() {

    
  
    

let response=await fetch("https://jsonplaceholder.typicode.com/posts")
let data=await response . json()
console.log(data);

data?.forEach(element => {
    console.log(element.titel);
    
});
}
getdata()


let url ="https://catfact.ninja/fact";
let btn =document.querySelector("button");
let par=document.querySelector("#result");

async function getfacts(){
    try{
       let res= await axios.get(url);
       return res.data.fact;
    } catch(err){
    console.log("Error :",err);
       return "No fact found";
    }  
};

btn.addEventListener("click",async()=>{
    let fact = await getfacts();
    console.log(fact);
    let para =document.querySelector("#result");
    para.innerText =fact;
});





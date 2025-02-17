let list=[];
let req  = prompt("Enter Your Request");
req=req.trim();
while(true) {
    if(req == "quit"){
        console.log("Quitting The App");
        break;
    }
    else if(req == "list"){
        console.log("----------------");
        for(let i=0;i<list.length;i++){
            console.log(`${i}`,list[i])
        }
        console.log("----------------");
    }
    else if(req == "add"){
        newTask=prompt("Enter The New Task");
        list.push(newTask);
        console.log("New Task Added");
    }
    else if(req=="delete"){
        let Index=prompt("Enter The Index Number That You Want To Delete ")
        list.splice(Index,1);
        console.log("The Element Is Deleted")
    }
    else{
        console.log("Enter Proper Request");
    }
    
    req= prompt("Enter Your Request");
    req=req.trim();
}
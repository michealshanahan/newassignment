
function sum(x, y){
    try{
        if((typeof(x + y)) !== "number"){
           throw "Enter only numbers" 
        }else{
        return x + y;
        } 
    }catch(err){
        console.log(err)
    }finally{
    }
}
    
    

sum(3, "we")

const user = {username: "sam", password: "123abc"};


function login(username, password){
        try{
            if (user.username === username && user.password === password){
                console.log ("login sucessful")
            }else {
                throw "login failed"
            }
        }catch(err){
    console.log(err) 
    }
}

try{
    login("sam", "123abc");
    login("imposter","123abc");
}catch(err){
    console.log("did this work")
}

function login2(username, password){
        if (user.username === username && user.password === password){
            return "login sucessful";
        }else {
            return "login failed";
        }
}

try{
login2("sam", "123abc");
    if(login2("imposter","123abc") === "login failed"){
        throw "your login2failed"
    };
}catch(err){
console.log(err)
}

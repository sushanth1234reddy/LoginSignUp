const user = localStorage.getItem("user");
        let LoggedInUser=document.getElementById("LoggedInUser");
        if(user){
            const parsedUser = JSON.parse(user);
            LoggedInUser.innerHTML=`&#128512; ${parsedUser.name}`;

            
        }
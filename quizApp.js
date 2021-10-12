const readline = require("readline");
const r1 = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
});
console.log("Welcome to the Fan Game of One Piece\n")
var name = "";
r1.question("Enter Your Name: ",(nm)=>{
    name = nm;
    console.log("Welcome "+ name+"\n");
    quiz();
});

var i = 0;
var score = 0;
const que = ["Who was the first Pirate king In One Piece?","Who is Monkey D Luffy right Hand Man?","Who is Monkey D Luffy navigator","Who is Monkey D Luffy cook ?","Who is Monkey D Luffy crew Doctor ?"];
const opt = [["Monkey D Luffy","Zorro","White Beard","Gold D.Roger"],["Chopper","Zorro","Nami","Brook"],["Chopper","Zorro","Nami","Brook"],["Sanji","Zorro","Nami","Brook"],["Chopper","Zorro","Nami","Brook"]];

var quiz = ()=>{
    if(i === 0){
        console.log(que[i]);
        for(var j =0;j<4;j++)
        {
            console.log((j+1)+"-"+opt[i][j]);
        }
        r1.question("Answer:- ",(ans)=>{
            if(ans === "4")
            {
                score += 5;
                console.log("Great Job!!"+"\tYour Score :- "+score);
                i+=1;
                quiz();
            }
            else
            {
                console.log("Sorry Wrong answer!!"+"\nRight answer is ->"+ opt[i][3]+"\tYour Score :- "+score);
                score -= 2;
                i+=1;
                quiz();
            }

        });
    }
    else if(i === 1)
    {
        console.log(que[i]);
        for(var j =0;j<4;j++)
        {
            console.log((j+1)+"-"+opt[i][j]);
        }
        r1.question("Answer:- ",(ans)=>{
            if(ans === "2")
            {
                score += 5;
                console.log("Great Job!!"+"\tYour Score :- "+score);
                i+=1;
                quiz();
            }
            else
            {
               console.log("Sorry Wrong answer!!"+"\nRight answer is ->"+ opt[i][1]+"\tYour Score :- "+score);
                score -= 2;
                i+=1;
                quiz();
            }

        });
    }
    else if(i === 2)
    {
        console.log(que[i]);
        for(var j =0;j<4;j++)
        {
            console.log((j+1)+"-"+opt[i][j]);
        }
        r1.question("Answer:- ",(ans)=>{
            if(ans === "3")
            {
                score += 5;
                console.log("Great Job!!"+"\tYour Score :- "+score);
                i+=1;
                quiz();
            }
            else
            {
               console.log("Sorry Wrong answer!!"+"\nRight answer is ->"+ opt[i][2]+"\tYour Score :- "+score);
                score -= 2;
                i+=1;
                quiz();
            }

        });
    }
    else if(i === 3)
    {
        console.log(que[i]);
        for(var j =0;j<4;j++)
        {
            console.log((j+1)+"-"+opt[i][j]);
        }
        r1.question("Answer:- ",(ans)=>{
            if(ans === "1")
            {
                score += 5;
                console.log("Great Job!!"+"\tYour Score :- "+score);
                i+=1;
                quiz();
            }
            else
            {
               console.log("Sorry Wrong answer!!"+"\nRight answer is ->"+ opt[i][0]+"\tYour Score :- "+score);
                score -= 2;
                i+=1;
                quiz();
            }

        });
    }
    else if(i === 4)
    {
        console.log(que[i]);
        for(var j =0;j<4;j++)
        {
            console.log((j+1)+"-"+opt[i][j]);
        }
        r1.question("Answer:- ",(ans)=>{
            if(ans === "1")
            {
                score += 5;
                console.log("Great Job!!"+"\tYour Score :- "+score);
                i+=1;
                quiz();
            }
            else
            {
               console.log("Sorry Wrong answer!!"+"\nRight answer is ->"+ opt[i][0]+"\tYour Score :- "+score);
                score -= 2;
                i+=1;
                quiz();
            }

        });
    }
    else
    {
        console.log("Final Score Of "+name+": "+ score+"/"+(que.length*5));
        r1.close();
    }
}

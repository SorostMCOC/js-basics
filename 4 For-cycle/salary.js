function solve(input){
    let tabs = Number(input[0]);
    let salary = Number(input[1]);
    let tabname = input[2];
    let currentTab;
    let penalty = 0;
    for(i = 2; i <= tabs; i++){
        currentTab = (input[i]);
        switch(currentTab) {
            case "Facebook":
                penalty += 150;
                break;
            case "Instagram":
                penalty += 100;
                break;
            case "Reddit":
                penalty += 50;
                break;
            default:
                break;
        }
    }
    if(penalty >= salary){
        console.log(`You have lost your salary.`);
    }
    else{
        console.log(`${salary - penalty}`);
    }
}

solve(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])


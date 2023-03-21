// code your solution here
function saturdayFun(activity) {
        activity = typeof activity !== 'undefined' ? activity : 'roller-skate'
        return  `This Saturday, I want to ${activity}!`
}

    function mondayWork(monday){
        monday = typeof monday !== 'undefined' ? monday : 'go to the office'
        return `This Monday, I will ${monday}.`
}   

function wrapAdjective(special = "*") {
    return function (adjective = "special") {
            return `You are ${special}${adjective}${special}!`;
    }
}
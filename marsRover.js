
const rover = {
    direction: "N",
    x: 0,
    y: 0,
    travelLog: [{x:0, y:0}]
};

let obstacle = {x:2, y:1};

function turnLeft(rover){
    if (rover.direction === "N"){
        rover.direction = "W";
        rover.travelLog.push({x: rover.x, y: rover.y});
        console.log(rover.travelLog);
    } else if (rover.direction === "W"){
        rover.direction = "S";
        rover.travelLog.push({x: rover.x, y: rover.y});
        console.log(rover.travelLog);
    } else if (rover.direction === "S"){
        rover.direction = "E";
        rover.travelLog.push({x: rover.x, y: rover.y});
        console.log(rover.travelLog);
    } else if (rover.direction === "E"){
        rover.direction = "N";
        rover.travelLog.push({x: rover.x, y: rover.y});
        console.log(rover.travelLog);
    }
}

function turnRight(rover){
    if (rover.direction === "N"){
        rover.direction = "E";
        rover.travelLog.push({x: rover.x, y: rover.y});
        console.log(rover.travelLog);
    } else if (rover.direction === "E"){
        rover.direction = "S";
        rover.travelLog.push({x: rover.x, y: rover.y});
        console.log(rover.travelLog);
    } else if (rover.direction === "S"){
        rover.direction = "W";
        rover.travelLog.push({x: rover.x, y: rover.y});
        console.log(rover.travelLog);
    } else if (rover.direction === "W"){
        rover.direction = "N";
        rover.travelLog.push({x: rover.x, y: rover.y});
        console.log(rover.travelLog);
    }
}

function moveForward(rover){
    if (rover.direction === "N"){
        rover.y--;
        if (rover.y < 0 || rover.y > 9){
            rover.y ++;
            console.log("This move is outside the grid and the rover cannot move forward.");
        }
        if (rover.y === obstacle.y && rover.x === obstacle.x){
            console.log("You cannot move due to an obstacle.");
        }
        rover.travelLog.push({x: rover.x, y: rover.y});
        console.log(rover.travelLog);
    } else if (rover.direction === "S"){
        rover.y++;
        if (rover.y < 0 || rover.y > 9){
            rover.y --;
            console.log("This move is outside the grid and the rover cannot move forward.");
        }
        if (rover.y === obstacle.y && rover.x === obstacle.x){
            console.log("You cannot move due to an obstacle");
        }
        rover.travelLog.push({x: rover.x, y: rover.y});
        console.log(rover.travelLog);
    } else if (rover.direction === "W"){
        rover.x--;
        if (rover.x < 0 || rover.x > 9){
            rover.x++;
            console.log("This move is outside the grid and the rover cannot move forward.");
        }
        if (rover.y === obstacle.y && rover.x === obstacle.x){
            console.log("You cannot move due to an obstacle");
        }
        rover.travelLog.push({x: rover.x, y: rover.y});
        console.log(rover.travelLog);
    } else if (rover.direction === "E"){
        rover.x++;
        if (rover.x < 0 || rover.x > 9){
            rover.x --;
            console.log("This move is outside the grid and the rover cannot move forward.");
        }
        if (rover.y === obstacle.y && rover.x === obstacle.x){
            console.log("You cannot move due to an obstacle");
        }
        rover.travelLog.push({x: rover.x, y: rover.y});
        console.log(rover.travelLog);
    }
}

function moveBackwards(rover){
    if (rover.direction === "N"){
        rover.y++;
        if (rover.y < 0 || rover.y > 9){
        rover.y--;
            console.log("This move is outside the grid and the rover cannot move backwards.");
        }
        if (rover.y === obstacle.y && rover.x === obstacle.x){
            console.log("You cannot move due to an obstacle");
        }
        rover.travelLog.push({x: rover.x, y: rover.y});
        console.log(rover.travelLog);
    } else if (rover.direction === "S"){
        rover.y--;
        if (rover.y < 0 || rover.y > 9){
            rover.y++;
                console.log("This move is outside the grid and the rover cannot move backwards.");
        }
        if (rover.y === obstacle.y && rover.x === obstacle.x){
            console.log("You cannot move due to an obstacle");
        }
        rover.travelLog.push({x: rover.x, y: rover.y});
        console.log(rover.travelLog);
 
    } else if (rover.direction === "W"){
        rover.x++;
        if (rover.x < 0 || rover.x > 9){
            rover.x--;
                console.log("This move is outside the grid and the rover cannot move backwards.");
        }
        if (rover.y === obstacle.y && rover.x === obstacle.x){
            console.log("You cannot move due to an obstacle");
        }
        rover.travelLog.push({x: rover.x, y: rover.y});
        console.log(rover.travelLog);
 
    } else if (rover.direction === "E"){
        rover.x--;
        if (rover.x < 0 || rover.x > 9){
            rover.x++;
                console.log("This move is outside the grid and the rover cannot move backwards.");
        }
        if (rover.y === obstacle.y && rover.x === obstacle.x){
            console.log("You cannot move due to an obstacle");
        }
        rover.travelLog.push({x: rover.x, y: rover.y});
        console.log(rover.travelLog);
    }
}
   
function manageRover(rover, directions){
    for (let i = 0; i < directions.length; i++){
        let orientation = directions[i];
        if (["l", "r", "f", "b"].includes(orientation)){
            switch(orientation){
                case "l":
                    turnLeft(rover, orientation);
                    //console.log(`Rover facing direction ${rover.direction}`);
                    break;
                case "r":
                    turnRight(rover, orientation);
                    console.log(`Rover facing direction ${rover.direction}`);
                    break;
                case "f":
                    moveForward(rover, orientation);
                    console.log(`Rover facing direction ${rover.direction}, x is ${rover.x} and y is ${rover.y}`);
                    break;
                case "b":
                    moveBackwards(rover, orientation);
                    console.log(`Rover facing direction ${rover.direction}, x is ${rover.x} and y is ${rover.y}`);
                    break;      
            } 
        } else {
            console.log("Please use correct directions: f, b, r and l.");
        }
    }
}

manageRover(rover, "rffrf");
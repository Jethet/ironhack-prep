const rover = {
    direction: "N",
    x: 0,
    y: 0,
    travelLog: [{x:0, y:0}]
};

function turnLeft(rover){
    if (rover.direction === "N"){
        rover.direction = "W";
        //console.log(rover.direction); 
    } else if (rover.direction === "W"){
        rover.direction = "S";
        //console.log(rover.direction); 
    } else if (rover.direction === "S"){
        rover.direction = "E";
        //console.log(rover.direction);
    } else if (rover.direction === "E"){
            rover.direction = "N";
            //console.log(rover.direction);
    }
}

function turnRight(rover){
    if (rover.direction === "N"){
        rover.direction = "E";
        //console.log(rover.direction); 
    } else if (rover.direction === "E"){
        rover.direction = "S";
        //console.log(rover.direction); 
    } else if (rover.direction === "S"){
        rover.direction = "W";
        //console.log(rover.direction);
    } else if (rover.direction === "W"){
            rover.direction = "N";
            //console.log(rover.direction);
    }
}

function moveForward(rover){
    if (rover.x >= 0 && rover.x <= 9 && rover.y >= 0 && rover.y < 9){
        if (rover.direction === "N"){
            rover.y--;
            //console.log(`Position is: ${rover.x}, ${rover.y}`);
        } else if (rover.direction === "S"){
            rover.y++;
            //console.log(`Position is: ${rover.x}, ${rover.y}`);
        } else if (rover.direction === "W"){
            rover.x--;
            //console.log(`Position is: ${rover.x}, ${rover.y}`);
        } else if (rover.direction === "E"){
            rover.x++;
            //console.log(`Position is: ${rover.x}, ${rover.y}`);
    } else {
        console.log("The rover cannot be placed outside the grid.");
    }
    }
}

function manageRover(rover, directions){
    for (let i = 0; i <= directions.length; i++){
        let orientation = directions[i];
        switch(orientation){
            case "l":
                turnLeft(rover, orientation);
                //console.log(`Rover facing direction ${rover.direction}`);
                break;
            case "r":
                turnRight(rover, orientation);
                //console.log(`Rover facing direction ${rover.direction}`);
                break;
            case "f":
                moveForward(rover, orientation);
                console.log(`Rover facing direction ${rover.direction}, x is ${rover.x} and y is ${rover.y}`);
                break;
        }
    }
    rover.travelLog.push({x: rover.x, y: rover.y});
    console.log(rover.travelLog);
}
//TWO EXAMPLES:

manageRover(rover, "rffffffffffff");
/* Result is:
Rover facing direction E, x is 1 and y is 0
Rover facing direction E, x is 2 and y is 0
Rover facing direction E, x is 3 and y is 0
Rover facing direction E, x is 4 and y is 0
Rover facing direction E, x is 5 and y is 0
Rover facing direction E, x is 6 and y is 0
Rover facing direction E, x is 7 and y is 0
Rover facing direction E, x is 8 and y is 0
Rover facing direction E, x is 9 and y is 0
Rover facing direction E, x is 10 and y is 0
Rover facing direction E, x is 10 and y is 0
Rover facing direction E, x is 10 and y is 0
This means that a) changing direction works fine; b) rover stops moving forward when it reaches grid space 10
But why is the message not printing that the rover moves out of the grid with the step over >9?
*/

manageRover(rover, "f");
/* Result is:
Rover facing direction N, x is 0 and y is -1
The rover should not move from 0 to -1: this should not be possible and the message "not outside the grid" should be printed.
*/
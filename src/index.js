"use strict";

let cnv = document.getElementById("tree");
let ctx = cnv.getContext("2d");

ctx.fillStyle = "white";
ctx.fillRect(0, 0, cnv.width, cnv.height);

nodeDraw(CourseNode,1)
// ctx.beginPath();
// ctx.moveTo(cnv.width/2, 40+40);
// ctx.lineTo(cnv.width/3, 40+100);
// ctx.moveTo(cnv.width/2, 40+40);
// ctx.lineTo(cnv.width/2, 40+100);
// ctx.moveTo(cnv.width/2, 40+40);
// ctx.lineTo(cnv.width*9/10, 40+100);
// ctx.endPath();
ctx.stroke();

function nodeDraw(courseNode, layer) {
    let flag = false;
    // if (courseNode.nameToObjectPairs{})
    for (let i = 0; i < name.length; i++)  {
        console.log(name[i])
        if (typeof name[i] == "object") {
            console.log(name[i])
            nodeDraw(name[i],layer+1);
        }
        else{
            console.log(name.length)
            console.log(layer)
            ctx.fillStyle = "#4DDBBE";
            ctx.beginPath();
            ctx.ellipse(60+cnv.width, 40*layer, 60,40, 0,0, Math.PI *2);
            ctx.fill();
            ctx.fillStyle = "black"
            ctx.font = "20px Arial";
            ctx.textAlign = "right";
            for (let j = 0; j < name.length; j++){
                if (typeof name[j] == "object") {
                    flag = true
                }
            }
            if (flag == true) {
                ctx.fillText(name[i], cnv.width*(i+1)/(name.length), 60*layer);
            } else{
                ctx.fillText(name[i], cnv.width*(i+1)/(name.length+1), 60*layer);
            }
        }
    }
}
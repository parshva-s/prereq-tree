"use strict";

// import hardcodedCourses from "./hardcodedCourses.js";
import CourseNode from "./CourseNode.js"

let cnv = document.getElementById("tree");
let ctx = cnv.getContext("2d");

ctx.fillStyle = "white";
ctx.fillRect(0, 0, cnv.width, cnv.height);

let courseName = "ECE 312";

let coordinate=[];
let layerSize = {};

nodeDraw(courseName,1, cnv.width/1.5);


function nodeDraw(name, layer, width) {
    let flag = false;
    CourseNode.nameToObjectPairs[name].objectify();
    // console.log(name);
    console.log(coordinate)
    if (CourseNode.nameToObjectPairs[name].coreqs === null && CourseNode.nameToObjectPairs[name].prereqs === null) {
        while (coordinate.findIndex(coord => coord.join() == [width, layer].join())!== -1){
            width -= 150;
        }
        coordinate.push([width,layer]);
        ctx.fillStyle = "#4DDBBE";
        ctx.beginPath();
        ctx.ellipse(width, 100*layer, 60,40, 0,0, Math.PI *2);
        ctx.fill();
        ctx.fillStyle = "black"
        ctx.font = "20px Arial";
        ctx.textAlign = "center";
        ctx.fillText(CourseNode.nameToObjectPairs[name].name,width,100*layer);
        console.log(CourseNode.nameToObjectPairs[name].name + ", " + width + ", " + 100*layer)
        if (layerSize[layer] > 0) {
            console.log("bruh");
            layerSize[layer] += 1;
        } else {
            layerSize[layer] = 1;
        }
        ctx.stroke();
    } else { //coreq doesnt equal null
        if (CourseNode.nameToObjectPairs[name].coreqs !== null) {
            for (let i = 0; i < CourseNode.nameToObjectPairs[name].coreqs.length; i++)  {
                console.log("coreq: "+ CourseNode.nameToObjectPairs[name].coreqs[i].name);
                width-=150;
                nodeDraw(CourseNode.nameToObjectPairs[name].coreqs[i].name,layer, width+150);

            }
        CourseNode.nameToObjectPairs[name].coreqs = null;
        }
        if (CourseNode.nameToObjectPairs[name].prereqs !== null) {
            for (let i = 0; i < CourseNode.nameToObjectPairs[name].prereqs.length; i++)  {
                console.log("prereq: "+ CourseNode.nameToObjectPairs[name].prereqs[i].name);
                nodeDraw(CourseNode.nameToObjectPairs[name].prereqs[i].name,layer+1, width+75);
            }
        CourseNode.nameToObjectPairs[name].prereqs = null;
        }
        nodeDraw(CourseNode.nameToObjectPairs[name].name, layer, width);
    }
}
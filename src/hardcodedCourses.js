// hardcodedCourses.js

import CourseNode from "./CourseNode.js";

let courses = [];

/**
 * Prereqs and coreqs will be expressed in nested "list-of-lists" structure.
 * The outermost list is assigned as "AND", and every level of nesting below
 *  that will alternate between "OR" and "AND".
 * For example, (A and B) or C will be represented by [[[A, B], C]].
 */
courses.push(new CourseNode("CHEM 103",
                            null,
                            null));

courses.push(new CourseNode("ENGG 100",
                            null,
                            null));

courses.push(new CourseNode("ENGG 130",
                            null,
                            ["MATH 100"]));

courses.push(new CourseNode("ENGL 199",
                            null,
                            null));
                            
courses.push(new CourseNode("MATH 100",
                            null,
                            null));

courses.push(new CourseNode("PHYS 130",
                            null,
                            ["MATH 100"]));

courses.push(new CourseNode("CHEM 105",
                            ["CHEM 103"],
                            null));

courses.push(new CourseNode("ENCMP 100",
                            null,
                            null));

courses.push(new CourseNode("ENGG 160",
                            null,
                            ["ENGL 199"]));
                            
courses.push(new CourseNode("EN PH 131",
                            ["MATH 100", "ENGG 130"],
                            ["MATH 101"]));

courses.push(new CourseNode("MATH 101",
                            ["MATH 100"],
                            null));

courses.push(new CourseNode("MATH 102",
                            null,
                            ["MATH 100"]));

courses.push(new CourseNode("ECE 202",
                            ["MATH 101", "MATH 102"],
                            null));

courses.push(new CourseNode("ECE 210",
                            null,
                            null));

courses.push(new CourseNode("ENGG 299",
                            null,
                            null));

courses.push(new CourseNode("MATH 201",
                            null,
                            ["MATH 209"]));

courses.push(new CourseNode("MATH 209",
                            ["MATH 101"],
                            ["MATH 102"]));

courses.push(new CourseNode("ECE 203",
                            ["ECE 202"],
                            ["ECE 240"]));

courses.push(new CourseNode("ECE 212",
                            ["ECE 210"],
                            null));

courses.push(new CourseNode("ECE 220",
                            ["ENCMP 100"],
                            null));

courses.push(new CourseNode("ECE 240",
                            ["ECE 202", "MATH 201"],
                            null));

courses.push(new CourseNode("PHYS 230",
                            ["PHYS 130", "MATH 100"],
                            ["MATH 101"]));

courses.push(new CourseNode("WKEXP 901",
                            ["ENGG 299"],
                            null));

courses.push(new CourseNode("ECE 302",
                            ["ECE 203"],
                            null));

courses.push(new CourseNode("ECE 312",
                            ["ECE 220", "ECE 212"],
                            ["ECE 340"]));

courses.push(new CourseNode("ECE 330",
                            ["ECE 203"],
                            null));

courses.push(new CourseNode("ECE 340",
                            ["ECE 240"],
                            null));

courses.push(new CourseNode("ECE 370",
                            ["MATH 102", "MATH 209", "PHYS 230"],
                            null));

courses.push(new CourseNode("MATH 309",
                            ["MATH 209"],
                            null));

courses.push(new CourseNode("WKEXP 902",
                            ["WKEXP 901"],
                            null));

courses.push(new CourseNode("WKEXP 903",
                            ["WKEXP 902"],
                            null));

courses.push(new CourseNode("ECE 303",
                            ["ECE 302"],
                            null));

courses.push(new CourseNode("ECE 332",
                            ["ECE 330"],
                            null));

courses.push(new CourseNode("ECE 342",
                            ["MATH 209"],
                            null));

courses.push(new CourseNode("ECE 360",
                            ["ECE 203", "ECE 240"],
                            null));

courses.push(new CourseNode("ECE 380",
                            ["ECE 240"],
                            null));

courses.push(new CourseNode("WKEXP 904",
                            ["WKEXP 903"],
                            null));

courses.push(new CourseNode("WKEXP 905",
                            ["WKEXP 904"],
                            null));

courses.push(new CourseNode("ECE 490",
                            ["ECE 312"],
                            null));

courses.push(new CourseNode("ENGG 404",
                            null,
                            null));

courses.push(new CourseNode("ECE 491",
                            ["ECE 490"],
                            ["ECE 303"]));

courses.push(new CourseNode("ENG M 401",
                            null,
                            null));

courses.push(new CourseNode("ENGG 400",
                            null,
                            null));


// now that courses is populated, we can create key-value pairs
//  in CourseNode.nameToObjPairs
for (let course of courses)
    CourseNode.nameToObjectPairs[course.name] = course;

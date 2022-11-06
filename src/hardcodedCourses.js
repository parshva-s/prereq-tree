// hardcodedCourses.js

import CourseNode from "./CourseNode";

let courses = [];

/**
 * Prereqs and coreqs will be expressed in nested "list-of-lists" structure.
 * The outermost list is assigned as "AND", and every level of nesting below
 *  that will alternate between "OR" and "AND".
 * For example, (A and B) or C will be represented by [[[A, B], C]].
 */

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

/*------ LINE OF NO CROSSING ------*/

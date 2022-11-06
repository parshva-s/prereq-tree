// CourseNode.js

import { courses } from "./hardcodedCourses";

export default class CourseNode {
    // instance vars
    #subject;
    #number;
    #prereqs;
    #coreqs;
    #objectified;


    // constructor
    constructor(name, pre, co) {
        this.name = name;
        this.#prereqs = pre;
        this.#coreqs = co;
        this.#objectified = false;
    }


    // getters
    get subject() { return this.#subject; }
    get number() { return this.#number; }
    get prereqs() { return this.#prereqs; }
    get coreqs() { return this.#coreqs; }
    get objectified() { return this.#objectified; }

    get name() { return this.#subject + ' ' + this.#number; }
    get level() { return Math.floor(this.#number / 100); }


    // setters
    set subject(subj) { this.#subject = subj; }
    set number(num) { this.#number = num; }
    set prereqs(pre) { this.#prereqs = pre; }
    set coreqs(co) { this.#coreqs = co; }

    set name(name) {
        this.#subject = name.split(' ')[0];
        this.#number = parseInt(name.split(' ')[1]);
    }


    // master table for name to object conversions
    static nameToObjectPairs = {};


    /**
     * Convert the prereq and coreq str lists to lists of traversable objects.
     */
    convertStrToObj() {
        for (let i = 0; i < this.prereqs.length; i++) {
            if (this.prereqs[i] in CourseNode.nameToObjectPairs) {
                this.prereqs[i] = CourseNode.nameToObjectPairs[this.prereqs[i]];
                continue;
            }
            // prereq has not been processed yet; must process recursively
            // base case: course with no prereqs or coreqs
            // FIXME: how do we deal with prereqs that havent been turned into objects yet?
            // need to search up the prereqs for that course in the master list
            if (this.prereqs[i].prereqs.length == 0 && this.prereqs[i].coreqs.length == 0) break;
        }

        this.#objectified = true;
    }


    /**
     * Find if the prereqs/coreqs of this course contain a given course name.
     * @param {String} course Name of course to search for
     * @return {boolean} True if the course is somewhere in the tree
     */
    treeContains(course) {
        if (this.name == course) return true;
        // assume prereq and coreq lists have been str->obj converted
        for (let prereq of this.prereqs)
            if (prereq.treeContains(course)) return true;
        for (let coreq of this.coreqs)
            if (coreq.treeContains(course)) return true;
        return false;
    }
}

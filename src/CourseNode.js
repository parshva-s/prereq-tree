// CourseNode.js

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
        let splitName = name.split(' ');
        let nParts = splitName.length;
        this.#subject = name.split(' ', nParts-1).join(' ');
        this.#number = parseInt(name.split(' ')[nParts-1]);
    }


    // master table for name to object conversions
    static nameToObjectPairs = {};


    /**
     * Convert the prereq and coreq str lists to lists of traversable objects.
     * 
     * Assumptions:
     *  - this.objectified is false, 
     *  - this.prereqs and this.coreqs are lists of lists of strings
     */
    objectify() {
        for (let i = 0; i < this.prereqs.length; i++) {
            if (typeof(this.prereqs[i]) == "string") {
                // as opposed to a subarray. can operate on the object directly
                if (!CourseNode.nameToObjectPairs[this.prereqs[i]].objectified) {
                    // the corresp. child is not objectified, and we must
                    //  objectify it before adding it.
                    CourseNode.nameToObjectPairs(this.prereqs[i]).objectify();
                }
                // the corresp. child is now objectified, can replace
                //  our list's str directly with the child object and move on.
                this.prereqs[i] = CourseNode.nameToObjectPairs[this.prereqs[i]];
            }
            else {
                // subarray of children OR'd with each other.
                //  repeat exactly what we've done but on the subarray elements
                for (let j = 0; j < this.prereqs[i].length; j++) {
                    if (typeof(this.prereqs[i][j]) == "string") {
                        if (!CourseNode.nameToObjectPairs[this.prereqs[i][j]].objectified) {
                            CourseNode.nameToObjectPairs(this.prereqs[i][j]).objectify();
                        }
                        this.prereqs[i][j] = CourseNode.nameToObjectPairs[this.prereqs[i][j]];
                    }
                    else {
                        // subsubarray of children AND'ed with each other
                        // TODO: finish objectify
                    }
                }

            }
        }

        this.#objectified = true;
    }


    /**
     * Find if the prereqs/coreqs of this course contain a given course name.
     * @param {String} course Name of course to search for
     * @returns {boolean} True if the course is somewhere in the tree
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

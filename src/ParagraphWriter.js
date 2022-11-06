// ParagraphWriter.js

import CourseNode from "./CourseNode.js";

export default class ParagraphWriter {
    constructor(element) {
        this.pElement = element;
    }

    /**
     * Generate the text tree for a CourseNode in the dictionary.
     * @param {String} name Name of top-level course to generate tree for
     * @param {number} level Level of indentation to generate text as
     * @returns {String} The textual representation of the prereq tree
     */
    static generateTextTree(name, level) {
        CourseNode.nameToObjectPairs[name].objectify();
        const course = CourseNode.nameToObjectPairs[name];
        let outStr = '\t'.repeat(level) + '> ' + name + '\n';

        if (course.prereqs !== null) {
            // TODO: refactor to get rid of ijk and use the members themselves
            for (let i = 0; i < course.prereqs.length; i++) {
                if (typeof(course.prereqs[i].name) == "string") {
                    // as opposed to a subarray. can operate on the object directly
                    outStr += ParagraphWriter.generateTextTree(course.prereqs[i].name, level+1);
                } else {
                    // subarray of children OR'd with each other.
                    //  repeat exactly what we've done but on the subarray elements
                    for (let j = 0; j < course.prereqs[i].length; j++) {
                        if (typeof(course.prereqs[i][j].name) == "string") {
                            outStr += ParagraphWriter.generateTextTree(course.prereqs[i][j].name, level+1);
                        } else {
                            // subsubarray of children AND'ed with each other.
                            // repeat once more
                            for (let k = 0; k < course.prereqs[i][j].length; k++) {
                                outStr += ParagraphWriter.generateTextTree(course.prereqs[i][j][k].name, level+1);
                            }
                        }
                    }
                }
            }
        }

        if (course.coreqs !== null) {
            // TODO: refactor to get rid of ijk and use the members themselves
            for (let i = 0; i < course.coreqs.length; i++) {
                if (typeof(course.coreqs[i].name) == "string") {
                    // as opposed to a subarray. can operate on the object directly
                    outStr += ParagraphWriter.generateTextTree(course.coreqs[i].name, level+0);
                } else {
                    // subarray of siblings OR'd with each other.
                    //  repeat exactly what we've done but on the subarray elements
                    for (let j = 0; j < course.coreqs[i].length; j++) {
                        if (typeof(course.coreqs[i][j].name) == "string") {
                            outStr += ParagraphWriter.generateTextTree(course.coreqs[i][j].name, level+0);
                        } else {
                            // subsubarray of siblings AND'ed with each other.
                            // repeat once more
                            for (let k = 0; k < course.coreqs[i][j].length; k++) {
                                outStr += ParagraphWriter.generateTextTree(course.coreqs[i][j][k].name, level+0);
                            }
                        }
                    }
                }
            }
        }

        return outStr;
    }

    writeOut(text) {
        this.pElement.textContent = text;
    }
}

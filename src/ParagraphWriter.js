// ParagraphWriter.js

import CourseNode from "./CourseNode.js";

export default class ParagraphWriter {
    constructor(element) {
        this.pElement = element;
    }

    /**
     * Generate the text tree for a CourseNode in the dictionary.
     * @param {String} name Name of top-level course to generate tree for
     * @returns {String} The textual representation of the prereq tree
     */
    static generateTextTree(name) {
        CourseNode.nameToObjectPairs[name].objectify();
        const course = CourseNode.nameToObjectPairs[name];
        let outStr = name + ':\n';
        return outStr;
    }

    writeOut(text) {
        this.pElement.textContent = text;
    }
}

const writer = new ParagraphWriter(document.getElementById("treePara"));
writer.writeOut(ParagraphWriter.generateTextTree("ECE 312"));

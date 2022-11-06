// DropOptionsBinding.js

import CourseNode from "./CourseNode.js";

// https://www.youtube.com/watch?v=2ZphE5HcQPQ
export default class DropOptionsBinding {
    constructor(element) {
        this.divElement = element;
        this.options = Object.keys(CourseNode.nameToObjectPairs);
        this.options.sort();  // can get rid of this if desired
    }

    /**
     * Creates an anchor tag for the dropdown with desired text.
     * @param {String} text Text to be displayed on dropdown
     * @returns {a} Anchor tag to be added to document
     */
    static createDropdownItem(text) {
        const a = document.createElement("a");
        a.textContent = text;
        a.setAttribute("href", '#' + text);
        return a;
    }

    /**
     * Fill the dropOptions div with the a elements for each available course.
     */
    populateOptions() {
        for (let name of this.options) {
            const a = DropOptionsBinding.createDropdownItem(name);
            this.divElement.appendChild(a);
        }
    }
}

const div = document.getElementById("dropOptions");
const divBinding = new DropOptionsBinding(div);
divBinding.populateOptions();

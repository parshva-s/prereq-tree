// DropOptionsBinding.js

import CourseNode from "./CourseNode.js";

// https://www.youtube.com/watch?v=2ZphE5HcQPQ
class DropOptionsBinding {
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
        a.setAttribute("id", text);
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

    addListeners() {
        for (let name of this.options) {
            const a = document.getElementById(name);
            a.addEventListener("click", function(){ handleOptionPress(name); });
        }
    }

}


/**
 * Handle the user having pressed a course name in the dropdown menu.
 * @param {String} name The name of the selected course
 */
function handleOptionPress(name) {
    console.log(name);
}

const div = document.getElementById("dropOptions");
const divBinding = new DropOptionsBinding(div);
divBinding.populateOptions();
divBinding.addListeners();

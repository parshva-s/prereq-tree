class Course {
    // instance vars
    #subject;
    #number;
    #prereqs;
    #coreqs;


    // constructor
    constructor(name, pre, co) {
        this.name = name;
        this.#prereqs = pre;
        this.#coreqs = co;
    }


    // getters
    get subject() { return this.#subject; }
    get number() { return this.#number; }
    get prereqs() { return this.#prereqs; }
    get coreqs() { return this.#coreqs; }

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
}

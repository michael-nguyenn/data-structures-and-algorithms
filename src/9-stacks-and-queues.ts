// CHAPTER 9: STACKS AND QUEUES

///////////// Page: 43 - CREATING A STACK /////////////////////////////////////////

class Stack {
  protected data: string[] = [];

  push(element: string): void {
    this.data.push(element);
  }

  pop() {
    this.data.pop();
  }

  peek() {
    console.log(this.data[this.data.length - 1]);
  }
}

const stack = new Stack();

//////////////////// Page: 43/44 - STACK-BASED CODE LINTER ///////////////////////////////

class Linter extends Stack {
  lint(text: string) {
    let poppedOpeningBrace: string | undefined = "";

    for (const char of text) {
      // If char is an open brace - push into stack
      if (this.isOpenBrace(char)) {
        this.data.push(char);
      } else if (this.isClosingBrace(char)) {
        // If char is a closing brace - pop opening bracket from stack
        poppedOpeningBrace = this.data.pop();

        // If stack was empty, and we popped undefined, throw error
        if (!poppedOpeningBrace) throw `${char} doesn't have an opening brace`;

        // If the popped opening brace does not match the current closing brace we produce error
        if (!this.isAMatch(poppedOpeningBrace, char))
          throw `${char} has mismatched opening brace`;
      }
    }

    // If the stack at the end has a bracket it means we're missing a closing bracket!
    let openingBrace: any = this.data.pop();
    if (openingBrace) throw `${openingBrace} is missing a closing brace!`;

    //If we make it here, it means that our stack is empty, and our linter is finished
    return true;
  }

  private isOpenBrace(char: string): boolean {
    return ["(", "[", "{"].includes(char);
  }

  private isClosingBrace(char: string): boolean {
    return [")", "]", "}"].includes(char);
  }

  private isAMatch(openingBrace: string, closingBrace: string) {
    if (openingBrace === "(" && closingBrace === ")") return true;
    if (openingBrace === "{" && closingBrace === "}") return true;
    if (openingBrace === "[" && closingBrace === "]") return true;

    return false;
  }
}

const linter = new Linter();
const phrase = "(var x = {y: [1,2,3]})";
// const phrase = "{";

// console.log(linter.lint(phrase));

//////////////////////// Page: 45 - QUEUE IMPLEMENTATION

class Queue {
  protected queue: (string | number)[] = [];

  enqueue(element: string | number) {
    this.queue.push(element);
  }

  dequeue() {
    this.queue.shift();
  }

  get read(): string | number {
    return this.queue[0];
  }
}

const queue = new Queue();
queue.enqueue("hello");
console.log(queue.read);

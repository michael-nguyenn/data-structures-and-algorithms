// CHAPTER 9: STACKS AND QUEUES

///////////// Page: 43 - CREATING A STACK /////////////////////////////////////////

class Stack {
  protected data: string[] = [];

  push(element: string): void {
    this.data.push(element);
  }

  pop(): any {
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

class Queue<T> {
  private queue: T[] = [];

  enqueue(element: T) {
    this.queue.push(element);
  }

  dequeue() {
    return this.queue.shift();
  }

  get read(): T {
    return this.queue[0];
  }
}

const queue = new Queue();

////////////////////// Page: 45 - PRINT MANAGER VIA QUEUE

class PrintManager {
  queue: Queue<string> = new Queue();

  queuePrintJob(document: string) {
    this.queue.enqueue(document);
  }

  // Each time this loop runs, we read the document at the front of the queue
  run() {
    while (this.queue.read) {
      // We will print the document and dequeue it at the same time.
      this.print(this.queue.dequeue()!);
    }
  }

  private print(document: string) {
    // Code to run the actual printer goes here
    // Demo purposes, we will console.log it
    console.log(document);
  }
}

const printer = new PrintManager();

printer.queuePrintJob("First Document");
printer.queuePrintJob("Second Document");
printer.queuePrintJob("Third Document");

// printer.run();

/////////////////////////////////// EXERCISES ///////////////////////

// 1. Writing software for a call center that places them on hold will make good use of a queue

// 2. In a stack, when you pop two off the stack [1,2,3,4,5,6] you would read 6 and then 5

// 3. In a queue [1,2,3,4,5,6] when you dequeue two items, you could dequeue 1 and then 2

// 4. Write a function that uses a stack to reverse a string

const reverseString = (word: string): string => {
  let stack: string[] = word.split("");
  let reversedString: string | string[] = [];

  for (let i = 0; i < word.length; i++) {
    let popped = stack.pop();

    if (popped) {
      reversedString.push(popped);
    }
  }

  return reversedString.join("");
};

// console.log(reverseString("abcdef"));

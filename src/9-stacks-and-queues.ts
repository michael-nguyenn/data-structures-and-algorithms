// CHAPTER 9: STACKS AND QUEUES

///////////// Page: 43 - CREATING A STACK /////////////////////////////////////////

class Stack {
  private data: number[];

  constructor() {
    this.data = [];
  }

  push(n: number) {
    this.data.push(n);
  }

  pop() {
    this.data.pop();
  }

  peek() {
    console.log(this.data[this.data.length - 1]);
  }
}

const stack = new Stack();

/////////////////////////////////////////////////////////

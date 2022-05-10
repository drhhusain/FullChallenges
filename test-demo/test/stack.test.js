class Stack {
  constructor() {
    this.top = -1;
    this.items = {};
  }

  get peek() {
    return this.items[this.top];
  }

  push(element) {
    this.top += 1;
    this.items[this.top] = element;
  }

  pop() {
    if (this.top == -1){
      return "Underflow";
    }
    
    delete this.items[this.top];
    this.top -= 1;
  }
}


describe("My Stack", () => {

  let stack;

  beforeEach(() => {
    stack = new Stack();
  });


  it('is created empty', () => {

    const stack = new Stack();

    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});

  });


  it('can push to the top', () => {
    stack.push("🍌");

    expect(stack.top).toBe(0);
    expect(stack.peek).toBe("🍌");

  });

  it('can pop off', () => {

    expect(stack.top).toBe(-1);
    stack.push("😀");
    expect(stack.top).toBe(0);

    stack.pop();

    expect(stack.top).toBe(-1);
    expect(stack.items).toEqual({});

  });


})
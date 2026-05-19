@classDecorator
class Boat {
  @testDecorator
  color: string = "red";

  @testDecorator
  get formattedColor(): string {
    return `The color of the boat is ${this.color}`;
  }

  @logError("An error occurred while piloting the boat!")
  pilot(@parameterDecorator speed: string): void {
    if (speed === "fast") {
      console.log("swish");
    } else {
      console.log("nothing");
    }
  }
}

function testDecorator(target: any, key: string) {
  console.log(key);
}

function classDecorator(constructor: typeof Boat) {
  console.log(constructor);
}

function parameterDecorator(target: any, key: string, index: number) {
  console.log(key, index);
}

function logError(errorMessage: string = "An error occurred") {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const method = desc.value;

    desc.value = function () {
      try {
        method();
      } catch (error) {
        console.error(errorMessage, error);
      }
    };
  };
}

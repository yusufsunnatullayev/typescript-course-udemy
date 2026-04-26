class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log("beep");
  }
}

const vehicle = new Vehicle("orange");

class Car extends Vehicle {
  constructor(
    public wheels: number,
    color: string,
  ) {
    super(color); // Calls parent constructor 🚩
  }

  private drive(): void {
    console.log("Vroom");
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, "blue");
car.startDrivingProcess();

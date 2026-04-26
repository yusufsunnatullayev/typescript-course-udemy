const catMakers: string[] = ["ford", "toyota", "honda"];
const dates = [new Date(), new Date("2024-01-01"), new Date("2024-12-31")];

const carsByMake: string[][] = [["f150"], ["corolla"], ["camaro"]];

// Help with inference when extracting values from an array
const car = catMakers[0];
const myCar = catMakers.pop();

// Prevent incompatible values
// catMakers.push(100); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

// Help with map, filter, reduce
catMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importantDates: (Date | string)[] = [new Date(), "2024-01-01"];
importantDates.push("2024-12-31");
importantDates.push(new Date());

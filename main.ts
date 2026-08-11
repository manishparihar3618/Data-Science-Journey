const x = [1, 2, 3, 4, 5];
const y = [2, 4, 6, 8, 10];

const slope = 2;

function predict(x: number): number {
    return slope * x;
}

console.log("Prediction:", predict(6));
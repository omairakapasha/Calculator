import inquirer from "inquirer";
let n1 = await inquirer.prompt([
    {
        name: "n1",
        type: "number",
        message: "Enter first number: ",
    },
]);
let n2 = await inquirer.prompt([
    {
        name: "n2",
        type: "number",
        message: "Enter second number: ",
    },
]);

let user = await inquirer.prompt([
    {
        name: "user",
        type: "String",
        message:
            "Choose function to perform:\n For Multiplication (*)\n For Divide (/)\n For Addition (+)\n For Subtraction (-)\n ",
    },
]);

enum methods {
    Multiplication = "*",
    Divide = "/",
    Subtraction = "-",
    Addition = "+",
}
switch (user.user) {
    case `${methods.Multiplication}`:
        console.log(
            `Multiplication : ${n1.n1 * n2.n2
            }`
        );
        break;
    case `${methods.Divide}`:
        console.log(
            `Divide : ${n1.n1 / n2.n2}`
        );
        break;
    case `${methods.Subtraction}`:
        console.log(
            `Subtraction : ${n1.n1 - n2.n2}`
        );
        break;
    case `${methods.Multiplication}`:
        console.log(
            `Addition : ${n1.n1 + n2.n2}`
        );
        break;
    default:
        console.log("Invalid Input!!");
}

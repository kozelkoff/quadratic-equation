module.exports = function solveEquation(equation) {
  // your implementation
    var a, b, c;

    var compareFunction = function compareNumeric(a, b) {
        return a - b;
    }


    var finding = equation.split(' ');
    a = finding[0];
    if (finding[3]== '-') {
        b = finding[4] * (-1);
    }
    else b = finding[4];
    if (finding[7]== '-') {
        c = finding[8] * (-1);
    }
    else c = finding[8];

    var discriminant = b*b - 4 * a * c;
    discriminant = (Math.sqrt(discriminant));

    var x1 = (-b + discriminant)/(2*a);
    var x2 = (-b - discriminant)/(2*a);


    let solutions = [];
    solutions[0]=Math.round(x1);
    solutions[1]=Math.round(x2);

    solutions.sort(compareFunction);

    return solutions;

    
}

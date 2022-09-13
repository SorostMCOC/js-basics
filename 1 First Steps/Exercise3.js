function architecture(input) {
    let firstName = (input[0]);
    let projectCount = (input[1]);
    let requiredTime = 3 * projectCount;
    console.log(`The architect ${firstName} will need ${requiredTime} hours to complete ${projectCount} projects.`);
}
architecture(["George", "6"])
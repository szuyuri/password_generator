const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '1234567890';
const symbols = '!@#$%&*()_';

// Function that returns a number based on a maximum number;
function getRandomNumber(maximumNumber) {
    return parseInt(Math.random() * maximumNumber);
};

// Getter functions that returns random characters based on the 'generatePassword'
// function parameters;
function getRandomLetter() {
    return alphabet.charAt(getRandomNumber(alphabet.length));
};

function getRandomNumberCharacter() {
    return numbers.charAt(getRandomNumber(numbers.length));
};

function getRandomSymbol() {
    return symbols.charAt(getRandomNumber(symbols.length));
};

// Function which generates a new password using the given parameters;
function generatePassword(passwordLength, includesSymbol, includesNumber) {
    let password = '';

    for (let length = 0; length < passwordLength; length++) {
        let randomNumber = getRandomNumber(passwordLength);
        
        if ((passwordLength % randomNumber) === 0 && includesSymbol) {
            password += getRandomSymbol();
        } else if ((passwordLength % randomNumber) === 1 && includesNumber) {
            password += getRandomNumberCharacter();
        } else {
            password += getRandomLetter();
        };
    };

    return password;
};

export { generatePassword };

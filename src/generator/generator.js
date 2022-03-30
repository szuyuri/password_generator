const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '1234567890';
const symbols = '!@#$%&*()_';

// * Function that returns a number based on a maximum number;
function getRandomNumber(maximumNumber) {
    return parseInt(Math.random() * maximumNumber);
};

/** 
 * * Getter functions that returns random characters based
 * * on the 'generatePassword' function parameters;
 * 
 * @param capitalizeLetter bool
*/
const getRandomLetter = (capitalizeLetter) => {
    let randomLetter = alphabet.charAt(getRandomNumber(alphabet.length));
    if (capitalizeLetter) {
        let randomNumber = getRandomNumber(2);
        if (randomNumber % 2 === 0) {
            return randomLetter.toUpperCase();
        };
    };

    return randomLetter;
};

const getRandomNumberCharacter = () => numbers.charAt(getRandomNumber(numbers.length));
const getRandomSymbol = () => symbols.charAt(getRandomNumber(symbols.length));

/** 
 * * Function which generates a new password using the given parameters;
 * @param passwordInformation array Includes all the password informations
*/
export default function generatePassword(passwordInformation) {
    let [passwordLength, includesNumber, includesSymbol, includesCapitalizedLetters] = passwordInformation;
    let password = '';

    for (let length = 0; length < passwordLength; length++) {
        let randomNumber = getRandomNumber(passwordLength * 2);
        
        if ((passwordLength % randomNumber) === 0 && includesSymbol) {
            password += getRandomSymbol();
        } else if ((passwordLength % randomNumber) === passwordLength && includesNumber) {
            password += getRandomNumberCharacter();
        } else {
            password += getRandomLetter(includesCapitalizedLetters);
        };
    };

    return password;
};

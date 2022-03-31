const Characters = {
    lowerCase: 'abcdefghijklmnopqrstuvwxyz',
    upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numbers: '0123456789',
    symbols: '!@#$%&*()_{}'
};

/** 
 * * Getter function that returns random characters based
 * * on the 'generatePassword' function 
 * * passwordInformation parameter;
 * 
 * @param availableCharacters string
*/
const getRandomCharacter = (availableCharacters) => availableCharacters.charAt(Math.random() * availableCharacters.length); 

/** 
 * * Function which generates a new password using the given parameters;
 * @param passwordInformation array Includes all the password informations
*/
export default function generatePassword(passwordInformation) {
    let [passwordLength, includesNumber, includesSymbol, includesCapitalizedLetters] = passwordInformation;
    let password = '';
    let availableCharacters = Characters.lowerCase;

    if (includesNumber) {
        password += getRandomCharacter(Characters.numbers);
        availableCharacters += Characters.numbers;
    };

    if (includesSymbol) {
        password += getRandomCharacter(Characters.symbols)
        availableCharacters += Characters.symbols;
    };

    if (includesCapitalizedLetters) {
        password += getRandomCharacter(Characters.upperCase)
        availableCharacters += Characters.upperCase;
    };

    for (let length = password.length; length < passwordLength; length++) {
        password += getRandomCharacter(availableCharacters);
    };

    return password;
};

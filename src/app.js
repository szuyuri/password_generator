import readline from 'readline';
import { generatePassword } from './generator/generator.js';

const DEFAULT_PASSWORD_LENGTH = 8;

const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Password length question;
readlineInterface.question('Desired password length: ', (desiredLength) => {
    let lengthInt = parseInt(desiredLength);
    let passwordLength = lengthInt >= 8 ? lengthInt : DEFAULT_PASSWORD_LENGTH;
    console.log(`| - Your desired password length is ${passwordLength}`);
    
    // Require symbols question;
    readlineInterface.question('Include symbols in your password?(Y/n): ', (includeSymbols) => {
        let userWantsSymbols = includeSymbols.toLowerCase() === 'y' ? true : false;

        // Require numbers question;
        readlineInterface.question('Include numbers in your password?(Y/n): ', (includeNumbers) => {
            let userWantsNumbers = includeNumbers.toLowerCase() === 'y' ? true : false;
            let newPassword = generatePassword(passwordLength, userWantsSymbols, userWantsNumbers);

            console.log(`| - Your password is: ${newPassword}`);
            readlineInterface.close();
        });
    });

});

readlineInterface.on('close', () => {
    process.exit(0);
});

import readline from 'readline';
import clipboard from 'clipboardy';
import generatePassword from './generator/generator.js';
import { formatAnswer } from './format_answer/format_answer.js';

const DEFAULT_PASSWORD_LENGTH = 8;

const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Password length question;
readlineInterface.question(`| - Desired password length(Default ${DEFAULT_PASSWORD_LENGTH}): `, (desiredLength) => {
    let lengthInt = parseInt(desiredLength);
    let passwordLength = lengthInt >= 8 ? lengthInt : DEFAULT_PASSWORD_LENGTH;
    console.log(`+ - Your desired password length is ${passwordLength}`);
    
    // User requires capitalized letters
    readlineInterface.question('| - Capitalize some letters?(Y/n): ', (capitalizeLetters) => {

        // Require symbols question;
        readlineInterface.question('| - Include symbols in your password?(Y/n): ', (includeSymbols) => {

            // Require numbers question;
            readlineInterface.question('| - Include numbers in your password?(Y/n): ', (includeNumbers) => {
                
                // Copy to clipboard question;
                readlineInterface.question('| - Copy the password to clipboard?(Y/n)', (copyToClipboard) => {
                    let userWantsCopyToClipboard = formatAnswer(copyToClipboard);
                    let userWantsCapitalizedLetters = formatAnswer(capitalizeLetters);
                    let userWantsSymbols = formatAnswer(includeSymbols);
                    let userWantsNumbers = formatAnswer(includeNumbers);

                    let passwordInformation = [passwordLength, userWantsNumbers, userWantsSymbols, userWantsCapitalizedLetters];

                    // Generate password
                    let newPassword = generatePassword(passwordInformation);

                    console.log(`+ - Your password is: ${newPassword}`);
                    if (userWantsCopyToClipboard) {
                        clipboard.writeSync(newPassword);
                    };
                    readlineInterface.close();
                });
            });
        });
    });

});

readlineInterface.on('close', () => {
    process.exit(0);
});

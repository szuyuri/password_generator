const EXPECTED_ANSWERS = ['y', 'yes', 'ye'];

/** 
 * * Function that formats the given answer
 * @param answer string

 * * Returns a boolean(true/false)
*/
export const formatAnswer = (answer) => EXPECTED_ANSWERS.includes(answer);

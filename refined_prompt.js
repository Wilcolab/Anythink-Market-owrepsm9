/**
 * Converts a string to camelCase format.
 * 
 * This function takes a string with words separated by spaces, hyphens, or underscores,
 * and converts it to camelCase where the first word is lowercase and subsequent words
 * have their first letter capitalized.
 * 
 * @param {string} str - The input string to convert to camelCase
 * @returns {string} The converted camelCase string
 * @throws {Error} If input is null or undefined
 * @throws {Error} If input is not a string type
 * @throws {Error} If input is an empty or whitespace-only string
 * 
 * @example
 * toCamelCase('camel case');           // Returns: 'camelCase'
 * toCamelCase('CAMEL_case-Nope');      // Returns: 'camelCaseNope'
 * toCamelCase('hello-world_example');  // Returns: 'helloWorldExample'
 */

/**
 * Converts a string to dot.case format.
 * 
 * This function takes a string with words separated by spaces, hyphens, or underscores,
 * and converts it to dot.case where all words are lowercase and joined by dots.
 * 
 * @param {string} str - The input string to convert to dot.case
 * @returns {string} The converted dot.case string
 * @throws {Error} If input is null or undefined
 * @throws {Error} If input is not a string type
 * @throws {Error} If input is an empty or whitespace-only string
 * 
 * @example
 * toDotCase('camel case');           // Returns: 'camel.case'
 * toDotCase('CAMEL_case-Nope');      // Returns: 'camel.case.nope'
 * toDotCase('hello-world_example');  // Returns: 'hello.world.example'
 */
function toCamelCase(str) {
    // Handle null and undefined
    if (str === null || str === undefined) {
        throw new Error('Input cannot be null or undefined');
    }

    // Validate input is a string
    if (typeof str !== 'string') {
        throw new Error(`Expected a string, but received ${typeof str}`);
    }

    // Handle empty string
    if (str.trim() === '') {
        throw new Error('Input cannot be an empty string');
    }

    // Split by spaces, hyphens, or underscores and filter empty strings
    const words = str.split(/[\s\-_]+/).filter(word => word.length > 0);

    // Convert to camelCase
    return words
        .map((word, index) => {
            const lowerWord = word.toLowerCase();
            // Capitalize first letter of all words except the first
            return index === 0 ? lowerWord : lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
        })
        .join('');
}

// Example usage
console.log(toCamelCase('camel case'));           // camelCase
console.log(toCamelCase('CAMEL_case-Nope'));      // camelCaseNope
console.log(toCamelCase('hello-world_example'));  // helloWorldExample

// Error cases
try {
    toCamelCase(3);
} catch (e) {
    console.error(e.message);  // Expected a string, but received number
}

function toDotCase(str) {
    // Handle null and undefined
    if (str === null || str === undefined) {
        throw new Error('Input cannot be null or undefined');
    }

    // Validate input is a string
    if (typeof str !== 'string') {
        throw new Error(`Expected a string, but received ${typeof str}`);
    }

    // Handle empty string
    if (str.trim() === '') {
        throw new Error('Input cannot be an empty string');
    }

    // Split by spaces, hyphens, or underscores and filter empty strings
    const words = str.split(/[\s\-_]+/).filter(word => word.length > 0);

    // Convert to dot.case
    return words
        .map(word => word.toLowerCase())
        .join('.');
}

// Example usage
console.log(toDotCase('camel case'));           // camel.case
console.log(toDotCase('CAMEL_case-Nope'));      // camel.case.nope
console.log(toDotCase('hello-world_example'));  // hello.world.example

// Error cases
try {
    toDotCase(3);
} catch (e) {
    console.error(e.message);  // Expected a string, but received number
}

try {
    toDotCase(null);
} catch (e) {
    console.error(e.message);  // Input cannot be null or undefined
}

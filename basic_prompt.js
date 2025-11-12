/**
 * Convert a string to camelCase.
 * Examples:
 *   camelCase("apple sauce") => "appleSauce"
 *   camelCase("Hello-world_example") => "helloWorldExample"
 *
 * @param {string} input
 * @returns {string}
 */
function camelCase(input) {
    let str = typeof input === 'string' ? input : String(input);
    const parts = str
        .trim()
        .split(/[\s-_]+/)
        .map(w => w.replace(/[^a-z0-9]/gi, '')) // remove non-alphanumeric chars
        .filter(Boolean);

    if (parts.length === 0) return '';

    return parts
        .map((word, i) => {
            const lower = word.toLowerCase();
            if (i === 0) return lower;
            return lower.charAt(0).toUpperCase() + lower.slice(1);
        })
        .join('');
}

module.exports = camelCase;
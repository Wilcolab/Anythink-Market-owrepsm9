function toKebabCase(str) {
    // Clean whitespaces, hyphens, and underscores
    const cleaned = str.replace(/[\s\-_]+/g, ' ').trim();
    
    // Insert hyphens before uppercase letters and convert to lowercase
    const withHyphens = cleaned
        .replace(/([a-z])([A-Z])/g, '$1-$2')
        .replace(/\s+/g, '-')
        .toLowerCase();
    
    // Remove any duplicate or leading/trailing hyphens
    return withHyphens.replace(/^-+|-+$/g, '').replace(/-+/g, '-');
}

module.exports = toKebabCase;
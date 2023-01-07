let modulePrefix = "p";

export function setPrefix(prefix: string) {
    modulePrefix = prefix;
}

export function shared(text: string): string {
    return `${modulePrefix}${text}`;
}
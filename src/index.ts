import { setPrefix } from './shared/index';
/**
 * Constructs a personalized string that can be used to greet a person.
 * @param name The name of the person receiving the greeting.
 * @returns a greeting string containing the name of the person receiving the greeting.
 */
export function greeting(name: string): string {
    setPrefix(name);
    return `Hello, ${name}!`;
}
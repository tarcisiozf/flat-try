export default function Try<T, E extends Error>(fn: Function): [E?, T?]
export function promise<T, E extends Error>(fn: Function): Promise<[E?, T?]>
export function apply<T, E extends Error>(fn: Function, ...args: any): [E?, T?]

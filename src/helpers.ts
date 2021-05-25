// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function assertNever(_x: never): never {
  throw new Error('Unexpected value. Should have been never.');
}

export function pick<O extends unknown, K extends keyof O>(
  base: O,
  keys: readonly K[]
): Pick<O, K> {
  const entries = keys.map((key) => [key, base?.[key]]);
  return Object.fromEntries(entries);
}

export function isObject(o: unknown): o is Record<PropertyKey, unknown> {
  return typeof o === 'object' && o !== null;
}

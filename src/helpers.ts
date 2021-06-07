import crypto from 'crypto';

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

export function parseHeader(header: string): {
  timestamp: number;
  signature: string;
} | null {
  if (typeof header !== 'string') {
    return null;
  }

  const headerArr = header.split('|');
  return {
    timestamp: Number(headerArr[0] ?? '-1'),
    signature: headerArr[1] ?? '',
  };
}

export function computeSignature(payload: string, secret: string): string {
  return crypto
    .createHmac('sha256', secret)
    .update(payload, 'utf8')
    .digest('hex');
}

/**
 * Secure compare, from https://github.com/freewil/scmp
 */
export function secureCompare(a: string, b: string): boolean {
  const aBuff: Buffer = Buffer.from(a);
  const bBuff: Buffer = Buffer.from(b);

  // return early here if buffer lengths are not equal since timingSafeEqual
  // will throw if buffer lengths are not equal
  if (aBuff.length !== bBuff.length) {
    return false;
  }

  // use crypto.timingSafeEqual if available (since Node.js v6.6.0),
  // otherwise use our own scmp-internal function.
  if (crypto.timingSafeEqual) {
    return crypto.timingSafeEqual(aBuff, bBuff);
  }

  let result = 0;

  for (let i = 0; i < aBuff.length; ++i) {
    result |= (aBuff[i] ?? 0) ^ (bBuff[i] ?? 0);
  }
  return result === 0;
}

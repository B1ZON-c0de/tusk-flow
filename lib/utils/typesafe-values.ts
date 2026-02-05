export const typesafeValues = <T extends Record<string, string>>(obj: T): Array<T[keyof T]> => {
  return Object.values(obj) as Array<T[keyof T]>;
}
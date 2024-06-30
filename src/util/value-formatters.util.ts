export function joinValues(
  values: string | number | string[] | number[],
  separator: string = ", "
): string {
  if (typeof values === "string" || typeof values === "number") {
    return values.toString();
  }

  const mappedValues = values.map((v) => v.toString());
  return mappedValues.length > 0 ? mappedValues.join(separator) : "";
}

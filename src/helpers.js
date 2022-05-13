export function cutString(name, number) {
  if (name.length > number) {
    return name.substring(number, length) + "...";
  }
  return name;
}
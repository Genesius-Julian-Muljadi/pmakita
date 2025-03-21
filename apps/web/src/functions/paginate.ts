export default function Paginate(
  arr: Array<any>,
  pageSize: number
): Array<Array<any>> {
  const output: Array<Array<any>> = [];

  const pages: number = Math.ceil(arr.length / pageSize);
  for (let i = 0; i < pages; i++) {
    const slice: Array<any> = arr.slice(pageSize * i, pageSize * (i + 1));
    output.push(slice);
  }

  return output;
}

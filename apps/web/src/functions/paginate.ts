export default function Paginate(
  arr: Array<any>,
  pageSize: number,
  fillEmpty?: any
): Array<Array<any>> {
  const output: Array<Array<any>> = [];

  const pages: number = Math.ceil(arr.length / pageSize);
  for (let i = 0; i < pages; i++) {
    const slice: Array<any> = arr.slice(pageSize * i, pageSize * (i + 1));
    if (fillEmpty !== undefined) {
      while (slice.length < pageSize) {
        slice.push(fillEmpty);
      }
    }
    output.push(slice);
  }

  return output;
}

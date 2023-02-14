export const formatter = (value: number, isFull?: boolean): string => {
  if (value === 0) return '0';

  const unitWords: string[] = ['', '만', '억', '조', '경'];
  const splitUnit: number = 10000;
  const splitCount: number = unitWords.length;
  const resultArray: Array<any> = [];
  let resultString: string = '';

  for (let i = 0; i < splitCount; i++) {
    let unitResult = (value % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i);
    unitResult = Math.floor(unitResult);
    if (unitResult > 0) {
      resultArray[i] = unitResult;
    }
  }

  !isFull && delete resultArray[0];
  value >= splitUnit && delete resultArray[0];
  for (let i = 0; i < resultArray.length; i++) {
    if (!resultArray[i]) continue;
    resultString = new Intl.NumberFormat().format(resultArray[i]) + unitWords[i] + resultString;
  }

  return resultString;
};

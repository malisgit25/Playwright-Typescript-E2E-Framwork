export class DataUtility {

  static getData(path: string) {
    return require(path);
  }
}
import {plainToClass} from 'class-transformer';
import {ClassType} from 'class-transformer/ClassTransformer';

export default class HttpResponseUtil {

  /**
   * 解析json字符串
   * @param cls
   * @param jsonData
   */
  public static parseJSONStr<T, V>(cls: ClassType<T>, jsonData: V): T {
    let clsObj = plainToClass(cls, jsonData);
    return clsObj;
  }

  /**
   * 解析json数组
   * @param cls
   * @param jsonData
   */
  public static parseJSONArray<T, V>(cls: ClassType<T>, jsonData: V[]): T[] {
    let clsObjs = plainToClass(cls, jsonData);
    return clsObjs;
  }

  public static getHeaderLink(linkStr: string): string {
    let result: string = '';
    if (linkStr) {
      result = linkStr.split('>')[0].split('<')[1];
    }
    return result;
  }


}

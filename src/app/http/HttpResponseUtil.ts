import {plainToClass} from 'class-transformer';
import {ClassType} from 'class-transformer/ClassTransformer';
import {HttpResponse} from '@angular/common/http';

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

  private static getHeaderLink1(linkStr: string): string {
    let result: string = '';
    if (linkStr) {
      result = linkStr.split('>')[0].split('<')[1];
    }
    return result;
  }

  /**
   * 获取link url
   * @param response
   */
  public static getHeaderLink(response: HttpResponse<any>): string {
    return HttpResponseUtil.getHeaderLink1(response.headers.get('link'));
  }

  /**
   * 获取日期
   * @param response
   */
  public static getHeaderDate(response: HttpResponse<any>): Date {
    return new Date(response.headers.get('date'));
  }
}

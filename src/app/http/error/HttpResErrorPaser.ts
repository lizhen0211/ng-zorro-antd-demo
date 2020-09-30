import HttpError from './HttpError';


export default class HttpResErrorPaser {

  public static readonly UNAUTHORIZED: number = 401;

  public static readonly FORBIDDEN: number = 403;

  public static readonly NOT_FOUND: number = 404;

  public static readonly UNPROCESSABLE_ENTITY: number = 422;

  public static parseResError(code: number | any, errors: Array<HttpError>, paser: EntityErrorPaser | null): string {
    if (code == HttpResErrorPaser.UNAUTHORIZED) {
      return '未授权';
    } else if (code == HttpResErrorPaser.FORBIDDEN) {
      return '身份认证失败';
    } else if (code == HttpResErrorPaser.NOT_FOUND) {
      return '请求资源不存在';
    } else if (code == HttpResErrorPaser.UNPROCESSABLE_ENTITY) {
      return HttpResErrorPaser.parseEntityError(errors, paser);
    } else if (code >= 400 && code < 500) {
      return '客户端错误:' + code;
    } else if (code >= 500 && code < 600) {
      return '服务端错误:' + code;
    } else {
      return '意外错误:' + code;
    }
  }

  private static parseEntityError(errors: Array<HttpError>, paser: EntityErrorPaser | null): string {
    if (paser != null) {
      if (errors != null && errors.length > 0) {
        let resultStr: string = '';
        for (let i: number = 0; i < errors.length; i++) {
          let errorMessage = paser.parseUnprocessableEntity(errors[i]);
          if (errorMessage != null) {
            if (i > 0) {
              resultStr += '\n';
            }
            resultStr += errorMessage;
          }
        }
        return resultStr;
      }
    }
    return '';
  }

}

/**
 * 实体解析接口
 */
export interface EntityErrorPaser {

  /**
   * 解析实体错误
   * @param error
   */
  parseUnprocessableEntity(error: HttpError): string
}

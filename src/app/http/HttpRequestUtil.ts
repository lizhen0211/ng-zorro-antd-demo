import ValueUtil from '../../util/value-util';

export default class HttpRequestUtil {

  /**
   * URL参数编码
   * @param paramMap
   */
  public static encodeParameters(paramMap: Map<string, string>) {
    let encodedParams: string = '';
    let entries = paramMap.entries();
    for (let [key, value] of entries) {
      if (!ValueUtil.isStrEmpty(key) && !ValueUtil.isStrEmpty(value)) {
        encodedParams += encodeURIComponent(key);
        encodedParams += ('=');
        encodedParams += (encodeURIComponent(value));
        encodedParams += ('&');
      }
    }
    if (encodedParams.length > 0) {
      encodedParams = encodedParams.substring(0, encodedParams.length - 1);
    }
    return encodedParams;
  }
}

export default class ValueUtil {

    /**
     * 判断对象是否为空
     * @param obj
     */
    public static isObjectEmpty(obj: Object): boolean {
        return Object.keys(obj).length === 0
    }

    /**
     * 判断字符串是否为空
     * @param str
     */
    public static isStrEmpty(str: string): boolean {
        return !str || str == null || str === '' || str === 'null'
    }

    /**
     * 判断数组是否为空
     * @param array
     */
    public static isArrEmpty(array: Array<any>): boolean {
        return !array || array == null || array.length === 0
    }
}
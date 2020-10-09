import dateFormat from 'dateformat';

export default class TimeUtil {

    /**
     * 通过字符串时间获取时间戳
     * @param dateStr
     * @return number
     */
    public static getTimeStampByStr(dateStr: string): number {
        return Date.parse(dateStr);
    }

    /**
     * 通过时间戳获取日期
     * @param timeStamp
     * @return string
     */
    public static getDateByTimeStamp(timeStamp: number): string {
        return new Date(timeStamp).toDateString()
    }

    /**
     * 日期格式化
     * @param timeStampOrDateStr
     * @returns string
     */
    public static getDateYYYYMMDD(timeStampOrDateStr: string | number): string {
        return dateFormat(new Date(timeStampOrDateStr), 'yyyy-mm-dd')
    }

    /**
     * 日期格式化
     * @param timeStampOrDateStr
     * @returns string
     */
    public static getDateYYYYMMDDByFormat(timeStampOrDateStr: string | number,format:string): string {
        return dateFormat(new Date(timeStampOrDateStr), format)
    }
    /**
     * 日期格式化
     * @param timeStampOrDateStr
     * return string
     */

    public static getDateYYYYMMDDHHMMSS(timeStampOrDateStr: string | number): string {
        return dateFormat(new Date(timeStampOrDateStr), 'yyyy-mm-dd HH:MM:ss')
    }

    /**
     * 日期格式化
     * @param timeStampOrDateStr
     * @return string
     */
    public static getDateYYYYMMDDHHMM(timeStampOrDateStr: string | number) {
        return dateFormat(new Date(timeStampOrDateStr), 'yyyy-mm-dd HH:MM')
    }

    /**
     * 日期格式化
     * @param timeStampOrDateStr
     * @returns string
     */
    public static getDatemmDDHHMM(timeStampOrDateStr: string | number): string {
        return dateFormat(new Date(timeStampOrDateStr), 'mm-dd HH:MM')
    }

    /**
     * 日期格式化
     * @param timeStampOrDateStr
     * @return string
     */

    public static getDateHHMM(timeStampOrDateStr: string | number): string {
        return dateFormat(new Date(timeStampOrDateStr), 'HH:MM')
    }

    /**
     * 日期格式化
     * @param timeStampOrDateStr
     * @returns string
     */
    public static getDate(timeStampOrDateStr: string | number, format: string): string {
        return dateFormat(new Date(timeStampOrDateStr), format)
    }


    public static getTimeDuration(milliseconds: number): string {
        if (milliseconds < 0) {
            return ''
        } else if (milliseconds === 0) {
            return '0秒'
        } else {
            var between = Math.floor(milliseconds / 1000) // 除以1000是为了转换成秒
            var day = Math.floor(between / (24 * 3600))
            var hour = Math.floor(between % (24 * 3600) / 3600)
            var minute = Math.floor(between % 3600 / 60)
            var second = Math.ceil(between % 60)
            if (between < 60) {
                return second + '秒';
            }
            return (day > 0 ? day + '天' : '') + (hour > 0 ? hour + '小时' : '') + (minute > 0 ? minute + '分' : '') + (second < 10? '0' + second : second)  + '秒';
        }
    }

    /**
     * 分钟转换成时间格式
     * @param value 秒
     * hh:mm  13:30
     * theTime1 分钟
     * theTime2 小时
     */
    public static FormatSecondsHHMM(value: number): string {
        const theTime = Number(parseInt(String(value)));
        let minutes = '';
        let hours = '';
        let hourTime = Number(parseInt(String(theTime / 3600)));
        let minuteTime = parseInt(String(Number(theTime % 3600) / 60));
        if (hourTime == 0) {
            hours = '00';
        } else if (hourTime < 10) {
            hours = '0' + hourTime;
        } else {
            hours = hourTime.toString();
        }
        if (minuteTime == 0) {
            minutes = "00";
        } else if (minuteTime < 10) {
            minutes = "0" + minuteTime;
        } else {
            minutes = minuteTime.toString();
        }
        return hours + ':' + minutes;
    }
}

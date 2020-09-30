export default class HttpError {

    /**
     * 字段错误
     */
    private _field!: string;

    /**
     * 资源错误
     */
    private _resource!: string;

    /**
     * 权限错误
     */
    private _permission!: string;

    /**
     * 错误码
     */
    private _code!: string;


    get field(): string {
        return this._field;
    }

    set field(value: string) {
        this._field = value;
    }

    get resource(): string {
        return this._resource;
    }

    set resource(value: string) {
        this._resource = value;
    }

    get permission(): string {
        return this._permission;
    }

    set permission(value: string) {
        this._permission = value;
    }

    get code(): string {
        return this._code;
    }

    set code(value: string) {
        this._code = value;
    }
}

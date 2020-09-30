import {HttpClient, HttpEvent, HttpHandler, HttpHeaders, HttpRequest} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

export class HttpAgent {

  private httpClient: HttpClient;
  options: {};
  headers: HttpHeaders;

  constructor() {
    this.httpClient = new HttpClient(new class extends HttpHandler {
      handle(req: HttpRequest<any>): Observable<HttpEvent<any>> {
        console.log(req);
        return new Observable<HttpEvent<any>>();
      }
    });
  }

  public getTestUrl(): Observable<Object> {
    return this.httpClient.get(environment.TEST_URL);
  }
}

const httpAgent = new HttpAgent();
export default httpAgent;

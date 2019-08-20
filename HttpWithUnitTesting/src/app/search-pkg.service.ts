import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

//import { HttpErrorHandler, HandleError } from '../http-error-handler.service';

export interface NpmPackageInfo {
  name: string;
  version: string;
  description: string;
}

export const searchUrl = 'https://npmsearch.com/query';

const httpOptions = {
  headers: new HttpHeaders({
    'x-refresh':  'true'
  })
};

//Eg. for POST HTTP Options
// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json',
//     'Authorization': 'my-auth-token'
//   })
// };

function createHttpOptions(packageName: string, refresh = false) {
    // npm package name search api
    // e.g., http://npmsearch.com/query?q=dom'
    const params = new HttpParams({ fromObject: { q: packageName } });
    const headerMap = refresh ? {'x-refresh': '0'} : {};
    const headers = new HttpHeaders(headerMap) ;
    return { headers, params };
}

@Injectable({
  providedIn: 'root'
})
export class SearchPkgService {
  //private handleError: HandleError;

  constructor(
    private http: HttpClient)
    //httpErrorHandler: HttpErrorHandler) 
    {
    //this.handleError = httpErrorHandler.createHandleError('SearchPkgService');
  }

  searchWithSubscribe(packageName:string, refresh=false){
    return this.http.get(searchUrl, createHttpOptions(packageName, refresh))
                    .pipe(map((data:any) => {return data.results.map(entry => ({
                      name: entry.name[0],
                      version: entry.version[0],
                      description: entry.description[0]
                    } as NpmPackageInfo ));}));
  }

  search (packageName: string, refresh = false): Observable<NpmPackageInfo[]> {
    // clear if no pkg name
    if (!packageName.trim()) { return of([]); }

    const options = createHttpOptions(packageName, refresh);

    // TODO: Add error handling
    return this.http.get(searchUrl, options).pipe(
      map((data: any) => {
        return data.results.map(entry => ({
            name: entry.name[0],
            version: entry.version[0],
            description: entry.description[0]
          } as NpmPackageInfo )
        );
      })
      //,catchError(this.handleError('search', []))
    );
  }



  ///Other HTTP Methods... For NPM Search, the API is not available
  // addPkg (pkg: NpmPackageInfo): Observable<NpmPackageInfo> {
  //   return this.http.post<NpmPackageInfo>(searchUrl, pkg, httpOptions)
  //     .pipe(
  //       catchError(this.handleError('addPkg', pkg))
  //     );
  // }

  // /** DELETE: delete the Pkg from the server */
  // deletePkg (id: number): Observable<{}> {
  //   const url = `${searchUrl}/${id}`; // DELETE api/Pkges/42
  //   return this.http.delete(url, httpOptions)
  //     .pipe(
  //       catchError(this.handleError('deletePkg'))
  //     );
  // }

  // /** PUT: update the Pkg on the server. Returns the updated Pkg upon success. */
  // updatePkg (pkg: NpmPackageInfo): Observable<NpmPackageInfo> {
  //   httpOptions.headers =
  //     httpOptions.headers.set('Authorization', 'my-new-auth-token');

  //   return this.http.put<NpmPackageInfo>(searchUrl, pkg, httpOptions)
  //     .pipe(
  //       catchError(this.handleError('updatePkg', pkg))
  //     );
  // }
}

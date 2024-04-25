// import { Injectable } from '@angular/core';
// import { Remote } from '../models/remote';

// @Injectable({
//   providedIn: 'root'
// })
// export class RemoteWorkService {
//   constructor() { }

//   generateRemoteWorkRecords(): Remote[] {
//     const records: Remote[] = [];
//     // Generate 100 fake records
//     for (let i = 1; i <= 100; i++) {
//       const record = new Remote(
//         `2024-04-${i}`,
//         `EMP-${i}`,
//         `WORK-${i}`,
//         `Employee ${i}`,
//         Math.random() < 0.5 ? 'Approved' : 'Pending'
//       );
//       records.push(record);
//     }
//     return records;
//   }
// }

import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { HttpUtilService } from './http.util.service';
import { environment } from "../environments/enviroment";
import { Remote } from "../models/remote";
import { Observable } from "rxjs";
import { ApiResponse } from "../responses/api.response";


@Injectable({
    providedIn: 'root'
})

export class RemoteService {
    // Kết nối APIs


    //Inject 
    private http = inject(HttpClient);
    private httpUtilService = inject(HttpUtilService); // đa ngôn nghữ i18n

    //Cấu hình các request
    private apiConfig = {
        headers: this.httpUtilService.createHeaders(),
    }

    // Các phương thức
    private api = `${environment.apiBaseUrl}/remotes`;
    create (remoteData : Remote, avatar : File): Observable<any>{
    // Các phương thứccreateEmployee (emloyeeData : Employee, avatar : File): Observable<any>{
        const formData : FormData = new FormData();
        formData.append('remoteDTO', JSON.stringify(remoteData));
        // formData.append('avatar', avatar);

        return this.http.post<any>(this.api,formData);

    }

    getAll(page : number, size: number, departmentId: number,keyword : string) : Observable<Remote[]>{
        const params = {

        }
        return this.http.get<Remote[]>(this.api,{params});
    }
    getById (id : number) : Observable<any> {
        return this.http.get<ApiResponse>(`${this.api}/${id}`);
    }

    delete (id : number ) :Observable<any> {
        return this.http.delete<string>(`${this.api}/${id}`);
    }

    update (id : number) :Observable<any> {
        const params = {

        }
        return this.http.put<ApiResponse>(`${this.api}/${id}`, params);
    }
    
}
import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { HttpUtilService } from './http.util.service';
import { environment } from "../environments/enviroment";
import { Leave } from "../models/leave";
import { Observable } from "rxjs";
import { ApiResponse } from "../responses/api.response";


@Injectable({
    providedIn: 'root'
})

export class LeaveService {
    // Kết nối APIs



    //Inject 
    private http = inject(HttpClient);
    private httpUtilService = inject(HttpUtilService); // đa ngôn nghữ i18n

    //Cấu hình các request
    private apiConfig = {
        headers: this.httpUtilService.createHeaders(),
    }

    private api = `${environment.apiBaseUrl}/leaves`;
    create (emloyeeData : Leave, avatar : File): Observable<any>{
    // Các phương thứccreateEmployee (emloyeeData : Employee, avatar : File): Observable<any>{
        const formData : FormData = new FormData();
        formData.append('employeeDTO', JSON.stringify(emloyeeData));
        formData.append('avatar', avatar);

        return this.http.post<any>(this.api,formData);

    }

    getAll() : Observable<Leave[]>{
        
        return this.http.get<Leave[]>(`${this.api}/all`);
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
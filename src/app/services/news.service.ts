// import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";
import { HttpUtilService } from './http.util.service';
import { HttpClient } from "@angular/common/http";
import { environment } from "../environments/enviroment";
import { Observable } from "rxjs";
import { News } from "../models/news";
import { ApiResponse } from "../responses/api.response";


@Injectable({
    providedIn: 'root'
})

export class NewsService {
    // Kết nối APIs


    //Inject 
    private http = inject(HttpClient);
    private httpUtilService = inject(HttpUtilService); // đa ngôn nghữ i18n

    //Cấu hình các request
    private apiConfig = {
        headers: this.httpUtilService.createHeaders(),
    }

    // Các phương thức
    private api = `${environment.apiBaseUrl}/news`;
    create (newsData : News, avatar : File): Observable<any>{
    // Các phương thứccreateEmployee (emloyeeData : Employee, avatar : File): Observable<any>{
        const formData : FormData = new FormData();
        formData.append('newsDTO', JSON.stringify(newsData));
        // formData.append('avatar', avatar);

        return this.http.post<any>(this.api,formData);

    }

    getAll(page : number, size: number, departmentId: number,keyword : string) : Observable<News[]>{
        const params = {

        }
        return this.http.get<News[]>(this.api,{params});
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
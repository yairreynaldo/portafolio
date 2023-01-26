import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SendMailService {

  constructor(private httpClient: HttpClient) { }

  envioMail(body) {
    return this.httpClient.post('https://railway-sendmail.up.railway.app/contact', body)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRegistrationDto } from 'src/app/_interfaces/users/userRegistrationDto';
import { UserRegistrationResponseDto } from 'src/app/_interfaces/users/userRegistrationResponseDto';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  public registerUser = (route: string, body: UserRegistrationDto) => {
    return this.http.post<UserRegistrationResponseDto>(`http://localhost:5109/${route}`, body);
  }
}

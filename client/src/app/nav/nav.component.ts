import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}

  constructor(public accountServices: AccountService, private router: Router, private toastr: ToastrService) { }


  ngOnInit(): void {    
    
  }

  login(){
    this.accountServices.login(this.model).subscribe(response=>{
      this.router.navigateByUrl('/members');
      console.log(response);
    })
  }

  logout(){
    this.accountServices.logout();
    this.router.navigateByUrl('/');
  }
}

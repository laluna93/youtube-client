import {
  Component, EventEmitter, OnInit, Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter } from 'rxjs/operators';
import { LoginServices } from 'src/app/auth/services/login-services';
import { StatusLoginServices } from 'src/app/auth/services/Status-login-services';
import { FlagSortsService } from 'src/app/core/services/flag-sort-service';
import { SearchService } from 'src/app/core/services/search-service';
import { SortsService } from 'src/app/core/services/sorts-services';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export default class HeaderComponent implements OnInit {
  @Output() flag: EventEmitter<boolean> = new EventEmitter<boolean>();

  textSearch: string = '';

  textSort: string = '';

  flagFilter: boolean | null = null;

  clickSearch: boolean | null = null;

  saveLogin: string | null = null;

  text!: FormControl;

  isStatusAuth:boolean | null = null;

  addCardVideo:boolean | null = null;

  constructor(
    public inputSearch: SearchService,
    public inputSort:SortsService,
    public flagSort:FlagSortsService,
    public loginService:LoginServices,
    private checkAut: StatusLoginServices,

  ) {

  }

  ngOnInit() {
    this.loginService.login.subscribe((date:string | null) => {
      this.saveLogin = date;
    });

    this.checkAut.isLogin.subscribe((data:boolean) => {
      this.isStatusAuth = data;
    });

    this.text = new FormControl('');

    this.text.valueChanges.pipe(
      debounceTime(1000),
      filter((e:any) => e.length > 2),
    ).subscribe((e:any) => this.inputSearch.searchVideoMethod(e));
  }

  clickLogin() {
    if (localStorage.getItem('login')) {
      localStorage.removeItem('token');
      localStorage.removeItem('login');
      this.saveLogin = '';
      this.checkAut.checkAuth(false);
    }
  }

  addVideo() {
    this.addCardVideo = !this.addCardVideo;
    console.log(this.addCardVideo, 'add');
  }

  openFillter(flagActive: boolean) {
    this.flagFilter = flagActive;
  }

  sortVideo(e: string) {
    this.inputSort.sortVideoMethod(e);
  }

  activeSort(flag: boolean) {
    this.flagSort.flagSortMethod(flag);
  }
}

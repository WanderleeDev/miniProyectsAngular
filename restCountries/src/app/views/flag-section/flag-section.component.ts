import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ICountry } from 'src/app/interfaces/ICountry.interface';
import { HttpCountriesService } from 'src/app/services/http-countries.service';

@Component({
  selector: 'app-flag-section',
  templateUrl: './flag-section.component.html'
})
export class FlagSectionComponent  implements OnInit{
  nameFlag: string | null = null;
  dataCountry: ICountry[] = [];

  constructor(
    private route: ActivatedRoute,
    private httpCountriesSvc: HttpCountriesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.pipe(
      switchMap(params => {
        this.nameFlag = params.get('id');
        if (this.nameFlag) {
          return this.httpCountriesSvc.getForCountry(this.nameFlag)
        } else {
          return [null]
        }
      })
    ).subscribe({
        next: (res) => {
          res
            ? (this.dataCountry = res, console.log(res)
            )
            : this.returnBack()
        },
        error: () => console.log('Error al conseguir los datos')

      })
  }

  public returnBack ():void {
    this.router.navigateByUrl('');
  }
}

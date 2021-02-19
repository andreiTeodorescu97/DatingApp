import { Component, Input, OnInit, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsLocaleService } from 'ngx-bootstrap/datepicker';

@Component({
  selector: 'app-date-input',
  templateUrl: './date-input.component.html',
  styleUrls: ['./date-input.component.css']
})
export class DateInputComponent implements ControlValueAccessor {

  @Input() label : string;
  @Input() maxDate: Date;
  locale = 'ro';
  
  //we can provide only some of the configuration option from bsdatepicker
  bsConfig: Partial<BsDatepickerConfig>;

  constructor(@Self() public ngControl : NgControl, private localeService: BsLocaleService) {
    this.ngControl.valueAccessor = this;
    this.bsConfig = {
      containerClass: 'theme-red',
      dateInputFormat: 'DD MMMM YYYY',
      
    }
    this.localeService.use(this.locale);
   }

  writeValue(obj: any): void {
  }
  registerOnChange(fn: any): void {
      }
  registerOnTouched(fn: any): void {
     }

  ngOnInit(): void {
  }

}

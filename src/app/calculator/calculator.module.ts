import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ThemeTogglerComponent } from './theme-toggler/theme-toggler.component';
import { ScreenComponent } from './screen/screen.component';
import { NumberpadComponent } from './numberpad/numberpad.component';

@NgModule({
  declarations: [
    HeaderComponent,
    ThemeTogglerComponent,
    ScreenComponent,
    NumberpadComponent,
  ],
  imports: [CommonModule],
  exports: [HeaderComponent, ScreenComponent, NumberpadComponent],
})
export class CalculatorModule {}

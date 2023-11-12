import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ThemeTogglerComponent } from './theme-toggler/theme-toggler.component';

@NgModule({
  declarations: [HeaderComponent, ThemeTogglerComponent],
  imports: [CommonModule],
  exports: [HeaderComponent],
})
export class CalculatorModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ThemeTogglerComponent } from './theme-toggler/theme-toggler.component';
import { ScreenComponent } from './screen/screen.component';

@NgModule({
  declarations: [HeaderComponent, ThemeTogglerComponent, ScreenComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, ScreenComponent],
})
export class CalculatorModule {}

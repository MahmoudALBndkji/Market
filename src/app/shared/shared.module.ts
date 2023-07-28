import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import { SpinnerComponent } from './coponents/spinner/spinner.component';
import { SelectComponent } from './components/select/select.component';

@NgModule({
  declarations: [HeaderComponent, SpinnerComponent, SelectComponent],
  imports: [CommonModule, RouterModule, HttpClientModule, BrowserModule,FormsModule],
  exports: [HeaderComponent, SpinnerComponent, SelectComponent,FormsModule,RouterModule],
})
export class SharedModule {}

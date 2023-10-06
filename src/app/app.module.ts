import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { FooterComponent } from './components/footer/footer.component';
import { BgdescountComponent } from './components/bgdescount/bgdescount.component';
import { ContadorComponent } from './components/contador/contador.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  declarations: [
    AppComponent, 
    NavbarComponent, 
    HomeComponent, 
    AboutComponent, ServicesComponent, FooterComponent, BgdescountComponent, ContadorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // Aquí pasas el arreglo de rutas como argumento
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }

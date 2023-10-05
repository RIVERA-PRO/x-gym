import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
 redirectTo:'/home',
 pathMatch:'full'
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
    AboutComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // Aquí pasas el arreglo de rutas como argumento
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }

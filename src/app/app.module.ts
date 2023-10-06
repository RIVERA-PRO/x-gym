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
import { TrainersComponent } from './components/trainers/trainers.component';
import { CalculateComponent } from './components/calculate/calculate.component';
import { ClassComponent } from './components/class/class.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { ClasesContentComponent } from './components/clases-content/clases-content.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';
import { FormContactComponent } from './components/form-contact/form-contact.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'class',
    component: ClassComponent
  },
  {
    path: 'blog',
    component: BlogComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }
];

@NgModule({
  declarations: [
    AppComponent, 
    NavbarComponent, 
    HomeComponent, 
    AboutComponent, ServicesComponent, FooterComponent, BgdescountComponent, ContadorComponent, TrainersComponent, CalculateComponent, ClassComponent, BlogComponent, ContactComponent, ClasesContentComponent, BlogDetailComponent, FormContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), // Aquí pasas el arreglo de rutas como argumento
  ],
  providers: [],
  bootstrap: [AppComponent] 
})
export class AppModule { }

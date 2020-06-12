import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { 
    path: 'producto', component: ProductComponent,
    data: {
      title: 'Farmatodo Producto Dolex',
      description: 'Dolex Gripa 12 Tabs Congestión nasal, Dolor cabeza y fiebre.',
      keywords: 'dolor de cabeza, congestión, flujo nasal, fiebre, Acetaminofén, Fenilefrina, Clorfenamina',
      ogTitle: 'Farmatodo Producto Dolex',
      ogDescription: 'Dolex Gripa 12 Tabs Congestión nasal, Dolor cabeza y fiebre.',
    }
  },
  { 
    path: '', component: HomeComponent ,
    data: {
      title: 'Farmatodo Farmacia y droguería online 24 horas a domicilio - Farmatodo',
      description: 'Farmatodo, cadena de droguerías de autoservicio especializada en productos para la salud, belleza, cuidado personal y cuidado del bebé.',
      keywords: 'droguería, domicilio, 24 horas, farmacia, medicamentos, medicina, belleza, maquillaje, bebés, online',
      ogTitle: 'Farmatodo Farmacia y droguería online 24 horas a domicilio - Farmatodo',
      ogDescription: 'Farmatodo, cadena de droguerías de autoservicio especializada en productos para la salud, belleza, cuidado personal y cuidado del bebé.',
      twitter_title: "Farmatodo Farmacia y droguería online 24 horas a domicilio - Farmatodo", 
      twitter_desc: "Farmatodo, cadena de droguerías de autoservicio especializada en productos para la salud, belleza, cuidado personal y cuidado del bebé.", 
      twitter_site: "@FarmatodoManuelYanez",
      twitter_image: "https://es.freeimages.com/istockphoto/file?id=95182845&path=photo/pharmacists-hands-taking-medicines-from-shelf-gm537309906-95182845&function=search&location=right&keyword=pharmacy&page=1&sharedid=pharmacy&getty=537309906"
    }
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

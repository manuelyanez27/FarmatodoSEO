import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { JsonLdService } from './services/json-ld.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta,
    private readonly jsonLdService: JsonLdService,
  ) {
  }


  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    )
    .subscribe((event: NavigationEnd) => {

      var rt = this.onRouteChange(this.activatedRoute);

      rt.data.subscribe(data => {
        this.titleService.setTitle(data.title);
        this.handleMetaTags(data); 
        
        const urlAppend = this.extractRoute();
        const jsonLd = {
          name: data.title,
          url: environment.ApiUrl + urlAppend
        };

        this.jsonLdService.setData('Website', jsonLd); 
      })

    });
  }

  onRouteChange(activatedRoute: ActivatedRoute) {
    if (activatedRoute.firstChild) {
      return this.onRouteChange(activatedRoute.firstChild);
    } else {
      return activatedRoute;
    }
 
  }

  handleMetaTags(data: any) {
    if (data.description) {
      this.metaService.updateTag({ name: 'description', content: data.description })
    } else {
      this.metaService.removeTag("name='description'")
    }

    if (data.keywords) {
      this.metaService.updateTag({ name: 'keywords', content: data.keywords })
    } else {
      this.metaService.removeTag("name='keywords'")
    }

    if (data.robots) {
      this.metaService.updateTag({ name: 'robots', content: data.robots })
    } else {
      this.metaService.updateTag({ name: 'robots', content: "follow, index" })
    }

    if (data.ogUrl) {
      this.metaService.updateTag({ property: 'og:url', content: data.ogUrl })
    } else {
      this.metaService.updateTag({ property: 'og:url', content: this.router.url })
    }

    if (data.ogTitle) {
      this.metaService.updateTag({ property: 'og:title', content: data.ogTitle })
    } else {
      this.metaService.removeTag("property='og:title'")
    }

    if (data.ogDescription) {
      this.metaService.updateTag({ property: 'og:description', content: data.ogDescription })
    } else {
      this.metaService.removeTag("property='og:description'")
    }

    if (data.ogImage) {
      this.metaService.updateTag({ property: 'og:image', content: data.ogImage })
    } else {
      this.metaService.removeTag("property='og:image'")
    }
  }

  extractRoute(){
    const urlAppendString = JSON.stringify((this.router.routerState.snapshot.url));
    return urlAppendString.substring(2,urlAppendString.length);
  }
}

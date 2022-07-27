import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogModule } from './blog/blog.module';
import { ElementsModule } from './elements/elements.module';
import { FeaturesModule } from './features/features.module';
import { LandingComponent } from './landing/landing.component';
import { LayoutsModule } from './layouts/layouts.module';
import { PagesModule } from './pages/pages.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { SharedModule } from './shared/shared.module';
import { ShopModule } from './shop/shop.module';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutsModule,
    BlogModule,
    PagesModule,
    ElementsModule,
    PortfolioModule,
    ShopModule,
    FeaturesModule,
    HttpClientModule,
    CarouselModule,
    SharedModule,
    RouterModule.forRoot(routes, { useHash: false, anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled', relativeLinkResolution: 'legacy' })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

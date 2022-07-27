import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { BlogComponent } from './blog/blog.component';
import { PagesComponent } from './pages/pages.component';
import { ElementsComponent } from './elements/elements.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FeaturesComponent } from './features/features.component'
import { ShopComponent } from './shop/shop.component'
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'landing',
    pathMatch: 'full',
  },
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'blog',
    component: BlogComponent,
    loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule),
    data: {
      breadcrumb: "Blog"
    }
  },
  {
    path: 'page',
    component: PagesComponent,
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
    data: {
      breadcrumb: "Pages"
    }
  },
  {
    path: 'elements',
    component: ElementsComponent,
    loadChildren: () => import('./elements/elements.module').then(m => m.ElementsModule),
    data: {
      breadcrumb: "Elements"
    }
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule),
    data: {
      breadcrumb: "Portfolio"
    }
  },
  {
    path: 'shop',
    component: ShopComponent,
    loadChildren: () => import('./shop/shop.module').then(m => m.ShopModule),
    data: {
      breadcrumb: "Shop"
    }
  },
  {
    path: 'features',
    component: FeaturesComponent,
    loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule),
    data: {
      breadcrumb: "Features"
    }
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // preloadingStrategy: PreloadAllModules,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

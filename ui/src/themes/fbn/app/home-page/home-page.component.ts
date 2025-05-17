import {
  AsyncPipe,
  NgClass,
  NgIf,
  NgTemplateOutlet,
  NgFor
} from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';

import { HomeCoarComponent } from '../../../../app/home-page/home-coar/home-coar.component';
import { ThemedHomeNewsComponent } from '../../../../app/home-page/home-news/themed-home-news.component';
import { HomePageComponent as BaseComponent } from '../../../../app/home-page/home-page.component';
import { RecentItemListComponent } from '../../../../app/home-page/recent-item-list/recent-item-list.component';
import { ThemedTopLevelCommunityListComponent } from '../../../../app/home-page/top-level-community-list/themed-top-level-community-list.component';
import { SuggestionsPopupComponent } from '../../../../app/notifications/suggestions-popup/suggestions-popup.component';
import { ThemedConfigurationSearchPageComponent } from '../../../../app/search-page/themed-configuration-search-page.component';
import { ThemedSearchFormComponent } from '../../../../app/shared/search-form/themed-search-form.component';
import { PageWithSidebarComponent } from '../../../../app/shared/sidebar/page-with-sidebar.component';
import { ViewTrackerComponent } from '../../../../app/statistics/angulartics/dspace/view-tracker.component';

@Component({
  selector: 'ds-themed-home-page',
  styleUrls: ['./home-page.component.scss'],
  // styleUrls: ['../../../../app/home-page/home-page.component.scss'],
  templateUrl: './home-page.component.html',
  // templateUrl: '../../../../app/home-page/home-page.component.html',
  standalone: true,
  imports: [
    ThemedHomeNewsComponent,
    NgTemplateOutlet, 
    NgIf,
    NgFor,
    ViewTrackerComponent,
    ThemedSearchFormComponent,
    ThemedTopLevelCommunityListComponent,
    RecentItemListComponent,
    AsyncPipe,
    TranslateModule,
    NgClass,
    SuggestionsPopupComponent,
    ThemedConfigurationSearchPageComponent,
    PageWithSidebarComponent,
    HomeCoarComponent,
    RouterModule  
  ],
})
export class HomePageComponent extends BaseComponent {
  public collections = [
    {
      link: 'collections/dcdecd0c-859f-4f12-aaee-d391a8035617',
      image: 'assets/fbn/images/collections/adm.png',
      title: 'Administração'
    },
    {
      link: 'collections/0450b48d-af1b-4469-bc42-4d6b54aed3bc',
      image: 'assets/fbn/images/collections/contabeis.jpg',
      title: 'Ciências Contábeis'
    },
    {
      link: 'collections/1e5a292d-7e62-410a-94dd-14dddb6fb590',
      image: 'assets/fbn/images/collections/religiao.png',
      title: 'Ciências da Religião'
    },
    {
      link: 'collections/dccb6562-b37f-48c9-9803-cfac08e8646d',
      image: 'assets/fbn/images/collections/teologicas.png',
      title: 'Ciências Teológicas'
    },
    {
      link: 'collections/bc04cfce-2ac1-48e4-8ccd-185795083c14',
      image: 'assets/fbn/images/collections/jornalismo.png',
      title: 'Jornalismo'
    },
    {
      link: 'collections/5371b0e7-2871-4bb1-b6fa-2beed5a2a7c6',
      image: 'assets/fbn/images/collections/direito.jpg',
      title: 'Direito'
    },
    {
      link: 'collections/054460f7-c8f6-4cfc-916c-18635d2d0f17',
      image: 'assets/fbn/images/collections/pedagogia.png',
      title: 'Pedagogia'
    },
    {
      link: 'collections/20ca9b67-6c01-4060-bbef-b5c595c2e917',
      image: 'assets/fbn/images/collections/psicologia.png',
      title: 'Psicologia'
    },
    {
      link: 'communities/23d81301-fdfb-4365-a309-e2d4f22a3941',
      image: 'assets/fbn/images/collections/manuais.png',
      title: 'Manuais'
    },
    {
      link: 'communities/73ea0a5d-1718-427a-8883-e4aed440b2e6',
      image: 'assets/fbn/images/collections/docentes.png',
      title: 'Produção de Docentes'
    },
    {
      link: 'communities/7e9182de-4ae1-4731-96e1-5dbbc70771ab',
      image: 'assets/fbn/images/collections/eventos.png',
      title: 'Publicações em Eventos'
    },
    {
      link: 'communities/99556630-b3d2-42d2-a982-006260a84296',
      image: 'assets/fbn/images/collections/pos.png',
      title: 'Pós-graduação'
    }
  ];
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ts2landingComponent } from 'ts2landing';
import { SettingsMenuComponent } from './settings-menu/settings-menu.component';
import { NgxsModule } from '@ngxs/store';
import { LandingState } from './state/landing/landing.state';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Ts2landingComponent,
    SettingsMenuComponent,
    NgxsModule.forRoot([LandingState], {
      developmentMode: /** !environment.production */ false,
    }),
    NgxsStoragePluginModule.forRoot({
      keys: ['landing']
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';
import {HttpClientModule} from '@angular/common/http';
import { ComponentesModule } from './componentes/componentes.module';
import { PipesModule } from './pipes/pipes.module';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

// import { Base64ToGallery } from '@ionic-native/base64-to-gallery';
import { Camera } from '@ionic-native/camera/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot({_forceStatusbarPadding:true}), 
    AppRoutingModule, 
    HttpClientModule, 
    ComponentesModule,  
    PipesModule,
    IonicStorageModule.forRoot(),
    ReactiveFormsModule
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    Camera,
    FileTransfer,
    Geolocation,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

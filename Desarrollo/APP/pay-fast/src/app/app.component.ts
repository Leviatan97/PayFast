import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  showSplash = true;


  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
     // this.statusBar.overlaysWebView(true);
      this.darkMode();
      timer(3000).subscribe(() => this.showSplash = false);

      // if (this.platform.is('android')) {
      //   this.statusBar.backgroundColorByHexString("#33000000");
      // }

    });
  }

  darkMode(){
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    if( prefersDark.matches ) {
      document.body.classList.toggle( 'dark' );
    }
  }
}

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//MAIN.ts é o primeiro arquivo chamado da aplicação, este chama o Appmodule
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


  
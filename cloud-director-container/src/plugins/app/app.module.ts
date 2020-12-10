/*
 * Copyright (c) 2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {CommonModule} from '@angular/common';
import {NgModule, Inject} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {ClarityModule} from 'clarity-angular';

import {AppComponent} from './app.component';
import {ROUTING} from './app.routing';
import {AppContentContainerComponent} from './content-container.component';
import {LandingComponent} from './landing.component';
import {PluginModule, EXTENSION_ROUTE, ExtensionNavRegistration, } from '@vcd/sdk';
import { Store } from '@ngrx/store';

@NgModule({
    declarations: [AppComponent, LandingComponent, AppContentContainerComponent],
    imports: [
        CommonModule,
        FormsModule,
        ClarityModule,
        ROUTING
    ],
    bootstrap: [AppComponent]
})
export class AppModule extends PluginModule {
    constructor(appStore: Store<any>, @Inject(EXTENSION_ROUTE) extensionRoute: string) {
        super(appStore);
        this.registerExtension(<ExtensionNavRegistration>{
            path: extensionRoute,
            icon: 'page',
            nameCode: 'com.vmware.plugin-lifecycle.nav.label',
            descriptionCode: 'com.vmware.plugin-lifecycle.nav.description'
        });
    }
}

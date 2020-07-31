import { NgModule } from '@angular/core';
import { ClarityModule } from 'clarity-angular';

@NgModule({
    imports: [
        ClarityModule,
    ],
    exports: [
        ClarityModule
    ],
})
export class ClarityWrapperModule {}

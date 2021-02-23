import { Component, OnDestroy } from "@angular/core";
import { WizardExtensionComponent } from "@vcd/sdk/common";
import { ModalWizardExtensionPointService } from "../services/modal-wizard-ext-point.service";

@Component({
    selector: 'vm-create-extension',
    templateUrl: './vm.create.wizard.action.component.html'
})
export class VmCreateWizardExtensionPointComponent extends WizardExtensionComponent<any, any, any> implements OnDestroy {
    inVappContext = false;

    constructor(private modalWizardExtensionPointService: ModalWizardExtensionPointService) {
        super();
        
        this.modalWizardExtensionPointService.inVappContextObs.subscribe((value) => {
            this.inVappContext = value;
        });
    }

    ngOnDestroy() {
        console.log("[VmCreateWizardExtensionPointComponent] Destroyed!");
    }

    performAction(payload: string, returnValue: string, error: any) {
        console.log("[VM Create Wizard Extension Point]", payload, returnValue, error);
        this.modalWizardExtensionPointService.storeData<string[]>([payload, returnValue]);
    }
}
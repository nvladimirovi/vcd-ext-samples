/*
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {ModuleWithProviders} from '@angular/core/src/metadata/ng_module';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import AlertDemoModule from './alert/alert.demo.module';
import BadgesDemoModule from './badges/badges.demo.module';
import ButtonGroupDemoModule from './button-group/button-group.demo.module';
import ButtonsDemoModule from './buttons/buttons.demo.module';
import DatagridDemoModule from './datagrid/datagrid.demo.module';
import DropdownDemoModule from './dropdown/dropdown.demo.module';
import FormsDemoModule from './forms/forms.demo.module';
import GridDemoModule from './grid/grid.demo.module';
import ImagesDemoModule from './images/images.demo.module';
import InputFieldsDemoModule from './input-fields/input-fields.demo.module';
import LabelsDemoModule from './labels/labels.demo.module';
import LayoutDemoModule from './layout/layout.demo.module';
import ListsDemoModule from './lists/lists.demo.module';
import LoginDemoModule from './login/login.demo.module';
import ModalDemoModule from './modal/modal.demo.module';
import ProgressBarsDemoModule from './progress-bars/progress-bars.demo.module';
import RadiosDemoModule from './radios/radios.demo.module';
import SelectsDemoModule from './selects/selects.demo.module';
import SignpostsDemoModule from './signpost/signpost.demo.module';
import SpinnersDemoModule from './spinners/spinners.demo.module';
import StackViewDemoModule from './stack-view/stack-view.demo.module';
import TablesDemoModule from './tables/tables.demo.module';
import TabsDemoModule from './tabs/tabs.demo.module';
import TogglesDemoModule from './toggles/toggles.demo.module';
import TooltipsDemoModule from './tooltips/tooltips.demo.module';
import TypographyDemoModule from './typography/typography.demo.module';
import VerticalNavDemoModule from './vertical-nav/vertical-nav.demo.module';
import WizardDemoModule from './wizard/wizard.demo.module';
import CardDemoModule from './card/card.demo.module';
import { CheckboxesDemo } from './checkboxes/checkboxes.demo';
import CodeHighlightDemoModule from './code/code-highlight.demo.module';
import ColorDemoModule from './color/color.demo.module';
import IconographyDemoModule from './iconography/iconography.demo.module';
import NavDemoModule from './nav/nav.demo.module';
import TreeDemoModule from './tree-view/tree-view.demo.module';
import CheckboxesDemoModule from './checkboxes/checkboxes.demo.module';

export const APP_ROUTES: Routes = [
    {
        path: '',
        component: AppComponent,
        children: [
            {path: 'alert', loadChildren: () => AlertDemoModule},
            {path: 'badges', loadChildren: () => BadgesDemoModule},
            {path: 'button-group', loadChildren: () => ButtonGroupDemoModule},
            {path: 'buttons', loadChildren: () => ButtonsDemoModule},
            {path: 'card', loadChildren: () => CardDemoModule},
            {path: 'checkboxes', loadChildren: () => CheckboxesDemoModule},
            {path: 'code-highlight', loadChildren: () => CodeHighlightDemoModule},
            {path: 'color', loadChildren: () => ColorDemoModule},
            {path: 'datagrid', loadChildren: () => DatagridDemoModule},
            {path: 'dropdown', loadChildren: () => DropdownDemoModule},
            {path: 'forms', loadChildren: () => FormsDemoModule},
            {path: 'grid', loadChildren: () => GridDemoModule},
            {path: 'iconography', loadChildren: () => IconographyDemoModule},
            {path: 'images', loadChildren: () => ImagesDemoModule},
            {path: 'input-fields', loadChildren: () => InputFieldsDemoModule},
            {path: 'labels', loadChildren: () => LabelsDemoModule},
            {path: 'layout', loadChildren: () => LayoutDemoModule},
            {path: 'lists', loadChildren: () => ListsDemoModule},
            {path: 'login', loadChildren: () => LoginDemoModule},
            {path: 'modal', loadChildren: () => ModalDemoModule},
            {path: 'navigation', loadChildren: () => NavDemoModule},
            {path: 'progress-bars', loadChildren: () => ProgressBarsDemoModule},
            {path: 'radios', loadChildren: () => RadiosDemoModule},
            {path: 'selects', loadChildren: () => SelectsDemoModule},
            {path: 'signposts', loadChildren: () => SignpostsDemoModule},
            {path: 'spinners', loadChildren: () => SpinnersDemoModule},
            {path: 'stack-view', loadChildren: () => StackViewDemoModule},
            {path: 'tables', loadChildren: () => TablesDemoModule},
            {path: 'tabs', loadChildren: () => TabsDemoModule},
            {path: 'tree-view', loadChildren: () => TreeDemoModule},
            {path: 'toggles', loadChildren: () => TogglesDemoModule},
            {path: 'tooltips', loadChildren: () => TooltipsDemoModule},
            {path: 'typography', loadChildren: () => TypographyDemoModule},
            {path: 'vertical-nav', loadChildren: () => VerticalNavDemoModule},
            {path: 'wizard', loadChildren: () => WizardDemoModule}
        ]
    },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(APP_ROUTES);

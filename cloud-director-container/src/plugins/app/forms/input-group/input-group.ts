/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */


import { Component } from '@angular/core';

@Component({ templateUrl: './input-group.html' })
export class FormsInputGroupDemo {
  wideContext = { width: 'wide' };
  narrowContext = { width: 'narrow' };
  focus = false;
  show = false;
  search = '';
}

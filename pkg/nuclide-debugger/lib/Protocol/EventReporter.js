/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 *
 * @flow
 * @format
 */

import {Subject, Observable} from 'rxjs';

const customEvent$ = new Subject();

export function getEventObservable(): Observable<Array<mixed>> {
  return customEvent$.asObservable();
}

export function reportError(message: string): void {
  customEvent$.next(['ReportError', message]);
}

export function reportErrorFromConsole(message: string): void {
  customEvent$.next(['ReportErrorFromConsole', message]);
}

export function reportWarning(message: string): void {
  customEvent$.next(['ReportWarning', message]);
}

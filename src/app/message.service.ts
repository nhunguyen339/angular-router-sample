import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MessageService {
    public messages: string[] = [];
    constructor() {}

    add(mess: string) {
        this.messages.push(mess);
    }

    clear() {
        this.messages = [];
    }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
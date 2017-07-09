import { Observable } from 'data/observable';
import * as frameModule from 'ui/frame';

export class PtLoginViewModel extends Observable {

    public isLoading: boolean = false;


    public login(args) {
        console.log('login tapped from vm');

        frameModule.topmost().navigate({
            moduleName: 'main-page',
            clearHistory: true
        });
    }

}
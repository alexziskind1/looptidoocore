
//nativescript imports
import * as appSettingsModule from "application-settings";

//app imports
import { APP_SETTINGS_CURRENT_USER, DEMO_PASSWORD } from '../shared/constants';
import { UserService } from './user.service';
import { User } from '../domain/domain';

export class AuthService {

    public currentUser: User;

    constructor(private userService: UserService) {
        userService.usersObs.on('propertyChange', (d) => {
            this.currentUser = d[0];
        });
    }

    public login(username: string, password: string) {
        return new Promise((resolve, reject) => {
            if (password === DEMO_PASSWORD) {
                setTimeout(() => {
                    resolve(this.currentUser);
                    appSettingsModule.setString(APP_SETTINGS_CURRENT_USER, JSON.stringify(this.currentUser));
                }, 3000);
            } else {
                setTimeout(() => {
                    reject('Login failed');
                }, 3000);
            }
        });
    }

    public logout() {
        appSettingsModule.remove(APP_SETTINGS_CURRENT_USER);
    }

    static isLoggedIn(): boolean {
        return !!appSettingsModule.getString(APP_SETTINGS_CURRENT_USER);
    }
}
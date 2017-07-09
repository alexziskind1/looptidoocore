//nativescript imports
import * as obs from 'data/observable';

//3rd party imports
import * as _ from 'lodash';

//app imports
import { MockDataService } from './mock-data.service';
import { User } from '../domain/domain';

export class UserService {

    private _generatedUsers: Array<User> = [];



    public get users(): Array<User> {
        return this._generatedUsers;
    }

    public get usersObs(): obs.Observable {
        return obs.fromObject(this._generatedUsers);
    }

    constructor(private mockDataService: MockDataService) {
        this._generatedUsers = this.mockDataService.generateUsers();
    }

    public getUserAvatar(userId: string) {
        let user = _.find(this.users, (user) => user.id === userId);
        return user.avatar;
    }
}

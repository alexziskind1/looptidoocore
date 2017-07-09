
//3rd party imports
import * as _ from 'lodash';

//app imports
import { PtItem, Task, NewTask } from '../domain/domain';
import { MockDataService } from "../services/mock-data.service";
import { UserService } from "../services/user.service";
import { AuthService } from "../services/auth.service";


export class BacklogService {
    private _genetatedItems: Array<PtItem> = [];

    public get items(): Array<PtItem> {
        return this._genetatedItems;
    }

    constructor(private mockDataService: MockDataService,
        private userService: UserService,
        private authService: AuthService) {

        this._genetatedItems = this.mockDataService.generatePTItems(this.userService.users);

    }

    public getItem(id: string) {
        let selectedItem = _.find(this._genetatedItems, i => i.id == id);
        return Promise.resolve(selectedItem);
    }


    public toggleTask(item: PtItem, task: Task) {
        var index = _.indexOf(item.tasks, task);
        task.completed = !task.completed;
        item.tasks.splice(index, 1, task);
    }

    public updateTask(item: PtItem, task: Task, newTitle: string) {
        var index = _.indexOf(item.tasks, task);
        task.title = newTitle;
        item.tasks.splice(index, 1, task);
    }

    public addTask(item: PtItem, newTask: NewTask) {
        var task: Task = {
            id: _.uniqueId(),
            title: newTask.title,
            completed: newTask.completed,
            dateCreated: new Date(),
            dateModified: new Date()
        };
        item.tasks.unshift(task);
    }
}
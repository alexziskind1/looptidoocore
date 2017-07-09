//nativescript imports
import { TextView } from 'ui/text-view';
import { ScrollView } from 'ui/scroll-view';
import { isIOS, isAndroid } from 'platform';
import { Observable } from 'data/observable';


//app imports
import { BacklogService } from '../../services/backlog.service';
import { AuthService } from '../../services/auth.service';
import { PtItem, Task, NewTask } from '../../domain/domain';

export class PtItemTasksViewModel extends Observable {
    private _loaded = false;
    private selectedViewIndex = 0;
    public item: PtItem;
    public newTaskTitle: string = '';


    public myLabelText: string;

    public get tasks() {
        return this.item.tasks;
    }


    constructor(private itemId: string, private backlogService: BacklogService) {
        super();
    }

    public loaded() {
        if (!this._loaded) {
            this.backlogService.getItem(this.itemId)
                .then((i) => {
                    this.set('item', i);
                    console.log('item was set');
                });
        }
        this._loaded
    }


    public toggleTapped(args) {
        var task = args.view.bindingContext;
        var taskTitle = task.title;
        this.backlogService.toggleTask(this.item, task);
    }


    public addTapped(newTaskTV: TextView) {
        let newTitle = this.newTaskTitle.trim();
        if (newTitle.length === 0)
            return;
        let newTask: NewTask = {
            title: newTitle,
            completed: false
        };
        this.backlogService.addTask(this.item, newTask);
        this.newTaskTitle = '';
        newTaskTV.dismissSoftInput();
    }

    public mathCeil(num: number) {
        return Math.ceil(num);
    }

    public get newTaskHeight() {
        return 50;
    }
    public taskHeight(args) {
        var task = args.view.bindingContext;
        var taskTitle = task.title;
        let lineHeight = isIOS ? 20 : 30;
        let numlines = Math.ceil(taskTitle.length / 25);
        return ((numlines < 2 ? 2 : numlines) * lineHeight) + 10;
    }

    public taskTitleChange(task: Task, args: string) {
        this.backlogService.updateTask(this.item, task, args);
    }
}

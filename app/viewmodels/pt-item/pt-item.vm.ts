//nativescript imports
import { Observable } from 'data/observable';
import { SegmentedBar, SegmentedBarItem } from 'ui/segmented-bar';
import { confirm, action, ActionOptions, ConfirmOptions } from 'ui/dialogs';
import * as frameModule from 'ui/frame';


//app imports
import { ItemTypeEnum } from '../../domain/static-data';
import { PtItem } from '../../domain/domain';
import { BacklogService } from "../../services/backlog.service";

export class PtItemViewModel extends Observable {

    private _loaded = false;

    private _itemDetailScreens = [
        { title: 'Details', routePath: 'pt-item-details' },
        { title: 'Tasks', routePath: 'pt-item-tasks' },
        { title: 'Chitchat', routePath: 'pt-item-chitchat' }
    ];
    public myNavItems: Array<SegmentedBarItem> = [];
    private _selectedItemDetailScreenIndex: number = 0;
    public item: PtItem;

    public get itemTitle() {
        return this.item ? this.item.title : '';
    }

    public set selectedItemDetailScreenIndex(val) {
        this._selectedItemDetailScreenIndex = val;
    }
    public get selectedItemDetailScreenIndex() {
        return this._selectedItemDetailScreenIndex;
    }


    constructor(private itemId: string, private backlogService: BacklogService) {
        super();

        for (let i = 0; i < this._itemDetailScreens.length; i++) {
            let tmpSegmentedBarItem: SegmentedBarItem = <SegmentedBarItem>new SegmentedBarItem();
            tmpSegmentedBarItem.title = this._itemDetailScreens[i].title;
            this.myNavItems.push(tmpSegmentedBarItem);
        }
    }

    public loaded() {
        if (!this._loaded) {
            this.backlogService.getItem(this.itemId)
                .then((i) => {
                    this.set('item', i);
                    console.log('item was set');
                });
        }
        this._loaded = true;
    }

    public onNavBackTap() {
        frameModule.topmost().goBack();
    }

    public onDelete() {
        //TODO 
    }

    public selectedItemDetailScreenIndexChanged(segBar: SegmentedBar) {

        let newIndex = segBar.selectedIndex;
        if (this._selectedItemDetailScreenIndex !== newIndex && newIndex >= 0 && newIndex < this._itemDetailScreens.length) {
            this._selectedItemDetailScreenIndex = newIndex;
            let path = this._itemDetailScreens[this._selectedItemDetailScreenIndex].routePath;
            // Navigate with relative link
            //this.routerExtensions.navigate([path], { relativeTo: this.route });
        }


    }
}
//nativescript imports
import { Observable } from 'data/observable';
import * as frameModule from 'ui/frame';
import { ItemEventData, ListView } from 'ui/list-view';
import { Page } from 'ui/page';

//app imports
import * as providers from '../../shared/providers';
import * as nav from '../../shared/navigation';
import { BacklogService } from "../../services/backlog.service";
import { AuthService } from "../../services/auth.service";
import { ItemTypeEnum, PriorityEnum, StatusEnum } from '../../domain/static-data';
import { PtItem } from '../../domain/domain';

export class PtItemListViewModel extends Observable {

    public name = 'alex';

    public get ptItems() {
        return this.backlogService.items;
    }

    constructor(
        private backlogService: BacklogService,
        private authService: AuthService
    ) {
        super();

    }

    public nameBtnTap() {
        alert('nameBtnTap tapped');
    }

    public listItemTap(args) {
        let lv = <ListView>args.object;
        let item = <PtItem>lv.items[args.index];
        frameModule.topmost().navigate({
            context: item.id,
            moduleName: nav.getPtListItemPage()
        });
    }

}
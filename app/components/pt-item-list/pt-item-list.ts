import { PtItemListViewModel } from "../../viewmodels/pt-item-list/pt-item-list.vm";
import * as providers from '../../shared/providers';


var ptItemListVm = new PtItemListViewModel(
    providers.getBacklogService(),
    providers.getAuthService()
);

export function onLoaded(args) {
    console.log('pt-item-list loaded');
    var container = args.object;

    container.bindingContext = ptItemListVm;
}
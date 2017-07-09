//nativescript imports
import * as frameModule from 'ui/frame';

//app imports
import { PtItemViewModel } from "../../viewmodels/pt-item/pt-item.vm";
import * as providers from '../../shared/providers';

var ptItemVm: PtItemViewModel;

export function navigatingTo(args) {
    var page = args.object;
    var itemId = args.context;

    ptItemVm = new PtItemViewModel(itemId, providers.getBacklogService());
    if (!page.bindingContext) {
        page.bindingContext = ptItemVm;
    }
}

export function onLoaded(args) {
    ptItemVm.loaded();
}
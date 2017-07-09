import { PtItemTasksViewModel } from "../../viewmodels/pt-item/pt-item-tasks.vm";
import * as providers from '../../shared/providers';

export function onLoaded(args) {
    console.log('pt-item-tasks loaded');
    var container = args.object;

    const ptItemTasksVm = new PtItemTasksViewModel(
        container.itemId,
        providers.getBacklogService()
    );

    container.bindingContext = ptItemTasksVm;
    ptItemTasksVm.loaded();
}
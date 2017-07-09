import { PtBacklogViewModel } from "../../viewmodels/pt-backlog/pt-backlog.vm";

let ptBacklogVm = new PtBacklogViewModel();
export function navigatingTo(args) {
    var page = args.object;
    //May want to take advantage of navigatingTo early event in the VM, so setting binding context early.
    if (!page.bindingContext) {
        page.bindingContext = ptBacklogVm;
    }
}

export function onLoaded(args) {
    //Also want to make sure everything is loaded before VM starts retrieving views by id, so hence using the loaded handler as well
    ptBacklogVm.loaded();
}
import { PtLoginViewModel } from "../../viewmodels/pt-login/pt-login.vm";

var ptLoginVm = new PtLoginViewModel();

export function navigatingTo(args) {
    var page = args.object;
    console.log('navigating to login');

    page.bindingContext = ptLoginVm;
}

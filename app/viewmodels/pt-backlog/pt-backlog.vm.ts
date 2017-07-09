import { Observable } from 'data/observable';
import * as frameModule from 'ui/frame';
import { RadSideDrawer, DrawerTransitionBase, SlideInOnTopTransition, SideDrawerLocation } from "nativescript-telerik-ui/sidedrawer";

export class PtBacklogViewModel extends Observable {

    private _loaded = false;
    private _sideDrawerTransition: DrawerTransitionBase = new SlideInOnTopTransition();
    private _drawer: RadSideDrawer;
    public isLoading: boolean = false;

    constructor() {
        super();
    }

    public loaded() {
        if (!this._loaded) {
            this._drawer = <RadSideDrawer>(frameModule.topmost().getViewById("drawer"));
            this._drawer.drawerLocation = SideDrawerLocation.Right;
            this._loaded = true;
        }
    }

    public showSlideout() {
        console.log('show slideout');
        this._drawer.showDrawer();
    }

    public showAddItemModal() {
        alert('add item modal');
    }

}
import {MDCList} from '@material/list';
import {MDCRipple} from '@material/ripple';
import {MDCTopAppBar} from "@material/top-app-bar";

new MDCList(document.querySelector('.mdc-list'));

const topAppBar = MDCTopAppBar.attachTo(document.getElementById('app-bar'));
topAppBar.setScrollTarget(document.getElementById('main-content'));
topAppBar.listen('MDCTopAppBar:nav', () => {
  drawer.open = !drawer.open;
});
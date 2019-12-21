import {MDCRipple} from '@material/ripple';
import {MDCTextField} from '@material/textfield';
import {getCorrectEventName} from '@material/animation';

const username = new MDCTextField(document.querySelector('.username'));
const password = new MDCTextField(document.querySelector('.password'));
const eventToListenFor = getCorrectEventName(window, 'animationstart');

new MDCRipple(document.querySelector('.cancel'));
new MDCRipple(document.querySelector('.next'));

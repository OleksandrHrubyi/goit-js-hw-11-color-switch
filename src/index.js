import './styles.css';
import { onChange, onStop } from './js/functions';
import { butOn, butOff } from './js/ref';


butOn.addEventListener('click', onChange);
butOff.addEventListener('click', onStop);












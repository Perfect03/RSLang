import './components/header/index';
import './components/index/index';
import './components/footer/index';
import './components/popup/index';
import './components/upButton/index';
import { checkCookie } from './api/authorization/cookie';

checkCookie('userId', 'token');

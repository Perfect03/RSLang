import './components/header/index';
import './components/index/index';
import './components/footer/index';
import './components/popup/index';
import './components/upButton/index';
import { createUser } from './api/authorization/signin';
const user1 = { name: 'Pavel', email: 'Perfect@mail.ru', password: '12345Qwe' };
createUser(user1);

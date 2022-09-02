import { loginUser } from '../../api/authorization/login';
import { loginFunction } from './login';

const user = loginFunction();
loginUser(user);

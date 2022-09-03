import { createUser } from '../../api/authorization/signin';
import { signFunction } from '../../components/popup/signup';

const user = signFunction();
createUser(user);

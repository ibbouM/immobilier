import { Subject } from "rxjs";

const subject = new Subject();

const loginService = {
  setLogin: (login) => subject.next(login),
  getLogin: () => subject.asObservable(),
};

export default loginService;

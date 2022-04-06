import { combine, createDomain, sample } from 'effector';

const model = createDomain();

export const reset = model.event();

model.onCreateStore((s) => s.reset(reset));

export const $login = model.store('');
export const loginUpdated = model.event<string>();

$login.on(loginUpdated, (_, newLogin) => newLogin);

export const $password = model.store('');
export const passwordUpdated = model.event<string>();

$password.on(passwordUpdated, (_, password) => password);

export const formSubmited = model.event<void>();

interface Form {
  login: string;
  password: string;
}

const loginFx = model.effect<Form, { token: string }>(
  (form) => new Promise((r) => setTimeout(r, 500, form.login + form.password)),
);

const validateFormFx = model.effect<Form, boolean>((form) => Object.values(form).every(Boolean));

const $form = combine($login, $password, (login, password) => ({ login, password }));

sample({
  clock: formSubmited,
  source: $form,
  target: validateFormFx,
});

sample({
  clock: validateFormFx.doneData,
  source: $form,
  filter: Boolean,
  target: loginFx,
});

import { reflect, variant } from '@effector/reflect';
import { createEffect, createStore, sample } from 'effector';
import { useEvent } from 'effector-react';
import { ChangeEvent } from 'react';

import { $login, $password, formSubmited, loginUpdated, passwordUpdated } from './model';

const Input = (props: {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) => <input {...props} />;

const Login = reflect({
  view: Input,
  bind: {
    value: $login,
    onChange: loginUpdated.prepend((e) => e.target.value),
  },
});

const Password = reflect({
  view: Input,
  bind: {
    value: $password,
    onChange: passwordUpdated.prepend((e) => e.target.value),
  },
});

const RenderVariant = variant({
  source: createStore<'1' | '2'>('1', {
    sid: '321',
    updateFilter: ()
  }),
  cases: {
    '1': () => <div>1</div>,
    '2': () => <div>2</div>,
  },
});

const LoginPage = () => {
  const handleFormSubmit = useEvent(formSubmited.prepend((e) => e.preventDefault()));
  const login = useStore($login);
};


const fx1 = createEffect();
const fx2 = createEffect();

sample({
  clock: fx1.done,
  filter: () => false,
  fn: (r) => r.
  target: fx2
})

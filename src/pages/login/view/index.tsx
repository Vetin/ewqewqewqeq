import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { loginTh, LOGIN_FDS } from '../model';

export const LoginPage = () => {
  const { register, handleSubmit, setError, trigger } = useForm({
    defaultValues: LOGIN_FDS,
    mode: 'onBlur',
  });

  const errors = useSelector((state) => state.login.errors) as any;
  const pending = useSelector((state) => state.login.pending) as boolean;
  const dispatch = useDispatch();

  const handleFormSubmit = handleSubmit((data) => dispatch(loginTh(data)));

  useEffect(() => {
    if (!errors) return;
    for (const [key, value] of Object.entries(errors))
      setError(key as keyof typeof LOGIN_FDS, value);
  }, [errors]);

  usePageLifecycle(loginModel);

  return (
    <div>
      <h1>Login page</h1>
      <form onSubmit={handleFormSubmit}>
        <Input {...register('email')} />
        <Input {...register('password')} />
        <div>
          <button disabled={pending}>Send</button>
        </div>
      </form>
    </div>
  );
};

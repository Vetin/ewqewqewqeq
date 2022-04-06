import {
  Domain,
  Event,
  createDomain,
  createEvent,
  createStore,
  restore,
  sample,
  scopeBind,
} from 'effector';

interface IntervalPayload {
  duration: number;
  reset?: Event<void>;
  clock: Event<void>;
  domain?: Domain;
}

export const interval = (payload: IntervalPayload) => {
  const { clock, duration, domain, reset } = payload;

  const h = domain || createDomain('');

  const tick = h.event();

  const startIntervalFx = h.effect(
    () =>
      setInterval(() => {
        let boundTick = tick;
        try {
          // @ts-expect-error same type
          boundTick = scopeBind(tick);
          // eslint-disable-next-line no-empty
        } catch (error) {}
        boundTick();
      }, duration) as unknown as number,
  );
  const $id = restore(startIntervalFx, -1);

  sample({ clock, target: startIntervalFx });

  const stopIntervalFx = h.effect((id: number) => clearInterval(id));

  $id.reset(stopIntervalFx);

  if (reset)
    sample({
      clock: reset,
      source: $id,
      filter: (s) => s !== -1,
      target: stopIntervalFx,
    });

  return tick;
};

const startInterval = createEvent();

const trigger = interval({
  clock: startInterval,
  duration: 500,
});

const $val = createStore(0).on(trigger, (v) => v + 1);
$val.watch(console.log);

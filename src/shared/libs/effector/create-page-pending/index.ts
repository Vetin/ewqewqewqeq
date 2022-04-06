import { Event, createStore, sample } from 'effector';

interface Config {
  triggers: Array<Event<any>>;
  defaultState?: boolean;
  reset?: Event<any>;
}

export const createPending = ({ triggers, defaultState, reset }: Config) => {
  const defaultResultsState = Array(triggers.length).fill(false);

  const $results = createStore<boolean[]>(defaultResultsState);

  const $allIsDone = $results.map((results) => results.every(Boolean));

  for (const [idx, trigger] of triggers.entries()) {
    sample({
      clock: trigger,
      source: $results,
      fn: (results) => {
        const clone = [...results];
        clone[idx] = true;
        return clone;
      },
      target: $results,
    });
  }

  const $pending = createStore(defaultState);

  const allTriggersExecuted = sample({
    clock: $allIsDone,
    source: $pending,
    filter: Boolean,
  });

  sample({
    clock: allTriggersExecuted,
    source: $pending,
    fn: (pending) => !pending,
    target: $pending,
  });

  sample({
    clock: allTriggersExecuted,
    fn: () => [...defaultResultsState],
    target: $results,
  });

  if (reset) {
    $results.reset(reset);
    $pending.reset(reset);
  }

  return $pending;
};

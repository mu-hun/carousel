import { useReducer as useReducerOrigin } from 'react';

type State = {
  currentIndex: number;
  isPlaying: boolean;
  takeFocus: boolean;
};

type Reducer = (
  state: State,
  action: { type: string; payload?: number }
) => State;

const [PROGRESS, NEXT, PREV, PLAY, PAUSE, GOTO] = [
  'PROGRESS',
  'NEXT',
  'PREV',
  'PLAY',
  'PAUSE',
  'GOTO'
] as const;

export default function useReducer(slidesLength: number) {
  const [state, dispatch] = useReducerOrigin<Reducer>(
    (state, action) => {
      switch (action.type) {
        case PROGRESS:
        case NEXT:
          return {
            ...state,
            takeFocus: false,
            isPlaying: action.type === PROGRESS,
            currentIndex: (state.currentIndex + 1) % slidesLength
          };
        case PREV:
          return {
            ...state,
            takeFocus: false,
            isPlaying: false,
            currentIndex: (state.currentIndex - 1 + slidesLength) % slidesLength
          };
        case PLAY:
          return {
            ...state,
            takeFocus: false,
            isPlaying: true
          };
        case PAUSE:
          return {
            ...state,
            takeFocus: false,
            isPlaying: false
          };
        case GOTO:
          return {
            ...state,
            takeFocus: true,
            currentIndex: action.payload!
          };
        default:
          return state;
      }
    },
    {
      currentIndex: 0,
      isPlaying: false,
      takeFocus: false
    }
  );

  const onProgress = () => dispatch({ type: PROGRESS });
  const onNext = () => dispatch({ type: NEXT });
  const onPrev = () => dispatch({ type: PREV });
  const onPlay = () => dispatch({ type: PLAY });
  const onPause = () => dispatch({ type: PAUSE });
  const onGOTO = (index: number) => dispatch({ type: GOTO });

  return {
    state,
    onProgress,
    onNext,
    onPrev,
    onPlay,
    onPause,
    onGOTO
  };
}

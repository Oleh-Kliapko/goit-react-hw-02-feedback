import { Notify } from 'notiflix';

export const Notification = () =>
  Notify.info('There is no feedback', {
    timeout: 2000,
    fontSize: '22px',
    position: 'center-center',
    cssAnimationStyle: 'zoom',
  });

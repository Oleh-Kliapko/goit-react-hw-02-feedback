import { Notify } from 'notiflix';

export const Notification = () =>
  Notify.info('There is no feedback', {
    timeout: 2000,
    fontSize: '16px',
    position: 'center-center',
  });

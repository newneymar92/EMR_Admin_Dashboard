import { TYPE_STORE } from '@common/constant';

const checkKeyTab = (keyTab) => {
  switch (keyTab) {
    case '1':
      return TYPE_STORE.BICYCLE;
    case '2':
      return TYPE_STORE.AVATAR;
    case '3':
      return TYPE_STORE.ITEM;

    default:
      return null;
  }
};

export default checkKeyTab;

import dayjs from 'dayjs';

export const validateSpace = () => {};
export const validateTypeCharacter = (regex, t, mes) => ({
  validator(_, value) {
    if (!regex.test(value?.trim()) && value?.trim().length > 1) {
      return Promise.reject(new Error(mes));
    }
    return Promise.resolve();
  },
});

export const validateMaxCharacter = (numberMax, t) => {
  return {
    validator(_, value) {
      if (value?.trim().length > numberMax) {
        return Promise.reject(
          new Error(t('validate.maxCharacter', { number: numberMax })),
        );
      }
      return Promise.resolve();
    },
  };
};

export const validateEmail = (t, isRequried = true) => ({
  validator(_, value) {
    if (value?.trim().length <= 0 && isRequried) {
      return Promise.reject(
        new Error(
          t('validate.notEmpty', {
            fieldName: t('register.email'),
          }),
        ),
      );
    }
    if (
      !/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/g.test(value?.trim()) &&
      value?.trim().length > 0
    ) {
      return Promise.reject(new Error(t('validate.email.incorrect')));
    }
    return Promise.resolve();
  },
});

export const validateMatchField = (getFieldValue, fileName, t) => ({
  validator(_, value) {
    if (!value?.trim() || getFieldValue(fileName)?.trim() === value?.trim()) {
      return Promise.resolve();
    }
    return Promise.reject(new Error(t('validate.email.notMatch')));
  },
});

export const validatePassword = (t, mes) => ({
  validator(_, value) {
    if (value?.trim() === undefined || value?.trim() === '') {
      return Promise.reject(
        new Error(
          mes
            ? t('validate.password.requiredNew')
            : t('validate.password.required'),
        ),
      );
    }
    if (
      value?.trim() !== undefined &&
      /^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/g.test(value?.trim())
    ) {
      return Promise.reject(new Error(t('validate.password.incorrect')));
    }
    return Promise.resolve();
  },
});

export const validateDateInprogress = (startDate, endDate, isTrue = 0) => {
  let result = false;
  if (endDate > isTrue && startDate > isTrue) {
    result = true;
  } else if (endDate < isTrue) {
    result = true;
  } else {
    result = false;
  }

  return result;
};

export const validateEdit = (
  startDate,
  endDate,
  t,
  mesEnd,
  mesInProgress,
  isTrue = 0,
) => {
  let result = {
    isDone: false,
    mes: '',
  };
  if (endDate > isTrue && startDate > isTrue) {
    result = {
      isDone: true,
      mes: '',
    };
  } else if (endDate < isTrue) {
    result = {
      isDone: false,
      mes: mesEnd,
    };
  } else {
    result = {
      isDone: false,
      mes: mesInProgress,
    };
  }

  return result;
};

export const checkDisplayStatus = (
  startDate,
  endDate,
  mesNotStart,
  mesInProgress,
  mesEnd,
  isTrue = 0,
) => {
  if (startDate > isTrue) {
    return mesNotStart;
  }
  if (startDate <= isTrue && isTrue < endDate) {
    return mesInProgress;
  }
  if (endDate < isTrue) {
    return mesEnd;
  }
  return null;
};

export const checkDisplayStatusCourse = (type, startDate, endDate, t) => {
  switch (type) {
    case 0:
      return checkDisplayStatus(
        dayjs(startDate).diff(Date.now()),
        dayjs(endDate).diff(Date.now()),
        t('notifycation.freeride.edit.freerideInpogressErr'),
        t('notifycation.freeride.edit.freerideInpogressErr'),
        t('notifycation.freeride.edit.freerideEndErr'),
      );
    case 1:
      return checkDisplayStatus(
        dayjs(startDate).diff(Date.now()),
        dayjs(endDate).diff(Date.now()),
        t('event.msg.eventInprogress'),
        t('event.msg.eventInprogress'),
        t('event.msg.eventClosed'),
      );
    case 2:
      return checkDisplayStatus(
        dayjs(startDate).diff(Date.now()),
        dayjs(endDate).diff(Date.now()),
        t('notifycation.races.edit.raceInpogressErr'),
        t('notifycation.races.edit.raceInpogressErr'),
        t('notifycation.races.edit.raceEndErr'),
      );
    case 3:
      return checkDisplayStatus(
        dayjs(startDate).diff(Date.now()),
        dayjs(endDate).diff(Date.now()),
        t('notifycation.training.edit.trainingInpogressErr'),
        t('notifycation.training.edit.trainingInpogressErr'),
        t('notifycation.training.edit.trainingEndErr'),
      );

    default:
      return null;
  }
};

export const checkNotiDeleteCourse = (type, t) => {
  switch (type) {
    case 0:
      return t('notifycation.freeride.delete.freerideInpogressErr');
    case 1:
      return t('notifycation.races.delete.eventInprogress');
    case 2:
      return t('notifycation.races.delete.raceInpogressErr');
    case 3:
      return t('notifycation.training.delete.trainingInpogressErr');
    default:
      return null;
  }
};

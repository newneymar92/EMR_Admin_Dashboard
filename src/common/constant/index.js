export const TYPE_FIELD = {
  SPAN: 'span',
  INPUT: 'input',
  INPUT_TAG: 'input_tag',
  INPUT_NUMBER: 'input_number',
  UPLOAD: 'upload',
  SELECT_POINT: 'select_point',
  TEXT_AREA: 'textarea',
  SELECT: 'select',
  DATE_PICKER: 'date_picker',
  DATE_TIME_PICKER: 'date_time_picker',
  SELECT_IMAGE: 'select_image',
};

export const STATUS_CODE = {
  ERROR_413: 'Request failed with status code 413',
  ERROR_416: 'Request failed with status code 416',
};

export const TYPE_COMPLETE_COURSE = [
  { value: 1, label: '最大パワー' },
  { value: 2, label: '最大速度' },
  { value: 3, label: '走行した距離' },
];

export const TYPE_CONTENT_COMPLETE_COURSE = [
  { value: '1', label: '10KM走行を達成しました' },
  { value: '2', label: '20KM走行を達成しました' },
  { value: '3', label: '30KM走行を達成しました' },
];

export const TYPE_CHART = {
  LINE: 'line',
  BAR: 'bar',
};

export const TYPE = [
  { key: '1', value: 0, label: 'フリーライドコース' },
  { key: '2', value: 1, label: 'イベントコース' },
  { key: '3', value: 2, label: 'レース ' },
  { key: '4', value: 3, label: 'トレーニングコース' },
];

export const MODE_ITEM_TYPE = [
  { key: '1', value: 0, label: 'アイテムが使えないレース' },
  { key: '2', value: 1, label: 'アイテムが使えるレース' },
];

export const TYPE_COURSE = {
  EVENT: 1,
  RACE: 2,
};

export const TAB_KEY = {
  DAILY: '1',
  EVENT: '2',
  LOGIN: '3',
};

export const TAB_STORE = {
  BICYCLE: 'bicycles',
  AVATAR: 'avatars',
  ITEM: 'items',
};

export const TYPE_MISSION = {
  event: [
    {
      key: 1,
      value: 1,
      label: 'イベント参加回数',
    },
    {
      key: 2,
      value: 2,
      label: 'レース参加回数',
    },
    {
      key: 3,
      value: 3,
      label: '１～３順位達成',
    },
  ],
  daily: [
    {
      key: 1,
      value: 4,
      label: 'トレーニング参加回数',
    },
    {
      key: 2,
      value: 1,
      label: 'フリーライド参加回数',
    },
    {
      key: 3,
      value: 8,
      label: '最大パワー',
    },
    {
      key: 4,
      value: 7,
      label: '最大速度',
    },
  ],
};

export const RULES = ['null', '閲覧者', '編集者'];

export const IS_ADMIN = 1;

export const TYPE_STORE = {
  BICYCLE: 'bicycle',
  AVATAR: 'avatar',
  ITEM: 'item',
};

export const avatarDefault = [
  {
    key: 0,
    value: 0,
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdfhSy2160U0wH7VFNO92HzmYfCA_dk3cpYg&usqp=CAU',
  },
  {
    key: 1,
    value: 1,
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4CRKPij6o2waFROp-89BCE8lEf96jLsndRQ&usqp=CAU',
  },
  {
    key: 2,
    value: 2,
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJCu4AP4JPaFkOfmmeHnU5B1uuWAIg84YvUMKSX1iUS3kdb8ncGRegucK9fmiaKm3gPDA&usqp=CAU',
  },
];

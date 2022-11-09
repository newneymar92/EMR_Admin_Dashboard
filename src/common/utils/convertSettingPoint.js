export const convertSettingPointInput = (settingPoint) => {
  const res = settingPoint?.map((item) => {
    return [
      item.inputIdCompleteCourse,
      item.inputConditionCourse,
      item.inputPointSetting,
      item.selectContentCompleteCourse,
      item.selectTypeCompleteCourse,
    ];
  });
  const final = res?.flat().map((item) => {
    return Number(item);
  });

  return final;
};

export const convertSettingPointOutput = (settingPoint) => {
  const result = [];
  for (let i = 0; i < settingPoint?.length; i += 1) {
    result.push({
      inputIdCompleteCourse: settingPoint[i],
      inputConditionCourse: settingPoint[i + 1],
      inputPointSetting: settingPoint[i + 2],
      selectContentCompleteCourse: settingPoint[i + 3],
      selectTypeCompleteCourse: settingPoint[i + 4],
    });
    i += 4;
  }
  return result;
};

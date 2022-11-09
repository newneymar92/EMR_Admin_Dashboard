import {
  DATE_FORMAT_DISPLAY,
  DATE_TIME_FORMAT_MINUTE,
} from '@common/constant/date';
import { formatDate, formatDateTime } from '@common/utils/dateHelper';
import { Col, ConfigProvider, DatePicker, Form } from 'antd';
import locale from 'antd/lib/locale/ja_JP';
import PropTypes from 'prop-types';
import React from 'react';

const { RangePicker } = DatePicker;

function MyDatePicker({
  name,
  // disabledDate,
  rules,
  typePicker = 'date',
  label,
  isRangePicker,
  isDateTimePicker,
  colWidth,
  showTime = true,
  ...props
}) {
  const { disabledDate } = props;
  return (
    <ConfigProvider locale={locale}>
      <Col xs={colWidth || 24}>
        <Form.Item
          label={label}
          name={name}
          rules={rules}
          validateTrigger="onBlur"
        >
          {isRangePicker ? (
            <RangePicker
              disabledDate={disabledDate}
              format={(value) =>
                isDateTimePicker
                  ? formatDateTime(value, typePicker)
                  : formatDate(value, typePicker)
              }
              showToday={false}
              picker={typePicker}
              {...props}
              showTime={showTime}
            />
          ) : (
            <DatePicker
              disabledDate={disabledDate}
              // format={(value) =>
              //   isDateTimePicker
              //     ? formatDateTime(value, typePicker)
              //     : formatDate(value, typePicker)
              // }
              showToday={false}
              picker={typePicker}
              {...props}
              showTime={showTime}
              format={
                isDateTimePicker ? DATE_TIME_FORMAT_MINUTE : DATE_FORMAT_DISPLAY
              }
            />
          )}
        </Form.Item>
      </Col>
    </ConfigProvider>
  );
}

export default MyDatePicker;

MyDatePicker.propTypes = {
  name: PropTypes.any,
  disabledDate: PropTypes.func,
  rules: PropTypes.array,
  typePicker: PropTypes.string,
  label: PropTypes.string,
  showTime: PropTypes.bool,
  isRangePicker: PropTypes.bool,
  isDateTimePicker: PropTypes.bool,
  colWidth: PropTypes.number,
};

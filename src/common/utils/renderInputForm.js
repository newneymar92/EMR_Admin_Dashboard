import { TYPE_FIELD } from '@common/constant';
import MyDatePicker from '@components/common/MyDatePicker';
import MyTag from '@components/common/MyTag';
import SelectImage from '@components/common/SelectImage';
import InputField from '@components/form/InputField';
import SelectField from '@components/form/SelectField';
import TextAreaField from '@components/form/TextAreaField';
import { Col, Row } from 'antd';
import React from 'react';

const renderInputForm = (dataFormArr) => {
  const listFiled = dataFormArr.map((item, index) => {
    switch (item.type) {
      case TYPE_FIELD.INPUT_TAG: {
        return (
          <div>
            <InputField
              key={index}
              name={item.name}
              label={item.label}
              placeholder={item.placeholder}
              value={item.value ? item.value : ''}
              {...item}
            />
            <Row>
              <Col span={6} />
              <Col span={18} className="form-tag">
                {item.optional && (
                  <MyTag
                    text="必須"
                    className="tag-custom"
                    size="sm"
                    type="required"
                  />
                )}
              </Col>
            </Row>
          </div>
        );
      }
      case TYPE_FIELD.INPUT: {
        return (
          <InputField
            key={index}
            name={item.name}
            label={item.label}
            placeholder={item.placeholder}
            value={item.value ? item.value : ''}
            colWidth={item.colWidth}
            isInputNumber={item.isNumber}
            disabled={item.disabled}
            subNote={item.subNote}
            rules={item.rules}
            max={item.max}
            min={item.min}
            precision={item.precision}
            onKeyPress={item.onKeyPress}
            hideField={item.hideField}
            defaultValue={item.defaultValue}
            {...item}
          />
        );
      }
      case TYPE_FIELD.SELECT: {
        return (
          <SelectField
            key={index}
            name={item.name}
            label={item.label}
            placeholder={item.placeholder}
            colWidth={item.colWidth}
            value={item.value}
            disabled={item.disabled}
            defaultValue={item.defaultValue}
            subNote={item.subNote}
            {...item}
          />
        );
      }
      case TYPE_FIELD.TEXT_AREA: {
        return (
          <TextAreaField
            key={index}
            name={item.name}
            label={item.label}
            placeholder={item.placeholder}
            colWidth={item.colWidth}
            {...item}
          />
        );
      }
      case TYPE_FIELD.DATE_PICKER: {
        return (
          <MyDatePicker
            key={index}
            label={item.label}
            name={item.name}
            colWidth={item.colWidth}
            rules={item.rules}
            {...item}
          />
        );
      }

      case TYPE_FIELD.DATE_TIME_PICKER: {
        return (
          <MyDatePicker
            key={index}
            label={item.label}
            name={item.name}
            isDateTimePicker={item.isDateTimePicker}
            colWidth={item.colWidth}
            {...item}
          />
        );
      }

      case TYPE_FIELD.SELECT_IMAGE: {
        return (
          <SelectImage
            key={index}
            label={item.label}
            name={item.name}
            colWidth={item.colWidth}
            listDataOptions={item.listDataOptions}
            {...item}
          />
        );
      }
      default:
        return null;
    }
  });
  return listFiled;
};
export default renderInputForm;

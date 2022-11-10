import { DeleteFilled } from '@ant-design/icons';
import MyDialog from '@components/common/MyDialog';
import MyTable from '@components/common/MyTable';
import adminUserList from '@dummy/adminUserList';
import { Radio, Row } from 'antd';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function ListCamera() {
  const titleTable = 'List Admin User';
  const [isVisibleDeleteUser, setIsVisibleDeleteUser] = useState({
    isShow: false,
    id: null,
  });
  const [pagination, setPagination] = useState({
    current: 1,
    skip: 0,
    take: 10,
    total: 0,
  });

  const handleRecord = (record) => {
    console.log('record', record);
  };

  const onOpenModal = (id) => {
    document.body.classList.add('salmon');
    setIsVisibleDeleteUser({
      isShow: true,
      id,
    });
  };

  const onCloseModal = () => {
    document.body.classList.remove('salmon');
    setIsVisibleDeleteUser({
      isShow: false,
      id: null,
    });
  };

  const handleTableChange = (newPagination) => {
    setPagination({
      ...pagination,
      current: newPagination.current,
      skip: (newPagination.current - 1) * pagination.take,
      take: newPagination.pageSize,
    });
  };

  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'ID',
    },
    {
      title: 'Name',
      dataIndex: 'nickname',
      key: 'userName',
    },
    {
      title: 'Create At',
      dataIndex: 'createdAt',
      key: 'registrationDate',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      align: 'center',
      render: (_, values) => (
        <Radio.Group>
          <Radio.Button
            onClick={() => onOpenModal(values.id)}
            className="fz-24 delete-btn"
            value="delete"
          >
            <DeleteFilled />
          </Radio.Button>
        </Radio.Group>
      ),
    },
  ];

  return (
    <div className="admin-user-management">
      <Row>
        <MyDialog
          textConfirm="confirm"
          showModal={isVisibleDeleteUser.isShow}
          handleCancel={onCloseModal}
          handleOk={onCloseModal}
          textBtnOk="ok"
          textBtnCancel="cancel"
        />
      </Row>
      <MyTable
        titleTable={titleTable}
        columns={columns}
        data={adminUserList}
        pagination={pagination}
        handleRecord={handleRecord}
        onChangeTable={handleTableChange}
        isHasRedirect
      />
    </div>
  );
}

ListCamera.propTypes = {};

export default ListCamera;

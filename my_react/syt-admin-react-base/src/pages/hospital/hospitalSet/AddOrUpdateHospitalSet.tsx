import { reqAddHospitalSet } from '@/api/hospital/hospitalSet'
import { AddHospitalSetParams } from '@/api/hospital/model/hospitalSet'
import { Button, Card, Form, Input, Space } from 'antd'
import React from 'react'

export default function AddOrUpdateHospitalSet() {
  //声明 finish 函数
  // let finish = async (values: AddHospitalSetParams) => {
  //   //发送 AJAX 请求新增医院设置
  //   await reqAddHospitalSet(values);
  //   //请求成功的操作
  //   alert('添加成功');
  // }
  let finish = async (values: AddHospitalSetParams) => {
    // 发送AJAX请求新增医院设置
    await reqAddHospitalSet(values);
    // 请求层成功的操作
    alert('添加成功');
  }
  return (
    <Card>
      <Form
        name="basic"
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 22 }}
        onFinish={finish}
      >
        <Form.Item
          label="医院名称"
          name="hosname"
          rules={[{ required: true, message: '医院名称不能为空' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="医院编号"
          name="hoscode"
          rules={[{ required: true, message: '医院编号不能为空' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="API基础路径"
          name="apiUrl"
          rules={[{ required: true, message: 'API基础路径不能为空' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="联系人姓名"
          name="contactsName"
          rules={[{ required: true, message: '联系人姓名不能为空' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="联系人手机"
          name="contactsPhone"
          rules={[{ required: true, message: '联系人手机不能为空' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 2, span: 22 }}>
          <Space>
          <Button type="primary" htmlType="submit">
            保存
          </Button>
          <Button>返回</Button>
          </Space>
        </Form.Item>
      </Form>
    </Card>
  )
}

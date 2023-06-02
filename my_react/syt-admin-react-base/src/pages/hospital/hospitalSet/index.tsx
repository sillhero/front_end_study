import { Button, Card, Form, Input, Space } from 'antd'
import { SearchOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import React, {useEffect, useState} from 'react'
import { HospitalSetItem, HospitalSetItems } from '@/api/hospital/model/hospitalSet';
import Table, { ColumnsType } from 'antd/lib/table';
import { reqGetHospitalSet } from '@/api/hospital/hospitalSet';
import { useForm } from 'antd/lib/form/Form';
import { useNavigate } from 'react-router-dom';

export default function HospitalSet() {
  //声明一个状态
  let [hospital, setHospital] = useState<HospitalSetItems>([]);
  //定义表格结构
  let columns:ColumnsType<HospitalSetItem>  = [
    {
      title: '序号',
      render: (a, b, index) => {
        return index + 1;
      }
    },
    {
      title: '医院名称',
      dataIndex: 'hosname'
    },
    {
      title: '医院编号',
      dataIndex: 'hoscode'
    },
    {
      title: 'API基础路径',
      dataIndex: 'apiUrl'
    },
    {
      title: '签名',
      dataIndex: 'signKey'
    },
    {
      title: '联系人姓名',
      dataIndex: 'contactsName'
    },
    {
      title: '联系人手机号',
      dataIndex: 'contactsPhone'
    },
    {
      title: '操作',
      fixed: 'right',
      width: 130,
      render: (a, record) => {
        return <Space>
          <Button type="primary" icon={<EditOutlined />}></Button>
          <Button type='primary' danger icon={<DeleteOutlined />}></Button>
        </Space>
      }
    }
  ]; 
  //声明与分页相关的三个状态
  let [current, setCurrent] = useState<number>(1);
  let [total, setTotal] = useState<number>(0);
  let [pageSize, setPageSize] = useState<number>(5);
  //加载中的状态声明
  let [loading, setLoading] = useState<boolean>(false);
  //定义表单中值的状态
  let [values, setValues] = useState({hosname: undefined, hoscode: undefined});// ??
  //获取 form 对象
  let [form] = useForm();
  //获取 navigate 函数
  let navigate = useNavigate();
  //组件挂载完毕的操作
  useEffect( () => {
    //声明一个 async 函数
    let getHospitalSet = async () => {
      //设置加载状态为 true
      setLoading(true);
      //发送请求
      let result = await reqGetHospitalSet({page: current, limit: pageSize, ...values});
      //更新状态
      setHospital(result.records);
      //更新分页的总数状态
      setTotal(result.total);
      setLoading(false);
    }
    //调用函数
    getHospitalSet();
  }, [current, pageSize, values]);
  
  //声明 finish 函数
  let finish = (fields: any) => {
    //判断
    if(fields.hosname === values.hosname && fields.hoscode === values.hoscode) return;
    setValues(fields);
  }

  //声明 clear 函数
  let clear = () => {
    //清空表单元素中的值
    form.setFieldsValue({hosname: undefined, hoscode: undefined});
    //更新状态
    setValues({hosname: undefined, hoscode: undefined});
  }

  //声明 add 函数
  let add = () => {
    navigate('/syt/hospital/hostpitalSet/add');
  }

  return (
    <Card>
      {/* 表单查询部分 */}
      <Form
        form={form}
        layout={'inline'}
        onFinish={finish}
      >
        <Form.Item name={'hosname'}>
          <Input placeholder="医院名称" />
        </Form.Item>
        <Form.Item name={'hoscode'}>
          <Input placeholder="医院编号" />
        </Form.Item>
        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit" icon={<SearchOutlined />} >查询</Button>
            <Button onClick={clear}>清空</Button>
          </Space>
        </Form.Item>
      </Form>
      {/* 两个按钮 */}
      <Space style={{ paddingTop: 20 }}>
        <Button type='primary' onClick={add}>添加</Button>
        <Button>批量删除</Button>
      </Space>
      <div className="h-20"></div>
      {/* 表格部分 */}
      <Table 
        loading={loading}
        columns={columns} 
        dataSource={hospital}
        bordered
        rowKey={'id'}
        scroll={{x: 1300}}
        pagination={{
          current: current,
          total: total,
          pageSize: pageSize,
          showSizeChanger: true,
          pageSizeOptions: [1,2,5,10],
          onChange: (page, pageSize) => {
            //更新页码状态
            setCurrent(page);
            //更新每页显示数据的状态
            setPageSize(pageSize);
          }
        }}
        />
    </Card>
  )
}

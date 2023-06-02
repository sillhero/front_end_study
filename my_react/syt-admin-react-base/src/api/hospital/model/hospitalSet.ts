//医院设置单条数据的结构
export interface HospitalSetItem {
  id: number;
  createTime: string;
  updateTime: string;
  isDeleted: number;
  param: object;
  hosname: string;
  hoscode: string;
  apiUrl: string;
  signKey: string;
  contactsName: string;
  contactsPhone: string;
  status: number;
}

//定义复数的类型
export type HospitalSetItems = HospitalSetItem[];

//获取医院设置列表参数结构
export interface GetHostpitalSetParams {
  page: number;
  limit: number;
  hosname?: string;
  hoscode?: string;
}

//医院设置列表响应结果的结构
export interface GetHostpitalSetResponse {
  //医院设置列表的数据
  records: HospitalSetItems;
  total: number;
  size: number;
  current: number;
  orders: [];
  hitCount: boolean;
  searchCount: boolean;
  pages: number;
}

//请求新增医院设置的参数结构
export interface AddHospitalSetParams {
  apiUrl: string;
  contactsName: string;
  contactsPhone: string;
  hoscode: string;
  hosname: string;
}

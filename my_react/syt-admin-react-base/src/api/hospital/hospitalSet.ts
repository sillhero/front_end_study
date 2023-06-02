import { request } from "@/utils/http";
import { AddHospitalSetParams, GetHostpitalSetParams, GetHostpitalSetResponse } from "./model/hospitalSet";

//封装函数发送请求获取医院设置的列表数据
export function reqGetHospitalSet({limit, page, hosname, hoscode}: GetHostpitalSetParams){
  //发送 AJAX 请求
  return request.get<any, GetHostpitalSetResponse>(`/admin/hosp/hospitalSet/${page}/${limit}`, {
    // ?a=100&b=200
    params: {
      hosname: hosname,
      hoscode: hoscode
    }
  });
}

//封装函数新增医院设置
export function reqAddHospitalSet(params: AddHospitalSetParams) {
  return request.post("/admin/hosp/hospitalSet/save", params);
}
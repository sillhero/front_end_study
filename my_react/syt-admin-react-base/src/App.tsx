import { ConfigProvider } from "antd";
import zhCN from "antd/lib/locale/zh_CN";
import enUS from "antd/lib/locale/en_US";

import { useAppSelector } from "@/app/hooks";
import { selectLang } from "@/app/appSlice";

import { useAppRoutes } from "./routes";

function App() {
  // redux
  const lang = useAppSelector(selectLang);
  /**
   * /home
   * 
   * useRoutes([{path: '/home', lement: <Home />}])
   * <BrowserRouter>
   * <Route path='/home' element={<Home />}>   React.createElement(Home);
   * <Route path='/about' element={<About />}>
   * </BrowserRouter>
   * <Button>xxx</Button>
   * 
   */
  // antd组件国际化
  return <ConfigProvider locale={lang === "zh_CN" ? zhCN : enUS}>
    {useAppRoutes()}
  </ConfigProvider>;
}

export default App;

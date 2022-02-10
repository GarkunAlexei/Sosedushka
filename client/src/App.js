import './App.less';
import HeaderNav from "./components/HeaderNav/HeaderNav";
import { Layout } from 'antd';
import FooterS from "./components/FooterS/FooterS";
import ContentS from "./components/ContentS/ContentS";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { checkUser } from "./redux/actions/userAC";
import { getAllAd } from "./redux/actions/adAC";

function App() {
  
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(checkUser())
    dispatch(getAllAd())
    // dispatch(getInterest())
  }, [])

  return (
    <Layout className={`layout layout_s`}>
      <HeaderNav />
      <ContentS />
      <FooterS/>
    </Layout>

  );
}

export default App;

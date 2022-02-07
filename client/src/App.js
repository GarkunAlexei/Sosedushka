
import HeaderNav from "./components/HeaderNav/HeaderNav";
import { Layout } from 'antd';
import FooterS from "./components/FooterS/FooterS";
import ContentS from "./components/ContentS/ContentS";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkUser } from "./redux/actions/userAC";
import { getInterest } from "./redux/actions/interestAC";

function App() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(checkUser())
    // dispatch(getInterest())
  }, [])

  return (
    <Layout className="layout">
      <HeaderNav />
      <ContentS />
      <FooterS/>
    </Layout>

  );
}

export default App;

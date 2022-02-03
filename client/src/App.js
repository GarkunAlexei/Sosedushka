import HeaderNav from "./components/HeaderNav/HeaderNav";
import { Layout } from 'antd';
import FooterS from "./components/FooterS/FooterS";
import ContentS from "./components/ContentS/ContentS";

function App() {
  return (
    <Layout className="layout">
      <HeaderNav />
      <ContentS />
      <FooterS/>
    </Layout>
  );
}

export default App;

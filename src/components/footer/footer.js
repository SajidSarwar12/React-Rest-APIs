import Footer from 'rc-footer'
import 'rc-footer/assets/index.css'; // import 'rc-footer/asssets/index.less';

const footer = () => {
    
  return (
    <Footer
    columns={[
      {
        icon: (
          <img src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg" alt="icon" />
        ),
        title: 'My Footer',
        url: 'https://yuque.com',
        description: '知识创作与分享工具',
        openExternal: true,
      },
    ]}
    bottom="Made with ❤️ by AFX"
  />
  );
}
export default footer;

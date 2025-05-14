import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <DefaultFooter
      copyright="2020 归梦工作室技术研发中心出品"
      style={{
        background: '#f4f4f4', // 与主题页面背景保持一致
        position: 'fixed', // 固定在底部
        bottom: 0,
        width: '100%',
        left: 0, // 确保页脚固定在底部且居中
        textAlign: 'center',
        padding: 0,
      }}
      links={[
        {
          key: '归梦工作室',
          title: '归梦工作室',
          href: '#',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />, // 保留 GitHub 链接
          href: '#',
          blankTarget: true,
        },
        {
          key: '以梦为马，科创奇迹',
          title: '以梦为马，科创奇迹',
          href: '#',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;

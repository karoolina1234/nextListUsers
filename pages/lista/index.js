import Form from "@rjsf/antd";
import React, { useEffect, useState } from "react";

import { Avatar, Breadcrumb, Layout, List, Menu, theme } from 'antd';

const { Header, Content, Footer } = Layout;

const Register = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    var arrayLocal = localStorage?.getItem("listaUsuarios");
    var arr = JSON.parse(arrayLocal)
    if (arr && Array.isArray(arr)) {
      setList(arr);
    }
  }, []);


  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const items = [
    {
      label: (
        <a href="/" rel="noopener noreferrer">
          Cadastro de Usuários
        </a>
      ),
      key: 'alipay',
    },
    {
      label: (
        <a href="/lista" rel="noopener noreferrer">
          Lista de Usuários
        </a>
      ),
      key: 'alipay',
    },
  ];

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={items} />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Lista</Breadcrumb.Item>
        </Breadcrumb>
        <Layout style={{ padding: '24px 0', background: colorBgContainer }}>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
           <List>
            {list.map((item)=>(
               <List.Item>
               <List.Item.Meta
                 avatar={<Avatar src={item.avatar} />}
                 title={<a>{item.name}</a>}
                 description={item.email}
               />
             </List.Item>
            ))}
           </List>
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Gerenciamento de usuários</Footer>
    </Layout>
  )
}

export default Register;
import Form from "@rjsf/antd";
import React, { useEffect, useState } from "react";
import validator from '@rjsf/validator-ajv8';

import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';

const schema = {
  type: 'object',
  required: ['email', 'password'],
  properties: {
    avatar: {
      type: 'string',
      format: 'data-url',
      title: 'Avatar',
    },
    name: {
      type: 'string',
      title: 'Nome',
    },
    email: {
      type: 'string',
      title: 'Email',
    },
    password: {
      type: 'string',
      title: 'Senha',
      format: 'password'
    },
    birthdate: {
      type: 'string',
      format: 'date',
      title: 'Data de nascimento',
    },
  }
}

const { Header, Content, Footer } = Layout;

const Register = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    var arrayLocal = localStorage?.getItem("listaUsuarios");
    var arr = JSON.parse(arrayLocal)
    if (arr && Array.isArray(arr)) {
      setList(arr);
    }
    console.log({ arr });
  }, []);

  const onSubmit = ({ formData }) => {
    if (Array.isArray(list)) {
      const updatedList = [...list, formData];
      setList(updatedList);
      localStorage.setItem("listaUsuarios", JSON.stringify(updatedList));
      window.location.reload();
      console.log("Dados do formulário:", formData);
    }
  }

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
          <Breadcrumb.Item>Cadastro</Breadcrumb.Item>
        </Breadcrumb>
        <Layout style={{ padding: '24px 0', background: colorBgContainer }}>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <Form schema={schema} onSubmit={onSubmit} validator={validator}>
              <button type="submit">Cadastrar</button>
            </Form>
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Gerenciamento de usuários</Footer>
    </Layout>
  )
}

export default Register;

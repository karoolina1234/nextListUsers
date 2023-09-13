import React, { useEffect, useState } from "react";
import { Layout, Menu, theme } from 'antd';
import { Form } from "@rjsf/antd";
import validator from '@rjsf/validator-ajv8';
import PinturaImageWidget from "@/components/Avatar";

const schema = {
  type: 'object',
  required: ['email', 'password'],
  properties: {
    avatar: {
      type: 'string',
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
      format: 'password',
    },
    birthdate: {
      type: 'string',
      format: 'date',
      title: 'Data de nascimento',
    },
  }
}

const uiSchema = {
  avatar: {
    'ui:widget': 'pintura', 
  },
};

const widgets = {
  pintura: PinturaImageWidget,
};

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


  
  const onSubmit = ({ formData }) => {
    if (Array.isArray(list)) {
      if(formData){
        const updatedList = [...list, formData];
        setList(updatedList);
        localStorage.setItem("listaUsuarios", JSON.stringify(updatedList));

        window.location.reload();

      }
    
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
      key: 'alipay1',
    },
    {
      label: (
        <a href="/lista" rel="noopener noreferrer">
          Lista de Usuários
        </a>
      ),
      key: 'alipay2',
    },
  ];

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={items} />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Layout style={{ padding: '24px 0', background: colorBgContainer }}>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <Form
              schema={schema}
              onSubmit={onSubmit}
              validator={validator}
              uiSchema={uiSchema}
              widgets={widgets}
              noHtml5Validate={true}
            >
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

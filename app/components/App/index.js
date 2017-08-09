// @flow
import React, { Component } from 'react';
import type { Children } from 'react';
import { Layout } from 'antd';
import PrimaryNav from '../PrimaryNav';
import styles from './style.css';

const { Header, Content, Footer } = Layout;

export default class App extends Component {
  props: {
    children: Children
  };

  render() {
    return (
      <Layout>
        <Header style={{ position: 'fixed', width: '100%' }}>
          <div className={styles.logo} />
          <PrimaryNav />
        </Header>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <div className={styles.contentWrapper}>
            {this.props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          ©2017 WPGraphQL & Digital First Media
        </Footer>
      </Layout>
    );
  }
}

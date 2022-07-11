import { Layout } from 'antd';
import React from 'react';
import Area from "./components/Area";
import Search from "./components/Search";
import Run from "./components/Run";
import Login from "./components/Login";
import List from "./components/List";
const { Content, Footer } = Layout;

class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            msg:'翩若惊鸿',
        }
    }
    callback = (msg) => {
        // setState方法,修改msg的值,值是由child里面传过来的
        this.setState({
            msg: msg,
        });
    }
    render(){
        return (
            <Layout>
                <Content
                    style={{
                        padding: '0 150px',
                        background: '#2F4F4F47',
                    }}
                >
                    <Layout
                        className="site-layout-background"
                        style={{
                            padding: '24px 0',
                        }}
                    >
                        <Content
                            style={{
                                color: "red"
                            }}
                        >
                            网页不需要用电脑接收任何文件，发文件的都是盗号的，认准官方群 936631453
                        </Content>
                        <div style={{
                            marginTop: '20px'
                        }}>
                            选区: <Area callback={this.callback} />
                            <Search /> <Run /> <Login />
                        </div>
                        <List />
                        <div>

                        </div>
                    </Layout>
                </Content>

                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    备注
                </Footer>
            </Layout>
        );
    }
}

export default App;
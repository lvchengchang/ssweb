import { Tabs } from 'antd';
import React from 'react';
const { TabPane } = Tabs;

const onChange = (key) => {
    console.log(key);
};

const List = () => (
    <Tabs defaultActiveKey="1" style={{marginTop: '50px'}} onChange={onChange}>
        <TabPane tab="Tab 1" key="1">
            Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
            Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
            Content of Tab Pane 3
        </TabPane>
    </Tabs>
);

export default List;
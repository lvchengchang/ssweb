import { Select } from 'antd';
import React from 'react';
const { Option } = Select;


class Area extends React.Component {
    state = {
        area:"lucy"
    }
    change = (obj,e) => {
        this.setState({
            area: e.value
        })
        this.props.callback(e.value);
    }
    render(){
        return (
            <React.Fragment>
                    <Select
                        defaultValue="lucy"
                        style={{
                            width: 120,
                        }}
                        onChange={this.change}
                    >
                        <Option value="lucy">Lucy</Option>
                        <Option value="cc">cc</Option>
                    </Select>
            </React.Fragment>
        );
    }
}

export default Area;
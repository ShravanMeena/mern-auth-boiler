import React, { Component } from "react";
import { SmileOutlined } from "@ant-design/icons";
import { Button, Result } from "antd";

import "../style/pages/_landing.css";
import axios from "axios";

export default class Home extends Component {
  render() {
    return (
      <div className='activteContainer'>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}>
          <Result
            icon={<SmileOutlined />}
            title='Great, we have done all the operations!'
            // extra={<Button type='primary'>Next</Button>}
          />
        </div>
      </div>
    );
  }
}

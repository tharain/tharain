import 'src/index.css';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import * as React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from 'src/pages/App';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

import React, { Component } from "react";
import styled from "styled-components";

import Content from "./components/Content";
import Head from "./components/Head";
import Gap from "./components/Gap";
import Row from "./components/Row";
import Switcher from "./components/Switcher";

const El = styled.div`
  width: 100%;
`;

const Header = styled.header`
  width: 100%;
`;

const Line = styled.div`
  height: 6px;
  width: 100%;
  background-image: linear-gradient(-90deg, #9accf1 0%, #619ddf 100%);
`;

class App extends Component {
  render() {
    return (
      <El>
        <Header>
          <Line />
          <Content>
            <Head>Frontend Conf materials</Head>
            <p>
              Signal-Middleware: документация и подробная информация есть в
              отдельном проекте на{" "}
              <a
                target="_blank"
                href="https://github.com/xnimorz/signal-middleware"
              >
                github
              </a>
            </p>
            <p>
              Кэширующий middleware — попробуйте ввести комментарий и обновить
              страницу. Middleware кэширует данные в localstorage. Код доступен
              на{" "}
              <a
                target="_blank"
                href="https://github.com/xnimorz/frontend-conf-materials/blob/master/src/middleware/localstorage.js"
              >
                github
              </a>
            </p>
            <Gap />
          </Content>
        </Header>
        <Content>
          <Switcher />
        </Content>
        <Gap />
      </El>
    );
  }
}

export default App;

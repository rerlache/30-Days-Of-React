import { FiExternalLink } from "react-icons/fi";
import moment from "moment";
import styled from "styled-components";

const Title = styled.h3`
  font-size: 25px;
  font-weight: bold;
  font-transform: lowercase;
`;

const Code = styled.div`
  background-color: black;
  color: whitesmoke;
  padding-left: 5px;
  font-family: Courier New;
`;

export default function ThirdPartyPackages() {
  return (
    <div>
      <div className="thirdpartybox">
        <Title>react-icons</Title>
        <Code>npm install react-icons@latest</Code>
        <a href="https://react-icons.github.io/react-icons" target="_blank">
          <FiExternalLink /> react-icons Site
        </a>
      </div>
      <div className="thirdpartybox">
        <Title>moment</Title>
        <Code>npm install moment@latest</Code>
        <div>
          Moment is a small JavaScript library which gives us different time
          formats.
        </div>
        <p>
          This challenge was started{" "}
          <strong>{moment("2023-03-23").fromNow()}</strong>
        </p>
        <p>
          The challenge will be over in{" "}
          <strong>{moment("2023-04-30").fromNow()}</strong>
        </p>
        <p>
          Today is{" "}
          <strong>{moment(new Date()).format("MMMM DD, YYYY HH:mm")}</strong>
        </p>
      </div>
      <div className="thirdpartybox">
        <Title>styled-components</Title>
        <Code className="code">npm install styled-components@latest</Code>
        <div>
          It uses a tagged template literals to style a component. It removes
          the mapping between components and styles. This means that when you're
          defining your styles, you're actually creating a normal React
          component, that has your styles attached to it.
        </div>
      </div>
      <div className="thirdpartybox">
        <Title>reactstrap</Title>
        <Code>npm install reactstrap@latest</Code>
        <div>
          The reactstrap package allows to use a component with bootstrap.
        </div>
        <a href="https://reactstrap.github.io/" target="_blank">
          <FiExternalLink /> reactstrap Site
        </a>
      </div>
      <div className="thirdpartybox">
        <Title>simple-react-validator</Title>
        <Code>npm install simple-react-validator@latest</Code>
        <div>
          <p>
            Simple React Validator is exactly as it sounds. We wanted to build a
            validator for react that had minimal configuration and felt natural
            to use. It's configuration and usage is similar to the Laravel PHP
            framework and make validation as easy as one line.
          </p>
          <p>
            This package is used/tested in the <strong>FormComponent.js</strong>
          </p>
        </div>
        <a href="https://www.npmjs.com/package/simple-react-validator" target="_blank" >
          <FiExternalLink /> validator Site
        </a>
      </div>
    </div>
  );
}

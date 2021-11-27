import styled from "styled-components";
const margins = {
  sm: ".5rem",
  base: "1rem",
  lg: "2rem",
  xl: "3rem",
};

const paddings = {
  sm: ".5rem",
  base: "1rem",
  lg: "2rem",
  xl: "3rem",
};

const fonts = {
  family: {
    base: `'Noto Sans KR', sans-serif`,
    title: `'Merriweather', serif`,
  },
  size: {
    sm: "1.4rem",
    base: "1.6rem",
    lg: "2rem",
    xl: "2.5rem",
    title: "6rem",
  },
  weight: {
    light: 100,
    normal: 400,
    bold: 700,
  },
};

const colors = {
  red: "#ff4d4d",
  yellow: "#ffff4d",
  blue: "#0099ff",
};

const size = {
  mobile: "600px",
  tablet: "900px",
  laptop: "1200px",
  desktop: "1800px",
};

// 미디어 쿼리의 중복 코드를 줄이기위해 정의된 변수
const device = {
  mobile: `@media only screen and (max-width: ${size.mobile})`,
  tablet: `@media only screen and (max-width: ${size.tablet})`,
  desktopL: `@media only screen and (max-width: ${size.desktop})`,
};

//테마에 따라 다른 값을 갖는 색상 값
const lightThemeColors = {
  ...colors,
  primary: "#333",
  secondary: "#fff",
  tertiary: "#808080",
};

const darkThemeColors = {
  ...colors,
  primary: "#fff",
  secondary: "#333",
  tertiary: "#d4d0c4",
};

// 테마와 관련없이 공통으로 사용되는 변수
const defalutTheme = {
  margins,
  paddings,
  fonts,
  device,
};

export const darkTheme = {
  ...defalutTheme,
  colors: darkThemeColors,
};

export const lightTheme = {
  ...defalutTheme,
  colors: lightThemeColors,
};

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0f1f3;
  height: 100%;
`;
export const CenterContainer = styled.div`
  width: 480px;
  text-align: center;
  // border: solid black 1px;
  padding: 1vw;
`;
export const Button = styled.button`
  :not(:disabled) {
    opacity: 1;
  }
  background-color: #514f9c;
  color: white;
  width: 50%;
  padding: 0.5vw 1vw;
  opacity: 0.5;
  border: none;
  border-radius: 2vw;
`;

export const PrevButton = styled(Button)`
  width: 30%;
  float: left;
  border: 1px solid #514f9c;
  color: #514f9c;
  visibility: ${(props) => (props.curPage == 0 ? "hidden" : "inherit")};
  background-color: rgba(255, 255, 255, 0);
`;

export const NextButton = styled(Button)`
  width: 30%;
  float: right;
  color: white;
  visibility: ${(props) => (props.curPage == 25 ? "hidden" : "inherit")};
  background-color: #514f9c;
`;

export const ResultButton = styled(Button)`
  margin: 1vh 0 1vh 0;
  color: white;
  background-color: #514f9c;
`;

export const ShareButton = styled(Button)`
  background-color: hotpink;
`;

export const InputName = styled.div`
  color: #514f9c;
  display: inline-flex;
  text-align: center;
  padding-right: 1vw;
`;

export const InputCover = styled.div`
  margin-top: 2vw;
  margin-bottom: 2vw;
`;

export const Msg = styled.p`
  margin-top: 1vh;
  margin-bottom: 1vh;
`;

export const WarningMsg = styled(Msg)`
  color: hotpink;
`;

export const BoldMsg = styled(Msg)`
  font-weight: bold;
`;

export const Label = styled.label`
  margin-left: 0.5vw;
  margin-right: 0.5vw;
`;
export const ClearContainer = styled.div`
  clear: both;
`;

export const BoldText = styled.p`
  font-weight: bold;
`;

export const H2 = styled(BoldText)`
  font-size: xx-large;
`;

export const H3 = styled(BoldText)`
  font-size: x-large;
`;

export const LeftH2 = styled(BoldText)`
  float: left;
`;
export const RightH2 = styled(BoldText)`
  float: right;
`;

export const QuestionContainer = styled.div`
  background: #e3e4fa;
  border: 1px solid rgba(0, 0, 0, 0.3);
  margin: 1vw;
  padding: 1vw;
  text-align: center;
`;
export const QA = styled.div`
  padding-bottom: 1vh;
  font-weight: bold;
`;

export const Description = styled.div`
  color: gray;
`;

export const QuestionCover = styled.p`
  margin-bottom: 1vw;
`;

export const ResultHr = styled.hr`
  border: solid 1px rgba(0, 0, 0, 0.1);
`;

export const CopyTextArea = styled.textarea`
  position: absolute;
  width: 0px;
  height: 0px;
  bottom: 0;
  left: 0;
  opacity: 0;
`;

// export const

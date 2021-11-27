import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f0f1f3;
  height: 100%;
`;
export const CenterContainer = styled.div`
  @media screen and (max-width: 480px) {
    width: 80vw;
    margin-bottom: 0;
    border: none;
    margin-top: 5vh;
  }
  width: 480px;
  text-align: center;
  padding: 1vw;
  margin-top: 13vh;
  margin-bottom: 13vh;
`;

export const BorderCenterContainer = styled(CenterContainer)`
  border: solid 2px rgba(81, 79, 156, 0.3);
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
export const RightDiv = styled.div`
  float: right;
  color: #5e20b0;
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
export const ProgressCover = styled.div`
  margin-bottom: 2vw;
`;
export const InputCover = styled(ProgressCover)`
  margin-top: 2vw;
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

export const MarginContainer = styled.div`
  margin: 1vw;
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

export const PrevDescription = styled(Description)`
  margin-top: 2vh;
  margin-bottom: 2vh;
  padding-left: 1vw;
  padding-right: 1vw;
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

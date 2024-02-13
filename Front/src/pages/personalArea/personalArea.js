import { PersonalAreaHeader } from "../../components/personalAreaHeader/personalAreaHeader";
import { PersonalAreaProgress } from "../../components/personalAreaProgress/personalAreaProgress";
import "./personalArea.css";

export function PersonalArea(props) {
  return (
    <div className={"personal-area__wrapper"}>
      <PersonalAreaHeader/>
      <PersonalAreaProgress/>
    </div>
  );
}

import LanguagePicker from "./Menu/LanguagePicker";
import AddSection from "./Menu/AddSection";
import CardSidePicker from "./Menu/CardSidePicker";

import './Menu.scss';

export default function Menu() {
  return <div className="leftMenu">
    <LanguagePicker/>
    <CardSidePicker/>
    <AddSection/>
  </div>
}
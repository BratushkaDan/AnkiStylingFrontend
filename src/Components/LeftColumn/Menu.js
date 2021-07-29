import LanguagePicker from "./Menu/LanguagePicker";
import AddSection from "./Menu/AddSection";

import './Menu.scss';

export default function Menu() {
  return <div className="leftMenu">
    <LanguagePicker/>
    <AddSection/>
  </div>
}
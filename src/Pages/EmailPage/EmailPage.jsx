import React,{useState} from "react";
import MailLists from "../../Components/MailList/MailList";
import MailContent from "../../Components/Mailcontent/MailContent";
import "./style.css"
import { useSelector } from "react-redux";

const FilterTitles = [
  { id:1, title: "All" },
  { id:2 , title: "Read" },
  { id:3 , title: "Unread"},
  { id:4 , title: "Favourite"},
];
const EmailPage = () => {
    const [activeFilter,setActiveFilter] = useState(1);
    const currentMail = useSelector((state) => state.Mails.currentMail)
  return (
    <div className="layout">
      <div className="FilterContainer">
        <div>Filters :</div>
        <div className="Filters">
          {FilterTitles.map((value) => (
            <button key={value.id} className={ value.id === activeFilter ? "activeFilter" : null } onClick={() => {
                 if(value.id !== activeFilter) {
                     setActiveFilter(value.id);
                 }
            }} >{value.title}</button>
          ))}
        </div>
      </div>
      <div className="Mails_container">
      <MailLists />
      {currentMail !== null ? <MailContent /> : null}
      </div>
    </div>
  );
};

export default EmailPage;

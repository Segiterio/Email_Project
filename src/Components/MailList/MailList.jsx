import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MailList-style.css";
import { setAllMails, setCurrentMail } from "../../Redux/Slices/mailsSlice";
import { dateFormatter } from "../../utils/DateFormatter";

const MailLists = () => {
  const Mails = useSelector((state) => state.Mails.mails);
  const dispatch = useDispatch();
  const [openMail, setOpenMail] = useState(0);
  return (
    <div className="item2">
      {Mails.map((mail) => (
        <div
          key={mail.id}
          className={openMail === mail.id ? "activeMail" : "mail"}
          onClick={async () => {
            if (mail.id !== openMail) {
              try {
                const resMail = await fetch(
                  `https://flipkart-email-mock.now.sh/?id=${mail.id}`
                );
                const data = await resMail.json();
                console.log(data);
                const u = Mails.map((val) => {
                  if (val.id === mail.id && val.read === undefined) {
                     val.read = true;
                  }
                });
                console.log("U",u)
                dispatch(setAllMails(u))
                dispatch(setCurrentMail(data));
              } catch (error) {
                console.log(error, "error in single mail");
              }
              setOpenMail(mail.id);
            }
          }}
        >
          <div className="mailItem">
            <div className="nameStyle">{mail.from.name[0]}</div>
            <div>
              <div>From: {mail.from.email}</div>
              <div>Subject: {mail.subject}</div>
              <div>{mail.short_description}</div>
              <div>
                <div>{dateFormatter(mail.date)}</div>
                <div>{}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MailLists;

import React from "react";
import { useSelector } from "react-redux";

const MailContent = () => {
  const currentMail = useSelector((state) => state.Mails.currentMail);
  return (
    <>
      {currentMail !== null ? (
        <div className="">
        {
          currentMail.body
        }
        </div>
      ) : null}
    </>
  );
};

export default MailContent;

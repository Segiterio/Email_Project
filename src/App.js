import "./App.css";
import { useEffect } from "react";
import Loader from "./Components/Loading/Loader";
import EmailPage from "./Pages/EmailPage/EmailPage";
import { useDispatch, useSelector } from "react-redux";
import { setAllMails, setLoading } from "./Redux/Slices/mailsSlice";

function App() {
  const loading = useSelector((state) => state.Mails.loading);
  const dispatch = useDispatch();
  async function getAllMails() {
    dispatch(setLoading(true));
    try {
      const res = await fetch("https://flipkart-email-mock.now.sh/");
      const data = await res.json();
      dispatch(setAllMails(data.list));
      // console.log(data);
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
      console.log("error on Email fetch", error);
    }
  }
  useEffect(() => {
    getAllMails();
  }, []);

  return <div>{loading ? <Loader /> : <EmailPage />}</div>;
}

export default App;

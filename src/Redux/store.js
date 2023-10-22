import { configureStore } from '@reduxjs/toolkit'
import MailReducer from "./Slices/mailsSlice"

export const store = configureStore({
  reducer: {
    Mails:MailReducer
  },
})
import { createSlice } from "@reduxjs/toolkit";

export const mailsSlice = createSlice({
     name:"Mails",
     initialState: {
         loading:false,
         mails:[],
         currentMail:null,
     },
     reducers: { 
         setAllMails: (state,action) => {
             state.mails = action.payload
         },
         setLoading:(state,action) => {
             state.loading = action.payload
         },
         setCurrentMail: (state,action) => {
             state.currentMail = action.payload;
         }
     }
})

export const {setAllMails,setLoading,setCurrentMail} = mailsSlice.actions;

export default mailsSlice.reducer;
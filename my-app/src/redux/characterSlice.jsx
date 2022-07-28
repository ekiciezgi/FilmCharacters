import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';

export const fetchCharacters=createAsyncThunk('character/getCharacters',async (page) =>{
    const res = await axios(`${process.env.REACT_APP_API_BASE_ENDPOINT}characters?limit=12&offset=page*12`);
return res.data; });

export const characterSlice = createSlice({
    name: 'character',
    initialState: {
        items: [],
        isLoading:false,
        page:0,
    },
    reducers:{},
    extraReducers:{
        [fetchCharacters.pending]:(state,action)=>{
            state.isLoading=true;
        },
        [fetchCharacters.fulfilled]:(state,action)=>{
            state.items=[...state.items,...action.payload];
            state.isLoading=false;
            state.page+=1;
         },
         [fetchCharacters.rejected]:(state,action)=>{
            state.isLoading=false;
            state.error=action.error.message
         }
    },
})
export default  characterSlice.reducer;
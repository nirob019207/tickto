import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FormDataState {
  step1: Partial<FormData>;
  step2: Partial<FormData>;
  step3: Partial<FormData>;
  step4: Partial<FormData>;
  step5: Partial<FormData>;


}
interface FormData {
  completed?: boolean; // Add 'completed' property
  [key: string]: any;  // Allow additional dynamic properties
}
const initialState: FormDataState = {
  step1: {
    


  },
  step2: {
  },
  step3: {},
  step4:{},
  step5:{},
};

export const formSlice = createSlice({
  name: "multiStepForm",
  initialState,
  reducers: {
    saveStep1Data: (state, action: PayloadAction<any>) => {
      state.step1 = { ...action.payload };
    },
    saveStep2Data: (state, action: PayloadAction<any>) => {
      state.step2 = { ...action.payload };
    },
    saveStep3Data: (state, action: PayloadAction<any>) => {
      state.step3 = { ...action.payload};
    },
    saveStep4Data: (state, action: PayloadAction<any>) => {
      state.step4 = { ...action.payload};
    },
    saveStep5Data: (state, action: PayloadAction<any>) => {
      state.step5 = { ...action.payload};
    },
    
    clearFormData: (state) => {
      state.step1 = {};
      state.step2 = {};
      state.step3 = {};
      state.step4 = {};
      state.step5 = {};
    },
  },
});

export const { saveStep1Data, saveStep2Data, saveStep3Data,saveStep4Data,saveStep5Data, clearFormData } =
  formSlice.actions;

export default formSlice.reducer;

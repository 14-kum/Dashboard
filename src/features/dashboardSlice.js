import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  widgets: [],
  loading: false,
};

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    addWidget: (state, action) => {
      state.widgets.push(action.payload);
    },
    removeWidget: (state, action) => {
      state.widgets = state.widgets.filter(widget => widget.id !== action.payload);
    },
  },
});

export const { addWidget, removeWidget } = dashboardSlice.actions;
export default dashboardSlice.reducer;

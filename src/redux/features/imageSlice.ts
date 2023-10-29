import { createSlice } from '@reduxjs/toolkit';
import { isEmpty } from 'lodash';

import { reduxStatus } from '../../constants';
import { IImageSliceState } from '../../types/Image';
import { listSavedImagesThunk, processImageThunk } from '../thunks/imageThunk';

const initialState: IImageSliceState = {
  processedImageBase64: null,
  savedImages: null,
  processImageStatus: null,
  listSavedImagesStatus: null,
  getHelloWorldStatus: null,
};

const imageSlice = createSlice({
  name: 'image',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // processImageThunk
    builder.addCase(processImageThunk.pending, (state) => {
      state.processImageStatus = reduxStatus.pending;
    });
    builder.addCase(processImageThunk.fulfilled, (state, { payload }) => {
      state.processImageStatus = reduxStatus.fulfilled;
      if (!payload) return;
      state.processedImageBase64 = payload;
    });
    builder.addCase(processImageThunk.rejected, (state) => {
      state.processImageStatus = reduxStatus.rejected;
    });

    // listSavedImagesThunk
    builder.addCase(listSavedImagesThunk.pending, (state) => {
      state.listSavedImagesStatus = reduxStatus.pending;
    });
    builder.addCase(listSavedImagesThunk.fulfilled, (state, { payload }) => {
      state.listSavedImagesStatus = reduxStatus.fulfilled;

      if (!payload) return;

      if (isEmpty(payload.savedImages)) return;

      state.savedImages = payload.savedImages;
    });
    builder.addCase(listSavedImagesThunk.rejected, (state) => {
      state.listSavedImagesStatus = reduxStatus.rejected;
    });
  },
});

export default imageSlice.reducer;

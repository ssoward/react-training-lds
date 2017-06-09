import {BOOK_SAVE_INPUT} from "../reducers/book-save-input-reducer";

export const onChangeSaveInputValue = (e) => ({
  type: BOOK_SAVE_INPUT, payload:{inputBookSearchVal:e.target.value}
});

const initialState = {
  thongTinSv: [
    {
      maSv: "1",
      hoTen: "Nguyễn Văn A",
      soDienThoai: "0859336740",
      email: "abc@gmail.com",
    },
  ],
};

export let formReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "THEM_SV": {
      console.log(payload);
      let cloneThongTinSV = [...state.thongTinSv];
      cloneThongTinSV.push(payload);
      state.thongTinSv = cloneThongTinSV;
      return { ...state };
    }
    case "XOA_SINH_VIEN": {
      console.log("maSV", payload);
      let cloneThongTinSV = [...state.thongTinSv];
      let index = cloneThongTinSV.findIndex((item) => item.maSv === payload);
      cloneThongTinSV.splice(index, 1);
      state.thongTinSv = cloneThongTinSV;
      return { ...state };
    }
    default:
      return state;
  }
};

import React, { Component } from "react";
import { connect } from "react-redux";

class TableInfo extends Component {
  renderThongTin = () => {
    return this.props.thongTinSv.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.maSv}</td>
          <td>{item.hoTen}</td>
          <td>{item.soDienThoai}</td>
          <td>{item.email}</td>
          <td>
            <button className='btn btn-info mr-2'>Sửa</button>
            <button
              onClick={() => {
                this.props.handleDelete(item.maSv);
              }}
              className='btn btn-warning'
            >
              Xoá
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div>
        <table class='table'>
          <thead className='bg-dark text-white p-3'>
            <tr>
              <th>Mã SV</th>
              <th>Họ Tên</th>
              <th>Số Điện Thoại</th>
              <th>Email</th>
              <th>Thao Tác</th>
            </tr>
          </thead>
          <tbody>{this.renderThongTin()}</tbody>
        </table>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    thongTinSv: state.formReducer.thongTinSv,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    handleDelete: (maSv) => {
      dispatch({
        type: "XOA_SINH_VIEN",
        payload: maSv,
      });
    },
    handleEdit: (maSv) => {
      dispatch({
        type: "SUA_THONG_TIN",
        payload: maSv,
      });
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TableInfo);

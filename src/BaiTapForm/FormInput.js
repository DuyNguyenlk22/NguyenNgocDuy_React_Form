import React, { Component } from "react";
import { connect } from "react-redux";

class FormInput extends Component {
  state = {
    values: {
      maSv: "",
      hoTen: "",
      soDienThoai: "",
      email: "",
    },
    errors: {
      maSv: "",
      hoTen: "",
      soDienThoai: "",
      email: "",
    },
    valid: false,
  };
  handleChange = (e) => {
    let { value, name, type, pattern } = e.target;
    let errorMessage = "";
    //kiểm tra rỗng
    if (value.trim() === "") {
      // Kiểm tra bất kì control input nào người dùng nhập vào đều kiểm tra rỗng
      errorMessage = name + " Không được để trống";
    }

    //kiểm tra email
    if (type === "email") {
      const re =
        /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
      if (!re.test(value)) {
        errorMessage = name + " Không đúng định dạng";
      }
    }
    //Kiểm tra number
    if (name === "soDienThoai") {
      const regex = new RegExp(pattern);
      if (!regex.test(value)) {
        errorMessage = name + " Không đúng định dạng";
      }
    }
    let values = { ...this.state.values, [name]: value }; //Cập nhật giá trị value cho state
    let errors = { ...this.state.errors, [name]: errorMessage }; //Cập nhật lỗi cho state
    this.setState(
      {
        ...this.state,
        values: values,
        errors: errors,
      },
      () => {
        console.log(this.state);
        this.checkValid();
      },
    );
  };
  handleSubmit = (e) => {
    e.preventDefault(); // cản sự kiện submit load lại trang của browser
    this.props.handleChangeForm(this.state.values);
  };
  checkValid = () => {
    let valid = true;
    for (let key in this.state.errors) {
      if (this.state.errors[key] !== "" && this.state.values[key] === "") {
        valid = false;
      }
    }

    this.setState({
      ...this.state,
      valid: valid,
    });
  };
  render() {
    return (
      <div>
        <div class='card text-left'>
          <div className='bg-dark text-white p-3'>
            <h2>Thông Tin Sinh Viên</h2>
          </div>
          <div class='card-body'>
            <form onSubmit={this.handleSubmit}>
              <div className='row'>
                <div className='col-6'>
                  <div className='form-group'>
                    <label htmlFor>Mã SV</label>
                    <input
                      type='text'
                      className='form-control'
                      name='maSv'
                      value={this.state.values.maSv}
                      onChange={this.handleChange}
                    />
                    <span className='text-danger'>
                      {this.state.errors.maSv}
                    </span>
                  </div>
                </div>
                <div className='col-6'>
                  <div className='form-group'>
                    <label htmlFor>Họ Tên</label>
                    <input
                      type='text'
                      className='form-control'
                      name='hoTen'
                      value={this.state.values.hoTen}
                      onChange={this.handleChange}
                    />
                    <span className='text-danger'>
                      {this.state.errors.hoTen}
                    </span>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-6'>
                  <div className='form-group'>
                    <label htmlFor>Số Điện Thoại</label>
                    <input
                      type='text'
                      pattern='^(0|[1-9][0-9]*)$'
                      className='form-control'
                      name='soDienThoai'
                      value={this.state.values.soDienThoai}
                      onChange={this.handleChange}
                    />
                    <span className='text-danger'>
                      {this.state.errors.soDienThoai}
                    </span>
                  </div>
                </div>
                <div className='col-6'>
                  <div className='form-group'>
                    <label htmlFor>Email</label>
                    <input
                      type='email'
                      className='form-control'
                      name='email'
                      value={this.state.values.email}
                      onChange={this.handleChange}
                    />
                    <span className='text-danger'>
                      {this.state.errors.email}
                    </span>
                  </div>
                </div>
              </div>
              <div className='div'>
                {this.state.valid ? (
                  <button className='btn btn-success' type='submit'>
                    Thêm sinh viên
                  </button>
                ) : (
                  <button className='btn btn-success' type='submit' disabled>
                    Thêm sinh viên
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
let mapDispatchToProps = (dispatch) => {
  return {
    handleChangeForm: (sinhVien) => {
      dispatch({
        type: "THEM_SV",
        payload: sinhVien,
      });
    },
  };
};
export default connect(null, mapDispatchToProps)(FormInput);

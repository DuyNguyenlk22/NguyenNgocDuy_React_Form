import React, { Component } from "react";
import FormInput from "./FormInput";
import TableInfo from "./TableInfo";

export default class BaiTapForm extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row '>
          <div className='col-12'>
            <FormInput />
          </div>
        </div>
        <div className='row mt-4'>
          <div className='col-12'>
            <TableInfo />
          </div>
        </div>
      </div>
    );
  }
}

/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { KTSVG, toAbsoluteUrl } from '../../../helpers'

type Props = {
  className: string
}

const ListTheme: React.FC<Props> = ({ className }) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <div className='d-flex align-items-stretch justify-content-between flex-lg-grow-1'>
          {/* begin::Navbar */}
          <div className='d-flex align-items-stretch flex-shrink-0' >
            <div className='d-flex flex-column flex-grow-1'>
              <div className='d-flex flex-wrap'>
                <div className='rounded min-w-75px py-3 mb-3'>
                  <h3 className='card-title align-items-start flex-column'>
                    <span className='card-label fw-bolder fs-3 mb-1'>فایل ها</span>

                  </h3>
                </div>

                <div className='rounded min-w-75px py-3 mb-3'>
                  <div className='d-flex align-items-center'>
                    <a
                      href='#'
                      className='btn btn-sm btn-flex btn-light btn-primary fw-bolder'
                      data-kt-menu-trigger='click'
                      data-kt-menu-placement='bottom-end'
                      data-kt-menu-flip='top-end'
                    >
                      <KTSVG
                        path='/media/icons/duotune/general/gen031.svg'
                        className='svg-icon-5 svg-icon-gray-500 me-1'
                      />
                      فایل جدید
                    </a>
                  </div>


                </div>

                <div className='rounded min-w-105px py-3 px-4 mb-3'>
                  <div className='searchbarsmall'>
                    <div className='searchbarSvh'>
                      <KTSVG
                        path='/media/icons/duotune/general/gen025.svg'

                      /></div>
                    <input
                      autoFocus
                      type='text'
                      className='form-control bg-transparent border-0 fs-1x  fw-normal'
                      name='query'
                      placeholder='جستجو'
                    />

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='d-flex align-items-stretch' id='kt_header_nav' >

            <div className='d-flex flex-column flex-grow-1 pe-8'>
              <div className='d-flex flex-wrap'>
                <div className='rounded  me-6 '>
                  <div className='d-flex align-items-center'>
                    <select className='form-select form-select-solid'>
                      <option value=''>وضعیت</option>
                      <option value='AF'>نوع اول</option>
                      <option value='AF'>نوع دوم</option>
                    </select>
                  </div>


                </div>

                <div className='rounded me-6'>
                  <div className='d-flex align-items-center'>
                    <select className='form-select form-select-solid form-select-lg fw-bold'>
                      <option value=''>نوع درخواست</option>
                      <option value='AF'>نوع اول</option>
                      <option value='AF'>نوع دوم</option>
                    </select>
                  </div>
                </div>

                <div className='rounded me-6'>
                  <div className='d-flex align-items-center'>
                    <select className='form-select form-select-solid form-select-lg fw-bold'>
                      <option value=''>نوع ملک</option>
                      <option value='AF'>نوع اول</option>
                      <option value='AF'>نوع دوم</option>
                    </select>
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body py-3'>
        {/* begin::Table container */}
        <div className='table-responsive'>
          {/* begin::Table */}
          <table className='table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4'>
            {/* begin::Table head */}
            <thead>
              <tr className='fw-bolder text-muted'>
                <th className='min-w-100px text-end'>عملیات</th>
                <th className='min-w-140px'>وضعیت</th>
                <th className='min-w-130px'>نوع ملک</th>
                <th className='min-w-120px'>تاریخ ثبت</th>
                <th className='min-w-120px'>نوع درخواست</th>
                <th className='min-w-180px'>نام و نام خانوادگی</th>
                <th className='min-w-100px'>کد فایل</th>
                <th className='w-25px'>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input
                      className='form-check-input'
                      type='checkbox'
                      value='1'
                      data-kt-check='true'
                      data-kt-check-target='.widget-9-check'
                    />
                  </div>
                </th>
              </tr>
            </thead>
            {/* end::Table head */}
            {/* begin::Table body */}
            <tbody>
              <tr>
                <td>
                  <div className='d-flex justify-content-end flex-shrink-0'>

                    <a
                      href='detailfiles'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    >
                      <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                    </a>
                    <a
                      href='#'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    >
                      <KTSVG
                        path='/media/icons/duotune/general/gen027.svg'
                        className='svg-icon-3'
                      />
                    </a>
                    <a
                      href='#'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    >
                      <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                    </a>
                    <a
                      href='#'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                    >
                      <KTSVG
                        path='/media/icons/duotune/general/gen027.svg'
                        className='svg-icon-3'
                      />
                    </a>
                  </div>
                </td>
                <td className='text-end'>
                  <span className='badge badge-light-warning'>ورودی</span>
                </td>
                <td className='text-end'>
                  <span className='badge badge-light-warning'>همزمان</span>
                </td>
                <td className='text-end text-muted fw-bold'>
                  <a href='#' className='text-dark'>
                    1402/04/07
                  </a>
                </td>
                <td className='text-end'>
                  <span className='badge badge-light-warning'>فروش</span>
                </td>
                <td>
                  <div className='text-end text-muted fw-bold'>
                    <a href='#' className='text-dark'>
                      محمد محمدی فر قمی نژاد
                    </a>
                  </div>
                </td>
                <td className='text-end text-muted fw-bold'>
                  <a href='#' className='text-dark'>
                    67858GKJ868
                  </a>
                </td>
                <td>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input className='form-check-input widget-9-check' type='checkbox' value='1' />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex justify-content-end flex-shrink-0'>

                    <a
                      href='detailfiles'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    >
                      <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                    </a>
                    <a
                      href='#'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    >
                      <KTSVG
                        path='/media/icons/duotune/general/gen027.svg'
                        className='svg-icon-3'
                      />
                    </a>
                    <a
                      href='#'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    >
                      <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                    </a>
                    <a
                      href='#'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                    >
                      <KTSVG
                        path='/media/icons/duotune/general/gen027.svg'
                        className='svg-icon-3'
                      />
                    </a>
                  </div>
                </td>
                <td className='text-end'>
                  <span className="badge badge-light-success">در حال انجام</span>
                </td>
                <td className='text-end'>
                  <span className='badge badge-light-warning'>همزمان</span>
                </td>
                <td className='text-end text-muted fw-bold'>
                  <a href='#' className='text-dark'>
                    1402/04/07
                  </a>
                </td>
                <td className='text-end'>
                  <span className='badge badge-light-warning'>فروش</span>
                </td>
                <td>
                  <div className='text-end text-muted fw-bold'>
                    <a href='#' className='text-dark'>
                      محمد محمدی فر قمی نژاد
                    </a>
                  </div>
                </td>
                <td className='text-end text-muted fw-bold'>
                  <a href='#' className='text-dark'>
                    67858GKJ868
                  </a>
                </td>
                <td>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input className='form-check-input widget-9-check' type='checkbox' value='1' />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex justify-content-end flex-shrink-0'>

                    <a
                      href='detailfiles'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    >
                      <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                    </a>
                    <a
                      href='#'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    >
                      <KTSVG
                        path='/media/icons/duotune/general/gen027.svg'
                        className='svg-icon-3'
                      />
                    </a>
                    <a
                      href='#'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    >
                      <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                    </a>
                    <a
                      href='#'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                    >
                      <KTSVG
                        path='/media/icons/duotune/general/gen027.svg'
                        className='svg-icon-3'
                      />
                    </a>
                  </div>
                </td>
                <td className='text-end'>
                  <span className="badge badge-light-primary">ارجاع حقوقی</span>
                </td>
                <td className='text-end'>
                  <span className="badge badge-light-danger">کشاورزی</span>
                </td>
                <td className='text-end text-muted fw-bold'>
                  <a href='#' className='text-dark'>
                    1402/04/07
                  </a>
                </td>
                <td className='text-end'>
                  <span className='badge badge-light-warning'>فروش</span>
                </td>
                <td>
                  <div className='text-end text-muted fw-bold'>
                    <a href='#' className='text-dark'>
                      محمد محمدی فر قمی نژاد
                    </a>
                  </div>
                </td>
                <td className='text-end text-muted fw-bold'>
                  <a href='#' className='text-dark'>
                    67858GKJ868
                  </a>
                </td>
                <td>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input className='form-check-input widget-9-check' type='checkbox' value='1' />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex justify-content-end flex-shrink-0'>

                    <a
                      href='detailfiles'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    >
                      <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                    </a>
                    <a
                      href='#'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    >
                      <KTSVG
                        path='/media/icons/duotune/general/gen027.svg'
                        className='svg-icon-3'
                      />
                    </a>
                    <a
                      href='#'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    >
                      <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                    </a>
                    <a
                      href='#'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                    >
                      <KTSVG
                        path='/media/icons/duotune/general/gen027.svg'
                        className='svg-icon-3'
                      />
                    </a>
                  </div>
                </td>
                <td className='text-end'>
                  <span className="badge badge-light-success">در حال انجام</span>
                </td>
                <td className='text-end'>
                  <span className="badge badge-light-primary">پیش فروش</span>
                </td>
                <td className='text-end text-muted fw-bold'>
                  <a href='#' className='text-dark'>
                    1402/04/07
                  </a>
                </td>
                <td className='text-end'>
                  <span className='badge badge-light-warning'>فروش</span>
                </td>
                <td>
                  <div className='text-end text-muted fw-bold'>
                    <a href='#' className='text-dark'>
                      محمد محمدی فر قمی نژاد
                    </a>
                  </div>
                </td>
                <td className='text-end text-muted fw-bold'>
                  <a href='#' className='text-dark'>
                    67858GKJ868
                  </a>
                </td>
                <td>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input className='form-check-input widget-9-check' type='checkbox' value='1' />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex justify-content-end flex-shrink-0'>

                    <a
                      href='detailfiles'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    >
                      <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                    </a>
                    <a
                      href='#'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    >
                      <KTSVG
                        path='/media/icons/duotune/general/gen027.svg'
                        className='svg-icon-3'
                      />
                    </a>
                    <a
                      href='#'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    >
                      <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                    </a>
                    <a
                      href='#'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                    >
                      <KTSVG
                        path='/media/icons/duotune/general/gen027.svg'
                        className='svg-icon-3'
                      />
                    </a>
                  </div>
                </td>
                <td className='text-end'>
                  <span className="badge badge-light-success">در حال انجام</span>
                </td>
                <td className='text-end'>
                  <span className='badge badge-light-warning'>همزمان</span>
                </td>
                <td className='text-end text-muted fw-bold'>
                  <a href='#' className='text-dark'>
                    1402/04/07
                  </a>
                </td>
                <td className='text-end'>
                  <span className="badge badge-light-success">موجر</span>
                </td>
                <td>
                  <div className='text-end text-muted fw-bold'>
                    <a href='#' className='text-dark'>
                      محمد محمدی فر قمی نژاد
                    </a>
                  </div>
                </td>
                <td className='text-end text-muted fw-bold'>
                  <a href='#' className='text-dark'>
                    67858GKJ868
                  </a>
                </td>
                <td>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input className='form-check-input widget-9-check' type='checkbox' value='1' />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex justify-content-end flex-shrink-0'>

                    <a
                      href='detailfiles'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    >
                      <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                    </a>
                    <a
                      href='#'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    >
                      <KTSVG
                        path='/media/icons/duotune/general/gen027.svg'
                        className='svg-icon-3'
                      />
                    </a>
                    <a
                      href='#'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    >
                      <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                    </a>
                    <a
                      href='#'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                    >
                      <KTSVG
                        path='/media/icons/duotune/general/gen027.svg'
                        className='svg-icon-3'
                      />
                    </a>
                  </div>
                </td>
                <td className='text-end'>
                  <span className="badge badge-light-danger">لغو شده</span>
                </td>
                <td className='text-end'>
                  <span className="badge badge-light-danger">کشاورزی</span>
                </td>
                <td className='text-end text-muted fw-bold'>
                  <a href='#' className='text-dark'>
                    1402/04/07
                  </a>
                </td>
                <td className='text-end'>
                  <span className='badge badge-light-warning'>فروش</span>
                </td>
                <td>
                  <div className='text-end text-muted fw-bold'>
                    <a href='#' className='text-dark'>
                      محمد محمدی فر قمی نژاد
                    </a>
                  </div>
                </td>
                <td className='text-end text-muted fw-bold'>
                  <a href='#' className='text-dark'>
                    67858GKJ868
                  </a>
                </td>
                <td>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input className='form-check-input widget-9-check' type='checkbox' value='1' />
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className='d-flex justify-content-end flex-shrink-0'>

                    <a
                      href='detailfiles'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    >
                      <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                    </a>
                    <a
                      href='#'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    >
                      <KTSVG
                        path='/media/icons/duotune/general/gen027.svg'
                        className='svg-icon-3'
                      />
                    </a>
                    <a
                      href='#'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-1'
                    >
                      <KTSVG path='/media/icons/duotune/art/art005.svg' className='svg-icon-3' />
                    </a>
                    <a
                      href='#'
                      className='btn btn-icon btn-bg-light btn-active-color-primary btn-sm'
                    >
                      <KTSVG
                        path='/media/icons/duotune/general/gen027.svg'
                        className='svg-icon-3'
                      />
                    </a>
                  </div>
                </td>
                <td className='text-end'>
                  <span className="badge badge-light-primary">ارجاع حقوقی</span>
                </td>
                <td className='text-end'>
                  <span className='badge badge-light-warning'>همزمان</span>
                </td>
                <td className='text-end text-muted fw-bold'>
                  <a href='#' className='text-dark'>
                    1402/04/07
                  </a>
                </td>
                <td className='text-end'>
                  <span className="badge badge-light-success">موجر</span>
                </td>
                <td>
                  <div className='text-end text-muted fw-bold'>
                    <a href='#' className='text-dark'>
                      محمد محمدی فر قمی نژاد
                    </a>
                  </div>
                </td>
                <td className='text-end text-muted fw-bold'>
                  <a href='#' className='text-dark'>
                    67858GKJ868
                  </a>
                </td>
                <td>
                  <div className='form-check form-check-sm form-check-custom form-check-solid'>
                    <input className='form-check-input widget-9-check' type='checkbox' value='1' />
                  </div>
                </td>
              </tr>
            </tbody>
            {/* end::Table body */}
          </table>
          {/* end::Table */}
        </div>
        {/* end::Table container */}
      </div>
      {/* begin::Body */}
    </div>
  )
}

export { ListTheme }

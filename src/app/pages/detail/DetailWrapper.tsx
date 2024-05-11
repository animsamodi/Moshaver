/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC, useEffect, useState, useRef } from 'react';
import { useIntl } from 'react-intl'
import NeshanMap from 'neshan-map';
import { Link } from 'react-router-dom';
import { Card3 } from '../../../_metronic/partials/content/cards/Card3';
import { KTSVG, toAbsoluteUrl } from '../../../_metronic/helpers';
import SwiperCore from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { ListsWidget7, ListsWidget8 } from '../../../_metronic/partials/widgets';
import { PageTitle } from '../../../_metronic/layout/core';
import { ReactComponent as LeftArrow } from 'assets/images/icon-previous.svg';
import { ReactComponent as RightArrow } from 'assets/images/icon-next.svg';
import styled from 'styled-components';


const DetailWrapper: FC = () => {
    const [swiper, setSwiper] = useState<SwiperCore>();
    const [currentSwiperIdx, setCurrentSwiperIdx] = useState<number>();

    const switchSwiperIdx = (idx: number) => {
        if (swiper) {
            swiper.slideToLoop(idx);
        }
    };

    return (
        <div className='card card-xl-stretch mb-5 mb-xl-8'>
            <div className='card-header align-items-center border-0 mt-4'>
                <div className='card-header align-items-center border-0 mt-4'>
                    <ul className='breadcrumb align-items-start breadcrumb-separatorless fw-bold fs-7 my-1'>
                        <li className='breadcrumb-item'>
                            <Link className='text-muted text-hover-primary' to="#">
                                فایل ها
                            </Link>
                            <span className='bullet bg-gray-200 w-5px h-2px'></span>
                        </li>
                        <li className='breadcrumb-item text-dark'>جزئیات فایل</li>
                    </ul>
                </div>

            </div>

            <div className='row g-5 g-xl-8'>
                <div className='col-xl-2'>

                </div>
                <div className='col-xl-4'>
                    <div className='card card-xl-stretch mb-xl-8'>
                        {/* begin::Header */}
                        <div className='card-header align-items-center border-0 mt-4'>
                            <h3 className='card-title align-items-start flex-column'>
                                <span className='fw-bolder text-dark'>تصاویر</span>

                            </h3>

                        </div>
                        {/* end::Header */}
                        {/* begin::Body */}
                        <div className='card-body pt-3'>
                            {/* begin::Item */}
                            <div className='d-flex align-items-sm-center mb-7'>
                                <>
                                    <Image

                                        spaceBetween={10}
                                        loop={true}
                                        onSwiper={setSwiper}
                                        breakpoints={{
                                            600: {
                                                slidesPerView: 2,
                                            },
                                            1024: {
                                                slidesPerView: 1,
                                            },
                                        }}
                                        onSlideChange={(swiper: SwiperCore) => {
                                            setCurrentSwiperIdx(swiper.realIndex);
                                        }}>

                                    </Image>

                                </>
                            </div>
                            {/* end::Item */}
                            {/* begin::Item */}
                            <div className='d-flex align-items-sm-center mb-7'>
                                {/* begin::Symbol */}
                                <div className='symbol symbol-60px symbol-2by3 me-4'>
                                    <div
                                        className='symbol-label'
                                        style={{ backgroundImage: `url(${toAbsoluteUrl('/media/stock/600x400/img-19.jpg')})` }}
                                    ></div>
                                </div>
                                {/* end::Symbol */}
                                {/* begin::Title */}
                                <div className='d-flex flex-row-fluid flex-wrap align-items-center'>
                                    <div className='flex-grow-1 me-2'>
                                        <a href='#' className='text-gray-800 fw-bolder text-hover-primary fs-6'>
                                            Yellow Background
                                        </a>
                                        <span className='text-muted fw-bold d-block pt-1'>Size: 1.2MB</span>
                                    </div>
                                    <span className='badge badge-light-warning fs-8 fw-bolder my-2'>In Progress</span>
                                </div>
                                {/* end::Title */}
                            </div>
                            {/* end::Item */}
                            {/* begin::Item */}
                            <div className='d-flex align-items-sm-center mb-7'>
                                {/* begin::Symbol */}
                                <div className='symbol symbol-60px symbol-2by3 me-4'>
                                    <div
                                        className='symbol-label'
                                        style={{ backgroundImage: `url(${toAbsoluteUrl('/media/stock/600x400/img-25.jpg')})` }}
                                    ></div>
                                </div>
                                {/* end::Symbol */}
                                {/* begin::Title */}
                                <div className='d-flex flex-row-fluid flex-wrap align-items-center'>
                                    <div className='flex-grow-1 me-2'>
                                        <a href='#' className='text-gray-800 fw-bolder text-hover-primary fs-6'>
                                            Nike &amp; Blue
                                        </a>
                                        <span className='text-muted fw-bold d-block pt-1'>Size: 87KB</span>
                                    </div>
                                    <span className='badge badge-light-success fs-8 fw-bolder my-2'>Success</span>
                                </div>
                                {/* end::Title */}
                            </div>
                            {/* end::Item */}
                            {/* begin::Item */}
                            <div className='d-flex align-items-sm-center'>
                                {/* begin::Symbol */}
                                <div className='symbol symbol-60px symbol-2by3 me-4'>
                                    <div
                                        className='symbol-label'
                                        style={{ backgroundImage: `url(${toAbsoluteUrl('/media/stock/600x400/img-24.jpg')}` }}
                                    ></div>
                                </div>
                                {/* end::Symbol */}
                                {/* begin::Title */}
                                <div className='d-flex flex-row-fluid flex-wrap align-items-center'>
                                    <div className='flex-grow-1 me-2'>
                                        <a href='#' className='text-gray-800 fw-bolder text-hover-primary fs-6'>
                                            Red Boots
                                        </a>
                                        <span className='text-muted fw-bold d-block pt-1'>Size: 345KB</span>
                                    </div>
                                    <span className='badge badge-light-danger fs-8 fw-bolder my-2'>Rejected</span>
                                </div>
                                {/* end::Title */}
                            </div>
                            {/* end::Item */}
                        </div>
                        {/* end::Body */}
                    </div>
                </div>
                <div className='col-xl-4'>
                    <ListsWidget7 className='card-xl-stretch mb-xl-8' />
                </div>
                <div className='col-xl-2'>

                </div>
            </div>

        </div>


    )
}

export { DetailWrapper }
const Image = styled(Swiper)`
  border-radius: 1rem;
  margin-bottom: 1.5rem;
  cursor: pointer;
  position: relative;

  @media screen and (max-width: ${size.desktop}) {
    border-radius: 0;
  }
`;

const PrevButton = styled(RoundButton)`
  position: absolute;
  top: 50%;
  left: 1.5rem;
  transform: translateY(-50%);
  z-index: 1;
  display: none;

  @media screen and (max-width: ${size.desktop}) {
    display: block;
  }
`;

const NextButton = styled(RoundButton)`
  position: absolute;
  top: 50%;
  right: 1.5rem;
  transform: translateY(-50%);
  z-index: 1;
  display: none;

  @media screen and (max-width: ${size.desktop}) {
    display: block;
  }
`;

const Thumbnail = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;

  @media screen and (max-width: ${size.desktop}) {
    display: none;
  }
`;

const ImageBox = styled.div`
  width: 20%;
  border-radius: 0.5rem;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border: 2px solid ${color.orange};
    border-radius: 0.5rem;
    box-sizing: border-box;
    opacity: 0;
    transition: opacity ${timer.default};
  }

  &.active {
    &::after {
      opacity: 1;
    }
  }
`;
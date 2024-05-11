import React, { FC } from 'react'
import { MenuInner } from './MenuInner'
import { KTSVG } from '../../../helpers'
import clsx from 'clsx'

const toolbarButtonMarginClass = 'ms-1 ms-lg-3',
    toolbarButtonHeightClass = 'w-30px h-30px w-md-40px h-md-40px',
    toolbarUserAvatarHeightClass = 'symbol-30px symbol-md-40px',
    toolbarButtonIconSizeClass = 'svg-icon-1'

const Searchbar: FC = () => {
    return (
        <div className='d-flex align-items-stretch flex-shrink-0' >
            <div className={clsx('d-flex align-items-center', toolbarButtonMarginClass)} id='kt_header_user_menu_toggle' >

                <div className='searchbar'>
                    <input
                        autoFocus
                        type='text'
                        className='form-control bg-transparent border-0 fs-1x  fw-normal'
                        name='query'
                        placeholder='جستجو'
                    />
                    <div className='searchbarSvh'>
                        <KTSVG
                            path='/media/icons/duotune/general/gen025.svg'
                            className={toolbarButtonIconSizeClass}
                        /></div>
                </div>

            </div>
        </div>



















    )
}

export { Searchbar }

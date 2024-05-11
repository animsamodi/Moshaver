/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { FC } from 'react'
import { useIntl } from 'react-intl'
import { PageTitle } from '../../../_metronic/layout/core'
import { Overview } from '../../modules/profile/components/Overview'

const DetailPage: FC = () => (
    <>

        {/* begin::Row */}
        <div className='row gy-5 gx-xl-8'>
            <div className='col-xxl-12'>

                <Overview />
            </div>
        </div>
        {/* end::Row */}


    </>
)

const Detail: FC = () => {
    const intl = useIntl()
    return (
        <>
            <PageTitle breadcrumbs={[]}>{intl.formatMessage({ id: 'MENU.DASHBOARD' })}</PageTitle>
            <DetailPage />
        </>
    )
}

export { Detail }

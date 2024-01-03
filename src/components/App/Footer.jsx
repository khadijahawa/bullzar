import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';
import { Trans } from "@lingui/macro";


export default function Footer() {
  return (
    <MDBFooter bgColor='light'  className='text-center text-lg-left dark:bg-black'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
        &copy; {2024} <Trans>Copyright:</Trans>{' '}
        <a className='text-dark' href='https://bullsclub.space/'>
          BULLSCLUB.SPACE
        </a>
      </div>
    </MDBFooter>
  );
}
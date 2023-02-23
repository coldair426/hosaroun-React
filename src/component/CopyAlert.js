import { React, useEffect } from 'react';
import { Alert } from 'react-bootstrap';

function CopyAlert({ anim, setAnim }) {
  return (
    <Alert className={`copy-alert ${anim}`} key={'warning'} variant={'warning'}>
      복사 완료
    </Alert>
  );
}

export default CopyAlert;

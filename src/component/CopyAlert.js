import { React } from 'react';
import { Alert } from 'react-bootstrap';

function CopyAlert({ anim }) {
  return (
    <Alert className={`copy-alert ${anim}`} key={'warning'} variant={'warning'}>
      복사 완료
    </Alert>
  );
}

export default CopyAlert;

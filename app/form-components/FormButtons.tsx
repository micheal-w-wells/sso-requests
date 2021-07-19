import Button from '@button-inc/bcgov-theme/Button';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

interface Props {
  show: boolean | undefined;
  loading: boolean;
  text: {
    continue: string;
    back: string;
  };
  handleSubmit?: Function;
  handleBackClick?: Function;
}

const PaddedButton = styled(Button)`
  margin-left: 10px;
  min-width: 150px;
`;

export default function FormButtons({ show, loading, text, handleSubmit, handleBackClick }: Props) {
  return (
    <>
      {show && (
        <>
          <Button variant="secondary" size="small" type="button" onClick={handleBackClick}>
            {text.back}
          </Button>
          <PaddedButton variant="primary" size="small" onClick={handleSubmit}>
            {loading ? <Loader type="Grid" color="#FFF" height={18} width={50} visible /> : <>{text.continue}</>}
          </PaddedButton>
        </>
      )}
    </>
  );
}
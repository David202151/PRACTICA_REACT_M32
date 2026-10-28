import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { navButton, statusBox } from '../../theme/mixins';

const DetailContainer = styled.article`
  max-width: 520px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Message = styled.p`
  ${statusBox}
`;

const ErrorBox = styled.div`
  ${statusBox}
`;

const HomeLink = styled(Link)`
  ${navButton}
`;

export { DetailContainer, Message, ErrorBox, HomeLink };

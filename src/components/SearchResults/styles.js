import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { gridSection, navButton, statusBox } from '../../theme/mixins';

const ResultsSection = styled.section`
  ${gridSection}
`;

const Message = styled.p`
  ${statusBox}
`;

const ErrorBox = styled.div`
  ${statusBox}
`;

const LibraryLink = styled(Link)`
  ${navButton}
`;

export { ResultsSection, Message, ErrorBox, LibraryLink };

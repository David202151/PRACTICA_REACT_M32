import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { gridSection, navButton } from '../../theme/mixins';

const LibrarySection = styled.section`
  ${gridSection}
`;

const HomeLink = styled(Link)`
  ${navButton}
`;

export { LibrarySection, HomeLink };

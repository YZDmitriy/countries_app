import { IoMoon, IoSunnyOutline } from 'react-icons/io5';
import styled from 'styled-components';
import { useTheme } from './useTheme';

const ModeSwitcher = styled.div`
  color: var(--colors-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  text-transform: capitalize;
  display: flex;
  align-items: center;
`;

export const ThemeSwitcher = () =>  {
  const [theme, toggleTheme] = useTheme();

  return (
    <ModeSwitcher onClick={toggleTheme}>
      {theme === 'light' ? (
        <IoSunnyOutline size='18px' />
      ) : (
        <IoMoon size='14px' />
      )}{' '}
      <span style={{ marginLeft: '0.75rem' }}>{theme} Theme</span>
    </ModeSwitcher>
  );
}

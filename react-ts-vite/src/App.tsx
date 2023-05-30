import { ReactComponent as ReactLogo } from '@/assets/react.svg';

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        paddingTop: '100px',
      }}
    >
      <ReactLogo />
      <div>Vite 4 + React 18 + TypeScript 5</div>
    </div>
  );
}

export default App;

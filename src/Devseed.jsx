
import { Link } from 'react-router-dom';

function Devseed() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh', background: 'linear-gradient(120deg, #e3e7ed 0%, #f8fafc 100%)'}}>
      <span style={{fontSize: '2rem', color: '#0a3d62', marginBottom: '2rem'}}>Logo DEVSEED aquí</span>
      <Link to="/" style={{
        background: 'linear-gradient(90deg, #0a3d62 0%, #3c6382 100%)',
        color: '#fff',
        padding: '0.7em 1.5em',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: 500,
        fontSize: '1rem',
        boxShadow: '0 2px 8px rgba(60,99,130,0.10)',
        border: 'none',
        outline: 'none',
        cursor: 'pointer'
      }}>Regresar</Link>
    </div>
  );
}

export default Devseed;

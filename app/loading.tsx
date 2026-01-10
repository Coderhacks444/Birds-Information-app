export default function Loading() {
  return (
    <div className="home-bg">
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        minHeight: '60vh',
        textAlign: 'center'
      }}>
        <div style={{
          fontSize: '4rem',
          animation: 'float 2s ease-in-out infinite',
          marginBottom: '2rem'
        }}>
          🦜
        </div>
        
        <h2 style={{
          color: 'white',
          fontSize: '1.5rem',
          marginBottom: '1rem',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)'
        }}>
          Loading Bird Information...
        </h2>
        
        <div style={{
          width: '200px',
          height: '4px',
          background: 'rgba(255, 255, 255, 0.3)',
          borderRadius: '2px',
          overflow: 'hidden'
        }}>
          <div className="loading-bar" />
        </div>
      </div>
    </div>
  )
}
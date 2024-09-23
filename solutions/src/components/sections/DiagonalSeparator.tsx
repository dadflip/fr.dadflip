interface DiagonalSeparatorProps {
  height?: string; // Hauteur du séparateur, par défaut '320px'
  color?: string; // Couleur du séparateur, par défaut '#000000'
}

export default function DiagonalSeparator({ height = '320px', color = '#000000' }: DiagonalSeparatorProps) {
  return (
    <div style={{ height, backgroundColor: color }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill={color} fillOpacity="1" d="M0,128L1440,320L1440,0L0,0Z"></path>
      </svg>
    </div>
  );
}

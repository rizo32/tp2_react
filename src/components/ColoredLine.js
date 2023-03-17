const ColoredLine = ({ color }) => (
  <hr
      style={{
          color: color,
          backgroundColor: color,
          height: 2,
          width: '100%'
      }}
  />
);

export default ColoredLine;
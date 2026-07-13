import "./BlurOrbs.css";

const orbData = [
  {
    className: "orb-1",
    color: "#7C3AED",
    size: 240,
  },
  {
    className: "orb-2",
    color: "#3B82F6",
    size: 180,
  },
  {
    className: "orb-3",
    color: "#EC4899",
    size: 160,
  },
  {
    className: "orb-4",
    color: "#C084FC",
    size: 200,
  },
  {
    className: "orb-5",
    color: "#60A5FA",
    size: 140,
  },
  {
    className: "orb-6",
    color: "#A78BFA",
    size: 170,
  },
  {
    className: "orb-7",
    color: "#FFFFFF",
    size: 120,
  },
  {
    className: "orb-8",
    color: "#93C5FD",
    size: 210,
  },
];

export default function BlurOrbs() {
  return (
    <div className="orbs-wrapper">
      {orbData.map((orb, index) => (
        <div
          key={index}
          className={`orb ${orb.className}`}
          style={{
            background: orb.color,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
          }}
        />
      ))}
    </div>
  );
}
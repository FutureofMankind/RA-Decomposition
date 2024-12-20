import './tooltip.css';

interface ITooltipProps {
  tooltipData: {
    id: string;
    text: string;
    link: string;
    href: string;
  }[];
}

const Tooltip = ({ tooltipData }: ITooltipProps) => {
  const index = Math.floor(Math.random() * tooltipData.length);
  const tooltip = tooltipData[index];

  return (
    <p className="tooltip">
      <span className="tooltip__text">{tooltip.text}</span>
      <a href={tooltip.href} className="tooltip__link">{tooltip.link}</a>
    </p>
  );
};

export default Tooltip;
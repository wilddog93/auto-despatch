import { FC } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const customData = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export const customOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: true,
      position: "bottom" as const,
      align: "center" as const,
      labels: {
        font: {
          size: 16,
        },
        boxWidth: 20,
      },
    },
  },
};

type PieProps = {
  data?: {
    labels: any;
    datasets: any;
  };
  options?: any;
  width?: string;
  height?: string;
  className?: string;
};

const PieChart: FC<PieProps> = ({
  data,
  options,
  width,
  height,
  className,
}) => {
  return (
    <div className="w-full flex items-center gap-2 overflow-x-hidden overflow-y-auto">
      <Pie
        data={data ? data : customData}
        height={height}
        width={width}
        options={options ? options : customOptions}
        className={className}
      />
    </div>
  );
};

export default PieChart;

import getBarColor from "../utils/barColor";
import formatName from "../utils/formatName";

interface StatsBarProps {
  stats: {
    stat: {
      name: string;
    };
    base_stat: number;
  }[];
}

export default function StatsBar({ stats }: StatsBarProps) {
  return (
    <div>
      <div>
        <p className="text-3xl text-center">Status</p>
        <div>
          {stats.map((item) => (
            <div key={item.stat.name} className="w-full ">
              <div className="flex justify-between text-2xl">
                <span>{formatName(item.stat.name)}</span>
                <span className="font-bold">{item.base_stat}</span>
              </div>
              <div className="h-3 w-full rounded-full bg-black/10">
                <div
                  className={`h-3 rounded-full ${getBarColor(item.base_stat)}`}
                  style={{ width: `${(item.base_stat / 255) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

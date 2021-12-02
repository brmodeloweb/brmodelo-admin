import { HiFolderOpen, HiUserGroup } from "react-icons/hi";
import StatsCard from "../stats-card";

export default function MainStats() {
  return (
    <div className="absolute -top-8 flex justify-evenly w-full">
      <StatsCard
        icon={<HiUserGroup className="text-2xl" />}
        title="Total Users"
        value={1000}
      />
      <StatsCard
        icon={<HiFolderOpen className="text-2xl" />}
        title="Total Models"
        value={1000}
      />
    </div>
  );
}

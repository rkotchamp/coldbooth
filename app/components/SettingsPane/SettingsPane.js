import { GrSettingsOption } from "react-icons/gr";

export default function SettingsPane() {
  return (
    <div className="flex items-center gap-2">
      <GrSettingsOption />
      <p>Settings</p>
    </div>
  );
}

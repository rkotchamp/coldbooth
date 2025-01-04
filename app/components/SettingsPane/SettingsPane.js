import { GrSettingsOption } from "react-icons/gr";

export default function SettingsPane({ setOpenSettingsTab }) {
  const openActiveTab = () => {
    setOpenSettingsTab(true);
  };
  return (
    <div
      className="mb-[50px] flex h-[50px] w-full cursor-pointer items-center justify-center gap-2 hover:bg-[--chat-panel-green-bg-color]"
      onClick={openActiveTab}
    >
      <GrSettingsOption />
      <p>Settings</p>
    </div>
  );
}

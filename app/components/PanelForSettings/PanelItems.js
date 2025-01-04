export default function PanelItems() {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex h-[50px] w-full cursor-pointer items-center px-10 hover:bg-[--active-hover-green-bg-color]">
        <p>Account Settings</p>
      </div>
      <div className="flex h-[50px] w-full cursor-pointer items-center px-10 hover:bg-[--active-hover-green-bg-color]">
        <p>Integrations</p>
      </div>
      <div className="flex h-[50px] w-full cursor-pointer items-center px-10 hover:bg-[--active-hover-green-bg-color]">
        <p>Plan & Subscription</p>
      </div>
      <div className="flex h-[50px] w-full cursor-pointer items-center px-10 hover:bg-[--active-hover-green-bg-color]">
        <p>Security</p>
      </div>
      <div className="flex h-[50px] w-full cursor-pointer items-center px-10 hover:bg-[--active-hover-green-bg-color]">
        <p>Support & Help</p>
      </div>
      <div className="flex h-[50px] w-full cursor-pointer items-center px-10 hover:bg-[--active-hover-green-bg-color]">
        <p>Legal & Policies</p>
      </div>
    </div>
  );
}

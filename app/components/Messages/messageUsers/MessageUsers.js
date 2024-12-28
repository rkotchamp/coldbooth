import { FaUser } from "react-icons/fa6";

export default function MessageUsers() {
  return (
    <div className="flex h-[70px] w-full items-center justify-center gap-[22px] p-10 hover:bg-[--inside-app-bg-color]">
      <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[50px] bg-[--gray-dark-color]">
        <FaUser className="text-[20px] text-[--gray-white-color]" />
      </div>

      {/* User Name and Message Plus time */}
      <div className="flex items-center justify-between gap-5">
        <div>
          <p className="mid-bold-user-name-fonts">Jerry Maines</p>
          <p className="small-supporting-fonts">
            Yes must 40 ch before truncate plus wh...
          </p>
        </div>

        <div>
          <p className="small-supporting-fonts">12:00</p>
          <span className="badge indicator-item badge-secondary border-none bg-[--cta-green-color]">
            10
          </span>
        </div>
      </div>
    </div>
  );
}

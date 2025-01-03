import { IoLogoWhatsapp } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoFacebook } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

export default function SwitchPopUp() {
  return (
    <ul
      tabIndex={0}
      className="menu dropdown-content z-[100] w-52 rounded-box bg-[--entire-window-bg-color] p-2 shadow drop-shadow-lg"
    >
      <li>
        <div>
          <IoLogoWhatsapp />
          WhatsApp
        </div>
      </li>
      <li>
        <div>
          <RiInstagramFill />
          Instagram
        </div>
      </li>
      <li>
        <div>
          <IoLogoFacebook />
          Facebook
        </div>
      </li>
      <li>
        <div>
          <FaTelegram />
          Telegram
        </div>
      </li>

      <li>
        <a>Add Number</a>
      </li>
    </ul>
  );
}

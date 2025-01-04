import { IoImageSharp } from "react-icons/io5";
import { FaFile } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";

export default function MediaPopUp() {
  return (
    <ul
      tabIndex={0}
      className="menu dropdown-content z-[1] w-52 rounded-box bg-[--entire-window-bg-color] p-2 shadow drop-shadow-lg"
    >
      <li>
        <p>
          <IoImageSharp />
          Images & Videos
        </p>
      </li>
      <li>
        <p>
          <FaFile />
          Files
        </p>
      </li>
      <li>
        <p>
          <FaCamera />
          Camera
        </p>
      </li>
    </ul>
  );
}

import IntegratedApp from "./IntegratedApp";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Integrations() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full border-2 p-10">
        <p className="font-bold-headers">Integrated Apps</p>
      </div>
      <div className="flex w-full flex-col items-center gap-4 p-10">
        <IntegratedApp
          appName="WhatsApp"
          AppIcon={IoLogoWhatsapp}
          appUserAvatar="/images/macLou.JPG"
          appUserName="@marx_lou"
        />
        <IntegratedApp
          appName="Instagram"
          AppIcon={RiInstagramFill}
          appUserAvatar="/images/florian.JPG"
          appUserName="@florian_"
        />
      </div>
    </div>
  );
}

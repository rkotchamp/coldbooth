import Image from "next/image";

export default function UserProfile() {
  return (
    <div className="flex cursor-pointer items-center gap-2 border-b-[1px] border-[var(--gray-light-border-color)] p-2">
      <div className="h-[50px] w-[50px] rounded-[50px]">
        <Image
          src="/images/macLou.JPG"
          alt="MacLou user Profile"
          width={50}
          height={50}
          className="rounded-[50px] object-cover"
        />
      </div>
      <p className="panelHeading-text">Reuben Tetteh</p>
    </div>
  );
}

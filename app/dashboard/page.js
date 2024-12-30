import FirstPanel from "@/app/components/Panels/FirstPanel/FirstPanel";
import SecondPanel from "@/app/components/Panels/secondPanel/SecondPanel";
import ThirdPanel from "@/app/components/Panels/ThirdPanel/ThirdPanel";
export default function Dashboard() {
  return (
    <main className="flex">
      {/* First Panel */}
      <FirstPanel />
      {/* Second Panel */}

      <SecondPanel />

      {/* Third Panel */}
      <ThirdPanel />
    </main>
  );
}

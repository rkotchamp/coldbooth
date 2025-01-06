export default function SubButton({ btnText, onClick }) {
  return (
    <button
      className="px- w-[240px] rounded-xl bg-[--cta-green-color] px-[10px] py-[10px] font-bold text-[--gray-white-color]"
      onClick={onClick}
    >
      {btnText}
    </button>
  );
}

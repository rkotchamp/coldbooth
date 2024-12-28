export default function SuccessPop({
  isClose,
  setIsClose,
  pageMessageHeader,
  pageMessage,
  onClose,
  btnText,
}) {
  const closeFunction = () => {
    setIsClose(false);
  };

  const defaultFunction = () => {
    if (onClose) {
      onClose();
    } else {
      closeFunction();
    }
  };

  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h3 className="font-bold-headers">{pageMessageHeader}</h3>
        <p>{pageMessage}</p>
        <div className="modal-action">
          <button
            className="btn bg-[--cta-green-color] text-white hover:bg-[--cta-green-color]"
            onClick={defaultFunction}
          >
            {btnText ? btnText : "Close"}
          </button>
        </div>
      </div>
    </div>
  );
}

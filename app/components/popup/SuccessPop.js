export default function SuccessPop({ isSuccess, setIsSuccess }) {
  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <h2 className="font-bold-headers">Check your email</h2>
        <p>We&apos;ve sent you an email with a link to reset your password.</p>
        <div className="modal-action">
          <button
            className="btn bg-[--cta-green-color] text-white hover:bg-[--cta-green-color]"
            onClick={() => setIsSuccess(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

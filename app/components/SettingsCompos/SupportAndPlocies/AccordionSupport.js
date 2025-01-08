export default function AccordionSupport({ data }) {
  return (
    <div className="flex w-full flex-col items-center pt-10">
      {/* Support */}
      <div className="collapse collapse-arrow w-[80%] rounded-md border border-base-300 bg-base-100">
        <input type="radio" name="my-accordion-6" defaultChecked />
        <div className="collapse-title bg-[--inside-app-bg-color] font-semibold">
          Support & Help
          <div className="font-normal">We help you</div>
        </div>
        <div className="collapse-content text-sm">
          <div className="flex h-[20vh] flex-col justify-center pl-5">
            <p className="text-[16px] font-medium text-[--gray-dark-color]">
              Call Support
            </p>
            <a href="tel:+12342453245" className="text-[--cta-green-color]">
              +1 234 245 3245
            </a>
          </div>
          <div className="flex h-[20vh] flex-col justify-center pl-5">
            <p className="text-[16px] font-medium text-[--gray-dark-color]">
              Email
            </p>
            <a
              href="mailto:support@bridgemessage.com"
              className="text-[--cta-green-color]"
            >
              support@bridgemessage.com
            </a>
          </div>
        </div>
      </div>
      {/* Legal and Policies */}
      <div className="collapse collapse-arrow w-[80%] rounded-md border border-base-300 bg-base-100">
        <input type="radio" name="my-accordion-6" />
        <div className="collapse-title bg-[--inside-app-bg-color] font-semibold">
          Legal & Policies
          <div className="font-normal">We help you</div>
        </div>
        <div className="collapse-content text-sm">
          <div>
            <p>
              We value your privacy and data. To read our full legal policies,
              please click on Terms of Use and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

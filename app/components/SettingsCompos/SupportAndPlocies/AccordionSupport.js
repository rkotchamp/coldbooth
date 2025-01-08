export default function AccordionSupport({ data }) {
  return (
    <div>
      {/* Support */}
      <div className="collapse collapse-arrow border border-base-300 bg-base-100">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold">
          Support
          <div>We help you</div>
        </div>
        <div className="collapse-content text-sm">
          <div>
            <p>Call Support</p>
            <a href="tel:+12342453245">+1 234 245 3245</a>
          </div>
          <div>
            <p>Email</p>
            <a href="mailto:support@bridgemessage.com">
              support@bridgemessage.com
            </a>
          </div>
        </div>
      </div>
      {/* Legal and Policies */}
      <div className="collapse collapse-arrow border border-base-300 bg-base-100">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold">
          Legal & Policies
          <div>We help you</div>
        </div>
        <div className="collapse-content text-sm">
          <div>
            <p>Call Support</p>
            <a href="tel:+12342453245">+1 234 245 3245</a>
          </div>
          <div>
            <p>Email</p>
            <a href="mailto:support@bridgemessage.com">
              support@bridgemessage.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

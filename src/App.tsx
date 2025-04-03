import { useState } from "react";

export default function MyFirstMerchForm() {
  const [sizeCounts, setSizeCounts] = useState({
    S: 0,
    M: 0,
    L: 0,
    XL: 0,
    XXL: 0,
  });
  const [youPick, setYouPick] = useState(false);

  const handleSizeChange = (e) => {
    const { name, value } = e.target;
    const numValue = parseInt(value || "0", 10);
    const newSizeCounts = { ...sizeCounts, [name]: numValue };
    const total = Object.values(newSizeCounts).reduce(
      (acc, val) => acc + val,
      0
    );
    if (total <= 50) {
      setSizeCounts(newSizeCounts);
    }
  };

  const totalCount = Object.values(sizeCounts).reduce(
    (acc, val) => acc + val,
    0
  );

  return (
    <div className="max-w-3xl mx-auto p-4">
      <form
        action="https://formsubmit.co/sales@makemerchandise.com.au"
        method="POST"
        encType="multipart/form-data"
        className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 space-y-6"
      >
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_next"
          value="https://makemerchandise.com.au/thank-you"
        />

        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-gray-800">
            My First Merch Kit - Order Form
          </h2>
          <p className="text-sm text-gray-600">
            This form is your first step toward launching your own line of band
            merch, and we’ve made it as easy (and affordable) as possible. Just
            fill in your details, upload your artwork (300dpi, high res), choose
            your sizes, and select either hats or totes.
          </p>
          <p className="text-sm text-gray-600">
            Shirts are printed on <strong>American Apparel 1301 </strong>high
            quality blanks that feel great and last. Check out the{" "}
            <a
              href="https://gildanbrands.com.au/american-apparel-1301/?searchid=510299"
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              size guide here
            </a>
            . Hats are{" "}
            <strong>
              <a
                href="https://www.ascolour.com.au/access-cap-1130/"
                className="text-blue-600 underline"
                target="_blank"
              >
                AS Colour Access Cap
              </a>
            </strong>
            , and totes are{" "}
            <strong>
              <a
                href="https://www.ascolour.com.au/carrie-tote-1001/"
                className="text-blue-600 underline"
                target="_blank"
              >
                AS Colour Carrie Tote
              </a>
            </strong>
            . We’ve hand picked these for their balance of quality and value so
            you get premium merch without blowing the budget.
          </p>
          <p className="text-sm text-gray-600">
            We know picking sizes can feel like a bit of a guessing game,
            especially if this is your first time doing merch. If you're not
            sure how to break down your 50 tees, just tick the “You Pick” option
            and we’ll steer you in the right direction based on what usually
            sells for bands like yours.
          </p>
          <p className="text-sm text-gray-500">
            This offer is all about backing the next wave of artists. We put it
            together to make merch more accessible for up and comers, and to
            give something back to the music community that we care for. If
            you're just getting started, this one's for you – Make Merchandise
            Team ❤️🤘
          </p>
        </div>

        <input
          className="w-full border border-gray-300 p-2 rounded"
          name="name"
          placeholder="Your Name"
          required
        />
        <input
          className="w-full border border-gray-300 p-2 rounded"
          name="client"
          placeholder="Client"
          required
        />
        <input
          className="w-full border border-gray-300 p-2 rounded"
          name="phone"
          placeholder="Phone"
          required
        />
        <input
          className="w-full border border-gray-300 p-2 rounded"
          name="email"
          type="email"
          placeholder="Email"
          required
        />
        <input
          className="w-full border border-gray-300 p-2 rounded"
          name="address"
          placeholder="Address"
          required
        />

        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Upload Your Artwork (300dpi)
          </label>
          <input type="file" name="artwork" className="w-full" required />
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Shirt Size Breakdown (total 50)
          </label>
          <div className="grid grid-cols-5 gap-2">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <input
                key={size}
                name={size}
                placeholder={size}
                type="number"
                className="border border-gray-300 p-2 rounded w-full"
                value={sizeCounts[size] || ""}
                onChange={handleSizeChange}
              />
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-1 text-right">
            {totalCount}/50
          </p>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="youPick"
            checked={youPick}
            onChange={() => setYouPick(!youPick)}
          />
          <label className="text-sm text-gray-700">
            You Pick (let us decide the size breakdown for you)
          </label>
        </div>

        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Choose Add-On Option
          </label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input type="radio" name="merchOption" value="hats" required />
              25 Hats
            </label>
            <label className="flex items-center gap-2">
              <input type="radio" name="merchOption" value="totes" />
              25 Totes
            </label>
          </div>
        </div>

        <textarea
          name="notes"
          className="w-full border border-gray-300 p-2 rounded"
          placeholder="Any notes or special requests?"
        />

        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-all w-full"
        >
          Submit Order
        </button>
      </form>
    </div>
  );
}

// hotel not available component

export const HotelFullyBookedModal = ({ onClose }) => {
  if (!onClose) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        {/* <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700"
        >
          Show Modal
        </button> */}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 bg-opacity-75 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl max-w-md w-full relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Content */}
        <div className="p-8 text-center">
          {/* Title */}
          <h2 className="text-2xl font-bold mb-2">
            <span className="text-red-600">
              Our Hotel Is Currently Fully Booked !
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-gray-800 font-semibold mb-3">
            We Apologise For The Inconvenience .
          </p>

          {/* Message */}
          <p className="text-gray-700 mb-6">
            Thank You For Your Understanding!
          </p>

          {/* Description */}
          <p className="text-sm text-gray-600 mb-6 leading-relaxed">
            Check the back With us when you want to our Available Rooms And
            Kindly
            <br />
            Subscribe To Our Newsletter To Get All Updated
          </p>

          {/* Newsletter Section */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3 text-left">
              Subscribe for Receiving Room Availability Notification
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded px-4 py-3 mb-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />

            <button
              className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded hover:bg-blue-700 transition-colors"
              onClick={() => {
                if (email) {
                  alert(`Subscribed with: ${email}`);
                  setEmail("");
                }
              }}
            >
              Room Availability Notification
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

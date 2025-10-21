import React, { useState } from 'react';

export default function BookTrial() {
  const [formData, setFormData] = useState({
    studentName: '',
    parentName: '',
    mobile: '',
    email: '',
    location: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-600 via-orange-400 to-pink-300 p-4 md:p-8 lg:p-12">
      <div className="max-w-7xl mx-auto bg-gradient-to-br from-orange-100/90 via-yellow-50/90 to-pink-100/90 rounded-3xl shadow-2xl overflow-hidden backdrop-blur-sm">
        {/* Header */}
        <div className="text-center pt-8 pb-6 px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900">
            Book a Free Trial Session
          </h1>
          <div className="inline-block bg-white/80 rounded-full px-6 py-3 shadow-md">
            <p className="text-orange-600 font-semibold text-sm md:text-base lg:text-lg">
              Empowering Young Innovators through Robotics, AI, and Coding
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 p-6 md:p-10 lg:p-12">
          <div className="flex flex-col items-center justify-center space-y-6 relative">
            <div className="relative w-full max-w-md">
              <div className="relative mx-auto w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-dashed border-yellow-300 bg-gradient-to-br from-red-400 to-pink-400 shadow-xl">
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="text-center bg-white/90 rounded-2xl p-6 w-full h-full flex items-center justify-center">
                    <div>
                      <div className="text-6xl mb-4">👨‍👦‍👦</div>
                      <p className="text-sm text-gray-700">Parent with child building robot</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden bg-gradient-to-br from-green-300 to-green-400 border-4 border-white shadow-lg">
                <div className="w-full h-full flex items-center justify-center text-4xl">
                  👦
                </div>
              </div>

              <div className="absolute -right-8 bottom-8 w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden bg-gradient-to-br from-cyan-300 to-cyan-400 border-4 border-white shadow-lg">
                <div className="w-full h-full flex items-center justify-center text-4xl">
                  👧
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-gray-800 font-medium text-base md:text-lg italic">
                Master 21st Century Skills with Practical,
                <br />
                Personalized Training
              </p>
            </div>

            <div className="absolute bottom-0 left-0 right-0 flex justify-center space-x-4 opacity-50">
              <div className="w-12 h-12 bg-blue-300 rounded-lg transform rotate-12"></div>
              <div className="w-12 h-12 bg-pink-300 rounded-lg transform -rotate-12"></div>
              <div className="w-12 h-12 bg-green-300 rounded-lg transform rotate-6"></div>
              <div className="w-12 h-12 bg-yellow-300 rounded-lg transform -rotate-6"></div>
              <div className="w-12 h-12 bg-cyan-300 rounded-lg transform rotate-12"></div>
            </div>
          </div>

          <div className="flex items-center">
            <form onSubmit={handleSubmit} className="w-full space-y-5">
              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  Student's Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="studentName"
                  value={formData.studentName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-orange-300 focus:border-orange-500 focus:outline-none bg-white/80 transition-colors"
                />
              </div>

              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  Parent's Name<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="parentName"
                  value={formData.parentName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-orange-300 focus:border-orange-500 focus:outline-none bg-white/80 transition-colors"
                />
              </div>

              {/* Mobile Number */}
              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  Mobile Number<span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-orange-300 focus:border-orange-500 focus:outline-none bg-white/80 transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  Email<span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-orange-300 focus:border-orange-500 focus:outline-none bg-white/80 transition-colors"
                />
              </div>

              {/* Location */}
              <div>
                <label className="block text-gray-800 font-medium mb-2">
                  Location<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-orange-300 focus:border-orange-500 focus:outline-none bg-white/80 transition-colors"
                />
              </div>
              <div className="flex justify-end pt-4">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold px-10 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center space-x-2"
                >
                  <span className="text-lg">Submit</span>
                  <span className="text-xl">→</span>
                </button>
              </div>
              <div className="text-center text-sm text-gray-600 pt-2">
                <span className="font-semibold">Privacy Policy:</span> We hate spam and promise to keep your email address safe.
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
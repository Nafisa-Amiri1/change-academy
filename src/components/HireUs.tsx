'use client'

import React, { useState } from 'react'

export default function HireUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    notRobot: false,
    confirmEmail: '',
    password: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const target = e.target as HTMLInputElement | HTMLSelectElement
    const { name, value, type } = target
    const newValue =
      type === 'checkbox' ? (target as HTMLInputElement).checked : value
    setFormData({
      ...formData,
      [name]: newValue,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.notRobot) {
      alert('Please confirm you are not a robot!')
      return
    }
    console.log('Form Data:', formData)
    alert('Your request has been sent!')
    // اینجا می‌تونی API یا ایمیل متصل کنی
  }

  return (
    <section className="bg-white px-6 py-16 text-gray-800">
      <div className="mx-auto max-w-4xl text-center">
        {/* Title */}
        <h2 className="mb-4 text-3xl font-bold">Hire Us</h2>
        <p className="mb-8 text-gray-600">
          Looking for a professional team to build your website or application?
          We specialize in modern design and full-stack development — ready to
          bring your ideas to life.
        </p>

        {/* Reasons */}
        <div className="mb-10 grid gap-6 sm:grid-cols-3">
          <div className="rounded-lg border p-4 shadow-sm">
            <h3 className="mb-2 text-lg font-semibold">High Quality</h3>
            <p className="text-sm text-gray-600">
              We deliver exceptional, high-quality solutions that combine
              aesthetic design with seamless functionality. Every project is
              crafted with attention to detail, ensuring responsive layouts,
              intuitive user experiences, and modern interfaces that follow the
              latest design trends. Our commitment to quality means your website
              or application not only looks amazing but also performs flawlessly
              across all devices, providing a polished and professional digital
              presence for your brand.
            </p>
          </div>
          <div className="rounded-lg border p-4 shadow-sm">
            <h3 className="mb-2 text-lg font-semibold">Fast Support</h3>
            <p className="text-sm text-gray-600">
              Our team is committed to providing prompt and reliable support for
              all your project needs. Whether you have a question, face a
              technical challenge, or need guidance during development, we
              respond quickly and effectively to keep your project on track. We
              believe in clear communication, fast problem-solving, and
              proactive assistance to ensure a smooth and stress-free experience
              for our clients at every stage.
            </p>
          </div>
          <div className="rounded-lg border p-4 shadow-sm">
            <h3 className="mb-2 text-lg font-semibold">Strong Experience</h3>
            <p className="text-sm text-gray-600">
              Our team brings years of hands-on experience in building modern
              web and mobile applications. We are proficient in React, Next.js,
              Tailwind CSS, and other cutting-edge technologies. From crafting
              responsive, user-friendly interfaces to implementing robust
              backend solutions, we ensure that every project meets the highest
              standards of quality and performance. With a deep understanding of
              both design and development, we turn complex ideas into seamless
              digital experiences that delight users and drive results for your
              business.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-md space-y-4 text-left"
        >
          {/* Name */}
          <div>
            <label className="mb-1 block text-sm font-medium">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-lg border px-3 py-2 focus:ring-teal-400 focus:outline-none"
              placeholder="Enter your Name"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-1 block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-teal-400 focus:outline-none"
              placeholder="Enter your Email"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-1 block text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-teal-400 focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* I'm not a robot */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              name="notRobot"
              checked={formData.notRobot}
              onChange={handleChange}
              className="h-4 w-4 rounded border-gray-300 text-teal-500 focus:ring-teal-400"
              required
            />
            <label className="text-sm text-gray-700">I'm not a robot</label>
          </div>

          {/* Service Selection */}
          <div>
            <label className="mb-1 block text-sm font-medium">
              Select Service
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full rounded-lg border px-3 py-2 focus:ring-2 focus:ring-teal-400 focus:outline-none"
              required
            >
              <option value="">Choose a service</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="UI/UX">UI/UX</option>
              <option value="Mobile">Mobile</option>
              <option value="Graphic Design">Graphic Design</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-teal-500 py-2 font-medium text-white transition hover:bg-teal-600"
          >
            Send Request
          </button>
        </form>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { InputField, TextAreaField } from "./ui/reusable"
import { toast } from "sonner"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long"
    }

    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validate form
    const formErrors = validateForm()
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      toast.error("Please fix the errors in the form")
      return
    }

    setIsSubmitting(true)
    setErrors({})

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        toast.success("Message sent successfully! I'll get back to you soon.")
        // Reset form after success
        setFormData({ name: "", email: "", message: "" })
      } else {
        // Handle validation errors from server
        if (data.errors) {
          setErrors(data.errors)
        }
        toast.error(data.message || "Failed to send message")
      }
    } catch (error) {
      console.error("Contact form error:", error)
      toast.error("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} autoComplete="off" className="pt-10">
      {/* Form Fields */}
      <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2">
        <InputField
          id="name"
          name="name"
          label="Your name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          disabled={isSubmitting}
        />
        <InputField
          type="email"
          id="email"
          name="email"
          label="Your email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          disabled={isSubmitting}
        />
        <TextAreaField
          id="message"
          name="message"
          label="Your message"
          value={formData.message}
          onChange={handleChange}
          error={errors.message}
          disabled={isSubmitting}
        />
      </div>

      {/* Submit Button */}
      <button type="submit" disabled={isSubmitting} className="button group pt-10 duration-200 hover:bg-transparent">
        <span className="relative">
          <span className="border theme-light-dark-button rounded-xl p-2">
            {isSubmitting ? "Sending..." : "Send Message"}
          </span>
        </span>
      </button>
    </form>
  )
}

export default ContactForm

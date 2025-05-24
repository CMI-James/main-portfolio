// pages/api/contact.js
export default async function handler(req, res) {
    // Set CORS headers
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS")
    res.setHeader("Access-Control-Allow-Headers", "Content-Type")
  
    // Handle preflight request
    if (req.method === "OPTIONS") {
      return res.status(200).end()
    }
  
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method not allowed" })
    }
  
    try {
      const { name, email, message } = req.body
  
      // Validate required fields
      if (!name || !email || !message) {
        return res.status(400).json({
          message: "Missing required fields",
          errors: {
            name: !name ? "Name is required" : null,
            email: !email ? "Email is required" : null,
            message: !message ? "Message is required" : null,
          },
        })
      }
  
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(email)) {
        return res.status(400).json({
          message: "Invalid email format",
          errors: { email: "Please enter a valid email address" },
        })
      }
  
      // For now, we'll just log the message and return success
      // This ensures the form works immediately
      console.log("📧 New contact form submission:")
      console.log("Name:", name)
      console.log("Email:", email)
      console.log("Message:", message)
      console.log("Time:", new Date().toISOString())
      console.log("---")
  
      // Try to send email if Resend is configured
      if (process.env.RESEND_API_KEY) {
        try {
          const { Resend } = await import("resend")
          const resend = new Resend(process.env.RESEND_API_KEY)
  
          // Send email to yourself
          await resend.emails.send({
            from: "Contact Form <onboarding@resend.dev>", // Default Resend domain
            to: ["chibuikemichaelilonze@gmail.com"],
            subject: `New Contact Form Message from ${name}`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #333; border-bottom: 2px solid #0f0500; padding-bottom: 10px;">
                  New Contact Form Submission
                </h2>
                
                <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
                  <h3 style="color: #0f0500; margin-top: 0;">Contact Details:</h3>
                  <p><strong>Name:</strong> ${name}</p>
                  <p><strong>Email:</strong> ${email}</p>
                </div>
                
                <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
                  <h3 style="color: #0f0500; margin-top: 0;">Message:</h3>
                  <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
                </div>
                
                <div style="margin-top: 20px; padding: 15px; background-color: #e8f4f8; border-radius: 8px;">
                  <p style="margin: 0; font-size: 14px; color: #666;">
                    This message was sent from your portfolio contact form at ${new Date().toLocaleString()}.
                  </p>
                </div>
              </div>
            `,
          })
  
          // Send auto-reply
          await resend.emails.send({
            from: "Chibuikem Ilonze <onboarding@resend.dev>",
            to: [email],
            subject: "Thank you for your message!",
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #0f0500; border-bottom: 2px solid #f5f5dc; padding-bottom: 10px;">
                  Thank You for Reaching Out!
                </h2>
                
                <p>Hi ${name},</p>
                
                <p>Thank you for your message! I've received your inquiry and will get back to you as soon as possible, usually within 24-48 hours.</p>
                
                <div style="background-color: #f5f5f5; padding: 15px; border-radius: 8px; margin: 20px 0;">
                  <h3 style="color: #0f0500; margin-top: 0;">Your Message:</h3>
                  <p style="font-style: italic; line-height: 1.6;">"${message}"</p>
                </div>
                
                <p>Best regards,<br>
                <strong>Chibuikem Ilonze</strong><br>
                Electronics Engineer & Software Developer</p>
              </div>
            `,
          })
  
          console.log("✅ Emails sent successfully via Resend")
        } catch (emailError) {
          console.error("❌ Email sending failed:", emailError.message)
          // Don't fail the request if email fails
        }
      } else {
        console.log("ℹ️ No RESEND_API_KEY found. Email not sent, but form submission logged.")
      }
  
      return res.status(200).json({
        message: "Message received successfully!",
        success: true,
      })
    } catch (error) {
      console.error("❌ Contact form error:", error)
      return res.status(500).json({
        message: "Internal server error. Please try again later.",
        error: process.env.NODE_ENV === "development" ? error.message : "Something went wrong",
      })
    }
  }
  
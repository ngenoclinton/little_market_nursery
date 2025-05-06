import emailjs from "@emailjs/browser"

// Initialize EmailJS with your user ID
export const initEmailJS = () => {
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  if (!publicKey) {
    console.error("Missing EmailJS public key in env")
    return
  }
  emailjs.init(publicKey)
}

// Generic function to send form data via EmailJS
export const sendFormData = async (
    templateId:string, 
    formData:any, 
    serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
) => {
  try {
    if (!serviceId) {
        throw new Error("Missing EmailJS service ID")
      }
    // Ensure all variables have at least an empty string value
    const safeData = {
        parent_name: '',
        child_name: '',
        child_age: '',
        phone: '',
        email: '',
        school: '',
        location: '',
        visit_days:"",
        visit_time:"",
        message:"",
        form_type: "",
        ...formData, // Overwrite defaults with actual data
      }
    // Log the data being sent for debugging
    console.log("Sending email with data:", safeData)

    const response = await emailjs.send(serviceId, templateId, safeData)
    return { success: true, response }
  } catch (error) {
    console.error("Error sending email:", error)
    return { success: false, error }
  }
}

// Template IDs for different forms
export const EMAIL_TEMPLATES = {
  ARRANGE_VISIT: "template_arrange_visit",
  ASK_QUESTION: "template_ask_question",
  REGISTRATION: "template_registration",
  PARENTAL_CONTRACT: "template_parental_contract",
}

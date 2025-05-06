"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { initEmailJS, sendFormData } from "@/lib/afterschool/emailjs"
import { Loader2 } from "lucide-react"

export default function DebugEmailJS() {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<any>(null)

  // Initialize EmailJS
  useState(() => {
    initEmailJS()
  })

  const sendTestEmail = async () => {
    setIsLoading(true)
    setResult(null)

    try {
      // Create a minimal test data object with only required fields
      const testData = {
        form_type: "Test Email",
        child_first_name: "Test",
        child_last_name: "Child",
        child_dob: "2018-01-01",
        child_school: "Test School",
        parent_first_name: "Test",
        parent_last_name: "Parent",
        parent_email: "test@example.com",
        parent_phone: "123-456-7890",
        location: "Test Location",
        days_required: "Monday, Wednesday",
        medical_info: "None",
        photo_consent: "Yes",
        message_top: "This is a test email to debug EmailJS integration.",
        message_bottom: "If you received this email, the integration is working correctly.",
      }

      console.log("Sending test email with data:", testData)
      const response = await sendFormData(process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string, testData)
      setResult(response)
    } catch (error) {
      console.error("Error sending test email:", error)
      setResult({ success: false, error })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Card className="max-w-md mx-auto mt-8">
      <CardHeader>
        <CardTitle>Debug EmailJS Integration</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button onClick={sendTestEmail} disabled={isLoading} className="w-full">
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending Test Email...
            </>
          ) : (
            "Send Test Email"
          )}
        </Button>

        {result && (
          <div className="mt-4 p-4 border rounded-md">
            <h3 className="font-medium mb-2">Result:</h3>
            <pre className="text-xs overflow-auto p-2 bg-gray-100 rounded">{JSON.stringify(result, null, 2)}</pre>
          </div>
        )}
      </CardContent>
    </Card>
  )
}


import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// CORS headers for browser requests
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Handle CORS preflight requests
const handleCors = (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      headers: corsHeaders,
      status: 204,
    });
  }
  return null;
};

// Format phone number with proper country code
const formatPhoneNumber = (phoneNumber: string, defaultCountryCode = '91') => {
  // Remove any non-digit characters
  const digits = phoneNumber.replace(/\D/g, '');
  
  // If it already has a plus sign, assume it's properly formatted
  if (phoneNumber.startsWith('+')) {
    return phoneNumber;
  }
  
  // If it starts with a country code (like 1 for US), add a plus
  if (digits.startsWith('1') && digits.length === 11) {
    return `+${digits}`;
  }
  
  // Otherwise, add the default country code
  if (!digits.startsWith(defaultCountryCode)) {
    return `+${defaultCountryCode}${digits}`;
  }
  
  // If it already starts with country code but no plus
  return `+${digits}`;
};

// Main function to handle sending SMS
serve(async (req) => {
  try {
    // Handle CORS preflight request
    const corsResponse = handleCors(req);
    if (corsResponse) return corsResponse;

    // Parse the request body
    const { phoneNumber, messageName, messageContent } = await req.json();

    // Validate inputs
    if (!phoneNumber || !messageName || !messageContent) {
      return new Response(
        JSON.stringify({ success: false, error: 'phoneNumber, messageName, and messageContent are required' }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
      );
    }

    // Get Twilio credentials from environment variables (set as Supabase secrets)
    const TWILIO_ACCOUNT_SID = Deno.env.get('TWILIO_ACCOUNT_SID');
    const TWILIO_AUTH_TOKEN = Deno.env.get('TWILIO_AUTH_TOKEN');
    const TWILIO_PHONE_NUMBER = Deno.env.get('TWILIO_PHONE_NUMBER');

    // Format phone number (ensure it has country code +91 for India)
    const formattedPhoneNumber = formatPhoneNumber(phoneNumber, '91');
    console.log(`Sending SMS to ${formattedPhoneNumber} from ${TWILIO_PHONE_NUMBER} (${messageName})`);

    // Add a disclaimer for awareness purposes
    const fullMessage = `${messageContent}\n\n[AWARENESS DEMO: This is an educational phishing awareness message]`;

    // Check if we have all required Twilio credentials
    if (!TWILIO_ACCOUNT_SID || !TWILIO_AUTH_TOKEN || !TWILIO_PHONE_NUMBER) {
      console.log("Missing Twilio credentials. Running in DEMO mode.");
      
      // Generate a fake Twilio message SID for the demo
      const fakeTwilioSid = `SM${Math.random().toString(36).substring(2, 15)}`;
      
      // Simulate Twilio API response
      const twilioData = {
        sid: fakeTwilioSid,
        status: "queued",
        to: formattedPhoneNumber,
        from: TWILIO_PHONE_NUMBER || "+17753688960",
        fromName: messageName,
        body: fullMessage,
        direction: "outbound-api",
        demo_mode: true
      };
      
      console.log("Demo SMS sent successfully:", twilioData);

      // Return success response
      return new Response(
        JSON.stringify({ success: true, message: 'SMS sent successfully (DEMO MODE)', twilioData }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Make the actual Twilio API call
    const twilioApiUrl = `https://api.twilio.com/2010-04-01/Accounts/${TWILIO_ACCOUNT_SID}/Messages.json`;
    
    const formData = new URLSearchParams();
    formData.append('To', formattedPhoneNumber);
    formData.append('From', TWILIO_PHONE_NUMBER);
    formData.append('Body', fullMessage);
    
    // Create auth header using the Twilio credentials
    const authHeader = 'Basic ' + btoa(`${TWILIO_ACCOUNT_SID}:${TWILIO_AUTH_TOKEN}`);
    
    try {
      // Send the request to Twilio API
      const response = await fetch(twilioApiUrl, {
        method: 'POST',
        headers: {
          'Authorization': authHeader,
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData.toString(),
      });
      
      // Parse Twilio's response
      const twilioData = await response.json();
      
      if (!response.ok) {
        console.error("Twilio API error:", twilioData);
        return new Response(
          JSON.stringify({ 
            success: false, 
            error: twilioData.message || "Twilio API error",
            details: twilioData
          }),
          { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
        );
      }
      
      console.log("Real SMS sent successfully:", twilioData);
      
      // Add the sender name to the response for display purposes
      twilioData.fromName = messageName;
      
      // Return success response
      return new Response(
        JSON.stringify({ success: true, message: 'SMS sent successfully', twilioData }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    } catch (fetchError) {
      console.error("Fetch error:", fetchError);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: "Error communicating with Twilio API",
          details: fetchError.message
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
      );
    }
    
  } catch (error) {
    console.error("Error sending SMS:", error);
    
    // Return error response with 200 status code for consistent handling
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 200 }
    );
  }
});

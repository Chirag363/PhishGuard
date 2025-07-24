export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      sms_messages: {
        Row: {
          id: string
          created_at: string | null
          phone_number: string
          message_content: string
          sender_name: string
          status: string
          error_message: string | null
        }
        Insert: {
          id?: string
          created_at?: string | null
          phone_number: string
          message_content: string
          sender_name: string
          status: string
          error_message?: string | null
        }
        Update: {
          id?: string
          created_at?: string | null
          phone_number?: string
          message_content?: string
          sender_name?: string
          status?: string
          error_message?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      "send-sms": {
        Args: {
          phoneNumber: string
          messageName: string
          messageContent: string
        }
        Returns: {
          success: boolean
          error?: string
          twilioData?: any
        }
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

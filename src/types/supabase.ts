export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export interface Database {
  public: {
    Tables: {
      images: {
        Row: {
          created_at: string;
          id: string;
          image_name: string;
          required_height: number;
          required_width: number;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          image_name: string;
          required_height: number;
          required_width: number;
          user_id: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          image_name?: string;
          required_height?: number;
          required_width?: number;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: 'images_user_id_fkey';
            columns: ['user_id'];
            referencedRelation: 'users';
            referencedColumns: ['id'];
          },
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

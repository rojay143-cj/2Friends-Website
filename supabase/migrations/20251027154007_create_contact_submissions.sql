/*
  # Create contact_submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key) - Unique identifier for each submission
      - `name` (text) - Name of the person submitting the form
      - `email` (text) - Email address for contact
      - `message` (text) - The message content from the contact form
      - `created_at` (timestamptz) - Timestamp when the submission was created
      - `status` (text) - Status of the submission (new, read, responded)
  
  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy allowing anyone to insert contact form submissions (public form)
    - No read policies as contact submissions should only be accessible by admins via dashboard

  3. Important Notes
    - The table is designed to be public for insertions (anyone can submit the contact form)
    - No SELECT policies are added as these should be managed through admin access only
    - Default status is 'new' for tracking submission state
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);
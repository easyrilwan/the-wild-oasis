import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://iexviuuvrbrjspfisiga.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlleHZpdXV2cmJyanNwZmlzaWdhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAzMzEwNjcsImV4cCI6MjA0NTkwNzA2N30.-hpJPc0hz0aWrBdqSFEIfQNj9hQJUt-Z0tWysBW-vDU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

// ============================================================
// THE DOG EXPERIENCE — Configuration
// ============================================================

const SUPABASE_URL = 'https://rgchtcjruabcdnerbqgi.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJnY2h0Y2pydWFiY2RuZXJicWdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIxMzg3MDgsImV4cCI6MjA5NzcxNDcwOH0.npvoZLkY-YreeULgVVRv1Exq7vT-nOHfvaiP5NVbF9Q';

// Admin
const ADMIN_EMAIL = 'thedogexperience59@gmail.com';
const ADMIN_UUID  = 'c0a425b5-4e93-49f2-9938-38e3540893de';

// EmailJS
const EMAILJS_PUBLIC_KEY      = 'cPPSGLSX0DM7sDsS2';
const EMAILJS_SERVICE_ID      = 'service_s94ctbc';
const EMAILJS_TEMPLATE_ADMIN  = 'template_67dfq99';
const EMAILJS_TEMPLATE_CLIENT = 'template_fdabc6n';

// Charte graphique TDE
const COLORS = {
  turquoise     : '#2BBFB0',
  jaune         : '#F5C842',
  noir          : '#1a1a1a',
  blanc         : '#ffffff',
  turquoiseDoux : '#e8f8f7',
  jauneDoux     : '#fef9e7',
  gris          : '#999999',
  rouge         : '#e05555'
};

// Logo
const LOGO_URL = 'https://i.imgur.com/rq4rDYi.png';

// Client Supabase — NE PAS renommer cette variable
const supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

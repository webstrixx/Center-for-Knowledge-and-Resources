
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message } = await req.json();
    
    if (!message) {
      throw new Error('No message provided');
    }

    console.log('Received message:', message);

    const geminiApiKey = 'AIzaSyD54Z4oDTvAeGpAesj60J2LTweBoDyXhLI';
    
    const systemPrompt = `You are the DHRC (Dev Haven Resources Center) assistant. You help users navigate and learn about engineering resources. Your knowledge includes:

- Certificates: Industry-recognized certifications and online courses
- Projects: Hands-on projects and portfolio ideas  
- Ideas: Innovation concepts and startup ideas
- Blogs: Technical articles and engineering insights
- DSA: Data Structures and Algorithms resources with 150+ LeetCode problems
- Coding Challenges: Programming contests and practice problems
- Internships: Career opportunities and guidance
- Notes: Study materials and quick reference guides
- Campus Notes: Collaborative study notes and campus resources
- Documents: Technical documentation and manuals
- Theories: Fundamental concepts and theoretical knowledge
- Student Projects: Innovative projects by students across India
- Events: Tech events, competitions, and conferences
- Roadmaps: Structured learning paths for DSA and Web Development
- Interview Questions: Comprehensive technical interview prep
- Anyone Can Develop: Complete guide to creating webpages with AI assistance

Provide helpful, accurate, and concise responses about these topics. If asked about something outside these areas, politely redirect to DHRC resources that might be relevant.`;

    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${geminiApiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `${systemPrompt}\n\nUser question: ${message}`
              }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        }
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('Gemini API error:', errorData);
      throw new Error(`Gemini API error: ${response.status}`);
    }

    const data = await response.json();
    console.log('Gemini response:', data);

    if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
      throw new Error('Invalid response from Gemini API');
    }

    const botResponse = data.candidates[0].content.parts[0].text;

    return new Response(JSON.stringify({ response: botResponse }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in gemini-chat function:', error);
    return new Response(JSON.stringify({ 
      error: 'Failed to get response from AI assistant',
      details: error.message 
    }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});

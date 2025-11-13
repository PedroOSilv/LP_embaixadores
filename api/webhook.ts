import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  // Set CORS headers
  response.setHeader('Access-Control-Allow-Credentials', 'true');
  response.setHeader('Access-Control-Allow-Origin', '*');
  response.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  response.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle OPTIONS request
  if (request.method === 'OPTIONS') {
    response.status(200).end();
    return;
  }

  // Only allow POST requests
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const formData = request.body;

    console.log('Received form data:', formData);

    // Forward the request to the n8n webhook
    const n8nResponse = await fetch(
      'https://n8n.automacoesareluna.pt/webhook/lp-embaixadores',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }
    );

    console.log('N8N response status:', n8nResponse.status);

    if (!n8nResponse.ok) {
      const errorText = await n8nResponse.text();
      console.error('N8N error response:', errorText);
      throw new Error(`N8N webhook returned ${n8nResponse.status}: ${errorText}`);
    }

    let responseData;
    try {
      responseData = await n8nResponse.json();
    } catch {
      responseData = { message: 'Webhook processed successfully' };
    }

    console.log('Form submitted successfully');

    return response.status(200).json({
      success: true,
      message: 'Form submitted successfully',
      data: responseData,
    });
  } catch (error) {
    console.error('Webhook error:', error);
    return response.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Internal server error',
    });
  }
}


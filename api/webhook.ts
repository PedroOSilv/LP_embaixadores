import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  // Only allow POST requests
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const formData = request.body;

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

    if (!n8nResponse.ok) {
      throw new Error(`N8N webhook returned ${n8nResponse.status}`);
    }

    const responseData = await n8nResponse.json();

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


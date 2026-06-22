import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { name, email, company, sector, details } = await request.json();

    // Basic validation
    if (!name || !email || !details) {
      return NextResponse.json({ error: 'Missing required fields (name, email, and details are required)' }, { status: 400 });
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      return NextResponse.json({ error: 'Resend API key is not configured' }, { status: 500 });
    }

    // Call Resend API using standard fetch
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: 'HWC Lead <inquiry@horizonwebcorp.com>',
        to: 'horizonwebcorp@gmail.com',
        subject: `New Lead: ${company || name} (${sector || 'General'})`,
        html: `
          <!DOCTYPE html>
          <html>
            <head>
              <meta charset="utf-8">
              <title>New Lead Inquiry</title>
              <style>
                body {
                  background-color: #030305;
                  color: #cbd5e1;
                  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
                  margin: 0;
                  padding: 40px 16px;
                }
                .container {
                  max-width: 560px;
                  margin: 0 auto;
                  background-color: #0A0A0F;
                  border: 1px solid rgba(255, 255, 255, 0.08);
                  border-radius: 16px;
                  overflow: hidden;
                  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
                }
                .gradient-header {
                  height: 4px;
                  background: linear-gradient(to right, #7c3aed, #22d3ee, #06b6d4);
                }
                .content {
                  padding: 32px 40px;
                }
                .logo {
                  font-size: 18px;
                  font-weight: 800;
                  color: #ffffff;
                  letter-spacing: 0.05em;
                  margin-bottom: 24px;
                }
                h1 {
                  font-size: 24px;
                  margin-top: 0;
                  margin-bottom: 32px;
                  color: #ffffff;
                  letter-spacing: -0.02em;
                  font-weight: 800;
                }
                .field-card {
                  background-color: #12121a;
                  border: 1px solid rgba(255, 255, 255, 0.04);
                  border-radius: 10px;
                  padding: 16px 20px;
                  margin-bottom: 16px;
                }
                .label {
                  font-size: 9px;
                  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
                  color: #94a3b8;
                  text-transform: uppercase;
                  letter-spacing: 0.15em;
                  margin-bottom: 6px;
                  font-weight: 600;
                }
                .value {
                  font-size: 15px;
                  color: #ffffff;
                  line-height: 1.5;
                  font-weight: 500;
                }
                .value-email {
                  color: #22d3ee;
                  text-decoration: none;
                  border-bottom: 1px dashed rgba(34, 211, 238, 0.3);
                }
                .value-sector {
                  color: #e9d5ff;
                  font-weight: 600;
                }
                .brief-text {
                  font-size: 14px;
                  color: #e2e8f0;
                  white-space: pre-wrap;
                  line-height: 1.6;
                }
                .footer {
                  padding: 20px;
                  border-top: 1px solid rgba(255, 255, 255, 0.04);
                  font-size: 10px;
                  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
                  color: #475569;
                  text-align: center;
                  letter-spacing: 0.05em;
                  background-color: #06060a;
                }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="gradient-header"></div>
                <div class="content">
                  <div class="logo">HWC</div>
                  <h1>New Protocol Initiated</h1>
                  
                  <div class="field-card">
                    <div class="label">Full Name</div>
                    <div class="value">${name}</div>
                  </div>

                  <div class="field-card">
                    <div class="label">Email Address</div>
                    <div class="value"><a href="mailto:${email}" class="value-email">${email}</a></div>
                  </div>

                  <div class="field-card">
                    <div class="label">Company / Entity</div>
                    <div class="value">${company || 'Not Specified'}</div>
                  </div>

                  <div class="field-card">
                    <div class="label">Sector</div>
                    <div class="value value-sector">${sector || 'Not Specified'}</div>
                  </div>

                  <div class="field-card">
                    <div class="label">Project Brief</div>
                    <div class="brief-text">${details}</div>
                  </div>
                </div>
                <div class="footer">
                  HORIZON WEB CORP // EXPERIENTIAL INTENSITY
                </div>
              </div>
            </body>
          </html>
        `,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json({ error: `Resend API error: ${errorText}` }, { status: response.status });
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}

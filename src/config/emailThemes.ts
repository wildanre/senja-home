import type { EmailTheme } from "@/types";

export const EMAIL_THEMES: EmailTheme[] = [
  {
    id: "blue",
    name: "Blue",
    color: "bg-blue-500",
    primaryColor: "#3B82F6",
    backgroundColor: "#F8FAFC",
    textColor: "#1E293B",
    template: `
      <div style="max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 100%); padding: 20px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
        <div style="background-color: white; border-radius: 16px; padding: 0; box-shadow: 0 10px 30px rgba(59, 130, 246, 0.15); overflow: hidden; border: 1px solid rgba(59, 130, 246, 0.1);">
          <!-- Header with Logo and Sender Name -->
          <div style="background: linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%); padding: 24px 30px; position: relative; overflow: hidden;">
            <div style="position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%); animation: pulse 4s ease-in-out infinite;"></div>
            <div style="display: flex; align-items: center; position: relative; z-index: 1;">
              <img src="https://your-domain.com/senja-logo.png" alt="Senja Logo" style="height: 32px; width: auto; margin-right: 12px; filter: brightness(0) invert(1);" />
              <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: -0.3px;">{{SENDER_NAME}}</h1>
            </div>
          </div>
          
          <!-- Content -->
          <div style="padding: 40px 30px; min-height: 300px; background: white;">
            <div style="color: #1E293B; line-height: 1.7; font-size: 16px; margin-bottom: 30px; background: white; padding: 20px; border-radius: 8px; border: 1px solid #F1F5F9;">
              {{MESSAGE}}
            </div>
            {{#if URL}}
            <div style="text-align: center; margin: 35px 0;">
              <a href="{{URL}}" style="background: linear-gradient(135deg, #3B82F6, #1D4ED8); color: white; padding: 16px 32px; text-decoration: none; border-radius: 12px; display: inline-block; font-weight: 600; box-shadow: 0 6px 20px rgba(59, 130, 246, 0.3); transition: all 0.3s ease; letter-spacing: 0.5px;">Visit Website</a>
            </div>
            {{/if}}
          </div>
          
          <!-- Footer -->
          <div style="background: linear-gradient(135deg, #F8FAFC, #EFF6FF); padding: 25px 30px; text-align: center; border-top: 1px solid #E2E8F0;">
            <p style="color: #64748B; margin: 0; font-size: 14px; font-weight: 500;">{{FOOTER}}</p>
            {{#if DATE}}<p style="color: #94A3B8; margin: 8px 0 0 0; font-size: 13px;">{{DATE}}</p>{{/if}}
          </div>
        </div>
      </div>
      
      <style>
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.1); opacity: 0.2; }
        }
      </style>
    `,
  },
  {
    id: "green",
    name: "Green ",
    color: "bg-green-500",
    primaryColor: "#10B981",
    backgroundColor: "#F0FDF4",
    textColor: "#1F2937",
    template: `
      <div style="max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #F0FDF4 0%, #ECFDF5 100%); padding: 20px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
        <div style="background-color: white; border-radius: 16px; padding: 0; box-shadow: 0 10px 30px rgba(16, 185, 129, 0.15); overflow: hidden; border: 1px solid rgba(16, 185, 129, 0.1);">
          <!-- Header with Logo and Sender Name -->
          <div style="background: linear-gradient(135deg, #10B981 0%, #059669 100%); padding: 24px 30px; position: relative; overflow: hidden;">
            <div style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; opacity: 0.1;"></div>
            <div style="display: flex; align-items: center; position: relative; z-index: 1;">
              <img src="https://your-domain.com/senja-logo.png" alt="Senja Logo" style="height: 32px; width: auto; margin-right: 12px; filter: brightness(0) invert(1);" />
              <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: -0.3px;">{{SENDER_NAME}}</h1>
            </div>
          </div>
          
          <!-- Content -->
          <div style="padding: 40px 30px; min-height: 300px; background: white;">
            <div style="color: #1F2937; line-height: 1.7; font-size: 16px; margin-bottom: 30px; background: white; padding: 20px; border-radius: 8px; border: 1px solid #E6FFFA;">
              {{MESSAGE}}
            </div>
            {{#if URL}}
            <div style="text-align: center; margin: 35px 0;">
              <a href="{{URL}}" style="background: linear-gradient(135deg, #10B981, #059669); color: white; padding: 16px 32px; text-decoration: none; border-radius: 12px; display: inline-block; font-weight: 600; box-shadow: 0 6px 20px rgba(16, 185, 129, 0.3); letter-spacing: 0.5px;">Explore More</a>
            </div>
            {{/if}}
          </div>
          
          <!-- Footer -->
          <div style="background: linear-gradient(135deg, #F0FDF4, #DCFCE7); padding: 25px 30px; text-align: center; border-top: 1px solid #D1FAE5;">
            <p style="color: #065F46; margin: 0; font-size: 14px; font-weight: 500;">{{FOOTER}}</p>
            {{#if DATE}}<p style="color: #047857; margin: 8px 0 0 0; font-size: 13px;">{{DATE}}</p>{{/if}}
          </div>
        </div>
      </div>
    `,
  },
  {
    id: "yellow",
    name: "Yellow ",
    color: "bg-yellow-500",
    primaryColor: "#F59E0B",
    backgroundColor: "#FFFBEB",
    textColor: "#1F2937",
    template: `
      <div style="max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%); padding: 20px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
        <div style="background-color: white; border-radius: 16px; padding: 0; box-shadow: 0 10px 30px rgba(245, 158, 11, 0.15); overflow: hidden; border: 1px solid rgba(245, 158, 11, 0.1);">
          <!-- Header with Logo and Sender Name -->
          <div style="background: linear-gradient(135deg, #F59E0B 0%, #D97706 100%); padding: 24px 30px; position: relative; overflow: hidden;">
            <div style="position: absolute; top: -10px; left: -10px; right: -10px; bottom: -10px; background: radial-gradient(circle at 30% 20%, rgba(255,255,255,0.2) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(255,255,255,0.15) 0%, transparent 50%); animation: energyPulse 3s ease-in-out infinite;"></div>
            <div style="display: flex; align-items: center; position: relative; z-index: 1;">
              <img src="https://your-domain.com/senja-logo.png" alt="Senja Logo" style="height: 32px; width: auto; margin-right: 12px; filter: brightness(0) invert(1);" />
              <h1 style="color: white; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: -0.3px;">{{SENDER_NAME}}</h1>
            </div>
          </div>
          
          <!-- Content -->
          <div style="padding: 40px 30px; min-height: 300px; background: white;">
            <div style="color: #1F2937; line-height: 1.8; font-size: 16px; margin-bottom: 30px; background: white; padding: 20px; border-radius: 8px; border: 1px solid #FEF3C7;">
              {{MESSAGE}}
            </div>
            {{#if URL}}
            <div style="text-align: center; margin: 35px 0;">
              <a href="{{URL}}" style="background: linear-gradient(135deg, #F59E0B, #D97706); color: white; padding: 18px 36px; text-decoration: none; border-radius: 14px; display: inline-block; font-weight: 700; box-shadow: 0 8px 25px rgba(245, 158, 11, 0.4); letter-spacing: 0.5px; transform: translateY(-2px); transition: all 0.3s ease;">Discover Now</a>
            </div>
            {{/if}}
          </div>
          
          <!-- Footer -->
          <div style="background: linear-gradient(135deg, #FFFBEB, #FEF3C7); padding: 25px 30px; text-align: center; border-top: 1px solid #FEF3C7;">
            <p style="color: #92400E; margin: 0; font-size: 14px; font-weight: 600;">{{FOOTER}}</p>
            {{#if DATE}}<p style="color: #B45309; margin: 8px 0 0 0; font-size: 13px;">{{DATE}}</p>{{/if}}
          </div>
        </div>
      </div>
      
      <style>
        @keyframes energyPulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.02); }
        }
      </style>
    `,
  },
];

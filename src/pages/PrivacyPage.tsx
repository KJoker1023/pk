import React from 'react';
import { MarkdownRenderer } from '../components/MarkdownRenderer';

const privacyContent = `
# Privacy Policy

*Last updated: January 2025*

## Introduction

At Pesa Kwanza, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our services.

## Information We Collect

### Personal Information
- **Identity Information**: Full name, date of birth, government-issued ID number
- **Contact Information**: Phone number, email address, residential address
- **Financial Information**: Income details, employment information, bank account details
- **Credit Information**: Credit history and score information

### Technical Information
- **Device Information**: IP address, browser type, operating system
- **Usage Data**: How you interact with our website and services
- **Cookies**: Small files stored on your device to improve user experience

## How We Use Your Information

We use your personal information for the following purposes:

### Loan Processing
- **Application Review**: Assessing your eligibility for loans
- **Identity Verification**: Confirming your identity and preventing fraud
- **Credit Assessment**: Evaluating your creditworthiness
- **Decision Making**: Making loan approval and terms decisions

### Service Delivery
- **Account Management**: Managing your loan account and payments
- **Customer Support**: Providing assistance and resolving issues
- **Communications**: Sending important updates about your loan
- **Legal Compliance**: Meeting regulatory and legal requirements

### Service Improvement
- **Analytics**: Understanding how customers use our services
- **Product Development**: Improving and developing new features
- **Risk Management**: Identifying and preventing fraud

## Information Sharing

We may share your information with:

### Service Providers
- **Credit Bureaus**: For credit checks and reporting
- **Payment Processors**: For processing loan disbursements and repayments
- **Technology Partners**: For secure data processing and storage
- **Legal Advisors**: For legal compliance and advice

### Regulatory Bodies
- **Government Agencies**: As required by law
- **Financial Regulators**: For compliance reporting
- **Law Enforcement**: When legally obligated

### Business Partners
- **Referral Partners**: With your consent for referral services
- **Marketing Partners**: For promotional activities (with your consent)

## Data Security

We implement robust security measures to protect your information:

### Technical Safeguards
- **Encryption**: All sensitive data is encrypted in transit and at rest
- **Access Controls**: Strict access controls limit who can view your information
- **Monitoring**: Continuous monitoring for security threats
- **Regular Updates**: Regular security updates and patches

### Organizational Safeguards
- **Employee Training**: Regular privacy and security training for all staff
- **Background Checks**: Comprehensive background checks for employees
- **Confidentiality Agreements**: All employees sign confidentiality agreements
- **Incident Response**: Established procedures for security incidents

## Your Rights

You have the following rights regarding your personal information:

### Access and Correction
- **Right to Access**: Request copies of your personal information
- **Right to Correction**: Request correction of inaccurate information
- **Right to Updates**: Update your information at any time

### Control and Deletion
- **Right to Deletion**: Request deletion of your information (subject to legal requirements)
- **Right to Restriction**: Request limitation on how we use your information
- **Right to Object**: Object to certain uses of your information

### Data Portability
- **Right to Portability**: Request your data in a portable format
- **Transfer Rights**: Transfer your data to another service provider

## Cookies and Tracking

### Types of Cookies
We use different types of cookies:

- **Essential Cookies**: Necessary for website functionality
- **Analytics Cookies**: Help us understand website usage
- **Marketing Cookies**: Used for personalized advertising (with consent)

### Cookie Control
You can control cookies through:
- Browser settings to block or delete cookies
- Our cookie preference center
- Opt-out tools for marketing cookies

## Data Retention

We retain your information for different periods:

### Active Customers
- **Account Information**: While your account is active
- **Transaction Records**: For the duration of the loan plus legal requirements
- **Communication Records**: For customer service quality and legal purposes

### Former Customers
- **Financial Records**: As required by financial regulations (typically 7 years)
- **Identity Information**: As required for compliance purposes
- **Marketing Preferences**: Until you withdraw consent

## International Transfers

If we transfer your information internationally:

### Safeguards
- **Adequate Protection**: Only to countries with adequate data protection
- **Contractual Protections**: Using standard contractual clauses
- **Certification Programs**: Through recognized certification programs

## Children's Privacy

- We do not knowingly collect information from children under 18
- If we discover we have collected such information, we will delete it promptly
- Parents may contact us to request deletion of their child's information

## Changes to This Policy

### Updates
- We may update this policy to reflect changes in our practices
- Material changes will be notified through email or website notice
- Continued use after changes constitutes acceptance

### Version Control
- Each version will be dated and archived
- Previous versions available upon request

## Contact Information

For privacy-related questions or concerns:

### Privacy Officer
- **Email**: privacy@pesakwanza.com
- **Phone**: +1 (555) 123-4567
- **Mail**: Privacy Officer, Pesa Kwanza, 123 Finance Street, City, State 12345

### Response Times
- We aim to respond to privacy requests within 30 days
- Complex requests may require additional time
- We will keep you informed of any delays

## Regulatory Information

This privacy policy complies with applicable privacy laws and regulations. For specific regulatory questions, please contact our compliance team at compliance@pesakwanza.com.

---

*This privacy policy is designed to be transparent and comprehensive. If you have any questions about how we handle your personal information, please don't hesitate to contact us.*
`;

export const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-xl text-blue-100">
            How we collect, use, and protect your personal information
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <MarkdownRenderer 
            content={privacyContent}
            className="prose-lg prose-headings:text-gray-900 prose-headings:font-bold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:text-gray-700 prose-p:leading-relaxed prose-ul:text-gray-700 prose-li:text-gray-700 prose-strong:text-gray-900"
          />
        </div>
      </section>
    </div>
  );
};
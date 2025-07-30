<script setup lang="ts">
// SEO Meta
useHead({
  title: "Privacy Policy - Muhammad Ubaid Raza",
  meta: [
    {
      name: "description",
      content:
        "Privacy policy for mubaidr.js.org - Learn how I collect, use, and protect your personal information on my website.",
    },
    {
      property: "og:title",
      content: "Privacy Policy - Muhammad Ubaid Raza",
    },
    {
      property: "og:description",
      content:
        "Privacy policy for mubaidr.js.org - Learn how I collect, use, and protect your personal information on my website.",
    },
    {
      name: "robots",
      content: "index, follow",
    },
  ],
})

// Last updated date
const lastUpdated = ref("December 1, 2024")
</script>

<template>
  <div>
    <!-- Breadcrumb -->
    <Breadcrumb />

    <div class="max-w-4xl mx-auto py-16 px-4 md:px-8 space-y-8">
      <!-- Header -->
      <div class="text-center space-y-4">
        <h1>Privacy Policy</h1>
        <p class="max-w-2xl mx-auto">
          This privacy policy explains how I collect, use, and protect your
          information when you visit my website.
        </p>
        <p>Last updated: {{ lastUpdated }}</p>
      </div>

      <!-- Privacy Policy Content -->
      <div class="space-y-8">
        <!-- Introduction -->
        <UCard class="modern-card glass">
          <div class="space-y-4">
            <h2 class="flex items-center gap-3">
              <UIcon name="i-ph-shield-check" />
              Introduction
            </h2>
            <p>
              Welcome to mubaidr.js.org ("I," "my," or "me"). This privacy
              policy explains how Muhammad Ubaid Raza collects, uses, and
              protects your personal information when you visit my website or
              use my services. I are committed to protecting your privacy and
              ensuring transparency about my data practices.
            </p>
            <p>
              By using my website, you consent to the collection and use of
              information in accordance with this policy. If you do not agree
              with this policy, please do not use my website.
            </p>
          </div>
        </UCard>

        <!-- Information I Collect -->
        <UCard class="modern-card glass">
          <div class="space-y-6">
            <h2 class="flex items-center gap-3">
              <UIcon name="i-ph-database" />
              Information I Collect
            </h2>

            <div class="space-y-4">
              <h3>Information You Provide Directly</h3>
              <ul class="space-y-2">
                <li class="flex items-start gap-2">
                  <UIcon name="i-ph-check" class="w-4 h-4 mt-1 flex-shrink-0" />
                  <span
                    ><strong>Contact Information:</strong> Name, email address,
                    and message content when you use my contact form</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <UIcon name="i-ph-check" />
                  <span
                    ><strong>Project Inquiries:</strong> Business information,
                    project requirements, and budget details you share</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <UIcon name="i-ph-check" class="w-4 h-4 mt-1 flex-shrink-0" />
                  <span
                    ><strong>Newsletter Subscription:</strong> Email address if
                    you subscribe to my newsletter or updates</span
                  >
                </li>
              </ul>
            </div>

            <div class="space-y-4">
              <h3>Information Collected Automatically</h3>
              <ul class="space-y-2">
                <li class="flex items-start gap-2">
                  <UIcon name="i-ph-check" class="w-4 h-4 mt-1 flex-shrink-0" />
                  <span
                    ><strong>Usage Data:</strong> Pages visited, time spent on
                    site, click patterns, and navigation paths</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <UIcon name="i-ph-check" class="w-4 h-4 mt-1 flex-shrink-0" />
                  <span
                    ><strong>Device Information:</strong> Browser type,
                    operating system, device type, and screen resolution</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <UIcon name="i-ph-check" class="w-4 h-4 mt-1 flex-shrink-0" />
                  <span
                    ><strong>Location Data:</strong> General geographic location
                    based on IP address</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <UIcon name="i-ph-check" class="w-4 h-4 mt-1 flex-shrink-0" />
                  <span
                    ><strong>Referral Information:</strong> Website or search
                    engine that referred you to my site</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </UCard>

        <!-- How I Use Your Information -->
        <UCard class="modern-card glass">
          <div class="space-y-4">
            <h2 class="flex items-center gap-3">
              <UIcon name="i-ph-gear" />
              How I Use Your Information
            </h2>
            <p>I use the collected information for the following purposes:</p>
            <ul class="space-y-2">
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-ph-arrow-right"
                  class="w-4 h-4 mt-1 flex-shrink-0"
                />
                <span
                  ><strong>Communication:</strong> Respond to your inquiries,
                  provide project quotes, and maintain professional
                  correspondence</span
                >
              </li>
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-ph-arrow-right"
                  class="w-4 h-4 mt-1 flex-shrink-0"
                />
                <span
                  ><strong>Website Improvement:</strong> Analyze usage patterns
                  to enhance user experience and optimize content</span
                >
              </li>
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-ph-arrow-right"
                  class="w-4 h-4 mt-1 flex-shrink-0"
                />
                <span
                  ><strong>Marketing:</strong> Send relevant updates about
                  services, blog posts, and industry insights (with your
                  consent)</span
                >
              </li>
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-ph-arrow-right"
                  class="w-4 h-4 mt-1 flex-shrink-0"
                />
                <span
                  ><strong>Legal Compliance:</strong> Maintain records as
                  required by law and protect against fraudulent
                  activities</span
                >
              </li>
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-ph-arrow-right"
                  class="w-4 h-4 mt-1 flex-shrink-0"
                />
                <span
                  ><strong>Service Delivery:</strong> Manage projects, deliver
                  contracted services, and provide technical support</span
                >
              </li>
            </ul>
          </div>
        </UCard>

        <!-- Cookies and Tracking -->
        <UCard class="modern-card glass">
          <div class="space-y-4">
            <h2 class="flex items-center gap-3">
              <UIcon name="i-ph-cookie" />
              Cookies and Tracking Technologies
            </h2>
            <p>
              I use cookies and similar tracking technologies to enhance your
              browsing experience:
            </p>
            <div class="grid gap-4 md:grid-cols-2">
              <div class="space-y-2">
                <h3>Essential Cookies</h3>
                <p>
                  Required for website functionality, security, and user
                  preferences (theme, language settings).
                </p>
              </div>
              <div class="space-y-2">
                <h3>Analytics Cookies</h3>
                <p>
                  Help me understand how visitors interact with my website to
                  improve user experience.
                </p>
              </div>
            </div>
            <UAlert
              icon="i-ph-info"
              color="primary"
              variant="soft"
              title="Cookie Management"
              description="You can control cookie preferences through your browser settings. Note that disabling certain cookies may affect website functionality."
            />
          </div>
        </UCard>

        <!-- Third-Party Services -->
        <UCard class="modern-card glass">
          <div class="space-y-4">
            <h2 class="flex items-center gap-3">
              <UIcon name="i-ph-link" />
              Third-Party Services
            </h2>
            <p>
              my website integrates with third-party services that have their
              own privacy policies:
            </p>
            <div class="grid gap-4 md:grid-cols-2">
              <div class="p-4">
                <h3 class="mb-2">Analytics</h3>
                <p class="mb-3">
                  I may use Google Analytics or similar services to track
                  website usage and performance.
                </p>
                <UButton
                  to="https://policies.google.com/privacy"
                  external
                  variant="ghost"
                  size="xs"
                >
                  Google Privacy Policy
                  <UIcon name="i-ph-arrow-square-out" />
                </UButton>
              </div>
              <div class="p-4">
                <h3 class="mb-2">Email Services</h3>
                <p class="mb-3">
                  Contact forms and newsletters may be processed through email
                  service providers.
                </p>
                <p>
                  Service providers are carefully selected for GDPR compliance.
                </p>
              </div>
            </div>
          </div>
        </UCard>

        <!-- Data Security -->
        <UCard class="modern-card glass">
          <div class="space-y-4">
            <h2 class="flex items-center gap-3">
              <UIcon name="i-ph-lock" />
              Data Security
            </h2>
            <p>
              I implement appropriate security measures to protect your personal
              information:
            </p>
            <div class="grid gap-4 md:grid-cols-3">
              <div class="text-center p-4">
                <UIcon name="i-ph-shield-check" />
                <h3 class="mb-1">Encryption</h3>
                <p>HTTPS encryption for all data transmission</p>
              </div>
              <div class="text-center p-4">
                <UIcon name="i-ph-database" />
                <h3 class="mb-1">Secure Storage</h3>
                <p>Data stored on secure, encrypted servers</p>
              </div>
              <div class="text-center p-4">
                <UIcon name="i-ph-users" />
                <h3 class="mb-1">Access Control</h3>
                <p>Limited access on need-to-know basis</p>
              </div>
            </div>
          </div>
        </UCard>

        <!-- Your Rights -->
        <UCard class="modern-card glass">
          <div class="space-y-4">
            <h2 class="flex items-center gap-3">
              <UIcon name="i-ph-scales" />
              Your Rights and Choices
            </h2>
            <p>
              You have the following rights regarding your personal information:
            </p>
            <div class="grid gap-4 md:grid-cols-2">
              <ul class="space-y-2">
                <li class="flex items-start gap-2">
                  <UIcon name="i-ph-eye" />
                  <span
                    ><strong>Access:</strong> Request a copy of personal data I
                    hold about you</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <UIcon name="i-ph-pencil" />
                  <span
                    ><strong>Rectification:</strong> Request correction of
                    inaccurate information</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <UIcon name="i-ph-trash" />
                  <span
                    ><strong>Erasure:</strong> Request deletion of your personal
                    data</span
                  >
                </li>
              </ul>
              <ul class="space-y-2">
                <li class="flex items-start gap-2">
                  <UIcon name="i-ph-download" />
                  <span
                    ><strong>Portability:</strong> Request data in a
                    machine-readable format</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <UIcon name="i-ph-prohibit" />
                  <span
                    ><strong>Objection:</strong> Object to processing of your
                    personal data</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <UIcon name="i-ph-x-circle" />
                  <span
                    ><strong>Withdraw Consent:</strong> Withdraw consent for
                    marketing communications</span
                  >
                </li>
              </ul>
            </div>
            <UAlert
              icon="i-ph-envelope"
              color="primary"
              variant="soft"
              title="Exercise Your Rights"
              description="To exercise any of these rights, please contact me at hello@mubaidr.js.org. I will respond within 30 days."
            />
          </div>
        </UCard>

        <!-- Data Retention -->
        <UCard class="modern-card glass">
          <div class="space-y-4">
            <h2 class="flex items-center gap-3">
              <UIcon name="i-ph-clock" class="w-6 h-6" />
              Data Retention
            </h2>
            <p>
              I retain your personal information only as long as necessary for
              the purposes outlined in this policy:
            </p>
            <div class="space-y-3">
              <div class="flex items-center justify-between p-3">
                <span>Contact form submissions</span>
                <span>2 years</span>
              </div>
              <div class="flex items-center justify-between p-3">
                <span>Analytics data</span>
                <span>26 months</span>
              </div>
              <div class="flex items-center justify-between p-3">
                <span>Newsletter subscriptions</span>
                <span>Until unsubscribed</span>
              </div>
              <div class="flex items-center justify-between p-3">
                <span>Project-related communications</span>
                <span>5 years</span>
              </div>
            </div>
          </div>
        </UCard>

        <!-- Children's Privacy -->
        <UCard class="modern-card glass">
          <div class="space-y-4">
            <h2 class="flex items-center gap-3">
              <UIcon name="i-ph-baby" class="w-6 h-6" />
              Children's Privacy
            </h2>
            <p>
              my website is not intended for children under 13 years of age. I
              do not knowingly collect personal information from children under
              13. If you are a parent or guardian and believe your child has
              provided me with personal information, please contact me
              immediately so I can delete such information.
            </p>
          </div>
        </UCard>

        <!-- Changes to Privacy Policy -->
        <UCard class="modern-card glass">
          <div class="space-y-4">
            <h2 class="flex items-center gap-3">
              <UIcon name="i-ph-bell" class="w-6 h-6" />
              Changes to This Privacy Policy
            </h2>
            <p>
              I may update this privacy policy from time to time to reflect
              changes in my practices or legal requirements. I will notify you
              of any material changes by:
            </p>
            <ul class="space-y-2">
              <li class="flex items-start gap-2">
                <UIcon name="i-ph-check" class="w-4 h-4 mt-1 flex-shrink-0" />
                <span
                  >Posting the updated policy on this page with a new "Last
                  Updated" date</span
                >
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-ph-check" class="w-4 h-4 mt-1 flex-shrink-0" />
                <span
                  >Sending an email notification to subscribers (for significant
                  changes)</span
                >
              </li>
              <li class="flex items-start gap-2">
                <UIcon name="i-ph-check" class="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Displaying a prominent notice on my website</span>
              </li>
            </ul>
          </div>
        </UCard>

        <!-- Contact Information -->
        <UCard class="modern-card glass">
          <div class="space-y-4">
            <h2 class="flex items-center gap-3">
              <UIcon name="i-ph-envelope" />
              Contact me
            </h2>
            <p>
              If you have any questions about this privacy policy or my data
              practices, please contact me:
            </p>
            <div class="grid gap-4 md:grid-cols-3">
              <div class="flex items-center gap-3 p-3">
                <UIcon name="i-ph-envelope" />
                <div>
                  <p>Email</p>
                  <p>hello@mubaidr.js.org</p>
                </div>
              </div>
              <div class="flex items-center gap-3 p-3">
                <UIcon name="i-ph-globe" />
                <div>
                  <p>Website</p>
                  <p>mubaidr.js.org</p>
                </div>
              </div>
              <div class="flex items-center gap-3 p-3">
                <UIcon name="i-ph-clock" />
                <div>
                  <p>Response Time</p>
                  <p>Within 30 days</p>
                </div>
              </div>
            </div>
          </div>
        </UCard>

        <!-- Call to Action -->
        <UCard class="modern-card glass text-center">
          <div class="space-y-6">
            <div class="space-y-3">
              <UIcon name="i-ph-shield-check" />
              <h3>Questions About Your Privacy?</h3>
              <p class="max-w-2xl mx-auto">
                I'm committed to protecting your privacy and being transparent
                about my data practices. Don't hesitate to reach out if you have
                any concerns.
              </p>
            </div>

            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <UButton to="/contact" size="xl" variant="outline">
                <UIcon name="i-ph-envelope" />
                Contact Me
              </UButton>
              <UButton to="/" size="xl" variant="ghost">
                <UIcon name="i-ph-house" />
                Back to Home
              </UButton>
            </div>
          </div>
        </UCard>
      </div>
    </div>
  </div>
</template>

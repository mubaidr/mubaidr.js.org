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

    <div class="max-w-4xl mx-auto space-y-8">
      <!-- Header -->
      <div class="text-center space-y-4">
        <h1 class="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          This privacy policy explains how I collect, use, and protect your
          information when you visit my website.
        </p>
        <p class="text-sm text-gray-500 dark:text-gray-500">
          Last updated: {{ lastUpdated }}
        </p>
      </div>

      <!-- Privacy Policy Content -->
      <div class="space-y-8">
        <!-- Introduction -->
        <UCard variant="soft">
          <div class="space-y-4">
            <h2 class="text-2xl font-semibold flex items-center gap-3">
              <UIcon name="i-ph-shield-check" class="w-6 h-6 text-primary" />
              Introduction
            </h2>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              Welcome to mubaidr.js.org ("I," "my," or "me"). This privacy
              policy explains how Muhammad Ubaid Raza collects, uses, and
              protects your personal information when you visit my website or
              use my services. I are committed to protecting your privacy and
              ensuring transparency about my data practices.
            </p>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              By using my website, you consent to the collection and use of
              information in accordance with this policy. If you do not agree
              with this policy, please do not use my website.
            </p>
          </div>
        </UCard>

        <!-- Information I Collect -->
        <UCard variant="soft">
          <div class="space-y-6">
            <h2 class="text-2xl font-semibold flex items-center gap-3">
              <UIcon name="i-ph-database" class="w-6 h-6 text-primary" />
              Information I Collect
            </h2>

            <div class="space-y-4">
              <h3 class="text-lg font-medium">
                Information You Provide Directly
              </h3>
              <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                <li class="flex items-start gap-2">
                  <UIcon
                    name="i-ph-check"
                    class="w-4 h-4 text-primary mt-1 flex-shrink-0"
                  />
                  <span
                    ><strong>Contact Information:</strong> Name, email address,
                    and message content when you use my contact form</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <UIcon
                    name="i-ph-check"
                    class="w-4 h-4 text-primary mt-1 flex-shrink-0"
                  />
                  <span
                    ><strong>Project Inquiries:</strong> Business information,
                    project requirements, and budget details you share</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <UIcon
                    name="i-ph-check"
                    class="w-4 h-4 text-primary mt-1 flex-shrink-0"
                  />
                  <span
                    ><strong>Newsletter Subscription:</strong> Email address if
                    you subscribe to my newsletter or updates</span
                  >
                </li>
              </ul>
            </div>

            <div class="space-y-4">
              <h3 class="text-lg font-medium">
                Information Collected Automatically
              </h3>
              <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                <li class="flex items-start gap-2">
                  <UIcon
                    name="i-ph-check"
                    class="w-4 h-4 text-primary mt-1 flex-shrink-0"
                  />
                  <span
                    ><strong>Usage Data:</strong> Pages visited, time spent on
                    site, click patterns, and navigation paths</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <UIcon
                    name="i-ph-check"
                    class="w-4 h-4 text-primary mt-1 flex-shrink-0"
                  />
                  <span
                    ><strong>Device Information:</strong> Browser type,
                    operating system, device type, and screen resolution</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <UIcon
                    name="i-ph-check"
                    class="w-4 h-4 text-primary mt-1 flex-shrink-0"
                  />
                  <span
                    ><strong>Location Data:</strong> General geographic location
                    based on IP address</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <UIcon
                    name="i-ph-check"
                    class="w-4 h-4 text-primary mt-1 flex-shrink-0"
                  />
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
        <UCard variant="soft">
          <div class="space-y-4">
            <h2 class="text-2xl font-semibold flex items-center gap-3">
              <UIcon name="i-ph-gear" class="w-6 h-6 text-primary" />
              How I Use Your Information
            </h2>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              I use the collected information for the following purposes:
            </p>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300">
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-ph-arrow-right"
                  class="w-4 h-4 text-primary mt-1 flex-shrink-0"
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
                  class="w-4 h-4 text-primary mt-1 flex-shrink-0"
                />
                <span
                  ><strong>Website Improvement:</strong> Analyze usage patterns
                  to enhance user experience and optimize content</span
                >
              </li>
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-ph-arrow-right"
                  class="w-4 h-4 text-primary mt-1 flex-shrink-0"
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
                  class="w-4 h-4 text-primary mt-1 flex-shrink-0"
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
                  class="w-4 h-4 text-primary mt-1 flex-shrink-0"
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
        <UCard variant="soft">
          <div class="space-y-4">
            <h2 class="text-2xl font-semibold flex items-center gap-3">
              <UIcon name="i-ph-cookie" class="w-6 h-6 text-primary" />
              Cookies and Tracking Technologies
            </h2>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              I use cookies and similar tracking technologies to enhance your
              browsing experience:
            </p>
            <div class="grid gap-4 md:grid-cols-2">
              <div class="space-y-2">
                <h3 class="font-medium">Essential Cookies</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
                  Required for website functionality, security, and user
                  preferences (theme, language settings).
                </p>
              </div>
              <div class="space-y-2">
                <h3 class="font-medium">Analytics Cookies</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400">
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
        <UCard variant="soft">
          <div class="space-y-4">
            <h2 class="text-2xl font-semibold flex items-center gap-3">
              <UIcon name="i-ph-link" class="w-6 h-6 text-primary" />
              Third-Party Services
            </h2>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              my website integrates with third-party services that have their
              own privacy policies:
            </p>
            <div class="grid gap-4 md:grid-cols-2">
              <div class="p-4 bg-gray-50 dark:bg-gray-800/50">
                <h3 class="font-medium mb-2">Analytics</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
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
              <div class="p-4 bg-gray-50 dark:bg-gray-800/50">
                <h3 class="font-medium mb-2">Email Services</h3>
                <p class="text-sm text-gray-600 dark:text-gray-400 mb-3">
                  Contact forms and newsletters may be processed through email
                  service providers.
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-500">
                  Service providers are carefully selected for GDPR compliance.
                </p>
              </div>
            </div>
          </div>
        </UCard>

        <!-- Data Security -->
        <UCard variant="soft">
          <div class="space-y-4">
            <h2 class="text-2xl font-semibold flex items-center gap-3">
              <UIcon name="i-ph-lock" class="w-6 h-6 text-primary" />
              Data Security
            </h2>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              I implement appropriate security measures to protect your personal
              information:
            </p>
            <div class="grid gap-4 md:grid-cols-3">
              <div class="text-center p-4 bg-gray-50 dark:bg-gray-800/50">
                <UIcon
                  name="i-ph-shield-check"
                  class="w-8 h-8 text-primary mx-auto mb-2"
                />
                <h3 class="font-medium mb-1">Encryption</h3>
                <p class="text-xs text-gray-600 dark:text-gray-400">
                  HTTPS encryption for all data transmission
                </p>
              </div>
              <div class="text-center p-4 bg-gray-50 dark:bg-gray-800/50">
                <UIcon
                  name="i-ph-database"
                  class="w-8 h-8 text-blue-500 mx-auto mb-2"
                />
                <h3 class="font-medium mb-1">Secure Storage</h3>
                <p class="text-xs text-gray-600 dark:text-gray-400">
                  Data stored on secure, encrypted servers
                </p>
              </div>
              <div class="text-center p-4 bg-gray-50 dark:bg-gray-800/50">
                <UIcon
                  name="i-ph-users"
                  class="w-8 h-8 text-purple-500 mx-auto mb-2"
                />
                <h3 class="font-medium mb-1">Access Control</h3>
                <p class="text-xs text-gray-600 dark:text-gray-400">
                  Limited access on need-to-know basis
                </p>
              </div>
            </div>
          </div>
        </UCard>

        <!-- Your Rights -->
        <UCard variant="soft">
          <div class="space-y-4">
            <h2 class="text-2xl font-semibold flex items-center gap-3">
              <UIcon name="i-ph-scales" class="w-6 h-6 text-primary" />
              Your Rights and Choices
            </h2>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              You have the following rights regarding your personal information:
            </p>
            <div class="grid gap-4 md:grid-cols-2">
              <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                <li class="flex items-start gap-2">
                  <UIcon
                    name="i-ph-eye"
                    class="w-4 h-4 text-blue-500 mt-1 flex-shrink-0"
                  />
                  <span
                    ><strong>Access:</strong> Request a copy of personal data I
                    hold about you</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <UIcon
                    name="i-ph-pencil"
                    class="w-4 h-4 text-primary mt-1 flex-shrink-0"
                  />
                  <span
                    ><strong>Rectification:</strong> Request correction of
                    inaccurate information</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <UIcon
                    name="i-ph-trash"
                    class="w-4 h-4 text-red-500 mt-1 flex-shrink-0"
                  />
                  <span
                    ><strong>Erasure:</strong> Request deletion of your personal
                    data</span
                  >
                </li>
              </ul>
              <ul class="space-y-2 text-gray-700 dark:text-gray-300">
                <li class="flex items-start gap-2">
                  <UIcon
                    name="i-ph-download"
                    class="w-4 h-4 text-purple-500 mt-1 flex-shrink-0"
                  />
                  <span
                    ><strong>Portability:</strong> Request data in a
                    machine-readable format</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <UIcon
                    name="i-ph-prohibit"
                    class="w-4 h-4 text-orange-500 mt-1 flex-shrink-0"
                  />
                  <span
                    ><strong>Objection:</strong> Object to processing of your
                    personal data</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <UIcon
                    name="i-ph-x-circle"
                    class="w-4 h-4 text-gray-500 mt-1 flex-shrink-0"
                  />
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
        <UCard variant="soft">
          <div class="space-y-4">
            <h2 class="text-2xl font-semibold flex items-center gap-3">
              <UIcon name="i-ph-clock" class="w-6 h-6 text-primary" />
              Data Retention
            </h2>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              I retain your personal information only as long as necessary for
              the purposes outlined in this policy:
            </p>
            <div class="space-y-3">
              <div
                class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50"
              >
                <span class="text-gray-700 dark:text-gray-300"
                  >Contact form submissions</span
                >
                <span class="text-sm font-medium text-primary">2 years</span>
              </div>
              <div
                class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50"
              >
                <span class="text-gray-700 dark:text-gray-300"
                  >Analytics data</span
                >
                <span class="text-sm font-medium text-primary">26 months</span>
              </div>
              <div
                class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50"
              >
                <span class="text-gray-700 dark:text-gray-300"
                  >Newsletter subscriptions</span
                >
                <span class="text-sm font-medium text-primary"
                  >Until unsubscribed</span
                >
              </div>
              <div
                class="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800/50"
              >
                <span class="text-gray-700 dark:text-gray-300"
                  >Project-related communications</span
                >
                <span class="text-sm font-medium text-primary">5 years</span>
              </div>
            </div>
          </div>
        </UCard>

        <!-- Children's Privacy -->
        <UCard variant="soft">
          <div class="space-y-4">
            <h2 class="text-2xl font-semibold flex items-center gap-3">
              <UIcon name="i-ph-baby" class="w-6 h-6 text-primary" />
              Children's Privacy
            </h2>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              my website is not intended for children under 13 years of age. I
              do not knowingly collect personal information from children under
              13. If you are a parent or guardian and believe your child has
              provided me with personal information, please contact me
              immediately so I can delete such information.
            </p>
          </div>
        </UCard>

        <!-- Changes to Privacy Policy -->
        <UCard variant="soft">
          <div class="space-y-4">
            <h2 class="text-2xl font-semibold flex items-center gap-3">
              <UIcon name="i-ph-bell" class="w-6 h-6 text-primary" />
              Changes to This Privacy Policy
            </h2>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              I may update this privacy policy from time to time to reflect
              changes in my practices or legal requirements. I will notify you
              of any material changes by:
            </p>
            <ul class="space-y-2 text-gray-700 dark:text-gray-300">
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-ph-check"
                  class="w-4 h-4 text-primary mt-1 flex-shrink-0"
                />
                <span
                  >Posting the updated policy on this page with a new "Last
                  Updated" date</span
                >
              </li>
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-ph-check"
                  class="w-4 h-4 text-primary mt-1 flex-shrink-0"
                />
                <span
                  >Sending an email notification to subscribers (for significant
                  changes)</span
                >
              </li>
              <li class="flex items-start gap-2">
                <UIcon
                  name="i-ph-check"
                  class="w-4 h-4 text-primary mt-1 flex-shrink-0"
                />
                <span>Displaying a prominent notice on my website</span>
              </li>
            </ul>
          </div>
        </UCard>

        <!-- Contact Information -->
        <UCard variant="soft">
          <div class="space-y-4">
            <h2 class="text-2xl font-semibold flex items-center gap-3">
              <UIcon name="i-ph-envelope" class="w-6 h-6 text-primary" />
              Contact me
            </h2>
            <p class="text-gray-700 dark:text-gray-300 leading-relaxed">
              If you have any questions about this privacy policy or my data
              practices, please contact me:
            </p>
            <div class="grid gap-4 md:grid-cols-3">
              <div
                class="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800/50"
              >
                <UIcon name="i-ph-envelope" class="w-5 h-5 text-primary" />
                <div>
                  <p class="text-sm font-medium">Email</p>
                  <p class="text-xs text-gray-600 dark:text-gray-400">
                    hello@mubaidr.js.org
                  </p>
                </div>
              </div>
              <div
                class="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800/50"
              >
                <UIcon name="i-ph-globe" class="w-5 h-5 text-primary" />
                <div>
                  <p class="text-sm font-medium">Website</p>
                  <p class="text-xs text-gray-600 dark:text-gray-400">
                    mubaidr.js.org
                  </p>
                </div>
              </div>
              <div
                class="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800/50"
              >
                <UIcon name="i-ph-clock" class="w-5 h-5 text-primary" />
                <div>
                  <p class="text-sm font-medium">Response Time</p>
                  <p class="text-xs text-gray-600 dark:text-gray-400">
                    Within 30 days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </UCard>

        <!-- Call to Action -->
        <div
          class="text-center py-8 bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20"
        >
          <h3 class="text-xl font-semibold mb-4">
            Questions About Your Privacy?
          </h3>
          <p class="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            I're committed to protecting your privacy and being transparent
            about my data practices. Don't hesitate to reach out if you have any
            concerns.
          </p>
          <UButton to="/contact" size="lg" variant="solid">
            <UIcon name="i-ph-envelope" />
            Contact me
          </UButton>
        </div>
      </div>
    </div>
  </div>
</template>

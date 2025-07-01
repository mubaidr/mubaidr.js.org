<script setup lang="ts">
// SEO Meta
useHead({
  title: "Terms of Service - Muhammad Ubaid Raza",
  meta: [
    {
      name: "description",
      content:
        "Terms of service for mubaidr.js.org - Learn about my service terms, client agreements, and professional guidelines for working together.",
    },
    {
      property: "og:title",
      content: "Terms of Service - Muhammad Ubaid Raza",
    },
    {
      property: "og:description",
      content:
        "Terms of service for mubaidr.js.org - Learn about my service terms, client agreements, and professional guidelines for working together.",
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
        <h1 >Terms of Service</h1>
        <p class="max-w-2xl mx-auto">
          These terms govern the use of my website and the provision of my
          professional development services.
        </p>
        <p >
          Last updated: {{ lastUpdated }}
        </p>
      </div>

      <!-- Terms Content -->
      <div class="space-y-8">
        <!-- Introduction -->
        <UCard variant="soft">
          <div class="space-y-4">
            <h2 class="flex items-center gap-3">
              <UIcon name="i-ph-handshake" class="w-6 h-6" />
              Introduction
            </h2>
            <p >
              Welcome to mubaidr.js.org. These Terms of Service ("Terms") govern
              your use of my website and any professional services provided by
              Muhammad Ubaid Raza ("I," "my," or "me"). By accessing my website
              or engaging my services, you agree to be bound by these Terms.
            </p>
            <p >
              Please read these Terms carefully before using my website or
              services. If you do not agree with any part of these Terms, you
              should not use my website or engage my services.
            </p>
          </div>
        </UCard>

        <!-- Website Usage -->
        <UCard variant="soft">
          <div class="space-y-4">
            <h2 class="flex items-center gap-3">
              <UIcon name="i-ph-globe" class="w-6 h-6" />
              Website Usage
            </h2>
            <div class="space-y-4">
              <h3 >Permitted Use</h3>
              <ul class="space-y-2">
                <li class="flex items-start gap-2">
                  <UIcon
                    name="i-ph-check"
                    class="w-4 h-4 mt-1 flex-shrink-0"
                  />
                  <span
                    >Browse my portfolio and read my content for legitimate
                    business purposes</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <UIcon
                    name="i-ph-check"
                    class="w-4 h-4 mt-1 flex-shrink-0"
                  />
                  <span
                    >Contact me for professional inquiries and project
                    discussions</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <UIcon
                    name="i-ph-check"
                    class="w-4 h-4 mt-1 flex-shrink-0"
                  />
                  <span
                    >Share my content with proper attribution and linking</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <UIcon
                    name="i-ph-check"
                    class="w-4 h-4 text-primary mt-1 flex-shrink-0"
                  />
                  <span>Subscribe to my newsletter and updates</span>
                </li>
              </ul>

              <h3 >Prohibited Activities</h3>
              <ul class="space-y-2">
                <li class="flex items-start gap-2">
                  <UIcon
                    name="i-ph-x"
                    class="w-4 h-4 mt-1 flex-shrink-0"
                  />
                  <span
                    >Reproduce, copy, or redistribute my content without
                    permission</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <UIcon
                    name="i-ph-x"
                    class="w-4 h-4 mt-1 flex-shrink-0"
                  />
                  <span
                    >Use automated tools to scrape or download my content</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <UIcon
                    name="i-ph-x"
                    class="w-4 h-4 mt-1 flex-shrink-0"
                  />
                  <span>Attempt to gain unauthorized access to my systems</span>
                </li>
                <li class="flex items-start gap-2">
                  <UIcon
                    name="i-ph-x"
                    class="w-4 h-4 mt-1 flex-shrink-0"
                  />
                  <span
                    >Submit false or misleading information in contact
                    forms</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </UCard>

        <!-- Service Terms -->
        <UCard variant="soft">
          <div class="space-y-6">
            <h2 class="flex items-center gap-3">
              <UIcon name="i-ph-briefcase" class="w-6 h-6" />
              Professional Service Terms
            </h2>

            <div class="space-y-4">
              <h3 >Service Scope & Agreements</h3>
              <ul class="space-y-2">
                <li class="flex items-start gap-2">
                  <UIcon
                    name="i-ph-arrow-right"
                    class="w-4 h-4 mt-1 flex-shrink-0"
                  />
                  <span
                    ><strong>Written Agreements:</strong> All projects require a
                    signed written agreement before work begins</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <UIcon
                    name="i-ph-arrow-right"
                    class="w-4 h-4 mt-1 flex-shrink-0"
                  />
                  <span
                    ><strong>Scope Definition:</strong> Project scope,
                    deliverables, and timelines must be clearly defined in
                    writing</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <UIcon
                    name="i-ph-arrow-right"
                    class="w-4 h-4 mt-1 flex-shrink-0"
                  />
                  <span
                    ><strong>Change Requests:</strong> Any scope changes require
                    written approval and may affect timeline and cost</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <UIcon
                    name="i-ph-arrow-right"
                    class="w-4 h-4 mt-1 flex-shrink-0"
                  />
                  <span
                    ><strong>Communication:</strong> Primary communication will
                    be conducted via email and scheduled meetings</span
                  >
                </li>
              </ul>
            </div>

            <div class="space-y-4">
              <h3 >Client Responsibilities</h3>
              <ul class="space-y-2">
                <li class="flex items-start gap-2">
                  <UIcon
                    name="i-ph-users"
                    class="w-4 h-4 mt-1 flex-shrink-0"
                  />
                  <span
                    ><strong>Timely Communication:</strong> Respond to
                    project-related communications within 48 hours</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <UIcon
                    name="i-ph-users"
                    class="w-4 h-4 mt-1 flex-shrink-0"
                  />
                  <span
                    ><strong>Required Materials:</strong> Provide all necessary
                    content, assets, and access credentials promptly</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <UIcon
                    name="i-ph-users"
                    class="w-4 h-4 mt-1 flex-shrink-0"
                  />
                  <span
                    ><strong>Review & Feedback:</strong> Provide constructive
                    feedback within agreed timeframes</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <UIcon
                    name="i-ph-users"
                    class="w-4 h-4 mt-1 flex-shrink-0"
                  />
                  <span
                    ><strong>Payment Terms:</strong> Adhere to agreed payment
                    schedules and terms</span
                  >
                </li>
              </ul>
            </div>
          </div>
        </UCard>

        <!-- Payment & Billing -->
        <UCard variant="soft">
          <div class="space-y-4">
            <h2 class="flex items-center gap-3">
              <UIcon name="i-ph-credit-card" class="w-6 h-6" />
              Payment & Billing Terms
            </h2>
            <div class="grid gap-6 md:grid-cols-2">
              <div class="space-y-3">
                <h3 >Payment Structure</h3>
                <ul class="space-y-2">
                  <li class="flex items-center gap-2">
                    <UIcon name="i-ph-circle" class="w-2 h-2 text-primary" />
                    <span>50% deposit required before project start</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <UIcon name="i-ph-circle" class="w-2 h-2" />
                    <span>Progress payments for larger projects</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <UIcon name="i-ph-circle" class="w-2 h-2" />
                    <span>Final payment due upon project completion</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <UIcon name="i-ph-circle" class="w-2 h-2" />
                    <span>Hourly billing for consulting services</span>
                  </li>
                </ul>
              </div>
              <div class="space-y-3">
                <h3 >Payment Terms</h3>
                <ul class="space-y-2">
                  <li class="flex items-center gap-2">
                    <UIcon name="i-ph-circle" class="w-2 h-2" />
                    <span>Net 15 payment terms from invoice date</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <UIcon name="i-ph-circle" class="w-2 h-2" />
                    <span>Late fees apply after 30 days</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <UIcon name="i-ph-circle" class="w-2 h-2" />
                    <span>Work suspension after 45 days overdue</span>
                  </li>
                  <li class="flex items-center gap-2">
                    <UIcon name="i-ph-circle" class="w-2 h-2" />
                    <span>Bank transfer or online payment accepted</span>
                  </li>
                </ul>
              </div>
            </div>
            <UAlert
              icon="i-ph-warning"
              color="warning"
              variant="soft"
              title="Important Notice"
              description="All project work is suspended if payments become overdue. Additional fees may apply for project resumption."
            />
          </div>
        </UCard>

        <!-- Intellectual Property -->
        <UCard variant="soft">
          <div class="space-y-4">
            <h2 class="flex items-center gap-3">
              <UIcon name="i-ph-copyright" class="w-6 h-6" />
              Intellectual Property Rights
            </h2>
            <div class="space-y-4">
              <h3 >Client Work & Deliverables</h3>
              <p >
                Upon full payment, clients receive ownership of custom code and
                designs created specifically for their project. However, I
                retain the right to:
              </p>
              <ul class="space-y-2">
                <li class="flex items-start gap-2">
                  <UIcon
                    name="i-ph-check"
                    class="w-4 h-4 mt-1 flex-shrink-0"
                  />
                  <span
                    >Use general methodologies, techniques, and know-how in
                    future projects</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <UIcon
                    name="i-ph-check"
                    class="w-4 h-4 mt-1 flex-shrink-0"
                  />
                  <span
                    >Display completed work in my portfolio (with client
                    permission)</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <UIcon
                    name="i-ph-check"
                    class="w-4 h-4 mt-1 flex-shrink-0"
                  />
                  <span
                    >Reuse generic code components and libraries in other
                    projects</span
                  >
                </li>
              </ul>

              <h3 >Third-Party Resources</h3>
              <p >
                Projects may incorporate third-party libraries, frameworks, and
                resources with their own licensing terms. Clients are
                responsible for compliance with all applicable licenses.
              </p>
            </div>
          </div>
        </UCard>

        <!-- Project Delivery & Support -->
        <UCard variant="soft">
          <div class="space-y-4">
            <h2 class="flex items-center gap-3">
              <UIcon name="i-ph-rocket-launch" class="w-6 h-6" />
              Project Delivery & Support
            </h2>
            <div class="grid gap-6 md:grid-cols-2">
              <div class="space-y-3">
                <h3 >Delivery Terms</h3>
                <ul class="space-y-2">
                  <li class="flex items-start gap-2">
                    <UIcon
                      name="i-ph-clock"
                      class="w-4 h-4 mt-1 flex-shrink-0"
                    />
                    <span
                      ><strong>Timeline Estimates:</strong> Provided in good
                      faith but not guaranteed</span
                    >
                  </li>
                  <li class="flex items-start gap-2">
                    <UIcon
                      name="i-ph-clock"
                      class="w-4 h-4 mt-1 flex-shrink-0"
                    />
                    <span
                      ><strong>Testing Period:</strong> 7-day testing period for
                      bug reports</span
                    >
                  </li>
                  <li class="flex items-start gap-2">
                    <UIcon
                      name="i-ph-clock"
                      class="w-4 h-4 mt-1 flex-shrink-0"
                    />
                    <span
                      ><strong>Minor Revisions:</strong> Included within agreed
                      scope</span
                    >
                  </li>
                  <li class="flex items-start gap-2">
                    <UIcon
                      name="i-ph-clock"
                      class="w-4 h-4 text-blue-500 mt-1 flex-shrink-0"
                    />
                    <span
                      ><strong>Final Delivery:</strong> Via agreed delivery
                      method</span
                    >
                  </li>
                </ul>
              </div>
              <div class="space-y-3">
                <h3 >Support & Maintenance</h3>
                <ul class="space-y-2">
                  <li class="flex items-start gap-2">
                    <UIcon
                      name="i-ph-wrench"
                      class="w-4 h-4 mt-1 flex-shrink-0"
                    />
                    <span
                      ><strong>Bug Fixes:</strong> 30-day warranty for
                      functionality issues</span
                    >
                  </li>
                  <li class="flex items-start gap-2">
                    <UIcon
                      name="i-ph-wrench"
                      class="w-4 h-4 mt-1 flex-shrink-0"
                    />
                    <span
                      ><strong>Documentation:</strong> Basic usage documentation
                      provided</span
                    >
                  </li>
                  <li class="flex items-start gap-2">
                    <UIcon
                      name="i-ph-wrench"
                      class="w-4 h-4 mt-1 flex-shrink-0"
                    />
                    <span
                      ><strong>Training:</strong> Basic handover session
                      included</span
                    >
                  </li>
                  <li class="flex items-start gap-2">
                    <UIcon
                      name="i-ph-wrench"
                      class="w-4 h-4 mt-1 flex-shrink-0"
                    />
                    <span
                      ><strong>Extended Support:</strong> Available via separate
                      agreement</span
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </UCard>

        <!-- Liability & Warranties -->
        <UCard variant="soft">
          <div class="space-y-4">
            <h2 class="flex items-center gap-3">
              <UIcon name="i-ph-shield-warning" class="w-6 h-6" />
              Liability & Warranties
            </h2>
            <div class="space-y-4">
              <h3 >Service Warranties</h3>
              <p >
                I warrant that my services will be performed in a professional
                and workmanlike manner in accordance with industry standards.
                However, I make no warranties regarding:
              </p>
              <ul class="space-y-2">
                <li class="flex items-start gap-2">
                  <UIcon
                    name="i-ph-warning"
                    class="w-4 h-4 mt-1 flex-shrink-0"
                  />
                  <span
                    >Compatibility with future software versions or
                    updates</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <UIcon
                    name="i-ph-warning"
                    class="w-4 h-4 mt-1 flex-shrink-0"
                  />
                  <span
                    >Performance on all devices, browsers, or operating
                    systems</span
                  >
                </li>
                <li class="flex items-start gap-2">
                  <UIcon
                    name="i-ph-warning"
                    class="w-4 h-4 mt-1 flex-shrink-0"
                  />
                  <span>Specific business results or revenue outcomes</span>
                </li>
                <li class="flex items-start gap-2">
                  <UIcon
                    name="i-ph-warning"
                    class="w-4 h-4 mt-1 flex-shrink-0"
                  />
                  <span
                    >Third-party service integrations or external
                    dependencies</span
                  >
                </li>
              </ul>

              <h3 >Limitation of Liability</h3>
              <p >
                my total liability for any claims arising from my services shall
                not exceed the total amount paid for the specific project in
                question. I are not liable for any indirect, incidental, or
                consequential damages.
              </p>
            </div>
          </div>
        </UCard>

        <!-- Termination -->
        <UCard variant="soft">
          <div class="space-y-4">
            <h2 class="flex items-center gap-3">
              <UIcon name="i-ph-x-circle" class="w-6 h-6" />
              Project Termination
            </h2>
            <div class="grid gap-6 md:grid-cols-2">
              <div class="space-y-3">
                <h3 >Client Termination Rights</h3>
                <ul class="space-y-2">
                  <li class="flex items-start gap-2">
                    <UIcon
                      name="i-ph-info"
                      class="w-4 h-4 mt-1 flex-shrink-0"
                    />
                    <span>14-day written notice required for termination</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <UIcon
                      name="i-ph-info"
                      class="w-4 h-4 mt-1 flex-shrink-0"
                    />
                    <span>Payment due for all completed work</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <UIcon
                      name="i-ph-info"
                      class="w-4 h-4 mt-1 flex-shrink-0"
                    />
                    <span>Partial refund of unused deposits (minus costs)</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <UIcon
                      name="i-ph-info"
                      class="w-4 h-4 mt-1 flex-shrink-0"
                    />
                    <span>Delivery of work completed to date</span>
                  </li>
                </ul>
              </div>
              <div class="space-y-3">
                <h3 >my Termination Rights</h3>
                <ul class="space-y-2">
                  <li class="flex items-start gap-2">
                    <UIcon
                      name="i-ph-warning"
                      class="w-4 h-4 mt-1 flex-shrink-0"
                    />
                    <span>Non-payment beyond agreed terms</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <UIcon
                      name="i-ph-warning"
                      class="w-4 h-4 mt-1 flex-shrink-0"
                    />
                    <span>Lack of client communication or cooperation</span>
                  </li>
                  <li class="flex items-start gap-2">
                    <UIcon
                      name="i-ph-warning"
                      class="w-4 h-4 mt-1 flex-shrink-0"
                    />
                    <span
                      >Scope changes that fundamentally alter the project</span
                    >
                  </li>
                  <li class="flex items-start gap-2">
                    <UIcon
                      name="i-ph-warning"
                      class="w-4 h-4 text-orange-500 mt-1 flex-shrink-0"
                    />
                    <span
                      >Violation of these terms or unprofessional conduct</span
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </UCard>

        <!-- General Provisions -->
        <UCard variant="soft">
          <div class="space-y-4">
            <h2 class="flex items-center gap-3">
              <UIcon name="i-ph-gavel" class="w-6 h-6" />
              General Provisions
            </h2>
            <div class="grid gap-6 md:grid-cols-2">
              <div class="space-y-3">
                <h3 >Legal Framework</h3>
                <ul class="space-y-2">
                  <li class="flex items-start gap-2">
                    <UIcon
                      name="i-ph-scales"
                      class="w-4 h-4 mt-1 flex-shrink-0"
                    />
                    <span
                      ><strong>Governing Law:</strong> These terms are governed
                      by applicable local laws</span
                    >
                  </li>
                  <li class="flex items-start gap-2">
                    <UIcon
                      name="i-ph-scales"
                      class="w-4 h-4 mt-1 flex-shrink-0"
                    />
                    <span
                      ><strong>Dispute Resolution:</strong> Good faith
                      negotiation preferred, mediation if needed</span
                    >
                  </li>
                  <li class="flex items-start gap-2">
                    <UIcon
                      name="i-ph-scales"
                      class="w-4 h-4 mt-1 flex-shrink-0"
                    />
                    <span
                      ><strong>Severability:</strong> Invalid provisions don't
                      affect remaining terms</span
                    >
                  </li>
                </ul>
              </div>
              <div class="space-y-3">
                <h3 >Modifications</h3>
                <ul class="space-y-2">
                  <li class="flex items-start gap-2">
                    <UIcon
                      name="i-ph-bell"
                      class="w-4 h-4 mt-1 flex-shrink-0"
                    />
                    <span
                      ><strong>Updates:</strong> Terms may be updated with
                      30-day notice</span
                    >
                  </li>
                  <li class="flex items-start gap-2">
                    <UIcon
                      name="i-ph-bell"
                      class="w-4 h-4 mt-1 flex-shrink-0"
                    />
                    <span
                      ><strong>Notification:</strong> Changes communicated via
                      website and email</span
                    >
                  </li>
                  <li class="flex items-start gap-2">
                    <UIcon
                      name="i-ph-bell"
                      class="w-4 h-4 mt-1 flex-shrink-0"
                    />
                    <span
                      ><strong>Existing Projects:</strong> Current agreements
                      remain under original terms</span
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </UCard>

        <!-- Contact Information -->
        <UCard variant="soft">
          <div class="space-y-4">
            <h2 class="flex items-center gap-3">
              <UIcon name="i-ph-envelope" class="w-6 h-6" />
              Questions About These Terms
            </h2>
            <p >
              If you have any questions about these Terms of Service or need
              clarification on any provisions, please contact me before engaging
              my services.
            </p>
            <div class="grid gap-4 md:grid-cols-3">
              <div
                class="flex items-center gap-3 p-3"
              >
                <UIcon name="i-ph-envelope" class="w-5 h-5" />
                <div>
                  <p >Email</p>
                  <p >
                    hello@mubaidr.js.org
                  </p>
                </div>
              </div>
              <div
                class="flex items-center gap-3 p-3"
              >
                <UIcon name="i-ph-calendar" class="w-5 h-5" />
                <div>
                  <p >Consultation</p>
                  <p >
                    Schedule a call
                  </p>
                </div>
              </div>
              <div
                class="flex items-center gap-3 p-3"
              >
                <UIcon name="i-ph-clock" class="w-5 h-5" />
                <div>
                  <p >Response Time</p>
                  <p >
                    Within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </UCard>

        <!-- Call to Action -->
        <div
          class="text-center py-8"
        >
          <h3 class="mb-4">
            Ready to Start Your Project?
          </h3>
          <p class="mb-6 max-w-2xl mx-auto">
            Now that you understand my terms, let's discuss your project
            requirements and how I can work together to bring your ideas to
            life.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <UButton to="/contact" size="lg" variant="solid">
              <UIcon name="i-ph-envelope" />
              Start a Project
            </UButton>
            <UButton
              href="https://cal.com/mubaidr"
              external
              size="lg"
              variant="outline"
            >
              <UIcon name="i-ph-calendar" />
              Schedule Consultation
            </UButton>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

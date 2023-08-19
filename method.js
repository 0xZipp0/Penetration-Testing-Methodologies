![image](https://github.com/0xZipp0/Penetration-Testing-Methodologies/assets/73413581/869236dc-40ca-4e8a-b838-74f1fb786dff)

# Penetration-Testing-Methodologies

Penetration tests can have a wide variety of objectives and targets within scope. Because of this, no penetration test is the same, and there is no one-case fits all as to how a penetration tester should approach it.

The steps a penetration tester takes during an engagement are known as the methodology. A practical methodology is a smart one, where the steps taken are relevant to the situation at hand. For example, having a methodology that you would use to test the security of a web application is not practical when you have to test the security of a network.

Before discussing some different industry-standard methodologies, we should note that all of them have a general theme of the following stages:

| Stage | Description |
| --- | --- |
| Information Gathering | This stage involves collecting as much publically accessible information about a target/organization as possible, for example, OSINT and research. Note: This does not involve scanning any systems. |
| Enumeration/Scanning | This stage involves discovering applications and services running on the systems. For example, finding a web server that may be potentially vulnerable. |
| Exploitation | This stage involves leveraging vulnerabilities discovered on a system or application. This stage can involve the use of public exploits or exploiting application logic. |
| Privilege Escalation | Once you have successfully exploited a system or application (known as a foothold), this stage is the attempt to expand your access to a system. You can escalate horizontally and vertically, where horizontally is accessing another account of the same permission group (i.e. another user), whereas vertically is that of another permission group (i.e. an administrator). |
| Post-exploitation | This stage involves a few sub-stages:

1. What other hosts can be targeted (pivoting)
2. What additional information can we gather from the host now that we are a privileged user
3.  Covering your tracks
4. Reporting |

# **OSSTMM**

!https://tryhackme-images.s3.amazonaws.com/user-uploads/5de96d9ca744773ea7ef8c00/room-content/72a3a5b98b737f422f58b78e11e82646.png

[The Open Source Security Testing Methodology Manual](https://www.isecom.org/OSSTMM.3.pdf) provides a detailed framework of testing strategies for systems, software, applications, communications, and the human aspect of cybersecurity.

The methodology focuses primarily on how these systems, and applications communicate, so it includes a methodology for:

1. **Telecommunications (phones, VoIP, etc.)**
2. Wired Networks
3. Wireless communications

| Advantages | Disadvantages |
| --- | --- |
| Covers various testing strategies in-depth. | The framework is difficult to understand, very detailed, and tends to use unique definitions. |
| Includes testing strategies for specific targets (I.e. telecommunications and networking) | Intentionally left blank. |
| The framework is flexible depending upon the organization's needs. | Intentionally left blank. |
| The framework is meant to set a standard for systems and applications, meaning that a universal methodology can be used in a penetration testing scenario. | Intentionally left blank. |

# 1. **OWASP**

!https://tryhackme-images.s3.amazonaws.com/user-uploads/5de96d9ca744773ea7ef8c00/room-content/497e56c5522ca4932d720ae5fae32845.png

The "[Open Web Application Security Project](https://owasp.org/)" framework is a community-driven and frequently updated framework used solely to test the security of web applications and services.

The foundation regularly [writes reports](https://owasp.org/www-project-top-ten/2017/) stating the top ten security vulnerabilities a web application may have, the testing approach, and remediation.

| Advantages | Disadvantages |
| --- | --- |
| Easy to pick up and understand. | It may not be clear what type of vulnerability a web application has (they can often overlap). |
| Actively maintained and is frequently updated. | OWASP does not make suggestions to any specific software development life cycles. |
| It covers all stages of an engagement: from testing to reporting and remediation. | The framework doesn't hold any accreditation such as CHECK. |
| Specialises in web applications and services. | Intentionally left blank. |

# 2. **NIST Cybersecurity Framework 1.1**

!https://tryhackme-images.s3.amazonaws.com/user-uploads/5de96d9ca744773ea7ef8c00/room-content/8e11f5fcfc8fc6429fe35682797e2a24.jpg

The [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework) is a popular framework used to improve an organization's cybersecurity standards and manage the risk of cyber threats. This framework is a bit of an honorable mention because of its popularity and detail.

The framework provides guidelines on security controls & benchmarks for success for organizations from critical infrastructure (power plants, etc.) all through to commercial.  There is a limited section on a standard guideline for the methodology a penetration tester should take.

| Advantages | Disadvantages |
| --- | --- |
| The NIST Framework is estimated to be used by 50% of American organizations by 2020. | NIST has many iterations of frameworks, so it may be difficult to decide which one applies to your organization. |
| The framework is extremely detailed in setting standards to help organizations mitigate the threat posed by cyber threats. | The NIST framework has weak auditing policies, making it difficult to determine how a breach occurred. |
| The framework is very frequently updated. | The framework does not consider cloud computing, which is quickly becoming increasingly popular for organizations. |
| NIST provides accreditation for organizations that use this framework. | Intentionally left blank. |
| The NIST framework is designed to be implemented alongside other frameworks. | Intentionally left blank. |

# 3. **NCSC CAF**

!https://tryhackme-images.s3.amazonaws.com/user-uploads/5de96d9ca744773ea7ef8c00/room-content/6e10e0fd0b6020d42873c218e1d37044.png

The [Cyber Assessment Framework](https://www.ncsc.gov.uk/collection/caf/caf-principles-and-guidance) (CAF) is an extensive framework of fourteen principles used to assess the risk of various cyber threats and an organization's defenses against these.

The framework applies to organizations considered to perform "vitally important services and activities" such as critical infrastructure, banking, and the like. The framework mainly focuses on and assesses the following topics:

- Data security
- System Security
- Identity and access control
- Resiliency
- Monitoring
- Response and recovery planning

| Advantages | Disadvantages |
| --- | --- |
| This framework is backed by a government cybersecurity agency. | The framework is still new in the industry, meaning that organizations haven't had much time to make the necessary changes to be suitable for it. |
| This framework provides accreditation. | The framework is based on principles and ideas and isn't as direct as having rules like some other frameworks. |
| This framework covers fourteen principles which range from security to response. | Intentionally left blank. |

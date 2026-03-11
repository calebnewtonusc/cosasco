/**
 * Content for each service sub-page, aligned with www.cosasco.com/services/[slug]
 */

export type ServiceDetailContent = {
  title: string
  tagline: string
  quote?: string
  attribution?: string
  body: string[]
  features: string[]
  /** Optional extra paragraph (e.g. CDO mention on data-acquisition-analysis) */
  extra?: string
}

export const serviceDetailContent: Record<string, ServiceDetailContent> = {
  'corrosion-program-development': {
    title: 'Corrosion Program Development',
    tagline:
      'With over 70 years of distinguished corrosion monitoring experience, we can support all your program development needs.',
    quote:
      'The precision and reliability of Cosasco\'s monitoring equipment helps you determine when you have to make changes to how you operate. It can be chemical treatment, or it can be other parameters... increasing temperature, decreasing separation, etc. Having this data helps you determine what changes are needed.',
    attribution: '– Corrosion Engineer',
    body: [
      'Cosasco has a history of innovation, a portfolio of products, and application experience to support your corrosion management needs. This enables our customers to get the data they need to make the most educated decisions on their corrosion, erosion, and chemical injection equipment, saving them both time and money. Our guidance is based on 70+ years of experience committed to providing the highest quality and unique solutions for your specific needs.',
    ],
    features: [
      'Field assessments to support the identification of corrosion monitoring locations',
      'Program guidance or specification development',
      'Operation and maintenance guidelines for existing corrosion monitoring systems',
      'Design and customize access fitting assemblies ensuring appropriate metallurgy and sealing components',
      'Guidance on selecting the best intrusive and non-intrusive monitoring systems',
    ],
  },
  'preventative-maintenance': {
    title: 'Preventative Maintenance',
    tagline:
      'Optimize the life and reliability of your corrosion monitoring products with regular maintenance and troubleshooting.',
    quote:
      'Cosasco is our preferred provider; they are safe, efficient, and professional. Not only do they look after their own products, but they are able to support all our needs regardless of the manufacturer or age of the system.',
    attribution: '– Facility Integrity Manager, End User',
    body: [
      'With vital information and field data in hand, preemptive measures can be taken to reduce risks and increase the overall safety and integrity of critical assets. Our experts provide both on-site and remote support from locations across the world, whenever and wherever you need it.',
    ],
    features: [
      'Servicing and maintenance of client owned retrieval equipment',
      'Thorough examination of transmitter & datalogger battery-powered and storage reading units',
      'Pressure retaining covers (PRC) maintenance',
      'Probe element inspection & maintenance',
      'Pressure retaining seal replacements',
      'Preventative maintenance on abandoned access locations',
      'Nitrogen testing & pressure build-up tests',
      'Access fitting sealing faces & thread repairs',
      'Server maintenance',
      'Chemical injection flow rate assurance',
      'Post-service pressure testing',
    ],
  },
  'installation-commissioning': {
    title: 'Installation & Commissioning',
    tagline:
      'We safely and effectively install your corrosion monitoring products to produce quality data that is integral to your maintenance program.',
    quote:
      'Cosasco was heavily involved with the commissioning of our facility at the shipyard and then followed up for final commissioning during the platform hook-up stage. They made sure our team was fully trained and that the data was integrating into our systems.',
    attribution: '– Commissioning Engineer, Offshore Platform End User',
    body: [
      'Ensure safe and proper installation of your new corrosion monitoring systems including seamless integration of corrosion, erosion, and metal loss data into all host systems. Our service technicians are subject matter experts and deploy the latest technology with HSE quality standards to ensure adequate asset control.',
    ],
    features: [
      'Integration and automation specialists',
      'On-Site training',
      'Access to network and data communication experts',
      'Configuration and calibration of monitoring systems including data collection frequency',
      'Operations and maintenance program support',
      'Automation and integration of data into customer platforms including DCS, SCADA, PLC',
      'Cosasco Data Online (CDO) software implementation for data analytics',
    ],
  },
  'access-under-pressure': {
    title: 'Access Under Pressure',
    tagline:
      'Pioneers of access under pressure, allowing safe installations for intrusive monitoring and chemical injection for locations around the world.',
    body: [
      'Cosasco pioneered the access under pressure system over 50 years ago. We were the first and continue to be the industry leaders for quality and safety for locations around the world.',
      "Cosasco's field services team has unparalleled experience when it comes to the installation of online monitoring systems in challenging environments. Cosasco successfully completes thousands of retrieval operations safely every year across process facilities worldwide. Our field teams can install, service, and maintain systems under any condition at pressures up to 10,000 PSI for corrosion and erosion monitoring. Access under pressure not only covers corrosion monitoring services but also high specification chemical injection systems.",
    ],
    features: [
      'Access fitting repairs & refurbishment',
      'Hot & cold tapping',
      'Online & offline retrieval services',
      'Low-pressure retractable retrievals',
      'Operations on hazardous systems (H2S, Mercury, BTEX)',
      'Specialists in mechanical and hydraulic retrieval operations up to 10,000 PSI',
    ],
  },
  'data-acquisition-analysis': {
    title: 'Data Acquisition & Analysis',
    tagline:
      'Corrosion rate interpretation, coupon analysis and reporting for fast and accurate decision making.',
    quote:
      "We installed Cosasco's Microcor product and we were able to see the response of our chemical injection allowing us to optimize our dosing. The precision of the readings allowed us to optimize chemical dosing, avoid further corrosion and reduce costs.",
    attribution: '– Corrosion Engineer',
    body: [
      'Understanding the rate of corrosion of your assets in real-time is critical to making the best long-term decisions. Cosasco has the technology and expertise to collate, evaluate, and interpret your corrosion monitoring data so that you can see the complete picture, allowing for faster and more accurate decision making.',
    ],
    extra:
      'Cosasco Data Online (CDO) is a data management software with enhanced analytics designed specifically for corrosion management personnel.',
    features: [
      'Corrosion mitigation through chemical injection processes',
      'Non-intrusive wall thickness profiling',
      'Evaluation of the presence and impact of microbials/MIC',
      'Coupon analysis and reporting including pitting depth & weight loss analysis',
      'Detailed reporting of findings including recommendations',
      'Extrapolation of corrosion rate to determine asset end of life',
      'Analysis of data including historical trending and correlation of corrosion rate with additional operating conditions and chemical dosing rate changes',
    ],
  },
  'safr-web-application': {
    title: 'SAFR Web Application',
    tagline:
      'Safe Access Fitting Register is a mobile friendly, cloud-based web portal to log, track and assess all your monitoring locations.',
    body: [
      'Safe Access Fitting Register (SAFR) is a mobile friendly, cloud-based web portal that allows you to log, track, and assess the conditions of all your asset monitoring locations. While in the field, our services team deploy Cosasco SAFR smart tablets to record critical details of all monitoring points, including materials utilized, seal types installed, condition of access fitting, type of monitoring device installed, service history, and operational requirements for effective completion of services.',
    ],
    features: [
      'The client now has access to real-time status of the routine monitoring campaigns, metal loss monitoring, and chemical performance system at each location through our cloud-based web portal',
      'Intuitive dashboard, real-time reporting of corrosion rates',
      'Mitigates risk of abandoned access fittings',
      'Accurate remote GPS location capabilities for easy location of your corrosion monitoring points',
      'Record of critical details including materials utilized, seal types installed, condition of access fitting, type of monitoring device installed, service history, and operational requirements',
      'Service history, material records, current data reports are available to our field personnel and client in ONE location',
    ],
  },
}

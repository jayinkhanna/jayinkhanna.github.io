// Single source of truth for everything shown on the main pages.
// Edit facts here; pages render from this file.

export const PROFILE = {
  name: 'Jayin Khanna',
  headline: 'Researcher in safe and trustworthy generative models',
  position: 'Project Associate-I',
  affiliation: 'Deep Representation Learning Lab, Indian Institute of Science (IISc), Bangalore',
  affiliationUrl: 'https://prathosh.in/',
  // Shown as a small status chip under the name. Set to '' to hide.
  status: 'Applying to PhD and MS programs in ML · Fall 2027',
  email: 'jayin.research@gmail.com',
  github: 'https://github.com/jk-2604',
  linkedin: 'https://www.linkedin.com/in/jayin-khanna-95a027212',
  cvUrl: '/resume',
  lastUpdated: 'November 2026',
};

export const ME = 'Jayin Khanna';

export type PubStatus = 'Under Review' | 'arXiv Preprint' | 'In Preparation';

export type Publication = {
  id: string;
  short: string;
  title: string;
  authors: string[];
  /** 'first' = sole first author, 'co-first' = equal-contribution first author */
  firstAuthor?: 'first' | 'co-first';
  equalContribution?: string[];
  venue: string;
  status: PubStatus;
  /** One-sentence plain-language summary for skimmers. */
  tldr: string;
  /** Add links as they become available; only set ones are shown. */
  links?: { pdf?: string; arxiv?: string; code?: string; poster?: string };
  note?: string;
};

// First-author work first.
export const PUBLICATIONS: Publication[] = [
  {
    id: 'sculpt',
    short: 'SCULPT',
    title:
      'SCULPT: Spatially Constrained Updates via Learned Perceptual Trajectories for Safe Image Generation',
    authors: [
      'Nasrin Imanpour',
      'Jayin Khanna',
      'Renjith Prasad Kaippilly Mana',
      'Aayush Ranjan',
      'Samarth Raina',
      'Suranjana Trivedy',
      'Amit Sheth',
      'Amitava Das',
    ],
    firstAuthor: 'co-first',
    equalContribution: ['Nasrin Imanpour', 'Jayin Khanna'],
    venue: 'CVPR 2027',
    status: 'Under Review',
    tldr:
      'Learns what to correct and where to correct it in unsafe text-to-image generations, without updating the generator, so that harm is removed while benign content is preserved.',
    note: 'arXiv preprint coming soon',
  },
  {
    id: 'tsm',
    short: 'Speech TSM benchmark',
    title:
      'Evaluation of Classical and Deep Learning Speech Time-Scale Modification: A Comparative Study',
    authors: ['Jayin Khanna', 'Jesuraj Bandekar', 'Prasanta Kumar Ghosh'],
    firstAuthor: 'first',
    venue: 'JASA (Journal of the Acoustical Society of America)',
    status: 'In Preparation',
    tldr:
      'A unified, multi-condition benchmark of 10 classical and neural speech time-scale modification models: neural models win on clean audio but are far less robust than classical DSP under degraded conditions.',
    note: 'arXiv preprint coming soon',
  },
  {
    id: 'repair',
    short: 'Distilled-LM repair',
    title: 'Repairing the Trustworthiness of Distilled Language Models',
    authors: ['Kumar Shubham', 'Devendra Vyas', 'Vidushi Agarwal', 'Jayin Khanna', 'Prathosh AP'],
    venue: 'AI4GOOD Workshop @ NeurIPS 2026',
    status: 'arXiv Preprint',
    tldr:
      'Post-hoc repair of trustworthiness regressions in distilled LLMs using proxy-data curvature and a preference-based objective: up to 8% improvement with under 1% perplexity cost.',
  },
  {
    id: 'safesg',
    short: 'SafeSG',
    title: 'SafeSG: Scene-Graph Guided Repair for Safer Next-Scale Image Generation',
    authors: [
      'Samarth Raina',
      'Renjith Prasad Kaippilly Mana',
      'Aayush Ranjan',
      'Nasrin Imanpour',
      'Jayin Khanna',
      'Suranjana Trivedy',
      'Amit Sheth',
      'Amitava Das',
    ],
    venue: 'CVPR 2027',
    status: 'Under Review',
    tldr:
      'Reads a scene graph from the model’s own intermediate previews to find which objects are harmful, then repairs the image mid-generation while keeping the rest of the scene.',
    note: 'arXiv preprint coming soon',
  },
];

export const THEMES = [
  {
    title: 'Safe & controllable generative models',
    body: 'Inference-time safety for text-to-image/video diffusion and flow matching: where and how to intervene without damaging benign content.',
    papers: ['sculpt', 'safesg'],
  },
  {
    title: 'Trustworthiness & interpretability of LLMs',
    body: 'Compute-efficient, post-hoc repair of fine-tuned and distilled models; attribution methods for understanding model behaviour.',
    papers: ['repair'],
  },
  {
    title: 'Generative modelling for speech & signals',
    body: 'Rigorous evaluation and robustness of GAN, diffusion and flow-based models for speech time-scale modification (my UG thesis).',
    papers: ['tsm'],
  },
];

export type ExperienceItem = {
  id: string;
  role: string;
  org: string;
  orgUrl?: string;
  place: string;
  logo?: string;
  advisor: string;
  advisorUrl?: string;
  period: string;
  summary: string;
  bullets: string[];
  tags: string[];
  paperIds?: string[];
  current?: boolean;
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: 'iisc-drl',
    role: 'Project Associate-I',
    org: 'Deep Representation Learning Lab, IISc',
    orgUrl: 'https://prathosh.in/group.html',
    place: 'Bangalore, India',
    logo: '/images/iisc-drl-logo.png',
    advisor: 'Prof. Prathosh A. P.',
    advisorUrl: 'https://prathosh.in/',
    period: 'Jun 2026 – Present',
    current: true,
    summary: 'Trustworthiness repair for distilled and fine-tuned language models.',
    bullets: [
      'Developed a compute-efficient post-hoc repair method (EK-FAC-preconditioned gradient ascent / PBRF curvature correction) that avoids full retraining or RLHF.',
      'Estimated curvature from surrogate proxy datasets, removing dependence on the original distillation corpus; extended to preference supervision via an odds-ratio objective.',
      'Benchmarked against SFT and DPO on seven distilled models (120M–1.7B parameters): up to 8% better trustworthiness with under 1% perplexity cost.',
    ],
    tags: ['LLM trustworthiness', 'EK-FAC', 'Distillation'],
    paperIds: ['repair'],
  },
  {
    id: 'aiisc',
    role: 'Research Intern',
    org: 'AI Institute of South Carolina (AIISC) · DETONATE Group',
    orgUrl: 'https://aiisc.cse.sc.edu/',
    place: 'Remote, USA',
    logo: '/images/aiisc_logo.png',
    advisor: 'Prof. Amit Sheth & Prof. Amitava Das',
    advisorUrl: 'https://aiisc.ai/',
    period: 'Feb 2026 – Present',
    current: true,
    summary: 'Safety alignment of text-to-image and text-to-video generative models.',
    bullets: [
      'Co-first author of SCULPT, a learned spatial correction framework for safe image generation, and contributor to SafeSG, a scene-graph guided repair method.',
      'Earlier designed a training-free, safety-potential-guided rectified flow-matching method in frozen CLIP space; validated across CLIP, BLIP-ITM and EVA-CLIP-8B on 7 harm categories (I2P, DETONATE).',
      'Benchmarked TRCE, CURE, SAEUron and DoCo on the lab’s DETONATE dataset.',
    ],
    tags: ['Diffusion safety', 'Flow matching', 'Scene graphs'],
    paperIds: ['sculpt', 'safesg'],
  },
  {
    id: 'iisc-spire',
    role: 'Machine Learning Research Fellow',
    org: 'SPIRE Lab, IISc',
    orgUrl: 'https://spire.ee.iisc.ac.in/',
    place: 'Bangalore, India',
    logo: '/images/spire-lab-logo.jpg',
    advisor: 'Prof. Prasanta Kumar Ghosh',
    advisorUrl: 'https://eecs.iisc.ac.in/people/prasanta-kumar-ghosh/',
    period: 'Jul 2025 – Present',
    summary: 'Generative models for speech time-scale modification (UG thesis, 2nd Prize).',
    bullets: [
      'Implemented DiffATSM, ScalerGAN, TSM-Net and Neural ATSM from scratch in PyTorch, as no code was available for most of them.',
      'Ran 19 experiments over 10 models in 3 method families under noise, music and sampling-rate shifts; found classical DSP more robust than neural models.',
      'Currently replacing the diffusion component with rectified flows for faster inference.',
    ],
    tags: ['Speech', 'GANs', 'Diffusion', 'Flow matching'],
    paperIds: ['tsm'],
  },
  {
    id: 'iitkgp',
    role: 'Deep Learning Research Intern',
    org: 'Indian Institute of Technology Kharagpur',
    place: 'Kharagpur, India',
    logo: '/images/iit-kgp-logo.png',
    advisor: 'Prof. Niloy Ganguly',
    period: 'May – Aug 2025',
    summary: 'Attribution methods for neural-network interpretability.',
    bullets: [
      'Reproduced Integrated Gradients and Manifold IG; proposed a modification achieving lower infidelity and SENS-max than Manifold IG.',
      'Extending attribution to sequential models and LLMs (Granger causality, randomized path integrals).',
    ],
    tags: ['Interpretability', 'Attribution'],
  },
  {
    id: 'drdo',
    role: 'Machine Learning Research Intern',
    org: 'Institute of Nuclear Medicine and Allied Sciences, DRDO',
    place: 'Delhi, India',
    logo: '/images/drdo-inmas-logo.png',
    advisor: 'Dr. Shilpi Modi',
    advisorUrl: 'https://www.researchgate.net/profile/Shilpi-Modi',
    period: 'Jun – Dec 2025',
    summary: 'Deep learning for surface-EMG stress classification.',
    bullets: [
      'Raised classification accuracy from 91% to 97.98% with ResNet and CNN redesign; showed raw sEMG outperforms PyEMGPipeline preprocessing.',
      'Selected for presentation at SUMMIT 2.0.',
    ],
    tags: ['Biosignals', 'CNN', 'ResNet'],
  },
  {
    id: 'ucsc',
    role: 'Statistics Research Intern',
    org: 'University of California, Santa Cruz (ISRP)',
    place: 'Santa Cruz, USA',
    logo: '/images/UCSC.png',
    advisor: 'Prof. Bruno Sansó',
    advisorUrl: 'https://users.soe.ucsc.edu/~bruno/',
    period: 'Jun – Oct 2024',
    summary: 'Time-varying quantiles of atmospheric-river activity.',
    bullets: [
      'Analysed 40+ multi-decade ERA5 NetCDF datasets with ARIMA, harmonic regression and residual diagnostics; characterised seasonal and sub-seasonal structure.',
    ],
    tags: ['Time series', 'Climate'],
  },
];

export const OTHER_EXPERIENCE = [
  'Machine Learning Intern, RightProfile by Syntellect (Dec 2024 – Feb 2025): automated annotation of 10,000+ images; raised annotation accuracy from 60% to over 85%.',
  'Machine Learning Intern, The Habitats Trust (Tech4Conservation): camera-trap wildlife detection with MegaDetector and Zamba.',
];

export type Honor = { text: string; detail?: string; url?: string };

export const HONORS: Honor[] = [
  {
    text: 'Program Topper (Rank 1), BSc (Research) Mathematics, Batch of 2026',
    detail: 'Shiv Nadar University',
    url: 'https://drive.google.com/file/d/13i87-tmIhcjmb_8I0IzB_Dm7drsekaeH/view?usp=sharing',
  },
  {
    text: '2nd Prize, Best Undergraduate Thesis',
    detail: 'Shiv Nadar University',
    url: 'https://drive.google.com/file/d/1QZlugsJLmoUqB1r7kUPfDfmEkF4-MJrS/view?usp=sharing',
  },
  {
    text: 'Dean’s List, Monsoon 2025',
    detail: 'Shiv Nadar University',
    url: 'https://drive.google.com/file/d/1_VZVRGNywlh3b2YTbS2-NtD5sRnBLFMM/view?usp=sharing',
  },
  {
    text: 'Summer Research Fellowship, IISc Bangalore',
    detail: 'Indian Academy of Sciences, INSA and NASI · top 10% nationwide · stipend and travel grant',
    url: 'https://drive.google.com/file/d/1N238yFlXHx9ErYDxrti75Pow-Fdp8Ib0/view?usp=sharing',
  },
  {
    text: 'MTTS 2024, Mathematics Training and Talent Search',
    detail: 'Selected for 1 of 180 seats from 3,000+ applicants',
    url: 'https://drive.google.com/file/d/16lPOjLy8N_SdQMgngJUi3gwn-7ZQqXS5/view?usp=sharing',
  },
  {
    text: 'Research presented at SUMMIT 2.0 Conference',
    detail: 'sEMG stress classification with CNNs · Shiv Nadar University',
    url: 'https://drive.google.com/file/d/12tbXQ5spiteXmxL7ESEMnYpZPdW1tCV7/view?usp=sharing',
  },
  { text: '99.59 percentile (top 0.5%) in CUET Mathematics 2022', detail: 'Among 2.29 lakh students' },
  { text: 'CBSE Certificate of Merit, Mathematics (100%)', detail: 'Awarded to the top 0.1%' },
];

export const SERVICE = [
  { text: 'Reviewer, CVPR 2027', detail: 'Conference on Computer Vision and Pattern Recognition' },
  { text: 'Reviewer, NeurIPS 2026', detail: 'Conference on Neural Information Processing Systems' },
  { text: 'Reviewer, IEEE Internet Computing', detail: 'IEEE Computer Society' },
];

export const TEACHING = [
  { text: 'Teaching Assistant, MAT161 Applied Linear Algebra', detail: 'Jan – Mar 2025' },
  {
    text: 'Student Tutor, MAT101 Calculus I',
    detail: 'Aug – Dec 2025',
    url: 'https://drive.google.com/file/d/1tGQ-x11f1ycV019f2gaLrALpwvG4_Tyg/view?usp=sharing',
  },
  {
    text: 'Talk series (3 talks): Generative AI, a mathematical exploration of how machines learn to create',
    detail: 'VAEs, GANs and diffusion models from first principles',
    url: 'https://drive.google.com/file/d/1PJpiN_EDWALuj90zi96cOvfMRVUYJewJ/view?usp=sharing',
  },
  {
    text: 'Undergraduate Thesis Expo',
    detail: 'Apr 2026 · presented to a jury and the Mathematics and CS departments',
    url: 'https://drive.google.com/file/d/15NRzEWmPazrjp7EQND-xE2XK9OhxlWKh/view?usp=sharing',
  },
  {
    text: 'Polymath Jr. Summer Research (2024, 2025)',
    detail: 'Optimal-transport-based generative models and non-local models',
  },
];

export const EDUCATION = [
  {
    degree: 'BSc (Research) in Mathematics',
    school: 'Shiv Nadar University, Delhi-NCR',
    period: '2022 – 2026',
    lines: [
      'CGPA 8.95/10 · First Class with Distinction · Rank 1 in the Mathematics batch',
      'Minor in Computer Science & Engineering · Specialisations: AI & ML, Mathematical Finance',
      'Coursework: Advanced Deep Learning, Advanced Computer Vision, Special Topics in AI, Measure & Integration, Stochastic Processes (five PhD-level courses), Real Analysis I & II, Reinforcement Learning, LLMs',
    ],
    link: {
      label: 'Full course list',
      url: 'https://drive.google.com/file/d/1FCkHxOlw0dFiy0MQkJ5pmZrJQER-XM9r/view?usp=sharing',
    },
  },
  {
    degree: 'BS in Data Science and Applications (online)',
    school: 'IIT Madras',
    period: '2023 – 2027 (expected)',
    lines: ['CGPA 8.80/10 · Foundation Level certificate completed'],
  },
];

export const SKILLS = [
  { label: 'Languages', items: 'Python, C, R, LaTeX, EViews' },
  {
    label: 'ML / scientific',
    items: 'PyTorch, TensorFlow, Keras, scikit-learn, OpenCV, NumPy, SciPy, Pandas, Matplotlib, Seaborn',
  },
];

export const CV_PROJECTS = [
  {
    title: 'Depth-Conditioned Video Generation with ControlNet & AnimateDiff (CSD722)',
    period: 'Jan – May 2026',
    line: 'Extended ControlNet to text-to-video diffusion; fixed a training collapse where depth conditioning was ignored by adding auxiliary supervision losses; ablations over prompts, depth and text guidance.',
  },
  {
    title: 'Full-Waveform Inversion for Seismic Velocity Prediction',
    period: 'Ongoing',
    line: 'Extending a latent-space-translation framework (ICLR 2025) with diffusion priors and flow matching; optimal-transport misfit functions to mitigate cycle-skipping on Marmousi/Overthrust.',
  },
  {
    title: 'Surface-EMG Stress Classification with CNNs',
    period: 'Jun – Dec 2025',
    line: 'ResNet/CNN classifier raising accuracy from 91% to 97.98%; presented at SUMMIT 2.0.',
  },
  {
    title: 'Self-driven builds',
    period: '',
    line: 'LLMs coded from scratch · Neural temporal point processes · Image and video dehazing · AI Othello player.',
  },
];

import {
  PiGithubLogoDuotone,
  PiLinkedinLogoDuotone,
  PiEnvelopeDuotone,
  PiPhoneDuotone,
  PiMediumLogoDuotone,
} from "react-icons/pi";

export const LINKED_IN_URL =
  "https://www.linkedin.com/in/ronit-bhatia-4507a6190/";
export const GIT_URL = "https://github.com/rb3198/";
export const CT_GIT_URL = "https://github.com/cw-ronitbhatia/";
export const SELF_REPO_URL = "https://github.com/rb3198/rb3198_web";
export const MEDIUM_URL = "https://www.medium.com/@ronitbhatia98";

export const EMAIL = "ronitbhatia98@gmail.com";
export const PHONE = "+1 352 577 4091";

export const titleLinks = [
  { href: GIT_URL, icon: PiGithubLogoDuotone, label: "git" },
  { href: LINKED_IN_URL, icon: PiLinkedinLogoDuotone, label: "linkedIn" },
  { href: MEDIUM_URL, icon: PiMediumLogoDuotone, label: "medium" },
  { href: `mailto:${EMAIL}`, icon: PiEnvelopeDuotone, label: "mail" },
];

export const contactSectionLinks = [
  {
    href: `tel:${PHONE}`,
    icon: PiPhoneDuotone,
    label: "Call",
    value: PHONE,
    trackingLabel: "call",
  },
  {
    href: GIT_URL,
    icon: PiGithubLogoDuotone,
    label: "GitHub",
    value: GIT_URL,
    trackingLabel: "git",
  },
  {
    href: CT_GIT_URL,
    icon: PiGithubLogoDuotone,
    label: "GitHub 2",
    value: CT_GIT_URL,
    trackingLabel: "git_2",
  },
  {
    href: LINKED_IN_URL,
    icon: PiLinkedinLogoDuotone,
    label: "LinkedIn",
    value: LINKED_IN_URL,
    trackingLabel: "linkedIn",
  },
  {
    href: `mailto:${EMAIL}`,
    icon: PiEnvelopeDuotone,
    label: "Email",
    value: EMAIL,
    trackingLabel: "mail",
  },
];

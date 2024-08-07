import { useCallback, memo } from "react";
import { Section } from "./Section";
import { Sections } from "rb3198/types/enum/Sections";
import styles from "rb3198/styles/scss/sections/contact_section.scss";
import { ContactForm } from "rb3198/components/ContactForm";
import { contactSectionLinks } from "rb3198/constants/contact";
import { IconContext, IconType } from "react-icons";
import { Track } from "rb3198/components/Track";

interface ContactSectionProps {}

interface ContactLinkProps {
  href: string;
  icon: IconType;
  label: string;
  value: string;
  trackingLabel: string;
}

const ContactLink: React.FC<ContactLinkProps> = memo((props) => {
  const { href, icon: Icon, label, value, trackingLabel } = props;
  return (
    <IconContext.Provider value={{ className: styles.contactIcon }}>
      <Track
        as="a"
        trackClick
        cat="link_clicks"
        act="out_link"
        lab={`contact_section_${trackingLabel}`}
        href={href}
        className={styles.contactLink}
        target="_blank"
        title={label}
      >
        <Icon />
        <div>
          <p className={styles.contactLinkTitle}>{label}</p>
          <p className={styles.contactLinkSubtitle}>{value}</p>
        </div>
      </Track>
    </IconContext.Provider>
  );
});

export const ContactSection: React.FC<ContactSectionProps> = (props) => {
  const renderContactLinks = useCallback(() => {
    return (
      <div className={styles.contactLinkContainer}>
        {contactSectionLinks.map((config) => (
          <ContactLink {...config} key={config.value} />
        ))}
      </div>
    );
  }, []);
  return (
    <Section title="Contact" id={Sections.Contact}>
      <div className={styles.contactContainer}>
        <ContactForm containerClasses={styles.contactForm} />
        {renderContactLinks()}
      </div>
    </Section>
  );
};

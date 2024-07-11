export const fireImpTracking = (cat: string, act: string, lab: string) => {
  window.dataLayer.push({
    event: "impression",
    cat,
    act,
    lab,
  });
};

export const fireClickTracking = (cat: string, act: string, lab: string) => {
  window.dataLayer.push({
    event: "interaction",
    cat,
    act,
    lab,
  });
};

const handleAnchorPageScroll = ({ id }) => {
  const hash = id || window.location.hash;
  if (!hash) return;
  const headerRect = document.querySelector("#header")?.getBoundingClientRect();
  const headerHeight = headerRect?.height + headerRect?.y;
  const elementYPosition =
    document.querySelector(hash).getBoundingClientRect().top - headerHeight;
  window.scrollTo({
    top: elementYPosition + window.scrollY,
    behavior: "smooth",
  });
};

export { handleAnchorPageScroll };

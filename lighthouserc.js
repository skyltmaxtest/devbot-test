module.exports = {
  ci: {
    collect: {
      method: "psi",
      psiApiKey: "AIzaSyBKZrYUZHbz9qFhgQ4TaOv2nF-hCRSAhTU",
    },
    upload: {
      target: "lhci",
      serverBaseUrl: "https://lighthouse.skyltmax.dev",
      urlReplacementPatterns: ["s#^.*?://.*?(/.*)$#$1#"],
    },
  },
};

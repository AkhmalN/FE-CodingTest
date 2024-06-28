export const validPhotoUrl = (url) => {
  if (!url) {
    return null;
  }
  return (
    url.startsWith("http://") ||
    url.startsWith("https://") ||
    url.startsWith("file://")
  );
};

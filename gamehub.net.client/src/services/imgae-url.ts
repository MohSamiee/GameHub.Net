export const getCroppedImageUrl = (url: string) => {
  if (!url) return "";
  var target = "media/";
  var index = url.indexOf(target) + target.length;
  const newUrl = url.slice(0, index) + "crop/600/400/" + url.slice(index);
  return newUrl;
};

export default function onImagesLoaded(
  images: HTMLImageElement[],
  callback: () => void,
) {
  let loaded = 0;

  images.forEach((image) => {
    if (image.complete) {
      loaded++;
    } else {
      image.addEventListener("load", () => {
        loaded++;
        if (loaded == images.length) {
          callback();
        }
      });
    }
  });

  if (loaded == images.length) {
    callback();
  }
}

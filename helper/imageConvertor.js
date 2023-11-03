const sharp = require("sharp");
const fs = require("fs");
const { unlink } = fs.promises;

exports.webpConvertor = async (file, destPath, name, quality, alphaQuality) => {
  let path = await sharp(file)
    .toFormat("webp")
    .webp({ quality, alphaQuality, force: true })
    .toFile(destPath + name + ".webp", (err, sharp) => {
      if (err) {
        throw new Error(err);
      }
      fs.unlinkSync(file);
      photoPath = path;
    }).options.fileOut;
  return path;
};

exports.thumbGenerator = async (
  file,
  destPath,
  name,
  quality,
  alphaQuality
) => {
  let width = +cach.get("thumbDemention").width;
  let height = +cach.get("thumbDemention").height;

  return await sharp(file)
    .toFormat("webp")
    .webp({ quality, alphaQuality, force: true })
    .resize(width, height, {
      fit: "contain",
      background: { r: 255, g: 255, b: 255, alpha: 0 },
    })
    .toFile(destPath + "thumbnail" + "-" + name + ".webp", (err, sharp) => {
      if (err) {
        throw new Error(err);
      }
    }).options.fileOut;
};

exports.deleteFile = async (file) => {
  try {
    fs.stat(file, (error, stats) => {
      if (error) {
        throw new Error(error);
      } else {
        return unlink(file);
      }
    });
  } catch (error) {
    throw new Error(error);
  }
};

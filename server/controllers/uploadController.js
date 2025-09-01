exports.uploadMultipleImages = (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ message: 'No files uploaded' });
  }

  const baseUrl = `${req.protocol}://${req.get('host')}`;
  const imageUrls = req.files.map(file => `${baseUrl}/uploads/${file.filename}`);
  res.status(200).json({ imageUrls });
};


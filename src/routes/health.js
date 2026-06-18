const checkHealth = (req, res) => {
  res.json({
    status: "OK",
    service: "pdf-footer-scanner-api",
    timestamp: new Date().toISOString(),
    node: process.version,
  });
};

module.exports = { checkHealth };

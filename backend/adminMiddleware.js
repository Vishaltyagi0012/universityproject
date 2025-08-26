const adminMiddleware = (req, res, next) => {
  try {
    const role = req.headers['x-user-role'];

    // Check if the header exists and equals '1' (string, as headers are strings)
    if (role && role === '1') {
      return next();
    } else {
      return res.status(403).json({ msg: 'Access denied, admin only' });
    }
  } catch (error) {
    return next(error);
  }
};

export default adminMiddleware;

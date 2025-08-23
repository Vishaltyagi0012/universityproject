const adminMiddleware = async (req, res, next) => {
  try {
    console.log(req.body);
    if (req.user && req.user.role === 1) {
      next(); 
    } else {
      res.status(403).json({msg: 'Access denied, admin only'});
    }
  } catch (error) {
    next(error);
  }
};

export default adminMiddleware;

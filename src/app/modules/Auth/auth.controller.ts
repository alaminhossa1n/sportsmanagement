
const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await AuthServices.loginUser(req.body);
      res.status(201).json({
        success: true,
        statusCode: 201,
        message: "User login successful",
        data: result,
      });
    } catch (err) {
      next(err);
    }
  };
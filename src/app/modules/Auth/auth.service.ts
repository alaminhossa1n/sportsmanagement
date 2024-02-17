import AppError from "../../errors/AppError";
import { TUser } from "../User/user.interface";
import UserModel from "../User/user.model";

const loginUser = async (payload: TUser) => {
    const isUserExist = await UserModel.findOne({
      username: payload?.email,
    }).select("+password");
  
    if (!isUserExist) {
      throw new AppError(404, "User does not exit");
    }
  
    const isPasswordMatched = await bcrypt.compare(
      payload?.password,
      isUserExist?.password
    );
  
    if (!isPasswordMatched) {
      throw new AppError(401, "Wrong Password!");
    }
  
    const jwtPayload = {
      _id: isUserExist?._id,
      role: isUserExist?.role,
      email: isUserExist?.email,
    };
  
    const accessToken = jwt.sign(jwtPayload, config.jwt_secret as string, {
      expiresIn: "10d",
    });
  
    return {
      user: {
        _id: isUserExist?._id,
        role: isUserExist?.role,
        email: isUserExist?.email,
        username: isUserExist?.username,
      },
      token: accessToken,
    };
  };
import jwt from "jsonwebtoken";


export const getDataFromToken = (reqeust) => {
    try {
        const token = reqeust.cookies.get("token")?.value;
        const decodedToken = jwt.verify(token, process.env.JSON_TOKEN_SECRET);

        return decodedToken.id;
    }
    catch (error) {
        throw new Error("Error in getDataFromToken: " + error.message);
    }
}
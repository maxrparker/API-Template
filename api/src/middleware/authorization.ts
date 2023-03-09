import { NextFunction, Request, Response } from "express";

export function RequireAdmin(req: Request, res: Response, next: NextFunction) {
  if (!req.user.is_admin) return res.status(403).send("You aren't an admin");
  next();
}

export function RequireRole(value: any) {
  return async (req: Request, res: Response, next: NextFunction) => {
    console.log("Checking user:", req.user, "for role", `'${value}'`);
    next();
  };
}

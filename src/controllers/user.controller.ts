 import { Request, Response } from "express";
import * as userService from "../services/user.service"
import User from "../model/user.model";

const getParamValue = (value: string | string[] | undefined): string =>
    Array.isArray(value) ? value[0] ?? '' : value ?? '';



export const getAllUsers = async (req: Request, res: Response) => {

    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users)
    } catch (error) {
        console.error(error)
        res.status(500).json({
            error: 'Something went wrong'
        })
    }

}
export const saveUser = async (req: Request, res: Response) => {

    try {
        const newUser = req.body;
        const validationError = userService.validateUser(newUser);
        if (validationError) {
            res.status(400).json({
                error: validationError
            });
            return
        }
        const savedUser = await userService.saveUser(newUser)
        res.status(201).json(savedUser)
        console.log(savedUser.id)

    } catch (error) {
        console.error(error)
        res.status(500).json({
            error: 'Something went wrong'
        })
    }

}



export const getUser = async (req: Request, res: Response) => {
    const userId = getParamValue(req.params.id);
    const userIdPattern = /^USER_\d+_\d{3}$/; // USER_timestamp_randomnumber format

    if (!userId || !userIdPattern.test(userId)) {
        res.status(400).json({
            error: 'Invalid USER ID Format!!!!'
        });
        return;
    }
    const user = await userService.getUserById(userId)
    if (!user) {
        res.status(404).json({
            error: 'User not found!!'
        })
        return;
    }
    res.status(200).json(user)
}

export const getProfileByEmail = async (req: Request, res: Response) => {
    const email = getParamValue(req.params.email);

    if (!email) {
        res.status(400).json({ error: 'Email is required' });
        return;
    }

    try {
        const user = await User.findOne({ email }).select('-password');
        if (!user) {
            res.status(404).json({ error: 'User not found' });
            return;
        }
        res.status(200).json(user);
    } catch (error) {
        console.error("Error fetching profile by email", error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

export const getProfile = async (req: Request, res: Response) => {
    const userId = getParamValue(req.params.id);
    const userIdPattern = /^USER_\d+_\d{3}$/;

    if (!userId || !userIdPattern.test(userId)) {
        res.status(400).json({ error: 'Invalid USER ID Format!!!!' });
        return;
    }
    const user = await userService.getUserById(userId);
    if (!user) {
        res.status(404).json({ error: 'User not found!!' });
        return;
    }
    const userObj = (user as any).toObject ? (user as any).toObject() : user;
    const { password, ...userProfile } = userObj;
    res.status(200).json(userProfile);
}



export const updateUser = async (req: Request, res: Response) => {

    const userId = getParamValue(req.params.id);
    const userIdPattern = /^USER_\d+_\d{3}$/; // USER_timestamp_randomnumber format

    if (!userId || !userIdPattern.test(userId)) {
        res.status(400).json({
            error: 'Invalid USER ID Format!!!!'
        });
        return;
    }
    const updatedData = req.body;
    const updatedUser = await userService.updateUser(userId, updatedData)
    if (!updatedUser) {
        res.status(404).json({
            error: 'User not found!!'
        })
        return;
    }
    res.status(200).json(updatedUser)

}
export const deleteUser = async (req: Request, res: Response) => {

    const userId = getParamValue(req.params.id);
    const userIdPattern = /^USER_\d+_\d{3}$/; // USER_timestamp_randomnumber format

    if (!userId || !userIdPattern.test(userId)) {
        res.status(400).json({
            error: 'Invalid USER ID Format!!!!'
        });
        return;
    }
    const deletedUser = await userService.deleteUser(userId);
    if (!deletedUser) {
        res.status(404).json({
            error: 'User not found!!'
        })
        return;
    }
    res.status(200).json({
        message: 'User deleted successfully!! '
    })
}




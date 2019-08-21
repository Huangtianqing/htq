package com.great.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.great.bean.User;
import com.great.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @author htq
 * */
@Controller
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping("/findAllUser")
    public String findAllUser(HttpServletRequest request){
        List<User> listUser =  userService.findAllUser();
        request.setAttribute("listUser", listUser);
        return "/allUser";
    }
}
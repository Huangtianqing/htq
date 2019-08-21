package com.great.service.impl;

import java.util.List;

import javax.annotation.Resource;

import com.great.bean.User;
import com.great.mapper.UserMapper;
import com.great.service.UserService;
import org.springframework.stereotype.Service;


@Service
public class UserServiceImpl implements UserService {

    @Resource
    public UserMapper userMapper;

    public List<User> findAllUser() {
        // TODO Auto-generated method stub
        List<User> findAllUser = userMapper.findAllUser();
        return findAllUser;
    }

}
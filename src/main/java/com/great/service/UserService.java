package com.great.service;

import com.great.bean.User;

import java.util.List;

/**
 * @author htq
 *
 * */
public interface UserService {
    List<User> findAllUser();
}
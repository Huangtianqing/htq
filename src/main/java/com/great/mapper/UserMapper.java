package com.great.mapper;

import com.great.bean.User;

import java.util.List;

/**
 * @author htq
 * */
public interface UserMapper {

    List<User> findAllUser();
}
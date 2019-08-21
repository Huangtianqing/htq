package com.great.mapper;

import com.great.bean.User;
/**
 * @author htq
 * */
public interface UserDao {
    /* 根据 id 寻找对应的 User*/
    User findUserById(int id);
}
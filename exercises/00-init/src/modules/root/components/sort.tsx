import React, {useCallback, useState} from "react";
import {AddUser,SortAsc, User, SortLength} from "../../users/user-types";
import {useDispatch} from "react-redux";
import {addUser, setSortType} from "../../../actions/userActions";

export const Sort = () => {
    const dispatch = useDispatch()

    const handleSortAsc= useCallback((): void => {
        dispatch(setSortType('a-z'))
    }, [dispatch, setSortType]);

    const handleSortLength= useCallback((): void => {
        dispatch(setSortType('length'))
    }, [dispatch, setSortType]);

    return (
        <div>
            <button onClick={handleSortAsc}>Sort A-Z</button>
            <button onClick={handleSortLength}>Sort by length</button>
        </div>
    )
}
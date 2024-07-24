'use client';
import { getAccessToken } from '@/helpers/AccessToken';
import { getUser } from '@/redux/actions/authAction';
import { AppDispatch, RootState } from '@/redux/store';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation'

export default function ProfileCheck() {
  let accesstoken = getAccessToken();
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.authReducer.user);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      await dispatch(getUser());
    };

    fetchUser();
  }, [dispatch]);

  let updatePic: string = user?._id

  useEffect(() => {
    if (accesstoken && user?.userImage === "") {
      window.location.href = `/panel/profile/${updatePic}`;
    }
  }, [accesstoken, user]);

  // Return some valid JSX, e.g., a loading spinner or empty fragment
  return (
    <></>
  );
}

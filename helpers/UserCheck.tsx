'use client';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { useEffect, useState } from 'react';

import Link from 'next/link';
import { getUser } from '../redux/actions/authAction';

function getToken() {
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('accesstoken');
    return token ? token : null;
  }
  return null;
}

export function UserCheck() {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector((state: RootState) => state.authReducer.user);
  const [clientToken, setClientToken] = useState<string | null>(null);

  useEffect(() => {
    const token = getToken();
    setClientToken(token);

    const fetchData = async () => {
      try {
        if (token) {
          await dispatch(getUser()); 
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [dispatch]);

  const AuthInfo = () => {
    if (user?.role === 1) {
      return <Link className="nav-link" href="/panel">MY PANEL</Link>;
    } else {
      return null;
    }
  };

  // Only render AuthInfo if clientToken is set to ensure no mismatch during hydration
  return <>{clientToken && AuthInfo()}</>;
}

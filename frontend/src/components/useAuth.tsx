import { useState, useEffect } from "react";
import  {jwtDecode}  from "jwt-decode";

type DecodedToken = {
  id: string;
  role: string;
  exp: number;
};

export const useAuth = () => {
   const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decoded: DecodedToken = jwtDecode(token);
        setRole(decoded.role);
      } catch {
        setRole(null);
      }
    }
    setLoading(false);
  }, []);

  return { role, loading };
};

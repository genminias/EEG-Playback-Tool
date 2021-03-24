import { useEffect } from "react";
import { navigate } from "@reach/router";

import { useNotion } from "../services/notion";

/**
 * Logout page
 */
export function Logout() {
  const { logoutNotion } = useNotion();

  useEffect(() => {
    logoutNotion().then(() => {
      navigate("/login");
    });
  }, [logoutNotion]);

  return null;
}

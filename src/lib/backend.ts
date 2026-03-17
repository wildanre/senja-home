import "server-only";

import { NextResponse } from "next/server";

export function getBackendUrl() {
  const backendUrl = process.env.BACKEND_URL;

  if (!backendUrl) {
    throw new Error("BACKEND_URL is not configured");
  }

  return backendUrl.replace(/\/$/, "");
}

export function buildBackendUrl(path: string) {
  return `${getBackendUrl()}${path.startsWith("/") ? path : `/${path}`}`;
}

export function createForwardHeaders(
  request: Request,
  init: HeadersInit = {}
) {
  const headers = new Headers(init);
  const cookieHeader = request.headers.get("cookie");
  const contentType = request.headers.get("content-type");

  if (cookieHeader) {
    headers.set("Cookie", cookieHeader);
  }

  if (contentType && !headers.has("Content-Type")) {
    headers.set("Content-Type", contentType);
  }

  return headers;
}

export function appendSetCookieHeaders(
  source: Response,
  target: NextResponse
) {
  const headersWithSetCookie = source.headers as Headers & {
    getSetCookie?: () => string[];
  };

  if (typeof headersWithSetCookie.getSetCookie === "function") {
    headersWithSetCookie.getSetCookie().forEach((cookie) => {
      target.headers.append("Set-Cookie", cookie);
    });
    return;
  }

  const setCookie = source.headers.get("set-cookie");
  if (setCookie) {
    target.headers.append("Set-Cookie", setCookie);
  }
}

export function createProxyResponse(source: Response) {
  const response = new NextResponse(source.body, {
    status: source.status,
  });

  const contentType = source.headers.get("content-type");
  if (contentType) {
    response.headers.set("Content-Type", contentType);
  }

  const cacheControl = source.headers.get("cache-control");
  if (cacheControl) {
    response.headers.set("Cache-Control", cacheControl);
  }

  appendSetCookieHeaders(source, response);

  return response;
}

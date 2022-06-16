import * as NS from 'nookies';
// types
import { NextPageContext } from 'next';
import { CookieSerializeOptions } from 'cookie';

const COOKIES_OPTIONS: CookieSerializeOptions = {
  maxAge: 30 * 24 * 60 * 60,
  path: '/'
};

const AUTH_TOKEN_FIELD = 'accessToken';

const cookiesManager = (ctx?: NextPageContext) => ({
  // TOKEN
  getToken: (): string | undefined => {
    const { accessToken } = NS.parseCookies(ctx);

    return accessToken;
  },
  setToken: (token: string, options?: CookieSerializeOptions): void => {
    NS.setCookie(ctx, AUTH_TOKEN_FIELD, token, { ...COOKIES_OPTIONS, ...options });
  },
  removeToken: (): void => {
    NS.destroyCookie(ctx, AUTH_TOKEN_FIELD);
  }
});

export { cookiesManager };

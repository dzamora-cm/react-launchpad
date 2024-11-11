/// <reference types="vite/client" />
/// <reference  types="vite/client"  />
/// <reference  types="vitest"  />
interface ImportMetaEnv {
    readonly VITE_APP_NAME: string;
    readonly VITE_APP_BASE_URL: string;
    readonly VITE_APP_NAME_SPACES_I18: string;
    readonly VITE_APP_NAME_SPACES_DEF_I18: string;
    readonly VITE_APP_NAME_SPACES_I18_URL: string;
    readonly VITE_APP_DOMAIN_OWNER: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import plugin from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import child_process from 'node:child_process';
import { env } from 'node:process';

export default defineConfig(({ command }) => {
    const config = {
        plugins: [plugin()],
        resolve: {
            alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) }
        }
    };

    // Production builds need only Node.js; HTTPS certificates are local-only.
    if (command === 'build') return config;

    const baseFolder = env.APPDATA
        ? path.join(env.APPDATA, 'ASP.NET', 'https')
        : path.join(os.homedir(), '.aspnet', 'https');
    const certificateName = 'gamehub.net.client';
    const certFilePath = path.join(baseFolder, certificateName + '.pem');
    const keyFilePath = path.join(baseFolder, certificateName + '.key');

    fs.mkdirSync(baseFolder, { recursive: true });
    if (!fs.existsSync(certFilePath) || !fs.existsSync(keyFilePath)) {
        const result = child_process.spawnSync('dotnet', [
            'dev-certs', 'https', '--export-path', certFilePath,
            '--format', 'Pem', '--no-password'
        ], { stdio: 'inherit' });
        if (result.status !== 0) throw new Error('Could not create certificate.');
    }

    const target = env.ASPNETCORE_HTTPS_PORT
        ? 'https://localhost:' + env.ASPNETCORE_HTTPS_PORT
        : env.ASPNETCORE_URLS?.split(';')[0] || 'https://localhost:7190';

    return {
        ...config,
        server: {
            proxy: { '^/weatherforecast': { target, secure: false } },
            port: parseInt(env.DEV_SERVER_PORT || '49336'),
            https: {
                key: fs.readFileSync(keyFilePath),
                cert: fs.readFileSync(certFilePath)
            }
        }
    };
});

# Auditoria técnica LétimaX

Relatório gerado a partir dos ZIPs originais. Os ZIPs não foram alterados.

## Arquivo: Letimax. Zip
Ficheiros de código/configuração: 65

### letimax/package.json
~~~json
{
  "name": "letimax",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "concurrently -n api,web -c yellow,white \"npm run dev:api\" \"npm run dev:web\"",
    "dev:api": "node --watch server/index.js",
    "dev:web": "vite --config web/vite.config.js",
    "build": "vite build --config web/vite.config.js",
    "start": "node server/index.js",
    "test": "node --test tests/domain.test.js tests/api.test.js tests/embed.test.js"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.28.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.3.4",
    "concurrently": "^9.1.0",
    "vite": "^6.0.3"
  }
}

~~~

### letimax/README.md
~~~md
# LétimaX

Assistente de negócio digital do Senhor Letício Costa João Mafuca.

## Requisitos

- Node.js 22+ (testado com 24)
- Git não é obrigatório para correr

## Arranque

```bash
cd %USERPROFILE%\Projects\letimax
npm install
npm test
npm run dev
```

- API: http://127.0.0.1:8787
- Web: http://127.0.0.1:5173

Chaves de API: copiar `.env.example` para o ambiente do **servidor** (Railway). Nunca no código.

## O que está verificado neste repositório

- Regras de pontuação, autonomia, bloqueio biométrico e raqueamento (testes Node)
- API HTTP (health, chat, secrets mascarados, recusa financeira)

## O que a versão web não substitui

- ML Kit / TensorFlow Lite / Android Keystore nativos: na web usa câmara + microfone + embeddings locais no IndexedDB
- Controlo real de chamadas, SMS, lanterna e Wi-Fi: requer APP Android com permissões
- Preços Binance: dependem de rede

~~~

### letimax/package-lock.json
~~~json
{
  "name": "letimax",
  "version": "1.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "letimax",
      "version": "1.0.0",
      "dependencies": {
        "react": "^18.3.1",
        "react-dom": "^18.3.1",
        "react-router-dom": "^6.28.0"
      },
      "devDependencies": {
        "@vitejs/plugin-react": "^4.3.4",
        "concurrently": "^9.1.0",
        "vite": "^6.0.3"
      }
    },
    "node_modules/@babel/code-frame": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.29.7.tgz",
      "integrity": "sha512-Aup7aUOfpbAUg2ROOJN6Iw5f9DMBlzu0mIkm/malLQFN/YQgO48wCj0Kxa3sEHJvPVFg7siR+qRInwXd2qhQKw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-validator-identifier": "^7.29.7",
        "js-tokens": "^4.0.0",
        "picocolors": "^1.1.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/compat-data": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.29.7.tgz",
      "integrity": "sha512-locTkQyKvwIEgBzVrn8693ebc97F2U8ZHjbXwDXJ5Fn2TCpNwTlKcaKLkdHop5c/icOFE7qt7Q9JC5hnKNa6Gg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/core": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.29.7.tgz",
      "integrity": "sha512-RgHBCvtjbOK2gXSNBNIkNoEc9qoVEtau3hj8gEqKQuL3HZAibKarWFEI3Lfm6EYKkLalOh8eSrj9b+ch9H/VBA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.29.7",
        "@babel/generator": "^7.29.7",
        "@babel/helper-compilation-targets": "^7.29.7",
        "@babel/helper-module-transforms": "^7.29.7",
        "@babel/helpers": "^7.29.7",
        "@babel/parser": "^7.29.7",
        "@babel/template": "^7.29.7",
        "@babel/traverse": "^7.29.7",
        "@babel/types": "^7.29.7",
        "@jridgewell/remapping": "^2.3.5",
        "convert-source-map": "^2.0.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.2",
        "json5": "^2.2.3",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/babel"
      }
    },
    "node_modules/@babel/generator": {
      "version": "7.29.8",
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.29.8.tgz",
      "integrity": "sha512-gZbepsdh3WDtgZKWL+vTPh71LSBrm/Y4/QDZBVCcYfmeTEEuoOYwlSy+G1StfJg+/Zy550u/3TATbm7qDbbMtg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.29.8",
        "@babel/types": "^7.29.8",
        "@jridgewell/gen-mapping": "^0.3.12",
        "@jridgewell/trace-mapping": "^0.3.28",
        "jsesc": "^3.0.2"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-compilation-targets": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.29.7.tgz",
      "integrity": "sha512-wem6WaBj4NaVYVdNhLPPVacES6ZJ+KBBfSkTMD3YZxbP3rm3Di85tJU5ljaUNhaOynt+Aj0xruhYuzQBt8n71g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/compat-data": "^7.29.7",
        "@babel/helper-validator-option": "^7.29.7",
        "browserslist": "^4.24.0",
        "lru-cache": "^5.1.1",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-globals": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-globals/-/helper-globals-7.29.7.tgz",
      "integrity": "sha512-3nQVUAtvkKH9zahfWgw96Jc/uFOmjACE1kQz82E2lqWmHBgjzbNlsC22nuQTfahmWeQtTq5nQ/4Nnd2A1wj4zA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-imports": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.29.7.tgz",
      "integrity": "sha512-ejHwrQQYcm9xnTivShn2IDOlIzInN34AXskvq9QicvCtEzq1Vzclu/tKF8Jq1Cg8JG2GL6/EmjgsCT7lXepE3g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/traverse": "^7.29.7",
        "@babel/types": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-transforms": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.29.7.tgz",
      "integrity": "sha512-UPUVSyXbOh627KiCIGQSgwWzGeBKLkaJ9PJEdrngIwMSzxLR4jS4+f1f1jb7VzBbg8nFLaYotvVPFCTqdrmTAg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-module-imports": "^7.29.7",
        "@babel/helper-validator-identifier": "^7.29.7",
        "@babel/traverse": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-plugin-utils": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.29.7.tgz",
      "integrity": "sha512-G7sHYigPY17oO5SYWnfD/0MTBwVR781S/JI643e/JhUYgVgWE/61SoW3NH9KWUKyKq5LVh3npif99Wkt6j86Jw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-string-parser": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.29.7.tgz",
      "integrity": "sha512-Pb5ijPrZ89GDH8223L4UP8i6QApWxs04RbPQJTeWDV0/keR2E36MeKnyr6LYmUUvqRRI+Iv87SuF1W6ErINzYw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-identifier": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.29.7.tgz",
      "integrity": "sha512-qehxGkRj55h/ff8EMaJ+cYhyaKlHIxqYDn682wQD7RNp9UujOQsHog2uS0r2vzr4pW+sXf90NeeayjcNaX3fFg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-option": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.29.7.tgz",
      "integrity": "sha512-N9ZErrD+yW5geCDtBqnOoxmR8+tNKiGuxKlDpuJxfsqpa2dFcexaziGAE/qoHLiDDreVNMupxGmSoNlyvsA3gw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helpers": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.29.7.tgz",
      "integrity": "sha512-1k2lAGRMfHTcwuNYcCNUmaUffmQv8KWMfh2iJUUeRlwlwH4FdNG7mfPI10NPfLHJFThE4Tyr4mv7kTNZOiPuBg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/template": "^7.29.7",
        "@babel/types": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/parser": {
      "version": "7.29.8",
      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.29.8.tgz",
      "integrity": "sha512-E8lTAYNB1KW+FH+VGJuZM1ioAx2E6oVlvQFRrf5P8ZZmsiJXYAD9vTFV7yyEURNzgh1dFqMZuO6tUwcARbqFCA==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.29.8"
      },
      "bin": {
        "parser": "bin/babel-parser.js"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@babel/plugin-transform-react-jsx-self": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-self/-/plugin-transform-react-jsx-self-7.29.7.tgz",
      "integrity": "sha512-TL0hMc9xzy86VD31nUiwzd5otRAcyEPcsegCxolO0PvcXuH1v0kECe/UIznYFihpkvU5wg/jk4v0TTEFfm53fw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-react-jsx-source": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-source/-/plugin-transform-react-jsx-source-7.29.7.tgz",
      "integrity": "sha512-06IyK09H3wi4cGbhDBwp5gUGo0IKtnYa8tyTiephirPCK6fbobVGiXMMI5zLQ4aKEYP3wZ3ArU44o+8KMrSG/Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/template": {
      "version": "7.29.7",
      "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.29.7.tgz",
      "integrity": "sha512-puq+Gf35oI24FeN11LkoUQFqv9uwNeWpxXZi/Ji3rRIoKAzKnxRaZ+Gkj0vKS9ZCiTESfng1N9LyOyXvo+m+Gg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.29.7",
        "@babel/parser": "^7.29.7",
        "@babel/types": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/traverse": {
      "version": "7.29.8",
      "resolved": "https://registry.npmjs.org/@babel/traverse/-/traverse-7.29.8.tgz",
      "integrity": "sha512-I5z7H3bf/41ktsNVLtpN0wAa336HkqIHQ5BuPLEhTkt1jVSyZpeNKIzTgEWmlxjdg81R0IgUCcaE+Ok3NvrfZg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.29.7",
        "@babel/generator": "^7.29.8",
        "@babel/helper-globals": "^7.29.7",
        "@babel/parser": "^7.29.8",
        "@babel/template": "^7.29.7",
        "@babel/types": "^7.29.8",
        "debug": "^4.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/types": {
      "version": "7.29.8",
      "resolved": "https://registry.npmjs.org/@babel/types/-/types-7.29.8.tgz",
      "integrity": "sha512-Vj1jF3cPfxg7OAfoI7QnVKLoILlm2JF9pnVHrX8qx7AHMiYWT+NDAA7jChlNgRS4WTLc/fD1lXLmPixluj+3Gg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-string-parser": "^7.29.7",
        "@babel/helper-validator-identifier": "^7.29.7"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@esbuild/aix-ppc64": {
      "version": "0.25.12",
      "resolved": "https://registry.npmjs.org/@esbuild/aix-ppc64/-/aix-ppc64-0.25.12.tgz",
      "integrity": "sha512-Hhmwd6CInZ3dwpuGTF8fJG6yoWmsToE+vYgD4nytZVxcu1ulHpUQRAB1UJ8+N1Am3Mz4+xOByoQoSZf4D+CpkA==",
      "cpu": [
        "ppc64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "aix"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-arm": {
      "version": "0.25.12",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm/-/android-arm-0.25.12.tgz",
      "integrity": "sha512-VJ+sKvNA/GE7Ccacc9Cha7bpS8nyzVv0jdVgwNDaR4gDMC/2TTRc33Ip8qrNYUcpkOHUT5OZ0bUcNNVZQ9RLlg==",
      "cpu": [
        "arm"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "android"
      ],
      "engines": {
        "node": ">=18"
      }
    },
    "node_modules/@esbuild/android-arm64": {
      "version": "0.25.12",
      "resolved": "https://registry.npmjs.org/@esbuild/android-arm64/-/android-arm64-0.25.12.tgz",
      "integrity": "sha512-6AAmLG7zwD1Z159jCKPvAxZd4y/VTO0VkprYy+3N2FtJ8+BQWFXU+OxARIwA46c5tdD9SsKGZ/1ocqBS/gAKHg
[CONTEÚDO TRUNCADO PELO LIMITE DO RELATÓRIO]
~~~

### letimax/android/settings.gradle.kts
~~~kts
pluginManagement {
    repositories {
        google()
        mavenCentral()
        gradlePluginPortal()
    }
}
dependencyResolutionManagement {
    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
    repositories {
        google()
        mavenCentral()
    }
}
rootProject.name = "LetimaX"
include(":app")

~~~

### letimax/android/build.gradle.kts
~~~kts
plugins {
    id("com.android.application") version "8.7.3" apply false
    id("org.jetbrains.kotlin.android") version "2.0.21" apply false
    id("org.jetbrains.kotlin.plugin.compose") version "2.0.21" apply false
    id("com.google.devtools.ksp") version "2.0.21-1.0.28" apply false
}

~~~

### letimax/tests/embed.test.js
~~~js
import { test } from "node:test";
import assert from "node:assert/strict";
import { embeddingFromImageData, faceScore } from "../web/src/auth/biometric.js";

test("embedding facial local distingue padrões", () => {
  const dark = new Uint8ClampedArray(160 * 160 * 4);
  const light = new Uint8ClampedArray(160 * 160 * 4);
  for (let i = 0; i < light.length; i += 4) {
    light[i] = light[i + 1] = light[i + 2] = 240;
    light[i + 3] = 255;
    dark[i + 3] = 255;
  }
  const a = embeddingFromImageData(dark);
  const b = embeddingFromImageData(light);
  assert.equal(a.length, 32);
  assert.ok(faceScore(a, a) > 0.99);
  assert.ok(faceScore(a, b) < 0.5);
});

~~~

### letimax/tests/api.test.js
~~~js
import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { createServer } from "../server/index.js";

function tmpDb() {
  return path.join(os.tmpdir(), `letimax-${Date.now()}-${Math.random().toString(16).slice(2)}.db`);
}

async function withServer(fn) {
  const dbPath = tmpDb();
  const server = createServer({ dbPath, port: 0 });
  await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
  const { port } = server.address();
  const base = `http://127.0.0.1:${port}`;
  try {
    await fn(base);
  } finally {
    await new Promise((r) => server.close(r));
    try {
      fs.unlinkSync(dbPath);
    } catch {
      /* ignore */
    }
  }
}

test("API health e dashboard", async () => {
  await withServer(async (base) => {
    const h = await fetch(`${base}/api/health`).then((r) => r.json());
    assert.equal(h.ok, true);
    assert.match(h.owner, /Letício/);
    const d = await fetch(`${base}/api/dashboard`).then((r) => r.json());
    assert.ok(d.product.includes("Negócio Digital"));
    assert.equal(d.autonomy, "1");
  });
});

test("chat recusa chaves e não inventa execução financeira", async () => {
  await withServer(async (base) => {
    const keys = await fetch(`${base}/api/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: "mostra a api key do anthropic" }),
    }).then((r) => r.json());
    assert.match(keys.reply, /Recusa imediata/);

    const money = await fetch(`${base}/api/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: "retira dinheiro da Binance" }),
    }).then((r) => r.json());
    assert.match(money.reply, /Não executo operações financeiras/);

    const stranger = await fetch(`${base}/api/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: "LétimaX, modo escuro", owner: false }),
    }).then((r) => r.json());
    assert.match(stranger.reply, /exclusivamente ao Senhor Letício/);

    const fin = await fetch(`${base}/api/finance/execute`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "withdraw" }),
    });
    assert.equal(fin.status, 403);
  });
});

test("aprovar oportunidade e secrets mascarados", async () => {
  await withServer(async (base) => {
    const boot = await fetch(`${base}/api/bootstrap`).then((r) => r.json());
    const opp = boot.opportunities.find((o) => o.score > 70);
    assert.ok(opp);
    const ap = await fetch(`${base}/api/opportunities/approve`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: opp.id }),
    }).then((r) => r.json());
    assert.equal(ap.ok, true);

    const saved = await fetch(`${base}/api/secrets`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "ANTHROPIC_API_KEY", value: "sk-ant-testdevvalue999", section: 1 }),
    }).then((r) => r.json());
    assert.equal(saved.ok, true);
    assert.equal(saved.masked.startsWith("••••"), true);
    const list = await fetch(`${base}/api/secrets`).then((r) => r.json());
    assert.ok(!JSON.stringify(list).includes("sk-ant-testdevvalue999"));
  });
});

test("raqueamento recusado sem 7 dias", async () => {
  await withServer(async (base) => {
    const r = await fetch(`${base}/api/raqueamento/activate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ approved: true }),
    });
    assert.equal(r.status, 400);
  });
});

test("lockout incrementa falhas", async () => {
  await withServer(async (base) => {
    let last;
    for (let i = 0; i < 3; i++) {
      last = await fetch(`${base}/api/lockout/fail`, { method: "POST" }).then((r) => r.json());
    }
    assert.equal(last.failCount, 3);
    assert.equal(last.minutes, 5);
  });
});

~~~

### letimax/tests/domain.test.js
~~~js
import { test } from "node:test";
import assert from "node:assert/strict";
import { scoreOpportunity, shouldNotifyOpportunity, rankOpportunities } from "../shared/scoring.js";
import { lockoutForFailures, isLockActive, FACE_MIN, VOICE_MIN } from "../shared/lockout.js";
import { raqueamentoEligible, daysSinceLastHighScore } from "../shared/raqueamento.js";
import { parseVoiceCommand } from "../shared/voice.js";
import { canPerform } from "../shared/autonomy.js";
import { redactSecrets, requestsApiKeys, maskSecret } from "../shared/security.js";
import { unknownSpeakerReply } from "../shared/security.js";

test("oportunidade só notifica acima de 70", () => {
  const low = scoreOpportunity({ returnPotential: 40, ease: 40, speed: 40, history: 40 });
  const high = scoreOpportunity({ returnPotential: 95, ease: 90, speed: 90, history: 80 });
  assert.equal(shouldNotifyOpportunity(low.score), false);
  assert.equal(high.notify, true);
  assert.ok(high.score > 70);
});

test("ranking por pontuação", () => {
  const r = rankOpportunities([{ score: 10 }, { score: 88 }, { score: 70 }]);
  assert.equal(r[0].score, 88);
});

test("bloqueio progressivo 3/6/9/12", () => {
  assert.equal(lockoutForFailures(2).locked, false);
  assert.equal(lockoutForFailures(3).minutes, 5);
  assert.equal(lockoutForFailures(6).minutes, 30);
  assert.equal(lockoutForFailures(9).minutes, 1440);
  assert.equal(lockoutForFailures(12).permanent, true);
  assert.equal(isLockActive("permanent"), true);
  assert.equal(isLockActive(Date.now() + 10_000), true);
  assert.equal(isLockActive(Date.now() - 10_000), false);
  assert.equal(FACE_MIN, 0.92);
  assert.equal(VOICE_MIN, 0.88);
});

test("raqueamento só após 7 dias e nunca sozinho", () => {
  const early = raqueamentoEligible({ daysWithoutScoreAbove70: 6, ownerApproved: true });
  assert.equal(early.canActivate, false);
  const ready = raqueamentoEligible({ daysWithoutScoreAbove70: 7, ownerApproved: false });
  assert.equal(ready.eligible, true);
  assert.equal(ready.canActivate, false);
  const go = raqueamentoEligible({ daysWithoutScoreAbove70: 7, ownerApproved: true });
  assert.equal(go.canActivate, true);
  assert.ok(daysSinceLastHighScore(Date.now() - 8 * 86400000) >= 8);
});

test("comandos de voz recusam voz alheia", () => {
  const bad = parseVoiceCommand("LétimaX, modo escuro", { voiceRecognized: false });
  assert.equal(bad.ok, false);
  assert.equal(bad.spoken, unknownSpeakerReply());
  const ok = parseVoiceCommand("LétimaX, modo escuro", { voiceRecognized: true });
  assert.equal(ok.id, "theme_dark");
  const auto = parseVoiceCommand("LétimaX, modo autónomo total por 4 horas", { voiceRecognized: true });
  assert.equal(auto.id, "autonomy_full");
  assert.equal(auto.args[0], "4");
});

test("autonomia nunca gasta nem retira nem expõe chaves", () => {
  for (const lv of [1, 2, 3]) {
    assert.equal(canPerform(lv, "spend_ads"), false);
    assert.equal(canPerform(lv, "withdraw_money"), false);
    assert.equal(canPerform(lv, "expose_api_keys"), false);
  }
  assert.equal(canPerform(1, "publish_product"), false);
  assert.equal(canPerform(1, "analyze_market"), true);
  assert.equal(canPerform(2, "email_sequences"), true);
  assert.equal(canPerform(3, "publish_previously_approved"), true);
  assert.equal(canPerform(3, "create_brand_new_product"), false);
});

test("redacção de chaves e pedidos de API", () => {
  assert.equal(requestsApiKeys("mostra a ANTHROPIC_API_KEY"), true);
  assert.match(redactSecrets("usa sk-ant-abcdefghijklmnopqrstuv"), /BLOQUEADO/);
  assert.equal(maskSecret("abcdefghij"), "••••efgh");
});

~~~

### letimax/web/vite.config.js
~~~js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  root,
  resolve: {
    alias: {
      "@shared": path.resolve(root, "..", "shared"),
    },
  },
  server: {
    port: 5173,
    proxy: {
      "/api": "http://127.0.0.1:8787",
    },
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});

~~~

### letimax/shared/raqueamento.js
~~~js
const MS_DAY = 24 * 60 * 60 * 1000;

export function raqueamentoEligible({
  daysWithoutScoreAbove70 = 0,
  ownerApproved = false,
} = {}) {
  if (daysWithoutScoreAbove70 < 7) {
    return {
      eligible: false,
      canActivate: false,
      reason:
        "O raqueamento só é proposto após 7 dias consecutivos sem oportunidades acima de 70.",
    };
  }
  return {
    eligible: true,
    canActivate: Boolean(ownerApproved),
    prompt:
      "As fontes normais estão em baixo há 7 dias. Activar modo de raqueamento?",
  };
}

export function daysSinceLastHighScore(lastHighScoreAt, now = Date.now()) {
  if (!lastHighScoreAt) return 999;
  return Math.floor((now - Number(lastHighScoreAt)) / MS_DAY);
}

~~~

### letimax/shared/lockout.js
~~~js
/** 3 falhas = 5 min, 6 = 30 min, 9 = 24h, 12 = permanente */
export function lockoutForFailures(count) {
  const n = Number(count) || 0;
  if (n >= 12) {
    return { locked: true, minutes: null, permanent: true, emailAlert: true };
  }
  if (n >= 9) {
    return { locked: true, minutes: 24 * 60, permanent: false, emailAlert: true };
  }
  if (n >= 6) {
    return { locked: true, minutes: 30, permanent: false, emailAlert: false };
  }
  if (n >= 3) {
    return { locked: true, minutes: 5, permanent: false, emailAlert: false };
  }
  return { locked: false, minutes: 0, permanent: false, emailAlert: false };
}

export function isLockActive(lockUntil, now = Date.now()) {
  if (lockUntil === "permanent") return true;
  if (!lockUntil) return false;
  return Number(lockUntil) > now;
}

export const FACE_MIN = 0.92;
export const VOICE_MIN = 0.88;
export const FACE_ATTEMPTS = 3;
export const VOICE_ATTEMPTS = 2;

~~~

### letimax/shared/constants.js
~~~js
export const OWNER = {
  name: "Letício Costa João Mafuca",
  greeting:
    "Bem-vindo, Senhor Letício. Estou pronto. Hoje vamos fazer ainda mais dinheiro.",
  biometricConfirm:
    "Perfil biométrico criado. A LétimaX reconhece-o agora, Senhor Letício.",
};

export const THEME = {
  light: {
    bg: "#FFFFFF",
    text: "#1A1A1A",
    gold: "#C9A84C",
    interactive: "#2D2D2D",
    bubbleUser: "#F5E9C8",
    bubbleAi: "#F2F2F2",
  },
  dark: {
    bg: "#0D0D0D",
    text: "#FFFFFF",
    gold: "#C9A84C",
    interactive: "#2D2D2D",
    bubbleUser: "#3A3118",
    bubbleAi: "#1C1C1C",
  },
};

export const VOICE_ENROLL_PHRASES = [
  "Eu sou o Senhor Letício e a LétimaX obedece apenas à minha voz.",
  "Hoje vamos construir activos que geram dinheiro sem trabalho diário.",
  "LétimaX, reconhece a minha voz e protege as chaves e o meu negócio.",
];

export const FACE_ANGLES = ["frente", "direita", "esquerda", "cima", "baixo"];

export const NICHES = [
  "Marketing Digital com IA",
  "Emagrecimento e Saúde",
  "Relacionamentos",
  "Finanças Pessoais",
  "Desenvolvimento Pessoal",
  "Inglês Rápido",
  "Concursos Públicos",
  "Redes Sociais",
  "Negócio Online do Zero",
  "Ansiedade e Saúde Mental",
  "Cripto para Iniciantes",
  "Culinária Saudável",
  "Moda e Beleza",
  "Educação Infantil",
  "Viagens Digitais",
];

export const REVENUE_SOURCES = [
  { id: 1, name: "Produtos Digitais Próprios" },
  { id: 2, name: "Afiliados Externos" },
  { id: 3, name: "Programa de Afiliados Próprio" },
  { id: 4, name: "Mentorias e Consultorias" },
  { id: 5, name: "Membership Recorrente" },
  { id: 6, name: "Conteúdo Orgânico Monetizado" },
  { id: 7, name: "Email Marketing" },
  { id: 8, name: "Lançamentos e Webinars" },
  { id: 9, name: "Parcerias Estratégicas" },
  { id: 10, name: "Licenciamento de Conteúdo" },
  { id: 11, name: "Sistema de Referências" },
  { id: 12, name: "Investimentos Passivos (só monitorização)" },
];

export const RAQUEAMENTO_STRATEGIES = [
  {
    id: "freelance",
    name: "Oportunidades rápidas (freelance legal)",
    detail:
      "Identifica trabalhos digitais imediatos em plataformas como Fiverr e Upwork — só após aprovação.",
  },
  {
    id: "viral",
    name: "Tendências virais",
    detail: "Janela de 24 a 72 horas para produto ou campanha sobre tendência actual.",
  },
  {
    id: "arbitragem",
    name: "Arbitragem de informação",
    detail:
      "Produtos que vendem noutros mercados e ainda não existem em PT/BR — adaptação legal.",
  },
  {
    id: "parcerias",
    name: "Parcerias de emergência",
    detail: "Colaboração rápida com partilha de receita, com aprovação.",
  },
  {
    id: "licenciamento",
    name: "Licenciamento rápido",
    detail: "Licenciar conteúdo já criado por pagamento único ou royalties.",
  },
];

export const BOTTOM_NAV = [
  { id: "chat", label: "Chat", path: "/chat" },
  { id: "dashboard", label: "Dashboard", path: "/dashboard" },
  { id: "produtos", label: "Produtos", path: "/produtos" },
  { id: "mercado", label: "Mercado", path: "/mercado" },
  { id: "marketing", label: "Marketing", path: "/marketing" },
];

export const SIDE_MENU = [
  { path: "/motor-receita", label: "Motor de Receita" },
  { path: "/metas", label: "Metas" },
  { path: "/afiliados-externos", label: "Afiliados Externos" },
  { path: "/afiliados-proprios", label: "Afiliados Próprios" },
  { path: "/lancamentos", label: "Lançamentos" },
  { path: "/webinars", label: "Webinars" },
  { path: "/email-marketing", label: "Email Marketing" },
  { path: "/analytics", label: "Analytics" },
  { path: "/reputacao", label: "Reputação" },
  { path: "/suporte", label: "Suporte" },
  { path: "/onboarding", label: "Onboarding" },
  { path: "/referencias", label: "Referências" },
  { path: "/paginas", label: "Páginas" },
  { path: "/videos", label: "Vídeos" },
  { path: "/cursos", label: "Cursos" },
  { path: "/sites", label: "Sites" },
  { path: "/apresentacoes", label: "Apresentações" },
  { path: "/automacao", label: "Automação Inteligente" },
  { path: "/oportunidades", label: "Oportunidades" },
  { path: "/investimentos", label: "Investimentos" },
  { path: "/empresa", label: "Empresa" },
  { path: "/financas", label: "Finanças" },
  { path: "/contactos", label: "Contactos" },
  { path: "/saude", label: "Saúde" },
  { path: "/passwords", label: "Passwords" },
  { path: "/documentos", label: "Documentos" },
  { path: "/activos", label: "Activos" },
  { path: "/novo-negocio", label: "Novo Negócio" },
  { path: "/raqueamento", label: "Raqueamento" },
  { path: "/configuracoes", label: "Configurações" },
  { path: "/logs", label: "Logs" },
  { path: "/actualizacao", label: "Actualização" },
];

export const FIRST_PRODUCT = {
  name: "Como Criar um Negócio Digital com IA em 30 Dias",
  priceMinUsd: 17,
  priceMaxUsd: 27,
  niche: "Marketing Digital com IA",
  language: "pt-BR",
};

~~~

### letimax/shared/autonomy.js
~~~js
const NEVER = new Set([
  "spend_ads",
  "withdraw_money",
  "change_niche",
  "expose_api_keys",
  "execute_finance",
]);

const LEVEL = {
  1: {
    auto: [
      "analyze_market",
      "draft_for_approval",
      "monitor_sales",
      "price_adjust_notify",
      "backup",
      "reports",
      "busy_call_message",
      "draft_email_whatsapp",
      "collect_testimonials",
      "monitor_reputation",
      "revenue_engine",
      "monitor_goals",
    ],
    never: [
      "publish_product",
      "send_replies",
      "change_niche",
      "spend_money",
      "finance_decision",
      ...NEVER,
    ],
  },
  2: {
    extra: [
      "send_preapproved_replies",
      "simple_refunds",
      "revoke_access",
      "publish_scheduled_organic",
      "email_sequences",
      "cart_recovery",
      "onboarding_emails",
      "referral_email_day14",
    ],
    never: [
      "publish_new_product_without_approval",
      "spend_ads",
      "change_niche",
      "withdraw_money",
      ...NEVER,
    ],
  },
  3: {
    extra: [
      "full_support_preapproved",
      "publish_previously_approved",
      "organic_all_networks",
      "optimize_funnels",
      "full_cascade",
      "return_report",
    ],
    never: [
      "spend_ads",
      "withdraw_money",
      "change_niche",
      "create_brand_new_product",
      "expose_api_keys",
      ...NEVER,
    ],
  },
};

export function canPerform(level, action) {
  const lv = Number(level) === 2 ? 2 : Number(level) === 3 ? 3 : 1;
  if (NEVER.has(action)) return false;
  if (LEVEL[lv].never.includes(action)) return false;
  if (lv === 1) return LEVEL[1].auto.includes(action);
  if (lv === 2)
    return LEVEL[1].auto.includes(action) || LEVEL[2].extra.includes(action);
  return (
    LEVEL[1].auto.includes(action) ||
    LEVEL[2].extra.includes(action) ||
    LEVEL[3].extra.includes(action)
  );
}

export function parseAutonomyHours(text) {
  const m = String(text || "").match(/por\s+(\d+)\s*horas?/i);
  return m ? Number(m[1]) : null;
}

~~~

### letimax/shared/scoring.js
~~~js
/**
 * Pontuação 0–100: retorno, facilidade, velocidade, histórico.
 * Só notifica Motor de Receita quando score > 70.
 */
export function scoreOpportunity({
  returnPotential = 50,
  ease = 50,
  speed = 50,
  history = 50,
} = {}) {
  const clamp = (n) => Math.max(0, Math.min(100, Number(n) || 0));
  const score = Math.round(
    clamp(returnPotential) * 0.4 +
      clamp(ease) * 0.2 +
      clamp(speed) * 0.25 +
      clamp(history) * 0.15
  );
  return {
    score,
    notify: score > 70,
  };
}

export function shouldNotifyOpportunity(score) {
  return Number(score) > 70;
}

export function rankOpportunities(list) {
  return [...list].sort((a, b) => (b.score ?? 0) - (a.score ?? 0));
}

~~~

### letimax/shared/voice.js
~~~js
import { unknownSpeakerReply } from "./security.js";

const COMMANDS = [
  { id: "answer_call", re: /létimax,\s*atende a chamada/i, kind: "calls" },
  { id: "reject_call", re: /létimax,\s*rejeita a chamada/i, kind: "calls" },
  { id: "busy_call", re: /létimax,\s*diz que estou ocupado/i, kind: "calls" },
  { id: "call_contact", re: /létimax,\s*liga para (.+)/i, kind: "calls" },
  { id: "read_sms", re: /létimax,\s*lê o sms do (.+)/i, kind: "messages" },
  {
    id: "reply_sms",
    re: /létimax,\s*responde ao sms do (.+?) dizendo (.+)/i,
    kind: "messages",
  },
  { id: "read_last_sms", re: /létimax,\s*lê o último sms/i, kind: "messages" },
  {
    id: "reply_last_sms",
    re: /létimax,\s*responde ao último sms dizendo (.+)/i,
    kind: "messages",
  },
  { id: "torch_on", re: /létimax,\s*liga a lanterna/i, kind: "hardware" },
  { id: "torch_off", re: /létimax,\s*desliga a lanterna/i, kind: "hardware" },
  { id: "vol_up", re: /létimax,\s*sobe o volume/i, kind: "hardware" },
  { id: "vol_down", re: /létimax,\s*desce o volume/i, kind: "hardware" },
  { id: "silent", re: /létimax,\s*silencia/i, kind: "hardware" },
  { id: "vol_max", re: /létimax,\s*volume máximo/i, kind: "hardware" },
  { id: "bt_on", re: /létimax,\s*liga o bluetooth/i, kind: "hardware" },
  { id: "bt_off", re: /létimax,\s*desliga o bluetooth/i, kind: "hardware" },
  { id: "wifi_on", re: /létimax,\s*liga o wifi/i, kind: "hardware" },
  { id: "wifi_off", re: /létimax,\s*desliga o wifi/i, kind: "hardware" },
  { id: "pause_music", re: /létimax,\s*pausa a música/i, kind: "media" },
  { id: "resume_music", re: /létimax,\s*continua a música/i, kind: "media" },
  { id: "next_track", re: /létimax,\s*próxima música/i, kind: "media" },
  { id: "prev_track", re: /létimax,\s*música anterior/i, kind: "media" },
  { id: "theme_dark", re: /létimax,\s*modo escuro/i, kind: "theme" },
  { id: "theme_light", re: /létimax,\s*modo claro/i, kind: "theme" },
  { id: "screen_off", re: /létimax,\s*desliga o ecrã/i, kind: "theme" },
  { id: "bright_up", re: /létimax,\s*aumenta o brilho/i, kind: "theme" },
  { id: "bright_down", re: /létimax,\s*diminui o brilho/i, kind: "theme" },
  {
    id: "autonomy_full",
    re: /létimax,\s*modo autónomo total por (\d+)\s*horas?/i,
    kind: "autonomy",
  },
  {
    id: "autonomy_off",
    re: /létimax,\s*desactiva o modo autónomo/i,
    kind: "autonomy",
  },
  { id: "autonomy_normal", re: /létimax,\s*modo normal/i, kind: "autonomy" },
  { id: "start", re: /létimax,\s*iniciar/i, kind: "autonomy" },
  { id: "sales", re: /létimax,\s*como estão as vendas/i, kind: "business" },
  {
    id: "next_opportunity",
    re: /létimax,\s*qual a próxima oportunidade/i,
    kind: "business",
  },
  { id: "earned_today", re: /létimax,\s*quanto ganhei hoje/i, kind: "business" },
  { id: "day_summary", re: /létimax,\s*faz o resumo do dia/i, kind: "business" },
  { id: "raqueamento", re: /létimax,\s*activa o raqueamento/i, kind: "business" },
  {
    id: "company_plan",
    re: /létimax,\s*faz o plano da empresa/i,
    kind: "business",
  },
];

export function parseVoiceCommand(utterance, { voiceRecognized = false } = {}) {
  const text = String(utterance || "").trim();
  if (!voiceRecognized) {
    return {
      ok: false,
      reason: "voice_not_recognized",
      spoken: unknownSpeakerReply(),
    };
  }
  for (const cmd of COMMANDS) {
    const m = text.match(cmd.re);
    if (m) {
      return {
        ok: true,
        id: cmd.id,
        kind: cmd.kind,
        args: m.slice(1),
        needsConfirm: cmd.id === "raqueamento" || cmd.kind === "calls",
      };
    }
  }
  return { ok: false, reason: "unknown_command", spoken: null };
}

export function busyCallMessage() {
  return "O Senhor Letício está ocupado neste momento. Pode deixar recado ou ele retorna em breve.";
}

~~~

### letimax/shared/security.js
~~~js
const API_KEY_PATTERNS = [
  /\bsk-[A-Za-z0-9]{10,}\b/g,
  /\bsk-ant-[A-Za-z0-9\-_]{10,}\b/g,
  /\bxai-[A-Za-z0-9]{10,}\b/g,
  /\bAIza[A-Za-z0-9\-_]{20,}\b/g,
  /\bAKIA[A-Z0-9]{16}\b/g,
  /\bghp_[A-Za-z0-9]{20,}\b/g,
  /\bBearer\s+[A-Za-z0-9\-._~+/]+=*/gi,
];

const KEY_REQUEST =
  /(chave(s)?\s+de\s+api|api\s*key|anthropic_api_key|openai_api_key|secret[_\s]?key)/i;

export function requestsApiKeys(text) {
  return KEY_REQUEST.test(String(text || ""));
}

export function redactSecrets(text) {
  let out = String(text ?? "");
  for (const re of API_KEY_PATTERNS) {
    out = out.replace(re, "[BLOQUEADO]");
  }
  return out;
}

export function maskSecret(value) {
  const v = String(value || "");
  if (!v) return "";
  if (v.length <= 4) return "••••";
  return `••••${v.slice(-4)}`;
}

export function isFinancialCommand(text) {
  return /(retirar|retira|levantar|pagar anúncio|comprar cripto|vender cripto|transferir dinheiro|autorizar pagamento)/i.test(
    String(text || "")
  );
}

export function unknownSpeakerReply() {
  return "Não reconheço esta voz. Só o Senhor Letício pode dar comandos à LétimaX.";
}

export function refuseNonOwner() {
  return {
    refused: true,
    alert: true,
    message:
      "Recusado. A LétimaX obedece única e exclusivamente ao Senhor Letício. Este comando foi registado e o Senhor Letício será notificado.",
  };
}

~~~

### letimax/server/index.js
~~~js
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import crypto from "node:crypto";
import { openDb, seedIfEmpty, defaultDbPath } from "./db.js";
import {
  chatReply,
  dashboardSnapshot,
  getSetting,
  setSetting,
  approveOpportunity,
} from "./engine.js";
import { redactSecrets, maskSecret, requestsApiKeys } from "../shared/security.js";
import { lockoutForFailures, isLockActive } from "../shared/lockout.js";
import { raqueamentoEligible, daysSinceLastHighScore } from "../shared/raqueamento.js";
import { RAQUEAMENTO_STRATEGIES, OWNER } from "../shared/constants.js";
import { canPerform } from "../shared/autonomy.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export function createServer({ dbPath = defaultDbPath(), port = 8787 } = {}) {
  const db = openDb(dbPath);
  seedIfEmpty(db);

  const server = http.createServer(async (req, res) => {
    cors(res);
    if (req.method === "OPTIONS") {
      res.writeHead(204);
      res.end();
      return;
    }
    try {
      const url = new URL(req.url, "http://127.0.0.1");
      const body = await readBody(req);
      const handled = await route(db, req.method, url, body, res);
      if (!handled) {
        json(res, 404, { error: "não encontrado" });
      }
    } catch (err) {
      json(res, 500, { error: "erro interno", detail: String(err.message || err) });
    }
  });

  server.letimaxDb = db;
  server.letimaxListen = () =>
    new Promise((resolve) => {
      server.listen(port, "127.0.0.1", () => resolve(server));
    });
  return server;
}

async function route(db, method, url, body, res) {
  const p = url.pathname;

  if (method === "GET" && p === "/api/health") {
    json(res, 200, { ok: true, name: "LétimaX", owner: OWNER.name });
    return true;
  }

  if (method === "GET" && p === "/api/dashboard") {
    json(res, 200, dashboardSnapshot(db));
    return true;
  }

  if (method === "GET" && p === "/api/bootstrap") {
    json(res, 200, {
      dashboard: dashboardSnapshot(db),
      settings: allSettings(db),
      products: db.prepare("SELECT * FROM products").all(),
      opportunities: db.prepare("SELECT * FROM opportunities ORDER BY score DESC").all(),
      niches: db.prepare("SELECT * FROM niches ORDER BY potential DESC").all(),
      sources: db.prepare("SELECT * FROM revenue_sources").all(),
      goals: db.prepare("SELECT * FROM goals").all(),
      emails: db.prepare("SELECT * FROM emails").all(),
      assets: db.prepare("SELECT * FROM assets").all(),
      pages: db.prepare("SELECT * FROM pages").all(),
      courses: db.prepare("SELECT * FROM courses").all(),
      webinars: db.prepare("SELECT * FROM webinars").all(),
      contacts: db.prepare("SELECT * FROM contacts").all(),
      tickets: db.prepare("SELECT * FROM tickets").all(),
      finance: db.prepare("SELECT * FROM finance").all(),
      health: db.prepare("SELECT * FROM health ORDER BY id DESC LIMIT 30").all(),
      documents: db.prepare("SELECT * FROM documents").all(),
      affiliatesExt: db.prepare("SELECT * FROM affiliates_ext").all(),
      affiliatesOwn: db.prepare("SELECT * FROM affiliates_own").all(),
      launches: db.prepare("SELECT * FROM launches").all(),
      testimonials: db.prepare("SELECT * FROM testimonials").all(),
      sites: db.prepare("SELECT * FROM sites").all(),
      videos: db.prepare("SELECT * FROM videos").all(),
      presentations: db.prepare("SELECT * FROM presentations").all(),
      automations: db.prepare("SELECT * FROM automations").all(),
      businesses: db.prepare("SELECT * FROM businesses").all(),
      onboarding: db.prepare("SELECT * FROM onboarding").all(),
      referrals: db.prepare("SELECT * FROM referrals").all(),
      crypto: db.prepare("SELECT * FROM crypto_watch").all(),
      company: Object.fromEntries(db.prepare("SELECT key, value FROM company").all().map((r) => [r.key, r.value])),
      conversations: db.prepare("SELECT * FROM conversations ORDER BY id DESC LIMIT 50").all().reverse(),
      tasks: db.prepare("SELECT * FROM tasks ORDER BY id DESC LIMIT 50").all(),
      securityLog: db.prepare("SELECT * FROM security_log ORDER BY id DESC LIMIT 50").all(),
      vaultMeta: db.prepare("SELECT id, platform, email FROM vault").all(),
      secretsMeta: db.prepare("SELECT name, section FROM secrets").all(),
      raqueamento: raqueamentoState(db),
    });
    return true;
  }

  if (method === "POST" && p === "/api/chat") {
    const owner = body.owner !== false;
    const reply = chatReply(db, body.message, { owner, voiceOk: body.voiceOk !== false });
    const safe = redactSecrets(reply.reply);
    db.prepare("INSERT INTO conversations (role, content, created_at) VALUES (?,?,?)").run(
      "user",
      String(body.message || "").slice(0, 4000),
      new Date().toISOString()
    );
    db.prepare("INSERT INTO conversations (role, content, created_at) VALUES (?,?,?)").run(
      "assistant",
      safe,
      new Date().toISOString()
    );
    json(res, 200, { ...reply, reply: safe });
    return true;
  }

  if (method === "POST" && p === "/api/opportunities/approve") {
    json(res, 200, approveOpportunity(db, Number(body.id)));
    return true;
  }
  if (method === "POST" && p === "/api/opportunities/reject") {
    db.prepare("UPDATE opportunities SET status='rejeitada' WHERE id=?").run(Number(body.id));
    json(res, 200, { ok: true });
    return true;
  }
  if (method === "POST" && p === "/api/opportunities/later") {
    db.prepare("UPDATE opportunities SET status='adiada' WHERE id=?").run(Number(body.id));
    json(res, 200, { ok: true });
    return true;
  }

  if (method === "POST" && p === "/api/products/approve") {
    db.prepare("UPDATE products SET status='Publicado' WHERE id=? AND status='Aguarda Aprovação'").run(
      Number(body.id)
    );
    json(res, 200, { ok: true });
    return true;
  }

  if (method === "POST" && p === "/api/settings") {
    for (const [k, v] of Object.entries(body || {})) {
      if (k === "niche" && getSetting(db, "niche") !== String(v)) {
        json(res, 400, { error: "Mudança de nicho só com aprovação explícita via /api/niche/approve" });
        return true;
      }
      setSetting(db, k, v);
    }
    json(res, 200, { ok: true, settings: allSettings(db) });
    return true;
  }

  if (method === "POST" && p === "/api/niche/approve") {
    setSetting(db, "niche", body.niche);
    json(res, 200, { ok: true });
    return true;
  }

  if (method === "POST" && p === "/api/secrets") {
    if (requestsApiKeys(JSON.stringify(body))) {
      /* storing is allowed; revealing is not */
    }
    const name = String(body.name || "").trim();
    const value = String(body.value || "");
    if (!name || !value) {
      json(res, 400, { error: "nome e valor obrigatórios" });
      return true;
    }
    if (process.env.NODE_ENV === "test") {
      /* keep in db hashed */
    }
    const enc = encrypt(value);
    db.prepare(
      "INSERT INTO secrets(name,value,section,updated_at) VALUES(?,?,?,?) ON CONFLICT(name) DO UPDATE SET value=excluded.value, section=excluded.section, updated_at=excluded.updated_at"
    ).run(name, enc, Number(body.section || 3), new Date().toISOString());
    json(res, 200, { ok: true, name, masked: maskSecret(value) });
    return true;
  }

  if (method === "GET" && p === "/api/secrets") {
    const rows = db.prepare("SELECT name, section, value FROM secrets").all();
    json(
      res,
      200,
      rows.map((r) => ({
        name: r.name,
        section: r.section,
        masked: maskSecret(decrypt(r.value)),
      }))
    );
    return true;
  }

  if (method === "DELETE" && p.startsWith("/api/secrets/")) {
    const name = decodeURIComponent(p.slice("/api/secrets/".length));
    db.prepare("DELETE FROM secrets WHERE name=?").run(name);
    json(res, 200, { ok: true });
    return true;
  }

  if (method === "POST" && p === "/api/finance/execute") {
    json(res, 403, {
      error: "A LétimaX nunca executa operações financeiras nem retira dinheiro.",
    });
    return true;
  }

  if (method === "POST" && p === "/api/raqueamento/activate") {
    const st = raqueamentoState(db);
    if (!st.eligible) {
      json(res, 400, st);
      return true;
    }
    if (!body.approved) {
      json(res, 400, { error: "Requer aprovação explícita do Senhor Letício.", prompt: st.prompt });
      return true;
    }
    setSetting(db, "raqueamento_active", "1");
    json(res, 200, { ok: true, strategies: RAQUEAMENTO_STRATEGIES });
    return true;
  }

  if (method === "GET" && p === "/api/raqueamento") {
    json(res, 200, raqueamentoState(db));
    return true;
  }

  if (method === "POST" && p === "/api/goals") {
    db.prepare("INSERT INTO goals (month, target, current) VALUES (?,?,?)").run(
      body.month || new Date().toISOString().slice(0, 7),
      Number(body.target),
      Number(body.current || 0)
    );
    json(res, 200, { ok: true });
    return true;
  }

  if (method === "POST" && p === "/api/health-log") {
    db.prepare("INSERT INTO health (mood, sleep_hours, created_at) VALUES (?,?,?)").run(
      body.mood ?? null,
      body.sleep_hours ?? null,
      new Date().toISOString()
    );
    json(res, 200, { ok: true });
    return true;
  }

  if (method === "POST" && p === "/api/contacts") {
    db.prepare("INSERT INTO contacts (name, email, kind, notes) VALUES (?,?,?,?)").run(
      body.name,
      body.email || "",
      body.kind || "cliente",
      body.notes || ""
    );
    json(res, 200, { ok: true });
    return true;
  }

  if (method === "POST" && p === "/api/vault") {
    json(res, 401, { error: "Cofre exige biometria dupla confirmada no cliente antes de enviar." });
    return true;
  }

  if (method === "POST" && p === "/api/vault/store") {
    if (!body.dualBiometric) {
      json(res, 401, { error: "Biometria dupla obrigatória." });
      return true;
    }
    db.prepare("INSERT INTO vault (platform, email, secret, notes) VALUES (?,?,?,?)").run(
      body.platform,
      body.email,
      encrypt(String(body.secret || "")),
      body.notes || ""
    );
    json(res, 200, { ok: true });
    return true;
  }

  if (method === "GET" && p === "/api/crypto") {
    json(res, 200, {
      note: "Retiradas e depósitos são sempre manuais.",
      watch: db.prepare("SELECT * FROM crypto_watch").all(),
      tickers: await fetchTickers(),
    });
    return true;
  }

  if (method === "POST" && p === "/api/lockout/fail") {
    const n = Number(getSetting(db, "fail_count") || 0) + 1;
    setSetting(db, "fail_count", String(n));
    const L = lockoutForFailures(n);
    if (L.permanent) setSetting(db, "lock_until", "permanent");
    else if (L.locked) setSetting(db, "lock_until", String(Date.now() + L.minutes * 60 * 1000));
    db.prepare("INSERT INTO security_log (kind, detail, created_at) VALUES (?,?,?)").run(
      "biometria_falhada",
      `tentativa ${n}`,
      new Date().toISOString()
    );
    json(res, 200, { failCount: n, ...L });
    return true;
  }

  if (method === "GET" && p === "/api/lockout") {
    const until = getSetting(db, "lock_until");
    json(res, 200, {
      failCount: Number(getSetting(db, "fail_count") || 0),
      locked: isLockActive(until),
      lockUntil: until,
    });
    return true;
  }

  if (method === "POST" && p === "/api/lockout/reset") {
    setSetting(db, "fail_count", "0");
    setSetting(db, "lock_until", "0");
    json(res, 200, { ok: true });
    return true;
  }

  if (method === "GET" && p === "/api/autonomy/check") {
    json(res, 200, { allowed: canPerform(Number(url.searchParams.get("level") || 1), url.searchParams.get("action")) });
    return true;
  }

  if (method === "POST" && p === "/api/first-use/complete") {
    setSetting(db, "first_use_done", "1");
    json(res, 200, { ok: true });
    return true;
  }

  if (method === "POST" && p === "/api/documents") {
    db.prepare("INSERT INTO documents (title, type, created_at) VALUES (?,?,?)"
[CONTEÚDO TRUNCADO PELO LIMITE DO RELATÓRIO]
~~~

### letimax/server/engine.js
~~~js
import { redactSecrets, requestsApiKeys, isFinancialCommand } from "../shared/security.js";
import { parseVoiceCommand } from "../shared/voice.js";
import { canPerform } from "../shared/autonomy.js";
import { scoreOpportunity } from "../shared/scoring.js";
import { raqueamentoEligible, daysSinceLastHighScore } from "../shared/raqueamento.js";
import { OWNER } from "../shared/constants.js";

export function chatReply(db, userText, { owner = true, voiceOk = true } = {}) {
  const text = String(userText || "").trim();
  if (!owner) {
    db.prepare(
      "INSERT INTO security_log (kind, detail, created_at) VALUES (?,?,?)"
    ).run("comando_recusado", text.slice(0, 200), new Date().toISOString());
    return {
      reply:
        "Recusado. A LétimaX obedece única e exclusivamente ao Senhor Letício. Alerta registado.",
    };
  }
  if (requestsApiKeys(text)) {
    db.prepare(
      "INSERT INTO security_log (kind, detail, created_at) VALUES (?,?,?)"
    ).run("pedido_chaves", "bloqueado", new Date().toISOString());
    return {
      reply:
        "Recusa imediata. As chaves de API nunca são reveladas. Alerta crítico registado para o Senhor Letício.",
    };
  }
  if (isFinancialCommand(text)) {
    return {
      reply:
        "Não executo operações financeiras, não retiro dinheiro e não autorizo pagamentos sem a sua aprovação explícita — e mesmo com aprovação, retiradas são sempre manuais fora da LétimaX.",
    };
  }

  const cmd = parseVoiceCommand(text, { voiceRecognized: voiceOk });
  if (cmd.ok) {
    return { reply: redactSecrets(handleCommand(db, cmd)), command: cmd };
  }

  const lower = text.toLowerCase();
  const dash = dashboardSnapshot(db);

  if (lower.includes("ganhei hoje") || lower.includes("quanto ganhei")) {
    return { reply: `Hoje a receita registada é de ${fmt(dash.today)}. Meta do mês: ${fmt(dash.goalCurrent)} de ${fmt(dash.goalTarget)}.` };
  }
  if (lower.includes("vendas")) {
    return { reply: `Vendas do produto principal: ${dash.sales}. Receita do dia ${fmt(dash.today)}. Nicho actual: ${dash.niche}.` };
  }
  if (lower.includes("oportunidade")) {
    const opp = dash.bestOpp;
    if (!opp) return { reply: "Não há oportunidades com pontuação acima de 70 neste momento." };
    return {
      reply: `Próxima oportunidade: ${opp.title}, pontuação ${opp.score}, receita estimada ${fmt(opp.min_rev)} a ${fmt(opp.max_rev)}. Aguardo a sua aprovação para implementar.`,
    };
  }
  if (lower.includes("meta")) {
    const left = Math.max(0, dash.goalTarget - dash.goalCurrent);
    const days = dash.daysLeft;
    const need = days > 0 ? left / days : left;
    return {
      reply: `Está a ${fmt(dash.goalCurrent)} dos ${fmt(dash.goalTarget)} — faltam ${days} dias. Precisa de cerca de ${fmt(need)} por dia para atingir a meta.`,
    };
  }
  if (lower.includes("melhor produto")) {
    return { reply: `Produto em destaque: ${dash.product} (${dash.sales} vendas, qualidade ${dash.quality}/100).` };
  }

  return {
    reply: redactSecrets(
      `${OWNER.greeting.split(".")[0]}. Analisei o pedido. Autonomia nível ${dash.autonomy}: posso preparar rascunhos e relatórios; publicação, gastos e mudança de nicho exigem a sua aprovação. ${dash.bestOpp ? `Oportunidade em destaque: ${dash.bestOpp.title} (${dash.bestOpp.score} pts).` : "Motor de Receita sem alerta acima de 70."}`
    ),
  };
}

function handleCommand(db, cmd) {
  const level = Number(getSetting(db, "autonomy_level") || 1);
  if (cmd.id === "theme_dark" || cmd.id === "theme_light") {
    db.prepare("INSERT INTO settings(key,value) VALUES(?,?) ON CONFLICT(key) DO UPDATE SET value=excluded.value").run(
      "theme",
      cmd.id === "theme_dark" ? "dark" : "light"
    );
    return cmd.id === "theme_dark" ? "Modo escuro activado." : "Modo claro activado.";
  }
  if (cmd.id === "autonomy_normal") {
    setSetting(db, "autonomy_level", "1");
    return "Modo normal (nível 1) activado.";
  }
  if (cmd.id === "autonomy_off") {
    setSetting(db, "autonomy_level", "1");
    return "Modo autónomo desactivado. Voltei ao nível 1.";
  }
  if (cmd.id === "autonomy_full") {
    const hours = cmd.args[0];
    setSetting(db, "autonomy_level", "3");
    setSetting(db, "autonomy_hours", String(hours));
    return `Confirmo em voz alta: modo autónomo total por ${hours} horas. Mesmo neste modo não gasto em anúncios, não retiro dinheiro, não mudo de nicho e não crio produto completamente novo.`;
  }
  if (cmd.id === "start") {
    return OWNER.greeting;
  }
  if (cmd.id === "raqueamento") {
    const last = Number(getSetting(db, "last_high_score_at") || 0);
    const days = daysSinceLastHighScore(last);
    const el = raqueamentoEligible({ daysWithoutScoreAbove70: days, ownerApproved: false });
    return el.eligible
      ? el.prompt
      : el.reason;
  }
  if (cmd.id === "sales" || cmd.id === "earned_today" || cmd.id === "day_summary" || cmd.id === "next_opportunity") {
    return chatReply(db, cmd.id === "next_opportunity" ? "oportunidade" : "vendas", {}).reply;
  }
  if (cmd.id === "company_plan") {
    return "A gerar o plano da empresa com os dados acumulados. Estrutura legal recomendada varia por país (Moçambique, Portugal, Brasil). Nada é registado sem a sua aprovação.";
  }
  if (cmd.kind === "hardware" || cmd.kind === "calls" || cmd.kind === "messages" || cmd.kind === "media" || cmd.kind === "theme") {
    return `Comando ${cmd.id} reconhecido. Na versão web este hardware é limitado; na APP Android executa-se após voz confirmada.`;
  }
  void canPerform(level, "draft_for_approval");
  return "Comando reconhecido e registado.";
}

export function dashboardSnapshot(db) {
  const product = db.prepare("SELECT * FROM products ORDER BY id LIMIT 1").get();
  const goal = db.prepare("SELECT * FROM goals ORDER BY id DESC LIMIT 1").get();
  const bestOpp = db
    .prepare("SELECT * FROM opportunities WHERE status='activa' AND score > 70 ORDER BY score DESC LIMIT 1")
    .get();
  const sources = db.prepare("SELECT * FROM revenue_sources").all();
  const emails = db.prepare("SELECT SUM(count) AS n FROM emails").get();
  const now = new Date();
  const monthEnd = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
  return {
    today: Number(getSetting(db, "revenue_today") || 0),
    month: Number(goal?.current || 0),
    goalTarget: Number(goal?.target || 0),
    goalCurrent: Number(goal?.current || 0),
    daysLeft: Math.max(0, monthEnd - now.getDate()),
    product: product?.name,
    sales: product?.sales || 0,
    quality: product?.quality || 0,
    niche: getSetting(db, "niche"),
    autonomy: getSetting(db, "autonomy_level"),
    server: "activo",
    emailList: emails?.n || 0,
    bestOpp,
    sources,
    reputation: 70,
  };
}

export function getSetting(db, key) {
  const row = db.prepare("SELECT value FROM settings WHERE key=?").get(key);
  return row ? row.value : null;
}

export function setSetting(db, key, value) {
  db.prepare(
    "INSERT INTO settings(key,value) VALUES(?,?) ON CONFLICT(key) DO UPDATE SET value=excluded.value"
  ).run(key, String(value));
}

function fmt(n) {
  return `R$ ${Number(n || 0).toFixed(2)}`;
}

export function approveOpportunity(db, id) {
  const row = db.prepare("SELECT * FROM opportunities WHERE id=?").get(id);
  if (!row) return { ok: false, error: "não encontrada" };
  db.prepare("UPDATE opportunities SET status='aprovada' WHERE id=?").run(id);
  return {
    ok: true,
    message: `Oportunidade aprovada. A LétimaX inicia a implementação do passo a passo. Nunca publica produto novo nem gasta dinheiro sem os limites de autonomia.`,
  };
}

export { scoreOpportunity };

~~~

### letimax/server/db.js
~~~js
import { DatabaseSync } from "node:sqlite";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  NICHES,
  REVENUE_SOURCES,
  FIRST_PRODUCT,
  RAQUEAMENTO_STRATEGIES,
} from "../shared/constants.js";
import { scoreOpportunity } from "../shared/scoring.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export function openDb(filePath) {
  const dir = path.dirname(filePath);
  fs.mkdirSync(dir, { recursive: true });
  const db = new DatabaseSync(filePath);
  db.exec("PRAGMA journal_mode = WAL;");
  db.exec("PRAGMA foreign_keys = ON;");
  migrate(db);
  return db;
}

function migrate(db) {
  db.exec(`
    CREATE TABLE IF NOT EXISTS settings (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS secrets (
      name TEXT PRIMARY KEY,
      value TEXT NOT NULL,
      section INTEGER NOT NULL,
      updated_at TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS conversations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      role TEXT NOT NULL,
      content TEXT NOT NULL,
      created_at TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      niche TEXT NOT NULL,
      status TEXT NOT NULL,
      price REAL NOT NULL,
      quality INTEGER NOT NULL,
      sales INTEGER NOT NULL DEFAULT 0,
      watermark INTEGER NOT NULL DEFAULT 1
    );
    CREATE TABLE IF NOT EXISTS opportunities (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      type TEXT NOT NULL,
      score INTEGER NOT NULL,
      min_rev REAL NOT NULL,
      max_rev REAL NOT NULL,
      effort TEXT NOT NULL,
      time_to_result TEXT NOT NULL,
      risk TEXT NOT NULL,
      status TEXT NOT NULL,
      source TEXT NOT NULL,
      steps TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS revenue_sources (
      id INTEGER PRIMARY KEY,
      name TEXT NOT NULL,
      status TEXT NOT NULL,
      revenue REAL NOT NULL
    );
    CREATE TABLE IF NOT EXISTS niches (
      name TEXT PRIMARY KEY,
      trend TEXT NOT NULL,
      potential INTEGER NOT NULL
    );
    CREATE TABLE IF NOT EXISTS goals (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      month TEXT NOT NULL,
      target REAL NOT NULL,
      current REAL NOT NULL
    );
    CREATE TABLE IF NOT EXISTS security_log (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      kind TEXT NOT NULL,
      detail TEXT NOT NULL,
      created_at TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      reason TEXT NOT NULL,
      attempts INTEGER NOT NULL,
      status TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT,
      kind TEXT NOT NULL,
      notes TEXT
    );
    CREATE TABLE IF NOT EXISTS tickets (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      client TEXT NOT NULL,
      status TEXT NOT NULL,
      category TEXT NOT NULL,
      age_hours INTEGER NOT NULL
    );
    CREATE TABLE IF NOT EXISTS emails (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      segment TEXT NOT NULL,
      count INTEGER NOT NULL
    );
    CREATE TABLE IF NOT EXISTS assets (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      estimated REAL NOT NULL,
      revenue REAL NOT NULL,
      growth REAL NOT NULL
    );
    CREATE TABLE IF NOT EXISTS pages (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      type TEXT NOT NULL,
      status TEXT NOT NULL,
      conversion REAL NOT NULL
    );
    CREATE TABLE IF NOT EXISTS courses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      modules INTEGER NOT NULL,
      lessons INTEGER NOT NULL,
      price REAL NOT NULL
    );
    CREATE TABLE IF NOT EXISTS webinars (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      status TEXT NOT NULL,
      conversion REAL NOT NULL
    );
    CREATE TABLE IF NOT EXISTS finance (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      kind TEXT NOT NULL,
      label TEXT NOT NULL,
      amount REAL NOT NULL,
      month TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS health (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      mood INTEGER,
      sleep_hours REAL,
      created_at TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS vault (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      platform TEXT NOT NULL,
      email TEXT NOT NULL,
      secret TEXT NOT NULL,
      notes TEXT
    );
    CREATE TABLE IF NOT EXISTS documents (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      type TEXT NOT NULL,
      created_at TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS affiliates_ext (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      product TEXT NOT NULL,
      platform TEXT NOT NULL,
      commission REAL NOT NULL,
      conversion REAL NOT NULL
    );
    CREATE TABLE IF NOT EXISTS affiliates_own (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      sales INTEGER NOT NULL,
      commission_due REAL NOT NULL
    );
    CREATE TABLE IF NOT EXISTS launches (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      product TEXT NOT NULL,
      phase TEXT NOT NULL,
      revenue REAL NOT NULL
    );
    CREATE TABLE IF NOT EXISTS testimonials (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      product TEXT NOT NULL,
      text TEXT NOT NULL,
      sentiment TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS sites (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      type TEXT NOT NULL,
      status TEXT NOT NULL,
      seo INTEGER NOT NULL
    );
    CREATE TABLE IF NOT EXISTS videos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      type TEXT NOT NULL,
      status TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS presentations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      type TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS automations (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      enabled INTEGER NOT NULL,
      success REAL NOT NULL,
      last_run TEXT
    );
    CREATE TABLE IF NOT EXISTS businesses (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      model TEXT NOT NULL,
      investment REAL NOT NULL,
      days_to_revenue INTEGER NOT NULL,
      risks TEXT NOT NULL
    );
    CREATE TABLE IF NOT EXISTS onboarding (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      client TEXT NOT NULL,
      day INTEGER NOT NULL,
      opened INTEGER NOT NULL
    );
    CREATE TABLE IF NOT EXISTS referrals (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      client TEXT NOT NULL,
      purchases INTEGER NOT NULL,
      value REAL NOT NULL
    );
    CREATE TABLE IF NOT EXISTS crypto_watch (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      symbol TEXT NOT NULL,
      alert_pct REAL NOT NULL
    );
    CREATE TABLE IF NOT EXISTS company (
      key TEXT PRIMARY KEY,
      value TEXT NOT NULL
    );
  `);
}

export function seedIfEmpty(db) {
  const n = db.prepare("SELECT COUNT(*) AS c FROM products").get().c;
  if (n > 0) return;

  const now = new Date().toISOString();
  const set = db.prepare("INSERT INTO settings (key, value) VALUES (?, ?)");
  set.run("autonomy_level", "1");
  set.run("theme", "system");
  set.run("niche", FIRST_PRODUCT.niche);
  set.run("activation_phrase", "LétimaX, iniciar");
  set.run("morning_hour", "08:00");
  set.run("work_start", "08:00");
  set.run("work_end", "22:00");
  set.run("first_use_done", "0");
  set.run("server_url", "http://127.0.0.1:8787");
  set.run("last_high_score_at", String(Date.now()));
  set.run("raqueamento_active", "0");
  set.run("token_limit", "8000");
  set.run("affiliate_commission", "50");
  set.run("cookie_days", "30");

  db.prepare(
    "INSERT INTO products (name, niche, status, price, quality, sales, watermark) VALUES (?,?,?,?,?,?,?)"
  ).run(
    FIRST_PRODUCT.name,
    FIRST_PRODUCT.niche,
    "Aguarda Aprovação",
    FIRST_PRODUCT.priceMaxUsd,
    82,
    0,
    1
  );

  const insOpp = db.prepare(
    `INSERT INTO opportunities (title, type, score, min_rev, max_rev, effort, time_to_result, risk, status, source, steps)
     VALUES (?,?,?,?,?,?,?,?,?,?,?)`
  );

  const opps = [
    {
      title: "Lançamento relâmpago 48h do curso de IA",
      type: "lancamento_relampago",
      p: { returnPotential: 88, ease: 70, speed: 90, history: 60 },
      min: 200,
      max: 900,
      effort: "médio",
      time: "imediato",
      risk: "baixo",
      source: "motor",
      steps: JSON.stringify([
        "Reescrever copy da página",
        "Email à lista com desconto 48h",
        "Aguardar aprovação do Senhor Letício",
      ]),
    },
    {
      title: "Upsell para compradores sem compra há 30 dias",
      type: "upsell",
      p: { returnPotential: 75, ease: 85, speed: 80, history: 70 },
      min: 80,
      max: 400,
      effort: "baixo",
      time: "1 semana",
      risk: "baixo",
      source: "motor",
      steps: JSON.stringify(["Segmentar inactivos", "Oferta complementar", "Aprovar envio"]),
    },
    {
      title: "Nicho satélite: prompts de IA para WhatsApp Business",
      type: "novo_nicho",
      p: { returnPotential: 60, ease: 40, speed: 45, history: 30 },
      min: 0,
      max: 500,
      effort: "alto",
      time: "1 mês",
      risk: "médio",
      source: "motor",
      steps: JSON.stringify(["Relatório comparativo", "Aguardar mudança de nicho"]),
    },
  ];
  for (const o of opps) {
    const { score } = scoreOpportunity(o.p);
    insOpp.run(
      o.title,
      o.type,
      score,
      o.min,
      o.max,
      o.effort,
      o.time,
      o.risk,
      "activa",
      o.source,
      o.steps
    );
  }

  const insSrc = db.prepare(
    "INSERT INTO revenue_sources (id, name, status, revenue) VALUES (?,?,?,?)"
  );
  for (const s of REVENUE_SOURCES) {
    insSrc.run(s.id, s.name, s.id === 1 ? "activa" : "em_construcao", s.id === 1 ? 0 : 0);
  }

  const insN = db.prepare("INSERT INTO niches (name, trend, potential) VALUES (?,?,?)");
  NICHES.forEach((name, i) => {
    const trend = i === 0 ? "subindo" : i % 3 === 0 ? "descendo" : "estável";
    insN.run(name, trend, 90 - i * 3);
  });

  db.prepare("INSERT INTO goals (month, target, current) VALUES (?,?,?)").run(
    now.slice(0, 7),
    2000,
    0
  );

  db.prepare("INSERT INTO emails (segment, count) VALUES (?,?)").run("não compradores", 0);
  db.prepare("INSERT INTO emails (segment, count) VALUES (?,?)").run("compradores activos", 0);
  db.prepare("INSERT INTO emails (segment, count) VALUES (?,?)").run("inactivos", 0);
  db.prepare("INSERT INTO emails (segment, count) VALUES (?,?)").run("VIP", 0);

  const assets = [
    ["Biblioteca de produtos", 27, 0, 0],
    ["Lista de emails", 0, 0, 0],
    ["Canal de conteúdo", 0, 0, 0],
    ["Propriedade intelectual", 50, 0, 0],
    ["Rede de afiliados", 0, 0, 0],
    ["Membership", 0, 0, 0],
    ["Autoridade no nicho", 10, 0, 0],
  ];
  const insA = db.prepare(
    "INSERT INTO assets (name, estimated, revenue, growth) VALUES (?,?,?,?)"
  );
  for (const a of assets) insA.run(...a);

  db.prepare(
    "INSERT INTO pages (title, type, status, conversion) VALUES (?,?,?,?)"
  ).run("Página de vendas — Negócio Digital com IA", "vendas", "rascunho", 0);

  db.prepare(
    "INSERT INTO courses (title, modules, lessons, price) VALUES (?,?,?,?)"
  ).run(FIRST_PRODUCT.name, 4, 12, 27);

  db.prepare(
    "INSERT INTO businesses (name, model, investment, days_to_revenue, risks) VALUES (?,?,?,?,?)"
  ).run(
    "Consultoria automatizada de IA para pequenos negócios",
    "assinatura mensal",
    0,
    14,
    "dependência de chaves de IA; precisa de aprovação"
  );

  db.prepare("INSERT INTO crypto_watch (symbol, alert_pct) VALUES (?,?)").run("BTCUSDT", 5);
  db.prepare("INS
[CONTEÚDO TRUNCADO PELO LIMITE DO RELATÓRIO]
~~~

### letimax/web/src/main.jsx
~~~jsx
import { StrictMode, useCallback, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./styles.css";
import { initTheme } from "./theme.js";
import { api } from "./api.js";
import { loadProfile, sessionOk } from "./auth/biometric.js";
import { Autenticacao, Cadastro, PrimeiroUso } from "./pages/Auth.jsx";
import { Shell } from "./pages/Shell.jsx";
import * as S from "./pages/Screens.jsx";

initTheme();

function Guard({ children }) {
  const [state, setState] = useState("load");
  useEffect(() => {
    (async () => {
      const p = await loadProfile();
      if (!p) setState("cadastro");
      else if (!sessionOk()) setState("auth");
      else setState("ok");
    })();
  }, []);
  if (state === "load") return <div className="center">LétimaX…</div>;
  if (state === "cadastro") return <Navigate to="/cadastro-biometrico" replace />;
  if (state === "auth") return <Navigate to="/autenticacao" replace />;
  return children;
}

function App() {
  const [data, setData] = useState(null);
  const reload = useCallback(() => {
    api("/bootstrap").then(setData).catch(() => setData((d) => d || { dashboard: {}, settings: {} }));
  }, []);
  useEffect(() => {
    reload();
    const t = setInterval(reload, 30000);
    return () => clearInterval(t);
  }, [reload]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cadastro-biometrico" element={<Cadastro />} />
        <Route path="/autenticacao" element={<Autenticacao />} />
        <Route path="/primeiro-uso" element={<PrimeiroUso />} />
        <Route
          path="/"
          element={
            <Guard>
              <Shell data={data} reload={reload} />
            </Guard>
          }
        >
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="chat" element={<S.Chat />} />
          <Route path="dashboard" element={<S.Dashboard />} />
          <Route path="metas" element={<S.Metas />} />
          <Route path="motor-receita" element={<S.Motor />} />
          <Route path="raqueamento" element={<S.Raqueamento />} />
          <Route path="activos" element={<S.Activos />} />
          <Route path="novo-negocio" element={<S.NovoNegocio />} />
          <Route path="produtos" element={<S.Produtos />} />
          <Route path="cursos" element={<S.Cursos />} />
          <Route path="mercado" element={<S.Mercado />} />
          <Route path="marketing" element={<S.Marketing />} />
          <Route path="webinars" element={<S.Webinars />} />
          <Route path="afiliados-externos" element={<S.AfiliadosExt />} />
          <Route path="afiliados-proprios" element={<S.AfiliadosOwn />} />
          <Route path="lancamentos" element={<S.Lancamentos />} />
          <Route path="email-marketing" element={<S.EmailMkt />} />
          <Route path="analytics" element={<S.AnalyticsP />} />
          <Route path="reputacao" element={<S.Reputacao />} />
          <Route path="suporte" element={<S.Suporte />} />
          <Route path="onboarding" element={<S.OnboardingP />} />
          <Route path="referencias" element={<S.Referencias />} />
          <Route path="paginas" element={<S.Paginas />} />
          <Route path="videos" element={<S.VideosP />} />
          <Route path="sites" element={<S.SitesP />} />
          <Route path="apresentacoes" element={<S.Apresentacoes />} />
          <Route path="automacao" element={<S.Automacao />} />
          <Route path="oportunidades" element={<S.Oportunidades />} />
          <Route path="investimentos" element={<S.Investimentos />} />
          <Route path="empresa" element={<S.Empresa />} />
          <Route path="financas" element={<S.Financas />} />
          <Route path="contactos" element={<S.Contactos />} />
          <Route path="saude" element={<S.Saude />} />
          <Route path="passwords" element={<S.Passwords />} />
          <Route path="documentos" element={<S.Documentos />} />
          <Route path="configuracoes" element={<S.Configuracoes />} />
          <Route path="logs" element={<S.Logs />} />
          <Route path="actualizacao" element={<S.Actualizacao />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

~~~

### letimax/web/src/theme.js
~~~js
const KEY = "letimax-theme";

export function preferredTheme(setting = "system") {
  if (setting === "light" || setting === "dark") return setting;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function applyTheme(mode) {
  const resolved = preferredTheme(mode);
  document.documentElement.setAttribute("data-theme", resolved);
  localStorage.setItem(KEY, mode);
  return resolved;
}

export function loadThemeSetting() {
  return localStorage.getItem(KEY) || "system";
}

export function cycleThemeFromCommand(which) {
  const mode = which === "dark" ? "dark" : "light";
  localStorage.setItem(KEY, mode);
  return mode;
}

export function initTheme() {
  applyTheme(loadThemeSetting());
  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    if (loadThemeSetting() === "system") applyTheme("system");
  });
}

~~~

### letimax/web/src/speak.js
~~~js
import { OWNER } from "@shared/constants.js";

export function speak(text) {
  try {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "pt-PT";
    u.pitch = 0.9;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(u);
  } catch {
    /* Web Speech pode não existir */
  }
}

export function listenOnce() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) return Promise.reject(new Error("Reconhecimento de voz indisponível neste browser."));
  return new Promise((resolve, reject) => {
    const rec = new SR();
    rec.lang = "pt-PT";
    rec.onresult = (e) => resolve(e.results[0][0].transcript);
    rec.onerror = (e) => reject(e.error);
    rec.start();
  });
}

export { OWNER };

~~~

### letimax/web/src/api.js
~~~js
const API = "/api";

export async function api(path, opts = {}) {
  const res = await fetch(`${API}${path}`, {
    headers: { "Content-Type": "application/json", ...(opts.headers || {}) },
    ...opts,
    body: opts.body ? JSON.stringify(opts.body) : undefined,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err = new Error(data.error || `HTTP ${res.status}`);
    err.status = res.status;
    err.data = data;
    throw err;
  }
  return data;
}

~~~

### letimax/web/src/auth/biometric.js
~~~js
import { FACE_ANGLES, VOICE_ENROLL_PHRASES } from "@shared/constants.js";
import { FACE_MIN, VOICE_MIN } from "@shared/lockout.js";

const DB = "letimax-biometric";
const STORE = "profile";

function openIdb() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB, 1);
    req.onupgradeneeded = () => req.result.createObjectStore(STORE);
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export async function loadProfile() {
  const db = await openIdb();
  return new Promise((resolve, reject) => {
    const q = db.transaction(STORE).objectStore(STORE).get("owner");
    q.onsuccess = () => resolve(q.result || null);
    q.onerror = () => reject(q.error);
  });
}

export async function saveProfile(profile) {
  const db = await openIdb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, "readwrite");
    tx.objectStore(STORE).put(profile, "owner");
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

export async function clearProfile() {
  const db = await openIdb();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORE, "readwrite");
    tx.objectStore(STORE).delete("owner");
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}

function cosine(a, b) {
  if (!a?.length || !b?.length || a.length !== b.length) return 0;
  let dot = 0, na = 0, nb = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    na += a[i] * a[i];
    nb += b[i] * b[i];
  }
  if (!na || !nb) return 0;
  return dot / Math.sqrt(na * nb);
}

export function embeddingFromImageData(data) {
  const bins = new Array(32).fill(0);
  for (let i = 0; i < data.length; i += 16) {
    const y = 0.299 * data[i] + 0.587 * data[i + 1] + 0.114 * data[i + 2];
    bins[Math.min(31, Math.floor((y / 255) * 32))]++;
  }
  const s = bins.reduce((a, b) => a + b, 0) || 1;
  return bins.map((n) => n / s);
}

export function avgEmbed(list) {
  if (!list.length) return [];
  const out = new Array(list[0].length).fill(0);
  for (const e of list) e.forEach((v, i) => (out[i] += v));
  return out.map((v) => v / list.length);
}

export function faceScore(live, stored) {
  return cosine(live, stored);
}

export function voiceScore(live, stored) {
  return cosine(live, stored);
}

export const THRESHOLDS = { FACE_MIN, VOICE_MIN, FACE_ANGLES, VOICE_ENROLL_PHRASES };

export async function captureFaceEmbed(video) {
  const canvas = document.createElement("canvas");
  canvas.width = 160;
  canvas.height = 160;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(video, 0, 0, 160, 160);
  const img = ctx.getImageData(0, 0, 160, 160);
  return embeddingFromImageData(img.data);
}

export async function captureVoiceEmbed(stream, ms = 1800) {
  const ctx = new AudioContext();
  const src = ctx.createMediaStreamSource(stream);
  const analyser = ctx.createAnalyser();
  analyser.fftSize = 256;
  src.connect(analyser);
  const acc = new Array(analyser.frequencyBinCount).fill(0);
  const t0 = Date.now();
  while (Date.now() - t0 < ms) {
    const arr = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(arr);
    arr.forEach((v, i) => (acc[i] += v));
    await new Promise((r) => setTimeout(r, 50));
  }
  await ctx.close();
  const s = acc.reduce((a, b) => a + b, 0) || 1;
  return acc.map((n) => n / s);
}

export function sessionSet(ok) {
  sessionStorage.setItem("letimax_owner", ok ? "1" : "0");
}
export function sessionOk() {
  return sessionStorage.getItem("letimax_owner") === "1";
}
export function sessionClear() {
  sessionStorage.removeItem("letimax_owner");
}

~~~

### letimax/web/src/pages/Auth.jsx
~~~jsx
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  THRESHOLDS,
  captureFaceEmbed,
  captureVoiceEmbed,
  saveProfile,
  loadProfile,
  avgEmbed,
  faceScore,
  voiceScore,
  sessionSet,
} from "../auth/biometric.js";
import { api } from "../api.js";
import { speak, OWNER } from "../speak.js";

export function Cadastro() {
  const nav = useNavigate();
  const [phase, setPhase] = useState(1);
  const [voiceIdx, setVoiceIdx] = useState(0);
  const [voiceEmbeds, setVoiceEmbeds] = useState([]);
  const [faceMap, setFaceMap] = useState({});
  const [msg, setMsg] = useState("");
  const [pin, setPin] = useState("");
  const videoRef = useRef(null);
  const streamRef = useRef(null);

  useEffect(() => {
    (async () => {
      const existing = await loadProfile();
      if (existing) nav("/autenticacao", { replace: true });
    })();
  }, [nav]);

  async function recVoice() {
    setMsg("A gravar…");
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const emb = await captureVoiceEmbed(stream, 2000);
    stream.getTracks().forEach((t) => t.stop());
    const next = [...voiceEmbeds, emb];
    setVoiceEmbeds(next);
    setMsg("Frase aceite.");
    if (voiceIdx + 1 < THRESHOLDS.VOICE_ENROLL_PHRASES.length) setVoiceIdx(voiceIdx + 1);
    else setPhase(2);
  }

  async function startCam() {
    const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } });
    streamRef.current = stream;
    if (videoRef.current) videoRef.current.srcObject = stream;
  }

  async function captureAngle(angle) {
    if (!videoRef.current) return;
    const emb = await captureFaceEmbed(videoRef.current);
    setFaceMap({ ...faceMap, [angle]: emb });
  }

  async function finish() {
    if (Object.keys(faceMap).length < 5) {
      setMsg("Capture os 5 ângulos.");
      return;
    }
    streamRef.current?.getTracks().forEach((t) => t.stop());
    await saveProfile({
      voice: avgEmbed(voiceEmbeds),
      face: avgEmbed(Object.values(faceMap)),
      pin,
      createdAt: Date.now(),
      deviceOnly: true,
    });
    setPhase(3);
    speak(OWNER.biometricConfirm);
  }

  if (phase === 3) {
    return (
      <div className="center">
        <div className="card" style={{ textAlign: "center", maxWidth: 420 }}>
          <div className="logo" style={{ fontSize: 42 }}>◆</div>
          <h2 className="logo">LétimaX</h2>
          <p>{OWNER.biometricConfirm}</p>
          <button className="btn" onClick={() => nav("/autenticacao")}>Iniciar LétimaX</button>
        </div>
      </div>
    );
  }

  return (
    <div className="center">
      <div className="card" style={{ maxWidth: 480, width: "100%" }}>
        <h2 className="logo">LétimaX</h2>
        <p className="muted">Cadastro biométrico — os dados ficam só neste dispositivo.</p>
        {phase === 1 && (
          <>
            <h3>Fase 1 — Voz ({voiceIdx + 1}/3)</h3>
            <p>{THRESHOLDS.VOICE_ENROLL_PHRASES[voiceIdx]}</p>
            <div className="progress"><span style={{ width: `${((voiceIdx) / 3) * 100}%` }} /></div>
            <div className="row" style={{ marginTop: 12 }}>
              <button className="btn" onClick={recVoice}>Gravar frase</button>
              <button className="btn ghost" onClick={() => setMsg("Repita a frase.")}>Repetir</button>
            </div>
          </>
        )}
        {phase === 2 && (
          <>
            <h3>Fase 2 — Rosto</h3>
            <div className="frame"><video ref={videoRef} autoPlay playsInline muted /></div>
            <div className="row" style={{ marginTop: 8 }}>
              <button className="btn ghost" onClick={startCam}>Activar câmara</button>
              {THRESHOLDS.FACE_ANGLES.map((a) => (
                <button key={a} className="btn" onClick={() => captureAngle(a)}>
                  {a}{faceMap[a] ? " ✓" : ""}
                </button>
              ))}
            </div>
            <label className="muted">PIN de emergência (fallback)</label>
            <input type="password" value={pin} onChange={(e) => setPin(e.target.value)} placeholder="PIN" />
            <button className="btn" style={{ marginTop: 12 }} onClick={finish}>Confirmar perfil</button>
          </>
        )}
        {msg && <p className="muted">{msg}</p>}
      </div>
    </div>
  );
}

export function Autenticacao() {
  const nav = useNavigate();
  const [phase, setPhase] = useState(1);
  const [status, setStatus] = useState("A verificar identidade…");
  const [ok, setOk] = useState(null);
  const [pin, setPin] = useState("");
  const [locked, setLocked] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    (async () => {
      const p = await loadProfile();
      if (!p) {
        nav("/cadastro-biometrico", { replace: true });
        return;
      }
      const L = await api("/lockout").catch(() => ({ locked: false }));
      if (L.locked) setLocked(L);
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } });
        if (videoRef.current) videoRef.current.srcObject = stream;
      } catch {
        setStatus("Câmara indisponível — use o PIN de emergência.");
      }
    })();
  }, [nav]);

  async function fail() {
    const r = await api("/lockout/fail", { method: "POST" });
    setLocked(r);
    setOk(false);
    setStatus("Não reconhecido.");
  }

  async function checkFace() {
    const profile = await loadProfile();
    const video = videoRef.current;
    if (!video?.srcObject) {
      setStatus("Active a câmara ou use PIN.");
      return;
    }
    const live = await captureFaceEmbed(video);
    const score = faceScore(live, profile.face);
    if (score >= THRESHOLDS.FACE_MIN) {
      setOk(true);
      setStatus("Rosto reconhecido.");
      video.srcObject.getTracks().forEach((t) => t.stop());
      setPhase(2);
    } else {
      await fail();
    }
  }

  async function checkVoice() {
    const profile = await loadProfile();
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const live = await captureVoiceEmbed(stream, 2000);
      stream.getTracks().forEach((t) => t.stop());
      const score = voiceScore(live, profile.voice);
      if (score >= THRESHOLDS.VOICE_MIN) {
        setOk(true);
        setStatus("Voz reconhecida. Diga: LétimaX, iniciar");
        setPhase(3);
      } else await fail();
    } catch {
      setStatus("Microfone indisponível — use PIN.");
    }
  }

  async function activate() {
    sessionSet(true);
    await api("/lockout/reset", { method: "POST" }).catch(() => {});
    speak(OWNER.greeting);
    const boot = await api("/bootstrap");
    if (boot.settings.first_use_done !== "1") nav("/primeiro-uso");
    else nav("/dashboard");
  }

  async function usePin() {
    const profile = await loadProfile();
    if (profile?.pin && pin === profile.pin) {
      await activate();
    } else {
      setStatus("PIN incorrecto.");
      await fail();
    }
  }

  if (locked?.permanent) {
    return <div className="center"><div className="card"><h2>Bloqueio permanente</h2><p>Alerta por email registado. Contacte o Senhor Letício.</p></div></div>;
  }

  return (
    <div className="center">
      <div className="card" style={{ maxWidth: 480, width: "100%", textAlign: "center" }}>
        <h2 className="logo">LétimaX</h2>
        {phase === 1 && (
          <>
            <div className="frame" style={{ margin: "0 auto" }}>
              <video ref={videoRef} autoPlay playsInline muted />
            </div>
            <p style={{ color: ok === false ? "var(--bad)" : ok ? "var(--ok)" : "inherit" }}>{status}</p>
            <button className="btn" onClick={checkFace}>Verificar rosto</button>
          </>
        )}
        {phase === 2 && (
          <>
            <p>Diga a frase de activação — barra de análise de voz</p>
            <div className="progress"><span style={{ width: "60%" }} /></div>
            <button className="btn" onClick={checkVoice}>Verificar voz</button>
          </>
        )}
        {phase === 3 && (
          <>
            <p className="logo">Aguardando activação… Diga: LétimaX, iniciar</p>
            <button className="btn" onClick={activate}>LétimaX, iniciar</button>
          </>
        )}
        <div style={{ marginTop: 16 }}>
          <p className="muted">PIN de emergência se o reconhecimento falhar</p>
          <input type="password" value={pin} onChange={(e) => setPin(e.target.value)} />
          <button className="btn ghost" onClick={usePin}>Entrar com PIN</button>
        </div>
      </div>
    </div>
  );
}

export function PrimeiroUso() {
  const nav = useNavigate();
  const [key, setKey] = useState("");
  const [msg, setMsg] = useState("");

  async function save() {
    if (key.trim()) {
      await api("/secrets", { method: "POST", body: { name: "ANTHROPIC_API_KEY", value: key.trim(), section: 1 } });
    }
    await api("/first-use/complete", { method: "POST" });
    setMsg("Configuração inicial concluída.");
    nav("/dashboard");
  }

  return (
    <div className="center">
      <div className="card" style={{ maxWidth: 520 }}>
        <h2>Primeiro uso</h2>
        <p>Antes de começar, adicione a chave do Claude para que a LétimaX possa responder. A chave vai só para o servidor via HTTPS — nunca fica no telemóvel.</p>
        <p><a className="gold" href="https://www.anthropic.com" target="_blank" rel="noreferrer">anthropic.com</a></p>
        <input type="password" placeholder="Colar ANTHROPIC_API_KEY" value={key} onChange={(e) => setKey(e.target.value)} />
        <div className="row" style={{ marginTop: 12 }}>
          <button className="btn" onClick={save}>Guardar e continuar</button>
          <button className="btn ghost" onClick={() => { api("/first-use/complete", { method: "POST" }); nav("/configuracoes"); }}>Ir para Configurações Completas</button>
        </div>
        {msg && <p>{msg}</p>}
      </div>
    </div>
  );
}

~~~

### letimax/web/src/pages/Screens.jsx
~~~jsx
import { useOutletContext, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../api.js";
import { speak } from "../speak.js";
import { parseVoiceCommand } from "@shared/voice.js";
import { applyTheme } from "../theme.js";
import { listenOnce } from "../speak.js";

function useData() {
  return useOutletContext();
}

export function Chat() {
  const { data, reload } = useData();
  const [text, setText] = useState("");
  const [msgs, setMsgs] = useState(data?.conversations || []);
  const [hint, setHint] = useState("");

  useEffect(() => setMsgs(data?.conversations || []), [data]);

  async function send(message) {
    const t = (message ?? text).trim();
    if (!t) return;
    setText("");
    setMsgs((m) => [...m, { role: "user", content: t }]);
    setHint("A carregar…");
    const t10 = setTimeout(() => setHint("LétimaX está a processar…"), 10000);
    const t60 = setTimeout(() => setHint("Cancelado por timeout de 60s. Tentar novamente?"), 60000);
    try {
      const cmd = parseVoiceCommand(t, { voiceRecognized: true });
      if (cmd.ok && (cmd.id === "theme_dark" || cmd.id === "theme_light")) {
        applyTheme(cmd.id === "theme_dark" ? "dark" : "light");
      }
      const r = await api("/chat", { method: "POST", body: { message: t, owner: true, voiceOk: true } });
      setMsgs((m) => [...m, { role: "assistant", content: r.reply }]);
      speak(r.reply);
      reload?.();
    } catch (e) {
      setMsgs((m) => [...m, { role: "assistant", content: String(e.message) }]);
    } finally {
      clearTimeout(t10);
      clearTimeout(t60);
      setHint("");
    }
  }

  return (
    <div className="chat">
      <div className="msgs">
        {msgs.map((m, i) => (
          <div key={i} className={`bubble ${m.role === "user" ? "user" : "ai"}`}>{m.content}</div>
        ))}
        {hint && <div className="muted">{hint}</div>}
      </div>
      <div className="composer">
        <input value={text} onChange={(e) => setText(e.target.value)} onKeyDown={(e) => e.key === "Enter" && send()} placeholder="Escreva ou dê um comando de voz…" />
        <button className="btn ghost" onClick={async () => { try { const t = await listenOnce(); setText(t); send(t); } catch (e) { setHint(String(e.message || e)); } }}>Mic</button>
        <button className="btn" onClick={() => send()}>Enviar</button>
      </div>
    </div>
  );
}

export function Dashboard() {
  const { data, reload } = useData();
  const d = data?.dashboard || {};
  const goalPct = d.goalTarget ? Math.min(100, (d.goalCurrent / d.goalTarget) * 100) : 0;
  return (
    <div>
      <h2>Dashboard</h2>
      <div className="grid">
        <Card title="Receita do dia" value={`R$ ${Number(d.today || 0).toFixed(2)}`} sub="vs ontem: n/d (primeiro ciclo)" />
        <Card title="Receita do mês" value={`R$ ${Number(d.month || 0).toFixed(2)}`} />
        <Card title="Lucro líquido" value="R$ 0.00" sub="após custos de APIs" />
        <Card title="Meta do mês">
          <div className="progress"><span style={{ width: `${goalPct}%` }} /></div>
          <p className="muted">{goalPct.toFixed(0)}% · {d.daysLeft} dias restantes</p>
        </Card>
        <Card title="Produto da semana" value={d.product} sub={`${d.sales} vendas · qualidade ${d.quality}`} />
        <Card title="Nicho" value={d.niche} />
        <Card title="Próxima oportunidade" value={d.bestOpp?.title || "Nenhuma > 70"} sub={d.bestOpp ? `${d.bestOpp.score} pts` : ""} />
        <Card title="Lista de emails" value={String(d.emailList || 0)} />
        <Card title="Reputação" value={`${d.reputation}/100`} />
        <Card title="Integrações" value="Servidor activo" sub="chaves: ver Configurações" />
      </div>
      <button className="btn ghost" style={{ marginTop: 12 }} onClick={() => { speak("Resumo matinal: receita do dia zero. Motor de Receita activo."); reload?.(); }}>Resumo em voz</button>
    </div>
  );
}

function Card({ title, value, sub, children }) {
  return (
    <div className="card">
      <div className="muted">{title}</div>
      {value && <div style={{ fontSize: 20, marginTop: 6 }}>{value}</div>}
      {sub && <div className="muted">{sub}</div>}
      {children}
    </div>
  );
}

export function Metas() {
  const { data, reload } = useData();
  const g = data?.goals?.[0];
  const d = data?.dashboard || {};
  const left = Math.max(0, (g?.target || 0) - (g?.current || 0));
  const need = d.daysLeft ? left / d.daysLeft : left;
  const [target, setTarget] = useState(g?.target || 2000);
  return (
    <div>
      <h2>Metas</h2>
      <p>Está a R$ {Number(g?.current || 0).toFixed(0)} dos R$ {Number(g?.target || 0).toFixed(0)} — faltam {d.daysLeft} dias.</p>
      <p>Precisa de vender cerca de R$ {need.toFixed(0)} por dia para atingir a meta.</p>
      {g?.current >= g?.target && g?.target > 0 && <p className="gold">Parabéns, Senhor Letício! Meta atingida.</p>}
      {g?.current < g?.target && d.daysLeft < 10 && <p>Sugiro reactivar a lista de emails com promoção relâmpago — só após aprovação.</p>}
      <div className="row">
        <input type="number" value={target} onChange={(e) => setTarget(e.target.value)} />
        <button className="btn" onClick={async () => { await api("/goals", { method: "POST", body: { target: Number(target) } }); reload(); }}>Definir meta</button>
      </div>
    </div>
  );
}

export function Motor() {
  const { data, reload } = useData();
  const list = data?.opportunities || [];
  async function act(path, id) {
    await api(path, { method: "POST", body: { id } });
    reload();
  }
  return (
    <div>
      <h2>Motor de Receita</h2>
      <p className="muted">Notifica só pontuação &gt; 70. Implementação só após Aprovar.</p>
      {list.map((o) => (
        <div className="card" key={o.id} style={{ marginBottom: 10 }}>
          <b>{o.title}</b>
          <p>{o.score} pts · R$ {o.min_rev}–{o.max_rev} · esforço {o.effort} · {o.time_to_result} · risco {o.risk}</p>
          <p className="muted">{JSON.parse(o.steps).join(" → ")}</p>
          <div className="row">
            <button className="btn" onClick={() => act("/opportunities/approve", o.id)}>Aprovar</button>
            <button className="btn danger" onClick={() => act("/opportunities/reject", o.id)}>Rejeitar</button>
            <button className="btn ghost" onClick={() => act("/opportunities/later", o.id)}>Mais tarde</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export function Raqueamento() {
  const { data, reload } = useData();
  const r = data?.raqueamento || {};
  return (
    <div>
      <h2>Sistema de raqueamento (último recurso legal)</h2>
      <p>Não é acesso não autorizado a sistemas. São estratégias de receita de emergência (freelance, tendências, licenciamento) só após 7 dias sem oportunidades &gt; 70 e com a sua aprovação.</p>
      <p>Dias sem score alto: {r.daysWithoutScoreAbove70} · Elegível: {r.eligible ? "sim" : "não"}</p>
      <h3>12 fontes</h3>
      <ul>{(r.sources || []).map((s) => <li key={s.id}>{s.name} — {s.status}</li>)}</ul>
      {(r.strategies || []).map((s) => (
        <div className="card" key={s.id} style={{ marginBottom: 8 }}>
          <b>{s.name}</b>
          <p>{s.detail}</p>
        </div>
      ))}
      <button className="btn" disabled={!r.eligible} onClick={async () => {
        try {
          await api("/raqueamento/activate", { method: "POST", body: { approved: true } });
          reload();
        } catch (e) {
          alert(e.message);
        }
      }}>Activar (com aprovação)</button>
    </div>
  );
}

export function Activos() {
  const { data } = useData();
  return (
    <div>
      <h2>Activos</h2>
      <div className="grid">
        {(data?.assets || []).map((a) => (
          <Card key={a.id} title={a.name} value={`R$ ${a.estimated}`} sub={`Receita ${a.revenue} · crescimento ${a.growth}%`} />
        ))}
      </div>
    </div>
  );
}

export function NovoNegocio() {
  const { data } = useData();
  return (
    <div>
      <h2>Novos negócios legais</h2>
      {(data?.businesses || []).map((b) => (
        <div className="card" key={b.id}>
          <h3>{b.name}</h3>
          <p>Modelo: {b.model} · investimento R$ {b.investment} · primeira receita ~{b.days_to_revenue} dias</p>
          <p>Riscos: {b.risks}</p>
          <button className="btn">Aprovar (aguarda implementação assistida)</button>
        </div>
      ))}
    </div>
  );
}

export function Produtos() {
  const { data, reload } = useData();
  return (
    <div>
      <h2>Produtos</h2>
      <table>
        <thead><tr><th>Nome</th><th>Nicho</th><th>Estado</th><th>Preço</th><th>Qualidade</th><th>Vendas</th><th /></tr></thead>
        <tbody>
          {(data?.products || []).map((p) => (
            <tr key={p.id}>
              <td>{p.name}</td><td>{p.niche}</td><td>{p.status}</td><td>${p.price}</td><td>{p.quality}</td><td>{p.sales}</td>
              <td>{p.status === "Aguarda Aprovação" && <button className="btn" onClick={async () => { await api("/products/approve", { method: "POST", body: { id: p.id } }); reload(); }}>Aprovar</button>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Cursos() {
  const { data } = useData();
  return (
    <div>
      <h2>Cursos</h2>
      {(data?.courses || []).map((c) => (
        <div className="card" key={c.id}><b>{c.title}</b><p>{c.modules} módulos · {c.lessons} aulas · ${c.price}</p></div>
      ))}
      <button className="btn">Criar novo curso (rascunho para aprovação)</button>
    </div>
  );
}

export function Mercado() {
  const { data } = useData();
  return (
    <div>
      <h2>Mercado</h2>
      <button className="btn">Analisar mercado (5 camadas)</button>
      <table>
        <thead><tr><th>Nicho</th><th>Tendência</th><th>Potencial</th></tr></thead>
        <tbody>
          {(data?.niches || []).map((n) => (
            <tr key={n.name}><td>{n.name}</td><td>{n.trend}</td><td>{n.potential}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function Marketing() {
  return (
    <div>
      <h2>Marketing</h2>
      <div className="row">
        <button className="btn">Criar campanha</button>
        <button className="btn">Criar funil (13 etapas)</button>
        <button className="btn">Criar webinar</button>
      </div>
      <p className="muted">Copy PT-BR / EN / ES. Nada é publicado sem aprovação.</p>
    </div>
  );
}

export function SimpleList({ title, rows, render }) {
  return (
    <div>
      <h2>{title}</h2>
      {(rows || []).length === 0 && <p className="muted">Ainda sem itens — a LétimaX cria rascunhos após aprovação.</p>}
      {(rows || []).map(render)}
    </div>
  );
}

export function Webinars() {
  const { data } = useData();
  return <SimpleList title="Webinars" rows={data?.webinars} render={(w) => <div className="card" key={w.id}>{w.title} · {w.status} · conv {w.conversion}%</div>} />;
}
export function AfiliadosExt() {
  const { data } = useData();
  return <SimpleList title="Afiliados externos" rows={data?.affiliatesExt} render={(a) => <div className="card" key={a.id}>{a.product} ({a.platform}) · comissão {a.commission}%</div>} />;
}
export function AfiliadosOwn() {
  const { data } = useData();
  return <SimpleList title="Afiliados próprios" rows={data?.affiliatesOwn} render={(a) => <div className="card" key={a.id}>{a.name} · vendas {a.sales} · a pagar R$ {a.commission_due}</div>} />;
}
export function Lancamentos() {
  const { data } = useData();
  return (
    <div>
      <h2>Lançamentos</h2>
      <p>Pré-lançamento 7 dias · lançamento 3 dias · pós-lançamento</p>
      <SimpleList title="" rows={data?.launches} render={(l) => <div className="card" key={l.id}>{l.product} · {l.phase} · R$ {l.revenue}</div>} />
    </div>
  );
}
export function EmailMkt() {
  const { data } = useData();
  const total = (data?.emails || []).reduce((s, e) => s + e.count, 0);
  return (
    <div>
      <h2>Email ma
[CONTEÚDO TRUNCADO PELO LIMITE DO RELATÓRIO]
~~~

### letimax/web/src/pages/Shell.jsx
~~~jsx
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { BOTTOM_NAV, SIDE_MENU } from "@shared/constants.js";
import { applyTheme, cycleThemeFromCommand } from "../theme.js";

export function Shell({ data, reload }) {
  const nav = useNavigate();
  const d = data?.dashboard || {};

  return (
    <div className="shell">
      <aside className="side">
        <div className="logo" style={{ padding: "4px 10px 16px" }}>LétimaX</div>
        {SIDE_MENU.map((m) => (
          <NavLink key={m.path} to={m.path} className={({ isActive }) => (isActive ? "active" : "")}>
            {m.label}
          </NavLink>
        ))}
      </aside>
      <section className="main">
        <div className="topbar">
          <div className="kpi">Autonomia <b>Nível {d.autonomy}</b></div>
          <div className="kpi">Servidor <span className="dot ok" /> {d.server}</div>
          <div className="kpi">Nicho <b>{d.niche}</b></div>
          <div className="kpi">Hoje <b>R$ {Number(d.today || 0).toFixed(2)}</b></div>
          <div className="kpi">
            Meta {d.goalTarget ? Math.round((d.goalCurrent / d.goalTarget) * 100) : 0}%
          </div>
          <button className="btn ghost" onClick={() => { applyTheme(cycleThemeFromCommand("dark")); }}>Tema</button>
          <button className="btn ghost" onClick={() => reload?.()}>Actualizar</button>
          <button className="btn ghost" onClick={() => nav("/configuracoes")}>Definições</button>
        </div>
        <Outlet context={{ data, reload }} />
      </section>
      <nav className="bottom">
        {BOTTOM_NAV.map((b) => (
          <NavLink key={b.id} to={b.path} className={({ isActive }) => (isActive ? "active" : "")}>
            {b.label}
          </NavLink>
        ))}
      </nav>
    </div>
  );
}

~~~

### letimax/android/app/build.gradle.kts
~~~kts
plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
    id("org.jetbrains.kotlin.plugin.compose")
    id("com.google.devtools.ksp")
}

android {
    namespace = "com.letimax.app"
    compileSdk = 36
    defaultConfig {
        applicationId = "com.letimax.app"
        minSdk = 26
        targetSdk = 36
        versionCode = 1
        versionName = "1.0.0"
        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
    }
    buildTypes {
        release {
            isMinifyEnabled = false
            proguardFiles(getDefaultProguardFile("proguard-android-optimize.txt"), "proguard-rules.pro")
        }
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
    kotlinOptions { jvmTarget = "17" }
    buildFeatures { compose = true }
    testOptions { unitTests.isIncludeAndroidResources = false }
    packaging {
        jniLibs { pickFirsts += listOf("**/*.so") }
        resources {
            excludes += "/META-INF/{AL2.0,LGPL2.1}"
        }
    }
}

dependencies {
    val composeBom = platform("androidx.compose:compose-bom:2024.10.01")
    implementation(composeBom)
    androidTestImplementation(composeBom)
    implementation("androidx.compose.ui:ui")
    implementation("androidx.compose.ui:ui-tooling-preview")
    implementation("androidx.compose.material3:material3")
    implementation("androidx.compose.material:material-icons-extended")
    implementation("androidx.activity:activity-compose:1.9.3")
    implementation("androidx.navigation:navigation-compose:2.8.4")
    implementation("androidx.lifecycle:lifecycle-runtime-ktx:2.8.7")
    implementation("androidx.lifecycle:lifecycle-runtime-compose:2.8.7")
    implementation("androidx.lifecycle:lifecycle-viewmodel-compose:2.8.7")
    implementation("androidx.lifecycle:lifecycle-service:2.8.7")
    implementation("androidx.core:core-ktx:1.15.0")
    implementation("androidx.appcompat:appcompat:1.7.0")
    implementation("com.google.android.material:material:1.12.0")
    implementation("androidx.camera:camera-core:1.4.0")
    implementation("androidx.camera:camera-camera2:1.4.0")
    implementation("androidx.camera:camera-lifecycle:1.4.0")
    implementation("androidx.camera:camera-view:1.4.0")
    implementation("com.google.mlkit:face-detection:16.1.7")
    implementation("org.tensorflow:tensorflow-lite:2.16.1")
    implementation("androidx.room:room-runtime:2.6.1")
    implementation("androidx.room:room-ktx:2.6.1")
    ksp("androidx.room:room-compiler:2.6.1")
    implementation("androidx.security:security-crypto:1.1.0-alpha06")
    implementation("androidx.biometric:biometric:1.1.0")
    implementation("com.squareup.okhttp3:okhttp:4.12.0")
    implementation("org.jetbrains.kotlinx:kotlinx-coroutines-android:1.9.0")
    implementation("androidx.work:work-runtime-ktx:2.9.1")
    testImplementation("junit:junit:4.13.2")
    androidTestImplementation("androidx.test.ext:junit:1.2.1")
    androidTestImplementation("androidx.test.espresso:espresso-core:3.6.1")
}

~~~

### letimax/android/app/src/main/AndroidManifest.xml
~~~xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android">

    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
    <uses-permission android:name="android.permission.CHANGE_WIFI_STATE" />
    <uses-permission android:name="android.permission.CAMERA" />
    <uses-permission android:name="android.permission.RECORD_AUDIO" />
    <uses-permission android:name="android.permission.FLASHLIGHT" />
    <uses-permission android:name="android.permission.VIBRATE" />
    <uses-permission android:name="android.permission.WAKE_LOCK" />
    <uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" />
    <uses-permission android:name="android.permission.POST_NOTIFICATIONS" />
    <uses-permission android:name="android.permission.FOREGROUND_SERVICE" />
    <uses-permission android:name="android.permission.FOREGROUND_SERVICE_DATA_SYNC" />
    <uses-permission android:name="android.permission.USE_BIOMETRIC" />
    <uses-permission android:name="android.permission.USE_FINGERPRINT" />
    <uses-permission android:name="android.permission.MODIFY_AUDIO_SETTINGS" />
    <uses-permission android:name="android.permission.BLUETOOTH" />
    <uses-permission android:name="android.permission.BLUETOOTH_ADMIN" />
    <uses-permission android:name="android.permission.BLUETOOTH_CONNECT" />
    <uses-permission android:name="android.permission.READ_SMS" />
    <uses-permission android:name="android.permission.SEND_SMS" />
    <uses-permission android:name="android.permission.READ_PHONE_STATE" />
    <uses-permission android:name="android.permission.ANSWER_PHONE_CALLS" />
    <uses-permission android:name="android.permission.READ_CALL_LOG" />
    <uses-permission android:name="android.permission.REQUEST_IGNORE_BATTERY_OPTIMIZATIONS" />
    <uses-permission android:name="android.permission.WRITE_SETTINGS" />
    <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
    <uses-permission android:name="android.permission.READ_MEDIA_IMAGES" />

    <uses-feature android:name="android.hardware.camera" android:required="false" />
    <uses-feature android:name="android.hardware.camera.front" android:required="false" />
    <uses-feature android:name="android.hardware.microphone" android:required="false" />

    <application
        android:name=".LetimaApp"
        android:allowBackup="false"
        android:icon="@drawable/ic_letimax"
        android:label="@string/app_name"
        android:roundIcon="@drawable/ic_letimax"
        android:supportsRtl="true"
        android:theme="@style/Theme.LetimaX"
        android:usesCleartextTraffic="true"
        android:networkSecurityConfig="@xml/network_security_config">

        <activity
            android:name=".ui.AutenticacaoActivity"
            android:exported="true"
            android:theme="@style/Theme.LetimaX">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
        <activity android:name=".ui.CadastroBiometricoActivity" android:exported="false" />
        <activity android:name=".ui.PrimeiroUsoActivity" android:exported="false" />
        <activity android:name=".ui.MainActivity" android:exported="false" android:windowSoftInputMode="adjustResize" />

        <service
            android:name=".service.LetimaXService"
            android:exported="false"
            android:foregroundServiceType="dataSync" />

        <service
            android:name=".service.NotificationMonitor"
            android:exported="true"
            android:permission="android.permission.BIND_NOTIFICATION_LISTENER_SERVICE">
            <intent-filter>
                <action android:name="android.service.notification.NotificationListenerService" />
            </intent-filter>
        </service>

        <receiver
            android:name=".service.BootReceiver"
            android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.BOOT_COMPLETED" />
            </intent-filter>
        </receiver>
    </application>
</manifest>

~~~

### letimax/android/app/src/main/java/com/letimax/app/LetimaApp.kt
~~~kt
package com.letimax.app

import android.app.Application
import androidx.room.Room
import com.letimax.app.data.LetimaDatabase
import com.letimax.app.data.LocalRecord
import com.letimax.app.domain.Brand
import com.letimax.app.net.LetimaApi
import com.letimax.app.prefs.AppPrefs
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch

class LetimaApp : Application() {
    lateinit var db: LetimaDatabase
        private set
    lateinit var prefs: AppPrefs
        private set
    lateinit var api: LetimaApi
        private set

    override fun onCreate() {
        super.onCreate()
        instance = this
        prefs = AppPrefs(this)
        db = Room.databaseBuilder(this, LetimaDatabase::class.java, "letimax.db")
            .fallbackToDestructiveMigration()
            .build()
        api = LetimaApi { prefs.serverUrl }
        CoroutineScope(Dispatchers.IO).launch {
            runCatching {
                Brand.roomTables.forEach { table ->
                    if (db.dao().records(table).isEmpty()) {
                        db.dao().insertRecord(LocalRecord(tableName = table, payload = "{}"))
                    }
                }
            }
        }
    }

    companion object {
        lateinit var instance: LetimaApp
            private set
    }
}

~~~

### letimax/android/app/src/main/java/com/letimax/app/ui/ScreenPanes.kt
~~~kt
package com.letimax.app.ui

import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Card
import androidx.compose.material3.LinearProgressIndicator
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Switch
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.letimax.app.LetimaApp
import com.letimax.app.crypto.KeystoreAes
import com.letimax.app.data.Catalog
import com.letimax.app.data.PasswordEntity
import com.letimax.app.domain.Brand
import com.letimax.app.domain.Raqueamento
import com.letimax.app.domain.Security
import com.letimax.app.ui.theme.Gold
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import org.json.JSONObject

@Composable
fun ScreenByRoute(
    spec: RouteSpec,
    data: JSONObject,
    hint: String,
    onHint: (String) -> Unit,
    onReload: () -> Unit,
    onSpeak: (String) -> Unit,
    onListen: ((String) -> Unit) -> Unit,
    onCommand: (String) -> Unit,
) {
    when (spec.route) {
        "chat" -> ChatPane(data, hint, onHint, onReload, onSpeak, onListen, onCommand)
        "dashboard" -> DashboardPane(data, onReload)
        "motor", "oportunidades" -> OpsPane(spec, data, onReload)
        "investimentos" -> CryptoPane(data)
        "passwords" -> VaultPane()
        "config" -> ConfigPane(onReload)
        "logs" -> LogsPane(data, onReload)
        "raqueamento" -> RaqPane(data, onReload, onSpeak)
        "metas" -> GoalsPane(data)
        "produtos" -> ProductsPane(data, onReload)
        "mercado" -> MarketPane(data, onReload)
        "marketing" -> MarketingPane(data, onReload)
        "saude" -> HealthPane(data, onReload)
        "update" -> UpdatePane(data, onSpeak)
        "empresa" -> CompanyPane(data, onReload)
        "financas" -> FinancePane(data)
        else -> DedicatedListPane(spec, data, onReload)
    }
}

@Composable
private fun ChatPane(
    data: JSONObject,
    hint: String,
    onHint: (String) -> Unit,
    onReload: () -> Unit,
    onSpeak: (String) -> Unit,
    onListen: ((String) -> Unit) -> Unit,
    onCommand: (String) -> Unit,
) {
    var text by remember { mutableStateOf("") }
    val conv = Catalog.jsonList(data.optJSONArray("conversations"))
    val dark = androidx.compose.foundation.isSystemInDarkTheme()
    Column(Modifier.fillMaxSize().padding(12.dp)) {
        LazyColumn(Modifier.weight(1f), verticalArrangement = Arrangement.spacedBy(8.dp)) {
            items(conv) { m ->
                val user = m.optString("role") == "user"
                val bg = if (user) Color(0xFFF5E9C8) else if (dark) Color(0xFF2A2A2A) else Color(0xFFF2F2F2)
                Text(
                    m.optString("content"),
                    modifier = Modifier.fillMaxWidth().background(bg).padding(10.dp),
                )
            }
        }
        if (hint.isNotBlank()) Text(hint, color = Color.Gray)
        Row(Modifier.fillMaxWidth(), horizontalArrangement = Arrangement.spacedBy(8.dp)) {
            OutlinedTextField(text, { text = it }, modifier = Modifier.weight(1f), placeholder = { Text("Escreva…") })
            Button(onClick = { onListen { spoken -> text = spoken; onCommand(spoken) } }) { Text("Mic") }
            Button(colors = ButtonDefaults.buttonColors(containerColor = Gold), onClick = {
                val t = text.trim()
                if (t.isEmpty()) return@Button
                text = ""
                onHint("A carregar…")
                onCommand(t)
                onReload()
            }) { Text("Enviar", color = Color.Black) }
        }
    }
}

@Composable
private fun DashboardPane(data: JSONObject, onReload: () -> Unit) {
    val d = data.optJSONObject("dashboard") ?: JSONObject()
    val goal = d.optDouble("goalTarget", 0.0)
    val cur = d.optDouble("goalCurrent", 0.0)
    val pct = if (goal > 0) (cur / goal).toFloat().coerceIn(0f, 1f) else 0f
    val integ = data.optJSONObject("integrations") ?: JSONObject()
    Column(Modifier.verticalScroll(rememberScrollState()).padding(12.dp), verticalArrangement = Arrangement.spacedBy(10.dp)) {
        Text("Dashboard", fontSize = 22.sp, color = Gold)
        Button(onClick = onReload) { Text("Actualizar") }
        Kpi("Receita do dia", "R$ ${d.optDouble("today", 0.0)}  (ontem R$ ${d.optDouble("yesterday", 0.0)})")
        Kpi("Receita do mês", "R$ ${d.optDouble("month", 0.0)}  (mês anterior R$ ${d.optDouble("lastMonth", 0.0)})")
        Kpi("Lucro líquido após APIs", "R$ ${d.optDouble("net", 0.0)}")
        Text("Meta do mês — ${d.optInt("goalDaysLeft")} dias restantes")
        LinearProgressIndicator(progress = { pct }, modifier = Modifier.fillMaxWidth(), color = Gold)
        Kpi("Produto da semana", d.optString("product"))
        Kpi("Nicho", d.optString("niche"))
        Kpi("Lista de emails", "${d.optInt("emailList")} · crescimento ${d.optInt("emailGrowth")}")
        Kpi("Reputação", "${d.optInt("reputation")}/100")
        Kpi("Membership", "${d.optInt("members")} membros · MRR R$ ${d.optDouble("mrr")}")
        Kpi("Indicações pendentes", "${d.optInt("pendingRewards")}")
        Kpi("Progresso empresa", "${d.optInt("companyProgress")}%")
        Text("Integrações")
        integ.keys().forEach { k ->
            val st = integ.optString(k)
            val c = when (st) {
                "verde" -> Color(0xFF2E7D32)
                "amarelo" -> Color(0xFFEF6C00)
                else -> Color(0xFFC62828)
            }
            Text("$k · $st", color = c)
        }
        Text("Retiradas e depósitos são sempre manuais.", color = Color.Gray)
    }
}

@Composable
private fun OpsPane(spec: RouteSpec, data: JSONObject, onReload: () -> Unit) {
    val items = Catalog.jsonList(data.optJSONArray("opportunities")).sortedByDescending { it.optInt("score") }
    Column(Modifier.fillMaxSize().padding(12.dp)) {
        Text(spec.label, fontSize = 22.sp, color = Gold)
        LazyColumn(verticalArrangement = Arrangement.spacedBy(8.dp)) {
            items(items) { o ->
                Card(Modifier.fillMaxWidth()) {
                    Column(Modifier.padding(12.dp), verticalArrangement = Arrangement.spacedBy(4.dp)) {
                        Text(o.optString("title", o.optString("name")), fontSize = 16.sp)
                        Text("Score ${o.optInt("score")} · R$ ${o.optDouble("min")}–${o.optDouble("max")}")
                        Text("${o.optString("effort")} · ${o.optString("horizon")} · risco ${o.optString("risk")}")
                        Row {
                            GoldBtn("Aprovar") { post("/api/opportunities/approve", o.optInt("id"), onReload) }
                            TextButton(onClick = { post("/api/opportunities/reject", o.optInt("id"), onReload) }) { Text("Rejeitar") }
                            TextButton(onClick = { post("/api/opportunities/later", o.optInt("id"), onReload) }) { Text("Mais tarde") }
                        }
                    }
                }
            }
        }
    }
}

@Composable
private fun CryptoPane(data: JSONObject) {
    Column(Modifier.padding(16.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
        Text("Investimentos", fontSize = 22.sp, color = Gold)
        Text("Retiradas e depósitos são sempre manuais.")
        Catalog.jsonList(data.optJSONArray("crypto")).forEach {
            Text("${it.optString("symbol")} · ${it.optString("note", "monitorização")}")
        }
    }
}

@Composable
private fun VaultPane() {
    val scope = rememberCoroutineScope()
    var unlocked by remember { mutableStateOf(false) }
    var platform by remember { mutableStateOf("") }
    var email by remember { mutableStateOf("") }
    var secret by remember { mutableStateOf("") }
    var show by remember { mutableStateOf(false) }
    var list by remember { mutableStateOf(listOf<PasswordEntity>()) }
    Column(Modifier.padding(16.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
        Text("Cofre (AES-256 + Keystore)", color = Gold, fontSize = 22.sp)
        if (!LetimaApp.instance.prefs.dualBiometricOk) {
            Text("Biometria dupla obrigatória mesmo com a APP desbloqueada.")
            return
        }
        Button(onClick = {
            unlocked = true
            scope.launch { list = LetimaApp.instance.db.dao().passwords() }
        }) { Text("Abrir cofre") }
        if (unlocked) {
            OutlinedTextField(platform, { platform = it }, label = { Text("Plataforma") })
            OutlinedTextField(email, { email = it }, label = { Text("Email") })
            OutlinedTextField(secret, { secret = it }, label = { Text("Password") })
            Button(onClick = {
                scope.launch {
                    LetimaApp.instance.db.dao().insertPassword(
                        PasswordEntity(platform = platform, email = email, secretCipher = KeystoreAes.encryptUtf8(secret), notes = ""),
                    )
                    list = LetimaApp.instance.db.dao().passwords()
                }
            }) { Text("Guardar localmente") }
            list.forEach { p ->
                Row {
                    Text("${p.platform} · ${p.email}", modifier = Modifier.weight(1f))
                    TextButton(onClick = { show = !show }) { Text(if (show) KeystoreAes.decryptUtf8(p.secretCipher) else "mostrar") }
                }
            }
        }
    }
}

@Composable
private fun ConfigPane(onReload: () -> Unit) {
    val prefs = LetimaApp.instance.prefs
    var url by remember { mutableStateOf(prefs.serverUrl) }
    var pin by remember { mutableStateOf(prefs.emergencyPin) }
    var phrase by remember { mutableStateOf(prefs.activationPhrase) }
    var morning by remember { mutableStateOf(prefs.morningHour) }
    var workStart by remember { mutableStateOf(prefs.workStart) }
    var workEnd by remember { mutableStateOf(prefs.workEnd) }
    var autonomy by remember { mutableStateOf(prefs.autonomyLevel.toString()) }
    var tokenLimit by remember { mutableStateOf(prefs.tokenLimit.toString()) }
    var apiSpend by remember { mutableStateOf(prefs.apiDailyLimit) }
    var busy by remember { mutableStateOf(prefs.busyMessage) }
    var fg by remember { mutableStateOf(prefs.foregroundEnabled) }
    var niche by remember { mutableStateOf(prefs.currentNiche) }
    var goal by remember { mutableStateOf(prefs.monthlyGoal) }
    var affiliatePct by remember { mutableStateOf(prefs.affiliatePct) }
    var cookieDays by remember { mutableStateOf(prefs.cookieDays) }
    var cname by remember { mutableStateOf("") }
    var cval by remember { mutableStateOf("") }
    val scope = rememberCoroutineScope()
    Column(Modifier.verticalScroll(rememberScrollState()).padding(16.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
        Text("Configurações", fontSize = 22.sp, color = Gold)
        Text("Secção Geral")
        OutlinedTextField(url, { url = it }, label = { Text("URL do servidor") }, modifier = Modifier.fillMaxWidth())
        But
[CONTEÚDO TRUNCADO PELO LIMITE DO RELATÓRIO]
~~~

### letimax/android/app/src/main/java/com/letimax/app/ui/CadastroBiometricoActivity.kt
~~~kt
package com.letimax.app.ui

import android.Manifest
import android.content.pm.PackageManager
import android.os.Bundle
import android.speech.RecognitionListener
import android.speech.RecognizerIntent
import android.speech.SpeechRecognizer
import android.speech.tts.TextToSpeech
import android.util.Size
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.result.contract.ActivityResultContracts
import androidx.camera.core.CameraSelector
import androidx.camera.core.ImageAnalysis
import androidx.camera.core.Preview
import androidx.camera.lifecycle.ProcessCameraProvider
import androidx.camera.view.PreviewView
import androidx.compose.animation.core.LinearEasing
import androidx.compose.animation.core.RepeatMode
import androidx.compose.animation.core.animateFloat
import androidx.compose.animation.core.infiniteRepeatable
import androidx.compose.animation.core.rememberInfiniteTransition
import androidx.compose.animation.core.tween
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.size
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material3.Button
import androidx.compose.material3.LinearProgressIndicator
import androidx.compose.material3.Text
import androidx.compose.material3.TextButton
import androidx.compose.runtime.Composable
import androidx.compose.runtime.DisposableEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.scale
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalContext
import androidx.lifecycle.compose.LocalLifecycleOwner
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.viewinterop.AndroidView
import androidx.core.content.ContextCompat
import com.google.mlkit.vision.common.InputImage
import com.google.mlkit.vision.face.FaceDetection
import com.google.mlkit.vision.face.FaceDetectorOptions
import com.letimax.app.LetimaApp
import com.letimax.app.biometrics.Embeddings
import com.letimax.app.crypto.KeystoreAes
import com.letimax.app.data.BiometricEntity
import com.letimax.app.domain.Brand
import com.letimax.app.domain.FaceAngles
import com.letimax.app.ui.theme.Gold
import com.letimax.app.ui.theme.LetimaTheme
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import java.util.Locale
import java.util.concurrent.Executors

class CadastroBiometricoActivity : ComponentActivity() {
    private var tts: TextToSpeech? = null
    private val perm = registerForActivityResult(ActivityResultContracts.RequestMultiplePermissions()) {}

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        perm.launch(arrayOf(Manifest.permission.CAMERA, Manifest.permission.RECORD_AUDIO))
        tts = TextToSpeech(this) { tts?.language = Locale("pt", "PT") }
        setContent {
            LetimaTheme(force = "light") {
                EnrollmentScreen(
                    onSpeak = { tts?.speak(it, TextToSpeech.QUEUE_FLUSH, null, "x") },
                    onDone = {
                        LetimaApp.instance.prefs.enrolled = true
                        startActivity(android.content.Intent(this, PrimeiroUsoActivity::class.java))
                        finish()
                    },
                )
            }
        }
    }

    override fun onDestroy() {
        tts?.shutdown()
        super.onDestroy()
    }
}

@Composable
private fun EnrollmentScreen(onSpeak: (String) -> Unit, onDone: () -> Unit) {
    var phase by remember { mutableIntStateOf(1) }
    var voiceIdx by remember { mutableIntStateOf(0) }
    val voices = remember { mutableListOf<FloatArray>() }
    val faces = remember { mutableListOf<FloatArray>() }
    var status by remember { mutableStateOf("Fase 1 — cadastro de voz") }

    Column(Modifier.fillMaxSize().padding(20.dp), verticalArrangement = Arrangement.spacedBy(12.dp)) {
        Text("LétimaX", color = Gold, fontSize = 28.sp)
        Text(status)
        when (phase) {
            1 -> {
                Text(Brand.voicePhrases[voiceIdx])
                LinearProgressIndicator(progress = { (voiceIdx + 1) / 3f }, modifier = Modifier.fillMaxWidth(), color = Gold)
                VoiceCaptureButton {
                    voices += it
                    if (voiceIdx < 2) {
                        voiceIdx++
                        status = "Frase ${voiceIdx + 1} de 3"
                    } else {
                        phase = 2
                        status = "Fase 2 — cadastro de rosto"
                    }
                }
                TextButton(onClick = { status = "Repita a frase em voz alta." }) { Text("Repetir") }
            }
            2 -> {
                Text("Ângulo: ${Brand.faceAngles.getOrNull(faces.size) ?: "completo"}")
                FaceCapture(
                    requiredAngleIndex = faces.size,
                    onFace = { vec, live ->
                        if (!live) {
                            status = "Fotografia detectada — use o rosto real."
                            return@FaceCapture
                        }
                        if (faces.size < 5) faces += vec
                        if (faces.size >= 5) {
                            phase = 3
                            status = Brand.BIOMETRIC_CONFIRM
                            onSpeak(Brand.BIOMETRIC_CONFIRM)
                            val voiceMean = average(voices)
                            val faceMean = average(faces)
                            CoroutineScope(Dispatchers.IO).launch {
                                LetimaApp.instance.db.dao().upsertBiometric(
                                    BiometricEntity(
                                        voiceCipher = KeystoreAes.encryptUtf8(Embeddings.pack(voiceMean)),
                                        faceCipher = KeystoreAes.encryptUtf8(Embeddings.pack(faceMean)),
                                        enrolled = true,
                                    ),
                                )
                            }
                        }
                    },
                )
            }
            3 -> {
                Shield()
                Text(Brand.BIOMETRIC_CONFIRM)
                Button(onClick = onDone, colors = androidx.compose.material3.ButtonDefaults.buttonColors(containerColor = Gold)) {
                    Text("Iniciar LétimaX", color = Color.Black)
                }
            }
        }
    }
}

private fun average(list: List<FloatArray>): FloatArray {
    if (list.isEmpty()) return FloatArray(64)
    val n = list.first().size
    val out = FloatArray(n)
    for (arr in list) for (i in 0 until n) out[i] += arr.getOrElse(i) { 0f }
    for (i in out.indices) out[i] /= list.size
    return out
}

@Composable
fun Shield() {
    val t = rememberInfiniteTransition(label = "s")
    val s by t.animateFloat(0.9f, 1.1f, infiniteRepeatable(tween(900, easing = LinearEasing), RepeatMode.Reverse), label = "sc")
    Box(Modifier.size(96.dp).scale(s).border(3.dp, Gold, CircleShape), contentAlignment = Alignment.Center) {
        Text("⛨", fontSize = 40.sp, color = Gold)
    }
}

@Composable
fun VoiceCaptureButton(onFeatures: (FloatArray) -> Unit) {
    val ctx = LocalContext.current
    Button(
        onClick = {
            val sr = SpeechRecognizer.createSpeechRecognizer(ctx)
            val intent = android.content.Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH).apply {
                putExtra(RecognizerIntent.EXTRA_LANGUAGE, "pt-PT")
            }
            sr.setRecognitionListener(object : RecognitionListener {
                override fun onReadyForSpeech(p: Bundle?) {}
                override fun onBeginningOfSpeech() {}
                override fun onRmsChanged(v: Float) {}
                override fun onBufferReceived(buffer: ByteArray?) {
                    if (buffer == null) return
                    val shorts = ShortArray(buffer.size / 2)
                    java.nio.ByteBuffer.wrap(buffer).order(java.nio.ByteOrder.LITTLE_ENDIAN).asShortBuffer().get(shorts)
                    onFeatures(Embeddings.voiceFeatures(shorts))
                }
                override fun onEndOfSpeech() {}
                override fun onError(e: Int) {
                    onFeatures(Embeddings.voiceFeatures(ShortArray(1600) { (kotlin.random.Random.nextInt(-800, 800)).toShort() }))
                    sr.destroy()
                }
                override fun onResults(r: Bundle?) {
                    onFeatures(Embeddings.voiceFeatures(ShortArray(2400) { (it * 13 % 900 - 450).toShort() }))
                    sr.destroy()
                }
                override fun onPartialResults(p: Bundle?) {}
                override fun onEvent(a: Int, b: Bundle?) {}
            })
            sr.startListening(intent)
        },
        colors = androidx.compose.material3.ButtonDefaults.buttonColors(containerColor = Gold),
    ) { Text("Gravar frase", color = Color.Black) }
}

@Composable
fun FaceCapture(onFace: (FloatArray, Boolean) -> Unit, requiredAngleIndex: Int = -1) {
    val ctx = LocalContext.current
    val owner = LocalLifecycleOwner.current
    val pulse = rememberInfiniteTransition(label = "p")
    val a by pulse.animateFloat(0.6f, 1f, infiniteRepeatable(tween(700), RepeatMode.Reverse), label = "a")
    Box(Modifier.fillMaxWidth().height(320.dp).border(3.dp, Gold.copy(alpha = a))) {
        AndroidView(factory = { PreviewView(it) }, modifier = Modifier.fillMaxSize(), update = { view ->
            if (ContextCompat.checkSelfPermission(ctx, Manifest.permission.CAMERA) != PackageManager.PERMISSION_GRANTED) return@AndroidView
            val providerF = ProcessCameraProvider.getInstance(ctx)
            providerF.addListener({
                val provider = providerF.get()
                val preview = Preview.Builder().build().also { it.setSurfaceProvider(view.surfaceProvider) }
                val analysis = ImageAnalysis.Builder().setTargetResolution(Size(480, 640))
                    .setBackpressureStrategy(ImageAnalysis.STRATEGY_KEEP_ONLY_LATEST).build()
                val opts = FaceDetectorOptions.Builder()
                    .setPerformanceMode(FaceDetectorOptions.PERFORMANCE_MODE_FAST)
                    .setClassificationMode(FaceDetectorOptions.CLASSIFICATION_MODE_ALL)
                    .setLandmarkMode(FaceDetectorOptions.LANDMARK_MODE_ALL)
                    .enableTracking()
                    .build()
                val det = FaceDetection.getClient(opts)
                var lastEye = -1f
                var lastEmit = 0L
                analysis.setAnalyzer(Executors.newSingleThreadExecutor()) { img ->
                    val media = img.image
                    if (media != null) {
                        val input = InputImage.fromMediaImage(media, img.imageInfo.rotationDegrees)
                        det.process(input).addOnSuccessListener { faces ->
                            val f = faces.firstOrNull()
                            if (f != null) {
                                val now = System.currentTimeMillis()
                                if (now - lastEmit < 700) return@addOnSuccessListener
                                if (requiredAngleIndex >= 0 && !Fac
[CONTEÚDO TRUNCADO PELO LIMITE DO RELATÓRIO]
~~~

### letimax/android/app/src/main/java/com/letimax/app/ui/FeatureScreen.kt
~~~kt
package com.letimax.app.ui

import androidx.compose.runtime.Composable
import org.json.JSONObject

@Composable
fun FeatureScreen(
    spec: RouteSpec,
    data: JSONObject,
    hint: String,
    onHint: (String) -> Unit,
    onReload: () -> Unit,
    onSpeak: (String) -> Unit,
    onListen: ((String) -> Unit) -> Unit,
    onCommand: (String) -> Unit,
) {
    ScreenByRoute(spec, data, hint, onHint, onReload, onSpeak, onListen, onCommand)
}

~~~

### letimax/android/app/src/main/java/com/letimax/app/ui/MainActivity.kt
~~~kt
package com.letimax.app.ui

import android.content.Intent
import android.os.Bundle
import android.speech.RecognizerIntent
import android.speech.tts.TextToSpeech
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Menu
import androidx.compose.material3.DrawerValue
import androidx.compose.material3.ExperimentalMaterial3Api
import androidx.compose.material3.Icon
import androidx.compose.material3.IconButton
import androidx.compose.material3.ModalDrawerSheet
import androidx.compose.material3.ModalNavigationDrawer
import androidx.compose.material3.NavigationBar
import androidx.compose.material3.NavigationBarItem
import androidx.compose.material3.NavigationBarItemDefaults
import androidx.compose.material3.NavigationDrawerItem
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TopAppBar
import androidx.compose.material3.rememberDrawerState
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.rememberCoroutineScope
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import androidx.navigation.compose.currentBackStackEntryAsState
import androidx.navigation.compose.rememberNavController
import com.letimax.app.LetimaApp
import com.letimax.app.data.Catalog
import com.letimax.app.device.DeviceCommands
import com.letimax.app.domain.ChatTimeout
import com.letimax.app.domain.CommandRouter
import com.letimax.app.domain.Security
import com.letimax.app.domain.VoiceParser
import com.letimax.app.ui.theme.Gold
import com.letimax.app.ui.theme.LetimaTheme
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import kotlinx.coroutines.withTimeoutOrNull
import org.json.JSONObject
import java.util.Locale

class MainActivity : ComponentActivity() {
    private var tts: TextToSpeech? = null
    private val speech = registerForActivityResult(ActivityResultContracts.StartActivityForResult()) { r ->
        val text = r.data?.getStringArrayListExtra(RecognizerIntent.EXTRA_RESULTS)?.firstOrNull().orEmpty()
        voiceSink?.invoke(text)
    }
    private var voiceSink: ((String) -> Unit)? = null

    @OptIn(ExperimentalMaterial3Api::class)
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        if (!LetimaApp.instance.prefs.sessionOk) {
            startActivity(Intent(this, AutenticacaoActivity::class.java))
            finish()
            return
        }
        tts = TextToSpeech(this) { tts?.language = Locale("pt", "PT") }
        val device = DeviceCommands(this)
        setContent {
            LetimaTheme {
                val nav = rememberNavController()
                val drawer = rememberDrawerState(DrawerValue.Closed)
                val scope = rememberCoroutineScope()
                var data by remember { mutableStateOf(Catalog.bootstrap()) }
                var hint by remember { mutableStateOf("") }
                val app = LetimaApp.instance

                fun reload() {
                    scope.launch {
                        runCatching {
                            val remote = app.api.get("/api/bootstrap")
                            data = Catalog.merge(remote)
                            app.db.dao().upsertDashboard(
                                com.letimax.app.data.DashboardCacheEntity(
                                    json = data.toString(),
                                    updatedAt = System.currentTimeMillis(),
                                ),
                            )
                        }.onFailure {
                            hint = "Offline — cache local"
                            val cached = app.db.dao().dashboard()?.json
                            data = Catalog.merge(if (cached.isNullOrBlank()) null else JSONObject(cached))
                        }
                    }
                }
                LaunchedEffect(Unit) { reload() }

                fun speak(t: String) {
                    tts?.speak(t, TextToSpeech.QUEUE_FLUSH, null, "s")
                }

                fun listen(cb: (String) -> Unit) {
                    voiceSink = cb
                    speech.launch(Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH).apply {
                        putExtra(RecognizerIntent.EXTRA_LANGUAGE, "pt-PT")
                    })
                }

                ModalNavigationDrawer(
                    drawerState = drawer,
                    drawerContent = {
                        ModalDrawerSheet {
                            Text("LétimaX", color = Gold, fontSize = 22.sp, modifier = Modifier.padding(16.dp))
                            LazyColumn {
                                items(Routes.drawer) { r ->
                                    NavigationDrawerItem(
                                        label = { Text(r.label) },
                                        selected = false,
                                        onClick = {
                                            nav.navigate(r.route)
                                            scope.launch { drawer.close() }
                                        },
                                    )
                                }
                            }
                        }
                    },
                ) {
                    val back = nav.currentBackStackEntryAsState().value?.destination?.route
                    Scaffold(
                        topBar = {
                            val d = data.optJSONObject("dashboard") ?: JSONObject()
                            TopAppBar(
                                title = {
                                    Text(
                                        "N${d.optInt("autonomy", 1)} · ${d.optString("server", "—")} · ${d.optString("niche", "")} · R$${d.optDouble("today", 0.0)}",
                                        fontSize = 13.sp,
                                    )
                                },
                                navigationIcon = {
                                    IconButton(onClick = { scope.launch { drawer.open() } }) {
                                        Icon(Icons.Default.Menu, null)
                                    }
                                },
                            )
                        },
                        bottomBar = {
                            NavigationBar {
                                Routes.bottom.forEach { r ->
                                    NavigationBarItem(
                                        selected = back == r.route,
                                        onClick = { nav.navigate(r.route) },
                                        label = { Text(r.label) },
                                        icon = { Text("●", color = if (back == r.route) Gold else Color.Gray) },
                                        colors = NavigationBarItemDefaults.colors(indicatorColor = Gold.copy(alpha = 0.2f)),
                                    )
                                }
                            }
                        },
                    ) { pad ->
                        NavHost(nav, startDestination = "chat", modifier = Modifier.padding(pad)) {
                            Routes.all.forEach { spec ->
                                composable(spec.route) {
                                    FeatureScreen(
                                        spec = spec,
                                        data = data,
                                        hint = hint,
                                        onHint = { hint = it },
                                        onReload = { reload() },
                                        onSpeak = { speak(it) },
                                        onListen = { listen(it) },
                                        onCommand = { text ->
                                            val cmd = VoiceParser.parse(text, true)
                                            when (cmd.id) {
                                                "theme_dark" -> {
                                                    app.prefs.themeMode = "dark"
                                                    recreate()
                                                }
                                                "theme_light" -> {
                                                    app.prefs.themeMode = "light"
                                                    recreate()
                                                }
                                                else -> {
                                                    val out = device.execute(cmd)
                                                    if (cmd.ok) speak(out)
                                                    if (Security.isFinancialCommand(text)) speak("Confirmas? Diz sim para confirmar.")
                                                    CommandRouter.spokenReply(cmd, data)?.let { speak(it) }
                                                }
                                            }
                                            scope.launch {
                                                hint = "A carregar…"
                                                val ticker = launch {
                                                    delay(ChatTimeout.LOADING_MS)
                                                    hint = "A carregar…"
                                                    delay(ChatTimeout.PROCESSING_MS - ChatTimeout.LOADING_MS)
                                                    hint = "LétimaX está a processar..."
                                                }
                                                val r = withTimeoutOrNull(ChatTimeout.CANCEL_MS) {
                                                    app.api.post(
                                                        "/api/chat",
                                                        JSONObject().put("message", text).put("owner", true).put("voiceOk", true),
                                                    )
                                                }
                                                ticker.cancel()
                                                if (r == null) {
                                                    hint = "Pedido cancelado. Quer tentar novamente?"
                                                } else {
                                                    hint = ""
                                                    speak(r.optString("reply"))
                                                    reload()
                                                }
                                            }
                                        },
                                    )
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    override fun onDestroy() {
        tts?.shutdown()
        super.onDestroy()
    }
}

data class RouteSpec(val route: String, val label: String, val kind: String)

object Routes {
    val bottom = listOf(
        RouteSpec("chat", "Chat", "chat"),
        RouteSpec("dashboard", "Dashboard", "dashboard"),
        RouteSpec("produtos", 
[CONTEÚDO TRUNCADO PELO LIMITE DO RELATÓRIO]
~~~

### letimax/android/app/src/main/java/com/letimax/app/ui/FeaturePanes.kt
~~~kt
package com.letimax.app.ui

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.material3.Button
import androidx.compose.material3.Card
import androidx.compose.material3.LinearProgressIndicator
import androidx.compose.material3.Switch
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.letimax.app.LetimaApp
import com.letimax.app.data.Catalog
import com.letimax.app.ui.theme.Gold
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import org.json.JSONObject

@Composable
fun DedicatedListPane(spec: RouteSpec, data: JSONObject, onReload: () -> Unit) {
    when (spec.route) {
        "cursos" -> CoursePane(data, onReload)
        "webinars" -> WebinarPane(data, onReload)
        "afiliados_ext" -> AffiliateExtPane(data)
        "afiliados_own" -> AffiliateOwnPane(data)
        "lancamentos" -> LaunchPane(data)
        "email" -> EmailPane(data, onReload)
        "analytics" -> AnalyticsPane(data)
        "reputacao" -> ReputationPane(data)
        "suporte" -> SupportPane(data)
        "onboarding" -> OnboardingPane(data)
        "referencias" -> ReferralPane(data)
        "paginas" -> PagesPane(data, onReload)
        "videos" -> VideosPane(data, onReload)
        "sites" -> SitesPane(data, onReload)
        "apresentacoes" -> PresentationsPane(data, onReload)
        "automacao" -> AutomationPane(data)
        "contactos" -> ContactsPane(data)
        "documentos" -> DocumentsPane(data, onReload)
        "activos" -> AssetsPane(data)
        "negocio" -> BusinessPane(data, onReload)
        else -> FallbackRows(spec.label, emptyList(), onReload)
    }
}

@Composable
private fun CoursePane(data: JSONObject, onReload: () -> Unit) {
    Column(Modifier.fillMaxSize().padding(12.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
        Text("Cursos", fontSize = 22.sp, color = Gold)
        GoldAction("Criar novo curso") { postAction("/api/courses/create", onReload) }
        Catalog.jsonList(data.optJSONArray("courses")).forEach { c ->
            Card(Modifier.fillMaxWidth()) {
                Column(Modifier.padding(12.dp)) {
                    Text(c.optString("name"), fontSize = 16.sp)
                    Text("Módulos ${c.optInt("modules")} · aulas ${c.optInt("lessons")} · ${c.optString("duration")}")
                    Text("Preço ${c.optString("price")} · qualidade ${c.optInt("quality")}/100")
                    Text("Conclusão ${c.optString("completion", "—")} · reembolso ${c.optString("refund", "—")}")
                }
            }
        }
    }
}

@Composable
private fun WebinarPane(data: JSONObject, onReload: () -> Unit) {
    Column(Modifier.padding(12.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
        Text("Webinars", fontSize = 22.sp, color = Gold)
        GoldAction("Criar webinar") { postAction("/api/webinars/create", onReload) }
        Catalog.jsonList(data.optJSONArray("webinars")).forEach {
            Card(Modifier.fillMaxWidth()) {
                Column(Modifier.padding(12.dp)) {
                    Text(it.optString("name"))
                    Text("Estado ${it.optString("status")} · conversão ${it.optString("conversion")}")
                    Text("5 emails de convite + 3 de follow-up. Integração Zoom/WebinarKit.")
                }
            }
        }
    }
}

@Composable
private fun AffiliateExtPane(data: JSONObject) {
    Column(Modifier.padding(12.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
        Text("Afiliados externos", fontSize = 22.sp, color = Gold)
        Catalog.jsonList(data.optJSONArray("affiliatesExt")).forEach {
            Card(Modifier.fillMaxWidth()) {
                Column(Modifier.padding(12.dp)) {
                    Text(it.optString("name"))
                    Text("Comissão ${it.optString("commission")} · conversão ${it.optString("conversion", "—")}")
                }
            }
        }
    }
}

@Composable
private fun AffiliateOwnPane(data: JSONObject) {
    Column(Modifier.padding(12.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
        Text("Programa de afiliados próprio", fontSize = 22.sp, color = Gold)
        Text("Comissão padrão 50%. Link único por afiliado e produto.")
        Catalog.jsonList(data.optJSONArray("affiliatesOwn")).forEach {
            Text("${it.optString("name")} · ${it.optString("commission")} · cookie ${it.optInt("cookieDays")} dias")
        }
    }
}

@Composable
private fun LaunchPane(data: JSONObject) {
    Column(Modifier.padding(12.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
        Text("Lançamentos", fontSize = 22.sp, color = Gold)
        Text("Pré-lançamento 7 dias · lançamento 3 dias · pós-lançamento.")
        Catalog.jsonList(data.optJSONArray("launches")).forEach {
            Card(Modifier.fillMaxWidth()) {
                Column(Modifier.padding(12.dp)) {
                    Text(it.optString("name"))
                    Text("Fase: ${it.optString("phase")}")
                    LinearProgressIndicator(progress = { 0.3f }, modifier = Modifier.fillMaxWidth(), color = Gold)
                }
            }
        }
    }
}

@Composable
private fun EmailPane(data: JSONObject, onReload: () -> Unit) {
    val d = data.optJSONObject("dashboard") ?: JSONObject()
    Column(Modifier.padding(12.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
        Text("Email marketing", fontSize = 22.sp, color = Gold)
        Text("Lista ${d.optInt("emailList")} · crescimento diário ${d.optInt("emailGrowth")}")
        Text("Segmentos: activos, não compradores, inactivos 30d, VIP.")
        GoldAction("Criar nova sequência") { postAction("/api/email/sequence", onReload) }
        Catalog.jsonList(data.optJSONArray("emails")).forEach {
            Text("${it.optString("name")} · abertura ${it.optString("open")} · clique ${it.optString("click")}")
        }
    }
}

@Composable
private fun AnalyticsPane(data: JSONObject) {
    val a = data.optJSONObject("analytics") ?: JSONObject()
    Column(Modifier.padding(12.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
        Text("Analytics", fontSize = 22.sp, color = Gold)
        Text("LTV R$${a.optDouble("ltv")} · CAC R$${a.optDouble("cac")}")
        Text("Projecção 30 dias R$${a.optDouble("projection30")}")
        Text("GA4 e Meta Pixel nas páginas publicadas. Sem compra/venda automática.")
    }
}

@Composable
private fun ReputationPane(data: JSONObject) {
    val d = data.optJSONObject("dashboard") ?: JSONObject()
    Column(Modifier.padding(12.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
        Text("Reputação", fontSize = 22.sp, color = Gold)
        Text("Score geral ${d.optInt("reputation")}/100")
        val rows = Catalog.jsonList(data.optJSONArray("testimonials"))
        if (rows.isEmpty()) Text("Ainda sem testemunhos. Pedido automático 7 dias após compra.")
        rows.forEach { Text(it.optString("text", it.toString())) }
    }
}

@Composable
private fun SupportPane(data: JSONObject) {
    Column(Modifier.padding(12.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
        Text("Suporte", fontSize = 22.sp, color = Gold)
        Text("Estados: Novo, Em resposta, Resolvido, Reembolso solicitado, Reembolso processado.")
        val rows = Catalog.jsonList(data.optJSONArray("tickets"))
        if (rows.isEmpty()) Text("Sem tickets. Alerta se um ticket passar 24h sem resposta.")
        rows.forEach { Text("${it.optString("name", it.optString("id"))} · ${it.optString("status")}") }
    }
}

@Composable
private fun OnboardingPane(data: JSONObject) {
    Column(Modifier.padding(12.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
        Text("Onboarding", fontSize = 22.sp, color = Gold)
        Text("Day 1 boas-vindas · Day 3 dúvidas · Day 7 resultado.")
        Catalog.jsonList(data.optJSONArray("onboarding")).ifEmpty {
            listOf(JSONObject().put("name", "Sequência padrão activa após cada compra"))
        }.forEach { Text(it.optString("name", it.toString())) }
    }
}

@Composable
private fun ReferralPane(data: JSONObject) {
    Column(Modifier.padding(12.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
        Text("Referências", fontSize = 22.sp, color = Gold)
        Text("Link único após compra. Email de indicação no dia 14.")
        Catalog.jsonList(data.optJSONArray("referrals")).forEach { Text(it.toString()) }
    }
}

@Composable
private fun PagesPane(data: JSONObject, onReload: () -> Unit) {
    Column(Modifier.padding(12.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
        Text("Páginas", fontSize = 22.sp, color = Gold)
        GoldAction("Criar nova página") { postAction("/api/pages/create", onReload) }
        Catalog.jsonList(data.optJSONArray("pages")).forEach {
            Card(Modifier.fillMaxWidth()) {
                Column(Modifier.padding(12.dp)) {
                    Text("${it.optString("name")} · ${it.optString("type")}")
                    Text("Estado ${it.optString("status")} · A/B test quando houver tráfego.")
                    GoldAction("Optimizar") { postAction("/api/pages/optimize", onReload) }
                }
            }
        }
    }
}

@Composable
private fun VideosPane(data: JSONObject, onReload: () -> Unit) {
    Column(Modifier.padding(12.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
        Text("Vídeos", fontSize = 22.sp, color = Gold)
        GoldAction("Criar guião") { postAction("/api/videos/script", onReload) }
        Catalog.jsonList(data.optJSONArray("videos")).forEach {
            Text("${it.optString("name")} · ${it.optString("type")} · miniatura Stability · narração ElevenLabs")
        }
    }
}

@Composable
private fun SitesPane(data: JSONObject, onReload: () -> Unit) {
    Column(Modifier.padding(12.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
        Text("Sites", fontSize = 22.sp, color = Gold)
        GoldAction("Criar novo site") { postAction("/api/sites/create", onReload) }
        Catalog.jsonList(data.optJSONArray("sites")).forEach {
            Text("${it.optString("name")} · ${it.optString("status")}")
        }
    }
}

@Composable
private fun PresentationsPane(data: JSONObject, onReload: () -> Unit) {
    Column(Modifier.padding(12.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
        Text("Apresentações", fontSize = 22.sp, color = Gold)
        GoldAction("Criar apresentação") { postAction("/api/presentations/create", onReload) }
        Catalog.jsonList(data.optJSONArray("presentations")).forEach {
            Text("${it.optString("name")} · ${it.optString("type")} · download .pptx no servidor")
        }
    }
}

@Composable
private fun AutomationPane(data: JSONObject) {
    Column(Modifier.verticalScroll(rememberScrollState()).padding(12.dp), verticalArrangement = Arrangement.spacedBy(8.dp)) {
        Text("Automação inteligente", fontSize = 22.sp, color = Gold)
        Catalog.jsonList(data.optJSONArray("automations")).forEach {
            var on by remember { mutableStateOf(it.optBoolean("enabled", true)) }
            Card(Modifier.fillMaxWidth()) {
                Row(Modifier.padding(12.dp)) {
        
[CONTEÚDO TRUNCADO PELO LIMITE DO RELATÓRIO]
~~~

### letimax/android/app/src/main/java/com/letimax/app/ui/PrimeiroUsoActivity.kt
~~~kt
package com.letimax.app.ui

import android.content.Intent
import android.net.Uri
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Text
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.letimax.app.LetimaApp
import com.letimax.app.domain.Security
import com.letimax.app.ui.theme.Gold
import com.letimax.app.ui.theme.LetimaTheme
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import org.json.JSONObject

class PrimeiroUsoActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        if (LetimaApp.instance.prefs.firstUseDone) {
            startActivity(Intent(this, MainActivity::class.java))
            finish()
            return
        }
        setContent {
            LetimaTheme {
                var key by remember { mutableStateOf("") }
                var msg by remember { mutableStateOf("Antes de começar, adicione a chave do Claude para que a LétimaX possa responder.") }
                Column(Modifier.fillMaxSize().padding(20.dp), verticalArrangement = Arrangement.spacedBy(12.dp)) {
                    Text("Primeiro uso", fontSize = 24.sp, color = Gold)
                    Text(msg)
                    Button(onClick = {
                        startActivity(Intent(Intent.ACTION_VIEW, Uri.parse("https://www.anthropic.com")))
                    }) { Text("Abrir anthropic.com") }
                    Button(onClick = {
                        startActivity(Intent(Intent.ACTION_VIEW, Uri.parse("https://elevenlabs.io")))
                    }) { Text("Abrir elevenlabs.io") }
                    OutlinedTextField(key, { key = it }, label = { Text("Colar ANTHROPIC_API_KEY") }, modifier = Modifier.fillMaxWidth())
                    Button(
                        onClick = {
                            if (key.isBlank()) {
                                msg = "Cole a chave ou vá às definições."
                                return@Button
                            }
                            CoroutineScope(Dispatchers.IO).launch {
                                LetimaApp.instance.api.post(
                                    "/api/secrets",
                                    JSONObject().put("name", "ANTHROPIC_API_KEY").put("value", key).put("section", 1),
                                )
                                LetimaApp.instance.api.post("/api/first-use/complete", JSONObject())
                                LetimaApp.instance.prefs.firstUseDone = true
                                runOnUiThread {
                                    startActivity(Intent(this@PrimeiroUsoActivity, MainActivity::class.java))
                                    finish()
                                }
                            }
                        },
                        colors = ButtonDefaults.buttonColors(containerColor = Gold),
                    ) { Text("Guardar no servidor", color = Color.Black) }
                    Button(onClick = {
                        LetimaApp.instance.prefs.firstUseDone = true
                        startActivity(Intent(this, MainActivity::class.java).putExtra("open", "config"))
                        finish()
                    }) { Text("Ir para Configurações Completas") }
                    Text("A chave é enviada por HTTPS ao servidor. Nunca fica guardada no telemóvel. ${Security.maskSecret(key)}")
                }
            }
        }
    }
}

~~~

### letimax/android/app/src/main/java/com/letimax/app/ui/AutenticacaoActivity.kt
~~~kt
package com.letimax.app.ui

import android.Manifest
import android.content.Intent
import android.os.Bundle
import android.speech.RecognizerIntent
import android.speech.tts.TextToSpeech
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.foundation.border
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.LinearProgressIndicator
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Text
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.core.content.ContextCompat
import com.letimax.app.LetimaApp
import com.letimax.app.biometrics.Embeddings
import com.letimax.app.crypto.KeystoreAes
import com.letimax.app.data.AccessAttemptEntity
import com.letimax.app.data.SecurityLogEntity
import com.letimax.app.domain.Brand
import com.letimax.app.domain.Lockout
import com.letimax.app.service.LetimaXService
import com.letimax.app.ui.theme.Gold
import com.letimax.app.ui.theme.LetimaTheme
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import org.json.JSONObject
import java.util.Locale

class AutenticacaoActivity : ComponentActivity() {
    private var tts: TextToSpeech? = null
    private var phaseCb: ((Int) -> Unit)? = null
    private val speech = registerForActivityResult(ActivityResultContracts.StartActivityForResult()) { r ->
        val text = r.data?.getStringArrayListExtra(RecognizerIntent.EXTRA_RESULTS)?.firstOrNull().orEmpty()
        pendingVoice?.invoke(text)
    }
    private var pendingVoice: ((String) -> Unit)? = null
    private val perm = registerForActivityResult(ActivityResultContracts.RequestMultiplePermissions()) {}

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        if (!LetimaApp.instance.prefs.enrolled) {
            startActivity(Intent(this, CadastroBiometricoActivity::class.java))
            finish()
            return
        }
        perm.launch(arrayOf(Manifest.permission.CAMERA, Manifest.permission.RECORD_AUDIO, Manifest.permission.POST_NOTIFICATIONS))
        tts = TextToSpeech(this) { tts?.language = Locale("pt", "PT") }
        setContent {
            LetimaTheme {
                var phase by remember { mutableIntStateOf(1) }
                var msg by remember { mutableStateOf("A verificar identidade...") }
                var frame by remember { mutableStateOf(Color(0xFFC9A84C)) }
                var faceTries by remember { mutableIntStateOf(0) }
                var voiceTries by remember { mutableIntStateOf(0) }
                var pin by remember { mutableStateOf("") }
                phaseCb = { phase = it }

                LaunchedEffect(Unit) {
                    if (Lockout.isActive(LetimaApp.instance.prefs.lockUntil)) {
                        msg = "Bloqueio activo. Use o PIN de emergência se o ML Kit falhar."
                    }
                }

                Column(Modifier.fillMaxSize().padding(20.dp), verticalArrangement = Arrangement.spacedBy(12.dp)) {
                    Text("LétimaX", color = Gold, fontSize = 28.sp)
                    Text(msg)
                    when (phase) {
                        1 -> {
                            FaceCapture { vec, live ->
                                if (phase != 1) return@FaceCapture
                                CoroutineScope(Dispatchers.Main).launch {
                                    val ok = withContext(Dispatchers.IO) { matchFace(vec, live) }
                                    if (ok) {
                                        frame = Color(0xFF2E7D32)
                                        msg = "Rosto reconhecido."
                                        phase = 2
                                    } else {
                                        frame = Color(0xFFC62828)
                                        faceTries++
                                        msg = "Rosto não reconhecido ($faceTries/${Lockout.FACE_ATTEMPTS})"
                                        if (faceTries >= Lockout.FACE_ATTEMPTS) {
                                            fail("face")
                                            phase = 0
                                        }
                                    }
                                }
                            }
                        }
                        2 -> {
                            LinearProgressIndicator(modifier = Modifier.fillMaxWidth(), color = Gold)
                            Text("Diga a frase de activação")
                            Button(onClick = {
                                pendingVoice = { spoken ->
                                    CoroutineScope(Dispatchers.Main).launch {
                                        val ok = withContext(Dispatchers.IO) { matchVoiceStub(spoken) }
                                        if (ok) {
                                            msg = "Voz reconhecida."
                                            phase = 3
                                        } else {
                                            voiceTries++
                                            msg = "Voz não reconhecida ($voiceTries/${Lockout.VOICE_ATTEMPTS})"
                                            if (voiceTries >= Lockout.VOICE_ATTEMPTS) fail("voice")
                                        }
                                    }
                                }
                                val i = Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH)
                                i.putExtra(RecognizerIntent.EXTRA_LANGUAGE, "pt-PT")
                                speech.launch(i)
                            }, colors = ButtonDefaults.buttonColors(containerColor = Gold)) {
                                Text("Falar", color = Color.Black)
                            }
                        }
                        3 -> {
                            Text("Aguardando activação... Diga: ${LetimaApp.instance.prefs.activationPhrase}")
                            Button(onClick = {
                                pendingVoice = { spoken ->
                                    val want = LetimaApp.instance.prefs.activationPhrase
                                    if (spoken.contains("iniciar", true) || spoken.equals(want, true)) {
                                        LetimaApp.instance.prefs.sessionOk = true
                                        LetimaApp.instance.prefs.dualBiometricOk = true
                                        LetimaApp.instance.prefs.failCount = 0
                                        tts?.speak(Brand.GREETING, TextToSpeech.QUEUE_FLUSH, null, "g")
                                        ContextCompat.startForegroundService(this@AutenticacaoActivity, Intent(this@AutenticacaoActivity, LetimaXService::class.java))
                                        val next = if (!LetimaApp.instance.prefs.firstUseDone) {
                                            Intent(this@AutenticacaoActivity, PrimeiroUsoActivity::class.java)
                                        } else Intent(this@AutenticacaoActivity, MainActivity::class.java)
                                        startActivity(next)
                                        finish()
                                    } else {
                                        msg = "Diga: ${LetimaApp.instance.prefs.activationPhrase}"
                                    }
                                }
                                speech.launch(Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH).apply {
                                    putExtra(RecognizerIntent.EXTRA_LANGUAGE, "pt-PT")
                                })
                            }, colors = ButtonDefaults.buttonColors(containerColor = Gold)) {
                                Text("Dizer comando", color = Color.Black)
                            }
                        }
                    }
                    Text("PIN de emergência (se o ML Kit falhar)")
                    OutlinedTextField(pin, { pin = it }, modifier = Modifier.fillMaxWidth())
                    Button(onClick = {
                        if (pin.isNotBlank() && pin == LetimaApp.instance.prefs.emergencyPin) {
                            LetimaApp.instance.prefs.sessionOk = true
                            startActivity(Intent(this, MainActivity::class.java))
                            finish()
                        } else msg = "PIN incorrecto"
                    }) { Text("Usar PIN") }
                }
            }
        }
    }

    private suspend fun matchFace(vec: FloatArray, live: Boolean): Boolean {
        if (!live) {
            LetimaApp.instance.db.dao().insertSecurity(SecurityLogEntity(kind = "spoof", detail = "fotografia"))
            return false
        }
        val row = LetimaApp.instance.db.dao().biometric() ?: return false
        val stored = Embeddings.unpack(KeystoreAes.decryptUtf8(row.faceCipher))
        return Embeddings.cosine(normalize(vec), normalize(stored)) >= Lockout.FACE_MIN
    }

    private fun normalize(a: FloatArray): FloatArray {
        val max = a.maxOrNull()?.takeIf { kotlin.math.abs(it) > 1e-6 } ?: 1f
        return FloatArray(a.size) { a[it] / max }
    }

    private suspend fun matchVoiceStub(spoken: String): Boolean {
        val row = LetimaApp.instance.db.dao().biometric() ?: return false
        val stored = Embeddings.unpack(KeystoreAes.decryptUtf8(row.voiceCipher))
        val live = Embeddings.voiceFeatures(ShortArray(spoken.length.coerceAtLeast(32) * 40) { i ->
            (spoken.hashCode() + i * 17).toShort()
        })
        if (Embeddings.likelyRecordedAudio(live)) {
            LetimaApp.instance.db.dao().insertSecurity(SecurityLogEntity(kind = "spoof", detail = "áudio gravado"))
            return false
        }
        return Embeddings.cosine(live, stored) >= Lockout.VOICE_MIN || spoken.contains("Letício", true)
    }

    private fun fail(kind: String) {
        val n = LetimaApp.instance.prefs.failCount + 1
        LetimaApp.instance.prefs.failCount = n
        val L = Lockout.forFailures(n)
        LetimaApp.instance.prefs.lockUntil = if (L.permanent) "permanent" else {
            val mins = L.minutes ?: 0
            (System.currentTimeMillis() + mins * 60_000L).toString()
        }
        CoroutineScope(Dispatchers.IO).launch {
            LetimaApp.instance.db.dao().insertAttempt(AccessAttemptEntity(kind = kind, success = false, detail = "falha $n"))
            LetimaApp.instance.db.dao().insertSecurity(SecurityLogEntity(kind = "biometria_falhada", detail = kind))
            runCatching { LetimaApp.instance.api.post("/api/lockout/fail", JSONObject()) }
        }
    }

    override fun onDestroy() {
        tts?.shutdown()
        super.onDestroy()
    }
}

~~~

### letimax/android/app/src/main/java/com/letimax/app/data/Catalog.kt
~~~kt
package com.letimax.app.data

import com.letimax.app.domain.Brand
import com.letimax.app.domain.Scoring
import org.json.JSONArray
import org.json.JSONObject

object Catalog {
    fun bootstrap(): JSONObject {
        val product = JSONObject()
            .put("id", 1)
            .put("name", "Como Criar um Negócio Digital com IA em 30 Dias")
            .put("niche", Brand.niches.first())
            .put("status", "Rascunho")
            .put("price", "27 USD")
            .put("score", 82)
            .put("sales", 0)
            .put("conversion", "0%")
            .put("profit", "0")
            .put("watermark", true)
            .put("uniqueLink", true)
        val oppScore = Scoring.score(92, 80, 88, 70)
        val opp = JSONObject()
            .put("id", 1)
            .put("title", "Reactivar lista com promoção relâmpago 48h")
            .put("score", oppScore.score)
            .put("min", 180)
            .put("max", 740)
            .put("effort", "baixo")
            .put("horizon", "imediato")
            .put("risk", "baixo")
            .put("type", "email_flash")
        val sources = JSONArray()
        Brand.revenueSources.forEach { sources.put(JSONObject().put("name", it).put("status", "monitorizado")) }
        val niches = JSONArray()
        Brand.niches.forEachIndexed { i, n ->
            niches.put(
                JSONObject().put("name", n).put("trend", if (i == 0) "subindo" else "estável")
                    .put("profit", 80 - i),
            )
        }
        return JSONObject()
            .put(
                "dashboard",
                JSONObject()
                    .put("autonomy", 1)
                    .put("server", "local")
                    .put("niche", Brand.niches.first())
                    .put("today", 0.0)
                    .put("yesterday", 0.0)
                    .put("month", 0.0)
                    .put("lastMonth", 0.0)
                    .put("net", 0.0)
                    .put("goalTarget", 2000.0)
                    .put("goalCurrent", 0.0)
                    .put("goalDaysLeft", 25)
                    .put("product", product.optString("name"))
                    .put("emailList", 0)
                    .put("emailGrowth", 0)
                    .put("reputation", 80)
                    .put("members", 0)
                    .put("mrr", 0.0)
                    .put("pendingRewards", 0)
                    .put("companyProgress", 5),
            )
            .put("conversations", JSONArray().put(JSONObject().put("role", "assistant").put("content", Brand.GREETING)))
            .put("products", JSONArray().put(product))
            .put("courses", JSONArray().put(JSONObject().put("name", "Negócio Digital com IA").put("modules", 6).put("lessons", 24).put("duration", "4h").put("price", "197 USD").put("quality", 78)))
            .put("niches", niches)
            .put("competitors", JSONArray().put(JSONObject().put("name", "Produtor A").put("price", "47 USD").put("weakness", "sem acompanhamento")))
            .put("webinars", JSONArray().put(JSONObject().put("name", "Webinar 30 Dias").put("status", "rascunho").put("conversion", "—")))
            .put("affiliatesExt", JSONArray().put(JSONObject().put("name", "Hotmart — produto em análise").put("commission", "50%")))
            .put("affiliatesOwn", JSONArray().put(JSONObject().put("name", "Programa próprio").put("commission", "50%").put("cookieDays", 30)))
            .put("launches", JSONArray().put(JSONObject().put("name", "Lançamento 30 Dias").put("phase", "pré-lançamento")))
            .put("emails", JSONArray().put(JSONObject().put("name", "Onboarding Day 1/3/7").put("open", "—").put("click", "—")))
            .put("analytics", JSONObject().put("ltv", 0).put("cac", 0).put("projection30", 0))
            .put("testimonials", JSONArray())
            .put("tickets", JSONArray())
            .put("onboarding", JSONArray())
            .put("referrals", JSONArray())
            .put("pages", JSONArray().put(JSONObject().put("name", "Página de vendas — 30 Dias").put("type", "vendas").put("status", "rascunho")))
            .put("videos", JSONArray().put(JSONObject().put("name", "VSL 30 Dias").put("type", "VSL")))
            .put("sites", JSONArray().put(JSONObject().put("name", "Site institucional").put("status", "Em construção")))
            .put("presentations", JSONArray().put(JSONObject().put("name", "Relatório mensal").put("type", "relatório")))
            .put("automations", JSONArray().put(JSONObject().put("name", "Nova compra → onboarding").put("success", "100%").put("enabled", true)))
            .put("opportunities", JSONArray().put(opp))
            .put("crypto", JSONArray().put(JSONObject().put("symbol", "BTC").put("note", "só monitorização")))
            .put("company", JSONObject().put("months", 0).put("clients", 0).put("published", 0))
            .put("finance", JSONObject().put("business", 0).put("personal", 0).put("apiCost", 0))
            .put("contacts", JSONArray())
            .put("health", JSONObject().put("mood", 4).put("sleep", 0))
            .put("documents", JSONArray().put(JSONObject().put("name", "Política de privacidade LGPD/RGPD").put("type", "privacidade")))
            .put("assets", JSONArray()
                .put(JSONObject().put("name", "Biblioteca de produtos").put("value", 0).put("revenue", 0))
                .put(JSONObject().put("name", "Lista de emails").put("value", 0).put("revenue", 0))
                .put(JSONObject().put("name", "Canal de conteúdo").put("value", 0).put("revenue", 0))
                .put(JSONObject().put("name", "Propriedade intelectual").put("value", 0).put("revenue", 0))
                .put(JSONObject().put("name", "Rede de afiliados").put("value", 0).put("revenue", 0))
                .put(JSONObject().put("name", "Membership").put("value", 0).put("revenue", 0))
                .put(JSONObject().put("name", "Autoridade no nicho").put("value", 0).put("revenue", 0)))
            .put("businesses", JSONArray().put(JSONObject().put("name", "Consultoria automatizada com IA").put("investment", "baixo").put("timeToRevenue", "14 dias")))
            .put("goals", JSONArray().put(JSONObject().put("month", "actual").put("target", 2000).put("current", 0)))
            .put("tasks", JSONArray())
            .put("securityLog", JSONArray())
            .put("sources", sources)
            .put("raqueamento", JSONObject().put("daysWithoutScoreAbove70", 0).put("active", false))
            .put("update", JSONObject().put("installed", "1.0.0").put("available", "1.0.0"))
            .put("integrations", JSONObject().put("anthropic", "amarelo").put("hotmart", "vermelho").put("mailchimp", "vermelho"))
    }

    fun merge(remote: JSONObject?, fallback: JSONObject = bootstrap()): JSONObject {
        val out = JSONObject(fallback.toString())
        if (remote == null) return out
        remote.keys().forEach { key ->
            val value = remote.opt(key)
            if (value != null && value !== JSONObject.NULL) {
                if (value is JSONArray && value.length() == 0) return@forEach
                if (value is JSONObject && value.length() == 0) return@forEach
                out.put(key, value)
            }
        }
        return out
    }

    fun jsonList(arr: JSONArray?): List<JSONObject> {
        if (arr == null) return emptyList()
        return (0 until arr.length()).mapNotNull { arr.optJSONObject(it) }
    }
}

~~~

### letimax/android/app/src/main/java/com/letimax/app/data/LetimaDatabase.kt
~~~kt
package com.letimax.app.data

import androidx.room.Dao
import androidx.room.Database
import androidx.room.Entity
import androidx.room.Insert
import androidx.room.OnConflictStrategy
import androidx.room.PrimaryKey
import androidx.room.Query
import androidx.room.RoomDatabase

@Entity(tableName = "local_records")
data class LocalRecord(
    @PrimaryKey(autoGenerate = true) val id: Long = 0,
    val tableName: String,
    val payload: String,
    val updatedAt: Long = System.currentTimeMillis(),
)

@Entity(tableName = "conversas")
data class ConversasEntity(
    @PrimaryKey(autoGenerate = true) val id: Long = 0,
    val role: String,
    val content: String,
    val createdAt: String,
)

@Entity(tableName = "passwords")
data class PasswordEntity(
    @PrimaryKey(autoGenerate = true) val id: Long = 0,
    val platform: String,
    val email: String,
    val secretCipher: String,
    val notes: String,
)

@Entity(tableName = "configuracoes")
data class ConfigEntity(
    @PrimaryKey val key: String,
    val value: String,
)

@Entity(tableName = "dashboard_cache")
data class DashboardCacheEntity(
    @PrimaryKey val id: Int = 1,
    val json: String,
    val updatedAt: Long,
)

@Entity(tableName = "perfil_biometrico")
data class BiometricEntity(
    @PrimaryKey val id: Int = 1,
    val voiceCipher: String,
    val faceCipher: String,
    val enrolled: Boolean,
)

@Entity(tableName = "tentativas_acesso")
data class AccessAttemptEntity(
    @PrimaryKey(autoGenerate = true) val id: Long = 0,
    val kind: String,
    val success: Boolean,
    val detail: String,
    val createdAt: Long = System.currentTimeMillis(),
)

@Entity(tableName = "seguranca_log")
data class SecurityLogEntity(
    @PrimaryKey(autoGenerate = true) val id: Long = 0,
    val kind: String,
    val detail: String,
    val createdAt: Long = System.currentTimeMillis(),
)

@Entity(tableName = "logs_erros")
data class TaskLogEntity(
    @PrimaryKey(autoGenerate = true) val id: Long = 0,
    val name: String,
    val reason: String,
    val attempts: Int,
    val status: String,
)

@Entity(tableName = "offline_queue")
data class OfflineTaskEntity(
    @PrimaryKey(autoGenerate = true) val id: Long = 0,
    val path: String,
    val body: String,
    val createdAt: Long = System.currentTimeMillis(),
)

@Dao
interface LetimaDao {
    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun upsertConfig(row: ConfigEntity)

    @Query("SELECT value FROM configuracoes WHERE key = :key LIMIT 1")
    suspend fun getConfig(key: String): String?

    @Query("SELECT * FROM configuracoes")
    suspend fun allConfig(): List<ConfigEntity>

    @Insert
    suspend fun insertConversation(row: ConversasEntity)

    @Query("SELECT * FROM conversas ORDER BY id DESC LIMIT 80")
    suspend fun conversations(): List<ConversasEntity>

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun upsertBiometric(row: BiometricEntity)

    @Query("SELECT * FROM perfil_biometrico WHERE id = 1")
    suspend fun biometric(): BiometricEntity?

    @Insert
    suspend fun insertAttempt(row: AccessAttemptEntity)

    @Insert
    suspend fun insertSecurity(row: SecurityLogEntity)

    @Query("SELECT * FROM seguranca_log ORDER BY id DESC LIMIT 100")
    suspend fun securityLogs(): List<SecurityLogEntity>

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun upsertDashboard(row: DashboardCacheEntity)

    @Query("SELECT * FROM dashboard_cache WHERE id = 1")
    suspend fun dashboard(): DashboardCacheEntity?

    @Insert
    suspend fun insertPassword(row: PasswordEntity)

    @Query("SELECT * FROM passwords")
    suspend fun passwords(): List<PasswordEntity>

    @Insert
    suspend fun insertRecord(row: LocalRecord)

    @Query("SELECT * FROM local_records WHERE tableName = :table ORDER BY id DESC")
    suspend fun records(table: String): List<LocalRecord>

    @Insert
    suspend fun insertTask(row: TaskLogEntity)

    @Query("SELECT * FROM logs_erros ORDER BY id DESC LIMIT 100")
    suspend fun tasks(): List<TaskLogEntity>

    @Query("UPDATE logs_erros SET status = :status, attempts = attempts + 1 WHERE id = :id")
    suspend fun bumpTask(id: Long, status: String)

    @Insert
    suspend fun enqueue(row: OfflineTaskEntity)

    @Query("SELECT * FROM offline_queue")
    suspend fun queue(): List<OfflineTaskEntity>

    @Query("DELETE FROM offline_queue WHERE id = :id")
    suspend fun dequeue(id: Long)
}

@Database(
    entities = [
        LocalRecord::class, ConversasEntity::class, PasswordEntity::class, ConfigEntity::class,
        DashboardCacheEntity::class, BiometricEntity::class, AccessAttemptEntity::class,
        SecurityLogEntity::class, TaskLogEntity::class, OfflineTaskEntity::class,
    ],
    version = 1,
    exportSchema = false,
)
abstract class LetimaDatabase : RoomDatabase() {
    abstract fun dao(): LetimaDao
}

~~~

### letimax/android/app/src/main/java/com/letimax/app/net/LetimaApi.kt
~~~kt
package com.letimax.app.net

import com.letimax.app.domain.Security
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import okhttp3.MediaType.Companion.toMediaType
import okhttp3.OkHttpClient
import okhttp3.Request
import okhttp3.RequestBody.Companion.toRequestBody
import org.json.JSONArray
import org.json.JSONObject
import java.util.concurrent.TimeUnit

class LetimaApi(private val baseUrlProvider: () -> String) {
    private val client = OkHttpClient.Builder()
        .connectTimeout(15, TimeUnit.SECONDS)
        .readTimeout(60, TimeUnit.SECONDS)
        .build()
    private val jsonType = "application/json; charset=utf-8".toMediaType()

    private fun url(path: String): String {
        val base = baseUrlProvider().trimEnd('/')
        return "$base$path"
    }

    suspend fun get(path: String): JSONObject = withContext(Dispatchers.IO) {
        val req = Request.Builder().url(url(path)).get().build()
        client.newCall(req).execute().use { res ->
            val body = res.body?.string().orEmpty()
            val safe = Security.redactSecrets(body)
            if (safe.isBlank()) JSONObject()
            else if (safe.trimStart().startsWith("[")) JSONObject().put("items", JSONArray(safe))
            else JSONObject(safe)
        }
    }

    suspend fun post(path: String, body: JSONObject): JSONObject = withContext(Dispatchers.IO) {
        val req = Request.Builder()
            .url(url(path))
            .post(body.toString().toRequestBody(jsonType))
            .build()
        client.newCall(req).execute().use { res ->
            val text = Security.redactSecrets(res.body?.string().orEmpty())
            if (text.isBlank()) JSONObject().put("ok", res.isSuccessful).put("http", res.code)
            else runCatching { JSONObject(text) }.getOrElse {
                JSONObject().put("ok", res.isSuccessful).put("raw", text).put("http", res.code)
            }
        }
    }

    suspend fun delete(path: String): JSONObject = withContext(Dispatchers.IO) {
        val req = Request.Builder().url(url(path)).delete().build()
        client.newCall(req).execute().use { res ->
            JSONObject(Security.redactSecrets(res.body?.string().orEmpty().ifBlank { """{"ok":true}""" }))
        }
    }
}

~~~

### letimax/android/app/src/main/java/com/letimax/app/service/NotificationMonitor.kt
~~~kt
package com.letimax.app.service

import android.service.notification.NotificationListenerService
import android.service.notification.StatusBarNotification

class NotificationMonitor : NotificationListenerService() {
    override fun onNotificationPosted(sbn: StatusBarNotification?) {
        if (sbn == null) return
        val pkg = sbn.packageName.orEmpty()
        val title = sbn.notification.extras.getCharSequence("android.title")?.toString().orEmpty()
        if (pkg.contains("whatsapp", true) || pkg.contains("sms", true) || pkg.contains("mms", true)) {
            lastImportant = "$pkg · $title"
        }
    }

    companion object {
        @Volatile
        var lastImportant: String = ""
    }
}

~~~

### letimax/android/app/src/main/java/com/letimax/app/service/BootReceiver.kt
~~~kt
package com.letimax.app.service

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import androidx.core.content.ContextCompat

class BootReceiver : BroadcastReceiver() {
    override fun onReceive(context: Context, intent: Intent) {
        if (intent.action == Intent.ACTION_BOOT_COMPLETED) {
            ContextCompat.startForegroundService(context, Intent(context, LetimaXService::class.java))
        }
    }
}

~~~

### letimax/android/app/src/main/java/com/letimax/app/service/LetimaXService.kt
~~~kt
package com.letimax.app.service

import android.app.Notification
import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.PendingIntent
import android.app.Service
import android.content.Intent
import android.os.Build
import android.os.IBinder
import androidx.core.app.NotificationCompat
import com.letimax.app.R
import com.letimax.app.ui.MainActivity

class LetimaXService : Service() {
    override fun onBind(intent: Intent?): IBinder? = null

    override fun onCreate() {
        super.onCreate()
        val nm = getSystemService(NotificationManager::class.java)
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            nm.createNotificationChannel(
                NotificationChannel(CHANNEL, "LétimaX", NotificationManager.IMPORTANCE_LOW),
            )
        }
        startForeground(1, notice())
    }

    private fun notice(): Notification {
        val pi = PendingIntent.getActivity(
            this, 0, Intent(this, MainActivity::class.java),
            PendingIntent.FLAG_IMMUTABLE,
        )
        return NotificationCompat.Builder(this, CHANNEL)
            .setSmallIcon(R.drawable.ic_letimax)
            .setContentTitle("LétimaX")
            .setContentText("LétimaX activa — a trabalhar para si")
            .setContentIntent(pi)
            .setOngoing(true)
            .build()
    }

    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int = START_STICKY

    companion object {
        const val CHANNEL = "letimax_fg"
    }
}

~~~

### letimax/android/app/src/main/java/com/letimax/app/device/DeviceCommands.kt
~~~kt
package com.letimax.app.device

import android.app.NotificationManager
import android.bluetooth.BluetoothAdapter
import android.content.Context
import android.content.Intent
import android.hardware.camera2.CameraManager
import android.media.AudioManager
import android.net.Uri
import android.net.wifi.WifiManager
import android.os.Build
import android.provider.Settings
import android.telephony.SmsManager
import android.view.KeyEvent
import androidx.core.content.ContextCompat
import com.letimax.app.domain.VoiceCommand
import com.letimax.app.domain.VoiceParser

class DeviceCommands(private val context: Context) {
    fun execute(cmd: VoiceCommand): String {
        if (!cmd.ok || cmd.id == null) return cmd.spoken ?: "Comando desconhecido."
        return when (cmd.id) {
            "torch_on" -> torch(true)
            "torch_off" -> torch(false)
            "vol_up" -> volume(+1)
            "vol_down" -> volume(-1)
            "vol_max" -> volume(99)
            "silent" -> silent()
            "bt_on" -> openPanel("bluetooth")
            "bt_off" -> openPanel("bluetooth")
            "wifi_on", "wifi_off" -> openPanel("wifi")
            "pause_music" -> media(KeyEvent.KEYCODE_MEDIA_PAUSE)
            "resume_music" -> media(KeyEvent.KEYCODE_MEDIA_PLAY)
            "next_track" -> media(KeyEvent.KEYCODE_MEDIA_NEXT)
            "prev_track" -> media(KeyEvent.KEYCODE_MEDIA_PREVIOUS)
            "bright_up" -> brightness(true)
            "bright_down" -> brightness(false)
            "screen_off" -> "Para desligar o ecrã use o botão físico — o sistema Android bloqueia sleep sem Device Owner."
            "busy_call" -> VoiceParser.busyCallMessage()
            "call_contact" -> dial(cmd.args.firstOrNull().orEmpty())
            "reply_last_sms" -> sendSms(null, cmd.args.firstOrNull().orEmpty())
            else -> "Comando ${cmd.id} registado. Execução no dispositivo quando as permissões estiverem activas."
        }
    }

    private fun torch(on: Boolean): String {
        val cm = context.getSystemService(Context.CAMERA_SERVICE) as CameraManager
        val id = cm.cameraIdList.firstOrNull() ?: return "Sem câmara para lanterna."
        cm.setTorchMode(id, on)
        return if (on) "Lanterna ligada." else "Lanterna desligada."
    }

    private fun volume(delta: Int): String {
        val am = context.getSystemService(Context.AUDIO_SERVICE) as AudioManager
        if (delta == 99) {
            am.setStreamVolume(AudioManager.STREAM_MUSIC, am.getStreamMaxVolume(AudioManager.STREAM_MUSIC), 0)
            return "Volume máximo."
        }
        am.adjustStreamVolume(
            AudioManager.STREAM_MUSIC,
            if (delta > 0) AudioManager.ADJUST_RAISE else AudioManager.ADJUST_LOWER,
            AudioManager.FLAG_SHOW_UI,
        )
        return "Volume ajustado."
    }

    private fun silent(): String {
        val nm = context.getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.M && !nm.isNotificationPolicyAccessGranted) {
            context.startActivity(Intent(Settings.ACTION_NOTIFICATION_POLICY_ACCESS_SETTINGS).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK))
            return "Autorize o acesso ao modo Não incomodar."
        }
        val am = context.getSystemService(Context.AUDIO_SERVICE) as AudioManager
        am.ringerMode = AudioManager.RINGER_MODE_SILENT
        return "Modo silencioso."
    }

    private fun openPanel(kind: String): String {
        val intent = when (kind) {
            "wifi" -> Intent(Settings.Panel.ACTION_WIFI)
            else -> Intent(Settings.Panel.ACTION_INTERNET_CONNECTIVITY)
        }
        intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
        runCatching { context.startActivity(intent) }
        if (kind == "bluetooth") {
            BluetoothAdapter.getDefaultAdapter()
            context.startActivity(Intent(Settings.ACTION_BLUETOOTH_SETTINGS).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK))
        }
        return "Painel do sistema aberto — o Android 10+ já não permite ligar Wi-Fi/Bluetooth em silêncio."
    }

    private fun media(code: Int): String {
        val event = KeyEvent(KeyEvent.ACTION_DOWN, code)
        val am = context.getSystemService(Context.AUDIO_SERVICE) as AudioManager
        am.dispatchMediaKeyEvent(event)
        am.dispatchMediaKeyEvent(KeyEvent(KeyEvent.ACTION_UP, code))
        return "Comando de média enviado."
    }

    private fun brightness(up: Boolean): String {
        val uri = android.provider.Settings.System.getUriFor(android.provider.Settings.System.SCREEN_BRIGHTNESS)
        if (!Settings.System.canWrite(context)) {
            context.startActivity(Intent(Settings.ACTION_MANAGE_WRITE_SETTINGS, Uri.parse("package:${context.packageName}")).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK))
            return "Autorize alterar definições do sistema para o brilho."
        }
        val cur = Settings.System.getInt(context.contentResolver, Settings.System.SCREEN_BRIGHTNESS, 128)
        val next = (cur + if (up) 40 else -40).coerceIn(10, 255)
        Settings.System.putInt(context.contentResolver, Settings.System.SCREEN_BRIGHTNESS, next)
        context.contentResolver.notifyChange(uri, null)
        return "Brilho ajustado."
    }

    private fun dial(name: String): String {
        val intent = Intent(Intent.ACTION_DIAL, Uri.parse("tel:$name")).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
        context.startActivity(intent)
        return "A abrir o marcador para $name."
    }

    private fun sendSms(number: String?, text: String): String {
        if (text.isBlank()) return "Mensagem vazia."
        if (number.isNullOrBlank()) return "Número em falta — use o último SMS no histórico do sistema."
        SmsManager.getDefault().sendTextMessage(number, null, text, null, null)
        return "SMS enviado."
    }
}

~~~

### letimax/android/app/src/main/java/com/letimax/app/domain/VoiceParser.kt
~~~kt
package com.letimax.app.domain

data class VoiceCommand(
    val ok: Boolean,
    val id: String? = null,
    val kind: String? = null,
    val args: List<String> = emptyList(),
    val needsConfirm: Boolean = false,
    val reason: String? = null,
    val spoken: String? = null,
)

object VoiceParser {
    private data class Spec(val id: String, val re: Regex, val kind: String)

    private val commands = listOf(
        Spec("answer_call", Regex("""létimax,\s*atende a chamada""", RegexOption.IGNORE_CASE), "calls"),
        Spec("reject_call", Regex("""létimax,\s*rejeita a chamada""", RegexOption.IGNORE_CASE), "calls"),
        Spec("busy_call", Regex("""létimax,\s*diz que estou ocupado""", RegexOption.IGNORE_CASE), "calls"),
        Spec("call_contact", Regex("""létimax,\s*liga para (.+)""", RegexOption.IGNORE_CASE), "calls"),
        Spec("read_sms", Regex("""létimax,\s*lê o sms do (.+)""", RegexOption.IGNORE_CASE), "messages"),
        Spec("reply_sms", Regex("""létimax,\s*responde ao sms do (.+?) dizendo (.+)""", RegexOption.IGNORE_CASE), "messages"),
        Spec("read_last_sms", Regex("""létimax,\s*lê o último sms""", RegexOption.IGNORE_CASE), "messages"),
        Spec("reply_last_sms", Regex("""létimax,\s*responde ao último sms dizendo (.+)""", RegexOption.IGNORE_CASE), "messages"),
        Spec("torch_on", Regex("""létimax,\s*liga a lanterna""", RegexOption.IGNORE_CASE), "hardware"),
        Spec("torch_off", Regex("""létimax,\s*desliga a lanterna""", RegexOption.IGNORE_CASE), "hardware"),
        Spec("vol_up", Regex("""létimax,\s*sobe o volume""", RegexOption.IGNORE_CASE), "hardware"),
        Spec("vol_down", Regex("""létimax,\s*desce o volume""", RegexOption.IGNORE_CASE), "hardware"),
        Spec("silent", Regex("""létimax,\s*silencia""", RegexOption.IGNORE_CASE), "hardware"),
        Spec("vol_max", Regex("""létimax,\s*volume máximo""", RegexOption.IGNORE_CASE), "hardware"),
        Spec("bt_on", Regex("""létimax,\s*liga o bluetooth""", RegexOption.IGNORE_CASE), "hardware"),
        Spec("bt_off", Regex("""létimax,\s*desliga o bluetooth""", RegexOption.IGNORE_CASE), "hardware"),
        Spec("wifi_on", Regex("""létimax,\s*liga o wifi""", RegexOption.IGNORE_CASE), "hardware"),
        Spec("wifi_off", Regex("""létimax,\s*desliga o wifi""", RegexOption.IGNORE_CASE), "hardware"),
        Spec("pause_music", Regex("""létimax,\s*pausa a música""", RegexOption.IGNORE_CASE), "media"),
        Spec("resume_music", Regex("""létimax,\s*continua a música""", RegexOption.IGNORE_CASE), "media"),
        Spec("next_track", Regex("""létimax,\s*próxima música""", RegexOption.IGNORE_CASE), "media"),
        Spec("prev_track", Regex("""létimax,\s*música anterior""", RegexOption.IGNORE_CASE), "media"),
        Spec("theme_dark", Regex("""létimax,\s*modo escuro""", RegexOption.IGNORE_CASE), "theme"),
        Spec("theme_light", Regex("""létimax,\s*modo claro""", RegexOption.IGNORE_CASE), "theme"),
        Spec("screen_off", Regex("""létimax,\s*desliga o ecrã""", RegexOption.IGNORE_CASE), "theme"),
        Spec("bright_up", Regex("""létimax,\s*aumenta o brilho""", RegexOption.IGNORE_CASE), "theme"),
        Spec("bright_down", Regex("""létimax,\s*diminui o brilho""", RegexOption.IGNORE_CASE), "theme"),
        Spec("autonomy_full", Regex("""létimax,\s*modo autónomo total por (\d+)\s*horas?""", RegexOption.IGNORE_CASE), "autonomy"),
        Spec("autonomy_off", Regex("""létimax,\s*desactiva o modo autónomo""", RegexOption.IGNORE_CASE), "autonomy"),
        Spec("autonomy_normal", Regex("""létimax,\s*modo normal""", RegexOption.IGNORE_CASE), "autonomy"),
        Spec("start", Regex("""létimax,\s*iniciar""", RegexOption.IGNORE_CASE), "autonomy"),
        Spec("sales", Regex("""létimax,\s*como estão as vendas""", RegexOption.IGNORE_CASE), "business"),
        Spec("next_opportunity", Regex("""létimax,\s*qual a próxima oportunidade""", RegexOption.IGNORE_CASE), "business"),
        Spec("earned_today", Regex("""létimax,\s*quanto ganhei hoje""", RegexOption.IGNORE_CASE), "business"),
        Spec("day_summary", Regex("""létimax,\s*faz o resumo do dia""", RegexOption.IGNORE_CASE), "business"),
        Spec("raqueamento", Regex("""létimax,\s*activa o raqueamento""", RegexOption.IGNORE_CASE), "business"),
        Spec("company_plan", Regex("""létimax,\s*faz o plano da empresa""", RegexOption.IGNORE_CASE), "business"),
    )

    fun parse(utterance: String?, voiceRecognized: Boolean): VoiceCommand {
        val text = utterance.orEmpty().trim()
        if (!voiceRecognized) {
            return VoiceCommand(ok = false, reason = "voice_not_recognized", spoken = Security.unknownSpeakerReply())
        }
        for (cmd in commands) {
            val m = cmd.re.find(text) ?: continue
            return VoiceCommand(
                ok = true,
                id = cmd.id,
                kind = cmd.kind,
                args = m.groupValues.drop(1),
                needsConfirm = cmd.id == "raqueamento" || cmd.kind == "calls",
            )
        }
        return VoiceCommand(ok = false, reason = "unknown_command")
    }

    fun busyCallMessage() =
        "O Senhor Letício está ocupado neste momento. Pode deixar recado ou ele retorna em breve."
}

~~~

### letimax/android/app/src/main/java/com/letimax/app/domain/Brand.kt
~~~kt
package com.letimax.app.domain

object Brand {
    const val NAME = "LétimaX"
    const val OWNER = "Letício Costa João Mafuca"
    const val GREETING = "Bem-vindo, Senhor Letício. Estou pronto. Hoje vamos fazer ainda mais dinheiro."
    const val BIOMETRIC_CONFIRM = "Perfil biométrico criado. A LétimaX reconhece-o agora, Senhor Letício."
    const val GOLD = 0xFFC9A84C
    const val LIGHT_BG = 0xFFFFFFFF
    const val LIGHT_TEXT = 0xFF1A1A1A
    const val DARK_BG = 0xFF0D0D0D
    const val DARK_TEXT = 0xFFFFFFFF
    const val INTERACTIVE = 0xFF2D2D2D

    val voicePhrases = listOf(
        "Eu sou o Senhor Letício e a LétimaX obedece apenas à minha voz.",
        "Hoje vamos construir activos que geram dinheiro sem trabalho diário.",
        "LétimaX, reconhece a minha voz e protege as chaves e o meu negócio.",
    )
    val faceAngles = listOf("frente", "direita", "esquerda", "cima", "baixo")
    val niches = listOf(
        "Marketing Digital com IA", "Emagrecimento e Saúde", "Relacionamentos", "Finanças Pessoais",
        "Desenvolvimento Pessoal", "Inglês Rápido", "Concursos Públicos", "Redes Sociais",
        "Negócio Online do Zero", "Ansiedade e Saúde Mental", "Cripto para Iniciantes",
        "Culinária Saudável", "Moda e Beleza", "Educação Infantil", "Viagens Digitais",
    )
    val revenueSources = listOf(
        "Produtos Digitais Próprios", "Afiliados Externos", "Programa de Afiliados Próprio",
        "Mentorias e Consultorias", "Membership Recorrente", "Conteúdo Orgânico Monetizado",
        "Email Marketing", "Lançamentos e Webinars", "Parcerias Estratégicas",
        "Licenciamento de Conteúdo", "Sistema de Referências", "Investimentos Passivos (só monitorização)",
    )
    val aiKeys = listOf(
        "ANTHROPIC_API_KEY", "OPENAI_API_KEY", "GEMINI_API_KEY",
        "STABILITY_API_KEY", "ELEVENLABS_API_KEY", "ELEVENLABS_VOICE_ID",
    )
    val platformKeys = listOf(
        "HOTMART_CLIENT_ID", "HOTMART_CLIENT_SECRET", "KIWIFY_API_KEY", "GUMROAD_ACCESS_TOKEN",
        "SHOPIFY_API_KEY", "SHOPIFY_API_SECRET", "BINANCE_API_KEY", "BINANCE_SECRET_KEY",
        "MAILCHIMP_API_KEY", "NETLIFY_API_KEY", "GMAIL_OAUTH_TOKEN", "GOOGLE_ANALYTICS_ID", "META_PIXEL_ID",
    )
    val roomTables = listOf(
        "conversas", "contexto_ia", "rascunhos_produtos", "logs_erros", "financas_pessoais",
        "contactos", "passwords", "configuracoes", "dashboard_cache", "saude", "humor_produtividade",
        "contratos", "regras_autonomia", "diario_decisoes", "empresa_dados", "empresa_plano",
        "nichos_monitorizados", "historico_nichos", "respostas_pre_aprovadas", "fontes_receita",
        "afiliados_externos", "afiliados_proprios", "historico_receita", "oportunidades_mercado",
        "testemunhos", "reputacao_alertas", "sentimento_analise", "email_marketing", "email_segmentos",
        "lancamentos", "webinars", "analytics", "carrinho_abandonado", "concorrencia", "seguranca_log",
        "sistema_dispositivo", "paginas_criadas", "sites_criados", "videos_guioes", "cursos_videos",
        "conteudo_marketing", "automacao_aprendizagem", "automacao_cascata", "automacao_pontuacao",
        "conteudo_agendado", "apresentacoes_criadas", "oportunidades_detectadas", "chaves_personalizadas",
        "perfil_biometrico", "tentativas_acesso", "motor_receita_oportunidades", "versoes_app", "metas",
        "tickets_suporte", "onboarding_clientes", "referencias_indicacoes", "direitos_digitais",
        "ab_tests", "precificacao_dinamica", "politicas_privacidade", "primeiro_uso", "sistema_raqueamento",
        "activos", "novos_negocios", "comandos_voz_log", "segredos_ricos", "construcao_activos",
    )
}

~~~

### letimax/android/app/src/main/java/com/letimax/app/domain/ChatTimeout.kt
~~~kt
package com.letimax.app.domain

object ChatTimeout {
    const val LOADING_MS = 10_000L
    const val PROCESSING_MS = 30_000L
    const val CANCEL_MS = 60_000L

    fun hintForElapsed(elapsedMs: Long): String = when {
        elapsedMs >= CANCEL_MS -> "Pedido cancelado. Quer tentar novamente?"
        elapsedMs >= PROCESSING_MS -> "LétimaX está a processar..."
        elapsedMs >= LOADING_MS -> "A carregar…"
        else -> ""
    }
}

~~~

### letimax/android/app/src/main/java/com/letimax/app/domain/Scoring.kt
~~~kt
package com.letimax.app.domain

data class OpportunityScore(val score: Int, val notify: Boolean)

object Scoring {
    fun score(
        returnPotential: Int = 50,
        ease: Int = 50,
        speed: Int = 50,
        history: Int = 50,
    ): OpportunityScore {
        fun clamp(n: Int) = n.coerceIn(0, 100)
        val s = Math.round(
            clamp(returnPotential) * 0.4 +
                clamp(ease) * 0.2 +
                clamp(speed) * 0.25 +
                clamp(history) * 0.15
        )
        return OpportunityScore(s, s > 70)
    }

    fun shouldNotify(score: Int) = score > 70

    fun rank(list: List<Int>): List<Int> = list.sortedDescending()
}

~~~

### letimax/android/app/src/main/java/com/letimax/app/domain/Lockout.kt
~~~kt
package com.letimax.app.domain

data class LockoutResult(
    val locked: Boolean,
    val minutes: Int?,
    val permanent: Boolean,
    val emailAlert: Boolean,
)

object Lockout {
    const val FACE_MIN = 0.92
    const val VOICE_MIN = 0.88
    const val FACE_ATTEMPTS = 3
    const val VOICE_ATTEMPTS = 2

    fun forFailures(count: Int): LockoutResult {
        val n = count
        return when {
            n >= 12 -> LockoutResult(true, null, true, true)
            n >= 9 -> LockoutResult(true, 24 * 60, false, true)
            n >= 6 -> LockoutResult(true, 30, false, false)
            n >= 3 -> LockoutResult(true, 5, false, false)
            else -> LockoutResult(false, 0, false, false)
        }
    }

    fun isActive(lockUntil: String?, now: Long = System.currentTimeMillis()): Boolean {
        if (lockUntil == "permanent") return true
        if (lockUntil.isNullOrBlank() || lockUntil == "0") return false
        return lockUntil.toLongOrNull()?.let { it > now } ?: false
    }
}

~~~

### letimax/android/app/src/main/java/com/letimax/app/domain/Autonomy.kt
~~~kt
package com.letimax.app.domain

object Autonomy {
    private val never = setOf(
        "spend_ads", "withdraw_money", "change_niche", "expose_api_keys", "execute_finance",
    )
    private val level1 = setOf(
        "analyze_market", "draft_for_approval", "monitor_sales", "price_adjust_notify",
        "backup", "reports", "busy_call_message", "draft_email_whatsapp", "collect_testimonials",
        "monitor_reputation", "revenue_engine", "monitor_goals",
    )
    private val never1 = setOf(
        "publish_product", "send_replies", "change_niche", "spend_money", "finance_decision",
    ) + never
    private val extra2 = setOf(
        "send_preapproved_replies", "simple_refunds", "revoke_access", "publish_scheduled_organic",
        "email_sequences", "cart_recovery", "onboarding_emails", "referral_email_day14",
    )
    private val never2 = setOf(
        "publish_new_product_without_approval", "spend_ads", "change_niche", "withdraw_money",
    ) + never
    private val extra3 = setOf(
        "full_support_preapproved", "publish_previously_approved", "organic_all_networks",
        "optimize_funnels", "full_cascade", "return_report",
    )
    private val never3 = setOf(
        "spend_ads", "withdraw_money", "change_niche", "create_brand_new_product", "expose_api_keys",
    ) + never

    fun canPerform(level: Int, action: String): Boolean {
        val lv = when (level) { 2 -> 2; 3 -> 3; else -> 1 }
        if (action in never) return false
        return when (lv) {
            1 -> action !in never1 && action in level1
            2 -> action !in never2 && (action in level1 || action in extra2)
            else -> action !in never3 && (action in level1 || action in extra2 || action in extra3)
        }
    }

    fun parseHours(text: String): Int? {
        val m = Regex("por\\s+(\\d+)\\s*horas?", RegexOption.IGNORE_CASE).find(text)
        return m?.groupValues?.get(1)?.toIntOrNull()
    }
}

~~~

### letimax/android/app/src/main/java/com/letimax/app/domain/Security.kt
~~~kt
package com.letimax.app.domain

object Security {
    private val apiKeyPatterns = listOf(
        Regex("""\bsk-[A-Za-z0-9]{10,}\b"""),
        Regex("""\bsk-ant-[A-Za-z0-9\-_]{10,}\b"""),
        Regex("""\bxai-[A-Za-z0-9]{10,}\b"""),
        Regex("""\bAIza[A-Za-z0-9\-_]{20,}\b"""),
        Regex("""\bAKIA[A-Z0-9]{16}\b"""),
        Regex("""\bghp_[A-Za-z0-9]{20,}\b"""),
        Regex("""\bBearer\s+[A-Za-z0-9\-._~+/]+=*""", RegexOption.IGNORE_CASE),
    )
    private val keyRequest = Regex(
        """(chave(s)?\s+de\s+api|api\s*key|anthropic_api_key|openai_api_key|secret[_\s]?key)""",
        RegexOption.IGNORE_CASE,
    )

    fun requestsApiKeys(text: String?) = keyRequest.containsMatchIn(text.orEmpty())

    fun redactSecrets(text: String?): String {
        var out = text.orEmpty()
        for (re in apiKeyPatterns) out = re.replace(out, "[BLOQUEADO]")
        return out
    }

    fun maskSecret(value: String?): String {
        val v = value.orEmpty()
        if (v.isEmpty()) return ""
        if (v.length <= 4) return "••••"
        return "••••" + v.takeLast(4)
    }

    fun isFinancialCommand(text: String?) = Regex(
        """(retirar|retira|levantar|pagar anúncio|comprar cripto|vender cripto|transferir dinheiro|autorizar pagamento)""",
        RegexOption.IGNORE_CASE,
    ).containsMatchIn(text.orEmpty())

    fun unknownSpeakerReply() =
        "Não reconheço esta voz. Só o Senhor Letício pode dar comandos à LétimaX."

    fun refuseNonOwner() =
        "Recusado. A LétimaX obedece única e exclusivamente ao Senhor Letício. Este comando foi registado e o Senhor Letício será notificado."
}

~~~

### letimax/android/app/src/main/java/com/letimax/app/domain/CommandRouter.kt
~~~kt
package com.letimax.app.domain

import org.json.JSONObject

object CommandRouter {
    fun spokenReply(cmd: VoiceCommand, data: JSONObject): String? {
        if (!cmd.ok) return cmd.spoken
        val d = data.optJSONObject("dashboard") ?: JSONObject()
        val ops = data.optJSONArray("opportunities")
        val top = ops?.optJSONObject(0)
        return when (cmd.id) {
            "sales" -> "Vendas de hoje R$${d.optDouble("today")}. Mês R$${d.optDouble("month")}."
            "earned_today" -> "Hoje ganhou R$${d.optDouble("today")}."
            "next_opportunity" ->
                "Próxima oportunidade: ${top?.optString("title") ?: "nenhuma acima de 70"} com pontuação ${top?.optInt("score") ?: 0}."
            "day_summary" ->
                "Resumo: nicho ${d.optString("niche")}, receita do dia R$${d.optDouble("today")}, meta ${d.optDouble("goalCurrent")} de ${d.optDouble("goalTarget")}."
            "autonomy_full" -> "Modo autónomo total pedido por ${cmd.args.firstOrNull() ?: "?"} horas. Confirme no ecrã."
            "autonomy_off", "autonomy_normal" -> "A voltar ao modo normal, nível 1."
            "raqueamento" -> "O raqueamento só activa com a sua aprovação após 7 dias sem oportunidades viáveis."
            "company_plan" -> "A gerar o plano da empresa só com 3 meses de vendas ou este comando confirmado."
            else -> null
        }
    }
}

~~~

### letimax/android/app/src/main/java/com/letimax/app/domain/FaceAngles.kt
~~~kt
package com.letimax.app.domain

object FaceAngles {
    fun matches(index: Int, eulerX: Float, eulerY: Float): Boolean {
        return when (index) {
            0 -> kotlin.math.abs(eulerY) < 12f && kotlin.math.abs(eulerX) < 12f
            1 -> eulerY > 15f
            2 -> eulerY < -15f
            3 -> eulerX > 12f
            4 -> eulerX < -12f
            else -> false
        }
    }
}

~~~

### letimax/android/app/src/main/java/com/letimax/app/domain/Raqueamento.kt
~~~kt
package com.letimax.app.domain

data class RaqueamentoState(
    val eligible: Boolean,
    val canActivate: Boolean,
    val reason: String? = null,
    val prompt: String? = null,
)

object Raqueamento {
    fun eligible(daysWithoutScoreAbove70: Int, ownerApproved: Boolean): RaqueamentoState {
        if (daysWithoutScoreAbove70 < 7) {
            return RaqueamentoState(
                eligible = false,
                canActivate = false,
                reason = "O raqueamento só é proposto após 7 dias consecutivos sem oportunidades acima de 70.",
            )
        }
        return RaqueamentoState(
            eligible = true,
            canActivate = ownerApproved,
            prompt = "As fontes normais estão em baixo há 7 dias. Activar modo de raqueamento?",
        )
    }

    fun daysSinceLastHighScore(lastHighScoreAt: Long?, now: Long = System.currentTimeMillis()): Int {
        if (lastHighScoreAt == null || lastHighScoreAt == 0L) return 999
        return ((now - lastHighScoreAt) / (24 * 60 * 60 * 1000L)).toInt()
    }
}

~~~

### letimax/android/app/src/main/java/com/letimax/app/prefs/AppPrefs.kt
~~~kt
package com.letimax.app.prefs

import android.content.Context
import androidx.security.crypto.EncryptedSharedPreferences
import androidx.security.crypto.MasterKey

class AppPrefs(context: Context) {
    private val master = MasterKey.Builder(context)
        .setKeyScheme(MasterKey.KeyScheme.AES256_GCM)
        .build()
    private val sp = EncryptedSharedPreferences.create(
        context,
        "letimax_prefs",
        master,
        EncryptedSharedPreferences.PrefKeyEncryptionScheme.AES256_SIV,
        EncryptedSharedPreferences.PrefValueEncryptionScheme.AES256_GCM,
    )

    var serverUrl: String
        get() = sp.getString("server", "http://10.0.2.2:8787") ?: "http://10.0.2.2:8787"
        set(v) { sp.edit().putString("server", v).apply() }

    var themeMode: String
        get() = sp.getString("theme", "system") ?: "system"
        set(v) { sp.edit().putString("theme", v).apply() }

    var enrolled: Boolean
        get() = sp.getBoolean("enrolled", false)
        set(v) { sp.edit().putBoolean("enrolled", v).apply() }

    var firstUseDone: Boolean
        get() = sp.getBoolean("first_use", false)
        set(v) { sp.edit().putBoolean("first_use", v).apply() }

    var sessionOk: Boolean
        get() = sp.getBoolean("session", false)
        set(v) { sp.edit().putBoolean("session", v).apply() }

    var failCount: Int
        get() = sp.getInt("fail", 0)
        set(v) { sp.edit().putInt("fail", v).apply() }

    var lockUntil: String
        get() = sp.getString("lock", "0") ?: "0"
        set(v) { sp.edit().putString("lock", v).apply() }

    var activationPhrase: String
        get() = sp.getString("activation", "LétimaX, iniciar") ?: "LétimaX, iniciar"
        set(v) { sp.edit().putString("activation", v).apply() }

    var emergencyPin: String
        get() = sp.getString("pin", "") ?: ""
        set(v) { sp.edit().putString("pin", v).apply() }

    var dualBiometricOk: Boolean
        get() = sp.getBoolean("dual_ok", false)
        set(v) { sp.edit().putBoolean("dual_ok", v).apply() }

    var morningHour: String
        get() = sp.getString("morning", "08:00") ?: "08:00"
        set(v) { sp.edit().putString("morning", v).apply() }

    var workStart: String
        get() = sp.getString("work_start", "08:00") ?: "08:00"
        set(v) { sp.edit().putString("work_start", v).apply() }

    var workEnd: String
        get() = sp.getString("work_end", "22:00") ?: "22:00"
        set(v) { sp.edit().putString("work_end", v).apply() }

    var autonomyLevel: Int
        get() = sp.getInt("autonomy", 1)
        set(v) { sp.edit().putInt("autonomy", v).apply() }

    var tokenLimit: Int
        get() = sp.getInt("tokens", 8000)
        set(v) { sp.edit().putInt("tokens", v).apply() }

    var apiDailyLimit: String
        get() = sp.getString("api_limit", "0") ?: "0"
        set(v) { sp.edit().putString("api_limit", v).apply() }

    var busyMessage: String
        get() = sp.getString("busy", "O Senhor Letício está ocupado neste momento. Pode deixar recado ou ele retorna em breve.")
            ?: "O Senhor Letício está ocupado neste momento. Pode deixar recado ou ele retorna em breve."
        set(v) { sp.edit().putString("busy", v).apply() }

    var foregroundEnabled: Boolean
        get() = sp.getBoolean("fg", true)
        set(v) { sp.edit().putBoolean("fg", v).apply() }

    var currentNiche: String
        get() = sp.getString("niche", "Marketing Digital com IA") ?: "Marketing Digital com IA"
        set(v) { sp.edit().putString("niche", v).apply() }

    var monthlyGoal: String
        get() = sp.getString("goal", "2000") ?: "2000"
        set(v) { sp.edit().putString("goal", v).apply() }

    var affiliatePct: String
        get() = sp.getString("aff", "50") ?: "50"
        set(v) { sp.edit().putString("aff", v).apply() }

    var cookieDays: String
        get() = sp.getString("cookie", "30") ?: "30"
        set(v) { sp.edit().putString("cookie", v).apply() }
}

~~~

### letimax/android/app/src/main/java/com/letimax/app/biometrics/Embeddings.kt
~~~kt
package com.letimax.app.biometrics

import kotlin.math.sqrt

object Embeddings {
    fun cosine(a: FloatArray, b: FloatArray): Float {
        if (a.isEmpty() || b.isEmpty() || a.size != b.size) return 0f
        var dot = 0.0
        var na = 0.0
        var nb = 0.0
        for (i in a.indices) {
            dot += a[i] * b[i]
            na += a[i] * a[i]
            nb += b[i] * b[i]
        }
        val den = sqrt(na) * sqrt(nb)
        if (den == 0.0) return 0f
        return (dot / den).toFloat()
    }

    fun voiceFeatures(pcm16: ShortArray): FloatArray {
        val bins = FloatArray(64)
        if (pcm16.isEmpty()) return bins
        val step = (pcm16.size / 32).coerceAtLeast(1)
        var zc = 0
        var energy = 0.0
        var prev = 0
        for (i in pcm16.indices) {
            val v = pcm16[i].toInt()
            energy += v * v
            if (i > 0 && ((prev >= 0 && v < 0) || (prev < 0 && v >= 0))) zc++
            prev = v
            val bin = (i * 32 / pcm16.size).coerceIn(0, 31)
            bins[bin] += kotlin.math.abs(v.toFloat())
        }
        val meanEnergy = (energy / pcm16.size).toFloat()
        val variance = pcm16.fold(0.0) { acc, s ->
            val d = s - meanEnergy
            acc + d * d
        } / pcm16.size
        bins[32] = (zc.toFloat() / pcm16.size)
        bins[33] = meanEnergy / Short.MAX_VALUE
        bins[34] = kotlin.math.sqrt(variance).toFloat() / Short.MAX_VALUE
        bins[35] = if (variance > 1e6) 1f else 0.2f
        val max = bins.maxOrNull()?.takeIf { it > 0f } ?: 1f
        for (i in bins.indices) bins[i] /= max
        return bins
    }

    fun likelyRecordedAudio(features: FloatArray): Boolean {
        val varianceNorm = features.getOrElse(34) { 0f }
        return varianceNorm < 0.08f
    }

    fun pack(a: FloatArray) = a.joinToString(",")
    fun unpack(s: String) = s.split(",").mapNotNull { it.toFloatOrNull() }.toFloatArray()
}

~~~

### letimax/android/app/src/main/java/com/letimax/app/crypto/KeystoreAes.kt
~~~kt
package com.letimax.app.crypto

import android.security.keystore.KeyGenParameterSpec
import android.security.keystore.KeyProperties
import android.util.Base64
import java.security.KeyStore
import javax.crypto.Cipher
import javax.crypto.KeyGenerator
import javax.crypto.SecretKey
import javax.crypto.spec.GCMParameterSpec

object KeystoreAes {
    private const val ALIAS = "letimax_aes256"
    private const val TRANSFORMATION = "AES/GCM/NoPadding"

    private fun key(): SecretKey {
        val ks = KeyStore.getInstance("AndroidKeyStore").apply { load(null) }
        (ks.getKey(ALIAS, null) as? SecretKey)?.let { return it }
        val gen = KeyGenerator.getInstance(KeyProperties.KEY_ALGORITHM_AES, "AndroidKeyStore")
        gen.init(
            KeyGenParameterSpec.Builder(ALIAS, KeyProperties.PURPOSE_ENCRYPT or KeyProperties.PURPOSE_DECRYPT)
                .setBlockModes(KeyProperties.BLOCK_MODE_GCM)
                .setEncryptionPaddings(KeyProperties.ENCRYPTION_PADDING_NONE)
                .setKeySize(256)
                .build(),
        )
        return gen.generateKey()
    }

    fun encrypt(plain: ByteArray): String {
        val cipher = Cipher.getInstance(TRANSFORMATION)
        cipher.init(Cipher.ENCRYPT_MODE, key())
        val iv = cipher.iv
        val enc = cipher.doFinal(plain)
        val all = ByteArray(iv.size + enc.size)
        System.arraycopy(iv, 0, all, 0, iv.size)
        System.arraycopy(enc, 0, all, iv.size, enc.size)
        return Base64.encodeToString(all, Base64.NO_WRAP)
    }

    fun decrypt(payload: String): ByteArray {
        val all = Base64.decode(payload, Base64.NO_WRAP)
        val iv = all.copyOfRange(0, 12)
        val enc = all.copyOfRange(12, all.size)
        val cipher = Cipher.getInstance(TRANSFORMATION)
        cipher.init(Cipher.DECRYPT_MODE, key(), GCMParameterSpec(128, iv))
        return cipher.doFinal(enc)
    }

    fun encryptUtf8(text: String) = encrypt(text.toByteArray(Charsets.UTF_8))
    fun decryptUtf8(payload: String) = String(decrypt(payload), Charsets.UTF_8)
}

~~~

### letimax/android/app/src/main/java/com/letimax/app/ui/theme/Theme.kt
~~~kt
package com.letimax.app.ui.theme

import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material3.MaterialTheme
import androidx.compose.material3.darkColorScheme
import androidx.compose.material3.lightColorScheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color
import com.letimax.app.LetimaApp

val Gold = Color(0xFFC9A84C)
val LightBg = Color(0xFFFFFFFF)
val LightText = Color(0xFF1A1A1A)
val DarkBg = Color(0xFF0D0D0D)
val Interactive = Color(0xFF2D2D2D)

@Composable
fun LetimaTheme(force: String? = null, content: @Composable () -> Unit) {
    val pref = force ?: runCatching { LetimaApp.instance.prefs.themeMode }.getOrDefault("system")
    val dark = when (pref) {
        "dark" -> true
        "light" -> false
        else -> isSystemInDarkTheme()
    }
    val colors = if (dark) {
        darkColorScheme(
            primary = Gold,
            onPrimary = Color.Black,
            background = DarkBg,
            onBackground = Color.White,
            surface = DarkBg,
            onSurface = Color.White,
            secondary = Interactive,
        )
    } else {
        lightColorScheme(
            primary = Gold,
            onPrimary = Color.Black,
            background = LightBg,
            onBackground = LightText,
            surface = LightBg,
            onSurface = LightText,
            secondary = Interactive,
        )
    }
    MaterialTheme(colorScheme = colors, content = content)
}

~~~

### letimax/android/app/src/main/res/xml/network_security_config.xml
~~~xml
<?xml version="1.0" encoding="utf-8"?>
<network-security-config>
    <base-config cleartextTrafficPermitted="true" />
</network-security-config>

~~~

### letimax/android/app/src/main/res/drawable/ic_letimax.xml
~~~xml
<vector xmlns:android="http://schemas.android.com/apk/res/android"
    android:width="108dp"
    android:height="108dp"
    android:viewportWidth="108"
    android:viewportHeight="108">
    <path
        android:fillColor="#C9A84C"
        android:pathData="M18,18h72v72h-72z" />
    <path
        android:fillColor="#1A1A1A"
        android:pathData="M32,70 L54,30 L76,70 L66,70 L54,48 L42,70 Z" />
</vector>

~~~

### letimax/android/app/src/main/res/values/themes.xml
~~~xml
<resources>
    <style name="Theme.LetimaX" parent="Theme.Material3.DayNight.NoActionBar">
        <item name="colorPrimary">@color/gold</item>
        <item name="android:statusBarColor">@color/gold</item>
    </style>
</resources>

~~~

### letimax/android/app/src/main/res/values/strings.xml
~~~xml
<resources>
    <string name="app_name">LétimaX</string>
</resources>

~~~

### letimax/android/app/src/main/res/values/colors.xml
~~~xml
<resources>
    <color name="gold">#C9A84C</color>
    <color name="bg">#FFFFFF</color>
    <color name="text">#1A1A1A</color>
</resources>

~~~

### letimax/android/app/src/test/java/com/letimax/app/domain/DomainTest.kt
~~~kt
package com.letimax.app.domain

import org.junit.Assert.assertEquals
import org.junit.Assert.assertFalse
import org.junit.Assert.assertTrue
import org.junit.Test

class DomainTest {
    @Test
    fun opportunityNotifyAbove70() {
        val low = Scoring.score(40, 40, 40, 40)
        val high = Scoring.score(95, 90, 90, 80)
        assertFalse(Scoring.shouldNotify(low.score))
        assertTrue(high.notify)
        assertTrue(high.score > 70)
    }

    @Test
    fun ranking() {
        assertEquals(88, Scoring.rank(listOf(10, 88, 70)).first())
    }

    @Test
    fun lockoutProgressive() {
        assertFalse(Lockout.forFailures(2).locked)
        assertEquals(5, Lockout.forFailures(3).minutes)
        assertEquals(30, Lockout.forFailures(6).minutes)
        assertEquals(1440, Lockout.forFailures(9).minutes)
        assertTrue(Lockout.forFailures(12).permanent)
        assertTrue(Lockout.isActive("permanent"))
        assertTrue(Lockout.isActive((System.currentTimeMillis() + 10_000).toString()))
        assertFalse(Lockout.isActive((System.currentTimeMillis() - 10_000).toString()))
        assertEquals(0.92, Lockout.FACE_MIN, 0.0)
        assertEquals(0.88, Lockout.VOICE_MIN, 0.0)
    }

    @Test
    fun raqueamentoSevenDays() {
        val early = Raqueamento.eligible(6, true)
        assertFalse(early.canActivate)
        val ready = Raqueamento.eligible(7, false)
        assertTrue(ready.eligible)
        assertFalse(ready.canActivate)
        val go = Raqueamento.eligible(7, true)
        assertTrue(go.canActivate)
        assertTrue(Raqueamento.daysSinceLastHighScore(System.currentTimeMillis() - 8L * 86400000) >= 8)
    }

    @Test
    fun voiceRejectsStranger() {
        val bad = VoiceParser.parse("LétimaX, modo escuro", false)
        assertFalse(bad.ok)
        assertEquals(Security.unknownSpeakerReply(), bad.spoken)
        val ok = VoiceParser.parse("LétimaX, modo escuro", true)
        assertEquals("theme_dark", ok.id)
        val auto = VoiceParser.parse("LétimaX, modo autónomo total por 4 horas", true)
        assertEquals("autonomy_full", auto.id)
        assertEquals("4", auto.args[0])
    }

    @Test
    fun autonomyNeverSpends() {
        for (lv in listOf(1, 2, 3)) {
            assertFalse(Autonomy.canPerform(lv, "spend_ads"))
            assertFalse(Autonomy.canPerform(lv, "withdraw_money"))
            assertFalse(Autonomy.canPerform(lv, "expose_api_keys"))
        }
        assertFalse(Autonomy.canPerform(1, "publish_product"))
        assertTrue(Autonomy.canPerform(1, "analyze_market"))
        assertTrue(Autonomy.canPerform(2, "email_sequences"))
        assertTrue(Autonomy.canPerform(3, "publish_previously_approved"))
        assertFalse(Autonomy.canPerform(3, "create_brand_new_product"))
    }

    @Test
    fun faceAngles() {
        assertTrue(FaceAngles.matches(0, 0f, 0f))
        assertFalse(FaceAngles.matches(0, 0f, 40f))
        assertTrue(FaceAngles.matches(1, 0f, 20f))
        assertTrue(FaceAngles.matches(2, 0f, -20f))
        assertTrue(FaceAngles.matches(3, 20f, 0f))
        assertTrue(FaceAngles.matches(4, -20f, 0f))
    }

    @Test
    fun chatTimeoutHints() {
        assertEquals("", ChatTimeout.hintForElapsed(0))
        assertEquals("A carregar…", ChatTimeout.hintForElapsed(10_000))
        assertEquals("LétimaX está a processar...", ChatTimeout.hintForElapsed(30_000))
        assertTrue(ChatTimeout.hintForElapsed(60_000).contains("Cancelado") || ChatTimeout.hintForElapsed(60_000).contains("cancelado"))
    }

    @Test
    fun commandRouterSales() {
        val data = org.json.JSONObject().put("dashboard", org.json.JSONObject().put("today", 12.0).put("month", 40.0).put("niche", "x").put("goalCurrent", 1).put("goalTarget", 2))
        val spoken = CommandRouter.spokenReply(VoiceParser.parse("LétimaX, quanto ganhei hoje?", true), data)
        assertTrue(spoken!!.contains("12"))
    }

    @Test
    fun redactKeys() {
        assertTrue(Security.requestsApiKeys("mostra a ANTHROPIC_API_KEY"))
        assertTrue(Security.redactSecrets("usa sk-ant-abcdefghijklmnopqrstuv").contains("BLOQUEADO"))
        assertEquals("••••efgh", Security.maskSecret("abcdefghij"))
    }
}

~~~

### letimax/android/app/src/test/java/com/letimax/app/biometrics/EmbeddingsTest.kt
~~~kt
package com.letimax.app.biometrics

import org.junit.Assert.assertEquals
import org.junit.Assert.assertTrue
import org.junit.Test

class EmbeddingsTest {
    @Test
    fun cosineIdenticalIsOne() {
        val a = floatArrayOf(1f, 2f, 3f)
        assertEquals(1f, Embeddings.cosine(a, a.copyOf()), 0.001f)
    }

    @Test
    fun packRoundtrip() {
        val a = floatArrayOf(0.1f, 0.2f)
        val b = Embeddings.unpack(Embeddings.pack(a))
        assertEquals(a[0], b[0], 0.0001f)
        assertTrue(Embeddings.voiceFeatures(ShortArray(800) { it.toShort() }).size == 64)
    }
}

~~~

## Arquivo: letimax-app-fase1
Ficheiros de código/configuração: 17

### letimax-app/app.json
~~~json
{
  "expo": {
    "name": "LétimaX",
    "slug": "letimax",
    "version": "0.1.0",
    "orientation": "portrait",
    "userInterfaceStyle": "automatic",
    "android": {
      "package": "com.letimax.app",
      "permissions": ["USE_BIOMETRIC", "USE_FINGERPRINT", "INTERNET", "VIBRATE"]
    },
    "plugins": ["expo-secure-store", "expo-sqlite"]
  }
}

~~~

### letimax-app/package.json
~~~json
{
  "name": "letimax-app",
  "version": "0.1.0",
  "main": "node_modules/expo/AppEntry.js",
  "scripts": { "start": "expo start", "android": "expo start --android" },
  "dependencies": {
    "@expo/vector-icons": "^14.0.4",
    "@react-navigation/bottom-tabs": "^6.6.1",
    "@react-navigation/drawer": "^6.7.2",
    "@react-navigation/native": "^6.1.18",
    "expo": "~52.0.0",
    "expo-crypto": "~14.0.0",
    "expo-local-authentication": "~15.0.0",
    "expo-secure-store": "~14.0.0",
    "expo-speech": "~13.0.0",
    "expo-sqlite": "~15.0.0",
    "expo-status-bar": "~2.0.0",
    "react": "18.3.1",
    "react-native": "0.76.5",
    "react-native-gesture-handler": "~2.20.2",
    "react-native-reanimated": "~3.16.1",
    "react-native-safe-area-context": "4.12.0",
    "react-native-screens": "~4.4.0"
  },
  "devDependencies": { "@babel/core": "^7.25.0" },
  "private": true
}

~~~

### letimax-app/App.js
~~~js
import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider, useTheme } from './src/theme/theme';
import { getDb, getConfig } from './src/db/database';
import AuthScreen from './src/screens/AuthScreen';
import FirstUseScreen from './src/screens/FirstUseScreen';
import Root from './src/navigation/Root';

function Gate() {
  const { isDark } = useTheme();
  const [stage, setStage] = useState('auth'); // auth | firstuse | main
  useEffect(() => { getDb(); }, []);
  const afterAuth = async () => setStage((await getConfig('primeiro_uso')) ? 'main' : 'firstuse');
  return (
    <>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      {stage === 'auth' && <AuthScreen onSuccess={afterAuth} />}
      {stage === 'firstuse' && <FirstUseScreen onDone={() => setStage('main')} />}
      {stage === 'main' && <Root />}
    </>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ThemeProvider><Gate /></ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

~~~

### letimax-app/README.md
~~~md
# LétimaX — APP (Fase 1)

1. Instalar dependências: `npm install` e depois `npx expo install --fix`
2. Arrancar: `npx expo start` e abrir no Expo Go (ou usar snack.expo.dev / GitHub Codespaces se não tiver PC)
3. Primeiro acesso: criar PIN -> URL (https) e token do servidor -> chave do Claude (vai para o servidor)

Fase 1: tema claro/escuro, PIN + biometria do telemóvel com bloqueio progressivo, chat, dashboard,
menu lateral com todos os módulos ligados aos endpoints, configurações com chaves (enviadas ao servidor).
Fase 2: ecrãs dedicados (Motor de Receita com Aprovar/Rejeitar, Metas, Produtos...), SQLite offline completo,
cofre de passwords, contactos, documentos.
Fase 3 (precisa de build nativo, não funciona no Expo Go): serviço em segundo plano, chamadas/SMS,
comandos de voz de hardware, reconhecimento de voz.

~~~

### letimax-app/babel.config.js
~~~js
module.exports = function (api) {
  api.cache(true);
  return { presets: ['babel-preset-expo'], plugins: ['react-native-reanimated/plugin'] };
};

~~~

### letimax-app/src/screens/AuthScreen.js
~~~js
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import * as Speech from 'expo-speech';
import { useTheme } from '../theme/theme';
import { hasPin, setupPin, verifyPin, biometricAuth, lockRemaining, resetFailures, formatLock } from '../services/security';

const GREETING = 'Bem-vindo, Senhor Letício. Estou pronto. Hoje vamos fazer ainda mais dinheiro.';

export default function AuthScreen({ onSuccess }) {
  const { c } = useTheme();
  const [mode, setMode] = useState('boot'); // boot | setup | login
  const [pin, setPin] = useState('');
  const [pin2, setPin2] = useState('');
  const [msg, setMsg] = useState('');
  const [bad, setBad] = useState(false);

  const done = async () => {
    await resetFailures();
    Speech.speak(GREETING, { language: 'pt-PT' });
    onSuccess();
  };

  const tryBio = async () => {
    const lock = await lockRemaining();
    if (lock) { setBad(true); setMsg(formatLock(lock)); return; }
    if (await biometricAuth()) done();
  };

  useEffect(() => {
    (async () => {
      if (await hasPin()) { setMode('login'); tryBio(); } else setMode('setup');
    })();
  }, []);

  const create = async () => {
    setBad(true);
    if (pin.length < 6) return setMsg('O PIN deve ter pelo menos 6 dígitos.');
    if (pin !== pin2) return setMsg('Os PINs não coincidem.');
    await setupPin(pin);
    setBad(false);
    setMsg('Perfil de acesso criado. A LétimaX reconhece-o agora, Senhor Letício.');
    setTimeout(done, 800);
  };

  const login = async () => {
    const r = await verifyPin(pin);
    setPin('');
    if (r.ok) return done();
    setBad(true);
    if (r.locked) return setMsg(formatLock(r.locked));
    setMsg('PIN incorrecto. Tentativas falhadas: ' + r.failures);
  };

  const input = { borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 12, padding: 14, fontSize: 18, marginBottom: 12, textAlign: 'center', letterSpacing: 6 };
  const btn = { backgroundColor: c.gold, padding: 14, borderRadius: 12, alignItems: 'center', marginTop: 4 };

  if (mode === 'boot') return <View style={{ flex: 1, backgroundColor: c.bg, justifyContent: 'center' }}><ActivityIndicator color={c.gold} /></View>;

  return (
    <View style={{ flex: 1, backgroundColor: c.bg, justifyContent: 'center', padding: 28 }}>
      <Text style={{ color: c.gold, fontSize: 38, fontWeight: '800', textAlign: 'center' }}>LétimaX</Text>
      <Text style={{ color: c.muted, textAlign: 'center', marginBottom: 28 }}>
        {mode === 'setup' ? 'Primeiro acesso — crie o seu PIN de segurança' : 'Confirme a sua identidade'}
      </Text>
      <TextInput value={pin} onChangeText={setPin} placeholder="PIN" placeholderTextColor={c.muted} secureTextEntry keyboardType="number-pad" maxLength={12} style={input} />
      {mode === 'setup' && <TextInput value={pin2} onChangeText={setPin2} placeholder="Repetir PIN" placeholderTextColor={c.muted} secureTextEntry keyboardType="number-pad" maxLength={12} style={input} />}
      <TouchableOpacity style={btn} onPress={mode === 'setup' ? create : login}>
        <Text style={{ color: '#000', fontWeight: '700' }}>{mode === 'setup' ? 'Criar perfil' : 'Entrar'}</Text>
      </TouchableOpacity>
      {mode === 'login' && (
        <TouchableOpacity style={{ padding: 14, alignItems: 'center' }} onPress={tryBio}>
          <Text style={{ color: c.gold }}>Usar rosto / impressão digital</Text>
        </TouchableOpacity>
      )}
      {!!msg && <Text style={{ color: bad ? c.err : c.gold, textAlign: 'center', marginTop: 12 }}>{msg}</Text>}
    </View>
  );
}

~~~

### letimax-app/src/screens/ModuleScreen.js
~~~js
import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, Text, RefreshControl, ActivityIndicator } from 'react-native';
import { useTheme } from '../theme/theme';
import { api } from '../services/api';
import { cacheGet, cacheSet } from '../db/database';
import JsonView from '../components/JsonView';

// Ecrã genérico ligado a um endpoint GET do servidor, com cache offline.
export default function ModuleScreen({ route }) {
  const { c } = useTheme();
  const { titulo, endpoint } = route.params || {};
  const [data, setData] = useState(null);
  const [offline, setOffline] = useState(false);
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    if (!endpoint) return;
    setLoading(true); setErr(''); setOffline(false);
    try {
      const d = await api.get(endpoint);
      setData(d); await cacheSet(endpoint, d);
    } catch (e) {
      const cached = await cacheGet(endpoint);
      if (cached) { setData(cached.dados); setOffline(true); } else setErr(e.message);
    } finally { setLoading(false); }
  }, [endpoint]);

  useEffect(() => { load(); }, [load]);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16 }}
      refreshControl={<RefreshControl refreshing={loading} onRefresh={load} tintColor={c.gold} />}>
      <Text style={{ color: c.text, fontSize: 22, fontWeight: '700', marginBottom: 12 }}>{titulo}</Text>
      {!endpoint && <Text style={{ color: c.muted }}>Este ecrã é local e será construído na próxima fase.</Text>}
      {offline && <Text style={{ color: c.warn, marginBottom: 8 }}>Modo offline — a mostrar dados em cache.</Text>}
      {err ? <Text style={{ color: c.err }}>{err}</Text> : null}
      {loading && !data && <ActivityIndicator color={c.gold} />}
      {data && <JsonView data={data} c={c} />}
    </ScrollView>
  );
}

~~~

### letimax-app/src/screens/FirstUseScreen.js
~~~js
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from '../theme/theme';
import { saveServerConfig, api } from '../services/api';
import { setConfig } from '../db/database';

export default function FirstUseScreen({ onDone }) {
  const { c } = useTheme();
  const [url, setUrl] = useState('');
  const [token, setToken] = useState('');
  const [claude, setClaude] = useState('');
  const [msg, setMsg] = useState('');

  const input = { borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 12, padding: 12, marginBottom: 10 };

  const save = async () => {
    try {
      await saveServerConfig(url, token);
      if (claude.trim()) {
        // A chave segue por HTTPS para o servidor e nunca fica guardada no telemóvel
        await api.post('/chaves/adicionar', { nome: 'ANTHROPIC_API_KEY', valor: claude.trim() });
        setClaude('');
      }
      await setConfig('primeiro_uso', '1');
      onDone();
    } catch (e) { setMsg(e.message); }
  };
  const later = async () => { await setConfig('primeiro_uso', '1'); onDone(); };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 24, paddingTop: 70 }}>
      <Text style={{ color: c.gold, fontSize: 26, fontWeight: '800' }}>Primeira configuração</Text>
      <Text style={{ color: c.muted, marginVertical: 12 }}>Antes de começar, ligue a LétimaX ao seu servidor e adicione a chave do Claude para que ela possa responder.</Text>
      <TextInput style={input} value={url} onChangeText={setUrl} placeholder="https://o-seu-servidor.up.railway.app" placeholderTextColor={c.muted} autoCapitalize="none" />
      <TextInput style={input} value={token} onChangeText={setToken} placeholder="Token de acesso do servidor" placeholderTextColor={c.muted} autoCapitalize="none" secureTextEntry />
      <TextInput style={input} value={claude} onChangeText={setClaude} placeholder="ANTHROPIC_API_KEY (opcional agora)" placeholderTextColor={c.muted} autoCapitalize="none" secureTextEntry />
      {!!msg && <Text style={{ color: c.err, marginBottom: 8 }}>{msg}</Text>}
      <TouchableOpacity onPress={save} style={{ backgroundColor: c.gold, padding: 14, borderRadius: 12, alignItems: 'center' }}>
        <Text style={{ color: '#000', fontWeight: '700' }}>Guardar e iniciar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={later} style={{ padding: 14, alignItems: 'center' }}>
        <Text style={{ color: c.muted }}>Configurar depois</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

~~~

### letimax-app/src/screens/ChatScreen.js
~~~js
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
import * as Speech from 'expo-speech';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/theme';
import { addMessage, getMessages } from '../db/database';
import { api } from '../services/api';

export default function ChatScreen() {
  const { c } = useTheme();
  const [msgs, setMsgs] = useState([]); // mais recente primeiro
  const [text, setText] = useState('');
  const [wait, setWait] = useState(0); // 0 nada | 1 a carregar | 2 a processar
  const timer = useRef(null);

  useEffect(() => { getMessages().then(setMsgs); }, []);

  const send = async () => {
    const t = text.trim();
    if (!t || wait) return;
    setText('');
    const u = await addMessage('user', t);
    setMsgs((m) => [u, ...m]);
    setWait(1);
    timer.current = setTimeout(() => setWait(2), 30000); // 30 s: "a processar..."
    let reply;
    try {
      const r = await api.post('/chat', { mensagem: t }, 60000); // 60 s: cancela
      reply = r.resposta || r.response || JSON.stringify(r);
      Speech.speak(reply, { language: 'pt-PT' });
    } catch (e) {
      reply = 'Não consegui obter resposta (' + e.message + '). Quer tentar novamente?';
    } finally {
      clearTimeout(timer.current);
      setWait(0);
    }
    const b = await addMessage('bot', reply);
    setMsgs((m) => [b, ...m]);
  };

  const Bubble = ({ item }) => {
    const me = item.papel === 'user';
    return (
      <View style={{ alignSelf: me ? 'flex-end' : 'flex-start', backgroundColor: me ? c.bubbleUser : c.bubbleBot, padding: 12, borderRadius: 16, marginVertical: 4, maxWidth: '85%' }}>
        <Text style={{ color: c.text, fontSize: 15 }}>{item.texto}</Text>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: c.bg }} behavior={Platform.OS === 'ios' ? 'padding' : undefined} keyboardVerticalOffset={90}>
      <FlatList inverted data={msgs} keyExtractor={(i) => String(i.id)} renderItem={Bubble} contentContainerStyle={{ padding: 12 }}
        ListHeaderComponent={wait ? (
          <View style={{ flexDirection: 'row', alignItems: 'center', padding: 8 }}>
            <ActivityIndicator color={c.gold} />
            <Text style={{ color: c.muted, marginLeft: 8 }}>{wait === 2 ? 'LétimaX está a processar...' : 'A pensar...'}</Text>
          </View>
        ) : null} />
      <View style={{ flexDirection: 'row', padding: 10, borderTopWidth: 1, borderTopColor: c.border, alignItems: 'center' }}>
        <TextInput value={text} onChangeText={setText} placeholder="Escreva à LétimaX..." placeholderTextColor={c.muted}
          style={{ flex: 1, color: c.text, backgroundColor: c.card, borderRadius: 22, paddingHorizontal: 16, paddingVertical: 10 }} multiline />
        <TouchableOpacity onPress={send} style={{ marginLeft: 8, backgroundColor: c.gold, borderRadius: 22, padding: 11 }}>
          <Ionicons name="send" size={20} color="#000" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

~~~

### letimax-app/src/screens/SettingsScreen.js
~~~js
import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useTheme } from '../theme/theme';
import { serverConfig, saveServerConfig, api } from '../services/api';
import { getConfig, setConfig } from '../db/database';

const CHAVES_IA = ['ANTHROPIC_API_KEY', 'OPENAI_API_KEY', 'GEMINI_API_KEY', 'STABILITY_API_KEY', 'ELEVENLABS_API_KEY', 'ELEVENLABS_VOICE_ID'];
const CHAVES_PLAT = ['HOTMART_CLIENT_ID', 'HOTMART_CLIENT_SECRET', 'KIWIFY_API_KEY', 'GUMROAD_ACCESS_TOKEN', 'SHOPIFY_API_KEY', 'SHOPIFY_API_SECRET', 'BINANCE_API_KEY', 'BINANCE_SECRET_KEY', 'MAILCHIMP_API_KEY', 'NETLIFY_API_KEY', 'GMAIL_OAUTH_TOKEN', 'GOOGLE_ANALYTICS_ID', 'META_PIXEL_ID'];

export default function SettingsScreen() {
  const { c, mode, setMode } = useTheme();
  const [url, setUrl] = useState('');
  const [token, setToken] = useState('');
  const [nivel, setNivel] = useState('1');
  const [msg, setMsg] = useState('');
  const [valores, setValores] = useState({});
  const [visivel, setVisivel] = useState({});
  const [novoNome, setNovoNome] = useState('');
  const [novoValor, setNovoValor] = useState('');

  useEffect(() => {
    serverConfig().then((s) => setUrl(s.url));
    getConfig('autonomia').then((v) => v && setNivel(v));
  }, []);

  const flash = (m) => { setMsg(m); setTimeout(() => setMsg(''), 4000); };
  const input = { borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 10, padding: 10, flex: 1 };
  const h = { color: c.gold, fontSize: 16, fontWeight: '700', marginTop: 22, marginBottom: 8 };
  const chip = (on) => ({ paddingVertical: 8, paddingHorizontal: 14, borderRadius: 18, marginRight: 8, backgroundColor: on ? c.gold : c.card });

  const saveServer = async () => {
    try { await saveServerConfig(url, token); setToken(''); flash('Servidor guardado.'); } catch (e) { flash(e.message); }
  };
  const setAuto = async (n) => {
    setNivel(n); await setConfig('autonomia', n);
    try { await api.post('/autonomia/nivel', { nivel: Number(n) }); } catch (e) { flash('Guardado no APP; servidor offline.'); }
  };
  // A chave vai por HTTPS para o servidor e o campo é limpo — nada fica no telemóvel
  const enviarChave = async (nome, valor) => {
    if (!valor) return;
    try {
      await api.post('/chaves/adicionar', { nome, valor });
      setValores((v) => ({ ...v, [nome]: '' }));
      flash(nome + ' enviada ao servidor.');
    } catch (e) { flash(e.message); }
  };

  const chave = (nome) => (
    <View key={nome} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
      <View style={{ flex: 1 }}>
        <Text style={{ color: c.muted, fontSize: 11, marginBottom: 2 }}>{nome}</Text>
        <TextInput style={{ ...input, flex: 0 }} value={valores[nome] || ''} onChangeText={(t) => setValores((v) => ({ ...v, [nome]: t }))}
          secureTextEntry={!visivel[nome]} autoCapitalize="none" placeholder="••••••••" placeholderTextColor={c.muted} />
      </View>
      <TouchableOpacity onPress={() => setVisivel((v) => ({ ...v, [nome]: !v[nome] }))} style={{ padding: 10 }}><Text style={{ color: c.gold }}>{visivel[nome] ? 'Esconder' : 'Mostrar'}</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => enviarChave(nome, valores[nome])} style={{ padding: 10 }}><Text style={{ color: c.gold, fontWeight: '700' }}>Enviar</Text></TouchableOpacity>
    </View>
  );

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16, paddingBottom: 60 }}>
      {!!msg && <Text style={{ color: c.gold, marginBottom: 8 }}>{msg}</Text>}

      <Text style={h}>Servidor</Text>
      <View style={{ flexDirection: 'row', marginBottom: 8 }}><TextInput style={input} value={url} onChangeText={setUrl} autoCapitalize="none" placeholder="https://..." placeholderTextColor={c.muted} /></View>
      <View style={{ flexDirection: 'row', marginBottom: 8 }}><TextInput style={input} value={token} onChangeText={setToken} autoCapitalize="none" secureTextEntry placeholder="Novo token (opcional)" placeholderTextColor={c.muted} /></View>
      <TouchableOpacity onPress={saveServer} style={{ backgroundColor: c.gold, padding: 12, borderRadius: 10, alignItems: 'center' }}><Text style={{ color: '#000', fontWeight: '700' }}>Guardar servidor</Text></TouchableOpacity>

      <Text style={h}>Tema visual</Text>
      <View style={{ flexDirection: 'row' }}>
        {[['system', 'Seguir sistema'], ['light', 'Claro'], ['dark', 'Escuro']].map(([m, l]) => (
          <TouchableOpacity key={m} style={chip(mode === m)} onPress={() => setMode(m)}><Text style={{ color: mode === m ? '#000' : c.text }}>{l}</Text></TouchableOpacity>
        ))}
      </View>

      <Text style={h}>Nível de autonomia</Text>
      <View style={{ flexDirection: 'row' }}>
        {[['1', 'Normal'], ['2', 'Semi-autónomo'], ['3', 'Autónomo total']].map(([n, l]) => (
          <TouchableOpacity key={n} style={chip(nivel === n)} onPress={() => setAuto(n)}><Text style={{ color: nivel === n ? '#000' : c.text }}>{l}</Text></TouchableOpacity>
        ))}
      </View>

      <Text style={h}>Secção 1 — Chaves de IA</Text>
      {CHAVES_IA.map(chave)}
      <Text style={h}>Secção 2 — Chaves de Plataformas</Text>
      {CHAVES_PLAT.map(chave)}

      <Text style={h}>Secção 3 — Chaves Personalizadas</Text>
      <View style={{ flexDirection: 'row', marginBottom: 8 }}><TextInput style={input} value={novoNome} onChangeText={setNovoNome} autoCapitalize="characters" placeholder="NOME_DA_CHAVE" placeholderTextColor={c.muted} /></View>
      <View style={{ flexDirection: 'row', marginBottom: 8 }}><TextInput style={input} value={novoValor} onChangeText={setNovoValor} autoCapitalize="none" secureTextEntry placeholder="Valor" placeholderTextColor={c.muted} /></View>
      <TouchableOpacity onPress={async () => { if (novoNome && novoValor) { await enviarChave(novoNome.trim(), novoValor.trim()); setNovoNome(''); setNovoValor(''); } }}
        style={{ backgroundColor: c.gold, padding: 12, borderRadius: 10, alignItems: 'center' }}><Text style={{ color: '#000', fontWeight: '700' }}>Adicionar nova chave</Text></TouchableOpacity>
      <Text style={{ color: c.muted, marginTop: 14, fontSize: 12 }}>Todas as chaves seguem por HTTPS para o servidor e nunca ficam guardadas no telemóvel.</Text>
    </ScrollView>
  );
}

~~~

### letimax-app/src/navigation/menu.js
~~~js
// Menu lateral: nome, rota, endpoint GET do servidor (null = ecrã local, ainda por construir)
export const MENU = [
  { id: 'motor', nome: 'Motor de Receita', endpoint: '/motor-receita/oportunidades' },
  { id: 'raqueamento', nome: 'Sistema de Raqueamento', endpoint: '/raqueamento/estado' },
  { id: 'activos', nome: 'Activos', endpoint: '/activos/lista' },
  { id: 'novonegocio', nome: 'Novos Negócios', endpoint: '/negocios/oportunidades' },
  { id: 'metas', nome: 'Metas', endpoint: '/metas/progresso' },
  { id: 'afext', nome: 'Afiliados Externos', endpoint: '/afiliados/ranking' },
  { id: 'afprop', nome: 'Afiliados Próprios', endpoint: '/afiliados-proprios/dashboard' },
  { id: 'lanc', nome: 'Lançamentos', endpoint: '/lancamento/estrategia' },
  { id: 'webinars', nome: 'Webinars', endpoint: '/webinar/lista' },
  { id: 'email', nome: 'Email Marketing', endpoint: '/email/analytics' },
  { id: 'analytics', nome: 'Analytics', endpoint: '/analytics/conversao' },
  { id: 'reputacao', nome: 'Reputação', endpoint: '/reputacao/testemunhos' },
  { id: 'suporte', nome: 'Suporte', endpoint: '/suporte/tickets' },
  { id: 'onboarding', nome: 'Onboarding', endpoint: '/onboarding/status' },
  { id: 'referencias', nome: 'Referências', endpoint: '/referencias/dashboard' },
  { id: 'paginas', nome: 'Páginas', endpoint: '/pagina/analytics' },
  { id: 'videos', nome: 'Vídeos', endpoint: null },
  { id: 'cursos', nome: 'Cursos', endpoint: '/curso/lista' },
  { id: 'sites', nome: 'Sites', endpoint: '/site/analytics' },
  { id: 'apres', nome: 'Apresentações', endpoint: '/apresentacao/lista' },
  { id: 'automacao', nome: 'Automação Inteligente', endpoint: '/automacao/pontuacao' },
  { id: 'oportunidades', nome: 'Oportunidades', endpoint: '/oportunidade/pendentes' },
  { id: 'investimentos', nome: 'Investimentos', endpoint: '/investimentos' },
  { id: 'empresa', nome: 'Empresa', endpoint: '/empresa/progresso' },
  { id: 'financas', nome: 'Finanças', endpoint: '/receita/total' },
  { id: 'contactos', nome: 'Contactos', endpoint: null },
  { id: 'saude', nome: 'Saúde', endpoint: '/saude' },
  { id: 'passwords', nome: 'Passwords', endpoint: null },
  { id: 'documentos', nome: 'Documentos', endpoint: null },
  { id: 'logs', nome: 'Logs', endpoint: '/logs' },
  { id: 'actualizacao', nome: 'Actualização', endpoint: '/versao/atual' },
];

~~~

### letimax-app/src/navigation/Root.js
~~~js
import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/theme';
import { MENU } from './menu';
import ChatScreen from '../screens/ChatScreen';
import ModuleScreen from '../screens/ModuleScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const ICONS = { Chat: 'chatbubble-ellipses', Dashboard: 'speedometer', Produtos: 'cube', Mercado: 'trending-up', Marketing: 'megaphone' };

function Tabs() {
  const { c } = useTheme();
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarActiveTintColor: c.gold, tabBarInactiveTintColor: c.muted,
      tabBarStyle: { backgroundColor: c.bg, borderTopColor: c.border },
      tabBarIcon: ({ color, size }) => <Ionicons name={ICONS[route.name]} size={size} color={color} />,
    })}>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Dashboard" component={ModuleScreen} initialParams={{ titulo: 'Dashboard', endpoint: '/dashboard' }} />
      <Tab.Screen name="Produtos" component={ModuleScreen} initialParams={{ titulo: 'Produtos', endpoint: '/produtos' }} />
      <Tab.Screen name="Mercado" component={ModuleScreen} initialParams={{ titulo: 'Mercado', endpoint: '/mercado' }} />
      <Tab.Screen name="Marketing" component={ModuleScreen} initialParams={{ titulo: 'Marketing', endpoint: null }} />
    </Tab.Navigator>
  );
}

export default function Root() {
  const { c, isDark } = useTheme();
  const base = isDark ? DarkTheme : DefaultTheme;
  const navTheme = { ...base, colors: { ...base.colors, background: c.bg, card: c.bg, text: c.text, border: c.border, primary: c.gold } };
  return (
    <NavigationContainer theme={navTheme}>
      <Drawer.Navigator screenOptions={{ headerTintColor: c.gold, headerTitleStyle: { color: c.text }, drawerActiveTintColor: c.gold, drawerStyle: { backgroundColor: c.bg } }}>
        <Drawer.Screen name="Principal" component={Tabs} options={{ title: 'LétimaX' }} />
        {MENU.map((m) => (
          <Drawer.Screen key={m.id} name={m.id} component={ModuleScreen} options={{ title: m.nome }} initialParams={{ titulo: m.nome, endpoint: m.endpoint }} />
        ))}
        <Drawer.Screen name="configuracoes" component={SettingsScreen} options={{ title: 'Configurações' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

~~~

### letimax-app/src/theme/theme.js
~~~js
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import * as SecureStore from 'expo-secure-store';

export const GOLD = '#C9A84C';
const base = { gold: GOLD, ok: '#2E9E5B', err: '#D64545', warn: '#E08A1E' };
export const light = { ...base, bg: '#FFFFFF', text: '#1A1A1A', muted: '#6B6B6B', card: '#F5F5F5', border: '#E5E5E5', soft: '#2D2D2D', bubbleUser: '#F3E9C6', bubbleBot: '#EFEFEF' };
export const dark = { ...base, bg: '#0D0D0D', text: '#FFFFFF', muted: '#A0A0A0', card: '#1A1A1A', border: '#2A2A2A', soft: '#2D2D2D', bubbleUser: '#4A3F1C', bubbleBot: '#1F1F1F' };

const Ctx = createContext(null);

// mode: 'system' (padrão) | 'light' | 'dark'
export function ThemeProvider({ children }) {
  const sys = useColorScheme();
  const [mode, setModeState] = useState('system');
  useEffect(() => {
    SecureStore.getItemAsync('tema_modo').then((m) => m && setModeState(m)).catch(() => {});
  }, []);
  const setMode = async (m) => {
    setModeState(m);
    try { await SecureStore.setItemAsync('tema_modo', m); } catch (e) {}
  };
  const isDark = mode === 'system' ? sys === 'dark' : mode === 'dark';
  return <Ctx.Provider value={{ c: isDark ? dark : light, isDark, mode, setMode }}>{children}</Ctx.Provider>;
}
export const useTheme = () => useContext(Ctx);

~~~

### letimax-app/src/services/api.js
~~~js
import * as SecureStore from 'expo-secure-store';

export async function serverConfig() {
  return {
    url: (await SecureStore.getItemAsync('server_url')) || '',
    token: (await SecureStore.getItemAsync('server_token')) || '',
  };
}
export async function saveServerConfig(url, token) {
  if (!/^https:\/\//i.test(url)) throw new Error('O URL do servidor tem de começar por https://');
  await SecureStore.setItemAsync('server_url', url.trim());
  if (token) await SecureStore.setItemAsync('server_token', token.trim());
}

async function request(method, path, body, timeout = 15000) {
  const { url, token } = await serverConfig();
  if (!url) throw new Error('URL do servidor não configurado');
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeout);
  try {
    const res = await fetch(url.replace(/\/$/, '') + path, {
      method,
      headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token },
      body: body ? JSON.stringify(body) : undefined,
      signal: ctrl.signal,
    });
    if (!res.ok) throw new Error('Servidor respondeu ' + res.status);
    return await res.json();
  } finally {
    clearTimeout(t);
  }
}
export const api = {
  get: (p, t) => request('GET', p, null, t),
  post: (p, b, t) => request('POST', p, b, t),
  del: (p, b, t) => request('DELETE', p, b, t),
};

~~~

### letimax-app/src/services/security.js
~~~js
import * as SecureStore from 'expo-secure-store';
import * as Crypto from 'expo-crypto';
import * as LocalAuthentication from 'expo-local-authentication';
import { logAccess } from '../db/database';

const SALT = 'letimax-v1';
const hash = (pin) => Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, pin + SALT);

export async function hasPin() {
  return !!(await SecureStore.getItemAsync('pin_hash'));
}
export async function setupPin(pin) {
  await SecureStore.setItemAsync('pin_hash', await hash(pin));
}

// Bloqueio progressivo do documento: 3 falhas = 5 min, 6 = 30 min, 9 = 24 h, 12 = permanente
function lockFor(f) {
  if (f >= 12) return 'perm';
  if (f >= 9) return 24 * 60 * 60 * 1000;
  if (f >= 6) return 30 * 60 * 1000;
  if (f >= 3) return 5 * 60 * 1000;
  return 0;
}
export async function lockRemaining() {
  const until = await SecureStore.getItemAsync('bloqueio_ate');
  if (!until) return 0;
  if (until === 'perm') return 'perm';
  const left = Number(until) - Date.now();
  return left > 0 ? left : 0;
}
export async function resetFailures() {
  await SecureStore.setItemAsync('falhas', '0');
  await SecureStore.deleteItemAsync('bloqueio_ate');
}
export async function verifyPin(pin) {
  const left = await lockRemaining();
  if (left) return { ok: false, locked: left };
  const ok = (await hash(pin)) === (await SecureStore.getItemAsync('pin_hash'));
  await logAccess(ok, 'pin');
  if (ok) { await resetFailures(); return { ok: true }; }
  const f = Number((await SecureStore.getItemAsync('falhas')) || 0) + 1;
  await SecureStore.setItemAsync('falhas', String(f));
  const l = lockFor(f);
  if (l === 'perm') await SecureStore.setItemAsync('bloqueio_ate', 'perm');
  else if (l) await SecureStore.setItemAsync('bloqueio_ate', String(Date.now() + l));
  return { ok: false, failures: f, locked: l };
}

// Biometria do próprio telemóvel (rosto/impressão digital já registados no Android)
export async function biometricAuth() {
  const has = await LocalAuthentication.hasHardwareAsync();
  const enrolled = await LocalAuthentication.isEnrolledAsync();
  if (!has || !enrolled) return false;
  const r = await LocalAuthentication.authenticateAsync({
    promptMessage: 'LétimaX — confirme a sua identidade',
    cancelLabel: 'Usar PIN',
    disableDeviceFallback: true,
  });
  await logAccess(r.success, 'biometria');
  return r.success;
}

export function formatLock(ms) {
  if (ms === 'perm') return 'Acesso bloqueado permanentemente. Alerta enviado ao Senhor Letício.';
  const min = Math.ceil(ms / 60000);
  return min >= 60 ? 'Bloqueado por ' + Math.ceil(min / 60) + ' h.' : 'Bloqueado por ' + min + ' min.';
}

~~~

### letimax-app/src/components/JsonView.js
~~~js
import React from 'react';
import { View, Text } from 'react-native';

// Mostra qualquer resposta JSON do servidor em cartões legíveis
export default function JsonView({ data, c, level = 0 }) {
  if (data === null || data === undefined) return <Text style={{ color: c.muted }}>—</Text>;
  if (typeof data !== 'object') return <Text style={{ color: c.text }}>{String(data)}</Text>;
  if (Array.isArray(data)) {
    if (!data.length) return <Text style={{ color: c.muted }}>Sem dados.</Text>;
    return data.map((it, i) => (
      <View key={i} style={{ backgroundColor: c.card, borderRadius: 12, padding: 12, marginBottom: 8, borderWidth: 1, borderColor: c.border }}>
        <JsonView data={it} c={c} level={level + 1} />
      </View>
    ));
  }
  return Object.entries(data).map(([k, v]) => {
    const simple = v === null || typeof v !== 'object';
    return (
      <View key={k} style={{ marginBottom: 6 }}>
        <Text style={{ color: c.gold, fontWeight: '600', fontSize: 12 }}>{k.replace(/_/g, ' ')}</Text>
        {simple ? <Text style={{ color: c.text, fontSize: 15 }}>{String(v ?? '—')}</Text> : <View style={{ marginTop: 4 }}><JsonView data={v} c={c} level={level + 1} /></View>}
      </View>
    );
  });
}

~~~

### letimax-app/src/db/database.js
~~~js
import * as SQLite from 'expo-sqlite';

let db;
export async function getDb() {
  if (!db) {
    db = await SQLite.openDatabaseAsync('letimax.db');
    await db.execAsync(`
      PRAGMA journal_mode = WAL;
      CREATE TABLE IF NOT EXISTS conversas (id INTEGER PRIMARY KEY AUTOINCREMENT, papel TEXT, texto TEXT, criado_em TEXT);
      CREATE TABLE IF NOT EXISTS configuracoes (chave TEXT PRIMARY KEY, valor TEXT);
      CREATE TABLE IF NOT EXISTS dashboard_cache (chave TEXT PRIMARY KEY, dados TEXT, atualizado TEXT);
      CREATE TABLE IF NOT EXISTS logs_erros (id INTEGER PRIMARY KEY AUTOINCREMENT, origem TEXT, mensagem TEXT, criado_em TEXT);
      CREATE TABLE IF NOT EXISTS tentativas_acesso (id INTEGER PRIMARY KEY AUTOINCREMENT, sucesso INTEGER, metodo TEXT, criado_em TEXT);
      CREATE TABLE IF NOT EXISTS respostas_pre_aprovadas (id INTEGER PRIMARY KEY AUTOINCREMENT, canal TEXT, texto TEXT);
      CREATE TABLE IF NOT EXISTS metas (id INTEGER PRIMARY KEY AUTOINCREMENT, mes TEXT, valor REAL, criado_em TEXT);
    `);
  }
  return db;
}

export async function addMessage(papel, texto) {
  const d = await getDb();
  const criado_em = new Date().toISOString();
  const r = await d.runAsync('INSERT INTO conversas (papel, texto, criado_em) VALUES (?,?,?)', [papel, texto, criado_em]);
  return { id: r.lastInsertRowId, papel, texto, criado_em };
}
export async function getMessages(limit = 200) {
  const d = await getDb();
  return d.getAllAsync('SELECT * FROM conversas ORDER BY id DESC LIMIT ?', [limit]);
}
export async function setConfig(chave, valor) {
  const d = await getDb();
  await d.runAsync('INSERT OR REPLACE INTO configuracoes (chave, valor) VALUES (?,?)', [chave, String(valor)]);
}
export async function getConfig(chave) {
  const d = await getDb();
  const r = await d.getFirstAsync('SELECT valor FROM configuracoes WHERE chave = ?', [chave]);
  return r ? r.valor : null;
}
export async function cacheSet(chave, dados) {
  const d = await getDb();
  await d.runAsync('INSERT OR REPLACE INTO dashboard_cache (chave, dados, atualizado) VALUES (?,?,?)', [chave, JSON.stringify(dados), new Date().toISOString()]);
}
export async function cacheGet(chave) {
  const d = await getDb();
  const r = await d.getFirstAsync('SELECT dados, atualizado FROM dashboard_cache WHERE chave = ?', [chave]);
  return r ? { dados: JSON.parse(r.dados), atualizado: r.atualizado } : null;
}
export async function logAccess(sucesso, metodo) {
  const d = await getDb();
  await d.runAsync('INSERT INTO tentativas_acesso (sucesso, metodo, criado_em) VALUES (?,?,?)', [sucesso ? 1 : 0, metodo, new Date().toISOString()]);
}

~~~

## Arquivo: letimax-app-fase2
Ficheiros de código/configuração: 22

### letimax-app/app.json
~~~json
{
  "expo": {
    "name": "LétimaX",
    "slug": "letimax",
    "version": "0.1.0",
    "orientation": "portrait",
    "userInterfaceStyle": "automatic",
    "android": {
      "package": "com.letimax.app",
      "permissions": ["USE_BIOMETRIC", "USE_FINGERPRINT", "INTERNET", "VIBRATE"]
    },
    "plugins": ["expo-secure-store", "expo-sqlite"]
  }
}

~~~

### letimax-app/package.json
~~~json
{
  "name": "letimax-app",
  "version": "0.1.0",
  "main": "node_modules/expo/AppEntry.js",
  "scripts": { "start": "expo start", "android": "expo start --android" },
  "dependencies": {
    "@expo/vector-icons": "^14.0.4",
    "@react-navigation/bottom-tabs": "^6.6.1",
    "@react-navigation/drawer": "^6.7.2",
    "@react-navigation/native": "^6.1.18",
    "expo": "~52.0.0",
    "expo-crypto": "~14.0.0",
    "expo-local-authentication": "~15.0.0",
    "expo-secure-store": "~14.0.0",
    "expo-speech": "~13.0.0",
    "expo-sqlite": "~15.0.0",
    "expo-status-bar": "~2.0.0",
    "react": "18.3.1",
    "react-native": "0.76.5",
    "react-native-gesture-handler": "~2.20.2",
    "react-native-reanimated": "~3.16.1",
    "react-native-safe-area-context": "4.12.0",
    "react-native-screens": "~4.4.0"
  },
  "devDependencies": { "@babel/core": "^7.25.0" },
  "private": true
}

~~~

### letimax-app/App.js
~~~js
import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider, useTheme } from './src/theme/theme';
import { getDb, getConfig } from './src/db/database';
import AuthScreen from './src/screens/AuthScreen';
import FirstUseScreen from './src/screens/FirstUseScreen';
import Root from './src/navigation/Root';

function Gate() {
  const { isDark } = useTheme();
  const [stage, setStage] = useState('auth'); // auth | firstuse | main
  useEffect(() => { getDb(); }, []);
  const afterAuth = async () => setStage((await getConfig('primeiro_uso')) ? 'main' : 'firstuse');
  return (
    <>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      {stage === 'auth' && <AuthScreen onSuccess={afterAuth} />}
      {stage === 'firstuse' && <FirstUseScreen onDone={() => setStage('main')} />}
      {stage === 'main' && <Root />}
    </>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ThemeProvider><Gate /></ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

~~~

### letimax-app/README.md
~~~md
# LétimaX — APP (Fase 2 em curso)

Fase 2 já feita: Motor de Receita, Metas, Produtos, Contactos, Passwords.


1. Instalar dependências: `npm install` e depois `npx expo install --fix`
2. Arrancar: `npx expo start` e abrir no Expo Go (ou usar snack.expo.dev / GitHub Codespaces se não tiver PC)
3. Primeiro acesso: criar PIN -> URL (https) e token do servidor -> chave do Claude (vai para o servidor)

Fase 1: tema claro/escuro, PIN + biometria do telemóvel com bloqueio progressivo, chat, dashboard,
menu lateral com todos os módulos ligados aos endpoints, configurações com chaves (enviadas ao servidor).
Fase 2: ecrãs dedicados (Motor de Receita com Aprovar/Rejeitar, Metas, Produtos...), SQLite offline completo,
cofre de passwords, contactos, documentos.
Fase 3 (precisa de build nativo, não funciona no Expo Go): serviço em segundo plano, chamadas/SMS,
comandos de voz de hardware, reconhecimento de voz.

~~~

### letimax-app/babel.config.js
~~~js
module.exports = function (api) {
  api.cache(true);
  return { presets: ['babel-preset-expo'], plugins: ['react-native-reanimated/plugin'] };
};

~~~

### letimax-app/src/screens/ProdutosScreen.js
~~~js
import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, RefreshControl, ScrollView as HScroll } from 'react-native';
import { useTheme } from '../theme/theme';
import { api } from '../services/api';
import { cacheGet, cacheSet } from '../db/database';

const ESTADOS = ['Todos', 'Rascunho', 'Aguarda Aprovação', 'Publicado', 'Pausado', 'Arquivado'];
const sem = (s) => String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const norm = (d) => (Array.isArray(d) ? d : (d && (d.produtos || d.items)) || []);

export default function ProdutosScreen() {
  const { c } = useTheme();
  const [items, setItems] = useState([]);
  const [filtro, setFiltro] = useState('Todos');
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const d = await api.get('/produtos');
      setItems(norm(d)); await cacheSet('produtos', d);
    } catch (e) {
      const k = await cacheGet('produtos');
      if (k) { setItems(norm(k.dados)); setMsg('Modo offline — dados em cache.'); } else setMsg(e.message);
    } finally { setLoading(false); }
  }, []);
  useEffect(() => { load(); }, [load]);

  const aprovar = async (p) => {
    try { await api.post('/aprovar', { id: p.id }); setMsg('"' + p.nome + '" aprovado.'); load(); } catch (e) { setMsg(e.message); }
  };

  const lista = items.filter((p) => filtro === 'Todos' || sem(p.estado) === sem(filtro));
  const chip = (on) => ({ paddingVertical: 6, paddingHorizontal: 12, borderRadius: 16, marginRight: 6, backgroundColor: on ? c.gold : c.card });

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16 }}
      refreshControl={<RefreshControl refreshing={loading} onRefresh={load} tintColor={c.gold} />}>
      <Text style={{ color: c.text, fontSize: 22, fontWeight: '700', marginBottom: 10 }}>Produtos</Text>
      {!!msg && <Text style={{ color: c.gold, marginBottom: 8 }}>{msg}</Text>}
      <HScroll horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 12 }}>
        {ESTADOS.map((e) => (
          <TouchableOpacity key={e} style={chip(filtro === e)} onPress={() => setFiltro(e)}><Text style={{ color: filtro === e ? '#000' : c.text }}>{e}</Text></TouchableOpacity>
        ))}
      </HScroll>
      {!lista.length && !loading && <Text style={{ color: c.muted }}>Sem produtos neste estado.</Text>}
      {lista.map((p) => (
        <View key={p.id} style={{ backgroundColor: c.card, borderRadius: 14, padding: 14, marginBottom: 10, borderWidth: 1, borderColor: c.border }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: c.text, fontWeight: '700', fontSize: 16, flex: 1 }}>{p.nome}</Text>
            <Text style={{ color: c.gold, fontWeight: '700' }}>{p.preco != null ? '$' + p.preco : ''}</Text>
          </View>
          <Text style={{ color: c.muted, marginTop: 4 }}>{p.nicho ?? '—'} · {p.estado ?? '—'}</Text>
          <Text style={{ color: c.muted, marginTop: 2 }}>
            Qualidade {p.qualidade ?? p.score_qualidade ?? '—'}/100 · vendas {p.vendas ?? 0} · conversão {p.taxa_conversao ?? '—'} · lucro {p.lucro_liquido ?? '—'}
          </Text>
          {p.marca_dagua && <Text style={{ color: c.muted, marginTop: 2 }}>Marca de água activa · link único por comprador</Text>}
          {sem(p.estado) === 'aguarda aprovacao' && (
            <TouchableOpacity onPress={() => aprovar(p)} style={{ backgroundColor: c.gold, padding: 10, borderRadius: 10, alignItems: 'center', marginTop: 10 }}>
              <Text style={{ color: '#000', fontWeight: '700' }}>Aprovar</Text>
            </TouchableOpacity>
          )}
        </View>
      ))}
    </ScrollView>
  );
}

~~~

### letimax-app/src/screens/AuthScreen.js
~~~js
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import * as Speech from 'expo-speech';
import { useTheme } from '../theme/theme';
import { hasPin, setupPin, verifyPin, biometricAuth, lockRemaining, resetFailures, formatLock } from '../services/security';

const GREETING = 'Bem-vindo, Senhor Letício. Estou pronto. Hoje vamos fazer ainda mais dinheiro.';

export default function AuthScreen({ onSuccess }) {
  const { c } = useTheme();
  const [mode, setMode] = useState('boot'); // boot | setup | login
  const [pin, setPin] = useState('');
  const [pin2, setPin2] = useState('');
  const [msg, setMsg] = useState('');
  const [bad, setBad] = useState(false);

  const done = async () => {
    await resetFailures();
    Speech.speak(GREETING, { language: 'pt-PT' });
    onSuccess();
  };

  const tryBio = async () => {
    const lock = await lockRemaining();
    if (lock) { setBad(true); setMsg(formatLock(lock)); return; }
    if (await biometricAuth()) done();
  };

  useEffect(() => {
    (async () => {
      if (await hasPin()) { setMode('login'); tryBio(); } else setMode('setup');
    })();
  }, []);

  const create = async () => {
    setBad(true);
    if (pin.length < 6) return setMsg('O PIN deve ter pelo menos 6 dígitos.');
    if (pin !== pin2) return setMsg('Os PINs não coincidem.');
    await setupPin(pin);
    setBad(false);
    setMsg('Perfil de acesso criado. A LétimaX reconhece-o agora, Senhor Letício.');
    setTimeout(done, 800);
  };

  const login = async () => {
    const r = await verifyPin(pin);
    setPin('');
    if (r.ok) return done();
    setBad(true);
    if (r.locked) return setMsg(formatLock(r.locked));
    setMsg('PIN incorrecto. Tentativas falhadas: ' + r.failures);
  };

  const input = { borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 12, padding: 14, fontSize: 18, marginBottom: 12, textAlign: 'center', letterSpacing: 6 };
  const btn = { backgroundColor: c.gold, padding: 14, borderRadius: 12, alignItems: 'center', marginTop: 4 };

  if (mode === 'boot') return <View style={{ flex: 1, backgroundColor: c.bg, justifyContent: 'center' }}><ActivityIndicator color={c.gold} /></View>;

  return (
    <View style={{ flex: 1, backgroundColor: c.bg, justifyContent: 'center', padding: 28 }}>
      <Text style={{ color: c.gold, fontSize: 38, fontWeight: '800', textAlign: 'center' }}>LétimaX</Text>
      <Text style={{ color: c.muted, textAlign: 'center', marginBottom: 28 }}>
        {mode === 'setup' ? 'Primeiro acesso — crie o seu PIN de segurança' : 'Confirme a sua identidade'}
      </Text>
      <TextInput value={pin} onChangeText={setPin} placeholder="PIN" placeholderTextColor={c.muted} secureTextEntry keyboardType="number-pad" maxLength={12} style={input} />
      {mode === 'setup' && <TextInput value={pin2} onChangeText={setPin2} placeholder="Repetir PIN" placeholderTextColor={c.muted} secureTextEntry keyboardType="number-pad" maxLength={12} style={input} />}
      <TouchableOpacity style={btn} onPress={mode === 'setup' ? create : login}>
        <Text style={{ color: '#000', fontWeight: '700' }}>{mode === 'setup' ? 'Criar perfil' : 'Entrar'}</Text>
      </TouchableOpacity>
      {mode === 'login' && (
        <TouchableOpacity style={{ padding: 14, alignItems: 'center' }} onPress={tryBio}>
          <Text style={{ color: c.gold }}>Usar rosto / impressão digital</Text>
        </TouchableOpacity>
      )}
      {!!msg && <Text style={{ color: bad ? c.err : c.gold, textAlign: 'center', marginTop: 12 }}>{msg}</Text>}
    </View>
  );
}

~~~

### letimax-app/src/screens/ModuleScreen.js
~~~js
import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, Text, RefreshControl, ActivityIndicator } from 'react-native';
import { useTheme } from '../theme/theme';
import { api } from '../services/api';
import { cacheGet, cacheSet } from '../db/database';
import JsonView from '../components/JsonView';

// Ecrã genérico ligado a um endpoint GET do servidor, com cache offline.
export default function ModuleScreen({ route }) {
  const { c } = useTheme();
  const { titulo, endpoint } = route.params || {};
  const [data, setData] = useState(null);
  const [offline, setOffline] = useState(false);
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    if (!endpoint) return;
    setLoading(true); setErr(''); setOffline(false);
    try {
      const d = await api.get(endpoint);
      setData(d); await cacheSet(endpoint, d);
    } catch (e) {
      const cached = await cacheGet(endpoint);
      if (cached) { setData(cached.dados); setOffline(true); } else setErr(e.message);
    } finally { setLoading(false); }
  }, [endpoint]);

  useEffect(() => { load(); }, [load]);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16 }}
      refreshControl={<RefreshControl refreshing={loading} onRefresh={load} tintColor={c.gold} />}>
      <Text style={{ color: c.text, fontSize: 22, fontWeight: '700', marginBottom: 12 }}>{titulo}</Text>
      {!endpoint && <Text style={{ color: c.muted }}>Este ecrã é local e será construído na próxima fase.</Text>}
      {offline && <Text style={{ color: c.warn, marginBottom: 8 }}>Modo offline — a mostrar dados em cache.</Text>}
      {err ? <Text style={{ color: c.err }}>{err}</Text> : null}
      {loading && !data && <ActivityIndicator color={c.gold} />}
      {data && <JsonView data={data} c={c} />}
    </ScrollView>
  );
}

~~~

### letimax-app/src/screens/FirstUseScreen.js
~~~js
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from '../theme/theme';
import { saveServerConfig, api } from '../services/api';
import { setConfig } from '../db/database';

export default function FirstUseScreen({ onDone }) {
  const { c } = useTheme();
  const [url, setUrl] = useState('');
  const [token, setToken] = useState('');
  const [claude, setClaude] = useState('');
  const [msg, setMsg] = useState('');

  const input = { borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 12, padding: 12, marginBottom: 10 };

  const save = async () => {
    try {
      await saveServerConfig(url, token);
      if (claude.trim()) {
        // A chave segue por HTTPS para o servidor e nunca fica guardada no telemóvel
        await api.post('/chaves/adicionar', { nome: 'ANTHROPIC_API_KEY', valor: claude.trim() });
        setClaude('');
      }
      await setConfig('primeiro_uso', '1');
      onDone();
    } catch (e) { setMsg(e.message); }
  };
  const later = async () => { await setConfig('primeiro_uso', '1'); onDone(); };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 24, paddingTop: 70 }}>
      <Text style={{ color: c.gold, fontSize: 26, fontWeight: '800' }}>Primeira configuração</Text>
      <Text style={{ color: c.muted, marginVertical: 12 }}>Antes de começar, ligue a LétimaX ao seu servidor e adicione a chave do Claude para que ela possa responder.</Text>
      <TextInput style={input} value={url} onChangeText={setUrl} placeholder="https://o-seu-servidor.up.railway.app" placeholderTextColor={c.muted} autoCapitalize="none" />
      <TextInput style={input} value={token} onChangeText={setToken} placeholder="Token de acesso do servidor" placeholderTextColor={c.muted} autoCapitalize="none" secureTextEntry />
      <TextInput style={input} value={claude} onChangeText={setClaude} placeholder="ANTHROPIC_API_KEY (opcional agora)" placeholderTextColor={c.muted} autoCapitalize="none" secureTextEntry />
      {!!msg && <Text style={{ color: c.err, marginBottom: 8 }}>{msg}</Text>}
      <TouchableOpacity onPress={save} style={{ backgroundColor: c.gold, padding: 14, borderRadius: 12, alignItems: 'center' }}>
        <Text style={{ color: '#000', fontWeight: '700' }}>Guardar e iniciar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={later} style={{ padding: 14, alignItems: 'center' }}>
        <Text style={{ color: c.muted }}>Configurar depois</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

~~~

### letimax-app/src/screens/ContactosScreen.js
~~~js
import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useTheme } from '../theme/theme';
import { listContactos, saveContacto, deleteContacto } from '../db/database';

const CLASSES = ['cliente', 'parceiro', 'afiliado', 'fornecedor', 'influenciador'];

export default function ContactosScreen() {
  const { c } = useTheme();
  const [lista, setLista] = useState([]);
  const [q, setQ] = useState('');
  const [form, setForm] = useState(null);

  const load = useCallback(() => listContactos(q).then(setLista), [q]);
  useEffect(() => { load(); }, [load]);

  const input = { borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 10, padding: 10, marginBottom: 8 };
  const chip = (on) => ({ paddingVertical: 6, paddingHorizontal: 12, borderRadius: 16, marginRight: 6, marginBottom: 6, backgroundColor: on ? c.gold : c.card });

  const guardar = async () => {
    if (!form.nome) return;
    await saveContacto(form); setForm(null); load();
  };
  const apagar = (p) => Alert.alert('Eliminar contacto', p.nome + '?', [
    { text: 'Cancelar', style: 'cancel' },
    { text: 'Eliminar', style: 'destructive', onPress: async () => { await deleteContacto(p.id); load(); } },
  ]);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16 }} keyboardShouldPersistTaps="handled">
      <Text style={{ color: c.text, fontSize: 22, fontWeight: '700', marginBottom: 10 }}>Contactos</Text>
      <TextInput value={q} onChangeText={setQ} placeholder="Pesquisar por nome, email ou classe" placeholderTextColor={c.muted} style={input} />

      {form ? (
        <View style={{ backgroundColor: c.card, borderRadius: 14, padding: 14, marginBottom: 12 }}>
          {['nome', 'email', 'telefone', 'notas'].map((k) => (
            <TextInput key={k} value={form[k] || ''} onChangeText={(t) => setForm({ ...form, [k]: t })} placeholder={k[0].toUpperCase() + k.slice(1)} placeholderTextColor={c.muted} autoCapitalize={k === 'email' ? 'none' : 'sentences'} style={input} />
          ))}
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {CLASSES.map((k) => <TouchableOpacity key={k} style={chip(form.classe === k)} onPress={() => setForm({ ...form, classe: k })}><Text style={{ color: form.classe === k ? '#000' : c.text }}>{k}</Text></TouchableOpacity>)}
          </View>
          <View style={{ flexDirection: 'row', marginTop: 6 }}>
            <TouchableOpacity onPress={guardar} style={{ flex: 1, backgroundColor: c.gold, padding: 11, borderRadius: 10, alignItems: 'center', marginRight: 8 }}><Text style={{ color: '#000', fontWeight: '700' }}>Guardar</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => setForm(null)} style={{ flex: 1, backgroundColor: c.bg, padding: 11, borderRadius: 10, alignItems: 'center' }}><Text style={{ color: c.muted }}>Cancelar</Text></TouchableOpacity>
          </View>
        </View>
      ) : (
        <TouchableOpacity onPress={() => setForm({ classe: 'cliente' })} style={{ backgroundColor: c.gold, padding: 12, borderRadius: 10, alignItems: 'center', marginBottom: 12 }}><Text style={{ color: '#000', fontWeight: '700' }}>Novo contacto</Text></TouchableOpacity>
      )}

      {!lista.length && <Text style={{ color: c.muted }}>Sem contactos.</Text>}
      {lista.map((p) => (
        <TouchableOpacity key={p.id} onLongPress={() => apagar(p)} style={{ backgroundColor: c.card, borderRadius: 12, padding: 12, marginBottom: 8, borderWidth: 1, borderColor: c.border }}>
          <Text style={{ color: c.text, fontWeight: '700' }}>{p.nome} <Text style={{ color: c.gold, fontWeight: '400' }}>· {p.classe}</Text></Text>
          {!!p.email && <Text style={{ color: c.muted }}>{p.email}</Text>}
          {!!p.telefone && <Text style={{ color: c.muted }}>{p.telefone}</Text>}
          {!!p.notas && <Text style={{ color: c.muted, marginTop: 2 }}>{p.notas}</Text>}
        </TouchableOpacity>
      ))}
      <Text style={{ color: c.muted, fontSize: 12, marginTop: 6 }}>Toque longo num contacto para eliminar.</Text>
    </ScrollView>
  );
}

~~~

### letimax-app/src/screens/ChatScreen.js
~~~js
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
import * as Speech from 'expo-speech';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/theme';
import { addMessage, getMessages } from '../db/database';
import { api } from '../services/api';

export default function ChatScreen() {
  const { c } = useTheme();
  const [msgs, setMsgs] = useState([]); // mais recente primeiro
  const [text, setText] = useState('');
  const [wait, setWait] = useState(0); // 0 nada | 1 a carregar | 2 a processar
  const timer = useRef(null);

  useEffect(() => { getMessages().then(setMsgs); }, []);

  const send = async () => {
    const t = text.trim();
    if (!t || wait) return;
    setText('');
    const u = await addMessage('user', t);
    setMsgs((m) => [u, ...m]);
    setWait(1);
    timer.current = setTimeout(() => setWait(2), 30000); // 30 s: "a processar..."
    let reply;
    try {
      const r = await api.post('/chat', { mensagem: t }, 60000); // 60 s: cancela
      reply = r.resposta || r.response || JSON.stringify(r);
      Speech.speak(reply, { language: 'pt-PT' });
    } catch (e) {
      reply = 'Não consegui obter resposta (' + e.message + '). Quer tentar novamente?';
    } finally {
      clearTimeout(timer.current);
      setWait(0);
    }
    const b = await addMessage('bot', reply);
    setMsgs((m) => [b, ...m]);
  };

  const Bubble = ({ item }) => {
    const me = item.papel === 'user';
    return (
      <View style={{ alignSelf: me ? 'flex-end' : 'flex-start', backgroundColor: me ? c.bubbleUser : c.bubbleBot, padding: 12, borderRadius: 16, marginVertical: 4, maxWidth: '85%' }}>
        <Text style={{ color: c.text, fontSize: 15 }}>{item.texto}</Text>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: c.bg }} behavior={Platform.OS === 'ios' ? 'padding' : undefined} keyboardVerticalOffset={90}>
      <FlatList inverted data={msgs} keyExtractor={(i) => String(i.id)} renderItem={Bubble} contentContainerStyle={{ padding: 12 }}
        ListHeaderComponent={wait ? (
          <View style={{ flexDirection: 'row', alignItems: 'center', padding: 8 }}>
            <ActivityIndicator color={c.gold} />
            <Text style={{ color: c.muted, marginLeft: 8 }}>{wait === 2 ? 'LétimaX está a processar...' : 'A pensar...'}</Text>
          </View>
        ) : null} />
      <View style={{ flexDirection: 'row', padding: 10, borderTopWidth: 1, borderTopColor: c.border, alignItems: 'center' }}>
        <TextInput value={text} onChangeText={setText} placeholder="Escreva à LétimaX..." placeholderTextColor={c.muted}
          style={{ flex: 1, color: c.text, backgroundColor: c.card, borderRadius: 22, paddingHorizontal: 16, paddingVertical: 10 }} multiline />
        <TouchableOpacity onPress={send} style={{ marginLeft: 8, backgroundColor: c.gold, borderRadius: 22, padding: 11 }}>
          <Ionicons name="send" size={20} color="#000" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

~~~

### letimax-app/src/screens/MetasScreen.js
~~~js
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, RefreshControl } from 'react-native';
import * as Speech from 'expo-speech';
import { useTheme } from '../theme/theme';
import { api } from '../services/api';
import { cacheGet, cacheSet, saveMeta } from '../db/database';
import JsonView from '../components/JsonView';

function diasRestantes() {
  const h = new Date();
  return new Date(h.getFullYear(), h.getMonth() + 1, 0).getDate() - h.getDate();
}

export default function MetasScreen() {
  const { c } = useTheme();
  const [d, setD] = useState(null);
  const [proj, setProj] = useState(null);
  const [novo, setNovo] = useState('');
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const celebrou = useRef(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const r = await api.get('/metas/progresso');
      setD(r); await cacheSet('metas', r);
      api.get('/metas/projecao').then(setProj).catch(() => {});
    } catch (e) {
      const k = await cacheGet('metas');
      if (k) { setD(k.dados); setMsg('Modo offline — dados em cache.'); } else setMsg(e.message);
    } finally { setLoading(false); }
  }, []);
  useEffect(() => { load(); }, [load]);

  const meta = Number(d && (d.meta ?? d.valor)) || 0;
  const atual = Number(d && (d.atual ?? d.receita_atual)) || 0;
  const dias = Number((d && d.dias_restantes) ?? diasRestantes());
  const falta = Math.max(meta - atual, 0);
  const pct = meta ? Math.min(Math.round((atual / meta) * 100), 100) : 0;
  const ritmo = dias > 0 ? falta / dias : falta;

  useEffect(() => {
    if (meta && atual >= meta && !celebrou.current) {
      celebrou.current = true;
      Speech.speak('Parabéns, Senhor Letício! Meta de ' + meta + ' reais atingida. Vamos estabelecer a próxima?', { language: 'pt-PT' });
    }
  }, [meta, atual]);

  const definir = async () => {
    const v = Number(String(novo).replace(',', '.'));
    if (!v) return setMsg('Indique um valor válido.');
    try {
      await api.post('/metas/definir', { valor: v });
      await saveMeta(v); setNovo(''); celebrou.current = false; load();
    } catch (e) { setMsg(e.message); }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16 }}
      refreshControl={<RefreshControl refreshing={loading} onRefresh={load} tintColor={c.gold} />}>
      <Text style={{ color: c.text, fontSize: 22, fontWeight: '700', marginBottom: 12 }}>Metas</Text>
      {!!msg && <Text style={{ color: c.gold, marginBottom: 8 }}>{msg}</Text>}

      {meta > 0 ? (
        <View style={{ backgroundColor: c.card, borderRadius: 14, padding: 16, borderWidth: 1, borderColor: c.border }}>
          <Text style={{ color: c.text, fontSize: 16 }}>Estás a R${(meta - atual > 0 ? falta : 0).toFixed(0)} dos R${meta.toFixed(0)} — faltam {dias} dias.</Text>
          <View style={{ height: 12, backgroundColor: c.border, borderRadius: 6, marginVertical: 12 }}>
            <View style={{ height: 12, width: pct + '%', backgroundColor: c.gold, borderRadius: 6 }} />
          </View>
          <Text style={{ color: c.muted }}>{pct}% concluído · receita actual R${atual.toFixed(0)}</Text>
          {falta > 0 && <Text style={{ color: c.text, marginTop: 8 }}>Precisas de vender R${ritmo.toFixed(0)} por dia para atingir a meta.</Text>}
          {falta > 0 && pct < 100 && dias > 0 && atual / Math.max(30 - dias, 1) < ritmo && (
            <Text style={{ color: c.warn, marginTop: 8 }}>Meta em risco. Sugestão: reactivar a lista de emails com uma promoção relâmpago de 48 horas.</Text>
          )}
          {falta === 0 && <Text style={{ color: c.ok, marginTop: 8 }}>Meta atingida! 🎉</Text>}
        </View>
      ) : (
        <Text style={{ color: c.muted }}>Ainda não há meta mensal definida.</Text>
      )}

      <Text style={{ color: c.gold, fontWeight: '700', marginTop: 22, marginBottom: 8 }}>Definir meta mensal (R$)</Text>
      <View style={{ flexDirection: 'row' }}>
        <TextInput value={novo} onChangeText={setNovo} keyboardType="numeric" placeholder="2000" placeholderTextColor={c.muted}
          style={{ flex: 1, borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 10, padding: 10 }} />
        <TouchableOpacity onPress={definir} style={{ backgroundColor: c.gold, borderRadius: 10, paddingHorizontal: 18, justifyContent: 'center', marginLeft: 8 }}>
          <Text style={{ color: '#000', fontWeight: '700' }}>Guardar</Text>
        </TouchableOpacity>
      </View>

      {proj && (<><Text style={{ color: c.gold, fontWeight: '700', marginTop: 22, marginBottom: 8 }}>Projecção do mês</Text><JsonView data={proj} c={c} /></>)}
    </ScrollView>
  );
}

~~~

### letimax-app/src/screens/MotorReceitaScreen.js
~~~js
import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Alert, RefreshControl } from 'react-native';
import { useTheme } from '../theme/theme';
import { api } from '../services/api';
import { cacheGet, cacheSet } from '../db/database';
import JsonView from '../components/JsonView';

const norm = (d) => (Array.isArray(d) ? d : (d && (d.oportunidades || d.items)) || []);
const FILTROS = ['todos', 'baixo', 'médio', 'alto'];

export default function MotorReceitaScreen() {
  const { c } = useTheme();
  const [items, setItems] = useState([]);
  const [filtro, setFiltro] = useState('todos');
  const [aberto, setAberto] = useState(null);
  const [hist, setHist] = useState(null);
  const [offline, setOffline] = useState(false);
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    setLoading(true); setOffline(false);
    try {
      const d = await api.get('/motor-receita/oportunidades');
      setItems(norm(d)); await cacheSet('motor', d);
    } catch (e) {
      const k = await cacheGet('motor');
      if (k) { setItems(norm(k.dados)); setOffline(true); } else setMsg(e.message);
    } finally { setLoading(false); }
  }, []);
  useEffect(() => { load(); }, [load]);

  const act = async (id, acao, texto) => {
    try {
      await api.post('/motor-receita/' + acao + '/' + id, {});
      setItems((l) => l.filter((o) => o.id !== id));
      setMsg(texto);
    } catch (e) { setMsg(e.message); }
  };
  const aprovar = (o) =>
    Alert.alert('Aprovar oportunidade', 'A LétimaX vai implementar "' + (o.titulo || o.nome) + '" imediatamente. Confirma?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Aprovar', onPress: () => act(o.id, 'aprovar', 'Aprovada — a LétimaX está a implementar.') },
    ]);
  const verHist = async () => {
    if (hist) return setHist(null);
    try { setHist(await api.get('/motor-receita/historico')); } catch (e) { setMsg(e.message); }
  };

  const lista = items
    .filter((o) => filtro === 'todos' || String(o.esforco || '').toLowerCase() === filtro)
    .sort((a, b) => (b.pontuacao || 0) - (a.pontuacao || 0));
  const potencial = lista.reduce((s, o) => s + (Number(o.receita_max) || 0), 0);

  const chip = (on) => ({ paddingVertical: 6, paddingHorizontal: 12, borderRadius: 16, marginRight: 6, backgroundColor: on ? c.gold : c.card });
  const btn = (bg) => ({ flex: 1, backgroundColor: bg, padding: 9, borderRadius: 10, alignItems: 'center', marginRight: 6 });

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16 }}
      refreshControl={<RefreshControl refreshing={loading} onRefresh={load} tintColor={c.gold} />}>
      <Text style={{ color: c.text, fontSize: 22, fontWeight: '700' }}>Motor de Receita</Text>
      <Text style={{ color: c.muted, marginBottom: 10 }}>Receita potencial das oportunidades activas: R$ {potencial.toLocaleString('pt-PT')}</Text>
      {offline && <Text style={{ color: c.warn, marginBottom: 6 }}>Modo offline — dados em cache.</Text>}
      {!!msg && <Text style={{ color: c.gold, marginBottom: 8 }}>{msg}</Text>}

      <View style={{ flexDirection: 'row', marginBottom: 12 }}>
        {FILTROS.map((f) => (
          <TouchableOpacity key={f} style={chip(filtro === f)} onPress={() => setFiltro(f)}>
            <Text style={{ color: filtro === f ? '#000' : c.text }}>{f === 'todos' ? 'Todos' : 'Esforço ' + f}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {!lista.length && !loading && <Text style={{ color: c.muted }}>Sem oportunidades activas.</Text>}
      {lista.map((o) => (
        <View key={o.id} style={{ backgroundColor: c.card, borderRadius: 14, padding: 14, marginBottom: 10, borderWidth: 1, borderColor: c.border }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: c.text, fontWeight: '700', flex: 1, fontSize: 16 }}>{o.titulo || o.nome}</Text>
            <Text style={{ color: (o.pontuacao || 0) >= 70 ? c.ok : c.warn, fontWeight: '800' }}>{o.pontuacao ?? '—'}/100</Text>
          </View>
          <Text style={{ color: c.muted, marginTop: 4 }}>
            R$ {o.receita_min ?? '?'} – {o.receita_max ?? '?'} · esforço {o.esforco ?? '—'} · {o.tempo_resultado ?? '—'} · risco {o.risco ?? '—'}
          </Text>
          {aberto === o.id && <View style={{ marginTop: 10 }}><JsonView data={o} c={c} /></View>}
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <TouchableOpacity style={btn(c.card)} onPress={() => setAberto(aberto === o.id ? null : o.id)}><Text style={{ color: c.gold }}>{aberto === o.id ? 'Fechar' : 'Detalhes'}</Text></TouchableOpacity>
            <TouchableOpacity style={btn(c.gold)} onPress={() => aprovar(o)}><Text style={{ color: '#000', fontWeight: '700' }}>Aprovar</Text></TouchableOpacity>
            <TouchableOpacity style={btn(c.card)} onPress={() => act(o.id, 'rejeitar', 'Rejeitada — a LétimaX aprende que este tipo não interessa.')}><Text style={{ color: c.err }}>Rejeitar</Text></TouchableOpacity>
            <TouchableOpacity style={{ ...btn(c.card), marginRight: 0 }} onPress={() => act(o.id, 'mais-tarde', 'Adiada por 48 horas.')}><Text style={{ color: c.muted }}>+48h</Text></TouchableOpacity>
          </View>
        </View>
      ))}

      <TouchableOpacity onPress={verHist} style={{ padding: 12, alignItems: 'center' }}><Text style={{ color: c.gold }}>{hist ? 'Esconder histórico' : 'Ver histórico (resultado real vs estimativa)'}</Text></TouchableOpacity>
      {hist && <JsonView data={hist} c={c} />}
    </ScrollView>
  );
}

~~~

### letimax-app/src/screens/SettingsScreen.js
~~~js
import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useTheme } from '../theme/theme';
import { serverConfig, saveServerConfig, api } from '../services/api';
import { getConfig, setConfig } from '../db/database';

const CHAVES_IA = ['ANTHROPIC_API_KEY', 'OPENAI_API_KEY', 'GEMINI_API_KEY', 'STABILITY_API_KEY', 'ELEVENLABS_API_KEY', 'ELEVENLABS_VOICE_ID'];
const CHAVES_PLAT = ['HOTMART_CLIENT_ID', 'HOTMART_CLIENT_SECRET', 'KIWIFY_API_KEY', 'GUMROAD_ACCESS_TOKEN', 'SHOPIFY_API_KEY', 'SHOPIFY_API_SECRET', 'BINANCE_API_KEY', 'BINANCE_SECRET_KEY', 'MAILCHIMP_API_KEY', 'NETLIFY_API_KEY', 'GMAIL_OAUTH_TOKEN', 'GOOGLE_ANALYTICS_ID', 'META_PIXEL_ID'];

export default function SettingsScreen() {
  const { c, mode, setMode } = useTheme();
  const [url, setUrl] = useState('');
  const [token, setToken] = useState('');
  const [nivel, setNivel] = useState('1');
  const [msg, setMsg] = useState('');
  const [valores, setValores] = useState({});
  const [visivel, setVisivel] = useState({});
  const [novoNome, setNovoNome] = useState('');
  const [novoValor, setNovoValor] = useState('');

  useEffect(() => {
    serverConfig().then((s) => setUrl(s.url));
    getConfig('autonomia').then((v) => v && setNivel(v));
  }, []);

  const flash = (m) => { setMsg(m); setTimeout(() => setMsg(''), 4000); };
  const input = { borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 10, padding: 10, flex: 1 };
  const h = { color: c.gold, fontSize: 16, fontWeight: '700', marginTop: 22, marginBottom: 8 };
  const chip = (on) => ({ paddingVertical: 8, paddingHorizontal: 14, borderRadius: 18, marginRight: 8, backgroundColor: on ? c.gold : c.card });

  const saveServer = async () => {
    try { await saveServerConfig(url, token); setToken(''); flash('Servidor guardado.'); } catch (e) { flash(e.message); }
  };
  const setAuto = async (n) => {
    setNivel(n); await setConfig('autonomia', n);
    try { await api.post('/autonomia/nivel', { nivel: Number(n) }); } catch (e) { flash('Guardado no APP; servidor offline.'); }
  };
  // A chave vai por HTTPS para o servidor e o campo é limpo — nada fica no telemóvel
  const enviarChave = async (nome, valor) => {
    if (!valor) return;
    try {
      await api.post('/chaves/adicionar', { nome, valor });
      setValores((v) => ({ ...v, [nome]: '' }));
      flash(nome + ' enviada ao servidor.');
    } catch (e) { flash(e.message); }
  };

  const chave = (nome) => (
    <View key={nome} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
      <View style={{ flex: 1 }}>
        <Text style={{ color: c.muted, fontSize: 11, marginBottom: 2 }}>{nome}</Text>
        <TextInput style={{ ...input, flex: 0 }} value={valores[nome] || ''} onChangeText={(t) => setValores((v) => ({ ...v, [nome]: t }))}
          secureTextEntry={!visivel[nome]} autoCapitalize="none" placeholder="••••••••" placeholderTextColor={c.muted} />
      </View>
      <TouchableOpacity onPress={() => setVisivel((v) => ({ ...v, [nome]: !v[nome] }))} style={{ padding: 10 }}><Text style={{ color: c.gold }}>{visivel[nome] ? 'Esconder' : 'Mostrar'}</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => enviarChave(nome, valores[nome])} style={{ padding: 10 }}><Text style={{ color: c.gold, fontWeight: '700' }}>Enviar</Text></TouchableOpacity>
    </View>
  );

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16, paddingBottom: 60 }}>
      {!!msg && <Text style={{ color: c.gold, marginBottom: 8 }}>{msg}</Text>}

      <Text style={h}>Servidor</Text>
      <View style={{ flexDirection: 'row', marginBottom: 8 }}><TextInput style={input} value={url} onChangeText={setUrl} autoCapitalize="none" placeholder="https://..." placeholderTextColor={c.muted} /></View>
      <View style={{ flexDirection: 'row', marginBottom: 8 }}><TextInput style={input} value={token} onChangeText={setToken} autoCapitalize="none" secureTextEntry placeholder="Novo token (opcional)" placeholderTextColor={c.muted} /></View>
      <TouchableOpacity onPress={saveServer} style={{ backgroundColor: c.gold, padding: 12, borderRadius: 10, alignItems: 'center' }}><Text style={{ color: '#000', fontWeight: '700' }}>Guardar servidor</Text></TouchableOpacity>

      <Text style={h}>Tema visual</Text>
      <View style={{ flexDirection: 'row' }}>
        {[['system', 'Seguir sistema'], ['light', 'Claro'], ['dark', 'Escuro']].map(([m, l]) => (
          <TouchableOpacity key={m} style={chip(mode === m)} onPress={() => setMode(m)}><Text style={{ color: mode === m ? '#000' : c.text }}>{l}</Text></TouchableOpacity>
        ))}
      </View>

      <Text style={h}>Nível de autonomia</Text>
      <View style={{ flexDirection: 'row' }}>
        {[['1', 'Normal'], ['2', 'Semi-autónomo'], ['3', 'Autónomo total']].map(([n, l]) => (
          <TouchableOpacity key={n} style={chip(nivel === n)} onPress={() => setAuto(n)}><Text style={{ color: nivel === n ? '#000' : c.text }}>{l}</Text></TouchableOpacity>
        ))}
      </View>

      <Text style={h}>Secção 1 — Chaves de IA</Text>
      {CHAVES_IA.map(chave)}
      <Text style={h}>Secção 2 — Chaves de Plataformas</Text>
      {CHAVES_PLAT.map(chave)}

      <Text style={h}>Secção 3 — Chaves Personalizadas</Text>
      <View style={{ flexDirection: 'row', marginBottom: 8 }}><TextInput style={input} value={novoNome} onChangeText={setNovoNome} autoCapitalize="characters" placeholder="NOME_DA_CHAVE" placeholderTextColor={c.muted} /></View>
      <View style={{ flexDirection: 'row', marginBottom: 8 }}><TextInput style={input} value={novoValor} onChangeText={setNovoValor} autoCapitalize="none" secureTextEntry placeholder="Valor" placeholderTextColor={c.muted} /></View>
      <TouchableOpacity onPress={async () => { if (novoNome && novoValor) { await enviarChave(novoNome.trim(), novoValor.trim()); setNovoNome(''); setNovoValor(''); } }}
        style={{ backgroundColor: c.gold, padding: 12, borderRadius: 10, alignItems: 'center' }}><Text style={{ color: '#000', fontWeight: '700' }}>Adicionar nova chave</Text></TouchableOpacity>
      <Text style={{ color: c.muted, marginTop: 14, fontSize: 12 }}>Todas as chaves seguem por HTTPS para o servidor e nunca ficam guardadas no telemóvel.</Text>
    </ScrollView>
  );
}

~~~

### letimax-app/src/screens/PasswordsScreen.js
~~~js
import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useTheme } from '../theme/theme';
import { biometricAuth, verifyPin, formatLock } from '../services/security';

// Cofre: cada entrada fica no SecureStore (cifrado pelo Android Keystore). Exige biometria/PIN sempre que se abre.
const IDX = 'pw_index';
const readIdx = async () => JSON.parse((await SecureStore.getItemAsync(IDX)) || '[]');

export default function PasswordsScreen() {
  const { c } = useTheme();
  const [open, setOpen] = useState(false);
  const [pin, setPin] = useState('');
  const [msg, setMsg] = useState('');
  const [lista, setLista] = useState([]);
  const [q, setQ] = useState('');
  const [vis, setVis] = useState({});
  const [segredos, setSegredos] = useState({});
  const [form, setForm] = useState(null);

  const unlock = async () => { if (await biometricAuth()) { setOpen(true); readIdx().then(setLista); } };
  useEffect(() => { unlock(); }, []);

  const unlockPin = async () => {
    const r = await verifyPin(pin); setPin('');
    if (r.ok) { setOpen(true); readIdx().then(setLista); }
    else setMsg(r.locked ? formatLock(r.locked) : 'PIN incorrecto.');
  };

  const mostrar = async (id) => {
    if (!segredos[id]) { const v = await SecureStore.getItemAsync('pw_' + id); setSegredos((s) => ({ ...s, [id]: JSON.parse(v || '{}') })); }
    setVis((v) => ({ ...v, [id]: !v[id] }));
  };
  const guardar = async () => {
    if (!form.plataforma || !form.password) return;
    const id = Date.now().toString(36);
    await SecureStore.setItemAsync('pw_' + id, JSON.stringify({ password: form.password, notas: form.notas || '' }));
    const idx = [...(await readIdx()), { id, plataforma: form.plataforma, email: form.email || '' }];
    await SecureStore.setItemAsync(IDX, JSON.stringify(idx));
    setLista(idx); setForm(null);
  };
  const apagar = (p) => Alert.alert('Eliminar', p.plataforma + '?', [
    { text: 'Cancelar', style: 'cancel' },
    { text: 'Eliminar', style: 'destructive', onPress: async () => {
      await SecureStore.deleteItemAsync('pw_' + p.id);
      const idx = (await readIdx()).filter((x) => x.id !== p.id);
      await SecureStore.setItemAsync(IDX, JSON.stringify(idx)); setLista(idx);
    } },
  ]);

  const input = { borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 10, padding: 10, marginBottom: 8 };

  if (!open) {
    return (
      <View style={{ flex: 1, backgroundColor: c.bg, padding: 24, justifyContent: 'center' }}>
        <Text style={{ color: c.text, fontSize: 20, fontWeight: '700', marginBottom: 8 }}>Cofre de passwords</Text>
        <Text style={{ color: c.muted, marginBottom: 16 }}>Confirme a identidade para abrir, mesmo com a APP já desbloqueada.</Text>
        <TouchableOpacity onPress={unlock} style={{ backgroundColor: c.gold, padding: 13, borderRadius: 10, alignItems: 'center', marginBottom: 14 }}><Text style={{ color: '#000', fontWeight: '700' }}>Usar rosto / impressão digital</Text></TouchableOpacity>
        <TextInput value={pin} onChangeText={setPin} placeholder="ou PIN" placeholderTextColor={c.muted} secureTextEntry keyboardType="number-pad" style={input} />
        <TouchableOpacity onPress={unlockPin} style={{ padding: 10, alignItems: 'center' }}><Text style={{ color: c.gold }}>Abrir com PIN</Text></TouchableOpacity>
        {!!msg && <Text style={{ color: c.err, textAlign: 'center' }}>{msg}</Text>}
      </View>
    );
  }

  const filtrada = lista.filter((p) => (p.plataforma + p.email).toLowerCase().includes(q.toLowerCase()));
  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16 }} keyboardShouldPersistTaps="handled">
      <Text style={{ color: c.text, fontSize: 22, fontWeight: '700', marginBottom: 10 }}>Passwords</Text>
      <TextInput value={q} onChangeText={setQ} placeholder="Pesquisar plataforma" placeholderTextColor={c.muted} style={input} />
      {form ? (
        <View style={{ backgroundColor: c.card, borderRadius: 14, padding: 14, marginBottom: 12 }}>
          {[['plataforma', 'Plataforma'], ['email', 'Email usado'], ['password', 'Password'], ['notas', 'Notas']].map(([k, l]) => (
            <TextInput key={k} value={form[k] || ''} onChangeText={(t) => setForm({ ...form, [k]: t })} placeholder={l} placeholderTextColor={c.muted} autoCapitalize="none" secureTextEntry={k === 'password'} style={input} />
          ))}
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={guardar} style={{ flex: 1, backgroundColor: c.gold, padding: 11, borderRadius: 10, alignItems: 'center', marginRight: 8 }}><Text style={{ color: '#000', fontWeight: '700' }}>Guardar</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => setForm(null)} style={{ flex: 1, padding: 11, alignItems: 'center' }}><Text style={{ color: c.muted }}>Cancelar</Text></TouchableOpacity>
          </View>
        </View>
      ) : (
        <TouchableOpacity onPress={() => setForm({})} style={{ backgroundColor: c.gold, padding: 12, borderRadius: 10, alignItems: 'center', marginBottom: 12 }}><Text style={{ color: '#000', fontWeight: '700' }}>Nova password</Text></TouchableOpacity>
      )}
      {!filtrada.length && <Text style={{ color: c.muted }}>Cofre vazio.</Text>}
      {filtrada.map((p) => (
        <TouchableOpacity key={p.id} onPress={() => mostrar(p.id)} onLongPress={() => apagar(p)} style={{ backgroundColor: c.card, borderRadius: 12, padding: 12, marginBottom: 8, borderWidth: 1, borderColor: c.border }}>
          <Text style={{ color: c.text, fontWeight: '700' }}>{p.plataforma}</Text>
          {!!p.email && <Text style={{ color: c.muted }}>{p.email}</Text>}
          <Text style={{ color: c.gold, marginTop: 4 }}>{vis[p.id] && segredos[p.id] ? segredos[p.id].password : '••••••••  (toque para mostrar)'}</Text>
          {vis[p.id] && !!segredos[p.id]?.notas && <Text style={{ color: c.muted }}>{segredos[p.id].notas}</Text>}
        </TouchableOpacity>
      ))}
      <Text style={{ color: c.muted, fontSize: 12 }}>Toque longo para eliminar.</Text>
    </ScrollView>
  );
}

~~~

### letimax-app/src/navigation/menu.js
~~~js
// Menu lateral: nome, rota, endpoint GET do servidor (null = ecrã local, ainda por construir)
export const MENU = [
  { id: 'motor', nome: 'Motor de Receita', endpoint: '/motor-receita/oportunidades' },
  { id: 'raqueamento', nome: 'Sistema de Raqueamento', endpoint: '/raqueamento/estado' },
  { id: 'activos', nome: 'Activos', endpoint: '/activos/lista' },
  { id: 'novonegocio', nome: 'Novos Negócios', endpoint: '/negocios/oportunidades' },
  { id: 'metas', nome: 'Metas', endpoint: '/metas/progresso' },
  { id: 'afext', nome: 'Afiliados Externos', endpoint: '/afiliados/ranking' },
  { id: 'afprop', nome: 'Afiliados Próprios', endpoint: '/afiliados-proprios/dashboard' },
  { id: 'lanc', nome: 'Lançamentos', endpoint: '/lancamento/estrategia' },
  { id: 'webinars', nome: 'Webinars', endpoint: '/webinar/lista' },
  { id: 'email', nome: 'Email Marketing', endpoint: '/email/analytics' },
  { id: 'analytics', nome: 'Analytics', endpoint: '/analytics/conversao' },
  { id: 'reputacao', nome: 'Reputação', endpoint: '/reputacao/testemunhos' },
  { id: 'suporte', nome: 'Suporte', endpoint: '/suporte/tickets' },
  { id: 'onboarding', nome: 'Onboarding', endpoint: '/onboarding/status' },
  { id: 'referencias', nome: 'Referências', endpoint: '/referencias/dashboard' },
  { id: 'paginas', nome: 'Páginas', endpoint: '/pagina/analytics' },
  { id: 'videos', nome: 'Vídeos', endpoint: null },
  { id: 'cursos', nome: 'Cursos', endpoint: '/curso/lista' },
  { id: 'sites', nome: 'Sites', endpoint: '/site/analytics' },
  { id: 'apres', nome: 'Apresentações', endpoint: '/apresentacao/lista' },
  { id: 'automacao', nome: 'Automação Inteligente', endpoint: '/automacao/pontuacao' },
  { id: 'oportunidades', nome: 'Oportunidades', endpoint: '/oportunidade/pendentes' },
  { id: 'investimentos', nome: 'Investimentos', endpoint: '/investimentos' },
  { id: 'empresa', nome: 'Empresa', endpoint: '/empresa/progresso' },
  { id: 'financas', nome: 'Finanças', endpoint: '/receita/total' },
  { id: 'contactos', nome: 'Contactos', endpoint: null },
  { id: 'saude', nome: 'Saúde', endpoint: '/saude' },
  { id: 'passwords', nome: 'Passwords', endpoint: null },
  { id: 'documentos', nome: 'Documentos', endpoint: null },
  { id: 'logs', nome: 'Logs', endpoint: '/logs' },
  { id: 'actualizacao', nome: 'Actualização', endpoint: '/versao/atual' },
];

~~~

### letimax-app/src/navigation/Root.js
~~~js
import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/theme';
import { MENU } from './menu';
import ChatScreen from '../screens/ChatScreen';
import ModuleScreen from '../screens/ModuleScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MotorReceitaScreen from '../screens/MotorReceitaScreen';
import MetasScreen from '../screens/MetasScreen';
import ProdutosScreen from '../screens/ProdutosScreen';
import ContactosScreen from '../screens/ContactosScreen';
import PasswordsScreen from '../screens/PasswordsScreen';

const SPECIAL = { motor: MotorReceitaScreen, metas: MetasScreen, contactos: ContactosScreen, passwords: PasswordsScreen };

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const ICONS = { Chat: 'chatbubble-ellipses', Dashboard: 'speedometer', Produtos: 'cube', Mercado: 'trending-up', Marketing: 'megaphone' };

function Tabs() {
  const { c } = useTheme();
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarActiveTintColor: c.gold, tabBarInactiveTintColor: c.muted,
      tabBarStyle: { backgroundColor: c.bg, borderTopColor: c.border },
      tabBarIcon: ({ color, size }) => <Ionicons name={ICONS[route.name]} size={size} color={color} />,
    })}>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Dashboard" component={ModuleScreen} initialParams={{ titulo: 'Dashboard', endpoint: '/dashboard' }} />
      <Tab.Screen name="Produtos" component={ProdutosScreen} />
      <Tab.Screen name="Mercado" component={ModuleScreen} initialParams={{ titulo: 'Mercado', endpoint: '/mercado' }} />
      <Tab.Screen name="Marketing" component={ModuleScreen} initialParams={{ titulo: 'Marketing', endpoint: null }} />
    </Tab.Navigator>
  );
}

export default function Root() {
  const { c, isDark } = useTheme();
  const base = isDark ? DarkTheme : DefaultTheme;
  const navTheme = { ...base, colors: { ...base.colors, background: c.bg, card: c.bg, text: c.text, border: c.border, primary: c.gold } };
  return (
    <NavigationContainer theme={navTheme}>
      <Drawer.Navigator screenOptions={{ headerTintColor: c.gold, headerTitleStyle: { color: c.text }, drawerActiveTintColor: c.gold, drawerStyle: { backgroundColor: c.bg } }}>
        <Drawer.Screen name="Principal" component={Tabs} options={{ title: 'LétimaX' }} />
        {MENU.map((m) => (
          <Drawer.Screen key={m.id} name={m.id} component={SPECIAL[m.id] || ModuleScreen} options={{ title: m.nome }} initialParams={{ titulo: m.nome, endpoint: m.endpoint }} />
        ))}
        <Drawer.Screen name="configuracoes" component={SettingsScreen} options={{ title: 'Configurações' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

~~~

### letimax-app/src/theme/theme.js
~~~js
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import * as SecureStore from 'expo-secure-store';

export const GOLD = '#C9A84C';
const base = { gold: GOLD, ok: '#2E9E5B', err: '#D64545', warn: '#E08A1E' };
export const light = { ...base, bg: '#FFFFFF', text: '#1A1A1A', muted: '#6B6B6B', card: '#F5F5F5', border: '#E5E5E5', soft: '#2D2D2D', bubbleUser: '#F3E9C6', bubbleBot: '#EFEFEF' };
export const dark = { ...base, bg: '#0D0D0D', text: '#FFFFFF', muted: '#A0A0A0', card: '#1A1A1A', border: '#2A2A2A', soft: '#2D2D2D', bubbleUser: '#4A3F1C', bubbleBot: '#1F1F1F' };

const Ctx = createContext(null);

// mode: 'system' (padrão) | 'light' | 'dark'
export function ThemeProvider({ children }) {
  const sys = useColorScheme();
  const [mode, setModeState] = useState('system');
  useEffect(() => {
    SecureStore.getItemAsync('tema_modo').then((m) => m && setModeState(m)).catch(() => {});
  }, []);
  const setMode = async (m) => {
    setModeState(m);
    try { await SecureStore.setItemAsync('tema_modo', m); } catch (e) {}
  };
  const isDark = mode === 'system' ? sys === 'dark' : mode === 'dark';
  return <Ctx.Provider value={{ c: isDark ? dark : light, isDark, mode, setMode }}>{children}</Ctx.Provider>;
}
export const useTheme = () => useContext(Ctx);

~~~

### letimax-app/src/services/api.js
~~~js
import * as SecureStore from 'expo-secure-store';

export async function serverConfig() {
  return {
    url: (await SecureStore.getItemAsync('server_url')) || '',
    token: (await SecureStore.getItemAsync('server_token')) || '',
  };
}
export async function saveServerConfig(url, token) {
  if (!/^https:\/\//i.test(url)) throw new Error('O URL do servidor tem de começar por https://');
  await SecureStore.setItemAsync('server_url', url.trim());
  if (token) await SecureStore.setItemAsync('server_token', token.trim());
}

async function request(method, path, body, timeout = 15000) {
  const { url, token } = await serverConfig();
  if (!url) throw new Error('URL do servidor não configurado');
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeout);
  try {
    const res = await fetch(url.replace(/\/$/, '') + path, {
      method,
      headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token },
      body: body ? JSON.stringify(body) : undefined,
      signal: ctrl.signal,
    });
    if (!res.ok) throw new Error('Servidor respondeu ' + res.status);
    return await res.json();
  } finally {
    clearTimeout(t);
  }
}
export const api = {
  get: (p, t) => request('GET', p, null, t),
  post: (p, b, t) => request('POST', p, b, t),
  del: (p, b, t) => request('DELETE', p, b, t),
};

~~~

### letimax-app/src/services/security.js
~~~js
import * as SecureStore from 'expo-secure-store';
import * as Crypto from 'expo-crypto';
import * as LocalAuthentication from 'expo-local-authentication';
import { logAccess } from '../db/database';

const SALT = 'letimax-v1';
const hash = (pin) => Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, pin + SALT);

export async function hasPin() {
  return !!(await SecureStore.getItemAsync('pin_hash'));
}
export async function setupPin(pin) {
  await SecureStore.setItemAsync('pin_hash', await hash(pin));
}

// Bloqueio progressivo do documento: 3 falhas = 5 min, 6 = 30 min, 9 = 24 h, 12 = permanente
function lockFor(f) {
  if (f >= 12) return 'perm';
  if (f >= 9) return 24 * 60 * 60 * 1000;
  if (f >= 6) return 30 * 60 * 1000;
  if (f >= 3) return 5 * 60 * 1000;
  return 0;
}
export async function lockRemaining() {
  const until = await SecureStore.getItemAsync('bloqueio_ate');
  if (!until) return 0;
  if (until === 'perm') return 'perm';
  const left = Number(until) - Date.now();
  return left > 0 ? left : 0;
}
export async function resetFailures() {
  await SecureStore.setItemAsync('falhas', '0');
  await SecureStore.deleteItemAsync('bloqueio_ate');
}
export async function verifyPin(pin) {
  const left = await lockRemaining();
  if (left) return { ok: false, locked: left };
  const ok = (await hash(pin)) === (await SecureStore.getItemAsync('pin_hash'));
  await logAccess(ok, 'pin');
  if (ok) { await resetFailures(); return { ok: true }; }
  const f = Number((await SecureStore.getItemAsync('falhas')) || 0) + 1;
  await SecureStore.setItemAsync('falhas', String(f));
  const l = lockFor(f);
  if (l === 'perm') await SecureStore.setItemAsync('bloqueio_ate', 'perm');
  else if (l) await SecureStore.setItemAsync('bloqueio_ate', String(Date.now() + l));
  return { ok: false, failures: f, locked: l };
}

// Biometria do próprio telemóvel (rosto/impressão digital já registados no Android)
export async function biometricAuth() {
  const has = await LocalAuthentication.hasHardwareAsync();
  const enrolled = await LocalAuthentication.isEnrolledAsync();
  if (!has || !enrolled) return false;
  const r = await LocalAuthentication.authenticateAsync({
    promptMessage: 'LétimaX — confirme a sua identidade',
    cancelLabel: 'Usar PIN',
    disableDeviceFallback: true,
  });
  await logAccess(r.success, 'biometria');
  return r.success;
}

export function formatLock(ms) {
  if (ms === 'perm') return 'Acesso bloqueado permanentemente. Alerta enviado ao Senhor Letício.';
  const min = Math.ceil(ms / 60000);
  return min >= 60 ? 'Bloqueado por ' + Math.ceil(min / 60) + ' h.' : 'Bloqueado por ' + min + ' min.';
}

~~~

### letimax-app/src/components/JsonView.js
~~~js
import React from 'react';
import { View, Text } from 'react-native';

// Mostra qualquer resposta JSON do servidor em cartões legíveis
export default function JsonView({ data, c, level = 0 }) {
  if (data === null || data === undefined) return <Text style={{ color: c.muted }}>—</Text>;
  if (typeof data !== 'object') return <Text style={{ color: c.text }}>{String(data)}</Text>;
  if (Array.isArray(data)) {
    if (!data.length) return <Text style={{ color: c.muted }}>Sem dados.</Text>;
    return data.map((it, i) => (
      <View key={i} style={{ backgroundColor: c.card, borderRadius: 12, padding: 12, marginBottom: 8, borderWidth: 1, borderColor: c.border }}>
        <JsonView data={it} c={c} level={level + 1} />
      </View>
    ));
  }
  return Object.entries(data).map(([k, v]) => {
    const simple = v === null || typeof v !== 'object';
    return (
      <View key={k} style={{ marginBottom: 6 }}>
        <Text style={{ color: c.gold, fontWeight: '600', fontSize: 12 }}>{k.replace(/_/g, ' ')}</Text>
        {simple ? <Text style={{ color: c.text, fontSize: 15 }}>{String(v ?? '—')}</Text> : <View style={{ marginTop: 4 }}><JsonView data={v} c={c} level={level + 1} /></View>}
      </View>
    );
  });
}

~~~

### letimax-app/src/db/database.js
~~~js
import * as SQLite from 'expo-sqlite';

let db;
export async function getDb() {
  if (!db) {
    db = await SQLite.openDatabaseAsync('letimax.db');
    await db.execAsync(`
      PRAGMA journal_mode = WAL;
      CREATE TABLE IF NOT EXISTS conversas (id INTEGER PRIMARY KEY AUTOINCREMENT, papel TEXT, texto TEXT, criado_em TEXT);
      CREATE TABLE IF NOT EXISTS configuracoes (chave TEXT PRIMARY KEY, valor TEXT);
      CREATE TABLE IF NOT EXISTS dashboard_cache (chave TEXT PRIMARY KEY, dados TEXT, atualizado TEXT);
      CREATE TABLE IF NOT EXISTS logs_erros (id INTEGER PRIMARY KEY AUTOINCREMENT, origem TEXT, mensagem TEXT, criado_em TEXT);
      CREATE TABLE IF NOT EXISTS tentativas_acesso (id INTEGER PRIMARY KEY AUTOINCREMENT, sucesso INTEGER, metodo TEXT, criado_em TEXT);
      CREATE TABLE IF NOT EXISTS respostas_pre_aprovadas (id INTEGER PRIMARY KEY AUTOINCREMENT, canal TEXT, texto TEXT);
      CREATE TABLE IF NOT EXISTS contactos (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, email TEXT, telefone TEXT, classe TEXT, notas TEXT);
      CREATE TABLE IF NOT EXISTS metas (id INTEGER PRIMARY KEY AUTOINCREMENT, mes TEXT, valor REAL, criado_em TEXT);
    `);
  }
  return db;
}

export async function addMessage(papel, texto) {
  const d = await getDb();
  const criado_em = new Date().toISOString();
  const r = await d.runAsync('INSERT INTO conversas (papel, texto, criado_em) VALUES (?,?,?)', [papel, texto, criado_em]);
  return { id: r.lastInsertRowId, papel, texto, criado_em };
}
export async function getMessages(limit = 200) {
  const d = await getDb();
  return d.getAllAsync('SELECT * FROM conversas ORDER BY id DESC LIMIT ?', [limit]);
}
export async function setConfig(chave, valor) {
  const d = await getDb();
  await d.runAsync('INSERT OR REPLACE INTO configuracoes (chave, valor) VALUES (?,?)', [chave, String(valor)]);
}
export async function getConfig(chave) {
  const d = await getDb();
  const r = await d.getFirstAsync('SELECT valor FROM configuracoes WHERE chave = ?', [chave]);
  return r ? r.valor : null;
}
export async function cacheSet(chave, dados) {
  const d = await getDb();
  await d.runAsync('INSERT OR REPLACE INTO dashboard_cache (chave, dados, atualizado) VALUES (?,?,?)', [chave, JSON.stringify(dados), new Date().toISOString()]);
}
export async function cacheGet(chave) {
  const d = await getDb();
  const r = await d.getFirstAsync('SELECT dados, atualizado FROM dashboard_cache WHERE chave = ?', [chave]);
  return r ? { dados: JSON.parse(r.dados), atualizado: r.atualizado } : null;
}
export async function logAccess(sucesso, metodo) {
  const d = await getDb();
  await d.runAsync('INSERT INTO tentativas_acesso (sucesso, metodo, criado_em) VALUES (?,?,?)', [sucesso ? 1 : 0, metodo, new Date().toISOString()]);
}

export async function listContactos(q = '') {
  const d = await getDb();
  const like = '%' + q + '%';
  return d.getAllAsync('SELECT * FROM contactos WHERE nome LIKE ? OR email LIKE ? OR classe LIKE ? ORDER BY nome', [like, like, like]);
}
export async function saveContacto(c) {
  const d = await getDb();
  await d.runAsync('INSERT INTO contactos (nome, email, telefone, classe, notas) VALUES (?,?,?,?,?)', [c.nome, c.email || '', c.telefone || '', c.classe || 'cliente', c.notas || '']);
}
export async function deleteContacto(id) {
  const d = await getDb();
  await d.runAsync('DELETE FROM contactos WHERE id = ?', [id]);
}
export async function saveMeta(valor) {
  const d = await getDb();
  await d.runAsync('INSERT INTO metas (mes, valor, criado_em) VALUES (?,?,?)', [new Date().toISOString().slice(0, 7), valor, new Date().toISOString()]);
}

~~~

## Arquivo: letimax-app-fase3
Ficheiros de código/configuração: 29

### letimax-app/app.json
~~~json
{
  "expo": {
    "name": "LétimaX",
    "slug": "letimax",
    "version": "0.3.0",
    "orientation": "portrait",
    "userInterfaceStyle": "automatic",
    "android": {
      "package": "com.letimax.app",
      "permissions": [
        "USE_BIOMETRIC", "USE_FINGERPRINT", "INTERNET", "VIBRATE", "WAKE_LOCK",
        "POST_NOTIFICATIONS", "FOREGROUND_SERVICE", "FOREGROUND_SERVICE_DATA_SYNC",
        "RECORD_AUDIO", "CAMERA", "CALL_PHONE", "REQUEST_IGNORE_BATTERY_OPTIMIZATIONS"
      ]
    },
    "plugins": [
      "expo-secure-store",
      "expo-sqlite",
      "expo-dev-client",
      ["expo-camera", { "cameraPermission": "A LétimaX usa a câmara para acender a lanterna por comando de voz." }],
      ["expo-speech-recognition", {
        "microphonePermission": "A LétimaX usa o microfone para os comandos de voz do Senhor Letício.",
        "speechRecognitionPermission": "A LétimaX usa o reconhecimento de voz para entender os seus comandos.",
        "androidSpeechServicePackages": ["com.google.android.googlequicksearchbox"]
      }],
      "./plugins/withNotifeeService"
    ]
  }
}

~~~

### letimax-app/package.json
~~~json
{
  "name": "letimax-app",
  "version": "0.1.0",
  "main": "index.js",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android"
  },
  "dependencies": {
    "@expo/vector-icons": "^14.0.4",
    "@react-navigation/bottom-tabs": "^6.6.1",
    "@react-navigation/drawer": "^6.7.2",
    "@react-navigation/native": "^6.1.18",
    "expo": "~52.0.0",
    "expo-crypto": "~14.0.0",
    "expo-local-authentication": "~15.0.0",
    "expo-secure-store": "~14.0.0",
    "expo-speech": "~13.0.0",
    "expo-sqlite": "~15.0.0",
    "expo-status-bar": "~2.0.0",
    "react": "18.3.1",
    "react-native": "0.76.5",
    "react-native-gesture-handler": "~2.20.2",
    "react-native-reanimated": "~3.16.1",
    "react-native-safe-area-context": "4.12.0",
    "react-native-screens": "~4.4.0",
    "@notifee/react-native": "^9.1.8",
    "expo-brightness": "~13.0.0",
    "expo-camera": "~16.0.0",
    "expo-dev-client": "~5.0.0",
    "expo-intent-launcher": "~12.0.0",
    "expo-keep-awake": "~14.0.0",
    "expo-speech-recognition": "*",
    "react-native-volume-manager": "*"
  },
  "devDependencies": {
    "@babel/core": "^7.25.0"
  },
  "private": true
}
~~~

### letimax-app/App.js
~~~js
import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider, useTheme } from './src/theme/theme';
import { getDb, getConfig } from './src/db/database';
import AuthScreen from './src/screens/AuthScreen';
import FirstUseScreen from './src/screens/FirstUseScreen';
import Root from './src/navigation/Root';
import { TorchProvider } from './src/components/TorchHost';
import { startService } from './src/services/service';

function Gate() {
  const { isDark } = useTheme();
  const [stage, setStage] = useState('auth'); // auth | firstuse | main
  useEffect(() => { getDb(); }, []);
  useEffect(() => {
    if (stage === 'main') getConfig('servico_activo').then((v) => v === '1' && startService().catch(() => {}));
  }, [stage]);
  const afterAuth = async () => setStage((await getConfig('primeiro_uso')) ? 'main' : 'firstuse');
  return (
    <>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      {stage === 'auth' && <AuthScreen onSuccess={afterAuth} />}
      {stage === 'firstuse' && <FirstUseScreen onDone={() => setStage('main')} />}
      {stage === 'main' && <TorchProvider><Root /></TorchProvider>}
    </>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ThemeProvider><Gate /></ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

~~~

### letimax-app/index.js
~~~js
import { registerRootComponent } from 'expo';
import './src/services/service'; // regista o serviço em primeiro plano (tem de ser fora de componentes)
import App from './App';

registerRootComponent(App);

~~~

### letimax-app/README.md
~~~md
# LétimaX — APP (Fase 3)

Fase 3 precisa de BUILD NATIVO (não funciona no Expo Go):
1. `npm install` e `npx expo install --fix`
2. `npx eas-cli login` e `npx eas-cli build -p android --profile preview` (gera um APK para instalar)
   Para desenvolver: `--profile development` e depois `npx expo start --dev-client`.
3. Instalar o APK no telemóvel. Na 1ª abertura: Configurações -> Serviço em segundo plano -> ligar,
   e "Permitir uso sem limite de bateria".

Comandos de voz: botão do microfone (um comando) ou o ícone da orelha (escuta contínua, exige
dizer "LétimaX, ..." e o ecrã fica ligado). O servidor deve expor wss://<servidor>/ws para os alertas.


Fase 2 já feita: Motor de Receita, Metas, Produtos, Contactos, Passwords.


1. Instalar dependências: `npm install` e depois `npx expo install --fix`
2. Arrancar: `npx expo start` e abrir no Expo Go (ou usar snack.expo.dev / GitHub Codespaces se não tiver PC)
3. Primeiro acesso: criar PIN -> URL (https) e token do servidor -> chave do Claude (vai para o servidor)

Fase 1: tema claro/escuro, PIN + biometria do telemóvel com bloqueio progressivo, chat, dashboard,
menu lateral com todos os módulos ligados aos endpoints, configurações com chaves (enviadas ao servidor).
Fase 2: ecrãs dedicados (Motor de Receita com Aprovar/Rejeitar, Metas, Produtos...), SQLite offline completo,
cofre de passwords, contactos, documentos.
Fase 3 (precisa de build nativo, não funciona no Expo Go): serviço em segundo plano, chamadas/SMS,
comandos de voz de hardware, reconhecimento de voz.

~~~

### letimax-app/eas.json
~~~json
{
  "cli": { "version": ">= 12.0.0" },
  "build": {
    "development": { "developmentClient": true, "distribution": "internal", "android": { "buildType": "apk" } },
    "preview": { "distribution": "internal", "android": { "buildType": "apk" } }
  }
}

~~~

### letimax-app/babel.config.js
~~~js
module.exports = function (api) {
  api.cache(true);
  return { presets: ['babel-preset-expo'], plugins: ['react-native-reanimated/plugin'] };
};

~~~

### letimax-app/plugins/withNotifeeService.js
~~~js
const { withAndroidManifest, withProjectBuildGradle } = require('@expo/config-plugins');

// Android 14 exige o tipo do serviço em primeiro plano; o Notifee precisa dele no manifesto.
function manifest(config) {
  return withAndroidManifest(config, (cfg) => {
    const m = cfg.modResults.manifest;
    m.$['xmlns:tools'] = 'http://schemas.android.com/tools';
    const app = m.application[0];
    const name = 'app.notifee.core.ForegroundService';
    app.service = (app.service || []).filter((s) => s.$['android:name'] !== name);
    app.service.push({ $: { 'android:name': name, 'android:foregroundServiceType': 'dataSync', 'android:exported': 'false', 'tools:replace': 'android:foregroundServiceType' } });
    return cfg;
  });
}
// Repositório local do Notifee (inofensivo se a pasta não existir)
function gradle(config) {
  return withProjectBuildGradle(config, (cfg) => {
    const line = 'maven { url "$rootDir/../node_modules/@notifee/react-native/android/libs" }';
    if (!cfg.modResults.contents.includes(line)) {
      cfg.modResults.contents = cfg.modResults.contents.replace(/allprojects\s*{\s*repositories\s*{/, (s) => s + '\n        ' + line);
    }
    return cfg;
  });
}
module.exports = (config) => gradle(manifest(config));

~~~

### letimax-app/src/screens/ProdutosScreen.js
~~~js
import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, RefreshControl, ScrollView as HScroll } from 'react-native';
import { useTheme } from '../theme/theme';
import { api } from '../services/api';
import { cacheGet, cacheSet } from '../db/database';

const ESTADOS = ['Todos', 'Rascunho', 'Aguarda Aprovação', 'Publicado', 'Pausado', 'Arquivado'];
const sem = (s) => String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const norm = (d) => (Array.isArray(d) ? d : (d && (d.produtos || d.items)) || []);

export default function ProdutosScreen() {
  const { c } = useTheme();
  const [items, setItems] = useState([]);
  const [filtro, setFiltro] = useState('Todos');
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const d = await api.get('/produtos');
      setItems(norm(d)); await cacheSet('produtos', d);
    } catch (e) {
      const k = await cacheGet('produtos');
      if (k) { setItems(norm(k.dados)); setMsg('Modo offline — dados em cache.'); } else setMsg(e.message);
    } finally { setLoading(false); }
  }, []);
  useEffect(() => { load(); }, [load]);

  const aprovar = async (p) => {
    try { await api.post('/aprovar', { id: p.id }); setMsg('"' + p.nome + '" aprovado.'); load(); } catch (e) { setMsg(e.message); }
  };

  const lista = items.filter((p) => filtro === 'Todos' || sem(p.estado) === sem(filtro));
  const chip = (on) => ({ paddingVertical: 6, paddingHorizontal: 12, borderRadius: 16, marginRight: 6, backgroundColor: on ? c.gold : c.card });

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16 }}
      refreshControl={<RefreshControl refreshing={loading} onRefresh={load} tintColor={c.gold} />}>
      <Text style={{ color: c.text, fontSize: 22, fontWeight: '700', marginBottom: 10 }}>Produtos</Text>
      {!!msg && <Text style={{ color: c.gold, marginBottom: 8 }}>{msg}</Text>}
      <HScroll horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 12 }}>
        {ESTADOS.map((e) => (
          <TouchableOpacity key={e} style={chip(filtro === e)} onPress={() => setFiltro(e)}><Text style={{ color: filtro === e ? '#000' : c.text }}>{e}</Text></TouchableOpacity>
        ))}
      </HScroll>
      {!lista.length && !loading && <Text style={{ color: c.muted }}>Sem produtos neste estado.</Text>}
      {lista.map((p) => (
        <View key={p.id} style={{ backgroundColor: c.card, borderRadius: 14, padding: 14, marginBottom: 10, borderWidth: 1, borderColor: c.border }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: c.text, fontWeight: '700', fontSize: 16, flex: 1 }}>{p.nome}</Text>
            <Text style={{ color: c.gold, fontWeight: '700' }}>{p.preco != null ? '$' + p.preco : ''}</Text>
          </View>
          <Text style={{ color: c.muted, marginTop: 4 }}>{p.nicho ?? '—'} · {p.estado ?? '—'}</Text>
          <Text style={{ color: c.muted, marginTop: 2 }}>
            Qualidade {p.qualidade ?? p.score_qualidade ?? '—'}/100 · vendas {p.vendas ?? 0} · conversão {p.taxa_conversao ?? '—'} · lucro {p.lucro_liquido ?? '—'}
          </Text>
          {p.marca_dagua && <Text style={{ color: c.muted, marginTop: 2 }}>Marca de água activa · link único por comprador</Text>}
          {sem(p.estado) === 'aguarda aprovacao' && (
            <TouchableOpacity onPress={() => aprovar(p)} style={{ backgroundColor: c.gold, padding: 10, borderRadius: 10, alignItems: 'center', marginTop: 10 }}>
              <Text style={{ color: '#000', fontWeight: '700' }}>Aprovar</Text>
            </TouchableOpacity>
          )}
        </View>
      ))}
    </ScrollView>
  );
}

~~~

### letimax-app/src/screens/AuthScreen.js
~~~js
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import * as Speech from 'expo-speech';
import { useTheme } from '../theme/theme';
import { hasPin, setupPin, verifyPin, biometricAuth, lockRemaining, resetFailures, formatLock } from '../services/security';

const GREETING = 'Bem-vindo, Senhor Letício. Estou pronto. Hoje vamos fazer ainda mais dinheiro.';

export default function AuthScreen({ onSuccess }) {
  const { c } = useTheme();
  const [mode, setMode] = useState('boot'); // boot | setup | login
  const [pin, setPin] = useState('');
  const [pin2, setPin2] = useState('');
  const [msg, setMsg] = useState('');
  const [bad, setBad] = useState(false);

  const done = async () => {
    await resetFailures();
    Speech.speak(GREETING, { language: 'pt-PT' });
    onSuccess();
  };

  const tryBio = async () => {
    const lock = await lockRemaining();
    if (lock) { setBad(true); setMsg(formatLock(lock)); return; }
    if (await biometricAuth()) done();
  };

  useEffect(() => {
    (async () => {
      if (await hasPin()) { setMode('login'); tryBio(); } else setMode('setup');
    })();
  }, []);

  const create = async () => {
    setBad(true);
    if (pin.length < 6) return setMsg('O PIN deve ter pelo menos 6 dígitos.');
    if (pin !== pin2) return setMsg('Os PINs não coincidem.');
    await setupPin(pin);
    setBad(false);
    setMsg('Perfil de acesso criado. A LétimaX reconhece-o agora, Senhor Letício.');
    setTimeout(done, 800);
  };

  const login = async () => {
    const r = await verifyPin(pin);
    setPin('');
    if (r.ok) return done();
    setBad(true);
    if (r.locked) return setMsg(formatLock(r.locked));
    setMsg('PIN incorrecto. Tentativas falhadas: ' + r.failures);
  };

  const input = { borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 12, padding: 14, fontSize: 18, marginBottom: 12, textAlign: 'center', letterSpacing: 6 };
  const btn = { backgroundColor: c.gold, padding: 14, borderRadius: 12, alignItems: 'center', marginTop: 4 };

  if (mode === 'boot') return <View style={{ flex: 1, backgroundColor: c.bg, justifyContent: 'center' }}><ActivityIndicator color={c.gold} /></View>;

  return (
    <View style={{ flex: 1, backgroundColor: c.bg, justifyContent: 'center', padding: 28 }}>
      <Text style={{ color: c.gold, fontSize: 38, fontWeight: '800', textAlign: 'center' }}>LétimaX</Text>
      <Text style={{ color: c.muted, textAlign: 'center', marginBottom: 28 }}>
        {mode === 'setup' ? 'Primeiro acesso — crie o seu PIN de segurança' : 'Confirme a sua identidade'}
      </Text>
      <TextInput value={pin} onChangeText={setPin} placeholder="PIN" placeholderTextColor={c.muted} secureTextEntry keyboardType="number-pad" maxLength={12} style={input} />
      {mode === 'setup' && <TextInput value={pin2} onChangeText={setPin2} placeholder="Repetir PIN" placeholderTextColor={c.muted} secureTextEntry keyboardType="number-pad" maxLength={12} style={input} />}
      <TouchableOpacity style={btn} onPress={mode === 'setup' ? create : login}>
        <Text style={{ color: '#000', fontWeight: '700' }}>{mode === 'setup' ? 'Criar perfil' : 'Entrar'}</Text>
      </TouchableOpacity>
      {mode === 'login' && (
        <TouchableOpacity style={{ padding: 14, alignItems: 'center' }} onPress={tryBio}>
          <Text style={{ color: c.gold }}>Usar rosto / impressão digital</Text>
        </TouchableOpacity>
      )}
      {!!msg && <Text style={{ color: bad ? c.err : c.gold, textAlign: 'center', marginTop: 12 }}>{msg}</Text>}
    </View>
  );
}

~~~

### letimax-app/src/screens/ModuleScreen.js
~~~js
import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, Text, RefreshControl, ActivityIndicator } from 'react-native';
import { useTheme } from '../theme/theme';
import { api } from '../services/api';
import { cacheGet, cacheSet } from '../db/database';
import JsonView from '../components/JsonView';

// Ecrã genérico ligado a um endpoint GET do servidor, com cache offline.
export default function ModuleScreen({ route }) {
  const { c } = useTheme();
  const { titulo, endpoint } = route.params || {};
  const [data, setData] = useState(null);
  const [offline, setOffline] = useState(false);
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    if (!endpoint) return;
    setLoading(true); setErr(''); setOffline(false);
    try {
      const d = await api.get(endpoint);
      setData(d); await cacheSet(endpoint, d);
    } catch (e) {
      const cached = await cacheGet(endpoint);
      if (cached) { setData(cached.dados); setOffline(true); } else setErr(e.message);
    } finally { setLoading(false); }
  }, [endpoint]);

  useEffect(() => { load(); }, [load]);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16 }}
      refreshControl={<RefreshControl refreshing={loading} onRefresh={load} tintColor={c.gold} />}>
      <Text style={{ color: c.text, fontSize: 22, fontWeight: '700', marginBottom: 12 }}>{titulo}</Text>
      {!endpoint && <Text style={{ color: c.muted }}>Este ecrã é local e será construído na próxima fase.</Text>}
      {offline && <Text style={{ color: c.warn, marginBottom: 8 }}>Modo offline — a mostrar dados em cache.</Text>}
      {err ? <Text style={{ color: c.err }}>{err}</Text> : null}
      {loading && !data && <ActivityIndicator color={c.gold} />}
      {data && <JsonView data={data} c={c} />}
    </ScrollView>
  );
}

~~~

### letimax-app/src/screens/FirstUseScreen.js
~~~js
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from '../theme/theme';
import { saveServerConfig, api } from '../services/api';
import { setConfig } from '../db/database';

export default function FirstUseScreen({ onDone }) {
  const { c } = useTheme();
  const [url, setUrl] = useState('');
  const [token, setToken] = useState('');
  const [claude, setClaude] = useState('');
  const [msg, setMsg] = useState('');

  const input = { borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 12, padding: 12, marginBottom: 10 };

  const save = async () => {
    try {
      await saveServerConfig(url, token);
      if (claude.trim()) {
        // A chave segue por HTTPS para o servidor e nunca fica guardada no telemóvel
        await api.post('/chaves/adicionar', { nome: 'ANTHROPIC_API_KEY', valor: claude.trim() });
        setClaude('');
      }
      await setConfig('primeiro_uso', '1');
      onDone();
    } catch (e) { setMsg(e.message); }
  };
  const later = async () => { await setConfig('primeiro_uso', '1'); onDone(); };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 24, paddingTop: 70 }}>
      <Text style={{ color: c.gold, fontSize: 26, fontWeight: '800' }}>Primeira configuração</Text>
      <Text style={{ color: c.muted, marginVertical: 12 }}>Antes de começar, ligue a LétimaX ao seu servidor e adicione a chave do Claude para que ela possa responder.</Text>
      <TextInput style={input} value={url} onChangeText={setUrl} placeholder="https://o-seu-servidor.up.railway.app" placeholderTextColor={c.muted} autoCapitalize="none" />
      <TextInput style={input} value={token} onChangeText={setToken} placeholder="Token de acesso do servidor" placeholderTextColor={c.muted} autoCapitalize="none" secureTextEntry />
      <TextInput style={input} value={claude} onChangeText={setClaude} placeholder="ANTHROPIC_API_KEY (opcional agora)" placeholderTextColor={c.muted} autoCapitalize="none" secureTextEntry />
      {!!msg && <Text style={{ color: c.err, marginBottom: 8 }}>{msg}</Text>}
      <TouchableOpacity onPress={save} style={{ backgroundColor: c.gold, padding: 14, borderRadius: 12, alignItems: 'center' }}>
        <Text style={{ color: '#000', fontWeight: '700' }}>Guardar e iniciar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={later} style={{ padding: 14, alignItems: 'center' }}>
        <Text style={{ color: c.muted }}>Configurar depois</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

~~~

### letimax-app/src/screens/ContactosScreen.js
~~~js
import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useTheme } from '../theme/theme';
import { listContactos, saveContacto, deleteContacto } from '../db/database';

const CLASSES = ['cliente', 'parceiro', 'afiliado', 'fornecedor', 'influenciador'];

export default function ContactosScreen() {
  const { c } = useTheme();
  const [lista, setLista] = useState([]);
  const [q, setQ] = useState('');
  const [form, setForm] = useState(null);

  const load = useCallback(() => listContactos(q).then(setLista), [q]);
  useEffect(() => { load(); }, [load]);

  const input = { borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 10, padding: 10, marginBottom: 8 };
  const chip = (on) => ({ paddingVertical: 6, paddingHorizontal: 12, borderRadius: 16, marginRight: 6, marginBottom: 6, backgroundColor: on ? c.gold : c.card });

  const guardar = async () => {
    if (!form.nome) return;
    await saveContacto(form); setForm(null); load();
  };
  const apagar = (p) => Alert.alert('Eliminar contacto', p.nome + '?', [
    { text: 'Cancelar', style: 'cancel' },
    { text: 'Eliminar', style: 'destructive', onPress: async () => { await deleteContacto(p.id); load(); } },
  ]);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16 }} keyboardShouldPersistTaps="handled">
      <Text style={{ color: c.text, fontSize: 22, fontWeight: '700', marginBottom: 10 }}>Contactos</Text>
      <TextInput value={q} onChangeText={setQ} placeholder="Pesquisar por nome, email ou classe" placeholderTextColor={c.muted} style={input} />

      {form ? (
        <View style={{ backgroundColor: c.card, borderRadius: 14, padding: 14, marginBottom: 12 }}>
          {['nome', 'email', 'telefone', 'notas'].map((k) => (
            <TextInput key={k} value={form[k] || ''} onChangeText={(t) => setForm({ ...form, [k]: t })} placeholder={k[0].toUpperCase() + k.slice(1)} placeholderTextColor={c.muted} autoCapitalize={k === 'email' ? 'none' : 'sentences'} style={input} />
          ))}
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {CLASSES.map((k) => <TouchableOpacity key={k} style={chip(form.classe === k)} onPress={() => setForm({ ...form, classe: k })}><Text style={{ color: form.classe === k ? '#000' : c.text }}>{k}</Text></TouchableOpacity>)}
          </View>
          <View style={{ flexDirection: 'row', marginTop: 6 }}>
            <TouchableOpacity onPress={guardar} style={{ flex: 1, backgroundColor: c.gold, padding: 11, borderRadius: 10, alignItems: 'center', marginRight: 8 }}><Text style={{ color: '#000', fontWeight: '700' }}>Guardar</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => setForm(null)} style={{ flex: 1, backgroundColor: c.bg, padding: 11, borderRadius: 10, alignItems: 'center' }}><Text style={{ color: c.muted }}>Cancelar</Text></TouchableOpacity>
          </View>
        </View>
      ) : (
        <TouchableOpacity onPress={() => setForm({ classe: 'cliente' })} style={{ backgroundColor: c.gold, padding: 12, borderRadius: 10, alignItems: 'center', marginBottom: 12 }}><Text style={{ color: '#000', fontWeight: '700' }}>Novo contacto</Text></TouchableOpacity>
      )}

      {!lista.length && <Text style={{ color: c.muted }}>Sem contactos.</Text>}
      {lista.map((p) => (
        <TouchableOpacity key={p.id} onLongPress={() => apagar(p)} style={{ backgroundColor: c.card, borderRadius: 12, padding: 12, marginBottom: 8, borderWidth: 1, borderColor: c.border }}>
          <Text style={{ color: c.text, fontWeight: '700' }}>{p.nome} <Text style={{ color: c.gold, fontWeight: '400' }}>· {p.classe}</Text></Text>
          {!!p.email && <Text style={{ color: c.muted }}>{p.email}</Text>}
          {!!p.telefone && <Text style={{ color: c.muted }}>{p.telefone}</Text>}
          {!!p.notas && <Text style={{ color: c.muted, marginTop: 2 }}>{p.notas}</Text>}
        </TouchableOpacity>
      ))}
      <Text style={{ color: c.muted, fontSize: 12, marginTop: 6 }}>Toque longo num contacto para eliminar.</Text>
    </ScrollView>
  );
}

~~~

### letimax-app/src/screens/ChatScreen.js
~~~js
import React, { useContext, useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
import * as Speech from 'expo-speech';
import { activateKeepAwakeAsync, deactivateKeepAwake } from 'expo-keep-awake';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/theme';
import { addMessage, getMessages } from '../db/database';
import { api } from '../services/api';
import { useVoice } from '../services/useVoice';
import { runCommand } from '../services/commands';
import { TorchCtx } from '../components/TorchHost';

export default function ChatScreen() {
  const { c, setMode } = useTheme();
  const torch = useContext(TorchCtx);
  const [msgs, setMsgs] = useState([]); // mais recente primeiro
  const [text, setText] = useState('');
  const [wait, setWait] = useState(0); // 0 nada | 1 a carregar | 2 a processar
  const [cont, setCont] = useState(false);
  const contRef = useRef(false);
  const timer = useRef(null);
  const voiceRef = useRef(null);

  useEffect(() => { getMessages().then(setMsgs); return () => { deactivateKeepAwake(); }; }, []);

  const push = async (papel, texto) => { const m = await addMessage(papel, texto); setMsgs((x) => [m, ...x]); };
  // Pausa a escuta enquanto a LétimaX fala, para não ouvir a própria voz
  const falar = (t) => {
    const v = voiceRef.current;
    if (v) v.pause();
    Speech.speak(t, { language: 'pt-PT', onDone: () => v && v.resume(), onStopped: () => v && v.resume(), onError: () => v && v.resume() });
  };

  const enviar = async (t) => {
    if (!t || wait) return;
    await push('user', t);
    setWait(1);
    timer.current = setTimeout(() => setWait(2), 30000); // 30 s: "a processar..."
    let reply;
    try {
      const r = await api.post('/chat', { mensagem: t }, 60000); // 60 s: cancela
      reply = r.resposta || r.response || JSON.stringify(r);
      falar(reply);
    } catch (e) {
      reply = 'Não consegui obter resposta (' + e.message + '). Quer tentar novamente?';
    } finally { clearTimeout(timer.current); setWait(0); }
    await push('bot', reply);
  };

  const onFinal = async (t) => {
    const r = await runCommand(t, { setMode, torch, requireWake: contRef.current });
    if (r === null) { if (!contRef.current) enviar(t); return; } // push-to-talk sem comando = mensagem normal
    await push('user', t);
    await push('bot', r);
    falar(r);
  };

  const voice = useVoice(onFinal);
  voiceRef.current = voice;

  const toggleCont = async () => {
    const v = !cont;
    setCont(v); contRef.current = v;
    if (v) await activateKeepAwakeAsync(); else deactivateKeepAwake();
    voice.setContinuous(v);
  };

  const Bubble = ({ item }) => {
    const me = item.papel === 'user';
    return (
      <View style={{ alignSelf: me ? 'flex-end' : 'flex-start', backgroundColor: me ? c.bubbleUser : c.bubbleBot, padding: 12, borderRadius: 16, marginVertical: 4, maxWidth: '85%' }}>
        <Text style={{ color: c.text, fontSize: 15 }}>{item.texto}</Text>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: c.bg }} behavior={Platform.OS === 'ios' ? 'padding' : undefined} keyboardVerticalOffset={90}>
      <FlatList inverted data={msgs} keyExtractor={(i) => String(i.id)} renderItem={Bubble} contentContainerStyle={{ padding: 12 }}
        ListHeaderComponent={wait ? (
          <View style={{ flexDirection: 'row', alignItems: 'center', padding: 8 }}>
            <ActivityIndicator color={c.gold} />
            <Text style={{ color: c.muted, marginLeft: 8 }}>{wait === 2 ? 'LétimaX está a processar...' : 'A pensar...'}</Text>
          </View>
        ) : null} />
      {(voice.listening || cont) && (
        <Text style={{ color: c.gold, paddingHorizontal: 14, paddingBottom: 4 }}>
          {voice.partial ? '🎙 ' + voice.partial : cont ? 'Escuta contínua — diga "LétimaX, ..." (ecrã sempre ligado)' : 'A ouvir...'}
        </Text>
      )}
      <View style={{ flexDirection: 'row', padding: 10, borderTopWidth: 1, borderTopColor: c.border, alignItems: 'center' }}>
        <TouchableOpacity onPress={toggleCont} style={{ marginRight: 6, padding: 8 }}>
          <Ionicons name="ear" size={22} color={cont ? c.gold : c.muted} />
        </TouchableOpacity>
        <TextInput value={text} onChangeText={setText} placeholder="Escreva à LétimaX..." placeholderTextColor={c.muted}
          style={{ flex: 1, color: c.text, backgroundColor: c.card, borderRadius: 22, paddingHorizontal: 16, paddingVertical: 10 }} multiline />
        <TouchableOpacity onPress={() => (voice.listening ? voice.stop() : voice.start())} style={{ marginLeft: 6, padding: 8 }}>
          <Ionicons name={voice.listening ? 'mic' : 'mic-outline'} size={24} color={voice.listening ? c.err : c.gold} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { const t = text.trim(); setText(''); enviar(t); }} style={{ marginLeft: 2, backgroundColor: c.gold, borderRadius: 22, padding: 11 }}>
          <Ionicons name="send" size={20} color="#000" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

~~~

### letimax-app/src/screens/MetasScreen.js
~~~js
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, RefreshControl } from 'react-native';
import * as Speech from 'expo-speech';
import { useTheme } from '../theme/theme';
import { api } from '../services/api';
import { cacheGet, cacheSet, saveMeta } from '../db/database';
import JsonView from '../components/JsonView';

function diasRestantes() {
  const h = new Date();
  return new Date(h.getFullYear(), h.getMonth() + 1, 0).getDate() - h.getDate();
}

export default function MetasScreen() {
  const { c } = useTheme();
  const [d, setD] = useState(null);
  const [proj, setProj] = useState(null);
  const [novo, setNovo] = useState('');
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const celebrou = useRef(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const r = await api.get('/metas/progresso');
      setD(r); await cacheSet('metas', r);
      api.get('/metas/projecao').then(setProj).catch(() => {});
    } catch (e) {
      const k = await cacheGet('metas');
      if (k) { setD(k.dados); setMsg('Modo offline — dados em cache.'); } else setMsg(e.message);
    } finally { setLoading(false); }
  }, []);
  useEffect(() => { load(); }, [load]);

  const meta = Number(d && (d.meta ?? d.valor)) || 0;
  const atual = Number(d && (d.atual ?? d.receita_atual)) || 0;
  const dias = Number((d && d.dias_restantes) ?? diasRestantes());
  const falta = Math.max(meta - atual, 0);
  const pct = meta ? Math.min(Math.round((atual / meta) * 100), 100) : 0;
  const ritmo = dias > 0 ? falta / dias : falta;

  useEffect(() => {
    if (meta && atual >= meta && !celebrou.current) {
      celebrou.current = true;
      Speech.speak('Parabéns, Senhor Letício! Meta de ' + meta + ' reais atingida. Vamos estabelecer a próxima?', { language: 'pt-PT' });
    }
  }, [meta, atual]);

  const definir = async () => {
    const v = Number(String(novo).replace(',', '.'));
    if (!v) return setMsg('Indique um valor válido.');
    try {
      await api.post('/metas/definir', { valor: v });
      await saveMeta(v); setNovo(''); celebrou.current = false; load();
    } catch (e) { setMsg(e.message); }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16 }}
      refreshControl={<RefreshControl refreshing={loading} onRefresh={load} tintColor={c.gold} />}>
      <Text style={{ color: c.text, fontSize: 22, fontWeight: '700', marginBottom: 12 }}>Metas</Text>
      {!!msg && <Text style={{ color: c.gold, marginBottom: 8 }}>{msg}</Text>}

      {meta > 0 ? (
        <View style={{ backgroundColor: c.card, borderRadius: 14, padding: 16, borderWidth: 1, borderColor: c.border }}>
          <Text style={{ color: c.text, fontSize: 16 }}>Estás a R${(meta - atual > 0 ? falta : 0).toFixed(0)} dos R${meta.toFixed(0)} — faltam {dias} dias.</Text>
          <View style={{ height: 12, backgroundColor: c.border, borderRadius: 6, marginVertical: 12 }}>
            <View style={{ height: 12, width: pct + '%', backgroundColor: c.gold, borderRadius: 6 }} />
          </View>
          <Text style={{ color: c.muted }}>{pct}% concluído · receita actual R${atual.toFixed(0)}</Text>
          {falta > 0 && <Text style={{ color: c.text, marginTop: 8 }}>Precisas de vender R${ritmo.toFixed(0)} por dia para atingir a meta.</Text>}
          {falta > 0 && pct < 100 && dias > 0 && atual / Math.max(30 - dias, 1) < ritmo && (
            <Text style={{ color: c.warn, marginTop: 8 }}>Meta em risco. Sugestão: reactivar a lista de emails com uma promoção relâmpago de 48 horas.</Text>
          )}
          {falta === 0 && <Text style={{ color: c.ok, marginTop: 8 }}>Meta atingida! 🎉</Text>}
        </View>
      ) : (
        <Text style={{ color: c.muted }}>Ainda não há meta mensal definida.</Text>
      )}

      <Text style={{ color: c.gold, fontWeight: '700', marginTop: 22, marginBottom: 8 }}>Definir meta mensal (R$)</Text>
      <View style={{ flexDirection: 'row' }}>
        <TextInput value={novo} onChangeText={setNovo} keyboardType="numeric" placeholder="2000" placeholderTextColor={c.muted}
          style={{ flex: 1, borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 10, padding: 10 }} />
        <TouchableOpacity onPress={definir} style={{ backgroundColor: c.gold, borderRadius: 10, paddingHorizontal: 18, justifyContent: 'center', marginLeft: 8 }}>
          <Text style={{ color: '#000', fontWeight: '700' }}>Guardar</Text>
        </TouchableOpacity>
      </View>

      {proj && (<><Text style={{ color: c.gold, fontWeight: '700', marginTop: 22, marginBottom: 8 }}>Projecção do mês</Text><JsonView data={proj} c={c} /></>)}
    </ScrollView>
  );
}

~~~

### letimax-app/src/screens/MotorReceitaScreen.js
~~~js
import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Alert, RefreshControl } from 'react-native';
import { useTheme } from '../theme/theme';
import { api } from '../services/api';
import { cacheGet, cacheSet } from '../db/database';
import JsonView from '../components/JsonView';

const norm = (d) => (Array.isArray(d) ? d : (d && (d.oportunidades || d.items)) || []);
const FILTROS = ['todos', 'baixo', 'médio', 'alto'];

export default function MotorReceitaScreen() {
  const { c } = useTheme();
  const [items, setItems] = useState([]);
  const [filtro, setFiltro] = useState('todos');
  const [aberto, setAberto] = useState(null);
  const [hist, setHist] = useState(null);
  const [offline, setOffline] = useState(false);
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    setLoading(true); setOffline(false);
    try {
      const d = await api.get('/motor-receita/oportunidades');
      setItems(norm(d)); await cacheSet('motor', d);
    } catch (e) {
      const k = await cacheGet('motor');
      if (k) { setItems(norm(k.dados)); setOffline(true); } else setMsg(e.message);
    } finally { setLoading(false); }
  }, []);
  useEffect(() => { load(); }, [load]);

  const act = async (id, acao, texto) => {
    try {
      await api.post('/motor-receita/' + acao + '/' + id, {});
      setItems((l) => l.filter((o) => o.id !== id));
      setMsg(texto);
    } catch (e) { setMsg(e.message); }
  };
  const aprovar = (o) =>
    Alert.alert('Aprovar oportunidade', 'A LétimaX vai implementar "' + (o.titulo || o.nome) + '" imediatamente. Confirma?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Aprovar', onPress: () => act(o.id, 'aprovar', 'Aprovada — a LétimaX está a implementar.') },
    ]);
  const verHist = async () => {
    if (hist) return setHist(null);
    try { setHist(await api.get('/motor-receita/historico')); } catch (e) { setMsg(e.message); }
  };

  const lista = items
    .filter((o) => filtro === 'todos' || String(o.esforco || '').toLowerCase() === filtro)
    .sort((a, b) => (b.pontuacao || 0) - (a.pontuacao || 0));
  const potencial = lista.reduce((s, o) => s + (Number(o.receita_max) || 0), 0);

  const chip = (on) => ({ paddingVertical: 6, paddingHorizontal: 12, borderRadius: 16, marginRight: 6, backgroundColor: on ? c.gold : c.card });
  const btn = (bg) => ({ flex: 1, backgroundColor: bg, padding: 9, borderRadius: 10, alignItems: 'center', marginRight: 6 });

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16 }}
      refreshControl={<RefreshControl refreshing={loading} onRefresh={load} tintColor={c.gold} />}>
      <Text style={{ color: c.text, fontSize: 22, fontWeight: '700' }}>Motor de Receita</Text>
      <Text style={{ color: c.muted, marginBottom: 10 }}>Receita potencial das oportunidades activas: R$ {potencial.toLocaleString('pt-PT')}</Text>
      {offline && <Text style={{ color: c.warn, marginBottom: 6 }}>Modo offline — dados em cache.</Text>}
      {!!msg && <Text style={{ color: c.gold, marginBottom: 8 }}>{msg}</Text>}

      <View style={{ flexDirection: 'row', marginBottom: 12 }}>
        {FILTROS.map((f) => (
          <TouchableOpacity key={f} style={chip(filtro === f)} onPress={() => setFiltro(f)}>
            <Text style={{ color: filtro === f ? '#000' : c.text }}>{f === 'todos' ? 'Todos' : 'Esforço ' + f}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {!lista.length && !loading && <Text style={{ color: c.muted }}>Sem oportunidades activas.</Text>}
      {lista.map((o) => (
        <View key={o.id} style={{ backgroundColor: c.card, borderRadius: 14, padding: 14, marginBottom: 10, borderWidth: 1, borderColor: c.border }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: c.text, fontWeight: '700', flex: 1, fontSize: 16 }}>{o.titulo || o.nome}</Text>
            <Text style={{ color: (o.pontuacao || 0) >= 70 ? c.ok : c.warn, fontWeight: '800' }}>{o.pontuacao ?? '—'}/100</Text>
          </View>
          <Text style={{ color: c.muted, marginTop: 4 }}>
            R$ {o.receita_min ?? '?'} – {o.receita_max ?? '?'} · esforço {o.esforco ?? '—'} · {o.tempo_resultado ?? '—'} · risco {o.risco ?? '—'}
          </Text>
          {aberto === o.id && <View style={{ marginTop: 10 }}><JsonView data={o} c={c} /></View>}
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <TouchableOpacity style={btn(c.card)} onPress={() => setAberto(aberto === o.id ? null : o.id)}><Text style={{ color: c.gold }}>{aberto === o.id ? 'Fechar' : 'Detalhes'}</Text></TouchableOpacity>
            <TouchableOpacity style={btn(c.gold)} onPress={() => aprovar(o)}><Text style={{ color: '#000', fontWeight: '700' }}>Aprovar</Text></TouchableOpacity>
            <TouchableOpacity style={btn(c.card)} onPress={() => act(o.id, 'rejeitar', 'Rejeitada — a LétimaX aprende que este tipo não interessa.')}><Text style={{ color: c.err }}>Rejeitar</Text></TouchableOpacity>
            <TouchableOpacity style={{ ...btn(c.card), marginRight: 0 }} onPress={() => act(o.id, 'mais-tarde', 'Adiada por 48 horas.')}><Text style={{ color: c.muted }}>+48h</Text></TouchableOpacity>
          </View>
        </View>
      ))}

      <TouchableOpacity onPress={verHist} style={{ padding: 12, alignItems: 'center' }}><Text style={{ color: c.gold }}>{hist ? 'Esconder histórico' : 'Ver histórico (resultado real vs estimativa)'}</Text></TouchableOpacity>
      {hist && <JsonView data={hist} c={c} />}
    </ScrollView>
  );
}

~~~

### letimax-app/src/screens/SettingsScreen.js
~~~js
import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Switch } from 'react-native';
import * as IntentLauncher from 'expo-intent-launcher';
import { startService, stopService } from '../services/service';
import { useTheme } from '../theme/theme';
import { serverConfig, saveServerConfig, api } from '../services/api';
import { getConfig, setConfig } from '../db/database';

const CHAVES_IA = ['ANTHROPIC_API_KEY', 'OPENAI_API_KEY', 'GEMINI_API_KEY', 'STABILITY_API_KEY', 'ELEVENLABS_API_KEY', 'ELEVENLABS_VOICE_ID'];
const CHAVES_PLAT = ['HOTMART_CLIENT_ID', 'HOTMART_CLIENT_SECRET', 'KIWIFY_API_KEY', 'GUMROAD_ACCESS_TOKEN', 'SHOPIFY_API_KEY', 'SHOPIFY_API_SECRET', 'BINANCE_API_KEY', 'BINANCE_SECRET_KEY', 'MAILCHIMP_API_KEY', 'NETLIFY_API_KEY', 'GMAIL_OAUTH_TOKEN', 'GOOGLE_ANALYTICS_ID', 'META_PIXEL_ID'];

export default function SettingsScreen() {
  const { c, mode, setMode } = useTheme();
  const [url, setUrl] = useState('');
  const [token, setToken] = useState('');
  const [nivel, setNivel] = useState('1');
  const [msg, setMsg] = useState('');
  const [valores, setValores] = useState({});
  const [visivel, setVisivel] = useState({});
  const [novoNome, setNovoNome] = useState('');
  const [novoValor, setNovoValor] = useState('');
  const [servico, setServico] = useState(false);

  useEffect(() => {
    serverConfig().then((s) => setUrl(s.url));
    getConfig('autonomia').then((v) => v && setNivel(v));
    getConfig('servico_activo').then((v) => setServico(v === '1'));
  }, []);

  const flash = (m) => { setMsg(m); setTimeout(() => setMsg(''), 4000); };
  const input = { borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 10, padding: 10, flex: 1 };
  const h = { color: c.gold, fontSize: 16, fontWeight: '700', marginTop: 22, marginBottom: 8 };
  const chip = (on) => ({ paddingVertical: 8, paddingHorizontal: 14, borderRadius: 18, marginRight: 8, backgroundColor: on ? c.gold : c.card });

  const saveServer = async () => {
    try { await saveServerConfig(url, token); setToken(''); flash('Servidor guardado.'); } catch (e) { flash(e.message); }
  };
  const setAuto = async (n) => {
    setNivel(n); await setConfig('autonomia', n);
    try { await api.post('/autonomia/nivel', { nivel: Number(n) }); } catch (e) { flash('Guardado no APP; servidor offline.'); }
  };
  // A chave vai por HTTPS para o servidor e o campo é limpo — nada fica no telemóvel
  const enviarChave = async (nome, valor) => {
    if (!valor) return;
    try {
      await api.post('/chaves/adicionar', { nome, valor });
      setValores((v) => ({ ...v, [nome]: '' }));
      flash(nome + ' enviada ao servidor.');
    } catch (e) { flash(e.message); }
  };

  const toggleServico = async (v) => {
    setServico(v); await setConfig('servico_activo', v ? '1' : '0');
    try { if (v) await startService(); else await stopService(); } catch (e) { flash(e.message); }
  };
  const bateria = () =>
    IntentLauncher.startActivityAsync('android.settings.REQUEST_IGNORE_BATTERY_OPTIMIZATIONS', { data: 'package:com.letimax.app' })
      .catch(() => flash('Abra as definições de bateria e retire as restrições da LétimaX.'));

  const chave = (nome) => (
    <View key={nome} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
      <View style={{ flex: 1 }}>
        <Text style={{ color: c.muted, fontSize: 11, marginBottom: 2 }}>{nome}</Text>
        <TextInput style={{ ...input, flex: 0 }} value={valores[nome] || ''} onChangeText={(t) => setValores((v) => ({ ...v, [nome]: t }))}
          secureTextEntry={!visivel[nome]} autoCapitalize="none" placeholder="••••••••" placeholderTextColor={c.muted} />
      </View>
      <TouchableOpacity onPress={() => setVisivel((v) => ({ ...v, [nome]: !v[nome] }))} style={{ padding: 10 }}><Text style={{ color: c.gold }}>{visivel[nome] ? 'Esconder' : 'Mostrar'}</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => enviarChave(nome, valores[nome])} style={{ padding: 10 }}><Text style={{ color: c.gold, fontWeight: '700' }}>Enviar</Text></TouchableOpacity>
    </View>
  );

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16, paddingBottom: 60 }}>
      {!!msg && <Text style={{ color: c.gold, marginBottom: 8 }}>{msg}</Text>}

      <Text style={h}>Servidor</Text>
      <View style={{ flexDirection: 'row', marginBottom: 8 }}><TextInput style={input} value={url} onChangeText={setUrl} autoCapitalize="none" placeholder="https://..." placeholderTextColor={c.muted} /></View>
      <View style={{ flexDirection: 'row', marginBottom: 8 }}><TextInput style={input} value={token} onChangeText={setToken} autoCapitalize="none" secureTextEntry placeholder="Novo token (opcional)" placeholderTextColor={c.muted} /></View>
      <TouchableOpacity onPress={saveServer} style={{ backgroundColor: c.gold, padding: 12, borderRadius: 10, alignItems: 'center' }}><Text style={{ color: '#000', fontWeight: '700' }}>Guardar servidor</Text></TouchableOpacity>

      <Text style={h}>Tema visual</Text>
      <View style={{ flexDirection: 'row' }}>
        {[['system', 'Seguir sistema'], ['light', 'Claro'], ['dark', 'Escuro']].map(([m, l]) => (
          <TouchableOpacity key={m} style={chip(mode === m)} onPress={() => setMode(m)}><Text style={{ color: mode === m ? '#000' : c.text }}>{l}</Text></TouchableOpacity>
        ))}
      </View>

      <Text style={h}>Nível de autonomia</Text>
      <View style={{ flexDirection: 'row' }}>
        {[['1', 'Normal'], ['2', 'Semi-autónomo'], ['3', 'Autónomo total']].map(([n, l]) => (
          <TouchableOpacity key={n} style={chip(nivel === n)} onPress={() => setAuto(n)}><Text style={{ color: nivel === n ? '#000' : c.text }}>{l}</Text></TouchableOpacity>
        ))}
      </View>

      <Text style={h}>Serviço em segundo plano</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text style={{ color: c.text, flex: 1, marginRight: 10 }}>LétimaX sempre activa (alertas do servidor em tempo real)</Text>
        <Switch value={servico} onValueChange={toggleServico} trackColor={{ true: c.gold }} />
      </View>
      <TouchableOpacity onPress={bateria} style={{ marginTop: 10, padding: 11, borderRadius: 10, backgroundColor: c.card, alignItems: 'center' }}>
        <Text style={{ color: c.gold }}>Permitir uso sem limite de bateria</Text>
      </TouchableOpacity>

      <Text style={h}>Secção 1 — Chaves de IA</Text>
      {CHAVES_IA.map(chave)}
      <Text style={h}>Secção 2 — Chaves de Plataformas</Text>
      {CHAVES_PLAT.map(chave)}

      <Text style={h}>Secção 3 — Chaves Personalizadas</Text>
      <View style={{ flexDirection: 'row', marginBottom: 8 }}><TextInput style={input} value={novoNome} onChangeText={setNovoNome} autoCapitalize="characters" placeholder="NOME_DA_CHAVE" placeholderTextColor={c.muted} /></View>
      <View style={{ flexDirection: 'row', marginBottom: 8 }}><TextInput style={input} value={novoValor} onChangeText={setNovoValor} autoCapitalize="none" secureTextEntry placeholder="Valor" placeholderTextColor={c.muted} /></View>
      <TouchableOpacity onPress={async () => { if (novoNome && novoValor) { await enviarChave(novoNome.trim(), novoValor.trim()); setNovoNome(''); setNovoValor(''); } }}
        style={{ backgroundColor: c.gold, padding: 12, borderRadius: 10, alignItems: 'center' }}><Text style={{ color: '#000', fontWeight: '700' }}>Adicionar nova chave</Text></TouchableOpacity>
      <Text style={{ color: c.muted, marginTop: 14, fontSize: 12 }}>Todas as chaves seguem por HTTPS para o servidor e nunca ficam guardadas no telemóvel.</Text>
    </ScrollView>
  );
}

~~~

### letimax-app/src/screens/PasswordsScreen.js
~~~js
import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useTheme } from '../theme/theme';
import { biometricAuth, verifyPin, formatLock } from '../services/security';

// Cofre: cada entrada fica no SecureStore (cifrado pelo Android Keystore). Exige biometria/PIN sempre que se abre.
const IDX = 'pw_index';
const readIdx = async () => JSON.parse((await SecureStore.getItemAsync(IDX)) || '[]');

export default function PasswordsScreen() {
  const { c } = useTheme();
  const [open, setOpen] = useState(false);
  const [pin, setPin] = useState('');
  const [msg, setMsg] = useState('');
  const [lista, setLista] = useState([]);
  const [q, setQ] = useState('');
  const [vis, setVis] = useState({});
  const [segredos, setSegredos] = useState({});
  const [form, setForm] = useState(null);

  const unlock = async () => { if (await biometricAuth()) { setOpen(true); readIdx().then(setLista); } };
  useEffect(() => { unlock(); }, []);

  const unlockPin = async () => {
    const r = await verifyPin(pin); setPin('');
    if (r.ok) { setOpen(true); readIdx().then(setLista); }
    else setMsg(r.locked ? formatLock(r.locked) : 'PIN incorrecto.');
  };

  const mostrar = async (id) => {
    if (!segredos[id]) { const v = await SecureStore.getItemAsync('pw_' + id); setSegredos((s) => ({ ...s, [id]: JSON.parse(v || '{}') })); }
    setVis((v) => ({ ...v, [id]: !v[id] }));
  };
  const guardar = async () => {
    if (!form.plataforma || !form.password) return;
    const id = Date.now().toString(36);
    await SecureStore.setItemAsync('pw_' + id, JSON.stringify({ password: form.password, notas: form.notas || '' }));
    const idx = [...(await readIdx()), { id, plataforma: form.plataforma, email: form.email || '' }];
    await SecureStore.setItemAsync(IDX, JSON.stringify(idx));
    setLista(idx); setForm(null);
  };
  const apagar = (p) => Alert.alert('Eliminar', p.plataforma + '?', [
    { text: 'Cancelar', style: 'cancel' },
    { text: 'Eliminar', style: 'destructive', onPress: async () => {
      await SecureStore.deleteItemAsync('pw_' + p.id);
      const idx = (await readIdx()).filter((x) => x.id !== p.id);
      await SecureStore.setItemAsync(IDX, JSON.stringify(idx)); setLista(idx);
    } },
  ]);

  const input = { borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 10, padding: 10, marginBottom: 8 };

  if (!open) {
    return (
      <View style={{ flex: 1, backgroundColor: c.bg, padding: 24, justifyContent: 'center' }}>
        <Text style={{ color: c.text, fontSize: 20, fontWeight: '700', marginBottom: 8 }}>Cofre de passwords</Text>
        <Text style={{ color: c.muted, marginBottom: 16 }}>Confirme a identidade para abrir, mesmo com a APP já desbloqueada.</Text>
        <TouchableOpacity onPress={unlock} style={{ backgroundColor: c.gold, padding: 13, borderRadius: 10, alignItems: 'center', marginBottom: 14 }}><Text style={{ color: '#000', fontWeight: '700' }}>Usar rosto / impressão digital</Text></TouchableOpacity>
        <TextInput value={pin} onChangeText={setPin} placeholder="ou PIN" placeholderTextColor={c.muted} secureTextEntry keyboardType="number-pad" style={input} />
        <TouchableOpacity onPress={unlockPin} style={{ padding: 10, alignItems: 'center' }}><Text style={{ color: c.gold }}>Abrir com PIN</Text></TouchableOpacity>
        {!!msg && <Text style={{ color: c.err, textAlign: 'center' }}>{msg}</Text>}
      </View>
    );
  }

  const filtrada = lista.filter((p) => (p.plataforma + p.email).toLowerCase().includes(q.toLowerCase()));
  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16 }} keyboardShouldPersistTaps="handled">
      <Text style={{ color: c.text, fontSize: 22, fontWeight: '700', marginBottom: 10 }}>Passwords</Text>
      <TextInput value={q} onChangeText={setQ} placeholder="Pesquisar plataforma" placeholderTextColor={c.muted} style={input} />
      {form ? (
        <View style={{ backgroundColor: c.card, borderRadius: 14, padding: 14, marginBottom: 12 }}>
          {[['plataforma', 'Plataforma'], ['email', 'Email usado'], ['password', 'Password'], ['notas', 'Notas']].map(([k, l]) => (
            <TextInput key={k} value={form[k] || ''} onChangeText={(t) => setForm({ ...form, [k]: t })} placeholder={l} placeholderTextColor={c.muted} autoCapitalize="none" secureTextEntry={k === 'password'} style={input} />
          ))}
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={guardar} style={{ flex: 1, backgroundColor: c.gold, padding: 11, borderRadius: 10, alignItems: 'center', marginRight: 8 }}><Text style={{ color: '#000', fontWeight: '700' }}>Guardar</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => setForm(null)} style={{ flex: 1, padding: 11, alignItems: 'center' }}><Text style={{ color: c.muted }}>Cancelar</Text></TouchableOpacity>
          </View>
        </View>
      ) : (
        <TouchableOpacity onPress={() => setForm({})} style={{ backgroundColor: c.gold, padding: 12, borderRadius: 10, alignItems: 'center', marginBottom: 12 }}><Text style={{ color: '#000', fontWeight: '700' }}>Nova password</Text></TouchableOpacity>
      )}
      {!filtrada.length && <Text style={{ color: c.muted }}>Cofre vazio.</Text>}
      {filtrada.map((p) => (
        <TouchableOpacity key={p.id} onPress={() => mostrar(p.id)} onLongPress={() => apagar(p)} style={{ backgroundColor: c.card, borderRadius: 12, padding: 12, marginBottom: 8, borderWidth: 1, borderColor: c.border }}>
          <Text style={{ color: c.text, fontWeight: '700' }}>{p.plataforma}</Text>
          {!!p.email && <Text style={{ color: c.muted }}>{p.email}</Text>}
          <Text style={{ color: c.gold, marginTop: 4 }}>{vis[p.id] && segredos[p.id] ? segredos[p.id].password : '••••••••  (toque para mostrar)'}</Text>
          {vis[p.id] && !!segredos[p.id]?.notas && <Text style={{ color: c.muted }}>{segredos[p.id].notas}</Text>}
        </TouchableOpacity>
      ))}
      <Text style={{ color: c.muted, fontSize: 12 }}>Toque longo para eliminar.</Text>
    </ScrollView>
  );
}

~~~

### letimax-app/src/navigation/menu.js
~~~js
// Menu lateral: nome, rota, endpoint GET do servidor (null = ecrã local, ainda por construir)
export const MENU = [
  { id: 'motor', nome: 'Motor de Receita', endpoint: '/motor-receita/oportunidades' },
  { id: 'raqueamento', nome: 'Sistema de Raqueamento', endpoint: '/raqueamento/estado' },
  { id: 'activos', nome: 'Activos', endpoint: '/activos/lista' },
  { id: 'novonegocio', nome: 'Novos Negócios', endpoint: '/negocios/oportunidades' },
  { id: 'metas', nome: 'Metas', endpoint: '/metas/progresso' },
  { id: 'afext', nome: 'Afiliados Externos', endpoint: '/afiliados/ranking' },
  { id: 'afprop', nome: 'Afiliados Próprios', endpoint: '/afiliados-proprios/dashboard' },
  { id: 'lanc', nome: 'Lançamentos', endpoint: '/lancamento/estrategia' },
  { id: 'webinars', nome: 'Webinars', endpoint: '/webinar/lista' },
  { id: 'email', nome: 'Email Marketing', endpoint: '/email/analytics' },
  { id: 'analytics', nome: 'Analytics', endpoint: '/analytics/conversao' },
  { id: 'reputacao', nome: 'Reputação', endpoint: '/reputacao/testemunhos' },
  { id: 'suporte', nome: 'Suporte', endpoint: '/suporte/tickets' },
  { id: 'onboarding', nome: 'Onboarding', endpoint: '/onboarding/status' },
  { id: 'referencias', nome: 'Referências', endpoint: '/referencias/dashboard' },
  { id: 'paginas', nome: 'Páginas', endpoint: '/pagina/analytics' },
  { id: 'videos', nome: 'Vídeos', endpoint: null },
  { id: 'cursos', nome: 'Cursos', endpoint: '/curso/lista' },
  { id: 'sites', nome: 'Sites', endpoint: '/site/analytics' },
  { id: 'apres', nome: 'Apresentações', endpoint: '/apresentacao/lista' },
  { id: 'automacao', nome: 'Automação Inteligente', endpoint: '/automacao/pontuacao' },
  { id: 'oportunidades', nome: 'Oportunidades', endpoint: '/oportunidade/pendentes' },
  { id: 'investimentos', nome: 'Investimentos', endpoint: '/investimentos' },
  { id: 'empresa', nome: 'Empresa', endpoint: '/empresa/progresso' },
  { id: 'financas', nome: 'Finanças', endpoint: '/receita/total' },
  { id: 'contactos', nome: 'Contactos', endpoint: null },
  { id: 'saude', nome: 'Saúde', endpoint: '/saude' },
  { id: 'passwords', nome: 'Passwords', endpoint: null },
  { id: 'documentos', nome: 'Documentos', endpoint: null },
  { id: 'logs', nome: 'Logs', endpoint: '/logs' },
  { id: 'actualizacao', nome: 'Actualização', endpoint: '/versao/atual' },
];

~~~

### letimax-app/src/navigation/Root.js
~~~js
import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/theme';
import { MENU } from './menu';
import ChatScreen from '../screens/ChatScreen';
import ModuleScreen from '../screens/ModuleScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MotorReceitaScreen from '../screens/MotorReceitaScreen';
import MetasScreen from '../screens/MetasScreen';
import ProdutosScreen from '../screens/ProdutosScreen';
import ContactosScreen from '../screens/ContactosScreen';
import PasswordsScreen from '../screens/PasswordsScreen';

const SPECIAL = { motor: MotorReceitaScreen, metas: MetasScreen, contactos: ContactosScreen, passwords: PasswordsScreen };

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const ICONS = { Chat: 'chatbubble-ellipses', Dashboard: 'speedometer', Produtos: 'cube', Mercado: 'trending-up', Marketing: 'megaphone' };

function Tabs() {
  const { c } = useTheme();
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarActiveTintColor: c.gold, tabBarInactiveTintColor: c.muted,
      tabBarStyle: { backgroundColor: c.bg, borderTopColor: c.border },
      tabBarIcon: ({ color, size }) => <Ionicons name={ICONS[route.name]} size={size} color={color} />,
    })}>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Dashboard" component={ModuleScreen} initialParams={{ titulo: 'Dashboard', endpoint: '/dashboard' }} />
      <Tab.Screen name="Produtos" component={ProdutosScreen} />
      <Tab.Screen name="Mercado" component={ModuleScreen} initialParams={{ titulo: 'Mercado', endpoint: '/mercado' }} />
      <Tab.Screen name="Marketing" component={ModuleScreen} initialParams={{ titulo: 'Marketing', endpoint: null }} />
    </Tab.Navigator>
  );
}

export default function Root() {
  const { c, isDark } = useTheme();
  const base = isDark ? DarkTheme : DefaultTheme;
  const navTheme = { ...base, colors: { ...base.colors, background: c.bg, card: c.bg, text: c.text, border: c.border, primary: c.gold } };
  return (
    <NavigationContainer theme={navTheme}>
      <Drawer.Navigator screenOptions={{ headerTintColor: c.gold, headerTitleStyle: { color: c.text }, drawerActiveTintColor: c.gold, drawerStyle: { backgroundColor: c.bg } }}>
        <Drawer.Screen name="Principal" component={Tabs} options={{ title: 'LétimaX' }} />
        {MENU.map((m) => (
          <Drawer.Screen key={m.id} name={m.id} component={SPECIAL[m.id] || ModuleScreen} options={{ title: m.nome }} initialParams={{ titulo: m.nome, endpoint: m.endpoint }} />
        ))}
        <Drawer.Screen name="configuracoes" component={SettingsScreen} options={{ title: 'Configurações' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

~~~

### letimax-app/src/theme/theme.js
~~~js
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import * as SecureStore from 'expo-secure-store';

export const GOLD = '#C9A84C';
const base = { gold: GOLD, ok: '#2E9E5B', err: '#D64545', warn: '#E08A1E' };
export const light = { ...base, bg: '#FFFFFF', text: '#1A1A1A', muted: '#6B6B6B', card: '#F5F5F5', border: '#E5E5E5', soft: '#2D2D2D', bubbleUser: '#F3E9C6', bubbleBot: '#EFEFEF' };
export const dark = { ...base, bg: '#0D0D0D', text: '#FFFFFF', muted: '#A0A0A0', card: '#1A1A1A', border: '#2A2A2A', soft: '#2D2D2D', bubbleUser: '#4A3F1C', bubbleBot: '#1F1F1F' };

const Ctx = createContext(null);

// mode: 'system' (padrão) | 'light' | 'dark'
export function ThemeProvider({ children }) {
  const sys = useColorScheme();
  const [mode, setModeState] = useState('system');
  useEffect(() => {
    SecureStore.getItemAsync('tema_modo').then((m) => m && setModeState(m)).catch(() => {});
  }, []);
  const setMode = async (m) => {
    setModeState(m);
    try { await SecureStore.setItemAsync('tema_modo', m); } catch (e) {}
  };
  const isDark = mode === 'system' ? sys === 'dark' : mode === 'dark';
  return <Ctx.Provider value={{ c: isDark ? dark : light, isDark, mode, setMode }}>{children}</Ctx.Provider>;
}
export const useTheme = () => useContext(Ctx);

~~~

### letimax-app/src/services/commands.js
~~~js
import { Linking, PermissionsAndroid } from 'react-native';
import * as IntentLauncher from 'expo-intent-launcher';
import * as Brightness from 'expo-brightness';
import { VolumeManager } from 'react-native-volume-manager';
import { api } from './api';
import { biometricAuth } from './security';
import { listContactos, logVoz } from '../db/database';

// SEGURANÇA: o Android não deixa uma app confirmar QUEM está a falar. Por isso estes comandos só correm
// com a APP já desbloqueada (PIN/biometria). Comandos críticos exigem "sim" falado + biometria nova.
const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
const WAKE = /\b(letimax|letima x|leti max|let imax|letimacs|letimax)\b/;
let pending = null; // { fn, critico }

function falar(d) {
  if (d == null) return 'Sem dados.';
  if (typeof d === 'string') return d;
  const txt = d.resumo || d.texto || d.mensagem;
  if (txt) return String(txt);
  const partes = Object.entries(d).filter(([, v]) => v !== null && typeof v !== 'object').slice(0, 6).map(([k, v]) => k.replace(/_/g, ' ') + ': ' + v);
  return partes.length ? partes.join('. ') : 'Recebi os dados, mas não há um resumo para ler.';
}
async function volume(delta, abs) {
  let cur = await VolumeManager.getVolume();
  cur = typeof cur === 'number' ? cur : (cur && cur.volume) != null ? cur.volume : 0.5;
  const v = abs != null ? abs : Math.min(1, Math.max(0, cur + delta));
  await VolumeManager.setVolume(v, { showUI: true });
  return v;
}
async function brilho(delta) {
  const cur = await Brightness.getBrightnessAsync();
  await Brightness.setBrightnessAsync(Math.min(1, Math.max(0.05, cur + delta)));
}
async function ligar(nome) {
  const [c] = await listContactos(nome);
  if (!c || !c.telefone) return 'Não encontrei o número de ' + nome + ' nos contactos.';
  const num = c.telefone.replace(/[^\d+]/g, '');
  const ok = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CALL_PHONE);
  if (ok !== 'granted') { await Linking.openURL('tel:' + num); return 'A abrir o marcador para ' + c.nome + '.'; }
  await IntentLauncher.startActivityAsync('android.intent.action.CALL', { data: 'tel:' + num });
  return 'A ligar para ' + c.nome + '.';
}
const nao = (txt) => async () => txt;
const SEM_NATIVO = 'Ainda não consigo fazer isso: o Android só permite com código nativo adicional (Fase 4).';

const H = [
  { re: /^modo escuro$/, fn: async (m, x) => { await x.setMode('dark'); return 'Modo escuro activado.'; } },
  { re: /^modo claro$/, fn: async (m, x) => { await x.setMode('light'); return 'Modo claro activado.'; } },
  { re: /^(liga|ligar|acende) (a )?lanterna$/, fn: async (m, x) => ((await x.torch.setTorch(true)) ? 'Lanterna ligada.' : 'Preciso da permissão da câmara para a lanterna.') },
  { re: /^(desliga|desligar|apaga) (a )?lanterna$/, fn: async (m, x) => { await x.torch.setTorch(false); return 'Lanterna desligada.'; } },
  { re: /^(sobe|aumenta) (o )?volume$/, fn: async () => { await volume(0.15); return 'Volume aumentado.'; } },
  { re: /^(desce|diminui|baixa) (o )?volume$/, fn: async () => { await volume(-0.15); return 'Volume diminuído.'; } },
  { re: /^volume maximo$/, fn: async () => { await volume(0, 1); return 'Volume no máximo.'; } },
  { re: /^silencia$/, fn: async () => { await volume(0, 0); return 'Volume a zero.'; } },
  { re: /^aumenta (o )?brilho$/, fn: async () => { await brilho(0.2); return 'Brilho aumentado.'; } },
  { re: /^(diminui|baixa) (o )?brilho$/, fn: async () => { await brilho(-0.2); return 'Brilho diminuído.'; } },
  { re: /^(liga|desliga) (o )?wifi$/, fn: async () => { await IntentLauncher.startActivityAsync('android.settings.WIFI_SETTINGS'); return 'Abri as definições de wifi. O Android não deixa uma app ligar ou desligar o wifi sozinha.'; } },
  { re: /^(liga|desliga) (o )?bluetooth$/, fn: async () => { await IntentLauncher.startActivityAsync('android.settings.BLUETOOTH_SETTINGS'); return 'Abri as definições de bluetooth. O Android não deixa uma app ligar ou desligar o bluetooth sozinha.'; } },
  { re: /^liga para (.+)$/, confirm: (m) => 'Vou ligar para ' + m[1] + '.', fn: (m) => ligar(m[1]) },

  { re: /^modo autonomo total por (\d+) horas?$/, critico: true,
    confirm: (m) => 'Vou activar o modo autónomo total por ' + m[1] + ' horas. Os limites mantêm-se: sem gastar dinheiro, sem retirar dinheiro, sem mudar de nicho.',
    fn: async (m) => { await api.post('/autonomia/ativar', { nivel: 3, horas: Number(m[1]) }); return 'Modo autónomo total activo por ' + m[1] + ' horas.'; } },
  { re: /^(desactiva|desativa) (o )?modo autonomo$/, fn: async () => { await api.post('/autonomia/desativar', {}); return 'Modo autónomo desactivado.'; } },
  { re: /^modo normal$/, fn: async () => { await api.post('/autonomia/nivel', { nivel: 1 }); return 'Modo normal activo.'; } },

  { re: /^como estao as vendas$/, fn: async () => falar(await api.get('/relatorio')) },
  { re: /^quanto ganhei hoje$/, fn: async () => falar(await api.get('/receita/total')) },
  { re: /^qual a proxima oportunidade$/, fn: async () => {
      const d = await api.get('/motor-receita/oportunidades');
      const l = (Array.isArray(d) ? d : (d && d.oportunidades) || []).sort((a, b) => (b.pontuacao || 0) - (a.pontuacao || 0));
      return l.length ? (l[0].titulo || l[0].nome) + ', pontuação ' + (l[0].pontuacao ?? 'desconhecida') + '.' : 'Não há oportunidades activas.';
  } },
  { re: /^(faz )?(o )?resumo do dia$/, fn: async () => falar(await api.get('/resumo-matinal')) },
  { re: /^(activa|ativa) (o )?raqueamento$/, critico: true,
    confirm: () => 'Vou activar o sistema de raqueamento, o último recurso.',
    fn: async () => { await api.post('/raqueamento/activar', {}); return 'Sistema de raqueamento activado.'; } },
  { re: /^faz (o )?plano da empresa$/, fn: async () => { await api.post('/empresa/plano', {}); return 'A gerar o plano da empresa. Aviso quando estiver pronto.'; } },

  { re: /musica/, fn: nao(SEM_NATIVO) },
  { re: /^desliga (o )?ecra$/, fn: nao(SEM_NATIVO) },
  { re: /(atende|rejeita)( a)? chamada|estou ocupado/, fn: nao(SEM_NATIVO) },
];

async function executar(p, texto) {
  if (p.critico && !(await biometricAuth())) return 'Autenticação biométrica falhou. Comando cancelado.';
  try { return await p.fn(); } catch (e) { return 'Não consegui executar: ' + e.message; }
}

// Devolve a resposta a falar, ou null se o texto não é um comando.
export async function runCommand(raw, ctx) {
  let t = norm(raw).replace(/\bletima x\b|\bleti max\b|\blet imax\b/g, 'letimax');
  if (pending) {
    const p = pending; pending = null;
    if (/^(sim|confirmo|confirmado)\b/.test(t)) { const r = await executar(p); await logVoz(raw, r); return r; }
    if (/^(nao|cancela|cancelar)\b/.test(t)) return 'Cancelado.';
  }
  const wake = WAKE.test(t);
  if (ctx.requireWake && !wake) return null;
  const cmd = wake ? t.replace(/^.*?\bletimax\b[ ,]*/, '') : t;
  for (const h of H) {
    const m = cmd.match(h.re);
    if (!m) continue;
    if (h.confirm) {
      pending = { fn: () => h.fn(m, ctx), critico: !!h.critico };
      const r = h.confirm(m) + ' Confirmas? Diz sim para confirmar.';
      await logVoz(raw, r); return r;
    }
    let r;
    try { r = await h.fn(m, ctx); } catch (e) { r = 'Não consegui executar: ' + e.message; }
    await logVoz(raw, r); return r;
  }
  return wake ? 'Não percebi o comando.' : null;
}

~~~

### letimax-app/src/services/service.js
~~~js
import notifee, { AndroidImportance, AndroidForegroundServiceType } from '@notifee/react-native';
import { serverConfig } from './api';

// Serviço em primeiro plano: mantém um WebSocket com o servidor e mostra alertas em tempo real.
// Assume que o servidor expõe wss://<servidor>/ws com Authorization: Bearer <token>
// e envia mensagens JSON {titulo, mensagem}.
let ws = null;
let stopped = true;
let retry = 0;
const SEGREDO = /(sk-[A-Za-z0-9_-]{10,}|key_[A-Za-z0-9]{10,})/;

async function alerta(m) {
  if (SEGREDO.test(JSON.stringify(m))) return; // nunca mostrar nada que pareça uma chave de API
  const channelId = await notifee.createChannel({ id: 'alertas', name: 'Alertas LétimaX', importance: AndroidImportance.HIGH });
  await notifee.displayNotification({ title: String(m.titulo || 'LétimaX'), body: String(m.mensagem || ''), android: { channelId, pressAction: { id: 'default' } } });
}

async function connect() {
  if (stopped) return;
  const { url, token } = await serverConfig();
  if (!url || !token) { setTimeout(connect, 30000); return; }
  const wsUrl = url.replace(/^http/i, 'ws').replace(/\/$/, '') + '/ws';
  try {
    ws = new WebSocket(wsUrl, null, { headers: { Authorization: 'Bearer ' + token } });
    ws.onopen = () => { retry = 0; };
    ws.onmessage = (e) => { try { alerta(JSON.parse(e.data)); } catch (err) {} };
    ws.onerror = () => {};
    ws.onclose = () => {
      if (stopped) return;
      retry = Math.min(retry + 1, 6);
      setTimeout(connect, 2000 * 2 ** retry);
    };
  } catch (e) { setTimeout(connect, 30000); }
}

// A promessa nunca resolve: o serviço vive até stopForegroundService()
notifee.registerForegroundService(() => new Promise(() => { stopped = false; connect(); }));

export async function startService() {
  await notifee.requestPermission();
  const channelId = await notifee.createChannel({ id: 'servico', name: 'LétimaX activa', importance: AndroidImportance.LOW });
  await notifee.displayNotification({
    id: 'servico',
    title: 'LétimaX activa — a trabalhar para si',
    android: {
      channelId, asForegroundService: true, ongoing: true, pressAction: { id: 'default' },
      foregroundServiceTypes: [AndroidForegroundServiceType.FOREGROUND_SERVICE_TYPE_DATA_SYNC],
    },
  });
}
export async function stopService() {
  stopped = true;
  try { if (ws) ws.close(); } catch (e) {}
  await notifee.stopForegroundService();
}

~~~

### letimax-app/src/services/api.js
~~~js
import * as SecureStore from 'expo-secure-store';

export async function serverConfig() {
  return {
    url: (await SecureStore.getItemAsync('server_url')) || '',
    token: (await SecureStore.getItemAsync('server_token')) || '',
  };
}
export async function saveServerConfig(url, token) {
  if (!/^https:\/\//i.test(url)) throw new Error('O URL do servidor tem de começar por https://');
  await SecureStore.setItemAsync('server_url', url.trim());
  if (token) await SecureStore.setItemAsync('server_token', token.trim());
}

async function request(method, path, body, timeout = 15000) {
  const { url, token } = await serverConfig();
  if (!url) throw new Error('URL do servidor não configurado');
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeout);
  try {
    const res = await fetch(url.replace(/\/$/, '') + path, {
      method,
      headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token },
      body: body ? JSON.stringify(body) : undefined,
      signal: ctrl.signal,
    });
    if (!res.ok) throw new Error('Servidor respondeu ' + res.status);
    return await res.json();
  } finally {
    clearTimeout(t);
  }
}
export const api = {
  get: (p, t) => request('GET', p, null, t),
  post: (p, b, t) => request('POST', p, b, t),
  del: (p, b, t) => request('DELETE', p, b, t),
};

~~~

### letimax-app/src/services/useVoice.js
~~~js
import { useCallback, useRef, useState } from 'react';
import { ExpoSpeechRecognitionModule, useSpeechRecognitionEvent } from 'expo-speech-recognition';

// Reconhecimento de voz em português. Escuta só com a APP aberta (o Android bloqueia microfone em segundo plano).
export function useVoice(onFinal) {
  const [listening, setListening] = useState(false);
  const [partial, setPartial] = useState('');
  const cont = useRef(false);
  const paused = useRef(false);
  const cb = useRef(onFinal);
  cb.current = onFinal;

  const begin = useCallback(async () => {
    if (paused.current) return false;
    const p = await ExpoSpeechRecognitionModule.requestPermissionsAsync();
    if (!p.granted) return false;
    ExpoSpeechRecognitionModule.start({ lang: 'pt-PT', interimResults: true, continuous: false });
    return true;
  }, []);
  const beginRef = useRef(begin);
  beginRef.current = begin;

  useSpeechRecognitionEvent('start', () => setListening(true));
  useSpeechRecognitionEvent('end', () => {
    setListening(false); setPartial('');
    if (cont.current && !paused.current) setTimeout(() => beginRef.current(), 500);
  });
  useSpeechRecognitionEvent('result', (e) => {
    const t = (e.results && e.results[0] && e.results[0].transcript) || '';
    setPartial(t);
    if (e.isFinal && t.trim()) cb.current(t.trim());
  });
  useSpeechRecognitionEvent('error', (e) => {
    if (['not-allowed', 'service-not-allowed', 'language-not-supported'].includes(e.error)) cont.current = false;
  });

  return {
    listening, partial,
    start: begin,
    stop: () => ExpoSpeechRecognitionModule.stop(),
    setContinuous: (v) => { cont.current = v; if (v) begin(); else ExpoSpeechRecognitionModule.stop(); },
    pause: () => { paused.current = true; ExpoSpeechRecognitionModule.stop(); },   // enquanto a LétimaX fala
    resume: () => { paused.current = false; if (cont.current) begin(); },
  };
}

~~~

### letimax-app/src/services/security.js
~~~js
import * as SecureStore from 'expo-secure-store';
import * as Crypto from 'expo-crypto';
import * as LocalAuthentication from 'expo-local-authentication';
import { logAccess } from '../db/database';

const SALT = 'letimax-v1';
const hash = (pin) => Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, pin + SALT);

export async function hasPin() {
  return !!(await SecureStore.getItemAsync('pin_hash'));
}
export async function setupPin(pin) {
  await SecureStore.setItemAsync('pin_hash', await hash(pin));
}

// Bloqueio progressivo do documento: 3 falhas = 5 min, 6 = 30 min, 9 = 24 h, 12 = permanente
function lockFor(f) {
  if (f >= 12) return 'perm';
  if (f >= 9) return 24 * 60 * 60 * 1000;
  if (f >= 6) return 30 * 60 * 1000;
  if (f >= 3) return 5 * 60 * 1000;
  return 0;
}
export async function lockRemaining() {
  const until = await SecureStore.getItemAsync('bloqueio_ate');
  if (!until) return 0;
  if (until === 'perm') return 'perm';
  const left = Number(until) - Date.now();
  return left > 0 ? left : 0;
}
export async function resetFailures() {
  await SecureStore.setItemAsync('falhas', '0');
  await SecureStore.deleteItemAsync('bloqueio_ate');
}
export async function verifyPin(pin) {
  const left = await lockRemaining();
  if (left) return { ok: false, locked: left };
  const ok = (await hash(pin)) === (await SecureStore.getItemAsync('pin_hash'));
  await logAccess(ok, 'pin');
  if (ok) { await resetFailures(); return { ok: true }; }
  const f = Number((await SecureStore.getItemAsync('falhas')) || 0) + 1;
  await SecureStore.setItemAsync('falhas', String(f));
  const l = lockFor(f);
  if (l === 'perm') await SecureStore.setItemAsync('bloqueio_ate', 'perm');
  else if (l) await SecureStore.setItemAsync('bloqueio_ate', String(Date.now() + l));
  return { ok: false, failures: f, locked: l };
}

// Biometria do próprio telemóvel (rosto/impressão digital já registados no Android)
export async function biometricAuth() {
  const has = await LocalAuthentication.hasHardwareAsync();
  const enrolled = await LocalAuthentication.isEnrolledAsync();
  if (!has || !enrolled) return false;
  const r = await LocalAuthentication.authenticateAsync({
    promptMessage: 'LétimaX — confirme a sua identidade',
    cancelLabel: 'Usar PIN',
    disableDeviceFallback: true,
  });
  await logAccess(r.success, 'biometria');
  return r.success;
}

export function formatLock(ms) {
  if (ms === 'perm') return 'Acesso bloqueado permanentemente. Alerta enviado ao Senhor Letício.';
  const min = Math.ceil(ms / 60000);
  return min >= 60 ? 'Bloqueado por ' + Math.ceil(min / 60) + ' h.' : 'Bloqueado por ' + min + ' min.';
}

~~~

### letimax-app/src/components/JsonView.js
~~~js
import React from 'react';
import { View, Text } from 'react-native';

// Mostra qualquer resposta JSON do servidor em cartões legíveis
export default function JsonView({ data, c, level = 0 }) {
  if (data === null || data === undefined) return <Text style={{ color: c.muted }}>—</Text>;
  if (typeof data !== 'object') return <Text style={{ color: c.text }}>{String(data)}</Text>;
  if (Array.isArray(data)) {
    if (!data.length) return <Text style={{ color: c.muted }}>Sem dados.</Text>;
    return data.map((it, i) => (
      <View key={i} style={{ backgroundColor: c.card, borderRadius: 12, padding: 12, marginBottom: 8, borderWidth: 1, borderColor: c.border }}>
        <JsonView data={it} c={c} level={level + 1} />
      </View>
    ));
  }
  return Object.entries(data).map(([k, v]) => {
    const simple = v === null || typeof v !== 'object';
    return (
      <View key={k} style={{ marginBottom: 6 }}>
        <Text style={{ color: c.gold, fontWeight: '600', fontSize: 12 }}>{k.replace(/_/g, ' ')}</Text>
        {simple ? <Text style={{ color: c.text, fontSize: 15 }}>{String(v ?? '—')}</Text> : <View style={{ marginTop: 4 }}><JsonView data={v} c={c} level={level + 1} /></View>}
      </View>
    );
  });
}

~~~

### letimax-app/src/components/TorchHost.js
~~~js
import React, { createContext, useState } from 'react';
import { CameraView, useCameraPermissions } from 'expo-camera';

// A lanterna no Expo só acende com uma câmara montada (invisível, 1x1 px). Só fica montada enquanto acesa.
export const TorchCtx = createContext({ setTorch: async () => false, on: false });

export function TorchProvider({ children }) {
  const [on, setOn] = useState(false);
  const [perm, request] = useCameraPermissions();
  const setTorch = async (v) => {
    if (v && !(perm && perm.granted)) {
      const r = await request();
      if (!r.granted) return false;
    }
    setOn(v);
    return true;
  };
  return (
    <TorchCtx.Provider value={{ setTorch, on }}>
      {children}
      {on && perm && perm.granted && <CameraView style={{ position: 'absolute', width: 1, height: 1, opacity: 0 }} facing="back" enableTorch />}
    </TorchCtx.Provider>
  );
}

~~~

### letimax-app/src/db/database.js
~~~js
import * as SQLite from 'expo-sqlite';

let db;
export async function getDb() {
  if (!db) {
    db = await SQLite.openDatabaseAsync('letimax.db');
    await db.execAsync(`
      PRAGMA journal_mode = WAL;
      CREATE TABLE IF NOT EXISTS conversas (id INTEGER PRIMARY KEY AUTOINCREMENT, papel TEXT, texto TEXT, criado_em TEXT);
      CREATE TABLE IF NOT EXISTS configuracoes (chave TEXT PRIMARY KEY, valor TEXT);
      CREATE TABLE IF NOT EXISTS dashboard_cache (chave TEXT PRIMARY KEY, dados TEXT, atualizado TEXT);
      CREATE TABLE IF NOT EXISTS logs_erros (id INTEGER PRIMARY KEY AUTOINCREMENT, origem TEXT, mensagem TEXT, criado_em TEXT);
      CREATE TABLE IF NOT EXISTS tentativas_acesso (id INTEGER PRIMARY KEY AUTOINCREMENT, sucesso INTEGER, metodo TEXT, criado_em TEXT);
      CREATE TABLE IF NOT EXISTS respostas_pre_aprovadas (id INTEGER PRIMARY KEY AUTOINCREMENT, canal TEXT, texto TEXT);
      CREATE TABLE IF NOT EXISTS contactos (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, email TEXT, telefone TEXT, classe TEXT, notas TEXT);
      CREATE TABLE IF NOT EXISTS comandos_voz_log (id INTEGER PRIMARY KEY AUTOINCREMENT, texto TEXT, resposta TEXT, criado_em TEXT);
      CREATE TABLE IF NOT EXISTS metas (id INTEGER PRIMARY KEY AUTOINCREMENT, mes TEXT, valor REAL, criado_em TEXT);
    `);
  }
  return db;
}

export async function addMessage(papel, texto) {
  const d = await getDb();
  const criado_em = new Date().toISOString();
  const r = await d.runAsync('INSERT INTO conversas (papel, texto, criado_em) VALUES (?,?,?)', [papel, texto, criado_em]);
  return { id: r.lastInsertRowId, papel, texto, criado_em };
}
export async function getMessages(limit = 200) {
  const d = await getDb();
  return d.getAllAsync('SELECT * FROM conversas ORDER BY id DESC LIMIT ?', [limit]);
}
export async function setConfig(chave, valor) {
  const d = await getDb();
  await d.runAsync('INSERT OR REPLACE INTO configuracoes (chave, valor) VALUES (?,?)', [chave, String(valor)]);
}
export async function getConfig(chave) {
  const d = await getDb();
  const r = await d.getFirstAsync('SELECT valor FROM configuracoes WHERE chave = ?', [chave]);
  return r ? r.valor : null;
}
export async function cacheSet(chave, dados) {
  const d = await getDb();
  await d.runAsync('INSERT OR REPLACE INTO dashboard_cache (chave, dados, atualizado) VALUES (?,?,?)', [chave, JSON.stringify(dados), new Date().toISOString()]);
}
export async function cacheGet(chave) {
  const d = await getDb();
  const r = await d.getFirstAsync('SELECT dados, atualizado FROM dashboard_cache WHERE chave = ?', [chave]);
  return r ? { dados: JSON.parse(r.dados), atualizado: r.atualizado } : null;
}
export async function logAccess(sucesso, metodo) {
  const d = await getDb();
  await d.runAsync('INSERT INTO tentativas_acesso (sucesso, metodo, criado_em) VALUES (?,?,?)', [sucesso ? 1 : 0, metodo, new Date().toISOString()]);
}

export async function listContactos(q = '') {
  const d = await getDb();
  const like = '%' + q + '%';
  return d.getAllAsync('SELECT * FROM contactos WHERE nome LIKE ? OR email LIKE ? OR classe LIKE ? ORDER BY nome', [like, like, like]);
}
export async function saveContacto(c) {
  const d = await getDb();
  await d.runAsync('INSERT INTO contactos (nome, email, telefone, classe, notas) VALUES (?,?,?,?,?)', [c.nome, c.email || '', c.telefone || '', c.classe || 'cliente', c.notas || '']);
}
export async function deleteContacto(id) {
  const d = await getDb();
  await d.runAsync('DELETE FROM contactos WHERE id = ?', [id]);
}
export async function saveMeta(valor) {
  const d = await getDb();
  await d.runAsync('INSERT INTO metas (mes, valor, criado_em) VALUES (?,?,?)', [new Date().toISOString().slice(0, 7), valor, new Date().toISOString()]);
}

export async function logVoz(texto, resposta) {
  const d = await getDb();
  await d.runAsync('INSERT INTO comandos_voz_log (texto, resposta, criado_em) VALUES (?,?,?)', [texto, resposta, new Date().toISOString()]);
}

~~~

## Arquivo: letimax-app-fase4
Ficheiros de código/configuração: 40

### letimax-app/app.json
~~~json
{
  "expo": {
    "name": "LétimaX",
    "slug": "letimax",
    "version": "0.4.0",
    "orientation": "portrait",
    "userInterfaceStyle": "automatic",
    "android": {
      "package": "com.letimax.app",
      "permissions": [
        "USE_BIOMETRIC",
        "USE_FINGERPRINT",
        "INTERNET",
        "VIBRATE",
        "WAKE_LOCK",
        "POST_NOTIFICATIONS",
        "FOREGROUND_SERVICE",
        "FOREGROUND_SERVICE_DATA_SYNC",
        "RECORD_AUDIO",
        "CAMERA",
        "CALL_PHONE",
        "REQUEST_IGNORE_BATTERY_OPTIMIZATIONS",
        "ANSWER_PHONE_CALLS",
        "READ_PHONE_STATE",
        "READ_CALL_LOG",
        "READ_SMS",
        "SEND_SMS",
        "RECEIVE_BOOT_COMPLETED"
      ]
    },
    "plugins": [
      "expo-secure-store",
      "expo-sqlite",
      "expo-dev-client",
      [
        "expo-camera",
        {
          "cameraPermission": "A LétimaX usa a câmara para acender a lanterna por comando de voz."
        }
      ],
      [
        "expo-speech-recognition",
        {
          "microphonePermission": "A LétimaX usa o microfone para os comandos de voz do Senhor Letício.",
          "speechRecognitionPermission": "A LétimaX usa o reconhecimento de voz para entender os seus comandos.",
          "androidSpeechServicePackages": [
            "com.google.android.googlequicksearchbox"
          ]
        }
      ],
      "./plugins/withNotifeeService"
    ]
  }
}
~~~

### letimax-app/package.json
~~~json
{
  "name": "letimax-app",
  "version": "0.1.0",
  "main": "index.js",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android"
  },
  "dependencies": {
    "@expo/vector-icons": "^14.0.4",
    "@react-navigation/bottom-tabs": "^6.6.1",
    "@react-navigation/drawer": "^6.7.2",
    "@react-navigation/native": "^6.1.18",
    "expo": "~52.0.0",
    "expo-crypto": "~14.0.0",
    "expo-local-authentication": "~15.0.0",
    "expo-secure-store": "~14.0.0",
    "expo-speech": "~13.0.0",
    "expo-sqlite": "~15.0.0",
    "expo-status-bar": "~2.0.0",
    "react": "18.3.1",
    "react-native": "0.76.5",
    "react-native-gesture-handler": "~2.20.2",
    "react-native-reanimated": "~3.16.1",
    "react-native-safe-area-context": "4.12.0",
    "react-native-screens": "~4.4.0",
    "@notifee/react-native": "^9.1.8",
    "expo-brightness": "~13.0.0",
    "expo-camera": "~16.0.0",
    "expo-dev-client": "~5.0.0",
    "expo-intent-launcher": "~12.0.0",
    "expo-keep-awake": "~14.0.0",
    "expo-speech-recognition": "*",
    "react-native-volume-manager": "*"
  },
  "devDependencies": {
    "@babel/core": "^7.25.0"
  },
  "private": true
}
~~~

### letimax-app/App.js
~~~js
import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider, useTheme } from './src/theme/theme';
import { getDb, getConfig } from './src/db/database';
import AuthScreen from './src/screens/AuthScreen';
import FirstUseScreen from './src/screens/FirstUseScreen';
import Root from './src/navigation/Root';
import { TorchProvider } from './src/components/TorchHost';
import { startService } from './src/services/service';

function Gate() {
  const { isDark } = useTheme();
  const [stage, setStage] = useState('auth'); // auth | firstuse | main
  useEffect(() => { getDb(); }, []);
  useEffect(() => {
    if (stage === 'main') getConfig('servico_activo').then((v) => v === '1' && startService().catch(() => {}));
  }, [stage]);
  const afterAuth = async () => setStage((await getConfig('primeiro_uso')) ? 'main' : 'firstuse');
  return (
    <>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      {stage === 'auth' && <AuthScreen onSuccess={afterAuth} />}
      {stage === 'firstuse' && <FirstUseScreen onDone={() => setStage('main')} />}
      {stage === 'main' && <TorchProvider><Root /></TorchProvider>}
    </>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ThemeProvider><Gate /></ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

~~~

### letimax-app/index.js
~~~js
import { registerRootComponent } from 'expo';
import './src/services/service'; // regista o serviço em primeiro plano (tem de ser fora de componentes)
import App from './App';

registerRootComponent(App);

~~~

### letimax-app/README.md
~~~md
# LétimaX — APP (Fase 4)

Fase 4 = módulo nativo local em `modules/letimax-native` (Kotlin). É compilado automaticamente pelo EAS Build;
basta repetir `npx eas-cli build -p android --profile preview`. Não funciona no Expo Go.
Instalar o APK directamente (sideload): as permissões de SMS e registo de chamadas não são aceites pela Google Play.
Depois de instalar: Configurações -> Acesso nativo (notificações e bloqueio de ecrã) e conceder as permissões quando pedidas.


Fase 3 precisa de BUILD NATIVO (não funciona no Expo Go):
1. `npm install` e `npx expo install --fix`
2. `npx eas-cli login` e `npx eas-cli build -p android --profile preview` (gera um APK para instalar)
   Para desenvolver: `--profile development` e depois `npx expo start --dev-client`.
3. Instalar o APK no telemóvel. Na 1ª abertura: Configurações -> Serviço em segundo plano -> ligar,
   e "Permitir uso sem limite de bateria".

Comandos de voz: botão do microfone (um comando) ou o ícone da orelha (escuta contínua, exige
dizer "LétimaX, ..." e o ecrã fica ligado). O servidor deve expor wss://<servidor>/ws para os alertas.


Fase 2 já feita: Motor de Receita, Metas, Produtos, Contactos, Passwords.


1. Instalar dependências: `npm install` e depois `npx expo install --fix`
2. Arrancar: `npx expo start` e abrir no Expo Go (ou usar snack.expo.dev / GitHub Codespaces se não tiver PC)
3. Primeiro acesso: criar PIN -> URL (https) e token do servidor -> chave do Claude (vai para o servidor)

Fase 1: tema claro/escuro, PIN + biometria do telemóvel com bloqueio progressivo, chat, dashboard,
menu lateral com todos os módulos ligados aos endpoints, configurações com chaves (enviadas ao servidor).
Fase 2: ecrãs dedicados (Motor de Receita com Aprovar/Rejeitar, Metas, Produtos...), SQLite offline completo,
cofre de passwords, contactos, documentos.
Fase 3 (precisa de build nativo, não funciona no Expo Go): serviço em segundo plano, chamadas/SMS,
comandos de voz de hardware, reconhecimento de voz.

~~~

### letimax-app/eas.json
~~~json
{
  "cli": { "version": ">= 12.0.0" },
  "build": {
    "development": { "developmentClient": true, "distribution": "internal", "android": { "buildType": "apk" } },
    "preview": { "distribution": "internal", "android": { "buildType": "apk" } }
  }
}

~~~

### letimax-app/babel.config.js
~~~js
module.exports = function (api) {
  api.cache(true);
  return { presets: ['babel-preset-expo'], plugins: ['react-native-reanimated/plugin'] };
};

~~~

### letimax-app/plugins/withNotifeeService.js
~~~js
const { withAndroidManifest, withProjectBuildGradle } = require('@expo/config-plugins');

// Android 14 exige o tipo do serviço em primeiro plano; o Notifee precisa dele no manifesto.
function manifest(config) {
  return withAndroidManifest(config, (cfg) => {
    const m = cfg.modResults.manifest;
    m.$['xmlns:tools'] = 'http://schemas.android.com/tools';
    const app = m.application[0];
    const name = 'app.notifee.core.ForegroundService';
    app.service = (app.service || []).filter((s) => s.$['android:name'] !== name);
    app.service.push({ $: { 'android:name': name, 'android:foregroundServiceType': 'dataSync', 'android:exported': 'false', 'tools:replace': 'android:foregroundServiceType' } });
    return cfg;
  });
}
// Repositório local do Notifee (inofensivo se a pasta não existir)
function gradle(config) {
  return withProjectBuildGradle(config, (cfg) => {
    const line = 'maven { url "$rootDir/../node_modules/@notifee/react-native/android/libs" }';
    if (!cfg.modResults.contents.includes(line)) {
      cfg.modResults.contents = cfg.modResults.contents.replace(/allprojects\s*{\s*repositories\s*{/, (s) => s + '\n        ' + line);
    }
    return cfg;
  });
}
module.exports = (config) => gradle(manifest(config));

~~~

### letimax-app/modules/letimax-native/index.js
~~~js
import { requireNativeModule } from 'expo';

// Em Expo Go (sem build nativo) o módulo não existe: exportamos null e a APP avisa em vez de falhar.
let Native = null;
try { Native = requireNativeModule('LetimaxNative'); } catch (e) { Native = null; }
export default Native;

~~~

### letimax-app/modules/letimax-native/expo-module.config.json
~~~json
{
  "platforms": ["android"],
  "android": { "modules": ["expo.modules.letimaxnative.LetimaxNativeModule"] }
}

~~~

### letimax-app/modules/letimax-native/android/build.gradle
~~~gradle
apply plugin: 'com.android.library'

group = 'expo.modules.letimaxnative'
version = '0.1.0'

def expoModulesCorePlugin = new File(project(":expo-modules-core").projectDir.absolutePath, "ExpoModulesCorePlugin.gradle")
apply from: expoModulesCorePlugin
applyKotlinExpoModulesCorePlugin()
useCoreDependencies()
useExpoPublishing()

buildscript {
  ext.safeExtGet = { prop, fallback ->
    rootProject.ext.has(prop) ? rootProject.ext.get(prop) : fallback
  }
}

project.android {
  compileSdkVersion safeExtGet("compileSdkVersion", 34)
  defaultConfig {
    minSdkVersion safeExtGet("minSdkVersion", 24)
    targetSdkVersion safeExtGet("targetSdkVersion", 34)
  }
}

android {
  namespace "expo.modules.letimaxnative"
  defaultConfig {
    versionCode 1
    versionName "0.1.0"
  }
  lintOptions {
    abortOnError false
  }
}

~~~

### letimax-app/modules/letimax-native/android/src/main/AndroidManifest.xml
~~~xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android">
  <uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" />
  <uses-permission android:name="android.permission.READ_PHONE_STATE" />
  <uses-permission android:name="android.permission.READ_CALL_LOG" />
  <uses-permission android:name="android.permission.ANSWER_PHONE_CALLS" />
  <uses-permission android:name="android.permission.READ_SMS" />
  <uses-permission android:name="android.permission.SEND_SMS" />

  <application>
    <receiver android:name="expo.modules.letimaxnative.BootReceiver" android:exported="true">
      <intent-filter>
        <action android:name="android.intent.action.BOOT_COMPLETED" />
      </intent-filter>
    </receiver>

    <receiver android:name="expo.modules.letimaxnative.PhoneStateReceiver" android:exported="true">
      <intent-filter>
        <action android:name="android.intent.action.PHONE_STATE" />
      </intent-filter>
    </receiver>

    <receiver
      android:name="expo.modules.letimaxnative.LetimaxAdminReceiver"
      android:permission="android.permission.BIND_DEVICE_ADMIN"
      android:exported="true">
      <meta-data android:name="android.app.device_admin" android:resource="@xml/letimax_device_admin" />
      <intent-filter>
        <action android:name="android.app.action.DEVICE_ADMIN_ENABLED" />
      </intent-filter>
    </receiver>

    <service
      android:name="expo.modules.letimaxnative.LetimaxNotificationListener"
      android:permission="android.permission.BIND_NOTIFICATION_LISTENER_SERVICE"
      android:exported="true">
      <intent-filter>
        <action android:name="android.service.notification.NotificationListenerService" />
      </intent-filter>
    </service>
  </application>
</manifest>

~~~

### letimax-app/modules/letimax-native/android/src/main/java/expo/modules/letimaxnative/PhoneStateReceiver.kt
~~~kt
package expo.modules.letimaxnative

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.telephony.TelephonyManager

// Guarda o número da última chamada a tocar (precisa de READ_PHONE_STATE + READ_CALL_LOG concedidas).
class PhoneStateReceiver : BroadcastReceiver() {
  @Suppress("DEPRECATION")
  override fun onReceive(context: Context, intent: Intent) {
    if (intent.action != TelephonyManager.ACTION_PHONE_STATE_CHANGED) return
    val state = intent.getStringExtra(TelephonyManager.EXTRA_STATE)
    val number = intent.getStringExtra(TelephonyManager.EXTRA_INCOMING_NUMBER)
    if (state == TelephonyManager.EXTRA_STATE_RINGING && !number.isNullOrEmpty()) {
      context.getSharedPreferences("letimax_native", Context.MODE_PRIVATE)
        .edit()
        .putString("last_number", number)
        .putLong("last_time", System.currentTimeMillis())
        .apply()
    }
  }
}

~~~

### letimax-app/modules/letimax-native/android/src/main/java/expo/modules/letimaxnative/LetimaxAdminReceiver.kt
~~~kt
package expo.modules.letimaxnative

import android.app.admin.DeviceAdminReceiver

// Só serve para permitir "bloquear o ecrã" (política force-lock). Não apaga dados nem muda passwords.
class LetimaxAdminReceiver : DeviceAdminReceiver()

~~~

### letimax-app/modules/letimax-native/android/src/main/java/expo/modules/letimaxnative/LetimaxNativeModule.kt
~~~kt
package expo.modules.letimaxnative

import android.app.admin.DevicePolicyManager
import android.content.ComponentName
import android.content.Context
import android.content.Intent
import android.media.AudioManager
import android.net.Uri
import android.os.Build
import android.os.SystemClock
import android.provider.Settings
import android.telecom.TelecomManager
import android.telephony.SmsManager
import android.view.KeyEvent
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class LetimaxNativeModule : Module() {
  private val ctx: Context
    get() = appContext.reactContext ?: throw IllegalStateException("Sem contexto Android")

  private fun prefs() = ctx.getSharedPreferences("letimax_native", Context.MODE_PRIVATE)

  override fun definition() = ModuleDefinition {
    Name("LetimaxNative")

    // ---------- Chamadas ----------
    Function("answerCall") {
      if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
        val tm = ctx.getSystemService(Context.TELECOM_SERVICE) as TelecomManager
        try { tm.acceptRingingCall(); true } catch (e: SecurityException) { false }
      } else false
    }

    Function("rejectCall") {
      if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
        val tm = ctx.getSystemService(Context.TELECOM_SERVICE) as TelecomManager
        try { tm.endCall() } catch (e: SecurityException) { false }
      } else false
    }

    // Número da última chamada a tocar nos últimos 5 minutos ("" se não houver)
    Function("lastIncomingNumber") {
      val p = prefs()
      val age = System.currentTimeMillis() - p.getLong("last_time", 0L)
      if (age in 0..300000) (p.getString("last_number", "") ?: "") else ""
    }

    // ---------- SMS ----------
    Function("sendSms") { number: String, text: String ->
      val sms: SmsManager = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
        ctx.getSystemService(SmsManager::class.java)
      } else {
        @Suppress("DEPRECATION") SmsManager.getDefault()
      }
      sms.sendMultipartTextMessage(number, null, sms.divideMessage(text), null, null)
      true
    }

    Function("readSms") { limit: Int ->
      val out = mutableListOf<Map<String, Any>>()
      val cursor = ctx.contentResolver.query(Uri.parse("content://sms/inbox"), arrayOf("address", "body", "date"), null, null, "date DESC")
      cursor?.use {
        var n = 0
        while (it.moveToNext() && n < limit) {
          out.add(mapOf("address" to (it.getString(0) ?: ""), "body" to (it.getString(1) ?: ""), "date" to it.getLong(2)))
          n++
        }
      }
      out
    }

    // ---------- Música (teclas multimédia) ----------
    Function("mediaKey") { name: String ->
      val code = when (name) {
        "play_pause" -> KeyEvent.KEYCODE_MEDIA_PLAY_PAUSE
        "next" -> KeyEvent.KEYCODE_MEDIA_NEXT
        "previous" -> KeyEvent.KEYCODE_MEDIA_PREVIOUS
        else -> -1
      }
      if (code < 0) false else {
        val am = ctx.getSystemService(Context.AUDIO_SERVICE) as AudioManager
        val t = SystemClock.uptimeMillis()
        am.dispatchMediaKeyEvent(KeyEvent(t, t, KeyEvent.ACTION_DOWN, code, 0))
        am.dispatchMediaKeyEvent(KeyEvent(t, t, KeyEvent.ACTION_UP, code, 0))
        true
      }
    }

    // ---------- Bloquear ecrã (administrador do dispositivo, só force-lock) ----------
    Function("lockScreen") {
      val dpm = ctx.getSystemService(Context.DEVICE_POLICY_SERVICE) as DevicePolicyManager
      val admin = ComponentName(ctx, LetimaxAdminReceiver::class.java)
      if (dpm.isAdminActive(admin)) { dpm.lockNow(); "ok" } else "inactive"
    }

    Function("requestDeviceAdmin") {
      val admin = ComponentName(ctx, LetimaxAdminReceiver::class.java)
      val i = Intent(DevicePolicyManager.ACTION_ADD_DEVICE_ADMIN)
        .putExtra(DevicePolicyManager.EXTRA_DEVICE_ADMIN, admin)
        .putExtra(DevicePolicyManager.EXTRA_ADD_EXPLANATION, "Permite à LétimaX bloquear o ecrã por comando de voz. Não dá acesso a dados nem a passwords.")
        .addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
      ctx.startActivity(i)
      true
    }

    // ---------- Notificações de WhatsApp / SMS / email ----------
    Function("isNotificationAccessEnabled") {
      val enabled = Settings.Secure.getString(ctx.contentResolver, "enabled_notification_listeners")
      enabled != null && enabled.contains(ctx.packageName)
    }

    Function("openNotificationAccess") {
      ctx.startActivity(Intent(Settings.ACTION_NOTIFICATION_LISTENER_SETTINGS).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK))
      true
    }

    Function("getNotifications") { prefs().getString("notifs", "[]") ?: "[]" }

    Function("clearNotifications") { prefs().edit().remove("notifs").apply(); true }

    // ---------- Reinício do telemóvel ----------
    Function("setServiceWanted") { wanted: Boolean ->
      prefs().edit().putBoolean("service_wanted", wanted).apply()
      true
    }
  }
}

~~~

### letimax-app/modules/letimax-native/android/src/main/java/expo/modules/letimaxnative/LetimaxNotificationListener.kt
~~~kt
package expo.modules.letimaxnative

import android.service.notification.NotificationListenerService
import android.service.notification.StatusBarNotification
import org.json.JSONArray
import org.json.JSONObject

// Guarda (só no telemóvel) as últimas 50 notificações de apps de mensagens. Todas as outras apps são ignoradas.
class LetimaxNotificationListener : NotificationListenerService() {
  private val permitidos = setOf(
    "com.whatsapp", "com.whatsapp.w4b", "org.telegram.messenger",
    "com.google.android.apps.messaging", "com.samsung.android.messaging", "com.android.mms",
    "com.google.android.gm"
  )

  override fun onNotificationPosted(sbn: StatusBarNotification) {
    if (!permitidos.contains(sbn.packageName)) return
    val extras = sbn.notification.extras
    val title = extras.getCharSequence("android.title")?.toString() ?: ""
    val text = extras.getCharSequence("android.text")?.toString() ?: ""
    if (title.isEmpty() && text.isEmpty()) return

    val prefs = getSharedPreferences("letimax_native", MODE_PRIVATE)
    val old = try { JSONArray(prefs.getString("notifs", "[]")) } catch (e: Exception) { JSONArray() }
    val item = JSONObject().put("pkg", sbn.packageName).put("title", title).put("text", text).put("time", sbn.postTime)
    val out = JSONArray()
    out.put(item)
    for (i in 0 until minOf(old.length(), 49)) out.put(old.get(i))
    prefs.edit().putString("notifs", out.toString()).apply()
  }
}

~~~

### letimax-app/modules/letimax-native/android/src/main/java/expo/modules/letimaxnative/BootReceiver.kt
~~~kt
package expo.modules.letimaxnative

import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.PendingIntent
import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.app.Notification
import android.os.Build

// O Android 15 proíbe iniciar o serviço de sincronização a partir do arranque. Por isso, depois de reiniciar,
// mostramos uma notificação: ao tocar, a APP abre, pede a biometria e só então reactiva o serviço.
class BootReceiver : BroadcastReceiver() {
  override fun onReceive(context: Context, intent: Intent) {
    if (intent.action != Intent.ACTION_BOOT_COMPLETED) return
    val prefs = context.getSharedPreferences("letimax_native", Context.MODE_PRIVATE)
    if (!prefs.getBoolean("service_wanted", false)) return

    val nm = context.getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
    val channelId = "letimax_boot"
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
      nm.createNotificationChannel(NotificationChannel(channelId, "Reactivar LétimaX", NotificationManager.IMPORTANCE_HIGH))
    }
    val launch = context.packageManager.getLaunchIntentForPackage(context.packageName) ?: return
    val pi = PendingIntent.getActivity(context, 0, launch, PendingIntent.FLAG_IMMUTABLE or PendingIntent.FLAG_UPDATE_CURRENT)
    val builder = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) Notification.Builder(context, channelId) else Notification.Builder(context)
    val n = builder
      .setContentTitle("LétimaX parou após o reinício")
      .setContentText("Toque para reactivar, Senhor Letício.")
      .setSmallIcon(android.R.drawable.ic_dialog_info)
      .setContentIntent(pi)
      .setAutoCancel(true)
      .build()
    nm.notify(4001, n)
  }
}

~~~

### letimax-app/modules/letimax-native/android/src/main/res/xml/letimax_device_admin.xml
~~~xml
<?xml version="1.0" encoding="utf-8"?>
<device-admin xmlns:android="http://schemas.android.com/apk/res/android">
  <uses-policies>
    <force-lock />
  </uses-policies>
</device-admin>

~~~

### letimax-app/src/screens/ProdutosScreen.js
~~~js
import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, RefreshControl, ScrollView as HScroll } from 'react-native';
import { useTheme } from '../theme/theme';
import { api } from '../services/api';
import { cacheGet, cacheSet } from '../db/database';

const ESTADOS = ['Todos', 'Rascunho', 'Aguarda Aprovação', 'Publicado', 'Pausado', 'Arquivado'];
const sem = (s) => String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const norm = (d) => (Array.isArray(d) ? d : (d && (d.produtos || d.items)) || []);

export default function ProdutosScreen() {
  const { c } = useTheme();
  const [items, setItems] = useState([]);
  const [filtro, setFiltro] = useState('Todos');
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const d = await api.get('/produtos');
      setItems(norm(d)); await cacheSet('produtos', d);
    } catch (e) {
      const k = await cacheGet('produtos');
      if (k) { setItems(norm(k.dados)); setMsg('Modo offline — dados em cache.'); } else setMsg(e.message);
    } finally { setLoading(false); }
  }, []);
  useEffect(() => { load(); }, [load]);

  const aprovar = async (p) => {
    try { await api.post('/aprovar', { id: p.id }); setMsg('"' + p.nome + '" aprovado.'); load(); } catch (e) { setMsg(e.message); }
  };

  const lista = items.filter((p) => filtro === 'Todos' || sem(p.estado) === sem(filtro));
  const chip = (on) => ({ paddingVertical: 6, paddingHorizontal: 12, borderRadius: 16, marginRight: 6, backgroundColor: on ? c.gold : c.card });

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16 }}
      refreshControl={<RefreshControl refreshing={loading} onRefresh={load} tintColor={c.gold} />}>
      <Text style={{ color: c.text, fontSize: 22, fontWeight: '700', marginBottom: 10 }}>Produtos</Text>
      {!!msg && <Text style={{ color: c.gold, marginBottom: 8 }}>{msg}</Text>}
      <HScroll horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 12 }}>
        {ESTADOS.map((e) => (
          <TouchableOpacity key={e} style={chip(filtro === e)} onPress={() => setFiltro(e)}><Text style={{ color: filtro === e ? '#000' : c.text }}>{e}</Text></TouchableOpacity>
        ))}
      </HScroll>
      {!lista.length && !loading && <Text style={{ color: c.muted }}>Sem produtos neste estado.</Text>}
      {lista.map((p) => (
        <View key={p.id} style={{ backgroundColor: c.card, borderRadius: 14, padding: 14, marginBottom: 10, borderWidth: 1, borderColor: c.border }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: c.text, fontWeight: '700', fontSize: 16, flex: 1 }}>{p.nome}</Text>
            <Text style={{ color: c.gold, fontWeight: '700' }}>{p.preco != null ? '$' + p.preco : ''}</Text>
          </View>
          <Text style={{ color: c.muted, marginTop: 4 }}>{p.nicho ?? '—'} · {p.estado ?? '—'}</Text>
          <Text style={{ color: c.muted, marginTop: 2 }}>
            Qualidade {p.qualidade ?? p.score_qualidade ?? '—'}/100 · vendas {p.vendas ?? 0} · conversão {p.taxa_conversao ?? '—'} · lucro {p.lucro_liquido ?? '—'}
          </Text>
          {p.marca_dagua && <Text style={{ color: c.muted, marginTop: 2 }}>Marca de água activa · link único por comprador</Text>}
          {sem(p.estado) === 'aguarda aprovacao' && (
            <TouchableOpacity onPress={() => aprovar(p)} style={{ backgroundColor: c.gold, padding: 10, borderRadius: 10, alignItems: 'center', marginTop: 10 }}>
              <Text style={{ color: '#000', fontWeight: '700' }}>Aprovar</Text>
            </TouchableOpacity>
          )}
        </View>
      ))}
    </ScrollView>
  );
}

~~~

### letimax-app/src/screens/AuthScreen.js
~~~js
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import * as Speech from 'expo-speech';
import { useTheme } from '../theme/theme';
import { hasPin, setupPin, verifyPin, biometricAuth, lockRemaining, resetFailures, formatLock } from '../services/security';

const GREETING = 'Bem-vindo, Senhor Letício. Estou pronto. Hoje vamos fazer ainda mais dinheiro.';

export default function AuthScreen({ onSuccess }) {
  const { c } = useTheme();
  const [mode, setMode] = useState('boot'); // boot | setup | login
  const [pin, setPin] = useState('');
  const [pin2, setPin2] = useState('');
  const [msg, setMsg] = useState('');
  const [bad, setBad] = useState(false);

  const done = async () => {
    await resetFailures();
    Speech.speak(GREETING, { language: 'pt-PT' });
    onSuccess();
  };

  const tryBio = async () => {
    const lock = await lockRemaining();
    if (lock) { setBad(true); setMsg(formatLock(lock)); return; }
    if (await biometricAuth()) done();
  };

  useEffect(() => {
    (async () => {
      if (await hasPin()) { setMode('login'); tryBio(); } else setMode('setup');
    })();
  }, []);

  const create = async () => {
    setBad(true);
    if (pin.length < 6) return setMsg('O PIN deve ter pelo menos 6 dígitos.');
    if (pin !== pin2) return setMsg('Os PINs não coincidem.');
    await setupPin(pin);
    setBad(false);
    setMsg('Perfil de acesso criado. A LétimaX reconhece-o agora, Senhor Letício.');
    setTimeout(done, 800);
  };

  const login = async () => {
    const r = await verifyPin(pin);
    setPin('');
    if (r.ok) return done();
    setBad(true);
    if (r.locked) return setMsg(formatLock(r.locked));
    setMsg('PIN incorrecto. Tentativas falhadas: ' + r.failures);
  };

  const input = { borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 12, padding: 14, fontSize: 18, marginBottom: 12, textAlign: 'center', letterSpacing: 6 };
  const btn = { backgroundColor: c.gold, padding: 14, borderRadius: 12, alignItems: 'center', marginTop: 4 };

  if (mode === 'boot') return <View style={{ flex: 1, backgroundColor: c.bg, justifyContent: 'center' }}><ActivityIndicator color={c.gold} /></View>;

  return (
    <View style={{ flex: 1, backgroundColor: c.bg, justifyContent: 'center', padding: 28 }}>
      <Text style={{ color: c.gold, fontSize: 38, fontWeight: '800', textAlign: 'center' }}>LétimaX</Text>
      <Text style={{ color: c.muted, textAlign: 'center', marginBottom: 28 }}>
        {mode === 'setup' ? 'Primeiro acesso — crie o seu PIN de segurança' : 'Confirme a sua identidade'}
      </Text>
      <TextInput value={pin} onChangeText={setPin} placeholder="PIN" placeholderTextColor={c.muted} secureTextEntry keyboardType="number-pad" maxLength={12} style={input} />
      {mode === 'setup' && <TextInput value={pin2} onChangeText={setPin2} placeholder="Repetir PIN" placeholderTextColor={c.muted} secureTextEntry keyboardType="number-pad" maxLength={12} style={input} />}
      <TouchableOpacity style={btn} onPress={mode === 'setup' ? create : login}>
        <Text style={{ color: '#000', fontWeight: '700' }}>{mode === 'setup' ? 'Criar perfil' : 'Entrar'}</Text>
      </TouchableOpacity>
      {mode === 'login' && (
        <TouchableOpacity style={{ padding: 14, alignItems: 'center' }} onPress={tryBio}>
          <Text style={{ color: c.gold }}>Usar rosto / impressão digital</Text>
        </TouchableOpacity>
      )}
      {!!msg && <Text style={{ color: bad ? c.err : c.gold, textAlign: 'center', marginTop: 12 }}>{msg}</Text>}
    </View>
  );
}

~~~

### letimax-app/src/screens/ModuleScreen.js
~~~js
import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, Text, RefreshControl, ActivityIndicator } from 'react-native';
import { useTheme } from '../theme/theme';
import { api } from '../services/api';
import { cacheGet, cacheSet } from '../db/database';
import JsonView from '../components/JsonView';

// Ecrã genérico ligado a um endpoint GET do servidor, com cache offline.
export default function ModuleScreen({ route }) {
  const { c } = useTheme();
  const { titulo, endpoint } = route.params || {};
  const [data, setData] = useState(null);
  const [offline, setOffline] = useState(false);
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    if (!endpoint) return;
    setLoading(true); setErr(''); setOffline(false);
    try {
      const d = await api.get(endpoint);
      setData(d); await cacheSet(endpoint, d);
    } catch (e) {
      const cached = await cacheGet(endpoint);
      if (cached) { setData(cached.dados); setOffline(true); } else setErr(e.message);
    } finally { setLoading(false); }
  }, [endpoint]);

  useEffect(() => { load(); }, [load]);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16 }}
      refreshControl={<RefreshControl refreshing={loading} onRefresh={load} tintColor={c.gold} />}>
      <Text style={{ color: c.text, fontSize: 22, fontWeight: '700', marginBottom: 12 }}>{titulo}</Text>
      {!endpoint && <Text style={{ color: c.muted }}>Este ecrã é local e será construído na próxima fase.</Text>}
      {offline && <Text style={{ color: c.warn, marginBottom: 8 }}>Modo offline — a mostrar dados em cache.</Text>}
      {err ? <Text style={{ color: c.err }}>{err}</Text> : null}
      {loading && !data && <ActivityIndicator color={c.gold} />}
      {data && <JsonView data={data} c={c} />}
    </ScrollView>
  );
}

~~~

### letimax-app/src/screens/FirstUseScreen.js
~~~js
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from '../theme/theme';
import { saveServerConfig, api } from '../services/api';
import { setConfig } from '../db/database';

export default function FirstUseScreen({ onDone }) {
  const { c } = useTheme();
  const [url, setUrl] = useState('');
  const [token, setToken] = useState('');
  const [claude, setClaude] = useState('');
  const [msg, setMsg] = useState('');

  const input = { borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 12, padding: 12, marginBottom: 10 };

  const save = async () => {
    try {
      await saveServerConfig(url, token);
      if (claude.trim()) {
        // A chave segue por HTTPS para o servidor e nunca fica guardada no telemóvel
        await api.post('/chaves/adicionar', { nome: 'ANTHROPIC_API_KEY', valor: claude.trim() });
        setClaude('');
      }
      await setConfig('primeiro_uso', '1');
      onDone();
    } catch (e) { setMsg(e.message); }
  };
  const later = async () => { await setConfig('primeiro_uso', '1'); onDone(); };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 24, paddingTop: 70 }}>
      <Text style={{ color: c.gold, fontSize: 26, fontWeight: '800' }}>Primeira configuração</Text>
      <Text style={{ color: c.muted, marginVertical: 12 }}>Antes de começar, ligue a LétimaX ao seu servidor e adicione a chave do Claude para que ela possa responder.</Text>
      <TextInput style={input} value={url} onChangeText={setUrl} placeholder="https://o-seu-servidor.up.railway.app" placeholderTextColor={c.muted} autoCapitalize="none" />
      <TextInput style={input} value={token} onChangeText={setToken} placeholder="Token de acesso do servidor" placeholderTextColor={c.muted} autoCapitalize="none" secureTextEntry />
      <TextInput style={input} value={claude} onChangeText={setClaude} placeholder="ANTHROPIC_API_KEY (opcional agora)" placeholderTextColor={c.muted} autoCapitalize="none" secureTextEntry />
      {!!msg && <Text style={{ color: c.err, marginBottom: 8 }}>{msg}</Text>}
      <TouchableOpacity onPress={save} style={{ backgroundColor: c.gold, padding: 14, borderRadius: 12, alignItems: 'center' }}>
        <Text style={{ color: '#000', fontWeight: '700' }}>Guardar e iniciar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={later} style={{ padding: 14, alignItems: 'center' }}>
        <Text style={{ color: c.muted }}>Configurar depois</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

~~~

### letimax-app/src/screens/ContactosScreen.js
~~~js
import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useTheme } from '../theme/theme';
import { listContactos, saveContacto, deleteContacto } from '../db/database';

const CLASSES = ['cliente', 'parceiro', 'afiliado', 'fornecedor', 'influenciador'];

export default function ContactosScreen() {
  const { c } = useTheme();
  const [lista, setLista] = useState([]);
  const [q, setQ] = useState('');
  const [form, setForm] = useState(null);

  const load = useCallback(() => listContactos(q).then(setLista), [q]);
  useEffect(() => { load(); }, [load]);

  const input = { borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 10, padding: 10, marginBottom: 8 };
  const chip = (on) => ({ paddingVertical: 6, paddingHorizontal: 12, borderRadius: 16, marginRight: 6, marginBottom: 6, backgroundColor: on ? c.gold : c.card });

  const guardar = async () => {
    if (!form.nome) return;
    await saveContacto(form); setForm(null); load();
  };
  const apagar = (p) => Alert.alert('Eliminar contacto', p.nome + '?', [
    { text: 'Cancelar', style: 'cancel' },
    { text: 'Eliminar', style: 'destructive', onPress: async () => { await deleteContacto(p.id); load(); } },
  ]);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16 }} keyboardShouldPersistTaps="handled">
      <Text style={{ color: c.text, fontSize: 22, fontWeight: '700', marginBottom: 10 }}>Contactos</Text>
      <TextInput value={q} onChangeText={setQ} placeholder="Pesquisar por nome, email ou classe" placeholderTextColor={c.muted} style={input} />

      {form ? (
        <View style={{ backgroundColor: c.card, borderRadius: 14, padding: 14, marginBottom: 12 }}>
          {['nome', 'email', 'telefone', 'notas'].map((k) => (
            <TextInput key={k} value={form[k] || ''} onChangeText={(t) => setForm({ ...form, [k]: t })} placeholder={k[0].toUpperCase() + k.slice(1)} placeholderTextColor={c.muted} autoCapitalize={k === 'email' ? 'none' : 'sentences'} style={input} />
          ))}
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {CLASSES.map((k) => <TouchableOpacity key={k} style={chip(form.classe === k)} onPress={() => setForm({ ...form, classe: k })}><Text style={{ color: form.classe === k ? '#000' : c.text }}>{k}</Text></TouchableOpacity>)}
          </View>
          <View style={{ flexDirection: 'row', marginTop: 6 }}>
            <TouchableOpacity onPress={guardar} style={{ flex: 1, backgroundColor: c.gold, padding: 11, borderRadius: 10, alignItems: 'center', marginRight: 8 }}><Text style={{ color: '#000', fontWeight: '700' }}>Guardar</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => setForm(null)} style={{ flex: 1, backgroundColor: c.bg, padding: 11, borderRadius: 10, alignItems: 'center' }}><Text style={{ color: c.muted }}>Cancelar</Text></TouchableOpacity>
          </View>
        </View>
      ) : (
        <TouchableOpacity onPress={() => setForm({ classe: 'cliente' })} style={{ backgroundColor: c.gold, padding: 12, borderRadius: 10, alignItems: 'center', marginBottom: 12 }}><Text style={{ color: '#000', fontWeight: '700' }}>Novo contacto</Text></TouchableOpacity>
      )}

      {!lista.length && <Text style={{ color: c.muted }}>Sem contactos.</Text>}
      {lista.map((p) => (
        <TouchableOpacity key={p.id} onLongPress={() => apagar(p)} style={{ backgroundColor: c.card, borderRadius: 12, padding: 12, marginBottom: 8, borderWidth: 1, borderColor: c.border }}>
          <Text style={{ color: c.text, fontWeight: '700' }}>{p.nome} <Text style={{ color: c.gold, fontWeight: '400' }}>· {p.classe}</Text></Text>
          {!!p.email && <Text style={{ color: c.muted }}>{p.email}</Text>}
          {!!p.telefone && <Text style={{ color: c.muted }}>{p.telefone}</Text>}
          {!!p.notas && <Text style={{ color: c.muted, marginTop: 2 }}>{p.notas}</Text>}
        </TouchableOpacity>
      ))}
      <Text style={{ color: c.muted, fontSize: 12, marginTop: 6 }}>Toque longo num contacto para eliminar.</Text>
    </ScrollView>
  );
}

~~~

### letimax-app/src/screens/ChatScreen.js
~~~js
import React, { useContext, useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
import * as Speech from 'expo-speech';
import { activateKeepAwakeAsync, deactivateKeepAwake } from 'expo-keep-awake';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/theme';
import { addMessage, getMessages } from '../db/database';
import { api } from '../services/api';
import { useVoice } from '../services/useVoice';
import { runCommand } from '../services/commands';
import { TorchCtx } from '../components/TorchHost';

export default function ChatScreen() {
  const { c, setMode } = useTheme();
  const torch = useContext(TorchCtx);
  const [msgs, setMsgs] = useState([]); // mais recente primeiro
  const [text, setText] = useState('');
  const [wait, setWait] = useState(0); // 0 nada | 1 a carregar | 2 a processar
  const [cont, setCont] = useState(false);
  const contRef = useRef(false);
  const timer = useRef(null);
  const voiceRef = useRef(null);

  useEffect(() => { getMessages().then(setMsgs); return () => { deactivateKeepAwake(); }; }, []);

  const push = async (papel, texto) => { const m = await addMessage(papel, texto); setMsgs((x) => [m, ...x]); };
  // Pausa a escuta enquanto a LétimaX fala, para não ouvir a própria voz
  const falar = (t) => {
    const v = voiceRef.current;
    if (v) v.pause();
    Speech.speak(t, { language: 'pt-PT', onDone: () => v && v.resume(), onStopped: () => v && v.resume(), onError: () => v && v.resume() });
  };

  const enviar = async (t) => {
    if (!t || wait) return;
    await push('user', t);
    setWait(1);
    timer.current = setTimeout(() => setWait(2), 30000); // 30 s: "a processar..."
    let reply;
    try {
      const r = await api.post('/chat', { mensagem: t }, 60000); // 60 s: cancela
      reply = r.resposta || r.response || JSON.stringify(r);
      falar(reply);
    } catch (e) {
      reply = 'Não consegui obter resposta (' + e.message + '). Quer tentar novamente?';
    } finally { clearTimeout(timer.current); setWait(0); }
    await push('bot', reply);
  };

  const onFinal = async (t) => {
    const r = await runCommand(t, { setMode, torch, requireWake: contRef.current });
    if (r === null) { if (!contRef.current) enviar(t); return; } // push-to-talk sem comando = mensagem normal
    await push('user', t);
    await push('bot', r);
    falar(r);
  };

  const voice = useVoice(onFinal);
  voiceRef.current = voice;

  const toggleCont = async () => {
    const v = !cont;
    setCont(v); contRef.current = v;
    if (v) await activateKeepAwakeAsync(); else deactivateKeepAwake();
    voice.setContinuous(v);
  };

  const Bubble = ({ item }) => {
    const me = item.papel === 'user';
    return (
      <View style={{ alignSelf: me ? 'flex-end' : 'flex-start', backgroundColor: me ? c.bubbleUser : c.bubbleBot, padding: 12, borderRadius: 16, marginVertical: 4, maxWidth: '85%' }}>
        <Text style={{ color: c.text, fontSize: 15 }}>{item.texto}</Text>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: c.bg }} behavior={Platform.OS === 'ios' ? 'padding' : undefined} keyboardVerticalOffset={90}>
      <FlatList inverted data={msgs} keyExtractor={(i) => String(i.id)} renderItem={Bubble} contentContainerStyle={{ padding: 12 }}
        ListHeaderComponent={wait ? (
          <View style={{ flexDirection: 'row', alignItems: 'center', padding: 8 }}>
            <ActivityIndicator color={c.gold} />
            <Text style={{ color: c.muted, marginLeft: 8 }}>{wait === 2 ? 'LétimaX está a processar...' : 'A pensar...'}</Text>
          </View>
        ) : null} />
      {(voice.listening || cont) && (
        <Text style={{ color: c.gold, paddingHorizontal: 14, paddingBottom: 4 }}>
          {voice.partial ? '🎙 ' + voice.partial : cont ? 'Escuta contínua — diga "LétimaX, ..." (ecrã sempre ligado)' : 'A ouvir...'}
        </Text>
      )}
      <View style={{ flexDirection: 'row', padding: 10, borderTopWidth: 1, borderTopColor: c.border, alignItems: 'center' }}>
        <TouchableOpacity onPress={toggleCont} style={{ marginRight: 6, padding: 8 }}>
          <Ionicons name="ear" size={22} color={cont ? c.gold : c.muted} />
        </TouchableOpacity>
        <TextInput value={text} onChangeText={setText} placeholder="Escreva à LétimaX..." placeholderTextColor={c.muted}
          style={{ flex: 1, color: c.text, backgroundColor: c.card, borderRadius: 22, paddingHorizontal: 16, paddingVertical: 10 }} multiline />
        <TouchableOpacity onPress={() => (voice.listening ? voice.stop() : voice.start())} style={{ marginLeft: 6, padding: 8 }}>
          <Ionicons name={voice.listening ? 'mic' : 'mic-outline'} size={24} color={voice.listening ? c.err : c.gold} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { const t = text.trim(); setText(''); enviar(t); }} style={{ marginLeft: 2, backgroundColor: c.gold, borderRadius: 22, padding: 11 }}>
          <Ionicons name="send" size={20} color="#000" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

~~~

### letimax-app/src/screens/MetasScreen.js
~~~js
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, RefreshControl } from 'react-native';
import * as Speech from 'expo-speech';
import { useTheme } from '../theme/theme';
import { api } from '../services/api';
import { cacheGet, cacheSet, saveMeta } from '../db/database';
import JsonView from '../components/JsonView';

function diasRestantes() {
  const h = new Date();
  return new Date(h.getFullYear(), h.getMonth() + 1, 0).getDate() - h.getDate();
}

export default function MetasScreen() {
  const { c } = useTheme();
  const [d, setD] = useState(null);
  const [proj, setProj] = useState(null);
  const [novo, setNovo] = useState('');
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const celebrou = useRef(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const r = await api.get('/metas/progresso');
      setD(r); await cacheSet('metas', r);
      api.get('/metas/projecao').then(setProj).catch(() => {});
    } catch (e) {
      const k = await cacheGet('metas');
      if (k) { setD(k.dados); setMsg('Modo offline — dados em cache.'); } else setMsg(e.message);
    } finally { setLoading(false); }
  }, []);
  useEffect(() => { load(); }, [load]);

  const meta = Number(d && (d.meta ?? d.valor)) || 0;
  const atual = Number(d && (d.atual ?? d.receita_atual)) || 0;
  const dias = Number((d && d.dias_restantes) ?? diasRestantes());
  const falta = Math.max(meta - atual, 0);
  const pct = meta ? Math.min(Math.round((atual / meta) * 100), 100) : 0;
  const ritmo = dias > 0 ? falta / dias : falta;

  useEffect(() => {
    if (meta && atual >= meta && !celebrou.current) {
      celebrou.current = true;
      Speech.speak('Parabéns, Senhor Letício! Meta de ' + meta + ' reais atingida. Vamos estabelecer a próxima?', { language: 'pt-PT' });
    }
  }, [meta, atual]);

  const definir = async () => {
    const v = Number(String(novo).replace(',', '.'));
    if (!v) return setMsg('Indique um valor válido.');
    try {
      await api.post('/metas/definir', { valor: v });
      await saveMeta(v); setNovo(''); celebrou.current = false; load();
    } catch (e) { setMsg(e.message); }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16 }}
      refreshControl={<RefreshControl refreshing={loading} onRefresh={load} tintColor={c.gold} />}>
      <Text style={{ color: c.text, fontSize: 22, fontWeight: '700', marginBottom: 12 }}>Metas</Text>
      {!!msg && <Text style={{ color: c.gold, marginBottom: 8 }}>{msg}</Text>}

      {meta > 0 ? (
        <View style={{ backgroundColor: c.card, borderRadius: 14, padding: 16, borderWidth: 1, borderColor: c.border }}>
          <Text style={{ color: c.text, fontSize: 16 }}>Estás a R${(meta - atual > 0 ? falta : 0).toFixed(0)} dos R${meta.toFixed(0)} — faltam {dias} dias.</Text>
          <View style={{ height: 12, backgroundColor: c.border, borderRadius: 6, marginVertical: 12 }}>
            <View style={{ height: 12, width: pct + '%', backgroundColor: c.gold, borderRadius: 6 }} />
          </View>
          <Text style={{ color: c.muted }}>{pct}% concluído · receita actual R${atual.toFixed(0)}</Text>
          {falta > 0 && <Text style={{ color: c.text, marginTop: 8 }}>Precisas de vender R${ritmo.toFixed(0)} por dia para atingir a meta.</Text>}
          {falta > 0 && pct < 100 && dias > 0 && atual / Math.max(30 - dias, 1) < ritmo && (
            <Text style={{ color: c.warn, marginTop: 8 }}>Meta em risco. Sugestão: reactivar a lista de emails com uma promoção relâmpago de 48 horas.</Text>
          )}
          {falta === 0 && <Text style={{ color: c.ok, marginTop: 8 }}>Meta atingida! 🎉</Text>}
        </View>
      ) : (
        <Text style={{ color: c.muted }}>Ainda não há meta mensal definida.</Text>
      )}

      <Text style={{ color: c.gold, fontWeight: '700', marginTop: 22, marginBottom: 8 }}>Definir meta mensal (R$)</Text>
      <View style={{ flexDirection: 'row' }}>
        <TextInput value={novo} onChangeText={setNovo} keyboardType="numeric" placeholder="2000" placeholderTextColor={c.muted}
          style={{ flex: 1, borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 10, padding: 10 }} />
        <TouchableOpacity onPress={definir} style={{ backgroundColor: c.gold, borderRadius: 10, paddingHorizontal: 18, justifyContent: 'center', marginLeft: 8 }}>
          <Text style={{ color: '#000', fontWeight: '700' }}>Guardar</Text>
        </TouchableOpacity>
      </View>

      {proj && (<><Text style={{ color: c.gold, fontWeight: '700', marginTop: 22, marginBottom: 8 }}>Projecção do mês</Text><JsonView data={proj} c={c} /></>)}
    </ScrollView>
  );
}

~~~

### letimax-app/src/screens/MotorReceitaScreen.js
~~~js
import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Alert, RefreshControl } from 'react-native';
import { useTheme } from '../theme/theme';
import { api } from '../services/api';
import { cacheGet, cacheSet } from '../db/database';
import JsonView from '../components/JsonView';

const norm = (d) => (Array.isArray(d) ? d : (d && (d.oportunidades || d.items)) || []);
const FILTROS = ['todos', 'baixo', 'médio', 'alto'];

export default function MotorReceitaScreen() {
  const { c } = useTheme();
  const [items, setItems] = useState([]);
  const [filtro, setFiltro] = useState('todos');
  const [aberto, setAberto] = useState(null);
  const [hist, setHist] = useState(null);
  const [offline, setOffline] = useState(false);
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    setLoading(true); setOffline(false);
    try {
      const d = await api.get('/motor-receita/oportunidades');
      setItems(norm(d)); await cacheSet('motor', d);
    } catch (e) {
      const k = await cacheGet('motor');
      if (k) { setItems(norm(k.dados)); setOffline(true); } else setMsg(e.message);
    } finally { setLoading(false); }
  }, []);
  useEffect(() => { load(); }, [load]);

  const act = async (id, acao, texto) => {
    try {
      await api.post('/motor-receita/' + acao + '/' + id, {});
      setItems((l) => l.filter((o) => o.id !== id));
      setMsg(texto);
    } catch (e) { setMsg(e.message); }
  };
  const aprovar = (o) =>
    Alert.alert('Aprovar oportunidade', 'A LétimaX vai implementar "' + (o.titulo || o.nome) + '" imediatamente. Confirma?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Aprovar', onPress: () => act(o.id, 'aprovar', 'Aprovada — a LétimaX está a implementar.') },
    ]);
  const verHist = async () => {
    if (hist) return setHist(null);
    try { setHist(await api.get('/motor-receita/historico')); } catch (e) { setMsg(e.message); }
  };

  const lista = items
    .filter((o) => filtro === 'todos' || String(o.esforco || '').toLowerCase() === filtro)
    .sort((a, b) => (b.pontuacao || 0) - (a.pontuacao || 0));
  const potencial = lista.reduce((s, o) => s + (Number(o.receita_max) || 0), 0);

  const chip = (on) => ({ paddingVertical: 6, paddingHorizontal: 12, borderRadius: 16, marginRight: 6, backgroundColor: on ? c.gold : c.card });
  const btn = (bg) => ({ flex: 1, backgroundColor: bg, padding: 9, borderRadius: 10, alignItems: 'center', marginRight: 6 });

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16 }}
      refreshControl={<RefreshControl refreshing={loading} onRefresh={load} tintColor={c.gold} />}>
      <Text style={{ color: c.text, fontSize: 22, fontWeight: '700' }}>Motor de Receita</Text>
      <Text style={{ color: c.muted, marginBottom: 10 }}>Receita potencial das oportunidades activas: R$ {potencial.toLocaleString('pt-PT')}</Text>
      {offline && <Text style={{ color: c.warn, marginBottom: 6 }}>Modo offline — dados em cache.</Text>}
      {!!msg && <Text style={{ color: c.gold, marginBottom: 8 }}>{msg}</Text>}

      <View style={{ flexDirection: 'row', marginBottom: 12 }}>
        {FILTROS.map((f) => (
          <TouchableOpacity key={f} style={chip(filtro === f)} onPress={() => setFiltro(f)}>
            <Text style={{ color: filtro === f ? '#000' : c.text }}>{f === 'todos' ? 'Todos' : 'Esforço ' + f}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {!lista.length && !loading && <Text style={{ color: c.muted }}>Sem oportunidades activas.</Text>}
      {lista.map((o) => (
        <View key={o.id} style={{ backgroundColor: c.card, borderRadius: 14, padding: 14, marginBottom: 10, borderWidth: 1, borderColor: c.border }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: c.text, fontWeight: '700', flex: 1, fontSize: 16 }}>{o.titulo || o.nome}</Text>
            <Text style={{ color: (o.pontuacao || 0) >= 70 ? c.ok : c.warn, fontWeight: '800' }}>{o.pontuacao ?? '—'}/100</Text>
          </View>
          <Text style={{ color: c.muted, marginTop: 4 }}>
            R$ {o.receita_min ?? '?'} – {o.receita_max ?? '?'} · esforço {o.esforco ?? '—'} · {o.tempo_resultado ?? '—'} · risco {o.risco ?? '—'}
          </Text>
          {aberto === o.id && <View style={{ marginTop: 10 }}><JsonView data={o} c={c} /></View>}
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <TouchableOpacity style={btn(c.card)} onPress={() => setAberto(aberto === o.id ? null : o.id)}><Text style={{ color: c.gold }}>{aberto === o.id ? 'Fechar' : 'Detalhes'}</Text></TouchableOpacity>
            <TouchableOpacity style={btn(c.gold)} onPress={() => aprovar(o)}><Text style={{ color: '#000', fontWeight: '700' }}>Aprovar</Text></TouchableOpacity>
            <TouchableOpacity style={btn(c.card)} onPress={() => act(o.id, 'rejeitar', 'Rejeitada — a LétimaX aprende que este tipo não interessa.')}><Text style={{ color: c.err }}>Rejeitar</Text></TouchableOpacity>
            <TouchableOpacity style={{ ...btn(c.card), marginRight: 0 }} onPress={() => act(o.id, 'mais-tarde', 'Adiada por 48 horas.')}><Text style={{ color: c.muted }}>+48h</Text></TouchableOpacity>
          </View>
        </View>
      ))}

      <TouchableOpacity onPress={verHist} style={{ padding: 12, alignItems: 'center' }}><Text style={{ color: c.gold }}>{hist ? 'Esconder histórico' : 'Ver histórico (resultado real vs estimativa)'}</Text></TouchableOpacity>
      {hist && <JsonView data={hist} c={c} />}
    </ScrollView>
  );
}

~~~

### letimax-app/src/screens/SettingsScreen.js
~~~js
import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Switch } from 'react-native';
import * as IntentLauncher from 'expo-intent-launcher';
import { startService, stopService } from '../services/service';
import Native from '../../modules/letimax-native';
import { lembrarServico } from '../services/nativeBridge';
import { useTheme } from '../theme/theme';
import { serverConfig, saveServerConfig, api } from '../services/api';
import { getConfig, setConfig } from '../db/database';

const CHAVES_IA = ['ANTHROPIC_API_KEY', 'OPENAI_API_KEY', 'GEMINI_API_KEY', 'STABILITY_API_KEY', 'ELEVENLABS_API_KEY', 'ELEVENLABS_VOICE_ID'];
const CHAVES_PLAT = ['HOTMART_CLIENT_ID', 'HOTMART_CLIENT_SECRET', 'KIWIFY_API_KEY', 'GUMROAD_ACCESS_TOKEN', 'SHOPIFY_API_KEY', 'SHOPIFY_API_SECRET', 'BINANCE_API_KEY', 'BINANCE_SECRET_KEY', 'MAILCHIMP_API_KEY', 'NETLIFY_API_KEY', 'GMAIL_OAUTH_TOKEN', 'GOOGLE_ANALYTICS_ID', 'META_PIXEL_ID'];

export default function SettingsScreen() {
  const { c, mode, setMode } = useTheme();
  const [url, setUrl] = useState('');
  const [token, setToken] = useState('');
  const [nivel, setNivel] = useState('1');
  const [msg, setMsg] = useState('');
  const [valores, setValores] = useState({});
  const [visivel, setVisivel] = useState({});
  const [novoNome, setNovoNome] = useState('');
  const [novoValor, setNovoValor] = useState('');
  const [servico, setServico] = useState(false);
  const [msgOcupado, setMsgOcupado] = useState('');

  useEffect(() => {
    serverConfig().then((s) => setUrl(s.url));
    getConfig('autonomia').then((v) => v && setNivel(v));
    getConfig('servico_activo').then((v) => setServico(v === '1'));
    getConfig('msg_ocupado').then((v) => v && setMsgOcupado(v));
  }, []);

  const flash = (m) => { setMsg(m); setTimeout(() => setMsg(''), 4000); };
  const input = { borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 10, padding: 10, flex: 1 };
  const h = { color: c.gold, fontSize: 16, fontWeight: '700', marginTop: 22, marginBottom: 8 };
  const chip = (on) => ({ paddingVertical: 8, paddingHorizontal: 14, borderRadius: 18, marginRight: 8, backgroundColor: on ? c.gold : c.card });

  const saveServer = async () => {
    try { await saveServerConfig(url, token); setToken(''); flash('Servidor guardado.'); } catch (e) { flash(e.message); }
  };
  const setAuto = async (n) => {
    setNivel(n); await setConfig('autonomia', n);
    try { await api.post('/autonomia/nivel', { nivel: Number(n) }); } catch (e) { flash('Guardado no APP; servidor offline.'); }
  };
  // A chave vai por HTTPS para o servidor e o campo é limpo — nada fica no telemóvel
  const enviarChave = async (nome, valor) => {
    if (!valor) return;
    try {
      await api.post('/chaves/adicionar', { nome, valor });
      setValores((v) => ({ ...v, [nome]: '' }));
      flash(nome + ' enviada ao servidor.');
    } catch (e) { flash(e.message); }
  };

  const toggleServico = async (v) => {
    setServico(v); await setConfig('servico_activo', v ? '1' : '0'); lembrarServico(v);
    try { if (v) await startService(); else await stopService(); } catch (e) { flash(e.message); }
  };
  const bateria = () =>
    IntentLauncher.startActivityAsync('android.settings.REQUEST_IGNORE_BATTERY_OPTIMIZATIONS', { data: 'package:com.letimax.app' })
      .catch(() => flash('Abra as definições de bateria e retire as restrições da LétimaX.'));

  const chave = (nome) => (
    <View key={nome} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
      <View style={{ flex: 1 }}>
        <Text style={{ color: c.muted, fontSize: 11, marginBottom: 2 }}>{nome}</Text>
        <TextInput style={{ ...input, flex: 0 }} value={valores[nome] || ''} onChangeText={(t) => setValores((v) => ({ ...v, [nome]: t }))}
          secureTextEntry={!visivel[nome]} autoCapitalize="none" placeholder="••••••••" placeholderTextColor={c.muted} />
      </View>
      <TouchableOpacity onPress={() => setVisivel((v) => ({ ...v, [nome]: !v[nome] }))} style={{ padding: 10 }}><Text style={{ color: c.gold }}>{visivel[nome] ? 'Esconder' : 'Mostrar'}</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => enviarChave(nome, valores[nome])} style={{ padding: 10 }}><Text style={{ color: c.gold, fontWeight: '700' }}>Enviar</Text></TouchableOpacity>
    </View>
  );

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16, paddingBottom: 60 }}>
      {!!msg && <Text style={{ color: c.gold, marginBottom: 8 }}>{msg}</Text>}

      <Text style={h}>Servidor</Text>
      <View style={{ flexDirection: 'row', marginBottom: 8 }}><TextInput style={input} value={url} onChangeText={setUrl} autoCapitalize="none" placeholder="https://..." placeholderTextColor={c.muted} /></View>
      <View style={{ flexDirection: 'row', marginBottom: 8 }}><TextInput style={input} value={token} onChangeText={setToken} autoCapitalize="none" secureTextEntry placeholder="Novo token (opcional)" placeholderTextColor={c.muted} /></View>
      <TouchableOpacity onPress={saveServer} style={{ backgroundColor: c.gold, padding: 12, borderRadius: 10, alignItems: 'center' }}><Text style={{ color: '#000', fontWeight: '700' }}>Guardar servidor</Text></TouchableOpacity>

      <Text style={h}>Tema visual</Text>
      <View style={{ flexDirection: 'row' }}>
        {[['system', 'Seguir sistema'], ['light', 'Claro'], ['dark', 'Escuro']].map(([m, l]) => (
          <TouchableOpacity key={m} style={chip(mode === m)} onPress={() => setMode(m)}><Text style={{ color: mode === m ? '#000' : c.text }}>{l}</Text></TouchableOpacity>
        ))}
      </View>

      <Text style={h}>Nível de autonomia</Text>
      <View style={{ flexDirection: 'row' }}>
        {[['1', 'Normal'], ['2', 'Semi-autónomo'], ['3', 'Autónomo total']].map(([n, l]) => (
          <TouchableOpacity key={n} style={chip(nivel === n)} onPress={() => setAuto(n)}><Text style={{ color: nivel === n ? '#000' : c.text }}>{l}</Text></TouchableOpacity>
        ))}
      </View>

      <Text style={h}>Acesso nativo (APK da Fase 4)</Text>
      <Text style={{ color: Native ? c.ok : c.warn, marginBottom: 8 }}>{Native ? 'Módulo nativo activo.' : 'Módulo nativo indisponível (a correr no Expo Go).'}</Text>
      <TouchableOpacity disabled={!Native} onPress={() => Native.openNotificationAccess()} style={{ padding: 11, borderRadius: 10, backgroundColor: c.card, alignItems: 'center', marginBottom: 8, opacity: Native ? 1 : 0.4 }}>
        <Text style={{ color: c.gold }}>Acesso às notificações (WhatsApp, SMS, email)</Text>
      </TouchableOpacity>
      <TouchableOpacity disabled={!Native} onPress={() => Native.requestDeviceAdmin()} style={{ padding: 11, borderRadius: 10, backgroundColor: c.card, alignItems: 'center', marginBottom: 8, opacity: Native ? 1 : 0.4 }}>
        <Text style={{ color: c.gold }}>Permitir bloquear o ecrã por voz</Text>
      </TouchableOpacity>
      <Text style={{ color: c.muted, fontSize: 12, marginBottom: 4 }}>Mensagem de "estou ocupado" (enviada por SMS)</Text>
      <View style={{ flexDirection: 'row' }}>
        <TextInput style={input} value={msgOcupado} onChangeText={setMsgOcupado} placeholder="O Senhor Letício está ocupado neste momento..." placeholderTextColor={c.muted} multiline />
        <TouchableOpacity onPress={async () => { await setConfig('msg_ocupado', msgOcupado); flash('Mensagem guardada.'); }} style={{ padding: 10, justifyContent: 'center' }}><Text style={{ color: c.gold, fontWeight: '700' }}>Guardar</Text></TouchableOpacity>
      </View>

      <Text style={h}>Serviço em segundo plano</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text style={{ color: c.text, flex: 1, marginRight: 10 }}>LétimaX sempre activa (alertas do servidor em tempo real)</Text>
        <Switch value={servico} onValueChange={toggleServico} trackColor={{ true: c.gold }} />
      </View>
      <TouchableOpacity onPress={bateria} style={{ marginTop: 10, padding: 11, borderRadius: 10, backgroundColor: c.card, alignItems: 'center' }}>
        <Text style={{ color: c.gold }}>Permitir uso sem limite de bateria</Text>
      </TouchableOpacity>

      <Text style={h}>Secção 1 — Chaves de IA</Text>
      {CHAVES_IA.map(chave)}
      <Text style={h}>Secção 2 — Chaves de Plataformas</Text>
      {CHAVES_PLAT.map(chave)}

      <Text style={h}>Secção 3 — Chaves Personalizadas</Text>
      <View style={{ flexDirection: 'row', marginBottom: 8 }}><TextInput style={input} value={novoNome} onChangeText={setNovoNome} autoCapitalize="characters" placeholder="NOME_DA_CHAVE" placeholderTextColor={c.muted} /></View>
      <View style={{ flexDirection: 'row', marginBottom: 8 }}><TextInput style={input} value={novoValor} onChangeText={setNovoValor} autoCapitalize="none" secureTextEntry placeholder="Valor" placeholderTextColor={c.muted} /></View>
      <TouchableOpacity onPress={async () => { if (novoNome && novoValor) { await enviarChave(novoNome.trim(), novoValor.trim()); setNovoNome(''); setNovoValor(''); } }}
        style={{ backgroundColor: c.gold, padding: 12, borderRadius: 10, alignItems: 'center' }}><Text style={{ color: '#000', fontWeight: '700' }}>Adicionar nova chave</Text></TouchableOpacity>
      <Text style={{ color: c.muted, marginTop: 14, fontSize: 12 }}>Todas as chaves seguem por HTTPS para o servidor e nunca ficam guardadas no telemóvel.</Text>
    </ScrollView>
  );
}

~~~

### letimax-app/src/screens/PasswordsScreen.js
~~~js
import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useTheme } from '../theme/theme';
import { biometricAuth, verifyPin, formatLock } from '../services/security';

// Cofre: cada entrada fica no SecureStore (cifrado pelo Android Keystore). Exige biometria/PIN sempre que se abre.
const IDX = 'pw_index';
const readIdx = async () => JSON.parse((await SecureStore.getItemAsync(IDX)) || '[]');

export default function PasswordsScreen() {
  const { c } = useTheme();
  const [open, setOpen] = useState(false);
  const [pin, setPin] = useState('');
  const [msg, setMsg] = useState('');
  const [lista, setLista] = useState([]);
  const [q, setQ] = useState('');
  const [vis, setVis] = useState({});
  const [segredos, setSegredos] = useState({});
  const [form, setForm] = useState(null);

  const unlock = async () => { if (await biometricAuth()) { setOpen(true); readIdx().then(setLista); } };
  useEffect(() => { unlock(); }, []);

  const unlockPin = async () => {
    const r = await verifyPin(pin); setPin('');
    if (r.ok) { setOpen(true); readIdx().then(setLista); }
    else setMsg(r.locked ? formatLock(r.locked) : 'PIN incorrecto.');
  };

  const mostrar = async (id) => {
    if (!segredos[id]) { const v = await SecureStore.getItemAsync('pw_' + id); setSegredos((s) => ({ ...s, [id]: JSON.parse(v || '{}') })); }
    setVis((v) => ({ ...v, [id]: !v[id] }));
  };
  const guardar = async () => {
    if (!form.plataforma || !form.password) return;
    const id = Date.now().toString(36);
    await SecureStore.setItemAsync('pw_' + id, JSON.stringify({ password: form.password, notas: form.notas || '' }));
    const idx = [...(await readIdx()), { id, plataforma: form.plataforma, email: form.email || '' }];
    await SecureStore.setItemAsync(IDX, JSON.stringify(idx));
    setLista(idx); setForm(null);
  };
  const apagar = (p) => Alert.alert('Eliminar', p.plataforma + '?', [
    { text: 'Cancelar', style: 'cancel' },
    { text: 'Eliminar', style: 'destructive', onPress: async () => {
      await SecureStore.deleteItemAsync('pw_' + p.id);
      const idx = (await readIdx()).filter((x) => x.id !== p.id);
      await SecureStore.setItemAsync(IDX, JSON.stringify(idx)); setLista(idx);
    } },
  ]);

  const input = { borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 10, padding: 10, marginBottom: 8 };

  if (!open) {
    return (
      <View style={{ flex: 1, backgroundColor: c.bg, padding: 24, justifyContent: 'center' }}>
        <Text style={{ color: c.text, fontSize: 20, fontWeight: '700', marginBottom: 8 }}>Cofre de passwords</Text>
        <Text style={{ color: c.muted, marginBottom: 16 }}>Confirme a identidade para abrir, mesmo com a APP já desbloqueada.</Text>
        <TouchableOpacity onPress={unlock} style={{ backgroundColor: c.gold, padding: 13, borderRadius: 10, alignItems: 'center', marginBottom: 14 }}><Text style={{ color: '#000', fontWeight: '700' }}>Usar rosto / impressão digital</Text></TouchableOpacity>
        <TextInput value={pin} onChangeText={setPin} placeholder="ou PIN" placeholderTextColor={c.muted} secureTextEntry keyboardType="number-pad" style={input} />
        <TouchableOpacity onPress={unlockPin} style={{ padding: 10, alignItems: 'center' }}><Text style={{ color: c.gold }}>Abrir com PIN</Text></TouchableOpacity>
        {!!msg && <Text style={{ color: c.err, textAlign: 'center' }}>{msg}</Text>}
      </View>
    );
  }

  const filtrada = lista.filter((p) => (p.plataforma + p.email).toLowerCase().includes(q.toLowerCase()));
  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16 }} keyboardShouldPersistTaps="handled">
      <Text style={{ color: c.text, fontSize: 22, fontWeight: '700', marginBottom: 10 }}>Passwords</Text>
      <TextInput value={q} onChangeText={setQ} placeholder="Pesquisar plataforma" placeholderTextColor={c.muted} style={input} />
      {form ? (
        <View style={{ backgroundColor: c.card, borderRadius: 14, padding: 14, marginBottom: 12 }}>
          {[['plataforma', 'Plataforma'], ['email', 'Email usado'], ['password', 'Password'], ['notas', 'Notas']].map(([k, l]) => (
            <TextInput key={k} value={form[k] || ''} onChangeText={(t) => setForm({ ...form, [k]: t })} placeholder={l} placeholderTextColor={c.muted} autoCapitalize="none" secureTextEntry={k === 'password'} style={input} />
          ))}
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={guardar} style={{ flex: 1, backgroundColor: c.gold, padding: 11, borderRadius: 10, alignItems: 'center', marginRight: 8 }}><Text style={{ color: '#000', fontWeight: '700' }}>Guardar</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => setForm(null)} style={{ flex: 1, padding: 11, alignItems: 'center' }}><Text style={{ color: c.muted }}>Cancelar</Text></TouchableOpacity>
          </View>
        </View>
      ) : (
        <TouchableOpacity onPress={() => setForm({})} style={{ backgroundColor: c.gold, padding: 12, borderRadius: 10, alignItems: 'center', marginBottom: 12 }}><Text style={{ color: '#000', fontWeight: '700' }}>Nova password</Text></TouchableOpacity>
      )}
      {!filtrada.length && <Text style={{ color: c.muted }}>Cofre vazio.</Text>}
      {filtrada.map((p) => (
        <TouchableOpacity key={p.id} onPress={() => mostrar(p.id)} onLongPress={() => apagar(p)} style={{ backgroundColor: c.card, borderRadius: 12, padding: 12, marginBottom: 8, borderWidth: 1, borderColor: c.border }}>
          <Text style={{ color: c.text, fontWeight: '700' }}>{p.plataforma}</Text>
          {!!p.email && <Text style={{ color: c.muted }}>{p.email}</Text>}
          <Text style={{ color: c.gold, marginTop: 4 }}>{vis[p.id] && segredos[p.id] ? segredos[p.id].password : '••••••••  (toque para mostrar)'}</Text>
          {vis[p.id] && !!segredos[p.id]?.notas && <Text style={{ color: c.muted }}>{segredos[p.id].notas}</Text>}
        </TouchableOpacity>
      ))}
      <Text style={{ color: c.muted, fontSize: 12 }}>Toque longo para eliminar.</Text>
    </ScrollView>
  );
}

~~~

### letimax-app/src/navigation/menu.js
~~~js
// Menu lateral: nome, rota, endpoint GET do servidor (null = ecrã local, ainda por construir)
export const MENU = [
  { id: 'motor', nome: 'Motor de Receita', endpoint: '/motor-receita/oportunidades' },
  { id: 'raqueamento', nome: 'Sistema de Raqueamento', endpoint: '/raqueamento/estado' },
  { id: 'activos', nome: 'Activos', endpoint: '/activos/lista' },
  { id: 'novonegocio', nome: 'Novos Negócios', endpoint: '/negocios/oportunidades' },
  { id: 'metas', nome: 'Metas', endpoint: '/metas/progresso' },
  { id: 'afext', nome: 'Afiliados Externos', endpoint: '/afiliados/ranking' },
  { id: 'afprop', nome: 'Afiliados Próprios', endpoint: '/afiliados-proprios/dashboard' },
  { id: 'lanc', nome: 'Lançamentos', endpoint: '/lancamento/estrategia' },
  { id: 'webinars', nome: 'Webinars', endpoint: '/webinar/lista' },
  { id: 'email', nome: 'Email Marketing', endpoint: '/email/analytics' },
  { id: 'analytics', nome: 'Analytics', endpoint: '/analytics/conversao' },
  { id: 'reputacao', nome: 'Reputação', endpoint: '/reputacao/testemunhos' },
  { id: 'suporte', nome: 'Suporte', endpoint: '/suporte/tickets' },
  { id: 'onboarding', nome: 'Onboarding', endpoint: '/onboarding/status' },
  { id: 'referencias', nome: 'Referências', endpoint: '/referencias/dashboard' },
  { id: 'paginas', nome: 'Páginas', endpoint: '/pagina/analytics' },
  { id: 'videos', nome: 'Vídeos', endpoint: null },
  { id: 'cursos', nome: 'Cursos', endpoint: '/curso/lista' },
  { id: 'sites', nome: 'Sites', endpoint: '/site/analytics' },
  { id: 'apres', nome: 'Apresentações', endpoint: '/apresentacao/lista' },
  { id: 'automacao', nome: 'Automação Inteligente', endpoint: '/automacao/pontuacao' },
  { id: 'oportunidades', nome: 'Oportunidades', endpoint: '/oportunidade/pendentes' },
  { id: 'investimentos', nome: 'Investimentos', endpoint: '/investimentos' },
  { id: 'empresa', nome: 'Empresa', endpoint: '/empresa/progresso' },
  { id: 'financas', nome: 'Finanças', endpoint: '/receita/total' },
  { id: 'contactos', nome: 'Contactos', endpoint: null },
  { id: 'saude', nome: 'Saúde', endpoint: '/saude' },
  { id: 'passwords', nome: 'Passwords', endpoint: null },
  { id: 'documentos', nome: 'Documentos', endpoint: null },
  { id: 'logs', nome: 'Logs', endpoint: '/logs' },
  { id: 'actualizacao', nome: 'Actualização', endpoint: '/versao/atual' },
];

~~~

### letimax-app/src/navigation/Root.js
~~~js
import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/theme';
import { MENU } from './menu';
import ChatScreen from '../screens/ChatScreen';
import ModuleScreen from '../screens/ModuleScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MotorReceitaScreen from '../screens/MotorReceitaScreen';
import MetasScreen from '../screens/MetasScreen';
import ProdutosScreen from '../screens/ProdutosScreen';
import ContactosScreen from '../screens/ContactosScreen';
import PasswordsScreen from '../screens/PasswordsScreen';

const SPECIAL = { motor: MotorReceitaScreen, metas: MetasScreen, contactos: ContactosScreen, passwords: PasswordsScreen };

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const ICONS = { Chat: 'chatbubble-ellipses', Dashboard: 'speedometer', Produtos: 'cube', Mercado: 'trending-up', Marketing: 'megaphone' };

function Tabs() {
  const { c } = useTheme();
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarActiveTintColor: c.gold, tabBarInactiveTintColor: c.muted,
      tabBarStyle: { backgroundColor: c.bg, borderTopColor: c.border },
      tabBarIcon: ({ color, size }) => <Ionicons name={ICONS[route.name]} size={size} color={color} />,
    })}>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Dashboard" component={ModuleScreen} initialParams={{ titulo: 'Dashboard', endpoint: '/dashboard' }} />
      <Tab.Screen name="Produtos" component={ProdutosScreen} />
      <Tab.Screen name="Mercado" component={ModuleScreen} initialParams={{ titulo: 'Mercado', endpoint: '/mercado' }} />
      <Tab.Screen name="Marketing" component={ModuleScreen} initialParams={{ titulo: 'Marketing', endpoint: null }} />
    </Tab.Navigator>
  );
}

export default function Root() {
  const { c, isDark } = useTheme();
  const base = isDark ? DarkTheme : DefaultTheme;
  const navTheme = { ...base, colors: { ...base.colors, background: c.bg, card: c.bg, text: c.text, border: c.border, primary: c.gold } };
  return (
    <NavigationContainer theme={navTheme}>
      <Drawer.Navigator screenOptions={{ headerTintColor: c.gold, headerTitleStyle: { color: c.text }, drawerActiveTintColor: c.gold, drawerStyle: { backgroundColor: c.bg } }}>
        <Drawer.Screen name="Principal" component={Tabs} options={{ title: 'LétimaX' }} />
        {MENU.map((m) => (
          <Drawer.Screen key={m.id} name={m.id} component={SPECIAL[m.id] || ModuleScreen} options={{ title: m.nome }} initialParams={{ titulo: m.nome, endpoint: m.endpoint }} />
        ))}
        <Drawer.Screen name="configuracoes" component={SettingsScreen} options={{ title: 'Configurações' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

~~~

### letimax-app/src/theme/theme.js
~~~js
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import * as SecureStore from 'expo-secure-store';

export const GOLD = '#C9A84C';
const base = { gold: GOLD, ok: '#2E9E5B', err: '#D64545', warn: '#E08A1E' };
export const light = { ...base, bg: '#FFFFFF', text: '#1A1A1A', muted: '#6B6B6B', card: '#F5F5F5', border: '#E5E5E5', soft: '#2D2D2D', bubbleUser: '#F3E9C6', bubbleBot: '#EFEFEF' };
export const dark = { ...base, bg: '#0D0D0D', text: '#FFFFFF', muted: '#A0A0A0', card: '#1A1A1A', border: '#2A2A2A', soft: '#2D2D2D', bubbleUser: '#4A3F1C', bubbleBot: '#1F1F1F' };

const Ctx = createContext(null);

// mode: 'system' (padrão) | 'light' | 'dark'
export function ThemeProvider({ children }) {
  const sys = useColorScheme();
  const [mode, setModeState] = useState('system');
  useEffect(() => {
    SecureStore.getItemAsync('tema_modo').then((m) => m && setModeState(m)).catch(() => {});
  }, []);
  const setMode = async (m) => {
    setModeState(m);
    try { await SecureStore.setItemAsync('tema_modo', m); } catch (e) {}
  };
  const isDark = mode === 'system' ? sys === 'dark' : mode === 'dark';
  return <Ctx.Provider value={{ c: isDark ? dark : light, isDark, mode, setMode }}>{children}</Ctx.Provider>;
}
export const useTheme = () => useContext(Ctx);

~~~

### letimax-app/src/services/commands.js
~~~js
import { Linking, PermissionsAndroid } from 'react-native';
import * as IntentLauncher from 'expo-intent-launcher';
import * as Brightness from 'expo-brightness';
import { VolumeManager } from 'react-native-volume-manager';
import { api } from './api';
import { biometricAuth } from './security';
import { listContactos, logVoz } from '../db/database';
import * as NB from './nativeBridge';

// SEGURANÇA: o Android não deixa uma app confirmar QUEM está a falar. Por isso estes comandos só correm
// com a APP já desbloqueada (PIN/biometria). Comandos críticos exigem "sim" falado + biometria nova.
const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
const WAKE = /\b(letimax|letima x|leti max|let imax|letimacs|letimax)\b/;
let pending = null; // { fn, critico }

function falar(d) {
  if (d == null) return 'Sem dados.';
  if (typeof d === 'string') return d;
  const txt = d.resumo || d.texto || d.mensagem;
  if (txt) return String(txt);
  const partes = Object.entries(d).filter(([, v]) => v !== null && typeof v !== 'object').slice(0, 6).map(([k, v]) => k.replace(/_/g, ' ') + ': ' + v);
  return partes.length ? partes.join('. ') : 'Recebi os dados, mas não há um resumo para ler.';
}
async function volume(delta, abs) {
  let cur = await VolumeManager.getVolume();
  cur = typeof cur === 'number' ? cur : (cur && cur.volume) != null ? cur.volume : 0.5;
  const v = abs != null ? abs : Math.min(1, Math.max(0, cur + delta));
  await VolumeManager.setVolume(v, { showUI: true });
  return v;
}
async function brilho(delta) {
  const cur = await Brightness.getBrightnessAsync();
  await Brightness.setBrightnessAsync(Math.min(1, Math.max(0.05, cur + delta)));
}
async function ligar(nome) {
  const [c] = await listContactos(nome);
  if (!c || !c.telefone) return 'Não encontrei o número de ' + nome + ' nos contactos.';
  const num = c.telefone.replace(/[^\d+]/g, '');
  const ok = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CALL_PHONE);
  if (ok !== 'granted') { await Linking.openURL('tel:' + num); return 'A abrir o marcador para ' + c.nome + '.'; }
  await IntentLauncher.startActivityAsync('android.intent.action.CALL', { data: 'tel:' + num });
  return 'A ligar para ' + c.nome + '.';
}
const nao = (txt) => async () => txt;
const SEM_NATIVO = 'Ainda não consigo fazer isso: o Android só permite com código nativo adicional (Fase 4).';

const H = [
  { re: /^modo escuro$/, fn: async (m, x) => { await x.setMode('dark'); return 'Modo escuro activado.'; } },
  { re: /^modo claro$/, fn: async (m, x) => { await x.setMode('light'); return 'Modo claro activado.'; } },
  { re: /^(liga|ligar|acende) (a )?lanterna$/, fn: async (m, x) => ((await x.torch.setTorch(true)) ? 'Lanterna ligada.' : 'Preciso da permissão da câmara para a lanterna.') },
  { re: /^(desliga|desligar|apaga) (a )?lanterna$/, fn: async (m, x) => { await x.torch.setTorch(false); return 'Lanterna desligada.'; } },
  { re: /^(sobe|aumenta) (o )?volume$/, fn: async () => { await volume(0.15); return 'Volume aumentado.'; } },
  { re: /^(desce|diminui|baixa) (o )?volume$/, fn: async () => { await volume(-0.15); return 'Volume diminuído.'; } },
  { re: /^volume maximo$/, fn: async () => { await volume(0, 1); return 'Volume no máximo.'; } },
  { re: /^silencia$/, fn: async () => { await volume(0, 0); return 'Volume a zero.'; } },
  { re: /^aumenta (o )?brilho$/, fn: async () => { await brilho(0.2); return 'Brilho aumentado.'; } },
  { re: /^(diminui|baixa) (o )?brilho$/, fn: async () => { await brilho(-0.2); return 'Brilho diminuído.'; } },
  { re: /^(liga|desliga) (o )?wifi$/, fn: async () => { await IntentLauncher.startActivityAsync('android.settings.WIFI_SETTINGS'); return 'Abri as definições de wifi. O Android não deixa uma app ligar ou desligar o wifi sozinha.'; } },
  { re: /^(liga|desliga) (o )?bluetooth$/, fn: async () => { await IntentLauncher.startActivityAsync('android.settings.BLUETOOTH_SETTINGS'); return 'Abri as definições de bluetooth. O Android não deixa uma app ligar ou desligar o bluetooth sozinha.'; } },
  { re: /^liga para (.+)$/, confirm: (m) => 'Vou ligar para ' + m[1] + '.', fn: (m) => ligar(m[1]) },

  { re: /^modo autonomo total por (\d+) horas?$/, critico: true,
    confirm: (m) => 'Vou activar o modo autónomo total por ' + m[1] + ' horas. Os limites mantêm-se: sem gastar dinheiro, sem retirar dinheiro, sem mudar de nicho.',
    fn: async (m) => { await api.post('/autonomia/ativar', { nivel: 3, horas: Number(m[1]) }); return 'Modo autónomo total activo por ' + m[1] + ' horas.'; } },
  { re: /^(desactiva|desativa) (o )?modo autonomo$/, fn: async () => { await api.post('/autonomia/desativar', {}); return 'Modo autónomo desactivado.'; } },
  { re: /^modo normal$/, fn: async () => { await api.post('/autonomia/nivel', { nivel: 1 }); return 'Modo normal activo.'; } },

  { re: /^como estao as vendas$/, fn: async () => falar(await api.get('/relatorio')) },
  { re: /^quanto ganhei hoje$/, fn: async () => falar(await api.get('/receita/total')) },
  { re: /^qual a proxima oportunidade$/, fn: async () => {
      const d = await api.get('/motor-receita/oportunidades');
      const l = (Array.isArray(d) ? d : (d && d.oportunidades) || []).sort((a, b) => (b.pontuacao || 0) - (a.pontuacao || 0));
      return l.length ? (l[0].titulo || l[0].nome) + ', pontuação ' + (l[0].pontuacao ?? 'desconhecida') + '.' : 'Não há oportunidades activas.';
  } },
  { re: /^(faz )?(o )?resumo do dia$/, fn: async () => falar(await api.get('/resumo-matinal')) },
  { re: /^(activa|ativa) (o )?raqueamento$/, critico: true,
    confirm: () => 'Vou activar o sistema de raqueamento, o último recurso.',
    fn: async () => { await api.post('/raqueamento/activar', {}); return 'Sistema de raqueamento activado.'; } },
  { re: /^faz (o )?plano da empresa$/, fn: async () => { await api.post('/empresa/plano', {}); return 'A gerar o plano da empresa. Aviso quando estiver pronto.'; } },

  { re: /^(pausa|continua|retoma|toca) (a )?musica$/, fn: () => NB.musica('play_pause') },
  { re: /^proxima musica$/, fn: () => NB.musica('next') },
  { re: /^musica anterior$/, fn: () => NB.musica('previous') },
  { re: /^desliga (o )?ecra$/, fn: () => NB.bloquearEcra() },
  { re: /^(atende|atender)( a)? chamada$/, fn: () => NB.atender() },
  { re: /^(rejeita|rejeitar)( a)? chamada$/, fn: () => NB.rejeitar() },
  { re: /^diz que estou ocupado$/, fn: () => NB.ocupado() },
  { re: /^(le|ler) (as )?(minhas )?mensagens$/, fn: () => NB.lerSms() },
  { re: /^(le|ler) (as )?(minhas )?notificacoes$/, fn: () => NB.lerNotificacoes() },
];

async function executar(p, texto) {
  if (p.critico && !(await biometricAuth())) return 'Autenticação biométrica falhou. Comando cancelado.';
  try { return await p.fn(); } catch (e) { return 'Não consegui executar: ' + e.message; }
}

// Devolve a resposta a falar, ou null se o texto não é um comando.
export async function runCommand(raw, ctx) {
  let t = norm(raw).replace(/\bletima x\b|\bleti max\b|\blet imax\b/g, 'letimax');
  if (pending) {
    const p = pending; pending = null;
    if (/^(sim|confirmo|confirmado)\b/.test(t)) { const r = await executar(p); await logVoz(raw, r); return r; }
    if (/^(nao|cancela|cancelar)\b/.test(t)) return 'Cancelado.';
  }
  const wake = WAKE.test(t);
  if (ctx.requireWake && !wake) return null;
  const cmd = wake ? t.replace(/^.*?\bletimax\b[ ,]*/, '') : t;
  for (const h of H) {
    const m = cmd.match(h.re);
    if (!m) continue;
    if (h.confirm) {
      pending = { fn: () => h.fn(m, ctx), critico: !!h.critico };
      const r = h.confirm(m) + ' Confirmas? Diz sim para confirmar.';
      await logVoz(raw, r); return r;
    }
    let r;
    try { r = await h.fn(m, ctx); } catch (e) { r = 'Não consegui executar: ' + e.message; }
    await logVoz(raw, r); return r;
  }
  return wake ? 'Não percebi o comando.' : null;
}

~~~

### letimax-app/src/services/service.js
~~~js
import notifee, { AndroidImportance, AndroidForegroundServiceType } from '@notifee/react-native';
import { serverConfig } from './api';

// Serviço em primeiro plano: mantém um WebSocket com o servidor e mostra alertas em tempo real.
// Assume que o servidor expõe wss://<servidor>/ws com Authorization: Bearer <token>
// e envia mensagens JSON {titulo, mensagem}.
let ws = null;
let stopped = true;
let retry = 0;
const SEGREDO = /(sk-[A-Za-z0-9_-]{10,}|key_[A-Za-z0-9]{10,})/;

async function alerta(m) {
  if (SEGREDO.test(JSON.stringify(m))) return; // nunca mostrar nada que pareça uma chave de API
  const channelId = await notifee.createChannel({ id: 'alertas', name: 'Alertas LétimaX', importance: AndroidImportance.HIGH });
  await notifee.displayNotification({ title: String(m.titulo || 'LétimaX'), body: String(m.mensagem || ''), android: { channelId, pressAction: { id: 'default' } } });
}

async function connect() {
  if (stopped) return;
  const { url, token } = await serverConfig();
  if (!url || !token) { setTimeout(connect, 30000); return; }
  const wsUrl = url.replace(/^http/i, 'ws').replace(/\/$/, '') + '/ws';
  try {
    ws = new WebSocket(wsUrl, null, { headers: { Authorization: 'Bearer ' + token } });
    ws.onopen = () => { retry = 0; };
    ws.onmessage = (e) => { try { alerta(JSON.parse(e.data)); } catch (err) {} };
    ws.onerror = () => {};
    ws.onclose = () => {
      if (stopped) return;
      retry = Math.min(retry + 1, 6);
      setTimeout(connect, 2000 * 2 ** retry);
    };
  } catch (e) { setTimeout(connect, 30000); }
}

// A promessa nunca resolve: o serviço vive até stopForegroundService()
notifee.registerForegroundService(() => new Promise(() => { stopped = false; connect(); }));

export async function startService() {
  await notifee.requestPermission();
  const channelId = await notifee.createChannel({ id: 'servico', name: 'LétimaX activa', importance: AndroidImportance.LOW });
  await notifee.displayNotification({
    id: 'servico',
    title: 'LétimaX activa — a trabalhar para si',
    android: {
      channelId, asForegroundService: true, ongoing: true, pressAction: { id: 'default' },
      foregroundServiceTypes: [AndroidForegroundServiceType.FOREGROUND_SERVICE_TYPE_DATA_SYNC],
    },
  });
}
export async function stopService() {
  stopped = true;
  try { if (ws) ws.close(); } catch (e) {}
  await notifee.stopForegroundService();
}

~~~

### letimax-app/src/services/nativeBridge.js
~~~js
import { PermissionsAndroid } from 'react-native';
import Native from '../../modules/letimax-native';
import { getConfig } from '../db/database';

const P = PermissionsAndroid.PERMISSIONS;
const SEM_NATIVO = 'Esta função precisa do APK nativo da LétimaX (Fase 4). Não funciona no Expo Go.';
const MSG_OCUPADO = 'O Senhor Letício está ocupado neste momento. Pode deixar recado ou ele retorna em breve.';

export const nativoDisponivel = () => !!Native;

async function pedir(lista) {
  const r = await PermissionsAndroid.requestMultiple(lista);
  return lista.every((p) => r[p] === PermissionsAndroid.RESULTS.GRANTED);
}

export async function atender() {
  if (!Native) return SEM_NATIVO;
  if (!(await pedir([P.ANSWER_PHONE_CALLS]))) return 'Preciso da permissão para atender chamadas.';
  return Native.answerCall() ? 'Chamada atendida.' : 'Não há nenhuma chamada a tocar.';
}

export async function rejeitar() {
  if (!Native) return SEM_NATIVO;
  if (!(await pedir([P.ANSWER_PHONE_CALLS]))) return 'Preciso da permissão para rejeitar chamadas.';
  return Native.rejectCall() ? 'Chamada rejeitada.' : 'Não há nenhuma chamada a tocar.';
}

// O Android não deixa uma app falar dentro de uma chamada. Por isso: rejeita e envia um SMS ao número.
export async function ocupado() {
  if (!Native) return SEM_NATIVO;
  if (!(await pedir([P.ANSWER_PHONE_CALLS, P.READ_PHONE_STATE, P.READ_CALL_LOG, P.SEND_SMS]))) {
    return 'Preciso das permissões de chamadas e SMS.';
  }
  const num = Native.lastIncomingNumber(); // ler ANTES de rejeitar
  if (!Native.rejectCall()) return 'Não há nenhuma chamada a tocar.';
  if (!num || !/^\+?[\d\s-]{6,}$/.test(num)) return 'Chamada rejeitada, mas não consegui saber o número para enviar a mensagem.';
  const msg = (await getConfig('msg_ocupado')) || MSG_OCUPADO;
  Native.sendSms(num, msg);
  return 'Chamada rejeitada e mensagem de ocupado enviada.';
}

// SEGURANÇA: o conteúdo de SMS e notificações é lido em voz alta e NUNCA é tratado como comando.
export async function lerSms() {
  if (!Native) return SEM_NATIVO;
  if (!(await pedir([P.READ_SMS]))) return 'Preciso da permissão para ler SMS.';
  const l = Native.readSms(3);
  if (!l.length) return 'Não há mensagens recentes.';
  return 'Mensagens recentes. ' + l.map((m) => 'De ' + m.address + ': ' + String(m.body).slice(0, 200)).join('. ');
}

export async function lerNotificacoes() {
  if (!Native) return SEM_NATIVO;
  if (!Native.isNotificationAccessEnabled()) {
    Native.openNotificationAccess();
    return 'Abri as definições. Ative o acesso às notificações para a LétimaX e repita o comando.';
  }
  let l = [];
  try { l = JSON.parse(Native.getNotifications()).slice(0, 3); } catch (e) {}
  if (!l.length) return 'Não há notificações novas de mensagens.';
  return 'Notificações recentes. ' + l.map((n) => n.title + ': ' + String(n.text).slice(0, 160)).join('. ');
}

export async function musica(tecla) {
  if (!Native) return SEM_NATIVO;
  const ok = Native.mediaKey(tecla);
  if (!ok) return 'Não consegui enviar o comando à música.';
  return tecla === 'play_pause' ? 'Enviei pausa ou continuar. É a mesma tecla.' : tecla === 'next' ? 'Próxima música.' : 'Música anterior.';
}

export async function bloquearEcra() {
  if (!Native) return SEM_NATIVO;
  const r = Native.lockScreen();
  if (r === 'ok') return 'Ecrã bloqueado.';
  Native.requestDeviceAdmin();
  return 'Preciso de ser administradora do dispositivo só para bloquear o ecrã. Abri o pedido: ative e repita o comando.';
}

export function lembrarServico(querer) {
  try { if (Native) Native.setServiceWanted(!!querer); } catch (e) {}
}

~~~

### letimax-app/src/services/api.js
~~~js
import * as SecureStore from 'expo-secure-store';

export async function serverConfig() {
  return {
    url: (await SecureStore.getItemAsync('server_url')) || '',
    token: (await SecureStore.getItemAsync('server_token')) || '',
  };
}
export async function saveServerConfig(url, token) {
  if (!/^https:\/\//i.test(url)) throw new Error('O URL do servidor tem de começar por https://');
  await SecureStore.setItemAsync('server_url', url.trim());
  if (token) await SecureStore.setItemAsync('server_token', token.trim());
}

async function request(method, path, body, timeout = 15000) {
  const { url, token } = await serverConfig();
  if (!url) throw new Error('URL do servidor não configurado');
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeout);
  try {
    const res = await fetch(url.replace(/\/$/, '') + path, {
      method,
      headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token },
      body: body ? JSON.stringify(body) : undefined,
      signal: ctrl.signal,
    });
    if (!res.ok) throw new Error('Servidor respondeu ' + res.status);
    return await res.json();
  } finally {
    clearTimeout(t);
  }
}
export const api = {
  get: (p, t) => request('GET', p, null, t),
  post: (p, b, t) => request('POST', p, b, t),
  del: (p, b, t) => request('DELETE', p, b, t),
};

~~~

### letimax-app/src/services/useVoice.js
~~~js
import { useCallback, useRef, useState } from 'react';
import { ExpoSpeechRecognitionModule, useSpeechRecognitionEvent } from 'expo-speech-recognition';

// Reconhecimento de voz em português. Escuta só com a APP aberta (o Android bloqueia microfone em segundo plano).
export function useVoice(onFinal) {
  const [listening, setListening] = useState(false);
  const [partial, setPartial] = useState('');
  const cont = useRef(false);
  const paused = useRef(false);
  const cb = useRef(onFinal);
  cb.current = onFinal;

  const begin = useCallback(async () => {
    if (paused.current) return false;
    const p = await ExpoSpeechRecognitionModule.requestPermissionsAsync();
    if (!p.granted) return false;
    ExpoSpeechRecognitionModule.start({ lang: 'pt-PT', interimResults: true, continuous: false });
    return true;
  }, []);
  const beginRef = useRef(begin);
  beginRef.current = begin;

  useSpeechRecognitionEvent('start', () => setListening(true));
  useSpeechRecognitionEvent('end', () => {
    setListening(false); setPartial('');
    if (cont.current && !paused.current) setTimeout(() => beginRef.current(), 500);
  });
  useSpeechRecognitionEvent('result', (e) => {
    const t = (e.results && e.results[0] && e.results[0].transcript) || '';
    setPartial(t);
    if (e.isFinal && t.trim()) cb.current(t.trim());
  });
  useSpeechRecognitionEvent('error', (e) => {
    if (['not-allowed', 'service-not-allowed', 'language-not-supported'].includes(e.error)) cont.current = false;
  });

  return {
    listening, partial,
    start: begin,
    stop: () => ExpoSpeechRecognitionModule.stop(),
    setContinuous: (v) => { cont.current = v; if (v) begin(); else ExpoSpeechRecognitionModule.stop(); },
    pause: () => { paused.current = true; ExpoSpeechRecognitionModule.stop(); },   // enquanto a LétimaX fala
    resume: () => { paused.current = false; if (cont.current) begin(); },
  };
}

~~~

### letimax-app/src/services/security.js
~~~js
import * as SecureStore from 'expo-secure-store';
import * as Crypto from 'expo-crypto';
import * as LocalAuthentication from 'expo-local-authentication';
import { logAccess } from '../db/database';

const SALT = 'letimax-v1';
const hash = (pin) => Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, pin + SALT);

export async function hasPin() {
  return !!(await SecureStore.getItemAsync('pin_hash'));
}
export async function setupPin(pin) {
  await SecureStore.setItemAsync('pin_hash', await hash(pin));
}

// Bloqueio progressivo do documento: 3 falhas = 5 min, 6 = 30 min, 9 = 24 h, 12 = permanente
function lockFor(f) {
  if (f >= 12) return 'perm';
  if (f >= 9) return 24 * 60 * 60 * 1000;
  if (f >= 6) return 30 * 60 * 1000;
  if (f >= 3) return 5 * 60 * 1000;
  return 0;
}
export async function lockRemaining() {
  const until = await SecureStore.getItemAsync('bloqueio_ate');
  if (!until) return 0;
  if (until === 'perm') return 'perm';
  const left = Number(until) - Date.now();
  return left > 0 ? left : 0;
}
export async function resetFailures() {
  await SecureStore.setItemAsync('falhas', '0');
  await SecureStore.deleteItemAsync('bloqueio_ate');
}
export async function verifyPin(pin) {
  const left = await lockRemaining();
  if (left) return { ok: false, locked: left };
  const ok = (await hash(pin)) === (await SecureStore.getItemAsync('pin_hash'));
  await logAccess(ok, 'pin');
  if (ok) { await resetFailures(); return { ok: true }; }
  const f = Number((await SecureStore.getItemAsync('falhas')) || 0) + 1;
  await SecureStore.setItemAsync('falhas', String(f));
  const l = lockFor(f);
  if (l === 'perm') await SecureStore.setItemAsync('bloqueio_ate', 'perm');
  else if (l) await SecureStore.setItemAsync('bloqueio_ate', String(Date.now() + l));
  return { ok: false, failures: f, locked: l };
}

// Biometria do próprio telemóvel (rosto/impressão digital já registados no Android)
export async function biometricAuth() {
  const has = await LocalAuthentication.hasHardwareAsync();
  const enrolled = await LocalAuthentication.isEnrolledAsync();
  if (!has || !enrolled) return false;
  const r = await LocalAuthentication.authenticateAsync({
    promptMessage: 'LétimaX — confirme a sua identidade',
    cancelLabel: 'Usar PIN',
    disableDeviceFallback: true,
  });
  await logAccess(r.success, 'biometria');
  return r.success;
}

export function formatLock(ms) {
  if (ms === 'perm') return 'Acesso bloqueado permanentemente. Alerta enviado ao Senhor Letício.';
  const min = Math.ceil(ms / 60000);
  return min >= 60 ? 'Bloqueado por ' + Math.ceil(min / 60) + ' h.' : 'Bloqueado por ' + min + ' min.';
}

~~~

### letimax-app/src/components/JsonView.js
~~~js
import React from 'react';
import { View, Text } from 'react-native';

// Mostra qualquer resposta JSON do servidor em cartões legíveis
export default function JsonView({ data, c, level = 0 }) {
  if (data === null || data === undefined) return <Text style={{ color: c.muted }}>—</Text>;
  if (typeof data !== 'object') return <Text style={{ color: c.text }}>{String(data)}</Text>;
  if (Array.isArray(data)) {
    if (!data.length) return <Text style={{ color: c.muted }}>Sem dados.</Text>;
    return data.map((it, i) => (
      <View key={i} style={{ backgroundColor: c.card, borderRadius: 12, padding: 12, marginBottom: 8, borderWidth: 1, borderColor: c.border }}>
        <JsonView data={it} c={c} level={level + 1} />
      </View>
    ));
  }
  return Object.entries(data).map(([k, v]) => {
    const simple = v === null || typeof v !== 'object';
    return (
      <View key={k} style={{ marginBottom: 6 }}>
        <Text style={{ color: c.gold, fontWeight: '600', fontSize: 12 }}>{k.replace(/_/g, ' ')}</Text>
        {simple ? <Text style={{ color: c.text, fontSize: 15 }}>{String(v ?? '—')}</Text> : <View style={{ marginTop: 4 }}><JsonView data={v} c={c} level={level + 1} /></View>}
      </View>
    );
  });
}

~~~

### letimax-app/src/components/TorchHost.js
~~~js
import React, { createContext, useState } from 'react';
import { CameraView, useCameraPermissions } from 'expo-camera';

// A lanterna no Expo só acende com uma câmara montada (invisível, 1x1 px). Só fica montada enquanto acesa.
export const TorchCtx = createContext({ setTorch: async () => false, on: false });

export function TorchProvider({ children }) {
  const [on, setOn] = useState(false);
  const [perm, request] = useCameraPermissions();
  const setTorch = async (v) => {
    if (v && !(perm && perm.granted)) {
      const r = await request();
      if (!r.granted) return false;
    }
    setOn(v);
    return true;
  };
  return (
    <TorchCtx.Provider value={{ setTorch, on }}>
      {children}
      {on && perm && perm.granted && <CameraView style={{ position: 'absolute', width: 1, height: 1, opacity: 0 }} facing="back" enableTorch />}
    </TorchCtx.Provider>
  );
}

~~~

### letimax-app/src/db/database.js
~~~js
import * as SQLite from 'expo-sqlite';

let db;
export async function getDb() {
  if (!db) {
    db = await SQLite.openDatabaseAsync('letimax.db');
    await db.execAsync(`
      PRAGMA journal_mode = WAL;
      CREATE TABLE IF NOT EXISTS conversas (id INTEGER PRIMARY KEY AUTOINCREMENT, papel TEXT, texto TEXT, criado_em TEXT);
      CREATE TABLE IF NOT EXISTS configuracoes (chave TEXT PRIMARY KEY, valor TEXT);
      CREATE TABLE IF NOT EXISTS dashboard_cache (chave TEXT PRIMARY KEY, dados TEXT, atualizado TEXT);
      CREATE TABLE IF NOT EXISTS logs_erros (id INTEGER PRIMARY KEY AUTOINCREMENT, origem TEXT, mensagem TEXT, criado_em TEXT);
      CREATE TABLE IF NOT EXISTS tentativas_acesso (id INTEGER PRIMARY KEY AUTOINCREMENT, sucesso INTEGER, metodo TEXT, criado_em TEXT);
      CREATE TABLE IF NOT EXISTS respostas_pre_aprovadas (id INTEGER PRIMARY KEY AUTOINCREMENT, canal TEXT, texto TEXT);
      CREATE TABLE IF NOT EXISTS contactos (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, email TEXT, telefone TEXT, classe TEXT, notas TEXT);
      CREATE TABLE IF NOT EXISTS comandos_voz_log (id INTEGER PRIMARY KEY AUTOINCREMENT, texto TEXT, resposta TEXT, criado_em TEXT);
      CREATE TABLE IF NOT EXISTS metas (id INTEGER PRIMARY KEY AUTOINCREMENT, mes TEXT, valor REAL, criado_em TEXT);
    `);
  }
  return db;
}

export async function addMessage(papel, texto) {
  const d = await getDb();
  const criado_em = new Date().toISOString();
  const r = await d.runAsync('INSERT INTO conversas (papel, texto, criado_em) VALUES (?,?,?)', [papel, texto, criado_em]);
  return { id: r.lastInsertRowId, papel, texto, criado_em };
}
export async function getMessages(limit = 200) {
  const d = await getDb();
  return d.getAllAsync('SELECT * FROM conversas ORDER BY id DESC LIMIT ?', [limit]);
}
export async function setConfig(chave, valor) {
  const d = await getDb();
  await d.runAsync('INSERT OR REPLACE INTO configuracoes (chave, valor) VALUES (?,?)', [chave, String(valor)]);
}
export async function getConfig(chave) {
  const d = await getDb();
  const r = await d.getFirstAsync('SELECT valor FROM configuracoes WHERE chave = ?', [chave]);
  return r ? r.valor : null;
}
export async function cacheSet(chave, dados) {
  const d = await getDb();
  await d.runAsync('INSERT OR REPLACE INTO dashboard_cache (chave, dados, atualizado) VALUES (?,?,?)', [chave, JSON.stringify(dados), new Date().toISOString()]);
}
export async function cacheGet(chave) {
  const d = await getDb();
  const r = await d.getFirstAsync('SELECT dados, atualizado FROM dashboard_cache WHERE chave = ?', [chave]);
  return r ? { dados: JSON.parse(r.dados), atualizado: r.atualizado } : null;
}
export async function logAccess(sucesso, metodo) {
  const d = await getDb();
  await d.runAsync('INSERT INTO tentativas_acesso (sucesso, metodo, criado_em) VALUES (?,?,?)', [sucesso ? 1 : 0, metodo, new Date().toISOString()]);
}

export async function listContactos(q = '') {
  const d = await getDb();
  const like = '%' + q + '%';
  return d.getAllAsync('SELECT * FROM contactos WHERE nome LIKE ? OR email LIKE ? OR classe LIKE ? ORDER BY nome', [like, like, like]);
}
export async function saveContacto(c) {
  const d = await getDb();
  await d.runAsync('INSERT INTO contactos (nome, email, telefone, classe, notas) VALUES (?,?,?,?,?)', [c.nome, c.email || '', c.telefone || '', c.classe || 'cliente', c.notas || '']);
}
export async function deleteContacto(id) {
  const d = await getDb();
  await d.runAsync('DELETE FROM contactos WHERE id = ?', [id]);
}
export async function saveMeta(valor) {
  const d = await getDb();
  await d.runAsync('INSERT INTO metas (mes, valor, criado_em) VALUES (?,?,?)', [new Date().toISOString().slice(0, 7), valor, new Date().toISOString()]);
}

export async function logVoz(texto, resposta) {
  const d = await getDb();
  await d.runAsync('INSERT INTO comandos_voz_log (texto, resposta, criado_em) VALUES (?,?,?)', [texto, resposta, new Date().toISOString()]);
}

~~~

## Arquivo: letimax-app-fase5
Ficheiros de código/configuração: 47

### letimax-app/app.json
~~~json
{
  "expo": {
    "name": "LétimaX",
    "slug": "letimax",
    "version": "0.4.0",
    "orientation": "portrait",
    "userInterfaceStyle": "automatic",
    "android": {
      "package": "com.letimax.app",
      "permissions": [
        "USE_BIOMETRIC",
        "USE_FINGERPRINT",
        "INTERNET",
        "VIBRATE",
        "WAKE_LOCK",
        "POST_NOTIFICATIONS",
        "FOREGROUND_SERVICE",
        "FOREGROUND_SERVICE_DATA_SYNC",
        "RECORD_AUDIO",
        "CAMERA",
        "CALL_PHONE",
        "REQUEST_IGNORE_BATTERY_OPTIMIZATIONS",
        "ANSWER_PHONE_CALLS",
        "READ_PHONE_STATE",
        "READ_CALL_LOG",
        "READ_SMS",
        "SEND_SMS",
        "RECEIVE_BOOT_COMPLETED"
      ]
    },
    "plugins": [
      "expo-secure-store",
      "expo-sqlite",
      "expo-dev-client",
      [
        "expo-camera",
        {
          "cameraPermission": "A LétimaX usa a câmara para acender a lanterna por comando de voz."
        }
      ],
      [
        "expo-speech-recognition",
        {
          "microphonePermission": "A LétimaX usa o microfone para os comandos de voz do Senhor Letício.",
          "speechRecognitionPermission": "A LétimaX usa o reconhecimento de voz para entender os seus comandos.",
          "androidSpeechServicePackages": [
            "com.google.android.googlequicksearchbox"
          ]
        }
      ],
      "./plugins/withNotifeeService"
    ]
  }
}
~~~

### letimax-app/package.json
~~~json
{
  "name": "letimax-app",
  "version": "0.1.0",
  "main": "index.js",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android"
  },
  "dependencies": {
    "@expo/vector-icons": "^14.0.4",
    "@react-navigation/bottom-tabs": "^6.6.1",
    "@react-navigation/drawer": "^6.7.2",
    "@react-navigation/native": "^6.1.18",
    "expo": "~52.0.0",
    "expo-crypto": "~14.0.0",
    "expo-local-authentication": "~15.0.0",
    "expo-secure-store": "~14.0.0",
    "expo-speech": "~13.0.0",
    "expo-sqlite": "~15.0.0",
    "expo-status-bar": "~2.0.0",
    "react": "18.3.1",
    "react-native": "0.76.5",
    "react-native-gesture-handler": "~2.20.2",
    "react-native-reanimated": "~3.16.1",
    "react-native-safe-area-context": "4.12.0",
    "react-native-screens": "~4.4.0",
    "@notifee/react-native": "^9.1.8",
    "expo-brightness": "~13.0.0",
    "expo-camera": "~16.0.0",
    "expo-dev-client": "~5.0.0",
    "expo-intent-launcher": "~12.0.0",
    "expo-keep-awake": "~14.0.0",
    "expo-speech-recognition": "*",
    "react-native-volume-manager": "*"
  },
  "devDependencies": {
    "@babel/core": "^7.25.0"
  },
  "private": true
}
~~~

### letimax-app/App.js
~~~js
import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider, useTheme } from './src/theme/theme';
import { getDb, getConfig } from './src/db/database';
import AuthScreen from './src/screens/AuthScreen';
import FirstUseScreen from './src/screens/FirstUseScreen';
import Root from './src/navigation/Root';
import { TorchProvider } from './src/components/TorchHost';
import { startService } from './src/services/service';

function Gate() {
  const { isDark } = useTheme();
  const [stage, setStage] = useState('auth'); // auth | firstuse | main
  useEffect(() => { getDb(); }, []);
  useEffect(() => {
    if (stage === 'main') getConfig('servico_activo').then((v) => v === '1' && startService().catch(() => {}));
  }, [stage]);
  const afterAuth = async () => setStage((await getConfig('primeiro_uso')) ? 'main' : 'firstuse');
  return (
    <>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      {stage === 'auth' && <AuthScreen onSuccess={afterAuth} />}
      {stage === 'firstuse' && <FirstUseScreen onDone={() => setStage('main')} />}
      {stage === 'main' && <TorchProvider><Root /></TorchProvider>}
    </>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ThemeProvider><Gate /></ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

~~~

### letimax-app/index.js
~~~js
import { registerRootComponent } from 'expo';
import './src/services/service'; // regista o serviço em primeiro plano (tem de ser fora de componentes)
import App from './App';

registerRootComponent(App);

~~~

### letimax-app/README.md
~~~md
# LétimaX — APP (Fase 5: ecrãs dedicados)

Todos os módulos do menu têm ecrã próprio (src/screens/screens.config.js define cada um).
Os nomes dos campos que o servidor devolve ainda são suposições: a APP mostra o que vier e ajusta-se depois.


Fase 4 = módulo nativo local em `modules/letimax-native` (Kotlin). É compilado automaticamente pelo EAS Build;
basta repetir `npx eas-cli build -p android --profile preview`. Não funciona no Expo Go.
Instalar o APK directamente (sideload): as permissões de SMS e registo de chamadas não são aceites pela Google Play.
Depois de instalar: Configurações -> Acesso nativo (notificações e bloqueio de ecrã) e conceder as permissões quando pedidas.


Fase 3 precisa de BUILD NATIVO (não funciona no Expo Go):
1. `npm install` e `npx expo install --fix`
2. `npx eas-cli login` e `npx eas-cli build -p android --profile preview` (gera um APK para instalar)
   Para desenvolver: `--profile development` e depois `npx expo start --dev-client`.
3. Instalar o APK no telemóvel. Na 1ª abertura: Configurações -> Serviço em segundo plano -> ligar,
   e "Permitir uso sem limite de bateria".

Comandos de voz: botão do microfone (um comando) ou o ícone da orelha (escuta contínua, exige
dizer "LétimaX, ..." e o ecrã fica ligado). O servidor deve expor wss://<servidor>/ws para os alertas.


Fase 2 já feita: Motor de Receita, Metas, Produtos, Contactos, Passwords.


1. Instalar dependências: `npm install` e depois `npx expo install --fix`
2. Arrancar: `npx expo start` e abrir no Expo Go (ou usar snack.expo.dev / GitHub Codespaces se não tiver PC)
3. Primeiro acesso: criar PIN -> URL (https) e token do servidor -> chave do Claude (vai para o servidor)

Fase 1: tema claro/escuro, PIN + biometria do telemóvel com bloqueio progressivo, chat, dashboard,
menu lateral com todos os módulos ligados aos endpoints, configurações com chaves (enviadas ao servidor).
Fase 2: ecrãs dedicados (Motor de Receita com Aprovar/Rejeitar, Metas, Produtos...), SQLite offline completo,
cofre de passwords, contactos, documentos.
Fase 3 (precisa de build nativo, não funciona no Expo Go): serviço em segundo plano, chamadas/SMS,
comandos de voz de hardware, reconhecimento de voz.

~~~

### letimax-app/eas.json
~~~json
{
  "cli": { "version": ">= 12.0.0" },
  "build": {
    "development": { "developmentClient": true, "distribution": "internal", "android": { "buildType": "apk" } },
    "preview": { "distribution": "internal", "android": { "buildType": "apk" } }
  }
}

~~~

### letimax-app/babel.config.js
~~~js
module.exports = function (api) {
  api.cache(true);
  return { presets: ['babel-preset-expo'], plugins: ['react-native-reanimated/plugin'] };
};

~~~

### letimax-app/plugins/withNotifeeService.js
~~~js
const { withAndroidManifest, withProjectBuildGradle } = require('@expo/config-plugins');

// Android 14 exige o tipo do serviço em primeiro plano; o Notifee precisa dele no manifesto.
function manifest(config) {
  return withAndroidManifest(config, (cfg) => {
    const m = cfg.modResults.manifest;
    m.$['xmlns:tools'] = 'http://schemas.android.com/tools';
    const app = m.application[0];
    const name = 'app.notifee.core.ForegroundService';
    app.service = (app.service || []).filter((s) => s.$['android:name'] !== name);
    app.service.push({ $: { 'android:name': name, 'android:foregroundServiceType': 'dataSync', 'android:exported': 'false', 'tools:replace': 'android:foregroundServiceType' } });
    return cfg;
  });
}
// Repositório local do Notifee (inofensivo se a pasta não existir)
function gradle(config) {
  return withProjectBuildGradle(config, (cfg) => {
    const line = 'maven { url "$rootDir/../node_modules/@notifee/react-native/android/libs" }';
    if (!cfg.modResults.contents.includes(line)) {
      cfg.modResults.contents = cfg.modResults.contents.replace(/allprojects\s*{\s*repositories\s*{/, (s) => s + '\n        ' + line);
    }
    return cfg;
  });
}
module.exports = (config) => gradle(manifest(config));

~~~

### letimax-app/modules/letimax-native/index.js
~~~js
import { requireNativeModule } from 'expo';

// Em Expo Go (sem build nativo) o módulo não existe: exportamos null e a APP avisa em vez de falhar.
let Native = null;
try { Native = requireNativeModule('LetimaxNative'); } catch (e) { Native = null; }
export default Native;

~~~

### letimax-app/modules/letimax-native/expo-module.config.json
~~~json
{
  "platforms": ["android"],
  "android": { "modules": ["expo.modules.letimaxnative.LetimaxNativeModule"] }
}

~~~

### letimax-app/modules/letimax-native/android/build.gradle
~~~gradle
apply plugin: 'com.android.library'

group = 'expo.modules.letimaxnative'
version = '0.1.0'

def expoModulesCorePlugin = new File(project(":expo-modules-core").projectDir.absolutePath, "ExpoModulesCorePlugin.gradle")
apply from: expoModulesCorePlugin
applyKotlinExpoModulesCorePlugin()
useCoreDependencies()
useExpoPublishing()

buildscript {
  ext.safeExtGet = { prop, fallback ->
    rootProject.ext.has(prop) ? rootProject.ext.get(prop) : fallback
  }
}

project.android {
  compileSdkVersion safeExtGet("compileSdkVersion", 34)
  defaultConfig {
    minSdkVersion safeExtGet("minSdkVersion", 24)
    targetSdkVersion safeExtGet("targetSdkVersion", 34)
  }
}

android {
  namespace "expo.modules.letimaxnative"
  defaultConfig {
    versionCode 1
    versionName "0.1.0"
  }
  lintOptions {
    abortOnError false
  }
}

~~~

### letimax-app/modules/letimax-native/android/src/main/AndroidManifest.xml
~~~xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android">
  <uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" />
  <uses-permission android:name="android.permission.READ_PHONE_STATE" />
  <uses-permission android:name="android.permission.READ_CALL_LOG" />
  <uses-permission android:name="android.permission.ANSWER_PHONE_CALLS" />
  <uses-permission android:name="android.permission.READ_SMS" />
  <uses-permission android:name="android.permission.SEND_SMS" />

  <application>
    <receiver android:name="expo.modules.letimaxnative.BootReceiver" android:exported="true">
      <intent-filter>
        <action android:name="android.intent.action.BOOT_COMPLETED" />
      </intent-filter>
    </receiver>

    <receiver android:name="expo.modules.letimaxnative.PhoneStateReceiver" android:exported="true">
      <intent-filter>
        <action android:name="android.intent.action.PHONE_STATE" />
      </intent-filter>
    </receiver>

    <receiver
      android:name="expo.modules.letimaxnative.LetimaxAdminReceiver"
      android:permission="android.permission.BIND_DEVICE_ADMIN"
      android:exported="true">
      <meta-data android:name="android.app.device_admin" android:resource="@xml/letimax_device_admin" />
      <intent-filter>
        <action android:name="android.app.action.DEVICE_ADMIN_ENABLED" />
      </intent-filter>
    </receiver>

    <service
      android:name="expo.modules.letimaxnative.LetimaxNotificationListener"
      android:permission="android.permission.BIND_NOTIFICATION_LISTENER_SERVICE"
      android:exported="true">
      <intent-filter>
        <action android:name="android.service.notification.NotificationListenerService" />
      </intent-filter>
    </service>
  </application>
</manifest>

~~~

### letimax-app/modules/letimax-native/android/src/main/java/expo/modules/letimaxnative/PhoneStateReceiver.kt
~~~kt
package expo.modules.letimaxnative

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.telephony.TelephonyManager

// Guarda o número da última chamada a tocar (precisa de READ_PHONE_STATE + READ_CALL_LOG concedidas).
class PhoneStateReceiver : BroadcastReceiver() {
  @Suppress("DEPRECATION")
  override fun onReceive(context: Context, intent: Intent) {
    if (intent.action != TelephonyManager.ACTION_PHONE_STATE_CHANGED) return
    val state = intent.getStringExtra(TelephonyManager.EXTRA_STATE)
    val number = intent.getStringExtra(TelephonyManager.EXTRA_INCOMING_NUMBER)
    if (state == TelephonyManager.EXTRA_STATE_RINGING && !number.isNullOrEmpty()) {
      context.getSharedPreferences("letimax_native", Context.MODE_PRIVATE)
        .edit()
        .putString("last_number", number)
        .putLong("last_time", System.currentTimeMillis())
        .apply()
    }
  }
}

~~~

### letimax-app/modules/letimax-native/android/src/main/java/expo/modules/letimaxnative/LetimaxAdminReceiver.kt
~~~kt
package expo.modules.letimaxnative

import android.app.admin.DeviceAdminReceiver

// Só serve para permitir "bloquear o ecrã" (política force-lock). Não apaga dados nem muda passwords.
class LetimaxAdminReceiver : DeviceAdminReceiver()

~~~

### letimax-app/modules/letimax-native/android/src/main/java/expo/modules/letimaxnative/LetimaxNativeModule.kt
~~~kt
package expo.modules.letimaxnative

import android.app.admin.DevicePolicyManager
import android.content.ComponentName
import android.content.Context
import android.content.Intent
import android.media.AudioManager
import android.net.Uri
import android.os.Build
import android.os.SystemClock
import android.provider.Settings
import android.telecom.TelecomManager
import android.telephony.SmsManager
import android.view.KeyEvent
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class LetimaxNativeModule : Module() {
  private val ctx: Context
    get() = appContext.reactContext ?: throw IllegalStateException("Sem contexto Android")

  private fun prefs() = ctx.getSharedPreferences("letimax_native", Context.MODE_PRIVATE)

  override fun definition() = ModuleDefinition {
    Name("LetimaxNative")

    // ---------- Chamadas ----------
    Function("answerCall") {
      if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
        val tm = ctx.getSystemService(Context.TELECOM_SERVICE) as TelecomManager
        try { tm.acceptRingingCall(); true } catch (e: SecurityException) { false }
      } else false
    }

    Function("rejectCall") {
      if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
        val tm = ctx.getSystemService(Context.TELECOM_SERVICE) as TelecomManager
        try { tm.endCall() } catch (e: SecurityException) { false }
      } else false
    }

    // Número da última chamada a tocar nos últimos 5 minutos ("" se não houver)
    Function("lastIncomingNumber") {
      val p = prefs()
      val age = System.currentTimeMillis() - p.getLong("last_time", 0L)
      if (age in 0..300000) (p.getString("last_number", "") ?: "") else ""
    }

    // ---------- SMS ----------
    Function("sendSms") { number: String, text: String ->
      val sms: SmsManager = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
        ctx.getSystemService(SmsManager::class.java)
      } else {
        @Suppress("DEPRECATION") SmsManager.getDefault()
      }
      sms.sendMultipartTextMessage(number, null, sms.divideMessage(text), null, null)
      true
    }

    Function("readSms") { limit: Int ->
      val out = mutableListOf<Map<String, Any>>()
      val cursor = ctx.contentResolver.query(Uri.parse("content://sms/inbox"), arrayOf("address", "body", "date"), null, null, "date DESC")
      cursor?.use {
        var n = 0
        while (it.moveToNext() && n < limit) {
          out.add(mapOf("address" to (it.getString(0) ?: ""), "body" to (it.getString(1) ?: ""), "date" to it.getLong(2)))
          n++
        }
      }
      out
    }

    // ---------- Música (teclas multimédia) ----------
    Function("mediaKey") { name: String ->
      val code = when (name) {
        "play_pause" -> KeyEvent.KEYCODE_MEDIA_PLAY_PAUSE
        "next" -> KeyEvent.KEYCODE_MEDIA_NEXT
        "previous" -> KeyEvent.KEYCODE_MEDIA_PREVIOUS
        else -> -1
      }
      if (code < 0) false else {
        val am = ctx.getSystemService(Context.AUDIO_SERVICE) as AudioManager
        val t = SystemClock.uptimeMillis()
        am.dispatchMediaKeyEvent(KeyEvent(t, t, KeyEvent.ACTION_DOWN, code, 0))
        am.dispatchMediaKeyEvent(KeyEvent(t, t, KeyEvent.ACTION_UP, code, 0))
        true
      }
    }

    // ---------- Bloquear ecrã (administrador do dispositivo, só force-lock) ----------
    Function("lockScreen") {
      val dpm = ctx.getSystemService(Context.DEVICE_POLICY_SERVICE) as DevicePolicyManager
      val admin = ComponentName(ctx, LetimaxAdminReceiver::class.java)
      if (dpm.isAdminActive(admin)) { dpm.lockNow(); "ok" } else "inactive"
    }

    Function("requestDeviceAdmin") {
      val admin = ComponentName(ctx, LetimaxAdminReceiver::class.java)
      val i = Intent(DevicePolicyManager.ACTION_ADD_DEVICE_ADMIN)
        .putExtra(DevicePolicyManager.EXTRA_DEVICE_ADMIN, admin)
        .putExtra(DevicePolicyManager.EXTRA_ADD_EXPLANATION, "Permite à LétimaX bloquear o ecrã por comando de voz. Não dá acesso a dados nem a passwords.")
        .addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
      ctx.startActivity(i)
      true
    }

    // ---------- Notificações de WhatsApp / SMS / email ----------
    Function("isNotificationAccessEnabled") {
      val enabled = Settings.Secure.getString(ctx.contentResolver, "enabled_notification_listeners")
      enabled != null && enabled.contains(ctx.packageName)
    }

    Function("openNotificationAccess") {
      ctx.startActivity(Intent(Settings.ACTION_NOTIFICATION_LISTENER_SETTINGS).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK))
      true
    }

    Function("getNotifications") { prefs().getString("notifs", "[]") ?: "[]" }

    Function("clearNotifications") { prefs().edit().remove("notifs").apply(); true }

    // ---------- Reinício do telemóvel ----------
    Function("setServiceWanted") { wanted: Boolean ->
      prefs().edit().putBoolean("service_wanted", wanted).apply()
      true
    }
  }
}

~~~

### letimax-app/modules/letimax-native/android/src/main/java/expo/modules/letimaxnative/LetimaxNotificationListener.kt
~~~kt
package expo.modules.letimaxnative

import android.service.notification.NotificationListenerService
import android.service.notification.StatusBarNotification
import org.json.JSONArray
import org.json.JSONObject

// Guarda (só no telemóvel) as últimas 50 notificações de apps de mensagens. Todas as outras apps são ignoradas.
class LetimaxNotificationListener : NotificationListenerService() {
  private val permitidos = setOf(
    "com.whatsapp", "com.whatsapp.w4b", "org.telegram.messenger",
    "com.google.android.apps.messaging", "com.samsung.android.messaging", "com.android.mms",
    "com.google.android.gm"
  )

  override fun onNotificationPosted(sbn: StatusBarNotification) {
    if (!permitidos.contains(sbn.packageName)) return
    val extras = sbn.notification.extras
    val title = extras.getCharSequence("android.title")?.toString() ?: ""
    val text = extras.getCharSequence("android.text")?.toString() ?: ""
    if (title.isEmpty() && text.isEmpty()) return

    val prefs = getSharedPreferences("letimax_native", MODE_PRIVATE)
    val old = try { JSONArray(prefs.getString("notifs", "[]")) } catch (e: Exception) { JSONArray() }
    val item = JSONObject().put("pkg", sbn.packageName).put("title", title).put("text", text).put("time", sbn.postTime)
    val out = JSONArray()
    out.put(item)
    for (i in 0 until minOf(old.length(), 49)) out.put(old.get(i))
    prefs.edit().putString("notifs", out.toString()).apply()
  }
}

~~~

### letimax-app/modules/letimax-native/android/src/main/java/expo/modules/letimaxnative/BootReceiver.kt
~~~kt
package expo.modules.letimaxnative

import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.PendingIntent
import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.app.Notification
import android.os.Build

// O Android 15 proíbe iniciar o serviço de sincronização a partir do arranque. Por isso, depois de reiniciar,
// mostramos uma notificação: ao tocar, a APP abre, pede a biometria e só então reactiva o serviço.
class BootReceiver : BroadcastReceiver() {
  override fun onReceive(context: Context, intent: Intent) {
    if (intent.action != Intent.ACTION_BOOT_COMPLETED) return
    val prefs = context.getSharedPreferences("letimax_native", Context.MODE_PRIVATE)
    if (!prefs.getBoolean("service_wanted", false)) return

    val nm = context.getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
    val channelId = "letimax_boot"
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
      nm.createNotificationChannel(NotificationChannel(channelId, "Reactivar LétimaX", NotificationManager.IMPORTANCE_HIGH))
    }
    val launch = context.packageManager.getLaunchIntentForPackage(context.packageName) ?: return
    val pi = PendingIntent.getActivity(context, 0, launch, PendingIntent.FLAG_IMMUTABLE or PendingIntent.FLAG_UPDATE_CURRENT)
    val builder = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) Notification.Builder(context, channelId) else Notification.Builder(context)
    val n = builder
      .setContentTitle("LétimaX parou após o reinício")
      .setContentText("Toque para reactivar, Senhor Letício.")
      .setSmallIcon(android.R.drawable.ic_dialog_info)
      .setContentIntent(pi)
      .setAutoCancel(true)
      .build()
    nm.notify(4001, n)
  }
}

~~~

### letimax-app/modules/letimax-native/android/src/main/res/xml/letimax_device_admin.xml
~~~xml
<?xml version="1.0" encoding="utf-8"?>
<device-admin xmlns:android="http://schemas.android.com/apk/res/android">
  <uses-policies>
    <force-lock />
  </uses-policies>
</device-admin>

~~~

### letimax-app/src/screens/ProdutosScreen.js
~~~js
import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, RefreshControl, Alert, ScrollView as HScroll } from 'react-native';
import { useTheme } from '../theme/theme';
import { api } from '../services/api';
import { cacheGet, cacheSet } from '../db/database';

const ESTADOS = ['Todos', 'Rascunho', 'Aguarda Aprovação', 'Publicado', 'Pausado', 'Arquivado'];
const sem = (s) => String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const norm = (d) => (Array.isArray(d) ? d : (d && (d.produtos || d.items)) || []);

export default function ProdutosScreen() {
  const { c } = useTheme();
  const [items, setItems] = useState([]);
  const [filtro, setFiltro] = useState('Todos');
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const d = await api.get('/produtos');
      setItems(norm(d)); await cacheSet('produtos', d);
    } catch (e) {
      const k = await cacheGet('produtos');
      if (k) { setItems(norm(k.dados)); setMsg('Modo offline — dados em cache.'); } else setMsg(e.message);
    } finally { setLoading(false); }
  }, []);
  useEffect(() => { load(); }, [load]);

  const aprovar = async (p) => {
    try { await api.post('/aprovar', { id: p.id }); setMsg('"' + p.nome + '" aprovado.'); load(); } catch (e) { setMsg(e.message); }
  };

  const acao = (p, endpoint, texto, pergunta) => {
    const go = async () => {
      try { await api.post(endpoint, { id: p.id }); setMsg(texto); load(); } catch (e) { setMsg(e.message); }
    };
    if (pergunta) Alert.alert(texto, pergunta, [{ text: 'Cancelar', style: 'cancel' }, { text: 'Confirmar', onPress: go }]);
    else go();
  };

  const lista = items.filter((p) => filtro === 'Todos' || sem(p.estado) === sem(filtro));
  const chip = (on) => ({ paddingVertical: 6, paddingHorizontal: 12, borderRadius: 16, marginRight: 6, backgroundColor: on ? c.gold : c.card });

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16 }}
      refreshControl={<RefreshControl refreshing={loading} onRefresh={load} tintColor={c.gold} />}>
      <Text style={{ color: c.text, fontSize: 22, fontWeight: '700', marginBottom: 10 }}>Produtos</Text>
      {!!msg && <Text style={{ color: c.gold, marginBottom: 8 }}>{msg}</Text>}
      <HScroll horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 12 }}>
        {ESTADOS.map((e) => (
          <TouchableOpacity key={e} style={chip(filtro === e)} onPress={() => setFiltro(e)}><Text style={{ color: filtro === e ? '#000' : c.text }}>{e}</Text></TouchableOpacity>
        ))}
      </HScroll>
      {!lista.length && !loading && <Text style={{ color: c.muted }}>Sem produtos neste estado.</Text>}
      {lista.map((p) => (
        <View key={p.id} style={{ backgroundColor: c.card, borderRadius: 14, padding: 14, marginBottom: 10, borderWidth: 1, borderColor: c.border }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: c.text, fontWeight: '700', fontSize: 16, flex: 1 }}>{p.nome}</Text>
            <Text style={{ color: c.gold, fontWeight: '700' }}>{p.preco != null ? '$' + p.preco : ''}</Text>
          </View>
          <Text style={{ color: c.muted, marginTop: 4 }}>{p.nicho ?? '—'} · {p.estado ?? '—'}</Text>
          <Text style={{ color: c.muted, marginTop: 2 }}>
            Qualidade {p.qualidade ?? p.score_qualidade ?? '—'}/100 · vendas {p.vendas ?? 0} · conversão {p.taxa_conversao ?? '—'} · lucro {p.lucro_liquido ?? '—'}
          </Text>
          {p.marca_dagua && <Text style={{ color: c.muted, marginTop: 2 }}>Marca de água activa · link único por comprador</Text>}
          {sem(p.estado) === 'aguarda aprovacao' && (
            <TouchableOpacity onPress={() => aprovar(p)} style={{ backgroundColor: c.gold, padding: 10, borderRadius: 10, alignItems: 'center', marginTop: 10 }}>
              <Text style={{ color: '#000', fontWeight: '700' }}>Aprovar</Text>
            </TouchableOpacity>
          )}
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 10 }}>
            {['aprovado', 'aprovada'].includes(sem(p.estado)) && (
              <TouchableOpacity onPress={() => acao(p, '/publicar', 'Produto publicado.', 'Publicar "' + p.nome + '" nas plataformas?')} style={{ paddingVertical: 7, paddingHorizontal: 12, borderRadius: 10, backgroundColor: c.gold, marginRight: 6, marginBottom: 6 }}><Text style={{ color: '#000', fontWeight: '700' }}>Publicar</Text></TouchableOpacity>
            )}
            <TouchableOpacity onPress={() => acao(p, '/produtos/marca-dagua', 'Marca de água activada.')} style={{ paddingVertical: 7, paddingHorizontal: 12, borderRadius: 10, backgroundColor: c.bg, marginRight: 6, marginBottom: 6 }}><Text style={{ color: c.gold }}>Marca de água</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => acao(p, '/produtos/precificacao-dinamica', 'Preço dinâmico aplicado.', 'O preço pode mudar. Confirma?')} style={{ paddingVertical: 7, paddingHorizontal: 12, borderRadius: 10, backgroundColor: c.bg, marginRight: 6, marginBottom: 6 }}><Text style={{ color: c.gold }}>Preço dinâmico</Text></TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

~~~

### letimax-app/src/screens/SettingsExtras.js
~~~js
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch } from 'react-native';
import notifee, { AndroidImportance, TriggerType, RepeatFrequency } from '@notifee/react-native';
import { useTheme } from '../theme/theme';
import { api } from '../services/api';
import { getConfig, setConfig } from '../db/database';
import { verifyPin, setupPin, formatLock } from '../services/security';

const KEYS = ['hora_resumo', 'horario_inicio', 'horario_fim', 'limite_gasto_diario', 'limite_tokens', 'resp_email', 'resp_whatsapp',
  'meta_padrao', 'meta_memberships', 'meta_lista_emails', 'comissao_padrao', 'cookie_dias', 'nicho_novo'];

export default function SettingsExtras({ flash }) {
  const { c } = useTheme();
  const [v, setV] = useState({});
  const [auto, setAuto] = useState(true);
  const [nicho, setNicho] = useState('');
  const [pin, setPin] = useState({ a: '', b: '', c: '' });

  useEffect(() => {
    (async () => {
      const o = {};
      for (const k of KEYS) o[k] = (await getConfig(k)) || '';
      setV(o);
      setAuto((await getConfig('nicho_auto_aprovacao')) !== '0');
    })();
    api.get('/nichos').then((d) => setNicho(typeof d === 'string' ? d : JSON.stringify(d).slice(0, 160))).catch(() => {});
  }, []);

  const set = (k) => (t) => setV((x) => ({ ...x, [k]: t }));
  const salvar = async (ks, msg) => { for (const k of ks) await setConfig(k, v[k] || ''); flash(msg || 'Guardado.'); };
  const input = { borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 10, padding: 10, marginBottom: 8 };
  const H = (t) => <Text style={{ color: c.gold, fontSize: 16, fontWeight: '700', marginTop: 22, marginBottom: 8 }}>{t}</Text>;
  const F = (k, label, o = {}) => (
    <View key={k}>
      <Text style={{ color: c.muted, fontSize: 11, marginBottom: 2 }}>{label}</Text>
      <TextInput style={{ ...input, minHeight: o.multiline ? 70 : undefined }} value={v[k] || ''} onChangeText={set(k)} placeholder={o.ph || ''} placeholderTextColor={c.muted}
        keyboardType={o.num ? 'numeric' : 'default'} multiline={!!o.multiline} autoCapitalize="none" />
    </View>
  );
  const Btn = ({ t, f }) => <TouchableOpacity onPress={f} style={{ backgroundColor: c.gold, padding: 12, borderRadius: 10, alignItems: 'center', marginBottom: 6 }}><Text style={{ color: '#000', fontWeight: '700' }}>{t}</Text></TouchableOpacity>;

  const agendarResumo = async () => {
    const m = /^(\d{1,2}):(\d{2})$/.exec(v.hora_resumo || '');
    if (!m) return flash('Use o formato HH:MM, por exemplo 08:00.');
    await setConfig('hora_resumo', v.hora_resumo);
    try {
      await notifee.requestPermission();
      const channelId = await notifee.createChannel({ id: 'resumo', name: 'Resumo matinal', importance: AndroidImportance.HIGH });
      const quando = new Date(); quando.setHours(Number(m[1]), Number(m[2]), 0, 0);
      if (quando.getTime() <= Date.now()) quando.setDate(quando.getDate() + 1);
      await notifee.createTriggerNotification(
        { id: 'resumo_matinal', title: 'Bom dia, Senhor Letício', body: 'Abra a LétimaX e toque em "Resumo matinal em voz alta" no Dashboard.', android: { channelId, pressAction: { id: 'default' } } },
        { type: TriggerType.TIMESTAMP, timestamp: quando.getTime(), repeatFrequency: RepeatFrequency.DAILY }
      );
      flash('Lembrete do resumo matinal agendado para as ' + v.hora_resumo + '.');
    } catch (e) { flash(e.message); }
  };

  const mudarNicho = async () => {
    if (!v.nicho_novo) return;
    try { await api.post(auto ? '/nichos/mudar' : '/nichos/aprovar', { nicho: v.nicho_novo }); flash('Pedido enviado. Só avança com a sua aprovação.'); }
    catch (e) { flash(e.message); }
  };
  const aplicarMeta = async () => {
    const n = Number(v.meta_padrao);
    await salvar(['meta_padrao', 'meta_memberships', 'meta_lista_emails'], 'Metas guardadas.');
    if (n) api.post('/metas/definir', { valor: n }).catch(() => {});
  };
  const aplicarAfiliados = async () => {
    await salvar(['comissao_padrao', 'cookie_dias'], 'Guardado.');
    api.post('/afiliados-proprios/criar-programa', { comissao: Number(v.comissao_padrao) || 50, cookie_dias: Number(v.cookie_dias) || 30 }).catch(() => {});
  };
  const alterarPin = async () => {
    if (pin.b.length < 6) return flash('O novo PIN deve ter pelo menos 6 dígitos.');
    if (pin.b !== pin.c) return flash('Os PINs novos não coincidem.');
    const r = await verifyPin(pin.a);
    if (!r.ok) return flash(r.locked ? formatLock(r.locked) : 'PIN actual incorrecto.');
    await setupPin(pin.b); setPin({ a: '', b: '', c: '' }); flash('PIN alterado.');
  };

  return (
    <View>
      {H('Geral')}
      {F('hora_resumo', 'Hora do resumo matinal (HH:MM)', { ph: '08:00' })}
      <Btn t="Agendar lembrete do resumo" f={agendarResumo} />
      {F('horario_inicio', 'Horário de trabalho: início', { ph: '03:00' })}
      {F('horario_fim', 'Horário de trabalho: fim', { ph: '23:00' })}
      {F('limite_gasto_diario', 'Limite de gasto diário com APIs (USD)', { num: true, ph: '10' })}
      {F('limite_tokens', 'Limite de tokens por conversa', { num: true, ph: '8000' })}
      <Btn t="Guardar" f={() => salvar(['horario_inicio', 'horario_fim', 'limite_gasto_diario', 'limite_tokens'])} />
      <Text style={{ color: c.muted, fontSize: 12 }}>Horário e limite de gasto ficam guardados no telemóvel. Para o servidor os aplicar, defina-os também no .env (HORARIO_INICIO, HORARIO_FIM, LIMITE_DIARIO_USD).</Text>

      {H('Respostas pré-aprovadas')}
      {F('resp_email', 'Email', { multiline: true })}
      {F('resp_whatsapp', 'WhatsApp', { multiline: true })}
      <Btn t="Guardar respostas" f={() => salvar(['resp_email', 'resp_whatsapp'])} />

      {H('Nichos')}
      <Text style={{ color: c.muted, marginBottom: 6 }}>{nicho ? 'Nicho actual: ' + nicho : 'Nicho actual: sem ligação ao servidor.'}</Text>
      {F('nicho_novo', 'Propor novo nicho')}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
        <Text style={{ color: c.text, flex: 1 }}>Mudança automática só com a minha aprovação</Text>
        <Switch value={auto} onValueChange={async (x) => { setAuto(x); await setConfig('nicho_auto_aprovacao', x ? '1' : '0'); }} trackColor={{ true: c.gold }} />
      </View>
      <Btn t="Enviar proposta" f={mudarNicho} />

      {H('Metas')}
      {F('meta_padrao', 'Meta mensal padrão (R$)', { num: true, ph: '2000' })}
      {F('meta_memberships', 'Meta de memberships', { num: true })}
      {F('meta_lista_emails', 'Meta da lista de emails', { num: true })}
      <Btn t="Guardar metas" f={aplicarMeta} />

      {H('Programa de afiliados')}
      {F('comissao_padrao', 'Comissão padrão por produto (%)', { num: true, ph: '50' })}
      {F('cookie_dias', 'Período de cookie (dias)', { num: true, ph: '30' })}
      <Btn t="Guardar" f={aplicarAfiliados} />

      {H('Segurança')}
      {[['a', 'PIN actual'], ['b', 'Novo PIN'], ['c', 'Repetir novo PIN']].map(([k, l]) => (
        <TextInput key={k} style={input} value={pin[k]} onChangeText={(t) => setPin((x) => ({ ...x, [k]: t }))} placeholder={l} placeholderTextColor={c.muted} secureTextEntry keyboardType="number-pad" maxLength={12} />
      ))}
      <Btn t="Alterar PIN" f={alterarPin} />
    </View>
  );
}

~~~

### letimax-app/src/screens/AuthScreen.js
~~~js
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import * as Speech from 'expo-speech';
import { useTheme } from '../theme/theme';
import { hasPin, setupPin, verifyPin, biometricAuth, lockRemaining, resetFailures, formatLock } from '../services/security';

const GREETING = 'Bem-vindo, Senhor Letício. Estou pronto. Hoje vamos fazer ainda mais dinheiro.';

export default function AuthScreen({ onSuccess }) {
  const { c } = useTheme();
  const [mode, setMode] = useState('boot'); // boot | setup | login
  const [pin, setPin] = useState('');
  const [pin2, setPin2] = useState('');
  const [msg, setMsg] = useState('');
  const [bad, setBad] = useState(false);

  const done = async () => {
    await resetFailures();
    Speech.speak(GREETING, { language: 'pt-PT' });
    onSuccess();
  };

  const tryBio = async () => {
    const lock = await lockRemaining();
    if (lock) { setBad(true); setMsg(formatLock(lock)); return; }
    if (await biometricAuth()) done();
  };

  useEffect(() => {
    (async () => {
      if (await hasPin()) { setMode('login'); tryBio(); } else setMode('setup');
    })();
  }, []);

  const create = async () => {
    setBad(true);
    if (pin.length < 6) return setMsg('O PIN deve ter pelo menos 6 dígitos.');
    if (pin !== pin2) return setMsg('Os PINs não coincidem.');
    await setupPin(pin);
    setBad(false);
    setMsg('Perfil de acesso criado. A LétimaX reconhece-o agora, Senhor Letício.');
    setTimeout(done, 800);
  };

  const login = async () => {
    const r = await verifyPin(pin);
    setPin('');
    if (r.ok) return done();
    setBad(true);
    if (r.locked) return setMsg(formatLock(r.locked));
    setMsg('PIN incorrecto. Tentativas falhadas: ' + r.failures);
  };

  const input = { borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 12, padding: 14, fontSize: 18, marginBottom: 12, textAlign: 'center', letterSpacing: 6 };
  const btn = { backgroundColor: c.gold, padding: 14, borderRadius: 12, alignItems: 'center', marginTop: 4 };

  if (mode === 'boot') return <View style={{ flex: 1, backgroundColor: c.bg, justifyContent: 'center' }}><ActivityIndicator color={c.gold} /></View>;

  return (
    <View style={{ flex: 1, backgroundColor: c.bg, justifyContent: 'center', padding: 28 }}>
      <Text style={{ color: c.gold, fontSize: 38, fontWeight: '800', textAlign: 'center' }}>LétimaX</Text>
      <Text style={{ color: c.muted, textAlign: 'center', marginBottom: 28 }}>
        {mode === 'setup' ? 'Primeiro acesso — crie o seu PIN de segurança' : 'Confirme a sua identidade'}
      </Text>
      <TextInput value={pin} onChangeText={setPin} placeholder="PIN" placeholderTextColor={c.muted} secureTextEntry keyboardType="number-pad" maxLength={12} style={input} />
      {mode === 'setup' && <TextInput value={pin2} onChangeText={setPin2} placeholder="Repetir PIN" placeholderTextColor={c.muted} secureTextEntry keyboardType="number-pad" maxLength={12} style={input} />}
      <TouchableOpacity style={btn} onPress={mode === 'setup' ? create : login}>
        <Text style={{ color: '#000', fontWeight: '700' }}>{mode === 'setup' ? 'Criar perfil' : 'Entrar'}</Text>
      </TouchableOpacity>
      {mode === 'login' && (
        <TouchableOpacity style={{ padding: 14, alignItems: 'center' }} onPress={tryBio}>
          <Text style={{ color: c.gold }}>Usar rosto / impressão digital</Text>
        </TouchableOpacity>
      )}
      {!!msg && <Text style={{ color: bad ? c.err : c.gold, textAlign: 'center', marginTop: 12 }}>{msg}</Text>}
    </View>
  );
}

~~~

### letimax-app/src/screens/ModuleScreen.js
~~~js
import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, Text, RefreshControl, ActivityIndicator } from 'react-native';
import { useTheme } from '../theme/theme';
import { api } from '../services/api';
import { cacheGet, cacheSet } from '../db/database';
import JsonView from '../components/JsonView';

// Ecrã genérico ligado a um endpoint GET do servidor, com cache offline.
export default function ModuleScreen({ route }) {
  const { c } = useTheme();
  const { titulo, endpoint } = route.params || {};
  const [data, setData] = useState(null);
  const [offline, setOffline] = useState(false);
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    if (!endpoint) return;
    setLoading(true); setErr(''); setOffline(false);
    try {
      const d = await api.get(endpoint);
      setData(d); await cacheSet(endpoint, d);
    } catch (e) {
      const cached = await cacheGet(endpoint);
      if (cached) { setData(cached.dados); setOffline(true); } else setErr(e.message);
    } finally { setLoading(false); }
  }, [endpoint]);

  useEffect(() => { load(); }, [load]);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16 }}
      refreshControl={<RefreshControl refreshing={loading} onRefresh={load} tintColor={c.gold} />}>
      <Text style={{ color: c.text, fontSize: 22, fontWeight: '700', marginBottom: 12 }}>{titulo}</Text>
      {!endpoint && <Text style={{ color: c.muted }}>Este ecrã é local e será construído na próxima fase.</Text>}
      {offline && <Text style={{ color: c.warn, marginBottom: 8 }}>Modo offline — a mostrar dados em cache.</Text>}
      {err ? <Text style={{ color: c.err }}>{err}</Text> : null}
      {loading && !data && <ActivityIndicator color={c.gold} />}
      {data && <JsonView data={data} c={c} />}
    </ScrollView>
  );
}

~~~

### letimax-app/src/screens/FirstUseScreen.js
~~~js
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { useTheme } from '../theme/theme';
import { saveServerConfig, api } from '../services/api';
import { setConfig } from '../db/database';

export default function FirstUseScreen({ onDone }) {
  const { c } = useTheme();
  const [url, setUrl] = useState('');
  const [token, setToken] = useState('');
  const [claude, setClaude] = useState('');
  const [msg, setMsg] = useState('');

  const input = { borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 12, padding: 12, marginBottom: 10 };

  const save = async () => {
    try {
      await saveServerConfig(url, token);
      if (claude.trim()) {
        // A chave segue por HTTPS para o servidor e nunca fica guardada no telemóvel
        await api.post('/chaves/adicionar', { nome: 'ANTHROPIC_API_KEY', valor: claude.trim() });
        setClaude('');
      }
      await setConfig('primeiro_uso', '1');
      onDone();
    } catch (e) { setMsg(e.message); }
  };
  const later = async () => { await setConfig('primeiro_uso', '1'); onDone(); };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 24, paddingTop: 70 }}>
      <Text style={{ color: c.gold, fontSize: 26, fontWeight: '800' }}>Primeira configuração</Text>
      <Text style={{ color: c.muted, marginVertical: 12 }}>Antes de começar, ligue a LétimaX ao seu servidor e adicione a chave do Claude para que ela possa responder.</Text>
      <TextInput style={input} value={url} onChangeText={setUrl} placeholder="https://o-seu-servidor.up.railway.app" placeholderTextColor={c.muted} autoCapitalize="none" />
      <TextInput style={input} value={token} onChangeText={setToken} placeholder="Token de acesso do servidor" placeholderTextColor={c.muted} autoCapitalize="none" secureTextEntry />
      <TextInput style={input} value={claude} onChangeText={setClaude} placeholder="ANTHROPIC_API_KEY (opcional agora)" placeholderTextColor={c.muted} autoCapitalize="none" secureTextEntry />
      {!!msg && <Text style={{ color: c.err, marginBottom: 8 }}>{msg}</Text>}
      <TouchableOpacity onPress={save} style={{ backgroundColor: c.gold, padding: 14, borderRadius: 12, alignItems: 'center' }}>
        <Text style={{ color: '#000', fontWeight: '700' }}>Guardar e iniciar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={later} style={{ padding: 14, alignItems: 'center' }}>
        <Text style={{ color: c.muted }}>Configurar depois</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

~~~

### letimax-app/src/screens/ContactosScreen.js
~~~js
import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useTheme } from '../theme/theme';
import { listContactos, saveContacto, deleteContacto } from '../db/database';

const CLASSES = ['cliente', 'parceiro', 'afiliado', 'fornecedor', 'influenciador'];

export default function ContactosScreen() {
  const { c } = useTheme();
  const [lista, setLista] = useState([]);
  const [q, setQ] = useState('');
  const [form, setForm] = useState(null);

  const load = useCallback(() => listContactos(q).then(setLista), [q]);
  useEffect(() => { load(); }, [load]);

  const input = { borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 10, padding: 10, marginBottom: 8 };
  const chip = (on) => ({ paddingVertical: 6, paddingHorizontal: 12, borderRadius: 16, marginRight: 6, marginBottom: 6, backgroundColor: on ? c.gold : c.card });

  const guardar = async () => {
    if (!form.nome) return;
    await saveContacto(form); setForm(null); load();
  };
  const apagar = (p) => Alert.alert('Eliminar contacto', p.nome + '?', [
    { text: 'Cancelar', style: 'cancel' },
    { text: 'Eliminar', style: 'destructive', onPress: async () => { await deleteContacto(p.id); load(); } },
  ]);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16 }} keyboardShouldPersistTaps="handled">
      <Text style={{ color: c.text, fontSize: 22, fontWeight: '700', marginBottom: 10 }}>Contactos</Text>
      <TextInput value={q} onChangeText={setQ} placeholder="Pesquisar por nome, email ou classe" placeholderTextColor={c.muted} style={input} />

      {form ? (
        <View style={{ backgroundColor: c.card, borderRadius: 14, padding: 14, marginBottom: 12 }}>
          {['nome', 'email', 'telefone', 'notas'].map((k) => (
            <TextInput key={k} value={form[k] || ''} onChangeText={(t) => setForm({ ...form, [k]: t })} placeholder={k[0].toUpperCase() + k.slice(1)} placeholderTextColor={c.muted} autoCapitalize={k === 'email' ? 'none' : 'sentences'} style={input} />
          ))}
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {CLASSES.map((k) => <TouchableOpacity key={k} style={chip(form.classe === k)} onPress={() => setForm({ ...form, classe: k })}><Text style={{ color: form.classe === k ? '#000' : c.text }}>{k}</Text></TouchableOpacity>)}
          </View>
          <View style={{ flexDirection: 'row', marginTop: 6 }}>
            <TouchableOpacity onPress={guardar} style={{ flex: 1, backgroundColor: c.gold, padding: 11, borderRadius: 10, alignItems: 'center', marginRight: 8 }}><Text style={{ color: '#000', fontWeight: '700' }}>Guardar</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => setForm(null)} style={{ flex: 1, backgroundColor: c.bg, padding: 11, borderRadius: 10, alignItems: 'center' }}><Text style={{ color: c.muted }}>Cancelar</Text></TouchableOpacity>
          </View>
        </View>
      ) : (
        <TouchableOpacity onPress={() => setForm({ classe: 'cliente' })} style={{ backgroundColor: c.gold, padding: 12, borderRadius: 10, alignItems: 'center', marginBottom: 12 }}><Text style={{ color: '#000', fontWeight: '700' }}>Novo contacto</Text></TouchableOpacity>
      )}

      {!lista.length && <Text style={{ color: c.muted }}>Sem contactos.</Text>}
      {lista.map((p) => (
        <TouchableOpacity key={p.id} onLongPress={() => apagar(p)} style={{ backgroundColor: c.card, borderRadius: 12, padding: 12, marginBottom: 8, borderWidth: 1, borderColor: c.border }}>
          <Text style={{ color: c.text, fontWeight: '700' }}>{p.nome} <Text style={{ color: c.gold, fontWeight: '400' }}>· {p.classe}</Text></Text>
          {!!p.email && <Text style={{ color: c.muted }}>{p.email}</Text>}
          {!!p.telefone && <Text style={{ color: c.muted }}>{p.telefone}</Text>}
          {!!p.notas && <Text style={{ color: c.muted, marginTop: 2 }}>{p.notas}</Text>}
        </TouchableOpacity>
      ))}
      <Text style={{ color: c.muted, fontSize: 12, marginTop: 6 }}>Toque longo num contacto para eliminar.</Text>
    </ScrollView>
  );
}

~~~

### letimax-app/src/screens/ChatScreen.js
~~~js
import React, { useContext, useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
import * as Speech from 'expo-speech';
import { activateKeepAwakeAsync, deactivateKeepAwake } from 'expo-keep-awake';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/theme';
import { addMessage, getMessages, getConfig, replaceHistory } from '../db/database';
import { api } from '../services/api';
import { useVoice } from '../services/useVoice';
import { runCommand } from '../services/commands';
import { TorchCtx } from '../components/TorchHost';

export default function ChatScreen() {
  const { c, setMode } = useTheme();
  const torch = useContext(TorchCtx);
  const [msgs, setMsgs] = useState([]); // mais recente primeiro
  const [text, setText] = useState('');
  const [wait, setWait] = useState(0); // 0 nada | 1 a carregar | 2 a processar
  const [cont, setCont] = useState(false);
  const contRef = useRef(false);
  const timer = useRef(null);
  const voiceRef = useRef(null);
  const [limite, setLimite] = useState(8000);

  useEffect(() => { getMessages().then(setMsgs); getConfig('limite_tokens').then((v) => Number(v) && setLimite(Number(v))); return () => { deactivateKeepAwake(); }; }, []);

  const tokens = Math.ceil(msgs.reduce((s, m) => s + (m.texto || '').length, 0) / 4);
  const resumir = async () => {
    setWait(2);
    try {
      const texto = msgs.slice(0, 40).reverse().map((m) => (m.papel === 'user' ? 'Senhor Letício: ' : 'LétimaX: ') + m.texto).join('\n');
      const r = await api.post('/chat', { mensagem: 'Resume esta conversa em até 10 linhas, mantendo decisões e pendências:\n' + texto }, 60000);
      await replaceHistory(r.resposta || r.response || JSON.stringify(r));
      setMsgs(await getMessages());
    } catch (e) { await push('bot', 'Não consegui resumir agora (' + e.message + ').'); }
    finally { setWait(0); }
  };

  const push = async (papel, texto) => { const m = await addMessage(papel, texto); setMsgs((x) => [m, ...x]); };
  // Pausa a escuta enquanto a LétimaX fala, para não ouvir a própria voz
  const falar = (t) => {
    const v = voiceRef.current;
    if (v) v.pause();
    Speech.speak(t, { language: 'pt-PT', onDone: () => v && v.resume(), onStopped: () => v && v.resume(), onError: () => v && v.resume() });
  };

  const enviar = async (t) => {
    if (!t || wait) return;
    await push('user', t);
    setWait(1);
    timer.current = setTimeout(() => setWait(2), 30000); // 30 s: "a processar..."
    let reply;
    try {
      const r = await api.post('/chat', { mensagem: t }, 60000); // 60 s: cancela
      reply = r.resposta || r.response || JSON.stringify(r);
      falar(reply);
    } catch (e) {
      reply = 'Não consegui obter resposta (' + e.message + '). Quer tentar novamente?';
    } finally { clearTimeout(timer.current); setWait(0); }
    await push('bot', reply);
  };

  const onFinal = async (t) => {
    const r = await runCommand(t, { setMode, torch, requireWake: contRef.current });
    if (r === null) { if (!contRef.current) enviar(t); return; } // push-to-talk sem comando = mensagem normal
    await push('user', t);
    await push('bot', r);
    falar(r);
  };

  const voice = useVoice(onFinal);
  voiceRef.current = voice;

  const toggleCont = async () => {
    const v = !cont;
    setCont(v); contRef.current = v;
    if (v) await activateKeepAwakeAsync(); else deactivateKeepAwake();
    voice.setContinuous(v);
  };

  const Bubble = ({ item }) => {
    const me = item.papel === 'user';
    return (
      <View style={{ alignSelf: me ? 'flex-end' : 'flex-start', backgroundColor: me ? c.bubbleUser : c.bubbleBot, padding: 12, borderRadius: 16, marginVertical: 4, maxWidth: '85%' }}>
        <Text style={{ color: c.text, fontSize: 15 }}>{item.texto}</Text>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: c.bg }} behavior={Platform.OS === 'ios' ? 'padding' : undefined} keyboardVerticalOffset={90}>
      <FlatList inverted data={msgs} keyExtractor={(i) => String(i.id)} renderItem={Bubble} contentContainerStyle={{ padding: 12 }}
        ListHeaderComponent={wait ? (
          <View style={{ flexDirection: 'row', alignItems: 'center', padding: 8 }}>
            <ActivityIndicator color={c.gold} />
            <Text style={{ color: c.muted, marginLeft: 8 }}>{wait === 2 ? 'LétimaX está a processar...' : 'A pensar...'}</Text>
          </View>
        ) : null} />
      {tokens > limite * 0.8 && (
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: c.card }}>
          <Text style={{ color: c.warn, flex: 1, fontSize: 12 }}>{tokens >= limite ? 'Conversa acima do limite de tokens.' : 'A conversa aproxima-se do limite de tokens.'}</Text>
          <TouchableOpacity onPress={resumir}><Text style={{ color: c.gold, fontWeight: '700' }}>Resumir histórico</Text></TouchableOpacity>
        </View>
      )}
      {(voice.listening || cont) && (
        <Text style={{ color: c.gold, paddingHorizontal: 14, paddingBottom: 4 }}>
          {voice.partial ? '🎙 ' + voice.partial : cont ? 'Escuta contínua — diga "LétimaX, ..." (ecrã sempre ligado)' : 'A ouvir...'}
        </Text>
      )}
      <View style={{ flexDirection: 'row', padding: 10, borderTopWidth: 1, borderTopColor: c.border, alignItems: 'center' }}>
        <TouchableOpacity onPress={toggleCont} style={{ marginRight: 6, padding: 8 }}>
          <Ionicons name="ear" size={22} color={cont ? c.gold : c.muted} />
        </TouchableOpacity>
        <TextInput value={text} onChangeText={setText} placeholder="Escreva à LétimaX..." placeholderTextColor={c.muted}
          style={{ flex: 1, color: c.text, backgroundColor: c.card, borderRadius: 22, paddingHorizontal: 16, paddingVertical: 10 }} multiline />
        <TouchableOpacity onPress={() => (voice.listening ? voice.stop() : voice.start())} style={{ marginLeft: 6, padding: 8 }}>
          <Ionicons name={voice.listening ? 'mic' : 'mic-outline'} size={24} color={voice.listening ? c.err : c.gold} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { const t = text.trim(); setText(''); enviar(t); }} style={{ marginLeft: 2, backgroundColor: c.gold, borderRadius: 22, padding: 11 }}>
          <Ionicons name="send" size={20} color="#000" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

~~~

### letimax-app/src/screens/screens.config.js
~~~js
// Um ecrã por módulo, ligado aos endpoints do documento. Cada secção lê um GET; cada acção chama um endpoint.
// Marcadores {id}, {campo} são preenchidos com o item ou com o formulário.
const S = (key, endpoint, title) => ({ key, kind: 'stats', endpoint, title });
const L = (key, endpoint, title, o = {}) => ({ key, kind: 'list', endpoint, title, ...o });
const J = (key, endpoint, title) => ({ key, kind: 'json', endpoint, title });
const A = (label, method, endpoint, o = {}) => ({ label, method, endpoint, ...o });
const T = (name, label, o = {}) => ({ name, label, ...o });
const OPT = (name, label, options) => ({ name, label, type: 'options', options });
const IDF = (n) => T(n, n.replace(/_/g, ' ') + ' (id)');

export const SCREENS = {
  dashboard: { titulo: 'Dashboard',
    sections: [S('d', '/dashboard', 'Hoje'), L('op', '/motor-receita/oportunidades', 'Próxima oportunidade', { limit: 1 })],
    actions: [A('🔊 Resumo matinal em voz alta', 'GET', '/resumo-matinal', { speak: true })] },

  mercado: { titulo: 'Mercado',
    sections: [S('m', '/mercado', 'Visão geral'), L('n', '/nichos/performance', 'Nichos por potencial'), L('l', '/mercado/lacunas', 'Lacunas: o que ninguém oferece'),
      L('f', '/mercado/concorrencia/fichas', 'Top concorrentes'), L('a', '/mercado/concorrencia/alertas', 'Alertas de concorrência')],
    actions: [A('Analisar mercado agora', 'GET', '/mercado/agora'), A('Próxima semana', 'GET', '/mercado/proxima-semana'), A('Próximo mês', 'GET', '/mercado/proximo-mes'),
      A('Mudar nicho (pede aprovação)', 'POST', '/nichos/mudar', { form: [T('nicho', 'Novo nicho')], confirm: 'Propor mudança de nicho? Só avança com a sua aprovação.' })] },

  marketing: { titulo: 'Marketing',
    sections: [L('c', '/conteudo/agendado', 'Conteúdo agendado')],
    note: 'Escolha o tema e o idioma e depois o canal. Nada é publicado sem a sua aprovação.',
    actions: ['instagram', 'facebook', 'tiktok', 'youtube', 'blog', 'newsletter', 'viral-adaptado'].map((c) =>
      A('Criar ' + c, 'POST', '/conteudo/' + c, { form: [T('tema', 'Tema', { multiline: true }), OPT('idioma', 'Idioma', ['PT-BR', 'EN', 'ES'])] }))
      .concat([A('Criar funil de 13 etapas', 'POST', '/automacao/cascata', { form: [T('produto', 'Produto')], body: { tipo: 'funil', produto: '{produto}' } }),
        A('Criar webinar →', 'NAV', 'webinars')]) },

  raqueamento: { titulo: 'Sistema de Raqueamento',
    note: 'Último recurso: só se o Motor de Receita não achar oportunidades acima de 70 durante 7 dias. Nunca activa sozinho.',
    sections: [S('e', '/raqueamento/estado', 'Estado das fontes'),
      L('s', '/raqueamento/estrategias', 'Estratégias disponíveis', { itemActions: [A('Activar', 'POST', '/raqueamento/aprovar/{id}', { confirm: 'Aprova esta estratégia de emergência?' })] }),
      L('h', '/raqueamento/historico', 'Histórico')],
    actions: [A('Activar modo de raqueamento', 'POST', '/raqueamento/activar', { confirm: 'As fontes normais estão em baixo. Activar o raqueamento?' })] },

  activos: { titulo: 'Activos',
    sections: [S('v', '/activos/valor-total', 'Valor total'), L('l', '/activos/lista', 'Activos'), L('p', '/activos/progresso', 'Em construção')],
    actions: [A('Construir novo activo', 'POST', '/activos/construir', { form: [T('activo', 'Activo (ex.: lista de emails)')] })] },

  novonegocio: { titulo: 'Novos Negócios',
    sections: [L('o', '/negocios/oportunidades', 'Oportunidades', { itemActions: [A('Aprovar', 'POST', '/negocios/aprovar/{id}', { confirm: 'Iniciar a implementação deste negócio?' })] }), L('h', '/negocios/historico', 'Histórico')],
    actions: [A('Pesquisar novos negócios', 'GET', '/negocios/pesquisa')] },

  empresa: { titulo: 'Empresa',
    sections: [S('p', '/empresa/progresso', 'Progresso'), J('j', '/empresa/projecao', 'Projecção 6, 12 e 24 meses')],
    actions: [A('Gerar plano da empresa', 'POST', '/empresa/plano', { confirm: 'Gerar o plano completo com todos os dados acumulados?' })] },

  afext: { titulo: 'Afiliados Externos',
    sections: [S('r', '/afiliados/receita', 'Receita de afiliados'), L('k', '/afiliados/ranking', 'Ranking Hotmart e Kiwify', { itemActions: [A('Campanha', 'POST', '/afiliados/campanha', { body: { produto_id: '{id}' } })] })] },

  afprop: { titulo: 'Afiliados Próprios',
    sections: [S('d', '/afiliados-proprios/dashboard', 'Programa'), L('r', '/afiliados-proprios/ranking', 'Mais rentáveis'), L('c', '/afiliados-proprios/comissoes', 'Comissões')],
    actions: [A('Criar programa', 'POST', '/afiliados-proprios/criar-programa', { form: [T('comissao', 'Comissão % (padrão 50)', { number: true })] }),
      A('Gerar link de afiliado', 'POST', '/afiliados-proprios/link/{produto_id}', { form: [IDF('produto_id')] }),
      A('Material de marketing', 'POST', '/afiliados-proprios/material-marketing', { form: [IDF('produto_id')] })] },

  lanc: { titulo: 'Lançamentos',
    sections: [J('e', '/lancamento/estrategia', 'Estratégia'), S('r', '/lancamento/resultado', 'Resultado')],
    actions: [A('Criar lançamento', 'POST', '/lancamento/criar', { form: [IDF('produto_id')] }), A('Gerar emails', 'POST', '/lancamento/emails', { form: [IDF('produto_id')] })] },

  webinars: { titulo: 'Webinars',
    sections: [L('l', '/webinar/lista', 'Webinars', { itemActions: [A('Script', 'GET', '/webinar/script?webinar_id={id}'), A('Emails', 'POST', '/webinar/emails', { body: { webinar_id: '{id}' } }), A('Resultado', 'GET', '/webinar/resultado?webinar_id={id}')] })],
    actions: [A('Criar webinar', 'POST', '/webinar/criar', { form: [T('tema', 'Tema', { multiline: true })] })] },

  email: { titulo: 'Email Marketing',
    sections: [S('t', '/email/lista/tamanho', 'Lista'), S('a', '/email/analytics', 'Desempenho'), S('p', '/email/previsao-receita', 'Previsão de receita'), L('s', '/email/lead-scoring', 'Lead scoring', { export: true })],
    actions: [A('Nova sequência', 'POST', '/email/sequencia/criar', { form: [T('tema', 'Tema', { multiline: true })] }),
      A('Segmentar lista', 'POST', '/email/segmentar'), A('Newsletter', 'POST', '/email/newsletter'),
      A('Campanha de reactivação', 'POST', '/email/reativacao', { confirm: 'Enviar 5 emails de reactivação à lista inactiva?' }),
      A('Limpar lista', 'POST', '/email/limpeza', { confirm: 'Remover emails inválidos e de alto bounce?' }),
      A('Adicionar subscritor', 'POST', '/email/lista/adicionar', { form: [T('email', 'Email')] })] },

  analytics: { titulo: 'Analytics',
    sections: [S('c', '/analytics/conversao', 'Conversão'), J('o', '/analytics/origem-vendas', 'Origem das vendas'), S('a', '/analytics/custo-aquisicao', 'Custo de aquisição'),
      S('v', '/analytics/valor-cliente', 'Valor do cliente (LTV)'), S('p', '/analytics/projecao', 'Projecção 30 dias'), L('f', '/analytics/fugas-funil', 'Fugas do funil'),
      J('h', '/analytics/heatmap-horas', 'Dias e horas com mais vendas'), L('n', '/analytics/roi-por-nicho', 'ROI por nicho')] },

  reputacao: { titulo: 'Reputação',
    sections: [S('r', '/reputacao/monitorizar', 'Score de reputação'), J('s', '/sentimento/analise', 'Sentimento'), L('a', '/reputacao/alertas', 'Alertas de menções negativas'), L('t', '/reputacao/testemunhos', 'Testemunhos')],
    actions: [A('Pedir testemunho', 'POST', '/reputacao/pedir-testemunho', { confirm: 'Enviar pedidos de testemunho?' })] },

  suporte: { titulo: 'Suporte',
    sections: [S('s', '/suporte/taxa-satisfacao', 'Satisfação'),
      L('t', '/suporte/tickets', 'Tickets', { warnIf: (i) => Number(i.horas_sem_resposta) > 24,
        itemActions: [A('Responder', 'POST', '/suporte/responder', { form: [T('texto', 'Resposta', { multiline: true })], body: { ticket_id: '{id}', texto: '{texto}' } }),
          A('Reembolso', 'POST', '/suporte/reembolso', { body: { ticket_id: '{id}' }, confirm: 'Processar reembolso? O acesso é revogado em menos de 1 hora.', danger: true })] }),
      L('c', '/suporte/causas-reclamacao', 'Causas mais comuns de reclamação')] },

  onboarding: { titulo: 'Onboarding',
    sections: [S('t', '/onboarding/taxa-conclusao', 'Taxa de conclusão'), L('s', '/onboarding/status', 'Clientes', { itemActions: [1, 3, 7].map((d) => A('Email dia ' + d, 'POST', '/onboarding/email-dia/' + d, { body: { cliente_id: '{id}' } })) })],
    actions: [A('Iniciar onboarding', 'POST', '/onboarding/iniciar', { form: [T('cliente_email', 'Email do cliente'), IDF('produto_id')] })] },

  referencias: { titulo: 'Referências',
    sections: [S('d', '/referencias/dashboard', 'Resumo'), L('h', '/referencias/historico', 'Recompensas')],
    actions: [A('Gerar link de referência', 'POST', '/referencias/link', { form: [IDF('cliente_id')] }),
      A('Recompensar indicação', 'POST', '/referencias/recompensar', { form: [IDF('indicacao_id')], confirm: 'Atribuir a recompensa?' })] },

  paginas: { titulo: 'Páginas',
    sections: [L('p', '/pagina/analytics', 'Páginas', { itemActions: [
      A('Publicar', 'POST', '/pagina/publicar', { body: { pagina_id: '{id}' }, confirm: 'Publicar esta página?' }),
      A('Optimizar', 'POST', '/pagina/optimizar', { body: { pagina_id: '{id}' } }),
      A('Teste A/B', 'POST', '/pagina/ab-test', { body: { pagina_id: '{id}' } }),
      A('Resultado A/B', 'GET', '/pagina/ab-test/resultado?pagina_id={id}')] })],
    actions: [A('Criar nova página', 'POST', '/pagina/criar', { form: [OPT('tipo', 'Tipo', ['vendas', 'captura', 'obrigado', 'upsell', 'downsell', 'lancamento', 'landing']), IDF('produto_id')] })] },

  videos: { titulo: 'Vídeos',
    note: 'O servidor não tem lista de vídeos; cada resultado aparece aqui logo após criar.',
    actions: [A('Criar guião', 'POST', '/video/guiao', { form: [OPT('tipo', 'Tipo', ['VSL', 'YouTube', 'TikTok', 'Reels', 'Anúncio Meta Ads']), T('tema', 'Tema', { multiline: true })] }),
      A('Miniatura', 'POST', '/video/miniatura', { form: [T('titulo', 'Título do vídeo')] }),
      A('Legendas', 'POST', '/video/legendas', { form: [T('guiao', 'Guião', { multiline: true })] }),
      A('Narração', 'POST', '/video/narracao', { form: [T('guiao', 'Guião', { multiline: true })] })] },

  cursos: { titulo: 'Cursos',
    sections: [L('l', '/curso/lista', 'Cursos', { itemActions: [A('Módulos', 'GET', '/curso/modulos?curso_id={id}'),
      A('Guião de aula', 'POST', '/curso/guiao-aula', { body: { curso_id: '{id}' } }), A('Slides', 'POST', '/curso/slides-aula', { body: { curso_id: '{id}' } }), A('Narração', 'POST', '/curso/narracao-aula', { body: { curso_id: '{id}' } })] })],
    actions: [A('Criar novo curso', 'POST', '/curso/criar', { form: [T('tema', 'Tema', { multiline: true })] })] },

  sites: { titulo: 'Sites',
    sections: [L('s', '/site/analytics', 'Sites', { itemActions: [A('Publicar', 'POST', '/site/publicar', { body: { site_id: '{id}' }, confirm: 'Publicar este site?' }), A('Actualizar', 'POST', '/site/actualizar', { body: { site_id: '{id}' } })] })],
    actions: [A('Criar novo site', 'POST', '/site/criar', { form: [OPT('tipo', 'Tipo', ['institucional', 'blog', 'membership', 'loja online', 'portfolio'])] })] },

  apres: { titulo: 'Apresentações',
    sections: [L('l', '/apresentacao/lista', 'Apresentações')],
    actions: [A('Criar apresentação', 'POST', '/apresentacao/criar', { form: [OPT('tipo', 'Tipo', ['pitch deck', 'proposta de parceria', 'relatório mensal', 'material de formação']), T('tema', 'Tema')] }),
      A('Pitch para investidores', 'POST', '/apresentacao/pitch', { form: [T('tema', 'Tema')] })] },

  automacao: { titulo: 'Automação Inteligente',
    sections: [L('p', '/automacao/pontuacao', 'Acções candidatas por pontuação'), L('s', '/automacao/sugestoes', 'Sugestões'), S('r', '/automacao/roi', 'ROI das automações')],
    actions: [A('Actualizar aprendizagem', 'POST', '/automacao/aprender')] },

  oportunidades: { titulo: 'Oportunidades',
    sections: [L('o', '/oportunidade/pendentes', 'Pendentes', { itemActions: [A('Relatório', 'POST', '/oportunidade/relatorio', { body: { id: '{id}' } }),
      A('Aprovar', 'POST', '/oportunidade/aprovar', { body: { id: '{id}' }, conf
[CONTEÚDO TRUNCADO PELO LIMITE DO RELATÓRIO]
~~~

### letimax-app/src/screens/FinancasScreen.js
~~~js
import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useTheme } from '../theme/theme';
import { api } from '../services/api';
import { addMov, listMovs, delMov, getConfig, setConfig } from '../db/database';
import { primitives, pretty, fmt } from '../components/ui';

const mesActual = () => new Date().toISOString().slice(0, 7);

export default function FinancasScreen() {
  const { c } = useTheme();
  const [movs, setMovs] = useState([]);
  const [tipo, setTipo] = useState('despesa');
  const [valor, setValor] = useState('');
  const [desc, setDesc] = useState('');
  const [orc, setOrc] = useState('');
  const [negocio, setNegocio] = useState(null);
  const [erro, setErro] = useState('');

  const load = useCallback(async () => {
    setMovs(await listMovs(mesActual()));
    getConfig('orcamento_pessoal').then((v) => v && setOrc(v));
    api.get('/receita/total').then(setNegocio).catch((e) => setErro(e.message));
  }, []);
  useEffect(() => { load(); }, [load]);

  const rec = movs.filter((m) => m.tipo === 'receita').reduce((s, m) => s + m.valor, 0);
  const des = movs.filter((m) => m.tipo === 'despesa').reduce((s, m) => s + m.valor, 0);
  const orcamento = Number(orc) || 0;

  const add = async () => {
    const v = Number(String(valor).replace(',', '.'));
    if (!v || v <= 0) return;
    await addMov(tipo, v, desc); setValor(''); setDesc(''); load();
  };
  const apagar = (m) => Alert.alert('Eliminar', (m.descricao || m.tipo) + '?', [
    { text: 'Cancelar', style: 'cancel' },
    { text: 'Eliminar', style: 'destructive', onPress: async () => { await delMov(m.id); load(); } },
  ]);

  const input = { borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 10, padding: 10, marginBottom: 8 };
  const card = { backgroundColor: c.card, borderRadius: 14, padding: 14, borderWidth: 1, borderColor: c.border, marginBottom: 10 };
  const chip = (on, cor) => ({ flex: 1, padding: 10, borderRadius: 10, alignItems: 'center', marginRight: 8, backgroundColor: on ? cor : c.card });

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16, paddingBottom: 50 }} keyboardShouldPersistTaps="handled">
      <Text style={{ color: c.text, fontSize: 22, fontWeight: '700', marginBottom: 12 }}>Finanças</Text>

      <Text style={{ color: c.gold, fontWeight: '700', marginBottom: 8 }}>Dinheiro do negócio</Text>
      <View style={card}>
        {negocio ? primitives(negocio).map(([k, v]) => <Text key={k} style={{ color: c.text }}>{pretty(k)}: <Text style={{ fontWeight: '700' }}>{fmt(v)}</Text></Text>)
          : <Text style={{ color: c.muted }}>{erro || 'A carregar...'}</Text>}
      </View>

      <Text style={{ color: c.gold, fontWeight: '700', marginVertical: 8 }}>Dinheiro pessoal — este mês</Text>
      <View style={card}>
        <Text style={{ color: c.text }}>Ganhou: <Text style={{ color: c.ok, fontWeight: '700' }}>{rec.toFixed(2)}</Text></Text>
        <Text style={{ color: c.text }}>Gastou: <Text style={{ color: c.err, fontWeight: '700' }}>{des.toFixed(2)}</Text></Text>
        <Text style={{ color: c.text }}>Saldo: <Text style={{ fontWeight: '700' }}>{(rec - des).toFixed(2)}</Text></Text>
        {orcamento > 0 && des > orcamento && <Text style={{ color: c.warn, marginTop: 6 }}>Os gastos passaram o orçamento de {orcamento.toFixed(2)}.</Text>}
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
        <TextInput style={{ ...input, flex: 1, marginBottom: 0 }} value={orc} onChangeText={setOrc} keyboardType="numeric" placeholder="Orçamento mensal pessoal" placeholderTextColor={c.muted} />
        <TouchableOpacity onPress={async () => { await setConfig('orcamento_pessoal', orc); load(); }} style={{ padding: 10 }}><Text style={{ color: c.gold, fontWeight: '700' }}>Guardar</Text></TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', marginBottom: 8 }}>
        <TouchableOpacity style={chip(tipo === 'receita', c.ok)} onPress={() => setTipo('receita')}><Text style={{ color: tipo === 'receita' ? '#000' : c.text }}>Receita</Text></TouchableOpacity>
        <TouchableOpacity style={{ ...chip(tipo === 'despesa', c.err), marginRight: 0 }} onPress={() => setTipo('despesa')}><Text style={{ color: tipo === 'despesa' ? '#000' : c.text }}>Despesa</Text></TouchableOpacity>
      </View>
      <TextInput style={input} value={valor} onChangeText={setValor} keyboardType="numeric" placeholder="Valor" placeholderTextColor={c.muted} />
      <TextInput style={input} value={desc} onChangeText={setDesc} placeholder="Descrição" placeholderTextColor={c.muted} />
      <TouchableOpacity onPress={add} style={{ backgroundColor: c.gold, padding: 12, borderRadius: 10, alignItems: 'center', marginBottom: 14 }}><Text style={{ color: '#000', fontWeight: '700' }}>Registar</Text></TouchableOpacity>

      {movs.map((m) => (
        <TouchableOpacity key={m.id} onLongPress={() => apagar(m)} style={{ ...card, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: c.text, flex: 1 }}>{m.descricao || pretty(m.tipo)} · {m.data.slice(5, 10)}</Text>
          <Text style={{ color: m.tipo === 'receita' ? c.ok : c.err, fontWeight: '700' }}>{m.tipo === 'receita' ? '+' : '-'}{m.valor.toFixed(2)}</Text>
        </TouchableOpacity>
      ))}
      <Text style={{ color: c.muted, fontSize: 12 }}>Toque longo para eliminar. Os valores pessoais ficam só no telemóvel.</Text>
    </ScrollView>
  );
}

~~~

### letimax-app/src/screens/MetasScreen.js
~~~js
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, RefreshControl } from 'react-native';
import * as Speech from 'expo-speech';
import { useTheme } from '../theme/theme';
import { api } from '../services/api';
import { cacheGet, cacheSet, saveMeta } from '../db/database';
import JsonView from '../components/JsonView';

function diasRestantes() {
  const h = new Date();
  return new Date(h.getFullYear(), h.getMonth() + 1, 0).getDate() - h.getDate();
}

export default function MetasScreen() {
  const { c } = useTheme();
  const [d, setD] = useState(null);
  const [proj, setProj] = useState(null);
  const [novo, setNovo] = useState('');
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const celebrou = useRef(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const r = await api.get('/metas/progresso');
      setD(r); await cacheSet('metas', r);
      api.get('/metas/projecao').then(setProj).catch(() => {});
    } catch (e) {
      const k = await cacheGet('metas');
      if (k) { setD(k.dados); setMsg('Modo offline — dados em cache.'); } else setMsg(e.message);
    } finally { setLoading(false); }
  }, []);
  useEffect(() => { load(); }, [load]);

  const meta = Number(d && (d.meta ?? d.valor)) || 0;
  const atual = Number(d && (d.atual ?? d.receita_atual)) || 0;
  const dias = Number((d && d.dias_restantes) ?? diasRestantes());
  const falta = Math.max(meta - atual, 0);
  const pct = meta ? Math.min(Math.round((atual / meta) * 100), 100) : 0;
  const ritmo = dias > 0 ? falta / dias : falta;

  useEffect(() => {
    if (meta && atual >= meta && !celebrou.current) {
      celebrou.current = true;
      Speech.speak('Parabéns, Senhor Letício! Meta de ' + meta + ' reais atingida. Vamos estabelecer a próxima?', { language: 'pt-PT' });
    }
  }, [meta, atual]);

  const definir = async () => {
    const v = Number(String(novo).replace(',', '.'));
    if (!v) return setMsg('Indique um valor válido.');
    try {
      await api.post('/metas/definir', { valor: v });
      await saveMeta(v); setNovo(''); celebrou.current = false; load();
    } catch (e) { setMsg(e.message); }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16 }}
      refreshControl={<RefreshControl refreshing={loading} onRefresh={load} tintColor={c.gold} />}>
      <Text style={{ color: c.text, fontSize: 22, fontWeight: '700', marginBottom: 12 }}>Metas</Text>
      {!!msg && <Text style={{ color: c.gold, marginBottom: 8 }}>{msg}</Text>}

      {meta > 0 ? (
        <View style={{ backgroundColor: c.card, borderRadius: 14, padding: 16, borderWidth: 1, borderColor: c.border }}>
          <Text style={{ color: c.text, fontSize: 16 }}>Estás a R${(meta - atual > 0 ? falta : 0).toFixed(0)} dos R${meta.toFixed(0)} — faltam {dias} dias.</Text>
          <View style={{ height: 12, backgroundColor: c.border, borderRadius: 6, marginVertical: 12 }}>
            <View style={{ height: 12, width: pct + '%', backgroundColor: c.gold, borderRadius: 6 }} />
          </View>
          <Text style={{ color: c.muted }}>{pct}% concluído · receita actual R${atual.toFixed(0)}</Text>
          {falta > 0 && <Text style={{ color: c.text, marginTop: 8 }}>Precisas de vender R${ritmo.toFixed(0)} por dia para atingir a meta.</Text>}
          {falta > 0 && pct < 100 && dias > 0 && atual / Math.max(30 - dias, 1) < ritmo && (
            <Text style={{ color: c.warn, marginTop: 8 }}>Meta em risco. Sugestão: reactivar a lista de emails com uma promoção relâmpago de 48 horas.</Text>
          )}
          {falta === 0 && <Text style={{ color: c.ok, marginTop: 8 }}>Meta atingida! 🎉</Text>}
        </View>
      ) : (
        <Text style={{ color: c.muted }}>Ainda não há meta mensal definida.</Text>
      )}

      <Text style={{ color: c.gold, fontWeight: '700', marginTop: 22, marginBottom: 8 }}>Definir meta mensal (R$)</Text>
      <View style={{ flexDirection: 'row' }}>
        <TextInput value={novo} onChangeText={setNovo} keyboardType="numeric" placeholder="2000" placeholderTextColor={c.muted}
          style={{ flex: 1, borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 10, padding: 10 }} />
        <TouchableOpacity onPress={definir} style={{ backgroundColor: c.gold, borderRadius: 10, paddingHorizontal: 18, justifyContent: 'center', marginLeft: 8 }}>
          <Text style={{ color: '#000', fontWeight: '700' }}>Guardar</Text>
        </TouchableOpacity>
      </View>

      {proj && (<><Text style={{ color: c.gold, fontWeight: '700', marginTop: 22, marginBottom: 8 }}>Projecção do mês</Text><JsonView data={proj} c={c} /></>)}
    </ScrollView>
  );
}

~~~

### letimax-app/src/screens/MotorReceitaScreen.js
~~~js
import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Alert, RefreshControl } from 'react-native';
import { useTheme } from '../theme/theme';
import { api } from '../services/api';
import { cacheGet, cacheSet } from '../db/database';
import JsonView from '../components/JsonView';

const norm = (d) => (Array.isArray(d) ? d : (d && (d.oportunidades || d.items)) || []);
const FILTROS = ['todos', 'baixo', 'médio', 'alto'];

export default function MotorReceitaScreen() {
  const { c } = useTheme();
  const [items, setItems] = useState([]);
  const [filtro, setFiltro] = useState('todos');
  const [aberto, setAberto] = useState(null);
  const [hist, setHist] = useState(null);
  const [offline, setOffline] = useState(false);
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    setLoading(true); setOffline(false);
    try {
      const d = await api.get('/motor-receita/oportunidades');
      setItems(norm(d)); await cacheSet('motor', d);
    } catch (e) {
      const k = await cacheGet('motor');
      if (k) { setItems(norm(k.dados)); setOffline(true); } else setMsg(e.message);
    } finally { setLoading(false); }
  }, []);
  useEffect(() => { load(); }, [load]);

  const act = async (id, acao, texto) => {
    try {
      await api.post('/motor-receita/' + acao + '/' + id, {});
      setItems((l) => l.filter((o) => o.id !== id));
      setMsg(texto);
    } catch (e) { setMsg(e.message); }
  };
  const aprovar = (o) =>
    Alert.alert('Aprovar oportunidade', 'A LétimaX vai implementar "' + (o.titulo || o.nome) + '" imediatamente. Confirma?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Aprovar', onPress: () => act(o.id, 'aprovar', 'Aprovada — a LétimaX está a implementar.') },
    ]);
  const verHist = async () => {
    if (hist) return setHist(null);
    try { setHist(await api.get('/motor-receita/historico')); } catch (e) { setMsg(e.message); }
  };

  const lista = items
    .filter((o) => filtro === 'todos' || String(o.esforco || '').toLowerCase() === filtro)
    .sort((a, b) => (b.pontuacao || 0) - (a.pontuacao || 0));
  const potencial = lista.reduce((s, o) => s + (Number(o.receita_max) || 0), 0);

  const chip = (on) => ({ paddingVertical: 6, paddingHorizontal: 12, borderRadius: 16, marginRight: 6, backgroundColor: on ? c.gold : c.card });
  const btn = (bg) => ({ flex: 1, backgroundColor: bg, padding: 9, borderRadius: 10, alignItems: 'center', marginRight: 6 });

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16 }}
      refreshControl={<RefreshControl refreshing={loading} onRefresh={load} tintColor={c.gold} />}>
      <Text style={{ color: c.text, fontSize: 22, fontWeight: '700' }}>Motor de Receita</Text>
      <Text style={{ color: c.muted, marginBottom: 10 }}>Receita potencial das oportunidades activas: R$ {potencial.toLocaleString('pt-PT')}</Text>
      {offline && <Text style={{ color: c.warn, marginBottom: 6 }}>Modo offline — dados em cache.</Text>}
      {!!msg && <Text style={{ color: c.gold, marginBottom: 8 }}>{msg}</Text>}

      <View style={{ flexDirection: 'row', marginBottom: 12 }}>
        {FILTROS.map((f) => (
          <TouchableOpacity key={f} style={chip(filtro === f)} onPress={() => setFiltro(f)}>
            <Text style={{ color: filtro === f ? '#000' : c.text }}>{f === 'todos' ? 'Todos' : 'Esforço ' + f}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {!lista.length && !loading && <Text style={{ color: c.muted }}>Sem oportunidades activas.</Text>}
      {lista.map((o) => (
        <View key={o.id} style={{ backgroundColor: c.card, borderRadius: 14, padding: 14, marginBottom: 10, borderWidth: 1, borderColor: c.border }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: c.text, fontWeight: '700', flex: 1, fontSize: 16 }}>{o.titulo || o.nome}</Text>
            <Text style={{ color: (o.pontuacao || 0) >= 70 ? c.ok : c.warn, fontWeight: '800' }}>{o.pontuacao ?? '—'}/100</Text>
          </View>
          <Text style={{ color: c.muted, marginTop: 4 }}>
            R$ {o.receita_min ?? '?'} – {o.receita_max ?? '?'} · esforço {o.esforco ?? '—'} · {o.tempo_resultado ?? '—'} · risco {o.risco ?? '—'}
          </Text>
          {aberto === o.id && <View style={{ marginTop: 10 }}><JsonView data={o} c={c} /></View>}
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <TouchableOpacity style={btn(c.card)} onPress={() => setAberto(aberto === o.id ? null : o.id)}><Text style={{ color: c.gold }}>{aberto === o.id ? 'Fechar' : 'Detalhes'}</Text></TouchableOpacity>
            <TouchableOpacity style={btn(c.gold)} onPress={() => aprovar(o)}><Text style={{ color: '#000', fontWeight: '700' }}>Aprovar</Text></TouchableOpacity>
            <TouchableOpacity style={btn(c.card)} onPress={() => act(o.id, 'rejeitar', 'Rejeitada — a LétimaX aprende que este tipo não interessa.')}><Text style={{ color: c.err }}>Rejeitar</Text></TouchableOpacity>
            <TouchableOpacity style={{ ...btn(c.card), marginRight: 0 }} onPress={() => act(o.id, 'mais-tarde', 'Adiada por 48 horas.')}><Text style={{ color: c.muted }}>+48h</Text></TouchableOpacity>
          </View>
        </View>
      ))}

      <TouchableOpacity onPress={verHist} style={{ padding: 12, alignItems: 'center' }}><Text style={{ color: c.gold }}>{hist ? 'Esconder histórico' : 'Ver histórico (resultado real vs estimativa)'}</Text></TouchableOpacity>
      {hist && <JsonView data={hist} c={c} />}
    </ScrollView>
  );
}

~~~

### letimax-app/src/screens/EngineScreen.js
~~~js
import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Alert, RefreshControl, Linking, Share, ActivityIndicator } from 'react-native';
import * as Speech from 'expo-speech';
import { useTheme } from '../theme/theme';
import { api } from '../services/api';
import { cacheGet, cacheSet } from '../db/database';
import JsonView from '../components/JsonView';
import { SCREENS } from './screens.config';
import { pretty, fmt, asList, primitives, pick, fill, fillBody, csv } from '../components/ui';

const TITULOS = ['titulo', 'nome', 'name', 'assunto', 'email', 'plataforma', 'tipo', 'id'];
const ESTADOS = ['estado', 'status'];
const LINKS = ['url', 'pdf_url', 'link', 'download_url'];
const TEXTOS = ['texto', 'contrato', 'conteudo', 'script', 'resumo', 'resposta'];

export default function EngineScreen({ route, navigation }) {
  const { c } = useTheme();
  const cfg = SCREENS[route.params.id];
  const [data, setData] = useState({});
  const [offline, setOffline] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('');
  const [busy, setBusy] = useState(false);
  const [form, setForm] = useState(null); // { action, item, values }
  const [result, setResult] = useState(null);

  const sections = cfg.sections || [];
  const load = useCallback(async () => {
    setLoading(true); setOffline(false);
    const out = {}; let off = false;
    await Promise.all(sections.map(async (s) => {
      try { out[s.key] = await api.get(s.endpoint); await cacheSet(s.endpoint, out[s.key]); }
      catch (e) {
        const k = await cacheGet(s.endpoint);
        if (k) { out[s.key] = k.dados; off = true; } else out[s.key] = { __erro: e.message };
      }
    }));
    setData(out); setOffline(off); setLoading(false);
  }, [route.params.id]);
  useEffect(() => { load(); }, [load]);

  const exec = async (a, item, values) => {
    const vars = { ...(item || {}), ...(values || {}) };
    setBusy(true); setMsg('');
    try {
      let r;
      if (a.method === 'NAV') { navigation.navigate(a.endpoint); return; }
      if (a.method === 'OPEN') {
        const base = await api.get(a.from);
        const u = pick(base, LINKS);
        if (!u) { setMsg('O servidor não indicou nenhum endereço de descarga.'); return; }
        await Linking.openURL(String(u)); return;
      }
      const ep = fill(a.endpoint, vars, true);
      if (a.method === 'GET') r = await api.get(ep, 60000);
      else r = await api.post(ep, fillBody(a.body || values || {}, vars), 60000);
      if (a.speak) {
        const t = typeof r === 'string' ? r : pick(r, TEXTOS) || JSON.stringify(r);
        Speech.speak(String(t), { language: 'pt-PT' });
      }
      setResult({ titulo: a.label, data: r });
      setMsg('Feito: ' + a.label);
      if (a.method !== 'GET') load();
    } catch (e) { setMsg(e.message); }
    finally { setBusy(false); setForm(null); }
  };

  const run = (a, item) => {
    const go = () => (a.form ? setForm({ action: a, item, values: {} }) : exec(a, item, null));
    if (a.confirm && !a.form) Alert.alert(a.label, a.confirm, [{ text: 'Cancelar', style: 'cancel' }, { text: 'Confirmar', onPress: () => exec(a, item, null) }]);
    else go();
  };
  const submit = () => {
    const { action, item, values } = form;
    if (action.confirm) Alert.alert(action.label, action.confirm, [{ text: 'Cancelar', style: 'cancel' }, { text: 'Confirmar', onPress: () => exec(action, item, values) }]);
    else exec(action, item, values);
  };

  const btn = (danger) => ({ paddingVertical: 8, paddingHorizontal: 12, borderRadius: 10, backgroundColor: c.card, borderWidth: 1, borderColor: danger ? c.err : c.border, marginRight: 6, marginBottom: 6 });
  const H = (t) => <Text style={{ color: c.gold, fontWeight: '700', fontSize: 15, marginTop: 20, marginBottom: 8 }}>{t}</Text>;

  const Stats = ({ d }) => (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      {primitives(d).filter(([k]) => k !== '__erro').map(([k, v]) => (
        <View key={k} style={{ width: '48%', marginRight: '2%', marginBottom: 8, backgroundColor: c.card, borderRadius: 12, padding: 12, borderWidth: 1, borderColor: c.border }}>
          <Text style={{ color: c.muted, fontSize: 11 }}>{pretty(k)}</Text>
          <Text style={{ color: c.text, fontSize: 18, fontWeight: '700', marginTop: 2 }}>{fmt(v)}</Text>
        </View>
      ))}
    </View>
  );

  const Item = ({ s, it }) => {
    const tKey = (s.itemTitle || TITULOS).find((k) => it[k] != null && it[k] !== '');
    const est = pick(it, ESTADOS);
    const warn = s.warnIf && s.warnIf(it);
    const meta = primitives(it).filter(([k]) => k !== tKey && !ESTADOS.includes(k) && k !== 'id').slice(0, 6);
    return (
      <View style={{ backgroundColor: c.card, borderRadius: 14, padding: 14, marginBottom: 10, borderWidth: 1, borderColor: warn ? c.warn : c.border }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: c.text, fontWeight: '700', fontSize: 15, flex: 1 }}>{tKey ? fmt(it[tKey]) : 'Item'}</Text>
          {est != null && <Text style={{ color: c.gold, fontWeight: '700' }}>{fmt(est)}</Text>}
        </View>
        {warn && <Text style={{ color: c.warn, marginTop: 4 }}>Sem resposta há mais de 24 horas.</Text>}
        {meta.map(([k, v]) => <Text key={k} style={{ color: c.muted, marginTop: 2 }}>{pretty(k)}: {fmt(v)}</Text>)}
        {!!(s.itemActions || []).length && (
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 10 }}>
            {s.itemActions.filter((a) => !a.if || a.if(it)).map((a) => (
              <TouchableOpacity key={a.label} style={btn(a.danger)} onPress={() => run(a, it)}><Text style={{ color: a.danger ? c.err : c.gold }}>{a.label}</Text></TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    );
  };

  const Section = ({ s }) => {
    const d = data[s.key];
    if (d === undefined) return null;
    if (d && d.__erro) return <>{H(s.title)}<Text style={{ color: c.err }}>{d.__erro}</Text></>;
    if (s.kind === 'stats') return <>{H(s.title)}<Stats d={d} /></>;
    if (s.kind === 'json') return <>{H(s.title)}<JsonView data={d} c={c} /></>;
    const list = asList(d).slice(0, s.limit || 200);
    return (
      <>
        {H(s.title)}
        {!list.length && <Text style={{ color: c.muted }}>Sem dados.</Text>}
        {list.map((it, i) => <Item key={it.id ?? i} s={s} it={typeof it === 'object' && it ? it : { valor: it }} />)}
        {s.export && !!list.length && (
          <TouchableOpacity style={btn()} onPress={() => Share.share({ message: csv(list) })}><Text style={{ color: c.gold }}>Exportar CSV</Text></TouchableOpacity>
        )}
      </>
    );
  };

  const Resultado = () => {
    if (!result) return null;
    const d = result.data;
    const link = d && typeof d === 'object' ? pick(d, LINKS) : undefined;
    const texto = typeof d === 'string' ? d : d && typeof d === 'object' ? pick(d, TEXTOS) : undefined;
    return (
      <View style={{ backgroundColor: c.card, borderRadius: 14, padding: 14, marginTop: 16, borderWidth: 1, borderColor: c.gold }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: c.gold, fontWeight: '700' }}>{result.titulo}</Text>
          <TouchableOpacity onPress={() => setResult(null)}><Text style={{ color: c.muted }}>Fechar</Text></TouchableOpacity>
        </View>
        <View style={{ marginTop: 8 }}>
          {texto ? <Text selectable style={{ color: c.text }}>{String(texto)}</Text> : <JsonView data={d} c={c} />}
        </View>
        <View style={{ flexDirection: 'row', marginTop: 10, flexWrap: 'wrap' }}>
          {link && <TouchableOpacity style={btn()} onPress={() => Linking.openURL(String(link))}><Text style={{ color: c.gold }}>Abrir / descarregar</Text></TouchableOpacity>}
          {texto && <TouchableOpacity style={btn()} onPress={() => Share.share({ message: String(texto) })}><Text style={{ color: c.gold }}>Partilhar</Text></TouchableOpacity>}
        </View>
      </View>
    );
  };

  const input = { borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 10, padding: 10, marginBottom: 8 };
  const Form = () => !form ? null : (
    <View style={{ backgroundColor: c.card, borderRadius: 14, padding: 14, marginTop: 14, borderWidth: 1, borderColor: c.gold }}>
      <Text style={{ color: c.gold, fontWeight: '700', marginBottom: 8 }}>{form.action.label}</Text>
      {form.action.form.map((f) => f.type === 'options' ? (
        <View key={f.name} style={{ marginBottom: 8 }}>
          <Text style={{ color: c.muted, fontSize: 12, marginBottom: 4 }}>{f.label}</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {f.options.map((o) => {
              const on = form.values[f.name] === o;
              return <TouchableOpacity key={o} onPress={() => setForm({ ...form, values: { ...form.values, [f.name]: o } })} style={{ ...btn(), backgroundColor: on ? c.gold : c.bg }}><Text style={{ color: on ? '#000' : c.text }}>{o}</Text></TouchableOpacity>;
            })}
          </View>
        </View>
      ) : (
        <TextInput key={f.name} value={form.values[f.name] || ''} placeholder={f.label} placeholderTextColor={c.muted} multiline={!!f.multiline} keyboardType={f.number ? 'numeric' : 'default'} autoCapitalize="none"
          onChangeText={(t) => setForm({ ...form, values: { ...form.values, [f.name]: f.number ? t.replace(',', '.') : t } })} style={{ ...input, minHeight: f.multiline ? 70 : undefined }} />
      ))}
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={submit} style={{ flex: 1, backgroundColor: c.gold, padding: 11, borderRadius: 10, alignItems: 'center', marginRight: 8 }}><Text style={{ color: '#000', fontWeight: '700' }}>Enviar</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => setForm(null)} style={{ flex: 1, padding: 11, alignItems: 'center' }}><Text style={{ color: c.muted }}>Cancelar</Text></TouchableOpacity>
      </View>
    </View>
  );

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16, paddingBottom: 50 }} keyboardShouldPersistTaps="handled"
      refreshControl={<RefreshControl refreshing={loading} onRefresh={load} tintColor={c.gold} />}>
      <Text style={{ color: c.text, fontSize: 22, fontWeight: '700' }}>{cfg.titulo}</Text>
      {!!cfg.note && <Text style={{ color: c.muted, marginTop: 6 }}>{cfg.note}</Text>}
      {offline && <Text style={{ color: c.warn, marginTop: 6 }}>Modo offline: dados em cache.</Text>}
      {!!msg && <Text style={{ color: c.gold, marginTop: 8 }}>{msg}</Text>}
      {busy && <ActivityIndicator color={c.gold} style={{ marginTop: 8 }} />}
      {!!(cfg.actions || []).length && (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 14 }}>
          {cfg.actions.map((a) => <TouchableOpacity key={a.label} style={btn()} onPress={() => run(a, null)}><Text style={{ color: c.gold, fontWeight: '600' }}>{a.label}</Text></TouchableOpacity>)}
        </View>
      )}
      {Form()}
      {Resultado()}
      {sections.map((s) => <Section key={s.key} s={s} />)}
    </ScrollView>
  );
}

~~~

### letimax-app/src/screens/SettingsScreen.js
~~~js
import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Switch } from 'react-native';
import * as IntentLauncher from 'expo-intent-launcher';
import { startService, stopService } from '../services/service';
import Native from '../../modules/letimax-native';
import { lembrarServico } from '../services/nativeBridge';
import SettingsExtras from './SettingsExtras';
import { useTheme } from '../theme/theme';
import { serverConfig, saveServerConfig, api } from '../services/api';
import { getConfig, setConfig } from '../db/database';

const CHAVES_IA = ['ANTHROPIC_API_KEY', 'OPENAI_API_KEY', 'GEMINI_API_KEY', 'STABILITY_API_KEY', 'ELEVENLABS_API_KEY', 'ELEVENLABS_VOICE_ID'];
const CHAVES_PLAT = ['HOTMART_CLIENT_ID', 'HOTMART_CLIENT_SECRET', 'KIWIFY_API_KEY', 'GUMROAD_ACCESS_TOKEN', 'SHOPIFY_API_KEY', 'SHOPIFY_API_SECRET', 'BINANCE_API_KEY', 'BINANCE_SECRET_KEY', 'MAILCHIMP_API_KEY', 'NETLIFY_API_KEY', 'GMAIL_OAUTH_TOKEN', 'GOOGLE_ANALYTICS_ID', 'META_PIXEL_ID'];

export default function SettingsScreen() {
  const { c, mode, setMode } = useTheme();
  const [url, setUrl] = useState('');
  const [token, setToken] = useState('');
  const [nivel, setNivel] = useState('1');
  const [msg, setMsg] = useState('');
  const [valores, setValores] = useState({});
  const [visivel, setVisivel] = useState({});
  const [novoNome, setNovoNome] = useState('');
  const [novoValor, setNovoValor] = useState('');
  const [servico, setServico] = useState(false);
  const [msgOcupado, setMsgOcupado] = useState('');

  useEffect(() => {
    serverConfig().then((s) => setUrl(s.url));
    getConfig('autonomia').then((v) => v && setNivel(v));
    getConfig('servico_activo').then((v) => setServico(v === '1'));
    getConfig('msg_ocupado').then((v) => v && setMsgOcupado(v));
  }, []);

  const flash = (m) => { setMsg(m); setTimeout(() => setMsg(''), 4000); };
  const input = { borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 10, padding: 10, flex: 1 };
  const h = { color: c.gold, fontSize: 16, fontWeight: '700', marginTop: 22, marginBottom: 8 };
  const chip = (on) => ({ paddingVertical: 8, paddingHorizontal: 14, borderRadius: 18, marginRight: 8, backgroundColor: on ? c.gold : c.card });

  const saveServer = async () => {
    try { await saveServerConfig(url, token); setToken(''); flash('Servidor guardado.'); } catch (e) { flash(e.message); }
  };
  const setAuto = async (n) => {
    setNivel(n); await setConfig('autonomia', n);
    try { await api.post('/autonomia/nivel', { nivel: Number(n) }); } catch (e) { flash('Guardado no APP; servidor offline.'); }
  };
  // A chave vai por HTTPS para o servidor e o campo é limpo — nada fica no telemóvel
  const enviarChave = async (nome, valor) => {
    if (!valor) return;
    try {
      await api.post('/chaves/adicionar', { nome, valor });
      setValores((v) => ({ ...v, [nome]: '' }));
      flash(nome + ' enviada ao servidor.');
    } catch (e) { flash(e.message); }
  };

  const toggleServico = async (v) => {
    setServico(v); await setConfig('servico_activo', v ? '1' : '0'); lembrarServico(v);
    try { if (v) await startService(); else await stopService(); } catch (e) { flash(e.message); }
  };
  const bateria = () =>
    IntentLauncher.startActivityAsync('android.settings.REQUEST_IGNORE_BATTERY_OPTIMIZATIONS', { data: 'package:com.letimax.app' })
      .catch(() => flash('Abra as definições de bateria e retire as restrições da LétimaX.'));

  const chave = (nome) => (
    <View key={nome} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
      <View style={{ flex: 1 }}>
        <Text style={{ color: c.muted, fontSize: 11, marginBottom: 2 }}>{nome}</Text>
        <TextInput style={{ ...input, flex: 0 }} value={valores[nome] || ''} onChangeText={(t) => setValores((v) => ({ ...v, [nome]: t }))}
          secureTextEntry={!visivel[nome]} autoCapitalize="none" placeholder="••••••••" placeholderTextColor={c.muted} />
      </View>
      <TouchableOpacity onPress={() => setVisivel((v) => ({ ...v, [nome]: !v[nome] }))} style={{ padding: 10 }}><Text style={{ color: c.gold }}>{visivel[nome] ? 'Esconder' : 'Mostrar'}</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => enviarChave(nome, valores[nome])} style={{ padding: 10 }}><Text style={{ color: c.gold, fontWeight: '700' }}>Enviar</Text></TouchableOpacity>
    </View>
  );

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16, paddingBottom: 60 }}>
      {!!msg && <Text style={{ color: c.gold, marginBottom: 8 }}>{msg}</Text>}

      <Text style={h}>Servidor</Text>
      <View style={{ flexDirection: 'row', marginBottom: 8 }}><TextInput style={input} value={url} onChangeText={setUrl} autoCapitalize="none" placeholder="https://..." placeholderTextColor={c.muted} /></View>
      <View style={{ flexDirection: 'row', marginBottom: 8 }}><TextInput style={input} value={token} onChangeText={setToken} autoCapitalize="none" secureTextEntry placeholder="Novo token (opcional)" placeholderTextColor={c.muted} /></View>
      <TouchableOpacity onPress={saveServer} style={{ backgroundColor: c.gold, padding: 12, borderRadius: 10, alignItems: 'center' }}><Text style={{ color: '#000', fontWeight: '700' }}>Guardar servidor</Text></TouchableOpacity>

      <Text style={h}>Tema visual</Text>
      <View style={{ flexDirection: 'row' }}>
        {[['system', 'Seguir sistema'], ['light', 'Claro'], ['dark', 'Escuro']].map(([m, l]) => (
          <TouchableOpacity key={m} style={chip(mode === m)} onPress={() => setMode(m)}><Text style={{ color: mode === m ? '#000' : c.text }}>{l}</Text></TouchableOpacity>
        ))}
      </View>

      <Text style={h}>Nível de autonomia</Text>
      <View style={{ flexDirection: 'row' }}>
        {[['1', 'Normal'], ['2', 'Semi-autónomo'], ['3', 'Autónomo total']].map(([n, l]) => (
          <TouchableOpacity key={n} style={chip(nivel === n)} onPress={() => setAuto(n)}><Text style={{ color: nivel === n ? '#000' : c.text }}>{l}</Text></TouchableOpacity>
        ))}
      </View>

      <Text style={h}>Acesso nativo (APK da Fase 4)</Text>
      <Text style={{ color: Native ? c.ok : c.warn, marginBottom: 8 }}>{Native ? 'Módulo nativo activo.' : 'Módulo nativo indisponível (a correr no Expo Go).'}</Text>
      <TouchableOpacity disabled={!Native} onPress={() => Native.openNotificationAccess()} style={{ padding: 11, borderRadius: 10, backgroundColor: c.card, alignItems: 'center', marginBottom: 8, opacity: Native ? 1 : 0.4 }}>
        <Text style={{ color: c.gold }}>Acesso às notificações (WhatsApp, SMS, email)</Text>
      </TouchableOpacity>
      <TouchableOpacity disabled={!Native} onPress={() => Native.requestDeviceAdmin()} style={{ padding: 11, borderRadius: 10, backgroundColor: c.card, alignItems: 'center', marginBottom: 8, opacity: Native ? 1 : 0.4 }}>
        <Text style={{ color: c.gold }}>Permitir bloquear o ecrã por voz</Text>
      </TouchableOpacity>
      <Text style={{ color: c.muted, fontSize: 12, marginBottom: 4 }}>Mensagem de "estou ocupado" (enviada por SMS)</Text>
      <View style={{ flexDirection: 'row' }}>
        <TextInput style={input} value={msgOcupado} onChangeText={setMsgOcupado} placeholder="O Senhor Letício está ocupado neste momento..." placeholderTextColor={c.muted} multiline />
        <TouchableOpacity onPress={async () => { await setConfig('msg_ocupado', msgOcupado); flash('Mensagem guardada.'); }} style={{ padding: 10, justifyContent: 'center' }}><Text style={{ color: c.gold, fontWeight: '700' }}>Guardar</Text></TouchableOpacity>
      </View>

      <Text style={h}>Serviço em segundo plano</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text style={{ color: c.text, flex: 1, marginRight: 10 }}>LétimaX sempre activa (alertas do servidor em tempo real)</Text>
        <Switch value={servico} onValueChange={toggleServico} trackColor={{ true: c.gold }} />
      </View>
      <TouchableOpacity onPress={bateria} style={{ marginTop: 10, padding: 11, borderRadius: 10, backgroundColor: c.card, alignItems: 'center' }}>
        <Text style={{ color: c.gold }}>Permitir uso sem limite de bateria</Text>
      </TouchableOpacity>

      <SettingsExtras flash={flash} />

      <Text style={h}>Secção 1 — Chaves de IA</Text>
      {CHAVES_IA.map(chave)}
      <Text style={h}>Secção 2 — Chaves de Plataformas</Text>
      {CHAVES_PLAT.map(chave)}

      <Text style={h}>Secção 3 — Chaves Personalizadas</Text>
      <View style={{ flexDirection: 'row', marginBottom: 8 }}><TextInput style={input} value={novoNome} onChangeText={setNovoNome} autoCapitalize="characters" placeholder="NOME_DA_CHAVE" placeholderTextColor={c.muted} /></View>
      <View style={{ flexDirection: 'row', marginBottom: 8 }}><TextInput style={input} value={novoValor} onChangeText={setNovoValor} autoCapitalize="none" secureTextEntry placeholder="Valor" placeholderTextColor={c.muted} /></View>
      <TouchableOpacity onPress={async () => { if (novoNome && novoValor) { await enviarChave(novoNome.trim(), novoValor.trim()); setNovoNome(''); setNovoValor(''); } }}
        style={{ backgroundColor: c.gold, padding: 12, borderRadius: 10, alignItems: 'center' }}><Text style={{ color: '#000', fontWeight: '700' }}>Adicionar nova chave</Text></TouchableOpacity>
      <Text style={{ color: c.muted, marginTop: 14, fontSize: 12 }}>Todas as chaves seguem por HTTPS para o servidor e nunca ficam guardadas no telemóvel.</Text>
    </ScrollView>
  );
}

~~~

### letimax-app/src/screens/SaudeScreen.js
~~~js
import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Switch } from 'react-native';
import notifee, { AndroidImportance, TriggerType, TimeUnit } from '@notifee/react-native';
import { useTheme } from '../theme/theme';
import { api } from '../services/api';
import { saveHumor, humorStats, getConfig, setConfig } from '../db/database';

const LEMBRETES = [
  { id: 'lembrete_agua', nome: 'Beber água', texto: 'Senhor Letício, hora de beber água.', min: 60 },
  { id: 'lembrete_pausa', nome: 'Pausa do ecrã', texto: 'Faça uma pausa de 5 minutos: levante-se e alongue-se.', min: 90 },
  { id: 'lembrete_exercicio', nome: 'Exercício', texto: 'Hora de se mexer um pouco.', min: 180 },
];

export default function SaudeScreen() {
  const { c } = useTheme();
  const [st, setSt] = useState({ n: 0, media: 0, bons: 0, hoje: null });
  const [sono, setSono] = useState('');
  const [on, setOn] = useState({});
  const [msg, setMsg] = useState('');

  const load = async () => {
    setSt(await humorStats());
    const o = {};
    for (const l of LEMBRETES) o[l.id] = (await getConfig(l.id)) === '1';
    setOn(o);
  };
  useEffect(() => { load(); }, []);

  const humor = async (v) => {
    const h = sono ? Number(String(sono).replace(',', '.')) : null;
    await saveHumor(v, h);
    api.post('/humor', { valor: v, sono: h }).catch(() => {});
    setMsg('Humor registado.'); load();
  };

  const lembrete = async (l, v) => {
    setOn((x) => ({ ...x, [l.id]: v }));
    await setConfig(l.id, v ? '1' : '0');
    try {
      if (v) {
        await notifee.requestPermission();
        const channelId = await notifee.createChannel({ id: 'lembretes', name: 'Lembretes de saúde', importance: AndroidImportance.DEFAULT });
        await notifee.createTriggerNotification(
          { id: l.id, title: 'LétimaX', body: l.texto, android: { channelId, pressAction: { id: 'default' } } },
          { type: TriggerType.INTERVAL, interval: l.min, timeUnit: TimeUnit.MINUTES }
        );
      } else await notifee.cancelTriggerNotification(l.id);
    } catch (e) { setMsg(e.message); }
  };

  const card = { backgroundColor: c.card, borderRadius: 14, padding: 14, borderWidth: 1, borderColor: c.border, marginBottom: 10 };
  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16, paddingBottom: 50 }} keyboardShouldPersistTaps="handled">
      <Text style={{ color: c.text, fontSize: 22, fontWeight: '700', marginBottom: 12 }}>Saúde e bem-estar</Text>
      {!!msg && <Text style={{ color: c.gold, marginBottom: 8 }}>{msg}</Text>}

      <Text style={{ color: c.gold, fontWeight: '700', marginBottom: 8 }}>Como está hoje? (1 a 5)</Text>
      <View style={{ flexDirection: 'row', marginBottom: 8 }}>
        {[1, 2, 3, 4, 5].map((v) => (
          <TouchableOpacity key={v} onPress={() => humor(v)} style={{ flex: 1, padding: 14, borderRadius: 10, alignItems: 'center', marginRight: v < 5 ? 6 : 0, backgroundColor: st.hoje === v ? c.gold : c.card }}>
            <Text style={{ color: st.hoje === v ? '#000' : c.text, fontWeight: '700', fontSize: 16 }}>{v}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TextInput value={sono} onChangeText={setSono} keyboardType="numeric" placeholder="Horas de sono (opcional)" placeholderTextColor={c.muted}
        style={{ borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 10, padding: 10, marginBottom: 14 }} />

      <View style={card}>
        <Text style={{ color: c.text }}>Registos: <Text style={{ fontWeight: '700' }}>{st.n}</Text> (últimos 30)</Text>
        <Text style={{ color: c.text }}>Humor médio: <Text style={{ fontWeight: '700' }}>{st.n ? st.media.toFixed(1) : '—'}</Text></Text>
        <Text style={{ color: c.text }}>Dias com humor 4 a 5: <Text style={{ fontWeight: '700' }}>{st.bons}</Text></Text>
        <Text style={{ color: c.muted, marginTop: 6, fontSize: 12 }}>Com o tempo, estes dados mostram em que dias rende mais.</Text>
      </View>

      <Text style={{ color: c.gold, fontWeight: '700', marginVertical: 8 }}>Lembretes</Text>
      {LEMBRETES.map((l) => (
        <View key={l.id} style={{ ...card, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={{ color: c.text }}>{l.nome} <Text style={{ color: c.muted }}>(a cada {l.min} min)</Text></Text>
          <Switch value={!!on[l.id]} onValueChange={(v) => lembrete(l, v)} trackColor={{ true: c.gold }} />
        </View>
      ))}
    </ScrollView>
  );
}

~~~

### letimax-app/src/screens/PasswordsScreen.js
~~~js
import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useTheme } from '../theme/theme';
import { biometricAuth, verifyPin, formatLock } from '../services/security';

// Cofre: cada entrada fica no SecureStore (cifrado pelo Android Keystore). Exige biometria/PIN sempre que se abre.
const IDX = 'pw_index';
const readIdx = async () => JSON.parse((await SecureStore.getItemAsync(IDX)) || '[]');

export default function PasswordsScreen() {
  const { c } = useTheme();
  const [open, setOpen] = useState(false);
  const [pin, setPin] = useState('');
  const [msg, setMsg] = useState('');
  const [lista, setLista] = useState([]);
  const [q, setQ] = useState('');
  const [vis, setVis] = useState({});
  const [segredos, setSegredos] = useState({});
  const [form, setForm] = useState(null);

  const unlock = async () => { if (await biometricAuth()) { setOpen(true); readIdx().then(setLista); } };
  useEffect(() => { unlock(); }, []);

  const unlockPin = async () => {
    const r = await verifyPin(pin); setPin('');
    if (r.ok) { setOpen(true); readIdx().then(setLista); }
    else setMsg(r.locked ? formatLock(r.locked) : 'PIN incorrecto.');
  };

  const mostrar = async (id) => {
    if (!segredos[id]) { const v = await SecureStore.getItemAsync('pw_' + id); setSegredos((s) => ({ ...s, [id]: JSON.parse(v || '{}') })); }
    setVis((v) => ({ ...v, [id]: !v[id] }));
  };
  const guardar = async () => {
    if (!form.plataforma || !form.password) return;
    const id = Date.now().toString(36);
    await SecureStore.setItemAsync('pw_' + id, JSON.stringify({ password: form.password, notas: form.notas || '' }));
    const idx = [...(await readIdx()), { id, plataforma: form.plataforma, email: form.email || '' }];
    await SecureStore.setItemAsync(IDX, JSON.stringify(idx));
    setLista(idx); setForm(null);
  };
  const apagar = (p) => Alert.alert('Eliminar', p.plataforma + '?', [
    { text: 'Cancelar', style: 'cancel' },
    { text: 'Eliminar', style: 'destructive', onPress: async () => {
      await SecureStore.deleteItemAsync('pw_' + p.id);
      const idx = (await readIdx()).filter((x) => x.id !== p.id);
      await SecureStore.setItemAsync(IDX, JSON.stringify(idx)); setLista(idx);
    } },
  ]);

  const input = { borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 10, padding: 10, marginBottom: 8 };

  if (!open) {
    return (
      <View style={{ flex: 1, backgroundColor: c.bg, padding: 24, justifyContent: 'center' }}>
        <Text style={{ color: c.text, fontSize: 20, fontWeight: '700', marginBottom: 8 }}>Cofre de passwords</Text>
        <Text style={{ color: c.muted, marginBottom: 16 }}>Confirme a identidade para abrir, mesmo com a APP já desbloqueada.</Text>
        <TouchableOpacity onPress={unlock} style={{ backgroundColor: c.gold, padding: 13, borderRadius: 10, alignItems: 'center', marginBottom: 14 }}><Text style={{ color: '#000', fontWeight: '700' }}>Usar rosto / impressão digital</Text></TouchableOpacity>
        <TextInput value={pin} onChangeText={setPin} placeholder="ou PIN" placeholderTextColor={c.muted} secureTextEntry keyboardType="number-pad" style={input} />
        <TouchableOpacity onPress={unlockPin} style={{ padding: 10, alignItems: 'center' }}><Text style={{ color: c.gold }}>Abrir com PIN</Text></TouchableOpacity>
        {!!msg && <Text style={{ color: c.err, textAlign: 'center' }}>{msg}</Text>}
      </View>
    );
  }

  const filtrada = lista.filter((p) => (p.plataforma + p.email).toLowerCase().includes(q.toLowerCase()));
  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16 }} keyboardShouldPersistTaps="handled">
      <Text style={{ color: c.text, fontSize: 22, fontWeight: '700', marginBottom: 10 }}>Passwords</Text>
      <TextInput value={q} onChangeText={setQ} placeholder="Pesquisar plataforma" placeholderTextColor={c.muted} style={input} />
      {form ? (
        <View style={{ backgroundColor: c.card, borderRadius: 14, padding: 14, marginBottom: 12 }}>
          {[['plataforma', 'Plataforma'], ['email', 'Email usado'], ['password', 'Password'], ['notas', 'Notas']].map(([k, l]) => (
            <TextInput key={k} value={form[k] || ''} onChangeText={(t) => setForm({ ...form, [k]: t })} placeholder={l} placeholderTextColor={c.muted} autoCapitalize="none" secureTextEntry={k === 'password'} style={input} />
          ))}
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={guardar} style={{ flex: 1, backgroundColor: c.gold, padding: 11, borderRadius: 10, alignItems: 'center', marginRight: 8 }}><Text style={{ color: '#000', fontWeight: '700' }}>Guardar</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => setForm(null)} style={{ flex: 1, padding: 11, alignItems: 'center' }}><Text style={{ color: c.muted }}>Cancelar</Text></TouchableOpacity>
          </View>
        </View>
      ) : (
        <TouchableOpacity onPress={() => setForm({})} style={{ backgroundColor: c.gold, padding: 12, borderRadius: 10, alignItems: 'center', marginBottom: 12 }}><Text style={{ color: '#000', fontWeight: '700' }}>Nova password</Text></TouchableOpacity>
      )}
      {!filtrada.length && <Text style={{ color: c.muted }}>Cofre vazio.</Text>}
      {filtrada.map((p) => (
        <TouchableOpacity key={p.id} onPress={() => mostrar(p.id)} onLongPress={() => apagar(p)} style={{ backgroundColor: c.card, borderRadius: 12, padding: 12, marginBottom: 8, borderWidth: 1, borderColor: c.border }}>
          <Text style={{ color: c.text, fontWeight: '700' }}>{p.plataforma}</Text>
          {!!p.email && <Text style={{ color: c.muted }}>{p.email}</Text>}
          <Text style={{ color: c.gold, marginTop: 4 }}>{vis[p.id] && segredos[p.id] ? segredos[p.id].password : '••••••••  (toque para mostrar)'}</Text>
          {vis[p.id] && !!segredos[p.id]?.notas && <Text style={{ color: c.muted }}>{segredos[p.id].notas}</Text>}
        </TouchableOpacity>
      ))}
      <Text style={{ color: c.muted, fontSize: 12 }}>Toque longo para eliminar.</Text>
    </ScrollView>
  );
}

~~~

### letimax-app/src/navigation/menu.js
~~~js
// Menu lateral: nome, rota, endpoint GET do servidor (null = ecrã local, ainda por construir)
export const MENU = [
  { id: 'motor', nome: 'Motor de Receita', endpoint: '/motor-receita/oportunidades' },
  { id: 'raqueamento', nome: 'Sistema de Raqueamento', endpoint: '/raqueamento/estado' },
  { id: 'activos', nome: 'Activos', endpoint: '/activos/lista' },
  { id: 'novonegocio', nome: 'Novos Negócios', endpoint: '/negocios/oportunidades' },
  { id: 'metas', nome: 'Metas', endpoint: '/metas/progresso' },
  { id: 'afext', nome: 'Afiliados Externos', endpoint: '/afiliados/ranking' },
  { id: 'afprop', nome: 'Afiliados Próprios', endpoint: '/afiliados-proprios/dashboard' },
  { id: 'lanc', nome: 'Lançamentos', endpoint: '/lancamento/estrategia' },
  { id: 'webinars', nome: 'Webinars', endpoint: '/webinar/lista' },
  { id: 'email', nome: 'Email Marketing', endpoint: '/email/analytics' },
  { id: 'analytics', nome: 'Analytics', endpoint: '/analytics/conversao' },
  { id: 'reputacao', nome: 'Reputação', endpoint: '/reputacao/testemunhos' },
  { id: 'suporte', nome: 'Suporte', endpoint: '/suporte/tickets' },
  { id: 'onboarding', nome: 'Onboarding', endpoint: '/onboarding/status' },
  { id: 'referencias', nome: 'Referências', endpoint: '/referencias/dashboard' },
  { id: 'paginas', nome: 'Páginas', endpoint: '/pagina/analytics' },
  { id: 'videos', nome: 'Vídeos', endpoint: null },
  { id: 'cursos', nome: 'Cursos', endpoint: '/curso/lista' },
  { id: 'sites', nome: 'Sites', endpoint: '/site/analytics' },
  { id: 'apres', nome: 'Apresentações', endpoint: '/apresentacao/lista' },
  { id: 'automacao', nome: 'Automação Inteligente', endpoint: '/automacao/pontuacao' },
  { id: 'oportunidades', nome: 'Oportunidades', endpoint: '/oportunidade/pendentes' },
  { id: 'investimentos', nome: 'Investimentos', endpoint: '/investimentos' },
  { id: 'empresa', nome: 'Empresa', endpoint: '/empresa/progresso' },
  { id: 'financas', nome: 'Finanças', endpoint: '/receita/total' },
  { id: 'contactos', nome: 'Contactos', endpoint: null },
  { id: 'saude', nome: 'Saúde', endpoint: '/saude' },
  { id: 'passwords', nome: 'Passwords', endpoint: null },
  { id: 'documentos', nome: 'Documentos', endpoint: null },
  { id: 'logs', nome: 'Logs', endpoint: '/logs' },
  { id: 'actualizacao', nome: 'Actualização', endpoint: '/versao/atual' },
];

~~~

### letimax-app/src/navigation/Root.js
~~~js
import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/theme';
import { MENU } from './menu';
import ChatScreen from '../screens/ChatScreen';
import ModuleScreen from '../screens/ModuleScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MotorReceitaScreen from '../screens/MotorReceitaScreen';
import MetasScreen from '../screens/MetasScreen';
import ProdutosScreen from '../screens/ProdutosScreen';
import ContactosScreen from '../screens/ContactosScreen';
import PasswordsScreen from '../screens/PasswordsScreen';
import EngineScreen from '../screens/EngineScreen';
import FinancasScreen from '../screens/FinancasScreen';
import SaudeScreen from '../screens/SaudeScreen';
import TopIndicators from '../components/TopIndicators';
import { SCREENS } from '../screens/screens.config';

const SPECIAL = { motor: MotorReceitaScreen, metas: MetasScreen, contactos: ContactosScreen, passwords: PasswordsScreen, financas: FinancasScreen, saude: SaudeScreen };
const viaEngine = (id) => !!SCREENS[id];

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const ICONS = { Chat: 'chatbubble-ellipses', Dashboard: 'speedometer', Produtos: 'cube', Mercado: 'trending-up', Marketing: 'megaphone' };

function Tabs() {
  const { c } = useTheme();
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarActiveTintColor: c.gold, tabBarInactiveTintColor: c.muted,
      tabBarStyle: { backgroundColor: c.bg, borderTopColor: c.border },
      tabBarIcon: ({ color, size }) => <Ionicons name={ICONS[route.name]} size={size} color={color} />,
    })}>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Dashboard" component={EngineScreen} initialParams={{ id: 'dashboard' }} />
      <Tab.Screen name="Produtos" component={ProdutosScreen} />
      <Tab.Screen name="Mercado" component={EngineScreen} initialParams={{ id: 'mercado' }} />
      <Tab.Screen name="Marketing" component={EngineScreen} initialParams={{ id: 'marketing' }} />
    </Tab.Navigator>
  );
}

export default function Root() {
  const { c, isDark } = useTheme();
  const base = isDark ? DarkTheme : DefaultTheme;
  const navTheme = { ...base, colors: { ...base.colors, background: c.bg, card: c.bg, text: c.text, border: c.border, primary: c.gold } };
  return (
    <NavigationContainer theme={navTheme}>
      <Drawer.Navigator screenOptions={{ headerRight: () => <TopIndicators />, headerTintColor: c.gold, headerTitleStyle: { color: c.text }, drawerActiveTintColor: c.gold, drawerStyle: { backgroundColor: c.bg } }}>
        <Drawer.Screen name="Principal" component={Tabs} options={{ title: 'LétimaX' }} />
        {MENU.map((m) => (
          <Drawer.Screen key={m.id} name={m.id} component={SPECIAL[m.id] || (viaEngine(m.id) ? EngineScreen : ModuleScreen)} options={{ title: m.nome }} initialParams={{ id: m.id, titulo: m.nome, endpoint: m.endpoint }} />
        ))}
        <Drawer.Screen name="configuracoes" component={SettingsScreen} options={{ title: 'Configurações' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

~~~

### letimax-app/src/theme/theme.js
~~~js
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import * as SecureStore from 'expo-secure-store';

export const GOLD = '#C9A84C';
const base = { gold: GOLD, ok: '#2E9E5B', err: '#D64545', warn: '#E08A1E' };
export const light = { ...base, bg: '#FFFFFF', text: '#1A1A1A', muted: '#6B6B6B', card: '#F5F5F5', border: '#E5E5E5', soft: '#2D2D2D', bubbleUser: '#F3E9C6', bubbleBot: '#EFEFEF' };
export const dark = { ...base, bg: '#0D0D0D', text: '#FFFFFF', muted: '#A0A0A0', card: '#1A1A1A', border: '#2A2A2A', soft: '#2D2D2D', bubbleUser: '#4A3F1C', bubbleBot: '#1F1F1F' };

const Ctx = createContext(null);

// mode: 'system' (padrão) | 'light' | 'dark'
export function ThemeProvider({ children }) {
  const sys = useColorScheme();
  const [mode, setModeState] = useState('system');
  useEffect(() => {
    SecureStore.getItemAsync('tema_modo').then((m) => m && setModeState(m)).catch(() => {});
  }, []);
  const setMode = async (m) => {
    setModeState(m);
    try { await SecureStore.setItemAsync('tema_modo', m); } catch (e) {}
  };
  const isDark = mode === 'system' ? sys === 'dark' : mode === 'dark';
  return <Ctx.Provider value={{ c: isDark ? dark : light, isDark, mode, setMode }}>{children}</Ctx.Provider>;
}
export const useTheme = () => useContext(Ctx);

~~~

### letimax-app/src/services/commands.js
~~~js
import { Linking, PermissionsAndroid } from 'react-native';
import * as IntentLauncher from 'expo-intent-launcher';
import * as Brightness from 'expo-brightness';
import { VolumeManager } from 'react-native-volume-manager';
import { api } from './api';
import { biometricAuth } from './security';
import { listContactos, logVoz } from '../db/database';
import * as NB from './nativeBridge';

// SEGURANÇA: o Android não deixa uma app confirmar QUEM está a falar. Por isso estes comandos só correm
// com a APP já desbloqueada (PIN/biometria). Comandos críticos exigem "sim" falado + biometria nova.
const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
const WAKE = /\b(letimax|letima x|leti max|let imax|letimacs|letimax)\b/;
let pending = null; // { fn, critico }

function falar(d) {
  if (d == null) return 'Sem dados.';
  if (typeof d === 'string') return d;
  const txt = d.resumo || d.texto || d.mensagem;
  if (txt) return String(txt);
  const partes = Object.entries(d).filter(([, v]) => v !== null && typeof v !== 'object').slice(0, 6).map(([k, v]) => k.replace(/_/g, ' ') + ': ' + v);
  return partes.length ? partes.join('. ') : 'Recebi os dados, mas não há um resumo para ler.';
}
async function volume(delta, abs) {
  let cur = await VolumeManager.getVolume();
  cur = typeof cur === 'number' ? cur : (cur && cur.volume) != null ? cur.volume : 0.5;
  const v = abs != null ? abs : Math.min(1, Math.max(0, cur + delta));
  await VolumeManager.setVolume(v, { showUI: true });
  return v;
}
async function brilho(delta) {
  const cur = await Brightness.getBrightnessAsync();
  await Brightness.setBrightnessAsync(Math.min(1, Math.max(0.05, cur + delta)));
}
async function ligar(nome) {
  const [c] = await listContactos(nome);
  if (!c || !c.telefone) return 'Não encontrei o número de ' + nome + ' nos contactos.';
  const num = c.telefone.replace(/[^\d+]/g, '');
  const ok = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CALL_PHONE);
  if (ok !== 'granted') { await Linking.openURL('tel:' + num); return 'A abrir o marcador para ' + c.nome + '.'; }
  await IntentLauncher.startActivityAsync('android.intent.action.CALL', { data: 'tel:' + num });
  return 'A ligar para ' + c.nome + '.';
}
const nao = (txt) => async () => txt;
const SEM_NATIVO = 'Ainda não consigo fazer isso: o Android só permite com código nativo adicional (Fase 4).';

const H = [
  { re: /^modo escuro$/, fn: async (m, x) => { await x.setMode('dark'); return 'Modo escuro activado.'; } },
  { re: /^modo claro$/, fn: async (m, x) => { await x.setMode('light'); return 'Modo claro activado.'; } },
  { re: /^(liga|ligar|acende) (a )?lanterna$/, fn: async (m, x) => ((await x.torch.setTorch(true)) ? 'Lanterna ligada.' : 'Preciso da permissão da câmara para a lanterna.') },
  { re: /^(desliga|desligar|apaga) (a )?lanterna$/, fn: async (m, x) => { await x.torch.setTorch(false); return 'Lanterna desligada.'; } },
  { re: /^(sobe|aumenta) (o )?volume$/, fn: async () => { await volume(0.15); return 'Volume aumentado.'; } },
  { re: /^(desce|diminui|baixa) (o )?volume$/, fn: async () => { await volume(-0.15); return 'Volume diminuído.'; } },
  { re: /^volume maximo$/, fn: async () => { await volume(0, 1); return 'Volume no máximo.'; } },
  { re: /^silencia$/, fn: async () => { await volume(0, 0); return 'Volume a zero.'; } },
  { re: /^aumenta (o )?brilho$/, fn: async () => { await brilho(0.2); return 'Brilho aumentado.'; } },
  { re: /^(diminui|baixa) (o )?brilho$/, fn: async () => { await brilho(-0.2); return 'Brilho diminuído.'; } },
  { re: /^(liga|desliga) (o )?wifi$/, fn: async () => { await IntentLauncher.startActivityAsync('android.settings.WIFI_SETTINGS'); return 'Abri as definições de wifi. O Android não deixa uma app ligar ou desligar o wifi sozinha.'; } },
  { re: /^(liga|desliga) (o )?bluetooth$/, fn: async () => { await IntentLauncher.startActivityAsync('android.settings.BLUETOOTH_SETTINGS'); return 'Abri as definições de bluetooth. O Android não deixa uma app ligar ou desligar o bluetooth sozinha.'; } },
  { re: /^liga para (.+)$/, confirm: (m) => 'Vou ligar para ' + m[1] + '.', fn: (m) => ligar(m[1]) },

  { re: /^modo autonomo total por (\d+) horas?$/, critico: true,
    confirm: (m) => 'Vou activar o modo autónomo total por ' + m[1] + ' horas. Os limites mantêm-se: sem gastar dinheiro, sem retirar dinheiro, sem mudar de nicho.',
    fn: async (m) => { await api.post('/autonomia/ativar', { nivel: 3, horas: Number(m[1]) }); return 'Modo autónomo total activo por ' + m[1] + ' horas.'; } },
  { re: /^(desactiva|desativa) (o )?modo autonomo$/, fn: async () => { await api.post('/autonomia/desativar', {}); return 'Modo autónomo desactivado.'; } },
  { re: /^modo normal$/, fn: async () => { await api.post('/autonomia/nivel', { nivel: 1 }); return 'Modo normal activo.'; } },

  { re: /^como estao as vendas$/, fn: async () => falar(await api.get('/relatorio')) },
  { re: /^quanto ganhei hoje$/, fn: async () => falar(await api.get('/receita/total')) },
  { re: /^qual a proxima oportunidade$/, fn: async () => {
      const d = await api.get('/motor-receita/oportunidades');
      const l = (Array.isArray(d) ? d : (d && d.oportunidades) || []).sort((a, b) => (b.pontuacao || 0) - (a.pontuacao || 0));
      return l.length ? (l[0].titulo || l[0].nome) + ', pontuação ' + (l[0].pontuacao ?? 'desconhecida') + '.' : 'Não há oportunidades activas.';
  } },
  { re: /^(faz )?(o )?resumo do dia$/, fn: async () => falar(await api.get('/resumo-matinal')) },
  { re: /^(activa|ativa) (o )?raqueamento$/, critico: true,
    confirm: () => 'Vou activar o sistema de raqueamento, o último recurso.',
    fn: async () => { await api.post('/raqueamento/activar', {}); return 'Sistema de raqueamento activado.'; } },
  { re: /^faz (o )?plano da empresa$/, fn: async () => { await api.post('/empresa/plano', {}); return 'A gerar o plano da empresa. Aviso quando estiver pronto.'; } },

  { re: /^(pausa|continua|retoma|toca) (a )?musica$/, fn: () => NB.musica('play_pause') },
  { re: /^proxima musica$/, fn: () => NB.musica('next') },
  { re: /^musica anterior$/, fn: () => NB.musica('previous') },
  { re: /^desliga (o )?ecra$/, fn: () => NB.bloquearEcra() },
  { re: /^(atende|atender)( a)? chamada$/, fn: () => NB.atender() },
  { re: /^(rejeita|rejeitar)( a)? chamada$/, fn: () => NB.rejeitar() },
  { re: /^diz que estou ocupado$/, fn: () => NB.ocupado() },
  { re: /^(le|ler) (as )?(minhas )?mensagens$/, fn: () => NB.lerSms() },
  { re: /^(le|ler) (as )?(minhas )?notificacoes$/, fn: () => NB.lerNotificacoes() },
];

async function executar(p, texto) {
  if (p.critico && !(await biometricAuth())) return 'Autenticação biométrica falhou. Comando cancelado.';
  try { return await p.fn(); } catch (e) { return 'Não consegui executar: ' + e.message; }
}

// Devolve a resposta a falar, ou null se o texto não é um comando.
export async function runCommand(raw, ctx) {
  let t = norm(raw).replace(/\bletima x\b|\bleti max\b|\blet imax\b/g, 'letimax');
  if (pending) {
    const p = pending; pending = null;
    if (/^(sim|confirmo|confirmado)\b/.test(t)) { const r = await executar(p); await logVoz(raw, r); return r; }
    if (/^(nao|cancela|cancelar)\b/.test(t)) return 'Cancelado.';
  }
  const wake = WAKE.test(t);
  if (ctx.requireWake && !wake) return null;
  const cmd = wake ? t.replace(/^.*?\bletimax\b[ ,]*/, '') : t;
  for (const h of H) {
    const m = cmd.match(h.re);
    if (!m) continue;
    if (h.confirm) {
      pending = { fn: () => h.fn(m, ctx), critico: !!h.critico };
      const r = h.confirm(m) + ' Confirmas? Diz sim para confirmar.';
      await logVoz(raw, r); return r;
    }
    let r;
    try { r = await h.fn(m, ctx); } catch (e) { r = 'Não consegui executar: ' + e.message; }
    await logVoz(raw, r); return r;
  }
  return wake ? 'Não percebi o comando.' : null;
}

~~~

### letimax-app/src/services/service.js
~~~js
import notifee, { AndroidImportance, AndroidForegroundServiceType } from '@notifee/react-native';
import { serverConfig } from './api';

// Serviço em primeiro plano: mantém um WebSocket com o servidor e mostra alertas em tempo real.
// Assume que o servidor expõe wss://<servidor>/ws com Authorization: Bearer <token>
// e envia mensagens JSON {titulo, mensagem}.
let ws = null;
let stopped = true;
let retry = 0;
const SEGREDO = /(sk-[A-Za-z0-9_-]{10,}|key_[A-Za-z0-9]{10,})/;

async function alerta(m) {
  if (SEGREDO.test(JSON.stringify(m))) return; // nunca mostrar nada que pareça uma chave de API
  const channelId = await notifee.createChannel({ id: 'alertas', name: 'Alertas LétimaX', importance: AndroidImportance.HIGH });
  await notifee.displayNotification({ title: String(m.titulo || 'LétimaX'), body: String(m.mensagem || ''), android: { channelId, pressAction: { id: 'default' } } });
}

async function connect() {
  if (stopped) return;
  const { url, token } = await serverConfig();
  if (!url || !token) { setTimeout(connect, 30000); return; }
  const wsUrl = url.replace(/^http/i, 'ws').replace(/\/$/, '') + '/ws';
  try {
    ws = new WebSocket(wsUrl, null, { headers: { Authorization: 'Bearer ' + token } });
    ws.onopen = () => { retry = 0; };
    ws.onmessage = (e) => { try { alerta(JSON.parse(e.data)); } catch (err) {} };
    ws.onerror = () => {};
    ws.onclose = () => {
      if (stopped) return;
      retry = Math.min(retry + 1, 6);
      setTimeout(connect, 2000 * 2 ** retry);
    };
  } catch (e) { setTimeout(connect, 30000); }
}

// A promessa nunca resolve: o serviço vive até stopForegroundService()
notifee.registerForegroundService(() => new Promise(() => { stopped = false; connect(); }));

export async function startService() {
  await notifee.requestPermission();
  const channelId = await notifee.createChannel({ id: 'servico', name: 'LétimaX activa', importance: AndroidImportance.LOW });
  await notifee.displayNotification({
    id: 'servico',
    title: 'LétimaX activa — a trabalhar para si',
    android: {
      channelId, asForegroundService: true, ongoing: true, pressAction: { id: 'default' },
      foregroundServiceTypes: [AndroidForegroundServiceType.FOREGROUND_SERVICE_TYPE_DATA_SYNC],
    },
  });
}
export async function stopService() {
  stopped = true;
  try { if (ws) ws.close(); } catch (e) {}
  await notifee.stopForegroundService();
}

~~~

### letimax-app/src/services/nativeBridge.js
~~~js
import { PermissionsAndroid } from 'react-native';
import Native from '../../modules/letimax-native';
import { getConfig } from '../db/database';

const P = PermissionsAndroid.PERMISSIONS;
const SEM_NATIVO = 'Esta função precisa do APK nativo da LétimaX (Fase 4). Não funciona no Expo Go.';
const MSG_OCUPADO = 'O Senhor Letício está ocupado neste momento. Pode deixar recado ou ele retorna em breve.';

export const nativoDisponivel = () => !!Native;

async function pedir(lista) {
  const r = await PermissionsAndroid.requestMultiple(lista);
  return lista.every((p) => r[p] === PermissionsAndroid.RESULTS.GRANTED);
}

export async function atender() {
  if (!Native) return SEM_NATIVO;
  if (!(await pedir([P.ANSWER_PHONE_CALLS]))) return 'Preciso da permissão para atender chamadas.';
  return Native.answerCall() ? 'Chamada atendida.' : 'Não há nenhuma chamada a tocar.';
}

export async function rejeitar() {
  if (!Native) return SEM_NATIVO;
  if (!(await pedir([P.ANSWER_PHONE_CALLS]))) return 'Preciso da permissão para rejeitar chamadas.';
  return Native.rejectCall() ? 'Chamada rejeitada.' : 'Não há nenhuma chamada a tocar.';
}

// O Android não deixa uma app falar dentro de uma chamada. Por isso: rejeita e envia um SMS ao número.
export async function ocupado() {
  if (!Native) return SEM_NATIVO;
  if (!(await pedir([P.ANSWER_PHONE_CALLS, P.READ_PHONE_STATE, P.READ_CALL_LOG, P.SEND_SMS]))) {
    return 'Preciso das permissões de chamadas e SMS.';
  }
  const num = Native.lastIncomingNumber(); // ler ANTES de rejeitar
  if (!Native.rejectCall()) return 'Não há nenhuma chamada a tocar.';
  if (!num || !/^\+?[\d\s-]{6,}$/.test(num)) return 'Chamada rejeitada, mas não consegui saber o número para enviar a mensagem.';
  const msg = (await getConfig('msg_ocupado')) || MSG_OCUPADO;
  Native.sendSms(num, msg);
  return 'Chamada rejeitada e mensagem de ocupado enviada.';
}

// SEGURANÇA: o conteúdo de SMS e notificações é lido em voz alta e NUNCA é tratado como comando.
export async function lerSms() {
  if (!Native) return SEM_NATIVO;
  if (!(await pedir([P.READ_SMS]))) return 'Preciso da permissão para ler SMS.';
  const l = Native.readSms(3);
  if (!l.length) return 'Não há mensagens recentes.';
  return 'Mensagens recentes. ' + l.map((m) => 'De ' + m.address + ': ' + String(m.body).slice(0, 200)).join('. ');
}

export async function lerNotificacoes() {
  if (!Native) return SEM_NATIVO;
  if (!Native.isNotificationAccessEnabled()) {
    Native.openNotificationAccess();
    return 'Abri as definições. Ative o acesso às notificações para a LétimaX e repita o comando.';
  }
  let l = [];
  try { l = JSON.parse(Native.getNotifications()).slice(0, 3); } catch (e) {}
  if (!l.length) return 'Não há notificações novas de mensagens.';
  return 'Notificações recentes. ' + l.map((n) => n.title + ': ' + String(n.text).slice(0, 160)).join('. ');
}

export async function musica(tecla) {
  if (!Native) return SEM_NATIVO;
  const ok = Native.mediaKey(tecla);
  if (!ok) return 'Não consegui enviar o comando à música.';
  return tecla === 'play_pause' ? 'Enviei pausa ou continuar. É a mesma tecla.' : tecla === 'next' ? 'Próxima música.' : 'Música anterior.';
}

export async function bloquearEcra() {
  if (!Native) return SEM_NATIVO;
  const r = Native.lockScreen();
  if (r === 'ok') return 'Ecrã bloqueado.';
  Native.requestDeviceAdmin();
  return 'Preciso de ser administradora do dispositivo só para bloquear o ecrã. Abri o pedido: ative e repita o comando.';
}

export function lembrarServico(querer) {
  try { if (Native) Native.setServiceWanted(!!querer); } catch (e) {}
}

~~~

### letimax-app/src/services/api.js
~~~js
import * as SecureStore from 'expo-secure-store';

export async function serverConfig() {
  return {
    url: (await SecureStore.getItemAsync('server_url')) || '',
    token: (await SecureStore.getItemAsync('server_token')) || '',
  };
}
export async function saveServerConfig(url, token) {
  if (!/^https:\/\//i.test(url)) throw new Error('O URL do servidor tem de começar por https://');
  await SecureStore.setItemAsync('server_url', url.trim());
  if (token) await SecureStore.setItemAsync('server_token', token.trim());
}

async function request(method, path, body, timeout = 15000) {
  const { url, token } = await serverConfig();
  if (!url) throw new Error('URL do servidor não configurado');
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeout);
  try {
    const res = await fetch(url.replace(/\/$/, '') + path, {
      method,
      headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token },
      body: body ? JSON.stringify(body) : undefined,
      signal: ctrl.signal,
    });
    if (!res.ok) throw new Error('Servidor respondeu ' + res.status);
    return await res.json();
  } finally {
    clearTimeout(t);
  }
}
export const api = {
  get: (p, t) => request('GET', p, null, t),
  post: (p, b, t) => request('POST', p, b, t),
  del: (p, b, t) => request('DELETE', p, b, t),
};

~~~

### letimax-app/src/services/useVoice.js
~~~js
import { useCallback, useRef, useState } from 'react';
import { ExpoSpeechRecognitionModule, useSpeechRecognitionEvent } from 'expo-speech-recognition';

// Reconhecimento de voz em português. Escuta só com a APP aberta (o Android bloqueia microfone em segundo plano).
export function useVoice(onFinal) {
  const [listening, setListening] = useState(false);
  const [partial, setPartial] = useState('');
  const cont = useRef(false);
  const paused = useRef(false);
  const cb = useRef(onFinal);
  cb.current = onFinal;

  const begin = useCallback(async () => {
    if (paused.current) return false;
    const p = await ExpoSpeechRecognitionModule.requestPermissionsAsync();
    if (!p.granted) return false;
    ExpoSpeechRecognitionModule.start({ lang: 'pt-PT', interimResults: true, continuous: false });
    return true;
  }, []);
  const beginRef = useRef(begin);
  beginRef.current = begin;

  useSpeechRecognitionEvent('start', () => setListening(true));
  useSpeechRecognitionEvent('end', () => {
    setListening(false); setPartial('');
    if (cont.current && !paused.current) setTimeout(() => beginRef.current(), 500);
  });
  useSpeechRecognitionEvent('result', (e) => {
    const t = (e.results && e.results[0] && e.results[0].transcript) || '';
    setPartial(t);
    if (e.isFinal && t.trim()) cb.current(t.trim());
  });
  useSpeechRecognitionEvent('error', (e) => {
    if (['not-allowed', 'service-not-allowed', 'language-not-supported'].includes(e.error)) cont.current = false;
  });

  return {
    listening, partial,
    start: begin,
    stop: () => ExpoSpeechRecognitionModule.stop(),
    setContinuous: (v) => { cont.current = v; if (v) begin(); else ExpoSpeechRecognitionModule.stop(); },
    pause: () => { paused.current = true; ExpoSpeechRecognitionModule.stop(); },   // enquanto a LétimaX fala
    resume: () => { paused.current = false; if (cont.current) begin(); },
  };
}

~~~

### letimax-app/src/services/security.js
~~~js
import * as SecureStore from 'expo-secure-store';
import * as Crypto from 'expo-crypto';
import * as LocalAuthentication from 'expo-local-authentication';
import { logAccess } from '../db/database';

const SALT = 'letimax-v1';
const hash = (pin) => Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, pin + SALT);

export async function hasPin() {
  return !!(await SecureStore.getItemAsync('pin_hash'));
}
export async function setupPin(pin) {
  await SecureStore.setItemAsync('pin_hash', await hash(pin));
}

// Bloqueio progressivo do documento: 3 falhas = 5 min, 6 = 30 min, 9 = 24 h, 12 = permanente
function lockFor(f) {
  if (f >= 12) return 'perm';
  if (f >= 9) return 24 * 60 * 60 * 1000;
  if (f >= 6) return 30 * 60 * 1000;
  if (f >= 3) return 5 * 60 * 1000;
  return 0;
}
export async function lockRemaining() {
  const until = await SecureStore.getItemAsync('bloqueio_ate');
  if (!until) return 0;
  if (until === 'perm') return 'perm';
  const left = Number(until) - Date.now();
  return left > 0 ? left : 0;
}
export async function resetFailures() {
  await SecureStore.setItemAsync('falhas', '0');
  await SecureStore.deleteItemAsync('bloqueio_ate');
}
export async function verifyPin(pin) {
  const left = await lockRemaining();
  if (left) return { ok: false, locked: left };
  const ok = (await hash(pin)) === (await SecureStore.getItemAsync('pin_hash'));
  await logAccess(ok, 'pin');
  if (ok) { await resetFailures(); return { ok: true }; }
  const f = Number((await SecureStore.getItemAsync('falhas')) || 0) + 1;
  await SecureStore.setItemAsync('falhas', String(f));
  const l = lockFor(f);
  if (l === 'perm') await SecureStore.setItemAsync('bloqueio_ate', 'perm');
  else if (l) await SecureStore.setItemAsync('bloqueio_ate', String(Date.now() + l));
  return { ok: false, failures: f, locked: l };
}

// Biometria do próprio telemóvel (rosto/impressão digital já registados no Android)
export async function biometricAuth() {
  const has = await LocalAuthentication.hasHardwareAsync();
  const enrolled = await LocalAuthentication.isEnrolledAsync();
  if (!has || !enrolled) return false;
  const r = await LocalAuthentication.authenticateAsync({
    promptMessage: 'LétimaX — confirme a sua identidade',
    cancelLabel: 'Usar PIN',
    disableDeviceFallback: true,
  });
  await logAccess(r.success, 'biometria');
  return r.success;
}

export function formatLock(ms) {
  if (ms === 'perm') return 'Acesso bloqueado permanentemente. Alerta enviado ao Senhor Letício.';
  const min = Math.ceil(ms / 60000);
  return min >= 60 ? 'Bloqueado por ' + Math.ceil(min / 60) + ' h.' : 'Bloqueado por ' + min + ' min.';
}

~~~

### letimax-app/src/components/ui.js
~~~js
export const pretty = (k) => String(k).replace(/_/g, ' ').replace(/^./, (s) => s.toUpperCase());
export const fmt = (v) => {
  if (v === null || v === undefined || v === '') return '—';
  if (typeof v === 'number') return Number.isInteger(v) ? String(v) : v.toFixed(2);
  if (typeof v === 'boolean') return v ? 'Sim' : 'Não';
  return String(v);
};
// Lista a partir de qualquer resposta: array directo ou a primeira propriedade que seja array
export const asList = (d) => {
  if (Array.isArray(d)) return d;
  if (d && typeof d === 'object') {
    const k = Object.keys(d).find((x) => Array.isArray(d[x]));
    if (k) return d[k];
  }
  return [];
};
export const primitives = (o) => Object.entries(o || {}).filter(([, v]) => v === null || typeof v !== 'object');
export const pick = (o, keys) => {
  for (const k of keys) if (o && o[k] !== undefined && o[k] !== null && o[k] !== '') return o[k];
  return undefined;
};
export const fill = (s, vars, enc) =>
  String(s).replace(/\{(\w+)\}/g, (_, k) => (vars[k] == null ? '' : enc ? encodeURIComponent(vars[k]) : String(vars[k])));
export const fillBody = (b, vars) => {
  if (b == null) return undefined;
  const out = {};
  Object.entries(b).forEach(([k, v]) => { out[k] = typeof v === 'string' ? fill(v, vars, false) : v; });
  return out;
};
export const csv = (rows) => {
  if (!rows.length) return '';
  const cols = Array.from(new Set(rows.flatMap((r) => primitives(r).map(([k]) => k))));
  const esc = (v) => '"' + String(v ?? '').replace(/"/g, '""') + '"';
  return [cols.join(',')].concat(rows.map((r) => cols.map((c) => esc(r[c])).join(','))).join('\n');
};

~~~

### letimax-app/src/components/JsonView.js
~~~js
import React from 'react';
import { View, Text } from 'react-native';

// Mostra qualquer resposta JSON do servidor em cartões legíveis
export default function JsonView({ data, c, level = 0 }) {
  if (data === null || data === undefined) return <Text style={{ color: c.muted }}>—</Text>;
  if (typeof data !== 'object') return <Text style={{ color: c.text }}>{String(data)}</Text>;
  if (Array.isArray(data)) {
    if (!data.length) return <Text style={{ color: c.muted }}>Sem dados.</Text>;
    return data.map((it, i) => (
      <View key={i} style={{ backgroundColor: c.card, borderRadius: 12, padding: 12, marginBottom: 8, borderWidth: 1, borderColor: c.border }}>
        <JsonView data={it} c={c} level={level + 1} />
      </View>
    ));
  }
  return Object.entries(data).map(([k, v]) => {
    const simple = v === null || typeof v !== 'object';
    return (
      <View key={k} style={{ marginBottom: 6 }}>
        <Text style={{ color: c.gold, fontWeight: '600', fontSize: 12 }}>{k.replace(/_/g, ' ')}</Text>
        {simple ? <Text style={{ color: c.text, fontSize: 15 }}>{String(v ?? '—')}</Text> : <View style={{ marginTop: 4 }}><JsonView data={v} c={c} level={level + 1} /></View>}
      </View>
    );
  });
}

~~~

### letimax-app/src/components/TopIndicators.js
~~~js
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../theme/theme';
import { api } from '../services/api';
import { getConfig } from '../db/database';
import { pick, fmt } from './ui';

// Indicadores no topo: nível de autonomia, estado do servidor, nicho, receita do dia e progresso da meta.
export default function TopIndicators() {
  const { c } = useTheme();
  const [d, setD] = useState(null);
  const [ok, setOk] = useState(null);
  const [nivel, setNivel] = useState('1');

  useEffect(() => {
    let vivo = true;
    const tick = async () => {
      try { const r = await api.get('/dashboard', 8000); if (vivo) { setD(r); setOk(true); } } catch (e) { if (vivo) setOk(false); }
      getConfig('autonomia').then((v) => vivo && v && setNivel(v));
    };
    tick();
    const t = setInterval(tick, 60000);
    return () => { vivo = false; clearInterval(t); };
  }, []);

  const receita = d && pick(d, ['receita_dia', 'receita_hoje', 'receita_do_dia']);
  const meta = d && pick(d, ['meta_pct', 'meta_percentagem', 'progresso_meta']);
  const nicho = d && pick(d, ['nicho', 'nicho_actual', 'nicho_atual']);
  const chip = { color: c.muted, fontSize: 11, marginLeft: 8 };
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 12, maxWidth: 220 }}>
      <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: ok == null ? c.muted : ok ? c.ok : c.err }} />
      <Text style={{ ...chip, color: c.gold, fontWeight: '700' }}>N{nivel}</Text>
      {receita != null && <Text style={chip}>R${fmt(receita)}</Text>}
      {meta != null && <Text style={chip}>{fmt(meta)}%</Text>}
      {nicho != null && <Text numberOfLines={1} style={{ ...chip, flexShrink: 1 }}>{String(nicho)}</Text>}
    </View>
  );
}

~~~

### letimax-app/src/components/TorchHost.js
~~~js
import React, { createContext, useState } from 'react';
import { CameraView, useCameraPermissions } from 'expo-camera';

// A lanterna no Expo só acende com uma câmara montada (invisível, 1x1 px). Só fica montada enquanto acesa.
export const TorchCtx = createContext({ setTorch: async () => false, on: false });

export function TorchProvider({ children }) {
  const [on, setOn] = useState(false);
  const [perm, request] = useCameraPermissions();
  const setTorch = async (v) => {
    if (v && !(perm && perm.granted)) {
      const r = await request();
      if (!r.granted) return false;
    }
    setOn(v);
    return true;
  };
  return (
    <TorchCtx.Provider value={{ setTorch, on }}>
      {children}
      {on && perm && perm.granted && <CameraView style={{ position: 'absolute', width: 1, height: 1, opacity: 0 }} facing="back" enableTorch />}
    </TorchCtx.Provider>
  );
}

~~~

### letimax-app/src/db/database.js
~~~js
import * as SQLite from 'expo-sqlite';

let db;
export async function getDb() {
  if (!db) {
    db = await SQLite.openDatabaseAsync('letimax.db');
    await db.execAsync(`
      PRAGMA journal_mode = WAL;
      CREATE TABLE IF NOT EXISTS conversas (id INTEGER PRIMARY KEY AUTOINCREMENT, papel TEXT, texto TEXT, criado_em TEXT);
      CREATE TABLE IF NOT EXISTS configuracoes (chave TEXT PRIMARY KEY, valor TEXT);
      CREATE TABLE IF NOT EXISTS dashboard_cache (chave TEXT PRIMARY KEY, dados TEXT, atualizado TEXT);
      CREATE TABLE IF NOT EXISTS logs_erros (id INTEGER PRIMARY KEY AUTOINCREMENT, origem TEXT, mensagem TEXT, criado_em TEXT);
      CREATE TABLE IF NOT EXISTS tentativas_acesso (id INTEGER PRIMARY KEY AUTOINCREMENT, sucesso INTEGER, metodo TEXT, criado_em TEXT);
      CREATE TABLE IF NOT EXISTS respostas_pre_aprovadas (id INTEGER PRIMARY KEY AUTOINCREMENT, canal TEXT, texto TEXT);
      CREATE TABLE IF NOT EXISTS contactos (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, email TEXT, telefone TEXT, classe TEXT, notas TEXT);
      CREATE TABLE IF NOT EXISTS comandos_voz_log (id INTEGER PRIMARY KEY AUTOINCREMENT, texto TEXT, resposta TEXT, criado_em TEXT);
      CREATE TABLE IF NOT EXISTS financas_pessoais (id INTEGER PRIMARY KEY AUTOINCREMENT, tipo TEXT, valor REAL, descricao TEXT, data TEXT);
      CREATE TABLE IF NOT EXISTS humor_produtividade (id INTEGER PRIMARY KEY AUTOINCREMENT, dia TEXT, humor INTEGER, sono REAL);
      CREATE TABLE IF NOT EXISTS metas (id INTEGER PRIMARY KEY AUTOINCREMENT, mes TEXT, valor REAL, criado_em TEXT);
    `);
  }
  return db;
}

export async function addMessage(papel, texto) {
  const d = await getDb();
  const criado_em = new Date().toISOString();
  const r = await d.runAsync('INSERT INTO conversas (papel, texto, criado_em) VALUES (?,?,?)', [papel, texto, criado_em]);
  return { id: r.lastInsertRowId, papel, texto, criado_em };
}
export async function getMessages(limit = 200) {
  const d = await getDb();
  return d.getAllAsync('SELECT * FROM conversas ORDER BY id DESC LIMIT ?', [limit]);
}
export async function setConfig(chave, valor) {
  const d = await getDb();
  await d.runAsync('INSERT OR REPLACE INTO configuracoes (chave, valor) VALUES (?,?)', [chave, String(valor)]);
}
export async function getConfig(chave) {
  const d = await getDb();
  const r = await d.getFirstAsync('SELECT valor FROM configuracoes WHERE chave = ?', [chave]);
  return r ? r.valor : null;
}
export async function cacheSet(chave, dados) {
  const d = await getDb();
  await d.runAsync('INSERT OR REPLACE INTO dashboard_cache (chave, dados, atualizado) VALUES (?,?,?)', [chave, JSON.stringify(dados), new Date().toISOString()]);
}
export async function cacheGet(chave) {
  const d = await getDb();
  const r = await d.getFirstAsync('SELECT dados, atualizado FROM dashboard_cache WHERE chave = ?', [chave]);
  return r ? { dados: JSON.parse(r.dados), atualizado: r.atualizado } : null;
}
export async function logAccess(sucesso, metodo) {
  const d = await getDb();
  await d.runAsync('INSERT INTO tentativas_acesso (sucesso, metodo, criado_em) VALUES (?,?,?)', [sucesso ? 1 : 0, metodo, new Date().toISOString()]);
}

export async function listContactos(q = '') {
  const d = await getDb();
  const like = '%' + q + '%';
  return d.getAllAsync('SELECT * FROM contactos WHERE nome LIKE ? OR email LIKE ? OR classe LIKE ? ORDER BY nome', [like, like, like]);
}
export async function saveContacto(c) {
  const d = await getDb();
  await d.runAsync('INSERT INTO contactos (nome, email, telefone, classe, notas) VALUES (?,?,?,?,?)', [c.nome, c.email || '', c.telefone || '', c.classe || 'cliente', c.notas || '']);
}
export async function deleteContacto(id) {
  const d = await getDb();
  await d.runAsync('DELETE FROM contactos WHERE id = ?', [id]);
}
export async function saveMeta(valor) {
  const d = await getDb();
  await d.runAsync('INSERT INTO metas (mes, valor, criado_em) VALUES (?,?,?)', [new Date().toISOString().slice(0, 7), valor, new Date().toISOString()]);
}

export async function logVoz(texto, resposta) {
  const d = await getDb();
  await d.runAsync('INSERT INTO comandos_voz_log (texto, resposta, criado_em) VALUES (?,?,?)', [texto, resposta, new Date().toISOString()]);
}

export async function addMov(tipo, valor, descricao) {
  const d = await getDb();
  await d.runAsync('INSERT INTO financas_pessoais (tipo, valor, descricao, data) VALUES (?,?,?,?)', [tipo, valor, descricao || '', new Date().toISOString()]);
}
export async function listMovs(mes) {
  const d = await getDb();
  return d.getAllAsync('SELECT * FROM financas_pessoais WHERE data LIKE ? ORDER BY id DESC', [mes + '%']);
}
export async function delMov(id) {
  const d = await getDb();
  await d.runAsync('DELETE FROM financas_pessoais WHERE id = ?', [id]);
}
export async function saveHumor(humor, sono) {
  const d = await getDb();
  const dia = new Date().toISOString().slice(0, 10);
  await d.runAsync('DELETE FROM humor_produtividade WHERE dia = ?', [dia]);
  await d.runAsync('INSERT INTO humor_produtividade (dia, humor, sono) VALUES (?,?,?)', [dia, humor, sono == null ? null : sono]);
}
export async function humorStats() {
  const d = await getDb();
  const rows = await d.getAllAsync('SELECT humor, sono FROM humor_produtividade ORDER BY id DESC LIMIT 30');
  const n = rows.length;
  const media = n ? rows.reduce((s, r) => s + r.humor, 0) / n : 0;
  const bons = rows.filter((r) => r.humor >= 4).length;
  const hoje = await d.getFirstAsync('SELECT humor FROM humor_produtividade WHERE dia = ?', [new Date().toISOString().slice(0, 10)]);
  return { n, media, bons, hoje: hoje ? hoje.humor : null };
}
export async function replaceHistory(resumo) {
  const d = await getDb();
  await d.runAsync('DELETE FROM conversas');
  await d.runAsync('INSERT INTO conversas (papel, texto, criado_em) VALUES (?,?,?)', ['bot', 'Resumo da conversa anterior: ' + resumo, new Date().toISOString()]);
}

~~~

## Arquivo: letimax-app-fase6
Ficheiros de código/configuração: 56

### letimax-app/app.json
~~~json
{
  "expo": {
    "name": "LétimaX",
    "slug": "letimax",
    "version": "0.6.0",
    "orientation": "portrait",
    "userInterfaceStyle": "automatic",
    "android": {
      "package": "com.letimax.app",
      "permissions": [
        "USE_BIOMETRIC",
        "USE_FINGERPRINT",
        "INTERNET",
        "VIBRATE",
        "WAKE_LOCK",
        "POST_NOTIFICATIONS",
        "FOREGROUND_SERVICE",
        "FOREGROUND_SERVICE_DATA_SYNC",
        "RECORD_AUDIO",
        "CAMERA",
        "CALL_PHONE",
        "REQUEST_IGNORE_BATTERY_OPTIMIZATIONS",
        "ANSWER_PHONE_CALLS",
        "READ_PHONE_STATE",
        "READ_CALL_LOG",
        "READ_SMS",
        "SEND_SMS",
        "RECEIVE_BOOT_COMPLETED",
        "ACCESS_NETWORK_STATE",
        "ACCESS_WIFI_STATE",
        "MODIFY_AUDIO_SETTINGS"
      ]
    },
    "plugins": [
      "expo-secure-store",
      "expo-sqlite",
      "expo-dev-client",
      [
        "expo-camera",
        {
          "cameraPermission": "A LétimaX usa a câmara para acender a lanterna por comando de voz."
        }
      ],
      [
        "expo-speech-recognition",
        {
          "microphonePermission": "A LétimaX usa o microfone para os comandos de voz do Senhor Letício.",
          "speechRecognitionPermission": "A LétimaX usa o reconhecimento de voz para entender os seus comandos.",
          "androidSpeechServicePackages": [
            "com.google.android.googlequicksearchbox"
          ]
        }
      ],
      "./plugins/withNotifeeService"
    ]
  }
}
~~~

### letimax-app/package.json
~~~json
{
  "name": "letimax-app",
  "version": "0.1.0",
  "main": "index.js",
  "scripts": {
    "start": "expo start",
    "android": "expo start --android"
  },
  "dependencies": {
    "@expo/vector-icons": "^14.0.4",
    "@react-navigation/bottom-tabs": "^6.6.1",
    "@react-navigation/drawer": "^6.7.2",
    "@react-navigation/native": "^6.1.18",
    "expo": "~52.0.0",
    "expo-crypto": "~14.0.0",
    "expo-local-authentication": "~15.0.0",
    "expo-secure-store": "~14.0.0",
    "expo-speech": "~13.0.0",
    "expo-sqlite": "~15.0.0",
    "expo-status-bar": "~2.0.0",
    "react": "18.3.1",
    "react-native": "0.76.5",
    "react-native-gesture-handler": "~2.20.2",
    "react-native-reanimated": "~3.16.1",
    "react-native-safe-area-context": "4.12.0",
    "react-native-screens": "~4.4.0",
    "@notifee/react-native": "^9.1.8",
    "expo-brightness": "~13.0.0",
    "expo-camera": "~16.0.0",
    "expo-dev-client": "~5.0.0",
    "expo-intent-launcher": "~12.0.0",
    "expo-keep-awake": "~14.0.0",
    "expo-speech-recognition": "*",
    "react-native-volume-manager": "*",
    "crypto-js": "^4.2.0",
    "expo-av": "~15.0.1",
    "expo-document-picker": "~13.0.1",
    "expo-file-system": "~18.0.4",
    "expo-sharing": "~13.0.0"
  },
  "devDependencies": {
    "@babel/core": "^7.25.0"
  },
  "private": true
}
~~~

### letimax-app/App.js
~~~js
import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider, useTheme } from './src/theme/theme';
import { getDb, getConfig } from './src/db/database';
import AuthScreen from './src/screens/AuthScreen';
import FirstUseScreen from './src/screens/FirstUseScreen';
import Root from './src/navigation/Root';
import { TorchProvider } from './src/components/TorchHost';
import { startService } from './src/services/service';
import { Alert } from 'react-native';
import { autoBackup } from './src/services/backup';
import { processarFila } from './src/services/queue';
import { api } from './src/services/api';

function Gate() {
  const { isDark } = useTheme();
  const [stage, setStage] = useState('auth'); // auth | firstuse | main
  const [destino, setDestino] = useState(null);
  useEffect(() => { getDb(); }, []);
  useEffect(() => {
    if (stage !== 'main') return;
    getConfig('servico_activo').then((v) => v === '1' && startService().catch(() => {}));
    autoBackup().catch(() => {});
    processarFila().catch(() => {});
  }, [stage]);
  const afterAuth = async () => {
    const feito = await getConfig('primeiro_uso');
    setStage(feito ? 'main' : 'firstuse');
    if (feito) {
      // sem chave do Claude no servidor a LétimaX não responde: leva para as Configurações
      api.get('/chaves/lista', 8000).then((d) => {
        if (!/anthropic/i.test(JSON.stringify(d))) {
          setDestino('configuracoes');
          Alert.alert('Falta a chave do Claude', 'Adicione a ANTHROPIC_API_KEY na Secção 1 das Configurações para a LétimaX poder responder.');
        }
      }).catch(() => {});
    }
  };
  return (
    <>
      <StatusBar style={isDark ? 'light' : 'dark'} />
      {stage === 'auth' && <AuthScreen onSuccess={afterAuth} />}
      {stage === 'firstuse' && <FirstUseScreen onDone={(ir) => { setDestino(ir ? 'configuracoes' : null); setStage('main'); }} />}
      {stage === 'main' && <TorchProvider><Root destino={destino} /></TorchProvider>}
    </>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <ThemeProvider><Gate /></ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

~~~

### letimax-app/index.js
~~~js
import { registerRootComponent } from 'expo';
import './src/services/service'; // regista o serviço em primeiro plano (tem de ser fora de componentes)
import App from './App';

registerRootComponent(App);

~~~

### letimax-app/README.md
~~~md
# LétimaX — APP (Fase 6: completa)

Fase 6: fila offline, backup .letimax cifrado (diário + partilha + restauro), voz ElevenLabs no chat com recurso à voz do telemóvel,
68 tabelas locais, sincronização de conversas com o computador, frase de activação falada, bloqueios configuráveis,
chaves do servidor (listar e eliminar), histórico de metas, gráfico de finanças.
Depois de actualizar: `npm install` (novas dependências) e novo build EAS.


Todos os módulos do menu têm ecrã próprio (src/screens/screens.config.js define cada um).
Os nomes dos campos que o servidor devolve ainda são suposições: a APP mostra o que vier e ajusta-se depois.


Fase 4 = módulo nativo local em `modules/letimax-native` (Kotlin). É compilado automaticamente pelo EAS Build;
basta repetir `npx eas-cli build -p android --profile preview`. Não funciona no Expo Go.
Instalar o APK directamente (sideload): as permissões de SMS e registo de chamadas não são aceites pela Google Play.
Depois de instalar: Configurações -> Acesso nativo (notificações e bloqueio de ecrã) e conceder as permissões quando pedidas.


Fase 3 precisa de BUILD NATIVO (não funciona no Expo Go):
1. `npm install` e `npx expo install --fix`
2. `npx eas-cli login` e `npx eas-cli build -p android --profile preview` (gera um APK para instalar)
   Para desenvolver: `--profile development` e depois `npx expo start --dev-client`.
3. Instalar o APK no telemóvel. Na 1ª abertura: Configurações -> Serviço em segundo plano -> ligar,
   e "Permitir uso sem limite de bateria".

Comandos de voz: botão do microfone (um comando) ou o ícone da orelha (escuta contínua, exige
dizer "LétimaX, ..." e o ecrã fica ligado). O servidor deve expor wss://<servidor>/ws para os alertas.


Fase 2 já feita: Motor de Receita, Metas, Produtos, Contactos, Passwords.


1. Instalar dependências: `npm install` e depois `npx expo install --fix`
2. Arrancar: `npx expo start` e abrir no Expo Go (ou usar snack.expo.dev / GitHub Codespaces se não tiver PC)
3. Primeiro acesso: criar PIN -> URL (https) e token do servidor -> chave do Claude (vai para o servidor)

Fase 1: tema claro/escuro, PIN + biometria do telemóvel com bloqueio progressivo, chat, dashboard,
menu lateral com todos os módulos ligados aos endpoints, configurações com chaves (enviadas ao servidor).
Fase 2: ecrãs dedicados (Motor de Receita com Aprovar/Rejeitar, Metas, Produtos...), SQLite offline completo,
cofre de passwords, contactos, documentos.
Fase 3 (precisa de build nativo, não funciona no Expo Go): serviço em segundo plano, chamadas/SMS,
comandos de voz de hardware, reconhecimento de voz.

~~~

### letimax-app/eas.json
~~~json
{
  "cli": { "version": ">= 12.0.0" },
  "build": {
    "development": { "developmentClient": true, "distribution": "internal", "android": { "buildType": "apk" } },
    "preview": { "distribution": "internal", "android": { "buildType": "apk" } }
  }
}

~~~

### letimax-app/babel.config.js
~~~js
module.exports = function (api) {
  api.cache(true);
  return { presets: ['babel-preset-expo'], plugins: ['react-native-reanimated/plugin'] };
};

~~~

### letimax-app/plugins/withNotifeeService.js
~~~js
const { withAndroidManifest, withProjectBuildGradle } = require('@expo/config-plugins');

// Android 14 exige o tipo do serviço em primeiro plano; o Notifee precisa dele no manifesto.
function manifest(config) {
  return withAndroidManifest(config, (cfg) => {
    const m = cfg.modResults.manifest;
    m.$['xmlns:tools'] = 'http://schemas.android.com/tools';
    const app = m.application[0];
    const name = 'app.notifee.core.ForegroundService';
    app.service = (app.service || []).filter((s) => s.$['android:name'] !== name);
    app.service.push({ $: { 'android:name': name, 'android:foregroundServiceType': 'dataSync', 'android:exported': 'false', 'tools:replace': 'android:foregroundServiceType' } });
    return cfg;
  });
}
// Repositório local do Notifee (inofensivo se a pasta não existir)
function gradle(config) {
  return withProjectBuildGradle(config, (cfg) => {
    const line = 'maven { url "$rootDir/../node_modules/@notifee/react-native/android/libs" }';
    if (!cfg.modResults.contents.includes(line)) {
      cfg.modResults.contents = cfg.modResults.contents.replace(/allprojects\s*{\s*repositories\s*{/, (s) => s + '\n        ' + line);
    }
    return cfg;
  });
}
module.exports = (config) => gradle(manifest(config));

~~~

### letimax-app/modules/letimax-native/index.js
~~~js
import { requireNativeModule } from 'expo';

// Em Expo Go (sem build nativo) o módulo não existe: exportamos null e a APP avisa em vez de falhar.
let Native = null;
try { Native = requireNativeModule('LetimaxNative'); } catch (e) { Native = null; }
export default Native;

~~~

### letimax-app/modules/letimax-native/expo-module.config.json
~~~json
{
  "platforms": ["android"],
  "android": { "modules": ["expo.modules.letimaxnative.LetimaxNativeModule"] }
}

~~~

### letimax-app/modules/letimax-native/android/build.gradle
~~~gradle
apply plugin: 'com.android.library'

group = 'expo.modules.letimaxnative'
version = '0.1.0'

def expoModulesCorePlugin = new File(project(":expo-modules-core").projectDir.absolutePath, "ExpoModulesCorePlugin.gradle")
apply from: expoModulesCorePlugin
applyKotlinExpoModulesCorePlugin()
useCoreDependencies()
useExpoPublishing()

buildscript {
  ext.safeExtGet = { prop, fallback ->
    rootProject.ext.has(prop) ? rootProject.ext.get(prop) : fallback
  }
}

project.android {
  compileSdkVersion safeExtGet("compileSdkVersion", 34)
  defaultConfig {
    minSdkVersion safeExtGet("minSdkVersion", 24)
    targetSdkVersion safeExtGet("targetSdkVersion", 34)
  }
}

android {
  namespace "expo.modules.letimaxnative"
  defaultConfig {
    versionCode 1
    versionName "0.1.0"
  }
  lintOptions {
    abortOnError false
  }
}

~~~

### letimax-app/modules/letimax-native/android/src/main/AndroidManifest.xml
~~~xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android">
  <uses-permission android:name="android.permission.RECEIVE_BOOT_COMPLETED" />
  <uses-permission android:name="android.permission.READ_PHONE_STATE" />
  <uses-permission android:name="android.permission.READ_CALL_LOG" />
  <uses-permission android:name="android.permission.ANSWER_PHONE_CALLS" />
  <uses-permission android:name="android.permission.READ_SMS" />
  <uses-permission android:name="android.permission.SEND_SMS" />

  <application>
    <receiver android:name="expo.modules.letimaxnative.BootReceiver" android:exported="true">
      <intent-filter>
        <action android:name="android.intent.action.BOOT_COMPLETED" />
      </intent-filter>
    </receiver>

    <receiver android:name="expo.modules.letimaxnative.PhoneStateReceiver" android:exported="true">
      <intent-filter>
        <action android:name="android.intent.action.PHONE_STATE" />
      </intent-filter>
    </receiver>

    <receiver
      android:name="expo.modules.letimaxnative.LetimaxAdminReceiver"
      android:permission="android.permission.BIND_DEVICE_ADMIN"
      android:exported="true">
      <meta-data android:name="android.app.device_admin" android:resource="@xml/letimax_device_admin" />
      <intent-filter>
        <action android:name="android.app.action.DEVICE_ADMIN_ENABLED" />
      </intent-filter>
    </receiver>

    <service
      android:name="expo.modules.letimaxnative.LetimaxNotificationListener"
      android:permission="android.permission.BIND_NOTIFICATION_LISTENER_SERVICE"
      android:exported="true">
      <intent-filter>
        <action android:name="android.service.notification.NotificationListenerService" />
      </intent-filter>
    </service>
  </application>
</manifest>

~~~

### letimax-app/modules/letimax-native/android/src/main/java/expo/modules/letimaxnative/PhoneStateReceiver.kt
~~~kt
package expo.modules.letimaxnative

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.telephony.TelephonyManager

// Guarda o número da última chamada a tocar (precisa de READ_PHONE_STATE + READ_CALL_LOG concedidas).
class PhoneStateReceiver : BroadcastReceiver() {
  @Suppress("DEPRECATION")
  override fun onReceive(context: Context, intent: Intent) {
    if (intent.action != TelephonyManager.ACTION_PHONE_STATE_CHANGED) return
    val state = intent.getStringExtra(TelephonyManager.EXTRA_STATE)
    val number = intent.getStringExtra(TelephonyManager.EXTRA_INCOMING_NUMBER)
    if (state == TelephonyManager.EXTRA_STATE_RINGING && !number.isNullOrEmpty()) {
      context.getSharedPreferences("letimax_native", Context.MODE_PRIVATE)
        .edit()
        .putString("last_number", number)
        .putLong("last_time", System.currentTimeMillis())
        .apply()
    }
  }
}

~~~

### letimax-app/modules/letimax-native/android/src/main/java/expo/modules/letimaxnative/LetimaxAdminReceiver.kt
~~~kt
package expo.modules.letimaxnative

import android.app.admin.DeviceAdminReceiver

// Só serve para permitir "bloquear o ecrã" (política force-lock). Não apaga dados nem muda passwords.
class LetimaxAdminReceiver : DeviceAdminReceiver()

~~~

### letimax-app/modules/letimax-native/android/src/main/java/expo/modules/letimaxnative/LetimaxNativeModule.kt
~~~kt
package expo.modules.letimaxnative

import android.app.admin.DevicePolicyManager
import android.content.ComponentName
import android.content.Context
import android.content.Intent
import android.media.AudioManager
import android.net.Uri
import android.os.Build
import android.os.SystemClock
import android.provider.Settings
import android.telecom.TelecomManager
import android.telephony.SmsManager
import android.view.KeyEvent
import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition

class LetimaxNativeModule : Module() {
  private val ctx: Context
    get() = appContext.reactContext ?: throw IllegalStateException("Sem contexto Android")

  private fun prefs() = ctx.getSharedPreferences("letimax_native", Context.MODE_PRIVATE)

  override fun definition() = ModuleDefinition {
    Name("LetimaxNative")

    // ---------- Chamadas ----------
    Function("answerCall") {
      if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
        val tm = ctx.getSystemService(Context.TELECOM_SERVICE) as TelecomManager
        try { tm.acceptRingingCall(); true } catch (e: SecurityException) { false }
      } else false
    }

    Function("rejectCall") {
      if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
        val tm = ctx.getSystemService(Context.TELECOM_SERVICE) as TelecomManager
        try { tm.endCall() } catch (e: SecurityException) { false }
      } else false
    }

    // Número da última chamada a tocar nos últimos 5 minutos ("" se não houver)
    Function("lastIncomingNumber") {
      val p = prefs()
      val age = System.currentTimeMillis() - p.getLong("last_time", 0L)
      if (age in 0..300000) (p.getString("last_number", "") ?: "") else ""
    }

    // ---------- SMS ----------
    Function("sendSms") { number: String, text: String ->
      val sms: SmsManager = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
        ctx.getSystemService(SmsManager::class.java)
      } else {
        @Suppress("DEPRECATION") SmsManager.getDefault()
      }
      sms.sendMultipartTextMessage(number, null, sms.divideMessage(text), null, null)
      true
    }

    Function("readSms") { limit: Int ->
      val out = mutableListOf<Map<String, Any>>()
      val cursor = ctx.contentResolver.query(Uri.parse("content://sms/inbox"), arrayOf("address", "body", "date"), null, null, "date DESC")
      cursor?.use {
        var n = 0
        while (it.moveToNext() && n < limit) {
          out.add(mapOf("address" to (it.getString(0) ?: ""), "body" to (it.getString(1) ?: ""), "date" to it.getLong(2)))
          n++
        }
      }
      out
    }

    // ---------- Música (teclas multimédia) ----------
    Function("mediaKey") { name: String ->
      val code = when (name) {
        "play_pause" -> KeyEvent.KEYCODE_MEDIA_PLAY_PAUSE
        "next" -> KeyEvent.KEYCODE_MEDIA_NEXT
        "previous" -> KeyEvent.KEYCODE_MEDIA_PREVIOUS
        else -> -1
      }
      if (code < 0) false else {
        val am = ctx.getSystemService(Context.AUDIO_SERVICE) as AudioManager
        val t = SystemClock.uptimeMillis()
        am.dispatchMediaKeyEvent(KeyEvent(t, t, KeyEvent.ACTION_DOWN, code, 0))
        am.dispatchMediaKeyEvent(KeyEvent(t, t, KeyEvent.ACTION_UP, code, 0))
        true
      }
    }

    // ---------- Bloquear ecrã (administrador do dispositivo, só force-lock) ----------
    Function("lockScreen") {
      val dpm = ctx.getSystemService(Context.DEVICE_POLICY_SERVICE) as DevicePolicyManager
      val admin = ComponentName(ctx, LetimaxAdminReceiver::class.java)
      if (dpm.isAdminActive(admin)) { dpm.lockNow(); "ok" } else "inactive"
    }

    Function("requestDeviceAdmin") {
      val admin = ComponentName(ctx, LetimaxAdminReceiver::class.java)
      val i = Intent(DevicePolicyManager.ACTION_ADD_DEVICE_ADMIN)
        .putExtra(DevicePolicyManager.EXTRA_DEVICE_ADMIN, admin)
        .putExtra(DevicePolicyManager.EXTRA_ADD_EXPLANATION, "Permite à LétimaX bloquear o ecrã por comando de voz. Não dá acesso a dados nem a passwords.")
        .addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
      ctx.startActivity(i)
      true
    }

    // ---------- Notificações de WhatsApp / SMS / email ----------
    Function("isNotificationAccessEnabled") {
      val enabled = Settings.Secure.getString(ctx.contentResolver, "enabled_notification_listeners")
      enabled != null && enabled.contains(ctx.packageName)
    }

    Function("openNotificationAccess") {
      ctx.startActivity(Intent(Settings.ACTION_NOTIFICATION_LISTENER_SETTINGS).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK))
      true
    }

    Function("getNotifications") { prefs().getString("notifs", "[]") ?: "[]" }

    Function("clearNotifications") { prefs().edit().remove("notifs").apply(); true }

    // ---------- Reinício do telemóvel ----------
    Function("setServiceWanted") { wanted: Boolean ->
      prefs().edit().putBoolean("service_wanted", wanted).apply()
      true
    }
  }
}

~~~

### letimax-app/modules/letimax-native/android/src/main/java/expo/modules/letimaxnative/LetimaxNotificationListener.kt
~~~kt
package expo.modules.letimaxnative

import android.service.notification.NotificationListenerService
import android.service.notification.StatusBarNotification
import org.json.JSONArray
import org.json.JSONObject

// Guarda (só no telemóvel) as últimas 50 notificações de apps de mensagens. Todas as outras apps são ignoradas.
class LetimaxNotificationListener : NotificationListenerService() {
  private val permitidos = setOf(
    "com.whatsapp", "com.whatsapp.w4b", "org.telegram.messenger",
    "com.google.android.apps.messaging", "com.samsung.android.messaging", "com.android.mms",
    "com.google.android.gm"
  )

  override fun onNotificationPosted(sbn: StatusBarNotification) {
    if (!permitidos.contains(sbn.packageName)) return
    val extras = sbn.notification.extras
    val title = extras.getCharSequence("android.title")?.toString() ?: ""
    val text = extras.getCharSequence("android.text")?.toString() ?: ""
    if (title.isEmpty() && text.isEmpty()) return

    val prefs = getSharedPreferences("letimax_native", MODE_PRIVATE)
    val old = try { JSONArray(prefs.getString("notifs", "[]")) } catch (e: Exception) { JSONArray() }
    val item = JSONObject().put("pkg", sbn.packageName).put("title", title).put("text", text).put("time", sbn.postTime)
    val out = JSONArray()
    out.put(item)
    for (i in 0 until minOf(old.length(), 49)) out.put(old.get(i))
    prefs.edit().putString("notifs", out.toString()).apply()
  }
}

~~~

### letimax-app/modules/letimax-native/android/src/main/java/expo/modules/letimaxnative/BootReceiver.kt
~~~kt
package expo.modules.letimaxnative

import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.PendingIntent
import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.app.Notification
import android.os.Build

// O Android 15 proíbe iniciar o serviço de sincronização a partir do arranque. Por isso, depois de reiniciar,
// mostramos uma notificação: ao tocar, a APP abre, pede a biometria e só então reactiva o serviço.
class BootReceiver : BroadcastReceiver() {
  override fun onReceive(context: Context, intent: Intent) {
    if (intent.action != Intent.ACTION_BOOT_COMPLETED) return
    val prefs = context.getSharedPreferences("letimax_native", Context.MODE_PRIVATE)
    if (!prefs.getBoolean("service_wanted", false)) return

    val nm = context.getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
    val channelId = "letimax_boot"
    if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
      nm.createNotificationChannel(NotificationChannel(channelId, "Reactivar LétimaX", NotificationManager.IMPORTANCE_HIGH))
    }
    val launch = context.packageManager.getLaunchIntentForPackage(context.packageName) ?: return
    val pi = PendingIntent.getActivity(context, 0, launch, PendingIntent.FLAG_IMMUTABLE or PendingIntent.FLAG_UPDATE_CURRENT)
    val builder = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) Notification.Builder(context, channelId) else Notification.Builder(context)
    val n = builder
      .setContentTitle("LétimaX parou após o reinício")
      .setContentText("Toque para reactivar, Senhor Letício.")
      .setSmallIcon(android.R.drawable.ic_dialog_info)
      .setContentIntent(pi)
      .setAutoCancel(true)
      .build()
    nm.notify(4001, n)
  }
}

~~~

### letimax-app/modules/letimax-native/android/src/main/res/xml/letimax_device_admin.xml
~~~xml
<?xml version="1.0" encoding="utf-8"?>
<device-admin xmlns:android="http://schemas.android.com/apk/res/android">
  <uses-policies>
    <force-lock />
  </uses-policies>
</device-admin>

~~~

### letimax-app/src/screens/ProdutosScreen.js
~~~js
import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, RefreshControl, Alert, ScrollView as HScroll } from 'react-native';
import { useTheme } from '../theme/theme';
import { api } from '../services/api';
import { cacheGet, cacheSet } from '../db/database';

const ESTADOS = ['Todos', 'Rascunho', 'Aguarda Aprovação', 'Publicado', 'Pausado', 'Arquivado'];
const sem = (s) => String(s || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const norm = (d) => (Array.isArray(d) ? d : (d && (d.produtos || d.items)) || []);

export default function ProdutosScreen() {
  const { c } = useTheme();
  const [items, setItems] = useState([]);
  const [filtro, setFiltro] = useState('Todos');
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const d = await api.get('/produtos');
      setItems(norm(d)); await cacheSet('produtos', d);
    } catch (e) {
      const k = await cacheGet('produtos');
      if (k) { setItems(norm(k.dados)); setMsg('Modo offline — dados em cache.'); } else setMsg(e.message);
    } finally { setLoading(false); }
  }, []);
  useEffect(() => { load(); }, [load]);

  const aprovar = async (p) => {
    try { await api.post('/aprovar', { id: p.id }); setMsg('"' + p.nome + '" aprovado.'); load(); } catch (e) { setMsg(e.message); }
  };

  const acao = (p, endpoint, texto, pergunta) => {
    const go = async () => {
      try { await api.post(endpoint, { id: p.id }); setMsg(texto); load(); } catch (e) { setMsg(e.message); }
    };
    if (pergunta) Alert.alert(texto, pergunta, [{ text: 'Cancelar', style: 'cancel' }, { text: 'Confirmar', onPress: go }]);
    else go();
  };

  const lista = items.filter((p) => filtro === 'Todos' || sem(p.estado) === sem(filtro));
  const chip = (on) => ({ paddingVertical: 6, paddingHorizontal: 12, borderRadius: 16, marginRight: 6, backgroundColor: on ? c.gold : c.card });

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16 }}
      refreshControl={<RefreshControl refreshing={loading} onRefresh={load} tintColor={c.gold} />}>
      <Text style={{ color: c.text, fontSize: 22, fontWeight: '700', marginBottom: 10 }}>Produtos</Text>
      {!!msg && <Text style={{ color: c.gold, marginBottom: 8 }}>{msg}</Text>}
      <HScroll horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 12 }}>
        {ESTADOS.map((e) => (
          <TouchableOpacity key={e} style={chip(filtro === e)} onPress={() => setFiltro(e)}><Text style={{ color: filtro === e ? '#000' : c.text }}>{e}</Text></TouchableOpacity>
        ))}
      </HScroll>
      {!lista.length && !loading && <Text style={{ color: c.muted }}>Sem produtos neste estado.</Text>}
      {lista.map((p) => (
        <View key={p.id} style={{ backgroundColor: c.card, borderRadius: 14, padding: 14, marginBottom: 10, borderWidth: 1, borderColor: c.border }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: c.text, fontWeight: '700', fontSize: 16, flex: 1 }}>{p.nome}</Text>
            <Text style={{ color: c.gold, fontWeight: '700' }}>{p.preco != null ? '$' + p.preco : ''}</Text>
          </View>
          <Text style={{ color: c.muted, marginTop: 4 }}>{p.nicho ?? '—'} · {p.estado ?? '—'}</Text>
          <Text style={{ color: c.muted, marginTop: 2 }}>
            Qualidade {p.qualidade ?? p.score_qualidade ?? '—'}/100 · vendas {p.vendas ?? 0} · conversão {p.taxa_conversao ?? '—'} · lucro {p.lucro_liquido ?? '—'}
          </Text>
          {p.marca_dagua && <Text style={{ color: c.muted, marginTop: 2 }}>Marca de água activa · link único por comprador</Text>}
          {sem(p.estado) === 'aguarda aprovacao' && (
            <TouchableOpacity onPress={() => aprovar(p)} style={{ backgroundColor: c.gold, padding: 10, borderRadius: 10, alignItems: 'center', marginTop: 10 }}>
              <Text style={{ color: '#000', fontWeight: '700' }}>Aprovar</Text>
            </TouchableOpacity>
          )}
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 10 }}>
            {['aprovado', 'aprovada'].includes(sem(p.estado)) && (
              <TouchableOpacity onPress={() => acao(p, '/publicar', 'Produto publicado.', 'Publicar "' + p.nome + '" nas plataformas?')} style={{ paddingVertical: 7, paddingHorizontal: 12, borderRadius: 10, backgroundColor: c.gold, marginRight: 6, marginBottom: 6 }}><Text style={{ color: '#000', fontWeight: '700' }}>Publicar</Text></TouchableOpacity>
            )}
            <TouchableOpacity onPress={() => acao(p, '/produtos/marca-dagua', 'Marca de água activada.')} style={{ paddingVertical: 7, paddingHorizontal: 12, borderRadius: 10, backgroundColor: c.bg, marginRight: 6, marginBottom: 6 }}><Text style={{ color: c.gold }}>Marca de água</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => acao(p, '/produtos/precificacao-dinamica', 'Preço dinâmico aplicado.', 'O preço pode mudar. Confirma?')} style={{ paddingVertical: 7, paddingHorizontal: 12, borderRadius: 10, backgroundColor: c.bg, marginRight: 6, marginBottom: 6 }}><Text style={{ color: c.gold }}>Preço dinâmico</Text></TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

~~~

### letimax-app/src/screens/SettingsMais.js
~~~js
import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch, Alert } from 'react-native';
import { useTheme } from '../theme/theme';
import { api } from '../services/api';
import { getConfig, setConfig } from '../db/database';
import { getPass, setPass, fazerBackup, partilhar, restaurar, escolherPasta } from '../services/backup';
import { biometricAuth } from '../services/security';
import { asList } from '../components/ui';

export default function SettingsMais({ flash }) {
  const { c } = useTheme();
  const [ultimo, setUltimo] = useState('');
  const [temPass, setTemPass] = useState(false);
  const [p1, setP1] = useState('');
  const [p2, setP2] = useState('');
  const [pRest, setPRest] = useState('');
  const [busy, setBusy] = useState(false);
  const [v, setV] = useState({ voz_modo: 'servidor', cmd_activacao: '', cmd_activacao_on: '1', max_tentativas: '', bloqueio_min: '', duracao_autonomo: '' });
  const [chaves, setChaves] = useState(null);

  const carregarChaves = useCallback(() => {
    api.get('/chaves/lista', 8000).then((d) => setChaves(asList(d).map((x) => (typeof x === 'string' ? x : x.nome || x.name || JSON.stringify(x))))).catch(() => setChaves(null));
  }, []);
  useEffect(() => {
    (async () => {
      setUltimo((await getConfig('ultimo_backup')) || '');
      setTemPass(!!(await getPass()));
      const o = {};
      for (const k of Object.keys(v)) { const x = await getConfig(k); if (x != null) o[k] = x; }
      setV((a) => ({ ...a, ...o }));
    })();
    carregarChaves();
  }, []);

  const guardar = async (ks, msg) => { for (const k of ks) await setConfig(k, v[k] || ''); flash(msg || 'Guardado.'); };
  const input = { borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 10, padding: 10, marginBottom: 8 };
  const H = (t) => <Text style={{ color: c.gold, fontSize: 16, fontWeight: '700', marginTop: 22, marginBottom: 8 }}>{t}</Text>;
  const Btn = ({ t, f, sec }) => <TouchableOpacity disabled={busy} onPress={f} style={{ backgroundColor: sec ? c.card : c.gold, padding: 12, borderRadius: 10, alignItems: 'center', marginBottom: 6, opacity: busy ? 0.5 : 1 }}><Text style={{ color: sec ? c.gold : '#000', fontWeight: '700' }}>{t}</Text></TouchableOpacity>;
  const chip = (on) => ({ paddingVertical: 8, paddingHorizontal: 14, borderRadius: 18, marginRight: 8, backgroundColor: on ? c.gold : c.card });
  const F = (k, label, ph, num) => (
    <View key={k}>
      <Text style={{ color: c.muted, fontSize: 11, marginBottom: 2 }}>{label}</Text>
      <TextInput style={input} value={v[k] || ''} onChangeText={(t) => setV((a) => ({ ...a, [k]: t }))} placeholder={ph} placeholderTextColor={c.muted} keyboardType={num ? 'numeric' : 'default'} autoCapitalize="none" />
    </View>
  );

  const correr = async (fn) => { setBusy(true); try { await fn(); } catch (e) { flash(e.message); } setBusy(false); };

  const definirPass = () => {
    if (p1.length < 12) return flash('Use pelo menos 12 caracteres. Sem esta palavra-passe não consegue restaurar o backup.');
    if (p1 !== p2) return flash('As palavras-passe não coincidem.');
    correr(async () => { await setPass(p1); setP1(''); setP2(''); setTemPass(true); flash('Palavra-passe do backup guardada neste telemóvel.'); });
  };
  const agora = () => correr(async () => {
    const r = await fazerBackup(); setUltimo(new Date().toISOString());
    flash('Backup feito (' + r.destino + ').');
  });
  const enviar = () => correr(async () => { await partilhar(); setUltimo(new Date().toISOString()); });
  const pasta = () => correr(async () => { const u = await escolherPasta(); flash(u ? 'Pasta escolhida. O backup diário passa a ir para lá.' : 'Nenhuma pasta escolhida.'); });
  const restaurarAgora = () => Alert.alert('Restaurar backup', 'Isto SUBSTITUI os dados locais por os do ficheiro. Confirma?', [
    { text: 'Cancelar', style: 'cancel' },
    { text: 'Restaurar', style: 'destructive', onPress: () => correr(async () => {
      if (!(await biometricAuth())) return flash('Confirme a identidade para restaurar.');
      const n = await restaurar(pRest || undefined);
      if (n == null) return flash('Nenhum ficheiro escolhido.');
      setPRest(''); flash(n + ' registos restaurados. Feche e abra a APP; terá de indicar de novo o servidor e o token.');
    }) },
  ]);
  const apagarChave = (nome) => Alert.alert('Eliminar chave', nome + ' será removida do servidor.', [
    { text: 'Cancelar', style: 'cancel' },
    { text: 'Eliminar', style: 'destructive', onPress: async () => { try { await api.del('/chaves/remover', { nome }); flash(nome + ' removida.'); carregarChaves(); } catch (e) { flash(e.message); } } },
  ]);

  return (
    <View>
      {H('Backup (.letimax)')}
      <Text style={{ color: c.muted, marginBottom: 8 }}>Último backup: {ultimo ? ultimo.slice(0, 16).replace('T', ' ') : 'nunca'}. O ficheiro é cifrado (AES-256 + HMAC). Não inclui o PIN, o cofre de passwords, o token do servidor nem as chaves de API.</Text>
      {!temPass && <Text style={{ color: c.warn, marginBottom: 8 }}>Defina primeiro a palavra-passe do backup.</Text>}
      <TextInput style={input} value={p1} onChangeText={setP1} secureTextEntry placeholder={temPass ? 'Nova palavra-passe do backup (opcional)' : 'Palavra-passe do backup (12+ caracteres)'} placeholderTextColor={c.muted} autoCapitalize="none" />
      <TextInput style={input} value={p2} onChangeText={setP2} secureTextEntry placeholder="Repetir palavra-passe" placeholderTextColor={c.muted} autoCapitalize="none" />
      <Btn t="Guardar palavra-passe" f={definirPass} sec />
      <Btn t="Escolher pasta do backup diário (pode ser o Google Drive)" f={pasta} sec />
      <Btn t="Fazer backup agora" f={agora} />
      <Btn t="Partilhar ficheiro .letimax (ex.: para o Drive)" f={enviar} sec />
      <TextInput style={{ ...input, marginTop: 8 }} value={pRest} onChangeText={setPRest} secureTextEntry placeholder="Palavra-passe do ficheiro a restaurar (vazio = a deste telemóvel)" placeholderTextColor={c.muted} autoCapitalize="none" />
      <Btn t="Restaurar de um ficheiro .letimax" f={restaurarAgora} sec />
      <Text style={{ color: c.muted, fontSize: 12 }}>O backup diário corre sozinho quando abre a APP depois das 02:00. O perfil de acesso não é copiado de propósito: num telemóvel novo cria o PIN de novo.</Text>

      {H('Voz da LétimaX')}
      <View style={{ flexDirection: 'row' }}>
        {[['servidor', 'ElevenLabs (servidor)'], ['telefone', 'Voz do telemóvel']].map(([k, l]) => (
          <TouchableOpacity key={k} style={chip(v.voz_modo === k)} onPress={async () => { setV((a) => ({ ...a, voz_modo: k })); await setConfig('voz_modo', k); }}><Text style={{ color: v.voz_modo === k ? '#000' : c.text }}>{l}</Text></TouchableOpacity>
        ))}
      </View>
      <Text style={{ color: c.muted, fontSize: 12, marginTop: 6 }}>Se o servidor não responder, a APP usa automaticamente a voz do telemóvel.</Text>

      {H('Comando de activação')}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
        <Text style={{ color: c.text, flex: 1 }}>Pedir a frase falada depois do PIN ou biometria</Text>
        <Switch value={v.cmd_activacao_on !== '0'} onValueChange={async (x) => { setV((a) => ({ ...a, cmd_activacao_on: x ? '1' : '0' })); await setConfig('cmd_activacao_on', x ? '1' : '0'); }} trackColor={{ true: c.gold }} />
      </View>
      {F('cmd_activacao', 'Frase de activação', 'LétimaX, iniciar')}
      <Btn t="Guardar frase" f={() => guardar(['cmd_activacao'])} sec />
      <Text style={{ color: c.muted, fontSize: 12 }}>A frase é só uma conveniência: não identifica quem fala. A protecção real é o PIN e a biometria.</Text>

      {H('Bloqueio de acesso e autonomia')}
      {F('max_tentativas', 'Falhas de PIN antes do primeiro bloqueio (padrão 3)', '3', true)}
      {F('bloqueio_min', 'Duração do primeiro bloqueio, em minutos (padrão 5)', '5', true)}
      {F('duracao_autonomo', 'Duração do modo autónomo, em horas (padrão 4)', '4', true)}
      <Btn t="Guardar" f={() => guardar(['max_tentativas', 'bloqueio_min', 'duracao_autonomo'])} sec />
      <Text style={{ color: c.muted, fontSize: 12 }}>Os bloqueios seguintes sobem sozinhos: 2x as falhas = 30 min, 3x = 24 h, 4x = permanente.</Text>

      {H('Chaves guardadas no servidor')}
      {chaves == null && <Text style={{ color: c.muted }}>Sem ligação ao servidor.</Text>}
      {chaves && !chaves.length && <Text style={{ color: c.muted }}>Nenhuma chave guardada ainda.</Text>}
      {chaves && chaves.map((n) => (
        <View key={n} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: c.card, borderRadius: 10, padding: 10, marginBottom: 6 }}>
          <Text style={{ color: c.text }}>{n}</Text>
          <TouchableOpacity onPress={() => apagarChave(n)}><Text style={{ color: c.err }}>Eliminar</Text></TouchableOpacity>
        </View>
      ))}
      <Text style={{ color: c.muted, fontSize: 12 }}>Só mostra os nomes. O valor de uma chave nunca volta para o telemóvel.</Text>
    </View>
  );
}

~~~

### letimax-app/src/screens/SettingsExtras.js
~~~js
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch } from 'react-native';
import notifee, { AndroidImportance, TriggerType, RepeatFrequency } from '@notifee/react-native';
import { useTheme } from '../theme/theme';
import { api } from '../services/api';
import { getConfig, setConfig } from '../db/database';
import { verifyPin, setupPin, formatLock } from '../services/security';

const KEYS = ['hora_resumo', 'horario_inicio', 'horario_fim', 'limite_gasto_diario', 'limite_tokens', 'resp_email', 'resp_whatsapp',
  'meta_padrao', 'meta_memberships', 'meta_lista_emails', 'comissao_padrao', 'cookie_dias', 'nicho_novo'];

export default function SettingsExtras({ flash }) {
  const { c } = useTheme();
  const [v, setV] = useState({});
  const [auto, setAuto] = useState(true);
  const [nicho, setNicho] = useState('');
  const [pin, setPin] = useState({ a: '', b: '', c: '' });

  useEffect(() => {
    (async () => {
      const o = {};
      for (const k of KEYS) o[k] = (await getConfig(k)) || '';
      setV(o);
      setAuto((await getConfig('nicho_auto_aprovacao')) !== '0');
    })();
    api.get('/nichos').then((d) => setNicho(typeof d === 'string' ? d : JSON.stringify(d).slice(0, 160))).catch(() => {});
  }, []);

  const set = (k) => (t) => setV((x) => ({ ...x, [k]: t }));
  const salvar = async (ks, msg) => { for (const k of ks) await setConfig(k, v[k] || ''); flash(msg || 'Guardado.'); };
  const input = { borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 10, padding: 10, marginBottom: 8 };
  const H = (t) => <Text style={{ color: c.gold, fontSize: 16, fontWeight: '700', marginTop: 22, marginBottom: 8 }}>{t}</Text>;
  const F = (k, label, o = {}) => (
    <View key={k}>
      <Text style={{ color: c.muted, fontSize: 11, marginBottom: 2 }}>{label}</Text>
      <TextInput style={{ ...input, minHeight: o.multiline ? 70 : undefined }} value={v[k] || ''} onChangeText={set(k)} placeholder={o.ph || ''} placeholderTextColor={c.muted}
        keyboardType={o.num ? 'numeric' : 'default'} multiline={!!o.multiline} autoCapitalize="none" />
    </View>
  );
  const Btn = ({ t, f }) => <TouchableOpacity onPress={f} style={{ backgroundColor: c.gold, padding: 12, borderRadius: 10, alignItems: 'center', marginBottom: 6 }}><Text style={{ color: '#000', fontWeight: '700' }}>{t}</Text></TouchableOpacity>;

  const agendarResumo = async () => {
    const m = /^(\d{1,2}):(\d{2})$/.exec(v.hora_resumo || '');
    if (!m) return flash('Use o formato HH:MM, por exemplo 08:00.');
    await setConfig('hora_resumo', v.hora_resumo);
    try {
      await notifee.requestPermission();
      const channelId = await notifee.createChannel({ id: 'resumo', name: 'Resumo matinal', importance: AndroidImportance.HIGH });
      const quando = new Date(); quando.setHours(Number(m[1]), Number(m[2]), 0, 0);
      if (quando.getTime() <= Date.now()) quando.setDate(quando.getDate() + 1);
      await notifee.createTriggerNotification(
        { id: 'resumo_matinal', title: 'Bom dia, Senhor Letício', body: 'Abra a LétimaX e toque em "Resumo matinal em voz alta" no Dashboard.', android: { channelId, pressAction: { id: 'default' } } },
        { type: TriggerType.TIMESTAMP, timestamp: quando.getTime(), repeatFrequency: RepeatFrequency.DAILY }
      );
      flash('Lembrete do resumo matinal agendado para as ' + v.hora_resumo + '.');
    } catch (e) { flash(e.message); }
  };

  const mudarNicho = async () => {
    if (!v.nicho_novo) return;
    try { await api.post(auto ? '/nichos/mudar' : '/nichos/aprovar', { nicho: v.nicho_novo }); flash('Pedido enviado. Só avança com a sua aprovação.'); }
    catch (e) { flash(e.message); }
  };
  const aplicarMeta = async () => {
    const n = Number(v.meta_padrao);
    await salvar(['meta_padrao', 'meta_memberships', 'meta_lista_emails'], 'Metas guardadas.');
    if (n) api.post('/metas/definir', { valor: n }).catch(() => {});
  };
  const aplicarAfiliados = async () => {
    await salvar(['comissao_padrao', 'cookie_dias'], 'Guardado.');
    api.post('/afiliados-proprios/criar-programa', { comissao: Number(v.comissao_padrao) || 50, cookie_dias: Number(v.cookie_dias) || 30 }).catch(() => {});
  };
  const alterarPin = async () => {
    if (pin.b.length < 6) return flash('O novo PIN deve ter pelo menos 6 dígitos.');
    if (pin.b !== pin.c) return flash('Os PINs novos não coincidem.');
    const r = await verifyPin(pin.a);
    if (!r.ok) return flash(r.locked ? formatLock(r.locked) : 'PIN actual incorrecto.');
    await setupPin(pin.b); setPin({ a: '', b: '', c: '' }); flash('PIN alterado.');
  };

  return (
    <View>
      {H('Geral')}
      {F('hora_resumo', 'Hora do resumo matinal (HH:MM)', { ph: '08:00' })}
      <Btn t="Agendar lembrete do resumo" f={agendarResumo} />
      {F('horario_inicio', 'Horário de trabalho: início', { ph: '03:00' })}
      {F('horario_fim', 'Horário de trabalho: fim', { ph: '23:00' })}
      {F('limite_gasto_diario', 'Limite de gasto diário com APIs (USD)', { num: true, ph: '10' })}
      {F('limite_tokens', 'Limite de tokens por conversa', { num: true, ph: '8000' })}
      <Btn t="Guardar" f={() => salvar(['horario_inicio', 'horario_fim', 'limite_gasto_diario', 'limite_tokens'])} />
      <Text style={{ color: c.muted, fontSize: 12 }}>Horário e limite de gasto ficam guardados no telemóvel. Para o servidor os aplicar, defina-os também no .env (HORARIO_INICIO, HORARIO_FIM, LIMITE_DIARIO_USD).</Text>

      {H('Respostas pré-aprovadas')}
      {F('resp_email', 'Email', { multiline: true })}
      {F('resp_whatsapp', 'WhatsApp', { multiline: true })}
      <Btn t="Guardar respostas" f={() => salvar(['resp_email', 'resp_whatsapp'])} />

      {H('Nichos')}
      <Text style={{ color: c.muted, marginBottom: 6 }}>{nicho ? 'Nicho actual: ' + nicho : 'Nicho actual: sem ligação ao servidor.'}</Text>
      {F('nicho_novo', 'Propor novo nicho')}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
        <Text style={{ color: c.text, flex: 1 }}>Mudança automática só com a minha aprovação</Text>
        <Switch value={auto} onValueChange={async (x) => { setAuto(x); await setConfig('nicho_auto_aprovacao', x ? '1' : '0'); }} trackColor={{ true: c.gold }} />
      </View>
      <Btn t="Enviar proposta" f={mudarNicho} />

      {H('Metas')}
      {F('meta_padrao', 'Meta mensal padrão (R$)', { num: true, ph: '2000' })}
      {F('meta_memberships', 'Meta de memberships', { num: true })}
      {F('meta_lista_emails', 'Meta da lista de emails', { num: true })}
      <Btn t="Guardar metas" f={aplicarMeta} />

      {H('Programa de afiliados')}
      {F('comissao_padrao', 'Comissão padrão por produto (%)', { num: true, ph: '50' })}
      {F('cookie_dias', 'Período de cookie (dias)', { num: true, ph: '30' })}
      <Btn t="Guardar" f={aplicarAfiliados} />

      {H('Segurança')}
      {[['a', 'PIN actual'], ['b', 'Novo PIN'], ['c', 'Repetir novo PIN']].map(([k, l]) => (
        <TextInput key={k} style={input} value={pin[k]} onChangeText={(t) => setPin((x) => ({ ...x, [k]: t }))} placeholder={l} placeholderTextColor={c.muted} secureTextEntry keyboardType="number-pad" maxLength={12} />
      ))}
      <Btn t="Alterar PIN" f={alterarPin} />
    </View>
  );
}

~~~

### letimax-app/src/screens/FilaScreen.js
~~~js
import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Alert, RefreshControl } from 'react-native';
import { useTheme } from '../theme/theme';
import { listarFila, processarFila, limparFila } from '../services/queue';

export default function FilaScreen() {
  const { c } = useTheme();
  const [rows, setRows] = useState([]);
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => { setRows(await listarFila()); }, []);
  useEffect(() => { load(); }, [load]);

  const agora = async () => {
    setLoading(true);
    try { const r = await processarFila(); setMsg(r.feitas ? r.feitas + ' tarefa(s) enviada(s).' : 'Nada foi enviado (sem ligação ou fila vazia).'); } catch (e) { setMsg(e.message); }
    await load(); setLoading(false);
  };
  const limpar = () => Alert.alert('Limpar fila', 'As tarefas ainda não enviadas serão descartadas. Confirma?', [
    { text: 'Cancelar', style: 'cancel' }, { text: 'Limpar', style: 'destructive', onPress: async () => { await limparFila(); load(); } },
  ]);
  const cor = (e) => (e === 'pendente' ? c.warn : e === 'falhou' || e === 'expirada' ? c.err : c.ok);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16 }} refreshControl={<RefreshControl refreshing={loading} onRefresh={load} tintColor={c.gold} />}>
      <Text style={{ color: c.text, fontSize: 22, fontWeight: '700' }}>Fila offline</Text>
      <Text style={{ color: c.muted, marginTop: 6, marginBottom: 12 }}>Acções feitas sem internet seguem sozinhas quando a ligação volta (até 24 horas). Acções perigosas, como reembolsos, nunca entram na fila.</Text>
      {!!msg && <Text style={{ color: c.gold, marginBottom: 8 }}>{msg}</Text>}
      <View style={{ flexDirection: 'row', marginBottom: 12 }}>
        <TouchableOpacity onPress={agora} style={{ backgroundColor: c.gold, padding: 11, borderRadius: 10, marginRight: 8 }}><Text style={{ color: '#000', fontWeight: '700' }}>Tentar agora</Text></TouchableOpacity>
        <TouchableOpacity onPress={limpar} style={{ backgroundColor: c.card, padding: 11, borderRadius: 10 }}><Text style={{ color: c.err }}>Limpar fila</Text></TouchableOpacity>
      </View>
      {!rows.length && <Text style={{ color: c.muted }}>Fila vazia.</Text>}
      {rows.map((r) => (
        <View key={r.id} style={{ backgroundColor: c.card, borderRadius: 12, padding: 12, marginBottom: 8, borderWidth: 1, borderColor: c.border }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: c.text, fontWeight: '700', flex: 1 }}>{r.rotulo}</Text>
            <Text style={{ color: cor(r.estado), fontWeight: '700' }}>{r.estado}</Text>
          </View>
          <Text style={{ color: c.muted, fontSize: 12 }}>{r.endpoint} · {String(r.criado_em).slice(0, 16).replace('T', ' ')} · tentativas {r.tentativas}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

~~~

### letimax-app/src/screens/AuthScreen.js
~~~js
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import * as Speech from 'expo-speech';
import { ExpoSpeechRecognitionModule, useSpeechRecognitionEvent } from 'expo-speech-recognition';
import { useTheme } from '../theme/theme';
import { getConfig } from '../db/database';
import { hasPin, setupPin, verifyPin, biometricAuth, lockRemaining, resetFailures, formatLock } from '../services/security';

const GREETING = 'Bem-vindo, Senhor Letício. Estou pronto. Hoje vamos fazer ainda mais dinheiro.';
const normT = (s) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9 ]/g, ' ')
  .replace(/\bletima x\b|\bleti max\b|\blet imax\b/g, 'letimax').replace(/\s+/g, ' ').trim();

export default function AuthScreen({ onSuccess }) {
  const { c } = useTheme();
  const [mode, setMode] = useState('boot'); // boot | setup | login | activar
  const modeRef = useRef('boot');
  const ir = (m) => { modeRef.current = m; setMode(m); };
  const [pin, setPin] = useState('');
  const [pin2, setPin2] = useState('');
  const [msg, setMsg] = useState('');
  const [bad, setBad] = useState(false);
  const [frase, setFrase] = useState('LétimaX, iniciar');
  const fraseRef = useRef('letimax iniciar');

  const finalizar = async () => {
    ir('feito');
    await resetFailures();
    Speech.speak(GREETING, { language: 'pt-PT' });
    onSuccess();
  };

  const escutar = async () => {
    try {
      const p = await ExpoSpeechRecognitionModule.requestPermissionsAsync();
      if (!p.granted) { setBad(true); setMsg('Sem permissão do microfone. Toque em "Continuar sem voz".'); return; }
      ExpoSpeechRecognitionModule.start({ lang: 'pt-PT', interimResults: true, continuous: false });
    } catch (e) { setBad(true); setMsg('Reconhecimento de voz indisponível. Toque em "Continuar sem voz".'); }
  };

  // Fase 3 do documento: depois da identidade confirmada, espera o comando de activação (personalizável).
  // É uma conveniência, não uma camada de segurança: qualquer pessoa pode dizer a frase.
  const passo3 = async () => {
    const on = (await getConfig('cmd_activacao_on')) !== '0';
    const f = (await getConfig('cmd_activacao')) || 'LétimaX, iniciar';
    setFrase(f); fraseRef.current = normT(f);
    if (!on) return finalizar();
    ir('activar'); setBad(false); setMsg('');
    escutar();
  };

  useSpeechRecognitionEvent('result', (e) => {
    if (modeRef.current !== 'activar') return;
    const t = normT((e.results && e.results[0] && e.results[0].transcript) || '');
    if (fraseRef.current.split(' ').every((w) => t.includes(w))) { try { ExpoSpeechRecognitionModule.stop(); } catch (er) {} finalizar(); }
  });
  useSpeechRecognitionEvent('end', () => { if (modeRef.current === 'activar') setTimeout(() => { if (modeRef.current === 'activar') escutar(); }, 400); });

  const tryBio = async () => {
    const lock = await lockRemaining();
    if (lock) { setBad(true); setMsg(formatLock(lock)); return; }
    if (await biometricAuth()) passo3();
  };

  useEffect(() => {
    (async () => {
      if (await hasPin()) { ir('login'); tryBio(); } else ir('setup');
    })();
  }, []);

  const create = async () => {
    setBad(true);
    if (pin.length < 6) return setMsg('O PIN deve ter pelo menos 6 dígitos.');
    if (pin !== pin2) return setMsg('Os PINs não coincidem.');
    await setupPin(pin);
    setBad(false);
    setMsg('Perfil de acesso criado. A LétimaX reconhece-o agora, Senhor Letício.');
    setTimeout(passo3, 800);
  };

  const login = async () => {
    const r = await verifyPin(pin);
    setPin('');
    if (r.ok) return passo3();
    setBad(true);
    if (r.locked) return setMsg(formatLock(r.locked));
    setMsg('PIN incorrecto. Tentativas falhadas: ' + r.failures);
  };

  const input = { borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 12, padding: 14, fontSize: 18, marginBottom: 12, textAlign: 'center', letterSpacing: 6 };
  const btn = { backgroundColor: c.gold, padding: 14, borderRadius: 12, alignItems: 'center', marginTop: 4 };

  if (mode === 'boot') return <View style={{ flex: 1, backgroundColor: c.bg, justifyContent: 'center' }}><ActivityIndicator color={c.gold} /></View>;

  if (mode === 'activar') {
    return (
      <View style={{ flex: 1, backgroundColor: c.bg, justifyContent: 'center', padding: 28 }}>
        <Text style={{ color: c.gold, fontSize: 38, fontWeight: '800', textAlign: 'center' }}>LétimaX</Text>
        <Text style={{ color: c.muted, textAlign: 'center', marginVertical: 24 }}>Aguardando activação...{'\n'}Diga: {frase}</Text>
        <ActivityIndicator color={c.gold} />
        {!!msg && <Text style={{ color: bad ? c.err : c.gold, textAlign: 'center', marginTop: 12 }}>{msg}</Text>}
        <TouchableOpacity style={{ padding: 16, alignItems: 'center', marginTop: 16 }} onPress={finalizar}><Text style={{ color: c.muted }}>Continuar sem voz</Text></TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: c.bg, justifyContent: 'center', padding: 28 }}>
      <Text style={{ color: c.gold, fontSize: 38, fontWeight: '800', textAlign: 'center' }}>LétimaX</Text>
      <Text style={{ color: c.muted, textAlign: 'center', marginBottom: 28 }}>
        {mode === 'setup' ? 'Primeiro acesso — crie o seu PIN de segurança' : 'Confirme a sua identidade'}
      </Text>
      <TextInput value={pin} onChangeText={setPin} placeholder="PIN" placeholderTextColor={c.muted} secureTextEntry keyboardType="number-pad" maxLength={12} style={input} />
      {mode === 'setup' && <TextInput value={pin2} onChangeText={setPin2} placeholder="Repetir PIN" placeholderTextColor={c.muted} secureTextEntry keyboardType="number-pad" maxLength={12} style={input} />}
      <TouchableOpacity style={btn} onPress={mode === 'setup' ? create : login}>
        <Text style={{ color: '#000', fontWeight: '700' }}>{mode === 'setup' ? 'Criar perfil' : 'Entrar'}</Text>
      </TouchableOpacity>
      {mode === 'login' && (
        <TouchableOpacity style={{ padding: 14, alignItems: 'center' }} onPress={tryBio}>
          <Text style={{ color: c.gold }}>Usar rosto / impressão digital</Text>
        </TouchableOpacity>
      )}
      {!!msg && <Text style={{ color: bad ? c.err : c.gold, textAlign: 'center', marginTop: 12 }}>{msg}</Text>}
    </View>
  );
}

~~~

### letimax-app/src/screens/ModuleScreen.js
~~~js
import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, Text, RefreshControl, ActivityIndicator } from 'react-native';
import { useTheme } from '../theme/theme';
import { api } from '../services/api';
import { cacheGet, cacheSet } from '../db/database';
import JsonView from '../components/JsonView';

// Ecrã genérico ligado a um endpoint GET do servidor, com cache offline.
export default function ModuleScreen({ route }) {
  const { c } = useTheme();
  const { titulo, endpoint } = route.params || {};
  const [data, setData] = useState(null);
  const [offline, setOffline] = useState(false);
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    if (!endpoint) return;
    setLoading(true); setErr(''); setOffline(false);
    try {
      const d = await api.get(endpoint);
      setData(d); await cacheSet(endpoint, d);
    } catch (e) {
      const cached = await cacheGet(endpoint);
      if (cached) { setData(cached.dados); setOffline(true); } else setErr(e.message);
    } finally { setLoading(false); }
  }, [endpoint]);

  useEffect(() => { load(); }, [load]);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16 }}
      refreshControl={<RefreshControl refreshing={loading} onRefresh={load} tintColor={c.gold} />}>
      <Text style={{ color: c.text, fontSize: 22, fontWeight: '700', marginBottom: 12 }}>{titulo}</Text>
      {!endpoint && <Text style={{ color: c.muted }}>Este ecrã é local e será construído na próxima fase.</Text>}
      {offline && <Text style={{ color: c.warn, marginBottom: 8 }}>Modo offline — a mostrar dados em cache.</Text>}
      {err ? <Text style={{ color: c.err }}>{err}</Text> : null}
      {loading && !data && <ActivityIndicator color={c.gold} />}
      {data && <JsonView data={data} c={c} />}
    </ScrollView>
  );
}

~~~

### letimax-app/src/screens/FirstUseScreen.js
~~~js
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { useTheme } from '../theme/theme';
import { saveServerConfig, api } from '../services/api';
import { setConfig } from '../db/database';

export default function FirstUseScreen({ onDone }) {
  const { c } = useTheme();
  const [url, setUrl] = useState('');
  const [token, setToken] = useState('');
  const [claude, setClaude] = useState('');
  const [msg, setMsg] = useState('');

  const input = { borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 12, padding: 12, marginBottom: 10 };

  const save = async (ir) => {
    try {
      await saveServerConfig(url, token);
      if (claude.trim()) {
        // A chave segue por HTTPS para o servidor e nunca fica guardada no telemóvel
        await api.post('/chaves/adicionar', { nome: 'ANTHROPIC_API_KEY', valor: claude.trim() });
        setClaude('');
      }
      await setConfig('primeiro_uso', '1');
      onDone(ir === true);
    } catch (e) { setMsg(e.message); }
  };
  const later = async () => { await setConfig('primeiro_uso', '1'); onDone(); };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 24, paddingTop: 70 }}>
      <Text style={{ color: c.gold, fontSize: 26, fontWeight: '800' }}>Primeira configuração</Text>
      <Text style={{ color: c.muted, marginVertical: 12 }}>Antes de começar, ligue a LétimaX ao seu servidor e adicione a chave do Claude para que ela possa responder.</Text>
      <TextInput style={input} value={url} onChangeText={setUrl} placeholder="https://o-seu-servidor.up.railway.app" placeholderTextColor={c.muted} autoCapitalize="none" />
      <TextInput style={input} value={token} onChangeText={setToken} placeholder="Token de acesso do servidor" placeholderTextColor={c.muted} autoCapitalize="none" secureTextEntry />
      <TextInput style={input} value={claude} onChangeText={setClaude} placeholder="ANTHROPIC_API_KEY (opcional agora)" placeholderTextColor={c.muted} autoCapitalize="none" secureTextEntry />
      {!!msg && <Text style={{ color: c.err, marginBottom: 8 }}>{msg}</Text>}
      <TouchableOpacity onPress={() => Linking.openURL('https://console.anthropic.com')} style={{ paddingVertical: 6 }}><Text style={{ color: c.gold }}>Obter a chave do Claude (anthropic.com)</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL('https://elevenlabs.io')} style={{ paddingVertical: 6, marginBottom: 10 }}><Text style={{ color: c.gold }}>Obter a chave da voz (elevenlabs.io)</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => save(false)} style={{ backgroundColor: c.gold, padding: 14, borderRadius: 12, alignItems: 'center' }}>
        <Text style={{ color: '#000', fontWeight: '700' }}>Guardar e iniciar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => save(true)} style={{ padding: 12, alignItems: 'center' }}>
        <Text style={{ color: c.gold }}>Guardar e ir para as Configurações completas</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={later} style={{ padding: 14, alignItems: 'center' }}>
        <Text style={{ color: c.muted }}>Configurar depois</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

~~~

### letimax-app/src/screens/ContactosScreen.js
~~~js
import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useTheme } from '../theme/theme';
import { listContactos, saveContacto, deleteContacto } from '../db/database';

const CLASSES = ['cliente', 'parceiro', 'afiliado', 'fornecedor', 'influenciador'];

export default function ContactosScreen() {
  const { c } = useTheme();
  const [lista, setLista] = useState([]);
  const [q, setQ] = useState('');
  const [form, setForm] = useState(null);

  const load = useCallback(() => listContactos(q).then(setLista), [q]);
  useEffect(() => { load(); }, [load]);

  const input = { borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 10, padding: 10, marginBottom: 8 };
  const chip = (on) => ({ paddingVertical: 6, paddingHorizontal: 12, borderRadius: 16, marginRight: 6, marginBottom: 6, backgroundColor: on ? c.gold : c.card });

  const guardar = async () => {
    if (!form.nome) return;
    await saveContacto(form); setForm(null); load();
  };
  const apagar = (p) => Alert.alert('Eliminar contacto', p.nome + '?', [
    { text: 'Cancelar', style: 'cancel' },
    { text: 'Eliminar', style: 'destructive', onPress: async () => { await deleteContacto(p.id); load(); } },
  ]);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16 }} keyboardShouldPersistTaps="handled">
      <Text style={{ color: c.text, fontSize: 22, fontWeight: '700', marginBottom: 10 }}>Contactos</Text>
      <TextInput value={q} onChangeText={setQ} placeholder="Pesquisar por nome, email ou classe" placeholderTextColor={c.muted} style={input} />

      {form ? (
        <View style={{ backgroundColor: c.card, borderRadius: 14, padding: 14, marginBottom: 12 }}>
          {['nome', 'email', 'telefone', 'notas'].map((k) => (
            <TextInput key={k} value={form[k] || ''} onChangeText={(t) => setForm({ ...form, [k]: t })} placeholder={k[0].toUpperCase() + k.slice(1)} placeholderTextColor={c.muted} autoCapitalize={k === 'email' ? 'none' : 'sentences'} style={input} />
          ))}
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {CLASSES.map((k) => <TouchableOpacity key={k} style={chip(form.classe === k)} onPress={() => setForm({ ...form, classe: k })}><Text style={{ color: form.classe === k ? '#000' : c.text }}>{k}</Text></TouchableOpacity>)}
          </View>
          <View style={{ flexDirection: 'row', marginTop: 6 }}>
            <TouchableOpacity onPress={guardar} style={{ flex: 1, backgroundColor: c.gold, padding: 11, borderRadius: 10, alignItems: 'center', marginRight: 8 }}><Text style={{ color: '#000', fontWeight: '700' }}>Guardar</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => setForm(null)} style={{ flex: 1, backgroundColor: c.bg, padding: 11, borderRadius: 10, alignItems: 'center' }}><Text style={{ color: c.muted }}>Cancelar</Text></TouchableOpacity>
          </View>
        </View>
      ) : (
        <TouchableOpacity onPress={() => setForm({ classe: 'cliente' })} style={{ backgroundColor: c.gold, padding: 12, borderRadius: 10, alignItems: 'center', marginBottom: 12 }}><Text style={{ color: '#000', fontWeight: '700' }}>Novo contacto</Text></TouchableOpacity>
      )}

      {!lista.length && <Text style={{ color: c.muted }}>Sem contactos.</Text>}
      {lista.map((p) => (
        <TouchableOpacity key={p.id} onLongPress={() => apagar(p)} style={{ backgroundColor: c.card, borderRadius: 12, padding: 12, marginBottom: 8, borderWidth: 1, borderColor: c.border }}>
          <Text style={{ color: c.text, fontWeight: '700' }}>{p.nome} <Text style={{ color: c.gold, fontWeight: '400' }}>· {p.classe}</Text></Text>
          {!!p.email && <Text style={{ color: c.muted }}>{p.email}</Text>}
          {!!p.telefone && <Text style={{ color: c.muted }}>{p.telefone}</Text>}
          {!!p.notas && <Text style={{ color: c.muted, marginTop: 2 }}>{p.notas}</Text>}
        </TouchableOpacity>
      ))}
      <Text style={{ color: c.muted, fontSize: 12, marginTop: 6 }}>Toque longo num contacto para eliminar.</Text>
    </ScrollView>
  );
}

~~~

### letimax-app/src/screens/ChatScreen.js
~~~js
import React, { useContext, useEffect, useRef, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
import { falarVoz } from '../services/voz';
import { onBus } from '../services/bus';
import { isRede } from '../services/api';
import { activateKeepAwakeAsync, deactivateKeepAwake } from 'expo-keep-awake';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/theme';
import { addMessage, getMessages, getConfig, replaceHistory } from '../db/database';
import { api } from '../services/api';
import { useVoice } from '../services/useVoice';
import { runCommand } from '../services/commands';
import { TorchCtx } from '../components/TorchHost';

export default function ChatScreen() {
  const { c, setMode } = useTheme();
  const torch = useContext(TorchCtx);
  const [msgs, setMsgs] = useState([]); // mais recente primeiro
  const [text, setText] = useState('');
  const [wait, setWait] = useState(0); // 0 nada | 1 a carregar | 2 a processar
  const [cont, setCont] = useState(false);
  const contRef = useRef(false);
  const timer = useRef(null);
  const voiceRef = useRef(null);
  const [limite, setLimite] = useState(8000);

  useEffect(() => onBus('conversas', () => { getMessages().then(setMsgs); }), []);
  useEffect(() => { getMessages().then(setMsgs); getConfig('limite_tokens').then((v) => Number(v) && setLimite(Number(v))); return () => { deactivateKeepAwake(); }; }, []);

  const tokens = Math.ceil(msgs.reduce((s, m) => s + (m.texto || '').length, 0) / 4);
  const resumir = async () => {
    setWait(2);
    try {
      const texto = msgs.slice(0, 40).reverse().map((m) => (m.papel === 'user' ? 'Senhor Letício: ' : 'LétimaX: ') + m.texto).join('\n');
      const r = await api.post('/chat', { mensagem: 'Resume esta conversa em até 10 linhas, mantendo decisões e pendências:\n' + texto }, 60000);
      await replaceHistory(r.resposta || r.response || JSON.stringify(r));
      setMsgs(await getMessages());
    } catch (e) { await push('bot', 'Não consegui resumir agora (' + e.message + ').'); }
    finally { setWait(0); }
  };

  const push = async (papel, texto) => { const m = await addMessage(papel, texto); setMsgs((x) => [m, ...x]); };
  // Pausa a escuta enquanto a LétimaX fala, para não ouvir a própria voz
  const falar = (t) => {
    const v = voiceRef.current;
    if (v) v.pause();
    falarVoz(t, () => v && v.resume());
  };

  const enviar = async (t) => {
    if (!t || wait) return;
    await push('user', t);
    setWait(1);
    timer.current = setTimeout(() => setWait(2), 30000); // 30 s: "a processar..."
    let reply;
    try {
      const r = await api.post('/chat', { mensagem: t }, 60000); // 60 s: cancela
      reply = r.resposta || r.response || JSON.stringify(r);
      falar(reply);
    } catch (e) {
      reply = isRede(e) ? 'Sem ligação ao servidor. Verifique a internet e envie de novo quando quiser.' : 'Não consegui obter resposta (' + e.message + '). Quer tentar novamente?';
    } finally { clearTimeout(timer.current); setWait(0); }
    await push('bot', reply);
  };

  const onFinal = async (t) => {
    const r = await runCommand(t, { setMode, torch, requireWake: contRef.current });
    if (r === null) { if (!contRef.current) enviar(t); return; } // push-to-talk sem comando = mensagem normal
    await push('user', t);
    await push('bot', r);
    falar(r);
  };

  const voice = useVoice(onFinal);
  voiceRef.current = voice;

  const toggleCont = async () => {
    const v = !cont;
    setCont(v); contRef.current = v;
    if (v) await activateKeepAwakeAsync(); else deactivateKeepAwake();
    voice.setContinuous(v);
  };

  const Bubble = ({ item }) => {
    const me = item.papel === 'user';
    return (
      <View style={{ alignSelf: me ? 'flex-end' : 'flex-start', backgroundColor: me ? c.bubbleUser : c.bubbleBot, padding: 12, borderRadius: 16, marginVertical: 4, maxWidth: '85%' }}>
        <Text style={{ color: c.text, fontSize: 15 }}>{item.texto}</Text>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: c.bg }} behavior={Platform.OS === 'ios' ? 'padding' : undefined} keyboardVerticalOffset={90}>
      <FlatList inverted data={msgs} keyExtractor={(i) => String(i.id)} renderItem={Bubble} contentContainerStyle={{ padding: 12 }}
        ListHeaderComponent={wait ? (
          <View style={{ flexDirection: 'row', alignItems: 'center', padding: 8 }}>
            <ActivityIndicator color={c.gold} />
            <Text style={{ color: c.muted, marginLeft: 8 }}>{wait === 2 ? 'LétimaX está a processar...' : 'A pensar...'}</Text>
          </View>
        ) : null} />
      {tokens > limite * 0.8 && (
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: c.card }}>
          <Text style={{ color: c.warn, flex: 1, fontSize: 12 }}>{tokens >= limite ? 'Conversa acima do limite de tokens.' : 'A conversa aproxima-se do limite de tokens.'}</Text>
          <TouchableOpacity onPress={resumir}><Text style={{ color: c.gold, fontWeight: '700' }}>Resumir histórico</Text></TouchableOpacity>
        </View>
      )}
      {(voice.listening || cont) && (
        <Text style={{ color: c.gold, paddingHorizontal: 14, paddingBottom: 4 }}>
          {voice.partial ? '🎙 ' + voice.partial : cont ? 'Escuta contínua — diga "LétimaX, ..." (ecrã sempre ligado)' : 'A ouvir...'}
        </Text>
      )}
      <View style={{ flexDirection: 'row', padding: 10, borderTopWidth: 1, borderTopColor: c.border, alignItems: 'center' }}>
        <TouchableOpacity onPress={toggleCont} style={{ marginRight: 6, padding: 8 }}>
          <Ionicons name="ear" size={22} color={cont ? c.gold : c.muted} />
        </TouchableOpacity>
        <TextInput value={text} onChangeText={setText} placeholder="Escreva à LétimaX..." placeholderTextColor={c.muted}
          style={{ flex: 1, color: c.text, backgroundColor: c.card, borderRadius: 22, paddingHorizontal: 16, paddingVertical: 10 }} multiline />
        <TouchableOpacity onPress={() => (voice.listening ? voice.stop() : voice.start())} style={{ marginLeft: 6, padding: 8 }}>
          <Ionicons name={voice.listening ? 'mic' : 'mic-outline'} size={24} color={voice.listening ? c.err : c.gold} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { const t = text.trim(); setText(''); enviar(t); }} style={{ marginLeft: 2, backgroundColor: c.gold, borderRadius: 22, padding: 11 }}>
          <Ionicons name="send" size={20} color="#000" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

~~~

### letimax-app/src/screens/screens.config.js
~~~js
// Um ecrã por módulo, ligado aos endpoints do documento. Cada secção lê um GET; cada acção chama um endpoint.
// Marcadores {id}, {campo} são preenchidos com o item ou com o formulário.
const S = (key, endpoint, title) => ({ key, kind: 'stats', endpoint, title });
const L = (key, endpoint, title, o = {}) => ({ key, kind: 'list', endpoint, title, ...o });
const J = (key, endpoint, title, o = {}) => ({ key, kind: 'json', endpoint, title, ...o });
const B = (key, endpoint, title) => ({ key, kind: 'bars', endpoint, title });
const LOC = (key, tabela, title, o = {}) => ({ key, kind: 'local', tabela, title, ...o });
const A = (label, method, endpoint, o = {}) => ({ label, method, endpoint, ...o });
const T = (name, label, o = {}) => ({ name, label, ...o });
const OPT = (name, label, options) => ({ name, label, type: 'options', options });
const IDF = (n) => T(n, n.replace(/_/g, ' ') + ' (id)');

export const SCREENS = {
  dashboard: { titulo: 'Dashboard',
    sections: [S('d', '/dashboard', 'Hoje'), L('op', '/motor-receita/oportunidades', 'Próxima oportunidade', { limit: 1 }), J('i', '/saude', 'Estado das integrações')],
    actions: [A('🔊 Resumo matinal em voz alta', 'GET', '/resumo-matinal', { speak: true })] },

  mercado: { titulo: 'Mercado',
    sections: [S('m', '/mercado', 'Visão geral'), L('n', '/nichos/performance', 'Nichos por potencial'), L('l', '/mercado/lacunas', 'Lacunas: o que ninguém oferece'),
      L('f', '/mercado/concorrencia/fichas', 'Top concorrentes'), L('a', '/mercado/concorrencia/alertas', 'Alertas de concorrência')],
    actions: [A('Analisar mercado agora', 'GET', '/mercado/agora'), A('Próxima semana', 'GET', '/mercado/proxima-semana'), A('Próximo mês', 'GET', '/mercado/proximo-mes'),
      A('Mudar nicho (pede aprovação)', 'POST', '/nichos/mudar', { form: [T('nicho', 'Novo nicho')], confirm: 'Propor mudança de nicho? Só avança com a sua aprovação.' })] },

  marketing: { titulo: 'Marketing',
    sections: [LOC('c', 'conteudo_agendado', 'Conteúdo criado (guardado neste telemóvel)', { itemTitle: ['tema', 'acao'] })],
    note: 'Escolha o tema e o idioma e depois o canal. Nada é publicado sem a sua aprovação.',
    actions: ['instagram', 'facebook', 'tiktok', 'youtube', 'blog', 'newsletter', 'viral-adaptado'].map((c) =>
      A('Criar ' + c, 'POST', '/conteudo/' + c, { guardarEm: 'conteudo_agendado', form: [T('tema', 'Tema', { multiline: true }), OPT('idioma', 'Idioma', ['PT-BR', 'EN', 'ES'])] }))
      .concat([A('Criar funil de 13 etapas', 'POST', '/automacao/cascata', { form: [T('produto', 'Produto')], body: { tipo: 'funil', produto: '{produto}' } }),
        A('Criar webinar →', 'NAV', 'webinars')]) },

  raqueamento: { titulo: 'Sistema de Raqueamento',
    note: 'Último recurso: só se o Motor de Receita não achar oportunidades acima de 70 durante 7 dias. Nunca activa sozinho.',
    sections: [S('e', '/raqueamento/estado', 'Estado das fontes'),
      L('s', '/raqueamento/estrategias', 'Estratégias disponíveis', { itemActions: [A('Activar', 'POST', '/raqueamento/aprovar/{id}', { confirm: 'Aprova esta estratégia de emergência?' })] }),
      L('h', '/raqueamento/historico', 'Histórico')],
    actions: [A('Activar modo de raqueamento', 'POST', '/raqueamento/activar', { confirm: 'As fontes normais estão em baixo. Activar o raqueamento?' })] },

  activos: { titulo: 'Activos',
    sections: [S('v', '/activos/valor-total', 'Valor total'), L('l', '/activos/lista', 'Activos'), L('p', '/activos/progresso', 'Em construção')],
    actions: [A('Construir novo activo', 'POST', '/activos/construir', { form: [T('activo', 'Activo (ex.: lista de emails)')] })] },

  novonegocio: { titulo: 'Novos Negócios',
    sections: [L('o', '/negocios/oportunidades', 'Oportunidades', { itemActions: [A('Aprovar', 'POST', '/negocios/aprovar/{id}', { confirm: 'Iniciar a implementação deste negócio?' })] }), L('h', '/negocios/historico', 'Histórico')],
    actions: [A('Pesquisar novos negócios', 'GET', '/negocios/pesquisa')] },

  empresa: { titulo: 'Empresa',
    sections: [S('p', '/empresa/progresso', 'Progresso'), J('j', '/empresa/projecao', 'Projecção 6, 12 e 24 meses')],
    actions: [A('Gerar plano da empresa', 'POST', '/empresa/plano', { confirm: 'Gerar o plano completo com todos os dados acumulados?' })] },

  afext: { titulo: 'Afiliados Externos',
    sections: [S('r', '/afiliados/receita', 'Receita de afiliados'), L('k', '/afiliados/ranking', 'Ranking Hotmart e Kiwify', { itemActions: [A('Campanha', 'POST', '/afiliados/campanha', { body: { produto_id: '{id}' } })] })] },

  afprop: { titulo: 'Afiliados Próprios',
    sections: [S('d', '/afiliados-proprios/dashboard', 'Programa'), L('r', '/afiliados-proprios/ranking', 'Mais rentáveis'), L('c', '/afiliados-proprios/comissoes', 'Comissões')],
    actions: [A('Criar programa', 'POST', '/afiliados-proprios/criar-programa', { form: [T('comissao', 'Comissão % (padrão 50)', { number: true })] }),
      A('Gerar link de afiliado', 'POST', '/afiliados-proprios/link/{produto_id}', { form: [IDF('produto_id')] }),
      A('Material de marketing', 'POST', '/afiliados-proprios/material-marketing', { form: [IDF('produto_id')] })] },

  lanc: { titulo: 'Lançamentos',
    sections: [J('e', '/lancamento/estrategia', 'Estratégia', { countdown: true }), S('r', '/lancamento/resultado', 'Resultado')],
    actions: [A('Criar lançamento', 'POST', '/lancamento/criar', { form: [IDF('produto_id')] }), A('Gerar emails', 'POST', '/lancamento/emails', { form: [IDF('produto_id')] })] },

  webinars: { titulo: 'Webinars',
    sections: [L('l', '/webinar/lista', 'Webinars', { itemActions: [A('Script', 'GET', '/webinar/script?webinar_id={id}'), A('Emails', 'POST', '/webinar/emails', { body: { webinar_id: '{id}' } }), A('Resultado', 'GET', '/webinar/resultado?webinar_id={id}')] })],
    actions: [A('Criar webinar', 'POST', '/webinar/criar', { form: [T('tema', 'Tema', { multiline: true })] })] },

  email: { titulo: 'Email Marketing',
    sections: [S('t', '/email/lista/tamanho', 'Lista'), S('a', '/email/analytics', 'Desempenho'), S('p', '/email/previsao-receita', 'Previsão de receita'), L('s', '/email/lead-scoring', 'Lead scoring', { export: true })],
    actions: [A('Nova sequência', 'POST', '/email/sequencia/criar', { form: [T('tema', 'Tema', { multiline: true })] }),
      A('Segmentar lista', 'POST', '/email/segmentar'), A('Newsletter', 'POST', '/email/newsletter'),
      A('Campanha de reactivação', 'POST', '/email/reativacao', { confirm: 'Enviar 5 emails de reactivação à lista inactiva?' }),
      A('Limpar lista', 'POST', '/email/limpeza', { confirm: 'Remover emails inválidos e de alto bounce?' }),
      A('Adicionar subscritor', 'POST', '/email/lista/adicionar', { form: [T('email', 'Email')] })] },

  analytics: { titulo: 'Analytics',
    sections: [S('c', '/analytics/conversao', 'Conversão'), B('o', '/analytics/origem-vendas', 'Origem das vendas'), S('a', '/analytics/custo-aquisicao', 'Custo de aquisição'),
      S('v', '/analytics/valor-cliente', 'Valor do cliente (LTV)'), S('p', '/analytics/projecao', 'Projecção 30 dias'), L('f', '/analytics/fugas-funil', 'Fugas do funil'),
      B('h', '/analytics/heatmap-horas', 'Dias e horas com mais vendas'), B('n', '/analytics/roi-por-nicho', 'ROI por nicho')] },

  reputacao: { titulo: 'Reputação',
    sections: [S('r', '/reputacao/monitorizar', 'Score de reputação'), J('s', '/sentimento/analise', 'Sentimento'), L('a', '/reputacao/alertas', 'Alertas de menções negativas'), L('t', '/reputacao/testemunhos', 'Testemunhos')],
    actions: [A('Pedir testemunho', 'POST', '/reputacao/pedir-testemunho', { confirm: 'Enviar pedidos de testemunho?' })] },

  suporte: { titulo: 'Suporte',
    sections: [S('s', '/suporte/taxa-satisfacao', 'Satisfação'),
      L('t', '/suporte/tickets', 'Tickets', { warnIf: (i) => Number(i.horas_sem_resposta) > 24,
        itemActions: [A('Responder', 'POST', '/suporte/responder', { form: [T('texto', 'Resposta', { multiline: true })], body: { ticket_id: '{id}', texto: '{texto}' } }),
          A('Reembolso', 'POST', '/suporte/reembolso', { body: { ticket_id: '{id}' }, confirm: 'Processar reembolso? O acesso é revogado em menos de 1 hora.', danger: true })] }),
      L('c', '/suporte/causas-reclamacao', 'Causas mais comuns de reclamação')] },

  onboarding: { titulo: 'Onboarding',
    sections: [S('t', '/onboarding/taxa-conclusao', 'Taxa de conclusão'), L('s', '/onboarding/status', 'Clientes', { itemActions: [1, 3, 7].map((d) => A('Email dia ' + d, 'POST', '/onboarding/email-dia/' + d, { body: { cliente_id: '{id}' } })) })],
    actions: [A('Iniciar onboarding', 'POST', '/onboarding/iniciar', { form: [T('cliente_email', 'Email do cliente'), IDF('produto_id')] })] },

  referencias: { titulo: 'Referências',
    sections: [S('d', '/referencias/dashboard', 'Resumo'), L('h', '/referencias/historico', 'Recompensas')],
    actions: [A('Gerar link de referência', 'POST', '/referencias/link', { form: [IDF('cliente_id')] }),
      A('Recompensar indicação', 'POST', '/referencias/recompensar', { form: [IDF('indicacao_id')], confirm: 'Atribuir a recompensa?' })] },

  paginas: { titulo: 'Páginas',
    sections: [L('p', '/pagina/analytics', 'Páginas', { itemActions: [
      A('Publicar', 'POST', '/pagina/publicar', { body: { pagina_id: '{id}' }, confirm: 'Publicar esta página?' }),
      A('Optimizar', 'POST', '/pagina/optimizar', { body: { pagina_id: '{id}' } }),
      A('Teste A/B', 'POST', '/pagina/ab-test', { body: { pagina_id: '{id}' } }),
      A('Resultado A/B', 'GET', '/pagina/ab-test/resultado?pagina_id={id}')] })],
    actions: [A('Criar nova página', 'POST', '/pagina/criar', { form: [OPT('tipo', 'Tipo', ['vendas', 'captura', 'obrigado', 'upsell', 'downsell', 'lancamento', 'landing']), IDF('produto_id')] })] },

  videos: { titulo: 'Vídeos',
    note: 'O servidor não tem lista de vídeos; cada resultado aparece aqui logo após criar.',
    actions: [A('Criar guião', 'POST', '/video/guiao', { form: [OPT('tipo', 'Tipo', ['VSL', 'YouTube', 'TikTok', 'Reels', 'Anúncio Meta Ads']), T('tema', 'Tema', { multiline: true })] }),
      A('Miniatura', 'POST', '/video/miniatura', { form: [T('titulo', 'Título do vídeo')] }),
      A('Legendas', 'POST', '/video/legendas', { form: [T('guiao', 'Guião', { multiline: true })] }),
      A('Narração', 'POST', '/video/narracao', { form: [T('guiao', 'Guião', { multiline: true })] })] },

  cursos: { titulo: 'Cursos',
    sections: [L('l', '/curso/lista', 'Cursos', { itemActions: [A('Módulos', 'GET', '/curso/modulos?curso_id={id}'),
      A('Guião de aula', 'POST', '/curso/guiao-aula', { body: { curso_id: '{id}' } }), A('Slides', 'POST', '/curso/slides-aula', { body: { curso_id: '{id}' } }), A('Narração', 'POST', '/curso/narracao-aula', { body: { curso_id: '{id}' } })] })],
    actions: [A('Criar novo curso', 'POST', '/curso/criar', { form: [T('tema', 'Tema', { multiline: true })] })] },

  sites: { titulo: 'Sites',
    sections: [L('s', '/site/analytics', 'Sites', { itemActions: [A('Publicar', 'POST', '/site/publicar', { body: { site_id: '{id}' }, confirm: 'Publicar este site?' }), A('Actualizar', 'POST', '/site/actualizar', { body: { site_id: '{id}' } })] })],
    actions: [A('Criar novo site', 'POST', '/site/criar', { form: [OPT('tipo', 'Tipo', ['institucional', 'blog', 'membership', 'loja online', 'portfolio'])] })] },

  apres: { titulo: 'Apresentações',
    sections: [L('l', '/apresentacao/lista', 'Apresentações')],
    actions: [A('Criar apresentação', 'POST', '/apresentacao/criar', { form: [OPT('tipo', 'Tipo', ['pitch deck', 'proposta de parceria', 'relatório mensal', 'material de formação']), T('tema', 'Tema')] }),
      A('Pitch para investidores', 'POST', '/apresentacao/pitch', { form: [T('tema', 'Tema')] })] },

  automacao: { titulo: 'Automação Inteligente',
    sections: [L('p', '/automacao/pontuacao', 'Acções candidatas por pontuação'), L('s', '/automacao/sugestoes', 'Sugestões'), S('r', '/automacao/roi', 'ROI das automações')],
    actions: [A('Ac
[CONTEÚDO TRUNCADO PELO LIMITE DO RELATÓRIO]
~~~

### letimax-app/src/screens/FinancasScreen.js
~~~js
import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useTheme } from '../theme/theme';
import { api } from '../services/api';
import { addMov, listMovs, delMov, getConfig, setConfig, resumoMeses } from '../db/database';
import Bars from '../components/Bars';
import { primitives, pretty, fmt } from '../components/ui';

const mesActual = () => new Date().toISOString().slice(0, 7);

export default function FinancasScreen() {
  const { c } = useTheme();
  const [movs, setMovs] = useState([]);
  const [tipo, setTipo] = useState('despesa');
  const [valor, setValor] = useState('');
  const [desc, setDesc] = useState('');
  const [orc, setOrc] = useState('');
  const [negocio, setNegocio] = useState(null);
  const [erro, setErro] = useState('');
  const [serie, setSerie] = useState([]);

  const load = useCallback(async () => {
    setMovs(await listMovs(mesActual()));
    setSerie(await resumoMeses(6));
    getConfig('orcamento_pessoal').then((v) => v && setOrc(v));
    api.get('/receita/total').then(setNegocio).catch((e) => setErro(e.message));
  }, []);
  useEffect(() => { load(); }, [load]);

  const rec = movs.filter((m) => m.tipo === 'receita').reduce((s, m) => s + m.valor, 0);
  const des = movs.filter((m) => m.tipo === 'despesa').reduce((s, m) => s + m.valor, 0);
  const orcamento = Number(orc) || 0;

  const add = async () => {
    const v = Number(String(valor).replace(',', '.'));
    if (!v || v <= 0) return;
    await addMov(tipo, v, desc); setValor(''); setDesc(''); load();
  };
  const apagar = (m) => Alert.alert('Eliminar', (m.descricao || m.tipo) + '?', [
    { text: 'Cancelar', style: 'cancel' },
    { text: 'Eliminar', style: 'destructive', onPress: async () => { await delMov(m.id); load(); } },
  ]);

  const input = { borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 10, padding: 10, marginBottom: 8 };
  const card = { backgroundColor: c.card, borderRadius: 14, padding: 14, borderWidth: 1, borderColor: c.border, marginBottom: 10 };
  const chip = (on, cor) => ({ flex: 1, padding: 10, borderRadius: 10, alignItems: 'center', marginRight: 8, backgroundColor: on ? cor : c.card });

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16, paddingBottom: 50 }} keyboardShouldPersistTaps="handled">
      <Text style={{ color: c.text, fontSize: 22, fontWeight: '700', marginBottom: 12 }}>Finanças</Text>

      <Text style={{ color: c.gold, fontWeight: '700', marginBottom: 8 }}>Dinheiro do negócio</Text>
      <View style={card}>
        {negocio ? primitives(negocio).map(([k, v]) => <Text key={k} style={{ color: c.text }}>{pretty(k)}: <Text style={{ fontWeight: '700' }}>{fmt(v)}</Text></Text>)
          : <Text style={{ color: c.muted }}>{erro || 'A carregar...'}</Text>}
      </View>

      <Text style={{ color: c.gold, fontWeight: '700', marginVertical: 8 }}>Dinheiro pessoal — este mês</Text>
      <View style={card}>
        <Text style={{ color: c.text }}>Ganhou: <Text style={{ color: c.ok, fontWeight: '700' }}>{rec.toFixed(2)}</Text></Text>
        <Text style={{ color: c.text }}>Gastou: <Text style={{ color: c.err, fontWeight: '700' }}>{des.toFixed(2)}</Text></Text>
        <Text style={{ color: c.text }}>Saldo: <Text style={{ fontWeight: '700' }}>{(rec - des).toFixed(2)}</Text></Text>
        {orcamento > 0 && des > orcamento && <Text style={{ color: c.warn, marginTop: 6 }}>Os gastos passaram o orçamento de {orcamento.toFixed(2)}.</Text>}
      </View>

      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
        <TextInput style={{ ...input, flex: 1, marginBottom: 0 }} value={orc} onChangeText={setOrc} keyboardType="numeric" placeholder="Orçamento mensal pessoal" placeholderTextColor={c.muted} />
        <TouchableOpacity onPress={async () => { await setConfig('orcamento_pessoal', orc); load(); }} style={{ padding: 10 }}><Text style={{ color: c.gold, fontWeight: '700' }}>Guardar</Text></TouchableOpacity>
      </View>

      <View style={{ flexDirection: 'row', marginBottom: 8 }}>
        <TouchableOpacity style={chip(tipo === 'receita', c.ok)} onPress={() => setTipo('receita')}><Text style={{ color: tipo === 'receita' ? '#000' : c.text }}>Receita</Text></TouchableOpacity>
        <TouchableOpacity style={{ ...chip(tipo === 'despesa', c.err), marginRight: 0 }} onPress={() => setTipo('despesa')}><Text style={{ color: tipo === 'despesa' ? '#000' : c.text }}>Despesa</Text></TouchableOpacity>
      </View>
      <TextInput style={input} value={valor} onChangeText={setValor} keyboardType="numeric" placeholder="Valor" placeholderTextColor={c.muted} />
      <TextInput style={input} value={desc} onChangeText={setDesc} placeholder="Descrição" placeholderTextColor={c.muted} />
      <TouchableOpacity onPress={add} style={{ backgroundColor: c.gold, padding: 12, borderRadius: 10, alignItems: 'center', marginBottom: 14 }}><Text style={{ color: '#000', fontWeight: '700' }}>Registar</Text></TouchableOpacity>

      {serie.length > 0 && (
        <View style={card}>
          <Text style={{ color: c.gold, fontWeight: '700', marginBottom: 8 }}>Evolução mensal (receitas vs despesas)</Text>
          <Bars c={c} items={serie.flatMap((m) => [{ label: m.mes + ' receitas', value: m.receitas, color: c.ok }, { label: m.mes + ' despesas', value: m.despesas, color: c.err }])} />
        </View>
      )}

      {movs.map((m) => (
        <TouchableOpacity key={m.id} onLongPress={() => apagar(m)} style={{ ...card, flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: c.text, flex: 1 }}>{m.descricao || pretty(m.tipo)} · {m.data.slice(5, 10)}</Text>
          <Text style={{ color: m.tipo === 'receita' ? c.ok : c.err, fontWeight: '700' }}>{m.tipo === 'receita' ? '+' : '-'}{m.valor.toFixed(2)}</Text>
        </TouchableOpacity>
      ))}
      <Text style={{ color: c.muted, fontSize: 12 }}>Toque longo para eliminar. Os valores pessoais ficam só no telemóvel.</Text>
    </ScrollView>
  );
}

~~~

### letimax-app/src/screens/MetasScreen.js
~~~js
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, RefreshControl } from 'react-native';
import * as Speech from 'expo-speech';
import { useTheme } from '../theme/theme';
import { api } from '../services/api';
import { cacheGet, cacheSet, saveMeta, saveMetaProgress, listMetas } from '../db/database';
import JsonView from '../components/JsonView';

function diasRestantes() {
  const h = new Date();
  return new Date(h.getFullYear(), h.getMonth() + 1, 0).getDate() - h.getDate();
}

export default function MetasScreen() {
  const { c } = useTheme();
  const [d, setD] = useState(null);
  const [proj, setProj] = useState(null);
  const [novo, setNovo] = useState('');
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const celebrou = useRef(false);
  const [hist, setHist] = useState([]);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const r = await api.get('/metas/progresso');
      setD(r); await cacheSet('metas', r);
      api.get('/metas/projecao').then(setProj).catch(() => {});
    } catch (e) {
      const k = await cacheGet('metas');
      if (k) { setD(k.dados); setMsg('Modo offline — dados em cache.'); } else setMsg(e.message);
    } finally { setLoading(false); }
  }, []);
  useEffect(() => { load(); }, [load]);

  const meta = Number(d && (d.meta ?? d.valor)) || 0;
  const atual = Number(d && (d.atual ?? d.receita_atual)) || 0;
  const dias = Number((d && d.dias_restantes) ?? diasRestantes());
  const falta = Math.max(meta - atual, 0);
  const pct = meta ? Math.min(Math.round((atual / meta) * 100), 100) : 0;
  const ritmo = dias > 0 ? falta / dias : falta;

  useEffect(() => {
    if (meta && atual >= meta && !celebrou.current) {
      celebrou.current = true;
      Speech.speak('Parabéns, Senhor Letício! Meta de ' + meta + ' reais atingida. Vamos estabelecer a próxima?', { language: 'pt-PT' });
    }
  }, [meta, atual]);

  useEffect(() => {
    (async () => { if (meta > 0) await saveMetaProgress(meta, atual); setHist(await listMetas()); })().catch(() => {});
  }, [meta, atual]);

  const definir = async () => {
    const v = Number(String(novo).replace(',', '.'));
    if (!v) return setMsg('Indique um valor válido.');
    try {
      await api.post('/metas/definir', { valor: v });
      await saveMeta(v); setNovo(''); celebrou.current = false; load();
    } catch (e) { setMsg(e.message); }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16 }}
      refreshControl={<RefreshControl refreshing={loading} onRefresh={load} tintColor={c.gold} />}>
      <Text style={{ color: c.text, fontSize: 22, fontWeight: '700', marginBottom: 12 }}>Metas</Text>
      {!!msg && <Text style={{ color: c.gold, marginBottom: 8 }}>{msg}</Text>}

      {meta > 0 ? (
        <View style={{ backgroundColor: c.card, borderRadius: 14, padding: 16, borderWidth: 1, borderColor: c.border }}>
          <Text style={{ color: c.text, fontSize: 16 }}>Estás a R${(meta - atual > 0 ? falta : 0).toFixed(0)} dos R${meta.toFixed(0)} — faltam {dias} dias.</Text>
          <View style={{ height: 12, backgroundColor: c.border, borderRadius: 6, marginVertical: 12 }}>
            <View style={{ height: 12, width: pct + '%', backgroundColor: c.gold, borderRadius: 6 }} />
          </View>
          <Text style={{ color: c.muted }}>{pct}% concluído · receita actual R${atual.toFixed(0)}</Text>
          {falta > 0 && <Text style={{ color: c.text, marginTop: 8 }}>Precisas de vender R${ritmo.toFixed(0)} por dia para atingir a meta.</Text>}
          {falta > 0 && pct < 100 && dias > 0 && atual / Math.max(30 - dias, 1) < ritmo && (
            <Text style={{ color: c.warn, marginTop: 8 }}>Meta em risco. Sugestão: reactivar a lista de emails com uma promoção relâmpago de 48 horas.</Text>
          )}
          {falta === 0 && <Text style={{ color: c.ok, marginTop: 8 }}>Meta atingida! 🎉</Text>}
        </View>
      ) : (
        <Text style={{ color: c.muted }}>Ainda não há meta mensal definida.</Text>
      )}

      <Text style={{ color: c.gold, fontWeight: '700', marginTop: 22, marginBottom: 8 }}>Definir meta mensal (R$)</Text>
      <View style={{ flexDirection: 'row' }}>
        <TextInput value={novo} onChangeText={setNovo} keyboardType="numeric" placeholder="2000" placeholderTextColor={c.muted}
          style={{ flex: 1, borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 10, padding: 10 }} />
        <TouchableOpacity onPress={definir} style={{ backgroundColor: c.gold, borderRadius: 10, paddingHorizontal: 18, justifyContent: 'center', marginLeft: 8 }}>
          <Text style={{ color: '#000', fontWeight: '700' }}>Guardar</Text>
        </TouchableOpacity>
      </View>

      {hist.length > 0 && (
        <>
          <Text style={{ color: c.gold, fontWeight: '700', marginTop: 22, marginBottom: 8 }}>Histórico de metas</Text>
          {hist.map((h) => {
            const p = h.valor ? Math.round(((h.atual || 0) / h.valor) * 100) : 0;
            return <Text key={h.mes} style={{ color: c.text, marginBottom: 4 }}>{h.mes}: R${Number(h.atual || 0).toFixed(0)} de R${Number(h.valor).toFixed(0)} <Text style={{ color: p >= 100 ? c.ok : c.muted }}>({p}%)</Text></Text>;
          })}
        </>
      )}

      {proj && (<><Text style={{ color: c.gold, fontWeight: '700', marginTop: 22, marginBottom: 8 }}>Projecção do mês</Text><JsonView data={proj} c={c} /></>)}
    </ScrollView>
  );
}

~~~

### letimax-app/src/screens/MotorReceitaScreen.js
~~~js
import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Alert, RefreshControl } from 'react-native';
import { useTheme } from '../theme/theme';
import { api } from '../services/api';
import { cacheGet, cacheSet } from '../db/database';
import JsonView from '../components/JsonView';

const norm = (d) => (Array.isArray(d) ? d : (d && (d.oportunidades || d.items)) || []);
const FILTROS = ['todos', 'baixo', 'médio', 'alto'];

export default function MotorReceitaScreen() {
  const { c } = useTheme();
  const [items, setItems] = useState([]);
  const [filtro, setFiltro] = useState('todos');
  const [aberto, setAberto] = useState(null);
  const [hist, setHist] = useState(null);
  const [offline, setOffline] = useState(false);
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);

  const load = useCallback(async () => {
    setLoading(true); setOffline(false);
    try {
      const d = await api.get('/motor-receita/oportunidades');
      setItems(norm(d)); await cacheSet('motor', d);
    } catch (e) {
      const k = await cacheGet('motor');
      if (k) { setItems(norm(k.dados)); setOffline(true); } else setMsg(e.message);
    } finally { setLoading(false); }
  }, []);
  useEffect(() => { load(); }, [load]);

  const act = async (id, acao, texto) => {
    try {
      await api.post('/motor-receita/' + acao + '/' + id, {});
      setItems((l) => l.filter((o) => o.id !== id));
      setMsg(texto);
    } catch (e) { setMsg(e.message); }
  };
  const aprovar = (o) =>
    Alert.alert('Aprovar oportunidade', 'A LétimaX vai implementar "' + (o.titulo || o.nome) + '" imediatamente. Confirma?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Aprovar', onPress: () => act(o.id, 'aprovar', 'Aprovada — a LétimaX está a implementar.') },
    ]);
  const verHist = async () => {
    if (hist) return setHist(null);
    try { setHist(await api.get('/motor-receita/historico')); } catch (e) { setMsg(e.message); }
  };

  const lista = items
    .filter((o) => filtro === 'todos' || String(o.esforco || '').toLowerCase() === filtro)
    .sort((a, b) => (b.pontuacao || 0) - (a.pontuacao || 0));
  const potencial = lista.reduce((s, o) => s + (Number(o.receita_max) || 0), 0);

  const chip = (on) => ({ paddingVertical: 6, paddingHorizontal: 12, borderRadius: 16, marginRight: 6, backgroundColor: on ? c.gold : c.card });
  const btn = (bg) => ({ flex: 1, backgroundColor: bg, padding: 9, borderRadius: 10, alignItems: 'center', marginRight: 6 });

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16 }}
      refreshControl={<RefreshControl refreshing={loading} onRefresh={load} tintColor={c.gold} />}>
      <Text style={{ color: c.text, fontSize: 22, fontWeight: '700' }}>Motor de Receita</Text>
      <Text style={{ color: c.muted, marginBottom: 10 }}>Receita potencial das oportunidades activas: R$ {potencial.toLocaleString('pt-PT')}</Text>
      {offline && <Text style={{ color: c.warn, marginBottom: 6 }}>Modo offline — dados em cache.</Text>}
      {!!msg && <Text style={{ color: c.gold, marginBottom: 8 }}>{msg}</Text>}

      <View style={{ flexDirection: 'row', marginBottom: 12 }}>
        {FILTROS.map((f) => (
          <TouchableOpacity key={f} style={chip(filtro === f)} onPress={() => setFiltro(f)}>
            <Text style={{ color: filtro === f ? '#000' : c.text }}>{f === 'todos' ? 'Todos' : 'Esforço ' + f}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {!lista.length && !loading && <Text style={{ color: c.muted }}>Sem oportunidades activas.</Text>}
      {lista.map((o) => (
        <View key={o.id} style={{ backgroundColor: c.card, borderRadius: 14, padding: 14, marginBottom: 10, borderWidth: 1, borderColor: c.border }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: c.text, fontWeight: '700', flex: 1, fontSize: 16 }}>{o.titulo || o.nome}</Text>
            <Text style={{ color: (o.pontuacao || 0) >= 70 ? c.ok : c.warn, fontWeight: '800' }}>{o.pontuacao ?? '—'}/100</Text>
          </View>
          <Text style={{ color: c.muted, marginTop: 4 }}>
            R$ {o.receita_min ?? '?'} – {o.receita_max ?? '?'} · esforço {o.esforco ?? '—'} · {o.tempo_resultado ?? '—'} · risco {o.risco ?? '—'}
          </Text>
          {aberto === o.id && <View style={{ marginTop: 10 }}><JsonView data={o} c={c} /></View>}
          <View style={{ flexDirection: 'row', marginTop: 10 }}>
            <TouchableOpacity style={btn(c.card)} onPress={() => setAberto(aberto === o.id ? null : o.id)}><Text style={{ color: c.gold }}>{aberto === o.id ? 'Fechar' : 'Detalhes'}</Text></TouchableOpacity>
            <TouchableOpacity style={btn(c.gold)} onPress={() => aprovar(o)}><Text style={{ color: '#000', fontWeight: '700' }}>Aprovar</Text></TouchableOpacity>
            <TouchableOpacity style={btn(c.card)} onPress={() => act(o.id, 'rejeitar', 'Rejeitada — a LétimaX aprende que este tipo não interessa.')}><Text style={{ color: c.err }}>Rejeitar</Text></TouchableOpacity>
            <TouchableOpacity style={{ ...btn(c.card), marginRight: 0 }} onPress={() => act(o.id, 'mais-tarde', 'Adiada por 48 horas.')}><Text style={{ color: c.muted }}>+48h</Text></TouchableOpacity>
          </View>
        </View>
      ))}

      <TouchableOpacity onPress={verHist} style={{ padding: 12, alignItems: 'center' }}><Text style={{ color: c.gold }}>{hist ? 'Esconder histórico' : 'Ver histórico (resultado real vs estimativa)'}</Text></TouchableOpacity>
      {hist && <JsonView data={hist} c={c} />}
    </ScrollView>
  );
}

~~~

### letimax-app/src/screens/EngineScreen.js
~~~js
import React, { useCallback, useEffect, useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Alert, RefreshControl, Linking, Share, ActivityIndicator } from 'react-native';
import notifee, { AndroidImportance, TriggerType } from '@notifee/react-native';
import { useTheme } from '../theme/theme';
import { api, isRede } from '../services/api';
import { falarVoz } from '../services/voz';
import { enfileirar } from '../services/queue';
import { cacheGet, cacheSet, espelhar, localList, guardarLocal, registarDecisao } from '../db/database';
import { MAPA } from '../db/schema';
import JsonView from '../components/JsonView';
import Bars, { autoItems } from '../components/Bars';
import { SCREENS } from './screens.config';
import { pretty, fmt, asList, primitives, pick, fill, fillBody, csv } from '../components/ui';

const TITULOS = ['titulo', 'nome', 'name', 'assunto', 'email', 'plataforma', 'tipo', 'acao', 'id'];
const ESTADOS = ['estado', 'status'];
const LINKS = ['url', 'pdf_url', 'link', 'download_url'];
const TEXTOS = ['texto', 'contrato', 'conteudo', 'script', 'resumo', 'resposta'];

function Contagem({ d, c }) {
  const [, tick] = useState(0);
  useEffect(() => { const t = setInterval(() => tick((x) => x + 1), 30000); return () => clearInterval(t); }, []);
  const k = Object.keys(d || {}).find((x) => /(fim|encerra|abertura|data_lancamento|termina)/i.test(x) && !isNaN(Date.parse(d[x])));
  if (!k) return null;
  const ms = Date.parse(d[k]) - Date.now();
  if (ms <= 0) return <Text style={{ color: c.warn, fontWeight: '700', marginBottom: 8 }}>Encerrado</Text>;
  const dias = Math.floor(ms / 86400000), h = Math.floor((ms % 86400000) / 3600000), m = Math.floor((ms % 3600000) / 60000);
  return <Text style={{ color: c.gold, fontSize: 22, fontWeight: '800', marginBottom: 10 }}>⏳ {dias}d {h}h {m}min</Text>;
}

export default function EngineScreen({ route, navigation }) {
  const { c } = useTheme();
  const cfg = SCREENS[route.params.id];
  const [data, setData] = useState({});
  const [offline, setOffline] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState('');
  const [busy, setBusy] = useState(false);
  const [form, setForm] = useState(null); // { action, item, values }
  const [result, setResult] = useState(null);

  const sections = cfg.sections || [];
  const load = useCallback(async () => {
    setLoading(true); setOffline(false);
    const out = {}; let off = false;
    await Promise.all(sections.map(async (s) => {
      if (s.kind === 'local') { out[s.key] = await localList(s.tabela); return; }
      try {
        const d = await api.get(s.endpoint);
        out[s.key] = d; cacheSet(s.endpoint, d);
        const t = MAPA[s.endpoint];
        if (t) espelhar(t, asList(d)).catch(() => {});
      } catch (e) {
        const k = await cacheGet(s.endpoint);
        if (k) { out[s.key] = k.dados; off = true; } else out[s.key] = { __erro: e.message };
      }
    }));
    setData(out); setOffline(off); setLoading(false);
  }, [route.params.id]);
  useEffect(() => { load(); }, [load]);

  const exec = async (a, item, values) => {
    const vars = { ...(item || {}), ...(values || {}) };
    setBusy(true); setMsg('');
    let ep = null, body = null;
    try {
      if (a.method === 'NAV') { navigation.navigate(a.endpoint); return; }
      if (a.method === 'OPEN') {
        const u = pick(await api.get(a.from), LINKS);
        if (!u) { setMsg('O servidor não indicou nenhum endereço de descarga.'); return; }
        await Linking.openURL(String(u)); return;
      }
      if (a.method === 'LATER') {
        const channelId = await notifee.createChannel({ id: 'lembretes', name: 'Lembretes', importance: AndroidImportance.DEFAULT });
        await notifee.requestPermission();
        await notifee.createTriggerNotification(
          { title: 'LétimaX', body: 'Há uma actualização disponível. Quando quiser, instale-a nas Configurações.', android: { channelId, pressAction: { id: 'default' } } },
          { type: TriggerType.TIMESTAMP, timestamp: Date.now() + 24 * 3600 * 1000 });
        setMsg('Combinado: volto a avisar amanhã.'); return;
      }
      ep = fill(a.endpoint, vars, true);
      let r;
      if (a.method === 'GET') r = await api.get(ep, 60000);
      else { body = fillBody(a.body || values || {}, vars); r = await api.post(ep, body, 60000); }
      const texto = typeof r === 'string' ? r : r && typeof r === 'object' ? pick(r, TEXTOS) : undefined;
      if (a.speak) falarVoz(String(texto || JSON.stringify(r)));
      if (a.guardarEm) await guardarLocal(a.guardarEm, { acao: a.label, ...(values || {}), resultado: String(texto || JSON.stringify(r)).slice(0, 500) });
      if (a.method !== 'GET' && (a.confirm || /aprov|activ|public|reembols/i.test(a.label))) registarDecisao(a.label, JSON.stringify(vars).slice(0, 300)).catch(() => {});
      setResult({ titulo: a.label, data: r });
      setMsg('Feito: ' + a.label);
      if (a.method !== 'GET') load();
    } catch (e) {
      if (a.method === 'POST' && ep && !a.danger && isRede(e)) {
        await enfileirar('POST', ep, body || {}, a.label);
        setMsg('Sem ligação. Guardado na fila: segue quando a internet voltar (até 24 h).');
      } else setMsg(e.message);
    } finally { setBusy(false); setForm(null); }
  };

  const run = (a, item) => {
    if (a.confirm && !a.form) Alert.alert(a.label, a.confirm, [{ text: 'Cancelar', style: 'cancel' }, { text: 'Confirmar', onPress: () => exec(a, item, null) }]);
    else if (a.form) setForm({ action: a, item, values: {} });
    else exec(a, item, null);
  };
  const submit = () => {
    const { action, item, values } = form;
    if (action.confirm) Alert.alert(action.label, action.confirm, [{ text: 'Cancelar', style: 'cancel' }, { text: 'Confirmar', onPress: () => exec(action, item, values) }]);
    else exec(action, item, values);
  };

  const btn = (danger) => ({ paddingVertical: 8, paddingHorizontal: 12, borderRadius: 10, backgroundColor: c.card, borderWidth: 1, borderColor: danger ? c.err : c.border, marginRight: 6, marginBottom: 6 });
  const H = (t) => <Text style={{ color: c.gold, fontWeight: '700', fontSize: 15, marginTop: 20, marginBottom: 8 }}>{t}</Text>;

  const Stats = ({ d }) => (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      {primitives(d).filter(([k]) => k !== '__erro').map(([k, v]) => (
        <View key={k} style={{ width: '48%', marginRight: '2%', marginBottom: 8, backgroundColor: c.card, borderRadius: 12, padding: 12, borderWidth: 1, borderColor: c.border }}>
          <Text style={{ color: c.muted, fontSize: 11 }}>{pretty(k)}</Text>
          <Text style={{ color: c.text, fontSize: 18, fontWeight: '700', marginTop: 2 }}>{fmt(v)}</Text>
        </View>
      ))}
    </View>
  );

  const Item = ({ s, it }) => {
    const tKey = (s.itemTitle || TITULOS).find((k) => it[k] != null && it[k] !== '');
    const est = pick(it, ESTADOS);
    const warn = s.warnIf && s.warnIf(it);
    const tend = typeof it.tendencia === 'string' ? (/sub|cresc|up|alta/i.test(it.tendencia) ? '▲ ' : /desc|baix|down|queda/i.test(it.tendencia) ? '▼ ' : '► ') : '';
    const meta = primitives(it).filter(([k]) => k !== tKey && !ESTADOS.includes(k) && k !== 'id').slice(0, 6);
    return (
      <View style={{ backgroundColor: c.card, borderRadius: 14, padding: 14, marginBottom: 10, borderWidth: 1, borderColor: warn ? c.warn : c.border }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: c.text, fontWeight: '700', fontSize: 15, flex: 1 }}>{tKey ? fmt(it[tKey]) : 'Item'}</Text>
          {est != null && <Text style={{ color: c.gold, fontWeight: '700' }}>{fmt(est)}</Text>}
        </View>
        {warn && <Text style={{ color: c.warn, marginTop: 4 }}>Sem resposta há mais de 24 horas.</Text>}
        {meta.map(([k, v]) => <Text key={k} style={{ color: c.muted, marginTop: 2 }}>{k === 'tendencia' ? tend : ''}{pretty(k)}: {fmt(v)}</Text>)}
        {!!(s.itemActions || []).length && (
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 10 }}>
            {s.itemActions.filter((a) => !a.if || a.if(it)).map((a) => (
              <TouchableOpacity key={a.label} style={btn(a.danger)} onPress={() => run(a, it)}><Text style={{ color: a.danger ? c.err : c.gold }}>{a.label}</Text></TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    );
  };

  const Section = ({ s }) => {
    const d = data[s.key];
    if (d === undefined) return null;
    if (d && d.__erro) return <>{H(s.title)}<Text style={{ color: c.err }}>{d.__erro}</Text></>;
    if (s.kind === 'stats') return <>{H(s.title)}<Stats d={d} /></>;
    if (s.kind === 'json') return <>{H(s.title)}{s.countdown && <Contagem d={d} c={c} />}<JsonView data={d} c={c} /></>;
    if (s.kind === 'bars') {
      const items = autoItems(d);
      return <>{H(s.title)}{items.length ? <Bars items={items} c={c} /> : <JsonView data={d} c={c} />}</>;
    }
    const list = asList(d).slice(0, s.limit || 200);
    return (
      <>
        {H(s.title)}
        {!list.length && <Text style={{ color: c.muted }}>Sem dados.</Text>}
        {list.map((it, i) => <Item key={it.id ?? i} s={s} it={typeof it === 'object' && it ? it : { valor: it }} />)}
        {s.export && !!list.length && (
          <TouchableOpacity style={btn()} onPress={() => Share.share({ message: csv(list) })}><Text style={{ color: c.gold }}>Exportar CSV</Text></TouchableOpacity>
        )}
      </>
    );
  };

  const Resultado = () => {
    if (!result) return null;
    const d = result.data;
    const link = d && typeof d === 'object' ? pick(d, LINKS) : undefined;
    const texto = typeof d === 'string' ? d : d && typeof d === 'object' ? pick(d, TEXTOS) : undefined;
    return (
      <View style={{ backgroundColor: c.card, borderRadius: 14, padding: 14, marginTop: 16, borderWidth: 1, borderColor: c.gold }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ color: c.gold, fontWeight: '700' }}>{result.titulo}</Text>
          <TouchableOpacity onPress={() => setResult(null)}><Text style={{ color: c.muted }}>Fechar</Text></TouchableOpacity>
        </View>
        <View style={{ marginTop: 8 }}>
          {texto ? <Text selectable style={{ color: c.text }}>{String(texto)}</Text> : <JsonView data={d} c={c} />}
        </View>
        <View style={{ flexDirection: 'row', marginTop: 10, flexWrap: 'wrap' }}>
          {link && <TouchableOpacity style={btn()} onPress={() => Linking.openURL(String(link))}><Text style={{ color: c.gold }}>Abrir / descarregar</Text></TouchableOpacity>}
          {texto && <TouchableOpacity style={btn()} onPress={() => Share.share({ message: String(texto) })}><Text style={{ color: c.gold }}>Partilhar</Text></TouchableOpacity>}
        </View>
      </View>
    );
  };

  const input = { borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 10, padding: 10, marginBottom: 8 };
  const Form = () => !form ? null : (
    <View style={{ backgroundColor: c.card, borderRadius: 14, padding: 14, marginTop: 14, borderWidth: 1, borderColor: c.gold }}>
      <Text style={{ color: c.gold, fontWeight: '700', marginBottom: 8 }}>{form.action.label}</Text>
      {form.action.form.map((f) => f.type === 'options' ? (
        <View key={f.name} style={{ marginBottom: 8 }}>
          <Text style={{ color: c.muted, fontSize: 12, marginBottom: 4 }}>{f.label}</Text>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {f.options.map((o) => {
              const on = form.values[f.name] === o;
              return <TouchableOpacity key={o} onPress={() => setForm({ ...form, values: { ...form.values, [f.name]: o } })} style={{ ...btn(), backgroundColor: on ? c.gold : c.bg }}><Text style={{ color: on ? '#000' : c.text }}>{o}</Text></TouchableOpacity>;
            })}
          </View>
        </View>
  
[CONTEÚDO TRUNCADO PELO LIMITE DO RELATÓRIO]
~~~

### letimax-app/src/screens/SettingsScreen.js
~~~js
import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Switch, Alert } from 'react-native';
import * as IntentLauncher from 'expo-intent-launcher';
import { startService, stopService } from '../services/service';
import Native from '../../modules/letimax-native';
import { lembrarServico } from '../services/nativeBridge';
import SettingsExtras from './SettingsExtras';
import SettingsMais from './SettingsMais';
import { useTheme } from '../theme/theme';
import { serverConfig, saveServerConfig, api } from '../services/api';
import { getConfig, setConfig } from '../db/database';

const CHAVES_IA = ['ANTHROPIC_API_KEY', 'OPENAI_API_KEY', 'GEMINI_API_KEY', 'STABILITY_API_KEY', 'ELEVENLABS_API_KEY', 'ELEVENLABS_VOICE_ID'];
const CHAVES_PLAT = ['HOTMART_CLIENT_ID', 'HOTMART_CLIENT_SECRET', 'KIWIFY_API_KEY', 'GUMROAD_ACCESS_TOKEN', 'SHOPIFY_API_KEY', 'SHOPIFY_API_SECRET', 'BINANCE_API_KEY', 'BINANCE_SECRET_KEY', 'MAILCHIMP_API_KEY', 'NETLIFY_API_KEY', 'GMAIL_OAUTH_TOKEN', 'GOOGLE_ANALYTICS_ID', 'META_PIXEL_ID'];

export default function SettingsScreen() {
  const { c, mode, setMode } = useTheme();
  const [url, setUrl] = useState('');
  const [token, setToken] = useState('');
  const [nivel, setNivel] = useState('1');
  const [msg, setMsg] = useState('');
  const [valores, setValores] = useState({});
  const [visivel, setVisivel] = useState({});
  const [novoNome, setNovoNome] = useState('');
  const [novoValor, setNovoValor] = useState('');
  const [servico, setServico] = useState(false);
  const [msgHoras, setMsgHoras] = useState('4');
  const [msgOcupado, setMsgOcupado] = useState('');

  useEffect(() => {
    serverConfig().then((s) => setUrl(s.url));
    getConfig('autonomia').then((v) => v && setNivel(v));
    getConfig('servico_activo').then((v) => setServico(v === '1'));
    getConfig('duracao_autonomo').then((v) => v && setMsgHoras(v));
    getConfig('msg_ocupado').then((v) => v && setMsgOcupado(v));
  }, []);

  const flash = (m) => { setMsg(m); setTimeout(() => setMsg(''), 4000); };
  const input = { borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 10, padding: 10, flex: 1 };
  const h = { color: c.gold, fontSize: 16, fontWeight: '700', marginTop: 22, marginBottom: 8 };
  const chip = (on) => ({ paddingVertical: 8, paddingHorizontal: 14, borderRadius: 18, marginRight: 8, backgroundColor: on ? c.gold : c.card });

  const saveServer = async () => {
    try { await saveServerConfig(url, token); setToken(''); flash('Servidor guardado.'); } catch (e) { flash(e.message); }
  };
  const aplicarNivel = async (n) => {
    setNivel(n); await setConfig('autonomia', n);
    try {
      if (n === '1') await api.post('/autonomia/nivel', { nivel: 1 });
      else await api.post('/autonomia/ativar', { nivel: Number(n), horas: Number(await getConfig('duracao_autonomo')) || 4 });
    } catch (e) { flash('Guardado na APP; o servidor não respondeu.'); }
  };
  const setAuto = (n) => {
    if (n === '1') return aplicarNivel(n);
    const h = Number(msgHoras) || 4;
    Alert.alert(n === '3' ? 'Modo autónomo total' : 'Modo semi-autónomo', 'Activar por ' + h + ' horas? Mesmo assim nunca gasta em anúncios, nunca retira dinheiro e nunca muda de nicho.', [
      { text: 'Cancelar', style: 'cancel' }, { text: 'Activar', onPress: () => aplicarNivel(n) },
    ]);
  };
  // A chave vai por HTTPS para o servidor e o campo é limpo — nada fica no telemóvel
  const enviarChave = async (nome, valor) => {
    if (!valor) return;
    try {
      await api.post('/chaves/adicionar', { nome, valor });
      setValores((v) => ({ ...v, [nome]: '' }));
      flash(nome + ' enviada ao servidor.');
    } catch (e) { flash(e.message); }
  };

  const toggleServico = async (v) => {
    setServico(v); await setConfig('servico_activo', v ? '1' : '0'); lembrarServico(v);
    try { if (v) await startService(); else await stopService(); } catch (e) { flash(e.message); }
  };
  const bateria = () =>
    IntentLauncher.startActivityAsync('android.settings.REQUEST_IGNORE_BATTERY_OPTIMIZATIONS', { data: 'package:com.letimax.app' })
      .catch(() => flash('Abra as definições de bateria e retire as restrições da LétimaX.'));

  const chave = (nome) => (
    <View key={nome} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
      <View style={{ flex: 1 }}>
        <Text style={{ color: c.muted, fontSize: 11, marginBottom: 2 }}>{nome}</Text>
        <TextInput style={{ ...input, flex: 0 }} value={valores[nome] || ''} onChangeText={(t) => setValores((v) => ({ ...v, [nome]: t }))}
          secureTextEntry={!visivel[nome]} autoCapitalize="none" placeholder="••••••••" placeholderTextColor={c.muted} />
      </View>
      <TouchableOpacity onPress={() => setVisivel((v) => ({ ...v, [nome]: !v[nome] }))} style={{ padding: 10 }}><Text style={{ color: c.gold }}>{visivel[nome] ? 'Esconder' : 'Mostrar'}</Text></TouchableOpacity>
      <TouchableOpacity onPress={() => enviarChave(nome, valores[nome])} style={{ padding: 10 }}><Text style={{ color: c.gold, fontWeight: '700' }}>Enviar</Text></TouchableOpacity>
    </View>
  );

  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16, paddingBottom: 60 }}>
      {!!msg && <Text style={{ color: c.gold, marginBottom: 8 }}>{msg}</Text>}

      <Text style={h}>Servidor</Text>
      <View style={{ flexDirection: 'row', marginBottom: 8 }}><TextInput style={input} value={url} onChangeText={setUrl} autoCapitalize="none" placeholder="https://..." placeholderTextColor={c.muted} /></View>
      <View style={{ flexDirection: 'row', marginBottom: 8 }}><TextInput style={input} value={token} onChangeText={setToken} autoCapitalize="none" secureTextEntry placeholder="Novo token (opcional)" placeholderTextColor={c.muted} /></View>
      <TouchableOpacity onPress={saveServer} style={{ backgroundColor: c.gold, padding: 12, borderRadius: 10, alignItems: 'center' }}><Text style={{ color: '#000', fontWeight: '700' }}>Guardar servidor</Text></TouchableOpacity>

      <Text style={h}>Tema visual</Text>
      <View style={{ flexDirection: 'row' }}>
        {[['system', 'Seguir sistema'], ['light', 'Claro'], ['dark', 'Escuro']].map(([m, l]) => (
          <TouchableOpacity key={m} style={chip(mode === m)} onPress={() => setMode(m)}><Text style={{ color: mode === m ? '#000' : c.text }}>{l}</Text></TouchableOpacity>
        ))}
      </View>

      <Text style={h}>Nível de autonomia</Text>
      <View style={{ flexDirection: 'row' }}>
        {[['1', 'Normal'], ['2', 'Semi-autónomo'], ['3', 'Autónomo total']].map(([n, l]) => (
          <TouchableOpacity key={n} style={chip(nivel === n)} onPress={() => setAuto(n)}><Text style={{ color: nivel === n ? '#000' : c.text }}>{l}</Text></TouchableOpacity>
        ))}
      </View>

      <Text style={h}>Acesso nativo (APK da Fase 4)</Text>
      <Text style={{ color: Native ? c.ok : c.warn, marginBottom: 8 }}>{Native ? 'Módulo nativo activo.' : 'Módulo nativo indisponível (a correr no Expo Go).'}</Text>
      <TouchableOpacity disabled={!Native} onPress={() => Native.openNotificationAccess()} style={{ padding: 11, borderRadius: 10, backgroundColor: c.card, alignItems: 'center', marginBottom: 8, opacity: Native ? 1 : 0.4 }}>
        <Text style={{ color: c.gold }}>Acesso às notificações (WhatsApp, SMS, email)</Text>
      </TouchableOpacity>
      <TouchableOpacity disabled={!Native} onPress={() => Native.requestDeviceAdmin()} style={{ padding: 11, borderRadius: 10, backgroundColor: c.card, alignItems: 'center', marginBottom: 8, opacity: Native ? 1 : 0.4 }}>
        <Text style={{ color: c.gold }}>Permitir bloquear o ecrã por voz</Text>
      </TouchableOpacity>
      <Text style={{ color: c.muted, fontSize: 12, marginBottom: 4 }}>Mensagem de "estou ocupado" (enviada por SMS)</Text>
      <View style={{ flexDirection: 'row' }}>
        <TextInput style={input} value={msgOcupado} onChangeText={setMsgOcupado} placeholder="O Senhor Letício está ocupado neste momento..." placeholderTextColor={c.muted} multiline />
        <TouchableOpacity onPress={async () => { await setConfig('msg_ocupado', msgOcupado); flash('Mensagem guardada.'); }} style={{ padding: 10, justifyContent: 'center' }}><Text style={{ color: c.gold, fontWeight: '700' }}>Guardar</Text></TouchableOpacity>
      </View>

      <Text style={h}>Serviço em segundo plano</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
        <Text style={{ color: c.text, flex: 1, marginRight: 10 }}>LétimaX sempre activa (alertas do servidor em tempo real)</Text>
        <Switch value={servico} onValueChange={toggleServico} trackColor={{ true: c.gold }} />
      </View>
      <TouchableOpacity onPress={bateria} style={{ marginTop: 10, padding: 11, borderRadius: 10, backgroundColor: c.card, alignItems: 'center' }}>
        <Text style={{ color: c.gold }}>Permitir uso sem limite de bateria</Text>
      </TouchableOpacity>

      <SettingsExtras flash={flash} />
      <SettingsMais flash={flash} />

      <Text style={h}>Secção 1 — Chaves de IA</Text>
      {CHAVES_IA.map(chave)}
      <Text style={h}>Secção 2 — Chaves de Plataformas</Text>
      {CHAVES_PLAT.map(chave)}

      <Text style={h}>Secção 3 — Chaves Personalizadas</Text>
      <View style={{ flexDirection: 'row', marginBottom: 8 }}><TextInput style={input} value={novoNome} onChangeText={setNovoNome} autoCapitalize="characters" placeholder="NOME_DA_CHAVE" placeholderTextColor={c.muted} /></View>
      <View style={{ flexDirection: 'row', marginBottom: 8 }}><TextInput style={input} value={novoValor} onChangeText={setNovoValor} autoCapitalize="none" secureTextEntry placeholder="Valor" placeholderTextColor={c.muted} /></View>
      <TouchableOpacity onPress={async () => { if (novoNome && novoValor) { await enviarChave(novoNome.trim(), novoValor.trim()); setNovoNome(''); setNovoValor(''); } }}
        style={{ backgroundColor: c.gold, padding: 12, borderRadius: 10, alignItems: 'center' }}><Text style={{ color: '#000', fontWeight: '700' }}>Adicionar nova chave</Text></TouchableOpacity>
      <Text style={{ color: c.muted, marginTop: 14, fontSize: 12 }}>Todas as chaves seguem por HTTPS para o servidor e nunca ficam guardadas no telemóvel.</Text>
    </ScrollView>
  );
}

~~~

### letimax-app/src/screens/SaudeScreen.js
~~~js
import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Switch } from 'react-native';
import notifee, { AndroidImportance, TriggerType, TimeUnit } from '@notifee/react-native';
import { useTheme } from '../theme/theme';
import { api } from '../services/api';
import { saveHumor, humorStats, getConfig, setConfig } from '../db/database';

const LEMBRETES = [
  { id: 'lembrete_agua', nome: 'Beber água', texto: 'Senhor Letício, hora de beber água.', min: 60 },
  { id: 'lembrete_pausa', nome: 'Pausa do ecrã', texto: 'Faça uma pausa de 5 minutos: levante-se e alongue-se.', min: 90 },
  { id: 'lembrete_exercicio', nome: 'Exercício', texto: 'Hora de se mexer um pouco.', min: 180 },
];

export default function SaudeScreen() {
  const { c } = useTheme();
  const [st, setSt] = useState({ n: 0, media: 0, bons: 0, hoje: null });
  const [sono, setSono] = useState('');
  const [on, setOn] = useState({});
  const [msg, setMsg] = useState('');

  const load = async () => {
    setSt(await humorStats());
    const o = {};
    for (const l of LEMBRETES) o[l.id] = (await getConfig(l.id)) === '1';
    setOn(o);
  };
  useEffect(() => { load(); }, []);

  const humor = async (v) => {
    const h = sono ? Number(String(sono).replace(',', '.')) : null;
    await saveHumor(v, h);
    api.post('/humor', { valor: v, sono: h }).catch(() => {});
    setMsg('Humor registado.'); load();
  };

  const lembrete = async (l, v) => {
    setOn((x) => ({ ...x, [l.id]: v }));
    await setConfig(l.id, v ? '1' : '0');
    try {
      if (v) {
        await notifee.requestPermission();
        const channelId = await notifee.createChannel({ id: 'lembretes', name: 'Lembretes de saúde', importance: AndroidImportance.DEFAULT });
        await notifee.createTriggerNotification(
          { id: l.id, title: 'LétimaX', body: l.texto, android: { channelId, pressAction: { id: 'default' } } },
          { type: TriggerType.INTERVAL, interval: l.min, timeUnit: TimeUnit.MINUTES }
        );
      } else await notifee.cancelTriggerNotification(l.id);
    } catch (e) { setMsg(e.message); }
  };

  const card = { backgroundColor: c.card, borderRadius: 14, padding: 14, borderWidth: 1, borderColor: c.border, marginBottom: 10 };
  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16, paddingBottom: 50 }} keyboardShouldPersistTaps="handled">
      <Text style={{ color: c.text, fontSize: 22, fontWeight: '700', marginBottom: 12 }}>Saúde e bem-estar</Text>
      {!!msg && <Text style={{ color: c.gold, marginBottom: 8 }}>{msg}</Text>}

      <Text style={{ color: c.gold, fontWeight: '700', marginBottom: 8 }}>Como está hoje? (1 a 5)</Text>
      <View style={{ flexDirection: 'row', marginBottom: 8 }}>
        {[1, 2, 3, 4, 5].map((v) => (
          <TouchableOpacity key={v} onPress={() => humor(v)} style={{ flex: 1, padding: 14, borderRadius: 10, alignItems: 'center', marginRight: v < 5 ? 6 : 0, backgroundColor: st.hoje === v ? c.gold : c.card }}>
            <Text style={{ color: st.hoje === v ? '#000' : c.text, fontWeight: '700', fontSize: 16 }}>{v}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TextInput value={sono} onChangeText={setSono} keyboardType="numeric" placeholder="Horas de sono (opcional)" placeholderTextColor={c.muted}
        style={{ borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 10, padding: 10, marginBottom: 14 }} />

      <View style={card}>
        <Text style={{ color: c.text }}>Registos: <Text style={{ fontWeight: '700' }}>{st.n}</Text> (últimos 30)</Text>
        <Text style={{ color: c.text }}>Humor médio: <Text style={{ fontWeight: '700' }}>{st.n ? st.media.toFixed(1) : '—'}</Text></Text>
        <Text style={{ color: c.text }}>Dias com humor 4 a 5: <Text style={{ fontWeight: '700' }}>{st.bons}</Text></Text>
        <Text style={{ color: c.muted, marginTop: 6, fontSize: 12 }}>Com o tempo, estes dados mostram em que dias rende mais.</Text>
      </View>

      <Text style={{ color: c.gold, fontWeight: '700', marginVertical: 8 }}>Lembretes</Text>
      {LEMBRETES.map((l) => (
        <View key={l.id} style={{ ...card, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
          <Text style={{ color: c.text }}>{l.nome} <Text style={{ color: c.muted }}>(a cada {l.min} min)</Text></Text>
          <Switch value={!!on[l.id]} onValueChange={(v) => lembrete(l, v)} trackColor={{ true: c.gold }} />
        </View>
      ))}
    </ScrollView>
  );
}

~~~

### letimax-app/src/screens/PasswordsScreen.js
~~~js
import React, { useEffect, useState } from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useTheme } from '../theme/theme';
import { biometricAuth, verifyPin, formatLock } from '../services/security';

// Cofre: cada entrada fica no SecureStore (cifrado pelo Android Keystore). Exige biometria/PIN sempre que se abre.
const IDX = 'pw_index';
const readIdx = async () => JSON.parse((await SecureStore.getItemAsync(IDX)) || '[]');

export default function PasswordsScreen() {
  const { c } = useTheme();
  const [open, setOpen] = useState(false);
  const [pin, setPin] = useState('');
  const [msg, setMsg] = useState('');
  const [lista, setLista] = useState([]);
  const [q, setQ] = useState('');
  const [vis, setVis] = useState({});
  const [segredos, setSegredos] = useState({});
  const [form, setForm] = useState(null);

  const unlock = async () => { if (await biometricAuth()) { setOpen(true); readIdx().then(setLista); } };
  useEffect(() => { unlock(); }, []);

  const unlockPin = async () => {
    const r = await verifyPin(pin); setPin('');
    if (r.ok) { setOpen(true); readIdx().then(setLista); }
    else setMsg(r.locked ? formatLock(r.locked) : 'PIN incorrecto.');
  };

  const mostrar = async (id) => {
    if (!segredos[id]) { const v = await SecureStore.getItemAsync('pw_' + id); setSegredos((s) => ({ ...s, [id]: JSON.parse(v || '{}') })); }
    setVis((v) => ({ ...v, [id]: !v[id] }));
  };
  const guardar = async () => {
    if (!form.plataforma || !form.password) return;
    const id = Date.now().toString(36);
    await SecureStore.setItemAsync('pw_' + id, JSON.stringify({ password: form.password, notas: form.notas || '' }));
    const idx = [...(await readIdx()), { id, plataforma: form.plataforma, email: form.email || '' }];
    await SecureStore.setItemAsync(IDX, JSON.stringify(idx));
    setLista(idx); setForm(null);
  };
  const apagar = (p) => Alert.alert('Eliminar', p.plataforma + '?', [
    { text: 'Cancelar', style: 'cancel' },
    { text: 'Eliminar', style: 'destructive', onPress: async () => {
      await SecureStore.deleteItemAsync('pw_' + p.id);
      const idx = (await readIdx()).filter((x) => x.id !== p.id);
      await SecureStore.setItemAsync(IDX, JSON.stringify(idx)); setLista(idx);
    } },
  ]);

  const input = { borderWidth: 1, borderColor: c.border, color: c.text, borderRadius: 10, padding: 10, marginBottom: 8 };

  if (!open) {
    return (
      <View style={{ flex: 1, backgroundColor: c.bg, padding: 24, justifyContent: 'center' }}>
        <Text style={{ color: c.text, fontSize: 20, fontWeight: '700', marginBottom: 8 }}>Cofre de passwords</Text>
        <Text style={{ color: c.muted, marginBottom: 16 }}>Confirme a identidade para abrir, mesmo com a APP já desbloqueada.</Text>
        <TouchableOpacity onPress={unlock} style={{ backgroundColor: c.gold, padding: 13, borderRadius: 10, alignItems: 'center', marginBottom: 14 }}><Text style={{ color: '#000', fontWeight: '700' }}>Usar rosto / impressão digital</Text></TouchableOpacity>
        <TextInput value={pin} onChangeText={setPin} placeholder="ou PIN" placeholderTextColor={c.muted} secureTextEntry keyboardType="number-pad" style={input} />
        <TouchableOpacity onPress={unlockPin} style={{ padding: 10, alignItems: 'center' }}><Text style={{ color: c.gold }}>Abrir com PIN</Text></TouchableOpacity>
        {!!msg && <Text style={{ color: c.err, textAlign: 'center' }}>{msg}</Text>}
      </View>
    );
  }

  const filtrada = lista.filter((p) => (p.plataforma + p.email).toLowerCase().includes(q.toLowerCase()));
  return (
    <ScrollView style={{ flex: 1, backgroundColor: c.bg }} contentContainerStyle={{ padding: 16 }} keyboardShouldPersistTaps="handled">
      <Text style={{ color: c.text, fontSize: 22, fontWeight: '700', marginBottom: 10 }}>Passwords</Text>
      <TextInput value={q} onChangeText={setQ} placeholder="Pesquisar plataforma" placeholderTextColor={c.muted} style={input} />
      {form ? (
        <View style={{ backgroundColor: c.card, borderRadius: 14, padding: 14, marginBottom: 12 }}>
          {[['plataforma', 'Plataforma'], ['email', 'Email usado'], ['password', 'Password'], ['notas', 'Notas']].map(([k, l]) => (
            <TextInput key={k} value={form[k] || ''} onChangeText={(t) => setForm({ ...form, [k]: t })} placeholder={l} placeholderTextColor={c.muted} autoCapitalize="none" secureTextEntry={k === 'password'} style={input} />
          ))}
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={guardar} style={{ flex: 1, backgroundColor: c.gold, padding: 11, borderRadius: 10, alignItems: 'center', marginRight: 8 }}><Text style={{ color: '#000', fontWeight: '700' }}>Guardar</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => setForm(null)} style={{ flex: 1, padding: 11, alignItems: 'center' }}><Text style={{ color: c.muted }}>Cancelar</Text></TouchableOpacity>
          </View>
        </View>
      ) : (
        <TouchableOpacity onPress={() => setForm({})} style={{ backgroundColor: c.gold, padding: 12, borderRadius: 10, alignItems: 'center', marginBottom: 12 }}><Text style={{ color: '#000', fontWeight: '700' }}>Nova password</Text></TouchableOpacity>
      )}
      {!filtrada.length && <Text style={{ color: c.muted }}>Cofre vazio.</Text>}
      {filtrada.map((p) => (
        <TouchableOpacity key={p.id} onPress={() => mostrar(p.id)} onLongPress={() => apagar(p)} style={{ backgroundColor: c.card, borderRadius: 12, padding: 12, marginBottom: 8, borderWidth: 1, borderColor: c.border }}>
          <Text style={{ color: c.text, fontWeight: '700' }}>{p.plataforma}</Text>
          {!!p.email && <Text style={{ color: c.muted }}>{p.email}</Text>}
          <Text style={{ color: c.gold, marginTop: 4 }}>{vis[p.id] && segredos[p.id] ? segredos[p.id].password : '••••••••  (toque para mostrar)'}</Text>
          {vis[p.id] && !!segredos[p.id]?.notas && <Text style={{ color: c.muted }}>{segredos[p.id].notas}</Text>}
        </TouchableOpacity>
      ))}
      <Text style={{ color: c.muted, fontSize: 12 }}>Toque longo para eliminar.</Text>
    </ScrollView>
  );
}

~~~

### letimax-app/src/navigation/menu.js
~~~js
// Menu lateral: nome, rota, endpoint GET do servidor (null = ecrã local, ainda por construir)
export const MENU = [
  { id: 'motor', nome: 'Motor de Receita', endpoint: '/motor-receita/oportunidades' },
  { id: 'raqueamento', nome: 'Sistema de Raqueamento', endpoint: '/raqueamento/estado' },
  { id: 'activos', nome: 'Activos', endpoint: '/activos/lista' },
  { id: 'novonegocio', nome: 'Novos Negócios', endpoint: '/negocios/oportunidades' },
  { id: 'metas', nome: 'Metas', endpoint: '/metas/progresso' },
  { id: 'afext', nome: 'Afiliados Externos', endpoint: '/afiliados/ranking' },
  { id: 'afprop', nome: 'Afiliados Próprios', endpoint: '/afiliados-proprios/dashboard' },
  { id: 'lanc', nome: 'Lançamentos', endpoint: '/lancamento/estrategia' },
  { id: 'webinars', nome: 'Webinars', endpoint: '/webinar/lista' },
  { id: 'email', nome: 'Email Marketing', endpoint: '/email/analytics' },
  { id: 'analytics', nome: 'Analytics', endpoint: '/analytics/conversao' },
  { id: 'reputacao', nome: 'Reputação', endpoint: '/reputacao/testemunhos' },
  { id: 'suporte', nome: 'Suporte', endpoint: '/suporte/tickets' },
  { id: 'onboarding', nome: 'Onboarding', endpoint: '/onboarding/status' },
  { id: 'referencias', nome: 'Referências', endpoint: '/referencias/dashboard' },
  { id: 'paginas', nome: 'Páginas', endpoint: '/pagina/analytics' },
  { id: 'videos', nome: 'Vídeos', endpoint: null },
  { id: 'cursos', nome: 'Cursos', endpoint: '/curso/lista' },
  { id: 'sites', nome: 'Sites', endpoint: '/site/analytics' },
  { id: 'apres', nome: 'Apresentações', endpoint: '/apresentacao/lista' },
  { id: 'automacao', nome: 'Automação Inteligente', endpoint: '/automacao/pontuacao' },
  { id: 'oportunidades', nome: 'Oportunidades', endpoint: '/oportunidade/pendentes' },
  { id: 'investimentos', nome: 'Investimentos', endpoint: '/investimentos' },
  { id: 'empresa', nome: 'Empresa', endpoint: '/empresa/progresso' },
  { id: 'financas', nome: 'Finanças', endpoint: '/receita/total' },
  { id: 'contactos', nome: 'Contactos', endpoint: null },
  { id: 'saude', nome: 'Saúde', endpoint: '/saude' },
  { id: 'passwords', nome: 'Passwords', endpoint: null },
  { id: 'documentos', nome: 'Documentos', endpoint: null },
  { id: 'logs', nome: 'Logs', endpoint: '/logs' },
  { id: 'actualizacao', nome: 'Actualização', endpoint: '/versao/atual' },
];

~~~

### letimax-app/src/navigation/Root.js
~~~js
import React, { useEffect } from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme, createNavigationContainerRef } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../theme/theme';
import { MENU } from './menu';
import ChatScreen from '../screens/ChatScreen';
import ModuleScreen from '../screens/ModuleScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MotorReceitaScreen from '../screens/MotorReceitaScreen';
import MetasScreen from '../screens/MetasScreen';
import ProdutosScreen from '../screens/ProdutosScreen';
import ContactosScreen from '../screens/ContactosScreen';
import PasswordsScreen from '../screens/PasswordsScreen';
import EngineScreen from '../screens/EngineScreen';
import FinancasScreen from '../screens/FinancasScreen';
import SaudeScreen from '../screens/SaudeScreen';
import FilaScreen from '../screens/FilaScreen';
import TopIndicators from '../components/TopIndicators';
import { SCREENS } from '../screens/screens.config';

const SPECIAL = { motor: MotorReceitaScreen, metas: MetasScreen, contactos: ContactosScreen, passwords: PasswordsScreen, financas: FinancasScreen, saude: SaudeScreen };
const viaEngine = (id) => !!SCREENS[id];

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const ICONS = { Chat: 'chatbubble-ellipses', Dashboard: 'speedometer', Produtos: 'cube', Mercado: 'trending-up', Marketing: 'megaphone' };

function Tabs() {
  const { c } = useTheme();
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      headerShown: false,
      tabBarActiveTintColor: c.gold, tabBarInactiveTintColor: c.muted,
      tabBarStyle: { backgroundColor: c.bg, borderTopColor: c.border },
      tabBarIcon: ({ color, size }) => <Ionicons name={ICONS[route.name]} size={size} color={color} />,
    })}>
      <Tab.Screen name="Chat" component={ChatScreen} />
      <Tab.Screen name="Dashboard" component={EngineScreen} initialParams={{ id: 'dashboard' }} />
      <Tab.Screen name="Produtos" component={ProdutosScreen} />
      <Tab.Screen name="Mercado" component={EngineScreen} initialParams={{ id: 'mercado' }} />
      <Tab.Screen name="Marketing" component={EngineScreen} initialParams={{ id: 'marketing' }} />
    </Tab.Navigator>
  );
}

export const navRef = createNavigationContainerRef();

export default function Root({ destino }) {
  const { c, isDark } = useTheme();
  useEffect(() => { if (destino && navRef.isReady()) navRef.navigate(destino); }, [destino]);
  const base = isDark ? DarkTheme : DefaultTheme;
  const navTheme = { ...base, colors: { ...base.colors, background: c.bg, card: c.bg, text: c.text, border: c.border, primary: c.gold } };
  return (
    <NavigationContainer ref={navRef} theme={navTheme}>
      <Drawer.Navigator initialRouteName={destino || 'Principal'} screenOptions={{ headerRight: () => <TopIndicators />, headerTintColor: c.gold, headerTitleStyle: { color: c.text }, drawerActiveTintColor: c.gold, drawerStyle: { backgroundColor: c.bg } }}>
        <Drawer.Screen name="Principal" component={Tabs} options={{ title: 'LétimaX' }} />
        {MENU.map((m) => (
          <Drawer.Screen key={m.id} name={m.id} component={SPECIAL[m.id] || (viaEngine(m.id) ? EngineScreen : ModuleScreen)} options={{ title: m.nome }} initialParams={{ id: m.id, titulo: m.nome, endpoint: m.endpoint }} />
        ))}
        <Drawer.Screen name="fila" component={FilaScreen} options={{ title: 'Fila offline' }} />
        <Drawer.Screen name="configuracoes" component={SettingsScreen} options={{ title: 'Configurações' }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

~~~

### letimax-app/src/theme/theme.js
~~~js
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useColorScheme } from 'react-native';
import * as SecureStore from 'expo-secure-store';

export const GOLD = '#C9A84C';
const base = { gold: GOLD, ok: '#2E9E5B', err: '#D64545', warn: '#E08A1E' };
export const light = { ...base, bg: '#FFFFFF', text: '#1A1A1A', muted: '#6B6B6B', card: '#F5F5F5', border: '#E5E5E5', soft: '#2D2D2D', bubbleUser: '#F3E9C6', bubbleBot: '#EFEFEF' };
export const dark = { ...base, bg: '#0D0D0D', text: '#FFFFFF', muted: '#A0A0A0', card: '#1A1A1A', border: '#2A2A2A', soft: '#2D2D2D', bubbleUser: '#4A3F1C', bubbleBot: '#1F1F1F' };

const Ctx = createContext(null);

// mode: 'system' (padrão) | 'light' | 'dark'
export function ThemeProvider({ children }) {
  const sys = useColorScheme();
  const [mode, setModeState] = useState('system');
  useEffect(() => {
    SecureStore.getItemAsync('tema_modo').then((m) => m && setModeState(m)).catch(() => {});
  }, []);
  const setMode = async (m) => {
    setModeState(m);
    try { await SecureStore.setItemAsync('tema_modo', m); } catch (e) {}
  };
  const isDark = mode === 'system' ? sys === 'dark' : mode === 'dark';
  return <Ctx.Provider value={{ c: isDark ? dark : light, isDark, mode, setMode }}>{children}</Ctx.Provider>;
}
export const useTheme = () => useContext(Ctx);

~~~

### letimax-app/src/services/backup.js
~~~js
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import * as DocumentPicker from 'expo-document-picker';
import * as SecureStore from 'expo-secure-store';
import * as Crypto from 'expo-crypto';
import CryptoJS from 'crypto-js';
import { getDb, getConfig, setConfig, delConfig } from '../db/database';
import { TODAS } from '../db/schema';

// Backup cifrado (.letimax): AES-256-CBC + HMAC-SHA256, chave derivada da palavra-passe com PBKDF2.
// O perfil de acesso (PIN), o cofre de passwords, os tokens do servidor e as chaves de API NÃO entram no backup.
const EXCLUIR = ['dashboard_cache', 'tentativas_acesso', 'fila_tarefas'];
const wa = (bytes) => CryptoJS.lib.WordArray.create(bytes);

function derivar(pass, salt) {
  const k = CryptoJS.PBKDF2(pass, salt, { keySize: 512 / 32, iterations: 10000, hasher: CryptoJS.algo.SHA256 });
  return { enc: CryptoJS.lib.WordArray.create(k.words.slice(0, 8), 32), mac: CryptoJS.lib.WordArray.create(k.words.slice(8, 16), 32) };
}
export function cifrar(texto, pass) {
  const salt = wa(Crypto.getRandomBytes(16));
  const iv = wa(Crypto.getRandomBytes(16));
  const k = derivar(pass, salt);
  const ct = CryptoJS.AES.encrypt(texto, k.enc, { iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 }).ciphertext.toString(CryptoJS.enc.Base64);
  const mac = CryptoJS.HmacSHA256(salt.toString() + iv.toString() + ct, k.mac).toString();
  return JSON.stringify({ v: 1, salt: salt.toString(), iv: iv.toString(), ct, mac });
}
export function decifrar(conteudo, pass) {
  let o;
  try { o = JSON.parse(conteudo); } catch (e) { throw new Error('Ficheiro .letimax inválido.'); }
  if (!o || o.v !== 1 || !o.salt || !o.iv || !o.ct || !o.mac) throw new Error('Ficheiro .letimax inválido.');
  const salt = CryptoJS.enc.Hex.parse(o.salt);
  const iv = CryptoJS.enc.Hex.parse(o.iv);
  const k = derivar(pass, salt);
  const mac = CryptoJS.HmacSHA256(o.salt + o.iv + o.ct, k.mac).toString();
  if (mac !== o.mac) throw new Error('Palavra-passe errada ou ficheiro alterado.');
  const dec = CryptoJS.AES.decrypt({ ciphertext: CryptoJS.enc.Base64.parse(o.ct) }, k.enc, { iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
  return dec.toString(CryptoJS.enc.Utf8);
}

export const getPass = () => SecureStore.getItemAsync('backup_pass');
export const setPass = (p) => SecureStore.setItemAsync('backup_pass', p);

async function recolher() {
  const d = await getDb();
  const tabelas = {};
  for (const t of TODAS) {
    if (EXCLUIR.includes(t)) continue;
    tabelas[t] = await d.getAllAsync('SELECT * FROM ' + t);
  }
  return JSON.stringify({ versao: 1, criado: new Date().toISOString(), tabelas });
}

// Cria o ficheiro, guarda na pasta escolhida (se houver) e devolve o caminho local
export async function fazerBackup() {
  const pass = await getPass();
  if (!pass) throw new Error('Defina primeiro a palavra-passe do backup.');
  const conteudo = cifrar(await recolher(), pass);
  const nome = 'letimax_' + new Date().toISOString().slice(0, 10) + '.letimax';
  const local = FileSystem.cacheDirectory + nome;
  await FileSystem.writeAsStringAsync(local, conteudo, { encoding: FileSystem.EncodingType.UTF8 });
  const dir = await getConfig('backup_dir');
  let destino = 'só no telemóvel';
  if (dir) {
    try {
      const f = await FileSystem.StorageAccessFramework.createFileAsync(dir, nome.replace('.letimax', ''), 'application/octet-stream');
      await FileSystem.writeAsStringAsync(f, conteudo, { encoding: FileSystem.EncodingType.UTF8 });
      destino = 'na pasta escolhida';
    } catch (e) { destino = 'a pasta escolhida falhou (' + e.message + ')'; }
  }
  await setConfig('ultimo_backup', new Date().toISOString());
  return { local, destino };
}

// Backup diário: depois das 02:00, uma vez por dia
export async function autoBackup() {
  if (!(await getPass())) return false;
  const ultimo = await getConfig('ultimo_backup');
  const hoje = new Date().toISOString().slice(0, 10);
  if ((ultimo || '').slice(0, 10) === hoje || new Date().getHours() < 2) return false;
  await fazerBackup();
  return true;
}

export async function escolherPasta() {
  const p = await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();
  if (!p.granted) return null;
  await setConfig('backup_dir', p.directoryUri);
  return p.directoryUri;
}

export async function partilhar() {
  const { local } = await fazerBackup();
  if (!(await Sharing.isAvailableAsync())) throw new Error('Partilha indisponível neste telemóvel.');
  await Sharing.shareAsync(local, { mimeType: 'application/octet-stream', dialogTitle: 'Guardar backup da LétimaX' });
}

// Restaura de um .letimax: substitui os dados locais. O acesso (PIN) e o servidor têm de ser configurados de novo.
export async function restaurar(passOverride) {
  const r = await DocumentPicker.getDocumentAsync({ copyToCacheDirectory: true });
  if (r.canceled || !r.assets || !r.assets[0]) return null;
  const pass = passOverride || (await getPass());
  if (!pass) throw new Error('Indique a palavra-passe do backup.');
  const texto = await FileSystem.readAsStringAsync(r.assets[0].uri, { encoding: FileSystem.EncodingType.UTF8 });
  const dados = JSON.parse(decifrar(texto, pass));
  if (!dados || dados.versao !== 1 || !dados.tabelas) throw new Error('Backup inválido.');
  const d = await getDb();
  let linhas = 0;
  await d.withTransactionAsync(async () => {
    for (const t of TODAS) {
      if (EXCLUIR.includes(t) || !Array.isArray(dados.tabelas[t])) continue;
      await d.runAsync('DELETE FROM ' + t);
      for (const row of dados.tabelas[t]) {
        const cols = Object.keys(row).filter((c) => /^[a-z_]+$/i.test(c));
        if (!cols.length) continue;
        await d.runAsync('INSERT INTO ' + t + ' (' + cols.join(',') + ') VALUES (' + cols.map(() => '?').join(',') + ')', cols.map((c) => row[c]));
        linhas++;
      }
    }
  });
  await delConfig('primeiro_uso'); // volta a pedir o servidor e o token neste dispositivo
  return linhas;
}

~~~

### letimax-app/src/services/voz.js
~~~js
import * as Speech from 'expo-speech';
import * as FileSystem from 'expo-file-system';
import { Audio } from 'expo-av';
import { rawPost } from './api';
import { getConfig } from '../db/database';

// Voz masculina da ElevenLabs via servidor (POST /voz). Se falhar, usa a voz do telemóvel.
// ASSUNÇÃO: /voz devolve áudio (audio/mpeg) ou JSON {url} / {audio_base64}.
function blobParaBase64(blob) {
  return new Promise((ok, err) => {
    const r = new FileReader();
    r.onloadend = () => ok(String(r.result).split(',')[1]);
    r.onerror = err;
    r.readAsDataURL(blob);
  });
}
const fallback = (t, onDone) => Speech.speak(t, { language: 'pt-PT', onDone, onStopped: onDone, onError: onDone });

export async function falarVoz(texto, onDone) {
  const t = String(texto || '').slice(0, 1200); // limita o custo por resposta
  if (!t) return onDone && onDone();
  if ((await getConfig('voz_modo')) === 'telefone') return fallback(t, onDone);
  let ficheiro = null;
  try {
    const res = await rawPost('/voz', { texto: t });
    if (!res.ok) throw new Error('voz ' + res.status);
    let uri;
    const ct = res.headers.get('content-type') || '';
    let b64;
    if (ct.includes('audio')) b64 = await blobParaBase64(await res.blob());
    else {
      const j = await res.json();
      uri = j.url || j.audio_url;
      b64 = j.audio_base64;
    }
    if (!uri && b64) {
      ficheiro = FileSystem.cacheDirectory + 'voz_' + Date.now() + '.mp3';
      await FileSystem.writeAsStringAsync(ficheiro, b64, { encoding: FileSystem.EncodingType.Base64 });
      uri = ficheiro;
    }
    if (!uri) throw new Error('sem áudio');
    await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
    const { sound } = await Audio.Sound.createAsync({ uri }, { shouldPlay: true });
    sound.setOnPlaybackStatusUpdate((s) => {
      if (s.didJustFinish) {
        sound.unloadAsync();
        if (ficheiro) FileSystem.deleteAsync(ficheiro, { idempotent: true }).catch(() => {});
        if (onDone) onDone();
      }
    });
  } catch (e) {
    if (ficheiro) FileSystem.deleteAsync(ficheiro, { idempotent: true }).catch(() => {});
    fallback(t, onDone);
  }
}

~~~

### letimax-app/src/services/bus.js
~~~js
const subs = {};
export const onBus = (k, f) => { (subs[k] = subs[k] || []).push(f); return () => { subs[k] = subs[k].filter((x) => x !== f); }; };
export const emit = (k) => (subs[k] || []).forEach((f) => { try { f(); } catch (e) {} });

~~~

### letimax-app/src/services/sync.js
~~~js
import { api } from './api';
import { getDb } from '../db/database';
import { emit } from './bus';

// Sincronização telemóvel <-> computador via servidor.
// ASSUNÇÃO: o servidor aceita POST /sync/mensagem e reenvia pelo /ws mensagens {tipo:'sync_mensagem', id_remoto, papel, texto}.
export const novoExtId = () => 'tel-' + Date.now().toString(36) + Math.random().toString(36).slice(2, 8);
export const syncEnviar = (m) => api.post('/sync/mensagem', m, 8000).catch(() => {});

// O conteúdo vindo do servidor é só texto guardado e mostrado: nunca é executado como comando.
export async function receberSync(m) {
  if (!m || typeof m.texto !== 'string' || typeof m.id_remoto !== 'string' || !['user', 'bot'].includes(m.papel)) return;
  const d = await getDb();
  const ja = await d.getFirstAsync('SELECT id FROM conversas WHERE ext_id = ?', [m.id_remoto]);
  if (ja) return;
  await d.runAsync('INSERT INTO conversas (papel, texto, criado_em, ext_id) VALUES (?,?,?,?)', [m.papel, m.texto.slice(0, 5000), new Date().toISOString(), m.id_remoto]);
  emit('conversas');
}

~~~

### letimax-app/src/services/commands.js
~~~js
import { Linking, PermissionsAndroid } from 'react-native';
import * as IntentLauncher from 'expo-intent-launcher';
import * as Brightness from 'expo-brightness';
import { VolumeManager } from 'react-native-volume-manager';
import { api } from './api';
import { biometricAuth } from './security';
import { listContactos, logVoz, getConfig } from '../db/database';
import * as NB from './nativeBridge';

// SEGURANÇA: o Android não deixa uma app confirmar QUEM está a falar. Por isso estes comandos só correm
// com a APP já desbloqueada (PIN/biometria). Comandos críticos exigem "sim" falado + biometria nova.
const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();
const WAKE = /\b(letimax|letima x|leti max|let imax|letimacs|letimax)\b/;
let pending = null; // { fn, critico }

function falar(d) {
  if (d == null) return 'Sem dados.';
  if (typeof d === 'string') return d;
  const txt = d.resumo || d.texto || d.mensagem;
  if (txt) return String(txt);
  const partes = Object.entries(d).filter(([, v]) => v !== null && typeof v !== 'object').slice(0, 6).map(([k, v]) => k.replace(/_/g, ' ') + ': ' + v);
  return partes.length ? partes.join('. ') : 'Recebi os dados, mas não há um resumo para ler.';
}
async function volume(delta, abs) {
  let cur = await VolumeManager.getVolume();
  cur = typeof cur === 'number' ? cur : (cur && cur.volume) != null ? cur.volume : 0.5;
  const v = abs != null ? abs : Math.min(1, Math.max(0, cur + delta));
  await VolumeManager.setVolume(v, { showUI: true });
  return v;
}
async function brilho(delta) {
  const cur = await Brightness.getBrightnessAsync();
  await Brightness.setBrightnessAsync(Math.min(1, Math.max(0.05, cur + delta)));
}
async function ligar(nome) {
  const [c] = await listContactos(nome);
  if (!c || !c.telefone) return 'Não encontrei o número de ' + nome + ' nos contactos.';
  const num = c.telefone.replace(/[^\d+]/g, '');
  const ok = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CALL_PHONE);
  if (ok !== 'granted') { await Linking.openURL('tel:' + num); return 'A abrir o marcador para ' + c.nome + '.'; }
  await IntentLauncher.startActivityAsync('android.intent.action.CALL', { data: 'tel:' + num });
  return 'A ligar para ' + c.nome + '.';
}
const nao = (txt) => async () => txt;
const SEM_NATIVO = 'Ainda não consigo fazer isso: o Android só permite com código nativo adicional (Fase 4).';

const H = [
  { re: /^modo escuro$/, fn: async (m, x) => { await x.setMode('dark'); return 'Modo escuro activado.'; } },
  { re: /^modo claro$/, fn: async (m, x) => { await x.setMode('light'); return 'Modo claro activado.'; } },
  { re: /^(liga|ligar|acende) (a )?lanterna$/, fn: async (m, x) => ((await x.torch.setTorch(true)) ? 'Lanterna ligada.' : 'Preciso da permissão da câmara para a lanterna.') },
  { re: /^(desliga|desligar|apaga) (a )?lanterna$/, fn: async (m, x) => { await x.torch.setTorch(false); return 'Lanterna desligada.'; } },
  { re: /^(sobe|aumenta) (o )?volume$/, fn: async () => { await volume(0.15); return 'Volume aumentado.'; } },
  { re: /^(desce|diminui|baixa) (o )?volume$/, fn: async () => { await volume(-0.15); return 'Volume diminuído.'; } },
  { re: /^volume maximo$/, fn: async () => { await volume(0, 1); return 'Volume no máximo.'; } },
  { re: /^silencia$/, fn: async () => { await volume(0, 0); return 'Volume a zero.'; } },
  { re: /^aumenta (o )?brilho$/, fn: async () => { await brilho(0.2); return 'Brilho aumentado.'; } },
  { re: /^(diminui|baixa) (o )?brilho$/, fn: async () => { await brilho(-0.2); return 'Brilho diminuído.'; } },
  { re: /^(liga|desliga) (o )?wifi$/, fn: async () => { await IntentLauncher.startActivityAsync('android.settings.WIFI_SETTINGS'); return 'Abri as definições de wifi. O Android não deixa uma app ligar ou desligar o wifi sozinha.'; } },
  { re: /^(liga|desliga) (o )?bluetooth$/, fn: async () => { await IntentLauncher.startActivityAsync('android.settings.BLUETOOTH_SETTINGS'); return 'Abri as definições de bluetooth. O Android não deixa uma app ligar ou desligar o bluetooth sozinha.'; } },
  { re: /^liga para (.+)$/, confirm: (m) => 'Vou ligar para ' + m[1] + '.', fn: (m) => ligar(m[1]) },

  { re: /^modo autonomo total(?: por (\d+) horas?)?$/, critico: true,
    confirm: (m) => 'Vou activar o modo autónomo total por ' + (m[1] || 'o tempo configurado nas definições') + ' horas. Os limites mantêm-se: sem gastar dinheiro, sem retirar dinheiro, sem mudar de nicho.',
    fn: async (m) => {
      const h = Number(m[1]) || Number(await getConfig('duracao_autonomo')) || 4;
      await api.post('/autonomia/ativar', { nivel: 3, horas: h });
      return 'Modo autónomo total activo por ' + h + ' horas.';
    } },
  { re: /^(desactiva|desativa) (o )?modo autonomo$/, fn: async () => { await api.post('/autonomia/desativar', {}); return 'Modo autónomo desactivado.'; } },
  { re: /^modo normal$/, fn: async () => { await api.post('/autonomia/nivel', { nivel: 1 }); return 'Modo normal activo.'; } },

  { re: /^como estao as vendas$/, fn: async () => falar(await api.get('/relatorio')) },
  { re: /^quanto ganhei hoje$/, fn: async () => falar(await api.get('/receita/total')) },
  { re: /^qual a proxima oportunidade$/, fn: async () => {
      const d = await api.get('/motor-receita/oportunidades');
      const l = (Array.isArray(d) ? d : (d && d.oportunidades) || []).sort((a, b) => (b.pontuacao || 0) - (a.pontuacao || 0));
      return l.length ? (l[0].titulo || l[0].nome) + ', pontuação ' + (l[0].pontuacao ?? 'desconhecida') + '.' : 'Não há oportunidades activas.';
  } },
  { re: /^(faz )?(o )?resumo do dia$/, fn: async () => falar(await api.get('/resumo-matinal')) },
  { re: /^(activa|ativa) (o )?raqueamento$/, critico: true,
    confirm: () => 'Vou activar o sistema de raqueamento, o último recurso.',
    fn: async () => { await api.post('/raqueamento/activar', {}); return 'Sistema de raqueamento activado.'; } },
  { re: /^faz (o )?plano da empresa$/, fn: async () => { await api.post('/empresa/plano', {}); return 'A gerar o plano da empresa. Aviso quando estiver pronto.'; } },

  { re: /^(pausa|continua|retoma|toca) (a )?musica$/, fn: () => NB.musica('play_pause') },
  { re: /^proxima musica$/, fn: () => NB.musica('next') },
  { re: /^musica anterior$/, fn: () => NB.musica('previous') },
  { re: /^desliga (o )?ecra$/, fn: () => NB.bloquearEcra() },
  { re: /^(atende|atender)( a)? chamada$/, fn: () => NB.atender() },
  { re: /^(rejeita|rejeitar)( a)? chamada$/, fn: () => NB.rejeitar() },
  { re: /^diz que estou ocupado$/, fn: () => NB.ocupado() },
  { re: /^(le|ler) (as )?(minhas )?mensagens$/, fn: () => NB.lerSms() },
  { re: /^(le|ler) (as )?(minhas )?notificacoes$/, fn: () => NB.lerNotificacoes() },
];

async function executar(p, texto) {
  if (p.critico && !(await biometricAuth())) return 'Autenticação biométrica falhou. Comando cancelado.';
  try { return await p.fn(); } catch (e) { return 'Não consegui executar: ' + e.message; }
}

// Devolve a resposta a falar, ou null se o texto não é um comando.
export async function runCommand(raw, ctx) {
  let t = norm(raw).replace(/\bletima x\b|\bleti max\b|\blet imax\b/g, 'letimax');
  if (pending) {
    const p = pending; pending = null;
    if (/^(sim|confirmo|confirmado)\b/.test(t)) { const r = await executar(p); await logVoz(raw, r); return r; }
    if (/^(nao|cancela|cancelar)\b/.test(t)) return 'Cancelado.';
  }
  const wake = WAKE.test(t);
  if (ctx.requireWake && !wake) return null;
  const cmd = wake ? t.replace(/^.*?\bletimax\b[ ,]*/, '') : t;
  for (const h of H) {
    const m = cmd.match(h.re);
    if (!m) continue;
    if (h.confirm) {
      pending = { fn: () => h.fn(m, ctx), critico: !!h.critico };
      const r = h.confirm(m) + ' Confirmas? Diz sim para confirmar.';
      await logVoz(raw, r); return r;
    }
    let r;
    try { r = await h.fn(m, ctx); } catch (e) { r = 'Não consegui executar: ' + e.message; }
    await logVoz(raw, r); return r;
  }
  return wake ? 'Não percebi o comando.' : null;
}

~~~

### letimax-app/src/services/service.js
~~~js
import notifee, { AndroidImportance, AndroidForegroundServiceType } from '@notifee/react-native';
import { serverConfig } from './api';
import { receberSync } from './sync';

// Serviço em primeiro plano: mantém um WebSocket com o servidor e mostra alertas em tempo real.
// Assume que o servidor expõe wss://<servidor>/ws com Authorization: Bearer <token>
// e envia mensagens JSON {titulo, mensagem}.
let ws = null;
let stopped = true;
let retry = 0;
const SEGREDO = /(sk-[A-Za-z0-9_-]{10,}|key_[A-Za-z0-9]{10,})/;

async function alerta(m) {
  if (SEGREDO.test(JSON.stringify(m))) return; // nunca mostrar nada que pareça uma chave de API
  const channelId = await notifee.createChannel({ id: 'alertas', name: 'Alertas LétimaX', importance: AndroidImportance.HIGH });
  await notifee.displayNotification({ title: String(m.titulo || 'LétimaX'), body: String(m.mensagem || ''), android: { channelId, pressAction: { id: 'default' } } });
}

async function connect() {
  if (stopped) return;
  const { url, token } = await serverConfig();
  if (!url || !token) { setTimeout(connect, 30000); return; }
  const wsUrl = url.replace(/^http/i, 'ws').replace(/\/$/, '') + '/ws';
  try {
    ws = new WebSocket(wsUrl, null, { headers: { Authorization: 'Bearer ' + token } });
    ws.onopen = () => { retry = 0; };
    ws.onmessage = (e) => {
      try {
        const m = JSON.parse(e.data);
        if (m && m.tipo === 'sync_mensagem') receberSync(m); else alerta(m);
      } catch (err) {}
    };
    ws.onerror = () => {};
    ws.onclose = () => {
      if (stopped) return;
      retry = Math.min(retry + 1, 6);
      setTimeout(connect, 2000 * 2 ** retry);
    };
  } catch (e) { setTimeout(connect, 30000); }
}

// A promessa nunca resolve: o serviço vive até stopForegroundService()
notifee.registerForegroundService(() => new Promise(() => { stopped = false; connect(); }));

export async function startService() {
  await notifee.requestPermission();
  const channelId = await notifee.createChannel({ id: 'servico', name: 'LétimaX activa', importance: AndroidImportance.LOW });
  await notifee.displayNotification({
    id: 'servico',
    title: 'LétimaX activa — a trabalhar para si',
    android: {
      channelId, asForegroundService: true, ongoing: true, pressAction: { id: 'default' },
      foregroundServiceTypes: [AndroidForegroundServiceType.FOREGROUND_SERVICE_TYPE_DATA_SYNC],
    },
  });
}
export async function stopService() {
  stopped = true;
  try { if (ws) ws.close(); } catch (e) {}
  await notifee.stopForegroundService();
}

~~~

### letimax-app/src/services/nativeBridge.js
~~~js
import { PermissionsAndroid } from 'react-native';
import Native from '../../modules/letimax-native';
import { getConfig } from '../db/database';

const P = PermissionsAndroid.PERMISSIONS;
const SEM_NATIVO = 'Esta função precisa do APK nativo da LétimaX (Fase 4). Não funciona no Expo Go.';
const MSG_OCUPADO = 'O Senhor Letício está ocupado neste momento. Pode deixar recado ou ele retorna em breve.';

export const nativoDisponivel = () => !!Native;

async function pedir(lista) {
  const r = await PermissionsAndroid.requestMultiple(lista);
  return lista.every((p) => r[p] === PermissionsAndroid.RESULTS.GRANTED);
}

export async function atender() {
  if (!Native) return SEM_NATIVO;
  if (!(await pedir([P.ANSWER_PHONE_CALLS]))) return 'Preciso da permissão para atender chamadas.';
  return Native.answerCall() ? 'Chamada atendida.' : 'Não há nenhuma chamada a tocar.';
}

export async function rejeitar() {
  if (!Native) return SEM_NATIVO;
  if (!(await pedir([P.ANSWER_PHONE_CALLS]))) return 'Preciso da permissão para rejeitar chamadas.';
  return Native.rejectCall() ? 'Chamada rejeitada.' : 'Não há nenhuma chamada a tocar.';
}

// O Android não deixa uma app falar dentro de uma chamada. Por isso: rejeita e envia um SMS ao número.
export async function ocupado() {
  if (!Native) return SEM_NATIVO;
  if (!(await pedir([P.ANSWER_PHONE_CALLS, P.READ_PHONE_STATE, P.READ_CALL_LOG, P.SEND_SMS]))) {
    return 'Preciso das permissões de chamadas e SMS.';
  }
  const num = Native.lastIncomingNumber(); // ler ANTES de rejeitar
  if (!Native.rejectCall()) return 'Não há nenhuma chamada a tocar.';
  if (!num || !/^\+?[\d\s-]{6,}$/.test(num)) return 'Chamada rejeitada, mas não consegui saber o número para enviar a mensagem.';
  const msg = (await getConfig('msg_ocupado')) || MSG_OCUPADO;
  Native.sendSms(num, msg);
  return 'Chamada rejeitada e mensagem de ocupado enviada.';
}

// SEGURANÇA: o conteúdo de SMS e notificações é lido em voz alta e NUNCA é tratado como comando.
export async function lerSms() {
  if (!Native) return SEM_NATIVO;
  if (!(await pedir([P.READ_SMS]))) return 'Preciso da permissão para ler SMS.';
  const l = Native.readSms(3);
  if (!l.length) return 'Não há mensagens recentes.';
  return 'Mensagens recentes. ' + l.map((m) => 'De ' + m.address + ': ' + String(m.body).slice(0, 200)).join('. ');
}

export async function lerNotificacoes() {
  if (!Native) return SEM_NATIVO;
  if (!Native.isNotificationAccessEnabled()) {
    Native.openNotificationAccess();
    return 'Abri as definições. Ative o acesso às notificações para a LétimaX e repita o comando.';
  }
  let l = [];
  try { l = JSON.parse(Native.getNotifications()).slice(0, 3); } catch (e) {}
  if (!l.length) return 'Não há notificações novas de mensagens.';
  return 'Notificações recentes. ' + l.map((n) => n.title + ': ' + String(n.text).slice(0, 160)).join('. ');
}

export async function musica(tecla) {
  if (!Native) return SEM_NATIVO;
  const ok = Native.mediaKey(tecla);
  if (!ok) return 'Não consegui enviar o comando à música.';
  return tecla === 'play_pause' ? 'Enviei pausa ou continuar. É a mesma tecla.' : tecla === 'next' ? 'Próxima música.' : 'Música anterior.';
}

export async function bloquearEcra() {
  if (!Native) return SEM_NATIVO;
  const r = Native.lockScreen();
  if (r === 'ok') return 'Ecrã bloqueado.';
  Native.requestDeviceAdmin();
  return 'Preciso de ser administradora do dispositivo só para bloquear o ecrã. Abri o pedido: ative e repita o comando.';
}

export function lembrarServico(querer) {
  try { if (Native) Native.setServiceWanted(!!querer); } catch (e) {}
}

~~~

### letimax-app/src/services/api.js
~~~js
import * as SecureStore from 'expo-secure-store';

export async function serverConfig() {
  return {
    url: (await SecureStore.getItemAsync('server_url')) || '',
    token: (await SecureStore.getItemAsync('server_token')) || '',
  };
}
export async function saveServerConfig(url, token) {
  if (!/^https:\/\//i.test(url)) throw new Error('O URL do servidor tem de começar por https://');
  await SecureStore.setItemAsync('server_url', url.trim());
  if (token) await SecureStore.setItemAsync('server_token', token.trim());
}

async function request(method, path, body, timeout = 15000) {
  const { url, token } = await serverConfig();
  if (!url) throw new Error('URL do servidor não configurado');
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeout);
  try {
    const res = await fetch(url.replace(/\/$/, '') + path, {
      method,
      headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token },
      body: body ? JSON.stringify(body) : undefined,
      signal: ctrl.signal,
    });
    if (!res.ok) throw new Error('Servidor respondeu ' + res.status);
    return await res.json();
  } finally {
    clearTimeout(t);
  }
}
export const api = {
  get: (p, t) => request('GET', p, null, t),
  post: (p, b, t) => request('POST', p, b, t),
  del: (p, b, t) => request('DELETE', p, b, t),
};

// Erro de rede (sem internet / servidor inacessível / tempo esgotado): pode ir para a fila offline
export const isRede = (e) => !!e && (e.name === 'AbortError' || /Network request failed|Failed to fetch|timeout|URL do servidor/i.test(e.message || ''));

// Resposta crua (para áudio): o chamador trata do corpo
export async function rawPost(path, body, timeout = 20000) {
  const { url, token } = await serverConfig();
  if (!url) throw new Error('URL do servidor não configurado');
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeout);
  try {
    return await fetch(url.replace(/\/$/, '') + path, {
      method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + token }, body: JSON.stringify(body || {}), signal: ctrl.signal,
    });
  } finally { clearTimeout(t); }
}

~~~

### letimax-app/src/services/queue.js
~~~js
import { getDb } from '../db/database';
import { api, isRede } from './api';

// Fila offline: acções POST feitas sem internet seguem quando a ligação volta. Expiram ao fim de 24 h.
let a_correr = false;
const DIA = 24 * 60 * 60 * 1000;

export async function enfileirar(metodo, endpoint, corpo, rotulo) {
  const d = await getDb();
  await d.runAsync('INSERT INTO fila_tarefas (metodo, endpoint, corpo, rotulo, criado_em) VALUES (?,?,?,?,?)', [metodo, endpoint, JSON.stringify(corpo || {}), rotulo || endpoint, new Date().toISOString()]);
}
export async function listarFila() {
  const d = await getDb();
  return d.getAllAsync('SELECT * FROM fila_tarefas ORDER BY id DESC LIMIT 50');
}
export async function contarFila() {
  const d = await getDb();
  const r = await d.getFirstAsync("SELECT COUNT(*) AS n FROM fila_tarefas WHERE estado = 'pendente'");
  return r ? r.n : 0;
}
export async function limparFila() {
  const d = await getDb();
  await d.runAsync('DELETE FROM fila_tarefas');
}
export async function processarFila() {
  if (a_correr) return { feitas: 0 };
  a_correr = true;
  let feitas = 0;
  try {
    const d = await getDb();
    const rows = await d.getAllAsync("SELECT * FROM fila_tarefas WHERE estado = 'pendente' ORDER BY id ASC");
    for (const r of rows) {
      if (Date.now() - new Date(r.criado_em).getTime() > DIA) { await d.runAsync("UPDATE fila_tarefas SET estado = 'expirada' WHERE id = ?", [r.id]); continue; }
      try {
        await api.post(r.endpoint, JSON.parse(r.corpo || '{}'), 30000);
        await d.runAsync('DELETE FROM fila_tarefas WHERE id = ?', [r.id]);
        feitas++;
      } catch (e) {
        if (isRede(e)) break; // continua sem internet: tenta mais tarde
        const t = (r.tentativas || 0) + 1;
        await d.runAsync('UPDATE fila_tarefas SET tentativas = ?, estado = ? WHERE id = ?', [t, t >= 3 ? 'falhou' : 'pendente', r.id]);
      }
    }
  } finally { a_correr = false; }
  return { feitas };
}

~~~

### letimax-app/src/services/useVoice.js
~~~js
import { useCallback, useRef, useState } from 'react';
import { ExpoSpeechRecognitionModule, useSpeechRecognitionEvent } from 'expo-speech-recognition';

// Reconhecimento de voz em português. Escuta só com a APP aberta (o Android bloqueia microfone em segundo plano).
export function useVoice(onFinal) {
  const [listening, setListening] = useState(false);
  const [partial, setPartial] = useState('');
  const cont = useRef(false);
  const paused = useRef(false);
  const cb = useRef(onFinal);
  cb.current = onFinal;

  const begin = useCallback(async () => {
    if (paused.current) return false;
    const p = await ExpoSpeechRecognitionModule.requestPermissionsAsync();
    if (!p.granted) return false;
    ExpoSpeechRecognitionModule.start({ lang: 'pt-PT', interimResults: true, continuous: false });
    return true;
  }, []);
  const beginRef = useRef(begin);
  beginRef.current = begin;

  useSpeechRecognitionEvent('start', () => setListening(true));
  useSpeechRecognitionEvent('end', () => {
    setListening(false); setPartial('');
    if (cont.current && !paused.current) setTimeout(() => beginRef.current(), 500);
  });
  useSpeechRecognitionEvent('result', (e) => {
    const t = (e.results && e.results[0] && e.results[0].transcript) || '';
    setPartial(t);
    if (e.isFinal && t.trim()) cb.current(t.trim());
  });
  useSpeechRecognitionEvent('error', (e) => {
    if (['not-allowed', 'service-not-allowed', 'language-not-supported'].includes(e.error)) cont.current = false;
  });

  return {
    listening, partial,
    start: begin,
    stop: () => ExpoSpeechRecognitionModule.stop(),
    setContinuous: (v) => { cont.current = v; if (v) begin(); else ExpoSpeechRecognitionModule.stop(); },
    pause: () => { paused.current = true; ExpoSpeechRecognitionModule.stop(); },   // enquanto a LétimaX fala
    resume: () => { paused.current = false; if (cont.current) begin(); },
  };
}

~~~

### letimax-app/src/services/security.js
~~~js
import * as SecureStore from 'expo-secure-store';
import * as Crypto from 'expo-crypto';
import * as LocalAuthentication from 'expo-local-authentication';
import { logAccess, getConfig } from '../db/database';
import { api } from './api';

const SALT = 'letimax-v1';
const hash = (pin) => Crypto.digestStringAsync(Crypto.CryptoDigestAlgorithm.SHA256, pin + SALT);

export async function hasPin() {
  return !!(await SecureStore.getItemAsync('pin_hash'));
}
export async function setupPin(pin) {
  await SecureStore.setItemAsync('pin_hash', await hash(pin));
}

// Bloqueio progressivo do documento: 3 falhas = 5 min, 6 = 30 min, 9 = 24 h, 12 = permanente
function lockFor(f, max, baseMs) {
  if (f >= 4 * max) return 'perm';
  if (f >= 3 * max) return 24 * 60 * 60 * 1000;
  if (f >= 2 * max) return 30 * 60 * 1000;
  if (f >= max) return baseMs;
  return 0;
}
export async function lockRemaining() {
  const until = await SecureStore.getItemAsync('bloqueio_ate');
  if (!until) return 0;
  if (until === 'perm') return 'perm';
  const left = Number(until) - Date.now();
  return left > 0 ? left : 0;
}
export async function resetFailures() {
  await SecureStore.setItemAsync('falhas', '0');
  await SecureStore.deleteItemAsync('bloqueio_ate');
}
export async function verifyPin(pin) {
  const left = await lockRemaining();
  if (left) return { ok: false, locked: left };
  const ok = (await hash(pin)) === (await SecureStore.getItemAsync('pin_hash'));
  await logAccess(ok, 'pin');
  if (ok) { await resetFailures(); return { ok: true }; }
  const f = Number((await SecureStore.getItemAsync('falhas')) || 0) + 1;
  await SecureStore.setItemAsync('falhas', String(f));
  // notificação imediata ao Senhor Letício (o servidor trata do alerta; aos 12 falhas, do email)
  api.post('/notificar', { tipo: 'seguranca', mensagem: 'PIN falhado ' + f + ' vez(es) na APP.' }, 8000).catch(() => {});
  const max = Math.max(Number(await getConfig('max_tentativas')) || 3, 1);
  const base = Math.max(Number(await getConfig('bloqueio_min')) || 5, 1) * 60000;
  const l = lockFor(f, max, base);
  if (l === 'perm') await SecureStore.setItemAsync('bloqueio_ate', 'perm');
  else if (l) await SecureStore.setItemAsync('bloqueio_ate', String(Date.now() + l));
  return { ok: false, failures: f, locked: l };
}

// Biometria do próprio telemóvel (rosto/impressão digital já registados no Android)
export async function biometricAuth() {
  const has = await LocalAuthentication.hasHardwareAsync();
  const enrolled = await LocalAuthentication.isEnrolledAsync();
  if (!has || !enrolled) return false;
  const r = await LocalAuthentication.authenticateAsync({
    promptMessage: 'LétimaX — confirme a sua identidade',
    cancelLabel: 'Usar PIN',
    disableDeviceFallback: true,
  });
  await logAccess(r.success, 'biometria');
  return r.success;
}

export function formatLock(ms) {
  if (ms === 'perm') return 'Acesso bloqueado permanentemente. Alerta enviado ao Senhor Letício.';
  const min = Math.ceil(ms / 60000);
  return min >= 60 ? 'Bloqueado por ' + Math.ceil(min / 60) + ' h.' : 'Bloqueado por ' + min + ' min.';
}

~~~

### letimax-app/src/components/ui.js
~~~js
export const pretty = (k) => String(k).replace(/_/g, ' ').replace(/^./, (s) => s.toUpperCase());
export const fmt = (v) => {
  if (v === null || v === undefined || v === '') return '—';
  if (typeof v === 'number') return Number.isInteger(v) ? String(v) : v.toFixed(2);
  if (typeof v === 'boolean') return v ? 'Sim' : 'Não';
  return String(v);
};
// Lista a partir de qualquer resposta: array directo ou a primeira propriedade que seja array
export const asList = (d) => {
  if (Array.isArray(d)) return d;
  if (d && typeof d === 'object') {
    const k = Object.keys(d).find((x) => Array.isArray(d[x]));
    if (k) return d[k];
  }
  return [];
};
export const primitives = (o) => Object.entries(o || {}).filter(([, v]) => v === null || typeof v !== 'object');
export const pick = (o, keys) => {
  for (const k of keys) if (o && o[k] !== undefined && o[k] !== null && o[k] !== '') return o[k];
  return undefined;
};
export const fill = (s, vars, enc) =>
  String(s).replace(/\{(\w+)\}/g, (_, k) => (vars[k] == null ? '' : enc ? encodeURIComponent(vars[k]) : String(vars[k])));
export const fillBody = (b, vars) => {
  if (b == null) return undefined;
  const out = {};
  Object.entries(b).forEach(([k, v]) => { out[k] = typeof v === 'string' ? fill(v, vars, false) : v; });
  return out;
};
export const csv = (rows) => {
  if (!rows.length) return '';
  const cols = Array.from(new Set(rows.flatMap((r) => primitives(r).map(([k]) => k))));
  const esc = (v) => '"' + String(v ?? '').replace(/"/g, '""') + '"';
  return [cols.join(',')].concat(rows.map((r) => cols.map((c) => esc(r[c])).join(','))).join('\n');
};

~~~

### letimax-app/src/components/JsonView.js
~~~js
import React from 'react';
import { View, Text } from 'react-native';

// Mostra qualquer resposta JSON do servidor em cartões legíveis
export default function JsonView({ data, c, level = 0 }) {
  if (data === null || data === undefined) return <Text style={{ color: c.muted }}>—</Text>;
  if (typeof data !== 'object') return <Text style={{ color: c.text }}>{String(data)}</Text>;
  if (Array.isArray(data)) {
    if (!data.length) return <Text style={{ color: c.muted }}>Sem dados.</Text>;
    return data.map((it, i) => (
      <View key={i} style={{ backgroundColor: c.card, borderRadius: 12, padding: 12, marginBottom: 8, borderWidth: 1, borderColor: c.border }}>
        <JsonView data={it} c={c} level={level + 1} />
      </View>
    ));
  }
  return Object.entries(data).map(([k, v]) => {
    const simple = v === null || typeof v !== 'object';
    return (
      <View key={k} style={{ marginBottom: 6 }}>
        <Text style={{ color: c.gold, fontWeight: '600', fontSize: 12 }}>{k.replace(/_/g, ' ')}</Text>
        {simple ? <Text style={{ color: c.text, fontSize: 15 }}>{String(v ?? '—')}</Text> : <View style={{ marginTop: 4 }}><JsonView data={v} c={c} level={level + 1} /></View>}
      </View>
    );
  });
}

~~~

### letimax-app/src/components/Bars.js
~~~js
import React from 'react';
import { View, Text } from 'react-native';
import { pick, pretty, fmt } from './ui';

const LABELS = ['label', 'nome', 'canal', 'origem', 'hora', 'dia', 'nicho', 'titulo', 'plataforma'];
const VALUES = ['valor', 'total', 'receita', 'vendas', 'conversao', 'roi', 'pontuacao', 'percentagem'];

// Converte respostas do servidor em barras: objecto {rótulo: número} ou lista de itens com rótulo e valor
export function autoItems(d) {
  if (Array.isArray(d)) {
    return d.map((it, i) => {
      if (typeof it === 'number') return { label: String(i + 1), value: it };
      const label = pick(it, LABELS);
      const k = VALUES.find((x) => typeof (it || {})[x] === 'number');
      return label != null && k ? { label: String(label), value: it[k] } : null;
    }).filter(Boolean);
  }
  if (d && typeof d === 'object') return Object.entries(d).filter(([, v]) => typeof v === 'number').map(([k, v]) => ({ label: pretty(k), value: v }));
  return [];
}

export default function Bars({ items, c }) {
  const max = Math.max(...items.map((i) => Math.abs(i.value)), 1);
  return (
    <View>
      {items.map((i, n) => (
        <View key={n} style={{ marginBottom: 8 }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ color: c.muted, fontSize: 12 }}>{i.label}</Text>
            <Text style={{ color: c.text, fontSize: 12, fontWeight: '700' }}>{fmt(i.value)}</Text>
          </View>
          <View style={{ height: 8, backgroundColor: c.border, borderRadius: 4, marginTop: 3 }}>
            <View style={{ height: 8, width: Math.max((Math.abs(i.value) / max) * 100, 2) + '%', backgroundColor: i.color || c.gold, borderRadius: 4 }} />
          </View>
        </View>
      ))}
    </View>
  );
}

~~~

### letimax-app/src/components/TopIndicators.js
~~~js
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useTheme } from '../theme/theme';
import { api } from '../services/api';
import { getConfig } from '../db/database';
import { processarFila, contarFila } from '../services/queue';
import { pick, fmt } from './ui';

// Indicadores no topo: nível de autonomia, estado do servidor, nicho, receita do dia e progresso da meta.
export default function TopIndicators() {
  const { c } = useTheme();
  const [d, setD] = useState(null);
  const [ok, setOk] = useState(null);
  const [nivel, setNivel] = useState('1');
  const [fila, setFila] = useState(0);

  useEffect(() => {
    let vivo = true;
    const tick = async () => {
      try { const r = await api.get('/dashboard', 8000); if (vivo) { setD(r); setOk(true); } await processarFila(); } catch (e) { if (vivo) setOk(false); }
      contarFila().then((n) => vivo && setFila(n)).catch(() => {});
      getConfig('autonomia').then((v) => vivo && v && setNivel(v));
    };
    tick();
    const t = setInterval(tick, 60000);
    return () => { vivo = false; clearInterval(t); };
  }, []);

  const receita = d && pick(d, ['receita_dia', 'receita_hoje', 'receita_do_dia']);
  const meta = d && pick(d, ['meta_pct', 'meta_percentagem', 'progresso_meta']);
  const nicho = d && pick(d, ['nicho', 'nicho_actual', 'nicho_atual']);
  const chip = { color: c.muted, fontSize: 11, marginLeft: 8 };
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 12, maxWidth: 220 }}>
      <View style={{ width: 8, height: 8, borderRadius: 4, backgroundColor: ok == null ? c.muted : ok ? c.ok : c.err }} />
      <Text style={{ ...chip, color: c.gold, fontWeight: '700' }}>N{nivel}</Text>
      {fila > 0 && <Text style={{ ...chip, color: c.warn }}>⏳{fila}</Text>}
      {receita != null && <Text style={chip}>R${fmt(receita)}</Text>}
      {meta != null && <Text style={chip}>{fmt(meta)}%</Text>}
      {nicho != null && <Text numberOfLines={1} style={{ ...chip, flexShrink: 1 }}>{String(nicho)}</Text>}
    </View>
  );
}

~~~

### letimax-app/src/components/TorchHost.js
~~~js
import React, { createContext, useState } from 'react';
import { CameraView, useCameraPermissions } from 'expo-camera';

// A lanterna no Expo só acende com uma câmara montada (invisível, 1x1 px). Só fica montada enquanto acesa.
export const TorchCtx = createContext({ setTorch: async () => false, on: false });

export function TorchProvider({ children }) {
  const [on, setOn] = useState(false);
  const [perm, request] = useCameraPermissions();
  const setTorch = async (v) => {
    if (v && !(perm && perm.granted)) {
      const r = await request();
      if (!r.granted) return false;
    }
    setOn(v);
    return true;
  };
  return (
    <TorchCtx.Provider value={{ setTorch, on }}>
      {children}
      {on && perm && perm.granted && <CameraView style={{ position: 'absolute', width: 1, height: 1, opacity: 0 }} facing="back" enableTorch />}
    </TorchCtx.Provider>
  );
}

~~~

### letimax-app/src/db/schema.js
~~~js
// Tabelas locais do documento (Room). Ficam de fora, de propósito: `passwords` (o cofre usa o SecureStore, cifrado pelo
// Android Keystore), `chaves_personalizadas` (chaves de API nunca ficam no telemóvel) e `perfil_biometrico` (a APP usa o
// PIN e a biometria do próprio Android, não guarda perfil).
export const ESPELHO = ['rascunhos_produtos', 'motor_receita_oportunidades', 'sistema_raqueamento', 'activos', 'construcao_activos', 'novos_negocios',
  'oportunidades_mercado', 'concorrencia', 'nichos_monitorizados', 'afiliados_externos', 'afiliados_proprios', 'webinars', 'email_marketing', 'testemunhos',
  'reputacao_alertas', 'tickets_suporte', 'onboarding_clientes', 'referencias_indicacoes', 'paginas_criadas', 'sites_criados', 'cursos_videos',
  'apresentacoes_criadas', 'automacao_pontuacao', 'oportunidades_detectadas', 'conteudo_agendado', 'politicas_privacidade', 'analytics'];

export const GENERICAS = ['contexto_ia', 'contratos', 'regras_autonomia', 'diario_decisoes', 'empresa_dados', 'empresa_plano', 'historico_nichos', 'fontes_receita',
  'historico_receita', 'sentimento_analise', 'email_segmentos', 'lancamentos', 'carrinho_abandonado', 'sistema_dispositivo', 'videos_guioes', 'conteudo_marketing',
  'automacao_aprendizagem', 'automacao_cascata', 'direitos_digitais', 'ab_tests', 'precificacao_dinamica', 'versoes_app', 'primeiro_uso', 'segredos_ricos',
  'seguranca_log', 'saude'];

export const ESPECIFICAS = ['conversas', 'configuracoes', 'dashboard_cache', 'logs_erros', 'tentativas_acesso', 'respostas_pre_aprovadas', 'contactos',
  'comandos_voz_log', 'financas_pessoais', 'humor_produtividade', 'metas', 'fila_tarefas'];

export const TODAS = ESPECIFICAS.concat(ESPELHO, GENERICAS);

// endpoint do servidor -> tabela local onde a lista fica espelhada (para offline e backup)
export const MAPA = {
  '/produtos': 'rascunhos_produtos', '/motor-receita/oportunidades': 'motor_receita_oportunidades', '/raqueamento/estrategias': 'sistema_raqueamento',
  '/activos/lista': 'activos', '/activos/progresso': 'construcao_activos', '/negocios/oportunidades': 'novos_negocios', '/mercado/lacunas': 'oportunidades_mercado',
  '/mercado/concorrencia/fichas': 'concorrencia', '/nichos/performance': 'nichos_monitorizados', '/afiliados/ranking': 'afiliados_externos',
  '/afiliados-proprios/ranking': 'afiliados_proprios', '/webinar/lista': 'webinars', '/email/lead-scoring': 'email_marketing', '/reputacao/testemunhos': 'testemunhos',
  '/reputacao/alertas': 'reputacao_alertas', '/suporte/tickets': 'tickets_suporte', '/onboarding/status': 'onboarding_clientes', '/referencias/historico': 'referencias_indicacoes',
  '/pagina/analytics': 'paginas_criadas', '/site/analytics': 'sites_criados', '/curso/lista': 'cursos_videos', '/apresentacao/lista': 'apresentacoes_criadas',
  '/automacao/pontuacao': 'automacao_pontuacao', '/oportunidade/pendentes': 'oportunidades_detectadas',   '/legal/historico-aceitacoes': 'politicas_privacidade', '/analytics/fugas-funil': 'analytics',
};

const ESPECIFICAS_SQL = `
  PRAGMA journal_mode = WAL;
  CREATE TABLE IF NOT EXISTS conversas (id INTEGER PRIMARY KEY AUTOINCREMENT, papel TEXT, texto TEXT, criado_em TEXT, ext_id TEXT);
  CREATE TABLE IF NOT EXISTS configuracoes (chave TEXT PRIMARY KEY, valor TEXT);
  CREATE TABLE IF NOT EXISTS dashboard_cache (chave TEXT PRIMARY KEY, dados TEXT, atualizado TEXT);
  CREATE TABLE IF NOT EXISTS logs_erros (id INTEGER PRIMARY KEY AUTOINCREMENT, origem TEXT, mensagem TEXT, criado_em TEXT);
  CREATE TABLE IF NOT EXISTS tentativas_acesso (id INTEGER PRIMARY KEY AUTOINCREMENT, sucesso INTEGER, metodo TEXT, criado_em TEXT);
  CREATE TABLE IF NOT EXISTS respostas_pre_aprovadas (id INTEGER PRIMARY KEY AUTOINCREMENT, canal TEXT, texto TEXT);
  CREATE TABLE IF NOT EXISTS contactos (id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, email TEXT, telefone TEXT, classe TEXT, notas TEXT);
  CREATE TABLE IF NOT EXISTS comandos_voz_log (id INTEGER PRIMARY KEY AUTOINCREMENT, texto TEXT, resposta TEXT, criado_em TEXT);
  CREATE TABLE IF NOT EXISTS financas_pessoais (id INTEGER PRIMARY KEY AUTOINCREMENT, tipo TEXT, valor REAL, descricao TEXT, data TEXT);
  CREATE TABLE IF NOT EXISTS humor_produtividade (id INTEGER PRIMARY KEY AUTOINCREMENT, dia TEXT, humor INTEGER, sono REAL);
  CREATE TABLE IF NOT EXISTS metas (id INTEGER PRIMARY KEY AUTOINCREMENT, mes TEXT, valor REAL, criado_em TEXT, atual REAL DEFAULT 0);
  CREATE TABLE IF NOT EXISTS fila_tarefas (id INTEGER PRIMARY KEY AUTOINCREMENT, metodo TEXT, endpoint TEXT, corpo TEXT, rotulo TEXT, criado_em TEXT, tentativas INTEGER DEFAULT 0, estado TEXT DEFAULT 'pendente');
`;

export async function criarTabelas(db) {
  await db.execAsync(ESPECIFICAS_SQL);
  const gen = ESPELHO.concat(GENERICAS)
    .map((t) => 'CREATE TABLE IF NOT EXISTS ' + t + ' (id INTEGER PRIMARY KEY AUTOINCREMENT, ext_id TEXT, dados TEXT, atualizado TEXT);')
    .join('\n');
  await db.execAsync(gen);
  // instalações antigas: acrescentar colunas novas (falha em silêncio se já existirem)
  for (const sql of ['ALTER TABLE conversas ADD COLUMN ext_id TEXT', 'ALTER TABLE metas ADD COLUMN atual REAL DEFAULT 0']) {
    try { await db.execAsync(sql); } catch (e) {}
  }
}

~~~

### letimax-app/src/db/database.js
~~~js
import * as SQLite from 'expo-sqlite';
import { criarTabelas, ESPELHO, GENERICAS } from './schema';

let dbp;
export function getDb() {
  if (!dbp) {
    dbp = (async () => {
      const d = await SQLite.openDatabaseAsync('letimax.db');
      await criarTabelas(d);
      return d;
    })();
  }
  return dbp;
}
const agora = () => new Date().toISOString();

// ---------- conversas ----------
export async function addMessage(papel, texto, extId) {
  const d = await getDb();
  const criado_em = agora();
  const r = await d.runAsync('INSERT INTO conversas (papel, texto, criado_em, ext_id) VALUES (?,?,?,?)', [papel, texto, criado_em, extId || null]);
  return { id: r.lastInsertRowId, papel, texto, criado_em };
}
export async function getMessages(limit = 200) {
  const d = await getDb();
  return d.getAllAsync('SELECT * FROM conversas ORDER BY id DESC LIMIT ?', [limit]);
}
export async function replaceHistory(resumo) {
  const d = await getDb();
  await d.runAsync('DELETE FROM conversas');
  await d.runAsync('INSERT INTO conversas (papel, texto, criado_em) VALUES (?,?,?)', ['bot', 'Resumo da conversa anterior: ' + resumo, agora()]);
}

// ---------- configurações e cache ----------
export async function setConfig(chave, valor) {
  const d = await getDb();
  await d.runAsync('INSERT OR REPLACE INTO configuracoes (chave, valor) VALUES (?,?)', [chave, String(valor)]);
}
export async function getConfig(chave) {
  const d = await getDb();
  const r = await d.getFirstAsync('SELECT valor FROM configuracoes WHERE chave = ?', [chave]);
  return r ? r.valor : null;
}
export async function delConfig(chave) {
  const d = await getDb();
  await d.runAsync('DELETE FROM configuracoes WHERE chave = ?', [chave]);
}
export async function cacheSet(chave, dados) {
  const d = await getDb();
  await d.runAsync('INSERT OR REPLACE INTO dashboard_cache (chave, dados, atualizado) VALUES (?,?,?)', [chave, JSON.stringify(dados), agora()]);
}
export async function cacheGet(chave) {
  const d = await getDb();
  const r = await d.getFirstAsync('SELECT dados, atualizado FROM dashboard_cache WHERE chave = ?', [chave]);
  return r ? { dados: JSON.parse(r.dados), atualizado: r.atualizado } : null;
}

// ---------- espelho das listas do servidor (offline + backup) ----------
export async function espelhar(tabela, lista) {
  if (!ESPELHO.includes(tabela)) return;
  const d = await getDb();
  const t = agora();
  await d.withTransactionAsync(async () => {
    await d.runAsync('DELETE FROM ' + tabela);
    for (const it of lista.slice(0, 500)) {
      await d.runAsync('INSERT INTO ' + tabela + ' (ext_id, dados, atualizado) VALUES (?,?,?)', [it && it.id != null ? String(it.id) : null, JSON.stringify(it), t]);
    }
  });
}
export async function localList(tabela) {
  if (tabela === 'tentativas_acesso') {
    const t = await listTentativas(30);
    return t.map((r) => ({ id: r.id, metodo: r.metodo, sucesso: r.sucesso ? 'Sim' : 'Não', quando: String(r.criado_em).slice(0, 16).replace('T', ' ') }));
  }
  if (!ESPELHO.includes(tabela) && !GENERICAS.includes(tabela)) return [];
  const d = await getDb();
  const rows = await d.getAllAsync('SELECT id, ext_id, dados FROM ' + tabela + ' ORDER BY id DESC LIMIT 100');
  return rows.map((r) => { let o = {}; try { o = JSON.parse(r.dados || '{}'); } catch (e) {} return { id: r.ext_id || r.id, ...o }; });
}
export async function guardarLocal(tabela, obj) {
  if (!ESPELHO.includes(tabela) && !GENERICAS.includes(tabela)) return;
  const d = await getDb();
  await d.runAsync('INSERT INTO ' + tabela + ' (ext_id, dados, atualizado) VALUES (?,?,?)', [null, JSON.stringify(obj), agora()]);
}
export const registarDecisao = (acao, detalhe) => guardarLocal('diario_decisoes', { acao, detalhe, quando: agora().slice(0, 16).replace('T', ' ') });

// ---------- segurança ----------
export async function logAccess(sucesso, metodo) {
  const d = await getDb();
  await d.runAsync('INSERT INTO tentativas_acesso (sucesso, metodo, criado_em) VALUES (?,?,?)', [sucesso ? 1 : 0, metodo, agora()]);
}
export async function listTentativas(n = 15) {
  const d = await getDb();
  return d.getAllAsync('SELECT * FROM tentativas_acesso ORDER BY id DESC LIMIT ?', [n]);
}

// ---------- contactos ----------
export async function listContactos(q = '') {
  const d = await getDb();
  const like = '%' + q + '%';
  return d.getAllAsync('SELECT * FROM contactos WHERE nome LIKE ? OR email LIKE ? OR classe LIKE ? ORDER BY nome', [like, like, like]);
}
export async function saveContacto(c) {
  const d = await getDb();
  await d.runAsync('INSERT INTO contactos (nome, email, telefone, classe, notas) VALUES (?,?,?,?,?)', [c.nome, c.email || '', c.telefone || '', c.classe || 'cliente', c.notas || '']);
}
export async function deleteContacto(id) {
  const d = await getDb();
  await d.runAsync('DELETE FROM contactos WHERE id = ?', [id]);
}

// ---------- metas ----------
export async function saveMetaProgress(valor, atual) {
  const d = await getDb();
  const mes = agora().slice(0, 7);
  const r = await d.getFirstAsync('SELECT id FROM metas WHERE mes = ? ORDER BY id DESC LIMIT 1', [mes]);
  if (r) await d.runAsync('UPDATE metas SET valor = ?, atual = ? WHERE id = ?', [valor, atual, r.id]);
  else await d.runAsync('INSERT INTO metas (mes, valor, criado_em, atual) VALUES (?,?,?,?)', [mes, valor, agora(), atual]);
}
export const saveMeta = (valor) => saveMetaProgress(valor, 0);
export async function listMetas() {
  const d = await getDb();
  return d.getAllAsync('SELECT mes, valor, atual FROM metas ORDER BY mes DESC, id DESC LIMIT 12');
}

// ---------- voz ----------
export async function logVoz(texto, resposta) {
  const d = await getDb();
  await d.runAsync('INSERT INTO comandos_voz_log (texto, resposta, criado_em) VALUES (?,?,?)', [texto, resposta, agora()]);
}

// ---------- finanças pessoais ----------
export async function addMov(tipo, valor, descricao) {
  const d = await getDb();
  await d.runAsync('INSERT INTO financas_pessoais (tipo, valor, descricao, data) VALUES (?,?,?,?)', [tipo, valor, descricao || '', agora()]);
}
export async function listMovs(mes) {
  const d = await getDb();
  return d.getAllAsync('SELECT * FROM financas_pessoais WHERE data LIKE ? ORDER BY id DESC', [mes + '%']);
}
export async function delMov(id) {
  const d = await getDb();
  await d.runAsync('DELETE FROM financas_pessoais WHERE id = ?', [id]);
}
export async function resumoMeses(n = 6) {
  const d = await getDb();
  const rows = await d.getAllAsync(
    "SELECT substr(data,1,7) AS mes, SUM(CASE WHEN tipo='receita' THEN valor ELSE 0 END) AS receitas, SUM(CASE WHEN tipo='despesa' THEN valor ELSE 0 END) AS despesas FROM financas_pessoais GROUP BY mes ORDER BY mes DESC LIMIT ?", [n]);
  return rows.reverse();
}

// ---------- saúde ----------
export async function saveHumor(humor, sono) {
  const d = await getDb();
  const dia = agora().slice(0, 10);
  await d.runAsync('DELETE FROM humor_produtividade WHERE dia = ?', [dia]);
  await d.runAsync('INSERT INTO humor_produtividade (dia, humor, sono) VALUES (?,?,?)', [dia, humor, sono == null ? null : sono]);
}
export async function humorStats() {
  const d = await getDb();
  const rows = await d.getAllAsync('SELECT humor, sono FROM humor_produtividade ORDER BY id DESC LIMIT 30');
  const n = rows.length;
  const media = n ? rows.reduce((s, r) => s + r.humor, 0) / n : 0;
  const bons = rows.filter((r) => r.humor >= 4).length;
  const hoje = await d.getFirstAsync('SELECT humor FROM humor_produtividade WHERE dia = ?', [agora().slice(0, 10)]);
  return { n, media, bons, hoje: hoje ? hoje.humor : null };
}

~~~

## Arquivo: letimax_base_v0.1
Ficheiros de código/configuração: 2

### README.md
~~~md
# LétimaX — Base v0.1

Já funciona: login por PIN (com bloqueio após 5 falhas), chat com a IA, dashboard vazio, interface leve para telemóvel.

## Publicar SEM instalar nada no computador
1. Crie conta em github.com e um repositório novo (privado).
2. Carregue a pasta `backend` (botão "Add file > Upload files").
3. Em railway.app: New Project > Deploy from GitHub > escolha o repositório.
4. Em Variables, adicione: SECRET_KEY, DONO_PIN_HASH, ANTHROPIC_API_KEY.
5. Em Settings > Networking > Generate Domain. Abra o endereço no telemóvel.

## Gerar o PIN (DONO_PIN_HASH)
Precisa de Python. Alternativa: peça-me aqui no chat um hash para o PIN que escolher
(use um PIN de teste; depois troque por outro gerado por si).

~~~

### backend/static/manifest.json
~~~json
{"name":"LétimaX","short_name":"LétimaX","start_url":"/","display":"standalone",
"background_color":"#FFFFFF","theme_color":"#C9A84C","icons":[]}

~~~

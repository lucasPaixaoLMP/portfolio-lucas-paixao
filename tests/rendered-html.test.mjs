import assert from 'node:assert/strict';
import { access } from 'node:fs/promises';
import test from 'node:test';

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("renders the portfolio, theme toggle, experience and accessible section navigation", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<html[^>]*lang="pt-BR"/);
  assert.match(html, /<title>Lucas Mathias Paixão/);
  assert.equal((html.match(/<h1\b/g) ?? []).length, 1);
  for (const section of ["projetos", "experiencia", "sobre", "contato"]) {
    assert.ok(html.includes(`id="${section}"`), `Missing section id: ${section}`);
    assert.ok(html.includes(`href="#${section}"`), `Missing nav link: #${section}`);
  }
  assert.ok(html.includes("Pular para projetos"));
  assert.ok(html.includes("AI Engineer"));
  assert.ok(html.includes("MVP Builders"));
  assert.ok(html.includes("/lucas-paixao.png"));
  assert.ok(html.includes("/curriculo.pdf"));
  assert.ok(html.includes("https://www.linkedin.com/in/"));
  assert.ok(!html.includes("seuemail@exemplo.com"));
});

test("renders nine real projects with available local previews and portrait asset", async () => {
  const html = await (await render()).text();
  assert.equal((html.match(/<article\b/g) ?? []).length, 9);
  const orderedTitles = [
    "ClockHub",
    "MinasXtreme",
    "PRÓ Torneios",
    "BuyTicket Brasil",
    "PAN — Apoio ao Neurodivergente",
    "DDA Delivery",
    "StockFlow",
    "Monte seu PC",
    "Barber App",
  ];
  let lastIndex = -1;
  for (const title of orderedTitles) {
    const idx = html.indexOf(title);
    assert.ok(idx > lastIndex, `Expected ${title} in order`);
    lastIndex = idx;
  }
  assert.ok(html.includes('/projects/clockhub-shot.png'));
  assert.ok(html.includes('/projects/protorneios-shot.png'));
  assert.ok(html.includes('/projects/buyticket-shot.png'));
  assert.ok(html.includes('/projects/pan-mobile.png'));
  const images = [...html.matchAll(/<img\b[^>]*src="([^"]+)"/g)];
  assert.equal(images.length, 10);
  for (const [, src] of images) await access(new URL(`../public${src}`, import.meta.url));
});

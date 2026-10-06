import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import sharp from 'sharp';

const source = await readFile(new URL('../data/o7-portfolio.js', import.meta.url), 'utf8');
const { o7PortfolioProjects } = await import(`data:text/javascript;base64,${Buffer.from(source).toString('base64')}`);
for (const project of o7PortfolioProjects) {
  assert.ok(project.previewImage?.startsWith('/assets/images/portfolio/'), `${project.id}: preview must be hosted locally`);
  const image = new URL(`../public${project.previewImage}`, import.meta.url);
  const { width, height } = await sharp(await readFile(image)).metadata();
  assert.ok(width >= 600 && height >= 300, `${project.id}: preview is too small`);
}
console.log(`Validated ${o7PortfolioProjects.length} local portfolio previews.`);

import { render } from "svelte/server";
import slugify from "$lib/slugify";

let jobs = [
  {
    id: 101,
    tags: "tech,backend",
    title: "Ready Or Not",
    date: 1735663534,
    pinned: true,
    company: "JAMES BROWN",
  },
  {
    id: 102,
    tags: "movie,script",
    title: "Back To The Future",
    date: 1735663534,
    pinned: false,
    company: "ONELOVE",
  },
];

export function loadPages() {
  return jobs.sort((a, b) => a.id < b.id);
}

export function loadPosts(props) {
  const opt = {
    pinned: true,
    description: false,
    content: false,
    ...props,
  };
  return jobs
    .sort(
      (a, b) =>
        (opt.pinned ? !a.pinned - !b.pinned : 0) ||
        new Date(b.date) - new Date(a.date),
    )
    .map((job) => {
      return {
        companyId: slugify(job.company),
        tags: parseTags(job.tags),
        ...job,
      };
    });
}

export function loadPage(id) {
  const job = jobs.find((x) => x.id === id);
  if (!job) return;

  return {
    id: job.id,
    companyId: slugify(job.company),
    tags: parseTags(job.tags),
    description: job.description,
  };
}

function parseTags(tags) {
  return tags?.split(",").map((x) => [slugify(x), x.trim()]);
}

function createDescription(html) {
  return html.split("\n")[0].replace(/<.+?>/g, "");
}

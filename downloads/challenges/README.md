# WRECKCTF 2025 challenges by Theo Halpern

## Awesome Graphql Blog — Web
Download my-first-graphql.tar.gz, extract it, and follow its README.md to run locally with Docker.

## homemadepasskey — Reverse engineering
XYZ corp does not tell employees their own passwords. Instead, IT distributes homemade STM32 USB “passkeys” that enter their credentials. Unfortunately, the firmware leaked.

Download lookmomimapasskey.elf and inspect it in a reverse-engineering tool such as Ghidra. This is ARM STM32 firmware for analysis; it does not need to run on your computer or be flashed to hardware.

These handouts omit solution scripts and competition flag files. The firmware is the original player handout, including its embedded challenge data.

## Hosting

The website links directly to the `wreckctf-2025-handouts` GitHub release in dumax315/theoh.dev. These files live outside `public/` so Next.js does not serve them. Do not add a Vercel proxy, API download route, or rewrite for these files; download bytes should go directly from GitHub to the visitor.

Release: https://github.com/dumax315/theoh.dev/releases/tag/wreckctf-2025-handouts

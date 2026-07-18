const fs = require("fs");
const path = require("path");
const https = require("https");
const http = require("http");

const assets = [
  // Logo
  {
    url: "https://customer-assets.emergentagent.com/job_2d886d91-6abb-40c6-9e2f-b68641f5a7ed/artifacts/faqatn4h_Logo%20Moobits.png",
    file: "public/assets/logo/logo.png",
  },

  // Cookies
  {
    url: "https://customer-assets.emergentagent.com/job_2d886d91-6abb-40c6-9e2f-b68641f5a7ed/artifacts/8s8pnu10_The%20Classic%20OG%20Cookies.png",
    file: "public/assets/products/cookies/classic-og.png",
  },
  {
    url: "https://customer-assets.emergentagent.com/job_2d886d91-6abb-40c6-9e2f-b68641f5a7ed/artifacts/ks3xrubv_The%20Velvet%20Crush%20Cookies.png",
    file: "public/assets/products/cookies/velvet-crush.png",
  },
  {
    url: "https://customer-assets.emergentagent.com/job_2d886d91-6abb-40c6-9e2f-b68641f5a7ed/artifacts/swvvr9td_The%20Matcha%20Cookies.png",
    file: "public/assets/products/cookies/matcha.png",
  },
  {
    url: "https://customer-assets.emergentagent.com/job_2d886d91-6abb-40c6-9e2f-b68641f5a7ed/artifacts/ao9drma2_The%20Blue%20Monstiez%20Cookies.png",
    file: "public/assets/products/cookies/blue-monstiez.png",
  },

  // Bolu Mini
  {
    url: "https://customer-assets.emergentagent.com/job_moobits-launch/artifacts/lrn3thnd_Bolu%20Mini%20Ketan%20Hitam%20Isian%20Keju%20Lumer.png",
    file: "public/assets/products/bolu-mini/ketan-hitam-lumer.png",
  },
  {
    url: "https://customer-assets.emergentagent.com/job_moobits-launch/artifacts/hnz942qf_Bolu%20Mini%20Ketan%20Hitam%20Topping%20Keju%20Parut.png",
    file: "public/assets/products/bolu-mini/ketan-hitam-parut.png",
  },
  {
    url: "https://customer-assets.emergentagent.com/job_moobits-launch/artifacts/eaag6i5n_Bolu%20Mini%20Red%20Velvet%20Isian%20Keju%20Lumer.png",
    file: "public/assets/products/bolu-mini/red-velvet-lumer.png",
  },
  {
    url: "https://customer-assets.emergentagent.com/job_moobits-launch/artifacts/lm6bcgjz_Bolu%20Mini%20Red%20Velvet%20Topping%20Keju%20Parut.png",
    file: "public/assets/products/bolu-mini/red-velvet-parut.png",
  },
  {
    url: "https://customer-assets.emergentagent.com/job_moobits-launch/artifacts/9ranplh2_Bolu%20Mini%20Pandan%20Isian%20Keju%20Lumer.png",
    file: "public/assets/products/bolu-mini/pandan-lumer.png",
  },
  {
    url: "https://customer-assets.emergentagent.com/job_moobits-launch/artifacts/w9sjxxyk_Bolu%20Mini%20Pandan%20Topping%20Keju%20Parut.png",
    file: "public/assets/products/bolu-mini/pandan-parut.png",
  },

  // Bolu Besar
  {
    url: "https://customer-assets.emergentagent.com/job_moobits-launch/artifacts/ly3jrmjj_Bolu%20Ketan%20Hitam%20Isian%20Keju%20Lumer.png",
    file: "public/assets/products/bolu-besar/ketan-hitam.png",
  },
  {
    url: "https://customer-assets.emergentagent.com/job_moobits-launch/artifacts/fwllb8fc_Bolu%20Pandan%20Isian%20Keju%20Lumer.png",
    file: "public/assets/products/bolu-besar/pandan.png",
  },

  // Brownies
  {
    url: "https://customer-assets.emergentagent.com/job_moobits-launch/artifacts/5vhizhqd_Brownies%20Ketan%20Hitam%20Topping%20Keju%20Parut%20Full.png",
    file: "public/assets/products/brownies/keju-full.png",
  },
  {
    url: "https://customer-assets.emergentagent.com/job_moobits-launch/artifacts/34986dvy_Brownies%20Ketan%20Hitam%20Topping%2050%25%20Keju%20Parut%2050%25%20Chocochips.png",
    file: "public/assets/products/brownies/half-half.png",
  },
];

function download(url, destination, redirects = 5) {
  return new Promise((resolve, reject) => {
    fs.mkdirSync(path.dirname(destination), { recursive: true });

    if (fs.existsSync(destination)) {
      console.log(`⏭ Skip : ${destination}`);
      return resolve("skipped");
    }

    const protocol = url.startsWith("https") ? https : http;

    const request = protocol.get(
      url,
      {
        timeout: 15000,
        headers: {
          "User-Agent": "Mozilla/5.0",
        },
      },
      (response) => {
        // Redirect
        if (
          [301, 302, 303, 307, 308].includes(response.statusCode) &&
          response.headers.location
        ) {
          if (redirects === 0) {
            return reject(new Error("Too many redirects"));
          }

          return resolve(
            download(response.headers.location, destination, redirects - 1)
          );
        }

        if (response.statusCode !== 200) {
          return reject(
            new Error(`HTTP ${response.statusCode} : ${url}`)
          );
        }

        const total = Number(response.headers["content-length"] || 0);

        const file = fs.createWriteStream(destination);

        response.pipe(file);

        file.on("finish", () => {
          file.close(() => {
            console.log(
              `✅ ${path.basename(destination)} (${(total / 1024).toFixed(
                1
              )} KB)`
            );
            resolve("ok");
          });
        });

        file.on("error", (err) => {
          fs.unlink(destination, () => {});
          reject(err);
        });
      }
    );

    request.on("timeout", () => {
      request.destroy();
      reject(new Error("Request timeout"));
    });

    request.on("error", reject);
  });
}

(async () => {
  console.log("\n========== DOWNLOAD ASSETS ==========\n");

  let success = 0;
  let skipped = 0;
  let failed = 0;

  for (const asset of assets) {
    try {
      const result = await download(asset.url, asset.file);

      if (result === "ok") success++;
      if (result === "skipped") skipped++;
    } catch (err) {
      failed++;
      console.log(`❌ ${asset.file}`);
      console.log(err.message);
      console.log("");
    }
  }

  console.log("\n===================================");
  console.log(`✅ Success : ${success}`);
  console.log(`⏭ Skipped : ${skipped}`);
  console.log(`❌ Failed  : ${failed}`);
  console.log("===================================\n");
})();
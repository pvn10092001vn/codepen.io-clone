var ghpages = require("gh-pages");

ghpages.publish(
  "public", // path to public directory
  {
    branch: "gh-pages",
    repo: "https://github.com/npv2k1/codepen.io-clone.git", // Update to point to your repository
    user: {
      name: "Phạm Văn Nguyên", // update to use your name
      email: "npv2k1@gmail.com", // Update to use your email
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);

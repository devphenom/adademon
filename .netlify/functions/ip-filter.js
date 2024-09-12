const cloudflareIps = [
  // ... added all Cloudflare IP ranges here ...
  "103.21.244.0/22",
  "103.22.200.0/22",
  "103.31.4.0/22",
  "104.16.0.0/13",
  "104.24.0.0/14",
  "108.162.192.0/18",
  "131.0.72.0/22",
  "141.101.64.0/18",
  "162.158.0.0/15",
  "172.64.0.0/13",
  "173.245.48.0/20",
  "188.114.96.0/20",
  "190.93.240.0/20",
  "197.234.240.0/22",
  "198.41.128.0/17",
  "2400:cb00::/32",
  "2606:4700::/32",
  "2803:f800::/32",
  "2405:b500::/32",
  "2405:8100::/32",
  "2a06:98c0::/29",
  "2c0f:f248::/32",
];

const ipv4ToInt = (ip) => {
  return ip.split(".").reduce((int, oct) => (int << 8) + parseInt(oct, 10), 0) >>> 0;
};

const isInRange = (ip, cidr) => {
  const [range, bits = 32] = cidr.split("/");
  const mask = ~(2 ** (32 - bits) - 1);
  return (ipv4ToInt(ip) & mask) === (ipv4ToInt(range) & mask);
};

exports.handler = async (event, context) => {
  const ip = event.headers["x-forwarded-for"] || event.headers["client-ip"];

  const isCloudflareIp = cloudflareIps.some((range) => isInRange(ip, range));

  if (!isCloudflareIp) {
    // Example of "Block" action
    return {
      statusCode: 403,
      body: JSON.stringify({ message: "Access denied" }),
    };
  }

  // Example of "Allow" action
  if (event.path === "/api/public") {
    // Allow access to public API
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Welcome to public API" }),
    };
  }

  // Example of "Challenge" action
  if (event.path === "/admin") {
    // Implement a simple challenge (in practice, use a more secure method)
    const userAgent = event.headers["user-agent"] || "";
    if (!userAgent.includes("Mozilla")) {
      return {
        statusCode: 403,
        body: JSON.stringify({ message: "Please use a standard web browser" }),
      };
    }
  }

  // Example of "Log" action
  console.log(`Access granted to ${ip} for path ${event.path}`);

  // If all checks pass, either handle the request here or redirect to your main site
  return {
    statusCode: 301,
    headers: {
      Location: `https://www.yourdomain.com${event.path}`,
    },
  };
};

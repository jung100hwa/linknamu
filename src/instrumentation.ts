export async function register() {
  console.log("[instrumentation] register called, NEXT_RUNTIME=", process.env.NEXT_RUNTIME);
  if (process.env.NEXT_RUNTIME === "nodejs") {
    const dns = await import("dns");
    dns.setServers(["8.8.8.8", "1.1.1.1"]);
    console.log("[instrumentation] dns servers set to", dns.getServers());
  }
}

import { MongoClient } from "mongodb";
import dns from "dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

let clientPromise: Promise<MongoClient> | undefined;

export default function getMongoClient(): Promise<MongoClient> {
  const cached = process.env.NODE_ENV === "development" ? global._mongoClientPromise : clientPromise;
  if (cached) return cached;

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("MONGODB_URI 환경 변수가 설정되지 않았습니다 (.env.local 확인)");
  }

  const promise = new MongoClient(uri).connect();

  if (process.env.NODE_ENV === "development") {
    global._mongoClientPromise = promise;
  } else {
    clientPromise = promise;
  }

  return promise;
}

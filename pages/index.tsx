import { HubEvent, HubEventType, getHubRpcClient } from "@farcaster/hub-web";

export default function Home() {
  function test() {
    const client = getHubRpcClient("https://hoyt.farcaster.xyz:2285");

    const result = client.subscribe({
      eventTypes: [HubEventType.MERGE_MESSAGE],
    });

    result.map((observable) => {
      observable.subscribe({
        next(event: HubEvent) {
          console.log("received event", event);
        },
        error(err) {
          console.error(err);
        },
      });
    });
  }

  test();

  return <>Check the console</>;
}

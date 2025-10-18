export async function GET() {
  return Response.json({
    accountAssociation: {
      header: "eyJmaWQiOjMyODg1NSwidHlwZSI6ImF1dGgiLCJrZXkiOiIweERCOTczZjliNWI0MDhFMkZFNjNFQ2UzNjBEYjFjODU5YjQ5NDFFRTcifQ",
      payload: `eyJkb21haW4iOiJmYXJjYXN0ZXItbWluaWFwcC10ZW1wbGF0ZS1waGkudmVyY2VsLmFwcCJ9`,
      signature: "1bH6yx1yjJgF2olNGcmhAgsbS229TmERlvHsktnOqA88aDMQAPm+WSFEgqfIFtcRFIUsewD5Of72EVNKufxX3Bs="
    },
    frame: {
      version: "1",
      name: "Farcaster MiniApp Template",
      iconUrl: "https://farcaster-miniapp-template-phi.vercel.app/icon.png",
      splashImageUrl: "https://farcaster-miniapp-template-phi.vercel.app/splash.png",
      homeUrl: "https://farcaster-miniapp-template-phi.vercel.app"
    }
  });
}

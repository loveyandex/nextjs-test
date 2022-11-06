export default async function handler(req, res) {
      // Check for secret to confirm this is a valid request
      if (false && req.query.secret !== "process.env.MY_SECRET_TOKEN") {
            return res.status(401).json({ message: 'Invalid token' })
      }

      try {
            // this should be the actual path not a rewritten path
            // e.g. for "/blog/[slug]" this should be "/blog/post-1"
            console.log(req.query)
            console.log(`[Next.js] Revalidating /blog/post-${req.query.postnumber}`);
            await res.revalidate("/blog/post-" + req.query.postnumber)
            return res.json({ revalidated: true })
      } catch (err) {
            // If there was an error, Next.js will continue
            // to show the last successfully generated page
            console.warn(err)

            return res.status(500).send('Error revalidating' + JSON.stringify(err))
      }
}
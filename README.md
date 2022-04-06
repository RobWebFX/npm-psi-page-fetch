# PSI via npm
Fetch scores for Pagespeed Insights by page URL(s) via npm

### Usage

Fetch scores for only https://webfx.com.
```
npm run psi webfx.com
```

Fetch scores for multiple URLs.
```
npm run psi webfx.com webfx.com/seo webfx.com/development
```

### To-dos/features to add
- flag for mobile-only results
- flag for desktop-only results
- flag to save results (orig JSON response) to file
- potential alt args ```npm run psi base:webfx.com pages:/|/seo|/development```, which fetches:
	- webfx.com
	- webfx.com/seo
	- webfx.com/development
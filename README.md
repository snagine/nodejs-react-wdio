# Create the React app:
npx create-react-app nodejs-react-wdio
cd simple-react-app

# Install required dependencies for testing with WebdriverIO:
npm install --save-dev @wdio/cli @wdio/local-runner @wdio/mocha-framework @wdio/sync @wdio/spec-reporter chromedriver wdio-chromedriver-service

# Create a Simple React Component (basically add the UI controls in src/app.js)

# Add WebdriverIO Configuration
npx wdio config

# Start the React app
npm start

# if issues, remove node_modules and package-lock.json and reinstall 
rm -rf node_modules package-lock.json
npm install

# if issues then downgrade wdio version
npm install --save-dev @wdio/cli@7

# install wdio
npx wdio config

# Run the WebdriverIO tests
npx wdio run wdio.conf.js

# push to git



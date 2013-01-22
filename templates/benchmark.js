{
  duration:     120,    // duration in seconds                                                      - default 60
  concurrency:  1,      // number of concurrent requests                                            - default 1
  delay:        0,      // how many milliseconds should be paused between each request (slows down) - default 0
  rampUp:       20,     // how many seconds should it take until all bots are active                - default 0
  actions:[
    {
      name: 'Google Startpage',
      hostname: 'www.google.com',
      path: '/',
      port: 80,
      method: 'GET',
    },
    {
      name: 'Google Search',
      hostname: 'www.google.com',
      path: '/',
      port: 80,
      method: 'GET',
      params: { q: 'southdesign' }
    },
    {
      name: 'Basic Auth Page',
      hostname: 'www.website.com',
      path: '/secret',
      port: 80,
      method: 'GET',
      auth: 'user:password'
    },
    {
      name: 'Function for Dynamic Params',
      hostname: 'www.google.com',
      path: '/',
      port: 80,
      method: 'GET',
      params: function(){
        var index = Math.floor(Math.random() * 3),
            terms = ['one', 'of', 'these'];
        return { q: terms[index] };
      }
    },
    {
      name: 'Posting Content',
      hostname: 'www.google.com',
      path: '/signin',
      port: 80,
      method: 'POST',
      params: { user: 'credentials' }
    }
  ]
}
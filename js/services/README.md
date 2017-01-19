You can use services any time that you have logic you need to use across multiple controllers.
We are going to need our list of games in multiple places throughout our app, so instead of
loading it separately in every controller, we're just going to load it once in a service and
then inject that service into the controllers where we need it.
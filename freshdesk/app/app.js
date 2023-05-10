window.frsh_init().then(function (client) {
  window.client = client;
  // Instance APIs to resize the app real estate available
  // Increasing the height value is supported however width is fixed for this placeholder
  // To use bigger app real estate explore other placeholder options 
  try {
    client.instance.resize({ height: "400px" });
  } catch (error) {
    console.error(error);
  }


  // current instance details
  try {
    client.instance.context().then(function (context) {

      // receive message from other instances
      client.instance.receive(function (e) {
        let data = e.helper.getData();
        console.log(`${context.instance_id}: Received message from ${JSON.stringify(data.sender)}: Message: `, data.message);
      });

      console.log('instance API context', context);
    });
  } catch (error) {
    console.error(error);
  }
});

function showModal() {
  try {
    client.interface.trigger('showModal', {
      title: 'Sample App Form',
      template: 'modal.html',
      data: {
        defaultName: 'test',
        defaultEmail: 'test@email.com'
      }
    })
      .then(
        function (data) {
          console.log('Parent:InterfaceAPI:showModal', data);
        },
        function (error) {
          console.log('Parent:InterfaceAPI:showModal', error);
        }
      );
  } catch (error) {
    console.error(error)
  }
}

function showDialog() {
  try {
    client.interface.trigger('showDialog', {
      title: 'Sample Dialog',
      template: 'modal.html'
    })
      .then(
        function (data) {
          console.log('Parent:InterfaceAPI:showDialog', data);
        },
        function (error) {
          console.log('Parent:InterfaceAPI:showDialog', error);
        }
      );
  } catch (error) {
    console.error(error)
  }
}

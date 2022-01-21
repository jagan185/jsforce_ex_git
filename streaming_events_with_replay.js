let jsforce = require('jsforce');
const userId = 'usssss---- iiiii';
const pwd = '-----ppppp------';
const channel = '/topic/AccountUpdate';
const topicName = 'AccountUpdate';
const replayId = -1; // -2 is all retained events, -1 is new events
let conn = new jsforce.Connection({loginUrl:'https://login.salesforce.com'});
conn.login(userId, pwd, function(err, userInfo){
    if(err){return console.error(err); }
    console.dir("Connected :"+JSON.stringify(userInfo));
    //conn.streaming.topic(topicName).subscribe(function(message){console.dir(message);});

    /*
    const replayExt = new jsforce.StreamingExtension.Replay(channel, replayId);
    const fayeClient = conn.streaming.createClient([ replayExt ]);
    const subscription = fayeClient.subscribe(channel, data => {
        console.dir(data);
    });
    */
    /*
    //get report details
    let reportId = "00O0K00000BHUbrUAH";
    conn.analytics.report(reportId).describe(function (err, meta) {
      if (err) {
        return console.error(err);
      }
      console.log(meta.reportMetadata);
      console.log(meta.reportTypeMetadata);
      console.log(meta.reportExtendedMetadata);
    });
   */ 

        //conn.streaming.topic("/event/Opportunity_Events__e").subscribe(function (message) {
      //conn.streaming.topic("LeadDataChanges").subscribe(function (message) {
        conn.streaming.topic("/event/Opportunity_Events__e").subscribe(function (message) {
          //console.dir('::: login ::'+JSON.stringify(userInfo));
          console.dir(message);
          //console.log('Event Type : ' + message.event.type);
          //console.log('Event Created : ' + message.event.createdDate);
          //console.log('Object Id : ' + message.sobject.Id);
  
      });

});



/*

// The Salesforce streaming topic and position to start from.
const channel = "/topic/LeadDataChanges";
const replayId = -1; // receive only new messages without replay

// Construct a streaming client.
const fayeClient = conn.streaming.createClient([
    new jsforce.StreamingExtension.Replay(channel, replayId),
    new jsforce.StreamingExtension.AuthFailure(() => process.exit(1))
  ]);
  
  // Subscribe to the channel with a function to receive each message.
  const subscription = fayeClient.subscribe(channel, data => {
    console.log('topic received data', JSON.stringify(data));
  });

  // Eventually, close the connection.
subscription.cancel();

  */

  /*
 conn.login(username, password, loginCallback);

 function loginCallback (salesforceConnection) {
  const topic = `/topic/${process.env.SALESFORCE_TOPIC}`
  const replayExt = new jsforce.StreamingExtension.Replay(topic, -2)
  const fayeClient = salesforceConnection.streaming.createClient([replayExt])

  fayeClient.subscribe(topic, (salesforceEvent) => {
    console.log('Received: %j',salesforceEvent)
    return doSomething(salesforceEvent)
  })
}
*/
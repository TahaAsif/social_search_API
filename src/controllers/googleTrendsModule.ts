/* ******************* Autocomplete **************************/
export class GoogleTrends {

  

  constructor() {
    this.googleTrends = require("../node_modules/google-trends-api/lib/google-trends-api.min.js");
  }

  autoComplete() {
    this.googleTrends
      .autoComplete({ keyword: "Back to school" })
      .then(res => {
        console.log("this is res", res);
      })
      .catch(err => {
        console.log("got the error", err);
        console.log("error message", err.message);
        console.log("request body", err.requestBody);
      });
  }

  /* ******************* Interest over time **************************/

  searchByKeyword() {
    this.googleTrends
      .interestOverTime({ keyword: "Valentines Day" })
      .then(res => {
        console.log("this is res", res);
      })
      .catch(err => {
        console.log("got the error", err);
        console.log("error message", err.message);
        console.log("request body", err.requestBody);
      });
  }
  interestOverDate() {
    this.googleTrends.interestOverTime(
      {
        keyword: "Valentines Day",
        startTime: new Date(Date.now() - 4 * 60 * 60 * 1000),
        granularTimeResolution: true,
      },
      function(err, results) {
        if (err) console.log("oh no error!", err);
        else console.log(results);
      }
    );
  }

  /* ****** Interest over time - Set a custom timezone ***************/
  interestOverTime() {
    this.googleTrends.interestOverTime(
      {
        keyword: "Valentines Day",
        timezone: new Date().getTimezoneOffset() / 60,
      },
      function(err, results) {
        if (err) console.log("oh no error!", err);
        else console.log(results);
      }
    );
  }

  /* ****** Interest over time - Comparing multiple keywords *********/
  searchByMultipleKeywords() {
    this.googleTrends
      .interestOverTime({ keyword: ["Valentines Day", "Christmas Day"] })
      .then(res => {
        console.log("this is res", res);
      })
      .catch(err => {
        console.log("got the error", err);
      });
  }
  /* ******************* Interest by region **************************/
  interestByRegion() {
    this.googleTrends
      .interestByRegion({
        keyword: "Donald Trump",
        startTime: new Date("2017-02-01"),
        endTime: new Date("2017-02-06"),
        resolution: "CITY",
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
  interestByLocation() {
    this.googleTrends
      .interestByRegion({
        keyword: "Donald Trump",
        startTime: new Date("2017-02-01"),
        endTime: new Date("2017-02-06"),
        geo: "US-CA",
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  /* ******************* Related queries **************************/
  relatedQueries() {
    this.googleTrends
      .relatedQueries({ keyword: "Westminster Dog Show" })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  /* ******************* Related topics **************************/

  relatedTopics() {
    this.googleTrends
      .relatedTopics({
        keyword: "Chipotle",
        startTime: new Date("2015-01-01"),
        endTime: new Date("2017-02-10"),
      })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
}

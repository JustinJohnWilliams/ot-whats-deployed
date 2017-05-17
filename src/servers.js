const servers = [
  {
    "id": 24,
    "name": "CORPQA1APP01",
    "created_at": "2016-03-04T18:16:35.854Z",
    "updated_at": "2016-10-26T20:36:42.322Z",
    "sort_priority": 1
  },
  {
    "id": 25,
    "name": "CORPQA2APP01",
    "created_at": "2016-03-05T03:47:27.835Z",
    "updated_at": "2016-10-26T20:36:57.448Z",
    "sort_priority": 2
  },
  {
    "id": 57,
    "name": "CORPQA3APP01",
    "created_at": "2016-08-03T22:07:03.820Z",
    "updated_at": "2016-10-26T20:37:17.401Z",
    "sort_priority": 3
  },
  {
    "id": 31,
    "name": "VMQA03",
    "created_at": "2016-04-06T16:09:32.660Z",
    "updated_at": "2016-04-06T16:09:32.660Z",
    "sort_priority": 100
  },
  {
    "id": 33,
    "name": "CORPDEV14",
    "created_at": "2016-04-11T16:49:39.518Z",
    "updated_at": "2016-04-11T16:49:39.518Z",
    "sort_priority": 100
  },
  {
    "id": 34,
    "name": "CORPDEV06",
    "created_at": "2016-05-10T17:05:19.749Z",
    "updated_at": "2016-05-10T17:05:19.749Z",
    "sort_priority": 100
  },
  {
    "id": 35,
    "name": "CORPDMZDEVPRO01",
    "created_at": "2016-05-10T18:03:30.786Z",
    "updated_at": "2016-05-10T18:03:30.786Z",
    "sort_priority": 100
  },
  {
    "id": 37,
    "name": "CORPDMZDEVPRO02",
    "created_at": "2016-05-17T17:22:13.213Z",
    "updated_at": "2016-05-17T17:22:13.213Z",
    "sort_priority": 100
  },
  {
    "id": 42,
    "name": "CORPDEV11",
    "created_at": "2016-05-19T07:03:00.717Z",
    "updated_at": "2016-05-19T07:03:00.717Z",
    "sort_priority": 100
  },
  {
    "id": 43,
    "name": "CORPDEV15",
    "created_at": "2016-05-19T07:05:06.187Z",
    "updated_at": "2016-05-19T07:05:06.187Z",
    "sort_priority": 100
  },
  {
    "id": 44,
    "name": "CORPDEV13",
    "created_at": "2016-05-19T07:11:01.288Z",
    "updated_at": "2016-05-19T07:11:01.288Z",
    "sort_priority": 100
  },
  {
    "id": 46,
    "name": "CORPDEV10",
    "created_at": "2016-05-19T17:13:48.295Z",
    "updated_at": "2016-05-19T17:13:48.295Z",
    "sort_priority": 100
  },
  {
    "id": 47,
    "name": "CORPDEMO01",
    "created_at": "2016-05-19T21:41:44.120Z",
    "updated_at": "2016-05-19T21:41:44.120Z",
    "sort_priority": 100
  },
  {
    "id": 48,
    "name": "CORPDMZDEV1",
    "created_at": "2016-05-25T07:05:45.713Z",
    "updated_at": "2016-05-25T07:05:45.713Z",
    "sort_priority": 100
  },
  {
    "id": 50,
    "name": "TESTSTAGING",
    "created_at": "2016-06-02T16:38:10.289Z",
    "updated_at": "2016-06-02T16:38:10.289Z",
    "sort_priority": 100
  },
  {
    "id": 51,
    "name": "PRODSTAGING",
    "created_at": "2016-06-02T20:53:32.588Z",
    "updated_at": "2016-06-02T20:53:32.588Z",
    "sort_priority": 100
  },
  {
    "id": 52,
    "name": "CORPDEV08",
    "created_at": "2016-06-07T22:53:24.228Z",
    "updated_at": "2016-06-07T22:53:24.228Z",
    "sort_priority": 100
  },
  {
    "id": 53,
    "name": "CORPDEV09",
    "created_at": "2016-06-08T18:25:25.937Z",
    "updated_at": "2016-06-08T18:25:25.937Z",
    "sort_priority": 100
  },
  {
    "id": 54,
    "name": "CORPDEV18",
    "created_at": "2016-07-06T16:55:45.685Z",
    "updated_at": "2016-07-06T16:55:45.685Z",
    "sort_priority": 100
  },
  {
    "id": 55,
    "name": "",
    "created_at": "2016-07-28T18:24:50.715Z",
    "updated_at": "2016-07-28T18:24:50.715Z",
    "sort_priority": 100
  },
  {
    "id": 56,
    "name": "{CORPQA1APP01}",
    "created_at": "2016-07-28T22:35:30.692Z",
    "updated_at": "2016-07-28T22:35:30.692Z",
    "sort_priority": 100
  },
  {
    "id": 58,
    "name": "UKTESTSTAGING",
    "created_at": "2016-08-10T18:46:15.474Z",
    "updated_at": "2016-08-10T18:46:15.474Z",
    "sort_priority": 100
  },
  {
    "id": 59,
    "name": "CORPDEV05",
    "created_at": "2016-08-23T13:40:46.207Z",
    "updated_at": "2016-08-23T13:40:46.207Z",
    "sort_priority": 100
  },
  {
    "id": 60,
    "name": "CORPDEVSCRATCH",
    "created_at": "2016-08-30T17:04:01.071Z",
    "updated_at": "2016-08-30T17:04:01.071Z",
    "sort_priority": 100
  },
  {
    "id": 61,
    "name": "TESTWEBSTAGE",
    "created_at": "2016-08-31T16:02:05.688Z",
    "updated_at": "2016-08-31T16:02:05.688Z",
    "sort_priority": 100
  },
  {
    "id": 62,
    "name": "CORPDEV02",
    "created_at": "2016-09-12T19:15:08.669Z",
    "updated_at": "2016-09-12T19:15:08.669Z",
    "sort_priority": 100
  },
  {
    "id": 63,
    "name": "DEVPROSCRATCH",
    "created_at": "2016-09-27T19:00:11.197Z",
    "updated_at": "2016-09-27T19:00:11.197Z",
    "sort_priority": 100
  },
  {
    "id": 64,
    "name": "CORPDEV00",
    "created_at": "2016-11-01T21:07:20.403Z",
    "updated_at": "2016-11-01T21:07:20.403Z",
    "sort_priority": 100
  },
  {
    "id": 65,
    "name": "DRTELIXAPP01",
    "created_at": "2017-01-06T21:21:05.042Z",
    "updated_at": "2017-01-06T21:21:05.042Z",
    "sort_priority": 100
  },
  {
    "id": 66,
    "name": "DRINTERNAPAPP01",
    "created_at": "2017-01-30T17:09:29.266Z",
    "updated_at": "2017-01-30T17:09:29.266Z",
    "sort_priority": 100
  },
  {
    "id": 67,
    "name": "CORPDMZDEVSF01",
    "created_at": "2017-02-02T23:37:15.005Z",
    "updated_at": "2017-02-02T23:37:15.005Z",
    "sort_priority": 100
  },
  {
    "id": 28,
    "name": "CORPDEV07",
    "created_at": "2016-03-10T21:25:08.592Z",
    "updated_at": "2016-03-10T21:25:08.592Z",
    "sort_priority": 100
  },
  {
    "id": 68,
    "name": "PRODWEBSTAGE",
    "created_at": "2017-02-22T22:36:09.672Z",
    "updated_at": "2017-02-22T22:36:09.672Z",
    "sort_priority": 100
  },
  {
    "id": 29,
    "name": "CORPDEV12",
    "created_at": "2016-03-23T17:01:39.836Z",
    "updated_at": "2016-03-23T17:01:39.836Z",
    "sort_priority": 100
  },
  {
    "id": 30,
    "name": "CORPDEV01",
    "created_at": "2016-04-05T15:35:59.582Z",
    "updated_at": "2016-04-05T15:35:59.582Z",
    "sort_priority": 100
  }
]

export default servers;

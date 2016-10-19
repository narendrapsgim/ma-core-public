--
--    Copyright (C) 2014 Infinite Automation Systems Inc. All rights reserved.
--    @author Matthew Lohbihler
--
--
-- System settings
create table systemSettings (
  settingName nvarchar(64) not null,
  settingValue ntext,
  primary key (settingName)
);

--
-- Templates
create table templates (
  id int not null identity,
  xid nvarchar(50) not null,
  name nvarchar(255) not null,
  templateType nvarchar(50) not null,
  readPermission nvarchar(255),
  setPermission nvarchar(255),
  data image not null,
  primary key (id)
);
alter table templates add constraint templatesUn1 unique (xid);

--
-- Users
create table users (
  id int not null identity,
  username nvarchar(40) not null,
  password nvarchar(30) not null,
  email nvarchar(255) not null,
  phone nvarchar(40),
  disabled char(1) not null,
  lastLogin bigint,
  homeUrl nvarchar(255),
  receiveAlarmEmails int not null,
  receiveOwnAuditEvents char(1) not null,
  timezone nvarchar(50),
  muted char(1),
  permissions nvarchar(255),
  primary key (id)
);

create table userComments (
  userId int,
  commentType int not null,
  typeKey int not null,
  ts bigint not null,
  commentText nvarchar(1024) not null
);
alter table userComments add constraint userCommentsFk1 foreign key (userId) references users(id);


--
-- Mailing lists
create table mailingLists (
  id int not null identity,
  xid nvarchar(50) not null,
  name nvarchar(40) not null,
  primary key (id)
);
alter table mailingLists add constraint mailingListsUn1 unique (xid);

create table mailingListInactive (
  mailingListId int not null,
  inactiveInterval int not null
);
alter table mailingListInactive add constraint mailingListInactiveFk1 foreign key (mailingListId) 
  references mailingLists(id) on delete cascade;

create table mailingListMembers (
  mailingListId int not null,
  typeId int not null,
  userId int,
  address nvarchar(255)
);
alter table mailingListMembers add constraint mailingListMembersFk1 foreign key (mailingListId) 
  references mailingLists(id) on delete cascade;


--
--
-- Data Sources
--
create table dataSources (
  id int not null identity,
  xid nvarchar(50) not null,
  name nvarchar(40) not null,
  dataSourceType nvarchar(40) not null,
  data image not null,
  rtdata image,
  editPermission nvarchar(255),
  primary key (id)
);
alter table dataSources add constraint dataSourcesUn1 unique (xid);


--
--
-- Data Points
--
create table dataPoints (
  id int not null identity,
  xid nvarchar(50) not null,
  dataSourceId int not null,
  name nvarchar(255),
  deviceName nvarchar(255),
  enabled char(1),
  pointFolderId int,
  loggingType int,
  intervalLoggingPeriodType int,
  intervalLoggingPeriod int,
  intervalLoggingType int,
  tolerance float,
  purgeOverride char(1),
  purgeType int,
  purgePeriod int,
  defaultCacheSize int,
  discardExtremeValues char(1),
  engineeringUnits int,
  data image not null,
  readPermission nvarchar(255),
  setPermission nvarchar(255),
  templateId int,
  primary key (id)
);
alter table dataPoints add constraint dataPointsUn1 unique (xid);
alter table dataPoints add constraint dataPointsFk1 foreign key (dataSourceId) references dataSources(id);
ALTER TABLE dataPoints ADD CONSTRAINT dataPointsFk2 FOREIGN KEY (templateId) REFERENCES templates(id);
CREATE INDEX nameIndex on dataPoints (name ASC);
CREATE INDEX deviceNameIndex on dataPoints (deviceName ASC);
CREATE INDEX pointFolderIndex on dataPoints (pointFolderId ASC);
CREATE INDEX dataSourceIndex on dataPoints (dataSourceId ASC);

-- Data point hierarchy
CREATE TABLE dataPointHierarchy (
  id int NOT NULL identity,
  parentId int,
  name nvarchar(100),
  PRIMARY KEY (id)
);


--
--
-- Point Values (historical data)
--
create table pointValues (
  id bigint not null identity,
  dataPointId int not null,
  dataType int not null,
  pointValue float,
  ts bigint not null,
  primary key (id)
);
create index pointValuesIdx1 on pointValues (dataPointId, ts);

create table pointValueAnnotations (
  pointValueId bigint not null,
  textPointValueShort nvarchar(128),
  textPointValueLong ntext,
  sourceMessage ntext,
  primary key (pointValueId)
);
  


--
--
-- Point event detectors
--
create table pointEventDetectors (
  id int not null identity,
  xid nvarchar(50) not null,
  alias nvarchar(255),
  dataPointId int not null,
  detectorType int not null,
  alarmLevel int not null,
  stateLimit float,
  duration int,
  durationType int,
  binaryState char(1),
  multistateState int,
  changeCount int,
  alphanumericState nvarchar(128),
  weight float,
  primary key (id)
);
alter table pointEventDetectors add constraint pointEventDetectorsUn1 unique (xid, dataPointId);
alter table pointEventDetectors add constraint pointEventDetectorsFk1 foreign key (dataPointId) 
  references dataPoints(id);


--
--
-- Events
--
create table events (
  id int not null identity,
  typeName nvarchar(32) not null,
  subtypeName nvarchar(32),
  typeRef1 int not null,
  typeRef2 int not null,
  activeTs bigint not null,
  rtnApplicable char(1) not null,
  rtnTs bigint,
  rtnCause int,
  alarmLevel int not null,
  message ntext,
  ackTs bigint,
  ackUserId int,
  alternateAckSource ntext,
  primary key (id)
);
alter table events add constraint eventsFk1 foreign key (ackUserId) references users(id);

create table userEvents (
  eventId int not null,
  userId int not null,
  silenced char(1) not null,
  primary key (eventId, userId)
);
alter table userEvents add constraint userEventsFk1 foreign key (eventId) references events(id) on delete cascade;
alter table userEvents add constraint userEventsFk2 foreign key (userId) references users(id);


--
--
-- Event handlers
--
create table eventHandlers (
  id int not null identity,
  xid nvarchar(50) not null,
  alias nvarchar(255),
  
  -- Event type, see events
  eventTypeName nvarchar(32) not null,
  eventSubtypeName nvarchar(32),
  eventTypeRef1 int not null,
  eventTypeRef2 int not null,
  
  data image not null,
  primary key (id)
);
alter table eventHandlers add constraint eventHandlersUn1 unique (xid);


--
--
-- Publishers
--
create table publishers (
  id int not null identity,
  xid nvarchar(50) not null,
  publisherType nvarchar(40) not null,
  data image not null,
  rtdata image,
  primary key (id)
);
alter table publishers add constraint publishersUn1 unique (xid);

`
--
--
-- JsonData
--
CREATE TABLE jsonData (
  	id int not null identity,
	xid nvarchar(50) not null,
	name nvarchar(255) not null,
	readPermission varchar(255),
  	editPermission varchar(255),
  	publicData char(1),
  	data ntext,
    primary key (id)
)engine=InnoDB;
ALTER TABLE jsonData ADD CONSTRAINT jsonDataUn1 UNIQUE (xid);

--
--
-- Compound events detectors
--
-- create table compoundEventDetectors (
--   id int not null identity,
--   xid nvarchar(50) not null,
--   name nvarchar(100),
--   alarmLevel int not null,
--   returnToNormal char(1) not null,
--   disabled char(1) not null,
--   conditionText nvarchar(256) not null,
--   primary key (id)
-- );
-- alter table compoundEventDetectors add constraint compoundEventDetectorsUn1 unique (xid);


/*==============================================================*/
/* DBMS name:      MySQL 5.0                                    */
/* Created on:     11/12/2019 6:15:20 PM                        */
/*==============================================================*/


alter table BLOG_IMAGES 
   drop foreign key FK_BLOG_IMA_RELATIONS_BLOGS;

alter table IMAGES 
   drop foreign key FK_IMAGES_RELATIONS_ALBUMS;

drop table if exists ADMINS;

drop table if exists ALBUMS;

drop table if exists BLOGS;


alter table BLOG_IMAGES 
   drop foreign key FK_BLOG_IMA_RELATIONS_BLOGS;

drop table if exists BLOG_IMAGES;


alter table IMAGES 
   drop foreign key FK_IMAGES_RELATIONS_ALBUMS;

drop table if exists IMAGES;

drop table if exists QANDAS;

drop table if exists YOUTUBE_CLIPS;

/*==============================================================*/
/* Table: ADMINS                                                */
/*==============================================================*/
create table ADMINS
(
   ID                   int not null auto_increment  comment '',
   USERNAME             varchar(20) unique not null  comment '',
   PASSWORD             varchar(50) not null  comment '',
   ROLE                 varchar(10) not null  comment '',
   STATUS               bool not null  comment '',
   primary key (ID)
);

/*==============================================================*/
/* Table: ALBUMS                                                */
/*==============================================================*/
create table ALBUMS
(
   ID                   int not null auto_increment  comment '',
   TITLE                varchar(100) not null  comment '',
   THUMBNAIL_PICTURE    varchar(150) not null  comment '',
   UPLOAD_DATE          varchar(20) not null  comment '',
   CONTENT              varchar(10000) not null  comment '',
   REF_LINK             varchar(150)  comment '',
   STATUS               bool not null  comment '',
   primary key (ID)
);

/*==============================================================*/
/* Table: BLOGS                                                 */
/*==============================================================*/
create table BLOGS
(
   ID                   int not null auto_increment  comment '',
   TITLE                varchar(100) not null  comment '',
   THUMBNAIL_PIC        varchar(500) not null  comment '',
   CONTENT              varchar(10000) not null  comment '',
   UPLOAD_DATE          varchar(20) not null  comment '',
   STATUS               bool not null  comment '',
   primary key (ID)
);

/*==============================================================*/
/* Table: BLOG_IMAGES                                           */
/*==============================================================*/
create table BLOG_IMAGES
(
   ID                   int not null auto_increment  comment '',
   NAME                 varchar(500) not null  comment '',
   BLOG_ID              int not null  comment '',
   STATUS               bool not null  comment '',
   primary key (ID, BLOG_ID)
);

/*==============================================================*/
/* Table: IMAGES                                                */
/*==============================================================*/
create table IMAGES
(
   ID                   int not null auto_increment  comment '',
   NAME                 varchar(500) not null  comment '',
   ALBUM_ID             int not null  comment '',
   STATUS               bool not null  comment '',
   primary key (ID, ALBUM_ID)
);

/*==============================================================*/
/* Table: QANDAS                                                */
/*==============================================================*/
create table QANDAS
(
   ID                   int not null auto_increment  comment '',
   QUESTION_CONTENT     varchar(1000) not null  comment '',
   ANSWER_CONTENT       varchar(1000)  comment '',
   SENDER_EMAIL         varchar(100)  comment '',
   IS_PRIVATE           bool not null  comment '',
   UPLOAD_DATE          varchar(20) not null  comment '',
   STATUS               bool not null  comment '',
   primary key (ID)
);

/*==============================================================*/
/* Table: YOUTUBE_CLIPS                                         */
/*==============================================================*/
create table YOUTUBE_CLIPS
(
   ID                   int not null auto_increment  comment '',
   TITLE                varchar(100) not null  comment '',
   LINK                 varchar(150) not null  comment '',
   DETAIL_INFO          varchar(500) not null  comment '',
   UPLOAD_DATE          varchar(20) not null  comment '',
   STATUS               bool not null  comment '',
   primary key (ID)
);

alter table BLOG_IMAGES add constraint FK_BLOG_IMA_RELATIONS_BLOGS foreign key (BLOG_ID)
      references BLOGS (ID) on delete cascade;

alter table IMAGES add constraint FK_IMAGES_RELATIONS_ALBUMS foreign key (ALBUM_ID)
      references ALBUMS (ID) on delete cascade;


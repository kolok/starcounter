drop database starcounter;
create database if not exists starcounter;

use starcounter;

create table if not exists stars (
    id int unsigned auto_increment primary key,
    user varchar(255) not null,
    counter int not null default 0
);

insert into stars
  (user, counter) 
values
  ('Emilie', 4),
  ('Nicolas', 15);

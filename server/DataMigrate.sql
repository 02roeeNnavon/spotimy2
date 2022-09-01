

CREATE TABLE public.t_songs (
    name text,
    id character varying(255),
    songurl text,
    genre text,
    imageurl text,
    singer text
);


ALTER TABLE public.t_songs OWNER TO postgres;

--
-- TOC entry 3328 (class 0 OID 40968)
-- Dependencies: 220
-- Data for Name: t_songs; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.t_songs (name, id, songurl, genre, imageurl, singer) VALUES ('never gonna give you up', 'dfdf05', 'neverGonnaGiveYouUp.mp3', 'pop', 'https://i0.wp.com/legitmuzic.com/wp-content/uploads/2021/09/1-44.png?w=740&ssl=1', 'Rick Astley');
INSERT INTO public.t_songs (name, id, songurl, genre, imageurl, singer) VALUES ('Our god is an awsome god', 'kjih12', 'ourGodIsAwsomeGod.mp3', 'techno', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd6wF1cYv70JfkzOtiu9d_S1AuUH6yZYYWrg&usqp=CAU', 'Michael W. Smith');
INSERT INTO public.t_songs (name, id, songurl, genre, imageurl, singer) VALUES ('Ivri ANochi', 'kwe2q2', 'ivriAnochi.mp3', 'jewish pop', 'https://i.ytimg.com/vi/vtMikRFnb2Q/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB4TaSUNCr37cW6joFUKZqPYG4VPw', 'Benny Friedman');
INSERT INTO public.t_songs (name, id, songurl, genre, imageurl, singer) VALUES ('Trap anthem', '3khgy1', 'trapAnthem.mp3', 'weebs things', 'https://i1.sndcdn.com/artworks-PH5Tyz29rQuGlRGj-6ROvtQ-t500x500.jpg', 'Yun Head');
INSERT INTO public.t_songs (name, id, songurl, genre, imageurl, singer) VALUES ('dumb', 'TACOTx', 'dumb.mp3', 'rock', 'undefined', 'Kurt Cobain');



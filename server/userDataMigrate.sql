

CREATE TABLE public.t_users (
    username text,
    password text,
    status text
);


ALTER TABLE public.t_users OWNER TO postgres;

--
-- TOC entry 3331 (class 0 OID 49152)
-- Dependencies: 221
-- Data for Name: t_users; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.t_users (username, password, status) VALUES ('Kasia', 'wM5JGlQSvmgpXtX', 'admin');
INSERT INTO public.t_users (username, password, status) VALUES ('Linda', 'z4mgBRCADRJRsPE', 'user');


-- Completed on 2022-09-06 16:38:52

--
-- PostgreSQL database dump complete
--


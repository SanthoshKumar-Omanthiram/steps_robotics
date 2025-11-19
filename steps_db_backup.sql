--
-- PostgreSQL database dump
--

\restrict ZTepW1IoJCcrIf4tAqpqwSdYCS76sQtb79q3wYipFpiHpMXcal5RSLasDlviEJ6

-- Dumped from database version 17.6
-- Dumped by pg_dump version 17.6

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: public; Type: SCHEMA; Schema: -; Owner: postgres
--

-- *not* creating schema, since initdb creates it


ALTER SCHEMA public OWNER TO postgres;

--
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON SCHEMA public IS '';


--
-- Name: update_updated_at_column(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.update_updated_at_column() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
  BEGIN
      NEW.updated_at = CURRENT_TIMESTAMP;
      RETURN NEW;
  END;
  $$;


ALTER FUNCTION public.update_updated_at_column() OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: banners; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.banners (
    id integer NOT NULL,
    banner_title1 text,
    banner_title2 text,
    paragraph text,
    button_name text,
    button_link text,
    image text,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.banners OWNER TO postgres;

--
-- Name: banners_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.banners_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.banners_id_seq OWNER TO postgres;

--
-- Name: banners_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.banners_id_seq OWNED BY public.banners.id;


--
-- Name: contacts; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.contacts (
    id integer NOT NULL,
    firstname character varying(100),
    lastname character varying(100),
    email character varying(150),
    phone character varying(20),
    message text,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.contacts OWNER TO postgres;

--
-- Name: contacts_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.contacts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.contacts_id_seq OWNER TO postgres;

--
-- Name: contacts_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.contacts_id_seq OWNED BY public.contacts.id;


--
-- Name: course_feedback_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.course_feedback_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.course_feedback_id_seq OWNER TO postgres;

--
-- Name: course_feedback; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.course_feedback (
    id integer DEFAULT nextval('public.course_feedback_id_seq'::regclass) NOT NULL,
    name character varying(100),
    role character varying(150),
    image text,
    rating numeric(2,1),
    text text
);


ALTER TABLE public.course_feedback OWNER TO postgres;

--
-- Name: course_highlights_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.course_highlights_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.course_highlights_id_seq OWNER TO postgres;

--
-- Name: course_highlights; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.course_highlights (
    id integer DEFAULT nextval('public.course_highlights_id_seq'::regclass) NOT NULL,
    course_id integer NOT NULL,
    highlight text NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.course_highlights OWNER TO postgres;

--
-- Name: course_objectives_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.course_objectives_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.course_objectives_id_seq OWNER TO postgres;

--
-- Name: course_objectives; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.course_objectives (
    id integer DEFAULT nextval('public.course_objectives_id_seq'::regclass) NOT NULL,
    course_id integer NOT NULL,
    objective text NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.course_objectives OWNER TO postgres;

--
-- Name: courses_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.courses_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.courses_id_seq OWNER TO postgres;

--
-- Name: courses; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.courses (
    id integer DEFAULT nextval('public.courses_id_seq'::regclass) NOT NULL,
    title character varying(255) NOT NULL,
    description text,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    image text,
    heroictitle character varying(255),
    heroicimage text
);


ALTER TABLE public.courses OWNER TO postgres;

--
-- Name: explore_courses; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.explore_courses (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    description text,
    image character varying(500),
    button_text character varying(100),
    button_link character varying(500),
    list_items text[],
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.explore_courses OWNER TO postgres;

--
-- Name: explore_courses_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.explore_courses_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.explore_courses_id_seq OWNER TO postgres;

--
-- Name: explore_courses_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.explore_courses_id_seq OWNED BY public.explore_courses.id;


--
-- Name: footer; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.footer (
    id integer NOT NULL,
    logo_url text,
    address text,
    mobile character varying(50),
    email character varying(255),
    facebook text,
    twitter text,
    instagram text,
    youtube text,
    linkedin text,
    talk_image_url text
);


ALTER TABLE public.footer OWNER TO postgres;

--
-- Name: footer_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.footer_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.footer_id_seq OWNER TO postgres;

--
-- Name: footer_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.footer_id_seq OWNED BY public.footer.id;


--
-- Name: footer_info; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.footer_info (
    id integer NOT NULL,
    logo_url text,
    address text,
    mobile text,
    email text,
    talk_image text,
    facebook text,
    twitter text,
    instagram text,
    youtube text,
    linkedin text
);


ALTER TABLE public.footer_info OWNER TO postgres;

--
-- Name: footer_info_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.footer_info_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.footer_info_id_seq OWNER TO postgres;

--
-- Name: footer_info_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.footer_info_id_seq OWNED BY public.footer_info.id;


--
-- Name: lessons_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.lessons_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.lessons_id_seq OWNER TO postgres;

--
-- Name: lessons; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.lessons (
    id integer DEFAULT nextval('public.lessons_id_seq'::regclass) NOT NULL,
    module_id integer NOT NULL,
    title character varying(255) NOT NULL,
    content text,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.lessons OWNER TO postgres;

--
-- Name: logo; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.logo (
    id integer NOT NULL,
    logo_url text,
    updated_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.logo OWNER TO postgres;

--
-- Name: logo_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.logo_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.logo_id_seq OWNER TO postgres;

--
-- Name: logo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.logo_id_seq OWNED BY public.logo.id;


--
-- Name: modules_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.modules_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.modules_id_seq OWNER TO postgres;

--
-- Name: modules; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.modules (
    id integer DEFAULT nextval('public.modules_id_seq'::regclass) NOT NULL,
    course_id integer NOT NULL,
    title character varying(255) NOT NULL,
    description text,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.modules OWNER TO postgres;

--
-- Name: navbar_items; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.navbar_items (
    id integer NOT NULL,
    label text NOT NULL,
    href text NOT NULL,
    visible boolean DEFAULT true,
    order_index integer DEFAULT 0
);


ALTER TABLE public.navbar_items OWNER TO postgres;

--
-- Name: navbar_items_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.navbar_items_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.navbar_items_id_seq OWNER TO postgres;

--
-- Name: navbar_items_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.navbar_items_id_seq OWNED BY public.navbar_items.id;


--
-- Name: password_reset_otps_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.password_reset_otps_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.password_reset_otps_id_seq OWNER TO postgres;

--
-- Name: password_reset_otps; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.password_reset_otps (
    id integer DEFAULT nextval('public.password_reset_otps_id_seq'::regclass) NOT NULL,
    user_id integer,
    otp character varying(6),
    expires_at timestamp without time zone,
    used boolean DEFAULT false
);


ALTER TABLE public.password_reset_otps OWNER TO postgres;

--
-- Name: programs_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.programs_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.programs_id_seq OWNER TO postgres;

--
-- Name: programs; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.programs (
    id integer DEFAULT nextval('public.programs_id_seq'::regclass) NOT NULL,
    days character varying(255),
    duration character varying(255),
    "time" character varying(255),
    venue text,
    materials text,
    mentors text,
    batch_size text,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.programs OWNER TO postgres;

--
-- Name: steps_robotics; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.steps_robotics (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    image character varying(500),
    video character varying(500),
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.steps_robotics OWNER TO postgres;

--
-- Name: steps_robotics_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.steps_robotics_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.steps_robotics_id_seq OWNER TO postgres;

--
-- Name: steps_robotics_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.steps_robotics_id_seq OWNED BY public.steps_robotics.id;


--
-- Name: study_gallery; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.study_gallery (
    id integer NOT NULL,
    image text NOT NULL,
    alt text
);


ALTER TABLE public.study_gallery OWNER TO postgres;

--
-- Name: study_gallery_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.study_gallery_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.study_gallery_id_seq OWNER TO postgres;

--
-- Name: study_gallery_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.study_gallery_id_seq OWNED BY public.study_gallery.id;


--
-- Name: testimonials; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.testimonials (
    id integer NOT NULL,
    name text NOT NULL,
    role text NOT NULL,
    quote text NOT NULL,
    description text NOT NULL,
    rating double precision DEFAULT 0,
    image text,
    created_at timestamp without time zone DEFAULT now(),
    updated_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.testimonials OWNER TO postgres;

--
-- Name: testimonials_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.testimonials_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.testimonials_id_seq OWNER TO postgres;

--
-- Name: testimonials_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.testimonials_id_seq OWNED BY public.testimonials.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    full_name character varying(100),
    student_id character varying(50),
    age integer,
    grade character varying(20),
    email character varying(100),
    parent_phone character varying(20),
    password_hash text,
    role text,
    access smallint DEFAULT 0,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: why_choose_robotics; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.why_choose_robotics (
    id integer NOT NULL,
    section_data jsonb NOT NULL,
    created_at timestamp without time zone DEFAULT now()
);


ALTER TABLE public.why_choose_robotics OWNER TO postgres;

--
-- Name: why_choose_robotics_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.why_choose_robotics_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.why_choose_robotics_id_seq OWNER TO postgres;

--
-- Name: why_choose_robotics_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.why_choose_robotics_id_seq OWNED BY public.why_choose_robotics.id;


--
-- Name: why_choose_steps_items; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.why_choose_steps_items (
    id integer NOT NULL,
    icon text NOT NULL,
    heading text NOT NULL,
    description text,
    side text,
    order_index integer DEFAULT 0,
    CONSTRAINT why_choose_steps_items_side_check CHECK ((side = ANY (ARRAY['left'::text, 'right'::text])))
);


ALTER TABLE public.why_choose_steps_items OWNER TO postgres;

--
-- Name: why_choose_steps_items_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.why_choose_steps_items_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.why_choose_steps_items_id_seq OWNER TO postgres;

--
-- Name: why_choose_steps_items_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.why_choose_steps_items_id_seq OWNED BY public.why_choose_steps_items.id;


--
-- Name: why_choose_steps_main; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.why_choose_steps_main (
    id integer NOT NULL,
    robot_image text NOT NULL,
    title text
);


ALTER TABLE public.why_choose_steps_main OWNER TO postgres;

--
-- Name: why_choose_steps_main_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.why_choose_steps_main_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.why_choose_steps_main_id_seq OWNER TO postgres;

--
-- Name: why_choose_steps_main_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.why_choose_steps_main_id_seq OWNED BY public.why_choose_steps_main.id;


--
-- Name: banners id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.banners ALTER COLUMN id SET DEFAULT nextval('public.banners_id_seq'::regclass);


--
-- Name: contacts id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contacts ALTER COLUMN id SET DEFAULT nextval('public.contacts_id_seq'::regclass);


--
-- Name: explore_courses id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.explore_courses ALTER COLUMN id SET DEFAULT nextval('public.explore_courses_id_seq'::regclass);


--
-- Name: footer id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.footer ALTER COLUMN id SET DEFAULT nextval('public.footer_id_seq'::regclass);


--
-- Name: footer_info id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.footer_info ALTER COLUMN id SET DEFAULT nextval('public.footer_info_id_seq'::regclass);


--
-- Name: logo id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.logo ALTER COLUMN id SET DEFAULT nextval('public.logo_id_seq'::regclass);


--
-- Name: navbar_items id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.navbar_items ALTER COLUMN id SET DEFAULT nextval('public.navbar_items_id_seq'::regclass);


--
-- Name: steps_robotics id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.steps_robotics ALTER COLUMN id SET DEFAULT nextval('public.steps_robotics_id_seq'::regclass);


--
-- Name: study_gallery id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.study_gallery ALTER COLUMN id SET DEFAULT nextval('public.study_gallery_id_seq'::regclass);


--
-- Name: testimonials id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.testimonials ALTER COLUMN id SET DEFAULT nextval('public.testimonials_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Name: why_choose_robotics id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.why_choose_robotics ALTER COLUMN id SET DEFAULT nextval('public.why_choose_robotics_id_seq'::regclass);


--
-- Name: why_choose_steps_items id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.why_choose_steps_items ALTER COLUMN id SET DEFAULT nextval('public.why_choose_steps_items_id_seq'::regclass);


--
-- Name: why_choose_steps_main id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.why_choose_steps_main ALTER COLUMN id SET DEFAULT nextval('public.why_choose_steps_main_id_seq'::regclass);


--
-- Data for Name: banners; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.banners (id, banner_title1, banner_title2, paragraph, button_name, button_link, image, created_at) FROM stdin;
2	New Batch	Starting Soon!	Interactive robotics and coding courses for Grades 1–12. Where curiosity transforms into creation by Inspiring creators, leaders, and problem-solvers	Get Started	/	/uploads/Steps Robotics - Banner1.jpg	2025-10-27 17:45:56.24189
4	Future-Ready STEM & Robotics	Skills for Kids	Hands-on coding and robotics courses for Grades 2–12. Fun, interactive, and designed for young innovators.	Get Started	/	/uploads/Steps Robotics - Banner3.jpg	2025-10-27 18:23:27.508916
3	Future Robotics	Coding Course!	Interactive robotics and coding courses for Grades 1–12. Learn by doing and create amazing projects.	Get Started	/	/uploads/Steps Robotics - Banner2.jpg	2025-10-27 17:47:09.216837
\.


--
-- Data for Name: contacts; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.contacts (id, firstname, lastname, email, phone, message, created_at) FROM stdin;
1	Sham	Lawrence	sham@gmail.com	8122315788	this is tes	2025-10-17 14:51:27.112392
2	Sham		shiyamlawrence@redantlabs.io	8122315788	Hello	2025-10-22 17:07:14.075861
3	Sham	Demo	shiyamlawrence@redantlabs.io	8122315788	Shh	2025-10-25 16:32:05.938038
4	Sham	L	sham@gmail.com	8122315788	Test	2025-10-25 20:07:01.698519
5	Hello		sham@gmail.com	8122315798	Hello	2025-10-31 10:27:12.586771
6	Hello		sss54@gmail.com	8122315798	Hello	2025-10-31 10:28:31.422507
7	mohamed	yunus	yunus@redantlabs.io	9787616940	test	2025-11-06 17:35:18.413567
8	Hmm	HH	sss@gmail.com	8122315788	Helllo	2025-11-06 17:48:21.354309
\.


--
-- Data for Name: course_feedback; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.course_feedback (id, name, role, image, rating, text) FROM stdin;
2	Mr. Vinoth Kumar	Head Master - Patric School	https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop	4.5	Before joining the program, many were curious about technology but didn't know where to begin. Now, they're coding in their free time, with boosted confidence, creativity, and a genuine love for learning.
3	Ms. Priya Sharma	Principal - Tech Academy	https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop	5.0	The transformation in our students has been remarkable. They've developed critical thinking skills and a passion for problem-solving that extends beyond the classroom.
4	Dr. Anita Reddy	Dean - Innovation Center	https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop	4.5	This program has bridged the gap between theoretical knowledge and practical application. Our students are now confident in tackling real-world technological challenges.
5	Mr. Rajesh Patel	Director - STEM Institute	https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop	5.0	An exceptional learning experience that has inspired creativity and innovation in our students. The hands-on approach makes all the difference.
\.


--
-- Data for Name: course_highlights; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.course_highlights (id, course_id, highlight, created_at) FROM stdin;
1	4	Duration - 10 Sessions/10 Hrs	2025-10-06 13:59:36.429744
2	4	Fees is Inclusive of using the Robotic Kit	2025-10-14 12:58:32.886275
3	4	Learn Solo or in-Group	2025-10-14 12:58:43.715255
4	4	Autobot Basic Level Certification mandatory	2025-10-14 12:58:55.714705
5	8	Duration - 30 Sessions/1 Hrs	2025-10-24 18:00:51.555706
6	8	Prepares students for competitive robotics and higher STEM learning	2025-10-24 18:01:02.194056
7	8	Loops, logic, variables, and debugging through CodeAIM	2025-10-24 18:01:10.31795
8	8	Autobot Basic Level Certification mandatory	2025-10-24 18:01:20.410093
9	9	Duration - 64 Sessions/1 Hrs	2025-10-24 18:10:45.197521
10	9	Duration - 64 Sessions/1 Hrs	2025-10-24 18:10:54.750849
11	9	Graphical blocks & text coding with VEXcode IQ	2025-10-24 18:11:05.656619
12	9	Autobot Basic Level Certification mandatory	2025-10-24 18:11:14.225359
\.


--
-- Data for Name: course_objectives; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.course_objectives (id, course_id, objective, created_at) FROM stdin;
2	4	Spark curiosity about robotics and automation.	2025-10-06 13:59:23.929035
3	4	Introduce the basics of coding in a simple, child-friendly way.	2025-10-14 12:59:26.378278
4	4	Encourage teamwork, creativity, and critical thinking.	2025-10-14 12:59:36.360018
6	8	Deepen understanding of robotics and automation concepts.	2025-10-24 18:00:16.771784
7	8	Strengthen coding knowledge with loops, logic, and condition-based programming.	2025-10-24 18:00:20.260933
8	8	Develop teamwork, design thinking, and critical problem-solving abilities.	2025-10-24 18:00:29.202681
9	8	Introduce advanced robot features such as sensors, encoders, and basic vision technology.	2025-10-24 18:00:38.96298
10	9	Introduce advanced robotics design and engineering principles.	2025-10-24 18:10:04.54535
11	9	Teach structured programming with VEXcode IQ (blocks & text-based coding)	2025-10-24 18:10:13.84968
12	9	Develop teamwork, leadership, and collaboration through competition-style challenges.	2025-10-24 18:10:24.723606
13	9	Encourage creativity, resilience, and innovation in solving open-ended problems.	2025-10-24 18:10:33.371974
14	10	Introduce the basics of coding in a simple, child-friendly way.	2025-10-24 18:17:58.919105
5	4	Demo Content 	2025-10-14 12:59:46.234113
\.


--
-- Data for Name: courses; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.courses (id, title, description, created_at, image, heroictitle, heroicimage) FROM stdin;
4	Introduction to Robotics	Give your child the perfect head start in technology.Through playful hands-on-activities with the vex 123 robotics kit, students will learn building blocks of code ,problem solving, creative thinking - all will having fun	2025-10-01 15:40:20.316054	/uploads/1761212099945-image_67.png	Future-Ready Kids Started Here!	/uploads/1759748125675-image1.png
10	Mechanics in Motion	Give your child a head start in technology! With the VEX 123 kit, kids learn coding, problem-solving, and creativity through fun, hands-on play.	2025-10-24 18:17:30.578137	\N	Future-Ready Kids Start Here!	/uploads/1761310050575-94fb423cc017c337629c151d5bd82b561b91d3ce.png
8	SimpleRobots In Block coding	After mastering the basics, students step into the exciting world of VEX AIM robotics. With advanced sensors, omnidirectional movement, and interactive coding, learners will unlock real engineering and problem solving skills all while tackling fun, hands-on challenges.	2025-10-24 17:23:41.829953	/uploads/1761383016424-image_68.png	Future-Ready Kids Start Here!	/uploads/1761306821821-6a081c98129b9877e50a53cd7b3002fce962ae78.png
9	Building In Basics	Give your child the perfect head start in technology.Through playful hands-on-activities with the vex 123 robotics kit, students will learn building blocks of code ,problem solving, creative thinking - all will having fun	2025-10-24 18:09:29.827981	\N	Future-Ready Kids Start Here!	/uploads/1761309569824-4eaf5fda4131704d214e159a87e473eea1b70604.png
11	Introduction to Robotics	Give your child the perfect head start in technology.Through playful hands-on-activities with the vex 123 robotics kit, students will learn building blocks of code ,problem solving, creative thinking - all will having fun	2025-11-01 18:45:12.708293	\N	Future-Ready Kids Started Here!	/uploads/1762002912706-vex-iq.png
\.


--
-- Data for Name: explore_courses; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.explore_courses (id, title, description, image, button_text, button_link, list_items, created_at, updated_at) FROM stdin;
4	Explore Courses	Structured STEM courses combining robotics, coding, and hands-on projects to build creativity, problem-solving, and future-ready skills.	/uploads/1761641092757-Sathish.png	\N	/contacts	{"Interactive robotics classes","Project-based curriculum","Expert mentor guidance"}	2025-10-28 13:46:16.932437	2025-10-28 14:14:52.760816
5	Our Programs	Our workshops and bootcamps provide practical, short-term learning experiences. Students apply coding and robotics skills.	/uploads/1761639479777-Sandiya.png	\N	/	{"Focused weekend bootcamps","Skill-building workshops","Team-based activities"}	2025-10-28 13:47:59.784072	2025-10-28 14:15:14.536276
\.


--
-- Data for Name: footer; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.footer (id, logo_url, address, mobile, email, facebook, twitter, instagram, youtube, linkedin, talk_image_url) FROM stdin;
\.


--
-- Data for Name: footer_info; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.footer_info (id, logo_url, address, mobile, email, talk_image, facebook, twitter, instagram, youtube, linkedin) FROM stdin;
1	/uploads/footer-logo.webp	TVH Agnito Park, Rajiv Gandhi Salai|PTK Nagar, Thiruvanmiyur,|Chennai, Tamil Nadu 600096	+91 97876 16940	info@stepsroboticsedu.io	/uploads/footer.gif	/	/	/	/	/
\.


--
-- Data for Name: lessons; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.lessons (id, module_id, title, content, created_at) FROM stdin;
13	13	What is a Robot?	Identify the basic parts and the role of a robot	2025-10-01 15:41:42.428373
14	13	Touch Coding Basics	Tap buttons to move the robot\\n\\n	2025-10-01 15:52:16.1433
15	13	Directions & Sequencing	Build multi-step commands (on-bot)\\n\\n	2025-10-01 15:52:48.121184
16	14	Meet the Coder	Understand Coder + Coder Cards\\n\\n	2025-10-01 15:53:44.619357
17	14	Actions with coder cards	Use the LED & Sound cards in sequence	2025-10-01 15:54:09.17305
18	15	Introduction to VEXcode 123 Platform	Connect the robot to a tablet/laptop\\n\\n	2025-10-24 17:18:40.098918
19	15	Behavioural commands  on Vex 123	Understanding the usage of looks, sound, and action blocks\\n\\n	2025-10-24 17:19:04.23066
20	15	Build a Sequence	Combine movement + output using the full platform\\n\\n	2025-10-24 17:19:24.819798
21	16	123 Playspace	Move the robot to the targets in VR\\n\\n	2025-10-24 17:19:51.680082
22	16	Shape Tracer	Code the robot to draw shapes\\n\\n	2025-10-24 17:20:09.369191
23	17	Color Sensor	Program the robot to respond to colored objects\\n\\n	2025-10-24 17:20:36.478426
24	18	Unbox & Safety	Learn AIM components, proper handling, and setup safety protocol.\\n\\n	2025-10-24 18:02:57.218987
25	18	Basic Motion	Program directional movement (forward, backward, sideways).\\n\\n	2025-10-24 18:03:16.380396
26	20	Castle Crasher	Plan directional logic and apply it in VR Castle Crasher\\n\\n	2025-10-24 18:03:59.486398
27	20	Grid Navigation	Move the robot to target coordinates using logic and angles.\\n\\n	2025-10-24 18:04:13.947777
28	21	Intro to AI vision	Vision Basics with Barrel and april tag Detection.\\n\\n	2025-10-24 18:04:47.811204
29	21	Obstacle Logic with conditional commands	Use conditional commands to avoid obstacles.\\n\\n	2025-10-24 18:05:03.063637
30	22	Reactive Logic Drill	Combine sensor detection with motion to complete the task by kicking the ball\\n\\n	2025-10-24 18:05:36.690361
31	23	Optimize Code	Improve code readability and logic efficiency.\\n\\n	2025-10-24 18:06:07.211094
32	18	Sequence Logic	Chain movement + turning using precise logic blocks.\\n\\n	2025-10-24 18:07:10.145955
33	24	Kit Onboarding	Explore VEX GO Kit\\n\\n	2025-10-24 18:12:08.427168
34	24	Basic framework	Friction & alignment\\n\\n	2025-10-24 18:12:25.416223
35	24	Unpowered Supercar	Mechanical\\n\\n	2025-10-24 18:12:41.130523
36	25	Robot Arm	Manual Arm\\n\\n	2025-10-24 18:13:14.695106
37	25	Motorized Robot Arm	Motor add-on\\n\\n	2025-10-24 18:13:29.34111
38	25	Code Robot Arm (1-Axis)	Code motion\\n\\n	2025-10-24 18:13:43.885729
39	26	Locking Switch	Toggle logic\\n\\n	2025-10-24 18:14:19.961132
40	27	Castle Crasher	VEX VR\\n\\n	2025-10-24 18:14:59.233409
41	28	Go Competition Base	Physical Build\\n\\n	2025-10-24 18:15:50.277421
\.


--
-- Data for Name: logo; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.logo (id, logo_url, updated_at) FROM stdin;
1	/uploads/1761895313784-image_logo.webp	2025-10-31 12:51:53.797784
\.


--
-- Data for Name: modules; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.modules (id, course_id, title, description, created_at) FROM stdin;
13	4	Introduction to Robot Thinking (Sessions 1-3)	\N	2025-10-01 15:40:35.47275
14	4	Unlocking the Coder System (Sessions 4-6)	\N	2025-10-01 15:53:23.943845
15	4	Coding Through Platform (Sessions 7-10)	\N	2025-10-24 17:17:33.128828
16	4	Virtual Robotics Extension (Sessions 11-13)	\N	2025-10-24 17:17:56.766241
17	4	Sensor-Based Interactions (Sessions 14-15)	\N	2025-10-24 17:18:11.242709
18	8	Getting in Motion (Sessions 1-5)	\N	2025-10-24 18:01:53.106542
20	8	Smart Navigation (Sessions 6-9)	\N	2025-10-24 18:03:38.610946
21	8	Sensors in Action (Sessions 10-14)	\N	2025-10-24 18:04:28.818944
22	8	Object Mastery (Sessions 15-20)	\N	2025-10-24 18:05:18.225922
23	8	Strategy & Automation (Sessions 21-24)	\N	2025-10-24 18:05:48.450297
24	9	Mechanical Systems & Core Mobility (Sessions 1-16)	\N	2025-10-24 18:11:33.597655
25	9	Robotic Arms + Claws + Manipulation (Sessions 17-28)	\N	2025-10-24 18:12:56.649704
26	9	STEM + Coding Logic + Real-World Models (Sessions 29-40)	\N	2025-10-24 18:14:00.440599
27	9	VEX VR Playgrounds - Logic in Simulated Environments (Sessions 41-50)	\N	2025-10-24 18:14:35.931084
28	9	Engineering Missions - STEM Scenarios & Integration (Sessions 51-65)	\N	2025-10-24 18:15:08.973695
\.


--
-- Data for Name: navbar_items; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.navbar_items (id, label, href, visible, order_index) FROM stdin;
14	Programs	/programs	t	0
13	About Us	/about	t	0
8	Home	/	t	0
16	Courses	/courses	t	0
12	Contacts	/contacts	t	0
\.


--
-- Data for Name: password_reset_otps; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.password_reset_otps (id, user_id, otp, expires_at, used) FROM stdin;
1	3	331078	2025-09-25 16:51:42.131	t
\.


--
-- Data for Name: programs; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.programs (id, days, duration, "time", venue, materials, mentors, batch_size, created_at) FROM stdin;
1	Saturday & Sunday	2 Days (Weekend)	10:00 AM - 4:00 PM (includes snack breaks)	STEPS Robotics Learning Center, Plot No. 12, Tech Park Road Chennai - 600100, Tamil Nadu	VEX GO robotics kits provided for every participant	Certified robotics instructors guiding students throughout the workshop	Small groups for personalized attention and hands-on learning	2025-10-10 12:37:11.367349
\.


--
-- Data for Name: steps_robotics; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.steps_robotics (id, title, image, video, created_at, updated_at) FROM stdin;
12	Vivek	/uploads/1761578950987-Sathish.png	/uploads/1761578950987-kid_video.mp4	2025-10-27 20:59:10.993257	2025-10-28 11:50:39.162258
11	Divya	/uploads/1761578919132-Sandiya.png	/uploads/1761578919133-kid_video.mp4	2025-10-27 20:58:39.142617	2025-10-28 11:50:50.567424
10	Aditi	/uploads/1761578870392-Swetha.png	/uploads/1761578870412-kid_video.mp4	2025-10-27 20:57:50.4356	2025-10-28 11:51:06.168837
9	Shankar	/uploads/1761578753132-Sathish.png	/uploads/1761578753133-kid_video.mp4	2025-10-27 20:55:53.145507	2025-10-28 11:51:16.066378
13	Kavya	/uploads/1761632910330-Swetha.png	/uploads/1761578994562-kid_video.mp4	2025-10-27 20:59:54.569313	2025-10-28 11:58:30.336138
\.


--
-- Data for Name: study_gallery; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.study_gallery (id, image, alt) FROM stdin;
17	/uploads/1761727542538-gallery_img1.webp	gallery_1
19	/uploads/1761727567363-gallery_img2.webp	gallery_2
18	/uploads/1761727552701-gif-1-2.gif	gallery_1_1
20	/uploads/1761727593085-gif2-2.gif	gallery_2_2
21	/uploads/1761727605946-gif-3-1.gif	gallery_3
22	/uploads/1761727617528-gif-3-2.gif	gallery_3_2
23	/uploads/1761727629819-gallery_img3.webp	gallery_4
24	/uploads/1761727649110-gif-4-1.gif	gallery_5
25	/uploads/1761727671935-gallery_img4-2.webp	gallery_5_2
\.


--
-- Data for Name: testimonials; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.testimonials (id, name, role, quote, description, rating, image, created_at, updated_at) FROM stdin;
2	Ms. Malathi	Computer Science - Teacher	My son can't wait for class—he even codes at home!	Before joining the program, my son was curious about technology but didn't know where to start. Now, He's completely hooked—coding during him free time, and fun learning environment have made a huge difference in him confidence and creativity. I've never seen him this excited about learning!	4.5	/uploads/1761716061373-Swetha.png	2025-10-29 11:04:21.380622	2025-10-29 11:04:21.380622
4	Mr. Anand	Head Master - Patric School	Best investment we've made for our school!	My Son can’t wait for class - she even codes at home!”. Before joining the program, my son was curious about technology but didn’t know where to start. Now, he’s completely hooked - coding during his free time, and fun learning environment have made a huge difference in her confidence and creativity. I’ve never seen her this excited about learning!.	5	/uploads/1761718826237-Swetha.png	2025-10-29 11:06:53.790574	2025-10-29 11:50:26.241965
3	Ms. John Peter	Parents - Software Developer	My students are more engaged than ever!	My Son can’t wait for class - she even codes at home!”. Before joining the program, my son was curious about technology but didn’t know where to start. Now, he’s completely hooked - coding during his free time, and fun learning environment have made a huge difference in her confidence and creativity. I’ve never seen her this excited about learning!.	4.5	/uploads/1761716139443-Sathish.png	2025-10-29 11:05:39.450228	2025-10-29 11:51:16.621067
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, full_name, student_id, age, grade, email, parent_phone, password_hash, role, access, created_at, updated_at) FROM stdin;
1	santhosh	102010	7	3rd	santhosh@redantlabs.io	09345353384	$2b$10$lFMojqc/l8cvYoOVtRRBnO8GBzGQeuXcwAC/m2sHsOY2yo8Hwp4P.	admin	1	2025-10-30 10:33:19.881218	2025-10-30 10:33:19.881218
\.


--
-- Data for Name: why_choose_robotics; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.why_choose_robotics (id, section_data, created_at) FROM stdin;
6	{"features": [{"icon": "/uploads/1761648640265-1.png", "title": "Holistic 360° Skill Development"}, {"icon": "/uploads/1761648436294-2.png", "title": "Progressive Learning Path"}, {"icon": "/uploads/1761648436295-3.png", "title": "Experienced Industry Mentors"}, {"icon": "/uploads/1761648436295-4.png", "title": "48+ Hours of Structured Learning"}, {"icon": "/uploads/1761648436296-5.png", "title": "Customized & Guided Training"}, {"icon": "/uploads/1761648654033-6.png", "title": "Flexible Learning Modes"}], "image_one": "/uploads/1761648436293-Swetha.png", "image_two": "/uploads/1761648436294-Sathish.png"}	2025-10-28 16:17:41.261625
\.


--
-- Data for Name: why_choose_steps_items; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.why_choose_steps_items (id, icon, heading, description, side, order_index) FROM stdin;
5	/uploads/icons/1761739699413-left-2-school.webp	School/College Workshops	One-day to multi-day hands-on events hosted at your campus.	left	1
6	/uploads/icons/1761739737433-left-3-lab.webp	Robotics Lab Setup	Complete design, setup, and training for robotics labs in institutions.	left	2
7	/uploads/icons/1761740085444-right-1-robotics.webp	Robotics Competitions	Test skills in real-world scenarios.\r\nJoin national-level competitions with training, support.	right	0
8	/uploads/icons/1761740147846-right-2-competition.webp	Competition Coaching	Customized mentoring for WRO, FIRST, and national STEM events.	right	1
9	/uploads/icons/1761740186053-right-3-CSR.webp	CSR & Corporate STEM Programs	Partner with us to bring STEM\r\nlearning to underserved communities.	right	2
4	/uploads/icons/1761739658670-left-1-stem.webp	STEM Education Programs	Structured curriculum designed for progressive learning from basics to advanced.	left	0
\.


--
-- Data for Name: why_choose_steps_main; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.why_choose_steps_main (id, robot_image, title) FROM stdin;
2	/uploads/1761739573054-robot.webp	Robot
\.


--
-- Name: banners_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.banners_id_seq', 6, true);


--
-- Name: contacts_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.contacts_id_seq', 8, true);


--
-- Name: course_feedback_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.course_feedback_id_seq', 5, true);


--
-- Name: course_highlights_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.course_highlights_id_seq', 12, true);


--
-- Name: course_objectives_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.course_objectives_id_seq', 14, true);


--
-- Name: courses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.courses_id_seq', 11, true);


--
-- Name: explore_courses_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.explore_courses_id_seq', 5, true);


--
-- Name: footer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.footer_id_seq', 1, false);


--
-- Name: footer_info_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.footer_info_id_seq', 1, true);


--
-- Name: lessons_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.lessons_id_seq', 41, true);


--
-- Name: logo_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.logo_id_seq', 1, false);


--
-- Name: modules_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.modules_id_seq', 28, true);


--
-- Name: navbar_items_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.navbar_items_id_seq', 16, true);


--
-- Name: password_reset_otps_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.password_reset_otps_id_seq', 1, true);


--
-- Name: programs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.programs_id_seq', 1, true);


--
-- Name: steps_robotics_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.steps_robotics_id_seq', 14, true);


--
-- Name: study_gallery_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.study_gallery_id_seq', 25, true);


--
-- Name: testimonials_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.testimonials_id_seq', 5, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 21, true);


--
-- Name: why_choose_robotics_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.why_choose_robotics_id_seq', 6, true);


--
-- Name: why_choose_steps_items_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.why_choose_steps_items_id_seq', 9, true);


--
-- Name: why_choose_steps_main_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.why_choose_steps_main_id_seq', 2, true);


--
-- Name: banners banners_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.banners
    ADD CONSTRAINT banners_pkey PRIMARY KEY (id);


--
-- Name: contacts contacts_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.contacts
    ADD CONSTRAINT contacts_pkey PRIMARY KEY (id);


--
-- Name: course_feedback course_feedback_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course_feedback
    ADD CONSTRAINT course_feedback_pkey PRIMARY KEY (id);


--
-- Name: course_highlights course_highlights_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course_highlights
    ADD CONSTRAINT course_highlights_pkey PRIMARY KEY (id);


--
-- Name: course_objectives course_objectives_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course_objectives
    ADD CONSTRAINT course_objectives_pkey PRIMARY KEY (id);


--
-- Name: courses courses_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.courses
    ADD CONSTRAINT courses_pkey PRIMARY KEY (id);


--
-- Name: explore_courses explore_courses_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.explore_courses
    ADD CONSTRAINT explore_courses_pkey PRIMARY KEY (id);


--
-- Name: footer_info footer_info_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.footer_info
    ADD CONSTRAINT footer_info_pkey PRIMARY KEY (id);


--
-- Name: footer footer_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.footer
    ADD CONSTRAINT footer_pkey PRIMARY KEY (id);


--
-- Name: lessons lessons_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.lessons
    ADD CONSTRAINT lessons_pkey PRIMARY KEY (id);


--
-- Name: logo logo_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.logo
    ADD CONSTRAINT logo_pkey PRIMARY KEY (id);


--
-- Name: modules modules_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modules
    ADD CONSTRAINT modules_pkey PRIMARY KEY (id);


--
-- Name: navbar_items navbar_items_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.navbar_items
    ADD CONSTRAINT navbar_items_pkey PRIMARY KEY (id);


--
-- Name: password_reset_otps password_reset_otps_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.password_reset_otps
    ADD CONSTRAINT password_reset_otps_pkey PRIMARY KEY (id);


--
-- Name: programs programs_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.programs
    ADD CONSTRAINT programs_pkey PRIMARY KEY (id);


--
-- Name: steps_robotics steps_robotics_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.steps_robotics
    ADD CONSTRAINT steps_robotics_pkey PRIMARY KEY (id);


--
-- Name: study_gallery study_gallery_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.study_gallery
    ADD CONSTRAINT study_gallery_pkey PRIMARY KEY (id);


--
-- Name: testimonials testimonials_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.testimonials
    ADD CONSTRAINT testimonials_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: why_choose_robotics why_choose_robotics_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.why_choose_robotics
    ADD CONSTRAINT why_choose_robotics_pkey PRIMARY KEY (id);


--
-- Name: why_choose_steps_items why_choose_steps_items_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.why_choose_steps_items
    ADD CONSTRAINT why_choose_steps_items_pkey PRIMARY KEY (id);


--
-- Name: why_choose_steps_main why_choose_steps_main_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.why_choose_steps_main
    ADD CONSTRAINT why_choose_steps_main_pkey PRIMARY KEY (id);


--
-- Name: users update_users_updated_at; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON public.users FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();


--
-- Name: course_highlights course_highlights_course_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course_highlights
    ADD CONSTRAINT course_highlights_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.courses(id) ON DELETE CASCADE;


--
-- Name: course_objectives course_objectives_course_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.course_objectives
    ADD CONSTRAINT course_objectives_course_id_fkey FOREIGN KEY (course_id) REFERENCES public.courses(id) ON DELETE CASCADE;


--
-- Name: modules fk_course; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.modules
    ADD CONSTRAINT fk_course FOREIGN KEY (course_id) REFERENCES public.courses(id) ON DELETE CASCADE;


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE USAGE ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO PUBLIC;


--
-- PostgreSQL database dump complete
--

\unrestrict ZTepW1IoJCcrIf4tAqpqwSdYCS76sQtb79q3wYipFpiHpMXcal5RSLasDlviEJ6


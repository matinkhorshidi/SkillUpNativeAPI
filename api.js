useEffect(() => {
  axios
    .get(`${MainUrl}api/course/detail/${id}`)
    .then((response) => {
      setCourse(response.data);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      toast.error('خطا در ارتباط با سرور');
    });
}, [id]);

useEffect(() => {
  axios
    .get(`${MainUrl}api/topic/list`)
    .then((response) => {
      setTopics(response.data);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      toast.error('خطا در ارتباط با سرور');
    });
}, []);

useEffect(() => {
  let url = `${MainUrl}api/slider/blog?c=${numberArray.length}`;
  axios
    .get(url)
    .then((response) => {
      setSliderData(response.data);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      toast.error('خطا در ارتباط با سرور');
    });
}, []);

useEffect(() => {
  axios
    .get(`${MainUrl}api/article/detail/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      setArticle(response.data);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      toast.error('خطا در ارتباط با سرور');
    });
}, [id]);

useEffect(() => {
  let url = `${MainUrl}api/article/pagination?pn=${pageNumber}&ps=${pageSize}`;
  axios
    .get(url)
    .then((response) => {
      setPageCount(response.data['count']);
      let tmp = articles;
      tmp.push.apply(tmp, response.data['pages']);
      setArticles(tmp);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      toast.error('خطا در ارتباط با سرور');
    });
}, [pageNumber, pageSize]);

useEffect(() => {
  let url = `${MainUrl}api/course/pagination?pn=${pageNumber}&ps=${pageSize}`;
  if (topic)
    url = `${MainUrl}api/course/pagination?pn=${pageNumber}&ps=${pageSize}&topic=${topic}`;
  axios
    .get(url)
    .then((response) => {
      setPageCount(response.data['count']);
      let tmp = courses;
      tmp.push.apply(tmp, response.data['pages']);
      setCourses(tmp);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      toast.error('خطا در ارتباط با سرور');
    });
}, [pageNumber, pageSize]);

export function GetUserManga(WrappedComponent, props) {
  const [Manga, setManga] = useState([]);
  const [loading, setLoading] = useState(true);
  const loadingCallback = () => {
    setLoading(true);
  };
  useEffect(() => {
    axios.get(`/usermanga/${props.match.params.manga}`).then((res) => {
      setManga(res.data.results);
      setLoading(false);
    });
  });
  return (
    <WrappedComponent
      manga={Manga}
      loading={loading}
      {...props}
      loadingCallback={loadingCallback}
    />
  );
}

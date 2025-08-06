import { useEffect, useState } from "react";

import { getBookAPI } from "../services/api.service";
import CreateBookControl from "../components/book/create.book.control";
import BookTable from "../components/book/booktable";

const BookPage = () => {
  const [dataBooks, setDataBooks] = useState([]);
  const [current, setCurrent] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    loadBook();
  }, [current, pageSize]);
  const loadBook = async () => {
    const res = await getBookAPI(current, pageSize);
    if (res.data) {
      setDataBooks(res.data.result);
      setCurrent(res.data.meta.current);
      setPageSize(res.data.meta.pageSize);
      setTotal(res.data.meta.total);
    }
  };

  return (
    <>
      <div style={{ padding: "20px" }}>
        <CreateBookControl />
        <BookTable
          dataBooks={dataBooks}
          loadBook={loadBook}
          current={current}
          pageSize={pageSize}
          total={total}
          setCurrent={setCurrent}
          setPageSize={setPageSize}
          setTotal={setTotal}
        />
      </div>
    </>
  );
};

export default BookPage;

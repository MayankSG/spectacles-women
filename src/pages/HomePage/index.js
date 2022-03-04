import React, { useRef, useEffect, useState } from "react";
import { ProductCard } from "../../components/ProductCard";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./HomePage.css";
import { getSpectaclesList } from "../../redux/actions";
import { FilterSection } from "../../components/FilterSection";
import { Header } from "../../components/Header";
export const Home = () => {
  const glasses = useSelector((state) => state.mainReducer.glasses);
  const loading = useSelector((state) => state.mainReducer.loading);
  const hasMoreData = useSelector((state) => state.mainReducer.hasMoreData);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [collectionType, setCollectionType] = useState("spectacles-women");
  const [pageNo, setPageNo] = useState(1);
  const listInnerRef = useRef();
  const dispatch = useDispatch();
  
  const getFilterValues = () => {
    let filtersValue = "";
    selectedFilters.map((filter) => {
      if (filter.type === "color") {
        filtersValue =
          filtersValue +
          `&filters[glass_variant_frame_variant_colour_tag_configuration_names][]=${filter.name}`;
      } else if (filter.type === "shape") {
        filtersValue =
          filtersValue +
          `&filters[glass_variant_frame_variant_frame_tag_configuration_names][]=${filter.name}`;
      }
    });
    return filtersValue
  };

  useEffect(() => {
    const filterString = getFilterValues();
    dispatch(getSpectaclesList(1, filterString , collectionType));
    setPageNo(2);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFilters, collectionType]);

  const onLoadMore = () => {
    const filterString = getFilterValues();
    dispatch(getSpectaclesList(pageNo, filterString, collectionType));
    setPageNo(pageNo + 1);
  };

  const getImage = (glass) => {
    let img = glass.glass_variants[0].media[0].url;
    return img;
  };

  const getImage2 = (glass) => {
    let img = glass.glass_variants[0].media[1].url;
    return img;
  };

  const onScroll = () => {
    if (listInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
      if (
        scrollTop + clientHeight === scrollHeight &&
        !loading &&
        hasMoreData
      ) {
        onLoadMore();
      }
    }
  };
  return (
    <>
      <Header setCollectionType={setCollectionType} />
      {console.log(collectionType)}
      <Row
        ref={listInnerRef}
        className="gx-0 example"
        style={{ maxHeight: window.innerHeight * 0.95, overflowY: "auto" }}
        onScroll={onScroll}
      >
      <FilterSection
        selectedFilters={selectedFilters}
        setSelectedFilters={setSelectedFilters}
      />
        {glasses.map((glass) => {
          return (
            <ProductCard
              key={glass.id}
              name={glass.name}
              image={getImage(glass)}
              image2={getImage2(glass)}
            />
          );
        })}
        {loading && <p>loading</p>}
      </Row>
    </>
  );
};

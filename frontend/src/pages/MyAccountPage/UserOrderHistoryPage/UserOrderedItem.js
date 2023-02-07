import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  OrderedItemWrapper,
  ItemDetail,
  ItemWrapper,
  ItemImageWrapeer,
  ItemInfoWrapper,
  OrderInfo,
  ItemInfo,
  OrderStatus,
} from "./userordereditem-styled";
import { timeFormat } from "../../../utils";

/** 주문 상태에 따라 주문취소, 환불신청으로 나뉘는데 그거 데이터 처리 어떻게 할건지?
 * api분리해서 따로 요청 해서 하는지?
 */

const UserOrderedItem = (item) => {
  useState(() => {
    if (item) {
      console.log("item_item", item);
    }
  }, [item]);

  const cancelOrder = () => {
    if (confirm("주문을 취소하시겠습니까?")) {
      console.log("주문 취소 완료");
    }
  };

  return (
    <OrderedItemWrapper>
      {item && (
        <ItemDetail>
          <OrderInfo>
            <span>{item?.date && timeFormat(item?.date)} </span>
            <span>({item?.orderId})</span>
          </OrderInfo>
          <ItemWrapper>
            <Link to={`/myaccount/orderhistory/detail/${item.id}`}>
              <ItemImageWrapeer>
                {item?.image && <img src={item.image} alt={item.title} />}
              </ItemImageWrapeer>
            </Link>
            <ItemInfoWrapper>
              <ItemInfo>
                <h3>{item?.title}</h3>
                <div>
                  <p>KRW {Number(item?.price).toLocaleString("ko-KR")}</p>
                  <p>QTY : {item?.qty}</p>
                </div>
              </ItemInfo>
              <OrderStatus>
                <p>{item?.status}</p>
                {/* <Link to={`/myaccount/orderhistory/detail/${item.id}`}>
                  <span>주문 상세 &gt; </span>
                </Link> */}
                {item.option === "detailPage" ? (
                  <button onClick={cancelOrder}>주문 취소</button>
                ) : (
                  <Link to={`/myaccount/orderhistory/detail/${item.id}`}>
                    <span>주문 상세 &gt; </span>
                  </Link>
                )}
              </OrderStatus>
            </ItemInfoWrapper>
          </ItemWrapper>
        </ItemDetail>
      )}
    </OrderedItemWrapper>
  );
};

export default UserOrderedItem;

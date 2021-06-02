import React,{useState,useEffect} from "react";
import { Container } from "styles/order-confirmation";
import { Radio, Button, Form, Input, Row, Col,Select } from "antd";
import Api from "services/lib";
import { getAddress } from "store/actions/ordersActions";
import { getCookie } from "../../containers/cookies";
import {useDispatch,useSelector} from "react-redux";
import NewAddressForm from "components/Forms/addressForm";
import {getCartTotal} from "pages/cart";
import Router from "next/router";
import {orderPayload,productVariation} from "./helpers/constants";
import notification from "../../utils/toast";
import GlobalContainer from "../../styles/globalContainer";





const api = new Api();

const ConfirmOrder = (props:any) => {
  const dispatch = useDispatch();
  const[addresses,setAddresses] = useState([]);
  const[cartItems,setItems] = useState(Array());
  const[shippingCost,setCost] = useState(100);
  const[ orderAddress,setOrderAddress] = useState(Object);
  const[orderDetails,setOrderDetails] = useState(orderPayload);
  const[paymentOption,setPaymentOption] = useState("MPESA");
  const mpesaData = {phone_number:"",account_number:0};





  const user = useSelector((state:any)=>state.auth?.profile);
  
  const getUserAddresses = ()=>{
    api.order().addresses()?.then((res:any)=>{
      if (res.status == 200) {
        setAddresses(res.data.results);
        setOrderAddress(res.data.results[0]);
        dispatch(getAddress(res.data.results));
      }
    }).catch(()=>{

    })
  }

  const lipaNaMpesa = (account_number:any)=>{
     var code = "254"
     //process phone number to 254xxxx format
    mpesaData.phone_number=code.concat(user?.account_info.phone_number.substring(1));
    mpesaData.account_number=account_number;
    api.order().mpesa(mpesaData)?.then((response:any)=>{
      console.log("mpesa",response);
      if(response.status===202 && response.data.CheckoutRequestID ){
        mpesaConfirm(response.data.CheckoutRequestID);

      }
      if(response.status===202 && response.data.errorCode){
      return  notification.warning({
          message:"MPESA Error",
          description:response.data.errorMessage
        });

      }
    }).catch((error:any)=>{
      console.log(error.response);
      notification.warning({
        message:"Error!",
        description:"MPESA Error"
      })
    })
  }

 //mpesa payment confirmation
 const mpesaConfirm = (requestID:any) =>{
  api.order().mpesaPaymentStatus({checkout_request_id:requestID})
  ?.then((response:any)=>{
    console.log('confirm',response);
    if(response.status===200 && response.data.ResultDesc==="Request cancelled by user"){
      notification.warning({
        message:"Payment Error!",
        description:response.data.ResultDesc
      })
    }

    if(response.status===200 && response.data.ResultDesc!="Request cancelled by user"){
      Router.push({
            pathname: '/checkout'
          },
          undefined, { shallow: true }
        );
      clearCart();
    }

  }).catch((error:any)=>{
    console.log(error.response);
    notification.warning({
      message:"Error!",
      description:"MPESA confirmation Error"
    })
  })
}

 //get shipping cost chosen
  const onChangeShipping = (e:any)=>{
    e.preventDefault();
    setCost(e.target.value);
  }
  const clearCart = ()=>{
    localStorage.removeItem("items");
  }

//slect Box
  const {Option} = Select ;

  const selectonChange = (value:any)=> {
    const id = value ;
    const selectedAddress = addresses.find((add:any)=>add.id===id);
    setOrderAddress(selectedAddress);
}
 const selectPayment = (e:any)=>{
   e.preventDefault();
   const val = e.target.value;
   if(val===1){
     setPaymentOption("CARD");
   }
   if(val===2){
     setPaymentOption("MPESA");
   }
   if(val===3){
     setPaymentOption("ON-DELIVERY");
   };
 }

//order ip call
orderDetails.order_type="normal";
orderDetails.payment_options=paymentOption;
orderDetails.delivery_address=orderAddress;
orderDetails.products=cartItems;

const placeOrder = ()=>{
  //MPESA Option
  if(orderDetails.payment_options==="MPESA"){
  api.order().placeOrder(orderDetails)?.then((res:any)=>{
    if(res.status===201){
      console.log('rrr',res);
      lipaNaMpesa(res.data.pk);

    }
  }).catch((error:any)=>{
    console.log("www",error.response);
    notification.warning({
      message:"Error!",
      description:"Something went wrong"
    })
  })
}
//PAY Later option
if(orderDetails.payment_options==="ON-DELIVERY"){
  api.order().placeOrder(orderDetails)?.then((res:any)=>{
    if(res.status===201){
      console.log('rrr',res);
      Router.push({
            pathname: '/checkout'
          },
          undefined, { shallow: true }
        );
      clearCart();
    }
  }).catch((error:any)=>{
    console.log(error.response);
    notification.warning({
      message:"Error!",
      description:"Something went wrong"
    })
  })
}
//CARD Option
if(orderDetails.payment_options==="CARD"){
 return   notification.warning({
     message:"Error!",
     description:"CARD NOT YET "
   })

}

}

console.log("ooo",orderDetails);


  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("items") || "[]");
    if (items) {
      setItems(items);
    }
    if (!(props && props.data.results)) {
      getUserAddresses();
    } else {
      setAddresses(props?.data?.results);
      setOrderAddress(props?.data.results[0]);
      dispatch(getAddress(props?.data?.results));
    }
  }, [cartItems.length]);

  useEffect(()=>{

  },[addresses])


  return (
    <>
      <Container>
        <GlobalContainer>
        <div className="confirmation_container">
          <span className="header">Order confirmation</span>
          <div className="row">
            <div className="col">
              <div className="shipping_info">
                <span className="shipping">Shipping information</span>
                <hr />
                <div className="address_container">
                        <div>
                        <span className="address-contact">
                          {user?.account_info.first_name},     {user?.account_info.phone_number}
                        </span>
                        <span className="edit">
                          <Select
                        style={{ width: 400 }}
                        placeholder="Select another address"
                        optionFilterProp="children"
                        onChange={selectonChange}
                        >
                      {addresses.map((add:any)=>
                        (<Option key={add.id} value={add.id}>{add.postal_code}
                        {add.name} {add.phone} {add.city} {add.street} street,{add.country}  </Option>))}
                        </Select>
                        </span>
                      </div>
                        <div>
                        <span>
                          <Radio.Group defaultValue={1}>
                          <Radio value={1}>

                        <span className="address">
                          {" "}
                         {orderAddress?.postal_code} {orderAddress?.city}  {orderAddress?.street} srteet, {orderAddress?.country}
                        </span>

                    </Radio>
                  </Radio.Group >
                  </span>
                </div>
                </div>
                <span className="new-address">
                  <NewAddressForm setAddress={setAddresses} name="Add new address"/>
                </span>
              </div>

              <div className="shipping-methods">
                <span className="header">Shipping method</span>
                <hr />
                <Radio.Group  defaultValue={100} onChange={onChangeShipping}>
                  <div className="row">
                    <div className="shipment-method">
                      <Radio value={100}>
                        {" "}
                        <span className="std-delivery">
                          Standard delivery KSH.100
                        </span>
                      </Radio>
                      <span className="date">
                        Estimated 3 - 6 business days shipping
                      </span>
                    </div>
                    <div className="shipment-method1">
                      <Radio value={350}>
                        {" "}
                        <span className="std-delivery">OE Now KSH.350</span>
                      </Radio>
                      <span className="date">
                        Your order will be delivered within 24 hrs from the time
                        of purchase.
                      </span>
                    </div>
                  </div>
                </Radio.Group>
              </div>
              <Radio.Group defaultValue={2} onChange={selectPayment}>
                <div className="payment-methods">
                  <span className="header">Payment methods</span>
                  <hr />
                  <div className="card-container">
                    <div className="row">
                      <div className="col">
                        <Radio value={1}>
                          <span className="card">Credit/ Debit Card</span>
                        </Radio>
                        <span className="description">
                          Safe money transfer using your bank account. Visa,
                          Mastercard, Discover, American Express.
                        </span>
                      </div>
                      <div className="card-images">
                        <img src="/cards.png" className="card-image" />
                      </div>
                    </div>
                    <Form layout="vertical">
                      <Form.Item label="CARD NUMBER">
                        <Input placeholder="0000 0000 0000 0000" />
                      </Form.Item>
                      <Row justify="space-around">
                        <Col span={8}>
                          <Form.Item label="NAME ON CARD">
                            <Input />
                          </Form.Item>
                        </Col>
                        <Col span={4} offset={3}>
                          <Form.Item label="EXPIRY DATE">
                            <Input placeholder="MM/YY" />
                          </Form.Item>
                        </Col>
                        <Col span={4} offset={3}>
                          <Form.Item label="CVV CODE">
                            <Input />
                          </Form.Item>
                        </Col>
                      </Row>
                    </Form>
                  </div>
                  <div className="mpesa-section">
                    <Radio value={2}>
                      <span>Mpesa</span>
                    </Radio>{" "}
                    <img src="Mpesa.png" />
                  </div>

                  <div className="cash-on-delivery">
                    <Radio value={3}>
                      <span>Pay on Delivery</span>
                    </Radio>
                  </div>
                </div>
              </Radio.Group>
            </div>
            { cartItems.length>0 &&
            <div className="cost-info">
              <div className="coupon-code">
                <span className="coupon__text">Coupon code</span>
                <span className="vertical_line" />
                <span className="apply">Apply</span>
              </div>
              {cartItems.map((item:any)=>(
               <div key={item.id}>
              <div className="cost-row">
                <span className="sub-total">Item {cartItems.indexOf(item)+1}</span>
                <span>KSH. {item.quantity * parseFloat(item.salePrice)}</span>
              </div>
            </div>
              ))}
              <div className="cost-row">
                <span className="total">Subtotal</span>
                <span className="total">KSH. {getCartTotal(cartItems)}</span>
              </div>
              <div className="cost-row">
                <span className="total">Shipping</span>
                <span className="total">KSH. {shippingCost}</span>
              </div>
              <div className="cost-row">
                <span className="total">Order Total</span>
                <span className="total">KSH. {getCartTotal(cartItems)+shippingCost}</span>
              </div>
              <hr />

              <Button
                className="payment-button"
                onClick={(e) => {
                  e.preventDefault();
                  placeOrder();
                }}
              >
                CheckOut
              </Button>
            </div>

          }
          </div>
        </div>
      </GlobalContainer>
    </Container>
    </>
  );
};

export async function getServerSideProps(context: any) {
  const sendRedirectLocation = (location:any) => {
    context.res.writeHead(302, {
      Location: location,
    });
    context.res.end();
    return { props: {} }; // stop execution
  };

  const token = getCookie("token", context.req);
  if (!token) {
    sendRedirectLocation('/');

  }

  const api = new Api(token);
  const res = await api.order().addresses();

  return {
    props: {
      data: res.data || {},
    },
  };
}

export default ConfirmOrder;

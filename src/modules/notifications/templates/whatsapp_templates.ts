export const templateDetail = function (template_attributes: any) {
  const whatsapp: Record<string, any> = {};

  const {
    phoneNo = "",
    customerName = "",
    orderId2 = "",
    excitingMsg2 = "",
    token = "",
    ticketId = "",
    createdOn = "",
    revisedAmount = "",
    finalAmount = "",
    orderId3 = "",
    excitingMsg = "",
    replacementProduct = "",
    packagingDeliveryDate = "",
    dismantlingDeliveryDate = "",
    mindays = "",
    maxdays = "",
    maxHour = "",
    minHour = "",
    token_1 = "",
    token_2 = "",
    token_3 = "",
    gifts = "",
    orderDetails = "",
    orderedDate = "",
    replacementOrderId = "",
    bdtscId = "",
    vendor_code = "",
    architect_docs = "",
    days = "",
    url = "",
    quantity1 = "",
    quantity2 = "",
    balanceAmount = "",
    dueDate = "",
    storeNumber = "",
    context = "",
    companyNumber = "",
    dateRange = { start: "", end: "" },
    deliveryDate2 = "",
    templateName = "",
    trackURL = "",
    invoiceUrl = "",
    productName3 = "",
    productName2 = "",
    hours = "",
    productName = "",
    newOrderId = "",
    refferalMonth = "",
    youtubeUrl = "",
    awbNo = "",
    storeName = "",
    bookingDate = "",
    new_productName = "",
    timeSlot = "",
    replacmentReason = "",
    storeaddress = "",
    googlelink = "",
    technicianName = "",
    technicianPhoneNo = "",
    futureInstallationDate = "",
    appLink = "",
    refundAmount = "",
    quotationlink = "",
    quotationAmount = "",
    requestType = "",
    pickupDate = "",
    deliveryDate = "",
    courierPartner = "",
    rejectionReason = "",
    couponCode = "",
    couponType = "",
    couponTitle = "",
    purpose = "",
    OTP = "",
    rescheduledate = "",
    lineitem = "",
    payAmount = "",
    payLink = "",
    brochureLink = "",
    staffName = "",
    staffId = "",
    quotationNumber = "",
    orderValue = "",
    promotionCoupon = "",
    campaignCoupon = "",
    afterDiscountAmount = "",
    reqDiscountAmount = "",
    addDiscountPercentage = "",
    otpNamespace = "",
    customerNumber = "",
    gftrPoints = "",
    transactionCode = "",
    commissionAmount = "",
    commissionissueDate = "",
    agentName = "",
    numberofDays = "",
    oldProduct = "",
    newProduct = "",
    differenceAmount = "",
    requestedDiscount = "",
    approvalCode = "",
    savingAmount = "",
    totalParcels = "",
    sourceStore = "",
    destinationStore = ""
  } = template_attributes;

  const orderId = template_attributes.orderId || template_attributes.order_id || ""

  const phoneNumber = phoneNo ? String(phoneNo).slice(-10) : undefined;

  const technicianPhoneNumber = technicianPhoneNo ? technicianPhoneNo.slice(-10) : undefined;

  let storeadd = storeaddress?.replace(/&/g, "/");

  const urlIncludingPdf = invoiceUrl?.match(/.*\.pdf/i)?.[0] || "";
  let userid = process.env.SMSG_USERID || "2000197692";
  let userpwd = process.env.SMSG_PASSWORD || "9LzraftQ";

  // const appLink = "https://thesleepcompany.in/pages/our-store";

  const clickposttracklink = `https://thesleepcompany.clickpost.ai/?waybill=${awbNo}`;

  //order confirmation

  whatsapp.orderConfirmation = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=%2AOrder+Placed%2A%0A%0AHi+${customerName}%2C+your+order+with+The+Sleep+Company+has+been+successfully+placed.%0AOrder+ID%3A+${orderId}%0A%0AFor+any+questions%2C+please+contact+us+at+care%40thesleepcompany.in.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  //five 5 delay orderbooked
  // whatsapp.orderReceiveTemplate = {
  //   method: "post",
  //   maxBodyLength: Infinity,
  // url: `https://media.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=%2AOrder+Placed%21%2A%0A%0AHi+${customerName}%2C+%0AYour+order+${orderId}+has+successfully+been+placed%21%0AThe+estimated+delivery+date+is+${dateRange.start}+-+${dateRange.end}.%0A%0AWe+will+share+the+tracking+link+with+you+when+your+order+is+shipped.+Click+here+for+more+details%3Ahttps%3A%2F%2Fthesleepcompany.in%2Faccount%23view%3Dorders%0A%0AThe+countdown+to+better+comfort+begins%21+%F0%9F%A4%97%0A%0AIf+you+have+any+queries%2C+write+to+us+at+care%40thesleepcompany.in%0AExperience+the+Revolutionary+Comfort.&isTemplate=true&footer=The+Sleep+Company`,
  //   headers: {},
  // };

  whatsapp.orderReceiveTemplate = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=%2AYour+order+is+being+processed%21%2A%0A%0AHey+${customerName}%2C%0A%0AYour+The+Sleep+Company+Order+is+now+being+processed.%0A%0AOrder+ID%3A+%2A${orderId}%2A%0A%0AEstimated+Delivery+Date%3A+%2A${dateRange.start}+-+${dateRange.end}%2A%0A%0ATRACK+HERE+https%3A%2F%2Fthesleepcompany.in%2Fpages%2Forderlisting&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.orderReceiveEdd = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://media.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=%2AOrder+Placed%21%2A%0A%0AHi+${customerName}%2C+your+order+${orderId}+has+successfully+been+placed%21%0A%0AWe+will+share+the+tracking+link+with+you+when+your+order+is+shipped.+Click+here+for+more+details%3Ahttps%3A%2F%2Fthesleepcompany.in%2Faccount%23view%3Dorders%0A%0AThe+countdown+to+better+comfort+begins%21+%F0%9F%A4%97%0A%0AIf+you+have+any+queries%2C+write+to+us+at+care%40thesleepcompany.in%0AExperience+the+Revolutionary+Comfort&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.shippedTemplate = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://media.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=%2AOrder+Shipped%21+%F0%9F%92%99%2A%0A%0AHi+${customerName}%2C+%0AYour+order+${orderId}+has+been+shipped+%21%0A%0AClick+on+the+link+to+track+your+order%3A+https%3A%2F%2Fthesleepcompany.in%2Faccount%23view%3Dorders%0A%0AThe+countdown+to+better+comfort+begins%21+%F0%9F%A4%97%0A%0AIf+you+have+any+queries%2C+write+to+us+at+care%40thesleepcompany.in%0AExperience+the+Revolutionary+Comfort&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.deliveredTemplate = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://media.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi%20${customerName}%2C%0A%0AYour%20order%20has%20just%20arrived%20at%20your%20doorstep!%20%F0%9F%93%A6%0A%0AWe%20hope%20it%20brightens%20your%20day%20as%20much%20as%20it%20did%20ours%20delivering%20it%20to%20you!%0A%0APlease%20find%20the%20invoice%20details%20below%3A%0A${urlIncludingPdf}%0A%0AThank%20you%20for%20choosing%20The%20Sleep%20Company!`,
    headers: {},
  };

  whatsapp.installationNotification = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://media.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%21%0A%0AThank+you+for+purchasing+from+The+Sleep+Company+%21%F0%9F%92%99%0A%0AOur+installation+team+will+contact+you+within+${hours}+hours+to+schedule+an+appointment+as+per+your+convenience.%F0%9F%95%92%0A%0APlease+ensure+you+are+available+at+the+location+during+the+scheduled+time.%0A%0AGet+ready+to+experience+the+comfort+revolution%21%0AFor+queries+please+write+to+us+at+care%40thesleepcompany.in&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.installationVideoNotification = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://media.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%21%0A%0AThank+you+for+purchasing+from+the+Sleep+Company%21+%F0%9F%8E%89%0A%0APlease+watch+the+linked+video+to+easily+set+up+your+${productName}+yourself%3A+${youtubeUrl}%0A%0AEnjoy+your+new+comfort+experience%21+%0AFor+any+questions%2C+please+email+us+at+care%40thesleepcompany.in&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  // whatsapp.orderOnHold = {
  //   method: "post",
  //   maxBodyLength: Infinity,
  // url: `https://media.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C+%0AYour+order+${orderId}+has+successfully+been+placed%21%0AYour+order+is+currently+On-Hold+please+contact+our+team+at+%2B91-9811981911+for+more+details.+%0AWe+will+inform+you+the+Delivery+Dates+when+your+order+is+processed.+%0A%0AClick+here+to+Track+your+order%3A+https%3A%2F%2Fthesleepcompany.in%2Faccount%23view%3Dorders%0AThe+countdown+to+better+comfort+begins%21&isTemplate=true&footer=The+Sleep+Company`,
  //   headers: {},
  // };

  whatsapp.orderOnHold = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=%2AOrder+on+Hold%2A%0A%0AHey+${customerName}%2C%0A%0AYour+The+Sleep+Company+Order+as+requested+by+you+is+On-Hold.%0A%0AOrder+ID%3A+%2A${orderId}%2A%0A%0ATrack+Here+https%3A%2F%2Fthesleepcompany.in%2Fpages%2Forderlisting&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  //replacement related templates....

  whatsapp.ReplacementOrderPLaced = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://media.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=%2AOrder+Placed%21%2A%0A%0AHi+${customerName}%2C+%0AYour+order+${orderId}+has+successfully+been+placed%21%0AWe+will+share+the+tracking+link+with+you+when+your+order+is+shipped.%0A%0AThank+you+for+choosing+The+Sleep+Company%21%F0%9F%92%99%0A%0AIf+you+have+any+queries%2C+write+to+us+at+care%40thesleepcompany.in%0AExperience+the+Revolutionary+Comfort.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.ReplacementOrderShipped = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://media.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=%2AOrder+Shipped%21+%F0%9F%92%99%2A%0A%0AHi+${customerName}%2C+%0AYour+order+${orderId}+has+been+shipped+%21%0A%0AClick+on+the+link+to+track+your+order%3A+${clickposttracklink}%0A%0AThe+countdown+to+better+comfort+begins%21+%F0%9F%A4%97%0A%0AIf+you+have+any+queries%2C+write+to+us+at+care%40thesleepcompany.in%0AExperience+the+Revolutionary+Comfort&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.ReplacementOrderDelivered = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://media.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0A%0AYour+order+${orderId}+has+just+arrived+at+your+doorstep%21+%F0%9F%93%A6%0A%0AWe+hope+it+brightens+your+day+as+much+as+it+did+ours+delivering+it+to+you%21%0A%0APlease+find+the+invoice+details+below%3A%0A${urlIncludingPdf}%0A%0AThank+you+for+choosing+The+Sleep+Company&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  //marketing template...

  whatsapp.Storevisit = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://media.smsgupshup.com/GatewayAPI/rest?userid=2000233295&password=t6yZNm2q&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Your+appointment+has+been+scheduled+at+${storeName}%0A%0A%F0%9F%93%85+Date%3A+${bookingDate}%0A%0A%E2%8F%B0+Time+slot%3A+${timeSlot}%0A%0A%F0%9F%93%8D+Address%3A+${storeadd}%0A%0A%F0%9F%97%BA%EF%B8%8F+Google+map+link%3A+${googlelink}+\n `,
    headers: {},
  };

  //Installation related templates...

  whatsapp.InstallerAssigned = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://media.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%21+%0AOur+Comfort+Technician+${technicianName}+%28Contact+No%3A+${technicianPhoneNumber}%29+has+been+assigned+to+install+your+order+${orderId}+in+%2A24+hours%2A.+%0A%0AHe+will+contact+you+to+confirm+the+appointment.+%0A%0APlease+make+sure+to+be+available+at+the+location+during+the+installation.%0AFor+further+assistance+please+reach+out+to+us+at+care%40thesleepcompany.in&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.TechnicianUnabletoconnect = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://media.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%21%0A%0A_Our+Comfort+Technician+%F0%9F%9B%A0%EF%B8%8F%2C+%2A${technicianName}+%28Phone%3A+${technicianPhoneNumber}%29%2A%2C+tried+to+contact+you+to+confirm+the+installation+appointment+for+your+order+${orderId}+but+couldn%E2%80%99t+reach+you._%0A%0A%2APlease+call+the+technician+to+confirm+or+re-schedule+your+installation.%2A&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.InstallationAppointmentConfirmed = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://media.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%21+%0AThe+installation+appointment+for+your+order+${orderId}+has+been+confirmed+with+our+Comfort+Technician+${technicianName}+%28Phn%3A+${technicianPhoneNumber}%29.+%0A%0APlease+make+sure+to+be+available+at+the+time+for+the+installation.%0A%0AFor+queries+feel+free+to+reach+out+to+us+at+care%40thesleepcompany.in&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.FutureInstallationDate = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://media.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0AYour+installation+for+order+${orderId}+has+been+rescheduled+to+${futureInstallationDate}.%0APlease+ensure+your+availability+on+this+date+for+the+installation.%0A%0AWe+will+get+in+touch+with+you+on+the+scheduled+day+to+provide+the+details+of+the+comfort+technician.%0AIf+you+have+any+queries%2C+feel+free+to+contact+us+at+care%40thesleepcompany.in&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.ReplacementBookingTechnician = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://media.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%21%0A%0AOur+Comfort+Technician+${technicianName}+visited+to+install+your+order+${orderId}.+%0AYour+replacement+request+has+been+confirmed.%0AWe%27ll+arrange+for+installation+once+the+replacement+is+delivered.%0A%0AThank+you+for+your+patience+%F0%9F%92%99+Our+team+is+working+diligently+to+ensure+you+have+the+best+experience.%0A%0AIf+you+have+any+questions%2C+feel+free+to+contact+us+at+care%40thesleepcompany.in.`,
    headers: {},
  };

  whatsapp.FailedCustomerReturn = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://media.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%21+%0AOur+Comfort+Technician+${technicianName}+visited+for+your+installation+of+order+${orderId}+however+the+installation+is+marked+failed.%0AWe+apologize+for+any+inconvenience+caused.%0A%0AIf+you+need+further+assistance%2C+please+contact+us+at%3A+%2B91-9811981911&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.InstallationSuccess = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://media.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%21+%0AYour+installation+for+Order+ID%3A+${orderId}+has+been+successfully+completed+by+our+Sleep+Squad+member+${technicianName}.+%0A%0AThank+you+for+making+us+a+part+of+your+life%21%F0%9F%92%99%0A%0AIf+you+need+any+further+assistance+please+feel+free+to+reach+out+to+us+at+care%40thesleepcompany.in&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.UpdatedTechDownload = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://media.smsgupshup.com/GatewayAPI/rest?userid=2000233295&password=t6yZNm2q&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hello+${customerName}%2C%0A%0APlease+download+the+APK+from+the+link+below+on+your+Android+device+to+begin.%0A%0ADownload+APK+${appLink}&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  //hold order templates

  whatsapp.OLD_ORDER_HOLD = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=%2AOrder+on+Hold%2A%0A%0AItems+in+your+order+are+currently+on+hold.+We%27ll+notify+you+with+the+new+Delivery+date+as+soon+as+it+resumes+processing.%0A%0AOrder+ID%3A+${orderId}%0AItems%3A+${lineitem}%0A%0AIf+you+have+any+queries%2C+write+to+us+at+care%40thesleepcompany.in&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.UN_HOLD_ORDER = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=%2AOrder+Being+Processed%21%2A%0A%0AItems+in+your+order+are+now+being+processed.+We%27ll+update+you+as+soon+as+they+are+shipped.%0A%0AOrder+ID%3A+${orderId}+%0AItems%3A+${lineitem}%0AEstimated+Delivery+Date%3A+${deliveryDate}%0A%0AIf+you+have+any+queries%2C+write+to+us+at+care%40thesleepcompany.in&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.UN_HOLD_ORDER_EDD = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://media.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C+%0AYour+order+${orderId}+is+being+processed.+%0AThe+estimated+delivery+date+is+${dateRange.start}+-+${dateRange.end}%0A%0AWe+will+share+the+tracking+link+with+you+when+your+order+is+shipped.+%0AClick+here+for+more+details%3Ahttps%3A%2F%2Fthesleepcompany.in%2Faccount%23view%3Dorders%0A%0AThe+countdown+to+better+comfort+begins%21+%0AIf+you+have+any+queries%2C+write+to+us+at+care%40thesleepcompany.in&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.posQuotation = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://media.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hello%2C%0A%0AThank+you+for+exploring+The+Sleep+Company.%0A%0AYour+product+quotation+is+ready%3A+%E2%82%B9${quotationAmount}%0A%0AView+Quotation%3A+${quotationlink}%0A%0AIf+you+need+assistance+or+wish+to+place+your+order%2C+feel+free+to+contact+us+anytime.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  //replacement related

  whatsapp.returnReplacementRequested = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=${requestType}+Request+Received%0A%0AHello+${customerName}%2C%0A%0AWe%E2%80%99ve+received+your+${requestType}+request+for+order+${orderId}.+Your+request+is+in+review+for+approval.%0A%0AOur+team+will+contact+you+within+24+hours+to+assist+with+the+next+steps.%0A%0AFor+any+questions%2C+feel+free+to+reach+out+at+care%40thesleepcompany.in.%0A%0AThank+you%2C&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.returnBooked = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=%2AReturn+Confirmed%2A%0A%0AHello+${customerName}%2C%0A%0AYour+return+for+order+${orderId}+has+been+successfully+booked.+Our+courier+partner+will+contact+you+to+arrange+the+pickup.%0A%0AOrder+ID%3A+${orderId}%0AItems%3A+${productName}%0AEstimated+Pickup+Date%3A+${pickupDate}%0ACourier+Partner%3A+${courierPartner}%0A%0AOnce+the+pickup+is+completed%2C+your+refund+will+be+processed+within+5%E2%80%937+working+days.%0A%0AFor+any+queries%2C+you+can+reach+us+at+care%40thesleepcompany.in.%0A%0AThank+you%2C%0AThe+Sleep+Company&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.replacementBookedRP = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hello+${customerName}%2C%0A%0AYour+replacement+has+been+placed+and+pickup+for+the+old+product+has+been+arranged.%0A%0A%2AYour+new+product+will+be+shipped+after+the+pickup+of+the+original+item.%2A%0A%0A%2APickup+Courier+Partner%3A%2A+${courierPartner}%0A%2AEstimated+Pickup+Date%3A%2A+${pickupDate}%0A%2AItem%3A%2A+${productName}%0A%2AReplacement+Order+ID%3A%2A+${orderId}%0A%2AReplacement+Estimated+Delivery+Date+%3A%2A+${deliveryDate}%0A%0APlease+note+the+delivery+date+of+your+replacement+order+is+dependent+on+timely+pickup.%0A%0AThank+you%2C&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.replacementBookedRPCX = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=%2AReplacement+Booked%2A+%0A%0AHello+${customerName}%2C%0A%0AYour+replacement+has+been+placed+and+pickup+for+the+old+product+has+been+arranged.+%0A%0A%2APickup+Courier+Partner%3A%2A+${courierPartner}%0A%2AEstimated+Pickup+Date%3A%2A+${pickupDate}%0A%2AItem%3A%2A+${productName}%0A%2AReplacement+Order+ID%3A%2A+${orderId}%0A%2AEstimated+Delivery+Date%3A%2A+${deliveryDate}%0A%0A_If+you+have+any+queries%2C+write+to+us+at+care%40thesleepcompany.in_%0A%0AThank+you%2C&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.requestRejected = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=${requestType}+Request+Update%0A%0AHello+${customerName}%2C%0A%0AYour+${requestType}+request+for+order+${orderId}+has+been+rejected.%0A%0AReason%3A+${rejectionReason}%0A%0AIf+you+have+any+questions+or+need+assistance%2C+please+reach+out+to+us+at+care%40thesleepcompany.in.%0A%0AThank+you%2C&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.partBooking = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Part+Order+Confirmation%0A%0AHello+${customerName}%2C%0A%0AYour+part+order+%28ID%3A+${orderId}%29+has+been+successfully+booked+as+per+your+request.%0A%0AOrder+ID%3A+${orderId}%0AItem%3A+${productName}%0AEstimated+Delivery+Date%3A+${deliveryDate}%0A%0AFor+any+assistance%2C+you+can+reach+us+at+care%40thesleepcompany.in.%0A%0AThank+you%2C&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  //spin the wheel
  whatsapp.spinTheWheel = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://media.smsgupshup.com/GatewayAPI/rest?userid=2000233295&password=t6yZNm2q&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=%F0%9F%8E%89%2ACongratulations%21%2A%F0%9F%8E%89%0A%0AYou%27ve+won+a+special+reward+in+our+Spin+the+Wheel+game%21%F0%9F%8F%86%0A%0AUse+your+exclusive+coupon+code+%2A${couponCode}%2A+at+checkout+and+enjoy+your+prize%21%F0%9F%8E%81&isTemplate=true&footer=Reply+with+%22Unsub%22+to+Unsubscribe`,
    headers: {},
  };

  whatsapp.NameaiMattressRecommender = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://media.smsgupshup.com/GatewayAPI/rest?userid=2000233295&password=t6yZNm2q&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Dear+%2A${customerName}%2A+%2C%0A%0AThank+you+for+completing+the+AI+Mattress+Recommender+Questionnaire.%0A%0ATo+receive+personalized+mattress+recommendations+for+your+ideal+sleep+routine%2C+please+share+the+OTP+%2A${OTP}%2A+with+the+store+to+proceed+with+the+assessment.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.aiMattressWishlist = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://media.smsgupshup.com/GatewayAPI/rest?userid=2000233295&password=t6yZNm2q&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=%2AThank+You+for+Joining+the+Waitlist%21%2A+%F0%9F%8E%89%0A%0AYou%27re+now+on+the+exclusive+list+for+the+%2ASensai+AI+Mattress%2A+-+_India%E2%80%99s+First+and+Only+AI+Powered+Mattress._+%F0%9F%98%B4%E2%9C%A8%0A%0A_Stay+tuned%21_+You%E2%80%99ll+be+among+the+first+to+experience+cutting-edge+sleep+technology+designed+to+transform+the+way+you+rest.+Sweet+dreams+await%21+%F0%9F%8C%99%F0%9F%92%99&isTemplate=true&footer=Reply+with+%22Unsub%22+to+Unsubscribe`,
    headers: {},
  };

  whatsapp.aiMattressWishlistOne = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://media.smsgupshup.com/GatewayAPI/rest?userid=2000233295&password=t6yZNm2q&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Your+Secret+Sleep+Code+is+Here%21%0A%0ACongratulations%21+Your+exclusive+secret+code+%2A${couponCode}%2A+is+ready.+%0A%0AEnter+it+now+to+unlock+next-level+sleep+with+the+SensAI+Mattress+%E2%80%93+India%E2%80%99s+first+AI-powered+mattress.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.orderStatus = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://media.smsgupshup.com/GatewayAPI/rest?userid=2000197692&password=9LzraftQ&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=%2AThank+you+for+your+order%21%2A%0A%0ATrack+your+order+status+${orderId}+here%3A+%F0%9F%94%97+${trackURL}%0A%0AFor+any+questions%2C+contact+our+support+team.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.InternalOrderTrackingLink = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://media.smsgupshup.com/GatewayAPI/rest?userid=2000233295&password=t6yZNm2q&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hey%2C%0A%0AThank+you+for+your+purchase%21+You+can+track+the+status+of+your+order+%2A${orderId}%2A+using+the+link+below%3A%0A%0A%F0%9F%94%97+https%3A%2F%2Fthesleepcompany.in%2Fpages%2Forderlisting%0A%0AIf+you+have+any+questions%2C+feel+free+to+reach+out+to+our+support+team.%0A%0ABest+regards%2C%0AThe+Sleep+Company&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.bnplBookingLocked = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://media.smsgupshup.com/GatewayAPI/rest?userid=2000233295&password=t6yZNm2q&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hey%2C%0A%0AGreat+news%21+Your+booking+is+locked+in%2C+but+there%27s+just+one+small+step+left-completing+the+payment+of+%E2%82%B9${payAmount}%21%0A%0AYour+exclusive+quote+is+only+valid+%2Auntil+today%2C%2A+so+don%E2%80%99t+let+this+deal+slip+away%21%0A%0A%F0%9F%94%97+%2APay+Now%3A%2A+${payLink}%0A%0ANeed+help%3F+We%E2%80%99re+just+a+message+away%21&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.bnplQuotation = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://media.smsgupshup.com/GatewayAPI/rest?userid=2000233295&password=t6yZNm2q&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=%2ADear+Customer%2C%2A%0A%0AYour+booking+is+confirmed%2C+and+your+special+price+is+%2Alocked+for+1+year%21%2A%0A%0AWhenever+you%27re+ready%2C+just+show+this+quotation+at+any+of+our+stores%2C+and+we%E2%80%99ll+place+your+order+in+no+time%21%0A%0A%2AView+Your+Quotation%3A%2A+${quotationlink}%0A%0ANeed+any+help%3F+We%E2%80%99re+just+a+message+away%21&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  //Template revamp.....................

  // whatsapp.OUTFOR_DELIVERY = {
  //   method: "post",
  //   maxBodyLength: Infinity,
  //   url: `https://media.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Dear+${customerName}%2C%0A%0AYour+order+${orderId}+will+be+delivered+today.%0A%0A%2AOur+Comfort+Technician+will+contact+you+within+48+hours+after+delivery+for+the+installation%2A.&isTemplate=true&footer=The+Sleep+Company`,
  //   headers: {},
  // };

  whatsapp.OUTFOR_DELIVERY = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://media.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=%2AOut+for+Delivery%2A%0A%0AHey+${customerName}%2C%0A%0AExciting+news%21+Your+order+is+out+for+delivery%2C+our+courier+partner+will+deliver+your+package+today+and+may+contact+you+for+a+smooth+delivery+process.%0A%0AOrder+ID%3A+${orderId}%0AItems%3A+${lineitem}%0ACourier+Partner%3A+${courierPartner}%0A%0A_If+you+have+any+queries%2C+write+to+us+at+care%40thesleepcompany.in_%0A%0AExperience+the+Revolutionary+Comfort.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.OUTFOR_DELIVERY_INSTALLATION = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://media.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=%2AOut+for+Delivery%2A%0A%0AHey+${customerName}%2C%0A%0AExciting+news%21+Your+order+is+out+for+delivery.+Our+courier+partner+will+deliver+your+package+today+and+may+contact+you+for+a+smooth+delivery+process.%0A%0AOrder+ID%3A+${orderId}%0AItems%3A+${lineitem}%0ACourier+Partner%3A+${courierPartner}%0A%0A%2APlease+Note%3A%2A+After+delivery%2C+our+Comfort+Technicians+will+get+in+touch+with+you+to+install+your+order+within+48+hours.%0A%0AIf+you+have+any+queries%2C+write+to+us+at+care%40thesleepcompany.in%0A%0AExperience+the+Revolutionary+Comfort&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  // installation phase two comms

  whatsapp.p_installer_assigned = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://media.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%21%0AOur+Technician+partner+${technicianName}+has+been+assigned+to+install+your+order+${orderId}.%0AHe+will+contact+you+to+confirm+the+appointment%2C+your+installation+will+be+completed+in+the+next+${hours}+hours.%0A%0APlease+make+sure+to+be+available+at+the+location+during+the+installation.%0A%0AFor+further+assistance+please+reach+out+to+us+at+care%40thesleepcompany.in&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.p_appointment_confirm_wrong_name = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://media.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%21%0AOur+Technician+Partner+${technicianName}+%28Phn%3A+${technicianPhoneNo}%29+tried+to+contact+you+to+confirm+the+appointment+for+your+installation+of+order+${orderId}%2C+but+couldn%27t+reach+you.+%0A%0APlease+get+in+touch+to+confirm+the+installation.%0A%0AFor+further+assistance+please+reach+out+to+us+at+care%40thesleepcompany.in&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.p_appointment_confirmed = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://media.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%21+%0AThe+installation+appointment+for+your+order+${orderId}+has+been+confirmed+with+our+Technician+partner+${technicianName}+%0A%0APlease+make+sure+to+be+available+at+the+time+for+the+installation.%0A%0AFor+queries+feel+free+to+reach+out+to+us+at+care%40thesleepcompany.in&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.p_futuredate = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://media.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0AYour+installation+for+order+20242024+has+been+rescheduled+to+${rescheduledate}.%0APlease+ensure+your+availability+on+this+date+for+the+installation.%0A%0AWe+will+get+in+touch+with+you+on+the+scheduled+day+to+provide+the+details+of+the+comfort+technician.%0AIf+you+have+any+queries%2C+feel+free+to+contact+us+at+care%40thesleepcompany.in&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.p_failed_replacement = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://media.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%21%0A%0AOur+partner+Technician+${technicianName}+visited+to+install+your+order+${orderId}.+%0A%0AYour+replacement+request+has+been+confirmed.%0AWe%27ll+arrange+for+installation+once+the+replacement+is+delivered.%0A%0AThank+you+for+your+patience+%F0%9F%92%99+Our+team+is+working+diligently+to+ensure+you+have+the+best+experience.%0A%0AIf+you+have+any+questions%2C+feel+free+to+contact+us+at+care%40thesleepcompany.in.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.p_failed = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://media.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%21+%0AOur+Technician+partner+${technicianName}+visited+for+your+installation+of+order+${orderId}+however+the+installation+is+marked+failed.%0AWe+apologize+for+any+inconvenience+caused.%0A%0AIf+you+need+further+assistance%2C+please+contact+us+at%3A+%2B91-9811981911&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.installation_success = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://media.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%21+%0AYour+installation+for+Order+ID%3A+${orderId}+has+been+successfully+completed+by+our+Comfort+Technician+${technicianName}.+%0AIf+you+need+any+further+assistance+please+feel+free+to+reach+out+to+us+at+care%40thesleepcompany.in%0A%0AWe+would+love+to+hear+about+your+experience%21+%F0%9F%92%99%0APlease+take+a+moment+to+rate+our+service+or+share+your+feedback+by+clicking+the+link+below%3A&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.dismantle_warranty_assigned = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://media.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Our+Technician+${technicianName}+%28Phn%3A+${technicianPhoneNo}+%29+has+been+assigned+to+%2Adismantle+your+order+${orderId}%2A.%0A%0AHe+will+contact+you+to+confirm+the+appointment%2C+and+will+be+completed+in+the+next+${hours}+hours.%0A%0APlease+make+sure+to+be+available+at+the+location+during+the+installation.%0A%0AFor+further+assistance+please+reach+out+to+us+at+care%40thesleepcompany.in&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.dismantle_warranty_unable_to_connect = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://media.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%21%0AOur+Technician+Partner+${technicianName}+%28Phn%3A+${technicianPhoneNo}%29+tried+to+contact+you+to+confirm+the+appointment+for+${purpose}+of+order+${orderId}%2C+but+couldn%27t+reach+you.+%0A%0APlease+get+in+touch+to+confirm+appointment.%0A%0AFor+further+assistance+please+reach+out+to+us+at+care%40thesleepcompany.in&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.dismantle_warranty_confirmed = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://media.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%21+%0AThe+${purpose}+appointment+for+your+order+${orderId}+has+been+confirmed+with+our+Technician+${technicianName}+%0A%0APlease+make+sure+to+be+available+at+the+time+for+the+installation.%0A%0AFor+queries+feel+free+to+reach+out+to+us+at+care%40thesleepcompany.in&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.dismantle_warranty_reschedule = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://media.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0A${purpose}+for+order+${orderId}+has+been+rescheduled+to+${rescheduledate}+2024.%0APlease+ensure+your+availability+on+this+date.%0A%0AWe+will+get+in+touch+with+you+on+the+scheduled+day+to+provide+the+details+of+the+comfort+technician.%0AIf+you+have+any+queries%2C+feel+free+to+contact+us+at+care%40thesleepcompany.in&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.dismantle_replacement = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://media.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%21%0A%0AOur+partner+Technician+${technicianName}+visited+to+${purpose}+your+order+${orderId}.+%0A%0AYour+replacement+request+has+been+confirmed.%0AWe%27ll+arrange+for+installation+once+the+replacement+is+delivered.%0A%0AThank+you+for+your+patience+%F0%9F%92%99+Our+team+is+working+diligently+to+ensure+you+have+the+best+experience.%0A%0AIf+you+have+any+questions%2C+feel+free+to+contact+us+at+care%40thesleepcompany.in.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.dismantle_warranty_return = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://media.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%21+%0AOur+Technician+partner+${technicianName}+visited+for+your+${purpose}+of+order+${orderId}+however+it+is+marked+failed.%0AWe+apologize+for+any+inconvenience+caused.%0A%0AIf+you+need+further+assistance%2C+please+contact+us+at%3A+%2B91-9811981911&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.installation_success_dis = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://media.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%21+%0AYour+${purpose}+for+Order+ID%3A+${orderId}+has+been+successfully+completed+by+our+Comfort+Technician+${technicianName}.+%0AIf+you+need+any+further+assistance+please+feel+free+to+reach+out+to+us+at+care%40thesleepcompany.in%0A%0AWe+would+love+to+hear+about+your+experience%21+%F0%9F%92%99%0APlease+take+a+moment+to+rate+our+service+or+share+your+feedback+by+clicking+the+link+below%3A&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.tech_installation = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0A%0AWe%E2%80%99ve+received+your+request+for+${purpose}+.%0A%0AYour+job+has+been+created+and+will+be+completed+within+${hours}+hours+by+our+Comfort+Technician.%0A%0AOrder+ID%3A+${orderId}%0AItem%28s%29%3A+${productName}%0A%0AOur+technician+will+contact+you+shortly+to+confirm+the+appointment.%0APlease+ensure+someone+is+available+during+the+visit+for+a+smooth+and+hassle-free+service.%0A%0AIncase+you+have+already+done+the+installation%2C+Click+the+button+below&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.tech_installationOne = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Dear+${customerName}%2C%0A%0AYour+${purpose}+service+job+for+order+${orderId}+will+be+assigned+shortly.%0A%0AKindly+ensure+that+someone+is+available+at+the+scheduled+time+to+facilitate+a+smooth+and+hassle-free+process.%0A%0AIf+you+have+already+completed+the+self-installation+of+your+product%2C+please+click+the+button+below+to+notify+us.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.csat_sucessfull_installation = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://media.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%21+%0AYour+installation+for+Order+ID%3A+${orderId}+has+been+successfully+completed+by+our+Comfort+Technician+${technicianName}.+%0AIf+you+need+any+further+assistance+please+feel+free+to+reach+out+to+us+at+care%40thesleepcompany.in%0A%0AWe+would+love+to+hear+about+your+experience%21+%F0%9F%92%99%0APlease+take+a+moment+to+rate+our+service+or+share+your+feedback+by+clicking+the+link+below%3A&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.csat_technician = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%21+%0AYour+${purpose}+for+Order+ID%3A+${orderId}+has+been+successfully+completed+by+our+Comfort+Technician+${technicianName}.+%0A%0AWe+would+love+to+hear+about+your+experience%21+%F0%9F%92%99%0APlease+take+a+moment+to+rate+our+service&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.GOLD_GIVEAWAY = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Your+order+is+placed%2C+and+your+lucky+${couponTitle}+${couponType}%3A+${couponCode}.+You+might+just+be+the+one+to+win+GOLD%21&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.brochure_download = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=2000233295&password=t6yZNm2q&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi%2C+thank+you+for+your+inquiry+with+The+Sleep+Company.%0AYour+requested+brochure+with+bulk+order+product+${brochureLink}%0AFor+any+clarification+or+assistance+regarding+your+inquiry%2C+you+may+reach+our+team+at+%2B91+98119+81911&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.custom_discount_approval = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=TSC+Custom+Discount+approval+request%0A%0ARequesting+Store+Name%3A+${storeName}%0ARequesting+Staff+Name%3A+${staffName}%0ARequesting+Staff+ID%3A+${staffId}%0ACustomer+No%3A+${customerNumber}%0AQuotation+No%3A+${quotationNumber}%0AOrder+Value%3A+${orderValue}%0APromotion+Coupon%3A+${promotionCoupon}%0ACampaign+Coupon%3A+${campaignCoupon}%0AOrder+value+after+discount+%3A+${afterDiscountAmount}%0ARequested+Discount+amount%3A+${reqDiscountAmount}%0AAdditional+Discount+Percent+%3A+${addDiscountPercentage}25%0A${otpNamespace}+%3A+${OTP}&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.custom_discount_approval = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=TSC+Custom+Discount+approval+request%0A%0ARequesting+Store+Name%3A+${storeName}%0ARequesting+Staff+Name%3A+${staffName}%0ARequesting+Staff+ID%3A+${staffId}%0ACustomer+No%3A+${customerNumber}%0AQuotation+No%3A+${quotationNumber}%0AOrder+Value%3A+${orderValue}%0APromotion+Coupon%3A+${promotionCoupon}%0ACampaign+Coupon%3A+${campaignCoupon}%0AOrder+value+after+discount+%3A+${afterDiscountAmount}%0ARequested+Discount+amount%3A+${reqDiscountAmount}%0AAdditional+Discount+Percent+%3A+${addDiscountPercentage}25%0A${otpNamespace}+%3A+${OTP}&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.gyftr = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=2000233295&password=t6yZNm2q&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Dear+Customer%2C+%0A%0A${gftrPoints}+Gyftr+points+have+been+%2Arefunded%2A+to+your+Gyftr+wallet.+%0A%2ATransaction+code%2A+${transactionCode}+against+the+Return%2FReplacement%2FCancellation+for+Order+ID%3A+${orderId}&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.specific_store_review_brochure = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=DOCUMENT&method=SENDMEDIAMESSAGE&caption=Hi+${customerName}%2C%0AHere+is+the+document+requested+by+you+containing+your+Store+Reviews+details.%0A%0AThank+you+for+visiting+The+Sleep+Company%21&media_url=${brochureLink}&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.e_invoice_pos = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=DOCUMENT&method=SENDMEDIAMESSAGE&caption=Hi+${customerName}%2C+thank+you+for+shopping+with+The+Sleep+Company.%0AYour+invoice+is+attached+for+your+reference.%0A%0AWe+hope+you+enjoy+your+purchase%21&media_url=${invoiceUrl}&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.self_installed_template = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0A%0AWe+have+received+your+request+for+${purpose}.%0A%0AYour+job+has+been+created+and+will+be+completed+by+our+Comfort+Technician+within+${hours}+hours.%0A%0AOrder+ID%3A+${orderId}%0AItem%28s%29%3A+${productName}%0A%0AOur+technician+will+get+in+touch+with+you+to+confirm+the+appointment.%0A%0APlease+ensure+someone+is+available+at+the+time+of+the+visit+for+a+smooth+and+hassle-free+process.%0A%0AIncase+you+have+self-installed+your+product+please+click+the+button+below+to+let+us+know&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.self_installed_template = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0A%0AWe+have+received+your+request+for+${purpose}.%0A%0AYour+job+has+been+created+and+will+be+completed+by+our+Comfort+Technician+within+${hours}+hours.%0A%0AOrder+ID%3A+${orderId}%0AItem%28s%29%3A+${productName}%0A%0AOur+technician+will+get+in+touch+with+you+to+confirm+the+appointment.%0A%0APlease+ensure+someone+is+available+at+the+time+of+the+visit+for+a+smooth+and+hassle-free+process.%0A%0AIncase+you+have+self-installed+your+product+please+click+the+button+below+to+let+us+know&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.architect_commission = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=2000233295&password=t6yZNm2q&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=%2ADear+Partner%2C%2A%0A%0AThank+you+for+referring+your+client+to+The+Sleep+Company.+We+ensure+product+quality+and+smooth+order+fulfillment.%0A%0AYour+commission+of+%2A${commissionAmount}%2A+is+being+processed+for+order%28s%29+${orderId}.+The+UTRN+will+be+shared+by+${commissionissueDate}.%0A%0AWe+will+continue+to+support+you+with+timely+updates+and+necessary+information.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.bulk_order_brochure = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=2000233295&password=t6yZNm2q&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi%2C+thank+you+for+requesting+the+bulk+order+brochure+from+The+Sleep+Company.%0A%0AYou+can+download+the+brochure+here%3A+${brochureLink}%0A%0AFor+any+queries+or+further+assistance%2C+please+contact+us+at+%2B91+98119+81911.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.new_architect = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=2000233295&password=t6yZNm2q&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=%2AThank+you%2A+for+referring+your+client+to+%2AThe+Sleep+Company%2A+in+the+month+of+%2A${refferalMonth}%2A.+We+truly+appreciate+your+trust+and+support.%0A%0ARest+assured%2C+we+are+committed+to+delivering+top-quality+products+and+ensuring+a+smooth+order+fulfillment+experience.%0A%0AThe+total+value+of+your+referred+order%28s%29+%2A${orderId}%2A+is+Rs.+%2A${commissionAmount}%2A.+Your+reward+will+be+processed+based+on+the+net+sales+of+this+amount+and+will+reflect+in+your+account+in+the+month+of+October%2C+if+your+documentation+has+been+completed+by+then.%0A%0AIncase+you+haven%27t+submitted+your+documents+to+us%2C+please+reach+out+to+your+assigned+Business+Development+Manager%2C+or+call+us+at+7304586276+and+we+will+immediately+assist+you.%0A%0AWe+remain+at+your+service+for+any+updates+or+assistance+you+may+require%2C+and+we+look+forward+to+continuing+this+successful+partnership.%0A%0AWarm+Regards%2C%0AThe+Sleep+Company&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  //Over-Communications new 39 templates

  whatsapp.order_placed_1 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&v=1.1&format=json&isTemplate=true&footer=The+Sleep+Company&send_to=${phoneNumber}&msg_type=TEXT&method=SENDMESSAGE&msg=Order+Placed+%21%0ADear+Customer%2C%0AYour+The+Sleep+Company+Order+has+successfully+been+placed%21%0A%0AOrder+ID%3A+${orderId}`,
    headers: {},
  };

  whatsapp.all_fresh_orders_2 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Order+being+processed%21%0A%0AYour+The+Sleep+Company+Order+is+now+being+processed+%21%0A%0AOrder+ID%3A+${orderId}%0AEstimated+Delivery+Date%3A+${deliveryDate}&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.all_fresh_orders_3_true = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Order+Confirmed+-+On+Hold%0A%0AYour+order+is+currently+on+hold.+We%27ll+notify+you+with+the+delivery+date+as+soon+as+it+resumes+processing%0A.%0AOrder+ID%3A+${orderId}%0A%0AIf+you+have+any+queries%2C+write+to+us+at+care%40thesleepcompany.in&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.order_shipped_order_manifested_4 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Order+Shipped+%21%0AGreat+news%21+Your+order+has+been+shipped.+We+will+update+you+when+it+is+out+for+delivery.%0A%0AOrder+ID%3A+${orderId}%0AEstimated+Delivery+Date%3A+${deliveryDate}%0AItem%3A+${productName}&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.order_shipped_1_day_5 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=In-transit%0A%0AYour+order+is+shipped+and+is+in+transit+with+our+courier+partner.+Sit+back+and+relax+we+will+update+you+when+it+is+out+for+delivery+%0A%0AOrder+ID%3A+${orderId}%0AEstimated+Delivery+Date%3A+${deliveryDate}%0AItems%3A+${productName}+and+${productName2}+items%0ACourier+Partner%3A+${courierPartner}&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.awb_status_6 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Arriving+Today%21+%0A%0AYour+order+is+out+for+delivery+today.+%0A%0APlease+keep+your+phone+handy+and+ensure+someone+is+available+to+receive+it.%0A%0AOur+delivery+partner+may+get+in+touch+with+you+to+ensure+a+smooth+delivery+experience.%0A%0AOrder+ID%3A+${orderId}%0AItems%3A+${productName}+and+${productName2}+items%0ACourier+Partner%3A+${courierPartner}&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.all_orders_7 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=%2AOrder+under+production%21%2A%0A%0AYour+order+is+under+production.+We%27re+crafting+it+with+care+to+ensure+it+reaches+you+just+right%21%0A%0AOrder+ID%3A+${orderId}%0AEstimated+Delivery+Date%3A+${deliveryDate}%0AItems%3A+${productName}%0A%0AClick+the+button+below+to+to+track+your+order&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.all_orders_installation_t_f_and_installation_8 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Installation+Updates+%21%0A%0AYour+order+is+out+for+delivery+today.+%0A%0AOnce+the+delivery+is+completed%2C+installation+will+be+scheduled+within+${hours}+hours.+%0A%0AYou%27ll+receive+an+update+with+the+installer%E2%80%99s+details+as+soon+as+they+are+assigned.%0A%0AOrder+ID%3A+${orderId}%0AItems%3A+${productName}+and+${productName2}+items&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.all_orders_failed_delivery = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Failed+Delivery+Attempt%0A%0AWe+tried+delivering+your+order+today+but+couldn%27t+complete+it.+We+will+attempt+again+tomorrow.%0AWe%E2%80%99re+checking+with+the+courier+partner+and+will+reschedule+it+shortly.%0A%0AOrder+ID%3A+${orderId}%0AItems%3A+${productName}%0ACourier+Partner%3A+${courierPartner}&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.all_orders_delivered = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Delivery+Successful%21%0A%0AItems+in+you+order+has+been+delivered%21+We+hope+you+love+it.%0AOrder+ID%3A+${orderId}%0AItems+%3A+${productName}&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.all_orders_diy_install_flag_11 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Delivered+-+Installation+Update+%21%0A%0AA+technician+will+visit+in+${hours}+hrs+for+installation.+We%27ll+notify+you+with+the+technician+details.%0A%0AOrder+ID%3A+${orderId}%0Aitems%3A+${productName}&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.all_orders_max_edd_today_12 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Order+Delayed%0A%0ADue+to+unforeseen+circumstances+your+order+is+delayed.+Our+team+is+working+tirelessly+to+make+sure+your+order+reaches+you+on+time.+%0A%0A+We+appreciate+your+patience.%0A%0AOrder+ID%3A+${orderId}%0ACourier+Partner%3A+${courierPartner}&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.all_orders_order_not_dispatched_13 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Order+Delayed%0A%0ADue+to+unforeseen+circumstances+your+order+is+delayed.+Our+team+is+working+tirelessly+to+make+sure+your+order+reaches+you+on+time.+%0A%0A+We+appreciate+your+patience.%0A%0AOrder+ID%3A+${orderId}&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.order_delayed_factory_14 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Order+Delayed%0A%0ADue+to+unforeseeable+circumstances%2C+your+order+is+delayed.+We+are+working+on+priority+to+deliver+your+order+as+soon+as+we+can.%0A%0AOrder+ID%3A+${orderId}%0AEstimated+Delivery+Date%3A+${deliveryDate}&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.all_orders_6pm_15 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Order+In-Processing+%21%0A%0AOur+team+is+processing+your+order+-+we+are+working+tirelessly+to+make+sure+it+reaches+to+you+on+time.+%0A%0AOrder+ID%3A${orderId}%0AItems%3A+${productName}%0AEstimated+Delivery+Date+${deliveryDate}&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.all_orders_4pm_16 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Order+In-Transit+%21%0A%0AYour+order+is+on+your+way+to+you+Your+order+is+in+transit%3A+Sit+back+and+relax.+We+are+working+with+the+courier+partner+to+make+sure+it+reaches+you+on+time.+%0A%0AOrder+ID%3A${orderId}%0AItems%3A+${productName}%0AEstimated+Delivery+Date+${deliveryDate}&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.all_order_hold_17 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Order+on+Hold%0A%0AItems+in+your+order+is+currently+on+hold.+We%27ll+notify+you+with+the+new+Delivery+Date+as+soon+as+it+resumes+processing.%0A%0AOrder+ID%3A+${orderId}%0AItems%3A+${productName}%0A%0AIf+you+have+any+queries%2C+write+to+us+at+care%40thesleepcompany.in&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.all_orders_unhold_18 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Order+being+processed%21%0A%0AItems+in+your+order+are+now+being+processed.+We%E2%80%99ll+update+you+as+soon+as+they+are+shipped.%0A%0AOrder+ID%3A+${orderId}%0AEstimated+Delivery+Date%3A+${deliveryDate}%0A%0AIf+you+have+any+queries%2C+write+to+us+at+care%40thesleepcompany.in&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.all_request_placed_ = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Your+%2A${purpose}%2A+request+is+placed%0A%0AWe%27ve+received+your+%2A${purpose}%2A+request.%0AYour+request+is+under+approval+process.+Our+Sleep+Expert+will+contact+you+within+24+hours+to+confirm+and+guide+you+through+the+next+steps.%0A%0AOrder+ID%3A+${orderId}%0AItem%3A+${productName}%0A%0AClick+the+button+below+to+track+your+order&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.all_requests_rejected_20 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Your+request+for+${purpose}+is+Rejected%0A%0AHello+${customerName}%2C%0A%0AWe%E2%80%99re+sorry+to+inform+you+that+your+${context}+request+has+been+rejected.%0A%0AItem%3A+${productName}%0AReason%3A+${rejectionReason}%0A%0AIf+you+have+any+queries%2C+write+to+us+at+care%40thesleepcompany.in%0A%0ARegards%2C%0ATeam+The+Sleep+Company&isTemplate=true`,
    headers: {},
  };

  whatsapp.part_order_booked_against_request_21 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Part+Order+Booked+%21%0A%0APart+order.has+been+booked+against+your+request.+%0A%0AOrder+ID%3A+${orderId}%0AItems%3A+${productName}%0AEstimated+Delivery+Date%3A+${deliveryDate}&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.rp_booked_against_request_22 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=%2AReplacement+Booked%2A%0A%0AYour+replacement+has+been+placed+and+pickup+for+the+old+product+has+been+arranged.+%0A%0AYour+new+product+will+be+shipped+after+the+pickup+of+the+original+item.%0A%0APickup+Courier+Partner%3A${courierPartner}%0AEstimated+Pickup+Date%3A+${pickupDate}%0AItem%3A+${productName}%0A%0A%2AReplacement+Order+ID%3A%2A+${orderId}%0ANew+Item%3A+${new_productName}%0AEstimated+Delivery+Date%3A+${deliveryDate}&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.rpcx_booked_against_request_23 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=%2AReplacement+Booked%2A+%0A%0AHello+${customerName}%2C%0A%0AYour+replacement+has+been+placed+and+pickup+for+the+old+product+has+been+arranged.+%0A%0A%2APickup+Courier+Partner%3A%2A+${courierPartner}%0A%2AEstimated+Pickup+Date%3A%2A+${pickupDate}%0A%2AItem%3A%2A+${productName}%0A%0A%2AReplacement+Order+ID%3A%2A+${orderId}%0A%2AEstimated+Delivery+Date%3A%2A+${deliveryDate}&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.return_booked_24 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=%2AReturn+Booked%2A%0A%0AYour+Return+for+${productName}+has+been+booked+successfully.+%0A%0AOur+courier+partner+will+reach+out+to+arrange+the+pickup.+Refunds+will+be+done+after+pickup.+%0A%0A%2AOrder+ID%3A%2A+${orderId}%0A%2AItems%3A%2A+${productName2}%0A%2AEstimated+Reverse+pickup+Date%3A%2A+${pickupDate}%0A%2ACourier+Partner%3A%2A+${courierPartner}&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.all_reverse_pickups_25 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Out+for+Pick-Up%0A%0AYour+pickup+is+scheduled+today.+Please+keep+the+product+ready.%0A%0AOrder+ID%3A+${orderId}%0AItem%3A+${productName}&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.pickup_rejected_26 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Pickup+Rejected%0A%0APickup+could+not+be+completed+as+it+was+rejected.+We%27ll+contact+you+to+reschedule.%0A%0AOrder+ID%3A+${orderId}%0AItems%3A+${productName}%0A%0APlease+note+your+replacement%2Frefund+may+be+slightly+delayed+due+to+delay+in+pickup.+Thanks+for+your+patience+and+understanding.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.pickup_cancelled_27 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Pickup+Cancelled%0A%0APickup+has+been+cancelled+as+per+your+request.+We%27ll+contact+you+to+reschedule.%0A%0AOrder+ID%3A+${orderId}%0AItems%3A+${productName}%0A%0APlease+note+your+replacement%2Frefund+may+be+slightly+delayed+due+to+delay+in+pickup.+Thanks+for+your+patience+and+understanding.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.picked_up_28 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Picked+Up%0A%0AItem+successfully+picked+up.+We%E2%80%99ll+now+process+your+refund%2Freplacement.%0A%0AOrder+ID%3A+${orderId}%0AItem%3A+${productName}&isTemplate=true&footer=The+Sleep+Comapny`,
    headers: {},
  };

  whatsapp.cancelled_delivery_29 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Cancelled+Delivery%0A%0AYour+delivery+has+been+cancelled+by+the+courier+partner.+If+this+wasn%27t+intended%2C+contact+us+immediately.%0A%0AOrder+ID%3A+${orderId}%0AItems%3A+${productName}%0A%0AIf+you+have+any+queries%2C+write+to+us+at+care%40thesleepcompany.in&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.return_to_origin_initiated_30 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Return+to+Origin+%28RTO%29+Initiated%0A%0AReturn+to+Sleep+Company+initiated.+If+this+was+not+intended%2C+please+contact+support.%0A%0AOrder+ID%3A+${orderId}%0AItems%3A+${productName}%0A%0AIf+you+have+any+queries%2C+write+to+us+at+care%40thesleepcompany.in&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.order_wa_1_23july25 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=%2AReplacement+Completed%2A%0A%0AReplacement+Order+delivered+and+your+previous+item+picked+up.Thank+you+for+your+cooperation%21%0A%0AOld+Order+ID%3A+%2A${orderId}%2A%0ANew+Order+ID%3A+%2A${newOrderId}%2A%0A%0AIf+you+have+any+refund+it+will+be+processed+in+7+working+days.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.order_wa_2_23july25 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=%2AReturn+Picked+Up%2A%0A%0AWe+have+picked+up+your+return+item.+%0ARefund+will+be+processed+in+5-7+working+days.+%0A%0AOrder+ID%3A+%2A${orderId}%2A%0AItem%3A+%2A${productName}%2A&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.order_wa_3_23july25 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=%2ARefund+Processed%2A%0A%0AYour+refund+of+%2A${refundAmount}%2A+has+been+successfully+processed.+It+should+reflect+in+your+account+soon.%0A%0AOrder+ID%3A+%2A${orderId}%2A%0ARefund+Amount%3A+%2A${refundAmount}%2A%0ATransaction+ID%3A+%2A${transactionCode}%2A&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.order_wa_4_23july25 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=%2AOrder+Edited%2A%0A%0AYour+order+has+been+edited.%0A%0AOld+Order+ID%3A+%2A${orderId}%2A%0ANew+Order+ID%3A+%2A${newOrderId}%2A%0AEstimated+Delivery+Date%3A+%2A${deliveryDate}%2A&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.order_wa_5_23july25 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=%2AOrder+Un-Hold%2A%0A%0AOrder+which+was+on+Hold+is+now+being+processed.+%0A%0AOrder+ID%3A+${orderId}%0ANew+Estimated+Delivery+Date%3A+${deliveryDate}%0A%0AIf+you+have+any+queries%2C+write+to+us+at+care%40thesleepcompany.in&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.order_cancelled_30july2025 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=%2AOrder+Cancelled%2A%0A%0AOrder+is+cancelled.The+refund+will+be+processed+in+5-7+working+days.+%0A%0A%2AOrder+ID%2A%3A+${orderId}%0A%0AIf+you+have+any+queries%2C+write+to+us+at+care%40thesleepcompany.in&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.part_order_confirmed_30july2025 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=%2APart+Order+Confirmation%2A%0A%0AHello+${orderId}%2C%0A%0A%2AYour+part+order%2A+%28ID%3A+${orderId2}%29+has+been+successfully+booked+as+per+your+request.%0A%0A%2AOrder+ID%2A%3A+${orderId3}%0A%2AItem%2A%3A+${productName}%0A%2AEstimated+Delivery+Date%2A%3A+${deliveryDate}%0A%0AFor+any+assistance%2C+you+can+reach+us+at+care%40thesleepcompany.in.%0A%0A%2AThank+you%2A&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.order_cancellation_requested_30july2025 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=%2ACancellation+Requested%2A%0A%0AWe+have+received+your+cancellation+request.+Our+sleep+expert+will+get+in+touch+with+you+to+confirm+and+guide+you+through+the+next+steps.+%0A%0A%2AOrder+ID%2A%3A+${orderId}&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.order_cash_carry = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Dear+Customer%2C%0A%0AYour+Order+Tewst+was+handed+to+you+at+The+Sleep+Company+Store.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.order_arrived_Early = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=%2AArrived+Early%21%2A%0A%0AItems+in+you+order+has+%2Aarrived+early%21%2A+We+hope+you+love+it.%0A%0A%2AOrder+ID%2A%3A+${orderId}%0A%2AItems%2A+%3A+${productName}&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.Installation_update = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=%2AInstallation+Update%21%2A%0A%0AHi+there%21+Your+order+qualifies+for+a+TSC+installation.+%0A%0AAn+installer+will+visit+your+address+${hours}+hours+after+your+items+are+delivered.+%0A%0AWe+will+share+installer+details+once+delivery+is+confirmed.%0A%0A%2AOrder+ID%2A%3A+${orderId}%0A%2AItems%2A%3A+${productName}%0A%2AEstimated+Delivery%2A%3A+${deliveryDate}&isTemplate=true`,
    headers: {},
  };

  whatsapp.pos_product_brochure = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi%2C%0AAs+requested+below+is+the+link+for+the+product+brochure%0A%0A${brochureLink}%0A%0A+Let+us+know+if+anything+needs+clarification.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.pos_invoice_template = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0AAs+requested+below+is+the+link+to+your+invoice+on+your+purchase+of+${productName}+from+%2AThe+Sleep+Company%2A%0A%0A${invoiceUrl}%0A%0A+Let+us+know+if+anything+needs+clarification.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.architect_may_template = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=%2ADear+Partner%2C%2A%0A+%0AThank+you+for+placing+your+trust+in+us+and+referring+your+client+to+The+Sleep+Company.+We+take+utmost+care+in+ensuring+that+our+products+are+of+the+best+quality%2C+and+we+hope+your+clients+are+thoroughly+satisfied.%0A%0AYour+loyalty+reward+of+Rs.+%2A${payAmount}%2A+is+in+process%2C+for+the+order+%28s%29+%2A${orderId}%2A.+We+will+send+the+UTRN+on+or+before+20th+August+2025.+%0A%0AWe+look+forward+to+continue+serving+you+to+the+best+of+our+abilities+in+the+future+as+well.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.architect_may_template = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=2000233295&password=t6yZNm2q&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Dear+Partner%2C%0A+%0AThank+you+for+placing+your+trust+in+us+and+referring+your+client+to+The+Sleep+Company.+%0AWe+take+utmost+care+in+ensuring+that+our+products+are+of+the+best+quality%2C+and+we+hope+your+clients+are+thoroughly+satisfied.%0A%0AYour+loyalty+reward+of+Rs.%2A${commissionAmount}%2A+is+in+process%2C+for+the+order+%28s%29+%2A${orderId}%2A.+We+will+send+the+UTRN+on+or+before+20th+August+2025.+%0A%0AWe+look+forward+to+continue+serving+you+to+the+best+of+our+abilities+in+the+future+as+well.&isTemplate=true&footer=The+Sleep+Comapny`,
    headers: {},
  };

  whatsapp.transit_template = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=%2AIn-transit%2A%0A%0AYour+order+is+shipped+and+is+in+transit+with+our+courier+partner.+Sit+back+and+relax+we+will+update+you+when+it+is+out+for+delivery+%0A%0AOrder+ID%3A+${orderId}%0AEstimated+Delivery+Date%3A+${deliveryDate}%0AItems%3A+${productName}%0ACourier+Partner%3A+${courierPartner}%0A%0AClick+the+button+below+to+track+your+order.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.arriving_today_template = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Arriving+Today%21+%0A%0AYour+order+is+out+for+delivery+today.+%0A%0APlease+keep+your+phone+handy+and+ensure+someone+is+available+to+receive+it.%0A%0AOur+delivery+partner+may+get+in+touch+with+you+to+ensure+a+smooth+delivery+experience.%0A%0AOrder+ID%3A+${orderId}%0AItems%3A+${productName}%0ACourier+Partner%3A+${courierPartner}%0A%0AClick+the+button+below+to+track+your+order.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.installation_updates_template = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Your+order+is+out+for+delivery+today.+%0A%0AOnce+the+delivery+is+completed%2C+installation+will+be+scheduled+within+${hours}++hours.+%0A%0AYou%27ll+receive+an+update+with+the+installer%E2%80%99s+details+as+soon+as+they+are+assigned.%0A%0AOrder+ID%3A+${orderId}%0AItems%3A+${productName}%0A%0AClick+the+button+below+to+track+your+order&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.order_under_production_template = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=%2AOrder+under+production%2A%0A%0AYour+order+is+under+production.+We%27re+crafting+it+with+care+to+ensure+it+reaches+you+just+right%21%0AOrder+ID%3A+${orderId}%0AEstimated+Delivery+Date%3A+${deliveryDate}%0AItems%3A+${productName}+order+is+under+production.+We%27re+crafting+it+with+care+to+ensure+it+reaches+you+just+right%21%0A%0AOrder+ID%3A+${orderId}%0AEstimated+Delivery+Date%3A+${deliveryDate}%0AItems%3A+${productName}%0A%0AClick+the+button+below+to+track+your+order&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.b_2_b_brochure = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=2000233295&password=t6yZNm2q&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hey%2C%0A%0AThanks+for+reaching+out+to+The+Sleep+Company+for+our+${productName}+brochure%0A%0AYou+can+download+it+here%3A+${brochureLink}%0A%0AIf+you+have+any+questions%2C+feel+free+to+contact+us+at+${companyNumber}.%0A%0AThe+Sleep+Company.`,
    headers: {},
  };

  whatsapp.order_cas_and_carry = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Dear+customer%2C%0A%0AYour+Order+${orderId}+was+handed+to+you+at+The+Sleep+Company+Store.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.partial_payment_1 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Dear+Customer%2C%0A%0AYour+products+are+successfully+reserved+under+%2ASmart+Reserve%2A.+Please+complete+your+payment+within+%2A${days}%2A+days+by+visiting+%2A${storeName}%2A+to+confirm+your+order.%0A%0AAmount+Paid%3A+%2A%E2%82%B9${payAmount}%2A%0ABalance+Amount+%3A+%2A%E2%82%B9${balanceAmount}%2A%0ADeadline%3A+${dueDate}%0AWe%E2%80%99re+holding+your+price+and+offer+until+then%21%0A${storeName}+%7C+${storeNumber}%0A%0AThank+you+for+choosing+%2AThe+Sleep+Company%2A`,
    headers: {},
  };

  whatsapp.partial_payment__2 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi%2C%0A%0AHalf+of+your+Smart+Reserve+window+has+passed.%0A%0APlease+visit+%2A${storeName}%2A+to+complete+your+remaining+payment+of+%2A%E2%82%B9${balanceAmount}%2A+before+%2A${dueDate}%2A.%0A%0AThank+you+for+choosing+%2AThe+Sleep+Company%2A`,
    headers: {},
  };

  whatsapp.partial_payment_3 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Dear+Customer%2C%0A%0AThis+is+your+final+reminder+%E2%80%94+your+%2ASmart+Reserve%2A+will+expire+on+%2A${dueDate}%2A.+%0A%0AVisit+%2A${storeName}%2A+tomorrow+to+complete+your+payment+and+confirm+your+order.%0A%0ANeed+assistance%3F+Call+us+at+${storeNumber}.%0A%0AThank+you+for+choosing+%2AThe+Sleep+Company%2A`,
    headers: {},
  };

  whatsapp.pos_cohort_mattress = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hello%2C+your+requested+quotation+from+%2AThe+Sleep+Company%2A+is+ready.%0A%0AQuotation+Amount%3A+%2A%E2%82%B9${quotationAmount}%2A%0AView+Quotation%3A+%2A${quotationlink}%2A%0A%0AFor+any+queries+related+to+this+quotation%2C+reply+to+this+message.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.date_reschedule = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Your+order+with+The+Sleep+Company+has+been+confirmed+and+scheduled+for+delivery.%0A%0AOrder+ID%3A+%2A${orderId}%2A%0ADelivery+Date%3A+%2A${deliveryDate}%2A%0AProduct%28s%29%3A+%2A${productName}%2A%0A%0APlease+confirm+your+availability+to+receive+the+delivery.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.architect_commission_new = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=2000233295&password=t6yZNm2q&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Dear+Partner%2C%0A+%0AThank+you+for+placing+your+trust+in+us+and+referring+your+client+to+The+Sleep+Company.+%0AWe+take+utmost+care+in+ensuring+that+our+products+are+of+the+best+quality%2C+and+we+hope+your+clients+are+thoroughly+satisfied.%0A%0AYour+loyalty+reward+of+Rs.%2A${commissionAmount}%2A+is+in+process%2C+for+the+order+%28s%29+%2A${orderId}%2A.+We+will+send+the+UTRN+on+or+before+%2A${commissionissueDate}%2A.%0A%0AWe+look+forward+to+continue+serving+you+to+the+best+of+our+abilities+in+the+future+as+well.&isTemplate=true&footer=The+Sleep+Comapny`,
    headers: {},
  };

  whatsapp.architect_form_submit = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=%2AHi+admin%2C%2A+form+for+architect+${bdtscId}+has+been+submitted.%0A%0APlease+check+your+portal+and+verify+the+documents+immediately.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.architect_form_resubmit = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=%2AHi+admin%2C%2A+form+for+architect+${bdtscId}+has+been+resubmitted+after+your+initial+verification.%0A%0APlease+check+your+portal+and+verify+the+details+immediately.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.architect_Approved = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=%2AApproved%3A%2A+The+status+of+your+${bdtscId}+is+approved.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.architect_Rejected = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=%2ARejected%3A%2A+Hi+BD%2C+status+of+your+${bdtscId}+is+rejected%2C+because+network+error+resubmit+below+documents+${architect_docs}+%0A%0AResubmit+the+form+with+all+the+above+mentioned+documents&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.vendor_code = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+BD%2C+Vendor+code+for+${bdtscId}+is+${vendor_code}%0A%0AThank+you+for+choosing+the+Sleep+Company&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.return_replace_code = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Dear+Manager%2C%0A%0AAgent+%2A${agentName}%2A+has+requested+a+discount.+Please+share+the+approval+code.%0A%0ADetails%3A%0AType%3A+%2A${purpose}%2A%0AOrder+ID%3A+${orderId}%0ADelivery+Date%3A+${deliveryDate}%0ADays+from+Delivery%3A+${numberofDays}%0AReason%3A+${rejectionReason}%0AOld+Product%3A+${oldProduct}%0ANew+Product%3A+${newProduct}%0ADifference+Amount%3A+${differenceAmount}%0ARequested+Discount%3A+${requestedDiscount}%0A%0AApproval+Code%3A+%2A${approvalCode}%2A&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.rr_cancellation = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=%E2%9D%8C+Your+Return+for+Order+${orderId}+has+been+cancelled.++%0A%0AReason%3A+${rejectionReason}%0A%0AItem%3A+${productName}%0A%0AIf+this+was+unintentional%2C+you+may+raise+a+new+request+within+your+${purpose}+window.++%0A%0ATrack+here%3A+${url}%0A%0AThe+Sleep+Company`,
    headers: {},
  };

  whatsapp.rr_replacemment_cancelled = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=%E2%9D%8C+Your+Replacement+for+Order+${orderId}+has+been+cancelled.++%0A%0AReason%3A+${rejectionReason}%0A%0AItem%3A+${productName}+%0A%0AReplacement+Order+ID+Cancelled%3A+${replacementOrderId}%0AReplacement+Item+Cancelled%3A+${productName2}%0A%0AIf+this+was+unintentional%2C+you+may+raise+a+new+request+within+your+${purpose}+window.++%0A%0ATrack+here%3A+${url}%0A%0AThe+Sleep+Company`,
    headers: {},
  };

  whatsapp.pos_100_night = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Dear+Customer%2C%0AYour+request+to+discontinue+the+100-night+trial+for+the+following+product%28s%29+has+been+received%3A%0A%0A%2A${productName}%2A%0A%0APlease+provide+the+%2A${otpNamespace}%2A+${OTP}+to+the+store+representative+to+proceed.%0A%0AAfter+confirmation%2C+returns+for+this+product+will+be+unavailable.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.outreach_warehouse_template = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=We+apologize+for+the+delay+in+delivering+your+order+due+to+the+festive+season+rush.%0A%0APlease+be+assured+that+our+logistics+team+is+prioritizing+your+shipment%2C+and+we+expect+it+to+reach+you+within+the+next+%2A3%E2%80%934+days%2A.%0A%0AWe+truly+value+your+patience+and+support+during+this+busy+period.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.partial_payment_refund = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Dear+Customer%2C%0A%0ASince+the+%2ASplit+Payment+window%2A+for+your+order+has+ended%2C+we%E2%80%99ve+raised+a+refund+ticket+for+the+partial+amount+of+%2A%E2%82%B9${refundAmount}%2A+that+you+have+paid.+%0A%0AYour+Refund+Ticket+ID+is+%2A${ticketId}%2A+created+on+%2A${createdOn}%2A.%0A%0AOur+CRM+team+will+contact+you+shortly+to+collect+your+payment+details+and+initiate+the+refund+process.%0A%0AFor+any+further+queries%2C+please+feel+free+to+reach+us+at+care%40thesleepcompany.in.%0A%0AThank+you+for+your+patience+and+understanding.%0A%0AWarm+regards%2C%0AThe+Sleep+Company+Team&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.cod_test_template = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+%2A${customerName}%2A%2C+your+%2ACOD%2A+order+%2A${orderId}%2A+from+The+Sleep+Company+is+ready+to+ship.++%0A%0APlease+confirm+your+order+to+ensure+smooth+delivery.%0A%0A%F0%9F%9B%8D+%2AOrder+Details%2A%0A+%0A${orderDetails}%0A%0ATotal%3A+%2A${payAmount}%2A%0AOrder+Placed+Date%3A+%2A${orderedDate}%2A&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.wa_blast = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Dear+%2ACustomer%2A%2C%0A%0ADue+to+the+Diwali+festive+season%2C+our+courier+partners+are+experiencing+delays+at+their+hubs%2C+which+may+cause+a+slight+delay+of+%2A3%E2%80%934+days%2A+in+your+delivery.%0A%0AWe+sincerely+apologize+for+the+inconvenience+and+truly+appreciate+your+patience+and+understanding+during+this+festive+time.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.lucky_Draw = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hey+%2A${customerName}%2A+%0A%0AThank+you+for+shopping+with+The+Sleep+Company.+Your+%2Aorder+id%2A+is+${orderId}+-+${excitingMsg}%2C+and+${excitingMsg2}+%0A%0AHere+are+your+Codes%3A+%2A${token}%2A+%0A%0AKeep+them+safe+-+${gifts}&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.diwali_order_edd_issue = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Dear+%2ACustomer%2A%2C%0A%0ADue+to+an+exceptionally+high+volume+of+%2ADiwali+orders%2A%2C+your+delivery+may+take+slightly+longer+than+expected.+%0AWe+sincerely+appreciate+your+patience+and+understanding+during+this+period.%0A%0AYour+new+expected+delivery+date+is+%2A${deliveryDate}%2A.%0A%0AThank+you+for+your+continued+trust+and+support.+We%E2%80%99re+working+diligently+to+ensure+your+order+reaches+you+as+soon+as+possible.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.proforma_invoice = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi%2C%0A%0AThank+you+for+your+interest+in+%2AThe+Sleep+Company%2A.%0A%0AYou+can+view+your+%2AProforma+Invoice%2A+for+the+recent+quotation+below%3A+${url}%0A%0APlease+review+the+details+and+complete+the+payment+to+confirm+your+order.%0A%0AFor+any+queries+or+assistance%2C+our+team+is+always+here+to+help%21&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.offer_template = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hello%2C%0A%0AThanks+for+shopping+with+The+Sleep+Company+-++${excitingMsg}%2C+and+${excitingMsg2}%0A%0AHere+are+your+Codes%3A%0A%2A${token}%2A%0A%0AKeep+them+safe+-+${gifts}&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.quotation_update = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi%2C%0AYour+quotation+${quotationNumber}+has+been+updated.%0A%0AThe+price+of+${quotationAmount}+is+now+%E2%82%B9${revisedAmount}.+The+revised+total+quotation+amount+is+%E2%82%B9${finalAmount}.%0A%0AFor+any+clarification%2C+please+contact+your+nearest+The+Sleep+Company+store.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.rp_booked_packaging_dismantling = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Replacement+Order+Update%0A%0AYour+replacement+has+been+created.+Pickup+of+your+existing+product+has+been+initiated.%0A%0ATimeline+of+order%3A%0A%E2%80%A2+Packaging+delivery%3A+%2A${packagingDeliveryDate}%2A%0A%E2%80%A2+Dismantling+visit%3A+%2A${dismantlingDeliveryDate}%2A%0A%E2%80%A2+Pickup+%28estimated%29%3A+%2A${pickupDate}%2A%0A%0AReplacement+order+ID+${orderId}+is+on+hold+and+will+be+shipped+after+the+pickup+is+completed.%0A%0A%E2%80%A2+Replacement+item%3A+%2A${replacementProduct}%2A%0A%E2%80%A2+Estimated+delivery%3A+%2A${deliveryDate}%2A&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.rp_booked_dismantling_only = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=%2AReplacement+Booked%2A%0A%0AYour+replacement+request+has+been+recorded.+The+pickup+process+for+your+existing+item+has+been+scheduled.%0A%0A%E2%80%A2+Dismantling+visit%3A+%2A${dismantlingDeliveryDate}%2A%0A%0A%E2%80%A2+Pickup+date%3A+%2A${pickupDate}%2A%0A%0AReplacement+order+ID%3A+%2A${orderId}%2A%E2%80%94+dispatch+will+take+place+after+the+pickup+is+completed.%0A%0A%E2%80%A2+Replacement+item%3A+%2A${replacementProduct}%2A%0A%0A%E2%80%A2+Expected+delivery%3A+%2A${deliveryDate}%2A%0A%0AThis+message+is+shared+for+your+order+status+reference.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.rpcx_packaging_dismantling = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Replacement+Booked%0A%0AHello+%2A${customerName}%2A%2C+this+is+an+update+regarding+your+replacement+request.+Below+are+the+current+details%3A%0A%0A%E2%80%A2+Packaging+delivery+date%3A+%2A${packagingDeliveryDate}%2A%0A%0A%E2%80%A2+Dismantling+visit+date%3A+%2A${dismantlingDeliveryDate}%2A%0A%0A%E2%80%A2+Pickup+date%3A+%2A${pickupDate}%2A%0A%0A%E2%80%A2+Replacement+order+ID%3A+%2A${replacementOrderId}%2A%0A%0A%E2%80%A2+Estimated+Delivery+date%3A+%2A${deliveryDate}%2A%0A%0AThis+message+contains+order+information+for+your+reference.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.rpcx_dismantling_only = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Replacement+Information%0A%0AHello+%2A${customerName}%2A%2C+here+are+the+latest+details+for+your+replacement+request%3A%0A%0A%E2%80%A2+Dismantling+visit%3A+%2A${dismantlingDeliveryDate}%2A%0A%0A%E2%80%A2+Pickup+date%3A+%2A${pickupDate}%2A%0A%0A%E2%80%A2+Replacement+order+ID%3A+%2A${replacementOrderId}%2A%0A%0A%E2%80%A2+Delivery+date%3A+%2A${deliveryDate}%2A%0A%0AThis+message+is+sent+to+keep+you+informed+about+your+replacement+process.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.return_packaging_dismantling = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Return+Booked%0A%0AYour+return+request+for+%2A${productName}%2A+has+been+successfully+registered.%0A%0AOur+courier+partner+will+complete+packaging+and+dismantling+before+pickup.+The+refund+will+be+processed+once+the+item+is+collected.%0A%0APackaging+delivery%3A+%2A${packagingDeliveryDate}%2A%0A%0ADismantling+visit%3A+%2A${dismantlingDeliveryDate}%2A%0A%0APickup+Date%3A+%2A${pickupDate}%2A%0A%0A+Order+ID%3A+%2A${orderId}%2A%0A%0AProducts%28s%29%3A+%2A${productName2}%2A%0A%0AThis+message+confirms+your+return+has+been+booked+and+provides+the+scheduled+service+details.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.packaging_booked = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Packaging+Material+Details%0A%0ABelow+are+the+current+records+for+your+packaging+material%3A%0A%0A%E2%80%A2+Order+ID%3A+${orderId}%0A%E2%80%A2+Delivery+date%3A+${deliveryDate}%0A%0AOnce+delivered%2C+a+technician+will+visit+within+${mindays}%E2%80%93${maxdays}+days+to+dismantle+the+product%2C+followed+by+pickup.&isTemplate=true&footer=The+Sleep+Comapny`,
    headers: {},
  };

  whatsapp.packaging_delivered = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Packaging+Delivery+Update%0A%0ABelow+are+the+current+details+for+your+packaging+material%3A%0A%0A%E2%80%A2+Status%3A+Delivered%0A%0A%E2%80%A2+Technician+visit+expected+within+${minHour}%E2%80%93${maxHour}+hours%0A%0AYou+will+receive+an+update+once+the+technician+is+assigned.+This+message+provides+information+related+to+your+packaging+and+service+schedule.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.dismantling_scheduled = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Technician+Visit+Scheduled%0A%0AYour+dismantling+visit+is+scheduled+for+${dismantlingDeliveryDate}.+Please+keep+access+ready.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.dismantling_done_pickup_scheduled = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Pickup+Update%0A%0AThis+is+to+inform+you+that+dismantling+has+been+completed+and+your+pickup+has+been+scheduled.%0A%0A%E2%80%A2+Courier+Partner%3A+${courierPartner}%0A%0A%E2%80%A2+Product+pickup+Date%3A+${pickupDate}%0A%0A%E2%80%A2+Product%28s%29%3A+${productName}%0A%0AOur+courier+partner+will+contact+you+on+the+day+of+pickup+for+coordination.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.edd_rescheduler = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Delivery+Scheduled%21%0A%0AWe+are+ready+to+deliver+your+order+tomorrow.%0A%0AOrder+Id%3A+${orderId}%0A%0AProduct%28s%29%3A+${productName}%0A%0ATime+Slot%3A+10+Am+to+9+Pm%0A%0APlease+confirm+your+availability&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.self_installed_new = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%0A%0AYour+${purpose}+is+allotted+for+today%0A%0ATechnician+assigned%3A-+%0AName+%3A+${technicianName}%0APhone+%3A+${technicianPhoneNo}%0A%0APlease+confirm+your+availability+by+selecting+%22I%27m+Available%22.+If+the+installation+is+already+done%2C+choose+%22Self+Installed%22.+If+you+are+not+available%2C+select+%22Reschedule%22.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.onhold_new = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Order+put+on+Hold%0A%0AAs+requested%2C+items+in+your+order+is+currently+put+on+hold.+We%27ll+notify+you+with+the+new+Delivery+Date+as+soon+as+it+resumes+processing.%0A%0AOrder+ID%3A+${orderId}%0AItems%3A+${productName}&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.quotation_update_2 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi%2C+your+quotation+${quotationNumber}+has+been+updated.%0A%0AThe+price+of+${productName}+has+been+revised+to+%E2%82%B9${revisedAmount}.+You+now+have+an+updated+saving+of+%E2%82%B9${savingAmount}.%0A%0AThe+new+total+quotation+value+is+%E2%82%B9${finalAmount}.%0A%0AFor+further+details+or+clarification%2C+please+contact+your+nearest+The+Sleep+Company+Store.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.my_order_follow_up = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi%2C+%0A%0AWe+attempted+to+contact+you+regarding+your+recent+order+but+were+unable+to+connect.%0A%0APlease+reach+out+to+us+at+%2B91+98119+81911+at+your+convenience+so+we+can+assist+you+with+the+next+steps.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.Track_my_order = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Dear+Customer%2C%0A%0AThis+is+to+inform+you+that+the+status+of+your+order+is+available+on+the+My+Orders+page%2C+which+displays+order+processing+updates%2C+shipping+information%2C+and+expected+delivery+timelines.%0A%0AFor+any+required+support%2C+contact+customer+service.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.my_order_support = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+Customer%2C%0A%0AThank+you+for+contacting+us.%0A%0AFor+future+support+or+order-related+questions%2C+please+visit+the+My+Orders+page+to+view+or+manage+your+request%3A&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.product_price_update_2 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi%2C+good+news+%E2%80%94+the+prices+of+the+following+products+in+your+quotation+%2A${quotationNumber}%2A+have+recently+decreased%3A%0A%0A${productName}%0A%0AYou+now+save+a+total+of+%E2%82%B9%2A${savingAmount}%2A+across+these+items.%0A%0AVisit+your+nearest+The+Sleep+Company+store+or+contact+the+team+to+take+advantage+of+these+updated+product+prices.%0AAvailable+for+a+limited+period+of+time.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.non_fynd_order_placed = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0A%0AYour+order+has+been+received+and+is+currently+being+processed.%0A%0ATotal+parcels%3A+${totalParcels}%0A%0AItem+details%3A+${productName}%0A%0AOrder+tracking+information+is+available+at+the+link+provided+below.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.nf_shipment_dispatched = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0A%0AParcel+%5B1%5D+of+${totalParcels}+is+in+transit.%0A%0AItems%3A+${productName}%0ACourier+partner%3A+${courierPartner}%0AEstimated+delivery+date%3A+${deliveryDate}%0A%0AOrder+tracking+details+are+available+at+the+link+provided+below.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.nf_out_for_delivery = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0A%0AParcel+%5B1%5D+of+${totalParcels}+is+out+for+delivery+today.%0A%0AItems%3A+${productName}%0A%0APlease+ensure+your+phone+is+reachable+for+delivery+coordination.%0A%0AOrder+tracking+information+is+available+at+the+link+provided+below.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.nf_delivered = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0A%0AParcel+%5B1%5D+of+${totalParcels}+has+been+delivered.%0A%0AItems%3A+${productName}%0A%0AOrder+tracking+details+are+available+at+the+link+provided+below.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.nf_order_hold_no_date = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0A%0AYour+order+has+been+confirmed+and+is+currently+on+hold.%0A%0AItems%3A+${productName}%0A%0AThe+delivery+date+will+be+scheduled+and+shared+once+available.%0A%0AOrder+tracking+details+are+available+at+the+link+provided+below.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.nf_shipment_hold = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0A%0AParcel+%5B1%5D+of+${totalParcels}+is+currently+on+hold.%0A%0AItems%3A+${productName}%0A%0AYou+will+be+notified+when+processing+resumes.%0A%0AOrder+tracking+information+is+available+at+the+link+provided+below.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.nf_fdd_assigned = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0A%0AThe+delivery+date+for+your+order+has+been+confirmed.%0A%0ATotal+parcels%3A+${totalParcels}%0A%0AItem+details%3A+${productName}%0A%0AOrder+tracking+details+are+available+at+the+link+provided+below.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.nf_shipment_unhold = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0A%0AParcel+%5B1%5D+of+${totalParcels}+is+currently+being+processed.%0A%0AItems%3A+${productName}%0AEstimated+delivery+date%3A+${deliveryDate}%0A%0AOrder+tracking+details+are+available+at+the+link+provided+below.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.nf_order_unhold = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0A%0AYour+order+has+resumed+processing.%0A%0ATotal+parcels%3A+${totalParcels}%0A%0AItem+details%3A+${productName}%0A%0AOrder+tracking+information+is+available+at+the+link+provided+below.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.nf_delivery_delay = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0A%0AThe+delivery+date+for+Parcel+%5B1%5D+of+${totalParcels}+has+been+updated+due+to+a+delay.%0A%0AItems%3A+${productName}%0A%0AProcessing+will+continue.+No+action+is+required.%0A%0AOrder+tracking+details+are+available+at+the+link+provided+below.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.fynd_order_placed = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0A%0AYour+order+has+been+received+and+is+being+processed.%0A%0AItems%3A+${productName}%0AEstimated+delivery+date%3A+${deliveryDate}%0A%0AUpdates+will+be+provided+as+the+order+status+changes.%0A%0AOrder+tracking+details+are+available+at+the+link+provided+below.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.nf_dispatch_delay = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0A%0ADispatch+for+Parcel+%5B1%5D+of+${totalParcels}+is+delayed.%0A%0AItems%3A+${productName}%0A%0ADispatch+will+proceed+once+processing+resumes.+No+action+is+required.%0A%0AOrder+tracking+details+are+available+at+the+link+provided+below.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };


  whatsapp.fynd_out_for_delivery = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0A%0AParcel+%5B1%5D+of+${totalParcels}+is+out+for+delivery+today.%0A%0AItems%3A+${productName}%0A%0AThe+delivery+team+may+contact+you+for+coordination.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.fynd_delivered = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Delivery+Update%0A%0AYour+order+has+been+delivered+successfully.%0A%0AOrder+ID%3A+${orderId}%0AItems%3A+${productName}&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.fynd_express = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0A%0AYour+parcel+is+scheduled+for+delivery+tomorrow.%0A%0AParcel+%5B1%5D+of+${totalParcels}+contains+the+following+items%3A%0AItems%3A+${productName}%0A%0ADelivery+time+slot%3A+10+AM+to+9+PM%0A%0APlease+confirm+your+availability&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.fynd_rescheduled = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0A%0ABased+on+an+update+received+from+the+delivery+rider%2C+your+delivery+has+been+rescheduled+to+${deliveryDate}.%0A%0AThis+update+has+been+recorded+in+the+system.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.fynd_failed_cx = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0A%0AA+delivery+attempt+was+made+today%2C+but+you+could+not+be+reached.%0A%0AA+reattempt+is+scheduled+for+tomorrow.%0A%0APlease+confirm+your+delivery+preference.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.fynd_cancel = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0A%0AA+cancellation+request+for+your+order+has+been+received+and+is+currently+being+processed.%0A%0APlease+confirm+whether+this+request+was+initiated+by+you.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.fynd_failed_internal = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0A%0AA+delivery+attempt+could+not+be+completed+today.%0A%0AA+reattempt+is+scheduled+for+tomorrow.%0A%0AIf+you+need+to+reschedule%2C+please+select+an+option+below.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.replacement_created = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0A%0AYour+replacement+order+has+been+created.%0A%0AItem%3A+${productName}%0AEstimated+delivery+date%3A+${deliveryDate}%0A%0AUpdates+will+be+provided+as+the+order+status+changes.%0A%0AOrder+tracking+details+are+available+at+the+link+provided+below.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.part_rp_created = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0A%0AYour+replacement+part+has+been+arranged+and+is+currently+being+processed.%0A%0AItems%3A+${productName}%0AExpected+delivery+date%3A+${deliveryDate}%0A%0AUpdates+will+be+shared+as+the+order+status+changes.%0A%0AOrder+tracking+details+are+available+at+the+link+%28below%29.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.replacement_out_for_delivery = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0A%0AYour+replacement+order+is+out+for+delivery+today.%0A%0AItem%3A+${productName}%0A%0AOrder+details+and+tracking+information+are+available+at+the+link+below.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.replacement_dispatched = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0A%0AYour+replacement+order+has+been+dispatched.%0A%0AItem%3A+${productName}%0AEstimated+delivery+date%3A+${deliveryDate}%0A%0AOrder+details+and+tracking+information+are+available+at+the+link+below.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.replacement_delivered = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0A%0AYour+replacement+order+has+been+delivered.%0A%0AItem%3A+${productName}%0A%0AOrder+details+and+tracking+information+are+available+at+the+link+below.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.comp_order = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0A%0AYour+item+has+been+arranged+and+will+be+delivered+to+you.%0A%0AItems%3A+${productName}%0AExpected+delivery+date%3A+${deliveryDate}%0A%0AUpdates+will+be+provided+as+the+order+status+changes.%0A%0AOrder+details+and+tracking+information+are+available+at+the+%28below%29.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.clone_order = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0A%0AYour+order+has+been+received+and+is+being+processed.%0A%0AItems%3A+${productName}%0AExpected+delivery+date%3A+${deliveryDate}%0A%0AUpdates+will+be+provided+as+the+order+status+changes.%0A%0AOrder+details+and+tracking+information+are+available+at+the+%28below%29.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.exchange_ofd = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0A%0AYour+exchange+parcel+is+out+for+delivery+today.%0A%0AItem%3A+${productName}%0A%0APlease+have+the+original+item+ready+for+pickup.%0A%0APlease+confirm+your+availability+for+the+scheduled+delivery.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.exchange_confirmed = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0A%0AYour+exchange+order+has+been+confirmed.%0A%0AItem%3A+${productName}%0A%0APickup+of+your+current+item+and+delivery+of+the+new+one+are+scheduled+for+${deliveryDate}.%0A%0AOrder+details+and+tracking+information+are+available+at+the+%28below%29.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.exchange_fast = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0A%0AYour+exchange+is+scheduled+for+tomorrow.%0A%0AItem%3A+${productName}%0A%0APlease+confirm+your+availability%3A&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.exchange_failed_cx = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0A%0AAn+attempt+was+made+to+complete+your+exchange+today%2C+but+you+could+not+be+reached.%0A%0AA+reattempt+is+planned+for+tomorrow.%0A%0APlease+indicate+how+you+would+like+to+proceed.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.exchange_failed_internal = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0A%0AAn+attempt+to+complete+your+exchange+could+not+be+completed+today.%0A%0AA+reattempt+is+scheduled+for+tomorrow.%0A%0AIf+you+need+to+reschedule%2C+please+select+an+option+below.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.exchange_completed = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0A%0AYour+exchange+has+been+completed.%0A%0AThe+new+item+has+been+delivered%2C+and+the+previous+item+has+been+picked+up.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.exchange_rescheduled = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0A%0ABased+on+information+from+the+delivery+rider%2C+your+exchange+has+been+rescheduled+to+${deliveryDate}.%0A%0APlease+confirm+whether+this+change+was+requested+by+you.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.exchange_cancel_req = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0A%0AAn+exchange+cancellation+request+has+been+received+and+is+being+processed.%0A%0AA+representative+will+contact+you+for+verification.%0A%0APlease+confirm+whether+this+request+was+initiated+by+you.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.return_approved = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0A%0AYour+return+request+for+the+following+item%28s%29+has+been+approved.%0A%0AItems%3A+${productName}%0A%0AA+pickup+will+be+arranged+shortly.%0ARefund+processing+will+begin+after+the+item+is+collected.%0A%0AEstimated+pickup+date%3A+${pickupDate}%0A%0AOrder+details+and+tracking+information+are+available+at+the+link+below.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.return_pickup_tomorrow = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0A%0AYour+return+pickup+is+scheduled+for+tomorrow.%0A%0AItems%3A+${productName}%0A%0APlease+keep+the+item+ready+for+handover+at+the+scheduled+time.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.return_ofp = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0A%0AA+pickup+attempt+for+your+return+is+scheduled+for+today.%0A%0AThe+delivery+partner+may+contact+you+prior+to+arrival.%0A%0APlease+be+available+between+10+AM+and+9+PM.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.return_cancelled = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0A%0AYour+return+request+for+the+following+item%28s%29+has+been+cancelled+as+requested.%0A%0AItem%28s%29%3A+${productName}%0A%0ANo+further+action+is+required+at+this+time.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.return_picked = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0A%0AYour+item+has+been+collected+and+is+currently+in+transit.%0A%0AItem%3A+${productName}%0A%0AThe+refund+has+been+initiated+and+will+be+credited+to+the+original+payment+method+within+72+hours.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.fynd_delivery_reminder_5pm = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0A%0AYour+parcel+is+scheduled+for+delivery+tomorrow.%0A%0APlease+confirm+your+availability+for+the+scheduled+delivery.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.return_pickup_rescheduled = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0A%0AThe+pickup+could+not+be+completed+today+due+to+an+unexpected+delay.%0A%0AA+reattempt+is+planned+for+tomorrow.%0A%0APlease+share+your+availability+for+the+scheduled+pickup.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };


  whatsapp.fynd_rescheduled_agent = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0A%0AYour+delivery+has+been+updated+to+${deliveryDate}+based+on+a+request+received.%0A%0APlease+confirm+whether+this+change+was+requested+by+you.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.fynd_ofd_reminder = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0A%0AYour+parcel+is+out+for+delivery+today.%0A%0APlease+confirm+your+availability+for+the+delivery.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.return_rescheduled_agent = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0A%0AYour+parcel+is+out+for+delivery+today.%0A%0APlease+confirm+your+availability+for+the+delivery.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.exchange_rescheduled_agent = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0A%0AAs+per+your+request%2C+the+exchange+date+has+been+updated+to+${deliveryDate}.%0A%0APlease+confirm+whether+this+change+was+requested+by+you.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.order_placed_link_tracking = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Dear+Customer%2C%0A%0AYour+order+with+The+Sleep+Company+has+been+successfully+placed.%0A%0AOrder+ID%3A+${orderId}%0A%0AOrder+Tracking+Link%3A+${trackURL}%0A%0APlease+use+the+link+above+to+track+the+status+of+your+order.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.reschedule_otp = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0A%0AYour+delivery+has+been+rescheduled+for+${rescheduledate}.%0A%0APlease+share+the+code+${OTP}+with+our+executive.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.reschedule_otp_resend = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0A%0AAs+requested%2C+here+is+your+new+reference+${OTP}+to+confirm+your+reschedule+on+${rescheduledate}.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.invoice_download_template = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Dear+Customer%2C%0A%0AInvoice+details+for+your+order+are+provided+below.%0A%0AOrder+ID%3A+${orderId}%0A%0AAWB+Number%3A+${awbNo}%0A%0ADelivery+Date%3A+${deliveryDate}%0A%0AInvoice+Link%3A+${invoiceUrl}%3A%2F%2F%0A%0AUse+the+link+above+to+download+the+invoice.`,
    headers: {},
  };

  whatsapp.reschedule_custom_approval_ = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=${userid}&password=${userpwd}&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Hi+${customerName}%2C%0A%0AYour+technician+visit+has+been+rescheduled+for+${rescheduledate}.%0A%0APlease+share+the+code+${OTP}+with+our+executive.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  whatsapp.store_to_store_transfer = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://mediaapi.smsgupshup.com/GatewayAPI/rest?userid=2000260010&password=P7Bq7v2W4&send_to=${phoneNumber}&v=1.1&format=json&msg_type=TEXT&method=SENDMESSAGE&msg=Code+${OTP}+is+required+for+Store-to-Store+movement+from+${sourceStore}+to+${destinationStore}+for+product%28s%29+${productName}+mentioned+above.%0A%0AThis+code+should+be+shared+with+the+store.&isTemplate=true&footer=The+Sleep+Company`,
    headers: {},
  };

  return whatsapp[templateName];
};
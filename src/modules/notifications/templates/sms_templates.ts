// @ts-nocheck
export const smstemplateDetail = function (template_attributes) {
  const sms = {};

  const {
    phoneNo = "",
    customerName = "",
    templateName = "",
    awbNo = "",
    token = "",
    replacement_orderId = "",
    replacement_productName = "",
    technicianName = "",
    technicianPhoneNo = "",
    refundAmount = "",
    futureInstallationDate = "",
    loginOTP = "",
    quotationlink = "",
    quatationAmount = "",
    storeName = "",
    minEdd = "",
    maxEdd = "",
    staffName = "",
    hours = "",
    staffId = "",
    quotationNo = "",
    promotionalDiscountAmount = "",
    campaignDiscountAmount = "",
    finalDiscountedAmount = "",
    requestedDiscountAmount = "",
    additionalDiscountPercentage = "",
    OTP = "",
    orderValue = "",
    rejectReason = "",
    reRequest = "",
    customerNo = "",
    refund_link = "",
    couponCode = "",
    couponType = "",
    couponTitle = "",
    purpose = "",
    url = "",
    productName = "",
    courierPartner = "",
    pickupDate = "",
    edd = "",
    deliveryCharge = "",
    deliveryDate = "",
    lineitem = "",
    reschedule_date = "",
    timespan = "",
    packagingEdd = "",
    dismantlingEdd = "",
    pickupEdd = "",
    deliveryPartner = "",
    trackUrl = "",
  } = template_attributes;

  const orderId = template_attributes.orderId || template_attributes.order_id || ""

  const phoneNumber = phoneNo ? String(phoneNo).slice(-10) : undefined;

  const tracklink = `https://thesleepcompany.in/account/login?return_url=%2Faccount%23view=${orderId}`;

  const clickposttracklink = `https://thesleepcompany.clickpost.ai/?waybill=${awbNo}`;

  sms.orderReceiveTemplate = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Hi ${customerName}! Your The Sleep Company order ${orderId} is placed! Click to track: ${tracklink} For queries email us at care@thesleepcompany.in&entityid=1201159317126206525&templateid=1707172794146127988`,
    headers: {},
  };

  sms.orderReceiveEdd = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Hi ${customerName}! Your The Sleep Company order ${orderId} is placed! We'll share the tracking link when shipped. Details:\nhttps://thesleepcompany.in/account%23view=orders\nQueries: care@thesleepcompany.in&entityid=1201159317126206525&templateid=1707172258526174945`,
    headers: {},
  };

  sms.ORDER_PLACED = sms.orderReceiveTemplate;

  sms.shippedTemplate = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Hi ${customerName}! Your The Sleep Company order ${orderId} is shipped! Click to track: ${tracklink} For queries, email care@thesleepcompany.in&entityid=1201159317126206525&templateid=1707172794191652424`,
    headers: {},
  };

  sms.deliveredTemplate = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Time to celebrate! Your The Sleep Company order ${orderId} has successfully been delivered! Click for more details: ${tracklink}&entityid=1201159317126206525&templateid=1707172794158996245`,
    headers: {},
  };

  sms.cashandcarryTemplate = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Hi ${customerName}! Your The Sleep Company order ${orderId} is placed! Thank you for choosing us ! For queries email us at care@thesleepcompany.in\n&entityid=1201159317126206525&templateid=1707172794215721551`,
    headers: {},
  };

  //replacement related templates....

  sms.ReplacementOrderPLaced = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Hi ${customerName}, your replacement order ${orderId} is placed! Tracking link will be shared upon shipment. For queries email care@thesleepcompany.in&entityid=1201159317126206525&templateid=1707172803479598219`,
    headers: {},
  };

  sms.ReplacementOrderShipped = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Hi ${customerName}! Your Replacement Order ${orderId} is Shipped! Click to Track: ${clickposttracklink} For queries email us at care@thesleepcompany.in&entityid=1201159317126206525&templateid=1707172794428447519`,
    headers: {},
  };

  sms.ReplacementOrderDelivered = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Hi ${customerName}! your Replacement Order ${orderId} has successfully been delivered! For queries please email us at care@thesleepcompany.in&entityid=1201159317126206525&templateid=1707172794459092894`,
    headers: {},
  };

  sms.InstallerAssigned = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Hi%20${customerName}!%20Our%20Sleep%20Squad%20member%20${technicianName}%20(${technicianPhoneNo})%20will%20install%20your%20order.%20He%20will%20contact%20you%20to%20confirm.%20Please%20be%20available%20during%20installation.%20%0A%0AThe%20Sleep%20Company&entityid=1201159317126206525&templateid=1707173331548071249`,
    headers: {},
  };

  sms.InstallerUnableToConnect = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Hi!%20${technicianName}%20(${technicianPhoneNo})%20tried%20to%20contact%20you%20for%20your%20installation%20(Order%20ID:%20${orderId}),%20but%20couldn%E2%80%99t%20reach%20you.%20Please%20call%20back%20to%20confirm.%20The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707173331699699734`,
    headers: {},
  };

  sms.CustomerRejectInstallation = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Hi%20${customerName}!%20You%20have%20rejected%20the%20installation%20of%20your%20Order:%20${orderId}.%20Contact%20us%20if%20you%20need%20help%20or%20wish%20to%20reschedule.%20The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707173331758541452`,
    headers: {},
  };

  sms.InstallationAppointmentConfirmed = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Hi!%20Your%20appointment%20for%20installation%20(Order:%20${orderId})%20is%20confirmed%20with%20${technicianName}%20(${technicianPhoneNo}).%20Please%20be%20available%20at%20the%20time%20confirmed.%20The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707173331740049446`,
    headers: {},
  };

  sms.FutureInstallationDate = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Hi%20${customerName}!%20Your%20installation%20for%20Order%20ID:%20${orderId}%20is%20rescheduled%20to%20${futureInstallationDate}.%20Please%20be%20available%20for%20installation.%20The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707173331710867449`,
    headers: {},
  };

  // template id is missing for ReplacementBookingTechnician
  sms.ReplacementBookingTechnician = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Hi%20{#var#}!%20We%20have%20successfully%20booked%20a%20replacement%20for%20your%20Order%20ID:%20{#var#}.%20We%27ll%20schedule%20a%20new%20date%20once%20it%27s%20delivered.&entityid=1201159317126206525&templateid=`,
    headers: {},
  };
  sms.FailedCustomerReturn = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Hi%20${customerName}!%20${technicianName}%20visited%20for%20your%20installation%20of%20Order%20ID:%20${orderId},%20however%20the%20installation%20failed.%20Please%20contact%20us%20if%20needed.%20The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707173346378683386`,
    headers: {},
  };

  sms.InstallationSuccess = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Hi%20${customerName}!%20Your%20installation%20for%20Order%20ID:%20${orderId}%20is%20complete.%20Thank%20you%20for%20choosing%20us!%20The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707173346562869621`,
    headers: {},
  };

  sms.OTPTechnician = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Your%20log%20in%20OTP%20for%20TSC-Installation%20App%20is%20${loginOTP}.%20The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707173347892994720`,
    headers: {},
  };

  sms.POSOTP = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=TSC%20Custom%20Discount%20approval%20request%20Requesting%20Store%20Name%20%3A%20${storeName}%20Requesting%20Staff%20Name%20%3A%20${staffName}%20Requesting%20Staff%20ID%20%3A%20${staffId}%20Customer%20No.%20%3A%20${customerNo}%20Quotation%20No.%20%3A%20${quotationNo}%20Order%20Value%20%3A%20${orderValue}%20Promotion%20Coupon%20%3A%20${promotionalDiscountAmount}%20Campaign%20Coupon%20%3A%20${campaignDiscountAmount}%20Order%20value%20after%20discount%20%3A%20${finalDiscountedAmount}%20Requested%20Discount%20amount%20%3A%20${requestedDiscountAmount}%20Additional%20Discount%20Percent%20%3A%20${additionalDiscountPercentage}%20OTP%20%3A%20${OTP}%20-The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707174653319358347`,
    headers: {},
  };

  sms.Callback = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Hi!%20${customerName}%20(${technicianPhoneNo})%20tried%20to%20contact%20you%20for%20your%20installation%20(Order%20ID%3A${orderId})%2C%20but%20couldn%27t%20reach%20you.%20Please%20call%20back%20to%20confirm.%20The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707173409043953535`,
    headers: {},
  };

  sms.InstallationReplacementRequest = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Hi%20${customerName}%2C%20We%20have%20successfully%20booked%20a%20replacement%20request%20for%20your%20Order%20ID%3A%20${orderId}.%20We%20will%20schedule%20a%20new%20date%20once%20it%20is%20delivered.%20The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707173502364343705`,
    headers: {},
  };

  sms.ReplacementRefund = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Hi%20${customerName}%2C%20To%20process%20the%20refund%20for%20your%20order%2C%20please%20provide%20your%20account%20details%20by%20clicking%20here%3A%20${refund_link}%20The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707173625225352232`,
    headers: {},
  };

  sms.RiderAllocated = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Woohoo!%20That%20was%20super%20quick.%20Your%20order%20%23${orderId}%20is%20packed%20and%20ready%20to%20ship.%20Expect%20your%20delivery%20within%20the%20next%2048%20Hours.%20Thank%20you%20for%20shopping%20with%20The%20Sleep%20company.&entityid=1201159317126206525&templateid=1707173818011387405`,
    headers: {},
  };

  sms.PickupDone = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Order%20Shipped!%20Your%20order%20%23${orderId}%20has%20been%20shipped%20via%20our%20Express%20delivery%20service.%20It%20will%20reach%20you%20today.%20Our%20delivery%20executive%20will%20call%20you%20before%20reaching.%20The%20Sleep%20Company.&entityid=1201159317126206525&templateid=1707173818041861105`,
    headers: {},
  };

  sms.FyndDelivered = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Delivered!%20Your%20Order%20%23${orderId}%20has%20been%20delivered%20via%20our%20express%20delivery%20service.%20Thank%20you%20for%20shopping%20with%20The%20Sleep%20Company.&entityid=1201159317126206525&templateid=1707173821395373748`,
    headers: {},
  };

  sms.spinTheWheel = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Congratulations%2C%20You%20have%20won%20a%20special%20reward%20in%20our%20Spin%20the%20Wheel%20game.%20Use%20your%20exclusive%20coupon%20code%20${couponCode}%20at%20checkout%20and%20enjoy%20your%20prize.%20-%20The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707174185048760475`,
    headers: {},
  };

  sms.NameaiMattressRecommender = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Dear%20${customerName}%2C%20Thank%20you%20for%20completing%20the%20AI%20Mattress%20Recommender%20Questionnaire.%20To%20receive%20personalized%20mattress%20recommendations%20for%20your%20ideal%20sleep%20routine%2C%20please%20share%20the%20OTP%20${OTP}%20with%20the%20store%20to%20proceed%20with%20the%20assessment.%20-The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707174244961619915`,
    headers: {},
  };

  sms.bulkStnCreationPos = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Dear%20${customerName}%2C%20The%20Admin%20is%20attempting%20to%20place%20a%20bulk%20order.%20Please%20find%20the%20Bulk%20STN%20details%20at%20the%20following%20link%3A%20${url}%20Your%20OTP%20is%20${OTP}.%20If%20you%20approve%20the%20Bulk%20STN%20order%2C%20kindly%20share%20this%20OTP%20with%20the%20Admin.%20-The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707174244949965870`,
    headers: {},
  };

  sms.sensaIMattress = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Your%20unique%20code%20${couponCode}%20is%20ready.%20Enter%20it%20now%20to%20unlock%20the%20future%20of%20sleep%20and%20explore%20the%20revolutionary%20SensAI%20Mattress%20-%20The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707174236509363250`,
    headers: {},
  };

  //replacement related

  sms.returnBooked = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Hi%20${customerName}%2C%20your%20return%20is%20booked.%20A%20courier%20partner%20will%20contact%20you%20soon%20for%20pickup.%20Track%20Here%3A%20${tracklink}%20-%20The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707174169354514763`,
    headers: {},
  };

  sms.replacementBookedRP = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Hi%20${customerName}%2C%20your%20replacement%20for%20${productName}%20is%20booked%20and%20will%20be%20shipped%20after%20pickup.%20Track%20${tracklink}%20-The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707174169367906754`,
    headers: {},
  };

  sms.replacementBookedRP = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Hello%20${customerName}%2C%20Your%20Replacement%20is%20booked.%20Pickup%20by%20${courierPartner}%20on%20${pickupDate}.%20Order%3A%20${orderId}%2C%20Delivery%3A%20${edd}.%20Track%3A%20${tracklink}.%20-The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707174178081937429`,
    headers: {},
  };

  sms.partBooking = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Hello%20${customerName}%2C%20your%20part%20order%20${orderId}%20is%20booked.%20Track%20at%20${tracklink}.%20For%20queries%2C%20email%20care%40thesleepcompany.in%20-%20The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707174177261611314`,
    headers: {},
  };

  sms.employeeDiscount = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Dear%20Employee%2C%20Your%20OTP%20for%20the%20Employee%20Discount%20purchase%20is%20${OTP}%20.%20Please%20share%20it%20with%20the%20store%20to%20confirm%20your%20purchase.%20Thank%20you!%20-The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707174349914972319`,
    headers: {},
  };

  sms.deliveryCharges = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Hi%2C%20Store%20${storeName}%20is%20trying%20to%20lower%20the%20delivery%20charge%20from%20Rs15%2C000%20to%20Rs${deliveryCharge}%20.%20If%20you%20approve%2C%20please%20share%20the%20OTP%20${OTP}%20with%20the%20Store.%20Thank%20you%20-%20The%20Sleep%20Company.&entityid=1201159317126206525&templateid=1707174349897282850`,
    headers: {},
  };

  sms.AiMattressRecommendationsCustomer = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Dear%20Customer%2C%20Thank%20you%20for%20taking%20the%20AI%20Mattress%20Recommender%20Test.%20Here%20is%20a%20link%20to%20your%20personalised%20recommendations%20%3A%20${productName}%20-The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707174306630329775`,
    headers: {},
  };

  sms.CustomerTracking = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Hey%2C%20Thank%20you%20for%20your%20purchase!%20You%20can%20track%20the%20status%20of%20your%20order%20${orderId}%20using%20the%20link%20below%3A%20${tracklink}%20If%20you%20have%20any%20questions%2C%20feel%20free%20to%20reach%20out%20to%20our%20support%20team.%20-The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707174306651346747`,
    headers: {},
  };

  sms.BulkStnCreationPos = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Dear%20${customerName}%2C%20The%20Admin%20is%20attempting%20to%20place%20a%20bulk%20order.%20Please%20find%20the%20Bulk%20STN%20details%20at%20the%20following%20link%3A%20${url}.%20Your%20OTP%20is%20${OTP}.%20If%20you%20approve%20the%20Bulk%20STN%20order%2C%20kindly%20share%20this%20OTP%20with%20the%20Admin.%20-The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707174244949965870`,
    headers: {},
  };

  //Template revamp.....................

  sms.OUTFOR_DELIVERY = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Hi%20${customerName}!%20Your%20order%20${orderId}%20is%20out%20for%20delivery%20%20today.%20Items%3A%20${lineitem}%20Track%20Here%3A%20${url}%20Need%20help%3F%20care%40thesleepcompany.in%20-%20The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707174418882801945`,
    headers: {},
  };

  sms.OUTFOR_DELIVERY_INSTALLATION = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Hi%20${customerName}!%20Your%20order%20${orderId}%20is%20out%20for%20delivery.%20After%20delivery%2C%20installation%20will%20be%20done%20in%20${timespan}%20hrs.%20Need%20help%3F%20care%40thesleepcompany.in%20-The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707174418897825953`,
    headers: {},
  };

  sms.EXPRESS_OUTFOR_DELIVERY = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Hi%20${customerName}!%20Your%20order%20${orderId}%20is%20out%20for%20delivery%20via%20our%20Express%20Delivery%20team.%20Items%3A%20${lineitem}%20Track%20Here%3A%20${url}%20Need%20help%3F%20care%40thesleepcompany.in%20-%20The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707174418910915294`,
    headers: {},
  };

  sms.EXPRESS_OUTFOR_DELIVERY_INSTALLATION = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Hi%20${customerName}!%20Your%20order%20${orderId}%20is%20out%20for%20delivery%20by%20our%20Express%20Delivery%20Service.%20After%20Delivery%2C%20installation%20will%20be%20done%20in%20${timespan}%20hrs.%20Need%20help%3F%20care%40thesleepcompany.in%20-The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707174418925457254`,
    headers: {},
  };

  sms.posQuotation = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Hi%2C%20Thank%20you%20for%20visiting%20The%20Sleep%20Company%20Experience%20Store.%20Your%20product%20quotation%20worth%20${quatationAmount}%3A%20${quotationlink}%20If%20you%20have%20any%20questions%20or%20need%20help%20placing%20the%20order%2C%20feel%20free%20to%20reach%20out.%20-The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707174499194839929`,
    headers: {},
  };

  //installation comms for

  sms.installer_assigned = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Hi%20${customerName}!%20Our%20Technician%20partner%20${technicianName}%20will%20install%20your%20product%20in%20${hours}.%20You%20will%20get%20a%20call%20to%20schedule%20and%20confirm%20the%20appointment.%0AThe%20Sleep%20Company%0A&entityid=1201159317126206525&templateid=1707174584430011033`,
    headers: {},
  };

  sms.installation_appointment_confirmed = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Hi!%20Your%20appointment%20for%20installation%20(Order%3A%20${orderId}%20is%20confirmed%20with%20${technicianName}.%20Please%20be%20available%20at%20the%20time%20confirmed.-The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707174584470834399`,
    headers: {},
  };

  sms.future_installation_date = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Hi%20${customerName}!%20Your%20installation%20for%20Order%20ID%3A%20${orderId}%20is%20rescheduled%20to%${reschedule_date}%20.%20Please%20be%20available%20for%20installation.-%20The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707173331710867449`,
    headers: {},
  };

  sms.installationReplacementRequest = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Hi%20${customerName}%2C%20We%20have%20successfully%20booked%20a%20replacement%20request%20for%20your%20Order%20ID%3A%20${orderId}.%20We%20will%20schedule%20a%20new%20date%20once%20it%20is%20delivered.%20The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707173502364343705`,
    headers: {},
  };

  sms.failed_customer_return = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Hi%20${customerName}!%20${technicianName}%20visited%20for%20your%20installation%20of%20Order%20ID%3A%20${orderId}%2C%20however%20the%20installation%20failed.%20Please%20contact%20us%20if%20needed.%20The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707173346378683386`,
    headers: {},
  };

  sms.installation_success = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Hi%20${customerName}!%20Your%20installation%20for%20Order%20ID%3A%20${orderId}%20is%20complete.%20Thank%20you%20for%20choosing%20us!%20The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707173346562869621`,
    headers: {},
  };

  sms.installer_assigned = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Hi%20${customerName}!%20Our%20Technician%20partner%20%20${technicianName}%20will%20${purpose}%20your%20product%20in%20${hours}.%20You%20will%20get%20a%20call%20to%20schedule%20and%20confirm%20the%20appointment.%0AThe%20Sleep%20Company%0A&entityid=1201159317126206525&templateid=1707174584430011033`,
    headers: {},
  };

  sms.installation_appointment_confirmed = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Hi!%20Your%20appointment%20for%20${purpose}%20(Order%3A%20${orderId}%20is%20confirmed%20with%20${technicianName}.%20Please%20be%20available%20at%20the%20time%20confirmed.%20The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707174584470834399`,
    headers: {},
  };

  sms.future_installation_date = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Hi%20${customerName}!%20Your%20${purpose}%20for%20Order%20ID%3A%20${orderId}%20is%20rescheduled%20to%20${reschedule_date}.%20Please%20be%20available%20on%20the%20date.%20The%20Sleep%20Company%0A&entityid=1201159317126206525&templateid=1707174584495322071`,
    headers: {},
  };

  sms.installationReplacementRequest = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Hi%20${customerName}%2C%20We%20have%20successfully%20booked%20a%20replacement%20request%20for%20your%20Order%20ID%3A%20${orderId}.%20We%20will%20schedule%20a%20new%20date%20once%20it%20is%20delivered.%20The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707173502364343705`,
    headers: {},
  };

  sms.installation_success = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Hi%20${customerName}!%20Your%20${purpose}%20for%20Order%20ID%3A%20${orderId}%20is%20complete.%20Thank%20you%20for%20choosing%20us!%20The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707173346562869621`,
    headers: {},
  };

  sms.GOLD_GIVEAWAY = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Your%20order%20is%20placed%2C%20and%20your%20lucky%20coupon%20is%3A%20${couponCode}.%20You%20might%20just%20be%20the%20one%20to%20win%20GOLD!%20-The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707174921538082755`,
    headers: {},
  };

  //over-communications templates

  sms.order_placed_1 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Hi%20${customerName}!%20Your%20order%20${orderId}%20is%20placed.%20Track%20Here%20%3A%20${url}%20-The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707175309621552330`,
    headers: {},
  };

  sms.all_fresh_orders_2 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Your%20order%20${orderId}%20is%20confirmed.%20Track%20Here%3A%20%20%0A${url}%20-The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707175316144769862`,
    headers: {},
  };

  sms.all_fresh_orders_3_true = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Your%20order%20is%20on%20hold.%20We%20will%20update%20you%20once%20it%20moves%20forward.%20TRACK%20HERE%20${url}%20-The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707175309646031318`,
    headers: {},
  };

  sms.order_shipped_order_manifested_4 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Order%20shipped!%20We%20will%20update%20you%20when%20it%20is%20out%20for%20delivery.%20Track%20Here%3A%20${url}%20-The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707175309651641954`,
    headers: {},
  };

  sms.order_shipped_1_day_5 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Your%20order%20is%20shipped%20and%20is%20in%20transit%20with%20our%20courier%20partner.%20Sit%20back%20and%20relax%20we%20will%20update%20you%20when%20it%20is%20out%20for%20delivery%20TRACK%20HERE%20${url}%20-The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707175309675235706`,
    headers: {},
  };

  sms.awb_status_6 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Items%3A%20${productName}%20+%201%20item%20is%20Out%20for%20Delivery%20and%20will%20be%20delivered%20today.%20Courier%20Partner%20may%20call%20you%20for%20smooth%20delivery.%20Track%20Here%20${url}%20-The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707175309722400675`,
    headers: {},
  };

  sms.all_orders_7 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Your%20order%20is%20under%20production.%20We%27re%20crafting%20it%20with%20care%20to%20ensure%20it%20reaches%20you%20just%20right!%20Track%20Here%3A%20${url}%20-The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707175309738315152`,
    headers: {},
  };

  sms.all_orders_installation_t_f_and_installation_8 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Items%3A%20${productName}%20+%201%20item%20will%20be%20installed%20after%20successful%20delivery-%20We%20will%20send%20you%20installer%20details%20once%20assigned.%20Track%20Here%20${url}%20-The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707175309748626698`,
    headers: {},
  };

  sms.all_orders_failed_delivery = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Delivery%20attempt%20failed%20today.%20We%20will%20try%20again%20tomorrow.%20Items%3A%20${productName}%20Track%20Here%20${url}%20-The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707175309760628953`,
    headers: {},
  };

  sms.all_orders_delivered = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Delivered!%20Hope%20you%20enjoy%20your%20order.%20Need%20help%3F%20Click%20Here%20${url}%20-The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707175309792745312`,
    headers: {},
  };

  sms.all_orders_diy_install_flag_11 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Delivered.%20Technician%20will%20visit%20in%20${hours}%20for%20installation.%20We%20will%20Update%20you%20with%20Technician%20details.%20-The%20Sleep%20Company%0A&entityid=1201159317126206525&templateid=1707175309737683617`,
    headers: {},
  };

  sms.all_orders_max_edd_today_12 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Order%20delayed.%20We%20are%20coordinating%20with%20the%20courier%20partner%20to%20make%20sure%20your%20order%20reaches%20you%20soon.%20TRACK%20HERE%20${url}%20-The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707175309756701332`,
    headers: {},
  };

  sms.all_orders_order_not_dispatched_13 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Order%20delayed.%20We%20are%20working%20on%20your%20order%20to%20make%20sure%20reaches%20you%20soon.%20TRACK%20HERE%20${url}%20-The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707175309772725722`,
    headers: {},
  };

  sms.order_delayed_factory_14 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Due%20to%20unforeseeable%20circumstances%2C%20your%20order%20${orderId}%20is%20delayed.%20Track%20Here%20${url}%20-The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707175309807357048`,
    headers: {},
  };

  sms.all_orders_6pm_15 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Due%20to%20unforeseeable%20circumstances%2C%20your%20order%20${orderId}%20is%20delayed.%20Track%20Here%20${url}%20-The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707175309807357048`,
    headers: {},
  };

  sms.all_orders_4pm_16 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Your%20order%20${orderId}%20is%20being%20processed%20and%20will%20reach%20you%20by%20${deliveryDate}%20Track%20Here%20${url}%20-The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707175309842319839`,
    headers: {},
  };

  sms.all_order_hold_17 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Your%20order%20is%20on%20hold.%20We%27ll%20update%20you%20once%20it%20moves%20forward.%20Track%20Here%20${url}%20-The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707175309868757089`,
    headers: {},
  };

  sms.all_orders_unhold_18 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Order%20is%20now%20in%20processing%20again.%20New%20Delivery%20Date%20${deliveryDate}%20Track%20Here%20${url}%20-The%20Sleep%20Company%0A&entityid=1201159317126206525&templateid=1707175309885884933`,
    headers: {},
  };

  sms.all_requests_placed_19 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Return%2Freplacement%20request%20received.%20Our%20sleep%20expert%20will%20get%20in%20touch%20with%20you%20in%2024hrs%20to%20approve%20the%20request.%20Track%20Here%20${url}%20-The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707175309903232286`,
    headers: {},
  };

  sms.all_requests_rejected_20 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Request%20rejected%20due%20to%20${rejectReason}.%20Request%20Again%20${reRequest}%20-The%20Sleep%20Company%0A&entityid=1201159317126206525&templateid=1707175310270315159`,
    headers: {},
  };

  sms.part_order_booked_against_request_21 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Part%20order%20booked.%20Order%20ID%3A%20${orderId}%20Estimated%20Delivery%20Date%3A%20${deliveryDate}%20TRACK%20HERE%20${url}%20-The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707175309944867936`,
    headers: {},
  };

  sms.rp_booked_against_request_22 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Replacement%20booked.%20Your%20Old%20Item%20will%20be%20picked%20up%20by%20%3A%20${pickupDate}%20and%20new%20item%20will%20be%20dispatched%20after%20successful%20pickup.%20TRACK%20HERE%20${url}%20-%20The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707175310192549184`,
    headers: {},
  };

  sms.rpcx_booked_against_request_23 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Hello%20${customerName}%2C%20Your%20Replacement%20is%20booked.%20Pickup%20by%20${courierPartner}%20on%20${pickupDate}.%20Order%3A%20${orderId}%2C%20Delivery%20Date%20${deliveryDate}.%20Track%20${url}%20-%20The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707175316654438204`,
    headers: {},
  };

  sms.return_booked_24 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Your%20return%20is%20booked.%20A%20courier%20partner%20will%20contact%20you%20soon%20for%20pickup.%20Track%20Here%3A%20${url}%20-%20The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707175316671419912`,
    headers: {},
  };

  sms.all_reverse_pickups_25 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Pickup%20scheduled%20for%20today.%20Kindly%20keep%20the%20item%20ready.%20Track%20Here%20${url}%20-%20The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707175316683880949`,
    headers: {},
  };

  sms.pickup_rejected_26 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Pickup%20cancelled%20as%20requested.%20We%E2%80%99ll%20reach%20out%20to%20reschedule.%20Track%20here%3A%20${url}%20-%20The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707175316730856903`,
    headers: {},
  };

  sms.pickup_27 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Item%20picked%20up.%20Processing%20refund%2Freplacement.%20Track%20here%3A%20${url}%20-%20The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707175316730856903`,
    headers: {},
  };

  sms.delivery_cancel_Up_28 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Delivery%20cancelled%20by%20courier%20partner.%20Order%20ID%3A%20${orderId}.%20Need%20help%3F%20${url}%20-%20The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707175316769789976`,
    headers: {},
  };

  sms.Cancelled_Delivery_29 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Courier%20partner%20has%20initiated%20an%20Return%20for%20the%20order%20Order%20ID%20${orderId}%20Items%3A%20${productName}.%20Contact%20us%20if%20this%20was%20an%20error.%20care%40thesleepcompany.in%20-%20The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707175316951978523`,
    headers: {},
  };

  sms.Return_to_Origin_Initiated_30 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Replacement%20delivered.%20Thank%20you!%20For%20more%20${url}%20-%20The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707175316973788703`,
    headers: {},
  };

  sms.order_wa_1_23july25 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Return%20item%20picked%20up.%20Refund%20will%20be%20processed%20in%205-7%20working%20days.Track%20Here%20${url}&entityid=1201159317126206525&templateid=1707175334050794481`,
    headers: {},
  };

  sms.order_wa_2_23july25 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Refund%20of%20${refundAmount}%20processed.%20Check%20your%20account%20for%20the%20refund%20details%20Track%20Here%20${url}&entityid=1201159317126206525&templateid=1707175334057652047`,
    headers: {},
  };

  sms.order_wa_3_23july25 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Order%20edit.%20New%20delivery%20by%20${deliveryDate}%20Track%20Here%20${url}&entityid=1201159317126206525&templateid=1707175334062214127`,
    headers: {},
  };

  sms.order_wa_4_23july25 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Order%20which%20was%20on%20Hold%20is%20now%20being%20processed.%20%0AOrder%20ID%3A%20${orderId}%20New%20Estimated%20Delivery%20Date%3A%20${deliveryDate}%20Track%20Here%20${url}%20-%20The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707175334043325471`,
    headers: {},
  };

  sms.order_wa_5_23july25 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Order%20which%20was%20on%20Hold%20is%20now%20being%20processed.%20%0AOrder%20ID%3A%20${orderId}%20New%20Estimated%20Delivery%20Date%3A%2012%20july%20Track%20Here%20${url}&entityid=1201159317126206525&templateid=1707175334043325471`,
    headers: {},
  };

  sms.order_cancelled_30july2025 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Order%20which%20was%20on%20Hold%20is%20now%20being%20processed.%20Order%20ID%3A%${orderId}%20New%20Estimated%20Delivery%20Date%3A%20${deliveryDate}%20Track%20Here%20https%3A%2F%2Fthesleepcompany.com%20-%20The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707175334043325471`,
    headers: {},
  };

  sms.Part_order_confirmed_30july2025 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Your%20part%20order%20${orderId}%20has%20been%20booked.%20EDD%3A%20${minEdd}%20-%20${maxEdd}%20Track%20Here%20${url}&entityid=1201159317126206525&templateid=1707175334035388653`,
    headers: {},
  };

  sms.Order_cancellation_requested_30july2025 = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Your%20Cancellation%20Request%20for%20Order%3A%20${orderId}%20is%20received-%20our%20sleep%20expert%20will%20get%20in%20touch%20with%20you%20for%20next%20steps.%20Track%20Here%20${url}&entityid=1201159317126206525&templateid=1707175334150204337`,
    headers: {},
  };

  sms.order_cash_carry = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Dear%20customer%2C%20Your%20Order%20${orderId}%20was%20handed%20to%20you%20at%20The%20Sleep%20Company%20Store.%20Thank%20you.%20The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707175377418360046`,
    headers: {},
  };

  sms.order_arrived_Early = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Delivered%20Early!%20Hope%20you%20enjoy%20your%20order.%20Need%20help%3F%20${url}%20-%20The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707175387807673196`,
    headers: {},
  };

  sms.Installation_update = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Your%20order%20qualifies%20for%20TSC%20installation.%20The%20installer%20will%20visit%20${minEdd}%20%E2%80%93%20${maxEdd}%20days%20after%20delivery.%20We%27ll%20share%20installer%20details%20once%20your%20items%20arrive.%20hold..%20Track%20Here%20${url}%20-The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707175387807673196`,
    headers: {},
  };

  sms.Pickup_cancelled = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Pickup%20cancelled%20as%20requested.%20We%27ll%20reach%20out%20to%20reschedule.%20Track%20here%3A%20${url}%2F%20-%20The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707175316730856903`,
    headers: {},
  };

  sms.Replacement_picked_delivered = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Replacement%20delivered.%20Thank%20you!%20For%20more%20${url}%2FdetailedMis%20-%20The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707175316973788703`,
    headers: {},
  };


  sms.return_picked_up = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Return%20item%20picked%20up.%20Refund%20will%20be%20processed%20in%205-7%20working%20days.%20Track%20Here%20${url}%2FdetailedMis%20-%20The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707175334050794481`,
    headers: {},
  };

  sms.order_cancelled_over = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Order%20Cancelled-%20Refund%20if%20any%20will%20be%20processed%20in%205-7%20business%20days.%20Track%20Here%20${url}%20-%20The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707175334066469065`,
    headers: {},
  };

  sms.order_in_proccess = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Your%20order%20${orderId}%20is%20being%20processed%20and%20will%20reach%20you%20by%20${deliveryDate}%20Track%20Here%20${url}%20-The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707175309842319839`,
    headers: {},
  };

  sms.order_in_transit = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Sit%20back%20and%20relax.%20We%20are%20working%20with%20the%20courier%20partner%20to%20make%20sure%20it%20reaches%20you%20on%20time.%20Track%20Here%20${url}%20-The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707175309856175051`,
    headers: {},
  };

  sms.order_un_hold = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Order%20which%20was%20on%20Hold%20is%20now%20being%20processed.%20Order%20ID%3A%20${orderId}%20New%20Estimated%20Delivery%20Date%3A%20${deliveryDate}%20Track%20Here%20${url}%20-%20The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707175334043325471`,
    headers: {},
  };

  sms.order_edit = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Order%20edit.%20New%20delivery%20by%20${deliveryDate}%20Track%20Here%20${url}%20-%20The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707175334062214127`,
    headers: {},
  };

  sms.vendor_otp = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Your%20Vendor%27s%20Bay%20login%20OTP%20is%20${OTP}.%20Please%20do%20not%20share%20this%20code%20with%20anyone.%20-%20The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707175749659713135`,
    headers: {},
  };

  sms.pos_100_nights = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Dear%20Customer%2C%20You%20requested%20to%20opt%20out%20of%20100-night%20trial%20for%20your%20products.%20Share%20OTP%20${OTP}%20with%20the%20store.%20Please%20Note%3A%20No%20returns%20after%20opting%20out.%20-The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707175923520739606`,
    headers: {},
  };

  sms.return_cancelled = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Your%20Return%20for%20Order%20${orderId}%20has%20been%20cancelled.%20Reason%3A%20${rejectReason}%20Item%3A%20${productName}%20You%20can%20raise%20a%20new%20request%20within%20your%20return%2Freplacement%20window.%20Track%20here%3A%20${url}%20-The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707175923529273699`,
    headers: {},
  };

  sms.replacement_cancelled = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Your%20Replacement%20for%20Order%20${orderId}%20has%20been%20cancelled.%20Reason%3A%20${rejectReason}%20Item%3A%20${productName}%20Replacement%20Order%20ID%3A%20${replacement_orderId}%20Replacement%20Item%3A%20${replacement_productName}%20You%20can%20raise%20a%20new%20request%20within%20your%20return%2Freplacement%20window.%20Track%20here%3A%20${url}%20-The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707175923539511315`,
    headers: {},
  };

  sms.lucky_draw = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Thank%20you%20for%20shopping%20with%20us!%20Your%20purchase%20is%20confirmed%20with%20order%20ID%20${orderId}%20Token%20number%3A%20${token}%20Keep%20it%20safe%20for%20future%20updates.%20-%20The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707176181983396393`,
    headers: {},
  };

  sms.RP_Booked_Furniture_packaging = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Replacement%20${orderId}%20placed.%20Packaging_EDD%20${packagingEdd}%20Dismantling_EDD%20${dismantlingEdd}%20Pickup_EDD%20${pickupEdd}%20Pickup%20may%20shift%20if%20earlier%20steps%20delay.%20Track%20${url}%3A%20-The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707176302974427592`,
    headers: {},
  };

  sms.RP_Booked_Furniture = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Replacement%20${orderId}%20placed.%20Dismantling_EDD%20${dismantlingEdd}%20Pickup_EDD%20${pickupEdd}%20Pickup%20may%20shift%20if%20dismantling%20is%20delayed.%20Track%3A%20${url}%20-The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707176311390053638`,
    headers: {},
  };

  sms.RPCX_Packaging = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Replacement%20${orderId}%20placed.%20Packaging_EDD%20${packagingEdd}%2C%20Dismantling_EDD%20${dismantlingEdd}%2C%20Pickup_EDD%20${pickupEdd}%20Track%3A%20${url}%3A%20-The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707176311568129215`,
    headers: {},
  };

  sms.RPCX_Dismantling_only = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Replacement%20${orderId}%20placed.%20Dismantling_EDD%20${dismantlingEdd}%2C%20Pickup_EDD%20${pickupEdd}%20Track%3A%20${url}%3A%20-The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707176311729786719`,
    headers: {},
  };

  sms.Return_Packaging = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Return%20${orderId}%20booked.%20Packaging_EDD%20${packagingEdd}%2C%20Dismantling_EDD%20${dismantlingEdd}%2C%20Pickup_EDD%20${pickupEdd}.%20Refund%20after%20pickup.%20Track%3A%20${url}%3A%20-The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707176311755120960`,
    headers: {},
  };

  sms.Packaging_Booked = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=%20Packaging%20booked.%20Order%20ID%3A%20${orderId}%20EDD%3A%20${edd}.%20Technician%20will%20visit%20post%20delivery.%20Track%20in%20My%20Orders.%20-The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707176303527693420`,
    headers: {},
  };

  sms.Packaging_Delivered = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Packaging%20delivered.%20Technician%20visit%20will%20be%20scheduled%20in%20${hours}%20hrs.%20-%20The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707176311302806141`,
    headers: {},
  };

  sms.Dismantling_Scheduled = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Dismantling%20scheduled%20for%20${edd}%20-%20The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707176336214523618`,
    headers: {},
  };

  sms.Dismantling_Completed_Pickup = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Pickup%20arranged.%20Partner%3A%20${deliveryPartner}%20Date%3A%20${edd}%20Item%3A%20${productName}%20Track%20in%20My%20Orders.%20${url}%20-%20The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707176396488796878`,
    headers: {},
  };

  sms.order_placed_link_tracking = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Hi%20${customerName}%20Your%20order%20${orderId}%20is%20placed.%20Track%20Here%20%3A%20${trackUrl}%20-The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707176786723799795`,
    headers: {},
  };

  sms.website_otp_capture = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Your%20Login%20OTP%3A%20${loginOTP}%20This%20code%20is%20valid%20for%2010%20minutes.%20Do%20not%20share%20it%20with%20anyone%20-%20The%20Sleep%20Company%20%40thesleepcompany.in%20%23${loginOTP}&entityid=1201159317126206525&templateid=1707176838530346968`,
    headers: {},
  };

  sms.future_delivery_confirmation = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Hi%20${customerName}%2C%20As%20per%20your%20request%2C%20your%20delivery%20has%20been%20scheduled%20for%20${deliveryDate}.%20Please%20share%20this%20OTP%20${OTP}%20with%20our%20executive%20to%20confirm%20the%20reschedule.%20OTP%20is%20valid%20for%2010%20minutes.%20Thank%20you%20for%20your%20cooperation.%20-%20The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707176856243612855`,
    headers: {},
  };

  sms.future_delivery_comfirmation_otp_new = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=Your%20OTP%20to%20confirm%20delivery%20on%20${deliveryDate}%20is%20${OTP}.%20Valid%20for%2010%20minutes.%20Please%20share%20it%20with%20our%20executive.%20-%20The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707176856334729334`,
    headers: {},
  };

  sms.future_delivery_comfirmation_resend = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=As%20requested%2C%20here%20is%20your%20new%20OTP%20${OTP}%20to%20confirm%20your%20reschedule%20on%20${deliveryDate}.%20OTP%20is%20valid%20for%2010%20minutes.%20-%20The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707176856352603516`,
    headers: {},
  };

  sms.customer_approval = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://api.vialogue.in/pushapi/sendbulkmsg?username=TSC_Trans&dest=${phoneNumber}&apikey=H5Bg3PPNV3XUViqtSpH6swjkSJIXEh0t&signature=TSLEEP&msgtype=PM&msgtxt=OTP%20to%20confirm%20The%20Sleep%20Company%20product%20installation%20on%20${reschedule_date}%20is%20${OTP}.%20Valid%20for%2010%20minutes.%20Please%20share%20it%20with%20our%20executive.%20-%20The%20Sleep%20Company&entityid=1201159317126206525&templateid=1707176889052843831`,
    headers: {},
  };

  return sms[templateName];
};
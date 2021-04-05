export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  DateTime: any;
  /** Long type */
  Long: any;
  Map: any;
  /** Year and month value in format 'yyyy-MM' */
  YearMonth: any;
};


export type AbTestGql = {
  __typename?: 'AbTestGQL';
  name: Scalars['String'];
  value: Scalars['String'];
  mixpanelProp: Scalars['String'];
  enabled: Scalars['Boolean'];
};

export type AddAddressInput = {
  shipping?: Maybe<AddressInput>;
};

export type AddQueueItemInput = {
  /** user forced to add LEP products */
  force?: Maybe<Scalars['Boolean']>;
  /** product id. Either item or items should present. */
  item?: Maybe<Scalars['Long']>;
  /** list of product ids. If any fails, others will be still added. Either item or items should present. */
  items?: Maybe<Array<Maybe<Scalars['Long']>>>;
  /** Where to add new item: as first item of queue or to the end of the queue */
  position?: Maybe<AddQueueItemPosition>;
  /** analitycs metadata */
  metadata?: Maybe<UserActionMetadata>;
};

export type AddQueueItemPosition = 
  | 'FIRST'
  | 'LAST';

export type AddToQueueResponseGql = IGenericResponseGql & {
  __typename?: 'AddToQueueResponseGQL';
  /** Get queue with custom plan name (eg MONTHLY_2PCS). By default subscription plan if any. */
  queue?: Maybe<Queue>;
  /** Amount of products added to queue successfully */
  productsAdded?: Maybe<Scalars['Int']>;
  errors?: Maybe<Array<Maybe<DisplayableGqlError>>>;
  result: Scalars['Boolean'];
};


export type AddToQueueResponseGqlQueueArgs = {
  plan?: Maybe<Scalars['String']>;
};

export type AddressFieldErrorGql = {
  __typename?: 'AddressFieldErrorGQL';
  /** field which is incorrect */
  fieldType: AddressFieldType;
  message: Scalars['String'];
};

export type AddressFieldType = 
  | 'firstName'
  | 'lastName'
  | 'street'
  | 'apt'
  | 'zipCode'
  | 'state'
  | 'city'
  | 'telephone'
  | 'country'
  | 'main';

export type AddressGql = {
  __typename?: 'AddressGQL';
  id?: Maybe<Scalars['Long']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  apt?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  telephone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  validatedBy?: Maybe<Scalars['String']>;
  primary?: Maybe<Scalars['Boolean']>;
};

export type AddressInput = {
  id?: Maybe<Scalars['Long']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  street?: Maybe<Scalars['String']>;
  apt?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  telephone?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  primary?: Maybe<Scalars['Boolean']>;
};

/** Autocomplete address suggestion */
export type AddressSuggestion = {
  __typename?: 'AddressSuggestion';
  /** Place id for details extraction */
  placeId: Scalars['String'];
  /** Structured description first line, eg `888 Tennessee Street` */
  mainText: Scalars['String'];
  /** Structured description second line, eg `San Francisco, CA, USA` */
  secondaryText: Scalars['String'];
};

export type AgeCategory = 
  | 'LE17'
  | 'FROM18TO24'
  | 'FROM25TO34'
  | 'FROM35TO44'
  | 'FROM45TO54'
  | 'FROM55TO64'
  | 'FROM65';

export type AmazonUserProfileResponseGql = IGenericResponseGql & {
  __typename?: 'AmazonUserProfileResponseGQL';
  shippingAddress?: Maybe<AddressGql>;
  /** list of errors */
  errors?: Maybe<Array<Maybe<DisplayableGqlError>>>;
  /** result indicator */
  result: Scalars['Boolean'];
};

export type AnalyticsUidGql = {
  /** Mixpanel user id */
  mixpanelClientUid?: Maybe<Scalars['String']>;
};

export type AppType = 
  | 'Web'
  | 'Mobile';

export type AppleSigninInput = {
  /** A single-use authentication code that is valid for five minutes. */
  code: Scalars['String'];
  /** A JSON web token containing the user’s identify information. */
  idToken: Scalars['String'];
  /** Only for web */
  token?: Maybe<Scalars['String']>;
  /** The state passed by the init function. */
  state: Scalars['String'];
  error?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  /** Only for web */
  mixpanelClientId?: Maybe<Scalars['String']>;
  /** Optional user ids in analytic systems, eg Mixpanel, GA */
  analytics?: Maybe<AnalyticsUidGql>;
};

export type AppleSigninResponseGql = IGenericResponseGql & {
  __typename?: 'AppleSigninResponseGQL';
  /** user hashed email */
  hashedEmail?: Maybe<Scalars['String']>;
  /** indicator to show if email is real or generated */
  realEmail?: Maybe<Scalars['Boolean']>;
  /** token for reauthentication */
  apiToken?: Maybe<Scalars['String']>;
  /** internal token for reauthentication */
  token?: Maybe<Scalars['String']>;
  internalAppleUserId?: Maybe<Scalars['Long']>;
  /** Fetches user data */
  user?: Maybe<UserGql>;
  /** list of errors */
  errors?: Maybe<Array<Maybe<DisplayableGqlError>>>;
  /** result indicator */
  result: Scalars['Boolean'];
};

export type AutocompleteAddressDetailsInput = {
  /** place id for taking details */
  placeId: Scalars['String'];
};

export type AutocompleteAddressDetailsResponse = IGenericResponseGql & {
  __typename?: 'AutocompleteAddressDetailsResponse';
  address?: Maybe<AddressGql>;
  errors?: Maybe<Array<Maybe<DisplayableGqlError>>>;
  result: Scalars['Boolean'];
};

export type AutocompleteAddressResponse = IGenericResponseGql & {
  __typename?: 'AutocompleteAddressResponse';
  suggestions?: Maybe<Array<Maybe<AddressSuggestion>>>;
  errors?: Maybe<Array<Maybe<DisplayableGqlError>>>;
  result: Scalars['Boolean'];
};

export type BannerGql = {
  __typename?: 'BannerGQL';
  id: Scalars['Long'];
  dateCreated: Scalars['DateTime'];
  lastUpdated: Scalars['DateTime'];
  name: Scalars['String'];
  mixpanelName: Scalars['String'];
  alt?: Maybe<Scalars['String']>;
  url: Scalars['String'];
  gender: UserGenderGql;
  mobile: Scalars['Boolean'];
  active: Scalars['Boolean'];
  position: Scalars['Int'];
  desktopImg: Scalars['String'];
  tabletLandscapeImg: Scalars['String'];
  tabletPortraitImg: Scalars['String'];
  mobileImg: Scalars['String'];
};

export type BannersInput = {
  /** mobile banner */
  mobile?: Maybe<Scalars['Boolean']>;
  /** user gender */
  gender: UserGenderGql;
};

/** Landing block: promo banners */
export type BannersMobileLandingBlock = IMobileLandingBlock & {
  __typename?: 'BannersMobileLandingBlock';
  /** Catalog item id or block type if default structure */
  id: Scalars['String'];
  /** Block type. Please note, that values of this type will be extended in future. */
  block: MobileLandingBlocksType;
  /** list of banners */
  banners?: Maybe<Array<Maybe<MobileBannerItem>>>;
};

export type BeginNewPaymentInput = {
  /** Type of payment */
  paymentType: PaymentType;
  /** ZIP code for billing. Either billingZipCode or user account billing address should be filled. */
  billingZipCode?: Maybe<Scalars['String']>;
  /** Enable auto resubscribe if possible */
  needResubscribe?: Maybe<Scalars['Boolean']>;
  /** Free case for resubscribe */
  freeCase?: Maybe<Scalars['Boolean']>;
  /** Promocode for resubscribe */
  resubscribeCode?: Maybe<Scalars['String']>;
  /** Placement */
  placement?: Maybe<Scalars['String']>;
};

export type BeginNewPaymentResponseGql = IGenericResponseGql & {
  __typename?: 'BeginNewPaymentResponseGQL';
  /** id of session for following commit operation */
  newPaymentSession?: Maybe<Scalars['Long']>;
  /** gateway session id (if card then posting user payment data to VWS Vindicia) */
  gatewaySessionId?: Maybe<Scalars['String']>;
  /** gateway arguments draft (if card then for posting user payment data to VWS Vindicia) */
  gatewayArguments?: Maybe<Array<Maybe<PairGql>>>;
  /** token for PayPall submit */
  payPalToken?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Maybe<DisplayableGqlError>>>;
  result: Scalars['Boolean'];
};

export type BeginRestorePasswordInput = {
  /** email for password recovery */
  email: Scalars['String'];
};

export type BeginSubscriptionInput = {
  /** Plan name */
  plan?: Maybe<Scalars['String']>;
  /** Vindician plan name */
  planName?: Maybe<Scalars['String']>;
  /** Offer code */
  offer?: Maybe<Scalars['String']>;
  /** Discount coupon(deprecated) */
  coupon?: Maybe<Scalars['String']>;
  /** Coupon type (eg order, ecommerce). Should be passed with couponCode */
  couponType?: Maybe<CouponType>;
  /** discount coupone code */
  couponCode?: Maybe<Scalars['String']>;
  /** Used for disable validate lower coupon apply when higher coupon already applied. Should be passed with couponCode, default:false */
  forceLowerCouponValue?: Maybe<Scalars['Boolean']>;
  /** Is referral coupon */
  referralCoupon?: Maybe<Scalars['Boolean']>;
  /** Type of payment */
  paymentType?: Maybe<PaymentType>;
  /** Apple pay validation URL */
  applePayValidationURL?: Maybe<Scalars['String']>;
  /** Proceed with prepaid card */
  proceedWithPrepaidCard?: Maybe<Scalars['Boolean']>;
  /** If user does not wanna use credits on an account */
  ignoreCredits?: Maybe<Scalars['Boolean']>;
  /** If subscription to case is included on subscription flow */
  subscriptionCase?: Maybe<Scalars['Boolean']>;
  /** Shipping address */
  shipping?: Maybe<AddressInput>;
  /** Shipping address */
  billing?: Maybe<AddressInput>;
  /** products selected on pick page */
  pickedProducts?: Maybe<Array<Maybe<Scalars['Long']>>>;
  /** Amazon Billing Agreement */
  amazonPayBillingAgreementId?: Maybe<Scalars['String']>;
};

export type BeginSubscriptionResponseGql = IGenericResponseGql & {
  __typename?: 'BeginSubscriptionResponseGQL';
  /** id of session for following commit and progress operations */
  subscriptionSession?: Maybe<Scalars['Long']>;
  /** has ecommerce order with subscription order */
  withCart?: Maybe<Scalars['Boolean']>;
  /** token to activate PayPal */
  paypalToken?: Maybe<Scalars['String']>;
  /** session data to activate Apple Pay */
  applePaySession?: Maybe<Scalars['Map']>;
  /**
   * is perchase session is successfull
   * only success sessions will be finished, other (failed) sessions will not finished and will have errorCode from payment gateway    subscriptionSessionFinished: Boolean
   */
  subscriptionSessionFinished?: Maybe<Scalars['Boolean']>;
  /** gateway session id (if card then posting user payment data to VWS Vindicia) */
  gatewaySessionId?: Maybe<Scalars['String']>;
  /** gateway arguments draft (if card then for posting user payment data to VWS Vindicia) */
  gatewayArguments?: Maybe<Array<Maybe<PairGql>>>;
  /** deprecated */
  token?: Maybe<Scalars['String']>;
  /**
   * payment gateway auth code
   * authCode - 3DS authentication result codes - the reason code returned by the payment processor when this Transaction object is authorized, captured, or cancelled.
   */
  authCode?: Maybe<Scalars['String']>;
  /**
   * payment gateway AVS code
   * AVS response codes and advanced AVS response codes - the AVS code returned by the payment processor when authorizing this Transaction object for onetime and migrated transactions.
   */
  avsCode?: Maybe<Scalars['String']>;
  /**
   * payment gateway CVN code
   * card validation response codes (CVV2/CVC2/CID) - the response sent by the payment processor for verification of the security code (number on the front or back of a credit card) for onetime and migrated transactions
   */
  cvnCode?: Maybe<Scalars['String']>;
  /** user message title */
  title?: Maybe<Scalars['String']>;
  /** user message text, eg 'Your card's security code (CVV/CVC) is incorrect. Please, enter another security code.' */
  message?: Maybe<Scalars['String']>;
  /** true if check by CVN code is failed */
  isCvvError?: Maybe<Scalars['Boolean']>;
  /** list of errors */
  errors?: Maybe<Array<Maybe<DisplayableGqlError>>>;
  /** true if successful */
  result: Scalars['Boolean'];
};

/** Scentbird blog post */
export type BlogPost = {
  __typename?: 'BlogPost';
  /** internal id of post */
  id: Scalars['Long'];
  /** wordpress id of post */
  wordPressId: Scalars['Long'];
  /** date of posting */
  wordPressDateCreated: Scalars['DateTime'];
  /** blog title text */
  title: Scalars['String'];
  /** blog description text */
  description: Scalars['String'];
  /** link to original cover picture */
  pictureUrl: Scalars['String'];
  /** link to post */
  postUrl: Scalars['String'];
};

/** Blog posts filter */
export type BlogPostsInput = {
  /** find exact post by id */
  id?: Maybe<Scalars['Long']>;
  /** filter by user gender, default null */
  gender?: Maybe<UserGenderGql>;
  /** pagination limit, default 40 */
  limit?: Maybe<Scalars['Int']>;
  /** pagination offset, default 0 */
  offset?: Maybe<Scalars['Int']>;
};

/** Landing block: blog posts */
export type BlogPostsMobileLandingBlock = IMobileLandingBlock & {
  __typename?: 'BlogPostsMobileLandingBlock';
  /** Catalog item id or block type if default structure */
  id: Scalars['String'];
  /** Block type. Please note, that values of this type will be extended in future. */
  block: MobileLandingBlocksType;
  /** list of blog posts */
  blogPosts?: Maybe<Array<Maybe<BlogPost>>>;
};

export type BlogPostsResponse = IGenericResponseGql & {
  __typename?: 'BlogPostsResponse';
  /** list of blog posts */
  blogPosts: Array<BlogPost>;
  /** list of errors */
  errors?: Maybe<Array<Maybe<DisplayableGqlError>>>;
  /** result indicator */
  result: Scalars['Boolean'];
};

export type BloggerRequestInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  bloglink?: Maybe<Scalars['String']>;
  readers?: Maybe<Scalars['Long']>;
  vloglink?: Maybe<Scalars['String']>;
  subscribers?: Maybe<Scalars['Long']>;
  facebook?: Maybe<Scalars['String']>;
  twitter?: Maybe<Scalars['String']>;
  pinterest?: Maybe<Scalars['String']>;
  instagram?: Maybe<Scalars['String']>;
  comments?: Maybe<Scalars['String']>;
};

export type BloggerRequestResponseGql = IGenericResponseGql & {
  __typename?: 'BloggerRequestResponseGQL';
  errors?: Maybe<Array<Maybe<DisplayableGqlError>>>;
  result: Scalars['Boolean'];
};

export type Brand = {
  __typename?: 'Brand';
  id?: Maybe<Scalars['Long']>;
  slug?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  logo?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
  count?: Maybe<Scalars['Long']>;
  media?: Maybe<Array<BrandMedia>>;
  products: Array<Product>;
};

export type BrandAndTitles = {
  __typename?: 'BrandAndTitles';
  brand?: Maybe<Scalars['String']>;
  logo?: Maybe<Scalars['String']>;
  titles?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type BrandMedia = {
  __typename?: 'BrandMedia';
  type: Scalars['String'];
  desktop: Scalars['String'];
  mobile?: Maybe<Scalars['String']>;
  tabletLandscape?: Maybe<Scalars['String']>;
  tabletPortrait?: Maybe<Scalars['String']>;
};

export type BrandsInput = {
  /** Product category. Default value is `default_category`. */
  category?: Maybe<ProductCategoryTypeGql>;
  /** User gender ender type. */
  gender?: Maybe<UserGenderGql>;
  /** note slug */
  noteSlug?: Maybe<Scalars['String']>;
  /** List of product groups. Default value is [Perfume] */
  groups?: Maybe<Array<Maybe<ProductGroup>>>;
  /** Product type */
  types?: Maybe<Array<Maybe<ProductInfoType>>>;
  /** Filter products for subscription queue. This products has available subscription trading items and not Out of Stock for LEP. */
  availableForQueue?: Maybe<Scalars['Boolean']>;
  /** If true - do not shows brands with no products by given criteria. False by default */
  hideEmptyBrands?: Maybe<Scalars['Boolean']>;
  /** If true - hide Upcharge products. False by default */
  hideUpchargeProducts?: Maybe<Scalars['Boolean']>;
  /** Do not show all LEP products. */
  hideLimitedEdition?: Maybe<Scalars['Boolean']>;
};

export type BuySubscriptionOneClickInput = {
  /** Plan name */
  plan?: Maybe<Scalars['String']>;
  /** Vindician plan name */
  planName?: Maybe<Scalars['String']>;
  /** Offer code */
  offer?: Maybe<Scalars['String']>;
  /** Used for disable validate lower coupon apply when higher coupon already applied. Should be passed with couponCode, default:false */
  forceLowerCouponValue?: Maybe<Scalars['Boolean']>;
  /** Coupon type (eg order, ecommerce). Should be passed with couponCode */
  couponType?: Maybe<CouponType>;
  /** Discount coupon(deprecated) */
  coupon?: Maybe<Scalars['String']>;
  /** discount coupone code */
  couponCode?: Maybe<Scalars['String']>;
  /** Is referral coupon */
  referralCoupon?: Maybe<Scalars['Boolean']>;
  /** Proceed with prepaid card */
  proceedWithPrepaidCard?: Maybe<Scalars['Boolean']>;
  /** If user does not wanna use credits on an account */
  ignoreCredits?: Maybe<Scalars['Boolean']>;
  /** If subscription to case is included on subscription flow */
  subscriptionCase?: Maybe<Scalars['Boolean']>;
  /** products selected on pick page */
  pickedProducts?: Maybe<Array<Maybe<Scalars['Long']>>>;
  /** extra data for one click: payment method, shipping address */
  oneClickSubscriptionInput: OneClickSubscriptionInput;
};

export type CandleDropdownMenuGql = {
  __typename?: 'CandleDropdownMenuGQL';
  products?: Maybe<Array<Maybe<Product>>>;
  bestseller?: Maybe<Product>;
  favorite?: Maybe<Product>;
};

/** Landing block: products in cards */
export type CardsProductsMobileLandingBlock = IMobileLandingBlock & {
  __typename?: 'CardsProductsMobileLandingBlock';
  /** Catalog item id or block type if default structure */
  id: Scalars['String'];
  /** Block type. Please note, that values of this type will be extended in future. */
  block: MobileLandingBlocksType;
  /** item title */
  title: Scalars['String'];
  /** list of products */
  cards?: Maybe<Array<Maybe<Product>>>;
  /** name of recommender algorithm for analytics */
  recommenderName?: Maybe<Scalars['String']>;
};

export type CartContentGql = {
  __typename?: 'CartContentGQL';
  subscription?: Maybe<CartSubscriptionGql>;
  products: Array<CartProductGql>;
};

export type CartGql = {
  __typename?: 'CartGQL';
  id: Scalars['Long'];
  items: CartContentGql;
  price: Scalars['Long'];
  discount: Scalars['Long'];
  shipping: Scalars['Long'];
  appliedPriceRules?: Maybe<Array<Maybe<PriceRuleGql>>>;
};

/** Landing block: cart products call to action */
export type CartMobileLandingBlock = IMobileLandingBlock & {
  __typename?: 'CartMobileLandingBlock';
  /** Catalog item id or block type if default structure */
  id: Scalars['String'];
  /** Block type. Please note, that values of this type will be extended in future. */
  block: MobileLandingBlocksType;
};

export type CartPriceGql = {
  __typename?: 'CartPriceGQL';
  price?: Maybe<Scalars['Long']>;
  priceWithCredits?: Maybe<Scalars['Long']>;
  subtotal?: Maybe<Scalars['Long']>;
  discount?: Maybe<Scalars['Long']>;
  tax?: Maybe<Scalars['Long']>;
  shipping?: Maybe<Scalars['Long']>;
  credits?: Maybe<Scalars['Long']>;
  appliedPriceRules?: Maybe<Scalars['Map']>;
  ecommerceCredits?: Maybe<Scalars['String']>;
};

export type CartProductGql = {
  __typename?: 'CartProductGQL';
  id: Scalars['Long'];
  amount: Scalars['Int'];
  brand?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  volume?: Maybe<Scalars['String']>;
  volumeUnit?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  offer?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  price: Scalars['Int'];
  needDiscountOffer: Scalars['Boolean'];
  discount: Scalars['Int'];
  totalPrice: Scalars['Int'];
  totalPriceWithDiscount: Scalars['Int'];
};

export type CartSubscriptionGql = {
  __typename?: 'CartSubscriptionGQL';
  amount: Scalars['Int'];
  name: Scalars['String'];
  size: Scalars['Float'];
  volume: Scalars['Float'];
  volumeUnit: Scalars['String'];
  volumeNotes: Scalars['String'];
  price: Scalars['Int'];
};

export type CatalogueAnalyticsGql = {
  __typename?: 'CatalogueAnalyticsGQL';
  page?: Maybe<Scalars['String']>;
  placement?: Maybe<Scalars['String']>;
};

export type CatalogueGql = {
  __typename?: 'CatalogueGQL';
  /** catalogue item id */
  id: Scalars['Long'];
  /** name of catalogue item, not shown on UI */
  name: Scalars['String'];
  /** description of catalogue item, not shown on UI */
  description?: Maybe<Scalars['String']>;
  /** photo image for catalogue view */
  image?: Maybe<Scalars['String']>;
  /** icon (line art) image for catalogue view */
  icon?: Maybe<Scalars['String']>;
  /** link to catalogue view for web, eg /skincare-men/wellness/womens-health */
  url?: Maybe<Scalars['String']>;
  /** title of catalogue item */
  pageTitle?: Maybe<Scalars['String']>;
  /** simple or grouped products on web catalogue view */
  groupedProducts: Scalars['Boolean'];
  /** web catalogue view layout [Products, Leaves] */
  layout: Scalars['String'];
  /** SEO for web catalogue view */
  seo?: Maybe<CatalogueSeoGql>;
  /** placement info for analytics */
  analytics?: Maybe<CatalogueAnalyticsGql>;
  /** template of products filter request */
  productsQuery?: Maybe<CatalogueProductFilterGql>;
  /** how products can be searched by user, eg by brand, rating, etc */
  availableFilters?: Maybe<Array<Maybe<Filter>>>;
  /** how products can be sorted by user */
  availableSorts?: Maybe<Array<Maybe<ProductSort>>>;
  /** in-place filtered products */
  products: Array<Product>;
  /** leaves catalogue items with VISIBLE status and EXTRA_LEAVES status if extra is true */
  leaves: Array<CatalogueGql>;
  /** children catalogue items */
  children: Array<CatalogueGql>;
};


export type CatalogueGqlAvailableFiltersArgs = {
  input?: Maybe<FiltersInputGql>;
};


export type CatalogueGqlProductsArgs = {
  types?: Maybe<Array<Maybe<Scalars['String']>>>;
  brands?: Maybe<Array<Maybe<Scalars['String']>>>;
  category?: Maybe<Scalars['String']>;
  notes?: Maybe<Array<Maybe<Scalars['String']>>>;
  rating?: Maybe<Scalars['Float']>;
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Long']>;
  offset?: Maybe<Scalars['Long']>;
  filters?: Maybe<Array<Maybe<FilterInputGql>>>;
  sorts?: Maybe<Array<Maybe<Scalars['String']>>>;
  availableForQueue?: Maybe<Scalars['Boolean']>;
  hideUpchargeProducts?: Maybe<Scalars['Boolean']>;
  hideLimitedEdition?: Maybe<Scalars['Boolean']>;
};


export type CatalogueGqlLeavesArgs = {
  extra?: Maybe<Scalars['Boolean']>;
};

/** Landing block: quick access to catalog category */
export type CatalogueMobileLandingBlock = IMobileLandingBlock & {
  __typename?: 'CatalogueMobileLandingBlock';
  /** Catalog item id or block type if default structure */
  id: Scalars['String'];
  /** Block type. Please note, that values of this type will be extended in future. */
  block: MobileLandingBlocksType;
  /** app root catalog */
  catalogue?: Maybe<CatalogueGql>;
};

export type CatalogueProductFilterGql = {
  __typename?: 'CatalogueProductFilterGQL';
  groups?: Maybe<Array<Scalars['String']>>;
  types?: Maybe<Array<Scalars['String']>>;
  gender?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  productsFeed?: Maybe<Scalars['String']>;
};

export type CatalogueSeoGql = {
  __typename?: 'CatalogueSeoGQL';
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ChangeFrequencyFeedbackInput = {
  reason: Scalars['String'];
  comment?: Maybe<Scalars['String']>;
};

export type ChangePasswordInput = {
  oldPassword: Scalars['String'];
  newPassword: Scalars['String'];
};

export type ChangePaymentInput = {
  /** Payment method id. Not primary. */
  id: Scalars['String'];
  /** Analytics metadata */
  metadata?: Maybe<UserActionMetadata>;
};

export type ChargeGql = {
  __typename?: 'ChargeGQL';
  id: Scalars['Long'];
  chargeAmount?: Maybe<Scalars['Int']>;
  upchargeAmount?: Maybe<Scalars['Int']>;
  createdDate: Scalars['DateTime'];
  paymentDate: Scalars['DateTime'];
};

export type CollectionGql = {
  __typename?: 'CollectionGQL';
  id: Scalars['Long'];
  title: Scalars['String'];
  description: Scalars['String'];
  collectionType?: Maybe<Scalars['String']>;
  gender: Scalars['String'];
  appearance: Scalars['String'];
  url: Scalars['String'];
  status: Scalars['String'];
  products: Array<Product>;
  image?: Maybe<Scalars['String']>;
  imgDesktop?: Maybe<Scalars['String']>;
  imgMobile?: Maybe<Scalars['String']>;
  howItWorks?: Maybe<Scalars['String']>;
  footer?: Maybe<Scalars['String']>;
  video?: Maybe<Scalars['String']>;
  gallery?: Maybe<Array<Maybe<Scalars['String']>>>;
  buttonTitle?: Maybe<Scalars['String']>;
  group?: Maybe<CollectionGroup>;
  productSource?: Maybe<ProductSource>;
};

export type CollectionGroup = 
  | 'CAPSULE'
  | 'CURATED';

/** Landing block: fragrance playlists */
export type CollectionsMobileLandingBlock = IMobileLandingBlock & {
  __typename?: 'CollectionsMobileLandingBlock';
  /** Catalog item id or block type if default structure */
  id: Scalars['String'];
  /** Block type. Please note, that values of this type will be extended in future. */
  block: MobileLandingBlocksType;
  /** list of products */
  collections?: Maybe<Array<Maybe<CollectionGql>>>;
};

export type CommitNewPaymentInput = {
  /** Session id from begin operation */
  newPaymentSession?: Maybe<Scalars['Long']>;
  /** Action metadata */
  metadata?: Maybe<UserActionMetadata>;
};

export type CommitSubscriptionInput = {
  /** subscription session */
  subscriptionSession?: Maybe<Scalars['Long']>;
  /** PayPal token */
  paypalToken?: Maybe<Scalars['String']>;
  /** PayPal session */
  paypalSessionId?: Maybe<Scalars['String']>;
  /** ApplePay JS API PKPaymentToken */
  applePayPaymentToken?: Maybe<Scalars['Map']>;
  /** If user do not wanna use credits on an account */
  ignoreCredits?: Maybe<Scalars['Boolean']>;
  /** Shipping address */
  shipping?: Maybe<AddressInput>;
  /** Shipping address */
  billing?: Maybe<AddressInput>;
};

export type CommitSubscriptionResponseGql = IGenericResponseGql & {
  __typename?: 'CommitSubscriptionResponseGQL';
  /** has ecommerce order with subscription order */
  withCart?: Maybe<Scalars['Boolean']>;
  /** number of subscription order */
  subscriptionOrderNo?: Maybe<Scalars['String']>;
  /** id of subscription */
  subscription?: Maybe<Scalars['Long']>;
  /** status of subscription session [NEW, IN_PROGRESS, FAILED, SUCCESS] */
  status?: Maybe<Scalars['String']>;
  /** id of subscription order */
  subscriptionOrder?: Maybe<Scalars['Long']>;
  /**
   * is perchase session is successfull
   * only success sessions will be finished, other (failed) sessions will not finished and will have errorCode from payment gateway
   */
  subscriptionSessionFinished?: Maybe<Scalars['Boolean']>;
  /** amount of charge for subscription, same as totalAmount */
  orderAmount?: Maybe<Scalars['Long']>;
  /** amount of charge for subscription, same as orderAmount */
  totalAmount?: Maybe<Scalars['Long']>;
  /** date of next payment for subscription */
  nextBillingDate?: Maybe<Scalars['String']>;
  /** total amount of credits */
  balance?: Maybe<Scalars['Long']>;
  /** credits details (total, onBalance, paid, free, free_for_referral, free_for_referee, free_coupon, free_gift) */
  credits?: Maybe<Scalars['Map']>;
  /** number of ecommerce order */
  ecommerceOrderNo?: Maybe<Scalars['String']>;
  /** id of ecommerce order */
  ecommerceOrder?: Maybe<Scalars['Long']>;
  /** amount of charge for ecommerce */
  ecommerceOrderAmount?: Maybe<Scalars['Long']>;
  /** errors of ecommerce purchase */
  ecommerceIsError?: Maybe<Scalars['Boolean']>;
  /**
   * payment gateway auth code for ecommerce purchase
   * authCode - 3DS authentication result codes - the reason code returned by the payment processor when this Transaction object is authorized, captured, or cancelled.
   */
  ecommerceAuthCode?: Maybe<Scalars['String']>;
  /** payment gateway message for ecommerce purchase */
  ecommerceErrorMsg?: Maybe<Scalars['String']>;
  /** payment gateway AVS code for ecommerce purchase */
  ecommerceAvsCode?: Maybe<Scalars['String']>;
  /** payment gateway CVN code for ecommerce purchase */
  ecommerceCvnCode?: Maybe<Scalars['String']>;
  /**
   * flag if any locked products in user queue after subscription
   * supports feature 'lockQueueOnSubscribe' (remove 12 hours wait after subscription if there were any products in queue)
   */
  hasLockedProductsAfterSubscription?: Maybe<Scalars['Boolean']>;
  /** list of premium products that are sold out */
  notAvailableProductsFirstMonth?: Maybe<Array<Maybe<Scalars['Long']>>>;
  /** list of errors */
  errors?: Maybe<Array<Maybe<DisplayableGqlError>>>;
  /** true if successful */
  result: Scalars['Boolean'];
};

export type ConfessionRating = {
  /** Name of confession */
  name: Scalars['String'];
  /** Rating of confession */
  rating: Scalars['Int'];
  /** Comment about confession (free text) */
  comment?: Maybe<Scalars['String']>;
};

export type ConfigGql = {
  __typename?: 'ConfigGQL';
  google?: Maybe<GoogleConfigGql>;
  facebook?: Maybe<FacebookConfigGql>;
  vindiciaCreditCardUrl?: Maybe<Scalars['String']>;
  payPalWebscrUrl?: Maybe<Scalars['String']>;
};

/** Coupon type. Used for apply coupon at inquire and begin methods */
export type CouponType = 
  | 'order'
  | 'gift'
  | 'giftsets'
  | 'ecommerce';

export type CreateReviewResponseGql = IGenericResponseGql & {
  __typename?: 'CreateReviewResponseGQL';
  reviewId?: Maybe<Scalars['Long']>;
  product?: Maybe<Product>;
  errors?: Maybe<Array<Maybe<DisplayableGqlError>>>;
  result: Scalars['Boolean'];
};

export type CreateZendeskTicketInput = {
  /** user input */
  message: Scalars['String'];
  /** unsubscribe reason */
  reason?: Maybe<Scalars['String']>;
  /** what user selected: unsubcribe or not */
  unsubscribeChoice?: Maybe<Scalars['Boolean']>;
};

export type CreateZendeskTicketResponseGql = IGenericResponseGql & {
  __typename?: 'CreateZendeskTicketResponseGQL';
  ticketId?: Maybe<Scalars['Long']>;
  errors?: Maybe<Array<Maybe<DisplayableGqlError>>>;
  result: Scalars['Boolean'];
};

export type Credits = {
  __typename?: 'Credits';
  total?: Maybe<Scalars['Int']>;
  onBalance?: Maybe<Scalars['Int']>;
  paid?: Maybe<Scalars['Int']>;
  free?: Maybe<Scalars['Int']>;
  freeForReferral?: Maybe<Scalars['Int']>;
  freeForReferee?: Maybe<Scalars['Int']>;
  freeCoupon?: Maybe<Scalars['Int']>;
  freeGift?: Maybe<Scalars['Int']>;
};



export type DeleteAddressInput = {
  shipping?: Maybe<Scalars['Long']>;
};

export type DeleteFromQueueResponseGql = IGenericResponseGql & {
  __typename?: 'DeleteFromQueueResponseGQL';
  /** Get queue with custom plan name (eg MONTHLY_2PCS). By default subscription plan if any. */
  queue?: Maybe<Queue>;
  errors?: Maybe<Array<Maybe<DisplayableGqlError>>>;
  result: Scalars['Boolean'];
};


export type DeleteFromQueueResponseGqlQueueArgs = {
  plan?: Maybe<Scalars['String']>;
};

export type DeletePaymentInput = {
  /** Payment method id. Not primary. */
  id: Scalars['String'];
};

export type DeleteQueueItemInput = {
  /** index of queue cell to remove */
  index: Scalars['Int'];
  /** queue product id */
  item: Scalars['Long'];
  /** analitycs metadata */
  metadata?: Maybe<UserActionMetadata>;
};

export type DiscountCodeGql = {
  __typename?: 'DiscountCodeGQL';
  id?: Maybe<Scalars['Long']>;
  code?: Maybe<Scalars['String']>;
  discountAmount?: Maybe<Scalars['Int']>;
  discountPercentage?: Maybe<Scalars['Int']>;
  extraShippingPrice?: Maybe<Scalars['Int']>;
  vindiciaCampaign?: Maybe<Scalars['Boolean']>;
  referralCoupon?: Maybe<Scalars['Boolean']>;
  couponType?: Maybe<Scalars['String']>;
  marketingCouponOfferType?: Maybe<Scalars['String']>;
  freeProduct?: Maybe<Product>;
};


export type DiscountCodeGqlFreeProductArgs = {
  gender?: Maybe<UserGenderGql>;
};

export type DiscountCodeResponseGql = IGenericResponseGql & {
  __typename?: 'DiscountCodeResponseGQL';
  code?: Maybe<DiscountCodeGql>;
  errors?: Maybe<Array<Maybe<DisplayableGqlError>>>;
  result: Scalars['Boolean'];
};

export type DislikeProductInput = {
  productId: Scalars['Long'];
  /** deprecated */
  reason?: Maybe<DislikeProductReason>;
  dislikes?: Maybe<Array<Scalars['String']>>;
};

/** deprecated */
export type DislikeProductReason = 
  | 'DISLIKE'
  | 'OTHER';

export type DisplayableGqlError = {
  __typename?: 'DisplayableGQLError';
  /** error fixed code */
  error?: Maybe<Scalars['String']>;
  /** user message text */
  message?: Maybe<Scalars['String']>;
  /** original event timestamp */
  timestamp?: Maybe<Scalars['Long']>;
  /** free map for some details on error */
  additionalFields: Scalars['Map'];
  /** if request is connected with payment, there is structured details on payment gateway issue (this data is also stored at additionalFields map) */
  paymentErrorDetails?: Maybe<PaymentErrorDetailsGql>;
};

export type DoNotSellMyPersonalInfoInput = {
  /** change user custom property doNotSellMyPersonalInfo */
  enabled: Scalars['Boolean'];
};

export type Domain = 
  | 'com'
  | 'org'
  | 'net'
  | 'co';

export type DropdownMenuGql = {
  __typename?: 'DropdownMenuGQL';
  fragrances: FragranceDropdownMenuGql;
  makeup: MakeupDropdownMenuGql;
  candles: CandleDropdownMenuGql;
  personalCare: PersonalCareDropdownMenuGql;
};

export type EcommerceOrderGql = {
  __typename?: 'EcommerceOrderGQL';
  /** order id */
  id: Scalars['Long'];
  /** public order number */
  number: Scalars['String'];
  /** order status (Pending, PendingWithLabel, Done, Canceled, Processing, Shipped, FraudCheck, AddressCheck, NotEnoughInventory, Processed) */
  status: Scalars['String'];
  /** date of order placement */
  orderDate: Scalars['DateTime'];
  /** date of shipment */
  shipmentDate?: Maybe<Scalars['DateTime']>;
  /** tracking data */
  tracking?: Maybe<Tracking>;
  /** order products and quantity */
  items?: Maybe<Array<Maybe<EcommerceOrderItemGql>>>;
};

export type EcommerceOrderItemGql = {
  __typename?: 'EcommerceOrderItemGQL';
  /** amount of products */
  quantity?: Maybe<Scalars['Int']>;
  /** price of product */
  price?: Maybe<Scalars['Int']>;
  /** product info */
  product?: Maybe<Product>;
  /**
   * product trading item, use product to get info, and price to get the price
   * @deprecated Field no longer supported
   */
  tradingItem?: Maybe<TradingItem>;
};

export type EmailLanding = {
  __typename?: 'EmailLanding';
  buttonTitle?: Maybe<Scalars['String']>;
  landingType: EmailLandingType;
  content: EmailLandingContent;
  activeSubscriberRedirectUri?: Maybe<Scalars['String']>;
  products?: Maybe<Array<Maybe<Product>>>;
  benefits: Array<EmailLandingBenefit>;
  coupon: DiscountCodeGql;
  pageGender: UserGenderGql;
};


export type EmailLandingContentArgs = {
  section?: Maybe<EmailLandingSection>;
};


export type EmailLandingProductsArgs = {
  gender?: Maybe<UserGenderGql>;
};


export type EmailLandingBenefitsArgs = {
  section?: Maybe<EmailLandingBenefitSection>;
  resolution?: Maybe<EmailLandingResolution>;
};

export type EmailLandingBenefit = 
  | 'authenticBrands'
  | 'cancelAnytime'
  | 'freeShipping'
  | 'travelSize'
  | 'freeCase'
  | 'freeTrial'
  | 'noHiddenFees';

export type EmailLandingBenefitSection = 
  | 'top'
  | 'bottom';

export type EmailLandingContent = {
  __typename?: 'EmailLandingContent';
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image: Scalars['String'];
  media?: Maybe<Array<Maybe<EmailLandingMedia>>>;
};


export type EmailLandingContentImageArgs = {
  resolution?: Maybe<EmailLandingResolution>;
};


export type EmailLandingContentMediaArgs = {
  category?: Maybe<EmailLandingMediaCategory>;
};

export type EmailLandingMedia = {
  __typename?: 'EmailLandingMedia';
  mobile?: Maybe<Scalars['String']>;
  exceptMobile?: Maybe<Scalars['String']>;
  thumbnail?: Maybe<Scalars['String']>;
  type?: Maybe<ProductMediaType>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  sliderColor?: Maybe<Scalars['String']>;
  textAlignMobile?: Maybe<EmailLandingMediaTextAlign>;
};

export type EmailLandingMediaCategory = 
  | 'banners'
  | 'main_video';

export type EmailLandingMediaTextAlign = 
  | 'left'
  | 'center';

export type EmailLandingResolution = 
  | 'mobile'
  | 'exceptMobile';

export type EmailLandingSection = 
  | 'heading'
  | 'scent';

export type EmailLandingType = 
  | 'product'
  | 'quiz';

export type FacebookConfigGql = {
  __typename?: 'FacebookConfigGQL';
  appId?: Maybe<Scalars['String']>;
  initToken?: Maybe<Scalars['String']>;
  pageId?: Maybe<Scalars['String']>;
};

export type FacebookSigninInput = {
  /**
   * request token for single call check
   * can be null for mobile app clients
   */
  token?: Maybe<Scalars['String']>;
  /** user email */
  email?: Maybe<Scalars['String']>;
  /** user password */
  password?: Maybe<Scalars['String']>;
  /** user gender */
  gender?: Maybe<UserGenderGql>;
  /** products selected on pick page */
  products?: Maybe<Array<Maybe<Scalars['Long']>>>;
  /** access token */
  accessToken: Scalars['String'];
  /** access token expiration */
  expiresIn?: Maybe<Scalars['Int']>;
  /** signed request from FB button authResponse - deprecated: this field is unused */
  signedRequest?: Maybe<Scalars['String']>;
  /** facebook user id */
  userId: Scalars['String'];
  /** Optional user ids in analytic systems, eg Mixpanel, GA */
  analytics?: Maybe<AnalyticsUidGql>;
  /** if user came from free-trial landings and registered */
  freeTrial?: Maybe<Scalars['Boolean']>;
};

export type FacebookSigninResponseGql = IGenericResponseGql & {
  __typename?: 'FacebookSigninResponseGQL';
  /** facebook user id */
  facebookUser?: Maybe<Scalars['Long']>;
  /** user hashed email */
  hashedEmail?: Maybe<Scalars['String']>;
  /** indicator to show if email is real or generated */
  realEmail?: Maybe<Scalars['Boolean']>;
  /**
   * request token for single call check
   * can be null for mobile app clients
   */
  token?: Maybe<Scalars['String']>;
  apiToken?: Maybe<Scalars['String']>;
  /** Fetches user data */
  user?: Maybe<UserGql>;
  /** list of errors */
  errors?: Maybe<Array<Maybe<DisplayableGqlError>>>;
  /** result indicator */
  result: Scalars['Boolean'];
};

export type FbPixelPropertiesGql = {
  __typename?: 'FbPixelPropertiesGQL';
  em?: Maybe<Scalars['String']>;
  fn?: Maybe<Scalars['String']>;
  ln?: Maybe<Scalars['String']>;
  ph?: Maybe<Scalars['String']>;
  ge?: Maybe<Scalars['String']>;
  db?: Maybe<Scalars['String']>;
  ct?: Maybe<Scalars['String']>;
  st?: Maybe<Scalars['String']>;
  zp?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
};

export type FeatureGql = {
  __typename?: 'FeatureGQL';
  name: Scalars['String'];
  enabled: Scalars['Boolean'];
};

export type Filter = {
  __typename?: 'Filter';
  /** filter id */
  id: Scalars['String'];
  /** kind of filter */
  filterType?: Maybe<FilterCategoryType>;
  /** kind of filter value selection, shows how many values can be selected */
  filterSelectionType?: Maybe<FilterSelectorType>;
  /** name of filter */
  title?: Maybe<Scalars['String']>;
  /** available filter values */
  values?: Maybe<Array<Maybe<FilterValue>>>;
};

export type FilterCategoryType = 
  | 'category'
  | 'rating'
  | 'types'
  | 'brands'
  | 'notes';

export type FilterInputGql = {
  id: Scalars['String'];
  values?: Maybe<Array<Scalars['String']>>;
};

/** type of value selection in dynamic filter */
export type FilterSelectorType = 
  | 'Single'
  | 'Multiple';

export type FilterTagsGql = {
  __typename?: 'FilterTagsGQL';
  male?: Maybe<Array<Maybe<PerfumeTag>>>;
  female?: Maybe<Array<Maybe<PerfumeTag>>>;
};

export type FilterValue = {
  __typename?: 'FilterValue';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type FiltersInputGql = {
  /** in case there are already some applied custom filters and you need to get filter values respecting them. For example user choosed custom filter 'rating is higher 4' and you need to get brands values */
  filters?: Maybe<Array<Maybe<FilterInputGql>>>;
  /** if you need to fetch only specific filters */
  filtersCodes?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type FinishRestorePasswordInput = {
  /** token, recieved by email and validated */
  token: Scalars['String'];
  /** new user password */
  newPassword: Scalars['String'];
  /** how password is protected */
  passwordStrength?: Maybe<PasswordStrength>;
};

export type FinishRestorePasswordResponse = IGenericResponseGql & {
  __typename?: 'FinishRestorePasswordResponse';
  /** User email */
  email?: Maybe<Scalars['String']>;
  /** list of errors */
  errors?: Maybe<Array<Maybe<DisplayableGqlError>>>;
  /** result indicator */
  result: Scalars['Boolean'];
};

export type FlashSaleGql = {
  __typename?: 'FlashSaleGQL';
  id: Scalars['Long'];
  name: Scalars['String'];
  price: Scalars['Long'];
  gender: Scalars['String'];
  discount: Scalars['Long'];
  startDate: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
  timeLeft: Scalars['Long'];
  image?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  tradingItem: TradingItem;
  media?: Maybe<Array<Maybe<ProductMedia>>>;
  products?: Maybe<Array<Maybe<Product>>>;
  banner?: Maybe<OfferMedia>;
  background?: Maybe<OfferMedia>;
  modal?: Maybe<OfferMedia>;
};

export type FragranceDropdownMenuGql = {
  __typename?: 'FragranceDropdownMenuGQL';
  brands?: Maybe<Array<Maybe<Scalars['String']>>>;
  collections?: Maybe<Array<Maybe<CollectionGql>>>;
  fragranceOfTheMonth?: Maybe<Product>;
};

export type FragranticaBrandsSearchInput = {
  query: Scalars['String'];
  sort?: Maybe<FragranticaProductSortOrder>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type FragranticaLikeBasedRecommendationsSource = RecommendationSource & {
  __typename?: 'FragranticaLikeBasedRecommendationsSource';
  /** source of recommendation */
  sourceType: RecommendationSourceType;
  /** groups of recommendation */
  groups: Array<FragrantizaLikeBasedRecommendationGroup>;
  /** recommendations count */
  recommendationsCount: Scalars['Int'];
};

export type FragranticaProduct = {
  __typename?: 'FragranticaProduct';
  /** Identifier of fragrantica product */
  id: Scalars['Long'];
  /** Name of fragrantica product */
  name: Scalars['String'];
  /** Brand of fragrantica product */
  brand: Scalars['String'];
  /** Image of fragrantica product */
  image: Scalars['String'];
};

export type FragranticaProductSortOrder = 
  | 'MOST_POPULAR'
  | 'RELEVANCE';

export type FragranticaProductVote = {
  __typename?: 'FragranticaProductVote';
  /** fragrantica product */
  product: FragranticaProduct;
  /** vote status */
  voteStatus: VoteStatus;
};

export type FragranticaProductsSearchInput = {
  query?: Maybe<Scalars['String']>;
  brands?: Maybe<Array<Scalars['String']>>;
  sort?: Maybe<FragranticaProductSortOrder>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type FragranticaRecommendationGroup = RecommendationGroup & {
  __typename?: 'FragranticaRecommendationGroup';
  /** source of recommendation */
  source: RecommendationSourceType;
  /**
   * name of recommender algorithm for analytics
   * pass it to `UserActionMetadata.recommenderName`
   */
  recommenderName?: Maybe<Scalars['String']>;
  /** recommended products */
  products: Array<Product>;
  /** reason product */
  reason: FragranticaProduct;
};

export type FragranticaRecommendationSource = RecommendationSource & {
  __typename?: 'FragranticaRecommendationSource';
  /** source of recommendation */
  sourceType: RecommendationSourceType;
  /** groups of recommendation */
  groups: Array<FragranticaRecommendationGroup>;
  /** recommendations count */
  recommendationsCount: Scalars['Int'];
  /** fragrantica product votes */
  votes: Array<FragranticaProductVote>;
  /** votes count */
  votesCount: Scalars['Int'];
};

export type FragrantizaLikeBasedRecommendationGroup = RecommendationGroup & {
  __typename?: 'FragrantizaLikeBasedRecommendationGroup';
  /** source of recommendation */
  source: RecommendationSourceType;
  /**
   * name of recommender algorithm for analytics
   * pass it to `UserActionMetadata.recommenderName`
   */
  recommenderName?: Maybe<Scalars['String']>;
  /** recommended products */
  products: Array<Product>;
};

export type FrequenciesResponseGql = IGenericResponseGql & {
  __typename?: 'FrequenciesResponseGQL';
  /** Available frequencies, including current */
  list?: Maybe<Array<Maybe<FrequencyGql>>>;
  result: Scalars['Boolean'];
  errors?: Maybe<Array<Maybe<DisplayableGqlError>>>;
};

export type FrequencyGql = {
  __typename?: 'FrequencyGQL';
  /** Сorresponding subscription plan */
  plan?: Maybe<Plan>;
  /** Next billing date */
  nextBillingDate?: Maybe<Scalars['Date']>;
  /** Next shipment period */
  nextShippingDate?: Maybe<ShipmentPeriod>;
  /** Is frequency now selected */
  selected?: Maybe<Scalars['Boolean']>;
};

export type GenericResponseGql = IGenericResponseGql & {
  __typename?: 'GenericResponseGQL';
  errors?: Maybe<Array<Maybe<DisplayableGqlError>>>;
  result: Scalars['Boolean'];
};

export type GiftSetItem = {
  __typename?: 'GiftSetItem';
  id?: Maybe<Scalars['Long']>;
  name?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  shortDescription?: Maybe<Scalars['String']>;
  notes?: Maybe<Array<Maybe<Note>>>;
  description?: Maybe<Scalars['String']>;
  whatsIn?: Maybe<Scalars['String']>;
  whatsOut?: Maybe<Scalars['String']>;
};

/** Landing block: gift subscription promo block */
export type GiftSubscriptionMobileLandingBlock = IMobileLandingBlock & {
  __typename?: 'GiftSubscriptionMobileLandingBlock';
  /** Catalog item id or block type if default structure */
  id: Scalars['String'];
  /** Block type. Please note, that values of this type will be extended in future. */
  block: MobileLandingBlocksType;
  /** Block title text */
  title: Scalars['String'];
};

export type GiftSubscriptionStateGql = {
  __typename?: 'GiftSubscriptionStateGQL';
  code?: Maybe<Scalars['String']>;
  recipientEmail?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  giverName?: Maybe<Scalars['String']>;
  months?: Maybe<Scalars['String']>;
  activated?: Maybe<Scalars['Boolean']>;
};

export type GoogleConfigGql = {
  __typename?: 'GoogleConfigGQL';
  clientId?: Maybe<Scalars['String']>;
};

export type GoogleSigninInput = {
  /**
   * request token for single call check
   * can be null for mobile app clients
   */
  token?: Maybe<Scalars['String']>;
  /** access token */
  accessToken?: Maybe<Scalars['String']>;
  /** google ID token */
  idToken: Scalars['String'];
  /** user gender */
  gender?: Maybe<UserGenderGql>;
  /** products selected on pick page */
  products?: Maybe<Array<Maybe<Scalars['Long']>>>;
  /** Optional user ids in analytic systems, eg Mixpanel, GA */
  analytics?: Maybe<AnalyticsUidGql>;
  /** if user came from free-trial landings and registered */
  freeTrial?: Maybe<Scalars['Boolean']>;
};

export type GoogleSigninResponseGql = IGenericResponseGql & {
  __typename?: 'GoogleSigninResponseGQL';
  /** google user id */
  googleUser?: Maybe<Scalars['Long']>;
  /** user hashed email */
  hashedEmail?: Maybe<Scalars['String']>;
  /** indicator to show if email is real or generated */
  realEmail?: Maybe<Scalars['Boolean']>;
  /**
   * request token for single call check
   * can be null for mobile app clients
   */
  token?: Maybe<Scalars['String']>;
  apiToken?: Maybe<Scalars['String']>;
  /** Fetches user data */
  user?: Maybe<UserGql>;
  /** list of errors */
  errors?: Maybe<Array<Maybe<DisplayableGqlError>>>;
  /** result indicator */
  result: Scalars['Boolean'];
};

export type HelpfulGql = {
  __typename?: 'HelpfulGQL';
  positive?: Maybe<Scalars['Long']>;
  negative?: Maybe<Scalars['Long']>;
  isUseful?: Maybe<Scalars['Boolean']>;
};

export type HistoryRecommendationGroup = RecommendationGroup & {
  __typename?: 'HistoryRecommendationGroup';
  /** source of recommendation */
  source: RecommendationSourceType;
  /**
   * name of recommender algorithm for analytics
   * pass it to `UserActionMetadata.recommenderName`
   */
  recommenderName?: Maybe<Scalars['String']>;
  /** recommended products */
  products: Array<Product>;
  /** reason product */
  reason?: Maybe<Product>;
};

export type HistoryRecommendationSource = RecommendationSource & {
  __typename?: 'HistoryRecommendationSource';
  /** source of recommendation */
  sourceType: RecommendationSourceType;
  /** groups of recommendation */
  groups: Array<HistoryRecommendationGroup>;
  /** recommendations count */
  recommendationsCount: Scalars['Int'];
  /** unrated products */
  unratedProducts: Array<Product>;
  /** unrated products count */
  unratedProductsCount: Scalars['Int'];
  /** indicates that new recommendations were found */
  newRecommendationsNotification?: Maybe<Scalars['Boolean']>;
};

export type IGenericResponseGql = {
  errors?: Maybe<Array<Maybe<DisplayableGqlError>>>;
  result: Scalars['Boolean'];
};

/** Common data for block on mobile landing grid */
export type IMobileLandingBlock = {
  /** Catalog item id or block type if default structure */
  id: Scalars['String'];
  /** Block type. Please note, that values of this type will be extended in future. */
  block: MobileLandingBlocksType;
};

export type ImageType = 
  | 'DESKTOP'
  | 'MOBILE';

export type IncubatorProductItemGql = {
  __typename?: 'IncubatorProductItemGQL';
  itemId: Scalars['Int'];
  color?: Maybe<Scalars['String']>;
  colorType?: Maybe<Scalars['String']>;
};

export type IncubatorProductItemInput = {
  itemId: Scalars['Int'];
  color?: Maybe<Scalars['String']>;
  colorType?: Maybe<Scalars['String']>;
};

export type IncubatorProductRatingGql = {
  __typename?: 'IncubatorProductRatingGQL';
  productId: Scalars['Int'];
  rating?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<Maybe<IncubatorProductItemGql>>>;
  isTopProduct?: Maybe<Scalars['Boolean']>;
};

export type IncubatorProductRatingInput = {
  productId: Scalars['Int'];
  rating?: Maybe<Scalars['Int']>;
  items?: Maybe<Array<Maybe<IncubatorProductItemInput>>>;
  isTopProduct?: Maybe<Scalars['Boolean']>;
};

export type LandingCardGql = {
  __typename?: 'LandingCardGQL';
  name: Scalars['String'];
  products?: Maybe<Array<Maybe<LandingProductGql>>>;
};

export type LandingPageGql = {
  __typename?: 'LandingPageGQL';
  pathname: Scalars['String'];
  type: Scalars['String'];
  withMaleLanding: Scalars['Boolean'];
  domain: Domain;
  withFbPixel: Scalars['Boolean'];
  mixpanelEvent: Scalars['String'];
  coupon?: Maybe<DiscountCodeGql>;
};

export type LandingProductGql = {
  __typename?: 'LandingProductGQL';
  colors?: Maybe<Array<Maybe<Scalars['String']>>>;
  product: Product;
};

export type LikeProductInput = {
  productId: Scalars['Long'];
  likes: Array<Scalars['String']>;
};

/** Landing block: products in list */
export type ListProductsMobileLandingBlock = IMobileLandingBlock & {
  __typename?: 'ListProductsMobileLandingBlock';
  /** Catalog item id or block type if default structure */
  id: Scalars['String'];
  /** Block type. Please note, that values of this type will be extended in future. */
  block: MobileLandingBlocksType;
  /** item title */
  title: Scalars['String'];
  /** list of products */
  list?: Maybe<Array<Maybe<Product>>>;
};

export type LoginInput = {
  token?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MakeupDropdownMenuGql = {
  __typename?: 'MakeupDropdownMenuGQL';
  brands?: Maybe<Array<Maybe<Scalars['String']>>>;
  collections?: Maybe<Array<Maybe<CollectionGql>>>;
  favorite?: Maybe<Product>;
};


export type Marketing = {
  __typename?: 'Marketing';
  utm?: Maybe<Utm>;
  referrerLandingPage?: Maybe<Scalars['String']>;
};


export type MarketingUtmArgs = {
  type?: Maybe<UtmType>;
};

export type MarketingCouponGql = {
  __typename?: 'MarketingCouponGQL';
  coupon?: Maybe<Scalars['Long']>;
  code?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  shouldCharge?: Maybe<Scalars['Boolean']>;
  chargeAmount?: Maybe<Scalars['Int']>;
  months?: Maybe<Scalars['Int']>;
};

/** Single banner */
export type MobileBannerItem = {
  __typename?: 'MobileBannerItem';
  /** id of banner */
  id: Scalars['String'];
  /** name of banner */
  name: Scalars['String'];
  /** name of banner in Mixpannel */
  mixpanelName: Scalars['String'];
  /** link to image */
  image?: Maybe<Scalars['String']>;
  /** link to image HD quality */
  imageHd?: Maybe<Scalars['String']>;
  /** link to image UHD quality */
  imageUhd?: Maybe<Scalars['String']>;
  /** link to action */
  link?: Maybe<Scalars['String']>;
  /**
   * Deprecated. Will be removed
   * link type
   */
  linkType?: Maybe<MobileLinkType>;
};

/** Type of block */
export type MobileLandingBlocksType = 
  | 'banners'
  | 'bestsellers'
  | 'recommended'
  | 'newarrivals'
  | 'collections'
  | 'catalogue'
  | 'toprated'
  | 'skincareNewArrivals'
  | 'makeupNewArrivals'
  | 'unratedProducts'
  | 'blogPosts'
  | 'takeQuiz'
  | 'cart'
  | 'giftSubscription';

export type MobileLandingGridInput = {
  /**
   * Dedicated grid structure:
   * * order and blocks are defined via catalog tree: Mobile LandingGrid
   * * child nodes of the root are split tests
   * * child nodes of split test are grid blocks (banners, bestsellers, recommended, newarrivals, collections, catalogue, toprated)
   * If structure is null, then default structure is used - bestsellers, catalogue, collections, toprated
   * The client will get the split name from Firebase Remote Config, pass it to API and get the corresponding landing variant in response.
   */
  structure?: Maybe<Scalars['String']>;
  /** Catalog app type */
  catalogAppType?: Maybe<AppType>;
  /** Catalog tree name */
  catalogTreeName?: Maybe<Scalars['String']>;
  /** Products block settings */
  productsLimit?: Maybe<Scalars['Int']>;
};

/** Mobile landing grid responce */
export type MobileLandingGridResponse = IGenericResponseGql & {
  __typename?: 'MobileLandingGridResponse';
  /** item of landing grid */
  blocks?: Maybe<Array<Maybe<IMobileLandingBlock>>>;
  result: Scalars['Boolean'];
  errors?: Maybe<Array<Maybe<DisplayableGqlError>>>;
};

/**
 * Type of link
 * Deprecated. Will be removed
 */
export type MobileLinkType = 
  /** browser view */
  | 'WEBVIEW'
  /** in-app link */
  | 'DEEPLINK';

export type MobileNotification = {
  __typename?: 'MobileNotification';
  name: Scalars['String'];
  text: Scalars['String'];
  visible: Scalars['Boolean'];
  value?: Maybe<Scalars['String']>;
};

export type MostPopularNotesInput = {
  /** user gender */
  gender: UserGenderGql;
  /** max results number */
  limit?: Maybe<Scalars['Int']>;
};

export type MostPopularNotesResponse = IGenericResponseGql & {
  __typename?: 'MostPopularNotesResponse';
  /** list of notes */
  notes: Array<Note>;
  /** list of errors */
  errors?: Maybe<Array<Maybe<DisplayableGqlError>>>;
  /** result indicator */
  result: Scalars['Boolean'];
};

export type MoveInQuefueResponseGql = IGenericResponseGql & {
  __typename?: 'MoveInQuefueResponseGQL';
  /** Get queue with custom plan name (eg MONTHLY_2PCS). By default subscription plan if any. */
  queue?: Maybe<Queue>;
  errors?: Maybe<Array<Maybe<DisplayableGqlError>>>;
  result: Scalars['Boolean'];
};


export type MoveInQuefueResponseGqlQueueArgs = {
  plan?: Maybe<Scalars['String']>;
};

export type MoveQueueItemInput = {
  /** index of source cell in queue */
  indexFrom: Scalars['Int'];
  /** index of target cell in queu */
  indexTo: Scalars['Int'];
  /** queue product id */
  item: Scalars['Long'];
  /** analitycs metadata */
  metadata?: Maybe<UserActionMetadata>;
};

export type Mutation = {
  __typename?: 'Mutation';
  register?: Maybe<UserResponseGql>;
  login?: Maybe<UserResponseGql>;
  appleSignin?: Maybe<AppleSigninResponseGql>;
  facebookSignin?: Maybe<FacebookSigninResponseGql>;
  googleSignin?: Maybe<GoogleSigninResponseGql>;
  /** Start restore password flow */
  beginRestorePassword?: Maybe<GenericResponseGql>;
  /** Validate token to restore password */
  validateRestorePassword?: Maybe<GenericResponseGql>;
  /** Change password after validation */
  finishRestorePassword?: Maybe<FinishRestorePasswordResponse>;
  sendEmail?: Maybe<Scalars['Boolean']>;
  /** Add item to queue */
  addToQueue?: Maybe<AddToQueueResponseGql>;
  /** Delete item from queue */
  deleteFromQueue?: Maybe<DeleteFromQueueResponseGql>;
  /** Move item in queue, change items order */
  moveInQueue?: Maybe<MoveInQuefueResponseGql>;
  /** Replace item in queue */
  updateInQueue?: Maybe<UpdateInQueueResponseGql>;
  /** Save or update product rating on incubator page by user */
  saveIncubatorProductRating?: Maybe<Array<Maybe<IncubatorProductRatingGql>>>;
  /** Change user gender */
  changeGender?: Maybe<Scalars['Boolean']>;
  /** set to true if customer with active subscription wanna receive perfume cases with upcharge price every shipment */
  setUpchargeForPerfumeCase?: Maybe<PerfumeCaseOfMonthGql>;
  /** change doNotSellMyPersonalInfo user field, we are storing information about user agreement */
  setDoNotSellMyPersonalInfo?: Maybe<GenericResponseGql>;
  /** skip a month or a couple months, like subscription pause but with limit of time - 1, 2, 3 .. months */
  skipMonth?: Maybe<SkipMonthGql>;
  /** send feedback on skip  https://scentbird.atlassian.net/browse/SB-1880 */
  skipFeedback?: Maybe<GenericResponseGql>;
  /**
   * Unskip subscription.
   * Deprecated. Use unskipMonth
   */
  unskip?: Maybe<Scalars['Boolean']>;
  /** Unskip a month or a couple months from subscription. */
  unskipMonth?: Maybe<UnskipResponseGql>;
  /** Update personal info data like first name, last name, avatar, etc. */
  updatePersonalInfo?: Maybe<UpdatePersonalInfoResponseGql>;
  /** Change password */
  changePassword?: Maybe<GenericResponseGql>;
  /** Collect user interview data */
  createUserInterview?: Maybe<GenericResponseGql>;
  /** Begin subscription command. Call it first, then submit VWS gateway data and complete by commitSubscription call. */
  beginSubscription?: Maybe<BeginSubscriptionResponseGql>;
  /** Commit subscription command. Call it after beginSubscription and submission of the VWS gateway data. */
  commitSubscription?: Maybe<CommitSubscriptionResponseGql>;
  /**
   * Buy subscription ONE CLICK command
   * Used mostly for mobile apps to buy subscription with existing payment method and shipment address in one step.
   */
  buySubscriptionOneClick?: Maybe<CommitSubscriptionResponseGql>;
  /** Pause subscription */
  pauseSubscription?: Maybe<PauseGql>;
  /** Resubscribe with offer */
  resubscribe?: Maybe<ResubscribeResponseGql>;
  /** Unpause subscription */
  unpauseSubscription?: Maybe<UnpauseSubscriptionResponseGql>;
  /** Send feedback on unsubscribe */
  createZendeskTicket?: Maybe<CreateZendeskTicketResponseGql>;
  /** Creates product review */
  createReview?: Maybe<CreateReviewResponseGql>;
  /** Updates product review */
  updateReview?: Maybe<GenericResponseGql>;
  /** Rate product */
  rateProduct?: Maybe<GenericResponseGql>;
  /** Rate product */
  dislikeProduct?: Maybe<GenericResponseGql>;
  /** Rate product */
  likeProduct?: Maybe<GenericResponseGql>;
  /** Rate review */
  rateReview?: Maybe<GenericResponseGql>;
  /** Reply to review */
  replyReview?: Maybe<GenericResponseGql>;
  /** Rate reply */
  rateReviewReply?: Maybe<GenericResponseGql>;
  /** Report review (reportType:  `spam` or `abusive`) */
  reportReview?: Maybe<GenericResponseGql>;
  /**
   * Rate tag
   * When a user creates a review for perfume he can leave a vote for one of tag in categories Scent Type, Personality, etc.
   */
  rateTag?: Maybe<RateTagResponseGql>;
  /** Add new address to user */
  addAddress?: Maybe<UpdatePersonalInfoResponseGql>;
  /** Update existing user address */
  updateAddress?: Maybe<UpdatePersonalInfoResponseGql>;
  /** Delete existing user address */
  deleteAddress?: Maybe<UpdatePersonalInfoResponseGql>;
  /** set user address (ScentbirdSubscription.addressStatus) as confirmed (`USER_CONFIRMED`) */
  setAddressConfirmed?: Maybe<UpdatePersonalInfoResponseGql>;
  /** Begin creation of the new payment method. Call it first, then submit VWS gateway data and complete by commitNewPayment call. */
  beginNewPayment?: Maybe<BeginNewPaymentResponseGql>;
  /** Finish creation of the new payment method. Call it after beginNewPayment and submission of the VWS gateway data. */
  commitNewPayment?: Maybe<UpdatePersonalInfoResponseGql>;
  /** Set payment method as primary for user */
  changePayment?: Maybe<UpdatePersonalInfoResponseGql>;
  /** Delete existing payment method of user */
  deletePayment?: Maybe<UpdatePersonalInfoResponseGql>;
  /** vote for FragranticaProduct */
  voteFragranticaProduct?: Maybe<GenericResponseGql>;
  /** Submit user feedback form. Each call creates new answer. */
  saveUserFeedbackForm?: Maybe<UserFeedbackFormItemResponseGql>;
  /** Update subscription plan: upgrade, downgrade, change plan */
  updateSubscriptionPlan: UpdateSubscriptionPlanResponseGql;
  /** Submit blogger information */
  submitBloggerRequest: BloggerRequestResponseGql;
  /** select product categories on onboarding page */
  setOnboardingProductCategories: GenericResponseGql;
  /** Submit tastemaker survey */
  submitTastemakerSurvey: GenericResponseGql;
  /** Submit post purchase survey */
  submitPostPurchaseSurvey: GenericResponseGql;
  /** vote for product (like/dislike) */
  voteProduct: GenericResponseGql;
  referralVisit: ReferralVisitResponseGql;
  changeFrequencyFeedback: GenericResponseGql;
  unsubscribeFeedback: GenericResponseGql;
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationAppleSigninArgs = {
  input: AppleSigninInput;
};


export type MutationFacebookSigninArgs = {
  input: FacebookSigninInput;
};


export type MutationGoogleSigninArgs = {
  input: GoogleSigninInput;
};


export type MutationBeginRestorePasswordArgs = {
  input: BeginRestorePasswordInput;
};


export type MutationValidateRestorePasswordArgs = {
  input: ValidateRestorePasswordInput;
};


export type MutationFinishRestorePasswordArgs = {
  input: FinishRestorePasswordInput;
};


export type MutationSendEmailArgs = {
  input?: Maybe<SendMessageInput>;
};


export type MutationAddToQueueArgs = {
  input?: Maybe<AddQueueItemInput>;
};


export type MutationDeleteFromQueueArgs = {
  input?: Maybe<DeleteQueueItemInput>;
};


export type MutationMoveInQueueArgs = {
  input?: Maybe<MoveQueueItemInput>;
};


export type MutationUpdateInQueueArgs = {
  input?: Maybe<UpdateQueueItemInput>;
};


export type MutationSaveIncubatorProductRatingArgs = {
  collection: Scalars['String'];
  input: Array<Maybe<IncubatorProductRatingInput>>;
};


export type MutationChangeGenderArgs = {
  gender: UserGenderGql;
};


export type MutationSetUpchargeForPerfumeCaseArgs = {
  enabled?: Maybe<Scalars['Boolean']>;
  page?: Maybe<Scalars['String']>;
};


export type MutationSetDoNotSellMyPersonalInfoArgs = {
  input?: Maybe<DoNotSellMyPersonalInfoInput>;
};


export type MutationSkipMonthArgs = {
  input?: Maybe<SkipMonthInput>;
};


export type MutationSkipFeedbackArgs = {
  input: SkipFeedbackInput;
};


export type MutationUnskipArgs = {
  input?: Maybe<UnskipInput>;
};


export type MutationUnskipMonthArgs = {
  input?: Maybe<UnskipInput>;
};


export type MutationUpdatePersonalInfoArgs = {
  input: PersonalInfoInput;
};


export type MutationChangePasswordArgs = {
  input: ChangePasswordInput;
};


export type MutationCreateUserInterviewArgs = {
  input: UserInterviewInput;
};


export type MutationBeginSubscriptionArgs = {
  input: BeginSubscriptionInput;
};


export type MutationCommitSubscriptionArgs = {
  input: CommitSubscriptionInput;
};


export type MutationBuySubscriptionOneClickArgs = {
  input: BuySubscriptionOneClickInput;
};


export type MutationResubscribeArgs = {
  input: ResubscribeInput;
};


export type MutationUnpauseSubscriptionArgs = {
  input: UnpauseSubscriptionInput;
};


export type MutationCreateZendeskTicketArgs = {
  input: CreateZendeskTicketInput;
};


export type MutationCreateReviewArgs = {
  input: ReviewInput;
};


export type MutationUpdateReviewArgs = {
  input?: Maybe<ReviewInput>;
};


export type MutationRateProductArgs = {
  input?: Maybe<RateProductInput>;
};


export type MutationDislikeProductArgs = {
  input?: Maybe<DislikeProductInput>;
};


export type MutationLikeProductArgs = {
  input?: Maybe<LikeProductInput>;
};


export type MutationRateReviewArgs = {
  input?: Maybe<RateReviewInput>;
};


export type MutationReplyReviewArgs = {
  input?: Maybe<ReviewReplyInput>;
};


export type MutationRateReviewReplyArgs = {
  input?: Maybe<RateReplyInput>;
};


export type MutationReportReviewArgs = {
  input?: Maybe<ReportReviewInput>;
};


export type MutationRateTagArgs = {
  input: RateTagInput;
};


export type MutationAddAddressArgs = {
  input: AddAddressInput;
};


export type MutationUpdateAddressArgs = {
  input: UpdateAddressInput;
};


export type MutationDeleteAddressArgs = {
  input: DeleteAddressInput;
};


export type MutationBeginNewPaymentArgs = {
  input: BeginNewPaymentInput;
};


export type MutationCommitNewPaymentArgs = {
  input: CommitNewPaymentInput;
};


export type MutationChangePaymentArgs = {
  input: ChangePaymentInput;
};


export type MutationDeletePaymentArgs = {
  input: DeletePaymentInput;
};


export type MutationVoteFragranticaProductArgs = {
  input: VoteFragranticaProductInput;
};


export type MutationSaveUserFeedbackFormArgs = {
  input: SaveUserFeedbackFormInput;
};


export type MutationUpdateSubscriptionPlanArgs = {
  input: UpdateSubscriptionPlanInput;
};


export type MutationSubmitBloggerRequestArgs = {
  input: BloggerRequestInput;
};


export type MutationSetOnboardingProductCategoriesArgs = {
  input: OnboardingProductCategoriesInput;
};


export type MutationSubmitTastemakerSurveyArgs = {
  input: SubmitTastemakerSurveyInput;
};


export type MutationSubmitPostPurchaseSurveyArgs = {
  input: SubmitPostPurchaseSurveyInput;
};


export type MutationVoteProductArgs = {
  input: VoteProductInput;
};


export type MutationReferralVisitArgs = {
  input: ReferralVisitInput;
};


export type MutationChangeFrequencyFeedbackArgs = {
  input: ChangeFrequencyFeedbackInput;
};


export type MutationUnsubscribeFeedbackArgs = {
  input: UnsubscribeFeedbackInput;
};

export type NotAvailableProductsOnPickResponseGql = {
  __typename?: 'NotAvailableProductsOnPickResponseGQL';
  notAvailableProductsOnPickFirstMonth?: Maybe<Array<Maybe<Product>>>;
};

export type Note = {
  __typename?: 'Note';
  id?: Maybe<Scalars['Long']>;
  name?: Maybe<Scalars['String']>;
  img?: Maybe<Scalars['String']>;
  hdImg?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  hdImage?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  searchable?: Maybe<Scalars['Boolean']>;
  description?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  /** deprecated. some expiriment on mocks. */
  recommendations?: Maybe<Array<Maybe<RecommendationCategory>>>;
  perfumesCount?: Maybe<Scalars['Long']>;
  colognesCount?: Maybe<Scalars['Long']>;
  productsCount?: Maybe<Scalars['Long']>;
  topProducts?: Maybe<Array<Maybe<Product>>>;
};


export type NoteTopProductsArgs = {
  limit?: Maybe<Scalars['Int']>;
  excludeProductId?: Maybe<Scalars['Int']>;
};

export type OfferMedia = {
  __typename?: 'OfferMedia';
  mobile: Scalars['String'];
  desktop: Scalars['String'];
  tabletPortrait: Scalars['String'];
  tabletLandscape: Scalars['String'];
};

export type OnboardingProductCategoriesInput = {
  categories: Array<Scalars['String']>;
};

export type OneClickSubscriptionInput = {
  /** Shipping address */
  shippingId: Scalars['Long'];
  /** Payment method id */
  paymentMethodId: Scalars['String'];
};

export type PairGql = {
  __typename?: 'PairGQL';
  key?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

export type PasswordStrength = 
  | 'weak'
  | 'medium'
  | 'strong';

export type PauseGql = IGenericResponseGql & {
  __typename?: 'PauseGQL';
  /** refund data */
  refund?: Maybe<RefundGql>;
  errors?: Maybe<Array<Maybe<DisplayableGqlError>>>;
  result: Scalars['Boolean'];
};

export type PaymentErrorDetailsGql = {
  __typename?: 'PaymentErrorDetailsGQL';
  /** Message title. */
  title?: Maybe<Scalars['String']>;
  /** Message text. */
  message?: Maybe<Scalars['String']>;
  /** Payment gateway Authorization Code. A code that is generated by an issuing bank, the code being used to validate a credit card and approve it when a purchase or sale is made. */
  authCode?: Maybe<Scalars['String']>;
  /** Payment gateway AVS Code. AVS is used when the merchant verifies credit card data, such as billing address and ZIP code, against the Visa/MasterCard billing information of the cardholder. */
  avsCode?: Maybe<Scalars['String']>;
  /** Payment gateway CVN Code. The CVN code is a special code used as a security measure for all Internet transactions. */
  cvnCode?: Maybe<Scalars['String']>;
  /** True if CVN is incorrect. */
  isCvvError?: Maybe<Scalars['Boolean']>;
};

export type PaymentMethodGql = {
  __typename?: 'PaymentMethodGQL';
  id: Scalars['String'];
  /** payment type (creditCard, payPal, applePay, amazonPay) */
  type: Scalars['String'];
  /** card number */
  cardNumber?: Maybe<Scalars['String']>;
  /** card expiry date */
  expiryDate?: Maybe<Scalars['String']>;
  /** PayPal account email */
  email?: Maybe<Scalars['String']>;
  /** is primary payment method */
  primary?: Maybe<Scalars['Boolean']>;
};

export type PaymentProvider = 
  | 'VINDICIA'
  | 'RECURLY';

/** Payment type. User choice for payment. */
export type PaymentType = 
  | 'CREDIT_CARD'
  | 'PAYPAL'
  | 'APPLE_PAY'
  | 'AMAZON_PAY';

export type PerfumeCaseOfMonthGql = {
  __typename?: 'PerfumeCaseOfMonthGQL';
  /** Case subscription availablity. True if case subscription is possible for user. */
  enabled?: Maybe<Scalars['Boolean']>;
  /** Case subscription status. True if user has active case subscription. Case subscription can be modified by setUpchargeForPerfumeCase mutation. */
  selected?: Maybe<Scalars['Boolean']>;
  /** Price in cents */
  price: Scalars['Int'];
  /** True when we already made prelock of upcharge and customer cant uncheck selection */
  selectionLocked?: Maybe<Scalars['Boolean']>;
  /** Current perfume case of the month */
  currentMonth?: Maybe<ProductOfMonth>;
};

export type PerfumeTag = {
  __typename?: 'PerfumeTag';
  /** database id */
  id: Scalars['Long'];
  /** tag name */
  name?: Maybe<Scalars['String']>;
  /** deprecated, use image */
  img?: Maybe<Scalars['String']>;
  /** tag image link */
  image?: Maybe<Scalars['String']>;
  /** tag type: OCCASION, SEASON, STYLE, SCENT_TYPE, ATTRIBUTE, COMPLEXITY */
  type?: Maybe<Scalars['String']>;
  /** number of products with this tag */
  productsCount?: Maybe<Scalars['Long']>;
  /** number how many times have products with the tag been added to the queue in the last 3 weeks */
  addToQueueFloatingRating?: Maybe<Scalars['Long']>;
};

export type PersonalCareDropdownMenuGql = {
  __typename?: 'PersonalCareDropdownMenuGQL';
  products?: Maybe<Array<Maybe<Product>>>;
  bestseller?: Maybe<Product>;
};

export type PersonalInfoInput = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  /** date in ISO format (yyyy-MM-dd) */
  birthday?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  /** base64 encoded image */
  avatar?: Maybe<Scalars['String']>;
};

export type Plan = {
  __typename?: 'Plan';
  name: Scalars['String'];
  billingPeriod: Scalars['Int'];
  shippingPeriod: Scalars['Int'];
  frequency: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  productCount: Scalars['Int'];
  totalPrice?: Maybe<Scalars['Int']>;
  productPrice?: Maybe<Scalars['Int']>;
  selected?: Maybe<Scalars['Boolean']>;
  productsPerPeriod: Scalars['Int'];
  /** Money, saved by user, comparing to MONTHLY plan as string */
  save: Scalars['String'];
  /** Money, saved by user, comparing to MONTHLY plan as cents */
  saveCents: Scalars['Int'];
  /** Plan price as string */
  price: Scalars['String'];
  /** Plan price as cents */
  priceCents: Scalars['Int'];
  /** Only for mobile app - shows default discounted price as we offer on landing page as String. Thus we can easily change offers we give to mobile users. Check also defaultDiscountPriceCents. */
  defaultDiscountPrice?: Maybe<Scalars['String']>;
  /** Only for mobile app - shows default discounted price as we offer on landing page as Cents. Thus we can easily change offers we give to mobile users. Check also defaultDiscountPrice. */
  defaultDiscountPriceCents?: Maybe<Scalars['Int']>;
  /** Only for mobile app - shows default discounted price as we offer on landing page. Thus we can easily change offers we give to mobile users */
  defaultDiscountText?: Maybe<Scalars['String']>;
  /** Months when ships should be sent to user by default, 1-12 */
  shippingMonths?: Maybe<Array<Maybe<Scalars['Long']>>>;
};


export type PlanShippingMonthsArgs = {
  ships?: Maybe<Scalars['Int']>;
};

export type PlansQueryInput = {
  /** Amount of how many perfumes/product user can receive per period, for ex. when: perfumesPerPeriod = 3 and billingPeriod = shippingPeriod = 1 it means: 3 perfumes / 1 month */
  products?: Maybe<Scalars['Int']>;
  /** Pay every x months */
  billing?: Maybe<Scalars['Int']>;
  /** Receive product every x months. Default value 1. */
  shipping?: Maybe<Scalars['Int']>;
  /** Coupon code. Should be passed within couponType. */
  couponCode?: Maybe<Scalars['String']>;
  /** Coupon type. Should be passed within couponCode. */
  couponType?: Maybe<CouponType>;
};

export type PopupGql = {
  __typename?: 'PopupGQL';
  name: Scalars['String'];
  lastUpdate?: Maybe<Scalars['String']>;
  count: Scalars['Long'];
};

export type PremiumProductInBatchNotificationGql = {
  __typename?: 'PremiumProductInBatchNotificationGQL';
  /** need to notify user */
  notify: Scalars['Boolean'];
  /** first premium product in batch */
  product?: Maybe<Product>;
};

export type PriceInquiryGql = IGenericResponseGql & {
  __typename?: 'PriceInquiryGQL';
  withCart?: Maybe<Scalars['Boolean']>;
  price?: Maybe<Scalars['Long']>;
  priceWithCredits?: Maybe<Scalars['Long']>;
  discount?: Maybe<Scalars['Long']>;
  tax?: Maybe<Scalars['Long']>;
  credits?: Maybe<Scalars['Long']>;
  /** price of premium products */
  upchargePrice?: Maybe<Scalars['Long']>;
  /** deprecated use discountCode instead. */
  coupon?: Maybe<Scalars['String']>;
  offer?: Maybe<Scalars['String']>;
  subscription?: Maybe<SubscriptionPriceGql>;
  cart?: Maybe<CartPriceGql>;
  /** Applied discount code after validation */
  discountCode?: Maybe<DiscountCodeResponseGql>;
  /** Price of case subscription */
  subscriptionCasePrice?: Maybe<Scalars['Long']>;
  /** Price of PayPal authorization */
  payPalAuthorizationFee?: Maybe<Scalars['Long']>;
  /** products selected on pick page */
  pickedProducts?: Maybe<Array<Maybe<Scalars['Long']>>>;
  errors?: Maybe<Array<Maybe<DisplayableGqlError>>>;
  result: Scalars['Boolean'];
};

export type PriceInquiryInput = {
  /** Plan name (eg MONTHLY). Should be passed planName or planNameVindicia. */
  plan?: Maybe<Scalars['String']>;
  /** Vindician plan name (eg scentbird_month_regular). Should be passed planName or planNameVindicia. */
  planName?: Maybe<Scalars['String']>;
  /** Coupon code */
  couponCode?: Maybe<Scalars['String']>;
  /** Coupon type (eg order, ecommerce). Should be passed with couponCode */
  couponType?: Maybe<CouponType>;
  /** Used for disable validate lower coupon apply when higher coupon already applied. Should be passed with couponCode, default:false */
  forceLowerCouponValue?: Maybe<Scalars['Boolean']>;
  /** Offer code */
  offer?: Maybe<Scalars['String']>;
  /** Coupon ID */
  coupon?: Maybe<Scalars['String']>;
  /** If true - user eneterd it from UI */
  couponFromUser?: Maybe<Scalars['Boolean']>;
  /** Referral coupon flag */
  referralCoupon?: Maybe<Scalars['Boolean']>;
  /** Reset coupon from session */
  clearCouponSession?: Maybe<Scalars['Boolean']>;
  /** Set to true if case subscription is also required */
  subscriptionCase?: Maybe<Scalars['Boolean']>;
  /** Shipping address */
  address?: Maybe<AddressInput>;
  /** products selected on pick page */
  pickedProducts?: Maybe<Array<Maybe<Scalars['Long']>>>;
};

export type PriceRuleGql = {
  __typename?: 'PriceRuleGQL';
  name: Scalars['String'];
  value: Scalars['Long'];
};

export type Product = {
  __typename?: 'Product';
  /** product internal id */
  id: Scalars['Long'];
  /** custom or SEO url */
  url?: Maybe<Scalars['String']>;
  /** SEO url */
  canonicalUrl?: Maybe<Scalars['String']>;
  /** product name */
  name: Scalars['String'];
  /** product description */
  description: Scalars['String'];
  /** name of brand */
  brand: Scalars['String'];
  /** custom brand page url */
  brandSlug?: Maybe<Scalars['String']>;
  /** product image link (Deprecated, use image) */
  img?: Maybe<Scalars['String']>;
  /** product image link, 1000px middle-resolution */
  image?: Maybe<Scalars['String']>;
  /** product image link, 500px mobile-resolution */
  imageMobile?: Maybe<Scalars['String']>;
  /** product image link, 1500px hi-resolution */
  imageHq?: Maybe<Scalars['String']>;
  /** checkout image */
  imageCheckout?: Maybe<Scalars['String']>;
  /** target gender of product */
  sex?: Maybe<Scalars['String']>;
  /** product category, eg perfume, extras, skincare-sun-care, etc */
  category?: Maybe<Scalars['String']>;
  /** product type in major cases, but for scrubs we need use custom category */
  customCategory?: Maybe<Scalars['String']>;
  /** special category could be use for real perfumes in several special cases (/pick page for example). */
  specialCategory?: Maybe<Scalars['String']>;
  /** product type name from ProductInfoType, eg Cream, Scrub, etc */
  type?: Maybe<Scalars['String']>;
  /** product type group from ProductInfoType, eg Perfume, BathBody, etc */
  typeGroup?: Maybe<Scalars['String']>;
  /** Deprecated: use ratings.avgRate */
  rating?: Maybe<Scalars['Float']>;
  /** Product rating statistics (average, count, split by marks, etc) */
  ratings?: Maybe<RatingGql>;
  /** product visibility status [VISIBLE, LANDING, INVISIBLE, OUT_OF_STOCK] */
  visibility: Scalars['String'];
  /** web special data string */
  pageTitle?: Maybe<Scalars['String']>;
  /** sustom limited edition texts about volume/weight/ml/oz */
  limitedEditionVolumeCustomText?: Maybe<Scalars['String']>;
  /** total available count of items for this product */
  limitedEditionProductsRemainingCount?: Maybe<Scalars['Int']>;
  /**
   * sort values: 'helpful' or 'recent', default is 'recent'
   * if 'reviewId' is passed then gives only requested review for this product
   */
  reviews?: Maybe<Array<Maybe<ProductReviewGql>>>;
  /** total reviews count */
  reviewsCount?: Maybe<Scalars['Int']>;
  /** product star rating by current user */
  userRating?: Maybe<Scalars['Int']>;
  /** product review by current user */
  userReview?: Maybe<ProductReviewGql>;
  /**
   * primary ecommerce trading item
   * Uses for non trivial fetches from DB, when you should return values from ProductInfo hierarchy of classes, and provide price of product and id for cart
   */
  tradingItem?: Maybe<TradingItem>;
  /** all trading items */
  tradingItems?: Maybe<Array<Maybe<TradingItem>>>;
  /** trading items into gift set, for example Skincare set can have: Mango scrub  5 ozkPineapple + white amber hand cream 1.7 oz */
  giftSetItems?: Maybe<Array<Maybe<GiftSetItem>>>;
  /** products in set */
  productSetItems?: Maybe<Array<Maybe<Product>>>;
  /** final price of primary ecommerce item */
  price?: Maybe<Scalars['Long']>;
  /** price at retail shop if visible */
  retailPrice?: Maybe<Scalars['Long']>;
  /** price at retail shop */
  retailPriceForcedVisibility?: Maybe<Scalars['Long']>;
  /** used to show retails price and volume of fragrances which has no e-commerce trading item */
  retailVolume?: Maybe<Volume>;
  /** volume of primary ecommerce item */
  volume?: Maybe<Volume>;
  /** perfume scent notes */
  notes?: Maybe<Array<Maybe<Note>>>;
  /** product promo media */
  media?: Maybe<Array<Maybe<ProductMedia>>>;
  /** makeup product promo media */
  makeupMedia?: Maybe<Array<Maybe<ProductMedia>>>;
  /** HERO product promo media */
  heroMedia?: Maybe<Array<Maybe<ProductMedia>>>;
  /** REVIEW_VIDEO product promo media */
  reviewVideo?: Maybe<Array<Maybe<ProductMedia>>>;
  /** total number of purchases */
  totalPurchases?: Maybe<Scalars['Long']>;
  /** all product labels */
  labels?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** product labels with images for user interface in requested image format */
  productLabels?: Maybe<Array<Maybe<ProductLabel>>>;
  /** For orders only: is this product of month */
  isFragranceOfTheMonth?: Maybe<Scalars['Boolean']>;
  /** For orders only: is this product surprise */
  isSurprise?: Maybe<Scalars['Boolean']>;
  /** For orders only: is this product added automatically */
  isAddedAutomatically?: Maybe<Scalars['Boolean']>;
  /** limited edition product */
  isLimitedEdition?: Maybe<Scalars['Boolean']>;
  /** gift set option to display text 'Includes one month of Scentbird Free' */
  includesTextVisible?: Maybe<Scalars['Boolean']>;
  /** is product in out of stock notification for user */
  isSubscribedToStockNotification?: Maybe<Scalars['Boolean']>;
  /** upcharge price value in cents */
  upchargePrice?: Maybe<Scalars['Int']>;
  /** product tags, eg 'Fresh', 'Uplifting', 'Feminine' */
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** product description sections, eg 'How to use', 'Ingredients', 'Disclaimer' */
  descriptionSections?: Maybe<Array<Maybe<ProductDescriptionSection>>>;
  /** meta */
  meta?: Maybe<ProductMeta>;
  /** tag types */
  tagTypes?: Maybe<Array<Maybe<TopRateTagAndCategory>>>;
  /** if no need to fetch all products and only need to get count. Array with 1 element with only one field 'count' will be returned instead of real products */
  count?: Maybe<Scalars['Long']>;
  /** all POM details if this product was product of month */
  productsOfMonth?: Maybe<Array<Maybe<ProductOfMonth>>>;
  /** status that shows how user has voted for given product in recommendations (like/dislike) */
  userVote?: Maybe<VoteStatus>;
  /** shows user choice why product likes on review */
  userLikes: Array<ProductUserFeeling>;
  /** shows user choice why product dislikes on review */
  userDislikes: Array<ProductUserFeeling>;
  shareEmailAgreement?: Maybe<ShareEmailAgreementGql>;
};


export type ProductReviewsArgs = {
  rating?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  excludeComplainedReviews?: Maybe<Scalars['Boolean']>;
  reviewId?: Maybe<Scalars['Long']>;
};


export type ProductProductLabelsArgs = {
  format?: Maybe<ProductLabelFormat>;
};

/** Product category type */
export type ProductCategoryTypeGql = 
  /** product flag bestseller is true */
  | 'bestsellers'
  /** product flag newArrival is true */
  | 'newarrivals'
  /** product flag tossIn is true */
  | 'tossin'
  /** product flag niche is true */
  | 'niche'
  /** product flag goldCollection is true */
  | 'gold_collection'
  /** product flag exclusive is true */
  | 'exclusive'
  /** products from database personal_recommendation, not shipped to user, not perfume of the month */
  | 'recommendations'
  /** special sorting of products */
  | 'featured'
  /** no special category */
  | 'default_category'
  /** products with PerfumeBottle trading item available */
  | 'full_bottle';

export type ProductDescriptionSection = {
  __typename?: 'ProductDescriptionSection';
  id: Scalars['String'];
  title: Scalars['String'];
  text?: Maybe<Scalars['String']>;
  /** free json metadata that is used to construct complex ui blocks (e.g. lab results with links) */
  data?: Maybe<Array<Maybe<Scalars['Map']>>>;
};

/** Product sorting type */
export type ProductFilterSorting = 
  | 'BRAND_NAME'
  | 'BRAND_NAME_ASC'
  | 'PICK_PAGE'
  | 'NAME'
  | 'NAME_ASC'
  | 'REVIEWS_RATING'
  | 'REVIEWS_RATING_ASC'
  | 'REVIEWS_COUNT'
  | 'REVIEWS_COUNT_ASC'
  | 'TOTAL_PURCHASES'
  | 'TOTAL_PURCHASES_ASC';

/** Product group type */
export type ProductGroup = 
  | 'Perfume'
  | 'BathBody'
  | 'PersonalCare'
  | 'HomeFragrance'
  | 'PerfumeCase'
  | 'FragranceStorageBox'
  | 'GiftSet'
  | 'CandleSet'
  | 'Makeup'
  | 'Bag'
  | 'ProductSet'
  | 'FlashSale'
  | 'GiftCard';

/** Product type */
export type ProductInfoType = 
  | 'Cream'
  | 'Scrub'
  | 'FaceWipes'
  | 'FaceWash'
  | 'Exfoliators'
  | 'Toner'
  | 'MakeupRemover'
  | 'Ampoules'
  | 'Peels'
  | 'Wellness'
  | 'CalmSootheSleep'
  | 'EnergyUpgrade'
  | 'GutHealth'
  | 'HairSkinNail'
  | 'ImmuneSupport'
  | 'WomensHealth'
  | 'Workout'
  | 'Serum'
  | 'BlemishAcneSolutions'
  | 'FaceMask'
  | 'SheetMask'
  | 'FaceMoisturizer'
  | 'FaceOil'
  | 'Mists'
  | 'EyeCreamsTreatments'
  | 'EyeMasks'
  | 'BodyWash'
  | 'BodyScrubs'
  | 'BodyMoisturizers'
  | 'Hand'
  | 'Face'
  | 'Eye'
  | 'Shaving'
  | 'SunCare'
  | 'LipBalm'
  | 'Candle'
  | 'CandleSet'
  | 'FacePrimer'
  | 'FaceConcealer'
  | 'FaceFoundation'
  | 'CheekBlush'
  | 'CheekBronzerAndContour'
  | 'CheekHighlight'
  | 'EyeLiner'
  | 'EyeMascara'
  | 'Eyebrow'
  | 'EyePrimer'
  | 'Eyeshadow'
  | 'LipLiner'
  | 'Lipstick'
  | 'Lipgloss'
  | 'Palette'
  | 'Brushes'
  | 'EauDeToilette'
  | 'EauDeParfum'
  | 'EauDeCologne'
  | 'ParfumOil'
  | 'BlendedEssence'
  | 'ExtraitDeParfum'
  | 'SolidFragrance'
  | 'BodyMist'
  | 'PerfumeCase'
  | 'GiftSet'
  | 'FlashSale'
  | 'ProductSet'
  | 'FragranceStorageBox'
  | 'Bag'
  | 'LipColor'
  | 'LipColorPencil'
  | 'LipCrayon'
  | 'LipPaint'
  | 'Deodorants'
  | 'GiftCard';

export type ProductLabel = {
  __typename?: 'ProductLabel';
  id: Scalars['String'];
  image?: Maybe<Scalars['String']>;
};

export type ProductLabelFormat = 
  | 'pdf'
  | 'svg'
  | 'png';

export type ProductMedia = {
  __typename?: 'ProductMedia';
  name?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  thumb: Scalars['String'];
  preview: Scalars['String'];
  bigImage?: Maybe<Scalars['String']>;
};

export type ProductMediaType = 
  | 'IMAGE'
  | 'YOUTUBE'
  | 'VIMEO'
  | 'MP4'
  | 'PDF';

export type ProductMeta = {
  __typename?: 'ProductMeta';
  title: Scalars['String'];
  description: Scalars['String'];
};

export type ProductOfMonth = {
  __typename?: 'ProductOfMonth';
  year?: Maybe<Scalars['Int']>;
  month?: Maybe<Scalars['Int']>;
  monthName?: Maybe<Scalars['String']>;
  product?: Maybe<Product>;
  details?: Maybe<ProductOfMonthDetailsGql>;
};

export type ProductOfMonthBrandGql = {
  __typename?: 'ProductOfMonthBrandGQL';
  /** Image link */
  logo?: Maybe<Scalars['String']>;
  /** Brand description. May contain primitive html tags */
  text?: Maybe<Scalars['String']>;
};

export type ProductOfMonthDetailsGql = {
  __typename?: 'ProductOfMonthDetailsGQL';
  /** Link to the image used as a background on the item card */
  image?: Maybe<Scalars['String']>;
  /** Quote of the month */
  quote?: Maybe<ProductOfMonthQuoteGql>;
  /** Brand description for the product of the month */
  brand?: Maybe<ProductOfMonthBrandGql>;
};

export type ProductOfMonthQuoteGql = {
  __typename?: 'ProductOfMonthQuoteGQL';
  text?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
};

export type ProductRating = {
  __typename?: 'ProductRating';
  /** product rating id */
  id: Scalars['Long'];
  /** product rating */
  rating: Scalars['Int'];
  /** date when product was rated */
  date?: Maybe<Scalars['DateTime']>;
  /** rated product */
  product: Product;
  /** user public profile */
  user: PublicProfileGql;
};

export type ProductRatingResponse = IGenericResponseGql & {
  __typename?: 'ProductRatingResponse';
  /** List of product ratings */
  ratings: Array<ProductRating>;
  errors?: Maybe<Array<Maybe<DisplayableGqlError>>>;
  result: Scalars['Boolean'];
};

export type ProductReviewGql = {
  __typename?: 'ProductReviewGQL';
  id: Scalars['Long'];
  rating: Scalars['Int'];
  date: Scalars['DateTime'];
  title?: Maybe<Scalars['String']>;
  text: Scalars['String'];
  productId: Scalars['Long'];
  product?: Maybe<Product>;
  helpful?: Maybe<HelpfulGql>;
  tags?: Maybe<Array<Maybe<PerfumeTag>>>;
  ageCategory?: Maybe<Scalars['String']>;
  skinType?: Maybe<Scalars['String']>;
  user?: Maybe<PublicProfileGql>;
  replies?: Maybe<Array<Maybe<ProductReviewReplyGql>>>;
  userLikes: Array<ProductUserFeeling>;
  userDislikes: Array<ProductUserFeeling>;
};

export type ProductReviewReplyGql = {
  __typename?: 'ProductReviewReplyGQL';
  id?: Maybe<Scalars['Long']>;
  user?: Maybe<PublicProfileGql>;
  date?: Maybe<Scalars['DateTime']>;
  text?: Maybe<Scalars['String']>;
  helpful?: Maybe<HelpfulGql>;
};

export type ProductSectionGql = {
  __typename?: 'ProductSectionGQL';
  section: Scalars['String'];
  products?: Maybe<Array<Maybe<Product>>>;
};

export type ProductSort = {
  __typename?: 'ProductSort';
  id: Scalars['String'];
  title?: Maybe<Scalars['String']>;
};

export type ProductSource = 
  | 'BESTSELLERS'
  | 'NICHE';

export type ProductType = {
  __typename?: 'ProductType';
  id: Scalars['String'];
  name: Scalars['String'];
  group: Scalars['String'];
};

export type ProductUserFeeling = {
  __typename?: 'ProductUserFeeling';
  id: Scalars['String'];
  name: Scalars['String'];
};

/** Visibility of product */
export type ProductVisibility = 
  | 'VISIBLE'
  | 'LANDING'
  | 'INVISIBLE'
  | 'OUT_OF_STOCK';

/** Product feed page. Controls order of products in result. First will be shown products from the feed, then others, no matter what is sorting. Each feed is controlled from Admin site. */
export type ProductsFeedPage = 
  | 'BESTSELLERS_MAIN'
  | 'MAKEUP_MAIN'
  | 'SCENTBIRD_PRODUCTS_MAIN'
  | 'BESTSELLERS'
  | 'ALL_PERFUMES'
  | 'NEW_ARRIVALS'
  | 'NICHE'
  | 'SCENTBIRD_PRODUCTS'
  | 'MAKEUP_FACE'
  | 'MAKEUP_CHEEK'
  | 'MAKEUP_LIP'
  | 'MAKEUP_EYE'
  | 'MAKEUP_PALETTES'
  | 'MAKEUP_TOOLS'
  | 'BODY_WASHES'
  | 'LIP_BALMS'
  | 'CANDLES'
  | 'CLEANSERS'
  | 'TONER'
  | 'TREATMENTS'
  | 'MASKS'
  | 'MOISTURIZERS'
  | 'EYE'
  | 'LIP'
  | 'BODY'
  | 'MENS'
  | 'SUN_CARE'
  | 'SKINCARE'
  | 'PICK_ORDER'
  | 'PICK_ORDER_BRAND_PARTNERS'
  | 'PICK_ORDER_SWEATCOIN'
  | 'PICK_ORDER_ORGFLOW_SWEATCOIN'
  /** https://scentbird.atlassian.net/browse/SB-2221 */
  | 'SEASONAL_TRENDING'
  | 'SEASONAL_TRENDING_WINTER'
  | 'SEASONAL_TRENDING_SPRING'
  | 'SEASONAL_TRENDING_SUMMER'
  | 'SEASONAL_TRENDING_FALL'
  | 'PICK_ORDER_INFLUENCER';

export type ProductsInput = {
  /** filter by id */
  id?: Maybe<Array<Maybe<Scalars['Long']>>>;
  /** Product category. Default value is `default_category`. */
  category?: Maybe<ProductCategoryTypeGql>;
  /** Special product category. */
  specialCategories?: Maybe<Array<Maybe<SpecialCategoryTypeGql>>>;
  /** List of product groups. Default value is [Perfume, BathBody, PersonalCare, HomeFragrance, Makeup, GiftSet] */
  groups?: Maybe<Array<Maybe<ProductGroup>>>;
  /** Product type */
  types?: Maybe<Array<Maybe<ProductInfoType>>>;
  /** User gender ender type. Affects sorting with productsFeed field. */
  gender?: Maybe<UserGenderGql>;
  /** Search by product id. */
  includeProducts?: Maybe<Array<Maybe<Scalars['Long']>>>;
  /** Visibility of product. */
  visibility?: Maybe<Array<Maybe<ProductVisibility>>>;
  /** Search by zodiac types. */
  zodiacs?: Maybe<Array<Maybe<Zodiac>>>;
  /** Single brand filter. See also brands filter. */
  brand?: Maybe<Scalars['String']>;
  /** List of brands filter. See also brand filter. */
  brands?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Tag ids list filter. */
  tags?: Maybe<Array<Maybe<Scalars['Long']>>>;
  /** Tag names list filter. */
  tagNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Note slugs list filter. */
  notes?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** Rating filter 0 - 5. */
  rating?: Maybe<Scalars['Float']>;
  /** Filter products for subscription queue. This products has available subscription trading items and not Out of Stock for LEP. */
  availableForQueue?: Maybe<Scalars['Boolean']>;
  /** If true - hide Upcharge products. False by default */
  hideUpchargeProducts?: Maybe<Scalars['Boolean']>;
  /** Sorting of result. Product feed page is predefined order factor */
  productsFeed?: Maybe<ProductsFeedPage>;
  /** include only products from productsFeed */
  exactProductsFeedMatch?: Maybe<Scalars['Boolean']>;
  /** Sorting of result - deprecated. */
  sort?: Maybe<ProductFilterSorting>;
  /** Sorting of result by list of criterias. */
  sorts?: Maybe<Array<Maybe<ProductFilterSorting>>>;
  /** Result number limit. Default value is 99999. */
  limit?: Maybe<Scalars['Long']>;
  /** Result offset. */
  offset?: Maybe<Scalars['Long']>;
  /** do not show LEP products if available count less then asked. Works only together with availableForQueue = true */
  minimumLepAvailable?: Maybe<Scalars['Long']>;
  /** Do not show all LEP products. */
  hideLimitedEdition?: Maybe<Scalars['Boolean']>;
  /** greater or equals product's retailValue, cents */
  minimumRetailValue?: Maybe<Scalars['Long']>;
  /** less or equals product's retailValue, cents */
  maximumRetailValue?: Maybe<Scalars['Long']>;
};

export type ProfileGql = {
  __typename?: 'ProfileGQL';
  /** internal user id */
  id: Scalars['Long'];
  /** personal code for referral program */
  personalCode: Scalars['String'];
  /** date of birth */
  birthday?: Maybe<Scalars['String']>;
  /** user email */
  email: Scalars['String'];
  /** user first name */
  firstName: Scalars['String'];
  /** user last name */
  lastName: Scalars['String'];
  /** user gender [male, female] */
  gender: Scalars['String'];
  /** link to avatar image */
  avatar?: Maybe<Scalars['String']>;
  /** date of account created */
  registrationDate: Scalars['DateTime'];
  /** date of first subscription */
  firstSubscriptionDate?: Maybe<Scalars['DateTime']>;
  /** day count from first subscription date */
  daysFromFirstSubscription?: Maybe<Scalars['Int']>;
  /** Google Analytics tag */
  gaClientUid?: Maybe<Scalars['String']>;
  /** Mixpanel Analytics tag */
  mixpanelClientUid?: Maybe<Scalars['String']>;
  /** has active gifted subscription for user */
  hasGift: Scalars['Boolean'];
  /** any premium products in user queue for the first month */
  hasLimitedEditionProductInFirstMonth: Scalars['Boolean'];
  /** subscription status is Unpaid (deprecated, use subscription status) */
  subUnpaid: Scalars['Boolean'];
  /** is active marketing coupon for user */
  hasMarketingCoupon: Scalars['Boolean'];
  /** is crawler bot by user agent */
  isCrawler: Scalars['Boolean'];
  /** current payment method (creditCard, payPal, applePay, amazonPay) */
  paymentOption: Scalars['String'];
  /** payment status (STANDARD, FREE) */
  paymentStatus?: Maybe<Scalars['String']>;
  /** is user has valid payment */
  hasPaymentData: Scalars['Boolean'];
  /** primary payment method details */
  payment?: Maybe<PaymentMethodGql>;
  /** primary payment method details */
  paymentMethods?: Maybe<Array<Maybe<PaymentMethodGql>>>;
  /** user balance */
  balance: Scalars['Int'];
  /**
   * deprecated - use finishedQuiz
   * @deprecated use finishedQuiz
   */
  hasFinishedQuiz: Scalars['Boolean'];
  /** data of quiz answers */
  finishedQuiz: Scalars['Map'];
  /** Facebook pixel tag */
  fbPixelProperties: FbPixelPropertiesGql;
  /** authentication session id */
  sessionId: Scalars['String'];
  /** user credits */
  credits: UserCreditsGql;
  /** update gender for FB/Google users from subscription/begin */
  needUpdateGender: Scalars['Boolean'];
  /** primary billing address */
  billing?: Maybe<AddressGql>;
  /** primary shipping address */
  shipping?: Maybe<AddressGql>;
  /** user address book for shipment */
  shippingAddresses?: Maybe<Array<Maybe<AddressGql>>>;
  /** customer can choose age category in the review flow, eg '17 or under', '18 to 24', etc */
  ageCategory?: Maybe<Scalars['String']>;
  /** customer can choose skin type in the review flow, [Normal, Dry, Oily, Combination, Sensitive] */
  skinType?: Maybe<Scalars['String']>;
  /** value of timezone_offset cookie */
  timezone?: Maybe<Scalars['Int']>;
  /** LTN token for direct authorization */
  tokenLtn?: Maybe<Scalars['String']>;
  /** Survey results */
  surveyResults: Scalars['Map'];
  /** indicate user can open tossin page and get products with tossin prices */
  canApplyTossInOffer?: Maybe<Scalars['Boolean']>;
  /** selected product categories on onboarding page */
  onboardingProductCategories?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** flag shows user select don't sell his personal info */
  doNotSellMyPersonalInfo: Scalars['Boolean'];
  /** Profile stats */
  stats?: Maybe<ProfileStatGql>;
  /** utm and other marketing data */
  marketing?: Maybe<Marketing>;
  /** User reviews */
  productReviews: Array<ProductReviewGql>;
  /** lifetime user status */
  lifetimeStatus?: Maybe<UserLifetimeStatus>;
};

export type ProfileStatGql = {
  __typename?: 'ProfileStatGQL';
  orders?: Maybe<Scalars['Long']>;
  queue?: Maybe<Scalars['Long']>;
  reviews?: Maybe<Scalars['Long']>;
  voteUpTotal?: Maybe<Scalars['Long']>;
  voteDownTotal?: Maybe<Scalars['Long']>;
  ratedProducts?: Maybe<Scalars['Long']>;
};

export type PublicProfileGql = {
  __typename?: 'PublicProfileGQL';
  /** internal id */
  id?: Maybe<Scalars['Long']>;
  /** personal code for referral program */
  personalCode?: Maybe<Scalars['String']>;
  /** user first name */
  firstName?: Maybe<Scalars['String']>;
  /** user last name */
  lastName?: Maybe<Scalars['String']>;
  /** user gender [male, female] */
  gender?: Maybe<Scalars['String']>;
  /** link to avatar image */
  avatar?: Maybe<Scalars['String']>;
  /** public profile url */
  url?: Maybe<Scalars['String']>;
  /** date of account created */
  registrationDate?: Maybe<Scalars['DateTime']>;
  /** status of subscription */
  subscriptionStatus?: Maybe<ScentbirdSubscriptionStatus>;
  /** deprecated: user { users { me { stats } } } */
  stats?: Maybe<ProfileStatGql>;
  /** User reviews */
  productReviews: Array<ProductReviewGql>;
};

export type Query = {
  __typename?: 'Query';
  /** Fetches ab tests data */
  abTests?: Maybe<Array<Maybe<AbTestGql>>>;
  amazonUserProfile: AmazonUserProfileResponseGql;
  /** List variants of address by query in two-steps address suggestion. Gives variants with place ids for taking address details in autocompleteAddressDetails query. */
  autocompleteAddress?: Maybe<AutocompleteAddressResponse>;
  /** Take address details by suggestion variant from autocompleteAddress query in two-steps address suggestion. */
  autocompleteAddressDetails?: Maybe<AutocompleteAddressDetailsResponse>;
  banners: Array<BannerGql>;
  /** get Scentbird blog posts */
  blogPosts: BlogPostsResponse;
  /** get brand by slug */
  brandBySlug?: Maybe<Brand>;
  /** get brands */
  brands?: Maybe<Array<Maybe<Brand>>>;
  catalogue?: Maybe<CatalogueGql>;
  /**
   * Get collection by slug
   * Returns collections in ACTIVE and TESTING status
   */
  collection?: Maybe<CollectionGql>;
  collections?: Maybe<Array<Maybe<CollectionGql>>>;
  /** Fetches config */
  config: ConfigGql;
  /** returns info about current skip, nul if no active skip */
  currentSkip?: Maybe<SkipMonthGql>;
  customLanding?: Maybe<LandingPageGql>;
  /**
   * Return discount code information
   * should be in mutation section, as it applies code to discout session
   */
  discountCode: DiscountCodeResponseGql;
  /** SB-1735 Fetches dislikes information */
  dislikes: Array<ProductUserFeeling>;
  /** Desktop menu dropdown */
  dropdownMenuOptions?: Maybe<DropdownMenuGql>;
  emailLanding?: Maybe<EmailLanding>;
  /** Fetches features */
  features?: Maybe<Array<Maybe<FeatureGql>>>;
  /** Fetches filter tags data */
  filterTags: FilterTagsGql;
  /** get current flashsale */
  flashSale?: Maybe<FlashSaleGql>;
  /** get flash sale list (respecting genders) */
  flashSaleList?: Maybe<Array<Maybe<FlashSaleGql>>>;
  fragranticaBrands: Array<Brand>;
  fragranticaProducts: Array<FragranticaProduct>;
  /**
   * Available subscription frequencies
   * provide fallbackPlan, if you want to get avaliable frequencies for non-subscribed user
   */
  frequencies: FrequenciesResponseGql;
  /** get all brands */
  getAllBrandsAndPerfumeNames?: Maybe<Scalars['Map']>;
  /** current user cart */
  getCart?: Maybe<Scalars['Map']>;
  /** get product groups for makeup landing */
  getMakeupLandingProducts?: Maybe<Array<Maybe<LandingCardGql>>>;
  /** List of recommendation blocks by category for product */
  getRecommendations: Array<Maybe<RecommendationCategory>>;
  /** returns info about popup already shown to user */
  getShownPopups?: Maybe<Scalars['Map']>;
  /** subscription status */
  getSubscription?: Maybe<ScentbirdSubscription>;
  /** Fetches gift subscription progress info */
  giftSubscription: GiftSubscriptionStateGql;
  google: Google;
  /** User rates at incubator pages */
  incubatorProductRating?: Maybe<Array<Maybe<IncubatorProductRatingGql>>>;
  /** SB-1735 Fetches likes information */
  likes: Array<ProductUserFeeling>;
  makeupBySection?: Maybe<Array<Maybe<ProductSectionGql>>>;
  /** Mobile landing screen grid */
  mobileLandingGrid: MobileLandingGridResponse;
  mostPopularNotes: MostPopularNotesResponse;
  /**
   * get Note
   * Deprecated
   * `noteSlug` is name in lower case with hyphen-separated words (example `Amber Ale` -> `amber-ale`)note(noteId: Long, noteSlug: String): Note
   */
  note?: Maybe<Note>;
  /** get Note by given id */
  noteById?: Maybe<Note>;
  /**
   * get Note by given slug
   * `noteSlug` is name in lower case with hyphen-separated words (example 'Amber Ale' -> 'amber-ale')note(noteId: Long, noteSlug: String): Note
   */
  noteBySlug?: Maybe<Note>;
  /** get Notes */
  notes?: Maybe<Array<Maybe<Note>>>;
  /** get user's ecommerce orders */
  orders?: Maybe<Array<Maybe<EcommerceOrderGql>>>;
  payAndShipAmazonUserProfile: AmazonUserProfileResponseGql;
  /** returns list of pending (undelivered) subscription orders with tracking numbers */
  pendingSubscriptionOrders?: Maybe<SubscriptionOrdersGql>;
  /** returns data about offer perfume case with upcharge every month */
  perfumeCaseOfMonth?: Maybe<PerfumeCaseOfMonthGql>;
  /** alias for products GQL to prevent failing cached queries for mobile browsers. Do not use in new code, remove after a while */
  perfumes?: Maybe<Array<Maybe<Product>>>;
  perfumesByBrands?: Maybe<Array<Maybe<BrandAndTitles>>>;
  /** get plans for user */
  plans?: Maybe<Array<Maybe<Plan>>>;
  /** get plans with given parameters */
  plansQuery?: Maybe<Array<Maybe<Plan>>>;
  /** Inquiry price for subscription and cart */
  priceInquiry?: Maybe<PriceInquiryGql>;
  /** get product by id */
  product?: Maybe<Product>;
  /** product reviews */
  productReviews?: Maybe<Array<Maybe<ProductReviewGql>>>;
  /** product types */
  productTypes?: Maybe<Array<Maybe<ProductType>>>;
  /** get products with flexible dynamic filter */
  products?: Maybe<Array<Maybe<Product>>>;
  /** Products of month timeline */
  productsOfMonth?: Maybe<Array<Maybe<ProductOfMonth>>>;
  /** Public profile: returns list of received products */
  productsReceived?: Maybe<Array<Maybe<Product>>>;
  /** current user profile */
  profile?: Maybe<ProfileGql>;
  /** returns list of subscription orders with tracking numbers */
  profileShipments?: Maybe<Array<Maybe<SubscriptionOrderGql>>>;
  /**
   * Public profile: profile stats and counters like reviews count, orders count, queue size and so on
   * deprecated: use { users { me { stats } } }
   */
  profileStat?: Maybe<ProfileStatGql>;
  /** Public profile: current user profile or public profile by given userId/personalCode */
  publicProfile?: Maybe<PublicProfileGql>;
  /** Public profile: current user subscription queue */
  queue?: Maybe<Queue>;
  /**
   * Deprecated. Use `recommendationsBySource` with `RecommendationSourceType.QUIZ`
   * Recomendations for quiz.
   */
  quizRecommendations?: Maybe<Array<Maybe<Product>>>;
  /** Public profile: rated products */
  ratedProducts: ProductRatingResponse;
  /**
   * Recommendations by request by specific category from `RecommendationCategories`
   * Other recomendations at `recommendationsBySource` query
   */
  recommendationsByCategories: RecommendationCategories;
  /** Recommendations based on input provided */
  recommendationsBySource: RecommendationSource;
  /**
   * Deprecated. Use `recommendationsByCategories.emptyProduct`
   * Recomendations without product
   */
  recommendationsEmptyProduct?: Maybe<Array<Maybe<RecommendationItem>>>;
  /** returns marketing coupon info */
  redeemCoupon: MarketingCouponGql;
  /** if user state is pending repick products - fetch list of products need to repic */
  repickProducts?: Maybe<NotAvailableProductsOnPickResponseGql>;
  /** Get product catalogue by name and type */
  rootCatalogue?: Maybe<CatalogueGql>;
  /** Search of products and autocomplete suggestions */
  search?: Maybe<SearchResponseGql>;
  /** Get custom seo data by given url */
  seoData: SeoDataGql;
  /** Get product statistics and recommendations by given state */
  stateRecommendations?: Maybe<Array<Maybe<RecommendationItem>>>;
  subscription?: Maybe<ScentbirdSubscription>;
  /** subscription session information by id, or latest session if id is not specified. */
  subscriptionSession?: Maybe<SubscriptionSessionGql>;
  /** Fetches tokens */
  tokens?: Maybe<Array<Maybe<TokenGql>>>;
  /** tossin product groups for tossin page */
  tossinProducts: TossinProductsResponseGql;
  unsubscribeReasons?: Maybe<Array<Maybe<UnsubscribeReason>>>;
  /** Inquiry subscription update */
  updateInquiry: UpdateInquiryResponseGql;
  /** Fetches user data */
  user: UserGql;
  /** Public profile: user reviews */
  userReviews?: Maybe<Array<Maybe<UserReviewGql>>>;
  /** Get vacancies */
  vacancies?: Maybe<Array<Maybe<VacancyGql>>>;
  /** Validate address */
  validateAddress?: Maybe<ValidateAddressResponseGql>;
  validateSpecialCaseToken?: Maybe<SpecialCaseValidate>;
};


export type QueryAbTestsArgs = {
  sessionId?: Maybe<Scalars['String']>;
};


export type QueryAmazonUserProfileArgs = {
  amazonPayBillingAgreementId: Scalars['String'];
  accessToken: Scalars['String'];
};


export type QueryAutocompleteAddressArgs = {
  input: SuggestAddressInput;
};


export type QueryAutocompleteAddressDetailsArgs = {
  input: AutocompleteAddressDetailsInput;
};


export type QueryBannersArgs = {
  input: BannersInput;
};


export type QueryBlogPostsArgs = {
  input?: Maybe<BlogPostsInput>;
};


export type QueryBrandBySlugArgs = {
  slug: Scalars['String'];
};


export type QueryBrandsArgs = {
  input?: Maybe<BrandsInput>;
  category?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  noteSlug?: Maybe<Scalars['String']>;
  groups?: Maybe<Array<Maybe<Scalars['String']>>>;
  types?: Maybe<Array<Maybe<Scalars['String']>>>;
  availableForQueue?: Maybe<Scalars['Boolean']>;
  hideEmptyBrands?: Maybe<Scalars['Boolean']>;
};


export type QueryCatalogueArgs = {
  id: Scalars['Long'];
};


export type QueryCollectionArgs = {
  slug: Scalars['String'];
  gender?: Maybe<Scalars['String']>;
  smallCollection?: Maybe<Scalars['Boolean']>;
};


export type QueryCollectionsArgs = {
  count?: Maybe<Scalars['Int']>;
  gender: Scalars['String'];
  collectionType?: Maybe<Scalars['String']>;
  smallCollection?: Maybe<Scalars['Boolean']>;
};


export type QueryCustomLandingArgs = {
  pathname: Scalars['String'];
};


export type QueryDiscountCodeArgs = {
  code?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  plan?: Maybe<Scalars['String']>;
  forceLowerValue?: Maybe<Scalars['Boolean']>;
  fromUser?: Maybe<Scalars['Boolean']>;
  withoutApply?: Maybe<Scalars['Boolean']>;
};


export type QueryDropdownMenuOptionsArgs = {
  gender: Scalars['String'];
};


export type QueryEmailLandingArgs = {
  pathname: Scalars['String'];
};


export type QueryFragranticaBrandsArgs = {
  input: FragranticaBrandsSearchInput;
};


export type QueryFragranticaProductsArgs = {
  input: FragranticaProductsSearchInput;
};


export type QueryFrequenciesArgs = {
  fallbackPlan?: Maybe<Scalars['String']>;
};


export type QueryGetRecommendationsArgs = {
  productId: Scalars['Long'];
};


export type QueryIncubatorProductRatingArgs = {
  collection: Scalars['String'];
};


export type QueryMakeupBySectionArgs = {
  gender?: Maybe<Scalars['String']>;
  brands?: Maybe<Array<Maybe<Scalars['String']>>>;
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  types?: Maybe<Array<Maybe<Scalars['String']>>>;
};


export type QueryMobileLandingGridArgs = {
  input: MobileLandingGridInput;
};


export type QueryMostPopularNotesArgs = {
  input: MostPopularNotesInput;
};


export type QueryNoteArgs = {
  noteId?: Maybe<Scalars['Long']>;
  noteSlug?: Maybe<Scalars['String']>;
};


export type QueryNoteByIdArgs = {
  noteId: Scalars['Long'];
};


export type QueryNoteBySlugArgs = {
  noteSlug: Scalars['String'];
};


export type QueryNotesArgs = {
  active?: Maybe<Scalars['Boolean']>;
  searchable?: Maybe<Scalars['Boolean']>;
  published?: Maybe<Scalars['Boolean']>;
  gender?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Long']>;
};


export type QueryOrdersArgs = {
  orderId?: Maybe<Scalars['Long']>;
};


export type QueryPayAndShipAmazonUserProfileArgs = {
  amazonCheckoutSessionId: Scalars['String'];
};


export type QueryPerfumesArgs = {
  gender?: Maybe<Scalars['String']>;
  brands?: Maybe<Array<Maybe<Scalars['String']>>>;
  tags?: Maybe<Array<Maybe<Scalars['Long']>>>;
  notes?: Maybe<Array<Maybe<Scalars['String']>>>;
  rating?: Maybe<Scalars['Int']>;
  visibility?: Maybe<Array<Maybe<Scalars['String']>>>;
  category?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Long']>;
  offset?: Maybe<Scalars['Long']>;
};


export type QueryPerfumesByBrandsArgs = {
  gender?: Maybe<Scalars['String']>;
};


export type QueryPlansQueryArgs = {
  input?: Maybe<PlansQueryInput>;
  products?: Maybe<Scalars['Int']>;
  billing?: Maybe<Scalars['Int']>;
  shipping?: Maybe<Scalars['Int']>;
};


export type QueryPriceInquiryArgs = {
  input?: Maybe<PriceInquiryInput>;
};


export type QueryProductArgs = {
  id?: Maybe<Scalars['Long']>;
  slug?: Maybe<Scalars['String']>;
  visibility?: Maybe<Array<Maybe<ProductVisibility>>>;
};


export type QueryProductReviewsArgs = {
  brand: Scalars['String'];
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
};


export type QueryProductTypesArgs = {
  kind?: Maybe<Array<Maybe<Scalars['String']>>>;
  gender?: Maybe<Scalars['String']>;
};


export type QueryProductsArgs = {
  input?: Maybe<ProductsInput>;
  category?: Maybe<Scalars['String']>;
  groups?: Maybe<Array<Maybe<Scalars['String']>>>;
  types?: Maybe<Array<Maybe<Scalars['String']>>>;
  gender?: Maybe<Scalars['String']>;
  brand?: Maybe<Scalars['String']>;
  includeProducts?: Maybe<Array<Maybe<Scalars['Long']>>>;
  specialCategories?: Maybe<Array<Maybe<Scalars['String']>>>;
  visibility?: Maybe<Array<Maybe<Scalars['String']>>>;
  zodiacs?: Maybe<Array<Maybe<Scalars['String']>>>;
  brands?: Maybe<Array<Maybe<Scalars['String']>>>;
  tags?: Maybe<Array<Maybe<Scalars['Long']>>>;
  tagNames?: Maybe<Array<Maybe<Scalars['String']>>>;
  notes?: Maybe<Array<Maybe<Scalars['String']>>>;
  rating?: Maybe<Scalars['Float']>;
  availableForQueue?: Maybe<Scalars['Boolean']>;
  productsFeed?: Maybe<Scalars['String']>;
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Long']>;
  offset?: Maybe<Scalars['Long']>;
  hideUpchargeProducts?: Maybe<Scalars['Boolean']>;
  minimumLepAvailable?: Maybe<Scalars['Long']>;
};


export type QueryProductsOfMonthArgs = {
  groupId: Scalars['String'];
  yearMonth?: Maybe<Scalars['YearMonth']>;
  count?: Maybe<Scalars['Int']>;
};


export type QueryProductsReceivedArgs = {
  userId?: Maybe<Scalars['Long']>;
  personalCode?: Maybe<Scalars['String']>;
};


export type QueryProfileShipmentsArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryProfileStatArgs = {
  userId?: Maybe<Scalars['Long']>;
  personalCode?: Maybe<Scalars['String']>;
};


export type QueryPublicProfileArgs = {
  userId?: Maybe<Scalars['Long']>;
  personalCode?: Maybe<Scalars['String']>;
};


export type QueryQueueArgs = {
  userId?: Maybe<Scalars['Long']>;
  personalCode?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  plan?: Maybe<Scalars['String']>;
};


export type QueryQuizRecommendationsArgs = {
  input?: Maybe<QuizRecommendationsInput>;
};


export type QueryRatedProductsArgs = {
  userId?: Maybe<Scalars['Long']>;
  personalCode?: Maybe<Scalars['String']>;
};


export type QueryRecommendationsByCategoriesArgs = {
  productId?: Maybe<Scalars['Long']>;
};


export type QueryRecommendationsBySourceArgs = {
  input: RecommendationSourceInput;
};


export type QueryRecommendationsEmptyProductArgs = {
  limit?: Maybe<Scalars['Int']>;
  trivialPopularity?: Maybe<Scalars['Boolean']>;
};


export type QueryRootCatalogueArgs = {
  appType?: Maybe<AppType>;
  treeName?: Maybe<Scalars['String']>;
};


export type QuerySearchArgs = {
  input: SearchInput;
};


export type QuerySeoDataArgs = {
  url: Scalars['String'];
};


export type QueryStateRecommendationsArgs = {
  stateName: Scalars['String'];
  limit?: Maybe<Scalars['Long']>;
  offset?: Maybe<Scalars['Long']>;
  gender?: Maybe<Scalars['String']>;
};


export type QuerySubscriptionSessionArgs = {
  id?: Maybe<Scalars['Long']>;
};


export type QueryTossinProductsArgs = {
  input?: Maybe<TossinProductGroupInputGql>;
};


export type QueryUnsubscribeReasonsArgs = {
  quickFlow?: Maybe<Scalars['Boolean']>;
};


export type QueryUpdateInquiryArgs = {
  input: UpdateInquiryInput;
};


export type QueryUserReviewsArgs = {
  userId?: Maybe<Scalars['Long']>;
  personalCode?: Maybe<Scalars['String']>;
};


export type QueryValidateAddressArgs = {
  input: AddressInput;
};


export type QueryValidateSpecialCaseTokenArgs = {
  code?: Maybe<Scalars['String']>;
};

export type Queue = {
  __typename?: 'Queue';
  items?: Maybe<Array<Maybe<QueueItem>>>;
  recommendationTag?: Maybe<Tag>;
};

export type QueueItem = {
  __typename?: 'QueueItem';
  year: Scalars['Int'];
  month: Scalars['Int'];
  tracking?: Maybe<Tracking>;
  /** user friendly combined order or shipment status */
  orderStatus?: Maybe<Scalars['String']>;
  status: Array<Maybe<QueueProductStatus>>;
  statusName: Array<Maybe<Scalars['String']>>;
  products: Array<Maybe<QueueProduct>>;
  /** Month price considering coupons, free months etc */
  monthPrice?: Maybe<Scalars['Long']>;
  /** Is month paid or not for cancelled subscription */
  canceled?: Maybe<Scalars['Boolean']>;
  /** Is month paid by credits beforehand. False if there are some upcharge products. */
  paid?: Maybe<Scalars['Boolean']>;
  /** Month price same to monthPrice, but considering paid credits */
  monthPriceWithPaid?: Maybe<Scalars['Long']>;
};

export type QueueProduct = {
  __typename?: 'QueueProduct';
  id: Scalars['Long'];
  name: Scalars['String'];
  image: Scalars['String'];
  brand: Scalars['String'];
  typeGroup: Scalars['String'];
  isLimitedEdition: Scalars['Boolean'];
  upchargePrice?: Maybe<Scalars['Int']>;
  queueItemId?: Maybe<Scalars['Long']>;
  index: Scalars['Int'];
  category?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  priceWithBuyToQueueDiscount?: Maybe<Scalars['Int']>;
};

export type QueueProductStatus = 
  /** Order shipped. Has product, can`t move, can`t delete. */
  | 'STATUS_SHIPPED'
  /** Hasnt product, always empty, user skipping month. Can`t move, can`t delete. */
  | 'STATUS_SKIPPED'
  /** Empty or has product, can move, can delete. */
  | 'STATUS_FREE'
  /** Empty or has product, can move, can delete. */
  | 'STATUS_FREE_COUPON'
  /** Empty or has product, can move, can delete. */
  | 'STATUS_FREE_GIFT'
  /** Empty or has product, can move, can delete. */
  | 'STATUS_FREE_FOR_REFERRAL'
  /** Empty or has product, can move, can delete. */
  | 'STATUS_FREE_FOR_REFEREE'
  /** Has product, can move, can delete. */
  | 'STATUS_PRODUCT'
  /** Out of stock limited edition product (lep) */
  | 'STATUS_UNAVAILABLE'
  /** Has product, can move, can delete. */
  | 'STATUS_PAUSED'
  /** Pre order state. Has product, can`t move, can`t delete. */
  | 'STATUS_LOCKED'
  /** Empty. No product, queue cell empty */
  | 'STATUS_EMPTY';

export type QuizRecommendationGroup = RecommendationGroup & {
  __typename?: 'QuizRecommendationGroup';
  /** source of recommendation */
  source: RecommendationSourceType;
  /**
   * name of recommender algorithm for analytics
   * pass it to `UserActionMetadata.recommenderName`
   */
  recommenderName?: Maybe<Scalars['String']>;
  /** recommended products */
  products: Array<Product>;
};

export type QuizRecommendationSource = RecommendationSource & {
  __typename?: 'QuizRecommendationSource';
  /** source of recommendation */
  sourceType: RecommendationSourceType;
  /** groups of recommendation */
  groups: Array<QuizRecommendationGroup>;
  /** recommendations count */
  recommendationsCount: Scalars['Int'];
  /** is quiz finished */
  quizFinished: Scalars['Boolean'];
};

export type QuizRecommendationsInput = {
  quizType: QuizType;
};

export type QuizType = 
  | 'ONBOARDING'
  | 'SUBSCRIPTION'
  | 'RECOMMENDATIONS'
  | 'ACQUISITION';

export type RateProductInput = {
  productId: Scalars['Long'];
  rating: Scalars['Int'];
};

/** Landing block: products to rate */
export type RateProductsMobileLandingBlock = IMobileLandingBlock & {
  __typename?: 'RateProductsMobileLandingBlock';
  /** Catalog item id or block type if default structure */
  id: Scalars['String'];
  /** Block type. Please note, that values of this type will be extended in future. */
  block: MobileLandingBlocksType;
  /** item title */
  title: Scalars['String'];
  /** list of products */
  rateProducts?: Maybe<Array<Maybe<Product>>>;
};

export type RateReplyInput = {
  replyId?: Maybe<Scalars['Long']>;
  isUseful?: Maybe<Scalars['Boolean']>;
};

export type RateReviewInput = {
  reviewId?: Maybe<Scalars['Long']>;
  isUseful?: Maybe<Scalars['Boolean']>;
};

export type RateTagInput = {
  /** Review id */
  reviewId: Scalars['Long'];
  /** List of tag ids */
  tagIds?: Maybe<Array<Maybe<Scalars['Long']>>>;
};

export type RateTagResponseGql = IGenericResponseGql & {
  __typename?: 'RateTagResponseGQL';
  /** tag types */
  tagTypes?: Maybe<Array<Maybe<TopRateTagAndCategory>>>;
  /** review product */
  product?: Maybe<Product>;
  /** true if successfull */
  result: Scalars['Boolean'];
  /** list of errors */
  errors?: Maybe<Array<Maybe<DisplayableGqlError>>>;
};

export type RatedRecommendationGroup = RecommendationGroup & {
  __typename?: 'RatedRecommendationGroup';
  /** source of recommendation */
  source: RecommendationSourceType;
  /**
   * name of recommender algorithm for analytics
   * pass it to `UserActionMetadata.recommenderName`
   */
  recommenderName?: Maybe<Scalars['String']>;
  /** recommended products */
  products: Array<Product>;
  /** reason product */
  reason?: Maybe<Product>;
};

export type RatedRecommendationSource = RecommendationSource & {
  __typename?: 'RatedRecommendationSource';
  /** source of recommendation */
  sourceType: RecommendationSourceType;
  /** groups of recommendation */
  groups: Array<RatedRecommendationGroup>;
  /** recommendations count */
  recommendationsCount: Scalars['Int'];
};

/** Counters of product rating */
export type RatingGql = {
  __typename?: 'RatingGQL';
  /** Average rating mark */
  avgRate?: Maybe<Scalars['Float']>;
  /** Amount of marks */
  count?: Maybe<Scalars['Long']>;
  /** Amounts of marks grouped by value (from 1 star to 5 stars) */
  distribution?: Maybe<Scalars['Map']>;
  /**
   * List of amounts of marks grouped by value (from 1 star to 5 stars)
   * Same as distribution
   */
  distributionList?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type RecommendationCategories = {
  __typename?: 'RecommendationCategories';
  /** filterFromSameGroup: fake-“random” products from similar product types (Cream\Scrub\ShowerGel\...) and categories (Perfume\BathBody\PersonalCare\...) */
  similar?: Maybe<RecommendationCategory>;
  /** filterSameNotes: products with the same notes (Chinotto\Marine\Piña Colada\...) */
  sameNote?: Maybe<RecommendationCategory>;
  /** filterSameBrand: products from the same brand, except for the current product */
  sameBrand?: Maybe<RecommendationCategory>;
  /** filterSameTags: products with the same tags (Fresh\Uplifting\Feminine\...) */
  sameTag?: Maybe<RecommendationCategory>;
  /** recomendations without product, different algorithm can be used */
  emptyProduct?: Maybe<RecommendationCategory>;
  /** not a recommender, gives all cases */
  perfumeCases?: Maybe<RecommendationCategory>;
};


export type RecommendationCategoriesSimilarArgs = {
  limit?: Maybe<Scalars['Int']>;
};


export type RecommendationCategoriesSameNoteArgs = {
  limit?: Maybe<Scalars['Int']>;
};


export type RecommendationCategoriesSameBrandArgs = {
  limit?: Maybe<Scalars['Int']>;
};


export type RecommendationCategoriesSameTagArgs = {
  limit?: Maybe<Scalars['Int']>;
};


export type RecommendationCategoriesEmptyProductArgs = {
  limit?: Maybe<Scalars['Int']>;
  trivialPopularity?: Maybe<Scalars['Boolean']>;
};

export type RecommendationCategory = {
  __typename?: 'RecommendationCategory';
  name: Scalars['String'];
  products: Array<Maybe<RecommendationItem>>;
  provider: Scalars['String'];
  version: Scalars['String'];
  /**
   * name of recommender algorithm for analytics
   * pass it to `UserActionMetadata.recommenderName`
   */
  recommenderName?: Maybe<Scalars['String']>;
};

/** base interface for recommendation group */
export type RecommendationGroup = {
  /** type of recommendation */
  source: RecommendationSourceType;
  /**
   * name of recommender algorithm for analytics
   * pass it to `UserActionMetadata.recommenderName`
   */
  recommenderName?: Maybe<Scalars['String']>;
  /** recommended products */
  products: Array<Product>;
};

export type RecommendationItem = {
  __typename?: 'RecommendationItem';
  id: Scalars['Long'];
  img: Scalars['String'];
  image: Scalars['String'];
  url: Scalars['String'];
  brand: Scalars['String'];
  name: Scalars['String'];
  category: Scalars['String'];
  price?: Maybe<Scalars['Int']>;
  sex?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  popularIn?: Maybe<Array<Maybe<Scalars['String']>>>;
  totalPurchasedInState?: Maybe<Scalars['Long']>;
  totalPurchased?: Maybe<Scalars['Long']>;
  /** all product labels */
  labels?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** product labels with images for user interface in requested image format */
  productLabels?: Maybe<Array<Maybe<ProductLabel>>>;
  rating?: Maybe<Scalars['Float']>;
  upchargePrice?: Maybe<Scalars['Int']>;
  previewId?: Maybe<Scalars['Long']>;
  tradingId?: Maybe<Scalars['Long']>;
  /** Indicator that shows whether product is limited edition or not */
  isLimitedEdition?: Maybe<Scalars['Boolean']>;
};


export type RecommendationItemProductLabelsArgs = {
  format?: Maybe<ProductLabelFormat>;
};

export type RecommendationProductsSortOrder = 
  /** Based on how user voted for the product (like/dislike) */
  | 'USER_VOTE';

/** Recommendation Source */
export type RecommendationSource = {
  /** source of recommendation */
  sourceType: RecommendationSourceType;
  /** recommendations count */
  recommendationsCount: Scalars['Int'];
};

export type RecommendationSourceInput = {
  /** type of recommendation */
  type: RecommendationSourceType;
  /** should outOfStock items be excluded from result */
  hideOutOfStock?: Maybe<Scalars['Boolean']>;
  /** filter only delivered orders */
  deliveredOrdersOnly?: Maybe<Scalars['Boolean']>;
  /** mark new recommendations as viewed */
  resetNewRecommendationsNotification?: Maybe<Scalars['Boolean']>;
  /** groups limit */
  groupLimit?: Maybe<Scalars['Int']>;
  /** groups offset */
  groupOffset?: Maybe<Scalars['Int']>;
  /** in group limit */
  inGroupLimit: Scalars['Int'];
  /** sort order */
  sort?: Maybe<RecommendationProductsSortOrder>;
  /** fragrantica product ids for netflix recommender only */
  productIds?: Maybe<Array<Maybe<Scalars['Long']>>>;
};

/** Type of recommendation */
export type RecommendationSourceType = 
  /** Recommendations based on rated orders */
  | 'HISTORY'
  /** Recommendations based on quiz */
  | 'QUIZ'
  /** Recommendations based on selections (algorithm based on Fragrantica's database) */
  | 'FRAGRANTICA'
  /** Recommendations based on rated products (algorithm based tf-idf scentbird recommender) */
  | 'RATED'
  /** Recommendations based on fragrantica perfumes which users like */
  | 'FRAGRANTICA_LIKES'
  /** Recommendations based on gorec algorithms and provided on scentbird profile page */
  | 'PROFILE';

export type ReferralVisitInput = {
  personalCode: Scalars['String'];
  channel?: Maybe<Scalars['String']>;
};

export type ReferralVisitResponseGql = IGenericResponseGql & {
  __typename?: 'ReferralVisitResponseGQL';
  id?: Maybe<Scalars['Long']>;
  email?: Maybe<Scalars['String']>;
  gender?: Maybe<UserGenderGql>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  errors?: Maybe<Array<Maybe<DisplayableGqlError>>>;
  result: Scalars['Boolean'];
};

export type RefundGql = {
  __typename?: 'RefundGQL';
  /** type how refund is processed (NEW_SUBSCRIBER, RECURRENT_DAY, NONREFUNDABLE, ONE_TIME_UPCHARGE) */
  type?: Maybe<Scalars['String']>;
  /** status of refund (AVAILABLE, NO_CHARGE, PENDING_CHARGE) */
  status?: Maybe<Scalars['String']>;
  /** type of operation (PAUSE, SKIP, UNSUBSCRIBE) */
  transactionType?: Maybe<Scalars['String']>;
};

export type RegisterInput = {
  token?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  password: Scalars['String'];
  passwordStrength?: Maybe<PasswordStrength>;
  gender: UserGenderGql;
  receiveUpdates?: Maybe<Scalars['Boolean']>;
  products?: Maybe<Array<Maybe<Scalars['Long']>>>;
  /** Optional user ids in analytic systems, eg Mixpanel, GA */
  analytics?: Maybe<AnalyticsUidGql>;
  /** if user came from free-trial landings and registered */
  freeTrial?: Maybe<Scalars['Boolean']>;
};

export type ReportReviewInput = {
  reviewId?: Maybe<Scalars['Long']>;
  reportType?: Maybe<Scalars['String']>;
};

export type ResubscribeInput = {
  /**
   * request token for single call check
   * can be null for mobile app clients
   */
  token?: Maybe<Scalars['String']>;
  /** discount coupon code */
  resubscribeCode?: Maybe<Scalars['String']>;
  /** add free case */
  freeCase?: Maybe<Scalars['Boolean']>;
  /** new plan of subscription if required */
  plan?: Maybe<Scalars['String']>;
  /**
   * payment method id
   * by default subscription payment method is used
   */
  paymentMethodId?: Maybe<Scalars['String']>;
  /** analytics metadata */
  metadata?: Maybe<UserActionMetadata>;
};

export type ResubscribeResponseGql = IGenericResponseGql & {
  __typename?: 'ResubscribeResponseGQL';
  /** request token for single call check */
  token?: Maybe<Scalars['String']>;
  /** subscription data */
  subscription?: Maybe<ScentbirdSubscription>;
  /** subscription order data */
  subscriptionOrder?: Maybe<SubscriptionOrderGql>;
  /** is user suggested to update payment method */
  updatePaymentMethod?: Maybe<Scalars['Boolean']>;
  errors?: Maybe<Array<Maybe<DisplayableGqlError>>>;
  result: Scalars['Boolean'];
};

export type ReviewInput = {
  productId?: Maybe<Scalars['Long']>;
  reviewId?: Maybe<Scalars['Long']>;
  rating?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  ageCategory?: Maybe<Scalars['String']>;
  skinType?: Maybe<Scalars['String']>;
  sharedToFacebook?: Maybe<Scalars['Boolean']>;
  sharedToTwitter?: Maybe<Scalars['Boolean']>;
  eventMetadata?: Maybe<SnowplowEventMetadata>;
  likes?: Maybe<Array<Scalars['String']>>;
  dislikes?: Maybe<Array<Scalars['String']>>;
};

export type ReviewReplyInput = {
  reviewId?: Maybe<Scalars['Long']>;
  message?: Maybe<Scalars['String']>;
};

export type SaveUserFeedbackFormInput = {
  /** Form name, eg 'mobile_app_performance_feedback' */
  name: Scalars['String'];
  /** Source of form, eg 'mobile' */
  source: Scalars['String'];
  /** Form items including rates and text */
  items: Array<Maybe<UserFeedbackFormItemInput>>;
};

export type ScentbirdSubscription = {
  __typename?: 'ScentbirdSubscription';
  /**
   * Status of user address:
   * `NEW` Address is new or just updated, not validated yet.
   * `NORMAL`, `SUPPORT_CONFIRMED`, `USER_CONFIRMED` We deliver to such addresses, address is normal, passed validation.
   * `INVALID` Address didn't pass validation
   * `UNDELIVERABLE` We don't deliver to such address, the last shipment with this address was returned.
   * `UNDELIVERABLE_CHANGED` Address has been changed after it was in `UNDELIVERABLE` state.
   * `UNABLE_MANUALLY_VALIDATE` Address is invalid, not pass automation validation and did't validated manually for customer support.
   */
  addressStatus?: Maybe<Scalars['String']>;
  /** total available credits */
  balance: Scalars['Int'];
  /** estimated next shipment date if subscription will be Active */
  calculatedNextShipmentDate?: Maybe<ShipmentPeriod>;
  /** can be resubscribed */
  canResubscribe?: Maybe<Scalars['Boolean']>;
  /** can be cancelled according plan, status, not gifted, scheduled cancellation, day of month, etc */
  cancelable?: Maybe<Scalars['Boolean']>;
  /** is user sheduled cancellation of subscription and selected to get goods */
  cancellationScheduled?: Maybe<Scalars['Boolean']>;
  /** coupon applied for subscription */
  coupon?: Maybe<Scalars['String']>;
  /** available subscription credits */
  credits?: Maybe<Credits>;
  /** Set to true if user has subscription orders */
  enableHistory?: Maybe<Scalars['Boolean']>;
  /** date of scheduled subscription cancellation if user cancelled subscription and selected to get remaining goods */
  formalCancellationDate?: Maybe<Scalars['Date']>;
  /** can change subscription frequency according plan, status, address, hold, day of month, etc */
  frequencyChangeable?: Maybe<Scalars['Boolean']>;
  /** internal id */
  id?: Maybe<Scalars['Long']>;
  /** is subscription in cart */
  inCart?: Maybe<Scalars['Boolean']>;
  isActive: Scalars['Boolean'];
  /** subscription was cancelled and resubscribed */
  isResubscribed?: Maybe<Scalars['Boolean']>;
  /** next payment date */
  nextBillingDate?: Maybe<Scalars['Date']>;
  /** estimated shipment date */
  nextShippingDate?: Maybe<ShipmentPeriod>;
  /** date of put subscription on pause */
  pauseDate?: Maybe<Scalars['Date']>;
  /** subscription plan */
  plan?: Maybe<Plan>;
  /** can make skip according status, next billing date, not gifted, etc */
  skippable?: Maybe<Scalars['Boolean']>;
  /**
   * status of user subscription
   * always exists, initially NotSubscribed
   */
  status: ScentbirdSubscriptionStatus;
  /** date of subscription start */
  subscriptionDate?: Maybe<Scalars['DateTime']>;
  /** date of hold end */
  unskipDate?: Maybe<Scalars['Date']>;
  /** date when unsubscribe feedback form was sent */
  unsubscribeFeedbackSentDate?: Maybe<Scalars['DateTime']>;
  /** can upgrade according status, plan, next billing date, not cancelled, etc */
  upgradable?: Maybe<Scalars['Boolean']>;
  /** deprecated, use canUpgrade */
  upgradable23?: Maybe<Scalars['Boolean']>;
};


export type ScentbirdSubscriptionCouponArgs = {
  unprocessed?: Maybe<Scalars['Boolean']>;
};

/**
 * Status of user subscription. Possible values:
 * 1.  NotSubscribed        value: not_subscribed       subscribed: false // never subscribed before, new user
 * 2.  Active               value: active               subscribed: true  // subscribed
 * 3.  OnHold               value: on_hold              subscribed: true  // skip 1,2,3 months
 * 4.  WaitingProlong       value: waiting_prolong      subscribed: true  // not used
 * 5.  Unpaid               value: unpaid               subscribed: true  // last payment is not successfull on payment day of the month, when Vindicia is not able to charge the user, the status is still active, we can send if the user has credits
 * 6.  Cancelled            value: cancelled            subscribed: false // closed subscription, automatic cancelled
 * 7.  Paused               value: paused               subscribed: true  // no time restriction, the user should unpause by himself
 * 8.  Undeliverable        value: undeliverable        subscribed: true  // https://scentbird.atlassian.net/browse/SCNT-3373
 * 9.  PendingProductRepick value: pendingProductRepick subscribed: true  // user paid for lep on subbscription but it became put of stock. He need to repick product SCNT-6507
 * 10. Pending              value: pending              subscribed: true  // time gap between payment authorization and charge (SCNT-3660)
 * 11. PendingUpgrade       value: pending_upgrade      subscribed: true  // https://scentbird.atlassian.net/browse/SCNT-4069,
 * 12. PendingChangePlan    value: pending_change_plan  subscribed: true  // https://scentbird.atlassian.net/browse/SCNT-3997
 * 13. PaymentInProgress    value: payment_in_progress  subscribed: false // https://scentbird.atlassian.net/browse/MOB-337 not subscribed, but subscription session is in progress
 */
export type ScentbirdSubscriptionStatus = {
  __typename?: 'ScentbirdSubscriptionStatus';
  /** name of status, check ScentbirdSubscriptionStatus description */
  name: Scalars['String'];
  /** value of status, check ScentbirdSubscriptionStatus description */
  value: Scalars['String'];
  /** generated human-readable subscription status for UI */
  statusText: Scalars['String'];
  /** is user has active subscription for thgis status, check ScentbirdSubscriptionStatus description */
  subscribed: Scalars['Boolean'];
};

export type SearchAutocompletesGql = {
  __typename?: 'SearchAutocompletesGQL';
  /** autocomplete list */
  list?: Maybe<Array<Maybe<Scalars['String']>>>;
  /** offset count */
  offset: Scalars['Int'];
  /** total count */
  total: Scalars['Int'];
};

export type SearchInput = {
  /** search query text */
  query: Scalars['String'];
};

export type SearchProductsGql = {
  __typename?: 'SearchProductsGQL';
  /** products list */
  list?: Maybe<Array<Maybe<Product>>>;
  /** if bestsellers */
  bestsellers: Scalars['Boolean'];
  /** offset count */
  offset: Scalars['Int'];
  /** total count */
  total: Scalars['Int'];
};

export type SearchResponseGql = IGenericResponseGql & {
  __typename?: 'SearchResponseGQL';
  /** searched/suggested products */
  products: SearchProductsGql;
  /** search suggestions */
  autocompletes: SearchAutocompletesGql;
  /** list of errors */
  errors?: Maybe<Array<Maybe<DisplayableGqlError>>>;
  /** result indicator */
  result: Scalars['Boolean'];
};


export type SearchResponseGqlProductsArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type SearchResponseGqlAutocompletesArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type SendMessageInput = {
  name: Scalars['String'];
  email: Scalars['String'];
  message: Scalars['String'];
  /** supported values marketing, support, press */
  messageType: Scalars['String'];
  params?: Maybe<Scalars['Map']>;
};

export type SeoDataGql = {
  __typename?: 'SeoDataGQL';
  link?: Maybe<Scalars['String']>;
  textDescription?: Maybe<Scalars['String']>;
};

export type ShareEmailAgreementGql = {
  __typename?: 'ShareEmailAgreementGQL';
  banner: Scalars['String'];
  title: Scalars['String'];
  advantages: Array<Scalars['String']>;
  agreement?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
};


export type ShareEmailAgreementGqlBannerArgs = {
  type?: Maybe<ImageType>;
};

export type ShipmentPeriod = {
  __typename?: 'ShipmentPeriod';
  /** date period from */
  from: Scalars['Date'];
  /** date period to */
  to: Scalars['Date'];
};

export type SkipFeedbackInput = {
  holdId: Scalars['Long'];
  reason?: Maybe<Scalars['String']>;
  comment?: Maybe<Scalars['String']>;
};

export type SkipMonthGql = IGenericResponseGql & {
  __typename?: 'SkipMonthGQL';
  /**
   * skip(hold) id
   * Deprecated. Use holdId
   */
  hold?: Maybe<Scalars['Long']>;
  /** hold id */
  holdId?: Maybe<Scalars['Long']>;
  /** start date of skip */
  startDate?: Maybe<Scalars['Date']>;
  /** final day of skip */
  untilDate?: Maybe<Scalars['Date']>;
  /** untilDate in the iso instant format */
  date?: Maybe<Scalars['String']>;
  /** refund data */
  refund?: Maybe<RefundGql>;
  errors?: Maybe<Array<Maybe<DisplayableGqlError>>>;
  result: Scalars['Boolean'];
};

export type SkipMonthInput = {
  /** months to skip 1,2,3, no limit */
  month: Scalars['Int'];
  /** need for SCNT-6010, pause for 1 month */
  limitedPause?: Maybe<Scalars['Boolean']>;
  /** SB-1880 */
  remind?: Maybe<Scalars['Boolean']>;
};

export type SnowplowEventMetadata = {
  /** Type of page event where event happens */
  pageType?: Maybe<Scalars['String']>;
  /** Page where event happens */
  page?: Maybe<Scalars['String']>;
  /** Place of event */
  placement?: Maybe<Scalars['String']>;
  /** User agent string */
  userAgent?: Maybe<Scalars['String']>;
};

export type SpecialCaseValidate = {
  __typename?: 'SpecialCaseValidate';
  errorCode: Scalars['String'];
  valid?: Maybe<Scalars['Boolean']>;
};

/** Special category */
export type SpecialCategoryTypeGql = 
  | 'DateNight'
  | 'FloralTheme'
  | 'OfficeAppropriate'
  | 'TopSellers';

export type SubmitPostPurchaseSurveyInput = {
  /** answer to `How did you first heard about Scentbird?` */
  fromResponse?: Maybe<Scalars['String']>;
  /** answer to `Other` */
  otherResponse?: Maybe<Scalars['String']>;
};

export type SubmitTastemakerSurveyInput = {
  /** Number of favorite confession */
  favoriteConfession: Scalars['Int'];
  /** Comment about favorite confession */
  favoriteConfessionComment?: Maybe<Scalars['String']>;
  /** Decision to purchase a bottle of fragrance */
  buyBottle: Scalars['Boolean'];
  /** List of confession ratings */
  confessions?: Maybe<Array<Maybe<ConfessionRating>>>;
  /** there a more then 1 tastemakers pages now, we need to distinguish */
  page?: Maybe<Scalars['String']>;
};

export type SubscriptionOrderGql = {
  __typename?: 'SubscriptionOrderGQL';
  id?: Maybe<Scalars['Long']>;
  /** order number */
  orderNo?: Maybe<Scalars['String']>;
  /** year of SO */
  year: Scalars['Int'];
  /** month of SO */
  month: Scalars['Int'];
  /** shipping date */
  shippingDate?: Maybe<Scalars['DateTime']>;
  /** tracking information */
  tracking?: Maybe<Tracking>;
  /** products attached to SO */
  products?: Maybe<Array<Maybe<Product>>>;
  /** Shipping address */
  shipping?: Maybe<AddressGql>;
  /** Shipping address */
  billing?: Maybe<AddressGql>;
  charge?: Maybe<ChargeGql>;
  /** order status combined with shipment status */
  orderStatus?: Maybe<Scalars['String']>;
};

export type SubscriptionOrdersGql = {
  __typename?: 'SubscriptionOrdersGQL';
  isOrderInfoVisible: Scalars['Boolean'];
  hasEmptyProductsForNextMonth: Scalars['Boolean'];
  orders?: Maybe<Array<Maybe<SubscriptionOrderGql>>>;
};

export type SubscriptionPriceGql = {
  __typename?: 'SubscriptionPriceGQL';
  price?: Maybe<Scalars['Long']>;
  discount?: Maybe<Scalars['String']>;
  tax?: Maybe<Scalars['Long']>;
  shipping?: Maybe<Scalars['Long']>;
};

/** used for get information about subscription progress flow */
export type SubscriptionProgressGql = {
  __typename?: 'SubscriptionProgressGQL';
  /** status subscription can be IN_PROGRESS, SUCCESS, FAILED */
  status?: Maybe<Scalars['String']>;
  subscriptionSessionId?: Maybe<Scalars['Long']>;
};

export type SubscriptionSessionGql = {
  __typename?: 'SubscriptionSessionGQL';
  id?: Maybe<Scalars['Long']>;
  /** subscription session progress, equals with commit susbscription response */
  progress?: Maybe<CommitSubscriptionResponseGql>;
};

export type SuggestAddressInput = {
  /** free text for suggestion */
  query: Scalars['String'];
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['Long'];
  name: Scalars['String'];
  image: Scalars['String'];
  voteCount?: Maybe<Scalars['Long']>;
};


export type TagImageArgs = {
  format?: Maybe<ProductLabelFormat>;
};

/** Landing block: quiz call to action */
export type TakeQuizMobileLandingBlock = IMobileLandingBlock & {
  __typename?: 'TakeQuizMobileLandingBlock';
  /** Catalog item id or block type if default structure */
  id: Scalars['String'];
  /** Block type. Please note, that values of this type will be extended in future. */
  block: MobileLandingBlocksType;
  /** call to action UI content */
  presentation: TakeQuizPresentation;
};

/** Call to action UI content */
export type TakeQuizPresentation = {
  __typename?: 'TakeQuizPresentation';
  /** block title */
  title: Scalars['String'];
  /** block body */
  body: Scalars['String'];
  /** button text */
  button: Scalars['String'];
  /** background image link */
  background: Scalars['String'];
};

export type TokenGql = {
  __typename?: 'TokenGQL';
  name: Scalars['String'];
  value?: Maybe<Scalars['String']>;
};

export type TopRateTagAndCategory = {
  __typename?: 'TopRateTagAndCategory';
  id?: Maybe<Scalars['Long']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  topTagId?: Maybe<Scalars['Long']>;
  topTagImage?: Maybe<Scalars['String']>;
  topTagName?: Maybe<Scalars['String']>;
  voteCount?: Maybe<Scalars['Long']>;
  tags?: Maybe<Array<Maybe<Tag>>>;
};


export type TopRateTagAndCategoryTopTagImageArgs = {
  format?: Maybe<ProductLabelFormat>;
};

export type TossinProductGroupGql = {
  __typename?: 'TossinProductGroupGQL';
  groupName?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Long']>;
  discount?: Maybe<Scalars['Long']>;
  products?: Maybe<Array<Product>>;
};

export type TossinProductGroupInputGql = {
  /** gender filter, if not specified return all male and female products */
  gender?: Maybe<UserGenderGql>;
};

export type TossinProductsResponseGql = IGenericResponseGql & {
  __typename?: 'TossinProductsResponseGQL';
  errors?: Maybe<Array<Maybe<DisplayableGqlError>>>;
  result: Scalars['Boolean'];
  productGroups?: Maybe<Array<TossinProductGroupGql>>;
};

export type Tracking = {
  __typename?: 'Tracking';
  id?: Maybe<Scalars['Long']>;
  trackingNumber: Scalars['String'];
  trackingUrl: Scalars['String'];
  shipmentDate: Scalars['Date'];
  status: Scalars['String'];
};

export type TradingItem = {
  __typename?: 'TradingItem';
  id: Scalars['Long'];
  type: Scalars['String'];
  price: Scalars['Int'];
  priceWithDiscount: Scalars['Int'];
  inStock: Scalars['Boolean'];
  volume?: Maybe<Volume>;
  image: Scalars['String'];
  productGroup: Scalars['String'];
  color?: Maybe<Scalars['String']>;
  colorName?: Maybe<Scalars['String']>;
};

export type UnpauseSubscriptionInput = {
  /**
   * request token for single call check
   * can be null for mobile app clients
   */
  token?: Maybe<Scalars['String']>;
  /** app place where customer did action, for ex: 'profile', 'some popup name', 'some page name' and so on */
  placement?: Maybe<Scalars['String']>;
  /** coupon code for unpause discount */
  unpauseCode?: Maybe<Scalars['String']>;
  /** add free case on unpause */
  freeCase?: Maybe<Scalars['Boolean']>;
};

export type UnpauseSubscriptionResponseGql = IGenericResponseGql & {
  __typename?: 'UnpauseSubscriptionResponseGQL';
  /**
   * request token for single call check
   * can be null for mobile app clients
   */
  token?: Maybe<Scalars['String']>;
  /** notification on premium product in batch */
  premiumProductInBatchNotification?: Maybe<PremiumProductInBatchNotificationGql>;
  errors?: Maybe<Array<Maybe<DisplayableGqlError>>>;
  result: Scalars['Boolean'];
};

export type UnskipInput = {
  /** app place where customer did action, for ex: 'profile','some popup name', 'some page name' and so on */
  placement: Scalars['String'];
};

export type UnskipResponseGql = IGenericResponseGql & {
  __typename?: 'UnskipResponseGQL';
  /** notification on premium product in batch */
  premiumProductInBatchNotification?: Maybe<PremiumProductInBatchNotificationGql>;
  /** Fetches user data */
  user?: Maybe<UserGql>;
  errors?: Maybe<Array<Maybe<DisplayableGqlError>>>;
  result: Scalars['Boolean'];
};

export type UnsubscribeFeedbackInput = {
  subscriptionId: Scalars['Long'];
  feedback: Scalars['String'];
};

export type UnsubscribeReason = {
  __typename?: 'UnsubscribeReason';
  name: Scalars['String'];
  reason: Scalars['String'];
};

export type UpdateAddressInput = {
  shipping?: Maybe<AddressInput>;
};

export type UpdateInQueueResponseGql = IGenericResponseGql & {
  __typename?: 'UpdateInQueueResponseGQL';
  /** Get queue with custom plan name (eg MONTHLY_2PCS). By default subscription plan if any. */
  queue?: Maybe<Queue>;
  errors?: Maybe<Array<Maybe<DisplayableGqlError>>>;
  result: Scalars['Boolean'];
};


export type UpdateInQueueResponseGqlQueueArgs = {
  plan?: Maybe<Scalars['String']>;
};

export type UpdateInquiryInput = {
  /** Plan name (eg MONTHLY) */
  plan: Scalars['String'];
};

export type UpdateInquiryResponseGql = IGenericResponseGql & {
  __typename?: 'UpdateInquiryResponseGQL';
  /** Balance from your current subscription */
  balance?: Maybe<Scalars['Long']>;
  /** Total upgrade plan cost */
  price?: Maybe<Scalars['Long']>;
  /** Total upgrade plan cost with credits */
  priceWithCredits?: Maybe<Scalars['Long']>;
  /** Current user credits */
  credits?: Maybe<Scalars['Long']>;
  /** Tax cost */
  tax?: Maybe<Scalars['Long']>;
  /** Shipping cost */
  shipping?: Maybe<Scalars['Long']>;
  /** User plan */
  currentPlan?: Maybe<Plan>;
  /** Taget plan */
  inquirePlan?: Maybe<Plan>;
  /** Year and month when upgrade will come into effect */
  upgradeActivation?: Maybe<Scalars['YearMonth']>;
  /** Year and month of next billing */
  nextBilling?: Maybe<Scalars['YearMonth']>;
  /** Charge type category FULL_UPGRADE, NONE_CHARGE_UPGRADE, PARTIAL_UPGRADE */
  chargeCategory?: Maybe<Scalars['String']>;
  /** true if successfull */
  result: Scalars['Boolean'];
  /** list of errors */
  errors?: Maybe<Array<Maybe<DisplayableGqlError>>>;
};

export type UpdatePersonalInfoResponseGql = IGenericResponseGql & {
  __typename?: 'UpdatePersonalInfoResponseGQL';
  profile?: Maybe<ProfileGql>;
  errors?: Maybe<Array<Maybe<DisplayableGqlError>>>;
  result: Scalars['Boolean'];
};

export type UpdateQueueItemInput = {
  /** index of queue cell, which should be updated */
  index: Scalars['Int'];
  /** queue product id */
  item: Scalars['Long'];
  /** analitycs metadata */
  metadata?: Maybe<UserActionMetadata>;
};

export type UpdateSubscriptionPlanInput = {
  /** Plan name (eg MONTHLY) */
  plan: Scalars['String'];
  /** Analytics metadata */
  metadata?: Maybe<UserActionMetadata>;
};

export type UpdateSubscriptionPlanResponseGql = IGenericResponseGql & {
  __typename?: 'UpdateSubscriptionPlanResponseGQL';
  /** New subscription plan */
  plan?: Maybe<Plan>;
  /** Next biling date */
  nextBillingDate?: Maybe<Scalars['Date']>;
  /** Current user balance */
  balance?: Maybe<Scalars['Long']>;
  /** Current user credits */
  credits?: Maybe<Credits>;
  /** Next shipment data */
  shipmentPeriod?: Maybe<ShipmentPeriod>;
  errors?: Maybe<Array<Maybe<DisplayableGqlError>>>;
  result: Scalars['Boolean'];
};

export type UserActionMetadata = {
  collections?: Maybe<Scalars['String']>;
  placement?: Maybe<Scalars['String']>;
  tab?: Maybe<Scalars['String']>;
  pageType?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['String']>;
  /**
   * name of recommender algorithm for analytics
   * pass when product is from recommendation list
   * eg: `addToQueue` mutation
   */
  recommenderName?: Maybe<Scalars['String']>;
};

export type UserCreditsGql = {
  __typename?: 'UserCreditsGQL';
  ecommerce: Scalars['Int'];
};

export type UserFeedbackFormItemInput = {
  /** Index of question */
  index: Scalars['Int'];
  /** Question text/id */
  question: Scalars['String'];
  /** User rate reply */
  rate?: Maybe<Scalars['Int']>;
  /** User free text of reply */
  answer?: Maybe<Scalars['String']>;
};

export type UserFeedbackFormItemResponseGql = IGenericResponseGql & {
  __typename?: 'UserFeedbackFormItemResponseGQL';
  /** Created form id */
  id?: Maybe<Scalars['Long']>;
  errors?: Maybe<Array<Maybe<DisplayableGqlError>>>;
  result: Scalars['Boolean'];
};

export type UserGql = {
  __typename?: 'UserGQL';
  me?: Maybe<ProfileGql>;
  cart?: Maybe<CartGql>;
  subscription?: Maybe<ScentbirdSubscription>;
  /** subscription progress can be null if user already subscribed and notififed about subscription */
  subscriptionProgress?: Maybe<SubscriptionProgressGql>;
  /** (deprecated)indicate user can open tossin page and get products with tossin prices */
  canApplyTossinOffer?: Maybe<Scalars['Boolean']>;
  closedPopups?: Maybe<Array<Maybe<PopupGql>>>;
  isLoggedIn: Scalars['Boolean'];
  paymentProvider: PaymentProvider;
  passwordRestored?: Maybe<Scalars['Boolean']>;
  notifications?: Maybe<Array<Maybe<MobileNotification>>>;
};

/** User gender male/female */
export type UserGenderGql = 
  | 'male'
  | 'female';

export type UserInterviewInput = {
  ageCategory?: Maybe<Scalars['String']>;
  gender: Scalars['String'];
  phone: Scalars['String'];
  /** User timezone to clarify his availability hours */
  timezone: Scalars['Int'];
  /** Time that is suitable for user to talk */
  availability: Scalars['String'];
  /** topics to talk about */
  talkTheme?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type UserLifetimeStatus = 
  /** a person who created an account but didn’t subscribe */
  | 'USER'
  /** after the first charge and 29 days after the first charge */
  | 'WELCOME'
  /** 30 days after the initial charge and before the 3rd charge */
  | 'NEW'
  /** After 3rd charge and before the 5th charge */
  | 'REGULAR'
  /** After 5th charge to infinity */
  | 'LOYAL';

export type UserResponseGql = IGenericResponseGql & {
  __typename?: 'UserResponseGQL';
  user?: Maybe<UserGql>;
  token?: Maybe<Scalars['String']>;
  apiToken?: Maybe<Scalars['String']>;
  /** list of errors */
  errors?: Maybe<Array<Maybe<DisplayableGqlError>>>;
  /** result indicator */
  result: Scalars['Boolean'];
};

export type UserReviewGql = {
  __typename?: 'UserReviewGQL';
  product?: Maybe<Product>;
  id?: Maybe<Scalars['Long']>;
  date?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['Long']>;
  isPositive?: Maybe<Scalars['Boolean']>;
  review?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Tag>>>;
  helpful?: Maybe<HelpfulGql>;
  ageCategory?: Maybe<Scalars['String']>;
  skinType?: Maybe<Scalars['String']>;
};

export type Utm = {
  __typename?: 'Utm';
  campaign?: Maybe<Scalars['String']>;
  medium?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
};

export type UtmType = 
  | 'FIRST_TOUCH'
  | 'LAST_TOUCH';

export type VacancyGql = {
  __typename?: 'VacancyGQL';
  id: Scalars['Long'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  location: Scalars['String'];
  department: Scalars['String'];
  link: Scalars['String'];
  status: Scalars['String'];
  dateCreated: Scalars['String'];
  lastUpdated: Scalars['String'];
};

export type ValidateAddressResponseGql = IGenericResponseGql & {
  __typename?: 'ValidateAddressResponseGQL';
  /** validated address */
  address: AddressGql;
  /** list of address errors */
  addressErrors?: Maybe<Array<Maybe<AddressFieldErrorGql>>>;
  /** input address matches primary address */
  isAlreadyValidated: Scalars['Boolean'];
  errors?: Maybe<Array<Maybe<DisplayableGqlError>>>;
  result: Scalars['Boolean'];
};

export type ValidateRestorePasswordInput = {
  /** token, recieved by email */
  token: Scalars['String'];
};

export type Volume = {
  __typename?: 'Volume';
  volume?: Maybe<Scalars['Float']>;
  unit?: Maybe<Scalars['String']>;
};

export type VoteFragranticaProductInput = {
  /** List of votes */
  votes: Array<VoteProduct>;
  /** Age category */
  ageCategory?: Maybe<AgeCategory>;
  /** Flag to determine how fragrantica recommendation stats should be reloaded (sync/async mode) */
  reloadStatAsync?: Maybe<Scalars['Boolean']>;
};

export type VoteProduct = {
  /** Identifier of fragrantica product */
  productId: Scalars['Long'];
  /** Product rating (POSITIVE, NEUTRAL or NEGATIVE) */
  status: VoteStatus;
};

export type VoteProductInput = {
  /** Identifier of product */
  productId: Scalars['Long'];
  /** vote status */
  status: VoteStatus;
  /** placement */
  placement: Scalars['String'];
  /** source of recommendation */
  sourceType: RecommendationSourceType;
  /** dislike reason */
  reason?: Maybe<Scalars['String']>;
};

export type VoteStatus = 
  | 'NEGATIVE'
  | 'NEUTRAL'
  | 'POSITIVE';


/** Astrological zodiac type */
export type Zodiac = 
  | 'ARIES'
  | 'TAURUS'
  | 'GEMINI'
  | 'CANCER'
  | 'LEO'
  | 'VIRGO'
  | 'LIBRA'
  | 'SCORPIO'
  | 'SAGITTARIUS'
  | 'CAPRICORN'
  | 'AQUARIUS'
  | 'PISCES';

export type Google = {
  __typename?: 'Google';
  isInitialized: Scalars['Boolean'];
  isCookiesError: Scalars['Boolean'];
  isFetching: Scalars['Boolean'];
  isFetched: Scalars['Boolean'];
};

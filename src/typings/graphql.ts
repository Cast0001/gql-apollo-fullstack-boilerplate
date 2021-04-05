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
  BigDecimal: any;
  JSON: any;
  LocalDate: any;
  LocalDateTime: any;
  Long: any;
  /** Year and month value in format 'yyyy-MM' */
  YearMonth: any;
};


export type AbTest = {
  __typename?: 'AbTest';
  /** name of ab test */
  name: Scalars['String'];
  /** value assigned to user */
  value: Scalars['String'];
  /** name for Mixpanel */
  mixpanelProperty: Scalars['String'];
  /** is test enabled */
  enabled: Scalars['Boolean'];
};

export type AbTestsData = {
  __typename?: 'AbTestsData';
  /** list of active ab tests */
  abTests: Array<AbTest>;
};

export type AbTestsError = ServerError | SecurityError;

export type AbTestsPayload = {
  __typename?: 'AbTestsPayload';
  /** data of ab tests */
  data?: Maybe<AbTestsData>;
  /** error data */
  error?: Maybe<AbTestsError>;
};

export type AddMultipleItemsToQueueData = {
  __typename?: 'AddMultipleItemsToQueueData';
  /** Get queue with custom plan name (eg MONTHLY_2PCS). By default subscription plan if any. */
  queue?: Maybe<Queue>;
  /** Amount of products added to queue successfully */
  productsAdded?: Maybe<Scalars['Int']>;
};


export type AddMultipleItemsToQueueDataQueueArgs = {
  input?: Maybe<QueueInput>;
};

export type AddMultipleItemsToQueueError = OperationError & {
  __typename?: 'AddMultipleItemsToQueueError';
  details?: Maybe<Array<Maybe<ProductValidationError>>>;
  errorCode: AddMultipleItemsToQueueErrorCode;
  /** human readable error message */
  message: Scalars['String'];
};

export type AddMultipleItemsToQueueErrorCode = 
  | 'EMPTY_REQUEST'
  | 'ALL_PRODUCTS_NOT_FOUND'
  | 'NOT_ALL_PRODUCTS_ADDED'
  /** customer can't add to queue when he is on light plan subscription */
  | 'LITE_PLAN';

export type AddMultipleItemsToQueuePayload = {
  __typename?: 'AddMultipleItemsToQueuePayload';
  data?: Maybe<AddMultipleItemsToQueueData>;
  error?: Maybe<AddMultipleItemsToQueuePayloadError>;
};

export type AddMultipleItemsToQueuePayloadError = SecurityError | ServerError | AddMultipleItemsToQueueError | ValidationError;

export type AddQueueItemInput = {
  /** user forced to add LEP products */
  force: Scalars['Boolean'];
  /** product id. Either item or items should present. */
  productId: Scalars['Long'];
  /** Where to add new item: as first item of queue or to the end of the queue */
  position: AddQueueItemPosition;
  /** analytics metadata */
  metadata: AnalyticsMetadataInput;
};

export type AddQueueItemPosition = 
  | 'FIRST'
  | 'LAST';

export type AddQueueMultipleItemsInput = {
  /** user forced to add LEP products */
  force?: Maybe<Scalars['Boolean']>;
  /** list of product ids. If any fails, others will be still added. Items should present. */
  productIds?: Maybe<Array<Maybe<Scalars['Long']>>>;
  /** analitycs metadata */
  metadata: AnalyticsMetadataInput;
};

export type AddToQueueError = OperationError & {
  __typename?: 'AddToQueueError';
  errorCode: AddToQueueErrorCode;
  /** human readable error message */
  message: Scalars['String'];
};

export type AddToQueueErrorCode = 
  | 'PRODUCT_NOT_FOUND'
  /** customer cant buy same perfume less that 6 month */
  | 'RESTRICT_SAME_PERFUME'
  /** customer can't add to queue when he is on light plan subscription */
  | 'LITE_PLAN'
  /** common error */
  | 'SOMETHING_WENT_WRONG';

export type AddToQueuePayload = {
  __typename?: 'AddToQueuePayload';
  /** Get queue with custom plan name (eg MONTHLY_2PCS). By default subscription plan if any. */
  queue?: Maybe<Queue>;
  error?: Maybe<AddToQueuePayloadError>;
};


export type AddToQueuePayloadQueueArgs = {
  input?: Maybe<QueueInput>;
};

export type AddToQueuePayloadError = SecurityError | ServerError | AddToQueueError | ValidationError;

export type Address = {
  __typename?: 'Address';
  /** internal id */
  id?: Maybe<Scalars['Long']>;
  /** is primary, selected as default for shipping or billing */
  primary?: Maybe<Scalars['Boolean']>;
  /** country, default 'US' */
  country?: Maybe<Scalars['String']>;
  /** zip-code */
  postalCode?: Maybe<Scalars['String']>;
  /** state for US */
  region?: Maybe<Scalars['String']>;
  /** city */
  city?: Maybe<Scalars['String']>;
  /** street address */
  street1?: Maybe<Scalars['String']>;
  /** appartments address */
  street2?: Maybe<Scalars['String']>;
  /** phone number */
  phone?: Maybe<Scalars['String']>;
  /** customer first name */
  firstName?: Maybe<Scalars['String']>;
  /** customer last name */
  lastName?: Maybe<Scalars['String']>;
};

export type AddressAddInput = {
  /** set address as primary */
  primary: Scalars['Boolean'];
  /** address data */
  address: AddressInput;
};

export type AddressAddPayload = {
  __typename?: 'AddressAddPayload';
  /** data of inquiry */
  data?: Maybe<UserData>;
  /** error data */
  error?: Maybe<AddressAddResultError>;
};

export type AddressAddResultError = SecurityError | ServerError | AddressError;

export type AddressDeleteInput = {
  /** address id */
  addressId: Scalars['Long'];
};

export type AddressDeletePayload = {
  __typename?: 'AddressDeletePayload';
  /** data of inquiry */
  data?: Maybe<UserData>;
  /** error data */
  error?: Maybe<AddressDeleteResultError>;
};

export type AddressDeleteResultError = SecurityError | ServerError | ValidationError | AddressError;

export type AddressError = OperationError & {
  __typename?: 'AddressError';
  errorCode: AddressErrorCode;
  /** human readable error message */
  message: Scalars['String'];
};

export type AddressErrorCode = 
  /** operation for primary address is not permitted */
  | 'PRIMARY_ADDRESS'
  /** special military address is not permitted */
  | 'MILITARY_ADDRESS';

export type AddressInfo = {
  __typename?: 'AddressInfo';
  /** primary billing address */
  billing?: Maybe<Address>;
  /** primary shipping address */
  shipping?: Maybe<Address>;
  /** address status */
  status?: Maybe<AddressStatus>;
};

export type AddressInput = {
  country: Scalars['String'];
  postalCode: Scalars['String'];
  region: Scalars['String'];
  city: Scalars['String'];
  street1: Scalars['String'];
  street2?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};

export type AddressStatus = 
  /** Address is new or just updated, not validated yet */
  | 'NEW'
  /** We deliver to such addresses, address is normal, passed validation. */
  | 'NORMAL'
  /** We deliver to such addresses, address is normal, passed validation. */
  | 'SUPPORT_CONFIRMED'
  /** We deliver to such addresses, address is normal, passed validation. */
  | 'USER_CONFIRMED'
  /** Address didn't pass validation */
  | 'INVALID'
  /** We don't deliver to such address, the last shipment with this address was returned. */
  | 'UNDELIVERABLE'
  /** Address has been changed after it was in `UNDELIVERABLE` state. */
  | 'UNDELIVERABLE_CHANGED'
  /** Address is invalid, not pass automation validation and did't validated manually for customer support. */
  | 'UNABLE_MANUALLY_VALIDATE';

export type AddressUpdateInput = {
  /** address id */
  addressId: Scalars['Long'];
  /** set address as primary */
  primary: Scalars['Boolean'];
  /** address data */
  address: AddressInput;
};

export type AddressUpdatePayload = {
  __typename?: 'AddressUpdatePayload';
  /** data of inquiry */
  data?: Maybe<UserData>;
  /** error data */
  error?: Maybe<AddressUpdateResultError>;
};

export type AddressUpdateResultError = SecurityError | ServerError | ValidationError | AddressError;

export type AnalyticsMetadata = {
  __typename?: 'AnalyticsMetadata';
  /** Mixpanel client id */
  mixpanelClientId?: Maybe<Scalars['String']>;
};

export type AnalyticsMetadataInput = {
  /** source of action */
  placement?: Maybe<Scalars['String']>;
  /** tab of action */
  tab?: Maybe<Scalars['String']>;
  collections?: Maybe<Scalars['String']>;
  pageType?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['String']>;
  /**
   * name of recommender algorithm for analytics
   * pass when product is from recommendation list
   * eg: `addToQueue` mutation
   */
  recommenderName?: Maybe<Scalars['String']>;
};

/** Landing block: promo banners */
export type BannersMobileLandingBlock = MobileLandingBlock & {
  __typename?: 'BannersMobileLandingBlock';
  /** Catalog item id or block type if default structure */
  id: Scalars['String'];
  /** Block type. Please note, that values of this type will be extended in future. */
  type: MobileLandingBlockType;
  /** list of banners */
  banners: Array<MobileBanner>;
};


export type BlogPost = {
  __typename?: 'BlogPost';
  /** internal id of post */
  id: Scalars['Long'];
  /** wordpress id of post */
  wordPressId: Scalars['Long'];
  /** date of posting */
  wordPressDateCreated: Scalars['LocalDateTime'];
  /** blog title text */
  title: Scalars['String'];
  /** blog description text */
  description: Scalars['String'];
  /** link to original cover picture */
  pictureUrl: Scalars['String'];
  /** link to post */
  postUrl: Scalars['String'];
};

export type BlogPosts = {
  __typename?: 'BlogPosts';
  posts: Array<BlogPost>;
  count: Scalars['Int'];
};

/** Landing block: blog posts */
export type BlogPostsMobileLandingBlock = MobileLandingBlock & {
  __typename?: 'BlogPostsMobileLandingBlock';
  /** Catalog item id or block type if default structure */
  id: Scalars['String'];
  /** Block type. Please note, that values of this type will be extended in future. */
  type: MobileLandingBlockType;
  /** list of blog posts */
  blogPosts: Array<BlogPost>;
};

export type BrandBlogPostsInput = {
  offset: Scalars['Int'];
  limit: Scalars['Int'];
};

export type BrandDescriptionBlock = BrandDescriptionTextBlock | BrandDescriptionMediaBlock;

export type BrandDescriptionBlockType = 
  | 'TEXT'
  | 'MEDIA';

export type BrandDescriptionBlocks = {
  __typename?: 'BrandDescriptionBlocks';
  blocks: Array<BrandDescriptionBlock>;
  count: Scalars['Int'];
};

export type BrandDescriptionMediaBlock = {
  __typename?: 'BrandDescriptionMediaBlock';
  type: BrandDescriptionBlockType;
  title?: Maybe<Scalars['String']>;
  medias: Array<Scalars['String']>;
};

export type BrandDescriptionTextBlock = {
  __typename?: 'BrandDescriptionTextBlock';
  type: BrandDescriptionBlockType;
  text: Scalars['String'];
};

/** brand info */
export type BrandInfo = {
  __typename?: 'BrandInfo';
  /** brand id */
  id?: Maybe<Scalars['Long']>;
  /** brand name */
  name: Scalars['String'];
  /** brand slug aka customBrandPageUri */
  slug?: Maybe<Scalars['String']>;
  /** brand description */
  description?: Maybe<Scalars['String']>;
  /** brand logo */
  logo?: Maybe<Scalars['String']>;
  /** brand country */
  country?: Maybe<Scalars['String']>;
  /** year of brand release */
  year?: Maybe<Scalars['Int']>;
  /** brand's media */
  medias: BrandMedias;
  /** brand products */
  products: BrandProducts;
  /** brand description blocks, order is important */
  descriptionBlocks: BrandDescriptionBlocks;
  /** brand blog posts, order is important */
  blogPosts: BlogPosts;
};


/** brand info */
export type BrandInfoBlogPostsArgs = {
  input?: Maybe<BrandBlogPostsInput>;
};

export type BrandMedia = {
  __typename?: 'BrandMedia';
  /** brand media type, @see BrandMediaType, currently only BANNER is supported */
  type: Scalars['String'];
  /** desktop media url */
  desktop: Scalars['String'];
  /** mobile media url */
  mobile?: Maybe<Scalars['String']>;
  /** tablet landscape media url */
  tabletLandscape?: Maybe<Scalars['String']>;
  /** tablet portrait media url */
  tabletPortrait?: Maybe<Scalars['String']>;
};

export type BrandMedias = {
  __typename?: 'BrandMedias';
  medias: Array<BrandMedia>;
  count: Scalars['Int'];
};

export type BrandProducts = {
  __typename?: 'BrandProducts';
  products: Array<Product>;
  count: Scalars['Int'];
};

export type BrandsInput = {
  /** brand names */
  slugs?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type BrandsPayload = {
  __typename?: 'BrandsPayload';
  data: Array<BrandInfo>;
};

export type BusinessError = OperationError & {
  __typename?: 'BusinessError';
  /** code of error */
  errorCode: BusinessErrorCode;
  /** human readable error message */
  message: Scalars['String'];
  /** additional metadata for the client */
  metadata?: Maybe<ErrorMetadata>;
};

export type BusinessErrorCode = 
  /** customer doesn't have active subscription */
  | 'NO_ACTIVE_SUBSCRIPTION'
  /** customer doesn't have subscription at all (new customer) */
  | 'NO_SUBSCRIPTION'
  /** icorrect subscription plan */
  | 'SUBSCRIPTION_PLAN_NOT_FOUND'
  /** user address doesn't exist for given user */
  | 'USER_ADDRESS_NOT_FOUND'
  /** payment method doesn't exist for given user */
  | 'PAYMENT_METHOD_NOT_FOUND'
  /** session was not found (purchase, subscription change plan, card update, etc.) */
  | 'SESSION_NOT_FOUND'
  /** we can't do more 3 skip times a row */
  | 'SKIP_LIMIT_EXCEEDED';

/** Landing block: products in cards */
export type CardsProductsMobileLandingBlock = MobileLandingBlock & {
  __typename?: 'CardsProductsMobileLandingBlock';
  /** Catalog item id or block type if default structure */
  id: Scalars['String'];
  /** Block type. Please note, that values of this type will be extended in future. */
  type: MobileLandingBlockType;
  /** item title */
  title: Scalars['String'];
  /** list of products */
  cards: Array<Product>;
  /** name of recommender algorithm for analytics */
  recommenderName?: Maybe<Scalars['String']>;
};

export type Cart = {
  __typename?: 'Cart';
  /** subscription price details */
  subscription?: Maybe<SubscriptionLineItem>;
  /** ecommerce price details */
  products?: Maybe<Array<ProductLineItem>>;
  /** picked product items */
  pickedProducts?: Maybe<Array<PickProductLineItem>>;
  /** gift card details */
  giftCard?: Maybe<GiftCardLineItem>;
  /** gift subscription details */
  giftSubscription?: Maybe<GiftSubscriptionLineItem>;
  /** buy your queue items */
  queueItems?: Maybe<Array<QueueLineItem>>;
  /** total price of all items in the cart */
  total: Scalars['Long'];
  /** sum of all a la carte product prices without any discounts */
  subTotal?: Maybe<Scalars['Long']>;
  /** discount price details */
  discounts?: Maybe<Array<DiscountLineItem>>;
  /** shipping price details */
  shipping?: Maybe<Array<ShippingLineItem>>;
  /** credits details */
  credits?: Maybe<Array<CreditLineItem>>;
  /** list of price rules, describes different types of offers (full bottle, tossin, etc.) */
  appliedPriceRules?: Maybe<Array<PriceRule>>;
  /** tag recommended to user based on state of cart, shown on cart modification */
  recommendationTag?: Maybe<Tag>;
  /** products that were removed from cart due to offer expiration */
  removedProducts?: Maybe<Array<Product>>;
  /** identifier of guest card (stored in redis) */
  id?: Maybe<Scalars['String']>;
};

export type CartClearInput = {
  /** analytics metadata */
  metadata?: Maybe<AnalyticsMetadataInput>;
};

export type CartData = {
  __typename?: 'CartData';
  /** user cart for goods */
  cart: Cart;
};

export type CartError = OperationError & {
  __typename?: 'CartError';
  /** code of error */
  errorCode: CartErrorCode;
  /** customer error message */
  message: Scalars['String'];
};

export type CartErrorCode = 
  /** no trading item was found by passed id */
  | 'TRADING_ITEM_NOT_FOUND'
  /** icorrect subscription plan */
  | 'SUBSCRIPTION_PLAN_NOT_FOUND'
  /** product is out of stock */
  | 'OUT_OF_STOCK'
  /** error specific for delete operation (specified item was not found in Scent db) */
  | 'PURCHASE_ITEM_NOT_FOUND'
  /** shopping cart was not found for given user */
  | 'CART_NOT_FOUND'
  /** no subscription queue item was found by passed id */
  | 'QUEUE_ITEM_NOT_FOUND'
  /** Customer already has active subscription */
  | 'ALREADY_ACTIVE_SUBSCRIPTION';

/** Landing block: cart products call to action */
export type CartMobileLandingBlock = MobileLandingBlock & {
  __typename?: 'CartMobileLandingBlock';
  /** Catalog item id or block type if default structure */
  id: Scalars['String'];
  /** Block type. Please note, that values of this type will be extended in future. */
  type: MobileLandingBlockType;
  /** user cart for goods */
  cart: Cart;
};

export type CartOperationError = SecurityError | ServerError | CartError | ValidationError;

export type CartOperationInput = {
  /** subscription item */
  subscriptionItem?: Maybe<SubscriptionItemInput>;
  /** ecommerce item */
  productItems?: Maybe<Array<ProductItemInput>>;
  /** gift card item */
  giftCardItem?: Maybe<GiftCardItemInput>;
  /** gift card subscription item */
  giftSubscriptionItem?: Maybe<GiftSubscriptionItemInput>;
  /** picked product items */
  pickedProductItems?: Maybe<Array<PickedProductItemInput>>;
  /** subscription queue items */
  queueItems?: Maybe<Array<QueueItemInput>>;
  /** analytics metadata */
  metadata?: Maybe<AnalyticsMetadataInput>;
};

export type CartOperationPayload = {
  __typename?: 'CartOperationPayload';
  /** data of payment method data */
  data?: Maybe<CartData>;
  /** error data */
  error?: Maybe<CartOperationError>;
};

export type CaseSubscription = {
  __typename?: 'CaseSubscription';
  /** Case subscription availablity, `true` if case subscription is possible for user. */
  enabled: Scalars['Boolean'];
  /** Case subscription status, `true` if user has active case subscription. */
  selected: Scalars['Boolean'];
  /** Subscription price in cents */
  price: Scalars['Int'];
  /** Perfume case for current month */
  currentMonth?: Maybe<ProductOfMonth>;
};

export type CaseSubscriptionLineItem = {
  __typename?: 'CaseSubscriptionLineItem';
  /** label text */
  label: Scalars['String'];
  /** total amount, cents */
  price: Scalars['Long'];
};

export type Catalogue = {
  __typename?: 'Catalogue';
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
  layout: CatalogueLayoutType;
  /** SEO for web catalogue view */
  seo?: Maybe<CatalogueSeo>;
  /** placement info for analytics */
  analytics?: Maybe<CatalogueAnalytics>;
  /** how products can be searched by user, eg by brand, rating, etc */
  availableFilters: Array<ProductFilter>;
  /** how products can be sorted by user */
  availableSorts: Array<ProductSort>;
  /** leaves catalogue items with VISIBLE status and EXTRA_LEAVES status if extra is true */
  leaves: Array<Catalogue>;
  /** children catalogue items */
  children: Array<Catalogue>;
};


export type CatalogueAvailableFiltersArgs = {
  input?: Maybe<FiltersInput>;
};


export type CatalogueLeavesArgs = {
  input?: Maybe<LeavesInput>;
};

export type CatalogueAnalytics = {
  __typename?: 'CatalogueAnalytics';
  page?: Maybe<Scalars['String']>;
  placement?: Maybe<Scalars['String']>;
};

export type CatalogueLayoutType = 
  /** catalogue node has products */
  | 'Products'
  /** intermediate catalogue node in tree */
  | 'Leaves';

/** Landing block: quick access to catalog category */
export type CatalogueMobileLandingBlock = MobileLandingBlock & {
  __typename?: 'CatalogueMobileLandingBlock';
  /** Catalog item id or block type if default structure */
  id: Scalars['String'];
  /** Block type. Please note, that values of this type will be extended in future. */
  type: MobileLandingBlockType;
  /** app root catalog */
  catalogue: Catalogue;
};

export type CatalogueSeo = {
  __typename?: 'CatalogueSeo';
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ChangePlanData = {
  __typename?: 'ChangePlanData';
  /** New subscription plan */
  plan: SubscriptionPlan;
  /** Next biling date */
  nextBillingDate: Scalars['LocalDate'];
  /** Next shipment data */
  shipmentPeriod: DateRange;
};

export type ChangePlanError = OperationError & {
  __typename?: 'ChangePlanError';
  /** code of error */
  errorCode: ChangePlanErrorCode;
  /** customer error message */
  message: Scalars['String'];
};

export type ChangePlanErrorCode = 
  /** couldn't change to the same plan */
  | 'SAME_PLAN'
  /** couldn't change to given plan since it's not listed on change plan grid */
  | 'NOT_ALLOWED_PLAN';

export type ChangePlansInquiryInput = {
  /** add current plan to change options */
  includeCurrent?: Maybe<Scalars['Boolean']>;
};

export type Collection = {
  __typename?: 'Collection';
  /** internal id of collection */
  id: Scalars['Long'];
  /** header collection name */
  title: Scalars['String'];
  /** body text about collection */
  description: Scalars['String'];
  /**
   * type of a collection, like BathBody collection or mixed products collection
   * null means mixed/any type of products in collection
   */
  collectionType?: Maybe<ProductGroup>;
  /** collection gender */
  gender: ProductGender;
  /** custom url for collection */
  url: Scalars['String'];
  /** determine status of collection */
  status: CollectionStatus;
  /** ordered list of products in collection */
  products: Array<Product>;
  /** main image desktop @3 */
  imgDesktop?: Maybe<Scalars['String']>;
  /** main image mobile @3 */
  imgMobile?: Maybe<Scalars['String']>;
  /** section content null/'default'/custom text */
  howItWorks?: Maybe<Scalars['String']>;
  /** section mode 'full'/'short' */
  footer?: Maybe<Scalars['String']>;
  /** video url */
  video?: Maybe<Scalars['String']>;
  /** image gallery */
  gallery?: Maybe<Array<Maybe<Scalars['String']>>>;
  buttonTitle?: Maybe<Scalars['String']>;
  group?: Maybe<CollectionGroup>;
  productSource?: Maybe<ProductSource>;
};

export type CollectionGroup = 
  | 'CAPSULE'
  | 'CURATED';

export type CollectionStatus = 
  /** show on the site normally */
  | 'ACTIVE'
  /** show on the site only via direct link */
  | 'TESTING'
  /** don't show on the site */
  | 'INACTIVE';

/** Landing block: fragrance playlists */
export type CollectionsMobileLandingBlock = MobileLandingBlock & {
  __typename?: 'CollectionsMobileLandingBlock';
  /** Catalog item id or block type if default structure */
  id: Scalars['String'];
  /** Block type. Please note, that values of this type will be extended in future. */
  type: MobileLandingBlockType;
  /** list of products */
  collections: Array<Collection>;
};

export type Color = {
  __typename?: 'Color';
  code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Coupon = {
  __typename?: 'Coupon';
  /** id of coupon */
  id?: Maybe<Scalars['Long']>;
  /** type of coupon */
  type?: Maybe<CouponType>;
  /** code of coupon */
  code?: Maybe<Scalars['String']>;
  /** absolute amount of discount */
  discountAmount?: Maybe<Scalars['Int']>;
  /** percent amount of discount */
  discountPercentage?: Maybe<Scalars['Int']>;
  /** indicator that shows whether client should show payment form or not */
  shouldCharge?: Maybe<Scalars['Boolean']>;
  /**
   * amount in cents that is initially charged when user subscribes using marketing coupon.
   * E.g. chargeAmount = 1 for marketing coupons that require authroization fee (groupon, sweatcoin, etc.)
   */
  chargeAmount?: Maybe<Scalars['Int']>;
  /** additional price of shipping (valid for FREE_TRIAL and SETUP_FEE discount types) */
  extraShippingPrice?: Maybe<Scalars['Int']>;
  /** type of marketing coupon (eg sweatcoin, groupon, etc) */
  marketingCouponOfferType?: Maybe<Scalars['String']>;
  /** shows where coupon came from: entered manually by user or automatically from landing page */
  origin?: Maybe<OriginType>;
  /** product that is added as free order during purchase */
  freeProduct?: Maybe<Product>;
};


export type CouponFreeProductArgs = {
  gender?: Maybe<UserGender>;
};

export type CouponApplyData = {
  __typename?: 'CouponApplyData';
  /** applied coupon */
  coupon?: Maybe<Coupon>;
};

export type CouponApplyError = SecurityError | ServerError | CouponError | BusinessError;

export type CouponApplyInput = {
  /** Coupon code or offer code */
  couponCode: Scalars['String'];
  /** shows where coupon came from: entered manually by user or automatically from landing page */
  origin?: Maybe<OriginType>;
  /** analytics metadata */
  metadata?: Maybe<AnalyticsMetadataInput>;
  /** whether coupon should be applied or only validated */
  validateOnly?: Maybe<Scalars['Boolean']>;
};

export type CouponApplyPayload = {
  __typename?: 'CouponApplyPayload';
  /** data of coupon apply */
  data?: Maybe<CouponApplyData>;
  /** error data */
  error?: Maybe<CouponApplyError>;
};

export type CouponClearError = ServerError;

export type CouponClearPayload = {
  __typename?: 'CouponClearPayload';
  /** error data */
  error?: Maybe<CouponClearError>;
};

export type CouponError = OperationError & {
  __typename?: 'CouponError';
  /** code of error */
  errorCode: CouponErrorCode;
  /** human readable error message */
  message: Scalars['String'];
};

export type CouponErrorCode = 
  /**
   * Coupon is allowed only for first time subscribers
   * Error message ex.: This coupon code can be redeemed for first subscription only
   */
  | 'ONLY_FIRST_SUBSCRIBERS'
  /**
   * Coupon is allowed only for new subscribers
   * Error message ex.: This coupon code can be redeemed for new subscription only
   */
  | 'ONLY_NEW_SUBSCRIBERS'
  /**
   * Coupon with given code was not found
   * Error message ex.: Coupons [NYC500] not found
   */
  | 'NOT_FOUND'
  /**
   * Coupon expiration date has already passed
   * Error message ex.: This coupon code has already been expired
   */
  | 'PERIOD_ENDED'
  /**
   * Coupon was already activated
   * Error message ex.: This coupon code has already been redeemed
   */
  | 'ACTIVATED'
  /**
   * Coupon code has already been redeemed limited times
   * Error message ex.: This coupon code has already been redeemed limited times
   */
  | 'MAXED_OUT'
  /**
   * Coupon is not activated yet
   * Error message ex.: This coupon code will be active later
   */
  | 'NOT_ACTIVE'
  /**
   * Coupon is disabled
   * Error message ex.: This coupon code has already been disabled
   */
  | 'DISABLED'
  /** Coupon has lower value than coupon stored in session */
  | 'COUPON_HAS_LOWER_VALUE'
  /** Coupon with given restrictions has already been redeemed on this account */
  | 'ALREADY_REDEEMED_ON_ACCOUNT'
  /** Coupon is not accepted for given subscription plan */
  | 'NOT_APPLICABLE_FOR_PLAN'
  /** Coupon can be redeemed for resubscription only */
  | 'RESUBSCRIPTION_ONLY'
  /** Unexpected error */
  | 'UNKNOWN';

export type CouponFilterInput = {
  /** filter coupon,  only if discount has not been processed yet, for example before customer receives RESUBFREE product */
  unprocessed?: Maybe<Scalars['Boolean']>;
};

/** entity of coupon redemption */
export type CouponRedemption = {
  __typename?: 'CouponRedemption';
  /** date of redemption */
  createdDate: Scalars['LocalDateTime'];
  /** coupon code */
  code: Scalars['String'];
  /** type of coupon */
  type: CouponType;
  /** type of offer for marketing coupon */
  marketingCouponOfferType?: Maybe<Scalars['String']>;
  /** amount of discount if value */
  discountAmount?: Maybe<Scalars['Int']>;
  /** amount of discount if percent */
  discountPercentage?: Maybe<Scalars['Int']>;
  /** added as separate order item on subscribe/resubscribe as free product offer */
  freeProductSku?: Maybe<Scalars['String']>;
};

export type CouponRedemptionData = {
  __typename?: 'CouponRedemptionData';
  /** list of coupon redemtions */
  couponRedemptions: Array<CouponRedemption>;
};

/** types of coupon apply cases */
export type CouponRedemptionOperationType = 
  /**
   * filter by resubscribe coupons codes, which are used in main marketing flows,
   * it doesn't include any personal or specific codes
   */
  | 'RESUBSCRIBE';

export type CouponRedemptionsInput = {
  /** filter by operation type */
  operation?: Maybe<CouponRedemptionOperationType>;
};

export type CouponType = 
  /** marketing coupon like groupon, etc */
  | 'MARKETING'
  /** coupon for order */
  | 'ORDER';

export type CreateQuizResultError = ServerError;

export type CreateQuizResultInput = {
  /** type of quiz, used for determine questions and answers */
  type?: Maybe<QuizType>;
  /** answers */
  result?: Maybe<Array<Maybe<QuizAnswerInput>>>;
};

export type CreateQuizResultPayload = {
  __typename?: 'CreateQuizResultPayload';
  /** error data */
  error?: Maybe<CreateQuizResultError>;
};

export type CreditBalance = {
  __typename?: 'CreditBalance';
  /** amount of account credits on user balance */
  accountCredits: Scalars['Int'];
  /** amount of ecommerce credits on user balance */
  ecommerceCredits: Scalars['Int'];
};

export type CreditLineItem = {
  __typename?: 'CreditLineItem';
  /** label text */
  label: Scalars['String'];
  /** amount of credits, cents */
  amount: Scalars['Long'];
};

/** hold only USD for now, could be extended from https://shopify.dev/docs/admin-api/graphql/reference/object/currencycode */
export type CurrencyCode = 
  /** United States Dollars (USD). */
  | 'USD';

export type CurrentUserError = ServerError | SecurityError;

export type DataProductDescriptionSection = ProductDescriptionSection & {
  __typename?: 'DataProductDescriptionSection';
  id: Scalars['String'];
  title: Scalars['String'];
  /** free json metadata that is used to construct complex ui blocks (e.g. lab results with links) */
  data: Scalars['JSON'];
};

export type DateRange = {
  __typename?: 'DateRange';
  /** interval from */
  from: Scalars['LocalDate'];
  /** interval to, nullable, if until date is not specified (infinity) */
  to?: Maybe<Scalars['LocalDate']>;
};

export type DeleteFromQueueError = OperationError & {
  __typename?: 'DeleteFromQueueError';
  errorCode: DeleteFromQueueErrorCode;
  /** human readable error message */
  message: Scalars['String'];
};

export type DeleteFromQueueErrorCode = 
  | 'NEGATIVE_INDEX'
  /** queue item not found */
  | 'QUEUE_ITEM_NOT_FOUND'
  /** customer can't add to queue when he is on light plan subscription */
  | 'LITE_PLAN'
  /** common error */
  | 'SOMETHING_WENT_WRONG';

export type DeleteFromQueuePayload = {
  __typename?: 'DeleteFromQueuePayload';
  /** Get queue with custom plan name (eg MONTHLY_2PCS). By default subscription plan if any. */
  queue?: Maybe<Queue>;
  error?: Maybe<DeleteFromQueuePayloadError>;
};


export type DeleteFromQueuePayloadQueueArgs = {
  input?: Maybe<QueueInput>;
};

export type DeleteFromQueuePayloadError = SecurityError | ServerError | DeleteFromQueueError | ValidationError;

export type DeleteQueueItemInput = {
  /** index of queue cell to remove */
  index: Scalars['Int'];
  /** analytics metadata */
  metadata?: Maybe<AnalyticsMetadataInput>;
};

export type Discount = {
  __typename?: 'Discount';
  /** units, eg '$', '%' */
  unit: Scalars['String'];
  /** value, eg 1495 (cents for unit '$'), 25 (integer discount for unit '%') */
  amount: Scalars['Long'];
};

export type DiscountLineItem = {
  __typename?: 'DiscountLineItem';
  /** applied coupon */
  coupon?: Maybe<Coupon>;
  /** label text */
  label: Scalars['String'];
  /** label footnote */
  note?: Maybe<Scalars['String']>;
  /** units, eg '$', '%' */
  unit?: Maybe<Scalars['String']>;
  /** value, eg 1495 (cents for unit '$'), 25 (integer discount for unit '%') */
  amount: Scalars['Long'];
};

export type DowngradeInput = {
  /** plan to downgrade */
  plan: InitialSubscriptionPlan;
};

export type EcommercePriceRulesAndOffers = 
  /** toss-in offer applied from web page */
  | 'TOSSIN'
  /** toss-in offer applied from email */
  | 'TOSSIN_EMAIL'
  /** gift subscription offer */
  | 'GIFT_SUBSCRIPTION'
  /** Jason Wu product offer */
  | 'JASON_WU';

export type ErrorMetadata = {
  __typename?: 'ErrorMetadata';
  /** defines whether client should update payment method */
  needCardUpdate?: Maybe<Scalars['Boolean']>;
  /** defines whether client should do retry */
  needTryAgain?: Maybe<Scalars['Boolean']>;
};

/** payment page name type */
export type EventNameType = 
  /** payment page is opened */
  | 'PAYMENT_PAGE'
  /** form is opened */
  | 'PAYMENT_PAGE_FORM';

export type FilterCategoryType = 
  | 'CATEGORY'
  | 'RATING'
  | 'TYPES'
  | 'BRANDS'
  | 'NOTES';

export type FilterInput = {
  id: Scalars['String'];
  values?: Maybe<Array<Scalars['String']>>;
};

export type FilterSelectorType = 
  | 'SINGLE'
  | 'MULTIPLE';

export type FilterValue = {
  __typename?: 'FilterValue';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type FiltersInput = {
  /** in case there are already some applied custom filters and you need to get filter values respecting them. For example user choosed custom filter 'rating is higher 4' and you need to get brands values */
  filters?: Maybe<Array<FilterInput>>;
  /** if you need to fetch only specific filters */
  filtersCodes?: Maybe<Array<Scalars['String']>>;
};

export type FragranceFamilyDetail = {
  __typename?: 'FragranceFamilyDetail';
  name: Scalars['String'];
  image?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  products: Array<Product>;
};

export type FragranceFamilyInput = {
  /** product link slug or id */
  fragranceFamily: Scalars['String'];
};

export type FragranceFamilyPayload = {
  __typename?: 'FragranceFamilyPayload';
  data?: Maybe<FragranceFamilyDetail>;
};

export type GetQuizResultError = ServerError | SecurityError;

export type GiftBenefitItem = {
  __typename?: 'GiftBenefitItem';
  /** item text */
  text: Scalars['String'];
  /** flag of bold text */
  strong: Scalars['Boolean'];
};

export type GiftCardAcceptData = {
  __typename?: 'GiftCardAcceptData';
  /** gift card code */
  code: Scalars['String'];
  /** amount of account credits given to recipient */
  amount: Scalars['Int'];
};

export type GiftCardAcceptError = OperationError & {
  __typename?: 'GiftCardAcceptError';
  /** code of error */
  errorCode: GiftCardAcceptErrorCode;
  /** human readable error message */
  message: Scalars['String'];
};

export type GiftCardAcceptErrorCode = 
  /** Gift card entity was not found by given gift code */
  | 'GIFT_CARD_NOT_FOUND'
  /** Current gift card was already redeemed */
  | 'GIFT_CARD_ALREADY_REDEEMED'
  /** Order linked to gift card was cancelled (e.g. charge was refunded) */
  | 'GIFT_ORDER_REVOKED'
  /** Gateway error during activation of gift card */
  | 'GIFT_CARD_ACTIVATION_ERROR';

export type GiftCardAcceptInput = {
  /** gift card code */
  code: Scalars['String'];
};

export type GiftCardAcceptPayload = {
  __typename?: 'GiftCardAcceptPayload';
  /** gift card accept data */
  data?: Maybe<GiftCardAcceptData>;
  /** gift card accept error */
  error?: Maybe<GiftCardAcceptPayloadError>;
};

export type GiftCardAcceptPayloadError = SecurityError | GiftCardAcceptError | PaymentGatewayError;

export type GiftCardItemInput = {
  /** trading item id */
  productId: Scalars['Long'];
  /** type of gift card */
  type: GiftCardType;
  /** required only for digital card */
  recipient?: Maybe<GiftRecipientInput>;
};

export type GiftCardLineItem = {
  __typename?: 'GiftCardLineItem';
  /** label text, normally "Gift card" */
  label: Scalars['String'];
  /** type of gift card */
  type: GiftCardType;
  /** additional required details for digital cards only */
  recipient?: Maybe<GiftCardRecipient>;
  /** product information */
  product: Product;
  /** total amount, cents */
  price: Scalars['Long'];
};

export type GiftCardPurchaseItem = PurchaseItem & {
  __typename?: 'GiftCardPurchaseItem';
  /** id of order item */
  id: Scalars['Long'];
  /** total price */
  total: Scalars['Int'];
  /** number of units */
  quantity: Scalars['Int'];
};

export type GiftCardRecipient = {
  __typename?: 'GiftCardRecipient';
  /** first and last name of receiver */
  name: Scalars['String'];
  /** email of receiver */
  email: Scalars['String'];
  /** some message which will be visible for receiver during activation of this gift card */
  message: Scalars['String'];
  /** date when to notify reciever */
  date?: Maybe<Scalars['LocalDate']>;
};

export type GiftCardType = 
  /** digital gift card will send by email only, the activation code will be sent to the receiver's email */
  | 'DIGITAL'
  /** physical gift card will be send as real physical product by the shipping address of receiver */
  | 'PHYSICAL';

export type GiftPlansInquiryData = {
  __typename?: 'GiftPlansInquiryData';
  /** gift subscription frontend representation */
  representation: GiftSubscriptionFrontendRepresentation;
  /** list of available gift plans */
  plans: Array<GiftSubscriptionPlan>;
  /** offer code for promo */
  offer?: Maybe<EcommercePriceRulesAndOffers>;
};

export type GiftRecipientInput = {
  /** first and last name of gift recipient */
  name: Scalars['String'];
  /** email of gift recipient */
  email: Scalars['String'];
  /** free text that represents gift message */
  message: Scalars['String'];
  /** date when to notify reciever */
  date?: Maybe<Scalars['LocalDate']>;
  /** gender of gift receiver */
  gender?: Maybe<UserGender>;
};

export type GiftSubscriptionData = {
  __typename?: 'GiftSubscriptionData';
  /** gift subscription id */
  id: Scalars['Long'];
  /** gift code */
  code: Scalars['String'];
  /** first and last name of receiver */
  giverName: Scalars['String'];
  /** email of receiver */
  email: Scalars['String'];
  /** gift recipient gender */
  gender: Scalars['String'];
  /** indicator showing whether gift is activated or not */
  activated: Scalars['Boolean'];
  /** number of free months given from gift subscription */
  months: Scalars['Int'];
  /** indicator that shows whether recipient has already registered */
  recipientRegistered: Scalars['Boolean'];
};

export type GiftSubscriptionError = OperationError & {
  __typename?: 'GiftSubscriptionError';
  /** code of error */
  errorCode: GiftSubscriptionErrorCode;
  /** human readable error message */
  message: Scalars['String'];
};

export type GiftSubscriptionErrorCode = 
  /** Gift subscription entity was not found by given gift code */
  | 'GIFT_SUBSCRIPTION_NOT_FOUND'
  /** Current gift subscription was already redeemed */
  | 'GIFT_ALREADY_REDEEMED'
  /** Order linked to gift subscription was cancelled (e.g. charge was refunded) */
  | 'GIFT_ORDER_REVOKED';

export type GiftSubscriptionFrontendRepresentation = {
  __typename?: 'GiftSubscriptionFrontendRepresentation';
  /** background image */
  image: Scalars['String'];
  /** banner background image */
  bannerImage: Scalars['String'];
  /** banner title, eg 'Give a Gift Subscription' */
  bannerTitle: Scalars['String'];
  /** banner description text */
  bannerText: Scalars['String'];
  /** list if label items */
  bannerLabel?: Maybe<Scalars['String']>;
  /** gift subscription screen header title */
  panelTitle: Scalars['String'];
  /** gift subscription screen header description */
  panelText: Scalars['String'];
  /** is holiday gift subscription offer is enabled */
  holidayGiftSubscription: Scalars['Boolean'];
};

export type GiftSubscriptionInput = {
  /** gift code */
  code: Scalars['String'];
};

export type GiftSubscriptionItemInput = {
  /** subscription validity term in months */
  months: Scalars['Int'];
  /** info about recipient of gift subscription */
  recipient?: Maybe<GiftRecipientInput>;
  /** type of offer */
  offer?: Maybe<EcommercePriceRulesAndOffers>;
};

export type GiftSubscriptionLineItem = {
  __typename?: 'GiftSubscriptionLineItem';
  /** gift subscription plan */
  plan?: Maybe<SubscriptionPlan>;
  /** label text */
  label: Scalars['String'];
  /** additional required details for digital cards only */
  recipient?: Maybe<GiftCardRecipient>;
  /** total amount, cents */
  price: Scalars['Long'];
};

/** Landing block: gift subscription promo block */
export type GiftSubscriptionMobileLandingBlock = MobileLandingBlock & {
  __typename?: 'GiftSubscriptionMobileLandingBlock';
  /** Catalog item id or block type if default structure */
  id: Scalars['String'];
  /** Block type. Please note, that values of this type will be extended in future. */
  type: MobileLandingBlockType;
  /** Block title text */
  title: Scalars['String'];
  /** Call to action UI content */
  representation: GiftSubscriptionFrontendRepresentation;
};

export type GiftSubscriptionPayload = {
  __typename?: 'GiftSubscriptionPayload';
  /** gift subscription data */
  data?: Maybe<GiftSubscriptionData>;
  /** gift subscription error */
  error?: Maybe<GiftSubscriptionPayloadError>;
};

export type GiftSubscriptionPayloadError = SecurityError | GiftSubscriptionError | PaymentGatewayError;

export type GiftSubscriptionPlan = {
  __typename?: 'GiftSubscriptionPlan';
  /** subscription plan */
  plan: SubscriptionPlan;
  /** frontend representation */
  representation: GiftSubscriptionPlanFrontendRepresentation;
};

export type GiftSubscriptionPlanFrontendRepresentation = {
  __typename?: 'GiftSubscriptionPlanFrontendRepresentation';
  /** panel title with plan name */
  title: Scalars['String'];
  /** panel subtitle with plan price */
  subtitle: Scalars['String'];
  /** list of body items */
  benefits: Array<GiftBenefitItem>;
  /** list if label items */
  labels: Array<Scalars['String']>;
  /** button text call to action */
  buttonText: Scalars['String'];
  /** subscription button text call to action */
  subscriptionText?: Maybe<Scalars['String']>;
};

export type GiftSubscriptionPurchaseItem = PurchaseItem & {
  __typename?: 'GiftSubscriptionPurchaseItem';
  /** id of order item */
  id: Scalars['Long'];
  /** gift subscription id */
  giftSubscriptionId: Scalars['Long'];
  /** total price */
  total: Scalars['Int'];
  /** number of units */
  quantity: Scalars['Int'];
};

export type GiftSubscriptionRedeemInput = {
  /** shipping address */
  shipping: AddressInput;
  /** gift subscription code */
  code: Scalars['String'];
};

export type ImageType = 
  | 'DESKTOP'
  | 'MOBILE';

export type Images = {
  __typename?: 'Images';
  url: Scalars['String'];
};

export type InitialSubscriptionPlan = 
  | 'MONTHLY'
  | 'MONTHLY_2PCS'
  | 'MONTHLY_3PCS'
  | 'MONTHLY_LIGHT';

export type InquiryItems = {
  __typename?: 'InquiryItems';
  /** subscription price details */
  subscription?: Maybe<SubscriptionLineItem>;
  /** case subscription price details */
  caseSubscription?: Maybe<CaseSubscriptionLineItem>;
  /** premium products price details */
  upcharge?: Maybe<UpchargeLineItem>;
  /** gift card defails */
  giftCard?: Maybe<GiftCardLineItem>;
  /** gift subscription details */
  giftSubscription?: Maybe<GiftSubscriptionLineItem>;
  /** ecommerce price details */
  products?: Maybe<Array<ProductLineItem>>;
  /** premium products that will be purchased together with subscription */
  premiumProducts?: Maybe<Array<ProductLineItem>>;
  /** buy your queue items */
  queueItems?: Maybe<Array<QueueLineItem>>;
  /** discount price details */
  discounts?: Maybe<Array<DiscountLineItem>>;
  /** shipping price details */
  shipping?: Maybe<Array<ShippingLineItem>>;
  /** taxes price details */
  tax?: Maybe<TaxLineItem>;
  /** credits details */
  credits?: Maybe<Array<CreditLineItem>>;
  /** case as a gift at the first subscription */
  subscriptionCase?: Maybe<Product>;
};


export type LabelsType = 
  | 'MAIN'
  | 'HEALTH';

export type LeavesInput = {
  /** leaves catalogue items with VISIBLE status and EXTRA_LEAVES status if extra is true */
  extra?: Maybe<Scalars['Boolean']>;
};

export type LimitedEditionInfo = {
  __typename?: 'LimitedEditionInfo';
  volumeCustomText?: Maybe<Scalars['String']>;
  productsRemainingCount: Scalars['Int'];
};

/** Landing block: products in list */
export type ListProductsMobileLandingBlock = MobileLandingBlock & {
  __typename?: 'ListProductsMobileLandingBlock';
  /** Catalog item id or block type if default structure */
  id: Scalars['String'];
  /** Block type. Please note, that values of this type will be extended in future. */
  type: MobileLandingBlockType;
  /** item title */
  title: Scalars['String'];
  /** list of products */
  list: Array<Product>;
  /** name of recommender algorithm for analytics */
  recommenderName?: Maybe<Scalars['String']>;
};




export type MobileBanner = {
  __typename?: 'MobileBanner';
  /** id of banner */
  id: Scalars['String'];
  /** name of banner */
  name: Scalars['String'];
  /** name of banner in Mixpannel */
  mixpanelName: Scalars['String'];
  /** link to image */
  image?: Maybe<Scalars['String']>;
  /** link to action */
  link?: Maybe<Scalars['String']>;
};

export type MobileLandingBlock = {
  /** catalog item id or block type if default structure */
  id: Scalars['String'];
  /** block type, values of this type can be extended */
  type: MobileLandingBlockType;
};

export type MobileLandingBlockType = 
  | 'BANNERS'
  | 'BESTSELLERS'
  | 'RECOMMENDED'
  | 'NEW_ARRIVALS'
  | 'COLLECTIONS'
  | 'CATALOGUE'
  | 'TOP_RATED'
  | 'SKINCARE_NEW_ARRIVALS'
  | 'MAKEUP_NEW_ARRIVALS'
  | 'UNRATED_PRODUCTS'
  | 'BLOG_POSTS'
  | 'TAKE_QUIZ'
  | 'CART'
  | 'GIFT_SUBSCRIPTION';

export type MobileLandingGridData = {
  __typename?: 'MobileLandingGridData';
  /** blocks of landing grid */
  blocks: Array<MobileLandingBlock>;
  /** there are more blocks in the next page */
  hasNext: Scalars['Boolean'];
};

export type MobileLandingGridInput = {
  /**
   * dedicated grid structure:
   * * order and blocks are defined via catalog tree: Mobile/LandingGrid
   * * child nodes of the root are split tests
   * * child nodes of split test are grid blocks
   * if structure is null, then default structure is used
   * client get structure from Firebase Remote Config
   */
  structure?: Maybe<Scalars['String']>;
  /** limit of products in blocks */
  productsLimit?: Maybe<Scalars['Int']>;
  /** blocks by external request */
  blockTypes?: Maybe<Array<MobileLandingBlockType>>;
  /** blocks pagination offset */
  offset?: Maybe<Scalars['Int']>;
  /** blocks pagination limit */
  limit?: Maybe<Scalars['Int']>;
};

export type MobileLandingGridPayload = {
  __typename?: 'MobileLandingGridPayload';
  /** mobile landing grid data */
  data?: Maybe<MobileLandingGridData>;
  /** gift subscription error */
  error?: Maybe<MobileLandingGridPayloadError>;
};

export type MobileLandingGridPayloadError = ServerError;

export type MobileNotification = {
  __typename?: 'MobileNotification';
  /** type of notification */
  type: MobileNotificationType;
  /** user notification text */
  text: Scalars['String'];
  /** possible value, inlined in notification text */
  value?: Maybe<Scalars['String']>;
};

export type MobileNotificationData = {
  __typename?: 'MobileNotificationData';
  /** notification for application */
  notification?: Maybe<MobileNotification>;
};

export type MobileNotificationInput = {
  /** default coupon code used for subscribe */
  subscriptionCouponCode?: Maybe<Scalars['String']>;
};

export type MobileNotificationPayload = {
  __typename?: 'MobileNotificationPayload';
  /** mobile landing grid data */
  data?: Maybe<MobileNotificationData>;
  /** mobile landing grid error */
  error?: Maybe<MobileNotificationPayloadError>;
};

export type MobileNotificationPayloadError = SecurityError | ServerError;

export type MobileNotificationType = 
  /** subscription has status Paused */
  | 'UNPAUSE_NOTIFICATION'
  /** no active subscription */
  | 'SUBSCRIBE_NOTIFICATION'
  /** subsciption has status Cancelled */
  | 'RESUBSCRIBE_NOTIFICATION'
  /** subsciption has status Unpaid */
  | 'UPDATE_CARD_NOTIFICATION'
  /** queue is not filled for the first month before welcome kit */
  | 'TIMER_NOTIFICATION';

/** object representation of Money, idea was grabbed from shopify https://shopify.dev/docs/admin-api/graphql/reference/object/moneyv2 */
export type Money = {
  __typename?: 'Money';
  /** Decimal money amount. */
  amount: Scalars['BigDecimal'];
  /** Currency of the money. */
  currencyCode: CurrencyCode;
};

export type MoveInQueueError = OperationError & {
  __typename?: 'MoveInQueueError';
  errorCode: MoveInQueueErrorCode;
  /** human readable error message */
  message: Scalars['String'];
};

export type MoveInQueueErrorCode = 
  | 'NEGATIVE_INDEX'
  /** customer can't add to queue when he is on light plan subscription */
  | 'LITE_PLAN'
  /** common error */
  | 'SOMETHING_WENT_WRONG';

export type MoveInQueueInput = {
  /** index of source cell in queue */
  indexFrom: Scalars['Int'];
  /** index of target cell in queu */
  indexTo: Scalars['Int'];
  /** analytics metadata */
  metadata?: Maybe<AnalyticsMetadataInput>;
};

export type MoveInQueuePayload = {
  __typename?: 'MoveInQueuePayload';
  /** Get queue with custom plan name (eg MONTHLY_2PCS). By default subscription plan if any. */
  queue?: Maybe<Queue>;
  error?: Maybe<MoveInQueuePayloadError>;
};


export type MoveInQueuePayloadQueueArgs = {
  input?: Maybe<QueueInput>;
};

export type MoveInQueuePayloadError = SecurityError | ServerError | MoveInQueueError | ValidationError;

/**
 * PURCHASE FLOW
 * 
 * 0. Initial steps:
 *  * add goods to cart (subscription, ecommerce, gift subscription, etc), which will be saved to session
 *  * apply offer or coupon via mutation `couponApply`, which will be saved to session or clear coupon by `couponClear`
 *  * get purchase price details via query `purchaseInquiry`
 *  * user fill UI form with payment method and shipping (billing) address
 * 1. Start purchase session via mutation `purchaseBegin`
 * 2. Send UI form to Recurly to get Token data, for AMAZON_PAY payment type use Amazon lib
 * 3. Complete purchase with received Token data via mutation `purchaseCommit`, submit Recurly/Amazon HTTP error via mutation `purchaseFailed`
 * 4. Check purchase session for assync execution via `purchaseSession`
 * 
 * 
 * CHANGE PLAN FLOW: UPGRADE, DOWNGRADE, CHANGE FREQUENCY
 * 
 * 1. Get available plans via query `user` at `Subscription.plansInquiry` and ask user on plan desicion
 * 2. Get change price details via query `subscriptionChangePlanInquiry`
 * 3. Start upgrade session via mutation `subscriptionChangePlan`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 4. Check upgrade session for assync execution via query `subscriptionChangePlanSession`
 * 
 * 
 * SKIP AND PAUSE SUBSCRIPTON FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 2. Skip or pause subscription via mutation `subscriptionSkip`
 * 3. Resume subscription if required via mutation `subscriptionUnskip`
 * 
 * UNSUBSCRIBE FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 1. Get available unsubscribe reasons via query `user` at `Subscription.unsubscribeReasons` and ask user
 * 2. Unsubscribe via mutation `subscriptionUnsubscribe`, using refund desicion and unsubscribe reason
 * 3. Resume subscription if required via mutation `subscriptionResubscribe`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 
 * 
 * PAYMENT METHODS FLOW
 * 
 * 1. New payment method can be added same as purchase via calling mutation `paymentMethodCreateBegin`, getting token from Recurly/Amazon lib, calling `paymentMethodCreateCommit`
 * 2. Primary payment method can be set via mutation `paymentMethodSetPrimary`. Not valid or primary payment method cannot be used.
 * 3. Payment method can be removed via mutation `paymentMethodDelete`
 */
export type Mutation = {
  __typename?: 'Mutation';
  /**
   * apply coupon and save to session.
   * will be applied to subscription in case customer has active one.
   */
  couponApply: CouponApplyPayload;
  /** clear coupon session */
  couponClear: CouponClearPayload;
  /** start session of purchase flow */
  purchaseBegin: PurchaseBeginPayload;
  /** complete purchase flow */
  purchaseCommit: PurchaseCommitPayload;
  /** submit error to purchase session */
  purchaseFailed: PurchaseFailedPayload;
  /**
   * purchase in single call with existing payment method and shipping address
   * purchase items and offers are binded same way as for regular purchase
   */
  purchaseOneClick: PurchaseCommitPayload;
  /** change plan of subscription: upgrade, downgrade, change frequency */
  subscriptionChangePlan: SubscriptionChangePlanPayload;
  /** skip months or pause subscription and get refund, please check flow on `Mutation` docs */
  subscriptionSkip: SubscriptionSkipPayload;
  /** unskip or unpause subscription - regular flow */
  subscriptionUnskip: SubscriptionUnskipPayload;
  /**
   * unskip or unpause subscription in one click - used when user opens link from email
   * resumes customer's subscription and defines redirect link for calling client
   */
  subscriptionUnskipOneClick: SubscriptionUnskipPayload;
  /** cancel subscription and get refund, please check flow on `Mutation` docs */
  subscriptionUnsubscribe: SubscriptionUnsubscribePayload;
  /** resume subscription - regular resubscribe flow */
  subscriptionResubscribe: SubscriptionResubscribePayload;
  /**
   * resume subscription in one click - used when user opens link from email
   * resubscribes customer and defines redirect link for calling client
   */
  subscriptionResubscribeOneClick: SubscriptionResubscribePayload;
  /** begin creation of the new payment method */
  paymentMethodCreateBegin: PaymentMethodBeginPayload;
  /** finish creation of the new payment method */
  paymentMethodCreateCommit: PaymentMethodCommitPayload;
  /** set payment method as primary */
  paymentMethodSetPrimary: PaymentMethodSetPrimaryPayload;
  /** delete payment method */
  paymentMethodDelete: PaymentMethodDeletePayload;
  /** add item or change number of units at user cart */
  cartModify: CartOperationPayload;
  /** remove item from user cart */
  cartDelete: CartOperationPayload;
  /** clear user cart */
  cartClear: CartOperationPayload;
  /** marketing data sends to back when pixel fires */
  pixelApply: PixelDataPayload;
  /** user gives agreement to share email */
  userShareEmail: UserShareEmailPayload;
  /** fires when user slick on unsubscribe on UI and started long flow of unsubscription */
  unsubscribeFlowStarted: UnsubscribeFlowStartedPayload;
  /** Add item to queue */
  addToQueue: AddToQueuePayload;
  /** Add multiple items to queue */
  addMultipleItemsToQueue: AddMultipleItemsToQueuePayload;
  /** Delete item from queue */
  deleteFromQueue: DeleteFromQueuePayload;
  /** Move item in queue, change items order */
  moveInQueue: MoveInQueuePayload;
  /** Replace item in queue */
  updateInQueue: UpdateInQueuePayload;
  /** Save quiz results */
  createQuizResult: CreateQuizResultPayload;
  /** add new address to user */
  addressAdd: AddressAddPayload;
  /** update existing user address */
  addressUpdate: AddressUpdatePayload;
  /** delete existing user address */
  addressDelete: AddressDeletePayload;
  /** Redeem gift subscription */
  giftSubscriptionRedeem: GiftSubscriptionPayload;
  /** Accept gift card */
  giftCardAccept: GiftCardAcceptPayload;
  /** payment page sends event data to back when page is opened */
  paymentPageEventFire: PaymentPageEventFirePayload;
  /** update user personal information (e.g. first name, email, etc.) */
  userPersonalInfoUpdate: UserPersonalInfoUpdatePayload;
};


/**
 * PURCHASE FLOW
 * 
 * 0. Initial steps:
 *  * add goods to cart (subscription, ecommerce, gift subscription, etc), which will be saved to session
 *  * apply offer or coupon via mutation `couponApply`, which will be saved to session or clear coupon by `couponClear`
 *  * get purchase price details via query `purchaseInquiry`
 *  * user fill UI form with payment method and shipping (billing) address
 * 1. Start purchase session via mutation `purchaseBegin`
 * 2. Send UI form to Recurly to get Token data, for AMAZON_PAY payment type use Amazon lib
 * 3. Complete purchase with received Token data via mutation `purchaseCommit`, submit Recurly/Amazon HTTP error via mutation `purchaseFailed`
 * 4. Check purchase session for assync execution via `purchaseSession`
 * 
 * 
 * CHANGE PLAN FLOW: UPGRADE, DOWNGRADE, CHANGE FREQUENCY
 * 
 * 1. Get available plans via query `user` at `Subscription.plansInquiry` and ask user on plan desicion
 * 2. Get change price details via query `subscriptionChangePlanInquiry`
 * 3. Start upgrade session via mutation `subscriptionChangePlan`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 4. Check upgrade session for assync execution via query `subscriptionChangePlanSession`
 * 
 * 
 * SKIP AND PAUSE SUBSCRIPTON FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 2. Skip or pause subscription via mutation `subscriptionSkip`
 * 3. Resume subscription if required via mutation `subscriptionUnskip`
 * 
 * UNSUBSCRIBE FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 1. Get available unsubscribe reasons via query `user` at `Subscription.unsubscribeReasons` and ask user
 * 2. Unsubscribe via mutation `subscriptionUnsubscribe`, using refund desicion and unsubscribe reason
 * 3. Resume subscription if required via mutation `subscriptionResubscribe`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 
 * 
 * PAYMENT METHODS FLOW
 * 
 * 1. New payment method can be added same as purchase via calling mutation `paymentMethodCreateBegin`, getting token from Recurly/Amazon lib, calling `paymentMethodCreateCommit`
 * 2. Primary payment method can be set via mutation `paymentMethodSetPrimary`. Not valid or primary payment method cannot be used.
 * 3. Payment method can be removed via mutation `paymentMethodDelete`
 */
export type MutationCouponApplyArgs = {
  input: CouponApplyInput;
};


/**
 * PURCHASE FLOW
 * 
 * 0. Initial steps:
 *  * add goods to cart (subscription, ecommerce, gift subscription, etc), which will be saved to session
 *  * apply offer or coupon via mutation `couponApply`, which will be saved to session or clear coupon by `couponClear`
 *  * get purchase price details via query `purchaseInquiry`
 *  * user fill UI form with payment method and shipping (billing) address
 * 1. Start purchase session via mutation `purchaseBegin`
 * 2. Send UI form to Recurly to get Token data, for AMAZON_PAY payment type use Amazon lib
 * 3. Complete purchase with received Token data via mutation `purchaseCommit`, submit Recurly/Amazon HTTP error via mutation `purchaseFailed`
 * 4. Check purchase session for assync execution via `purchaseSession`
 * 
 * 
 * CHANGE PLAN FLOW: UPGRADE, DOWNGRADE, CHANGE FREQUENCY
 * 
 * 1. Get available plans via query `user` at `Subscription.plansInquiry` and ask user on plan desicion
 * 2. Get change price details via query `subscriptionChangePlanInquiry`
 * 3. Start upgrade session via mutation `subscriptionChangePlan`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 4. Check upgrade session for assync execution via query `subscriptionChangePlanSession`
 * 
 * 
 * SKIP AND PAUSE SUBSCRIPTON FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 2. Skip or pause subscription via mutation `subscriptionSkip`
 * 3. Resume subscription if required via mutation `subscriptionUnskip`
 * 
 * UNSUBSCRIBE FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 1. Get available unsubscribe reasons via query `user` at `Subscription.unsubscribeReasons` and ask user
 * 2. Unsubscribe via mutation `subscriptionUnsubscribe`, using refund desicion and unsubscribe reason
 * 3. Resume subscription if required via mutation `subscriptionResubscribe`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 
 * 
 * PAYMENT METHODS FLOW
 * 
 * 1. New payment method can be added same as purchase via calling mutation `paymentMethodCreateBegin`, getting token from Recurly/Amazon lib, calling `paymentMethodCreateCommit`
 * 2. Primary payment method can be set via mutation `paymentMethodSetPrimary`. Not valid or primary payment method cannot be used.
 * 3. Payment method can be removed via mutation `paymentMethodDelete`
 */
export type MutationPurchaseBeginArgs = {
  input: PurchaseBeginInput;
};


/**
 * PURCHASE FLOW
 * 
 * 0. Initial steps:
 *  * add goods to cart (subscription, ecommerce, gift subscription, etc), which will be saved to session
 *  * apply offer or coupon via mutation `couponApply`, which will be saved to session or clear coupon by `couponClear`
 *  * get purchase price details via query `purchaseInquiry`
 *  * user fill UI form with payment method and shipping (billing) address
 * 1. Start purchase session via mutation `purchaseBegin`
 * 2. Send UI form to Recurly to get Token data, for AMAZON_PAY payment type use Amazon lib
 * 3. Complete purchase with received Token data via mutation `purchaseCommit`, submit Recurly/Amazon HTTP error via mutation `purchaseFailed`
 * 4. Check purchase session for assync execution via `purchaseSession`
 * 
 * 
 * CHANGE PLAN FLOW: UPGRADE, DOWNGRADE, CHANGE FREQUENCY
 * 
 * 1. Get available plans via query `user` at `Subscription.plansInquiry` and ask user on plan desicion
 * 2. Get change price details via query `subscriptionChangePlanInquiry`
 * 3. Start upgrade session via mutation `subscriptionChangePlan`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 4. Check upgrade session for assync execution via query `subscriptionChangePlanSession`
 * 
 * 
 * SKIP AND PAUSE SUBSCRIPTON FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 2. Skip or pause subscription via mutation `subscriptionSkip`
 * 3. Resume subscription if required via mutation `subscriptionUnskip`
 * 
 * UNSUBSCRIBE FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 1. Get available unsubscribe reasons via query `user` at `Subscription.unsubscribeReasons` and ask user
 * 2. Unsubscribe via mutation `subscriptionUnsubscribe`, using refund desicion and unsubscribe reason
 * 3. Resume subscription if required via mutation `subscriptionResubscribe`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 
 * 
 * PAYMENT METHODS FLOW
 * 
 * 1. New payment method can be added same as purchase via calling mutation `paymentMethodCreateBegin`, getting token from Recurly/Amazon lib, calling `paymentMethodCreateCommit`
 * 2. Primary payment method can be set via mutation `paymentMethodSetPrimary`. Not valid or primary payment method cannot be used.
 * 3. Payment method can be removed via mutation `paymentMethodDelete`
 */
export type MutationPurchaseCommitArgs = {
  input: PurchaseCommitInput;
};


/**
 * PURCHASE FLOW
 * 
 * 0. Initial steps:
 *  * add goods to cart (subscription, ecommerce, gift subscription, etc), which will be saved to session
 *  * apply offer or coupon via mutation `couponApply`, which will be saved to session or clear coupon by `couponClear`
 *  * get purchase price details via query `purchaseInquiry`
 *  * user fill UI form with payment method and shipping (billing) address
 * 1. Start purchase session via mutation `purchaseBegin`
 * 2. Send UI form to Recurly to get Token data, for AMAZON_PAY payment type use Amazon lib
 * 3. Complete purchase with received Token data via mutation `purchaseCommit`, submit Recurly/Amazon HTTP error via mutation `purchaseFailed`
 * 4. Check purchase session for assync execution via `purchaseSession`
 * 
 * 
 * CHANGE PLAN FLOW: UPGRADE, DOWNGRADE, CHANGE FREQUENCY
 * 
 * 1. Get available plans via query `user` at `Subscription.plansInquiry` and ask user on plan desicion
 * 2. Get change price details via query `subscriptionChangePlanInquiry`
 * 3. Start upgrade session via mutation `subscriptionChangePlan`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 4. Check upgrade session for assync execution via query `subscriptionChangePlanSession`
 * 
 * 
 * SKIP AND PAUSE SUBSCRIPTON FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 2. Skip or pause subscription via mutation `subscriptionSkip`
 * 3. Resume subscription if required via mutation `subscriptionUnskip`
 * 
 * UNSUBSCRIBE FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 1. Get available unsubscribe reasons via query `user` at `Subscription.unsubscribeReasons` and ask user
 * 2. Unsubscribe via mutation `subscriptionUnsubscribe`, using refund desicion and unsubscribe reason
 * 3. Resume subscription if required via mutation `subscriptionResubscribe`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 
 * 
 * PAYMENT METHODS FLOW
 * 
 * 1. New payment method can be added same as purchase via calling mutation `paymentMethodCreateBegin`, getting token from Recurly/Amazon lib, calling `paymentMethodCreateCommit`
 * 2. Primary payment method can be set via mutation `paymentMethodSetPrimary`. Not valid or primary payment method cannot be used.
 * 3. Payment method can be removed via mutation `paymentMethodDelete`
 */
export type MutationPurchaseFailedArgs = {
  input: PurchaseFailedInput;
};


/**
 * PURCHASE FLOW
 * 
 * 0. Initial steps:
 *  * add goods to cart (subscription, ecommerce, gift subscription, etc), which will be saved to session
 *  * apply offer or coupon via mutation `couponApply`, which will be saved to session or clear coupon by `couponClear`
 *  * get purchase price details via query `purchaseInquiry`
 *  * user fill UI form with payment method and shipping (billing) address
 * 1. Start purchase session via mutation `purchaseBegin`
 * 2. Send UI form to Recurly to get Token data, for AMAZON_PAY payment type use Amazon lib
 * 3. Complete purchase with received Token data via mutation `purchaseCommit`, submit Recurly/Amazon HTTP error via mutation `purchaseFailed`
 * 4. Check purchase session for assync execution via `purchaseSession`
 * 
 * 
 * CHANGE PLAN FLOW: UPGRADE, DOWNGRADE, CHANGE FREQUENCY
 * 
 * 1. Get available plans via query `user` at `Subscription.plansInquiry` and ask user on plan desicion
 * 2. Get change price details via query `subscriptionChangePlanInquiry`
 * 3. Start upgrade session via mutation `subscriptionChangePlan`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 4. Check upgrade session for assync execution via query `subscriptionChangePlanSession`
 * 
 * 
 * SKIP AND PAUSE SUBSCRIPTON FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 2. Skip or pause subscription via mutation `subscriptionSkip`
 * 3. Resume subscription if required via mutation `subscriptionUnskip`
 * 
 * UNSUBSCRIBE FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 1. Get available unsubscribe reasons via query `user` at `Subscription.unsubscribeReasons` and ask user
 * 2. Unsubscribe via mutation `subscriptionUnsubscribe`, using refund desicion and unsubscribe reason
 * 3. Resume subscription if required via mutation `subscriptionResubscribe`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 
 * 
 * PAYMENT METHODS FLOW
 * 
 * 1. New payment method can be added same as purchase via calling mutation `paymentMethodCreateBegin`, getting token from Recurly/Amazon lib, calling `paymentMethodCreateCommit`
 * 2. Primary payment method can be set via mutation `paymentMethodSetPrimary`. Not valid or primary payment method cannot be used.
 * 3. Payment method can be removed via mutation `paymentMethodDelete`
 */
export type MutationPurchaseOneClickArgs = {
  input: PurchaseOneClickInput;
};


/**
 * PURCHASE FLOW
 * 
 * 0. Initial steps:
 *  * add goods to cart (subscription, ecommerce, gift subscription, etc), which will be saved to session
 *  * apply offer or coupon via mutation `couponApply`, which will be saved to session or clear coupon by `couponClear`
 *  * get purchase price details via query `purchaseInquiry`
 *  * user fill UI form with payment method and shipping (billing) address
 * 1. Start purchase session via mutation `purchaseBegin`
 * 2. Send UI form to Recurly to get Token data, for AMAZON_PAY payment type use Amazon lib
 * 3. Complete purchase with received Token data via mutation `purchaseCommit`, submit Recurly/Amazon HTTP error via mutation `purchaseFailed`
 * 4. Check purchase session for assync execution via `purchaseSession`
 * 
 * 
 * CHANGE PLAN FLOW: UPGRADE, DOWNGRADE, CHANGE FREQUENCY
 * 
 * 1. Get available plans via query `user` at `Subscription.plansInquiry` and ask user on plan desicion
 * 2. Get change price details via query `subscriptionChangePlanInquiry`
 * 3. Start upgrade session via mutation `subscriptionChangePlan`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 4. Check upgrade session for assync execution via query `subscriptionChangePlanSession`
 * 
 * 
 * SKIP AND PAUSE SUBSCRIPTON FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 2. Skip or pause subscription via mutation `subscriptionSkip`
 * 3. Resume subscription if required via mutation `subscriptionUnskip`
 * 
 * UNSUBSCRIBE FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 1. Get available unsubscribe reasons via query `user` at `Subscription.unsubscribeReasons` and ask user
 * 2. Unsubscribe via mutation `subscriptionUnsubscribe`, using refund desicion and unsubscribe reason
 * 3. Resume subscription if required via mutation `subscriptionResubscribe`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 
 * 
 * PAYMENT METHODS FLOW
 * 
 * 1. New payment method can be added same as purchase via calling mutation `paymentMethodCreateBegin`, getting token from Recurly/Amazon lib, calling `paymentMethodCreateCommit`
 * 2. Primary payment method can be set via mutation `paymentMethodSetPrimary`. Not valid or primary payment method cannot be used.
 * 3. Payment method can be removed via mutation `paymentMethodDelete`
 */
export type MutationSubscriptionChangePlanArgs = {
  input: SubscriptionChangePlanInput;
};


/**
 * PURCHASE FLOW
 * 
 * 0. Initial steps:
 *  * add goods to cart (subscription, ecommerce, gift subscription, etc), which will be saved to session
 *  * apply offer or coupon via mutation `couponApply`, which will be saved to session or clear coupon by `couponClear`
 *  * get purchase price details via query `purchaseInquiry`
 *  * user fill UI form with payment method and shipping (billing) address
 * 1. Start purchase session via mutation `purchaseBegin`
 * 2. Send UI form to Recurly to get Token data, for AMAZON_PAY payment type use Amazon lib
 * 3. Complete purchase with received Token data via mutation `purchaseCommit`, submit Recurly/Amazon HTTP error via mutation `purchaseFailed`
 * 4. Check purchase session for assync execution via `purchaseSession`
 * 
 * 
 * CHANGE PLAN FLOW: UPGRADE, DOWNGRADE, CHANGE FREQUENCY
 * 
 * 1. Get available plans via query `user` at `Subscription.plansInquiry` and ask user on plan desicion
 * 2. Get change price details via query `subscriptionChangePlanInquiry`
 * 3. Start upgrade session via mutation `subscriptionChangePlan`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 4. Check upgrade session for assync execution via query `subscriptionChangePlanSession`
 * 
 * 
 * SKIP AND PAUSE SUBSCRIPTON FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 2. Skip or pause subscription via mutation `subscriptionSkip`
 * 3. Resume subscription if required via mutation `subscriptionUnskip`
 * 
 * UNSUBSCRIBE FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 1. Get available unsubscribe reasons via query `user` at `Subscription.unsubscribeReasons` and ask user
 * 2. Unsubscribe via mutation `subscriptionUnsubscribe`, using refund desicion and unsubscribe reason
 * 3. Resume subscription if required via mutation `subscriptionResubscribe`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 
 * 
 * PAYMENT METHODS FLOW
 * 
 * 1. New payment method can be added same as purchase via calling mutation `paymentMethodCreateBegin`, getting token from Recurly/Amazon lib, calling `paymentMethodCreateCommit`
 * 2. Primary payment method can be set via mutation `paymentMethodSetPrimary`. Not valid or primary payment method cannot be used.
 * 3. Payment method can be removed via mutation `paymentMethodDelete`
 */
export type MutationSubscriptionSkipArgs = {
  input: SubscriptionSkipInput;
};


/**
 * PURCHASE FLOW
 * 
 * 0. Initial steps:
 *  * add goods to cart (subscription, ecommerce, gift subscription, etc), which will be saved to session
 *  * apply offer or coupon via mutation `couponApply`, which will be saved to session or clear coupon by `couponClear`
 *  * get purchase price details via query `purchaseInquiry`
 *  * user fill UI form with payment method and shipping (billing) address
 * 1. Start purchase session via mutation `purchaseBegin`
 * 2. Send UI form to Recurly to get Token data, for AMAZON_PAY payment type use Amazon lib
 * 3. Complete purchase with received Token data via mutation `purchaseCommit`, submit Recurly/Amazon HTTP error via mutation `purchaseFailed`
 * 4. Check purchase session for assync execution via `purchaseSession`
 * 
 * 
 * CHANGE PLAN FLOW: UPGRADE, DOWNGRADE, CHANGE FREQUENCY
 * 
 * 1. Get available plans via query `user` at `Subscription.plansInquiry` and ask user on plan desicion
 * 2. Get change price details via query `subscriptionChangePlanInquiry`
 * 3. Start upgrade session via mutation `subscriptionChangePlan`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 4. Check upgrade session for assync execution via query `subscriptionChangePlanSession`
 * 
 * 
 * SKIP AND PAUSE SUBSCRIPTON FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 2. Skip or pause subscription via mutation `subscriptionSkip`
 * 3. Resume subscription if required via mutation `subscriptionUnskip`
 * 
 * UNSUBSCRIBE FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 1. Get available unsubscribe reasons via query `user` at `Subscription.unsubscribeReasons` and ask user
 * 2. Unsubscribe via mutation `subscriptionUnsubscribe`, using refund desicion and unsubscribe reason
 * 3. Resume subscription if required via mutation `subscriptionResubscribe`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 
 * 
 * PAYMENT METHODS FLOW
 * 
 * 1. New payment method can be added same as purchase via calling mutation `paymentMethodCreateBegin`, getting token from Recurly/Amazon lib, calling `paymentMethodCreateCommit`
 * 2. Primary payment method can be set via mutation `paymentMethodSetPrimary`. Not valid or primary payment method cannot be used.
 * 3. Payment method can be removed via mutation `paymentMethodDelete`
 */
export type MutationSubscriptionUnskipArgs = {
  input: SubscriptionUnskipInput;
};


/**
 * PURCHASE FLOW
 * 
 * 0. Initial steps:
 *  * add goods to cart (subscription, ecommerce, gift subscription, etc), which will be saved to session
 *  * apply offer or coupon via mutation `couponApply`, which will be saved to session or clear coupon by `couponClear`
 *  * get purchase price details via query `purchaseInquiry`
 *  * user fill UI form with payment method and shipping (billing) address
 * 1. Start purchase session via mutation `purchaseBegin`
 * 2. Send UI form to Recurly to get Token data, for AMAZON_PAY payment type use Amazon lib
 * 3. Complete purchase with received Token data via mutation `purchaseCommit`, submit Recurly/Amazon HTTP error via mutation `purchaseFailed`
 * 4. Check purchase session for assync execution via `purchaseSession`
 * 
 * 
 * CHANGE PLAN FLOW: UPGRADE, DOWNGRADE, CHANGE FREQUENCY
 * 
 * 1. Get available plans via query `user` at `Subscription.plansInquiry` and ask user on plan desicion
 * 2. Get change price details via query `subscriptionChangePlanInquiry`
 * 3. Start upgrade session via mutation `subscriptionChangePlan`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 4. Check upgrade session for assync execution via query `subscriptionChangePlanSession`
 * 
 * 
 * SKIP AND PAUSE SUBSCRIPTON FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 2. Skip or pause subscription via mutation `subscriptionSkip`
 * 3. Resume subscription if required via mutation `subscriptionUnskip`
 * 
 * UNSUBSCRIBE FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 1. Get available unsubscribe reasons via query `user` at `Subscription.unsubscribeReasons` and ask user
 * 2. Unsubscribe via mutation `subscriptionUnsubscribe`, using refund desicion and unsubscribe reason
 * 3. Resume subscription if required via mutation `subscriptionResubscribe`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 
 * 
 * PAYMENT METHODS FLOW
 * 
 * 1. New payment method can be added same as purchase via calling mutation `paymentMethodCreateBegin`, getting token from Recurly/Amazon lib, calling `paymentMethodCreateCommit`
 * 2. Primary payment method can be set via mutation `paymentMethodSetPrimary`. Not valid or primary payment method cannot be used.
 * 3. Payment method can be removed via mutation `paymentMethodDelete`
 */
export type MutationSubscriptionUnskipOneClickArgs = {
  input: SubscriptionUnskipInput;
};


/**
 * PURCHASE FLOW
 * 
 * 0. Initial steps:
 *  * add goods to cart (subscription, ecommerce, gift subscription, etc), which will be saved to session
 *  * apply offer or coupon via mutation `couponApply`, which will be saved to session or clear coupon by `couponClear`
 *  * get purchase price details via query `purchaseInquiry`
 *  * user fill UI form with payment method and shipping (billing) address
 * 1. Start purchase session via mutation `purchaseBegin`
 * 2. Send UI form to Recurly to get Token data, for AMAZON_PAY payment type use Amazon lib
 * 3. Complete purchase with received Token data via mutation `purchaseCommit`, submit Recurly/Amazon HTTP error via mutation `purchaseFailed`
 * 4. Check purchase session for assync execution via `purchaseSession`
 * 
 * 
 * CHANGE PLAN FLOW: UPGRADE, DOWNGRADE, CHANGE FREQUENCY
 * 
 * 1. Get available plans via query `user` at `Subscription.plansInquiry` and ask user on plan desicion
 * 2. Get change price details via query `subscriptionChangePlanInquiry`
 * 3. Start upgrade session via mutation `subscriptionChangePlan`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 4. Check upgrade session for assync execution via query `subscriptionChangePlanSession`
 * 
 * 
 * SKIP AND PAUSE SUBSCRIPTON FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 2. Skip or pause subscription via mutation `subscriptionSkip`
 * 3. Resume subscription if required via mutation `subscriptionUnskip`
 * 
 * UNSUBSCRIBE FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 1. Get available unsubscribe reasons via query `user` at `Subscription.unsubscribeReasons` and ask user
 * 2. Unsubscribe via mutation `subscriptionUnsubscribe`, using refund desicion and unsubscribe reason
 * 3. Resume subscription if required via mutation `subscriptionResubscribe`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 
 * 
 * PAYMENT METHODS FLOW
 * 
 * 1. New payment method can be added same as purchase via calling mutation `paymentMethodCreateBegin`, getting token from Recurly/Amazon lib, calling `paymentMethodCreateCommit`
 * 2. Primary payment method can be set via mutation `paymentMethodSetPrimary`. Not valid or primary payment method cannot be used.
 * 3. Payment method can be removed via mutation `paymentMethodDelete`
 */
export type MutationSubscriptionUnsubscribeArgs = {
  input: SubscriptionUnsubscribeInput;
};


/**
 * PURCHASE FLOW
 * 
 * 0. Initial steps:
 *  * add goods to cart (subscription, ecommerce, gift subscription, etc), which will be saved to session
 *  * apply offer or coupon via mutation `couponApply`, which will be saved to session or clear coupon by `couponClear`
 *  * get purchase price details via query `purchaseInquiry`
 *  * user fill UI form with payment method and shipping (billing) address
 * 1. Start purchase session via mutation `purchaseBegin`
 * 2. Send UI form to Recurly to get Token data, for AMAZON_PAY payment type use Amazon lib
 * 3. Complete purchase with received Token data via mutation `purchaseCommit`, submit Recurly/Amazon HTTP error via mutation `purchaseFailed`
 * 4. Check purchase session for assync execution via `purchaseSession`
 * 
 * 
 * CHANGE PLAN FLOW: UPGRADE, DOWNGRADE, CHANGE FREQUENCY
 * 
 * 1. Get available plans via query `user` at `Subscription.plansInquiry` and ask user on plan desicion
 * 2. Get change price details via query `subscriptionChangePlanInquiry`
 * 3. Start upgrade session via mutation `subscriptionChangePlan`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 4. Check upgrade session for assync execution via query `subscriptionChangePlanSession`
 * 
 * 
 * SKIP AND PAUSE SUBSCRIPTON FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 2. Skip or pause subscription via mutation `subscriptionSkip`
 * 3. Resume subscription if required via mutation `subscriptionUnskip`
 * 
 * UNSUBSCRIBE FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 1. Get available unsubscribe reasons via query `user` at `Subscription.unsubscribeReasons` and ask user
 * 2. Unsubscribe via mutation `subscriptionUnsubscribe`, using refund desicion and unsubscribe reason
 * 3. Resume subscription if required via mutation `subscriptionResubscribe`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 
 * 
 * PAYMENT METHODS FLOW
 * 
 * 1. New payment method can be added same as purchase via calling mutation `paymentMethodCreateBegin`, getting token from Recurly/Amazon lib, calling `paymentMethodCreateCommit`
 * 2. Primary payment method can be set via mutation `paymentMethodSetPrimary`. Not valid or primary payment method cannot be used.
 * 3. Payment method can be removed via mutation `paymentMethodDelete`
 */
export type MutationSubscriptionResubscribeArgs = {
  input: SubscriptionResubscribeInput;
};


/**
 * PURCHASE FLOW
 * 
 * 0. Initial steps:
 *  * add goods to cart (subscription, ecommerce, gift subscription, etc), which will be saved to session
 *  * apply offer or coupon via mutation `couponApply`, which will be saved to session or clear coupon by `couponClear`
 *  * get purchase price details via query `purchaseInquiry`
 *  * user fill UI form with payment method and shipping (billing) address
 * 1. Start purchase session via mutation `purchaseBegin`
 * 2. Send UI form to Recurly to get Token data, for AMAZON_PAY payment type use Amazon lib
 * 3. Complete purchase with received Token data via mutation `purchaseCommit`, submit Recurly/Amazon HTTP error via mutation `purchaseFailed`
 * 4. Check purchase session for assync execution via `purchaseSession`
 * 
 * 
 * CHANGE PLAN FLOW: UPGRADE, DOWNGRADE, CHANGE FREQUENCY
 * 
 * 1. Get available plans via query `user` at `Subscription.plansInquiry` and ask user on plan desicion
 * 2. Get change price details via query `subscriptionChangePlanInquiry`
 * 3. Start upgrade session via mutation `subscriptionChangePlan`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 4. Check upgrade session for assync execution via query `subscriptionChangePlanSession`
 * 
 * 
 * SKIP AND PAUSE SUBSCRIPTON FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 2. Skip or pause subscription via mutation `subscriptionSkip`
 * 3. Resume subscription if required via mutation `subscriptionUnskip`
 * 
 * UNSUBSCRIBE FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 1. Get available unsubscribe reasons via query `user` at `Subscription.unsubscribeReasons` and ask user
 * 2. Unsubscribe via mutation `subscriptionUnsubscribe`, using refund desicion and unsubscribe reason
 * 3. Resume subscription if required via mutation `subscriptionResubscribe`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 
 * 
 * PAYMENT METHODS FLOW
 * 
 * 1. New payment method can be added same as purchase via calling mutation `paymentMethodCreateBegin`, getting token from Recurly/Amazon lib, calling `paymentMethodCreateCommit`
 * 2. Primary payment method can be set via mutation `paymentMethodSetPrimary`. Not valid or primary payment method cannot be used.
 * 3. Payment method can be removed via mutation `paymentMethodDelete`
 */
export type MutationSubscriptionResubscribeOneClickArgs = {
  input: SubscriptionResubscribeInput;
};


/**
 * PURCHASE FLOW
 * 
 * 0. Initial steps:
 *  * add goods to cart (subscription, ecommerce, gift subscription, etc), which will be saved to session
 *  * apply offer or coupon via mutation `couponApply`, which will be saved to session or clear coupon by `couponClear`
 *  * get purchase price details via query `purchaseInquiry`
 *  * user fill UI form with payment method and shipping (billing) address
 * 1. Start purchase session via mutation `purchaseBegin`
 * 2. Send UI form to Recurly to get Token data, for AMAZON_PAY payment type use Amazon lib
 * 3. Complete purchase with received Token data via mutation `purchaseCommit`, submit Recurly/Amazon HTTP error via mutation `purchaseFailed`
 * 4. Check purchase session for assync execution via `purchaseSession`
 * 
 * 
 * CHANGE PLAN FLOW: UPGRADE, DOWNGRADE, CHANGE FREQUENCY
 * 
 * 1. Get available plans via query `user` at `Subscription.plansInquiry` and ask user on plan desicion
 * 2. Get change price details via query `subscriptionChangePlanInquiry`
 * 3. Start upgrade session via mutation `subscriptionChangePlan`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 4. Check upgrade session for assync execution via query `subscriptionChangePlanSession`
 * 
 * 
 * SKIP AND PAUSE SUBSCRIPTON FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 2. Skip or pause subscription via mutation `subscriptionSkip`
 * 3. Resume subscription if required via mutation `subscriptionUnskip`
 * 
 * UNSUBSCRIBE FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 1. Get available unsubscribe reasons via query `user` at `Subscription.unsubscribeReasons` and ask user
 * 2. Unsubscribe via mutation `subscriptionUnsubscribe`, using refund desicion and unsubscribe reason
 * 3. Resume subscription if required via mutation `subscriptionResubscribe`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 
 * 
 * PAYMENT METHODS FLOW
 * 
 * 1. New payment method can be added same as purchase via calling mutation `paymentMethodCreateBegin`, getting token from Recurly/Amazon lib, calling `paymentMethodCreateCommit`
 * 2. Primary payment method can be set via mutation `paymentMethodSetPrimary`. Not valid or primary payment method cannot be used.
 * 3. Payment method can be removed via mutation `paymentMethodDelete`
 */
export type MutationPaymentMethodCreateBeginArgs = {
  input: PaymentMethodBeginInput;
};


/**
 * PURCHASE FLOW
 * 
 * 0. Initial steps:
 *  * add goods to cart (subscription, ecommerce, gift subscription, etc), which will be saved to session
 *  * apply offer or coupon via mutation `couponApply`, which will be saved to session or clear coupon by `couponClear`
 *  * get purchase price details via query `purchaseInquiry`
 *  * user fill UI form with payment method and shipping (billing) address
 * 1. Start purchase session via mutation `purchaseBegin`
 * 2. Send UI form to Recurly to get Token data, for AMAZON_PAY payment type use Amazon lib
 * 3. Complete purchase with received Token data via mutation `purchaseCommit`, submit Recurly/Amazon HTTP error via mutation `purchaseFailed`
 * 4. Check purchase session for assync execution via `purchaseSession`
 * 
 * 
 * CHANGE PLAN FLOW: UPGRADE, DOWNGRADE, CHANGE FREQUENCY
 * 
 * 1. Get available plans via query `user` at `Subscription.plansInquiry` and ask user on plan desicion
 * 2. Get change price details via query `subscriptionChangePlanInquiry`
 * 3. Start upgrade session via mutation `subscriptionChangePlan`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 4. Check upgrade session for assync execution via query `subscriptionChangePlanSession`
 * 
 * 
 * SKIP AND PAUSE SUBSCRIPTON FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 2. Skip or pause subscription via mutation `subscriptionSkip`
 * 3. Resume subscription if required via mutation `subscriptionUnskip`
 * 
 * UNSUBSCRIBE FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 1. Get available unsubscribe reasons via query `user` at `Subscription.unsubscribeReasons` and ask user
 * 2. Unsubscribe via mutation `subscriptionUnsubscribe`, using refund desicion and unsubscribe reason
 * 3. Resume subscription if required via mutation `subscriptionResubscribe`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 
 * 
 * PAYMENT METHODS FLOW
 * 
 * 1. New payment method can be added same as purchase via calling mutation `paymentMethodCreateBegin`, getting token from Recurly/Amazon lib, calling `paymentMethodCreateCommit`
 * 2. Primary payment method can be set via mutation `paymentMethodSetPrimary`. Not valid or primary payment method cannot be used.
 * 3. Payment method can be removed via mutation `paymentMethodDelete`
 */
export type MutationPaymentMethodCreateCommitArgs = {
  input: PaymentMethodCommitInput;
};


/**
 * PURCHASE FLOW
 * 
 * 0. Initial steps:
 *  * add goods to cart (subscription, ecommerce, gift subscription, etc), which will be saved to session
 *  * apply offer or coupon via mutation `couponApply`, which will be saved to session or clear coupon by `couponClear`
 *  * get purchase price details via query `purchaseInquiry`
 *  * user fill UI form with payment method and shipping (billing) address
 * 1. Start purchase session via mutation `purchaseBegin`
 * 2. Send UI form to Recurly to get Token data, for AMAZON_PAY payment type use Amazon lib
 * 3. Complete purchase with received Token data via mutation `purchaseCommit`, submit Recurly/Amazon HTTP error via mutation `purchaseFailed`
 * 4. Check purchase session for assync execution via `purchaseSession`
 * 
 * 
 * CHANGE PLAN FLOW: UPGRADE, DOWNGRADE, CHANGE FREQUENCY
 * 
 * 1. Get available plans via query `user` at `Subscription.plansInquiry` and ask user on plan desicion
 * 2. Get change price details via query `subscriptionChangePlanInquiry`
 * 3. Start upgrade session via mutation `subscriptionChangePlan`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 4. Check upgrade session for assync execution via query `subscriptionChangePlanSession`
 * 
 * 
 * SKIP AND PAUSE SUBSCRIPTON FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 2. Skip or pause subscription via mutation `subscriptionSkip`
 * 3. Resume subscription if required via mutation `subscriptionUnskip`
 * 
 * UNSUBSCRIBE FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 1. Get available unsubscribe reasons via query `user` at `Subscription.unsubscribeReasons` and ask user
 * 2. Unsubscribe via mutation `subscriptionUnsubscribe`, using refund desicion and unsubscribe reason
 * 3. Resume subscription if required via mutation `subscriptionResubscribe`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 
 * 
 * PAYMENT METHODS FLOW
 * 
 * 1. New payment method can be added same as purchase via calling mutation `paymentMethodCreateBegin`, getting token from Recurly/Amazon lib, calling `paymentMethodCreateCommit`
 * 2. Primary payment method can be set via mutation `paymentMethodSetPrimary`. Not valid or primary payment method cannot be used.
 * 3. Payment method can be removed via mutation `paymentMethodDelete`
 */
export type MutationPaymentMethodSetPrimaryArgs = {
  input: PaymentMethodSetPrimaryInput;
};


/**
 * PURCHASE FLOW
 * 
 * 0. Initial steps:
 *  * add goods to cart (subscription, ecommerce, gift subscription, etc), which will be saved to session
 *  * apply offer or coupon via mutation `couponApply`, which will be saved to session or clear coupon by `couponClear`
 *  * get purchase price details via query `purchaseInquiry`
 *  * user fill UI form with payment method and shipping (billing) address
 * 1. Start purchase session via mutation `purchaseBegin`
 * 2. Send UI form to Recurly to get Token data, for AMAZON_PAY payment type use Amazon lib
 * 3. Complete purchase with received Token data via mutation `purchaseCommit`, submit Recurly/Amazon HTTP error via mutation `purchaseFailed`
 * 4. Check purchase session for assync execution via `purchaseSession`
 * 
 * 
 * CHANGE PLAN FLOW: UPGRADE, DOWNGRADE, CHANGE FREQUENCY
 * 
 * 1. Get available plans via query `user` at `Subscription.plansInquiry` and ask user on plan desicion
 * 2. Get change price details via query `subscriptionChangePlanInquiry`
 * 3. Start upgrade session via mutation `subscriptionChangePlan`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 4. Check upgrade session for assync execution via query `subscriptionChangePlanSession`
 * 
 * 
 * SKIP AND PAUSE SUBSCRIPTON FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 2. Skip or pause subscription via mutation `subscriptionSkip`
 * 3. Resume subscription if required via mutation `subscriptionUnskip`
 * 
 * UNSUBSCRIBE FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 1. Get available unsubscribe reasons via query `user` at `Subscription.unsubscribeReasons` and ask user
 * 2. Unsubscribe via mutation `subscriptionUnsubscribe`, using refund desicion and unsubscribe reason
 * 3. Resume subscription if required via mutation `subscriptionResubscribe`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 
 * 
 * PAYMENT METHODS FLOW
 * 
 * 1. New payment method can be added same as purchase via calling mutation `paymentMethodCreateBegin`, getting token from Recurly/Amazon lib, calling `paymentMethodCreateCommit`
 * 2. Primary payment method can be set via mutation `paymentMethodSetPrimary`. Not valid or primary payment method cannot be used.
 * 3. Payment method can be removed via mutation `paymentMethodDelete`
 */
export type MutationPaymentMethodDeleteArgs = {
  input: PaymentMethodDeleteInput;
};


/**
 * PURCHASE FLOW
 * 
 * 0. Initial steps:
 *  * add goods to cart (subscription, ecommerce, gift subscription, etc), which will be saved to session
 *  * apply offer or coupon via mutation `couponApply`, which will be saved to session or clear coupon by `couponClear`
 *  * get purchase price details via query `purchaseInquiry`
 *  * user fill UI form with payment method and shipping (billing) address
 * 1. Start purchase session via mutation `purchaseBegin`
 * 2. Send UI form to Recurly to get Token data, for AMAZON_PAY payment type use Amazon lib
 * 3. Complete purchase with received Token data via mutation `purchaseCommit`, submit Recurly/Amazon HTTP error via mutation `purchaseFailed`
 * 4. Check purchase session for assync execution via `purchaseSession`
 * 
 * 
 * CHANGE PLAN FLOW: UPGRADE, DOWNGRADE, CHANGE FREQUENCY
 * 
 * 1. Get available plans via query `user` at `Subscription.plansInquiry` and ask user on plan desicion
 * 2. Get change price details via query `subscriptionChangePlanInquiry`
 * 3. Start upgrade session via mutation `subscriptionChangePlan`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 4. Check upgrade session for assync execution via query `subscriptionChangePlanSession`
 * 
 * 
 * SKIP AND PAUSE SUBSCRIPTON FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 2. Skip or pause subscription via mutation `subscriptionSkip`
 * 3. Resume subscription if required via mutation `subscriptionUnskip`
 * 
 * UNSUBSCRIBE FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 1. Get available unsubscribe reasons via query `user` at `Subscription.unsubscribeReasons` and ask user
 * 2. Unsubscribe via mutation `subscriptionUnsubscribe`, using refund desicion and unsubscribe reason
 * 3. Resume subscription if required via mutation `subscriptionResubscribe`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 
 * 
 * PAYMENT METHODS FLOW
 * 
 * 1. New payment method can be added same as purchase via calling mutation `paymentMethodCreateBegin`, getting token from Recurly/Amazon lib, calling `paymentMethodCreateCommit`
 * 2. Primary payment method can be set via mutation `paymentMethodSetPrimary`. Not valid or primary payment method cannot be used.
 * 3. Payment method can be removed via mutation `paymentMethodDelete`
 */
export type MutationCartModifyArgs = {
  input: CartOperationInput;
};


/**
 * PURCHASE FLOW
 * 
 * 0. Initial steps:
 *  * add goods to cart (subscription, ecommerce, gift subscription, etc), which will be saved to session
 *  * apply offer or coupon via mutation `couponApply`, which will be saved to session or clear coupon by `couponClear`
 *  * get purchase price details via query `purchaseInquiry`
 *  * user fill UI form with payment method and shipping (billing) address
 * 1. Start purchase session via mutation `purchaseBegin`
 * 2. Send UI form to Recurly to get Token data, for AMAZON_PAY payment type use Amazon lib
 * 3. Complete purchase with received Token data via mutation `purchaseCommit`, submit Recurly/Amazon HTTP error via mutation `purchaseFailed`
 * 4. Check purchase session for assync execution via `purchaseSession`
 * 
 * 
 * CHANGE PLAN FLOW: UPGRADE, DOWNGRADE, CHANGE FREQUENCY
 * 
 * 1. Get available plans via query `user` at `Subscription.plansInquiry` and ask user on plan desicion
 * 2. Get change price details via query `subscriptionChangePlanInquiry`
 * 3. Start upgrade session via mutation `subscriptionChangePlan`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 4. Check upgrade session for assync execution via query `subscriptionChangePlanSession`
 * 
 * 
 * SKIP AND PAUSE SUBSCRIPTON FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 2. Skip or pause subscription via mutation `subscriptionSkip`
 * 3. Resume subscription if required via mutation `subscriptionUnskip`
 * 
 * UNSUBSCRIBE FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 1. Get available unsubscribe reasons via query `user` at `Subscription.unsubscribeReasons` and ask user
 * 2. Unsubscribe via mutation `subscriptionUnsubscribe`, using refund desicion and unsubscribe reason
 * 3. Resume subscription if required via mutation `subscriptionResubscribe`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 
 * 
 * PAYMENT METHODS FLOW
 * 
 * 1. New payment method can be added same as purchase via calling mutation `paymentMethodCreateBegin`, getting token from Recurly/Amazon lib, calling `paymentMethodCreateCommit`
 * 2. Primary payment method can be set via mutation `paymentMethodSetPrimary`. Not valid or primary payment method cannot be used.
 * 3. Payment method can be removed via mutation `paymentMethodDelete`
 */
export type MutationCartDeleteArgs = {
  input: CartOperationInput;
};


/**
 * PURCHASE FLOW
 * 
 * 0. Initial steps:
 *  * add goods to cart (subscription, ecommerce, gift subscription, etc), which will be saved to session
 *  * apply offer or coupon via mutation `couponApply`, which will be saved to session or clear coupon by `couponClear`
 *  * get purchase price details via query `purchaseInquiry`
 *  * user fill UI form with payment method and shipping (billing) address
 * 1. Start purchase session via mutation `purchaseBegin`
 * 2. Send UI form to Recurly to get Token data, for AMAZON_PAY payment type use Amazon lib
 * 3. Complete purchase with received Token data via mutation `purchaseCommit`, submit Recurly/Amazon HTTP error via mutation `purchaseFailed`
 * 4. Check purchase session for assync execution via `purchaseSession`
 * 
 * 
 * CHANGE PLAN FLOW: UPGRADE, DOWNGRADE, CHANGE FREQUENCY
 * 
 * 1. Get available plans via query `user` at `Subscription.plansInquiry` and ask user on plan desicion
 * 2. Get change price details via query `subscriptionChangePlanInquiry`
 * 3. Start upgrade session via mutation `subscriptionChangePlan`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 4. Check upgrade session for assync execution via query `subscriptionChangePlanSession`
 * 
 * 
 * SKIP AND PAUSE SUBSCRIPTON FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 2. Skip or pause subscription via mutation `subscriptionSkip`
 * 3. Resume subscription if required via mutation `subscriptionUnskip`
 * 
 * UNSUBSCRIBE FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 1. Get available unsubscribe reasons via query `user` at `Subscription.unsubscribeReasons` and ask user
 * 2. Unsubscribe via mutation `subscriptionUnsubscribe`, using refund desicion and unsubscribe reason
 * 3. Resume subscription if required via mutation `subscriptionResubscribe`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 
 * 
 * PAYMENT METHODS FLOW
 * 
 * 1. New payment method can be added same as purchase via calling mutation `paymentMethodCreateBegin`, getting token from Recurly/Amazon lib, calling `paymentMethodCreateCommit`
 * 2. Primary payment method can be set via mutation `paymentMethodSetPrimary`. Not valid or primary payment method cannot be used.
 * 3. Payment method can be removed via mutation `paymentMethodDelete`
 */
export type MutationCartClearArgs = {
  input: CartClearInput;
};


/**
 * PURCHASE FLOW
 * 
 * 0. Initial steps:
 *  * add goods to cart (subscription, ecommerce, gift subscription, etc), which will be saved to session
 *  * apply offer or coupon via mutation `couponApply`, which will be saved to session or clear coupon by `couponClear`
 *  * get purchase price details via query `purchaseInquiry`
 *  * user fill UI form with payment method and shipping (billing) address
 * 1. Start purchase session via mutation `purchaseBegin`
 * 2. Send UI form to Recurly to get Token data, for AMAZON_PAY payment type use Amazon lib
 * 3. Complete purchase with received Token data via mutation `purchaseCommit`, submit Recurly/Amazon HTTP error via mutation `purchaseFailed`
 * 4. Check purchase session for assync execution via `purchaseSession`
 * 
 * 
 * CHANGE PLAN FLOW: UPGRADE, DOWNGRADE, CHANGE FREQUENCY
 * 
 * 1. Get available plans via query `user` at `Subscription.plansInquiry` and ask user on plan desicion
 * 2. Get change price details via query `subscriptionChangePlanInquiry`
 * 3. Start upgrade session via mutation `subscriptionChangePlan`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 4. Check upgrade session for assync execution via query `subscriptionChangePlanSession`
 * 
 * 
 * SKIP AND PAUSE SUBSCRIPTON FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 2. Skip or pause subscription via mutation `subscriptionSkip`
 * 3. Resume subscription if required via mutation `subscriptionUnskip`
 * 
 * UNSUBSCRIBE FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 1. Get available unsubscribe reasons via query `user` at `Subscription.unsubscribeReasons` and ask user
 * 2. Unsubscribe via mutation `subscriptionUnsubscribe`, using refund desicion and unsubscribe reason
 * 3. Resume subscription if required via mutation `subscriptionResubscribe`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 
 * 
 * PAYMENT METHODS FLOW
 * 
 * 1. New payment method can be added same as purchase via calling mutation `paymentMethodCreateBegin`, getting token from Recurly/Amazon lib, calling `paymentMethodCreateCommit`
 * 2. Primary payment method can be set via mutation `paymentMethodSetPrimary`. Not valid or primary payment method cannot be used.
 * 3. Payment method can be removed via mutation `paymentMethodDelete`
 */
export type MutationPixelApplyArgs = {
  input?: Maybe<PixelDataInput>;
};


/**
 * PURCHASE FLOW
 * 
 * 0. Initial steps:
 *  * add goods to cart (subscription, ecommerce, gift subscription, etc), which will be saved to session
 *  * apply offer or coupon via mutation `couponApply`, which will be saved to session or clear coupon by `couponClear`
 *  * get purchase price details via query `purchaseInquiry`
 *  * user fill UI form with payment method and shipping (billing) address
 * 1. Start purchase session via mutation `purchaseBegin`
 * 2. Send UI form to Recurly to get Token data, for AMAZON_PAY payment type use Amazon lib
 * 3. Complete purchase with received Token data via mutation `purchaseCommit`, submit Recurly/Amazon HTTP error via mutation `purchaseFailed`
 * 4. Check purchase session for assync execution via `purchaseSession`
 * 
 * 
 * CHANGE PLAN FLOW: UPGRADE, DOWNGRADE, CHANGE FREQUENCY
 * 
 * 1. Get available plans via query `user` at `Subscription.plansInquiry` and ask user on plan desicion
 * 2. Get change price details via query `subscriptionChangePlanInquiry`
 * 3. Start upgrade session via mutation `subscriptionChangePlan`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 4. Check upgrade session for assync execution via query `subscriptionChangePlanSession`
 * 
 * 
 * SKIP AND PAUSE SUBSCRIPTON FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 2. Skip or pause subscription via mutation `subscriptionSkip`
 * 3. Resume subscription if required via mutation `subscriptionUnskip`
 * 
 * UNSUBSCRIBE FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 1. Get available unsubscribe reasons via query `user` at `Subscription.unsubscribeReasons` and ask user
 * 2. Unsubscribe via mutation `subscriptionUnsubscribe`, using refund desicion and unsubscribe reason
 * 3. Resume subscription if required via mutation `subscriptionResubscribe`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 
 * 
 * PAYMENT METHODS FLOW
 * 
 * 1. New payment method can be added same as purchase via calling mutation `paymentMethodCreateBegin`, getting token from Recurly/Amazon lib, calling `paymentMethodCreateCommit`
 * 2. Primary payment method can be set via mutation `paymentMethodSetPrimary`. Not valid or primary payment method cannot be used.
 * 3. Payment method can be removed via mutation `paymentMethodDelete`
 */
export type MutationUserShareEmailArgs = {
  input?: Maybe<UserShareEmailInput>;
};


/**
 * PURCHASE FLOW
 * 
 * 0. Initial steps:
 *  * add goods to cart (subscription, ecommerce, gift subscription, etc), which will be saved to session
 *  * apply offer or coupon via mutation `couponApply`, which will be saved to session or clear coupon by `couponClear`
 *  * get purchase price details via query `purchaseInquiry`
 *  * user fill UI form with payment method and shipping (billing) address
 * 1. Start purchase session via mutation `purchaseBegin`
 * 2. Send UI form to Recurly to get Token data, for AMAZON_PAY payment type use Amazon lib
 * 3. Complete purchase with received Token data via mutation `purchaseCommit`, submit Recurly/Amazon HTTP error via mutation `purchaseFailed`
 * 4. Check purchase session for assync execution via `purchaseSession`
 * 
 * 
 * CHANGE PLAN FLOW: UPGRADE, DOWNGRADE, CHANGE FREQUENCY
 * 
 * 1. Get available plans via query `user` at `Subscription.plansInquiry` and ask user on plan desicion
 * 2. Get change price details via query `subscriptionChangePlanInquiry`
 * 3. Start upgrade session via mutation `subscriptionChangePlan`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 4. Check upgrade session for assync execution via query `subscriptionChangePlanSession`
 * 
 * 
 * SKIP AND PAUSE SUBSCRIPTON FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 2. Skip or pause subscription via mutation `subscriptionSkip`
 * 3. Resume subscription if required via mutation `subscriptionUnskip`
 * 
 * UNSUBSCRIBE FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 1. Get available unsubscribe reasons via query `user` at `Subscription.unsubscribeReasons` and ask user
 * 2. Unsubscribe via mutation `subscriptionUnsubscribe`, using refund desicion and unsubscribe reason
 * 3. Resume subscription if required via mutation `subscriptionResubscribe`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 
 * 
 * PAYMENT METHODS FLOW
 * 
 * 1. New payment method can be added same as purchase via calling mutation `paymentMethodCreateBegin`, getting token from Recurly/Amazon lib, calling `paymentMethodCreateCommit`
 * 2. Primary payment method can be set via mutation `paymentMethodSetPrimary`. Not valid or primary payment method cannot be used.
 * 3. Payment method can be removed via mutation `paymentMethodDelete`
 */
export type MutationAddToQueueArgs = {
  input?: Maybe<AddQueueItemInput>;
};


/**
 * PURCHASE FLOW
 * 
 * 0. Initial steps:
 *  * add goods to cart (subscription, ecommerce, gift subscription, etc), which will be saved to session
 *  * apply offer or coupon via mutation `couponApply`, which will be saved to session or clear coupon by `couponClear`
 *  * get purchase price details via query `purchaseInquiry`
 *  * user fill UI form with payment method and shipping (billing) address
 * 1. Start purchase session via mutation `purchaseBegin`
 * 2. Send UI form to Recurly to get Token data, for AMAZON_PAY payment type use Amazon lib
 * 3. Complete purchase with received Token data via mutation `purchaseCommit`, submit Recurly/Amazon HTTP error via mutation `purchaseFailed`
 * 4. Check purchase session for assync execution via `purchaseSession`
 * 
 * 
 * CHANGE PLAN FLOW: UPGRADE, DOWNGRADE, CHANGE FREQUENCY
 * 
 * 1. Get available plans via query `user` at `Subscription.plansInquiry` and ask user on plan desicion
 * 2. Get change price details via query `subscriptionChangePlanInquiry`
 * 3. Start upgrade session via mutation `subscriptionChangePlan`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 4. Check upgrade session for assync execution via query `subscriptionChangePlanSession`
 * 
 * 
 * SKIP AND PAUSE SUBSCRIPTON FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 2. Skip or pause subscription via mutation `subscriptionSkip`
 * 3. Resume subscription if required via mutation `subscriptionUnskip`
 * 
 * UNSUBSCRIBE FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 1. Get available unsubscribe reasons via query `user` at `Subscription.unsubscribeReasons` and ask user
 * 2. Unsubscribe via mutation `subscriptionUnsubscribe`, using refund desicion and unsubscribe reason
 * 3. Resume subscription if required via mutation `subscriptionResubscribe`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 
 * 
 * PAYMENT METHODS FLOW
 * 
 * 1. New payment method can be added same as purchase via calling mutation `paymentMethodCreateBegin`, getting token from Recurly/Amazon lib, calling `paymentMethodCreateCommit`
 * 2. Primary payment method can be set via mutation `paymentMethodSetPrimary`. Not valid or primary payment method cannot be used.
 * 3. Payment method can be removed via mutation `paymentMethodDelete`
 */
export type MutationAddMultipleItemsToQueueArgs = {
  input?: Maybe<AddQueueMultipleItemsInput>;
};


/**
 * PURCHASE FLOW
 * 
 * 0. Initial steps:
 *  * add goods to cart (subscription, ecommerce, gift subscription, etc), which will be saved to session
 *  * apply offer or coupon via mutation `couponApply`, which will be saved to session or clear coupon by `couponClear`
 *  * get purchase price details via query `purchaseInquiry`
 *  * user fill UI form with payment method and shipping (billing) address
 * 1. Start purchase session via mutation `purchaseBegin`
 * 2. Send UI form to Recurly to get Token data, for AMAZON_PAY payment type use Amazon lib
 * 3. Complete purchase with received Token data via mutation `purchaseCommit`, submit Recurly/Amazon HTTP error via mutation `purchaseFailed`
 * 4. Check purchase session for assync execution via `purchaseSession`
 * 
 * 
 * CHANGE PLAN FLOW: UPGRADE, DOWNGRADE, CHANGE FREQUENCY
 * 
 * 1. Get available plans via query `user` at `Subscription.plansInquiry` and ask user on plan desicion
 * 2. Get change price details via query `subscriptionChangePlanInquiry`
 * 3. Start upgrade session via mutation `subscriptionChangePlan`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 4. Check upgrade session for assync execution via query `subscriptionChangePlanSession`
 * 
 * 
 * SKIP AND PAUSE SUBSCRIPTON FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 2. Skip or pause subscription via mutation `subscriptionSkip`
 * 3. Resume subscription if required via mutation `subscriptionUnskip`
 * 
 * UNSUBSCRIBE FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 1. Get available unsubscribe reasons via query `user` at `Subscription.unsubscribeReasons` and ask user
 * 2. Unsubscribe via mutation `subscriptionUnsubscribe`, using refund desicion and unsubscribe reason
 * 3. Resume subscription if required via mutation `subscriptionResubscribe`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 
 * 
 * PAYMENT METHODS FLOW
 * 
 * 1. New payment method can be added same as purchase via calling mutation `paymentMethodCreateBegin`, getting token from Recurly/Amazon lib, calling `paymentMethodCreateCommit`
 * 2. Primary payment method can be set via mutation `paymentMethodSetPrimary`. Not valid or primary payment method cannot be used.
 * 3. Payment method can be removed via mutation `paymentMethodDelete`
 */
export type MutationDeleteFromQueueArgs = {
  input?: Maybe<DeleteQueueItemInput>;
};


/**
 * PURCHASE FLOW
 * 
 * 0. Initial steps:
 *  * add goods to cart (subscription, ecommerce, gift subscription, etc), which will be saved to session
 *  * apply offer or coupon via mutation `couponApply`, which will be saved to session or clear coupon by `couponClear`
 *  * get purchase price details via query `purchaseInquiry`
 *  * user fill UI form with payment method and shipping (billing) address
 * 1. Start purchase session via mutation `purchaseBegin`
 * 2. Send UI form to Recurly to get Token data, for AMAZON_PAY payment type use Amazon lib
 * 3. Complete purchase with received Token data via mutation `purchaseCommit`, submit Recurly/Amazon HTTP error via mutation `purchaseFailed`
 * 4. Check purchase session for assync execution via `purchaseSession`
 * 
 * 
 * CHANGE PLAN FLOW: UPGRADE, DOWNGRADE, CHANGE FREQUENCY
 * 
 * 1. Get available plans via query `user` at `Subscription.plansInquiry` and ask user on plan desicion
 * 2. Get change price details via query `subscriptionChangePlanInquiry`
 * 3. Start upgrade session via mutation `subscriptionChangePlan`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 4. Check upgrade session for assync execution via query `subscriptionChangePlanSession`
 * 
 * 
 * SKIP AND PAUSE SUBSCRIPTON FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 2. Skip or pause subscription via mutation `subscriptionSkip`
 * 3. Resume subscription if required via mutation `subscriptionUnskip`
 * 
 * UNSUBSCRIBE FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 1. Get available unsubscribe reasons via query `user` at `Subscription.unsubscribeReasons` and ask user
 * 2. Unsubscribe via mutation `subscriptionUnsubscribe`, using refund desicion and unsubscribe reason
 * 3. Resume subscription if required via mutation `subscriptionResubscribe`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 
 * 
 * PAYMENT METHODS FLOW
 * 
 * 1. New payment method can be added same as purchase via calling mutation `paymentMethodCreateBegin`, getting token from Recurly/Amazon lib, calling `paymentMethodCreateCommit`
 * 2. Primary payment method can be set via mutation `paymentMethodSetPrimary`. Not valid or primary payment method cannot be used.
 * 3. Payment method can be removed via mutation `paymentMethodDelete`
 */
export type MutationMoveInQueueArgs = {
  input?: Maybe<MoveInQueueInput>;
};


/**
 * PURCHASE FLOW
 * 
 * 0. Initial steps:
 *  * add goods to cart (subscription, ecommerce, gift subscription, etc), which will be saved to session
 *  * apply offer or coupon via mutation `couponApply`, which will be saved to session or clear coupon by `couponClear`
 *  * get purchase price details via query `purchaseInquiry`
 *  * user fill UI form with payment method and shipping (billing) address
 * 1. Start purchase session via mutation `purchaseBegin`
 * 2. Send UI form to Recurly to get Token data, for AMAZON_PAY payment type use Amazon lib
 * 3. Complete purchase with received Token data via mutation `purchaseCommit`, submit Recurly/Amazon HTTP error via mutation `purchaseFailed`
 * 4. Check purchase session for assync execution via `purchaseSession`
 * 
 * 
 * CHANGE PLAN FLOW: UPGRADE, DOWNGRADE, CHANGE FREQUENCY
 * 
 * 1. Get available plans via query `user` at `Subscription.plansInquiry` and ask user on plan desicion
 * 2. Get change price details via query `subscriptionChangePlanInquiry`
 * 3. Start upgrade session via mutation `subscriptionChangePlan`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 4. Check upgrade session for assync execution via query `subscriptionChangePlanSession`
 * 
 * 
 * SKIP AND PAUSE SUBSCRIPTON FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 2. Skip or pause subscription via mutation `subscriptionSkip`
 * 3. Resume subscription if required via mutation `subscriptionUnskip`
 * 
 * UNSUBSCRIBE FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 1. Get available unsubscribe reasons via query `user` at `Subscription.unsubscribeReasons` and ask user
 * 2. Unsubscribe via mutation `subscriptionUnsubscribe`, using refund desicion and unsubscribe reason
 * 3. Resume subscription if required via mutation `subscriptionResubscribe`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 
 * 
 * PAYMENT METHODS FLOW
 * 
 * 1. New payment method can be added same as purchase via calling mutation `paymentMethodCreateBegin`, getting token from Recurly/Amazon lib, calling `paymentMethodCreateCommit`
 * 2. Primary payment method can be set via mutation `paymentMethodSetPrimary`. Not valid or primary payment method cannot be used.
 * 3. Payment method can be removed via mutation `paymentMethodDelete`
 */
export type MutationUpdateInQueueArgs = {
  input?: Maybe<UpdateInQueueInput>;
};


/**
 * PURCHASE FLOW
 * 
 * 0. Initial steps:
 *  * add goods to cart (subscription, ecommerce, gift subscription, etc), which will be saved to session
 *  * apply offer or coupon via mutation `couponApply`, which will be saved to session or clear coupon by `couponClear`
 *  * get purchase price details via query `purchaseInquiry`
 *  * user fill UI form with payment method and shipping (billing) address
 * 1. Start purchase session via mutation `purchaseBegin`
 * 2. Send UI form to Recurly to get Token data, for AMAZON_PAY payment type use Amazon lib
 * 3. Complete purchase with received Token data via mutation `purchaseCommit`, submit Recurly/Amazon HTTP error via mutation `purchaseFailed`
 * 4. Check purchase session for assync execution via `purchaseSession`
 * 
 * 
 * CHANGE PLAN FLOW: UPGRADE, DOWNGRADE, CHANGE FREQUENCY
 * 
 * 1. Get available plans via query `user` at `Subscription.plansInquiry` and ask user on plan desicion
 * 2. Get change price details via query `subscriptionChangePlanInquiry`
 * 3. Start upgrade session via mutation `subscriptionChangePlan`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 4. Check upgrade session for assync execution via query `subscriptionChangePlanSession`
 * 
 * 
 * SKIP AND PAUSE SUBSCRIPTON FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 2. Skip or pause subscription via mutation `subscriptionSkip`
 * 3. Resume subscription if required via mutation `subscriptionUnskip`
 * 
 * UNSUBSCRIBE FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 1. Get available unsubscribe reasons via query `user` at `Subscription.unsubscribeReasons` and ask user
 * 2. Unsubscribe via mutation `subscriptionUnsubscribe`, using refund desicion and unsubscribe reason
 * 3. Resume subscription if required via mutation `subscriptionResubscribe`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 
 * 
 * PAYMENT METHODS FLOW
 * 
 * 1. New payment method can be added same as purchase via calling mutation `paymentMethodCreateBegin`, getting token from Recurly/Amazon lib, calling `paymentMethodCreateCommit`
 * 2. Primary payment method can be set via mutation `paymentMethodSetPrimary`. Not valid or primary payment method cannot be used.
 * 3. Payment method can be removed via mutation `paymentMethodDelete`
 */
export type MutationCreateQuizResultArgs = {
  input?: Maybe<CreateQuizResultInput>;
};


/**
 * PURCHASE FLOW
 * 
 * 0. Initial steps:
 *  * add goods to cart (subscription, ecommerce, gift subscription, etc), which will be saved to session
 *  * apply offer or coupon via mutation `couponApply`, which will be saved to session or clear coupon by `couponClear`
 *  * get purchase price details via query `purchaseInquiry`
 *  * user fill UI form with payment method and shipping (billing) address
 * 1. Start purchase session via mutation `purchaseBegin`
 * 2. Send UI form to Recurly to get Token data, for AMAZON_PAY payment type use Amazon lib
 * 3. Complete purchase with received Token data via mutation `purchaseCommit`, submit Recurly/Amazon HTTP error via mutation `purchaseFailed`
 * 4. Check purchase session for assync execution via `purchaseSession`
 * 
 * 
 * CHANGE PLAN FLOW: UPGRADE, DOWNGRADE, CHANGE FREQUENCY
 * 
 * 1. Get available plans via query `user` at `Subscription.plansInquiry` and ask user on plan desicion
 * 2. Get change price details via query `subscriptionChangePlanInquiry`
 * 3. Start upgrade session via mutation `subscriptionChangePlan`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 4. Check upgrade session for assync execution via query `subscriptionChangePlanSession`
 * 
 * 
 * SKIP AND PAUSE SUBSCRIPTON FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 2. Skip or pause subscription via mutation `subscriptionSkip`
 * 3. Resume subscription if required via mutation `subscriptionUnskip`
 * 
 * UNSUBSCRIBE FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 1. Get available unsubscribe reasons via query `user` at `Subscription.unsubscribeReasons` and ask user
 * 2. Unsubscribe via mutation `subscriptionUnsubscribe`, using refund desicion and unsubscribe reason
 * 3. Resume subscription if required via mutation `subscriptionResubscribe`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 
 * 
 * PAYMENT METHODS FLOW
 * 
 * 1. New payment method can be added same as purchase via calling mutation `paymentMethodCreateBegin`, getting token from Recurly/Amazon lib, calling `paymentMethodCreateCommit`
 * 2. Primary payment method can be set via mutation `paymentMethodSetPrimary`. Not valid or primary payment method cannot be used.
 * 3. Payment method can be removed via mutation `paymentMethodDelete`
 */
export type MutationAddressAddArgs = {
  input: AddressAddInput;
};


/**
 * PURCHASE FLOW
 * 
 * 0. Initial steps:
 *  * add goods to cart (subscription, ecommerce, gift subscription, etc), which will be saved to session
 *  * apply offer or coupon via mutation `couponApply`, which will be saved to session or clear coupon by `couponClear`
 *  * get purchase price details via query `purchaseInquiry`
 *  * user fill UI form with payment method and shipping (billing) address
 * 1. Start purchase session via mutation `purchaseBegin`
 * 2. Send UI form to Recurly to get Token data, for AMAZON_PAY payment type use Amazon lib
 * 3. Complete purchase with received Token data via mutation `purchaseCommit`, submit Recurly/Amazon HTTP error via mutation `purchaseFailed`
 * 4. Check purchase session for assync execution via `purchaseSession`
 * 
 * 
 * CHANGE PLAN FLOW: UPGRADE, DOWNGRADE, CHANGE FREQUENCY
 * 
 * 1. Get available plans via query `user` at `Subscription.plansInquiry` and ask user on plan desicion
 * 2. Get change price details via query `subscriptionChangePlanInquiry`
 * 3. Start upgrade session via mutation `subscriptionChangePlan`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 4. Check upgrade session for assync execution via query `subscriptionChangePlanSession`
 * 
 * 
 * SKIP AND PAUSE SUBSCRIPTON FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 2. Skip or pause subscription via mutation `subscriptionSkip`
 * 3. Resume subscription if required via mutation `subscriptionUnskip`
 * 
 * UNSUBSCRIBE FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 1. Get available unsubscribe reasons via query `user` at `Subscription.unsubscribeReasons` and ask user
 * 2. Unsubscribe via mutation `subscriptionUnsubscribe`, using refund desicion and unsubscribe reason
 * 3. Resume subscription if required via mutation `subscriptionResubscribe`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 
 * 
 * PAYMENT METHODS FLOW
 * 
 * 1. New payment method can be added same as purchase via calling mutation `paymentMethodCreateBegin`, getting token from Recurly/Amazon lib, calling `paymentMethodCreateCommit`
 * 2. Primary payment method can be set via mutation `paymentMethodSetPrimary`. Not valid or primary payment method cannot be used.
 * 3. Payment method can be removed via mutation `paymentMethodDelete`
 */
export type MutationAddressUpdateArgs = {
  input: AddressUpdateInput;
};


/**
 * PURCHASE FLOW
 * 
 * 0. Initial steps:
 *  * add goods to cart (subscription, ecommerce, gift subscription, etc), which will be saved to session
 *  * apply offer or coupon via mutation `couponApply`, which will be saved to session or clear coupon by `couponClear`
 *  * get purchase price details via query `purchaseInquiry`
 *  * user fill UI form with payment method and shipping (billing) address
 * 1. Start purchase session via mutation `purchaseBegin`
 * 2. Send UI form to Recurly to get Token data, for AMAZON_PAY payment type use Amazon lib
 * 3. Complete purchase with received Token data via mutation `purchaseCommit`, submit Recurly/Amazon HTTP error via mutation `purchaseFailed`
 * 4. Check purchase session for assync execution via `purchaseSession`
 * 
 * 
 * CHANGE PLAN FLOW: UPGRADE, DOWNGRADE, CHANGE FREQUENCY
 * 
 * 1. Get available plans via query `user` at `Subscription.plansInquiry` and ask user on plan desicion
 * 2. Get change price details via query `subscriptionChangePlanInquiry`
 * 3. Start upgrade session via mutation `subscriptionChangePlan`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 4. Check upgrade session for assync execution via query `subscriptionChangePlanSession`
 * 
 * 
 * SKIP AND PAUSE SUBSCRIPTON FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 2. Skip or pause subscription via mutation `subscriptionSkip`
 * 3. Resume subscription if required via mutation `subscriptionUnskip`
 * 
 * UNSUBSCRIBE FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 1. Get available unsubscribe reasons via query `user` at `Subscription.unsubscribeReasons` and ask user
 * 2. Unsubscribe via mutation `subscriptionUnsubscribe`, using refund desicion and unsubscribe reason
 * 3. Resume subscription if required via mutation `subscriptionResubscribe`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 
 * 
 * PAYMENT METHODS FLOW
 * 
 * 1. New payment method can be added same as purchase via calling mutation `paymentMethodCreateBegin`, getting token from Recurly/Amazon lib, calling `paymentMethodCreateCommit`
 * 2. Primary payment method can be set via mutation `paymentMethodSetPrimary`. Not valid or primary payment method cannot be used.
 * 3. Payment method can be removed via mutation `paymentMethodDelete`
 */
export type MutationAddressDeleteArgs = {
  input: AddressDeleteInput;
};


/**
 * PURCHASE FLOW
 * 
 * 0. Initial steps:
 *  * add goods to cart (subscription, ecommerce, gift subscription, etc), which will be saved to session
 *  * apply offer or coupon via mutation `couponApply`, which will be saved to session or clear coupon by `couponClear`
 *  * get purchase price details via query `purchaseInquiry`
 *  * user fill UI form with payment method and shipping (billing) address
 * 1. Start purchase session via mutation `purchaseBegin`
 * 2. Send UI form to Recurly to get Token data, for AMAZON_PAY payment type use Amazon lib
 * 3. Complete purchase with received Token data via mutation `purchaseCommit`, submit Recurly/Amazon HTTP error via mutation `purchaseFailed`
 * 4. Check purchase session for assync execution via `purchaseSession`
 * 
 * 
 * CHANGE PLAN FLOW: UPGRADE, DOWNGRADE, CHANGE FREQUENCY
 * 
 * 1. Get available plans via query `user` at `Subscription.plansInquiry` and ask user on plan desicion
 * 2. Get change price details via query `subscriptionChangePlanInquiry`
 * 3. Start upgrade session via mutation `subscriptionChangePlan`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 4. Check upgrade session for assync execution via query `subscriptionChangePlanSession`
 * 
 * 
 * SKIP AND PAUSE SUBSCRIPTON FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 2. Skip or pause subscription via mutation `subscriptionSkip`
 * 3. Resume subscription if required via mutation `subscriptionUnskip`
 * 
 * UNSUBSCRIBE FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 1. Get available unsubscribe reasons via query `user` at `Subscription.unsubscribeReasons` and ask user
 * 2. Unsubscribe via mutation `subscriptionUnsubscribe`, using refund desicion and unsubscribe reason
 * 3. Resume subscription if required via mutation `subscriptionResubscribe`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 
 * 
 * PAYMENT METHODS FLOW
 * 
 * 1. New payment method can be added same as purchase via calling mutation `paymentMethodCreateBegin`, getting token from Recurly/Amazon lib, calling `paymentMethodCreateCommit`
 * 2. Primary payment method can be set via mutation `paymentMethodSetPrimary`. Not valid or primary payment method cannot be used.
 * 3. Payment method can be removed via mutation `paymentMethodDelete`
 */
export type MutationGiftSubscriptionRedeemArgs = {
  input: GiftSubscriptionRedeemInput;
};


/**
 * PURCHASE FLOW
 * 
 * 0. Initial steps:
 *  * add goods to cart (subscription, ecommerce, gift subscription, etc), which will be saved to session
 *  * apply offer or coupon via mutation `couponApply`, which will be saved to session or clear coupon by `couponClear`
 *  * get purchase price details via query `purchaseInquiry`
 *  * user fill UI form with payment method and shipping (billing) address
 * 1. Start purchase session via mutation `purchaseBegin`
 * 2. Send UI form to Recurly to get Token data, for AMAZON_PAY payment type use Amazon lib
 * 3. Complete purchase with received Token data via mutation `purchaseCommit`, submit Recurly/Amazon HTTP error via mutation `purchaseFailed`
 * 4. Check purchase session for assync execution via `purchaseSession`
 * 
 * 
 * CHANGE PLAN FLOW: UPGRADE, DOWNGRADE, CHANGE FREQUENCY
 * 
 * 1. Get available plans via query `user` at `Subscription.plansInquiry` and ask user on plan desicion
 * 2. Get change price details via query `subscriptionChangePlanInquiry`
 * 3. Start upgrade session via mutation `subscriptionChangePlan`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 4. Check upgrade session for assync execution via query `subscriptionChangePlanSession`
 * 
 * 
 * SKIP AND PAUSE SUBSCRIPTON FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 2. Skip or pause subscription via mutation `subscriptionSkip`
 * 3. Resume subscription if required via mutation `subscriptionUnskip`
 * 
 * UNSUBSCRIBE FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 1. Get available unsubscribe reasons via query `user` at `Subscription.unsubscribeReasons` and ask user
 * 2. Unsubscribe via mutation `subscriptionUnsubscribe`, using refund desicion and unsubscribe reason
 * 3. Resume subscription if required via mutation `subscriptionResubscribe`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 
 * 
 * PAYMENT METHODS FLOW
 * 
 * 1. New payment method can be added same as purchase via calling mutation `paymentMethodCreateBegin`, getting token from Recurly/Amazon lib, calling `paymentMethodCreateCommit`
 * 2. Primary payment method can be set via mutation `paymentMethodSetPrimary`. Not valid or primary payment method cannot be used.
 * 3. Payment method can be removed via mutation `paymentMethodDelete`
 */
export type MutationGiftCardAcceptArgs = {
  input: GiftCardAcceptInput;
};


/**
 * PURCHASE FLOW
 * 
 * 0. Initial steps:
 *  * add goods to cart (subscription, ecommerce, gift subscription, etc), which will be saved to session
 *  * apply offer or coupon via mutation `couponApply`, which will be saved to session or clear coupon by `couponClear`
 *  * get purchase price details via query `purchaseInquiry`
 *  * user fill UI form with payment method and shipping (billing) address
 * 1. Start purchase session via mutation `purchaseBegin`
 * 2. Send UI form to Recurly to get Token data, for AMAZON_PAY payment type use Amazon lib
 * 3. Complete purchase with received Token data via mutation `purchaseCommit`, submit Recurly/Amazon HTTP error via mutation `purchaseFailed`
 * 4. Check purchase session for assync execution via `purchaseSession`
 * 
 * 
 * CHANGE PLAN FLOW: UPGRADE, DOWNGRADE, CHANGE FREQUENCY
 * 
 * 1. Get available plans via query `user` at `Subscription.plansInquiry` and ask user on plan desicion
 * 2. Get change price details via query `subscriptionChangePlanInquiry`
 * 3. Start upgrade session via mutation `subscriptionChangePlan`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 4. Check upgrade session for assync execution via query `subscriptionChangePlanSession`
 * 
 * 
 * SKIP AND PAUSE SUBSCRIPTON FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 2. Skip or pause subscription via mutation `subscriptionSkip`
 * 3. Resume subscription if required via mutation `subscriptionUnskip`
 * 
 * UNSUBSCRIBE FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 1. Get available unsubscribe reasons via query `user` at `Subscription.unsubscribeReasons` and ask user
 * 2. Unsubscribe via mutation `subscriptionUnsubscribe`, using refund desicion and unsubscribe reason
 * 3. Resume subscription if required via mutation `subscriptionResubscribe`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 
 * 
 * PAYMENT METHODS FLOW
 * 
 * 1. New payment method can be added same as purchase via calling mutation `paymentMethodCreateBegin`, getting token from Recurly/Amazon lib, calling `paymentMethodCreateCommit`
 * 2. Primary payment method can be set via mutation `paymentMethodSetPrimary`. Not valid or primary payment method cannot be used.
 * 3. Payment method can be removed via mutation `paymentMethodDelete`
 */
export type MutationPaymentPageEventFireArgs = {
  input: PaymentPageEventFireInput;
};


/**
 * PURCHASE FLOW
 * 
 * 0. Initial steps:
 *  * add goods to cart (subscription, ecommerce, gift subscription, etc), which will be saved to session
 *  * apply offer or coupon via mutation `couponApply`, which will be saved to session or clear coupon by `couponClear`
 *  * get purchase price details via query `purchaseInquiry`
 *  * user fill UI form with payment method and shipping (billing) address
 * 1. Start purchase session via mutation `purchaseBegin`
 * 2. Send UI form to Recurly to get Token data, for AMAZON_PAY payment type use Amazon lib
 * 3. Complete purchase with received Token data via mutation `purchaseCommit`, submit Recurly/Amazon HTTP error via mutation `purchaseFailed`
 * 4. Check purchase session for assync execution via `purchaseSession`
 * 
 * 
 * CHANGE PLAN FLOW: UPGRADE, DOWNGRADE, CHANGE FREQUENCY
 * 
 * 1. Get available plans via query `user` at `Subscription.plansInquiry` and ask user on plan desicion
 * 2. Get change price details via query `subscriptionChangePlanInquiry`
 * 3. Start upgrade session via mutation `subscriptionChangePlan`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 4. Check upgrade session for assync execution via query `subscriptionChangePlanSession`
 * 
 * 
 * SKIP AND PAUSE SUBSCRIPTON FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 2. Skip or pause subscription via mutation `subscriptionSkip`
 * 3. Resume subscription if required via mutation `subscriptionUnskip`
 * 
 * UNSUBSCRIBE FLOW
 * 
 * 1. Get refund options via query `user` at `Subscription.refundInquiry` and ask user on refund desicion
 * 1. Get available unsubscribe reasons via query `user` at `Subscription.unsubscribeReasons` and ask user
 * 2. Unsubscribe via mutation `subscriptionUnsubscribe`, using refund desicion and unsubscribe reason
 * 3. Resume subscription if required via mutation `subscriptionResubscribe`. If result has `METHOD_NOT_VALID` error, than user needs to select/add another payment method.
 * 
 * 
 * PAYMENT METHODS FLOW
 * 
 * 1. New payment method can be added same as purchase via calling mutation `paymentMethodCreateBegin`, getting token from Recurly/Amazon lib, calling `paymentMethodCreateCommit`
 * 2. Primary payment method can be set via mutation `paymentMethodSetPrimary`. Not valid or primary payment method cannot be used.
 * 3. Payment method can be removed via mutation `paymentMethodDelete`
 */
export type MutationUserPersonalInfoUpdateArgs = {
  input: UserPersonalInfoUpdateInput;
};

export type Note = {
  __typename?: 'Note';
  /** internal id */
  id: Scalars['Long'];
  /** name, eg Mint */
  name: Scalars['String'];
  /** link to image */
  image: Scalars['String'];
  /** link to high definition image, used in note landing page */
  imageHd?: Maybe<Scalars['String']>;
  /** text description */
  description?: Maybe<Scalars['String']>;
  /** slug */
  slug: Scalars['String'];
};

export type OlfactiveClassProducts = {
  __typename?: 'OlfactiveClassProducts';
  olfactiveClass?: Maybe<Scalars['String']>;
  products: Array<Product>;
};

/**
 * Common error interface
 * Code of error (errorCode) is typed and must be placed in each interface implementation
 */
export type OperationError = {
  /** human readable error message */
  message: Scalars['String'];
};

export type OperationSession = {
  __typename?: 'OperationSession';
  /** session id */
  id: Scalars['Long'];
  /** session status */
  status: OperationSessionStatus;
  /** needed to trigger actions right after purchase session status finalization (e.g. fire analytics event only once) */
  statusFinalized?: Maybe<Scalars['Boolean']>;
};

export type OperationSessionStatus = 
  /** Set when SubscriptionSession created */
  | 'NEW'
  /** Set before we commit SubscriptionSession in Payment Gateway */
  | 'IN_PROGRESS'
  /** Set when commit SubscriptionSession in PG failed */
  | 'FAILED'
  /** Set when commit SubscriptionSession in PG success */
  | 'SUCCESS';

export type Order = {
  __typename?: 'Order';
  /** id of purchase order */
  id?: Maybe<Scalars['Long']>;
  /** purchase order number */
  number?: Maybe<Scalars['String']>;
  /** date when the order was purchases */
  createdDate?: Maybe<Scalars['LocalDate']>;
  /**
   * the month where this order must be delivered, in some specific cases it can be different from created date
   * for example if customer subscribed on 24 Aug, this field will return September, because we will only ship
   * subscription order once in the month, and 24 Aug to close to next shipment wave, we plus one month to the
   * order date and will not send any additional order in September, this Aug order will be counted as September
   */
  deliveryMonth?: Maybe<Scalars['YearMonth']>;
  /** order's status */
  status?: Maybe<OrderStatus>;
  /** user friendly status text */
  statusText?: Maybe<Scalars['String']>;
  /** next shipment date */
  shipmentDate?: Maybe<Scalars['LocalDate']>;
  /** purchase order items */
  items: Array<PurchaseItem>;
  /** tracking information, only for processed orders */
  tracking?: Maybe<OrderTracking>;
};

export type OrderData = {
  __typename?: 'OrderData';
  /** fetched order */
  order?: Maybe<Order>;
};

export type OrderError = SecurityError | ServerError;

export type OrderInput = {
  /** id of order */
  id: Scalars['Long'];
};

export type OrderPayload = {
  __typename?: 'OrderPayload';
  /** data of order */
  data?: Maybe<OrderData>;
  /** error data */
  error?: Maybe<OrderError>;
};

/** TODO sync with java enum */
export type OrderStatus = 
  | 'CANCELLED'
  | 'DRAFT'
  | 'DUPLICATED'
  | 'INSUFFICIENT_CREDITS'
  | 'ITEM_NOT_AVAILABLE'
  | 'ON_HOLD'
  | 'PENDING_ADDRESS_CHANGE'
  | 'PENDING_PROCESSING'
  | 'PENDING_VERIFICATION'
  | 'PROCESSED'
  | 'SHIPPED'
  | 'SHOPIFY_PENDING_PROCESSING'
  | 'SPECIAL'
  | 'SUPERSEDED'
  | 'UNDELIVERABLE_ADDRESS'
  | 'UNPROCESSED'
  | 'UPGRADED'
  | 'VERIFICATION_FAILED'
  | 'WRONG_ADDRESS'
  | 'NOT_READY_FOR_PROCESSING';

export type OrderTracking = {
  __typename?: 'OrderTracking';
  /** tracking number */
  number: Scalars['String'];
  /** url to webpage where displayed detailed tracking information (narvar) */
  url: Scalars['String'];
  /** shipment status */
  status: ShipmentStatus;
  /** user friendly shipment status text */
  statusText: Scalars['String'];
};

export type OrderType = 
  | 'SUBSCRIPTION'
  | 'ECOMMERCE'
  | 'REPLACEMENT'
  | 'SUBSCRIPTION_CUSTOM_SHIPMENT';

export type OrdersData = {
  __typename?: 'OrdersData';
  /** list of filtered orders */
  data: Array<Order>;
  /** pagination total count of orders */
  totalCount: Scalars['Long'];
};

export type OriginType = 
  /** Coupon was applied manually by customer */
  | 'MANUAL'
  /** Coupon was applied automatically from landing page */
  | 'LANDING'
  /** Coupon was applied automatically from site (e.g. resubfreeproduct on resubscribe/unsubscribe flow) */
  | 'SITE';

export type PaymentGatewayError = OperationError & {
  __typename?: 'PaymentGatewayError';
  /** code of error */
  errorCode: PaymentGatewayErrorCode;
  /** gateway error code */
  gatewayErrorCode?: Maybe<Scalars['String']>;
  /** gateway error message */
  gatewayErrorMessage?: Maybe<Scalars['String']>;
  /** customer error message */
  message: Scalars['String'];
  /** additional metadata for the client */
  metadata?: Maybe<ErrorMetadata>;
};

export type PaymentGatewayErrorCode = 
  | 'NETWORK_ERROR'
  | 'PURCHASE_TRANSACTION_ERROR'
  | 'SUBSCRIPTION_CANCELLATION_ERROR'
  | 'SUBSCRIPTION_REACTIVATION_ERROR'
  | 'SUBSCRIPTION_RESUME_ERROR'
  | 'INVALID_TOKEN_ID'
  /** error occurred during gift subscription activation */
  | 'GIFT_SUBSCRIPTION_ACTIVATION_ERROR'
  /** error occurred during gift card activation */
  | 'GIFT_CARD_ACTIVATION_ERROR';

export type PaymentMethod = {
  __typename?: 'PaymentMethod';
  /** payment method id */
  id: Scalars['String'];
  /** payment type */
  type: PaymentMethodType;
  /** is primary payment method */
  primary: Scalars['Boolean'];
  /** user presentation (masked cart number, email for PayPal, etc) */
  name?: Maybe<Scalars['String']>;
  /** expiration date of credit card */
  expirationDate?: Maybe<Scalars['String']>;
  /** is valid payment */
  valid?: Maybe<Scalars['Boolean']>;
  /** reason if not valid */
  note?: Maybe<Scalars['String']>;
  /**
   * scope that defines for what types of purchases this payment method can be used: subscription or ecommerce only.
   * Currently payment method is identified as primary if it has SUBSCRIPTION scope
   */
  scope?: Maybe<PaymentMethodScope>;
};

export type PaymentMethodBeginData = {
  __typename?: 'PaymentMethodBeginData';
  /** id of payment method session */
  sessionId: Scalars['Long'];
};

export type PaymentMethodBeginError = SecurityError | ServerError | PaymentGatewayError;

export type PaymentMethodBeginInput = {
  /** type of payment */
  paymentMethod: PaymentMethodType;
  /** billing address */
  billing?: Maybe<AddressInput>;
  /** is primary */
  primary: Scalars['Boolean'];
  /** coupon code or offer code which linked to this update paymenth method operation */
  couponCode?: Maybe<Scalars['String']>;
  /** analytics metadata */
  metadata?: Maybe<AnalyticsMetadataInput>;
};

export type PaymentMethodBeginPayload = {
  __typename?: 'PaymentMethodBeginPayload';
  /** data of purchase begin */
  data?: Maybe<PaymentMethodBeginData>;
  /** error data */
  error?: Maybe<PaymentMethodBeginError>;
};

export type PaymentMethodChangeError = SecurityError | ServerError | PaymentGatewayError | PaymentMethodError;

export type PaymentMethodCommitData = {
  __typename?: 'PaymentMethodCommitData';
  /** id of new payment method */
  paymentMethodId: Scalars['String'];
};

export type PaymentMethodCommitError = SecurityError | ValidationError | PaymentGatewayError | ServerError;

export type PaymentMethodCommitInput = {
  /** id of begin method session */
  sessionId: Scalars['Long'];
  /** Recurly/Amazon token */
  token: Token;
};

export type PaymentMethodCommitPayload = {
  __typename?: 'PaymentMethodCommitPayload';
  /** data of payment method data */
  data?: Maybe<PaymentMethodCommitData>;
  /** error data */
  error?: Maybe<PaymentMethodCommitError>;
};

export type PaymentMethodDeleteError = SecurityError | ServerError | PaymentGatewayError | PaymentMethodError;

export type PaymentMethodDeleteInput = {
  /** id of payment method */
  paymentMethodId: Scalars['String'];
};

export type PaymentMethodDeletePayload = {
  __typename?: 'PaymentMethodDeletePayload';
  /** error data */
  error?: Maybe<PaymentMethodDeleteError>;
};

export type PaymentMethodError = OperationError & {
  __typename?: 'PaymentMethodError';
  /** code of error */
  errorCode: PaymentMethodErrorCode;
  /** invalid payment method */
  paymentMethodId: Scalars['String'];
  /** reason why is not valid */
  reason?: Maybe<Scalars['String']>;
  /** customer error message */
  message: Scalars['String'];
  /** additional metadata for the client */
  metadata?: Maybe<ErrorMetadata>;
};

export type PaymentMethodErrorCode = 
  /**
   * INVALID PAYMENT FLOW:
   * 1. If user want to add new payment method, then use `paymentMethodCreateBegin`, `paymentMethodCreateCommit`
   * 2. Use new or another existing payment method by id in `subscriptionResubscribe`, `subscriptionChangePlan`, `paymentMethodSetPrimary`
   */
  | 'METHOD_NOT_VALID'
  /** paymemt method is primary, it can not be removed or you can not select is primary */
  | 'METHOD_IS_PRIMARY';

export type PaymentMethodInput = {
  /**
   * defines what payment methods to retrieve: for subscription related operations or ecommerce
   * need to pass ECOMMERCE_ONLY for all ecommerce purchase related operations including buy your queue
   * temporary solution, needed until wallet feature is supported in Recurly
   */
  scope?: Maybe<PaymentMethodScope>;
};

export type PaymentMethodScope = 
  /** can be used for purchase subscription + ecommerce or subscription only */
  | 'SUBSCRIPTION'
  /** can be used for ecommerce purchase only */
  | 'ECOMMERCE_ONLY';

export type PaymentMethodSetPrimaryInput = {
  /** id of payment method */
  paymentMethodId: Scalars['String'];
};

export type PaymentMethodSetPrimaryPayload = {
  __typename?: 'PaymentMethodSetPrimaryPayload';
  /** error data */
  error?: Maybe<PaymentMethodChangeError>;
};

export type PaymentMethodType = 
  | 'CREDIT_CARD'
  | 'PAYPAL'
  | 'APPLE_PAY'
  | 'AMAZON_PAY';

export type PaymentPageEventFireInput = {
  /** shipping address */
  eventName: EventNameType;
  /** gift subscription code */
  pickedProductIds: Array<Scalars['Long']>;
};

export type PaymentPageEventFirePayload = {
  __typename?: 'PaymentPageEventFirePayload';
  /** payment page event fire error */
  error?: Maybe<PaymentPageEventFirePayloadError>;
};

export type PaymentPageEventFirePayloadError = SecurityError;

export type PersonalInfo = {
  __typename?: 'PersonalInfo';
  /** internal user id */
  id: Scalars['Long'];
  /** user first name */
  firstName: Scalars['String'];
  /** user last name */
  lastName: Scalars['String'];
  /** user email */
  email: Scalars['String'];
  /** date of birth */
  birthday?: Maybe<Scalars['String']>;
  /** user gender [male, female] */
  gender: UserGender;
  /** link to avatar image */
  avatar?: Maybe<Scalars['String']>;
  /** value of timezone_offset cookie */
  timezone?: Maybe<Scalars['Int']>;
  /** information related to user address */
  addressInfo?: Maybe<AddressInfo>;
  /** LTN token for direct authorization */
  tokenLtn?: Maybe<Scalars['String']>;
  /** Account and ecommerce credits balance */
  credits?: Maybe<CreditBalance>;
  /** Identity in analytic systems */
  analyticsMetadata: AnalyticsMetadata;
};

export type PersonalInfoUpdatePayloadError = SecurityError | ServerError | UserEmailUpdateError | ValidationError;

export type PickProductLineItem = {
  __typename?: 'PickProductLineItem';
  /** description of product */
  product?: Maybe<Product>;
};

export type PickedProductItemInput = {
  /** trading item id */
  productId: Scalars['Long'];
};

export type PixelDataInput = {
  /** pixel name, could be any string, new pixels are added by marketing in GTM */
  name: Scalars['String'];
};

export type PixelDataPayload = {
  __typename?: 'PixelDataPayload';
  /** error data */
  error?: Maybe<PixelFireError>;
};

export type PixelFireError = ServerError;

export type PlansInquiryInput = {
  /**
   * amount of how many perfumes/product user can receive per period,
   * example: perfumesPerPeriod = 3 and billingPeriod = shippingPeriod = 1 it means: 3 perfumes / 1 month
   */
  productsPerPeriod?: Maybe<Scalars['Int']>;
  /** Pay every x months */
  billingPeriod?: Maybe<Scalars['Int']>;
  /** Receive product every x months. Default value 1. */
  shippingPeriod?: Maybe<Scalars['Int']>;
  /** Coupon code or offer code */
  couponCode?: Maybe<Scalars['String']>;
  /** Plan category (basic or light) */
  category?: Maybe<SubscriptionPlanCategory>;
};

export type PlansOptions = {
  __typename?: 'PlansOptions';
  /** list of subscription plans available to upgrade from this plan */
  upgradePlans: Array<SubscriptionPlanOption>;
  /** list of subscription plans available to downgrade from this plan */
  downgradePlans: Array<SubscriptionPlanOption>;
  /** list of subscription plans available to change frequency from this plan */
  changeFrequencyPlans: Array<SubscriptionPlanOption>;
};

export type PossibleOfferLineItem = {
  __typename?: 'PossibleOfferLineItem';
  /** label text */
  label: Scalars['String'];
};

export type PremiumProductInBatchNotification = {
  __typename?: 'PremiumProductInBatchNotification';
  /** first premium product in batch */
  product?: Maybe<Product>;
};

export type PriceRule = {
  __typename?: 'PriceRule';
  /** name of ecommerce price rule, e.g. TOSSIN, TWO_PRODUCT_FOR_25, GIFTSET_DISCOUNT, etc. */
  name: Scalars['String'];
  /** value of ecommerce price rule, cents */
  price: Scalars['Long'];
};

/** Product, gift subscription? */
export type Product = {
  __typename?: 'Product';
  /** product id */
  id: Scalars['Long'];
  /** trading item id */
  tradingId?: Maybe<Scalars['Long']>;
  /** product name */
  name: Scalars['String'];
  /** product description */
  description?: Maybe<Scalars['String']>;
  /**
   * brand name
   * @deprecated Field no longer supported
   */
  brand: Scalars['String'];
  /**
   * use brandInfo
   *  brand info
   */
  brandInfo: BrandInfo;
  /** product image */
  images: Images;
  /** product image (on request from front-end team) */
  image: Scalars['String'];
  /** oz, ml, etc */
  volume?: Maybe<Scalars['String']>;
  /** unit of product */
  unit?: Maybe<Scalars['String']>;
  /** price of 1 unit, cents */
  price: Scalars['Long'];
  /** additional price for premium product */
  upchargePrice: Scalars['Long'];
  /** product type */
  type: Scalars['String'];
  /** product type group */
  typeGroup: Scalars['String'];
  /** frontend product link with SEO */
  url: Scalars['String'];
  /** product rating statistics */
  rating?: Maybe<Rating>;
  /** visibility of product */
  visibility: ProductVisibility;
  /** product category, eg Eau de Parfum, Face, etc */
  category: Scalars['String'];
  /** rating by current user */
  userRating?: Maybe<Scalars['Int']>;
  /** review by current user */
  userReview?: Maybe<ProductReview>;
  /** user reviews */
  reviews?: Maybe<ProductReviews>;
  /** main notes for fragrance */
  notes: Array<Note>;
  /** product sex */
  gender: ProductGender;
  /** limited edition product */
  isLimitedEdition: Scalars['Boolean'];
  /** properties only related to limited edition info */
  limitedEditionInfo?: Maybe<LimitedEditionInfo>;
  /** is user has subscribed to stock notifications */
  isSubscribedToStockNotification: Scalars['Boolean'];
  /** product labels */
  labels?: Maybe<Array<Scalars['String']>>;
  /** status that shows how user has voted for given product in recommendations (like/dislike) */
  userVote?: Maybe<VoteStatus>;
  /** status that shows how user has voted for given product in recommendations (like/dislike) */
  fragranceFamilies: Array<FragranceFamilyDetail>;
  /** product media by category */
  media?: Maybe<ProductMedias>;
  /** meta */
  meta?: Maybe<ProductMeta>;
  /** product description sections, eg 'How to use', 'Ingredients', 'Disclaimer' */
  descriptionSections?: Maybe<Array<ProductDescriptionSection>>;
  /** tag types */
  tagTypes: Array<TagType>;
  /** trading items object */
  tradingItems: TradingItems;
  /** product prices */
  prices: ProductPrices;
  /** flash sale product */
  isFlashSale: Scalars['Boolean'];
  shareEmailAgreement?: Maybe<ShareEmailAgreementGql>;
};


/** Product, gift subscription? */
export type ProductImageArgs = {
  fullSizeImage?: Maybe<Scalars['Boolean']>;
};


/** Product, gift subscription? */
export type ProductReviewsArgs = {
  input?: Maybe<ProductReviewsFilterInput>;
};


/** Product, gift subscription? */
export type ProductLabelsArgs = {
  type?: Maybe<LabelsType>;
};


/** Product, gift subscription? */
export type ProductMediaArgs = {
  mediaCategory?: Maybe<ProductMediaCategory>;
};

export type ProductDescriptionSection = {
  id: Scalars['String'];
  title: Scalars['String'];
};

export type ProductFilter = {
  __typename?: 'ProductFilter';
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

export type ProductGender = 
  | 'MALE'
  | 'FEMALE'
  | 'UNISEX';

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
  | 'Inventory'
  | 'GiftCard';

export type ProductInput = {
  /** product link slug or id */
  slug: Scalars['String'];
};

export type ProductItemInput = {
  /** trading item id */
  productLineItemId: Scalars['Long'];
  /** number of units */
  quantity?: Maybe<Scalars['Int']>;
  /** type of offer */
  offer?: Maybe<EcommercePriceRulesAndOffers>;
};

export type ProductLabelFormat = 
  | 'PDF'
  | 'SVG'
  | 'PNG';

export type ProductLineItem = {
  __typename?: 'ProductLineItem';
  /** trading item id */
  id: Scalars['Long'];
  /** description of product */
  product?: Maybe<Product>;
  /** number of units */
  quantity: Scalars['Int'];
  /** total amount, cents */
  price: Scalars['Long'];
  /** total amount of discount, cents */
  discount?: Maybe<Discount>;
  /** offer applied for given product */
  offer?: Maybe<EcommercePriceRulesAndOffers>;
  /** potential offer if customer adds one more product of given type (e.g. gift set) */
  possibleOffer?: Maybe<PossibleOfferLineItem>;
};

export type ProductMedia = {
  __typename?: 'ProductMedia';
  name?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  thumb: Scalars['String'];
  preview: Scalars['String'];
  bigImage?: Maybe<Scalars['String']>;
};

export type ProductMediaCategory = 
  | 'ALL'
  | 'EXTRA'
  | 'MAKEUP'
  | 'HERO'
  | 'REVIEW';

export type ProductMedias = {
  __typename?: 'ProductMedias';
  medias?: Maybe<Array<ProductMedia>>;
  mediaCategory: ProductMediaCategory;
  count: Scalars['Int'];
};

export type ProductMeta = {
  __typename?: 'ProductMeta';
  title: Scalars['String'];
  description: Scalars['String'];
};

export type ProductOfMonth = {
  __typename?: 'ProductOfMonth';
  year: Scalars['Long'];
  month: Scalars['Long'];
  monthName: Scalars['String'];
  details?: Maybe<ProductOfMonthDetails>;
  product?: Maybe<Product>;
};

export type ProductOfMonthBrand = {
  __typename?: 'ProductOfMonthBrand';
  logo?: Maybe<Scalars['String']>;
  text?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
  imageTitle?: Maybe<Scalars['String']>;
};

export type ProductOfMonthDetails = {
  __typename?: 'ProductOfMonthDetails';
  image?: Maybe<Scalars['String']>;
  mobileImage?: Maybe<Scalars['String']>;
  listImage?: Maybe<Scalars['String']>;
  narrowListImage?: Maybe<Scalars['String']>;
  brand?: Maybe<ProductOfMonthBrand>;
  quote?: Maybe<ProductOfMonthQuote>;
  product?: Maybe<ProductOfMonthProduct>;
  video?: Maybe<ProductOfMonthVideo>;
};

export type ProductOfMonthProduct = {
  __typename?: 'ProductOfMonthProduct';
  logo?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['String']>;
};

export type ProductOfMonthQuote = {
  __typename?: 'ProductOfMonthQuote';
  text?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  authorPhoto?: Maybe<Scalars['String']>;
  authorDescription?: Maybe<Scalars['String']>;
};

export type ProductOfMonthVideo = {
  __typename?: 'ProductOfMonthVideo';
  url?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  preview?: Maybe<Scalars['String']>;
};

export type ProductPayload = {
  __typename?: 'ProductPayload';
  data?: Maybe<Product>;
};

export type ProductPrices = {
  __typename?: 'ProductPrices';
  /**
   * final price of primary ecommerce item, not yet implemented
   * ecommerce: Money
   * price at retail shop
   */
  retail?: Maybe<Money>;
};


export type ProductPricesRetailArgs = {
  ignoreVisibility?: Maybe<Scalars['Boolean']>;
};

export type ProductPurchaseItem = PurchaseItem & {
  __typename?: 'ProductPurchaseItem';
  /** id of order item */
  id: Scalars['Long'];
  /** description of product */
  product?: Maybe<Product>;
  /** total price */
  total: Scalars['Int'];
  /** number of units */
  quantity: Scalars['Int'];
};

export type ProductReview = {
  __typename?: 'ProductReview';
  /** id of review */
  id: Scalars['Long'];
  /** user rating, 1-5 */
  rating: Scalars['Int'];
  /** created timestamp */
  date: Scalars['LocalDateTime'];
  /** review title */
  title?: Maybe<Scalars['String']>;
  /** review text */
  text: Scalars['String'];
  /** votes for review */
  helpful?: Maybe<ReviewVotes>;
  /** user age category */
  ageCategory?: Maybe<Scalars['String']>;
  /** user skin type */
  skinType?: Maybe<Scalars['String']>;
  /** what is good for user */
  userLikes: Array<ProductUserFeeling>;
  /** what is bad for user */
  userDislikes: Array<ProductUserFeeling>;
};

export type ProductReviewSorting = 
  | 'RATING'
  | 'RECENT';

export type ProductReviews = {
  __typename?: 'ProductReviews';
  /** product reviews */
  reviews?: Maybe<Array<Maybe<ProductReview>>>;
  /** total reviews count */
  count: Scalars['Int'];
};

export type ProductReviewsFilterInput = {
  rating?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  sort?: Maybe<ProductReviewSorting>;
};

export type ProductSort = {
  __typename?: 'ProductSort';
  id: Scalars['String'];
  title?: Maybe<Scalars['String']>;
};

export type ProductSource = 
  | 'BESTSELLERS'
  | 'NICHE';

export type ProductUserFeeling = {
  __typename?: 'ProductUserFeeling';
  /** id of property */
  id: Scalars['String'];
  /** user friendly text */
  name: Scalars['String'];
};

export type ProductValidationError = OperationError & {
  __typename?: 'ProductValidationError';
  productId: Scalars['Long'];
  /** code of error */
  errorCode: ProductValidationErrorCode;
  /** human readable error message */
  message: Scalars['String'];
};

export type ProductValidationErrorCode = 
  | 'RESTRICT_SAME_PERFUME'
  | 'OUT_OF_STOCK'
  | 'LEP_OUT_OF_STOCK'
  | 'UPCHARGE_NEED_PAYMENT_DATA'
  | 'UPCHARGE_NEED_CARD_UPDATE'
  | 'PRODUCT_NOT_FOUND'
  | 'SOMETHING_WENT_WRONG';

/** Visibility of product */
export type ProductVisibility = 
  /** visible on listings, visible on product page */
  | 'VISIBLE'
  /** invisible on listings, visible on product page in special OUT OFF STOCK design */
  | 'LANDING'
  /** invisible on listings, invisible on product page */
  | 'INVISIBLE'
  /** visible on listings with 'out of stock' label, visible on product page */
  | 'OUT_OF_STOCK';

export type ProductsOfMonthInput = {
  /** product of month gender */
  gender: UserGender;
  /** timeline upper bound */
  before?: Maybe<Scalars['YearMonth']>;
  /** timeline size in months */
  months?: Maybe<Scalars['Long']>;
};

export type ProductsOfMonthPayload = {
  __typename?: 'ProductsOfMonthPayload';
  data?: Maybe<Array<ProductOfMonth>>;
};

export type ProfileRecommendationData = RecommendationData & {
  __typename?: 'ProfileRecommendationData';
  /** recommendation type */
  type: RecommendationType;
  /** recommender algorithm name for client analytycs */
  recommenderName?: Maybe<Scalars['String']>;
  /** groups of recommendation */
  classes: Array<OlfactiveClassProducts>;
};

export type ProfileRecommendationInput = {
  limit?: Maybe<Scalars['Int']>;
  placement?: Maybe<Scalars['String']>;
};

export type PurchaseBeginData = {
  __typename?: 'PurchaseBeginData';
  /** id of purchase session */
  sessionId: Scalars['Long'];
};

export type PurchaseBeginError = OperationError & {
  __typename?: 'PurchaseBeginError';
  /** code of error */
  errorCode: PurchaseBeginErrorCode;
  /** human readable error message */
  message: Scalars['String'];
};

export type PurchaseBeginErrorCode = 
  /** nothing to buy, customer's cart is empty */
  | 'CART_IS_EMPTY'
  /** both shipping and billing addresses were not specified */
  | 'ADDRESS_NOT_FOUND'
  /** subscription is not added to the cart, can not make purchase for subscription level */
  | 'SUBSCRIPTION_NOT_FOUND'
  /** ecommerce products are not added to the cart, can not make purchase for given level */
  | 'ECOMMERCE_NOT_FOUND'
  /** subscription queue products are not added to the cart, can not make purchase for given level */
  | 'QUEUE_ITEMS_NOT_FOUND'
  /** gift subscription is not added to the cart, can not make purchase for given level */
  | 'GIFT_SUBSCRIPTION_NOT_FOUND'
  /** Customer tries to purchase twice (double clicks and so on) or more at the same time */
  | 'ANOTHER_PURCHASE_IN_PROGRESS';

export type PurchaseBeginInput = {
  /** type of payment */
  paymentMethod?: Maybe<PaymentMethodType>;
  /** shipping address */
  shipping?: Maybe<AddressInput>;
  /** billing address, can be not passed if same as shipping address */
  billing?: Maybe<AddressInput>;
  /** scope of purchase items from cart */
  purchaseLevel?: Maybe<PurchaseLevel>;
};

export type PurchaseBeginPayload = {
  __typename?: 'PurchaseBeginPayload';
  /** data of purchase begin */
  data?: Maybe<PurchaseBeginData>;
  /** error data */
  error?: Maybe<PurchaseBeginPayloadError>;
};

export type PurchaseBeginPayloadError = PurchaseBeginError | SubscribedError | SecurityError | ServerError;

export type PurchaseCommitData = {
  __typename?: 'PurchaseCommitData';
  /** list of purchase orders */
  orders: Array<Order>;
  /** total price of purchase */
  total: Scalars['Int'];
  /** discount price details */
  discounts?: Maybe<Array<DiscountLineItem>>;
  /** scope of current purchase */
  purchaseLevel: PurchaseLevel;
};

export type PurchaseCommitError = OperationError & {
  __typename?: 'PurchaseCommitError';
  /** code of error */
  errorCode: PurchaseCommitErrorCode;
  /** human readable error message */
  message: Scalars['String'];
};

export type PurchaseCommitErrorCode = 
  /** when commit was requested already and this session is in progress or finished */
  | 'ALREADY_PROCESSED'
  /** when purchase items is not connected to this purchase session */
  | 'PURCHASE_ITEMS_NOT_FOUND';

export type PurchaseCommitInput = {
  /** id of purchase session */
  sessionId: Scalars['Long'];
  /** Recurly/Amazon token */
  token?: Maybe<Token>;
  /** TODO: Shipping address from Apple Pay? */
  shipping?: Maybe<AddressInput>;
};

export type PurchaseCommitPayload = {
  __typename?: 'PurchaseCommitPayload';
  /** session of purchase */
  session?: Maybe<OperationSession>;
  /** data of purchase */
  data?: Maybe<PurchaseCommitData>;
  /** error data */
  error?: Maybe<PurchaseCommitPayloadError>;
};

export type PurchaseCommitPayloadError = PurchaseBeginError | PurchaseCommitError | SubscribedError | SecurityError | ValidationError | ServerError | PaymentGatewayError | BusinessError | CouponError | PurchaseError;

export type PurchaseError = OperationError & {
  __typename?: 'PurchaseError';
  /** code of error */
  errorCode: PurchaseErrorCode;
  /** human readable error message */
  message: Scalars['String'];
  /** additional metadata for the client */
  metadata?: Maybe<ErrorMetadata>;
};

export type PurchaseErrorCode = 
  /** Address is wrong (for example zip is wrong) or tax service currently not available. */
  | 'INVALID_ADDRESS'
  /** Recurly token is required */
  | 'WRONG_TOKEN'
  /** Taxable address is required */
  | 'TAXABLE_ADDRESS_REQUIRED'
  /** Customer already has active subscription */
  | 'ALREADY_ACTIVE_SUBSCRIPTION'
  /** No primary method on account */
  | 'PRIMARY_METHOD_NOT_FOUND'
  /** Network IO exception happened - timeouts, reset and so on */
  | 'EXTERNAL_NETWORK_ISSUE'
  /** Other account in the Recurly site already using this Amazon BAID. */
  | 'AMAZON_BAID_TAKEN'
  /** Provided subscription plan code is invalid */
  | 'WRONG_PLAN_CODE'
  /** Recurly JS token is either invalid or expired */
  | 'INVALID_TOKEN'
  /** Purchase is interrupted by networking, and purchase is finished in async (background) mode */
  | 'PURCHASE_IN_PROGRESS'
  /** Customer tries to purchase twice (double clicks and so on) or more at the same time */
  | 'ANOTHER_PURCHASE_IN_PROGRESS'
  /** Customer tries to purchase with prepaid card (currently supported only for free trial) */
  | 'PREPAID_FILTERING'
  /** Unexpected error */
  | 'UNKNOWN';

export type PurchaseFailedError = SecurityError | ServerError;

export type PurchaseFailedInput = {
  /**
   * TODO: frontend httpCode, other info?
   * id of purchase session
   */
  sessionId: Scalars['Long'];
  /** gateway error code */
  purchaseErrorCode?: Maybe<Scalars['String']>;
  /** gateway error message */
  purchaseErrorMessage?: Maybe<Scalars['String']>;
};

export type PurchaseFailedPayload = {
  __typename?: 'PurchaseFailedPayload';
  /** error data */
  error?: Maybe<PurchaseFailedError>;
};

export type PurchaseInquiryData = {
  __typename?: 'PurchaseInquiryData';
  /** purchase order items */
  items: InquiryItems;
  /** total price for the whole purchase without taxes and discounts */
  subTotal: Scalars['Long'];
  /** total price of purchase */
  total: Scalars['Long'];
};

export type PurchaseInquiryError = ServerError | CartError | PurchaseError | CouponError;

export type PurchaseInquiryInput = {
  /** subscription plan if required, this overrides cart item */
  initialSubscriptionPlan?: Maybe<InitialSubscriptionPlan>;
  /** DEPRECATED shipping address - use address instead */
  shipping?: Maybe<AddressInput>;
  /** taxable address */
  address?: Maybe<AddressInput>;
  /** scope of purchase items from cart */
  purchaseLevel?: Maybe<PurchaseLevel>;
};

export type PurchaseInquiryPayload = {
  __typename?: 'PurchaseInquiryPayload';
  /** data of inquery */
  data?: Maybe<PurchaseInquiryData>;
  /** error data */
  error?: Maybe<PurchaseInquiryError>;
};

export type PurchaseItem = {
  /** id of item */
  id: Scalars['Long'];
};

export type PurchaseLevel = 
  /** Purchase all products inside the cart, include subscription and gift card if it was added before. */
  | 'ALL'
  /** Purchase gift subscription only, exclude other products inside the cart. */
  | 'GIFT_SUBSCRIPTION_ONLY'
  /** Purchase subscription only, exclude other products inside the cart. */
  | 'SUBSCRIPTION_ONLY'
  /** Purchase e-commerce products only, exclude other products inside the cart (for example subscription). */
  | 'ECOMMERCE_ONLY'
  /** Purchase subscription and e-commerce products, exclude other products inside the cart */
  | 'ECOMMERCE_AND_SUBSCRIPTION'
  /**
   * this level will purchase or calculate price for gift card only, exclude subscription or other products in
   * the cart
   */
  | 'GIFT_CARD_ONLY'
  /** Purchase queue items within buy your queue feature. */
  | 'BUY_QUEUE';

export type PurchaseOneClickInput = {
  /** Payment method id */
  paymentMethodId: Scalars['String'];
  /** scope of purchase items from cart */
  purchaseLevel?: Maybe<PurchaseLevel>;
  /** shipping address */
  shipping?: Maybe<AddressInput>;
};

export type PurchaseSessionInfo = {
  __typename?: 'PurchaseSessionInfo';
  /** last purchase session id that is in progress */
  lastPurchaseSessionIdInProgress?: Maybe<Scalars['Long']>;
  /** last change plan session id that is in progress */
  lastChangePlanSessionIdInProgress?: Maybe<Scalars['Long']>;
  /** last resubscribe session id that is in progress */
  lastResubscribeSessionIdInProgress?: Maybe<Scalars['Long']>;
};

export type PurchaseSessionInput = {
  /** id of purchase session */
  sessionId: Scalars['Long'];
};

export type Query = {
  __typename?: 'Query';
  /** fetches ab tests (split tests) data */
  abTests: AbTestsPayload;
  /** get brands */
  brands: BrandsPayload;
  /** Fetches user data */
  currentUser: UserPayload;
  /** get fragrance family */
  fragranceFamily: FragranceFamilyPayload;
  /** fetches gift subscription info */
  giftSubscription: GiftSubscriptionPayload;
  google: Google;
  /** homepage for mobile applications */
  mobileLandingGrid: MobileLandingGridPayload;
  /** user notification in applications on subscription status, CTA, leads */
  mobileNotification: MobileNotificationPayload;
  /** get order by id, will return order only for current user or empty if order is not belongs to the same user */
  order: OrderPayload;
  /** get product */
  product: ProductPayload;
  /** fetches product of month sorted by year and month collection */
  productsOfMonth: ProductsOfMonthPayload;
  /** inquire price details for any purchase: subscription, ecommerce, gifts, etc */
  purchaseInquiry: PurchaseInquiryPayload;
  /** check purchase session */
  purchaseSession: PurchaseCommitPayload;
  /** get quiz content - questions, possible answers, links in quiz tree */
  quizContent: QuizContentPayload;
  /** get quiz result */
  quizResult: QuizResultPayload;
  /** recommendations */
  recommendations: RecommendationPayload;
  /** inquire price details for subscription schange plan */
  subscriptionChangePlanInquiry: SubscriptionChangePlanInquiryPayload;
  /** check change plan session */
  subscriptionChangePlanSession: SubscriptionChangePlanPayload;
  /** check resubscribe session */
  subscriptionResubscribeSession: SubscriptionResubscribePayload;
  /** fetches customer's payment related information (e.g. addresss) */
  userPaymentProfile: UserPaymentProfilePayload;
};


export type QueryBrandsArgs = {
  input?: Maybe<BrandsInput>;
};


export type QueryFragranceFamilyArgs = {
  input: FragranceFamilyInput;
};


export type QueryGiftSubscriptionArgs = {
  input?: Maybe<GiftSubscriptionInput>;
};


export type QueryMobileLandingGridArgs = {
  input: MobileLandingGridInput;
};


export type QueryMobileNotificationArgs = {
  input?: Maybe<MobileNotificationInput>;
};


export type QueryOrderArgs = {
  input: OrderInput;
};


export type QueryProductArgs = {
  input: ProductInput;
};


export type QueryProductsOfMonthArgs = {
  input: ProductsOfMonthInput;
};


export type QueryPurchaseInquiryArgs = {
  input: PurchaseInquiryInput;
};


export type QueryPurchaseSessionArgs = {
  input: PurchaseSessionInput;
};


export type QueryQuizContentArgs = {
  input: QuizContentInput;
};


export type QueryQuizResultArgs = {
  input: QuizResultInput;
};


export type QueryRecommendationsArgs = {
  input: RecommendationInput;
};


export type QuerySubscriptionChangePlanInquiryArgs = {
  input: SubscriptionChangePlanInquiryInput;
};


export type QuerySubscriptionChangePlanSessionArgs = {
  input: SubscriptionChangePlanSessionInput;
};


export type QuerySubscriptionResubscribeSessionArgs = {
  input: SubscriptionResubscribeSessionInput;
};


export type QueryUserPaymentProfileArgs = {
  input: UserPaymentProfileInput;
};

export type Queue = {
  __typename?: 'Queue';
  /** is any locked products for the next month */
  hasLockedProducts?: Maybe<Scalars['Boolean']>;
  /** list of not available products for the next month */
  notAvailableProductsFirstMonth?: Maybe<Array<Scalars['Long']>>;
  /** subscription queue items */
  queueItems?: Maybe<Array<QueueItem>>;
};

export type QueueInput = {
  /** Length of result */
  limit?: Maybe<Scalars['Int']>;
  /** Custom plan name (eg MONTHLY_2PCS). Get queue structure for different plans to show the user all shipment possibilities. Plan can be different, then user currently has in subscription. By default subscription plan if any. */
  forPlan?: Maybe<Scalars['String']>;
};

export type QueueItem = {
  __typename?: 'QueueItem';
  year: Scalars['Int'];
  month: Scalars['Int'];
  tracking?: Maybe<OrderTracking>;
  statuses: Array<QueueProductStatus>;
  statusName: Array<Scalars['String']>;
  products: Array<QueueProduct>;
  /** Month price considering coupons, free months etc */
  monthPrice?: Maybe<Scalars['Long']>;
  /** Month price same to monthPrice, but considering paid credits */
  monthPriceWithPaid?: Maybe<Scalars['Long']>;
};

export type QueueItemInput = {
  /** subscription queue item id */
  queueItemId: Scalars['Long'];
};

export type QueueLineItem = {
  __typename?: 'QueueLineItem';
  /** subscription queue item id */
  id: Scalars['Long'];
  /** description of product */
  product?: Maybe<Product>;
  /** total amount, cents */
  price: Scalars['Long'];
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

export type QuizAnswer = {
  __typename?: 'QuizAnswer';
  /** index of question */
  question: Scalars['Int'];
  /** name of question (used in frontends and also can be useful for some quiz types) */
  name?: Maybe<Scalars['String']>;
  /** Answers, could be anything */
  answers?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type QuizAnswerInput = {
  /** index of question */
  question: Scalars['Int'];
  /** name of question (used in frontends and also can be useful for some quiz types) */
  name?: Maybe<Scalars['String']>;
  /** Answers, could be anything */
  answers?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type QuizContentError = ServerError;

export type QuizContentInput = {
  type: QuizType;
};

export type QuizContentPayload = {
  __typename?: 'QuizContentPayload';
  /**
   * list of questions
   * first question of questions tree should the first item of this list
   */
  questions: Array<QuizQuestion>;
  /** error data */
  error?: Maybe<QuizContentError>;
};

export type QuizFrontendRepresentation = {
  __typename?: 'QuizFrontendRepresentation';
  banner: Scalars['String'];
  scentProfileTitle: Scalars['String'];
  scentProfileDescription: Scalars['String'];
  fragranceFamily: Array<FragranceFamilyDetail>;
  scentRecommendationText: Scalars['String'];
};

export type QuizQuestion = {
  __typename?: 'QuizQuestion';
  /** internal id, eg 'scents', 'gender' */
  id: Scalars['String'];
  /** code for result saving */
  name: Scalars['String'];
  /** type of view */
  viewType: QuizQuestionViewType;
  /** question text, eg 'What types of scents are you attracted to?' */
  text: Scalars['String'];
  /** question position in tree for UI, eg '1 of 3' */
  counter?: Maybe<Scalars['String']>;
  /** list of possible answers */
  answers: Array<QuizQuestionAnswer>;
};

export type QuizQuestionAnswer = {
  __typename?: 'QuizQuestionAnswer';
  /** internal id, eg 'playful' */
  id: Scalars['String'];
  /** code for result saving */
  answer: Scalars['String'];
  /** answer title text, eg 'Dark' */
  title: Scalars['String'];
  /** description text, eg 'Rich, mysterious scents with mood' */
  description?: Maybe<Scalars['String']>;
  /** body text, eg 'Sensual scents with distinct personality that command attention' */
  body?: Maybe<Scalars['String']>;
  /** action name, eg 'Choose dark' */
  actionName?: Maybe<Scalars['String']>;
  /** link to background image */
  backgroundUrl?: Maybe<Scalars['String']>;
  /**
   * id of the next question in quiz tree
   * if null then it is the last question
   */
  nextQuizQuestionId?: Maybe<Scalars['String']>;
};

export type QuizQuestionViewType = 
  /** single image question with 2 answers, use backgroundUrl image from any of answer */
  | 'SINGLE'
  /** split view of 2 answers with images */
  | 'SPLIT'
  /** more then 2 answers in vertical carousel */
  | 'CAROUSEL';

export type QuizResultInput = {
  type: QuizType;
};

export type QuizResultPayload = {
  __typename?: 'QuizResultPayload';
  /** quiz answers */
  result: Array<QuizAnswer>;
  /** frontend texts and resources */
  representation?: Maybe<QuizFrontendRepresentation>;
  /** error data */
  error?: Maybe<GetQuizResultError>;
};

export type QuizType = 
  | 'DISCOVERY';

/** Landing block: products to rate */
export type RateProductsMobileLandingBlock = MobileLandingBlock & {
  __typename?: 'RateProductsMobileLandingBlock';
  /** Catalog item id or block type if default structure */
  id: Scalars['String'];
  /** Block type. Please note, that values of this type will be extended in future. */
  type: MobileLandingBlockType;
  /** item title */
  title: Scalars['String'];
  /** list of products */
  rateProducts: Array<Product>;
};

/** counters of product rating */
export type Rating = {
  __typename?: 'Rating';
  /** average rating mark */
  avgRate?: Maybe<Scalars['Float']>;
};

export type RecommendationData = {
  /** recommendation type */
  type: RecommendationType;
  /** recommender algorithm name for client analytycs */
  recommenderName?: Maybe<Scalars['String']>;
};

export type RecommendationError = ServerError | SecurityError;

export type RecommendationInput = {
  profileRecommendationInput?: Maybe<ProfileRecommendationInput>;
};

export type RecommendationPayload = {
  __typename?: 'RecommendationPayload';
  /** recommendation data */
  data?: Maybe<RecommendationData>;
  /** error data */
  error?: Maybe<RecommendationError>;
};

/** recommendation types */
export type RecommendationType = 
  | 'PROFILE';

export type RefundDecision = 
  /** user chose to take the refund */
  | 'REFUND'
  /** user chose to keep the product */
  | 'RECEIVE';

export type RefundInquiryInput = {
  /** type of operation */
  transactionType: RefundTransactionType;
};

/** it used to understand possibilities of subscription refund */
export type RefundOptions = {
  __typename?: 'RefundOptions';
  /** status of refund */
  status?: Maybe<RefundStatus>;
};

export type RefundStatus = 
  /** refund is available */
  | 'AVAILABLE'
  /** refund is available with no charge */
  | 'AVAILABLE_PENDING_CHARGE'
  /** refund is available for new subscriber */
  | 'AVAILABLE_NEW_SUBSCRIBER'
  /** not refundable */
  | 'NOT_REFUNDABLE'
  /** refund for one-time upcharge is available */
  | 'AVAILABLE_UPCHARGE';

/** type of futher to refund operation */
export type RefundTransactionType = 
  | 'PAUSE'
  | 'SKIP'
  | 'UNSUBSCRIBE';

export type ResubscribeData = {
  __typename?: 'ResubscribeData';
  /** true if subscription was on scheduled cancellation and was reactivated */
  reactivated: Scalars['Boolean'];
  /** subscription order created on resubscribe */
  order?: Maybe<Order>;
  /** notification on premium product in batch */
  premiumProductInBatchNotification?: Maybe<PremiumProductInBatchNotification>;
  /** redirect link for one-click resubscribe */
  redirectUrl?: Maybe<Scalars['String']>;
};

export type ResubscribeError = OperationError & {
  __typename?: 'ResubscribeError';
  /** code of error */
  errorCode: ResubscribeErrorCode;
  /** customer error message */
  message: Scalars['String'];
};

export type ResubscribeErrorCode = 
  /** subscription is neither cancelled nor scheduled for cancellation */
  | 'NOT_CANCELLED';

export type ReviewVotes = {
  __typename?: 'ReviewVotes';
  /** total positive votes */
  positive?: Maybe<Scalars['Long']>;
  /** total negative votes */
  negative?: Maybe<Scalars['Long']>;
  /** is useful for user */
  isUseful?: Maybe<Scalars['Boolean']>;
};

export type ScentbirdSubscription = {
  __typename?: 'ScentbirdSubscription';
  /** information about current subscription hold */
  activeHold?: Maybe<SubscriptionHold>;
  /** available plans to change */
  changePlansInquiry?: Maybe<PlansOptions>;
  /** coupon applied to subscription */
  coupon?: Maybe<Coupon>;
  /** available subscription credits */
  credits: SubscriptionCredits;
  /** date of scheduled subscription cancellation if user cancelled subscription and selected to get remaining goods */
  formalCancellationDate?: Maybe<Scalars['LocalDate']>;
  /** has any subscription orders */
  hasOrders: Scalars['Boolean'];
  /** internal subscription id */
  id: Scalars['Long'];
  isActive: Scalars['Boolean'];
  /** next payment date */
  nextBillingDate?: Maybe<Scalars['LocalDate']>;
  /** estimated shipment date */
  nextShippingDate?: Maybe<DateRange>;
  /** subscription plan */
  plan?: Maybe<SubscriptionPlan>;
  /** options of subscription refund on skip, pause, unsubscribe */
  refundInquiry?: Maybe<RefundOptions>;
  /** different kind of indicators that shows whether subscription can be skipped, cancelled, etc. */
  stateOptions: SubscriptionStateOptions;
  /**
   * status of user subscription
   * always exists, initially NotSubscribed
   */
  status: ScentbirdSubscriptionStatus;
  /** date of subscription start */
  subscriptionDate: Scalars['LocalDateTime'];
  /** available reasons of unsubscribe */
  unsubscribeReasons: Array<UnsubscribeReasonType>;
};


export type ScentbirdSubscriptionChangePlansInquiryArgs = {
  input?: Maybe<ChangePlansInquiryInput>;
};


export type ScentbirdSubscriptionCouponArgs = {
  input?: Maybe<CouponFilterInput>;
};


export type ScentbirdSubscriptionRefundInquiryArgs = {
  input: RefundInquiryInput;
};

export type ScentbirdSubscriptionStatus = {
  __typename?: 'ScentbirdSubscriptionStatus';
  /** name of status, check ScentbirdSubscriptionStatus description */
  name: SubscriptionStatus;
  /** value of status, check ScentbirdSubscriptionStatus description */
  value: Scalars['String'];
  /** generated human-readable subscription status for UI */
  statusText: Scalars['String'];
  /** is user has active subscription for this status, check ScentbirdSubscriptionStatus description */
  subscribed: Scalars['Boolean'];
};

export type SecurityError = OperationError & {
  __typename?: 'SecurityError';
  /** code of error */
  errorCode: SecurityErrorCode;
  /** human readable error message */
  message: Scalars['String'];
};

export type SecurityErrorCode = 
  /** user is not authenticated to perform given operation */
  | 'NOT_AUTHENTICATED'
  /** user is not allowed to perform given operation */
  | 'ACCESS_DENIED';

export type ServerError = OperationError & {
  __typename?: 'ServerError';
  /** code of error */
  errorCode: ServerErrorCode;
  /** human readable error message */
  message: Scalars['String'];
};

export type ServerErrorCode = 
  | 'INTERNAL_SERVER_ERROR';

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

export type ShipmentStatus = 
  | 'NEW'
  | 'PRE_TRANSIT'
  | 'IN_TRANSIT'
  | 'DELIVERED'
  | 'FAILURE'
  | 'FORWARDED'
  | 'OUT_FOR_DELIVERY'
  | 'RETURNED_PROCESSED'
  | 'RETURNED'
  | 'UNKNOWN';

export type ShippingLineItem = {
  __typename?: 'ShippingLineItem';
  /** label text */
  label: Scalars['String'];
  /** label footnote */
  note?: Maybe<Scalars['String']>;
  /** cost of shipping, cents */
  price: Scalars['Long'];
};

export type SkipDuration = 
  /** 1 month */
  | 'MONTH_1'
  /** 2 months */
  | 'MONTH_2'
  /** 3 months */
  | 'MONTH_3'
  /** not limited */
  | 'FOREVER';

export type SkipError = OperationError & {
  __typename?: 'SkipError';
  /** code of error */
  errorCode: SkipErrorCode;
  /** customer error message */
  message: Scalars['String'];
};

export type SkipErrorCode = 
  /** subscription already sheduled to be cancelled */
  | 'SCHEDULED_CANCELLATION'
  /** subscription is not skippable */
  | 'NOT_SKIPPABLE';

/** it used to define possible option for skip */
export type SkipOption = {
  __typename?: 'SkipOption';
  /** frontend title */
  title: Scalars['String'];
  /** skip duration */
  duration: SkipDuration;
};

export type SkipOptionsInquiryData = {
  __typename?: 'SkipOptionsInquiryData';
  /** list of available skip options */
  options: Array<SkipOption>;
};

export type SubscribedError = OperationError & {
  __typename?: 'SubscribedError';
  /** code or error */
  errorCode: SubscribedErrorCode;
  /** human readable error message */
  message: Scalars['String'];
};

export type SubscribedErrorCode = 
  /** customer is already subscribed */
  | 'ALREADY_SUBSCRIBED';

export type Subscription = {
  __typename?: 'Subscription';
  /** check purchase session */
  purchaseSession: PurchaseCommitPayload;
  /** check resubscribe session */
  subscriptionResubscribeSession: SubscriptionResubscribePayload;
  /** check change plan session */
  subscriptionChangePlanSession: SubscriptionChangePlanPayload;
};


export type SubscriptionPurchaseSessionArgs = {
  input: PurchaseSessionInput;
};


export type SubscriptionSubscriptionResubscribeSessionArgs = {
  input: SubscriptionResubscribeSessionInput;
};


export type SubscriptionSubscriptionChangePlanSessionArgs = {
  input: SubscriptionChangePlanSessionInput;
};

export type SubscriptionChangePlanError = ChangePlanError | BusinessError | SecurityError | PaymentGatewayError | PurchaseError;

export type SubscriptionChangePlanInput = {
  /** change subscription plan to */
  targetPlan: Scalars['String'];
  /** id of payment method */
  paymentMethodId?: Maybe<Scalars['String']>;
  /** refund desision - valid only for downgrade */
  refundDecision?: Maybe<RefundDecision>;
  /** analytics metadata */
  metadata?: Maybe<AnalyticsMetadataInput>;
};

export type SubscriptionChangePlanInquiryData = {
  __typename?: 'SubscriptionChangePlanInquiryData';
  /** current plan of user */
  currentPlan: SubscriptionPlan;
  /** inquired plan */
  inquirePlan: SubscriptionPlan;
  /** date of upgrade activation */
  upgradeActivation: Scalars['LocalDate'];
  /** Next billing date */
  nextBillingDate: Scalars['LocalDate'];
  /** current subscription balance, cents */
  currentBalance: Scalars['Long'];
  /** purchase order items */
  items: InquiryItems;
  /** total price of change plan */
  total: Scalars['Long'];
};

export type SubscriptionChangePlanInquiryError = ChangePlanError | BusinessError | SecurityError | PurchaseError;

export type SubscriptionChangePlanInquiryInput = {
  /** change subscription plan to */
  targetPlan: Scalars['String'];
};

export type SubscriptionChangePlanInquiryPayload = {
  __typename?: 'SubscriptionChangePlanInquiryPayload';
  /** inquiry data */
  data?: Maybe<SubscriptionChangePlanInquiryData>;
  /** error data */
  error?: Maybe<SubscriptionChangePlanInquiryError>;
};

export type SubscriptionChangePlanPayload = {
  __typename?: 'SubscriptionChangePlanPayload';
  /** session of upgrade */
  session?: Maybe<OperationSession>;
  /** data of upgrade */
  data?: Maybe<ChangePlanData>;
  /** error data */
  error?: Maybe<SubscriptionChangePlanError>;
};

export type SubscriptionChangePlanSessionInput = {
  /** id of upgrade session */
  sessionId: Scalars['Long'];
};

export type SubscriptionCredits = {
  __typename?: 'SubscriptionCredits';
  /** total amount of subscription credits */
  total: Scalars['Int'];
  /** total amount of paid credits */
  paid: Scalars['Int'];
  /** total amount of gift credits */
  gift: Scalars['Int'];
  /** total amount of credits created from marketing coupon */
  marketingCoupon: Scalars['Int'];
  /** total amount of free credits */
  free: Scalars['Int'];
  /** total amount of free referral credits */
  freeForReferral: Scalars['Int'];
  /** total amount of free referee credits */
  freeForReferee: Scalars['Int'];
  /** total amount of customer support credits */
  customerSupport: Scalars['Int'];
};

export type SubscriptionHold = {
  __typename?: 'SubscriptionHold';
  id: Scalars['Long'];
  /** hold period */
  range?: Maybe<DateRange>;
  /** total skipped months */
  monthsDuration?: Maybe<Scalars['Long']>;
};

export type SubscriptionItemInput = {
  /** subscription plan id */
  plan: InitialSubscriptionPlan;
  /** option for case susbscription */
  caseSubscription?: Maybe<Scalars['Boolean']>;
};

export type SubscriptionLineItem = {
  __typename?: 'SubscriptionLineItem';
  /** subscription plan */
  plan?: Maybe<SubscriptionPlan>;
  /** label text */
  label: Scalars['String'];
  /** label footnote */
  note?: Maybe<Scalars['String']>;
  /** total amount, cents */
  price: Scalars['Long'];
  /** applied coupon */
  coupon?: Maybe<Coupon>;
};

export type SubscriptionPlan = {
  __typename?: 'SubscriptionPlan';
  /** plan id */
  id: Scalars['Long'];
  /** plan name */
  name: Scalars['String'];
  /** pay every x months */
  billingPeriod: Scalars['Int'];
  /** get every x months */
  shippingPeriod: Scalars['Int'];
  /** plan description */
  description?: Maybe<Scalars['String']>;
  /** products of month */
  productCount: Scalars['Int'];
  /** price of 1 product */
  productPrice: Scalars['Long'];
  /**
   * amount of how many perfumes/product user can receive per period, for ex. when:
   *  perfumesPerPeriod = 3 and billingPeriod = shippingPeriod = 1
   *  it means: 3 perfumes / 1 month
   */
  productsPerPeriod: Scalars['Int'];
  /** plan price as cents */
  price: Scalars['Long'];
  /** Money, saved by user, comparing to MONTHLY plan as cents */
  save: Scalars['Long'];
  /** info related to default subscription discount */
  discount?: Maybe<SubscriptionPlanDiscount>;
  /** plan category (basic or light) */
  category?: Maybe<SubscriptionPlanCategory>;
};

export type SubscriptionPlanCategory = 
  /** basic plan type (can add to queue, buy queue, etc.) */
  | 'BASIC'
  /** reduced plan type (some features are disabled - can't add items to queue, "buy your queue") */
  | 'LIGHT';

export type SubscriptionPlanDiscount = {
  __typename?: 'SubscriptionPlanDiscount';
  /**
   * shows default discounted price as we offer on landing page as cents
   * example: 1121 for "-25% offer first month"
   */
  defaultDiscountPrice?: Maybe<Scalars['Long']>;
  /**
   * shows default discounted price as we offer on landing page
   * example: "-25% offer first month"
   */
  defaultDiscountText?: Maybe<Scalars['String']>;
};

/** wrapper for plan and options on change plan */
export type SubscriptionPlanOption = {
  __typename?: 'SubscriptionPlanOption';
  /** Сorresponding subscription plan */
  plan: SubscriptionPlan;
  /** Next billing date */
  nextBillingDate?: Maybe<Scalars['LocalDate']>;
  /** Next shipment period */
  nextShippingDate?: Maybe<DateRange>;
  /**
   * Shows that this option is current subscription plan for user.
   * Current plan is included in list when `ChangePlansInquiryInput.includeCurrent` option is passed.
   * Flag is used by UI clients to show plan options including current subscription plan.
   */
  selected: Scalars['Boolean'];
};

export type SubscriptionPurchaseItem = PurchaseItem & {
  __typename?: 'SubscriptionPurchaseItem';
  /** id of subscription */
  id: Scalars['Long'];
  /** plan */
  plan: SubscriptionPlan;
  /** total price */
  total: Scalars['Int'];
  /** date of the next charge */
  nextBillingDate: Scalars['LocalDate'];
  /** case subscription active */
  caseSubscription: Scalars['Boolean'];
};

export type SubscriptionResubscribeError = SecurityError | PaymentGatewayError | PaymentMethodError | CouponError | BusinessError | ResubscribeError | ChangePlanError | PurchaseError;

export type SubscriptionResubscribeInput = {
  /** Coupon code or offer code */
  couponCode?: Maybe<Scalars['String']>;
  /** new plan of subscription if required */
  plan?: Maybe<InitialSubscriptionPlan>;
  /**
   * payment method id
   * by default subscription payment method is used
   */
  paymentMethodId?: Maybe<Scalars['String']>;
  /** analytics metadata */
  metadata?: Maybe<AnalyticsMetadataInput>;
  /** type of offer */
  offer?: Maybe<EcommercePriceRulesAndOffers>;
};

export type SubscriptionResubscribePayload = {
  __typename?: 'SubscriptionResubscribePayload';
  /** session of resubscribe */
  session?: Maybe<OperationSession>;
  /** data of unsubscribe */
  data?: Maybe<ResubscribeData>;
  /** data of change plan - deprecated */
  changePlanData?: Maybe<ChangePlanData>;
  /** error data */
  error?: Maybe<SubscriptionResubscribeError>;
};

export type SubscriptionResubscribeSessionInput = {
  /** id of resubscribe session */
  sessionId: Scalars['Long'];
};

export type SubscriptionSkipData = {
  __typename?: 'SubscriptionSkipData';
  hold?: Maybe<SubscriptionHold>;
};

export type SubscriptionSkipError = SecurityError | ValidationError | PaymentGatewayError | ServerError | SkipError | BusinessError;

export type SubscriptionSkipInput = {
  /** type of skip or pause */
  duration: SkipDuration;
  /** refund desision */
  refundDecision?: Maybe<RefundDecision>;
  /** notify user before charge after skipped months (SB-1880) */
  remind?: Maybe<Scalars['Boolean']>;
};

export type SubscriptionSkipPayload = {
  __typename?: 'SubscriptionSkipPayload';
  /** data of skip */
  data?: Maybe<SubscriptionSkipData>;
  /** error data */
  error?: Maybe<SubscriptionSkipError>;
};

export type SubscriptionStateOptions = {
  __typename?: 'SubscriptionStateOptions';
  /** can change subscription frequency according plan, status, address, hold, day of month, etc */
  canChangeFrequency: Scalars['Boolean'];
  /** can make skip according status, next billing date, not gifted, etc */
  canSkip: Scalars['Boolean'];
  /** can upgrade according status, plan, next billing date, not cancelled, etc */
  canUpgrade: Scalars['Boolean'];
  /** can downgrade according status, plan, next billing date, not cancelled, etc */
  canDowngrade: Scalars['Boolean'];
  /** can be cancelled according plan, status, not gifted, scheduled cancellation, day of month, etc */
  canCancel: Scalars['Boolean'];
  /** can be resubscribed */
  canResubscribe: Scalars['Boolean'];
  /** subscription was cancelled and resubscribed */
  isResubscribed: Scalars['Boolean'];
  /** indicator that shows whether "buy your queue" feature is available */
  canBuyQueue: Scalars['Boolean'];
};


export type SubscriptionStateOptionsCanDowngradeArgs = {
  input?: Maybe<DowngradeInput>;
};

export type SubscriptionStatus = 
  /** never subscribed before, new user */
  | 'NotSubscribed'
  /** subscribed user */
  | 'Active'
  /** skipped 1,2,3 months */
  | 'OnHold'
  /** last payment is not successfull on payment day of the month, when Recurly is not able to charge the user, the status is still active, we can send if the user has credits */
  | 'Unpaid'
  /** closed subscription, automatic cancelled */
  | 'Cancelled'
  /** no time restriction, the user should unpause by himself */
  | 'Paused'
  /** user with undeliverable address status */
  | 'Undeliverable'
  /** user paid for lep on subbscription but it became put of stock. He need to repick product SCNT-6507 */
  | 'PendingProductRepick'
  /** time gap between payment authorization and charge (SCNT-3660) */
  | 'Pending'
  /** subscription is waiting for upgrade */
  | 'PendingUpgrade'
  /** subscription is waiting for change plan */
  | 'PendingChangePlan'
  /** not subscribed, but purchase session is in progress */
  | 'PaymentInProgress'
  /** cases when we cancel order and need to skip month */
  | 'OnTechnicalHold';

export type SubscriptionUnskipData = {
  __typename?: 'SubscriptionUnskipData';
  /** notification on premium product in batch */
  premiumProductInBatchNotification?: Maybe<PremiumProductInBatchNotification>;
  /** redirect link for one-click unpause */
  redirectUrl?: Maybe<Scalars['String']>;
};

export type SubscriptionUnskipError = SecurityError | ServerError | BusinessError | UnskipError;

export type SubscriptionUnskipInput = {
  /** Coupon code or offer code */
  couponCode?: Maybe<Scalars['String']>;
  /** analytics metadata */
  metadata?: Maybe<AnalyticsMetadataInput>;
};

export type SubscriptionUnskipPayload = {
  __typename?: 'SubscriptionUnskipPayload';
  /** data of unsubscribe */
  data?: Maybe<SubscriptionUnskipData>;
  /** error data */
  error?: Maybe<SubscriptionUnskipError>;
};

export type SubscriptionUnsubscribeError = SecurityError | BusinessError | PaymentGatewayError | UnsubscribeError;

export type SubscriptionUnsubscribeInput = {
  /** refund desision */
  refundDecision?: Maybe<RefundDecision>;
  /** reason of unsubscribe */
  reason?: Maybe<UnsubscribeReasonType>;
  /** user comment */
  comment?: Maybe<Scalars['String']>;
};

export type SubscriptionUnsubscribePayload = {
  __typename?: 'SubscriptionUnsubscribePayload';
  /** data of unsubscribe */
  data?: Maybe<UnsubscribeData>;
  /** error data */
  error?: Maybe<SubscriptionUnsubscribeError>;
};

export type Tag = {
  __typename?: 'Tag';
  /** tag identifier */
  id: Scalars['Long'];
  /** name of tag */
  name: Scalars['String'];
  /** tag image (icon url) */
  image: Scalars['String'];
  /** total votes */
  voteCount?: Maybe<Scalars['Int']>;
};


export type TagImageArgs = {
  format?: Maybe<ProductLabelFormat>;
};

export type TagType = {
  __typename?: 'TagType';
  id: Scalars['Long'];
  name: Scalars['String'];
  type: Scalars['String'];
  voteCount: Scalars['Long'];
  topTag: Tag;
  tags: Array<Tag>;
};

/** Landing block: quiz call to action */
export type TakeQuizMobileLandingBlock = MobileLandingBlock & {
  __typename?: 'TakeQuizMobileLandingBlock';
  /** Catalog item id or block type if default structure */
  id: Scalars['String'];
  /** Block type. Please note, that values of this type will be extended in future. */
  type: MobileLandingBlockType;
  /** Call to action UI content */
  presentation: TakeQuizPresentation;
  /** DISCOVERY quiz result if answer was submitted */
  quizResult?: Maybe<QuizFrontendRepresentation>;
};

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

export type TaxLineItem = {
  __typename?: 'TaxLineItem';
  /** label text */
  label: Scalars['String'];
  /** value, cents */
  amount: Scalars['Long'];
};

export type TextProductDescriptionSection = ProductDescriptionSection & {
  __typename?: 'TextProductDescriptionSection';
  id: Scalars['String'];
  title: Scalars['String'];
  text: Scalars['String'];
};

/** This token is obtained from Recurly JS client / Amazon lib */
export type Token = {
  /** type of payment used in token */
  paymentMethod: PaymentMethodType;
  /**
   * id of token
   * this token is taken from RecurlyJS for all payment types, except AMAZON_PAY which need to use Billing Agreement ID (BAID) from Amazon lib
   */
  tokenId: Scalars['String'];
  /**
   * id of 3D secure check token
   * only for CREDIT_CARD payment type
   */
  threeDSecureActionTokenId?: Maybe<Scalars['String']>;
};

export type TradingItem = {
  __typename?: 'TradingItem';
  id: Scalars['Long'];
  type: TradingItemType;
  prices: TradingItemPrices;
  inStock: Scalars['Boolean'];
  volume?: Maybe<Volume>;
  image: Scalars['String'];
  productGroup: ProductGroup;
  color?: Maybe<Color>;
};

export type TradingItemPrices = {
  __typename?: 'TradingItemPrices';
  standardPrice: Money;
  discountPrice: Money;
};

/** more info could be found at com.scentbird.core.model.ecommerce.TradingItemType */
export type TradingItemType = 
  | 'ALaCarte'
  | 'ALaCarteAmpoules'
  | 'ALaCarteBlemishAcneSolutions'
  | 'ALaCarteBodyMoisturizers'
  | 'ALaCarteBodyScrubs'
  | 'ALaCarteBodyWash'
  | 'ALaCarteBrushes'
  | 'ALaCarteCandle'
  | 'ALaCarteCheek'
  | 'ALaCarteCheekBlush'
  | 'ALaCarteCheekBronzerAndContour'
  | 'ALaCarteCheekHighlight'
  | 'ALaCarteCream'
  | 'ALaCarteDeodorants'
  | 'ALaCarteExfoliators'
  | 'ALaCarteEye'
  | 'ALaCarteEyeCreamsTreatments'
  | 'ALaCarteEyeLiner'
  | 'ALaCarteEyeMascara'
  | 'ALaCarteEyeMasks'
  | 'ALaCarteEyePencil'
  | 'ALaCarteEyePrimer'
  | 'ALaCarteEyeTreatment'
  | 'ALaCarteEyebrow'
  | 'ALaCarteEyeshadow'
  | 'ALaCarteFace'
  | 'ALaCarteFaceConcealer'
  | 'ALaCarteFaceFoundation'
  | 'ALaCarteFaceMask'
  | 'ALaCarteFaceMoisturizer'
  | 'ALaCarteFaceOil'
  | 'ALaCarteFacePrimer'
  | 'ALaCarteFaceWash'
  | 'ALaCarteFaceWipes'
  | 'ALaCarteHand'
  | 'ALaCarteLipBalm'
  | 'ALaCarteLipColor'
  | 'ALaCarteLipColorPencil'
  | 'ALaCarteLipCrayon'
  | 'ALaCarteLipLiner'
  | 'ALaCarteLipPaint'
  | 'ALaCarteLipgloss'
  | 'ALaCarteLipstick'
  | 'ALaCarteLiquidLiner'
  | 'ALaCarteMakeupRemover'
  | 'ALaCarteMists'
  | 'ALaCarteMoisturizer'
  | 'ALaCartePalette'
  | 'ALaCartePeels'
  | 'ALaCarteScrub'
  | 'ALaCarteSerum'
  | 'ALaCarteShaving'
  | 'ALaCarteSheetMask'
  | 'ALaCarteSunCare'
  | 'ALaCarteTattooLiner'
  | 'ALaCarteToner'
  | 'ALaCarteWellness'
  | 'AmpoulesVial'
  | 'Bag'
  | 'BlemishAcneSolutionsVial'
  | 'BodyMoisturizersVial'
  | 'BodyScrubsVial'
  | 'BodyWashVial'
  | 'BrushesVial'
  | 'CandleSet'
  | 'CandleVial'
  | 'CheekBlushVial'
  | 'CheekBronzerAndContourVial'
  | 'CheekHighlightVial'
  | 'CheekVial'
  | 'CreamVial'
  | 'DeodorantsVial'
  | 'ExfoliatorsVial'
  | 'EyeCreamsTreatmentsVial'
  | 'EyeLinerVial'
  | 'EyeMascaraVial'
  | 'EyeMasksVial'
  | 'EyePencilVial'
  | 'EyePrimerVial'
  | 'EyeTreatmentVial'
  | 'EyeVial'
  | 'EyebrowVial'
  | 'EyeshadowVial'
  | 'FaceConcealerVial'
  | 'FaceFoundationVial'
  | 'FaceMaskVial'
  | 'FaceMoisturizerVial'
  | 'FaceOilVial'
  | 'FacePrimerVial'
  | 'FaceVial'
  | 'FaceWashVial'
  | 'FaceWipesVial'
  | 'FlashSale'
  | 'FragranceStorageBox'
  | 'GiftCard'
  | 'GiftSet'
  | 'HandVial'
  | 'Inventory'
  | 'LipBalmVial'
  | 'LipColorPencilVial'
  | 'LipColorVial'
  | 'LipCrayonVial'
  | 'LipLinerVial'
  | 'LipPaintVial'
  | 'LipglossVial'
  | 'LipstickVial'
  | 'LiquidLinerVial'
  | 'MakeupRemoverVial'
  | 'MistsVial'
  | 'MoisturizerVial'
  | 'PaletteVial'
  | 'PeelsVial'
  | 'PerfumeBottle'
  | 'PerfumeCase'
  | 'PerfumeVial'
  | 'ProductSample'
  | 'ProductSet'
  | 'Promo'
  | 'ScrubVial'
  | 'SerumVial'
  | 'ShavingVial'
  | 'SheetMaskVial'
  | 'SunCareVial'
  | 'TattooLinerVial'
  | 'TonerVial'
  | 'WellnessVial';

export type TradingItems = {
  __typename?: 'TradingItems';
  /**
   * primary ecommerce trading item, currently not implemented
   * Uses for non trivial fetches from DB, when you should return values from ProductInfo hierarchy of classes, and provide price of product and id for cart
   * primaryItem: TradingItem!
   * all trading items
   */
  items: Array<TradingItem>;
};

export type UnskipError = OperationError & {
  __typename?: 'UnskipError';
  /** code of error */
  errorCode: UnskipErrorCode;
  /** customer error message */
  message: Scalars['String'];
};

export type UnskipErrorCode = 
  /** subscription cannot be unskipped */
  | 'NOT_UNSKIPPABLE';

export type UnsubscribeData = {
  __typename?: 'UnsubscribeData';
  /** is unsubscribed now or scheduled */
  unsubscribed: Scalars['Boolean'];
};

export type UnsubscribeError = OperationError & {
  __typename?: 'UnsubscribeError';
  /** code of error */
  errorCode: UnsubscribeErrorCode;
  /** customer error message */
  message: Scalars['String'];
};

export type UnsubscribeErrorCode = 
  /** subscription already scheduled for cancellation */
  | 'ALREADY_SCHEDULED_FOR_CANCELLATION';

export type UnsubscribeFlowStartedError = ServerError;

export type UnsubscribeFlowStartedPayload = {
  __typename?: 'UnsubscribeFlowStartedPayload';
  /** error data */
  error?: Maybe<UnsubscribeFlowStartedError>;
};

export type UnsubscribeReasonType = 
  | 'BAD_PRODUCT'
  | 'MANY_PERFUMES'
  | 'TOO_EXPENSIVE'
  | 'WEBSITE_ISSUES'
  | 'FINANCIAL_COMMITMENT'
  | 'ONE_PERFUME'
  | 'SHIPPING_ISSUES'
  | 'DAMAGED_PRODUCT'
  | 'CUSTOMER_SERVICE'
  | 'BILLED_INCORRECTLY'
  | 'FINANCIAL_VALUE'
  | 'DISCONTINUED'
  | 'FRAGRANCE_OPTIONS'
  | 'ANOTHER_SUBSCRIPTION'
  | 'BAD_PERFUME'
  | 'FULL_SIZE_BOTTLE'
  | 'OUT_OF_BUDGET';

export type UpchargeLineItem = {
  __typename?: 'UpchargeLineItem';
  /** label text */
  label: Scalars['String'];
  /** label footnote */
  note?: Maybe<Scalars['String']>;
  /** total amount, cents */
  price: Scalars['Long'];
};

export type UpdateInQueueError = OperationError & {
  __typename?: 'UpdateInQueueError';
  errorCode: UpdateInQueueErrorCode;
  /** human readable error message */
  message: Scalars['String'];
};

export type UpdateInQueueErrorCode = 
  /** product not found or unmatched */
  | 'UNMATCHED_PERFUME_ID'
  /** customer cant buy same perfume less that 6 month */
  | 'RESTRICT_SAME_PERFUME'
  | 'NEGATIVE_INDEX'
  /** customer can't add to queue when he is on light plan subscription */
  | 'LITE_PLAN'
  /** common error */
  | 'SOMETHING_WENT_WRONG';

export type UpdateInQueueInput = {
  /** index of queue cell, which should be updated */
  index: Scalars['Int'];
  /** queue product id */
  productId: Scalars['Long'];
  /** analytics metadata */
  metadata?: Maybe<AnalyticsMetadataInput>;
};

export type UpdateInQueuePayload = {
  __typename?: 'UpdateInQueuePayload';
  /** Get queue with custom plan name (eg MONTHLY_2PCS). By default subscription plan if any. */
  queue?: Maybe<Queue>;
  error?: Maybe<UpdateInQueuePayloadError>;
};


export type UpdateInQueuePayloadQueueArgs = {
  input?: Maybe<QueueInput>;
};

export type UpdateInQueuePayloadError = SecurityError | ServerError | UpdateInQueueError | ValidationError;

export type UserData = {
  __typename?: 'UserData';
  /** user cart for goods */
  cart: Cart;
  /** subscription details */
  subscription?: Maybe<ScentbirdSubscription>;
  /** personal information (e.g. first name, email, etc.) */
  personalInfo?: Maybe<PersonalInfo>;
  /** queue info */
  queue?: Maybe<Queue>;
  /** available plans for subscription */
  plansInquiry: Array<SubscriptionPlan>;
  /** available gift subscription plans */
  giftPlansInquiry: GiftPlansInquiryData;
  /** available skip options */
  skipOptionsInquiry: SkipOptionsInquiryData;
  /** list of available payment methods - currently only one payment method is supported */
  paymentMethods?: Maybe<Array<PaymentMethod>>;
  /** purchased orders */
  orders: OrdersData;
  /** current server datetime for this customer (can be different when using time machine) */
  dateTime: Scalars['LocalDateTime'];
  /** get history of coupon redemptions */
  couponRedemptions: CouponRedemptionData;
  /** info related to purchase sessions */
  purchaseSessionInfo?: Maybe<PurchaseSessionInfo>;
  /** shipping address book */
  shippingAddresses: Array<Address>;
  /** indicates whether user can open tossin page and get products with tossin prices */
  canApplyTossInOffer: Scalars['Boolean'];
  /** case subscription details */
  caseSubscription: CaseSubscription;
};


export type UserDataQueueArgs = {
  input?: Maybe<QueueInput>;
};


export type UserDataPlansInquiryArgs = {
  input?: Maybe<PlansInquiryInput>;
};


export type UserDataPaymentMethodsArgs = {
  input?: Maybe<PaymentMethodInput>;
};


export type UserDataOrdersArgs = {
  input: UserOrdersInput;
};


export type UserDataCouponRedemptionsArgs = {
  input?: Maybe<CouponRedemptionsInput>;
};

export type UserEmailUpdateError = OperationError & {
  __typename?: 'UserEmailUpdateError';
  /** code of error */
  errorCode: UserEmailUpdateErrorCode;
  /** customer error message */
  message: Scalars['String'];
};

export type UserEmailUpdateErrorCode = 
  /** user email address is not valid */
  | 'EMAIL_NOT_VALID'
  /** user email is already used */
  | 'EMAIL_IN_USE';

export type UserGender = 
  | 'MALE'
  | 'FEMALE';

export type UserOrdersInput = {
  /** filter by order status, default all */
  status?: Maybe<Array<OrderStatus>>;
  /** filter by order type, default all */
  orderType?: Maybe<Array<OrderType>>;
  /** pagination offset, default 0 */
  offset?: Maybe<Scalars['Int']>;
  /** pagination limit, default 40 */
  limit?: Maybe<Scalars['Int']>;
};

export type UserPayload = {
  __typename?: 'UserPayload';
  /** data of inquiry */
  data?: Maybe<UserData>;
  /** error data */
  error?: Maybe<CurrentUserError>;
};

export type UserPaymentProfileData = {
  __typename?: 'UserPaymentProfileData';
  /** user shipping address */
  shipping?: Maybe<Address>;
};

export type UserPaymentProfileError = SecurityError | ServerError | PaymentGatewayError;

export type UserPaymentProfileInput = {
  /** User's payment token */
  token: Token;
  /** Access token */
  accessToken?: Maybe<Scalars['String']>;
};

export type UserPaymentProfilePayload = {
  __typename?: 'UserPaymentProfilePayload';
  /** user profile data */
  data?: Maybe<UserPaymentProfileData>;
  /** error data */
  error?: Maybe<UserPaymentProfileError>;
};

export type UserPersonalInfoUpdateInput = {
  /** user firstname */
  firstName?: Maybe<Scalars['String']>;
  /** user lastname */
  lastName?: Maybe<Scalars['String']>;
  /** user email */
  email?: Maybe<Scalars['String']>;
  /** birthday date in ISO format (yyyy-MM-dd) */
  birthday?: Maybe<Scalars['String']>;
  /** user gender */
  gender?: Maybe<UserGender>;
  /** string with base64 encoded image */
  avatar?: Maybe<Scalars['String']>;
};

export type UserPersonalInfoUpdatePayload = {
  __typename?: 'UserPersonalInfoUpdatePayload';
  /** personal info */
  data?: Maybe<PersonalInfo>;
  /** operation error */
  error?: Maybe<PersonalInfoUpdatePayloadError>;
};

export type UserShareEmailError = ServerError;

export type UserShareEmailInput = {
  productId?: Maybe<Scalars['Long']>;
};

export type UserShareEmailPayload = {
  __typename?: 'UserShareEmailPayload';
  /** error data */
  error?: Maybe<UserShareEmailError>;
};

export type ValidationError = OperationError & {
  __typename?: 'ValidationError';
  /** code of error */
  errorCode: ValidationErrorCode;
  /** list of error fields */
  fields: Array<ValidationField>;
  /** human readable error message */
  message: Scalars['String'];
};

export type ValidationErrorCode = 
  /**
   * TODO maybe useless code
   * input is not valid
   */
  | 'NOT_VALID'
  /** when requested entity not located by provided id or key value */
  | 'ENTITY_NOT_FOUND';

export type ValidationField = {
  __typename?: 'ValidationField';
  /** source of validation error */
  field?: Maybe<Scalars['String']>;
  /** human readable error message */
  message: Scalars['String'];
};

export type Volume = {
  __typename?: 'Volume';
  volume: Scalars['Float'];
  unit: VolumeUnit;
};

export type VolumeUnit = 
  /** fluid once */
  | 'oz'
  /** millilitres */
  | 'ml'
  /** pieces */
  | 'pcs';

export type VoteStatus = 
  | 'NEGATIVE'
  | 'NEUTRAL'
  | 'POSITIVE';


export type Google = {
  __typename?: 'Google';
  isInitialized: Scalars['Boolean'];
  isCookiesError: Scalars['Boolean'];
  isFetching: Scalars['Boolean'];
  isFetched: Scalars['Boolean'];
};

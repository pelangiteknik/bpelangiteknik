
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.19.1
 * Query Engine version: 69d742ee20b815d88e17e54db4a2a7a3b30324e3
 */
Prisma.prismaVersion = {
  client: "5.19.1",
  engine: "69d742ee20b815d88e17e54db4a2a7a3b30324e3"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.CategoryProductScalarFieldEnum = {
  id: 'id',
  start: 'start',
  end: 'end',
  category: 'category',
  image: 'image',
  urlYoutube: 'urlYoutube',
  title: 'title',
  desc: 'desc',
  tags: 'tags'
};

exports.Prisma.ListProductScalarFieldEnum = {
  id: 'id',
  start: 'start',
  end: 'end',
  slugProduct: 'slugProduct',
  saveDraf: 'saveDraf',
  descProduct: 'descProduct',
  productName: 'productName',
  stockProduct: 'stockProduct',
  descMetaProduct: 'descMetaProduct',
  viewProduct: 'viewProduct',
  productKategori: 'productKategori',
  subKategoriProduct: 'subKategoriProduct',
  productType: 'productType',
  tagProduct: 'tagProduct',
  productPrice: 'productPrice',
  productDiscount: 'productDiscount',
  productPriceFinal: 'productPriceFinal',
  urlYoutube: 'urlYoutube'
};

exports.Prisma.SpecProductScalarFieldEnum = {
  id: 'id',
  start: 'start',
  end: 'end',
  phase_spec: 'phase_spec',
  frequency_spec: 'frequency_spec',
  gensetPower_spec: 'gensetPower_spec',
  ratedPower_spec: 'ratedPower_spec',
  maxPower_spec: 'maxPower_spec',
  ratedACVoltage_spec: 'ratedACVoltage_spec',
  starting_spec: 'starting_spec',
  fuelConsumption_spec: 'fuelConsumption_spec',
  weight_spec: 'weight_spec',
  dimension_spec: 'dimension_spec',
  IdProduct: 'IdProduct'
};

exports.Prisma.ImageProductScalarFieldEnum = {
  id: 'id',
  start: 'start',
  end: 'end',
  asset_id: 'asset_id',
  public_id: 'public_id',
  version: 'version',
  version_id: 'version_id',
  signature: 'signature',
  width: 'width',
  height: 'height',
  format: 'format',
  resource_type: 'resource_type',
  created_at: 'created_at',
  tags: 'tags',
  bytes: 'bytes',
  type: 'type',
  etag: 'etag',
  placeholder: 'placeholder',
  url: 'url',
  secure_url: 'secure_url',
  asset_folder: 'asset_folder',
  display_name: 'display_name',
  original_filename: 'original_filename',
  api_key: 'api_key',
  IdProduct: 'IdProduct'
};

exports.Prisma.PostArtikelScalarFieldEnum = {
  id: 'id',
  title: 'title',
  slug: 'slug',
  content: 'content',
  description: 'description',
  tags: 'tags',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  saveDraf: 'saveDraf',
  categoryArtikelId: 'categoryArtikelId'
};

exports.Prisma.ImageProductArtikelScalarFieldEnum = {
  id: 'id',
  start: 'start',
  end: 'end',
  asset_id: 'asset_id',
  public_id: 'public_id',
  version: 'version',
  version_id: 'version_id',
  signature: 'signature',
  width: 'width',
  height: 'height',
  format: 'format',
  resource_type: 'resource_type',
  created_at: 'created_at',
  tags: 'tags',
  bytes: 'bytes',
  type: 'type',
  etag: 'etag',
  placeholder: 'placeholder',
  url: 'url',
  secure_url: 'secure_url',
  asset_folder: 'asset_folder',
  display_name: 'display_name',
  original_filename: 'original_filename',
  api_key: 'api_key',
  IdProductArtikel: 'IdProductArtikel'
};

exports.Prisma.CategoryArtikelScalarFieldEnum = {
  id: 'id',
  start: 'start',
  end: 'end',
  category: 'category',
  image: 'image',
  urlYoutube: 'urlYoutube',
  title: 'title',
  desc: 'desc',
  tags: 'tags'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullableJsonNullValueInput = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};

exports.Prisma.JsonNullValueFilter = {
  DbNull: Prisma.DbNull,
  JsonNull: Prisma.JsonNull,
  AnyNull: Prisma.AnyNull
};


exports.Prisma.ModelName = {
  categoryProduct: 'categoryProduct',
  listProduct: 'listProduct',
  specProduct: 'specProduct',
  imageProduct: 'imageProduct',
  postArtikel: 'postArtikel',
  imageProductArtikel: 'imageProductArtikel',
  categoryArtikel: 'categoryArtikel'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)


/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model categoryProduct
 * 
 */
export type categoryProduct = $Result.DefaultSelection<Prisma.$categoryProductPayload>
/**
 * Model listProduct
 * 
 */
export type listProduct = $Result.DefaultSelection<Prisma.$listProductPayload>
/**
 * Model specProduct
 * 
 */
export type specProduct = $Result.DefaultSelection<Prisma.$specProductPayload>
/**
 * Model imageProductUtama
 * 
 */
export type imageProductUtama = $Result.DefaultSelection<Prisma.$imageProductUtamaPayload>
/**
 * Model imageProduct
 * 
 */
export type imageProduct = $Result.DefaultSelection<Prisma.$imageProductPayload>
/**
 * Model postArtikel
 * 
 */
export type postArtikel = $Result.DefaultSelection<Prisma.$postArtikelPayload>
/**
 * Model imageProductArtikel
 * 
 */
export type imageProductArtikel = $Result.DefaultSelection<Prisma.$imageProductArtikelPayload>
/**
 * Model categoryArtikel
 * 
 */
export type categoryArtikel = $Result.DefaultSelection<Prisma.$categoryArtikelPayload>
/**
 * Model cart
 * 
 */
export type cart = $Result.DefaultSelection<Prisma.$cartPayload>
/**
 * Model cartItem
 * 
 */
export type cartItem = $Result.DefaultSelection<Prisma.$cartItemPayload>
/**
 * Model formPembelian
 * 
 */
export type formPembelian = $Result.DefaultSelection<Prisma.$formPembelianPayload>
/**
 * Model ongkosKirim
 * 
 */
export type ongkosKirim = $Result.DefaultSelection<Prisma.$ongkosKirimPayload>
/**
 * Model dataPesananItem
 * 
 */
export type dataPesananItem = $Result.DefaultSelection<Prisma.$dataPesananItemPayload>
/**
 * Model dataPesanan
 * 
 */
export type dataPesanan = $Result.DefaultSelection<Prisma.$dataPesananPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more CategoryProducts
 * const categoryProducts = await prisma.categoryProduct.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more CategoryProducts
   * const categoryProducts = await prisma.categoryProduct.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.categoryProduct`: Exposes CRUD operations for the **categoryProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CategoryProducts
    * const categoryProducts = await prisma.categoryProduct.findMany()
    * ```
    */
  get categoryProduct(): Prisma.categoryProductDelegate<ExtArgs>;

  /**
   * `prisma.listProduct`: Exposes CRUD operations for the **listProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ListProducts
    * const listProducts = await prisma.listProduct.findMany()
    * ```
    */
  get listProduct(): Prisma.listProductDelegate<ExtArgs>;

  /**
   * `prisma.specProduct`: Exposes CRUD operations for the **specProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SpecProducts
    * const specProducts = await prisma.specProduct.findMany()
    * ```
    */
  get specProduct(): Prisma.specProductDelegate<ExtArgs>;

  /**
   * `prisma.imageProductUtama`: Exposes CRUD operations for the **imageProductUtama** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ImageProductUtamas
    * const imageProductUtamas = await prisma.imageProductUtama.findMany()
    * ```
    */
  get imageProductUtama(): Prisma.imageProductUtamaDelegate<ExtArgs>;

  /**
   * `prisma.imageProduct`: Exposes CRUD operations for the **imageProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ImageProducts
    * const imageProducts = await prisma.imageProduct.findMany()
    * ```
    */
  get imageProduct(): Prisma.imageProductDelegate<ExtArgs>;

  /**
   * `prisma.postArtikel`: Exposes CRUD operations for the **postArtikel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostArtikels
    * const postArtikels = await prisma.postArtikel.findMany()
    * ```
    */
  get postArtikel(): Prisma.postArtikelDelegate<ExtArgs>;

  /**
   * `prisma.imageProductArtikel`: Exposes CRUD operations for the **imageProductArtikel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ImageProductArtikels
    * const imageProductArtikels = await prisma.imageProductArtikel.findMany()
    * ```
    */
  get imageProductArtikel(): Prisma.imageProductArtikelDelegate<ExtArgs>;

  /**
   * `prisma.categoryArtikel`: Exposes CRUD operations for the **categoryArtikel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CategoryArtikels
    * const categoryArtikels = await prisma.categoryArtikel.findMany()
    * ```
    */
  get categoryArtikel(): Prisma.categoryArtikelDelegate<ExtArgs>;

  /**
   * `prisma.cart`: Exposes CRUD operations for the **cart** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carts
    * const carts = await prisma.cart.findMany()
    * ```
    */
  get cart(): Prisma.cartDelegate<ExtArgs>;

  /**
   * `prisma.cartItem`: Exposes CRUD operations for the **cartItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CartItems
    * const cartItems = await prisma.cartItem.findMany()
    * ```
    */
  get cartItem(): Prisma.cartItemDelegate<ExtArgs>;

  /**
   * `prisma.formPembelian`: Exposes CRUD operations for the **formPembelian** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FormPembelians
    * const formPembelians = await prisma.formPembelian.findMany()
    * ```
    */
  get formPembelian(): Prisma.formPembelianDelegate<ExtArgs>;

  /**
   * `prisma.ongkosKirim`: Exposes CRUD operations for the **ongkosKirim** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OngkosKirims
    * const ongkosKirims = await prisma.ongkosKirim.findMany()
    * ```
    */
  get ongkosKirim(): Prisma.ongkosKirimDelegate<ExtArgs>;

  /**
   * `prisma.dataPesananItem`: Exposes CRUD operations for the **dataPesananItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DataPesananItems
    * const dataPesananItems = await prisma.dataPesananItem.findMany()
    * ```
    */
  get dataPesananItem(): Prisma.dataPesananItemDelegate<ExtArgs>;

  /**
   * `prisma.dataPesanan`: Exposes CRUD operations for the **dataPesanan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DataPesanans
    * const dataPesanans = await prisma.dataPesanan.findMany()
    * ```
    */
  get dataPesanan(): Prisma.dataPesananDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.19.1
   * Query Engine version: 69d742ee20b815d88e17e54db4a2a7a3b30324e3
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    categoryProduct: 'categoryProduct',
    listProduct: 'listProduct',
    specProduct: 'specProduct',
    imageProductUtama: 'imageProductUtama',
    imageProduct: 'imageProduct',
    postArtikel: 'postArtikel',
    imageProductArtikel: 'imageProductArtikel',
    categoryArtikel: 'categoryArtikel',
    cart: 'cart',
    cartItem: 'cartItem',
    formPembelian: 'formPembelian',
    ongkosKirim: 'ongkosKirim',
    dataPesananItem: 'dataPesananItem',
    dataPesanan: 'dataPesanan'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "categoryProduct" | "listProduct" | "specProduct" | "imageProductUtama" | "imageProduct" | "postArtikel" | "imageProductArtikel" | "categoryArtikel" | "cart" | "cartItem" | "formPembelian" | "ongkosKirim" | "dataPesananItem" | "dataPesanan"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      categoryProduct: {
        payload: Prisma.$categoryProductPayload<ExtArgs>
        fields: Prisma.categoryProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoryProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoryProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryProductPayload>
          }
          findFirst: {
            args: Prisma.categoryProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoryProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryProductPayload>
          }
          findMany: {
            args: Prisma.categoryProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryProductPayload>[]
          }
          create: {
            args: Prisma.categoryProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryProductPayload>
          }
          createMany: {
            args: Prisma.categoryProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoryProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryProductPayload>[]
          }
          delete: {
            args: Prisma.categoryProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryProductPayload>
          }
          update: {
            args: Prisma.categoryProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryProductPayload>
          }
          deleteMany: {
            args: Prisma.categoryProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoryProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.categoryProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryProductPayload>
          }
          aggregate: {
            args: Prisma.CategoryProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoryProduct>
          }
          groupBy: {
            args: Prisma.categoryProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoryProductCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryProductCountAggregateOutputType> | number
          }
        }
      }
      listProduct: {
        payload: Prisma.$listProductPayload<ExtArgs>
        fields: Prisma.listProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.listProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.listProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listProductPayload>
          }
          findFirst: {
            args: Prisma.listProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.listProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listProductPayload>
          }
          findMany: {
            args: Prisma.listProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listProductPayload>[]
          }
          create: {
            args: Prisma.listProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listProductPayload>
          }
          createMany: {
            args: Prisma.listProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.listProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listProductPayload>[]
          }
          delete: {
            args: Prisma.listProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listProductPayload>
          }
          update: {
            args: Prisma.listProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listProductPayload>
          }
          deleteMany: {
            args: Prisma.listProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.listProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.listProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$listProductPayload>
          }
          aggregate: {
            args: Prisma.ListProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateListProduct>
          }
          groupBy: {
            args: Prisma.listProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ListProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.listProductCountArgs<ExtArgs>
            result: $Utils.Optional<ListProductCountAggregateOutputType> | number
          }
        }
      }
      specProduct: {
        payload: Prisma.$specProductPayload<ExtArgs>
        fields: Prisma.specProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.specProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.specProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specProductPayload>
          }
          findFirst: {
            args: Prisma.specProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.specProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specProductPayload>
          }
          findMany: {
            args: Prisma.specProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specProductPayload>[]
          }
          create: {
            args: Prisma.specProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specProductPayload>
          }
          createMany: {
            args: Prisma.specProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.specProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specProductPayload>[]
          }
          delete: {
            args: Prisma.specProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specProductPayload>
          }
          update: {
            args: Prisma.specProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specProductPayload>
          }
          deleteMany: {
            args: Prisma.specProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.specProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.specProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$specProductPayload>
          }
          aggregate: {
            args: Prisma.SpecProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpecProduct>
          }
          groupBy: {
            args: Prisma.specProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<SpecProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.specProductCountArgs<ExtArgs>
            result: $Utils.Optional<SpecProductCountAggregateOutputType> | number
          }
        }
      }
      imageProductUtama: {
        payload: Prisma.$imageProductUtamaPayload<ExtArgs>
        fields: Prisma.imageProductUtamaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.imageProductUtamaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imageProductUtamaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.imageProductUtamaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imageProductUtamaPayload>
          }
          findFirst: {
            args: Prisma.imageProductUtamaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imageProductUtamaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.imageProductUtamaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imageProductUtamaPayload>
          }
          findMany: {
            args: Prisma.imageProductUtamaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imageProductUtamaPayload>[]
          }
          create: {
            args: Prisma.imageProductUtamaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imageProductUtamaPayload>
          }
          createMany: {
            args: Prisma.imageProductUtamaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.imageProductUtamaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imageProductUtamaPayload>[]
          }
          delete: {
            args: Prisma.imageProductUtamaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imageProductUtamaPayload>
          }
          update: {
            args: Prisma.imageProductUtamaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imageProductUtamaPayload>
          }
          deleteMany: {
            args: Prisma.imageProductUtamaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.imageProductUtamaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.imageProductUtamaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imageProductUtamaPayload>
          }
          aggregate: {
            args: Prisma.ImageProductUtamaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImageProductUtama>
          }
          groupBy: {
            args: Prisma.imageProductUtamaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageProductUtamaGroupByOutputType>[]
          }
          count: {
            args: Prisma.imageProductUtamaCountArgs<ExtArgs>
            result: $Utils.Optional<ImageProductUtamaCountAggregateOutputType> | number
          }
        }
      }
      imageProduct: {
        payload: Prisma.$imageProductPayload<ExtArgs>
        fields: Prisma.imageProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.imageProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imageProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.imageProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imageProductPayload>
          }
          findFirst: {
            args: Prisma.imageProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imageProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.imageProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imageProductPayload>
          }
          findMany: {
            args: Prisma.imageProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imageProductPayload>[]
          }
          create: {
            args: Prisma.imageProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imageProductPayload>
          }
          createMany: {
            args: Prisma.imageProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.imageProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imageProductPayload>[]
          }
          delete: {
            args: Prisma.imageProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imageProductPayload>
          }
          update: {
            args: Prisma.imageProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imageProductPayload>
          }
          deleteMany: {
            args: Prisma.imageProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.imageProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.imageProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imageProductPayload>
          }
          aggregate: {
            args: Prisma.ImageProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImageProduct>
          }
          groupBy: {
            args: Prisma.imageProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.imageProductCountArgs<ExtArgs>
            result: $Utils.Optional<ImageProductCountAggregateOutputType> | number
          }
        }
      }
      postArtikel: {
        payload: Prisma.$postArtikelPayload<ExtArgs>
        fields: Prisma.postArtikelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.postArtikelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postArtikelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.postArtikelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postArtikelPayload>
          }
          findFirst: {
            args: Prisma.postArtikelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postArtikelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.postArtikelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postArtikelPayload>
          }
          findMany: {
            args: Prisma.postArtikelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postArtikelPayload>[]
          }
          create: {
            args: Prisma.postArtikelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postArtikelPayload>
          }
          createMany: {
            args: Prisma.postArtikelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.postArtikelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postArtikelPayload>[]
          }
          delete: {
            args: Prisma.postArtikelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postArtikelPayload>
          }
          update: {
            args: Prisma.postArtikelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postArtikelPayload>
          }
          deleteMany: {
            args: Prisma.postArtikelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.postArtikelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.postArtikelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$postArtikelPayload>
          }
          aggregate: {
            args: Prisma.PostArtikelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostArtikel>
          }
          groupBy: {
            args: Prisma.postArtikelGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostArtikelGroupByOutputType>[]
          }
          count: {
            args: Prisma.postArtikelCountArgs<ExtArgs>
            result: $Utils.Optional<PostArtikelCountAggregateOutputType> | number
          }
        }
      }
      imageProductArtikel: {
        payload: Prisma.$imageProductArtikelPayload<ExtArgs>
        fields: Prisma.imageProductArtikelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.imageProductArtikelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imageProductArtikelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.imageProductArtikelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imageProductArtikelPayload>
          }
          findFirst: {
            args: Prisma.imageProductArtikelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imageProductArtikelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.imageProductArtikelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imageProductArtikelPayload>
          }
          findMany: {
            args: Prisma.imageProductArtikelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imageProductArtikelPayload>[]
          }
          create: {
            args: Prisma.imageProductArtikelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imageProductArtikelPayload>
          }
          createMany: {
            args: Prisma.imageProductArtikelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.imageProductArtikelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imageProductArtikelPayload>[]
          }
          delete: {
            args: Prisma.imageProductArtikelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imageProductArtikelPayload>
          }
          update: {
            args: Prisma.imageProductArtikelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imageProductArtikelPayload>
          }
          deleteMany: {
            args: Prisma.imageProductArtikelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.imageProductArtikelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.imageProductArtikelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imageProductArtikelPayload>
          }
          aggregate: {
            args: Prisma.ImageProductArtikelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImageProductArtikel>
          }
          groupBy: {
            args: Prisma.imageProductArtikelGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageProductArtikelGroupByOutputType>[]
          }
          count: {
            args: Prisma.imageProductArtikelCountArgs<ExtArgs>
            result: $Utils.Optional<ImageProductArtikelCountAggregateOutputType> | number
          }
        }
      }
      categoryArtikel: {
        payload: Prisma.$categoryArtikelPayload<ExtArgs>
        fields: Prisma.categoryArtikelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoryArtikelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryArtikelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoryArtikelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryArtikelPayload>
          }
          findFirst: {
            args: Prisma.categoryArtikelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryArtikelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoryArtikelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryArtikelPayload>
          }
          findMany: {
            args: Prisma.categoryArtikelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryArtikelPayload>[]
          }
          create: {
            args: Prisma.categoryArtikelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryArtikelPayload>
          }
          createMany: {
            args: Prisma.categoryArtikelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoryArtikelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryArtikelPayload>[]
          }
          delete: {
            args: Prisma.categoryArtikelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryArtikelPayload>
          }
          update: {
            args: Prisma.categoryArtikelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryArtikelPayload>
          }
          deleteMany: {
            args: Prisma.categoryArtikelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoryArtikelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.categoryArtikelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoryArtikelPayload>
          }
          aggregate: {
            args: Prisma.CategoryArtikelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategoryArtikel>
          }
          groupBy: {
            args: Prisma.categoryArtikelGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryArtikelGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoryArtikelCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryArtikelCountAggregateOutputType> | number
          }
        }
      }
      cart: {
        payload: Prisma.$cartPayload<ExtArgs>
        fields: Prisma.cartFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cartFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cartFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          findFirst: {
            args: Prisma.cartFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cartFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          findMany: {
            args: Prisma.cartFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>[]
          }
          create: {
            args: Prisma.cartCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          createMany: {
            args: Prisma.cartCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cartCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>[]
          }
          delete: {
            args: Prisma.cartDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          update: {
            args: Prisma.cartUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          deleteMany: {
            args: Prisma.cartDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cartUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cartUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartPayload>
          }
          aggregate: {
            args: Prisma.CartAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCart>
          }
          groupBy: {
            args: Prisma.cartGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartGroupByOutputType>[]
          }
          count: {
            args: Prisma.cartCountArgs<ExtArgs>
            result: $Utils.Optional<CartCountAggregateOutputType> | number
          }
        }
      }
      cartItem: {
        payload: Prisma.$cartItemPayload<ExtArgs>
        fields: Prisma.cartItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cartItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cartItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartItemPayload>
          }
          findFirst: {
            args: Prisma.cartItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cartItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartItemPayload>
          }
          findMany: {
            args: Prisma.cartItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartItemPayload>[]
          }
          create: {
            args: Prisma.cartItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartItemPayload>
          }
          createMany: {
            args: Prisma.cartItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cartItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartItemPayload>[]
          }
          delete: {
            args: Prisma.cartItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartItemPayload>
          }
          update: {
            args: Prisma.cartItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartItemPayload>
          }
          deleteMany: {
            args: Prisma.cartItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cartItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.cartItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartItemPayload>
          }
          aggregate: {
            args: Prisma.CartItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCartItem>
          }
          groupBy: {
            args: Prisma.cartItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.cartItemCountArgs<ExtArgs>
            result: $Utils.Optional<CartItemCountAggregateOutputType> | number
          }
        }
      }
      formPembelian: {
        payload: Prisma.$formPembelianPayload<ExtArgs>
        fields: Prisma.formPembelianFieldRefs
        operations: {
          findUnique: {
            args: Prisma.formPembelianFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formPembelianPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.formPembelianFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formPembelianPayload>
          }
          findFirst: {
            args: Prisma.formPembelianFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formPembelianPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.formPembelianFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formPembelianPayload>
          }
          findMany: {
            args: Prisma.formPembelianFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formPembelianPayload>[]
          }
          create: {
            args: Prisma.formPembelianCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formPembelianPayload>
          }
          createMany: {
            args: Prisma.formPembelianCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.formPembelianCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formPembelianPayload>[]
          }
          delete: {
            args: Prisma.formPembelianDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formPembelianPayload>
          }
          update: {
            args: Prisma.formPembelianUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formPembelianPayload>
          }
          deleteMany: {
            args: Prisma.formPembelianDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.formPembelianUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.formPembelianUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$formPembelianPayload>
          }
          aggregate: {
            args: Prisma.FormPembelianAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFormPembelian>
          }
          groupBy: {
            args: Prisma.formPembelianGroupByArgs<ExtArgs>
            result: $Utils.Optional<FormPembelianGroupByOutputType>[]
          }
          count: {
            args: Prisma.formPembelianCountArgs<ExtArgs>
            result: $Utils.Optional<FormPembelianCountAggregateOutputType> | number
          }
        }
      }
      ongkosKirim: {
        payload: Prisma.$ongkosKirimPayload<ExtArgs>
        fields: Prisma.ongkosKirimFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ongkosKirimFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ongkosKirimPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ongkosKirimFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ongkosKirimPayload>
          }
          findFirst: {
            args: Prisma.ongkosKirimFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ongkosKirimPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ongkosKirimFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ongkosKirimPayload>
          }
          findMany: {
            args: Prisma.ongkosKirimFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ongkosKirimPayload>[]
          }
          create: {
            args: Prisma.ongkosKirimCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ongkosKirimPayload>
          }
          createMany: {
            args: Prisma.ongkosKirimCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ongkosKirimCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ongkosKirimPayload>[]
          }
          delete: {
            args: Prisma.ongkosKirimDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ongkosKirimPayload>
          }
          update: {
            args: Prisma.ongkosKirimUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ongkosKirimPayload>
          }
          deleteMany: {
            args: Prisma.ongkosKirimDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ongkosKirimUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ongkosKirimUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ongkosKirimPayload>
          }
          aggregate: {
            args: Prisma.OngkosKirimAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOngkosKirim>
          }
          groupBy: {
            args: Prisma.ongkosKirimGroupByArgs<ExtArgs>
            result: $Utils.Optional<OngkosKirimGroupByOutputType>[]
          }
          count: {
            args: Prisma.ongkosKirimCountArgs<ExtArgs>
            result: $Utils.Optional<OngkosKirimCountAggregateOutputType> | number
          }
        }
      }
      dataPesananItem: {
        payload: Prisma.$dataPesananItemPayload<ExtArgs>
        fields: Prisma.dataPesananItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.dataPesananItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dataPesananItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.dataPesananItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dataPesananItemPayload>
          }
          findFirst: {
            args: Prisma.dataPesananItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dataPesananItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.dataPesananItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dataPesananItemPayload>
          }
          findMany: {
            args: Prisma.dataPesananItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dataPesananItemPayload>[]
          }
          create: {
            args: Prisma.dataPesananItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dataPesananItemPayload>
          }
          createMany: {
            args: Prisma.dataPesananItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.dataPesananItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dataPesananItemPayload>[]
          }
          delete: {
            args: Prisma.dataPesananItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dataPesananItemPayload>
          }
          update: {
            args: Prisma.dataPesananItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dataPesananItemPayload>
          }
          deleteMany: {
            args: Prisma.dataPesananItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.dataPesananItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.dataPesananItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dataPesananItemPayload>
          }
          aggregate: {
            args: Prisma.DataPesananItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDataPesananItem>
          }
          groupBy: {
            args: Prisma.dataPesananItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<DataPesananItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.dataPesananItemCountArgs<ExtArgs>
            result: $Utils.Optional<DataPesananItemCountAggregateOutputType> | number
          }
        }
      }
      dataPesanan: {
        payload: Prisma.$dataPesananPayload<ExtArgs>
        fields: Prisma.dataPesananFieldRefs
        operations: {
          findUnique: {
            args: Prisma.dataPesananFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dataPesananPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.dataPesananFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dataPesananPayload>
          }
          findFirst: {
            args: Prisma.dataPesananFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dataPesananPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.dataPesananFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dataPesananPayload>
          }
          findMany: {
            args: Prisma.dataPesananFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dataPesananPayload>[]
          }
          create: {
            args: Prisma.dataPesananCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dataPesananPayload>
          }
          createMany: {
            args: Prisma.dataPesananCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.dataPesananCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dataPesananPayload>[]
          }
          delete: {
            args: Prisma.dataPesananDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dataPesananPayload>
          }
          update: {
            args: Prisma.dataPesananUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dataPesananPayload>
          }
          deleteMany: {
            args: Prisma.dataPesananDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.dataPesananUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.dataPesananUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$dataPesananPayload>
          }
          aggregate: {
            args: Prisma.DataPesananAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDataPesanan>
          }
          groupBy: {
            args: Prisma.dataPesananGroupByArgs<ExtArgs>
            result: $Utils.Optional<DataPesananGroupByOutputType>[]
          }
          count: {
            args: Prisma.dataPesananCountArgs<ExtArgs>
            result: $Utils.Optional<DataPesananCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CategoryProductCountOutputType
   */

  export type CategoryProductCountOutputType = {
    listProducts: number
  }

  export type CategoryProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listProducts?: boolean | CategoryProductCountOutputTypeCountListProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoryProductCountOutputType without action
   */
  export type CategoryProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryProductCountOutputType
     */
    select?: CategoryProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryProductCountOutputType without action
   */
  export type CategoryProductCountOutputTypeCountListProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: listProductWhereInput
  }


  /**
   * Count Type ListProductCountOutputType
   */

  export type ListProductCountOutputType = {
    url_image_product: number
    cartItem: number
  }

  export type ListProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    url_image_product?: boolean | ListProductCountOutputTypeCountUrl_image_productArgs
    cartItem?: boolean | ListProductCountOutputTypeCountCartItemArgs
  }

  // Custom InputTypes
  /**
   * ListProductCountOutputType without action
   */
  export type ListProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ListProductCountOutputType
     */
    select?: ListProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ListProductCountOutputType without action
   */
  export type ListProductCountOutputTypeCountUrl_image_productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: imageProductWhereInput
  }

  /**
   * ListProductCountOutputType without action
   */
  export type ListProductCountOutputTypeCountCartItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cartItemWhereInput
  }


  /**
   * Count Type PostArtikelCountOutputType
   */

  export type PostArtikelCountOutputType = {
    imageProductArtikel: number
  }

  export type PostArtikelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    imageProductArtikel?: boolean | PostArtikelCountOutputTypeCountImageProductArtikelArgs
  }

  // Custom InputTypes
  /**
   * PostArtikelCountOutputType without action
   */
  export type PostArtikelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostArtikelCountOutputType
     */
    select?: PostArtikelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PostArtikelCountOutputType without action
   */
  export type PostArtikelCountOutputTypeCountImageProductArtikelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: imageProductArtikelWhereInput
  }


  /**
   * Count Type CategoryArtikelCountOutputType
   */

  export type CategoryArtikelCountOutputType = {
    postArtikel: number
  }

  export type CategoryArtikelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postArtikel?: boolean | CategoryArtikelCountOutputTypeCountPostArtikelArgs
  }

  // Custom InputTypes
  /**
   * CategoryArtikelCountOutputType without action
   */
  export type CategoryArtikelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryArtikelCountOutputType
     */
    select?: CategoryArtikelCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryArtikelCountOutputType without action
   */
  export type CategoryArtikelCountOutputTypeCountPostArtikelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postArtikelWhereInput
  }


  /**
   * Count Type CartCountOutputType
   */

  export type CartCountOutputType = {
    items: number
    dataPesanan: number
  }

  export type CartCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | CartCountOutputTypeCountItemsArgs
    dataPesanan?: boolean | CartCountOutputTypeCountDataPesananArgs
  }

  // Custom InputTypes
  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartCountOutputType
     */
    select?: CartCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cartItemWhereInput
  }

  /**
   * CartCountOutputType without action
   */
  export type CartCountOutputTypeCountDataPesananArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dataPesananWhereInput
  }


  /**
   * Count Type DataPesananCountOutputType
   */

  export type DataPesananCountOutputType = {
    dataPesananItems: number
  }

  export type DataPesananCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataPesananItems?: boolean | DataPesananCountOutputTypeCountDataPesananItemsArgs
  }

  // Custom InputTypes
  /**
   * DataPesananCountOutputType without action
   */
  export type DataPesananCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DataPesananCountOutputType
     */
    select?: DataPesananCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DataPesananCountOutputType without action
   */
  export type DataPesananCountOutputTypeCountDataPesananItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dataPesananItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model categoryProduct
   */

  export type AggregateCategoryProduct = {
    _count: CategoryProductCountAggregateOutputType | null
    _avg: CategoryProductAvgAggregateOutputType | null
    _sum: CategoryProductSumAggregateOutputType | null
    _min: CategoryProductMinAggregateOutputType | null
    _max: CategoryProductMaxAggregateOutputType | null
  }

  export type CategoryProductAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoryProductSumAggregateOutputType = {
    id: number | null
  }

  export type CategoryProductMinAggregateOutputType = {
    id: number | null
    start: Date | null
    end: Date | null
    category: string | null
    slugCategory: string | null
    image: string | null
    icon: string | null
    urlYoutube: string | null
    title: string | null
    desc: string | null
    tags: string | null
  }

  export type CategoryProductMaxAggregateOutputType = {
    id: number | null
    start: Date | null
    end: Date | null
    category: string | null
    slugCategory: string | null
    image: string | null
    icon: string | null
    urlYoutube: string | null
    title: string | null
    desc: string | null
    tags: string | null
  }

  export type CategoryProductCountAggregateOutputType = {
    id: number
    start: number
    end: number
    category: number
    slugCategory: number
    image: number
    icon: number
    urlYoutube: number
    title: number
    desc: number
    tags: number
    _all: number
  }


  export type CategoryProductAvgAggregateInputType = {
    id?: true
  }

  export type CategoryProductSumAggregateInputType = {
    id?: true
  }

  export type CategoryProductMinAggregateInputType = {
    id?: true
    start?: true
    end?: true
    category?: true
    slugCategory?: true
    image?: true
    icon?: true
    urlYoutube?: true
    title?: true
    desc?: true
    tags?: true
  }

  export type CategoryProductMaxAggregateInputType = {
    id?: true
    start?: true
    end?: true
    category?: true
    slugCategory?: true
    image?: true
    icon?: true
    urlYoutube?: true
    title?: true
    desc?: true
    tags?: true
  }

  export type CategoryProductCountAggregateInputType = {
    id?: true
    start?: true
    end?: true
    category?: true
    slugCategory?: true
    image?: true
    icon?: true
    urlYoutube?: true
    title?: true
    desc?: true
    tags?: true
    _all?: true
  }

  export type CategoryProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categoryProduct to aggregate.
     */
    where?: categoryProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categoryProducts to fetch.
     */
    orderBy?: categoryProductOrderByWithRelationInput | categoryProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoryProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categoryProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categoryProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categoryProducts
    **/
    _count?: true | CategoryProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoryProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryProductMaxAggregateInputType
  }

  export type GetCategoryProductAggregateType<T extends CategoryProductAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoryProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoryProduct[P]>
      : GetScalarType<T[P], AggregateCategoryProduct[P]>
  }




  export type categoryProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoryProductWhereInput
    orderBy?: categoryProductOrderByWithAggregationInput | categoryProductOrderByWithAggregationInput[]
    by: CategoryProductScalarFieldEnum[] | CategoryProductScalarFieldEnum
    having?: categoryProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryProductCountAggregateInputType | true
    _avg?: CategoryProductAvgAggregateInputType
    _sum?: CategoryProductSumAggregateInputType
    _min?: CategoryProductMinAggregateInputType
    _max?: CategoryProductMaxAggregateInputType
  }

  export type CategoryProductGroupByOutputType = {
    id: number
    start: Date
    end: Date
    category: string
    slugCategory: string
    image: string | null
    icon: string | null
    urlYoutube: string | null
    title: string | null
    desc: string | null
    tags: string | null
    _count: CategoryProductCountAggregateOutputType | null
    _avg: CategoryProductAvgAggregateOutputType | null
    _sum: CategoryProductSumAggregateOutputType | null
    _min: CategoryProductMinAggregateOutputType | null
    _max: CategoryProductMaxAggregateOutputType | null
  }

  type GetCategoryProductGroupByPayload<T extends categoryProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryProductGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryProductGroupByOutputType[P]>
        }
      >
    >


  export type categoryProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    end?: boolean
    category?: boolean
    slugCategory?: boolean
    image?: boolean
    icon?: boolean
    urlYoutube?: boolean
    title?: boolean
    desc?: boolean
    tags?: boolean
    listProducts?: boolean | categoryProduct$listProductsArgs<ExtArgs>
    _count?: boolean | CategoryProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoryProduct"]>

  export type categoryProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    end?: boolean
    category?: boolean
    slugCategory?: boolean
    image?: boolean
    icon?: boolean
    urlYoutube?: boolean
    title?: boolean
    desc?: boolean
    tags?: boolean
  }, ExtArgs["result"]["categoryProduct"]>

  export type categoryProductSelectScalar = {
    id?: boolean
    start?: boolean
    end?: boolean
    category?: boolean
    slugCategory?: boolean
    image?: boolean
    icon?: boolean
    urlYoutube?: boolean
    title?: boolean
    desc?: boolean
    tags?: boolean
  }

  export type categoryProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    listProducts?: boolean | categoryProduct$listProductsArgs<ExtArgs>
    _count?: boolean | CategoryProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoryProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $categoryProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categoryProduct"
    objects: {
      listProducts: Prisma.$listProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      start: Date
      end: Date
      category: string
      slugCategory: string
      image: string | null
      icon: string | null
      urlYoutube: string | null
      title: string | null
      desc: string | null
      tags: string | null
    }, ExtArgs["result"]["categoryProduct"]>
    composites: {}
  }

  type categoryProductGetPayload<S extends boolean | null | undefined | categoryProductDefaultArgs> = $Result.GetResult<Prisma.$categoryProductPayload, S>

  type categoryProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<categoryProductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoryProductCountAggregateInputType | true
    }

  export interface categoryProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categoryProduct'], meta: { name: 'categoryProduct' } }
    /**
     * Find zero or one CategoryProduct that matches the filter.
     * @param {categoryProductFindUniqueArgs} args - Arguments to find a CategoryProduct
     * @example
     * // Get one CategoryProduct
     * const categoryProduct = await prisma.categoryProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoryProductFindUniqueArgs>(args: SelectSubset<T, categoryProductFindUniqueArgs<ExtArgs>>): Prisma__categoryProductClient<$Result.GetResult<Prisma.$categoryProductPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CategoryProduct that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {categoryProductFindUniqueOrThrowArgs} args - Arguments to find a CategoryProduct
     * @example
     * // Get one CategoryProduct
     * const categoryProduct = await prisma.categoryProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoryProductFindUniqueOrThrowArgs>(args: SelectSubset<T, categoryProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoryProductClient<$Result.GetResult<Prisma.$categoryProductPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CategoryProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryProductFindFirstArgs} args - Arguments to find a CategoryProduct
     * @example
     * // Get one CategoryProduct
     * const categoryProduct = await prisma.categoryProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoryProductFindFirstArgs>(args?: SelectSubset<T, categoryProductFindFirstArgs<ExtArgs>>): Prisma__categoryProductClient<$Result.GetResult<Prisma.$categoryProductPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CategoryProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryProductFindFirstOrThrowArgs} args - Arguments to find a CategoryProduct
     * @example
     * // Get one CategoryProduct
     * const categoryProduct = await prisma.categoryProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoryProductFindFirstOrThrowArgs>(args?: SelectSubset<T, categoryProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoryProductClient<$Result.GetResult<Prisma.$categoryProductPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CategoryProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CategoryProducts
     * const categoryProducts = await prisma.categoryProduct.findMany()
     * 
     * // Get first 10 CategoryProducts
     * const categoryProducts = await prisma.categoryProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryProductWithIdOnly = await prisma.categoryProduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoryProductFindManyArgs>(args?: SelectSubset<T, categoryProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryProductPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CategoryProduct.
     * @param {categoryProductCreateArgs} args - Arguments to create a CategoryProduct.
     * @example
     * // Create one CategoryProduct
     * const CategoryProduct = await prisma.categoryProduct.create({
     *   data: {
     *     // ... data to create a CategoryProduct
     *   }
     * })
     * 
     */
    create<T extends categoryProductCreateArgs>(args: SelectSubset<T, categoryProductCreateArgs<ExtArgs>>): Prisma__categoryProductClient<$Result.GetResult<Prisma.$categoryProductPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CategoryProducts.
     * @param {categoryProductCreateManyArgs} args - Arguments to create many CategoryProducts.
     * @example
     * // Create many CategoryProducts
     * const categoryProduct = await prisma.categoryProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoryProductCreateManyArgs>(args?: SelectSubset<T, categoryProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CategoryProducts and returns the data saved in the database.
     * @param {categoryProductCreateManyAndReturnArgs} args - Arguments to create many CategoryProducts.
     * @example
     * // Create many CategoryProducts
     * const categoryProduct = await prisma.categoryProduct.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CategoryProducts and only return the `id`
     * const categoryProductWithIdOnly = await prisma.categoryProduct.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoryProductCreateManyAndReturnArgs>(args?: SelectSubset<T, categoryProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryProductPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CategoryProduct.
     * @param {categoryProductDeleteArgs} args - Arguments to delete one CategoryProduct.
     * @example
     * // Delete one CategoryProduct
     * const CategoryProduct = await prisma.categoryProduct.delete({
     *   where: {
     *     // ... filter to delete one CategoryProduct
     *   }
     * })
     * 
     */
    delete<T extends categoryProductDeleteArgs>(args: SelectSubset<T, categoryProductDeleteArgs<ExtArgs>>): Prisma__categoryProductClient<$Result.GetResult<Prisma.$categoryProductPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CategoryProduct.
     * @param {categoryProductUpdateArgs} args - Arguments to update one CategoryProduct.
     * @example
     * // Update one CategoryProduct
     * const categoryProduct = await prisma.categoryProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoryProductUpdateArgs>(args: SelectSubset<T, categoryProductUpdateArgs<ExtArgs>>): Prisma__categoryProductClient<$Result.GetResult<Prisma.$categoryProductPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CategoryProducts.
     * @param {categoryProductDeleteManyArgs} args - Arguments to filter CategoryProducts to delete.
     * @example
     * // Delete a few CategoryProducts
     * const { count } = await prisma.categoryProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoryProductDeleteManyArgs>(args?: SelectSubset<T, categoryProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoryProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CategoryProducts
     * const categoryProduct = await prisma.categoryProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoryProductUpdateManyArgs>(args: SelectSubset<T, categoryProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CategoryProduct.
     * @param {categoryProductUpsertArgs} args - Arguments to update or create a CategoryProduct.
     * @example
     * // Update or create a CategoryProduct
     * const categoryProduct = await prisma.categoryProduct.upsert({
     *   create: {
     *     // ... data to create a CategoryProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CategoryProduct we want to update
     *   }
     * })
     */
    upsert<T extends categoryProductUpsertArgs>(args: SelectSubset<T, categoryProductUpsertArgs<ExtArgs>>): Prisma__categoryProductClient<$Result.GetResult<Prisma.$categoryProductPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CategoryProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryProductCountArgs} args - Arguments to filter CategoryProducts to count.
     * @example
     * // Count the number of CategoryProducts
     * const count = await prisma.categoryProduct.count({
     *   where: {
     *     // ... the filter for the CategoryProducts we want to count
     *   }
     * })
    **/
    count<T extends categoryProductCountArgs>(
      args?: Subset<T, categoryProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CategoryProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryProductAggregateArgs>(args: Subset<T, CategoryProductAggregateArgs>): Prisma.PrismaPromise<GetCategoryProductAggregateType<T>>

    /**
     * Group by CategoryProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categoryProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoryProductGroupByArgs['orderBy'] }
        : { orderBy?: categoryProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categoryProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categoryProduct model
   */
  readonly fields: categoryProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categoryProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoryProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    listProducts<T extends categoryProduct$listProductsArgs<ExtArgs> = {}>(args?: Subset<T, categoryProduct$listProductsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$listProductPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the categoryProduct model
   */ 
  interface categoryProductFieldRefs {
    readonly id: FieldRef<"categoryProduct", 'Int'>
    readonly start: FieldRef<"categoryProduct", 'DateTime'>
    readonly end: FieldRef<"categoryProduct", 'DateTime'>
    readonly category: FieldRef<"categoryProduct", 'String'>
    readonly slugCategory: FieldRef<"categoryProduct", 'String'>
    readonly image: FieldRef<"categoryProduct", 'String'>
    readonly icon: FieldRef<"categoryProduct", 'String'>
    readonly urlYoutube: FieldRef<"categoryProduct", 'String'>
    readonly title: FieldRef<"categoryProduct", 'String'>
    readonly desc: FieldRef<"categoryProduct", 'String'>
    readonly tags: FieldRef<"categoryProduct", 'String'>
  }
    

  // Custom InputTypes
  /**
   * categoryProduct findUnique
   */
  export type categoryProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoryProduct
     */
    select?: categoryProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryProductInclude<ExtArgs> | null
    /**
     * Filter, which categoryProduct to fetch.
     */
    where: categoryProductWhereUniqueInput
  }

  /**
   * categoryProduct findUniqueOrThrow
   */
  export type categoryProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoryProduct
     */
    select?: categoryProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryProductInclude<ExtArgs> | null
    /**
     * Filter, which categoryProduct to fetch.
     */
    where: categoryProductWhereUniqueInput
  }

  /**
   * categoryProduct findFirst
   */
  export type categoryProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoryProduct
     */
    select?: categoryProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryProductInclude<ExtArgs> | null
    /**
     * Filter, which categoryProduct to fetch.
     */
    where?: categoryProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categoryProducts to fetch.
     */
    orderBy?: categoryProductOrderByWithRelationInput | categoryProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categoryProducts.
     */
    cursor?: categoryProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categoryProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categoryProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categoryProducts.
     */
    distinct?: CategoryProductScalarFieldEnum | CategoryProductScalarFieldEnum[]
  }

  /**
   * categoryProduct findFirstOrThrow
   */
  export type categoryProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoryProduct
     */
    select?: categoryProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryProductInclude<ExtArgs> | null
    /**
     * Filter, which categoryProduct to fetch.
     */
    where?: categoryProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categoryProducts to fetch.
     */
    orderBy?: categoryProductOrderByWithRelationInput | categoryProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categoryProducts.
     */
    cursor?: categoryProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categoryProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categoryProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categoryProducts.
     */
    distinct?: CategoryProductScalarFieldEnum | CategoryProductScalarFieldEnum[]
  }

  /**
   * categoryProduct findMany
   */
  export type categoryProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoryProduct
     */
    select?: categoryProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryProductInclude<ExtArgs> | null
    /**
     * Filter, which categoryProducts to fetch.
     */
    where?: categoryProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categoryProducts to fetch.
     */
    orderBy?: categoryProductOrderByWithRelationInput | categoryProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categoryProducts.
     */
    cursor?: categoryProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categoryProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categoryProducts.
     */
    skip?: number
    distinct?: CategoryProductScalarFieldEnum | CategoryProductScalarFieldEnum[]
  }

  /**
   * categoryProduct create
   */
  export type categoryProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoryProduct
     */
    select?: categoryProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryProductInclude<ExtArgs> | null
    /**
     * The data needed to create a categoryProduct.
     */
    data: XOR<categoryProductCreateInput, categoryProductUncheckedCreateInput>
  }

  /**
   * categoryProduct createMany
   */
  export type categoryProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categoryProducts.
     */
    data: categoryProductCreateManyInput | categoryProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categoryProduct createManyAndReturn
   */
  export type categoryProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoryProduct
     */
    select?: categoryProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many categoryProducts.
     */
    data: categoryProductCreateManyInput | categoryProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categoryProduct update
   */
  export type categoryProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoryProduct
     */
    select?: categoryProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryProductInclude<ExtArgs> | null
    /**
     * The data needed to update a categoryProduct.
     */
    data: XOR<categoryProductUpdateInput, categoryProductUncheckedUpdateInput>
    /**
     * Choose, which categoryProduct to update.
     */
    where: categoryProductWhereUniqueInput
  }

  /**
   * categoryProduct updateMany
   */
  export type categoryProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categoryProducts.
     */
    data: XOR<categoryProductUpdateManyMutationInput, categoryProductUncheckedUpdateManyInput>
    /**
     * Filter which categoryProducts to update
     */
    where?: categoryProductWhereInput
  }

  /**
   * categoryProduct upsert
   */
  export type categoryProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoryProduct
     */
    select?: categoryProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryProductInclude<ExtArgs> | null
    /**
     * The filter to search for the categoryProduct to update in case it exists.
     */
    where: categoryProductWhereUniqueInput
    /**
     * In case the categoryProduct found by the `where` argument doesn't exist, create a new categoryProduct with this data.
     */
    create: XOR<categoryProductCreateInput, categoryProductUncheckedCreateInput>
    /**
     * In case the categoryProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoryProductUpdateInput, categoryProductUncheckedUpdateInput>
  }

  /**
   * categoryProduct delete
   */
  export type categoryProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoryProduct
     */
    select?: categoryProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryProductInclude<ExtArgs> | null
    /**
     * Filter which categoryProduct to delete.
     */
    where: categoryProductWhereUniqueInput
  }

  /**
   * categoryProduct deleteMany
   */
  export type categoryProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categoryProducts to delete
     */
    where?: categoryProductWhereInput
  }

  /**
   * categoryProduct.listProducts
   */
  export type categoryProduct$listProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listProduct
     */
    select?: listProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listProductInclude<ExtArgs> | null
    where?: listProductWhereInput
    orderBy?: listProductOrderByWithRelationInput | listProductOrderByWithRelationInput[]
    cursor?: listProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ListProductScalarFieldEnum | ListProductScalarFieldEnum[]
  }

  /**
   * categoryProduct without action
   */
  export type categoryProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoryProduct
     */
    select?: categoryProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryProductInclude<ExtArgs> | null
  }


  /**
   * Model listProduct
   */

  export type AggregateListProduct = {
    _count: ListProductCountAggregateOutputType | null
    _avg: ListProductAvgAggregateOutputType | null
    _sum: ListProductSumAggregateOutputType | null
    _min: ListProductMinAggregateOutputType | null
    _max: ListProductMaxAggregateOutputType | null
  }

  export type ListProductAvgAggregateOutputType = {
    id: number | null
    stockProduct: number | null
    viewProduct: number | null
    productPrice: number | null
    productDiscount: number | null
    productPriceFinal: number | null
    productKategori: number | null
  }

  export type ListProductSumAggregateOutputType = {
    id: number | null
    stockProduct: number | null
    viewProduct: number | null
    productPrice: bigint | null
    productDiscount: number | null
    productPriceFinal: bigint | null
    productKategori: number | null
  }

  export type ListProductMinAggregateOutputType = {
    id: number | null
    start: Date | null
    end: Date | null
    slugProduct: string | null
    saveDraf: boolean | null
    descProduct: string | null
    productName: string | null
    stockProduct: number | null
    descMetaProduct: string | null
    viewProduct: number | null
    subKategoriProduct: string | null
    productType: string | null
    productPrice: bigint | null
    productDiscount: number | null
    productPriceFinal: bigint | null
    urlYoutube: string | null
    productKategori: number | null
  }

  export type ListProductMaxAggregateOutputType = {
    id: number | null
    start: Date | null
    end: Date | null
    slugProduct: string | null
    saveDraf: boolean | null
    descProduct: string | null
    productName: string | null
    stockProduct: number | null
    descMetaProduct: string | null
    viewProduct: number | null
    subKategoriProduct: string | null
    productType: string | null
    productPrice: bigint | null
    productDiscount: number | null
    productPriceFinal: bigint | null
    urlYoutube: string | null
    productKategori: number | null
  }

  export type ListProductCountAggregateOutputType = {
    id: number
    start: number
    end: number
    slugProduct: number
    saveDraf: number
    descProduct: number
    productName: number
    stockProduct: number
    descMetaProduct: number
    viewProduct: number
    subKategoriProduct: number
    productType: number
    tagProduct: number
    productPrice: number
    productDiscount: number
    productPriceFinal: number
    urlYoutube: number
    productKategori: number
    _all: number
  }


  export type ListProductAvgAggregateInputType = {
    id?: true
    stockProduct?: true
    viewProduct?: true
    productPrice?: true
    productDiscount?: true
    productPriceFinal?: true
    productKategori?: true
  }

  export type ListProductSumAggregateInputType = {
    id?: true
    stockProduct?: true
    viewProduct?: true
    productPrice?: true
    productDiscount?: true
    productPriceFinal?: true
    productKategori?: true
  }

  export type ListProductMinAggregateInputType = {
    id?: true
    start?: true
    end?: true
    slugProduct?: true
    saveDraf?: true
    descProduct?: true
    productName?: true
    stockProduct?: true
    descMetaProduct?: true
    viewProduct?: true
    subKategoriProduct?: true
    productType?: true
    productPrice?: true
    productDiscount?: true
    productPriceFinal?: true
    urlYoutube?: true
    productKategori?: true
  }

  export type ListProductMaxAggregateInputType = {
    id?: true
    start?: true
    end?: true
    slugProduct?: true
    saveDraf?: true
    descProduct?: true
    productName?: true
    stockProduct?: true
    descMetaProduct?: true
    viewProduct?: true
    subKategoriProduct?: true
    productType?: true
    productPrice?: true
    productDiscount?: true
    productPriceFinal?: true
    urlYoutube?: true
    productKategori?: true
  }

  export type ListProductCountAggregateInputType = {
    id?: true
    start?: true
    end?: true
    slugProduct?: true
    saveDraf?: true
    descProduct?: true
    productName?: true
    stockProduct?: true
    descMetaProduct?: true
    viewProduct?: true
    subKategoriProduct?: true
    productType?: true
    tagProduct?: true
    productPrice?: true
    productDiscount?: true
    productPriceFinal?: true
    urlYoutube?: true
    productKategori?: true
    _all?: true
  }

  export type ListProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which listProduct to aggregate.
     */
    where?: listProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of listProducts to fetch.
     */
    orderBy?: listProductOrderByWithRelationInput | listProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: listProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` listProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` listProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned listProducts
    **/
    _count?: true | ListProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ListProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ListProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ListProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ListProductMaxAggregateInputType
  }

  export type GetListProductAggregateType<T extends ListProductAggregateArgs> = {
        [P in keyof T & keyof AggregateListProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateListProduct[P]>
      : GetScalarType<T[P], AggregateListProduct[P]>
  }




  export type listProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: listProductWhereInput
    orderBy?: listProductOrderByWithAggregationInput | listProductOrderByWithAggregationInput[]
    by: ListProductScalarFieldEnum[] | ListProductScalarFieldEnum
    having?: listProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ListProductCountAggregateInputType | true
    _avg?: ListProductAvgAggregateInputType
    _sum?: ListProductSumAggregateInputType
    _min?: ListProductMinAggregateInputType
    _max?: ListProductMaxAggregateInputType
  }

  export type ListProductGroupByOutputType = {
    id: number
    start: Date
    end: Date
    slugProduct: string
    saveDraf: boolean
    descProduct: string | null
    productName: string | null
    stockProduct: number | null
    descMetaProduct: string | null
    viewProduct: number | null
    subKategoriProduct: string | null
    productType: string | null
    tagProduct: JsonValue | null
    productPrice: bigint | null
    productDiscount: number | null
    productPriceFinal: bigint | null
    urlYoutube: string | null
    productKategori: number
    _count: ListProductCountAggregateOutputType | null
    _avg: ListProductAvgAggregateOutputType | null
    _sum: ListProductSumAggregateOutputType | null
    _min: ListProductMinAggregateOutputType | null
    _max: ListProductMaxAggregateOutputType | null
  }

  type GetListProductGroupByPayload<T extends listProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ListProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ListProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ListProductGroupByOutputType[P]>
            : GetScalarType<T[P], ListProductGroupByOutputType[P]>
        }
      >
    >


  export type listProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    end?: boolean
    slugProduct?: boolean
    saveDraf?: boolean
    descProduct?: boolean
    productName?: boolean
    stockProduct?: boolean
    descMetaProduct?: boolean
    viewProduct?: boolean
    subKategoriProduct?: boolean
    productType?: boolean
    tagProduct?: boolean
    productPrice?: boolean
    productDiscount?: boolean
    productPriceFinal?: boolean
    urlYoutube?: boolean
    productKategori?: boolean
    user?: boolean | categoryProductDefaultArgs<ExtArgs>
    url_image_product?: boolean | listProduct$url_image_productArgs<ExtArgs>
    spec_product?: boolean | listProduct$spec_productArgs<ExtArgs>
    cartItem?: boolean | listProduct$cartItemArgs<ExtArgs>
    imageProductUtama?: boolean | listProduct$imageProductUtamaArgs<ExtArgs>
    _count?: boolean | ListProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listProduct"]>

  export type listProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    end?: boolean
    slugProduct?: boolean
    saveDraf?: boolean
    descProduct?: boolean
    productName?: boolean
    stockProduct?: boolean
    descMetaProduct?: boolean
    viewProduct?: boolean
    subKategoriProduct?: boolean
    productType?: boolean
    tagProduct?: boolean
    productPrice?: boolean
    productDiscount?: boolean
    productPriceFinal?: boolean
    urlYoutube?: boolean
    productKategori?: boolean
    user?: boolean | categoryProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["listProduct"]>

  export type listProductSelectScalar = {
    id?: boolean
    start?: boolean
    end?: boolean
    slugProduct?: boolean
    saveDraf?: boolean
    descProduct?: boolean
    productName?: boolean
    stockProduct?: boolean
    descMetaProduct?: boolean
    viewProduct?: boolean
    subKategoriProduct?: boolean
    productType?: boolean
    tagProduct?: boolean
    productPrice?: boolean
    productDiscount?: boolean
    productPriceFinal?: boolean
    urlYoutube?: boolean
    productKategori?: boolean
  }

  export type listProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | categoryProductDefaultArgs<ExtArgs>
    url_image_product?: boolean | listProduct$url_image_productArgs<ExtArgs>
    spec_product?: boolean | listProduct$spec_productArgs<ExtArgs>
    cartItem?: boolean | listProduct$cartItemArgs<ExtArgs>
    imageProductUtama?: boolean | listProduct$imageProductUtamaArgs<ExtArgs>
    _count?: boolean | ListProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type listProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | categoryProductDefaultArgs<ExtArgs>
  }

  export type $listProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "listProduct"
    objects: {
      user: Prisma.$categoryProductPayload<ExtArgs>
      url_image_product: Prisma.$imageProductPayload<ExtArgs>[]
      spec_product: Prisma.$specProductPayload<ExtArgs> | null
      cartItem: Prisma.$cartItemPayload<ExtArgs>[]
      imageProductUtama: Prisma.$imageProductUtamaPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      start: Date
      end: Date
      slugProduct: string
      saveDraf: boolean
      descProduct: string | null
      productName: string | null
      stockProduct: number | null
      descMetaProduct: string | null
      viewProduct: number | null
      subKategoriProduct: string | null
      productType: string | null
      tagProduct: Prisma.JsonValue | null
      productPrice: bigint | null
      productDiscount: number | null
      productPriceFinal: bigint | null
      urlYoutube: string | null
      productKategori: number
    }, ExtArgs["result"]["listProduct"]>
    composites: {}
  }

  type listProductGetPayload<S extends boolean | null | undefined | listProductDefaultArgs> = $Result.GetResult<Prisma.$listProductPayload, S>

  type listProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<listProductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ListProductCountAggregateInputType | true
    }

  export interface listProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['listProduct'], meta: { name: 'listProduct' } }
    /**
     * Find zero or one ListProduct that matches the filter.
     * @param {listProductFindUniqueArgs} args - Arguments to find a ListProduct
     * @example
     * // Get one ListProduct
     * const listProduct = await prisma.listProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends listProductFindUniqueArgs>(args: SelectSubset<T, listProductFindUniqueArgs<ExtArgs>>): Prisma__listProductClient<$Result.GetResult<Prisma.$listProductPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ListProduct that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {listProductFindUniqueOrThrowArgs} args - Arguments to find a ListProduct
     * @example
     * // Get one ListProduct
     * const listProduct = await prisma.listProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends listProductFindUniqueOrThrowArgs>(args: SelectSubset<T, listProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__listProductClient<$Result.GetResult<Prisma.$listProductPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ListProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listProductFindFirstArgs} args - Arguments to find a ListProduct
     * @example
     * // Get one ListProduct
     * const listProduct = await prisma.listProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends listProductFindFirstArgs>(args?: SelectSubset<T, listProductFindFirstArgs<ExtArgs>>): Prisma__listProductClient<$Result.GetResult<Prisma.$listProductPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ListProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listProductFindFirstOrThrowArgs} args - Arguments to find a ListProduct
     * @example
     * // Get one ListProduct
     * const listProduct = await prisma.listProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends listProductFindFirstOrThrowArgs>(args?: SelectSubset<T, listProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__listProductClient<$Result.GetResult<Prisma.$listProductPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ListProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ListProducts
     * const listProducts = await prisma.listProduct.findMany()
     * 
     * // Get first 10 ListProducts
     * const listProducts = await prisma.listProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const listProductWithIdOnly = await prisma.listProduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends listProductFindManyArgs>(args?: SelectSubset<T, listProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$listProductPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ListProduct.
     * @param {listProductCreateArgs} args - Arguments to create a ListProduct.
     * @example
     * // Create one ListProduct
     * const ListProduct = await prisma.listProduct.create({
     *   data: {
     *     // ... data to create a ListProduct
     *   }
     * })
     * 
     */
    create<T extends listProductCreateArgs>(args: SelectSubset<T, listProductCreateArgs<ExtArgs>>): Prisma__listProductClient<$Result.GetResult<Prisma.$listProductPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ListProducts.
     * @param {listProductCreateManyArgs} args - Arguments to create many ListProducts.
     * @example
     * // Create many ListProducts
     * const listProduct = await prisma.listProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends listProductCreateManyArgs>(args?: SelectSubset<T, listProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ListProducts and returns the data saved in the database.
     * @param {listProductCreateManyAndReturnArgs} args - Arguments to create many ListProducts.
     * @example
     * // Create many ListProducts
     * const listProduct = await prisma.listProduct.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ListProducts and only return the `id`
     * const listProductWithIdOnly = await prisma.listProduct.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends listProductCreateManyAndReturnArgs>(args?: SelectSubset<T, listProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$listProductPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ListProduct.
     * @param {listProductDeleteArgs} args - Arguments to delete one ListProduct.
     * @example
     * // Delete one ListProduct
     * const ListProduct = await prisma.listProduct.delete({
     *   where: {
     *     // ... filter to delete one ListProduct
     *   }
     * })
     * 
     */
    delete<T extends listProductDeleteArgs>(args: SelectSubset<T, listProductDeleteArgs<ExtArgs>>): Prisma__listProductClient<$Result.GetResult<Prisma.$listProductPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ListProduct.
     * @param {listProductUpdateArgs} args - Arguments to update one ListProduct.
     * @example
     * // Update one ListProduct
     * const listProduct = await prisma.listProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends listProductUpdateArgs>(args: SelectSubset<T, listProductUpdateArgs<ExtArgs>>): Prisma__listProductClient<$Result.GetResult<Prisma.$listProductPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ListProducts.
     * @param {listProductDeleteManyArgs} args - Arguments to filter ListProducts to delete.
     * @example
     * // Delete a few ListProducts
     * const { count } = await prisma.listProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends listProductDeleteManyArgs>(args?: SelectSubset<T, listProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ListProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ListProducts
     * const listProduct = await prisma.listProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends listProductUpdateManyArgs>(args: SelectSubset<T, listProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ListProduct.
     * @param {listProductUpsertArgs} args - Arguments to update or create a ListProduct.
     * @example
     * // Update or create a ListProduct
     * const listProduct = await prisma.listProduct.upsert({
     *   create: {
     *     // ... data to create a ListProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ListProduct we want to update
     *   }
     * })
     */
    upsert<T extends listProductUpsertArgs>(args: SelectSubset<T, listProductUpsertArgs<ExtArgs>>): Prisma__listProductClient<$Result.GetResult<Prisma.$listProductPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ListProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listProductCountArgs} args - Arguments to filter ListProducts to count.
     * @example
     * // Count the number of ListProducts
     * const count = await prisma.listProduct.count({
     *   where: {
     *     // ... the filter for the ListProducts we want to count
     *   }
     * })
    **/
    count<T extends listProductCountArgs>(
      args?: Subset<T, listProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ListProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ListProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ListProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ListProductAggregateArgs>(args: Subset<T, ListProductAggregateArgs>): Prisma.PrismaPromise<GetListProductAggregateType<T>>

    /**
     * Group by ListProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {listProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends listProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: listProductGroupByArgs['orderBy'] }
        : { orderBy?: listProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, listProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetListProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the listProduct model
   */
  readonly fields: listProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for listProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__listProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends categoryProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoryProductDefaultArgs<ExtArgs>>): Prisma__categoryProductClient<$Result.GetResult<Prisma.$categoryProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    url_image_product<T extends listProduct$url_image_productArgs<ExtArgs> = {}>(args?: Subset<T, listProduct$url_image_productArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$imageProductPayload<ExtArgs>, T, "findMany"> | Null>
    spec_product<T extends listProduct$spec_productArgs<ExtArgs> = {}>(args?: Subset<T, listProduct$spec_productArgs<ExtArgs>>): Prisma__specProductClient<$Result.GetResult<Prisma.$specProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    cartItem<T extends listProduct$cartItemArgs<ExtArgs> = {}>(args?: Subset<T, listProduct$cartItemArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartItemPayload<ExtArgs>, T, "findMany"> | Null>
    imageProductUtama<T extends listProduct$imageProductUtamaArgs<ExtArgs> = {}>(args?: Subset<T, listProduct$imageProductUtamaArgs<ExtArgs>>): Prisma__imageProductUtamaClient<$Result.GetResult<Prisma.$imageProductUtamaPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the listProduct model
   */ 
  interface listProductFieldRefs {
    readonly id: FieldRef<"listProduct", 'Int'>
    readonly start: FieldRef<"listProduct", 'DateTime'>
    readonly end: FieldRef<"listProduct", 'DateTime'>
    readonly slugProduct: FieldRef<"listProduct", 'String'>
    readonly saveDraf: FieldRef<"listProduct", 'Boolean'>
    readonly descProduct: FieldRef<"listProduct", 'String'>
    readonly productName: FieldRef<"listProduct", 'String'>
    readonly stockProduct: FieldRef<"listProduct", 'Int'>
    readonly descMetaProduct: FieldRef<"listProduct", 'String'>
    readonly viewProduct: FieldRef<"listProduct", 'Int'>
    readonly subKategoriProduct: FieldRef<"listProduct", 'String'>
    readonly productType: FieldRef<"listProduct", 'String'>
    readonly tagProduct: FieldRef<"listProduct", 'Json'>
    readonly productPrice: FieldRef<"listProduct", 'BigInt'>
    readonly productDiscount: FieldRef<"listProduct", 'Int'>
    readonly productPriceFinal: FieldRef<"listProduct", 'BigInt'>
    readonly urlYoutube: FieldRef<"listProduct", 'String'>
    readonly productKategori: FieldRef<"listProduct", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * listProduct findUnique
   */
  export type listProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listProduct
     */
    select?: listProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listProductInclude<ExtArgs> | null
    /**
     * Filter, which listProduct to fetch.
     */
    where: listProductWhereUniqueInput
  }

  /**
   * listProduct findUniqueOrThrow
   */
  export type listProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listProduct
     */
    select?: listProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listProductInclude<ExtArgs> | null
    /**
     * Filter, which listProduct to fetch.
     */
    where: listProductWhereUniqueInput
  }

  /**
   * listProduct findFirst
   */
  export type listProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listProduct
     */
    select?: listProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listProductInclude<ExtArgs> | null
    /**
     * Filter, which listProduct to fetch.
     */
    where?: listProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of listProducts to fetch.
     */
    orderBy?: listProductOrderByWithRelationInput | listProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for listProducts.
     */
    cursor?: listProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` listProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` listProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of listProducts.
     */
    distinct?: ListProductScalarFieldEnum | ListProductScalarFieldEnum[]
  }

  /**
   * listProduct findFirstOrThrow
   */
  export type listProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listProduct
     */
    select?: listProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listProductInclude<ExtArgs> | null
    /**
     * Filter, which listProduct to fetch.
     */
    where?: listProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of listProducts to fetch.
     */
    orderBy?: listProductOrderByWithRelationInput | listProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for listProducts.
     */
    cursor?: listProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` listProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` listProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of listProducts.
     */
    distinct?: ListProductScalarFieldEnum | ListProductScalarFieldEnum[]
  }

  /**
   * listProduct findMany
   */
  export type listProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listProduct
     */
    select?: listProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listProductInclude<ExtArgs> | null
    /**
     * Filter, which listProducts to fetch.
     */
    where?: listProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of listProducts to fetch.
     */
    orderBy?: listProductOrderByWithRelationInput | listProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing listProducts.
     */
    cursor?: listProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` listProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` listProducts.
     */
    skip?: number
    distinct?: ListProductScalarFieldEnum | ListProductScalarFieldEnum[]
  }

  /**
   * listProduct create
   */
  export type listProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listProduct
     */
    select?: listProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listProductInclude<ExtArgs> | null
    /**
     * The data needed to create a listProduct.
     */
    data: XOR<listProductCreateInput, listProductUncheckedCreateInput>
  }

  /**
   * listProduct createMany
   */
  export type listProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many listProducts.
     */
    data: listProductCreateManyInput | listProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * listProduct createManyAndReturn
   */
  export type listProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listProduct
     */
    select?: listProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many listProducts.
     */
    data: listProductCreateManyInput | listProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * listProduct update
   */
  export type listProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listProduct
     */
    select?: listProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listProductInclude<ExtArgs> | null
    /**
     * The data needed to update a listProduct.
     */
    data: XOR<listProductUpdateInput, listProductUncheckedUpdateInput>
    /**
     * Choose, which listProduct to update.
     */
    where: listProductWhereUniqueInput
  }

  /**
   * listProduct updateMany
   */
  export type listProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update listProducts.
     */
    data: XOR<listProductUpdateManyMutationInput, listProductUncheckedUpdateManyInput>
    /**
     * Filter which listProducts to update
     */
    where?: listProductWhereInput
  }

  /**
   * listProduct upsert
   */
  export type listProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listProduct
     */
    select?: listProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listProductInclude<ExtArgs> | null
    /**
     * The filter to search for the listProduct to update in case it exists.
     */
    where: listProductWhereUniqueInput
    /**
     * In case the listProduct found by the `where` argument doesn't exist, create a new listProduct with this data.
     */
    create: XOR<listProductCreateInput, listProductUncheckedCreateInput>
    /**
     * In case the listProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<listProductUpdateInput, listProductUncheckedUpdateInput>
  }

  /**
   * listProduct delete
   */
  export type listProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listProduct
     */
    select?: listProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listProductInclude<ExtArgs> | null
    /**
     * Filter which listProduct to delete.
     */
    where: listProductWhereUniqueInput
  }

  /**
   * listProduct deleteMany
   */
  export type listProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which listProducts to delete
     */
    where?: listProductWhereInput
  }

  /**
   * listProduct.url_image_product
   */
  export type listProduct$url_image_productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imageProduct
     */
    select?: imageProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageProductInclude<ExtArgs> | null
    where?: imageProductWhereInput
    orderBy?: imageProductOrderByWithRelationInput | imageProductOrderByWithRelationInput[]
    cursor?: imageProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageProductScalarFieldEnum | ImageProductScalarFieldEnum[]
  }

  /**
   * listProduct.spec_product
   */
  export type listProduct$spec_productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specProduct
     */
    select?: specProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specProductInclude<ExtArgs> | null
    where?: specProductWhereInput
  }

  /**
   * listProduct.cartItem
   */
  export type listProduct$cartItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartItem
     */
    select?: cartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartItemInclude<ExtArgs> | null
    where?: cartItemWhereInput
    orderBy?: cartItemOrderByWithRelationInput | cartItemOrderByWithRelationInput[]
    cursor?: cartItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * listProduct.imageProductUtama
   */
  export type listProduct$imageProductUtamaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imageProductUtama
     */
    select?: imageProductUtamaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageProductUtamaInclude<ExtArgs> | null
    where?: imageProductUtamaWhereInput
  }

  /**
   * listProduct without action
   */
  export type listProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the listProduct
     */
    select?: listProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: listProductInclude<ExtArgs> | null
  }


  /**
   * Model specProduct
   */

  export type AggregateSpecProduct = {
    _count: SpecProductCountAggregateOutputType | null
    _avg: SpecProductAvgAggregateOutputType | null
    _sum: SpecProductSumAggregateOutputType | null
    _min: SpecProductMinAggregateOutputType | null
    _max: SpecProductMaxAggregateOutputType | null
  }

  export type SpecProductAvgAggregateOutputType = {
    id: number | null
    weight_spec: number | null
    IdProduct: number | null
  }

  export type SpecProductSumAggregateOutputType = {
    id: number | null
    weight_spec: number | null
    IdProduct: number | null
  }

  export type SpecProductMinAggregateOutputType = {
    id: number | null
    start: Date | null
    end: Date | null
    phase_spec: string | null
    frequency_spec: string | null
    gensetPower_spec: string | null
    ratedPower_spec: string | null
    maxPower_spec: string | null
    ratedACVoltage_spec: string | null
    starting_spec: string | null
    fuelConsumption_spec: string | null
    weight_spec: number | null
    dimension_spec: string | null
    IdProduct: number | null
  }

  export type SpecProductMaxAggregateOutputType = {
    id: number | null
    start: Date | null
    end: Date | null
    phase_spec: string | null
    frequency_spec: string | null
    gensetPower_spec: string | null
    ratedPower_spec: string | null
    maxPower_spec: string | null
    ratedACVoltage_spec: string | null
    starting_spec: string | null
    fuelConsumption_spec: string | null
    weight_spec: number | null
    dimension_spec: string | null
    IdProduct: number | null
  }

  export type SpecProductCountAggregateOutputType = {
    id: number
    start: number
    end: number
    phase_spec: number
    frequency_spec: number
    gensetPower_spec: number
    ratedPower_spec: number
    maxPower_spec: number
    ratedACVoltage_spec: number
    starting_spec: number
    fuelConsumption_spec: number
    weight_spec: number
    dimension_spec: number
    IdProduct: number
    _all: number
  }


  export type SpecProductAvgAggregateInputType = {
    id?: true
    weight_spec?: true
    IdProduct?: true
  }

  export type SpecProductSumAggregateInputType = {
    id?: true
    weight_spec?: true
    IdProduct?: true
  }

  export type SpecProductMinAggregateInputType = {
    id?: true
    start?: true
    end?: true
    phase_spec?: true
    frequency_spec?: true
    gensetPower_spec?: true
    ratedPower_spec?: true
    maxPower_spec?: true
    ratedACVoltage_spec?: true
    starting_spec?: true
    fuelConsumption_spec?: true
    weight_spec?: true
    dimension_spec?: true
    IdProduct?: true
  }

  export type SpecProductMaxAggregateInputType = {
    id?: true
    start?: true
    end?: true
    phase_spec?: true
    frequency_spec?: true
    gensetPower_spec?: true
    ratedPower_spec?: true
    maxPower_spec?: true
    ratedACVoltage_spec?: true
    starting_spec?: true
    fuelConsumption_spec?: true
    weight_spec?: true
    dimension_spec?: true
    IdProduct?: true
  }

  export type SpecProductCountAggregateInputType = {
    id?: true
    start?: true
    end?: true
    phase_spec?: true
    frequency_spec?: true
    gensetPower_spec?: true
    ratedPower_spec?: true
    maxPower_spec?: true
    ratedACVoltage_spec?: true
    starting_spec?: true
    fuelConsumption_spec?: true
    weight_spec?: true
    dimension_spec?: true
    IdProduct?: true
    _all?: true
  }

  export type SpecProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which specProduct to aggregate.
     */
    where?: specProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of specProducts to fetch.
     */
    orderBy?: specProductOrderByWithRelationInput | specProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: specProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` specProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` specProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned specProducts
    **/
    _count?: true | SpecProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SpecProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SpecProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SpecProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SpecProductMaxAggregateInputType
  }

  export type GetSpecProductAggregateType<T extends SpecProductAggregateArgs> = {
        [P in keyof T & keyof AggregateSpecProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpecProduct[P]>
      : GetScalarType<T[P], AggregateSpecProduct[P]>
  }




  export type specProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: specProductWhereInput
    orderBy?: specProductOrderByWithAggregationInput | specProductOrderByWithAggregationInput[]
    by: SpecProductScalarFieldEnum[] | SpecProductScalarFieldEnum
    having?: specProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SpecProductCountAggregateInputType | true
    _avg?: SpecProductAvgAggregateInputType
    _sum?: SpecProductSumAggregateInputType
    _min?: SpecProductMinAggregateInputType
    _max?: SpecProductMaxAggregateInputType
  }

  export type SpecProductGroupByOutputType = {
    id: number
    start: Date
    end: Date
    phase_spec: string | null
    frequency_spec: string | null
    gensetPower_spec: string | null
    ratedPower_spec: string | null
    maxPower_spec: string | null
    ratedACVoltage_spec: string | null
    starting_spec: string | null
    fuelConsumption_spec: string | null
    weight_spec: number | null
    dimension_spec: string | null
    IdProduct: number
    _count: SpecProductCountAggregateOutputType | null
    _avg: SpecProductAvgAggregateOutputType | null
    _sum: SpecProductSumAggregateOutputType | null
    _min: SpecProductMinAggregateOutputType | null
    _max: SpecProductMaxAggregateOutputType | null
  }

  type GetSpecProductGroupByPayload<T extends specProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SpecProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SpecProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SpecProductGroupByOutputType[P]>
            : GetScalarType<T[P], SpecProductGroupByOutputType[P]>
        }
      >
    >


  export type specProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    end?: boolean
    phase_spec?: boolean
    frequency_spec?: boolean
    gensetPower_spec?: boolean
    ratedPower_spec?: boolean
    maxPower_spec?: boolean
    ratedACVoltage_spec?: boolean
    starting_spec?: boolean
    fuelConsumption_spec?: boolean
    weight_spec?: boolean
    dimension_spec?: boolean
    IdProduct?: boolean
    user?: boolean | listProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["specProduct"]>

  export type specProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    end?: boolean
    phase_spec?: boolean
    frequency_spec?: boolean
    gensetPower_spec?: boolean
    ratedPower_spec?: boolean
    maxPower_spec?: boolean
    ratedACVoltage_spec?: boolean
    starting_spec?: boolean
    fuelConsumption_spec?: boolean
    weight_spec?: boolean
    dimension_spec?: boolean
    IdProduct?: boolean
    user?: boolean | listProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["specProduct"]>

  export type specProductSelectScalar = {
    id?: boolean
    start?: boolean
    end?: boolean
    phase_spec?: boolean
    frequency_spec?: boolean
    gensetPower_spec?: boolean
    ratedPower_spec?: boolean
    maxPower_spec?: boolean
    ratedACVoltage_spec?: boolean
    starting_spec?: boolean
    fuelConsumption_spec?: boolean
    weight_spec?: boolean
    dimension_spec?: boolean
    IdProduct?: boolean
  }

  export type specProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | listProductDefaultArgs<ExtArgs>
  }
  export type specProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | listProductDefaultArgs<ExtArgs>
  }

  export type $specProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "specProduct"
    objects: {
      user: Prisma.$listProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      start: Date
      end: Date
      phase_spec: string | null
      frequency_spec: string | null
      gensetPower_spec: string | null
      ratedPower_spec: string | null
      maxPower_spec: string | null
      ratedACVoltage_spec: string | null
      starting_spec: string | null
      fuelConsumption_spec: string | null
      weight_spec: number | null
      dimension_spec: string | null
      IdProduct: number
    }, ExtArgs["result"]["specProduct"]>
    composites: {}
  }

  type specProductGetPayload<S extends boolean | null | undefined | specProductDefaultArgs> = $Result.GetResult<Prisma.$specProductPayload, S>

  type specProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<specProductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SpecProductCountAggregateInputType | true
    }

  export interface specProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['specProduct'], meta: { name: 'specProduct' } }
    /**
     * Find zero or one SpecProduct that matches the filter.
     * @param {specProductFindUniqueArgs} args - Arguments to find a SpecProduct
     * @example
     * // Get one SpecProduct
     * const specProduct = await prisma.specProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends specProductFindUniqueArgs>(args: SelectSubset<T, specProductFindUniqueArgs<ExtArgs>>): Prisma__specProductClient<$Result.GetResult<Prisma.$specProductPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SpecProduct that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {specProductFindUniqueOrThrowArgs} args - Arguments to find a SpecProduct
     * @example
     * // Get one SpecProduct
     * const specProduct = await prisma.specProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends specProductFindUniqueOrThrowArgs>(args: SelectSubset<T, specProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__specProductClient<$Result.GetResult<Prisma.$specProductPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SpecProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {specProductFindFirstArgs} args - Arguments to find a SpecProduct
     * @example
     * // Get one SpecProduct
     * const specProduct = await prisma.specProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends specProductFindFirstArgs>(args?: SelectSubset<T, specProductFindFirstArgs<ExtArgs>>): Prisma__specProductClient<$Result.GetResult<Prisma.$specProductPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SpecProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {specProductFindFirstOrThrowArgs} args - Arguments to find a SpecProduct
     * @example
     * // Get one SpecProduct
     * const specProduct = await prisma.specProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends specProductFindFirstOrThrowArgs>(args?: SelectSubset<T, specProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__specProductClient<$Result.GetResult<Prisma.$specProductPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SpecProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {specProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SpecProducts
     * const specProducts = await prisma.specProduct.findMany()
     * 
     * // Get first 10 SpecProducts
     * const specProducts = await prisma.specProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const specProductWithIdOnly = await prisma.specProduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends specProductFindManyArgs>(args?: SelectSubset<T, specProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$specProductPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SpecProduct.
     * @param {specProductCreateArgs} args - Arguments to create a SpecProduct.
     * @example
     * // Create one SpecProduct
     * const SpecProduct = await prisma.specProduct.create({
     *   data: {
     *     // ... data to create a SpecProduct
     *   }
     * })
     * 
     */
    create<T extends specProductCreateArgs>(args: SelectSubset<T, specProductCreateArgs<ExtArgs>>): Prisma__specProductClient<$Result.GetResult<Prisma.$specProductPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SpecProducts.
     * @param {specProductCreateManyArgs} args - Arguments to create many SpecProducts.
     * @example
     * // Create many SpecProducts
     * const specProduct = await prisma.specProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends specProductCreateManyArgs>(args?: SelectSubset<T, specProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SpecProducts and returns the data saved in the database.
     * @param {specProductCreateManyAndReturnArgs} args - Arguments to create many SpecProducts.
     * @example
     * // Create many SpecProducts
     * const specProduct = await prisma.specProduct.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SpecProducts and only return the `id`
     * const specProductWithIdOnly = await prisma.specProduct.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends specProductCreateManyAndReturnArgs>(args?: SelectSubset<T, specProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$specProductPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SpecProduct.
     * @param {specProductDeleteArgs} args - Arguments to delete one SpecProduct.
     * @example
     * // Delete one SpecProduct
     * const SpecProduct = await prisma.specProduct.delete({
     *   where: {
     *     // ... filter to delete one SpecProduct
     *   }
     * })
     * 
     */
    delete<T extends specProductDeleteArgs>(args: SelectSubset<T, specProductDeleteArgs<ExtArgs>>): Prisma__specProductClient<$Result.GetResult<Prisma.$specProductPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SpecProduct.
     * @param {specProductUpdateArgs} args - Arguments to update one SpecProduct.
     * @example
     * // Update one SpecProduct
     * const specProduct = await prisma.specProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends specProductUpdateArgs>(args: SelectSubset<T, specProductUpdateArgs<ExtArgs>>): Prisma__specProductClient<$Result.GetResult<Prisma.$specProductPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SpecProducts.
     * @param {specProductDeleteManyArgs} args - Arguments to filter SpecProducts to delete.
     * @example
     * // Delete a few SpecProducts
     * const { count } = await prisma.specProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends specProductDeleteManyArgs>(args?: SelectSubset<T, specProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SpecProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {specProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SpecProducts
     * const specProduct = await prisma.specProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends specProductUpdateManyArgs>(args: SelectSubset<T, specProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SpecProduct.
     * @param {specProductUpsertArgs} args - Arguments to update or create a SpecProduct.
     * @example
     * // Update or create a SpecProduct
     * const specProduct = await prisma.specProduct.upsert({
     *   create: {
     *     // ... data to create a SpecProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SpecProduct we want to update
     *   }
     * })
     */
    upsert<T extends specProductUpsertArgs>(args: SelectSubset<T, specProductUpsertArgs<ExtArgs>>): Prisma__specProductClient<$Result.GetResult<Prisma.$specProductPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SpecProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {specProductCountArgs} args - Arguments to filter SpecProducts to count.
     * @example
     * // Count the number of SpecProducts
     * const count = await prisma.specProduct.count({
     *   where: {
     *     // ... the filter for the SpecProducts we want to count
     *   }
     * })
    **/
    count<T extends specProductCountArgs>(
      args?: Subset<T, specProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SpecProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SpecProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SpecProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SpecProductAggregateArgs>(args: Subset<T, SpecProductAggregateArgs>): Prisma.PrismaPromise<GetSpecProductAggregateType<T>>

    /**
     * Group by SpecProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {specProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends specProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: specProductGroupByArgs['orderBy'] }
        : { orderBy?: specProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, specProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpecProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the specProduct model
   */
  readonly fields: specProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for specProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__specProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends listProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, listProductDefaultArgs<ExtArgs>>): Prisma__listProductClient<$Result.GetResult<Prisma.$listProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the specProduct model
   */ 
  interface specProductFieldRefs {
    readonly id: FieldRef<"specProduct", 'Int'>
    readonly start: FieldRef<"specProduct", 'DateTime'>
    readonly end: FieldRef<"specProduct", 'DateTime'>
    readonly phase_spec: FieldRef<"specProduct", 'String'>
    readonly frequency_spec: FieldRef<"specProduct", 'String'>
    readonly gensetPower_spec: FieldRef<"specProduct", 'String'>
    readonly ratedPower_spec: FieldRef<"specProduct", 'String'>
    readonly maxPower_spec: FieldRef<"specProduct", 'String'>
    readonly ratedACVoltage_spec: FieldRef<"specProduct", 'String'>
    readonly starting_spec: FieldRef<"specProduct", 'String'>
    readonly fuelConsumption_spec: FieldRef<"specProduct", 'String'>
    readonly weight_spec: FieldRef<"specProduct", 'Int'>
    readonly dimension_spec: FieldRef<"specProduct", 'String'>
    readonly IdProduct: FieldRef<"specProduct", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * specProduct findUnique
   */
  export type specProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specProduct
     */
    select?: specProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specProductInclude<ExtArgs> | null
    /**
     * Filter, which specProduct to fetch.
     */
    where: specProductWhereUniqueInput
  }

  /**
   * specProduct findUniqueOrThrow
   */
  export type specProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specProduct
     */
    select?: specProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specProductInclude<ExtArgs> | null
    /**
     * Filter, which specProduct to fetch.
     */
    where: specProductWhereUniqueInput
  }

  /**
   * specProduct findFirst
   */
  export type specProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specProduct
     */
    select?: specProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specProductInclude<ExtArgs> | null
    /**
     * Filter, which specProduct to fetch.
     */
    where?: specProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of specProducts to fetch.
     */
    orderBy?: specProductOrderByWithRelationInput | specProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for specProducts.
     */
    cursor?: specProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` specProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` specProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of specProducts.
     */
    distinct?: SpecProductScalarFieldEnum | SpecProductScalarFieldEnum[]
  }

  /**
   * specProduct findFirstOrThrow
   */
  export type specProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specProduct
     */
    select?: specProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specProductInclude<ExtArgs> | null
    /**
     * Filter, which specProduct to fetch.
     */
    where?: specProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of specProducts to fetch.
     */
    orderBy?: specProductOrderByWithRelationInput | specProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for specProducts.
     */
    cursor?: specProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` specProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` specProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of specProducts.
     */
    distinct?: SpecProductScalarFieldEnum | SpecProductScalarFieldEnum[]
  }

  /**
   * specProduct findMany
   */
  export type specProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specProduct
     */
    select?: specProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specProductInclude<ExtArgs> | null
    /**
     * Filter, which specProducts to fetch.
     */
    where?: specProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of specProducts to fetch.
     */
    orderBy?: specProductOrderByWithRelationInput | specProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing specProducts.
     */
    cursor?: specProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` specProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` specProducts.
     */
    skip?: number
    distinct?: SpecProductScalarFieldEnum | SpecProductScalarFieldEnum[]
  }

  /**
   * specProduct create
   */
  export type specProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specProduct
     */
    select?: specProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specProductInclude<ExtArgs> | null
    /**
     * The data needed to create a specProduct.
     */
    data: XOR<specProductCreateInput, specProductUncheckedCreateInput>
  }

  /**
   * specProduct createMany
   */
  export type specProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many specProducts.
     */
    data: specProductCreateManyInput | specProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * specProduct createManyAndReturn
   */
  export type specProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specProduct
     */
    select?: specProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many specProducts.
     */
    data: specProductCreateManyInput | specProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * specProduct update
   */
  export type specProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specProduct
     */
    select?: specProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specProductInclude<ExtArgs> | null
    /**
     * The data needed to update a specProduct.
     */
    data: XOR<specProductUpdateInput, specProductUncheckedUpdateInput>
    /**
     * Choose, which specProduct to update.
     */
    where: specProductWhereUniqueInput
  }

  /**
   * specProduct updateMany
   */
  export type specProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update specProducts.
     */
    data: XOR<specProductUpdateManyMutationInput, specProductUncheckedUpdateManyInput>
    /**
     * Filter which specProducts to update
     */
    where?: specProductWhereInput
  }

  /**
   * specProduct upsert
   */
  export type specProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specProduct
     */
    select?: specProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specProductInclude<ExtArgs> | null
    /**
     * The filter to search for the specProduct to update in case it exists.
     */
    where: specProductWhereUniqueInput
    /**
     * In case the specProduct found by the `where` argument doesn't exist, create a new specProduct with this data.
     */
    create: XOR<specProductCreateInput, specProductUncheckedCreateInput>
    /**
     * In case the specProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<specProductUpdateInput, specProductUncheckedUpdateInput>
  }

  /**
   * specProduct delete
   */
  export type specProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specProduct
     */
    select?: specProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specProductInclude<ExtArgs> | null
    /**
     * Filter which specProduct to delete.
     */
    where: specProductWhereUniqueInput
  }

  /**
   * specProduct deleteMany
   */
  export type specProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which specProducts to delete
     */
    where?: specProductWhereInput
  }

  /**
   * specProduct without action
   */
  export type specProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the specProduct
     */
    select?: specProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: specProductInclude<ExtArgs> | null
  }


  /**
   * Model imageProductUtama
   */

  export type AggregateImageProductUtama = {
    _count: ImageProductUtamaCountAggregateOutputType | null
    _avg: ImageProductUtamaAvgAggregateOutputType | null
    _sum: ImageProductUtamaSumAggregateOutputType | null
    _min: ImageProductUtamaMinAggregateOutputType | null
    _max: ImageProductUtamaMaxAggregateOutputType | null
  }

  export type ImageProductUtamaAvgAggregateOutputType = {
    id: number | null
    version: number | null
    width: number | null
    height: number | null
    pages: number | null
    bytes: number | null
    IdProduct: number | null
  }

  export type ImageProductUtamaSumAggregateOutputType = {
    id: number | null
    version: number | null
    width: number | null
    height: number | null
    pages: number | null
    bytes: number | null
    IdProduct: number | null
  }

  export type ImageProductUtamaMinAggregateOutputType = {
    id: number | null
    start: Date | null
    end: Date | null
    asset_id: string | null
    public_id: string | null
    version: number | null
    version_id: string | null
    signature: string | null
    width: number | null
    height: number | null
    format: string | null
    resource_type: string | null
    created_at: Date | null
    pages: number | null
    bytes: number | null
    type: string | null
    etag: string | null
    placeholder: boolean | null
    url: string | null
    secure_url: string | null
    asset_folder: string | null
    display_name: string | null
    original_filename: string | null
    api_key: string | null
    IdProduct: number | null
  }

  export type ImageProductUtamaMaxAggregateOutputType = {
    id: number | null
    start: Date | null
    end: Date | null
    asset_id: string | null
    public_id: string | null
    version: number | null
    version_id: string | null
    signature: string | null
    width: number | null
    height: number | null
    format: string | null
    resource_type: string | null
    created_at: Date | null
    pages: number | null
    bytes: number | null
    type: string | null
    etag: string | null
    placeholder: boolean | null
    url: string | null
    secure_url: string | null
    asset_folder: string | null
    display_name: string | null
    original_filename: string | null
    api_key: string | null
    IdProduct: number | null
  }

  export type ImageProductUtamaCountAggregateOutputType = {
    id: number
    start: number
    end: number
    asset_id: number
    public_id: number
    version: number
    version_id: number
    signature: number
    width: number
    height: number
    format: number
    resource_type: number
    created_at: number
    pages: number
    tags: number
    bytes: number
    type: number
    etag: number
    placeholder: number
    url: number
    secure_url: number
    asset_folder: number
    display_name: number
    original_filename: number
    api_key: number
    IdProduct: number
    _all: number
  }


  export type ImageProductUtamaAvgAggregateInputType = {
    id?: true
    version?: true
    width?: true
    height?: true
    pages?: true
    bytes?: true
    IdProduct?: true
  }

  export type ImageProductUtamaSumAggregateInputType = {
    id?: true
    version?: true
    width?: true
    height?: true
    pages?: true
    bytes?: true
    IdProduct?: true
  }

  export type ImageProductUtamaMinAggregateInputType = {
    id?: true
    start?: true
    end?: true
    asset_id?: true
    public_id?: true
    version?: true
    version_id?: true
    signature?: true
    width?: true
    height?: true
    format?: true
    resource_type?: true
    created_at?: true
    pages?: true
    bytes?: true
    type?: true
    etag?: true
    placeholder?: true
    url?: true
    secure_url?: true
    asset_folder?: true
    display_name?: true
    original_filename?: true
    api_key?: true
    IdProduct?: true
  }

  export type ImageProductUtamaMaxAggregateInputType = {
    id?: true
    start?: true
    end?: true
    asset_id?: true
    public_id?: true
    version?: true
    version_id?: true
    signature?: true
    width?: true
    height?: true
    format?: true
    resource_type?: true
    created_at?: true
    pages?: true
    bytes?: true
    type?: true
    etag?: true
    placeholder?: true
    url?: true
    secure_url?: true
    asset_folder?: true
    display_name?: true
    original_filename?: true
    api_key?: true
    IdProduct?: true
  }

  export type ImageProductUtamaCountAggregateInputType = {
    id?: true
    start?: true
    end?: true
    asset_id?: true
    public_id?: true
    version?: true
    version_id?: true
    signature?: true
    width?: true
    height?: true
    format?: true
    resource_type?: true
    created_at?: true
    pages?: true
    tags?: true
    bytes?: true
    type?: true
    etag?: true
    placeholder?: true
    url?: true
    secure_url?: true
    asset_folder?: true
    display_name?: true
    original_filename?: true
    api_key?: true
    IdProduct?: true
    _all?: true
  }

  export type ImageProductUtamaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which imageProductUtama to aggregate.
     */
    where?: imageProductUtamaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of imageProductUtamas to fetch.
     */
    orderBy?: imageProductUtamaOrderByWithRelationInput | imageProductUtamaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: imageProductUtamaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` imageProductUtamas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` imageProductUtamas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned imageProductUtamas
    **/
    _count?: true | ImageProductUtamaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageProductUtamaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageProductUtamaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageProductUtamaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageProductUtamaMaxAggregateInputType
  }

  export type GetImageProductUtamaAggregateType<T extends ImageProductUtamaAggregateArgs> = {
        [P in keyof T & keyof AggregateImageProductUtama]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImageProductUtama[P]>
      : GetScalarType<T[P], AggregateImageProductUtama[P]>
  }




  export type imageProductUtamaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: imageProductUtamaWhereInput
    orderBy?: imageProductUtamaOrderByWithAggregationInput | imageProductUtamaOrderByWithAggregationInput[]
    by: ImageProductUtamaScalarFieldEnum[] | ImageProductUtamaScalarFieldEnum
    having?: imageProductUtamaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageProductUtamaCountAggregateInputType | true
    _avg?: ImageProductUtamaAvgAggregateInputType
    _sum?: ImageProductUtamaSumAggregateInputType
    _min?: ImageProductUtamaMinAggregateInputType
    _max?: ImageProductUtamaMaxAggregateInputType
  }

  export type ImageProductUtamaGroupByOutputType = {
    id: number
    start: Date
    end: Date
    asset_id: string | null
    public_id: string | null
    version: number | null
    version_id: string | null
    signature: string | null
    width: number | null
    height: number | null
    format: string | null
    resource_type: string | null
    created_at: Date
    pages: number | null
    tags: JsonValue | null
    bytes: number | null
    type: string | null
    etag: string | null
    placeholder: boolean | null
    url: string | null
    secure_url: string | null
    asset_folder: string | null
    display_name: string | null
    original_filename: string | null
    api_key: string | null
    IdProduct: number
    _count: ImageProductUtamaCountAggregateOutputType | null
    _avg: ImageProductUtamaAvgAggregateOutputType | null
    _sum: ImageProductUtamaSumAggregateOutputType | null
    _min: ImageProductUtamaMinAggregateOutputType | null
    _max: ImageProductUtamaMaxAggregateOutputType | null
  }

  type GetImageProductUtamaGroupByPayload<T extends imageProductUtamaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageProductUtamaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageProductUtamaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageProductUtamaGroupByOutputType[P]>
            : GetScalarType<T[P], ImageProductUtamaGroupByOutputType[P]>
        }
      >
    >


  export type imageProductUtamaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    end?: boolean
    asset_id?: boolean
    public_id?: boolean
    version?: boolean
    version_id?: boolean
    signature?: boolean
    width?: boolean
    height?: boolean
    format?: boolean
    resource_type?: boolean
    created_at?: boolean
    pages?: boolean
    tags?: boolean
    bytes?: boolean
    type?: boolean
    etag?: boolean
    placeholder?: boolean
    url?: boolean
    secure_url?: boolean
    asset_folder?: boolean
    display_name?: boolean
    original_filename?: boolean
    api_key?: boolean
    IdProduct?: boolean
    user?: boolean | listProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imageProductUtama"]>

  export type imageProductUtamaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    end?: boolean
    asset_id?: boolean
    public_id?: boolean
    version?: boolean
    version_id?: boolean
    signature?: boolean
    width?: boolean
    height?: boolean
    format?: boolean
    resource_type?: boolean
    created_at?: boolean
    pages?: boolean
    tags?: boolean
    bytes?: boolean
    type?: boolean
    etag?: boolean
    placeholder?: boolean
    url?: boolean
    secure_url?: boolean
    asset_folder?: boolean
    display_name?: boolean
    original_filename?: boolean
    api_key?: boolean
    IdProduct?: boolean
    user?: boolean | listProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imageProductUtama"]>

  export type imageProductUtamaSelectScalar = {
    id?: boolean
    start?: boolean
    end?: boolean
    asset_id?: boolean
    public_id?: boolean
    version?: boolean
    version_id?: boolean
    signature?: boolean
    width?: boolean
    height?: boolean
    format?: boolean
    resource_type?: boolean
    created_at?: boolean
    pages?: boolean
    tags?: boolean
    bytes?: boolean
    type?: boolean
    etag?: boolean
    placeholder?: boolean
    url?: boolean
    secure_url?: boolean
    asset_folder?: boolean
    display_name?: boolean
    original_filename?: boolean
    api_key?: boolean
    IdProduct?: boolean
  }

  export type imageProductUtamaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | listProductDefaultArgs<ExtArgs>
  }
  export type imageProductUtamaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | listProductDefaultArgs<ExtArgs>
  }

  export type $imageProductUtamaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "imageProductUtama"
    objects: {
      user: Prisma.$listProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      start: Date
      end: Date
      asset_id: string | null
      public_id: string | null
      version: number | null
      version_id: string | null
      signature: string | null
      width: number | null
      height: number | null
      format: string | null
      resource_type: string | null
      created_at: Date
      pages: number | null
      tags: Prisma.JsonValue | null
      bytes: number | null
      type: string | null
      etag: string | null
      placeholder: boolean | null
      url: string | null
      secure_url: string | null
      asset_folder: string | null
      display_name: string | null
      original_filename: string | null
      api_key: string | null
      IdProduct: number
    }, ExtArgs["result"]["imageProductUtama"]>
    composites: {}
  }

  type imageProductUtamaGetPayload<S extends boolean | null | undefined | imageProductUtamaDefaultArgs> = $Result.GetResult<Prisma.$imageProductUtamaPayload, S>

  type imageProductUtamaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<imageProductUtamaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ImageProductUtamaCountAggregateInputType | true
    }

  export interface imageProductUtamaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['imageProductUtama'], meta: { name: 'imageProductUtama' } }
    /**
     * Find zero or one ImageProductUtama that matches the filter.
     * @param {imageProductUtamaFindUniqueArgs} args - Arguments to find a ImageProductUtama
     * @example
     * // Get one ImageProductUtama
     * const imageProductUtama = await prisma.imageProductUtama.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends imageProductUtamaFindUniqueArgs>(args: SelectSubset<T, imageProductUtamaFindUniqueArgs<ExtArgs>>): Prisma__imageProductUtamaClient<$Result.GetResult<Prisma.$imageProductUtamaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ImageProductUtama that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {imageProductUtamaFindUniqueOrThrowArgs} args - Arguments to find a ImageProductUtama
     * @example
     * // Get one ImageProductUtama
     * const imageProductUtama = await prisma.imageProductUtama.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends imageProductUtamaFindUniqueOrThrowArgs>(args: SelectSubset<T, imageProductUtamaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__imageProductUtamaClient<$Result.GetResult<Prisma.$imageProductUtamaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ImageProductUtama that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imageProductUtamaFindFirstArgs} args - Arguments to find a ImageProductUtama
     * @example
     * // Get one ImageProductUtama
     * const imageProductUtama = await prisma.imageProductUtama.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends imageProductUtamaFindFirstArgs>(args?: SelectSubset<T, imageProductUtamaFindFirstArgs<ExtArgs>>): Prisma__imageProductUtamaClient<$Result.GetResult<Prisma.$imageProductUtamaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ImageProductUtama that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imageProductUtamaFindFirstOrThrowArgs} args - Arguments to find a ImageProductUtama
     * @example
     * // Get one ImageProductUtama
     * const imageProductUtama = await prisma.imageProductUtama.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends imageProductUtamaFindFirstOrThrowArgs>(args?: SelectSubset<T, imageProductUtamaFindFirstOrThrowArgs<ExtArgs>>): Prisma__imageProductUtamaClient<$Result.GetResult<Prisma.$imageProductUtamaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ImageProductUtamas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imageProductUtamaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ImageProductUtamas
     * const imageProductUtamas = await prisma.imageProductUtama.findMany()
     * 
     * // Get first 10 ImageProductUtamas
     * const imageProductUtamas = await prisma.imageProductUtama.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageProductUtamaWithIdOnly = await prisma.imageProductUtama.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends imageProductUtamaFindManyArgs>(args?: SelectSubset<T, imageProductUtamaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$imageProductUtamaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ImageProductUtama.
     * @param {imageProductUtamaCreateArgs} args - Arguments to create a ImageProductUtama.
     * @example
     * // Create one ImageProductUtama
     * const ImageProductUtama = await prisma.imageProductUtama.create({
     *   data: {
     *     // ... data to create a ImageProductUtama
     *   }
     * })
     * 
     */
    create<T extends imageProductUtamaCreateArgs>(args: SelectSubset<T, imageProductUtamaCreateArgs<ExtArgs>>): Prisma__imageProductUtamaClient<$Result.GetResult<Prisma.$imageProductUtamaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ImageProductUtamas.
     * @param {imageProductUtamaCreateManyArgs} args - Arguments to create many ImageProductUtamas.
     * @example
     * // Create many ImageProductUtamas
     * const imageProductUtama = await prisma.imageProductUtama.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends imageProductUtamaCreateManyArgs>(args?: SelectSubset<T, imageProductUtamaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ImageProductUtamas and returns the data saved in the database.
     * @param {imageProductUtamaCreateManyAndReturnArgs} args - Arguments to create many ImageProductUtamas.
     * @example
     * // Create many ImageProductUtamas
     * const imageProductUtama = await prisma.imageProductUtama.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ImageProductUtamas and only return the `id`
     * const imageProductUtamaWithIdOnly = await prisma.imageProductUtama.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends imageProductUtamaCreateManyAndReturnArgs>(args?: SelectSubset<T, imageProductUtamaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$imageProductUtamaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ImageProductUtama.
     * @param {imageProductUtamaDeleteArgs} args - Arguments to delete one ImageProductUtama.
     * @example
     * // Delete one ImageProductUtama
     * const ImageProductUtama = await prisma.imageProductUtama.delete({
     *   where: {
     *     // ... filter to delete one ImageProductUtama
     *   }
     * })
     * 
     */
    delete<T extends imageProductUtamaDeleteArgs>(args: SelectSubset<T, imageProductUtamaDeleteArgs<ExtArgs>>): Prisma__imageProductUtamaClient<$Result.GetResult<Prisma.$imageProductUtamaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ImageProductUtama.
     * @param {imageProductUtamaUpdateArgs} args - Arguments to update one ImageProductUtama.
     * @example
     * // Update one ImageProductUtama
     * const imageProductUtama = await prisma.imageProductUtama.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends imageProductUtamaUpdateArgs>(args: SelectSubset<T, imageProductUtamaUpdateArgs<ExtArgs>>): Prisma__imageProductUtamaClient<$Result.GetResult<Prisma.$imageProductUtamaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ImageProductUtamas.
     * @param {imageProductUtamaDeleteManyArgs} args - Arguments to filter ImageProductUtamas to delete.
     * @example
     * // Delete a few ImageProductUtamas
     * const { count } = await prisma.imageProductUtama.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends imageProductUtamaDeleteManyArgs>(args?: SelectSubset<T, imageProductUtamaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImageProductUtamas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imageProductUtamaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ImageProductUtamas
     * const imageProductUtama = await prisma.imageProductUtama.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends imageProductUtamaUpdateManyArgs>(args: SelectSubset<T, imageProductUtamaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ImageProductUtama.
     * @param {imageProductUtamaUpsertArgs} args - Arguments to update or create a ImageProductUtama.
     * @example
     * // Update or create a ImageProductUtama
     * const imageProductUtama = await prisma.imageProductUtama.upsert({
     *   create: {
     *     // ... data to create a ImageProductUtama
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ImageProductUtama we want to update
     *   }
     * })
     */
    upsert<T extends imageProductUtamaUpsertArgs>(args: SelectSubset<T, imageProductUtamaUpsertArgs<ExtArgs>>): Prisma__imageProductUtamaClient<$Result.GetResult<Prisma.$imageProductUtamaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ImageProductUtamas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imageProductUtamaCountArgs} args - Arguments to filter ImageProductUtamas to count.
     * @example
     * // Count the number of ImageProductUtamas
     * const count = await prisma.imageProductUtama.count({
     *   where: {
     *     // ... the filter for the ImageProductUtamas we want to count
     *   }
     * })
    **/
    count<T extends imageProductUtamaCountArgs>(
      args?: Subset<T, imageProductUtamaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageProductUtamaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ImageProductUtama.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageProductUtamaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImageProductUtamaAggregateArgs>(args: Subset<T, ImageProductUtamaAggregateArgs>): Prisma.PrismaPromise<GetImageProductUtamaAggregateType<T>>

    /**
     * Group by ImageProductUtama.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imageProductUtamaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends imageProductUtamaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: imageProductUtamaGroupByArgs['orderBy'] }
        : { orderBy?: imageProductUtamaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, imageProductUtamaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageProductUtamaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the imageProductUtama model
   */
  readonly fields: imageProductUtamaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for imageProductUtama.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__imageProductUtamaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends listProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, listProductDefaultArgs<ExtArgs>>): Prisma__listProductClient<$Result.GetResult<Prisma.$listProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the imageProductUtama model
   */ 
  interface imageProductUtamaFieldRefs {
    readonly id: FieldRef<"imageProductUtama", 'Int'>
    readonly start: FieldRef<"imageProductUtama", 'DateTime'>
    readonly end: FieldRef<"imageProductUtama", 'DateTime'>
    readonly asset_id: FieldRef<"imageProductUtama", 'String'>
    readonly public_id: FieldRef<"imageProductUtama", 'String'>
    readonly version: FieldRef<"imageProductUtama", 'Int'>
    readonly version_id: FieldRef<"imageProductUtama", 'String'>
    readonly signature: FieldRef<"imageProductUtama", 'String'>
    readonly width: FieldRef<"imageProductUtama", 'Int'>
    readonly height: FieldRef<"imageProductUtama", 'Int'>
    readonly format: FieldRef<"imageProductUtama", 'String'>
    readonly resource_type: FieldRef<"imageProductUtama", 'String'>
    readonly created_at: FieldRef<"imageProductUtama", 'DateTime'>
    readonly pages: FieldRef<"imageProductUtama", 'Int'>
    readonly tags: FieldRef<"imageProductUtama", 'Json'>
    readonly bytes: FieldRef<"imageProductUtama", 'Int'>
    readonly type: FieldRef<"imageProductUtama", 'String'>
    readonly etag: FieldRef<"imageProductUtama", 'String'>
    readonly placeholder: FieldRef<"imageProductUtama", 'Boolean'>
    readonly url: FieldRef<"imageProductUtama", 'String'>
    readonly secure_url: FieldRef<"imageProductUtama", 'String'>
    readonly asset_folder: FieldRef<"imageProductUtama", 'String'>
    readonly display_name: FieldRef<"imageProductUtama", 'String'>
    readonly original_filename: FieldRef<"imageProductUtama", 'String'>
    readonly api_key: FieldRef<"imageProductUtama", 'String'>
    readonly IdProduct: FieldRef<"imageProductUtama", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * imageProductUtama findUnique
   */
  export type imageProductUtamaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imageProductUtama
     */
    select?: imageProductUtamaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageProductUtamaInclude<ExtArgs> | null
    /**
     * Filter, which imageProductUtama to fetch.
     */
    where: imageProductUtamaWhereUniqueInput
  }

  /**
   * imageProductUtama findUniqueOrThrow
   */
  export type imageProductUtamaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imageProductUtama
     */
    select?: imageProductUtamaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageProductUtamaInclude<ExtArgs> | null
    /**
     * Filter, which imageProductUtama to fetch.
     */
    where: imageProductUtamaWhereUniqueInput
  }

  /**
   * imageProductUtama findFirst
   */
  export type imageProductUtamaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imageProductUtama
     */
    select?: imageProductUtamaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageProductUtamaInclude<ExtArgs> | null
    /**
     * Filter, which imageProductUtama to fetch.
     */
    where?: imageProductUtamaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of imageProductUtamas to fetch.
     */
    orderBy?: imageProductUtamaOrderByWithRelationInput | imageProductUtamaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for imageProductUtamas.
     */
    cursor?: imageProductUtamaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` imageProductUtamas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` imageProductUtamas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of imageProductUtamas.
     */
    distinct?: ImageProductUtamaScalarFieldEnum | ImageProductUtamaScalarFieldEnum[]
  }

  /**
   * imageProductUtama findFirstOrThrow
   */
  export type imageProductUtamaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imageProductUtama
     */
    select?: imageProductUtamaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageProductUtamaInclude<ExtArgs> | null
    /**
     * Filter, which imageProductUtama to fetch.
     */
    where?: imageProductUtamaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of imageProductUtamas to fetch.
     */
    orderBy?: imageProductUtamaOrderByWithRelationInput | imageProductUtamaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for imageProductUtamas.
     */
    cursor?: imageProductUtamaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` imageProductUtamas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` imageProductUtamas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of imageProductUtamas.
     */
    distinct?: ImageProductUtamaScalarFieldEnum | ImageProductUtamaScalarFieldEnum[]
  }

  /**
   * imageProductUtama findMany
   */
  export type imageProductUtamaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imageProductUtama
     */
    select?: imageProductUtamaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageProductUtamaInclude<ExtArgs> | null
    /**
     * Filter, which imageProductUtamas to fetch.
     */
    where?: imageProductUtamaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of imageProductUtamas to fetch.
     */
    orderBy?: imageProductUtamaOrderByWithRelationInput | imageProductUtamaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing imageProductUtamas.
     */
    cursor?: imageProductUtamaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` imageProductUtamas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` imageProductUtamas.
     */
    skip?: number
    distinct?: ImageProductUtamaScalarFieldEnum | ImageProductUtamaScalarFieldEnum[]
  }

  /**
   * imageProductUtama create
   */
  export type imageProductUtamaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imageProductUtama
     */
    select?: imageProductUtamaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageProductUtamaInclude<ExtArgs> | null
    /**
     * The data needed to create a imageProductUtama.
     */
    data: XOR<imageProductUtamaCreateInput, imageProductUtamaUncheckedCreateInput>
  }

  /**
   * imageProductUtama createMany
   */
  export type imageProductUtamaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many imageProductUtamas.
     */
    data: imageProductUtamaCreateManyInput | imageProductUtamaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * imageProductUtama createManyAndReturn
   */
  export type imageProductUtamaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imageProductUtama
     */
    select?: imageProductUtamaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many imageProductUtamas.
     */
    data: imageProductUtamaCreateManyInput | imageProductUtamaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageProductUtamaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * imageProductUtama update
   */
  export type imageProductUtamaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imageProductUtama
     */
    select?: imageProductUtamaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageProductUtamaInclude<ExtArgs> | null
    /**
     * The data needed to update a imageProductUtama.
     */
    data: XOR<imageProductUtamaUpdateInput, imageProductUtamaUncheckedUpdateInput>
    /**
     * Choose, which imageProductUtama to update.
     */
    where: imageProductUtamaWhereUniqueInput
  }

  /**
   * imageProductUtama updateMany
   */
  export type imageProductUtamaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update imageProductUtamas.
     */
    data: XOR<imageProductUtamaUpdateManyMutationInput, imageProductUtamaUncheckedUpdateManyInput>
    /**
     * Filter which imageProductUtamas to update
     */
    where?: imageProductUtamaWhereInput
  }

  /**
   * imageProductUtama upsert
   */
  export type imageProductUtamaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imageProductUtama
     */
    select?: imageProductUtamaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageProductUtamaInclude<ExtArgs> | null
    /**
     * The filter to search for the imageProductUtama to update in case it exists.
     */
    where: imageProductUtamaWhereUniqueInput
    /**
     * In case the imageProductUtama found by the `where` argument doesn't exist, create a new imageProductUtama with this data.
     */
    create: XOR<imageProductUtamaCreateInput, imageProductUtamaUncheckedCreateInput>
    /**
     * In case the imageProductUtama was found with the provided `where` argument, update it with this data.
     */
    update: XOR<imageProductUtamaUpdateInput, imageProductUtamaUncheckedUpdateInput>
  }

  /**
   * imageProductUtama delete
   */
  export type imageProductUtamaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imageProductUtama
     */
    select?: imageProductUtamaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageProductUtamaInclude<ExtArgs> | null
    /**
     * Filter which imageProductUtama to delete.
     */
    where: imageProductUtamaWhereUniqueInput
  }

  /**
   * imageProductUtama deleteMany
   */
  export type imageProductUtamaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which imageProductUtamas to delete
     */
    where?: imageProductUtamaWhereInput
  }

  /**
   * imageProductUtama without action
   */
  export type imageProductUtamaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imageProductUtama
     */
    select?: imageProductUtamaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageProductUtamaInclude<ExtArgs> | null
  }


  /**
   * Model imageProduct
   */

  export type AggregateImageProduct = {
    _count: ImageProductCountAggregateOutputType | null
    _avg: ImageProductAvgAggregateOutputType | null
    _sum: ImageProductSumAggregateOutputType | null
    _min: ImageProductMinAggregateOutputType | null
    _max: ImageProductMaxAggregateOutputType | null
  }

  export type ImageProductAvgAggregateOutputType = {
    id: number | null
    version: number | null
    width: number | null
    height: number | null
    pages: number | null
    bytes: number | null
    IdProduct: number | null
  }

  export type ImageProductSumAggregateOutputType = {
    id: number | null
    version: number | null
    width: number | null
    height: number | null
    pages: number | null
    bytes: number | null
    IdProduct: number | null
  }

  export type ImageProductMinAggregateOutputType = {
    id: number | null
    start: Date | null
    end: Date | null
    asset_id: string | null
    public_id: string | null
    version: number | null
    version_id: string | null
    signature: string | null
    width: number | null
    height: number | null
    format: string | null
    resource_type: string | null
    created_at: Date | null
    pages: number | null
    bytes: number | null
    type: string | null
    etag: string | null
    placeholder: boolean | null
    url: string | null
    secure_url: string | null
    asset_folder: string | null
    display_name: string | null
    original_filename: string | null
    api_key: string | null
    IdProduct: number | null
  }

  export type ImageProductMaxAggregateOutputType = {
    id: number | null
    start: Date | null
    end: Date | null
    asset_id: string | null
    public_id: string | null
    version: number | null
    version_id: string | null
    signature: string | null
    width: number | null
    height: number | null
    format: string | null
    resource_type: string | null
    created_at: Date | null
    pages: number | null
    bytes: number | null
    type: string | null
    etag: string | null
    placeholder: boolean | null
    url: string | null
    secure_url: string | null
    asset_folder: string | null
    display_name: string | null
    original_filename: string | null
    api_key: string | null
    IdProduct: number | null
  }

  export type ImageProductCountAggregateOutputType = {
    id: number
    start: number
    end: number
    asset_id: number
    public_id: number
    version: number
    version_id: number
    signature: number
    width: number
    height: number
    format: number
    resource_type: number
    created_at: number
    pages: number
    tags: number
    bytes: number
    type: number
    etag: number
    placeholder: number
    url: number
    secure_url: number
    asset_folder: number
    display_name: number
    original_filename: number
    api_key: number
    IdProduct: number
    _all: number
  }


  export type ImageProductAvgAggregateInputType = {
    id?: true
    version?: true
    width?: true
    height?: true
    pages?: true
    bytes?: true
    IdProduct?: true
  }

  export type ImageProductSumAggregateInputType = {
    id?: true
    version?: true
    width?: true
    height?: true
    pages?: true
    bytes?: true
    IdProduct?: true
  }

  export type ImageProductMinAggregateInputType = {
    id?: true
    start?: true
    end?: true
    asset_id?: true
    public_id?: true
    version?: true
    version_id?: true
    signature?: true
    width?: true
    height?: true
    format?: true
    resource_type?: true
    created_at?: true
    pages?: true
    bytes?: true
    type?: true
    etag?: true
    placeholder?: true
    url?: true
    secure_url?: true
    asset_folder?: true
    display_name?: true
    original_filename?: true
    api_key?: true
    IdProduct?: true
  }

  export type ImageProductMaxAggregateInputType = {
    id?: true
    start?: true
    end?: true
    asset_id?: true
    public_id?: true
    version?: true
    version_id?: true
    signature?: true
    width?: true
    height?: true
    format?: true
    resource_type?: true
    created_at?: true
    pages?: true
    bytes?: true
    type?: true
    etag?: true
    placeholder?: true
    url?: true
    secure_url?: true
    asset_folder?: true
    display_name?: true
    original_filename?: true
    api_key?: true
    IdProduct?: true
  }

  export type ImageProductCountAggregateInputType = {
    id?: true
    start?: true
    end?: true
    asset_id?: true
    public_id?: true
    version?: true
    version_id?: true
    signature?: true
    width?: true
    height?: true
    format?: true
    resource_type?: true
    created_at?: true
    pages?: true
    tags?: true
    bytes?: true
    type?: true
    etag?: true
    placeholder?: true
    url?: true
    secure_url?: true
    asset_folder?: true
    display_name?: true
    original_filename?: true
    api_key?: true
    IdProduct?: true
    _all?: true
  }

  export type ImageProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which imageProduct to aggregate.
     */
    where?: imageProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of imageProducts to fetch.
     */
    orderBy?: imageProductOrderByWithRelationInput | imageProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: imageProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` imageProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` imageProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned imageProducts
    **/
    _count?: true | ImageProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageProductMaxAggregateInputType
  }

  export type GetImageProductAggregateType<T extends ImageProductAggregateArgs> = {
        [P in keyof T & keyof AggregateImageProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImageProduct[P]>
      : GetScalarType<T[P], AggregateImageProduct[P]>
  }




  export type imageProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: imageProductWhereInput
    orderBy?: imageProductOrderByWithAggregationInput | imageProductOrderByWithAggregationInput[]
    by: ImageProductScalarFieldEnum[] | ImageProductScalarFieldEnum
    having?: imageProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageProductCountAggregateInputType | true
    _avg?: ImageProductAvgAggregateInputType
    _sum?: ImageProductSumAggregateInputType
    _min?: ImageProductMinAggregateInputType
    _max?: ImageProductMaxAggregateInputType
  }

  export type ImageProductGroupByOutputType = {
    id: number
    start: Date
    end: Date
    asset_id: string | null
    public_id: string | null
    version: number | null
    version_id: string | null
    signature: string | null
    width: number | null
    height: number | null
    format: string | null
    resource_type: string | null
    created_at: Date
    pages: number | null
    tags: JsonValue | null
    bytes: number | null
    type: string | null
    etag: string | null
    placeholder: boolean | null
    url: string | null
    secure_url: string | null
    asset_folder: string | null
    display_name: string | null
    original_filename: string | null
    api_key: string | null
    IdProduct: number
    _count: ImageProductCountAggregateOutputType | null
    _avg: ImageProductAvgAggregateOutputType | null
    _sum: ImageProductSumAggregateOutputType | null
    _min: ImageProductMinAggregateOutputType | null
    _max: ImageProductMaxAggregateOutputType | null
  }

  type GetImageProductGroupByPayload<T extends imageProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageProductGroupByOutputType[P]>
            : GetScalarType<T[P], ImageProductGroupByOutputType[P]>
        }
      >
    >


  export type imageProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    end?: boolean
    asset_id?: boolean
    public_id?: boolean
    version?: boolean
    version_id?: boolean
    signature?: boolean
    width?: boolean
    height?: boolean
    format?: boolean
    resource_type?: boolean
    created_at?: boolean
    pages?: boolean
    tags?: boolean
    bytes?: boolean
    type?: boolean
    etag?: boolean
    placeholder?: boolean
    url?: boolean
    secure_url?: boolean
    asset_folder?: boolean
    display_name?: boolean
    original_filename?: boolean
    api_key?: boolean
    IdProduct?: boolean
    user?: boolean | listProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imageProduct"]>

  export type imageProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    end?: boolean
    asset_id?: boolean
    public_id?: boolean
    version?: boolean
    version_id?: boolean
    signature?: boolean
    width?: boolean
    height?: boolean
    format?: boolean
    resource_type?: boolean
    created_at?: boolean
    pages?: boolean
    tags?: boolean
    bytes?: boolean
    type?: boolean
    etag?: boolean
    placeholder?: boolean
    url?: boolean
    secure_url?: boolean
    asset_folder?: boolean
    display_name?: boolean
    original_filename?: boolean
    api_key?: boolean
    IdProduct?: boolean
    user?: boolean | listProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imageProduct"]>

  export type imageProductSelectScalar = {
    id?: boolean
    start?: boolean
    end?: boolean
    asset_id?: boolean
    public_id?: boolean
    version?: boolean
    version_id?: boolean
    signature?: boolean
    width?: boolean
    height?: boolean
    format?: boolean
    resource_type?: boolean
    created_at?: boolean
    pages?: boolean
    tags?: boolean
    bytes?: boolean
    type?: boolean
    etag?: boolean
    placeholder?: boolean
    url?: boolean
    secure_url?: boolean
    asset_folder?: boolean
    display_name?: boolean
    original_filename?: boolean
    api_key?: boolean
    IdProduct?: boolean
  }

  export type imageProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | listProductDefaultArgs<ExtArgs>
  }
  export type imageProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | listProductDefaultArgs<ExtArgs>
  }

  export type $imageProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "imageProduct"
    objects: {
      user: Prisma.$listProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      start: Date
      end: Date
      asset_id: string | null
      public_id: string | null
      version: number | null
      version_id: string | null
      signature: string | null
      width: number | null
      height: number | null
      format: string | null
      resource_type: string | null
      created_at: Date
      pages: number | null
      tags: Prisma.JsonValue | null
      bytes: number | null
      type: string | null
      etag: string | null
      placeholder: boolean | null
      url: string | null
      secure_url: string | null
      asset_folder: string | null
      display_name: string | null
      original_filename: string | null
      api_key: string | null
      IdProduct: number
    }, ExtArgs["result"]["imageProduct"]>
    composites: {}
  }

  type imageProductGetPayload<S extends boolean | null | undefined | imageProductDefaultArgs> = $Result.GetResult<Prisma.$imageProductPayload, S>

  type imageProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<imageProductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ImageProductCountAggregateInputType | true
    }

  export interface imageProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['imageProduct'], meta: { name: 'imageProduct' } }
    /**
     * Find zero or one ImageProduct that matches the filter.
     * @param {imageProductFindUniqueArgs} args - Arguments to find a ImageProduct
     * @example
     * // Get one ImageProduct
     * const imageProduct = await prisma.imageProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends imageProductFindUniqueArgs>(args: SelectSubset<T, imageProductFindUniqueArgs<ExtArgs>>): Prisma__imageProductClient<$Result.GetResult<Prisma.$imageProductPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ImageProduct that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {imageProductFindUniqueOrThrowArgs} args - Arguments to find a ImageProduct
     * @example
     * // Get one ImageProduct
     * const imageProduct = await prisma.imageProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends imageProductFindUniqueOrThrowArgs>(args: SelectSubset<T, imageProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__imageProductClient<$Result.GetResult<Prisma.$imageProductPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ImageProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imageProductFindFirstArgs} args - Arguments to find a ImageProduct
     * @example
     * // Get one ImageProduct
     * const imageProduct = await prisma.imageProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends imageProductFindFirstArgs>(args?: SelectSubset<T, imageProductFindFirstArgs<ExtArgs>>): Prisma__imageProductClient<$Result.GetResult<Prisma.$imageProductPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ImageProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imageProductFindFirstOrThrowArgs} args - Arguments to find a ImageProduct
     * @example
     * // Get one ImageProduct
     * const imageProduct = await prisma.imageProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends imageProductFindFirstOrThrowArgs>(args?: SelectSubset<T, imageProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__imageProductClient<$Result.GetResult<Prisma.$imageProductPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ImageProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imageProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ImageProducts
     * const imageProducts = await prisma.imageProduct.findMany()
     * 
     * // Get first 10 ImageProducts
     * const imageProducts = await prisma.imageProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageProductWithIdOnly = await prisma.imageProduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends imageProductFindManyArgs>(args?: SelectSubset<T, imageProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$imageProductPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ImageProduct.
     * @param {imageProductCreateArgs} args - Arguments to create a ImageProduct.
     * @example
     * // Create one ImageProduct
     * const ImageProduct = await prisma.imageProduct.create({
     *   data: {
     *     // ... data to create a ImageProduct
     *   }
     * })
     * 
     */
    create<T extends imageProductCreateArgs>(args: SelectSubset<T, imageProductCreateArgs<ExtArgs>>): Prisma__imageProductClient<$Result.GetResult<Prisma.$imageProductPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ImageProducts.
     * @param {imageProductCreateManyArgs} args - Arguments to create many ImageProducts.
     * @example
     * // Create many ImageProducts
     * const imageProduct = await prisma.imageProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends imageProductCreateManyArgs>(args?: SelectSubset<T, imageProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ImageProducts and returns the data saved in the database.
     * @param {imageProductCreateManyAndReturnArgs} args - Arguments to create many ImageProducts.
     * @example
     * // Create many ImageProducts
     * const imageProduct = await prisma.imageProduct.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ImageProducts and only return the `id`
     * const imageProductWithIdOnly = await prisma.imageProduct.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends imageProductCreateManyAndReturnArgs>(args?: SelectSubset<T, imageProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$imageProductPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ImageProduct.
     * @param {imageProductDeleteArgs} args - Arguments to delete one ImageProduct.
     * @example
     * // Delete one ImageProduct
     * const ImageProduct = await prisma.imageProduct.delete({
     *   where: {
     *     // ... filter to delete one ImageProduct
     *   }
     * })
     * 
     */
    delete<T extends imageProductDeleteArgs>(args: SelectSubset<T, imageProductDeleteArgs<ExtArgs>>): Prisma__imageProductClient<$Result.GetResult<Prisma.$imageProductPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ImageProduct.
     * @param {imageProductUpdateArgs} args - Arguments to update one ImageProduct.
     * @example
     * // Update one ImageProduct
     * const imageProduct = await prisma.imageProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends imageProductUpdateArgs>(args: SelectSubset<T, imageProductUpdateArgs<ExtArgs>>): Prisma__imageProductClient<$Result.GetResult<Prisma.$imageProductPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ImageProducts.
     * @param {imageProductDeleteManyArgs} args - Arguments to filter ImageProducts to delete.
     * @example
     * // Delete a few ImageProducts
     * const { count } = await prisma.imageProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends imageProductDeleteManyArgs>(args?: SelectSubset<T, imageProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImageProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imageProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ImageProducts
     * const imageProduct = await prisma.imageProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends imageProductUpdateManyArgs>(args: SelectSubset<T, imageProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ImageProduct.
     * @param {imageProductUpsertArgs} args - Arguments to update or create a ImageProduct.
     * @example
     * // Update or create a ImageProduct
     * const imageProduct = await prisma.imageProduct.upsert({
     *   create: {
     *     // ... data to create a ImageProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ImageProduct we want to update
     *   }
     * })
     */
    upsert<T extends imageProductUpsertArgs>(args: SelectSubset<T, imageProductUpsertArgs<ExtArgs>>): Prisma__imageProductClient<$Result.GetResult<Prisma.$imageProductPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ImageProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imageProductCountArgs} args - Arguments to filter ImageProducts to count.
     * @example
     * // Count the number of ImageProducts
     * const count = await prisma.imageProduct.count({
     *   where: {
     *     // ... the filter for the ImageProducts we want to count
     *   }
     * })
    **/
    count<T extends imageProductCountArgs>(
      args?: Subset<T, imageProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ImageProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImageProductAggregateArgs>(args: Subset<T, ImageProductAggregateArgs>): Prisma.PrismaPromise<GetImageProductAggregateType<T>>

    /**
     * Group by ImageProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imageProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends imageProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: imageProductGroupByArgs['orderBy'] }
        : { orderBy?: imageProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, imageProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the imageProduct model
   */
  readonly fields: imageProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for imageProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__imageProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends listProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, listProductDefaultArgs<ExtArgs>>): Prisma__listProductClient<$Result.GetResult<Prisma.$listProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the imageProduct model
   */ 
  interface imageProductFieldRefs {
    readonly id: FieldRef<"imageProduct", 'Int'>
    readonly start: FieldRef<"imageProduct", 'DateTime'>
    readonly end: FieldRef<"imageProduct", 'DateTime'>
    readonly asset_id: FieldRef<"imageProduct", 'String'>
    readonly public_id: FieldRef<"imageProduct", 'String'>
    readonly version: FieldRef<"imageProduct", 'Int'>
    readonly version_id: FieldRef<"imageProduct", 'String'>
    readonly signature: FieldRef<"imageProduct", 'String'>
    readonly width: FieldRef<"imageProduct", 'Int'>
    readonly height: FieldRef<"imageProduct", 'Int'>
    readonly format: FieldRef<"imageProduct", 'String'>
    readonly resource_type: FieldRef<"imageProduct", 'String'>
    readonly created_at: FieldRef<"imageProduct", 'DateTime'>
    readonly pages: FieldRef<"imageProduct", 'Int'>
    readonly tags: FieldRef<"imageProduct", 'Json'>
    readonly bytes: FieldRef<"imageProduct", 'Int'>
    readonly type: FieldRef<"imageProduct", 'String'>
    readonly etag: FieldRef<"imageProduct", 'String'>
    readonly placeholder: FieldRef<"imageProduct", 'Boolean'>
    readonly url: FieldRef<"imageProduct", 'String'>
    readonly secure_url: FieldRef<"imageProduct", 'String'>
    readonly asset_folder: FieldRef<"imageProduct", 'String'>
    readonly display_name: FieldRef<"imageProduct", 'String'>
    readonly original_filename: FieldRef<"imageProduct", 'String'>
    readonly api_key: FieldRef<"imageProduct", 'String'>
    readonly IdProduct: FieldRef<"imageProduct", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * imageProduct findUnique
   */
  export type imageProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imageProduct
     */
    select?: imageProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageProductInclude<ExtArgs> | null
    /**
     * Filter, which imageProduct to fetch.
     */
    where: imageProductWhereUniqueInput
  }

  /**
   * imageProduct findUniqueOrThrow
   */
  export type imageProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imageProduct
     */
    select?: imageProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageProductInclude<ExtArgs> | null
    /**
     * Filter, which imageProduct to fetch.
     */
    where: imageProductWhereUniqueInput
  }

  /**
   * imageProduct findFirst
   */
  export type imageProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imageProduct
     */
    select?: imageProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageProductInclude<ExtArgs> | null
    /**
     * Filter, which imageProduct to fetch.
     */
    where?: imageProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of imageProducts to fetch.
     */
    orderBy?: imageProductOrderByWithRelationInput | imageProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for imageProducts.
     */
    cursor?: imageProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` imageProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` imageProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of imageProducts.
     */
    distinct?: ImageProductScalarFieldEnum | ImageProductScalarFieldEnum[]
  }

  /**
   * imageProduct findFirstOrThrow
   */
  export type imageProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imageProduct
     */
    select?: imageProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageProductInclude<ExtArgs> | null
    /**
     * Filter, which imageProduct to fetch.
     */
    where?: imageProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of imageProducts to fetch.
     */
    orderBy?: imageProductOrderByWithRelationInput | imageProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for imageProducts.
     */
    cursor?: imageProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` imageProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` imageProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of imageProducts.
     */
    distinct?: ImageProductScalarFieldEnum | ImageProductScalarFieldEnum[]
  }

  /**
   * imageProduct findMany
   */
  export type imageProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imageProduct
     */
    select?: imageProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageProductInclude<ExtArgs> | null
    /**
     * Filter, which imageProducts to fetch.
     */
    where?: imageProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of imageProducts to fetch.
     */
    orderBy?: imageProductOrderByWithRelationInput | imageProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing imageProducts.
     */
    cursor?: imageProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` imageProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` imageProducts.
     */
    skip?: number
    distinct?: ImageProductScalarFieldEnum | ImageProductScalarFieldEnum[]
  }

  /**
   * imageProduct create
   */
  export type imageProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imageProduct
     */
    select?: imageProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageProductInclude<ExtArgs> | null
    /**
     * The data needed to create a imageProduct.
     */
    data: XOR<imageProductCreateInput, imageProductUncheckedCreateInput>
  }

  /**
   * imageProduct createMany
   */
  export type imageProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many imageProducts.
     */
    data: imageProductCreateManyInput | imageProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * imageProduct createManyAndReturn
   */
  export type imageProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imageProduct
     */
    select?: imageProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many imageProducts.
     */
    data: imageProductCreateManyInput | imageProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * imageProduct update
   */
  export type imageProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imageProduct
     */
    select?: imageProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageProductInclude<ExtArgs> | null
    /**
     * The data needed to update a imageProduct.
     */
    data: XOR<imageProductUpdateInput, imageProductUncheckedUpdateInput>
    /**
     * Choose, which imageProduct to update.
     */
    where: imageProductWhereUniqueInput
  }

  /**
   * imageProduct updateMany
   */
  export type imageProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update imageProducts.
     */
    data: XOR<imageProductUpdateManyMutationInput, imageProductUncheckedUpdateManyInput>
    /**
     * Filter which imageProducts to update
     */
    where?: imageProductWhereInput
  }

  /**
   * imageProduct upsert
   */
  export type imageProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imageProduct
     */
    select?: imageProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageProductInclude<ExtArgs> | null
    /**
     * The filter to search for the imageProduct to update in case it exists.
     */
    where: imageProductWhereUniqueInput
    /**
     * In case the imageProduct found by the `where` argument doesn't exist, create a new imageProduct with this data.
     */
    create: XOR<imageProductCreateInput, imageProductUncheckedCreateInput>
    /**
     * In case the imageProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<imageProductUpdateInput, imageProductUncheckedUpdateInput>
  }

  /**
   * imageProduct delete
   */
  export type imageProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imageProduct
     */
    select?: imageProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageProductInclude<ExtArgs> | null
    /**
     * Filter which imageProduct to delete.
     */
    where: imageProductWhereUniqueInput
  }

  /**
   * imageProduct deleteMany
   */
  export type imageProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which imageProducts to delete
     */
    where?: imageProductWhereInput
  }

  /**
   * imageProduct without action
   */
  export type imageProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imageProduct
     */
    select?: imageProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageProductInclude<ExtArgs> | null
  }


  /**
   * Model postArtikel
   */

  export type AggregatePostArtikel = {
    _count: PostArtikelCountAggregateOutputType | null
    _avg: PostArtikelAvgAggregateOutputType | null
    _sum: PostArtikelSumAggregateOutputType | null
    _min: PostArtikelMinAggregateOutputType | null
    _max: PostArtikelMaxAggregateOutputType | null
  }

  export type PostArtikelAvgAggregateOutputType = {
    id: number | null
    categoryArtikelId: number | null
  }

  export type PostArtikelSumAggregateOutputType = {
    id: number | null
    categoryArtikelId: number | null
  }

  export type PostArtikelMinAggregateOutputType = {
    id: number | null
    title: string | null
    slug: string | null
    content: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    saveDraf: boolean | null
    categoryArtikelId: number | null
  }

  export type PostArtikelMaxAggregateOutputType = {
    id: number | null
    title: string | null
    slug: string | null
    content: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    saveDraf: boolean | null
    categoryArtikelId: number | null
  }

  export type PostArtikelCountAggregateOutputType = {
    id: number
    title: number
    slug: number
    content: number
    description: number
    tags: number
    createdAt: number
    updatedAt: number
    saveDraf: number
    categoryArtikelId: number
    _all: number
  }


  export type PostArtikelAvgAggregateInputType = {
    id?: true
    categoryArtikelId?: true
  }

  export type PostArtikelSumAggregateInputType = {
    id?: true
    categoryArtikelId?: true
  }

  export type PostArtikelMinAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    content?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    saveDraf?: true
    categoryArtikelId?: true
  }

  export type PostArtikelMaxAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    content?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    saveDraf?: true
    categoryArtikelId?: true
  }

  export type PostArtikelCountAggregateInputType = {
    id?: true
    title?: true
    slug?: true
    content?: true
    description?: true
    tags?: true
    createdAt?: true
    updatedAt?: true
    saveDraf?: true
    categoryArtikelId?: true
    _all?: true
  }

  export type PostArtikelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which postArtikel to aggregate.
     */
    where?: postArtikelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of postArtikels to fetch.
     */
    orderBy?: postArtikelOrderByWithRelationInput | postArtikelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: postArtikelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` postArtikels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` postArtikels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned postArtikels
    **/
    _count?: true | PostArtikelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostArtikelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostArtikelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostArtikelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostArtikelMaxAggregateInputType
  }

  export type GetPostArtikelAggregateType<T extends PostArtikelAggregateArgs> = {
        [P in keyof T & keyof AggregatePostArtikel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostArtikel[P]>
      : GetScalarType<T[P], AggregatePostArtikel[P]>
  }




  export type postArtikelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: postArtikelWhereInput
    orderBy?: postArtikelOrderByWithAggregationInput | postArtikelOrderByWithAggregationInput[]
    by: PostArtikelScalarFieldEnum[] | PostArtikelScalarFieldEnum
    having?: postArtikelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostArtikelCountAggregateInputType | true
    _avg?: PostArtikelAvgAggregateInputType
    _sum?: PostArtikelSumAggregateInputType
    _min?: PostArtikelMinAggregateInputType
    _max?: PostArtikelMaxAggregateInputType
  }

  export type PostArtikelGroupByOutputType = {
    id: number
    title: string
    slug: string
    content: string
    description: string | null
    tags: JsonValue | null
    createdAt: Date
    updatedAt: Date
    saveDraf: boolean
    categoryArtikelId: number
    _count: PostArtikelCountAggregateOutputType | null
    _avg: PostArtikelAvgAggregateOutputType | null
    _sum: PostArtikelSumAggregateOutputType | null
    _min: PostArtikelMinAggregateOutputType | null
    _max: PostArtikelMaxAggregateOutputType | null
  }

  type GetPostArtikelGroupByPayload<T extends postArtikelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostArtikelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostArtikelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostArtikelGroupByOutputType[P]>
            : GetScalarType<T[P], PostArtikelGroupByOutputType[P]>
        }
      >
    >


  export type postArtikelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    description?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    saveDraf?: boolean
    categoryArtikelId?: boolean
    imageProductArtikel?: boolean | postArtikel$imageProductArtikelArgs<ExtArgs>
    categoryArtikel?: boolean | categoryArtikelDefaultArgs<ExtArgs>
    _count?: boolean | PostArtikelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postArtikel"]>

  export type postArtikelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    description?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    saveDraf?: boolean
    categoryArtikelId?: boolean
    categoryArtikel?: boolean | categoryArtikelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postArtikel"]>

  export type postArtikelSelectScalar = {
    id?: boolean
    title?: boolean
    slug?: boolean
    content?: boolean
    description?: boolean
    tags?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    saveDraf?: boolean
    categoryArtikelId?: boolean
  }

  export type postArtikelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    imageProductArtikel?: boolean | postArtikel$imageProductArtikelArgs<ExtArgs>
    categoryArtikel?: boolean | categoryArtikelDefaultArgs<ExtArgs>
    _count?: boolean | PostArtikelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type postArtikelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categoryArtikel?: boolean | categoryArtikelDefaultArgs<ExtArgs>
  }

  export type $postArtikelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "postArtikel"
    objects: {
      imageProductArtikel: Prisma.$imageProductArtikelPayload<ExtArgs>[]
      categoryArtikel: Prisma.$categoryArtikelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      slug: string
      content: string
      description: string | null
      tags: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
      saveDraf: boolean
      categoryArtikelId: number
    }, ExtArgs["result"]["postArtikel"]>
    composites: {}
  }

  type postArtikelGetPayload<S extends boolean | null | undefined | postArtikelDefaultArgs> = $Result.GetResult<Prisma.$postArtikelPayload, S>

  type postArtikelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<postArtikelFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PostArtikelCountAggregateInputType | true
    }

  export interface postArtikelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['postArtikel'], meta: { name: 'postArtikel' } }
    /**
     * Find zero or one PostArtikel that matches the filter.
     * @param {postArtikelFindUniqueArgs} args - Arguments to find a PostArtikel
     * @example
     * // Get one PostArtikel
     * const postArtikel = await prisma.postArtikel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends postArtikelFindUniqueArgs>(args: SelectSubset<T, postArtikelFindUniqueArgs<ExtArgs>>): Prisma__postArtikelClient<$Result.GetResult<Prisma.$postArtikelPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PostArtikel that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {postArtikelFindUniqueOrThrowArgs} args - Arguments to find a PostArtikel
     * @example
     * // Get one PostArtikel
     * const postArtikel = await prisma.postArtikel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends postArtikelFindUniqueOrThrowArgs>(args: SelectSubset<T, postArtikelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__postArtikelClient<$Result.GetResult<Prisma.$postArtikelPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PostArtikel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postArtikelFindFirstArgs} args - Arguments to find a PostArtikel
     * @example
     * // Get one PostArtikel
     * const postArtikel = await prisma.postArtikel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends postArtikelFindFirstArgs>(args?: SelectSubset<T, postArtikelFindFirstArgs<ExtArgs>>): Prisma__postArtikelClient<$Result.GetResult<Prisma.$postArtikelPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PostArtikel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postArtikelFindFirstOrThrowArgs} args - Arguments to find a PostArtikel
     * @example
     * // Get one PostArtikel
     * const postArtikel = await prisma.postArtikel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends postArtikelFindFirstOrThrowArgs>(args?: SelectSubset<T, postArtikelFindFirstOrThrowArgs<ExtArgs>>): Prisma__postArtikelClient<$Result.GetResult<Prisma.$postArtikelPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PostArtikels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postArtikelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostArtikels
     * const postArtikels = await prisma.postArtikel.findMany()
     * 
     * // Get first 10 PostArtikels
     * const postArtikels = await prisma.postArtikel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postArtikelWithIdOnly = await prisma.postArtikel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends postArtikelFindManyArgs>(args?: SelectSubset<T, postArtikelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postArtikelPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PostArtikel.
     * @param {postArtikelCreateArgs} args - Arguments to create a PostArtikel.
     * @example
     * // Create one PostArtikel
     * const PostArtikel = await prisma.postArtikel.create({
     *   data: {
     *     // ... data to create a PostArtikel
     *   }
     * })
     * 
     */
    create<T extends postArtikelCreateArgs>(args: SelectSubset<T, postArtikelCreateArgs<ExtArgs>>): Prisma__postArtikelClient<$Result.GetResult<Prisma.$postArtikelPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PostArtikels.
     * @param {postArtikelCreateManyArgs} args - Arguments to create many PostArtikels.
     * @example
     * // Create many PostArtikels
     * const postArtikel = await prisma.postArtikel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends postArtikelCreateManyArgs>(args?: SelectSubset<T, postArtikelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostArtikels and returns the data saved in the database.
     * @param {postArtikelCreateManyAndReturnArgs} args - Arguments to create many PostArtikels.
     * @example
     * // Create many PostArtikels
     * const postArtikel = await prisma.postArtikel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostArtikels and only return the `id`
     * const postArtikelWithIdOnly = await prisma.postArtikel.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends postArtikelCreateManyAndReturnArgs>(args?: SelectSubset<T, postArtikelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postArtikelPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PostArtikel.
     * @param {postArtikelDeleteArgs} args - Arguments to delete one PostArtikel.
     * @example
     * // Delete one PostArtikel
     * const PostArtikel = await prisma.postArtikel.delete({
     *   where: {
     *     // ... filter to delete one PostArtikel
     *   }
     * })
     * 
     */
    delete<T extends postArtikelDeleteArgs>(args: SelectSubset<T, postArtikelDeleteArgs<ExtArgs>>): Prisma__postArtikelClient<$Result.GetResult<Prisma.$postArtikelPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PostArtikel.
     * @param {postArtikelUpdateArgs} args - Arguments to update one PostArtikel.
     * @example
     * // Update one PostArtikel
     * const postArtikel = await prisma.postArtikel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends postArtikelUpdateArgs>(args: SelectSubset<T, postArtikelUpdateArgs<ExtArgs>>): Prisma__postArtikelClient<$Result.GetResult<Prisma.$postArtikelPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PostArtikels.
     * @param {postArtikelDeleteManyArgs} args - Arguments to filter PostArtikels to delete.
     * @example
     * // Delete a few PostArtikels
     * const { count } = await prisma.postArtikel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends postArtikelDeleteManyArgs>(args?: SelectSubset<T, postArtikelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostArtikels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postArtikelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostArtikels
     * const postArtikel = await prisma.postArtikel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends postArtikelUpdateManyArgs>(args: SelectSubset<T, postArtikelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PostArtikel.
     * @param {postArtikelUpsertArgs} args - Arguments to update or create a PostArtikel.
     * @example
     * // Update or create a PostArtikel
     * const postArtikel = await prisma.postArtikel.upsert({
     *   create: {
     *     // ... data to create a PostArtikel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostArtikel we want to update
     *   }
     * })
     */
    upsert<T extends postArtikelUpsertArgs>(args: SelectSubset<T, postArtikelUpsertArgs<ExtArgs>>): Prisma__postArtikelClient<$Result.GetResult<Prisma.$postArtikelPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PostArtikels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postArtikelCountArgs} args - Arguments to filter PostArtikels to count.
     * @example
     * // Count the number of PostArtikels
     * const count = await prisma.postArtikel.count({
     *   where: {
     *     // ... the filter for the PostArtikels we want to count
     *   }
     * })
    **/
    count<T extends postArtikelCountArgs>(
      args?: Subset<T, postArtikelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostArtikelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostArtikel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostArtikelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostArtikelAggregateArgs>(args: Subset<T, PostArtikelAggregateArgs>): Prisma.PrismaPromise<GetPostArtikelAggregateType<T>>

    /**
     * Group by PostArtikel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {postArtikelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends postArtikelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: postArtikelGroupByArgs['orderBy'] }
        : { orderBy?: postArtikelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, postArtikelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostArtikelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the postArtikel model
   */
  readonly fields: postArtikelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for postArtikel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__postArtikelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    imageProductArtikel<T extends postArtikel$imageProductArtikelArgs<ExtArgs> = {}>(args?: Subset<T, postArtikel$imageProductArtikelArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$imageProductArtikelPayload<ExtArgs>, T, "findMany"> | Null>
    categoryArtikel<T extends categoryArtikelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, categoryArtikelDefaultArgs<ExtArgs>>): Prisma__categoryArtikelClient<$Result.GetResult<Prisma.$categoryArtikelPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the postArtikel model
   */ 
  interface postArtikelFieldRefs {
    readonly id: FieldRef<"postArtikel", 'Int'>
    readonly title: FieldRef<"postArtikel", 'String'>
    readonly slug: FieldRef<"postArtikel", 'String'>
    readonly content: FieldRef<"postArtikel", 'String'>
    readonly description: FieldRef<"postArtikel", 'String'>
    readonly tags: FieldRef<"postArtikel", 'Json'>
    readonly createdAt: FieldRef<"postArtikel", 'DateTime'>
    readonly updatedAt: FieldRef<"postArtikel", 'DateTime'>
    readonly saveDraf: FieldRef<"postArtikel", 'Boolean'>
    readonly categoryArtikelId: FieldRef<"postArtikel", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * postArtikel findUnique
   */
  export type postArtikelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postArtikel
     */
    select?: postArtikelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postArtikelInclude<ExtArgs> | null
    /**
     * Filter, which postArtikel to fetch.
     */
    where: postArtikelWhereUniqueInput
  }

  /**
   * postArtikel findUniqueOrThrow
   */
  export type postArtikelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postArtikel
     */
    select?: postArtikelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postArtikelInclude<ExtArgs> | null
    /**
     * Filter, which postArtikel to fetch.
     */
    where: postArtikelWhereUniqueInput
  }

  /**
   * postArtikel findFirst
   */
  export type postArtikelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postArtikel
     */
    select?: postArtikelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postArtikelInclude<ExtArgs> | null
    /**
     * Filter, which postArtikel to fetch.
     */
    where?: postArtikelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of postArtikels to fetch.
     */
    orderBy?: postArtikelOrderByWithRelationInput | postArtikelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for postArtikels.
     */
    cursor?: postArtikelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` postArtikels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` postArtikels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of postArtikels.
     */
    distinct?: PostArtikelScalarFieldEnum | PostArtikelScalarFieldEnum[]
  }

  /**
   * postArtikel findFirstOrThrow
   */
  export type postArtikelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postArtikel
     */
    select?: postArtikelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postArtikelInclude<ExtArgs> | null
    /**
     * Filter, which postArtikel to fetch.
     */
    where?: postArtikelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of postArtikels to fetch.
     */
    orderBy?: postArtikelOrderByWithRelationInput | postArtikelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for postArtikels.
     */
    cursor?: postArtikelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` postArtikels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` postArtikels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of postArtikels.
     */
    distinct?: PostArtikelScalarFieldEnum | PostArtikelScalarFieldEnum[]
  }

  /**
   * postArtikel findMany
   */
  export type postArtikelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postArtikel
     */
    select?: postArtikelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postArtikelInclude<ExtArgs> | null
    /**
     * Filter, which postArtikels to fetch.
     */
    where?: postArtikelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of postArtikels to fetch.
     */
    orderBy?: postArtikelOrderByWithRelationInput | postArtikelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing postArtikels.
     */
    cursor?: postArtikelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` postArtikels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` postArtikels.
     */
    skip?: number
    distinct?: PostArtikelScalarFieldEnum | PostArtikelScalarFieldEnum[]
  }

  /**
   * postArtikel create
   */
  export type postArtikelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postArtikel
     */
    select?: postArtikelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postArtikelInclude<ExtArgs> | null
    /**
     * The data needed to create a postArtikel.
     */
    data: XOR<postArtikelCreateInput, postArtikelUncheckedCreateInput>
  }

  /**
   * postArtikel createMany
   */
  export type postArtikelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many postArtikels.
     */
    data: postArtikelCreateManyInput | postArtikelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * postArtikel createManyAndReturn
   */
  export type postArtikelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postArtikel
     */
    select?: postArtikelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many postArtikels.
     */
    data: postArtikelCreateManyInput | postArtikelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postArtikelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * postArtikel update
   */
  export type postArtikelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postArtikel
     */
    select?: postArtikelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postArtikelInclude<ExtArgs> | null
    /**
     * The data needed to update a postArtikel.
     */
    data: XOR<postArtikelUpdateInput, postArtikelUncheckedUpdateInput>
    /**
     * Choose, which postArtikel to update.
     */
    where: postArtikelWhereUniqueInput
  }

  /**
   * postArtikel updateMany
   */
  export type postArtikelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update postArtikels.
     */
    data: XOR<postArtikelUpdateManyMutationInput, postArtikelUncheckedUpdateManyInput>
    /**
     * Filter which postArtikels to update
     */
    where?: postArtikelWhereInput
  }

  /**
   * postArtikel upsert
   */
  export type postArtikelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postArtikel
     */
    select?: postArtikelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postArtikelInclude<ExtArgs> | null
    /**
     * The filter to search for the postArtikel to update in case it exists.
     */
    where: postArtikelWhereUniqueInput
    /**
     * In case the postArtikel found by the `where` argument doesn't exist, create a new postArtikel with this data.
     */
    create: XOR<postArtikelCreateInput, postArtikelUncheckedCreateInput>
    /**
     * In case the postArtikel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<postArtikelUpdateInput, postArtikelUncheckedUpdateInput>
  }

  /**
   * postArtikel delete
   */
  export type postArtikelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postArtikel
     */
    select?: postArtikelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postArtikelInclude<ExtArgs> | null
    /**
     * Filter which postArtikel to delete.
     */
    where: postArtikelWhereUniqueInput
  }

  /**
   * postArtikel deleteMany
   */
  export type postArtikelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which postArtikels to delete
     */
    where?: postArtikelWhereInput
  }

  /**
   * postArtikel.imageProductArtikel
   */
  export type postArtikel$imageProductArtikelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imageProductArtikel
     */
    select?: imageProductArtikelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageProductArtikelInclude<ExtArgs> | null
    where?: imageProductArtikelWhereInput
    orderBy?: imageProductArtikelOrderByWithRelationInput | imageProductArtikelOrderByWithRelationInput[]
    cursor?: imageProductArtikelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageProductArtikelScalarFieldEnum | ImageProductArtikelScalarFieldEnum[]
  }

  /**
   * postArtikel without action
   */
  export type postArtikelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postArtikel
     */
    select?: postArtikelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postArtikelInclude<ExtArgs> | null
  }


  /**
   * Model imageProductArtikel
   */

  export type AggregateImageProductArtikel = {
    _count: ImageProductArtikelCountAggregateOutputType | null
    _avg: ImageProductArtikelAvgAggregateOutputType | null
    _sum: ImageProductArtikelSumAggregateOutputType | null
    _min: ImageProductArtikelMinAggregateOutputType | null
    _max: ImageProductArtikelMaxAggregateOutputType | null
  }

  export type ImageProductArtikelAvgAggregateOutputType = {
    id: number | null
    version: number | null
    width: number | null
    height: number | null
    pages: number | null
    bytes: number | null
    IdProductArtikel: number | null
  }

  export type ImageProductArtikelSumAggregateOutputType = {
    id: number | null
    version: number | null
    width: number | null
    height: number | null
    pages: number | null
    bytes: number | null
    IdProductArtikel: number | null
  }

  export type ImageProductArtikelMinAggregateOutputType = {
    id: number | null
    start: Date | null
    end: Date | null
    asset_id: string | null
    public_id: string | null
    version: number | null
    version_id: string | null
    signature: string | null
    width: number | null
    height: number | null
    format: string | null
    resource_type: string | null
    created_at: Date | null
    pages: number | null
    bytes: number | null
    type: string | null
    etag: string | null
    placeholder: boolean | null
    url: string | null
    secure_url: string | null
    asset_folder: string | null
    display_name: string | null
    original_filename: string | null
    api_key: string | null
    IdProductArtikel: number | null
  }

  export type ImageProductArtikelMaxAggregateOutputType = {
    id: number | null
    start: Date | null
    end: Date | null
    asset_id: string | null
    public_id: string | null
    version: number | null
    version_id: string | null
    signature: string | null
    width: number | null
    height: number | null
    format: string | null
    resource_type: string | null
    created_at: Date | null
    pages: number | null
    bytes: number | null
    type: string | null
    etag: string | null
    placeholder: boolean | null
    url: string | null
    secure_url: string | null
    asset_folder: string | null
    display_name: string | null
    original_filename: string | null
    api_key: string | null
    IdProductArtikel: number | null
  }

  export type ImageProductArtikelCountAggregateOutputType = {
    id: number
    start: number
    end: number
    asset_id: number
    public_id: number
    version: number
    version_id: number
    signature: number
    width: number
    height: number
    format: number
    resource_type: number
    created_at: number
    pages: number
    tags: number
    bytes: number
    type: number
    etag: number
    placeholder: number
    url: number
    secure_url: number
    asset_folder: number
    display_name: number
    original_filename: number
    api_key: number
    IdProductArtikel: number
    _all: number
  }


  export type ImageProductArtikelAvgAggregateInputType = {
    id?: true
    version?: true
    width?: true
    height?: true
    pages?: true
    bytes?: true
    IdProductArtikel?: true
  }

  export type ImageProductArtikelSumAggregateInputType = {
    id?: true
    version?: true
    width?: true
    height?: true
    pages?: true
    bytes?: true
    IdProductArtikel?: true
  }

  export type ImageProductArtikelMinAggregateInputType = {
    id?: true
    start?: true
    end?: true
    asset_id?: true
    public_id?: true
    version?: true
    version_id?: true
    signature?: true
    width?: true
    height?: true
    format?: true
    resource_type?: true
    created_at?: true
    pages?: true
    bytes?: true
    type?: true
    etag?: true
    placeholder?: true
    url?: true
    secure_url?: true
    asset_folder?: true
    display_name?: true
    original_filename?: true
    api_key?: true
    IdProductArtikel?: true
  }

  export type ImageProductArtikelMaxAggregateInputType = {
    id?: true
    start?: true
    end?: true
    asset_id?: true
    public_id?: true
    version?: true
    version_id?: true
    signature?: true
    width?: true
    height?: true
    format?: true
    resource_type?: true
    created_at?: true
    pages?: true
    bytes?: true
    type?: true
    etag?: true
    placeholder?: true
    url?: true
    secure_url?: true
    asset_folder?: true
    display_name?: true
    original_filename?: true
    api_key?: true
    IdProductArtikel?: true
  }

  export type ImageProductArtikelCountAggregateInputType = {
    id?: true
    start?: true
    end?: true
    asset_id?: true
    public_id?: true
    version?: true
    version_id?: true
    signature?: true
    width?: true
    height?: true
    format?: true
    resource_type?: true
    created_at?: true
    pages?: true
    tags?: true
    bytes?: true
    type?: true
    etag?: true
    placeholder?: true
    url?: true
    secure_url?: true
    asset_folder?: true
    display_name?: true
    original_filename?: true
    api_key?: true
    IdProductArtikel?: true
    _all?: true
  }

  export type ImageProductArtikelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which imageProductArtikel to aggregate.
     */
    where?: imageProductArtikelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of imageProductArtikels to fetch.
     */
    orderBy?: imageProductArtikelOrderByWithRelationInput | imageProductArtikelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: imageProductArtikelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` imageProductArtikels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` imageProductArtikels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned imageProductArtikels
    **/
    _count?: true | ImageProductArtikelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageProductArtikelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageProductArtikelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageProductArtikelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageProductArtikelMaxAggregateInputType
  }

  export type GetImageProductArtikelAggregateType<T extends ImageProductArtikelAggregateArgs> = {
        [P in keyof T & keyof AggregateImageProductArtikel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImageProductArtikel[P]>
      : GetScalarType<T[P], AggregateImageProductArtikel[P]>
  }




  export type imageProductArtikelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: imageProductArtikelWhereInput
    orderBy?: imageProductArtikelOrderByWithAggregationInput | imageProductArtikelOrderByWithAggregationInput[]
    by: ImageProductArtikelScalarFieldEnum[] | ImageProductArtikelScalarFieldEnum
    having?: imageProductArtikelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageProductArtikelCountAggregateInputType | true
    _avg?: ImageProductArtikelAvgAggregateInputType
    _sum?: ImageProductArtikelSumAggregateInputType
    _min?: ImageProductArtikelMinAggregateInputType
    _max?: ImageProductArtikelMaxAggregateInputType
  }

  export type ImageProductArtikelGroupByOutputType = {
    id: number
    start: Date
    end: Date
    asset_id: string | null
    public_id: string | null
    version: number | null
    version_id: string | null
    signature: string | null
    width: number | null
    height: number | null
    format: string | null
    resource_type: string | null
    created_at: Date
    pages: number | null
    tags: JsonValue | null
    bytes: number | null
    type: string | null
    etag: string | null
    placeholder: boolean | null
    url: string | null
    secure_url: string | null
    asset_folder: string | null
    display_name: string | null
    original_filename: string | null
    api_key: string | null
    IdProductArtikel: number
    _count: ImageProductArtikelCountAggregateOutputType | null
    _avg: ImageProductArtikelAvgAggregateOutputType | null
    _sum: ImageProductArtikelSumAggregateOutputType | null
    _min: ImageProductArtikelMinAggregateOutputType | null
    _max: ImageProductArtikelMaxAggregateOutputType | null
  }

  type GetImageProductArtikelGroupByPayload<T extends imageProductArtikelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageProductArtikelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageProductArtikelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageProductArtikelGroupByOutputType[P]>
            : GetScalarType<T[P], ImageProductArtikelGroupByOutputType[P]>
        }
      >
    >


  export type imageProductArtikelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    end?: boolean
    asset_id?: boolean
    public_id?: boolean
    version?: boolean
    version_id?: boolean
    signature?: boolean
    width?: boolean
    height?: boolean
    format?: boolean
    resource_type?: boolean
    created_at?: boolean
    pages?: boolean
    tags?: boolean
    bytes?: boolean
    type?: boolean
    etag?: boolean
    placeholder?: boolean
    url?: boolean
    secure_url?: boolean
    asset_folder?: boolean
    display_name?: boolean
    original_filename?: boolean
    api_key?: boolean
    IdProductArtikel?: boolean
    userd?: boolean | postArtikelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imageProductArtikel"]>

  export type imageProductArtikelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    end?: boolean
    asset_id?: boolean
    public_id?: boolean
    version?: boolean
    version_id?: boolean
    signature?: boolean
    width?: boolean
    height?: boolean
    format?: boolean
    resource_type?: boolean
    created_at?: boolean
    pages?: boolean
    tags?: boolean
    bytes?: boolean
    type?: boolean
    etag?: boolean
    placeholder?: boolean
    url?: boolean
    secure_url?: boolean
    asset_folder?: boolean
    display_name?: boolean
    original_filename?: boolean
    api_key?: boolean
    IdProductArtikel?: boolean
    userd?: boolean | postArtikelDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["imageProductArtikel"]>

  export type imageProductArtikelSelectScalar = {
    id?: boolean
    start?: boolean
    end?: boolean
    asset_id?: boolean
    public_id?: boolean
    version?: boolean
    version_id?: boolean
    signature?: boolean
    width?: boolean
    height?: boolean
    format?: boolean
    resource_type?: boolean
    created_at?: boolean
    pages?: boolean
    tags?: boolean
    bytes?: boolean
    type?: boolean
    etag?: boolean
    placeholder?: boolean
    url?: boolean
    secure_url?: boolean
    asset_folder?: boolean
    display_name?: boolean
    original_filename?: boolean
    api_key?: boolean
    IdProductArtikel?: boolean
  }

  export type imageProductArtikelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userd?: boolean | postArtikelDefaultArgs<ExtArgs>
  }
  export type imageProductArtikelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userd?: boolean | postArtikelDefaultArgs<ExtArgs>
  }

  export type $imageProductArtikelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "imageProductArtikel"
    objects: {
      userd: Prisma.$postArtikelPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      start: Date
      end: Date
      asset_id: string | null
      public_id: string | null
      version: number | null
      version_id: string | null
      signature: string | null
      width: number | null
      height: number | null
      format: string | null
      resource_type: string | null
      created_at: Date
      pages: number | null
      tags: Prisma.JsonValue | null
      bytes: number | null
      type: string | null
      etag: string | null
      placeholder: boolean | null
      url: string | null
      secure_url: string | null
      asset_folder: string | null
      display_name: string | null
      original_filename: string | null
      api_key: string | null
      IdProductArtikel: number
    }, ExtArgs["result"]["imageProductArtikel"]>
    composites: {}
  }

  type imageProductArtikelGetPayload<S extends boolean | null | undefined | imageProductArtikelDefaultArgs> = $Result.GetResult<Prisma.$imageProductArtikelPayload, S>

  type imageProductArtikelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<imageProductArtikelFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ImageProductArtikelCountAggregateInputType | true
    }

  export interface imageProductArtikelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['imageProductArtikel'], meta: { name: 'imageProductArtikel' } }
    /**
     * Find zero or one ImageProductArtikel that matches the filter.
     * @param {imageProductArtikelFindUniqueArgs} args - Arguments to find a ImageProductArtikel
     * @example
     * // Get one ImageProductArtikel
     * const imageProductArtikel = await prisma.imageProductArtikel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends imageProductArtikelFindUniqueArgs>(args: SelectSubset<T, imageProductArtikelFindUniqueArgs<ExtArgs>>): Prisma__imageProductArtikelClient<$Result.GetResult<Prisma.$imageProductArtikelPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ImageProductArtikel that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {imageProductArtikelFindUniqueOrThrowArgs} args - Arguments to find a ImageProductArtikel
     * @example
     * // Get one ImageProductArtikel
     * const imageProductArtikel = await prisma.imageProductArtikel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends imageProductArtikelFindUniqueOrThrowArgs>(args: SelectSubset<T, imageProductArtikelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__imageProductArtikelClient<$Result.GetResult<Prisma.$imageProductArtikelPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ImageProductArtikel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imageProductArtikelFindFirstArgs} args - Arguments to find a ImageProductArtikel
     * @example
     * // Get one ImageProductArtikel
     * const imageProductArtikel = await prisma.imageProductArtikel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends imageProductArtikelFindFirstArgs>(args?: SelectSubset<T, imageProductArtikelFindFirstArgs<ExtArgs>>): Prisma__imageProductArtikelClient<$Result.GetResult<Prisma.$imageProductArtikelPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ImageProductArtikel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imageProductArtikelFindFirstOrThrowArgs} args - Arguments to find a ImageProductArtikel
     * @example
     * // Get one ImageProductArtikel
     * const imageProductArtikel = await prisma.imageProductArtikel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends imageProductArtikelFindFirstOrThrowArgs>(args?: SelectSubset<T, imageProductArtikelFindFirstOrThrowArgs<ExtArgs>>): Prisma__imageProductArtikelClient<$Result.GetResult<Prisma.$imageProductArtikelPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ImageProductArtikels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imageProductArtikelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ImageProductArtikels
     * const imageProductArtikels = await prisma.imageProductArtikel.findMany()
     * 
     * // Get first 10 ImageProductArtikels
     * const imageProductArtikels = await prisma.imageProductArtikel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageProductArtikelWithIdOnly = await prisma.imageProductArtikel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends imageProductArtikelFindManyArgs>(args?: SelectSubset<T, imageProductArtikelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$imageProductArtikelPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ImageProductArtikel.
     * @param {imageProductArtikelCreateArgs} args - Arguments to create a ImageProductArtikel.
     * @example
     * // Create one ImageProductArtikel
     * const ImageProductArtikel = await prisma.imageProductArtikel.create({
     *   data: {
     *     // ... data to create a ImageProductArtikel
     *   }
     * })
     * 
     */
    create<T extends imageProductArtikelCreateArgs>(args: SelectSubset<T, imageProductArtikelCreateArgs<ExtArgs>>): Prisma__imageProductArtikelClient<$Result.GetResult<Prisma.$imageProductArtikelPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ImageProductArtikels.
     * @param {imageProductArtikelCreateManyArgs} args - Arguments to create many ImageProductArtikels.
     * @example
     * // Create many ImageProductArtikels
     * const imageProductArtikel = await prisma.imageProductArtikel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends imageProductArtikelCreateManyArgs>(args?: SelectSubset<T, imageProductArtikelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ImageProductArtikels and returns the data saved in the database.
     * @param {imageProductArtikelCreateManyAndReturnArgs} args - Arguments to create many ImageProductArtikels.
     * @example
     * // Create many ImageProductArtikels
     * const imageProductArtikel = await prisma.imageProductArtikel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ImageProductArtikels and only return the `id`
     * const imageProductArtikelWithIdOnly = await prisma.imageProductArtikel.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends imageProductArtikelCreateManyAndReturnArgs>(args?: SelectSubset<T, imageProductArtikelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$imageProductArtikelPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ImageProductArtikel.
     * @param {imageProductArtikelDeleteArgs} args - Arguments to delete one ImageProductArtikel.
     * @example
     * // Delete one ImageProductArtikel
     * const ImageProductArtikel = await prisma.imageProductArtikel.delete({
     *   where: {
     *     // ... filter to delete one ImageProductArtikel
     *   }
     * })
     * 
     */
    delete<T extends imageProductArtikelDeleteArgs>(args: SelectSubset<T, imageProductArtikelDeleteArgs<ExtArgs>>): Prisma__imageProductArtikelClient<$Result.GetResult<Prisma.$imageProductArtikelPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ImageProductArtikel.
     * @param {imageProductArtikelUpdateArgs} args - Arguments to update one ImageProductArtikel.
     * @example
     * // Update one ImageProductArtikel
     * const imageProductArtikel = await prisma.imageProductArtikel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends imageProductArtikelUpdateArgs>(args: SelectSubset<T, imageProductArtikelUpdateArgs<ExtArgs>>): Prisma__imageProductArtikelClient<$Result.GetResult<Prisma.$imageProductArtikelPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ImageProductArtikels.
     * @param {imageProductArtikelDeleteManyArgs} args - Arguments to filter ImageProductArtikels to delete.
     * @example
     * // Delete a few ImageProductArtikels
     * const { count } = await prisma.imageProductArtikel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends imageProductArtikelDeleteManyArgs>(args?: SelectSubset<T, imageProductArtikelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ImageProductArtikels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imageProductArtikelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ImageProductArtikels
     * const imageProductArtikel = await prisma.imageProductArtikel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends imageProductArtikelUpdateManyArgs>(args: SelectSubset<T, imageProductArtikelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ImageProductArtikel.
     * @param {imageProductArtikelUpsertArgs} args - Arguments to update or create a ImageProductArtikel.
     * @example
     * // Update or create a ImageProductArtikel
     * const imageProductArtikel = await prisma.imageProductArtikel.upsert({
     *   create: {
     *     // ... data to create a ImageProductArtikel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ImageProductArtikel we want to update
     *   }
     * })
     */
    upsert<T extends imageProductArtikelUpsertArgs>(args: SelectSubset<T, imageProductArtikelUpsertArgs<ExtArgs>>): Prisma__imageProductArtikelClient<$Result.GetResult<Prisma.$imageProductArtikelPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ImageProductArtikels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imageProductArtikelCountArgs} args - Arguments to filter ImageProductArtikels to count.
     * @example
     * // Count the number of ImageProductArtikels
     * const count = await prisma.imageProductArtikel.count({
     *   where: {
     *     // ... the filter for the ImageProductArtikels we want to count
     *   }
     * })
    **/
    count<T extends imageProductArtikelCountArgs>(
      args?: Subset<T, imageProductArtikelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageProductArtikelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ImageProductArtikel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageProductArtikelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImageProductArtikelAggregateArgs>(args: Subset<T, ImageProductArtikelAggregateArgs>): Prisma.PrismaPromise<GetImageProductArtikelAggregateType<T>>

    /**
     * Group by ImageProductArtikel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imageProductArtikelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends imageProductArtikelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: imageProductArtikelGroupByArgs['orderBy'] }
        : { orderBy?: imageProductArtikelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, imageProductArtikelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageProductArtikelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the imageProductArtikel model
   */
  readonly fields: imageProductArtikelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for imageProductArtikel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__imageProductArtikelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userd<T extends postArtikelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, postArtikelDefaultArgs<ExtArgs>>): Prisma__postArtikelClient<$Result.GetResult<Prisma.$postArtikelPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the imageProductArtikel model
   */ 
  interface imageProductArtikelFieldRefs {
    readonly id: FieldRef<"imageProductArtikel", 'Int'>
    readonly start: FieldRef<"imageProductArtikel", 'DateTime'>
    readonly end: FieldRef<"imageProductArtikel", 'DateTime'>
    readonly asset_id: FieldRef<"imageProductArtikel", 'String'>
    readonly public_id: FieldRef<"imageProductArtikel", 'String'>
    readonly version: FieldRef<"imageProductArtikel", 'Int'>
    readonly version_id: FieldRef<"imageProductArtikel", 'String'>
    readonly signature: FieldRef<"imageProductArtikel", 'String'>
    readonly width: FieldRef<"imageProductArtikel", 'Int'>
    readonly height: FieldRef<"imageProductArtikel", 'Int'>
    readonly format: FieldRef<"imageProductArtikel", 'String'>
    readonly resource_type: FieldRef<"imageProductArtikel", 'String'>
    readonly created_at: FieldRef<"imageProductArtikel", 'DateTime'>
    readonly pages: FieldRef<"imageProductArtikel", 'Int'>
    readonly tags: FieldRef<"imageProductArtikel", 'Json'>
    readonly bytes: FieldRef<"imageProductArtikel", 'Int'>
    readonly type: FieldRef<"imageProductArtikel", 'String'>
    readonly etag: FieldRef<"imageProductArtikel", 'String'>
    readonly placeholder: FieldRef<"imageProductArtikel", 'Boolean'>
    readonly url: FieldRef<"imageProductArtikel", 'String'>
    readonly secure_url: FieldRef<"imageProductArtikel", 'String'>
    readonly asset_folder: FieldRef<"imageProductArtikel", 'String'>
    readonly display_name: FieldRef<"imageProductArtikel", 'String'>
    readonly original_filename: FieldRef<"imageProductArtikel", 'String'>
    readonly api_key: FieldRef<"imageProductArtikel", 'String'>
    readonly IdProductArtikel: FieldRef<"imageProductArtikel", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * imageProductArtikel findUnique
   */
  export type imageProductArtikelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imageProductArtikel
     */
    select?: imageProductArtikelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageProductArtikelInclude<ExtArgs> | null
    /**
     * Filter, which imageProductArtikel to fetch.
     */
    where: imageProductArtikelWhereUniqueInput
  }

  /**
   * imageProductArtikel findUniqueOrThrow
   */
  export type imageProductArtikelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imageProductArtikel
     */
    select?: imageProductArtikelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageProductArtikelInclude<ExtArgs> | null
    /**
     * Filter, which imageProductArtikel to fetch.
     */
    where: imageProductArtikelWhereUniqueInput
  }

  /**
   * imageProductArtikel findFirst
   */
  export type imageProductArtikelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imageProductArtikel
     */
    select?: imageProductArtikelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageProductArtikelInclude<ExtArgs> | null
    /**
     * Filter, which imageProductArtikel to fetch.
     */
    where?: imageProductArtikelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of imageProductArtikels to fetch.
     */
    orderBy?: imageProductArtikelOrderByWithRelationInput | imageProductArtikelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for imageProductArtikels.
     */
    cursor?: imageProductArtikelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` imageProductArtikels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` imageProductArtikels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of imageProductArtikels.
     */
    distinct?: ImageProductArtikelScalarFieldEnum | ImageProductArtikelScalarFieldEnum[]
  }

  /**
   * imageProductArtikel findFirstOrThrow
   */
  export type imageProductArtikelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imageProductArtikel
     */
    select?: imageProductArtikelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageProductArtikelInclude<ExtArgs> | null
    /**
     * Filter, which imageProductArtikel to fetch.
     */
    where?: imageProductArtikelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of imageProductArtikels to fetch.
     */
    orderBy?: imageProductArtikelOrderByWithRelationInput | imageProductArtikelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for imageProductArtikels.
     */
    cursor?: imageProductArtikelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` imageProductArtikels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` imageProductArtikels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of imageProductArtikels.
     */
    distinct?: ImageProductArtikelScalarFieldEnum | ImageProductArtikelScalarFieldEnum[]
  }

  /**
   * imageProductArtikel findMany
   */
  export type imageProductArtikelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imageProductArtikel
     */
    select?: imageProductArtikelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageProductArtikelInclude<ExtArgs> | null
    /**
     * Filter, which imageProductArtikels to fetch.
     */
    where?: imageProductArtikelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of imageProductArtikels to fetch.
     */
    orderBy?: imageProductArtikelOrderByWithRelationInput | imageProductArtikelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing imageProductArtikels.
     */
    cursor?: imageProductArtikelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` imageProductArtikels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` imageProductArtikels.
     */
    skip?: number
    distinct?: ImageProductArtikelScalarFieldEnum | ImageProductArtikelScalarFieldEnum[]
  }

  /**
   * imageProductArtikel create
   */
  export type imageProductArtikelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imageProductArtikel
     */
    select?: imageProductArtikelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageProductArtikelInclude<ExtArgs> | null
    /**
     * The data needed to create a imageProductArtikel.
     */
    data: XOR<imageProductArtikelCreateInput, imageProductArtikelUncheckedCreateInput>
  }

  /**
   * imageProductArtikel createMany
   */
  export type imageProductArtikelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many imageProductArtikels.
     */
    data: imageProductArtikelCreateManyInput | imageProductArtikelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * imageProductArtikel createManyAndReturn
   */
  export type imageProductArtikelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imageProductArtikel
     */
    select?: imageProductArtikelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many imageProductArtikels.
     */
    data: imageProductArtikelCreateManyInput | imageProductArtikelCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageProductArtikelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * imageProductArtikel update
   */
  export type imageProductArtikelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imageProductArtikel
     */
    select?: imageProductArtikelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageProductArtikelInclude<ExtArgs> | null
    /**
     * The data needed to update a imageProductArtikel.
     */
    data: XOR<imageProductArtikelUpdateInput, imageProductArtikelUncheckedUpdateInput>
    /**
     * Choose, which imageProductArtikel to update.
     */
    where: imageProductArtikelWhereUniqueInput
  }

  /**
   * imageProductArtikel updateMany
   */
  export type imageProductArtikelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update imageProductArtikels.
     */
    data: XOR<imageProductArtikelUpdateManyMutationInput, imageProductArtikelUncheckedUpdateManyInput>
    /**
     * Filter which imageProductArtikels to update
     */
    where?: imageProductArtikelWhereInput
  }

  /**
   * imageProductArtikel upsert
   */
  export type imageProductArtikelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imageProductArtikel
     */
    select?: imageProductArtikelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageProductArtikelInclude<ExtArgs> | null
    /**
     * The filter to search for the imageProductArtikel to update in case it exists.
     */
    where: imageProductArtikelWhereUniqueInput
    /**
     * In case the imageProductArtikel found by the `where` argument doesn't exist, create a new imageProductArtikel with this data.
     */
    create: XOR<imageProductArtikelCreateInput, imageProductArtikelUncheckedCreateInput>
    /**
     * In case the imageProductArtikel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<imageProductArtikelUpdateInput, imageProductArtikelUncheckedUpdateInput>
  }

  /**
   * imageProductArtikel delete
   */
  export type imageProductArtikelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imageProductArtikel
     */
    select?: imageProductArtikelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageProductArtikelInclude<ExtArgs> | null
    /**
     * Filter which imageProductArtikel to delete.
     */
    where: imageProductArtikelWhereUniqueInput
  }

  /**
   * imageProductArtikel deleteMany
   */
  export type imageProductArtikelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which imageProductArtikels to delete
     */
    where?: imageProductArtikelWhereInput
  }

  /**
   * imageProductArtikel without action
   */
  export type imageProductArtikelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the imageProductArtikel
     */
    select?: imageProductArtikelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageProductArtikelInclude<ExtArgs> | null
  }


  /**
   * Model categoryArtikel
   */

  export type AggregateCategoryArtikel = {
    _count: CategoryArtikelCountAggregateOutputType | null
    _avg: CategoryArtikelAvgAggregateOutputType | null
    _sum: CategoryArtikelSumAggregateOutputType | null
    _min: CategoryArtikelMinAggregateOutputType | null
    _max: CategoryArtikelMaxAggregateOutputType | null
  }

  export type CategoryArtikelAvgAggregateOutputType = {
    id: number | null
  }

  export type CategoryArtikelSumAggregateOutputType = {
    id: number | null
  }

  export type CategoryArtikelMinAggregateOutputType = {
    id: number | null
    start: Date | null
    end: Date | null
    category: string | null
    slugCategory: string | null
    image: string | null
    icon: string | null
    urlYoutube: string | null
    title: string | null
    desc: string | null
    tags: string | null
  }

  export type CategoryArtikelMaxAggregateOutputType = {
    id: number | null
    start: Date | null
    end: Date | null
    category: string | null
    slugCategory: string | null
    image: string | null
    icon: string | null
    urlYoutube: string | null
    title: string | null
    desc: string | null
    tags: string | null
  }

  export type CategoryArtikelCountAggregateOutputType = {
    id: number
    start: number
    end: number
    category: number
    slugCategory: number
    image: number
    icon: number
    urlYoutube: number
    title: number
    desc: number
    tags: number
    _all: number
  }


  export type CategoryArtikelAvgAggregateInputType = {
    id?: true
  }

  export type CategoryArtikelSumAggregateInputType = {
    id?: true
  }

  export type CategoryArtikelMinAggregateInputType = {
    id?: true
    start?: true
    end?: true
    category?: true
    slugCategory?: true
    image?: true
    icon?: true
    urlYoutube?: true
    title?: true
    desc?: true
    tags?: true
  }

  export type CategoryArtikelMaxAggregateInputType = {
    id?: true
    start?: true
    end?: true
    category?: true
    slugCategory?: true
    image?: true
    icon?: true
    urlYoutube?: true
    title?: true
    desc?: true
    tags?: true
  }

  export type CategoryArtikelCountAggregateInputType = {
    id?: true
    start?: true
    end?: true
    category?: true
    slugCategory?: true
    image?: true
    icon?: true
    urlYoutube?: true
    title?: true
    desc?: true
    tags?: true
    _all?: true
  }

  export type CategoryArtikelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categoryArtikel to aggregate.
     */
    where?: categoryArtikelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categoryArtikels to fetch.
     */
    orderBy?: categoryArtikelOrderByWithRelationInput | categoryArtikelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoryArtikelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categoryArtikels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categoryArtikels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categoryArtikels
    **/
    _count?: true | CategoryArtikelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryArtikelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoryArtikelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryArtikelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryArtikelMaxAggregateInputType
  }

  export type GetCategoryArtikelAggregateType<T extends CategoryArtikelAggregateArgs> = {
        [P in keyof T & keyof AggregateCategoryArtikel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategoryArtikel[P]>
      : GetScalarType<T[P], AggregateCategoryArtikel[P]>
  }




  export type categoryArtikelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoryArtikelWhereInput
    orderBy?: categoryArtikelOrderByWithAggregationInput | categoryArtikelOrderByWithAggregationInput[]
    by: CategoryArtikelScalarFieldEnum[] | CategoryArtikelScalarFieldEnum
    having?: categoryArtikelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryArtikelCountAggregateInputType | true
    _avg?: CategoryArtikelAvgAggregateInputType
    _sum?: CategoryArtikelSumAggregateInputType
    _min?: CategoryArtikelMinAggregateInputType
    _max?: CategoryArtikelMaxAggregateInputType
  }

  export type CategoryArtikelGroupByOutputType = {
    id: number
    start: Date
    end: Date
    category: string
    slugCategory: string
    image: string | null
    icon: string | null
    urlYoutube: string | null
    title: string | null
    desc: string | null
    tags: string | null
    _count: CategoryArtikelCountAggregateOutputType | null
    _avg: CategoryArtikelAvgAggregateOutputType | null
    _sum: CategoryArtikelSumAggregateOutputType | null
    _min: CategoryArtikelMinAggregateOutputType | null
    _max: CategoryArtikelMaxAggregateOutputType | null
  }

  type GetCategoryArtikelGroupByPayload<T extends categoryArtikelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryArtikelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryArtikelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryArtikelGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryArtikelGroupByOutputType[P]>
        }
      >
    >


  export type categoryArtikelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    end?: boolean
    category?: boolean
    slugCategory?: boolean
    image?: boolean
    icon?: boolean
    urlYoutube?: boolean
    title?: boolean
    desc?: boolean
    tags?: boolean
    postArtikel?: boolean | categoryArtikel$postArtikelArgs<ExtArgs>
    _count?: boolean | CategoryArtikelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categoryArtikel"]>

  export type categoryArtikelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    end?: boolean
    category?: boolean
    slugCategory?: boolean
    image?: boolean
    icon?: boolean
    urlYoutube?: boolean
    title?: boolean
    desc?: boolean
    tags?: boolean
  }, ExtArgs["result"]["categoryArtikel"]>

  export type categoryArtikelSelectScalar = {
    id?: boolean
    start?: boolean
    end?: boolean
    category?: boolean
    slugCategory?: boolean
    image?: boolean
    icon?: boolean
    urlYoutube?: boolean
    title?: boolean
    desc?: boolean
    tags?: boolean
  }

  export type categoryArtikelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    postArtikel?: boolean | categoryArtikel$postArtikelArgs<ExtArgs>
    _count?: boolean | CategoryArtikelCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoryArtikelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $categoryArtikelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categoryArtikel"
    objects: {
      postArtikel: Prisma.$postArtikelPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      start: Date
      end: Date
      category: string
      slugCategory: string
      image: string | null
      icon: string | null
      urlYoutube: string | null
      title: string | null
      desc: string | null
      tags: string | null
    }, ExtArgs["result"]["categoryArtikel"]>
    composites: {}
  }

  type categoryArtikelGetPayload<S extends boolean | null | undefined | categoryArtikelDefaultArgs> = $Result.GetResult<Prisma.$categoryArtikelPayload, S>

  type categoryArtikelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<categoryArtikelFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoryArtikelCountAggregateInputType | true
    }

  export interface categoryArtikelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categoryArtikel'], meta: { name: 'categoryArtikel' } }
    /**
     * Find zero or one CategoryArtikel that matches the filter.
     * @param {categoryArtikelFindUniqueArgs} args - Arguments to find a CategoryArtikel
     * @example
     * // Get one CategoryArtikel
     * const categoryArtikel = await prisma.categoryArtikel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoryArtikelFindUniqueArgs>(args: SelectSubset<T, categoryArtikelFindUniqueArgs<ExtArgs>>): Prisma__categoryArtikelClient<$Result.GetResult<Prisma.$categoryArtikelPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CategoryArtikel that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {categoryArtikelFindUniqueOrThrowArgs} args - Arguments to find a CategoryArtikel
     * @example
     * // Get one CategoryArtikel
     * const categoryArtikel = await prisma.categoryArtikel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoryArtikelFindUniqueOrThrowArgs>(args: SelectSubset<T, categoryArtikelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoryArtikelClient<$Result.GetResult<Prisma.$categoryArtikelPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CategoryArtikel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryArtikelFindFirstArgs} args - Arguments to find a CategoryArtikel
     * @example
     * // Get one CategoryArtikel
     * const categoryArtikel = await prisma.categoryArtikel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoryArtikelFindFirstArgs>(args?: SelectSubset<T, categoryArtikelFindFirstArgs<ExtArgs>>): Prisma__categoryArtikelClient<$Result.GetResult<Prisma.$categoryArtikelPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CategoryArtikel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryArtikelFindFirstOrThrowArgs} args - Arguments to find a CategoryArtikel
     * @example
     * // Get one CategoryArtikel
     * const categoryArtikel = await prisma.categoryArtikel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoryArtikelFindFirstOrThrowArgs>(args?: SelectSubset<T, categoryArtikelFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoryArtikelClient<$Result.GetResult<Prisma.$categoryArtikelPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CategoryArtikels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryArtikelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CategoryArtikels
     * const categoryArtikels = await prisma.categoryArtikel.findMany()
     * 
     * // Get first 10 CategoryArtikels
     * const categoryArtikels = await prisma.categoryArtikel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryArtikelWithIdOnly = await prisma.categoryArtikel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoryArtikelFindManyArgs>(args?: SelectSubset<T, categoryArtikelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryArtikelPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CategoryArtikel.
     * @param {categoryArtikelCreateArgs} args - Arguments to create a CategoryArtikel.
     * @example
     * // Create one CategoryArtikel
     * const CategoryArtikel = await prisma.categoryArtikel.create({
     *   data: {
     *     // ... data to create a CategoryArtikel
     *   }
     * })
     * 
     */
    create<T extends categoryArtikelCreateArgs>(args: SelectSubset<T, categoryArtikelCreateArgs<ExtArgs>>): Prisma__categoryArtikelClient<$Result.GetResult<Prisma.$categoryArtikelPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CategoryArtikels.
     * @param {categoryArtikelCreateManyArgs} args - Arguments to create many CategoryArtikels.
     * @example
     * // Create many CategoryArtikels
     * const categoryArtikel = await prisma.categoryArtikel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoryArtikelCreateManyArgs>(args?: SelectSubset<T, categoryArtikelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CategoryArtikels and returns the data saved in the database.
     * @param {categoryArtikelCreateManyAndReturnArgs} args - Arguments to create many CategoryArtikels.
     * @example
     * // Create many CategoryArtikels
     * const categoryArtikel = await prisma.categoryArtikel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CategoryArtikels and only return the `id`
     * const categoryArtikelWithIdOnly = await prisma.categoryArtikel.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoryArtikelCreateManyAndReturnArgs>(args?: SelectSubset<T, categoryArtikelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoryArtikelPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CategoryArtikel.
     * @param {categoryArtikelDeleteArgs} args - Arguments to delete one CategoryArtikel.
     * @example
     * // Delete one CategoryArtikel
     * const CategoryArtikel = await prisma.categoryArtikel.delete({
     *   where: {
     *     // ... filter to delete one CategoryArtikel
     *   }
     * })
     * 
     */
    delete<T extends categoryArtikelDeleteArgs>(args: SelectSubset<T, categoryArtikelDeleteArgs<ExtArgs>>): Prisma__categoryArtikelClient<$Result.GetResult<Prisma.$categoryArtikelPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CategoryArtikel.
     * @param {categoryArtikelUpdateArgs} args - Arguments to update one CategoryArtikel.
     * @example
     * // Update one CategoryArtikel
     * const categoryArtikel = await prisma.categoryArtikel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoryArtikelUpdateArgs>(args: SelectSubset<T, categoryArtikelUpdateArgs<ExtArgs>>): Prisma__categoryArtikelClient<$Result.GetResult<Prisma.$categoryArtikelPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CategoryArtikels.
     * @param {categoryArtikelDeleteManyArgs} args - Arguments to filter CategoryArtikels to delete.
     * @example
     * // Delete a few CategoryArtikels
     * const { count } = await prisma.categoryArtikel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoryArtikelDeleteManyArgs>(args?: SelectSubset<T, categoryArtikelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CategoryArtikels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryArtikelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CategoryArtikels
     * const categoryArtikel = await prisma.categoryArtikel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoryArtikelUpdateManyArgs>(args: SelectSubset<T, categoryArtikelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CategoryArtikel.
     * @param {categoryArtikelUpsertArgs} args - Arguments to update or create a CategoryArtikel.
     * @example
     * // Update or create a CategoryArtikel
     * const categoryArtikel = await prisma.categoryArtikel.upsert({
     *   create: {
     *     // ... data to create a CategoryArtikel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CategoryArtikel we want to update
     *   }
     * })
     */
    upsert<T extends categoryArtikelUpsertArgs>(args: SelectSubset<T, categoryArtikelUpsertArgs<ExtArgs>>): Prisma__categoryArtikelClient<$Result.GetResult<Prisma.$categoryArtikelPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CategoryArtikels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryArtikelCountArgs} args - Arguments to filter CategoryArtikels to count.
     * @example
     * // Count the number of CategoryArtikels
     * const count = await prisma.categoryArtikel.count({
     *   where: {
     *     // ... the filter for the CategoryArtikels we want to count
     *   }
     * })
    **/
    count<T extends categoryArtikelCountArgs>(
      args?: Subset<T, categoryArtikelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryArtikelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CategoryArtikel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryArtikelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryArtikelAggregateArgs>(args: Subset<T, CategoryArtikelAggregateArgs>): Prisma.PrismaPromise<GetCategoryArtikelAggregateType<T>>

    /**
     * Group by CategoryArtikel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoryArtikelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categoryArtikelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoryArtikelGroupByArgs['orderBy'] }
        : { orderBy?: categoryArtikelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categoryArtikelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryArtikelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categoryArtikel model
   */
  readonly fields: categoryArtikelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categoryArtikel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoryArtikelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    postArtikel<T extends categoryArtikel$postArtikelArgs<ExtArgs> = {}>(args?: Subset<T, categoryArtikel$postArtikelArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$postArtikelPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the categoryArtikel model
   */ 
  interface categoryArtikelFieldRefs {
    readonly id: FieldRef<"categoryArtikel", 'Int'>
    readonly start: FieldRef<"categoryArtikel", 'DateTime'>
    readonly end: FieldRef<"categoryArtikel", 'DateTime'>
    readonly category: FieldRef<"categoryArtikel", 'String'>
    readonly slugCategory: FieldRef<"categoryArtikel", 'String'>
    readonly image: FieldRef<"categoryArtikel", 'String'>
    readonly icon: FieldRef<"categoryArtikel", 'String'>
    readonly urlYoutube: FieldRef<"categoryArtikel", 'String'>
    readonly title: FieldRef<"categoryArtikel", 'String'>
    readonly desc: FieldRef<"categoryArtikel", 'String'>
    readonly tags: FieldRef<"categoryArtikel", 'String'>
  }
    

  // Custom InputTypes
  /**
   * categoryArtikel findUnique
   */
  export type categoryArtikelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoryArtikel
     */
    select?: categoryArtikelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryArtikelInclude<ExtArgs> | null
    /**
     * Filter, which categoryArtikel to fetch.
     */
    where: categoryArtikelWhereUniqueInput
  }

  /**
   * categoryArtikel findUniqueOrThrow
   */
  export type categoryArtikelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoryArtikel
     */
    select?: categoryArtikelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryArtikelInclude<ExtArgs> | null
    /**
     * Filter, which categoryArtikel to fetch.
     */
    where: categoryArtikelWhereUniqueInput
  }

  /**
   * categoryArtikel findFirst
   */
  export type categoryArtikelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoryArtikel
     */
    select?: categoryArtikelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryArtikelInclude<ExtArgs> | null
    /**
     * Filter, which categoryArtikel to fetch.
     */
    where?: categoryArtikelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categoryArtikels to fetch.
     */
    orderBy?: categoryArtikelOrderByWithRelationInput | categoryArtikelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categoryArtikels.
     */
    cursor?: categoryArtikelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categoryArtikels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categoryArtikels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categoryArtikels.
     */
    distinct?: CategoryArtikelScalarFieldEnum | CategoryArtikelScalarFieldEnum[]
  }

  /**
   * categoryArtikel findFirstOrThrow
   */
  export type categoryArtikelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoryArtikel
     */
    select?: categoryArtikelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryArtikelInclude<ExtArgs> | null
    /**
     * Filter, which categoryArtikel to fetch.
     */
    where?: categoryArtikelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categoryArtikels to fetch.
     */
    orderBy?: categoryArtikelOrderByWithRelationInput | categoryArtikelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categoryArtikels.
     */
    cursor?: categoryArtikelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categoryArtikels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categoryArtikels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categoryArtikels.
     */
    distinct?: CategoryArtikelScalarFieldEnum | CategoryArtikelScalarFieldEnum[]
  }

  /**
   * categoryArtikel findMany
   */
  export type categoryArtikelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoryArtikel
     */
    select?: categoryArtikelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryArtikelInclude<ExtArgs> | null
    /**
     * Filter, which categoryArtikels to fetch.
     */
    where?: categoryArtikelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categoryArtikels to fetch.
     */
    orderBy?: categoryArtikelOrderByWithRelationInput | categoryArtikelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categoryArtikels.
     */
    cursor?: categoryArtikelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categoryArtikels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categoryArtikels.
     */
    skip?: number
    distinct?: CategoryArtikelScalarFieldEnum | CategoryArtikelScalarFieldEnum[]
  }

  /**
   * categoryArtikel create
   */
  export type categoryArtikelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoryArtikel
     */
    select?: categoryArtikelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryArtikelInclude<ExtArgs> | null
    /**
     * The data needed to create a categoryArtikel.
     */
    data: XOR<categoryArtikelCreateInput, categoryArtikelUncheckedCreateInput>
  }

  /**
   * categoryArtikel createMany
   */
  export type categoryArtikelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categoryArtikels.
     */
    data: categoryArtikelCreateManyInput | categoryArtikelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categoryArtikel createManyAndReturn
   */
  export type categoryArtikelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoryArtikel
     */
    select?: categoryArtikelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many categoryArtikels.
     */
    data: categoryArtikelCreateManyInput | categoryArtikelCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categoryArtikel update
   */
  export type categoryArtikelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoryArtikel
     */
    select?: categoryArtikelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryArtikelInclude<ExtArgs> | null
    /**
     * The data needed to update a categoryArtikel.
     */
    data: XOR<categoryArtikelUpdateInput, categoryArtikelUncheckedUpdateInput>
    /**
     * Choose, which categoryArtikel to update.
     */
    where: categoryArtikelWhereUniqueInput
  }

  /**
   * categoryArtikel updateMany
   */
  export type categoryArtikelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categoryArtikels.
     */
    data: XOR<categoryArtikelUpdateManyMutationInput, categoryArtikelUncheckedUpdateManyInput>
    /**
     * Filter which categoryArtikels to update
     */
    where?: categoryArtikelWhereInput
  }

  /**
   * categoryArtikel upsert
   */
  export type categoryArtikelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoryArtikel
     */
    select?: categoryArtikelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryArtikelInclude<ExtArgs> | null
    /**
     * The filter to search for the categoryArtikel to update in case it exists.
     */
    where: categoryArtikelWhereUniqueInput
    /**
     * In case the categoryArtikel found by the `where` argument doesn't exist, create a new categoryArtikel with this data.
     */
    create: XOR<categoryArtikelCreateInput, categoryArtikelUncheckedCreateInput>
    /**
     * In case the categoryArtikel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoryArtikelUpdateInput, categoryArtikelUncheckedUpdateInput>
  }

  /**
   * categoryArtikel delete
   */
  export type categoryArtikelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoryArtikel
     */
    select?: categoryArtikelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryArtikelInclude<ExtArgs> | null
    /**
     * Filter which categoryArtikel to delete.
     */
    where: categoryArtikelWhereUniqueInput
  }

  /**
   * categoryArtikel deleteMany
   */
  export type categoryArtikelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categoryArtikels to delete
     */
    where?: categoryArtikelWhereInput
  }

  /**
   * categoryArtikel.postArtikel
   */
  export type categoryArtikel$postArtikelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the postArtikel
     */
    select?: postArtikelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: postArtikelInclude<ExtArgs> | null
    where?: postArtikelWhereInput
    orderBy?: postArtikelOrderByWithRelationInput | postArtikelOrderByWithRelationInput[]
    cursor?: postArtikelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostArtikelScalarFieldEnum | PostArtikelScalarFieldEnum[]
  }

  /**
   * categoryArtikel without action
   */
  export type categoryArtikelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categoryArtikel
     */
    select?: categoryArtikelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoryArtikelInclude<ExtArgs> | null
  }


  /**
   * Model cart
   */

  export type AggregateCart = {
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  export type CartAvgAggregateOutputType = {
    id: number | null
  }

  export type CartSumAggregateOutputType = {
    id: number | null
  }

  export type CartMinAggregateOutputType = {
    IDCart: string | null
    email: string | null
    clerkUserId: string | null
    name: string | null
    avatar: string | null
    id: number | null
    start: Date | null
    end: Date | null
  }

  export type CartMaxAggregateOutputType = {
    IDCart: string | null
    email: string | null
    clerkUserId: string | null
    name: string | null
    avatar: string | null
    id: number | null
    start: Date | null
    end: Date | null
  }

  export type CartCountAggregateOutputType = {
    IDCart: number
    email: number
    clerkUserId: number
    name: number
    avatar: number
    id: number
    start: number
    end: number
    _all: number
  }


  export type CartAvgAggregateInputType = {
    id?: true
  }

  export type CartSumAggregateInputType = {
    id?: true
  }

  export type CartMinAggregateInputType = {
    IDCart?: true
    email?: true
    clerkUserId?: true
    name?: true
    avatar?: true
    id?: true
    start?: true
    end?: true
  }

  export type CartMaxAggregateInputType = {
    IDCart?: true
    email?: true
    clerkUserId?: true
    name?: true
    avatar?: true
    id?: true
    start?: true
    end?: true
  }

  export type CartCountAggregateInputType = {
    IDCart?: true
    email?: true
    clerkUserId?: true
    name?: true
    avatar?: true
    id?: true
    start?: true
    end?: true
    _all?: true
  }

  export type CartAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cart to aggregate.
     */
    where?: cartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned carts
    **/
    _count?: true | CartCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartMaxAggregateInputType
  }

  export type GetCartAggregateType<T extends CartAggregateArgs> = {
        [P in keyof T & keyof AggregateCart]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCart[P]>
      : GetScalarType<T[P], AggregateCart[P]>
  }




  export type cartGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cartWhereInput
    orderBy?: cartOrderByWithAggregationInput | cartOrderByWithAggregationInput[]
    by: CartScalarFieldEnum[] | CartScalarFieldEnum
    having?: cartScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartCountAggregateInputType | true
    _avg?: CartAvgAggregateInputType
    _sum?: CartSumAggregateInputType
    _min?: CartMinAggregateInputType
    _max?: CartMaxAggregateInputType
  }

  export type CartGroupByOutputType = {
    IDCart: string
    email: string
    clerkUserId: string
    name: string | null
    avatar: string | null
    id: number
    start: Date
    end: Date | null
    _count: CartCountAggregateOutputType | null
    _avg: CartAvgAggregateOutputType | null
    _sum: CartSumAggregateOutputType | null
    _min: CartMinAggregateOutputType | null
    _max: CartMaxAggregateOutputType | null
  }

  type GetCartGroupByPayload<T extends cartGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartGroupByOutputType[P]>
            : GetScalarType<T[P], CartGroupByOutputType[P]>
        }
      >
    >


  export type cartSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IDCart?: boolean
    email?: boolean
    clerkUserId?: boolean
    name?: boolean
    avatar?: boolean
    id?: boolean
    start?: boolean
    end?: boolean
    items?: boolean | cart$itemsArgs<ExtArgs>
    formData?: boolean | cart$formDataArgs<ExtArgs>
    dataPesanan?: boolean | cart$dataPesananArgs<ExtArgs>
    ongkosKirim?: boolean | cart$ongkosKirimArgs<ExtArgs>
    _count?: boolean | CartCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cart"]>

  export type cartSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    IDCart?: boolean
    email?: boolean
    clerkUserId?: boolean
    name?: boolean
    avatar?: boolean
    id?: boolean
    start?: boolean
    end?: boolean
  }, ExtArgs["result"]["cart"]>

  export type cartSelectScalar = {
    IDCart?: boolean
    email?: boolean
    clerkUserId?: boolean
    name?: boolean
    avatar?: boolean
    id?: boolean
    start?: boolean
    end?: boolean
  }

  export type cartInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | cart$itemsArgs<ExtArgs>
    formData?: boolean | cart$formDataArgs<ExtArgs>
    dataPesanan?: boolean | cart$dataPesananArgs<ExtArgs>
    ongkosKirim?: boolean | cart$ongkosKirimArgs<ExtArgs>
    _count?: boolean | CartCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type cartIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $cartPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cart"
    objects: {
      items: Prisma.$cartItemPayload<ExtArgs>[]
      formData: Prisma.$formPembelianPayload<ExtArgs> | null
      dataPesanan: Prisma.$dataPesananPayload<ExtArgs>[]
      ongkosKirim: Prisma.$ongkosKirimPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      IDCart: string
      email: string
      clerkUserId: string
      name: string | null
      avatar: string | null
      id: number
      start: Date
      end: Date | null
    }, ExtArgs["result"]["cart"]>
    composites: {}
  }

  type cartGetPayload<S extends boolean | null | undefined | cartDefaultArgs> = $Result.GetResult<Prisma.$cartPayload, S>

  type cartCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<cartFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CartCountAggregateInputType | true
    }

  export interface cartDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cart'], meta: { name: 'cart' } }
    /**
     * Find zero or one Cart that matches the filter.
     * @param {cartFindUniqueArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cartFindUniqueArgs>(args: SelectSubset<T, cartFindUniqueArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Cart that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {cartFindUniqueOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cartFindUniqueOrThrowArgs>(args: SelectSubset<T, cartFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Cart that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartFindFirstArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cartFindFirstArgs>(args?: SelectSubset<T, cartFindFirstArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Cart that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartFindFirstOrThrowArgs} args - Arguments to find a Cart
     * @example
     * // Get one Cart
     * const cart = await prisma.cart.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cartFindFirstOrThrowArgs>(args?: SelectSubset<T, cartFindFirstOrThrowArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.cart.findMany()
     * 
     * // Get first 10 Carts
     * const carts = await prisma.cart.findMany({ take: 10 })
     * 
     * // Only select the `IDCart`
     * const cartWithIDCartOnly = await prisma.cart.findMany({ select: { IDCart: true } })
     * 
     */
    findMany<T extends cartFindManyArgs>(args?: SelectSubset<T, cartFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Cart.
     * @param {cartCreateArgs} args - Arguments to create a Cart.
     * @example
     * // Create one Cart
     * const Cart = await prisma.cart.create({
     *   data: {
     *     // ... data to create a Cart
     *   }
     * })
     * 
     */
    create<T extends cartCreateArgs>(args: SelectSubset<T, cartCreateArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Carts.
     * @param {cartCreateManyArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const cart = await prisma.cart.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cartCreateManyArgs>(args?: SelectSubset<T, cartCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Carts and returns the data saved in the database.
     * @param {cartCreateManyAndReturnArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const cart = await prisma.cart.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Carts and only return the `IDCart`
     * const cartWithIDCartOnly = await prisma.cart.createManyAndReturn({ 
     *   select: { IDCart: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cartCreateManyAndReturnArgs>(args?: SelectSubset<T, cartCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Cart.
     * @param {cartDeleteArgs} args - Arguments to delete one Cart.
     * @example
     * // Delete one Cart
     * const Cart = await prisma.cart.delete({
     *   where: {
     *     // ... filter to delete one Cart
     *   }
     * })
     * 
     */
    delete<T extends cartDeleteArgs>(args: SelectSubset<T, cartDeleteArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Cart.
     * @param {cartUpdateArgs} args - Arguments to update one Cart.
     * @example
     * // Update one Cart
     * const cart = await prisma.cart.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cartUpdateArgs>(args: SelectSubset<T, cartUpdateArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Carts.
     * @param {cartDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.cart.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cartDeleteManyArgs>(args?: SelectSubset<T, cartDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carts
     * const cart = await prisma.cart.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cartUpdateManyArgs>(args: SelectSubset<T, cartUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cart.
     * @param {cartUpsertArgs} args - Arguments to update or create a Cart.
     * @example
     * // Update or create a Cart
     * const cart = await prisma.cart.upsert({
     *   create: {
     *     // ... data to create a Cart
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cart we want to update
     *   }
     * })
     */
    upsert<T extends cartUpsertArgs>(args: SelectSubset<T, cartUpsertArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.cart.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
    **/
    count<T extends cartCountArgs>(
      args?: Subset<T, cartCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CartAggregateArgs>(args: Subset<T, CartAggregateArgs>): Prisma.PrismaPromise<GetCartAggregateType<T>>

    /**
     * Group by Cart.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cartGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cartGroupByArgs['orderBy'] }
        : { orderBy?: cartGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cartGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cart model
   */
  readonly fields: cartFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cart.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cartClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends cart$itemsArgs<ExtArgs> = {}>(args?: Subset<T, cart$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartItemPayload<ExtArgs>, T, "findMany"> | Null>
    formData<T extends cart$formDataArgs<ExtArgs> = {}>(args?: Subset<T, cart$formDataArgs<ExtArgs>>): Prisma__formPembelianClient<$Result.GetResult<Prisma.$formPembelianPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    dataPesanan<T extends cart$dataPesananArgs<ExtArgs> = {}>(args?: Subset<T, cart$dataPesananArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dataPesananPayload<ExtArgs>, T, "findMany"> | Null>
    ongkosKirim<T extends cart$ongkosKirimArgs<ExtArgs> = {}>(args?: Subset<T, cart$ongkosKirimArgs<ExtArgs>>): Prisma__ongkosKirimClient<$Result.GetResult<Prisma.$ongkosKirimPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cart model
   */ 
  interface cartFieldRefs {
    readonly IDCart: FieldRef<"cart", 'String'>
    readonly email: FieldRef<"cart", 'String'>
    readonly clerkUserId: FieldRef<"cart", 'String'>
    readonly name: FieldRef<"cart", 'String'>
    readonly avatar: FieldRef<"cart", 'String'>
    readonly id: FieldRef<"cart", 'Int'>
    readonly start: FieldRef<"cart", 'DateTime'>
    readonly end: FieldRef<"cart", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * cart findUnique
   */
  export type cartFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter, which cart to fetch.
     */
    where: cartWhereUniqueInput
  }

  /**
   * cart findUniqueOrThrow
   */
  export type cartFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter, which cart to fetch.
     */
    where: cartWhereUniqueInput
  }

  /**
   * cart findFirst
   */
  export type cartFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter, which cart to fetch.
     */
    where?: cartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carts.
     */
    cursor?: cartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * cart findFirstOrThrow
   */
  export type cartFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter, which cart to fetch.
     */
    where?: cartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carts.
     */
    cursor?: cartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carts.
     */
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * cart findMany
   */
  export type cartFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter, which carts to fetch.
     */
    where?: cartWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartOrderByWithRelationInput | cartOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing carts.
     */
    cursor?: cartWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    distinct?: CartScalarFieldEnum | CartScalarFieldEnum[]
  }

  /**
   * cart create
   */
  export type cartCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * The data needed to create a cart.
     */
    data: XOR<cartCreateInput, cartUncheckedCreateInput>
  }

  /**
   * cart createMany
   */
  export type cartCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many carts.
     */
    data: cartCreateManyInput | cartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cart createManyAndReturn
   */
  export type cartCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many carts.
     */
    data: cartCreateManyInput | cartCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cart update
   */
  export type cartUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * The data needed to update a cart.
     */
    data: XOR<cartUpdateInput, cartUncheckedUpdateInput>
    /**
     * Choose, which cart to update.
     */
    where: cartWhereUniqueInput
  }

  /**
   * cart updateMany
   */
  export type cartUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update carts.
     */
    data: XOR<cartUpdateManyMutationInput, cartUncheckedUpdateManyInput>
    /**
     * Filter which carts to update
     */
    where?: cartWhereInput
  }

  /**
   * cart upsert
   */
  export type cartUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * The filter to search for the cart to update in case it exists.
     */
    where: cartWhereUniqueInput
    /**
     * In case the cart found by the `where` argument doesn't exist, create a new cart with this data.
     */
    create: XOR<cartCreateInput, cartUncheckedCreateInput>
    /**
     * In case the cart was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cartUpdateInput, cartUncheckedUpdateInput>
  }

  /**
   * cart delete
   */
  export type cartDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
    /**
     * Filter which cart to delete.
     */
    where: cartWhereUniqueInput
  }

  /**
   * cart deleteMany
   */
  export type cartDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which carts to delete
     */
    where?: cartWhereInput
  }

  /**
   * cart.items
   */
  export type cart$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartItem
     */
    select?: cartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartItemInclude<ExtArgs> | null
    where?: cartItemWhereInput
    orderBy?: cartItemOrderByWithRelationInput | cartItemOrderByWithRelationInput[]
    cursor?: cartItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * cart.formData
   */
  export type cart$formDataArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formPembelian
     */
    select?: formPembelianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formPembelianInclude<ExtArgs> | null
    where?: formPembelianWhereInput
  }

  /**
   * cart.dataPesanan
   */
  export type cart$dataPesananArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dataPesanan
     */
    select?: dataPesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dataPesananInclude<ExtArgs> | null
    where?: dataPesananWhereInput
    orderBy?: dataPesananOrderByWithRelationInput | dataPesananOrderByWithRelationInput[]
    cursor?: dataPesananWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DataPesananScalarFieldEnum | DataPesananScalarFieldEnum[]
  }

  /**
   * cart.ongkosKirim
   */
  export type cart$ongkosKirimArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ongkosKirim
     */
    select?: ongkosKirimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ongkosKirimInclude<ExtArgs> | null
    where?: ongkosKirimWhereInput
  }

  /**
   * cart without action
   */
  export type cartDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart
     */
    select?: cartSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartInclude<ExtArgs> | null
  }


  /**
   * Model cartItem
   */

  export type AggregateCartItem = {
    _count: CartItemCountAggregateOutputType | null
    _avg: CartItemAvgAggregateOutputType | null
    _sum: CartItemSumAggregateOutputType | null
    _min: CartItemMinAggregateOutputType | null
    _max: CartItemMaxAggregateOutputType | null
  }

  export type CartItemAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    quantity: number | null
  }

  export type CartItemSumAggregateOutputType = {
    id: number | null
    productId: number | null
    quantity: number | null
  }

  export type CartItemMinAggregateOutputType = {
    id: number | null
    start: Date | null
    end: Date | null
    cartId: string | null
    productId: number | null
    quantity: number | null
    checkList: boolean | null
    note: string | null
  }

  export type CartItemMaxAggregateOutputType = {
    id: number | null
    start: Date | null
    end: Date | null
    cartId: string | null
    productId: number | null
    quantity: number | null
    checkList: boolean | null
    note: string | null
  }

  export type CartItemCountAggregateOutputType = {
    id: number
    start: number
    end: number
    cartId: number
    productId: number
    quantity: number
    checkList: number
    note: number
    _all: number
  }


  export type CartItemAvgAggregateInputType = {
    id?: true
    productId?: true
    quantity?: true
  }

  export type CartItemSumAggregateInputType = {
    id?: true
    productId?: true
    quantity?: true
  }

  export type CartItemMinAggregateInputType = {
    id?: true
    start?: true
    end?: true
    cartId?: true
    productId?: true
    quantity?: true
    checkList?: true
    note?: true
  }

  export type CartItemMaxAggregateInputType = {
    id?: true
    start?: true
    end?: true
    cartId?: true
    productId?: true
    quantity?: true
    checkList?: true
    note?: true
  }

  export type CartItemCountAggregateInputType = {
    id?: true
    start?: true
    end?: true
    cartId?: true
    productId?: true
    quantity?: true
    checkList?: true
    note?: true
    _all?: true
  }

  export type CartItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cartItem to aggregate.
     */
    where?: cartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cartItems to fetch.
     */
    orderBy?: cartItemOrderByWithRelationInput | cartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cartItems
    **/
    _count?: true | CartItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartItemMaxAggregateInputType
  }

  export type GetCartItemAggregateType<T extends CartItemAggregateArgs> = {
        [P in keyof T & keyof AggregateCartItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCartItem[P]>
      : GetScalarType<T[P], AggregateCartItem[P]>
  }




  export type cartItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cartItemWhereInput
    orderBy?: cartItemOrderByWithAggregationInput | cartItemOrderByWithAggregationInput[]
    by: CartItemScalarFieldEnum[] | CartItemScalarFieldEnum
    having?: cartItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartItemCountAggregateInputType | true
    _avg?: CartItemAvgAggregateInputType
    _sum?: CartItemSumAggregateInputType
    _min?: CartItemMinAggregateInputType
    _max?: CartItemMaxAggregateInputType
  }

  export type CartItemGroupByOutputType = {
    id: number
    start: Date
    end: Date | null
    cartId: string
    productId: number
    quantity: number
    checkList: boolean
    note: string | null
    _count: CartItemCountAggregateOutputType | null
    _avg: CartItemAvgAggregateOutputType | null
    _sum: CartItemSumAggregateOutputType | null
    _min: CartItemMinAggregateOutputType | null
    _max: CartItemMaxAggregateOutputType | null
  }

  type GetCartItemGroupByPayload<T extends cartItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartItemGroupByOutputType[P]>
            : GetScalarType<T[P], CartItemGroupByOutputType[P]>
        }
      >
    >


  export type cartItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    end?: boolean
    cartId?: boolean
    productId?: boolean
    quantity?: boolean
    checkList?: boolean
    note?: boolean
    cart?: boolean | cartDefaultArgs<ExtArgs>
    product?: boolean | listProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartItem"]>

  export type cartItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    end?: boolean
    cartId?: boolean
    productId?: boolean
    quantity?: boolean
    checkList?: boolean
    note?: boolean
    cart?: boolean | cartDefaultArgs<ExtArgs>
    product?: boolean | listProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cartItem"]>

  export type cartItemSelectScalar = {
    id?: boolean
    start?: boolean
    end?: boolean
    cartId?: boolean
    productId?: boolean
    quantity?: boolean
    checkList?: boolean
    note?: boolean
  }

  export type cartItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | cartDefaultArgs<ExtArgs>
    product?: boolean | listProductDefaultArgs<ExtArgs>
  }
  export type cartItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | cartDefaultArgs<ExtArgs>
    product?: boolean | listProductDefaultArgs<ExtArgs>
  }

  export type $cartItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cartItem"
    objects: {
      cart: Prisma.$cartPayload<ExtArgs>
      product: Prisma.$listProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      start: Date
      end: Date | null
      cartId: string
      productId: number
      quantity: number
      checkList: boolean
      note: string | null
    }, ExtArgs["result"]["cartItem"]>
    composites: {}
  }

  type cartItemGetPayload<S extends boolean | null | undefined | cartItemDefaultArgs> = $Result.GetResult<Prisma.$cartItemPayload, S>

  type cartItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<cartItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CartItemCountAggregateInputType | true
    }

  export interface cartItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cartItem'], meta: { name: 'cartItem' } }
    /**
     * Find zero or one CartItem that matches the filter.
     * @param {cartItemFindUniqueArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cartItemFindUniqueArgs>(args: SelectSubset<T, cartItemFindUniqueArgs<ExtArgs>>): Prisma__cartItemClient<$Result.GetResult<Prisma.$cartItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CartItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {cartItemFindUniqueOrThrowArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cartItemFindUniqueOrThrowArgs>(args: SelectSubset<T, cartItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cartItemClient<$Result.GetResult<Prisma.$cartItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CartItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartItemFindFirstArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cartItemFindFirstArgs>(args?: SelectSubset<T, cartItemFindFirstArgs<ExtArgs>>): Prisma__cartItemClient<$Result.GetResult<Prisma.$cartItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CartItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartItemFindFirstOrThrowArgs} args - Arguments to find a CartItem
     * @example
     * // Get one CartItem
     * const cartItem = await prisma.cartItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cartItemFindFirstOrThrowArgs>(args?: SelectSubset<T, cartItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__cartItemClient<$Result.GetResult<Prisma.$cartItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CartItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CartItems
     * const cartItems = await prisma.cartItem.findMany()
     * 
     * // Get first 10 CartItems
     * const cartItems = await prisma.cartItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartItemWithIdOnly = await prisma.cartItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cartItemFindManyArgs>(args?: SelectSubset<T, cartItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CartItem.
     * @param {cartItemCreateArgs} args - Arguments to create a CartItem.
     * @example
     * // Create one CartItem
     * const CartItem = await prisma.cartItem.create({
     *   data: {
     *     // ... data to create a CartItem
     *   }
     * })
     * 
     */
    create<T extends cartItemCreateArgs>(args: SelectSubset<T, cartItemCreateArgs<ExtArgs>>): Prisma__cartItemClient<$Result.GetResult<Prisma.$cartItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CartItems.
     * @param {cartItemCreateManyArgs} args - Arguments to create many CartItems.
     * @example
     * // Create many CartItems
     * const cartItem = await prisma.cartItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cartItemCreateManyArgs>(args?: SelectSubset<T, cartItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CartItems and returns the data saved in the database.
     * @param {cartItemCreateManyAndReturnArgs} args - Arguments to create many CartItems.
     * @example
     * // Create many CartItems
     * const cartItem = await prisma.cartItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CartItems and only return the `id`
     * const cartItemWithIdOnly = await prisma.cartItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cartItemCreateManyAndReturnArgs>(args?: SelectSubset<T, cartItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CartItem.
     * @param {cartItemDeleteArgs} args - Arguments to delete one CartItem.
     * @example
     * // Delete one CartItem
     * const CartItem = await prisma.cartItem.delete({
     *   where: {
     *     // ... filter to delete one CartItem
     *   }
     * })
     * 
     */
    delete<T extends cartItemDeleteArgs>(args: SelectSubset<T, cartItemDeleteArgs<ExtArgs>>): Prisma__cartItemClient<$Result.GetResult<Prisma.$cartItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CartItem.
     * @param {cartItemUpdateArgs} args - Arguments to update one CartItem.
     * @example
     * // Update one CartItem
     * const cartItem = await prisma.cartItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cartItemUpdateArgs>(args: SelectSubset<T, cartItemUpdateArgs<ExtArgs>>): Prisma__cartItemClient<$Result.GetResult<Prisma.$cartItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CartItems.
     * @param {cartItemDeleteManyArgs} args - Arguments to filter CartItems to delete.
     * @example
     * // Delete a few CartItems
     * const { count } = await prisma.cartItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cartItemDeleteManyArgs>(args?: SelectSubset<T, cartItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CartItems
     * const cartItem = await prisma.cartItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cartItemUpdateManyArgs>(args: SelectSubset<T, cartItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CartItem.
     * @param {cartItemUpsertArgs} args - Arguments to update or create a CartItem.
     * @example
     * // Update or create a CartItem
     * const cartItem = await prisma.cartItem.upsert({
     *   create: {
     *     // ... data to create a CartItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CartItem we want to update
     *   }
     * })
     */
    upsert<T extends cartItemUpsertArgs>(args: SelectSubset<T, cartItemUpsertArgs<ExtArgs>>): Prisma__cartItemClient<$Result.GetResult<Prisma.$cartItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CartItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartItemCountArgs} args - Arguments to filter CartItems to count.
     * @example
     * // Count the number of CartItems
     * const count = await prisma.cartItem.count({
     *   where: {
     *     // ... the filter for the CartItems we want to count
     *   }
     * })
    **/
    count<T extends cartItemCountArgs>(
      args?: Subset<T, cartItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CartItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CartItemAggregateArgs>(args: Subset<T, CartItemAggregateArgs>): Prisma.PrismaPromise<GetCartItemAggregateType<T>>

    /**
     * Group by CartItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cartItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cartItemGroupByArgs['orderBy'] }
        : { orderBy?: cartItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cartItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cartItem model
   */
  readonly fields: cartItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cartItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cartItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cart<T extends cartDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cartDefaultArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    product<T extends listProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, listProductDefaultArgs<ExtArgs>>): Prisma__listProductClient<$Result.GetResult<Prisma.$listProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cartItem model
   */ 
  interface cartItemFieldRefs {
    readonly id: FieldRef<"cartItem", 'Int'>
    readonly start: FieldRef<"cartItem", 'DateTime'>
    readonly end: FieldRef<"cartItem", 'DateTime'>
    readonly cartId: FieldRef<"cartItem", 'String'>
    readonly productId: FieldRef<"cartItem", 'Int'>
    readonly quantity: FieldRef<"cartItem", 'Int'>
    readonly checkList: FieldRef<"cartItem", 'Boolean'>
    readonly note: FieldRef<"cartItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * cartItem findUnique
   */
  export type cartItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartItem
     */
    select?: cartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartItemInclude<ExtArgs> | null
    /**
     * Filter, which cartItem to fetch.
     */
    where: cartItemWhereUniqueInput
  }

  /**
   * cartItem findUniqueOrThrow
   */
  export type cartItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartItem
     */
    select?: cartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartItemInclude<ExtArgs> | null
    /**
     * Filter, which cartItem to fetch.
     */
    where: cartItemWhereUniqueInput
  }

  /**
   * cartItem findFirst
   */
  export type cartItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartItem
     */
    select?: cartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartItemInclude<ExtArgs> | null
    /**
     * Filter, which cartItem to fetch.
     */
    where?: cartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cartItems to fetch.
     */
    orderBy?: cartItemOrderByWithRelationInput | cartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cartItems.
     */
    cursor?: cartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cartItems.
     */
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * cartItem findFirstOrThrow
   */
  export type cartItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartItem
     */
    select?: cartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartItemInclude<ExtArgs> | null
    /**
     * Filter, which cartItem to fetch.
     */
    where?: cartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cartItems to fetch.
     */
    orderBy?: cartItemOrderByWithRelationInput | cartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cartItems.
     */
    cursor?: cartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cartItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cartItems.
     */
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * cartItem findMany
   */
  export type cartItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartItem
     */
    select?: cartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartItemInclude<ExtArgs> | null
    /**
     * Filter, which cartItems to fetch.
     */
    where?: cartItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cartItems to fetch.
     */
    orderBy?: cartItemOrderByWithRelationInput | cartItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cartItems.
     */
    cursor?: cartItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cartItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cartItems.
     */
    skip?: number
    distinct?: CartItemScalarFieldEnum | CartItemScalarFieldEnum[]
  }

  /**
   * cartItem create
   */
  export type cartItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartItem
     */
    select?: cartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartItemInclude<ExtArgs> | null
    /**
     * The data needed to create a cartItem.
     */
    data: XOR<cartItemCreateInput, cartItemUncheckedCreateInput>
  }

  /**
   * cartItem createMany
   */
  export type cartItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cartItems.
     */
    data: cartItemCreateManyInput | cartItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cartItem createManyAndReturn
   */
  export type cartItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartItem
     */
    select?: cartItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many cartItems.
     */
    data: cartItemCreateManyInput | cartItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * cartItem update
   */
  export type cartItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartItem
     */
    select?: cartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartItemInclude<ExtArgs> | null
    /**
     * The data needed to update a cartItem.
     */
    data: XOR<cartItemUpdateInput, cartItemUncheckedUpdateInput>
    /**
     * Choose, which cartItem to update.
     */
    where: cartItemWhereUniqueInput
  }

  /**
   * cartItem updateMany
   */
  export type cartItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cartItems.
     */
    data: XOR<cartItemUpdateManyMutationInput, cartItemUncheckedUpdateManyInput>
    /**
     * Filter which cartItems to update
     */
    where?: cartItemWhereInput
  }

  /**
   * cartItem upsert
   */
  export type cartItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartItem
     */
    select?: cartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartItemInclude<ExtArgs> | null
    /**
     * The filter to search for the cartItem to update in case it exists.
     */
    where: cartItemWhereUniqueInput
    /**
     * In case the cartItem found by the `where` argument doesn't exist, create a new cartItem with this data.
     */
    create: XOR<cartItemCreateInput, cartItemUncheckedCreateInput>
    /**
     * In case the cartItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cartItemUpdateInput, cartItemUncheckedUpdateInput>
  }

  /**
   * cartItem delete
   */
  export type cartItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartItem
     */
    select?: cartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartItemInclude<ExtArgs> | null
    /**
     * Filter which cartItem to delete.
     */
    where: cartItemWhereUniqueInput
  }

  /**
   * cartItem deleteMany
   */
  export type cartItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cartItems to delete
     */
    where?: cartItemWhereInput
  }

  /**
   * cartItem without action
   */
  export type cartItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cartItem
     */
    select?: cartItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartItemInclude<ExtArgs> | null
  }


  /**
   * Model formPembelian
   */

  export type AggregateFormPembelian = {
    _count: FormPembelianCountAggregateOutputType | null
    _avg: FormPembelianAvgAggregateOutputType | null
    _sum: FormPembelianSumAggregateOutputType | null
    _min: FormPembelianMinAggregateOutputType | null
    _max: FormPembelianMaxAggregateOutputType | null
  }

  export type FormPembelianAvgAggregateOutputType = {
    id: number | null
    kode_pos_user: number | null
    no_hp_user: number | null
  }

  export type FormPembelianSumAggregateOutputType = {
    id: number | null
    kode_pos_user: number | null
    no_hp_user: bigint | null
  }

  export type FormPembelianMinAggregateOutputType = {
    id: number | null
    start: Date | null
    end: Date | null
    nama_lengkap_user: string | null
    alamat_lengkap_user: string | null
    kode_pos_user: number | null
    no_hp_user: bigint | null
    catatan_pengiriman: string | null
    cartID: string | null
  }

  export type FormPembelianMaxAggregateOutputType = {
    id: number | null
    start: Date | null
    end: Date | null
    nama_lengkap_user: string | null
    alamat_lengkap_user: string | null
    kode_pos_user: number | null
    no_hp_user: bigint | null
    catatan_pengiriman: string | null
    cartID: string | null
  }

  export type FormPembelianCountAggregateOutputType = {
    id: number
    start: number
    end: number
    nama_lengkap_user: number
    alamat_lengkap_user: number
    kode_pos_user: number
    no_hp_user: number
    catatan_pengiriman: number
    cartID: number
    _all: number
  }


  export type FormPembelianAvgAggregateInputType = {
    id?: true
    kode_pos_user?: true
    no_hp_user?: true
  }

  export type FormPembelianSumAggregateInputType = {
    id?: true
    kode_pos_user?: true
    no_hp_user?: true
  }

  export type FormPembelianMinAggregateInputType = {
    id?: true
    start?: true
    end?: true
    nama_lengkap_user?: true
    alamat_lengkap_user?: true
    kode_pos_user?: true
    no_hp_user?: true
    catatan_pengiriman?: true
    cartID?: true
  }

  export type FormPembelianMaxAggregateInputType = {
    id?: true
    start?: true
    end?: true
    nama_lengkap_user?: true
    alamat_lengkap_user?: true
    kode_pos_user?: true
    no_hp_user?: true
    catatan_pengiriman?: true
    cartID?: true
  }

  export type FormPembelianCountAggregateInputType = {
    id?: true
    start?: true
    end?: true
    nama_lengkap_user?: true
    alamat_lengkap_user?: true
    kode_pos_user?: true
    no_hp_user?: true
    catatan_pengiriman?: true
    cartID?: true
    _all?: true
  }

  export type FormPembelianAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which formPembelian to aggregate.
     */
    where?: formPembelianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formPembelians to fetch.
     */
    orderBy?: formPembelianOrderByWithRelationInput | formPembelianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: formPembelianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formPembelians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formPembelians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned formPembelians
    **/
    _count?: true | FormPembelianCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FormPembelianAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FormPembelianSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FormPembelianMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FormPembelianMaxAggregateInputType
  }

  export type GetFormPembelianAggregateType<T extends FormPembelianAggregateArgs> = {
        [P in keyof T & keyof AggregateFormPembelian]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFormPembelian[P]>
      : GetScalarType<T[P], AggregateFormPembelian[P]>
  }




  export type formPembelianGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: formPembelianWhereInput
    orderBy?: formPembelianOrderByWithAggregationInput | formPembelianOrderByWithAggregationInput[]
    by: FormPembelianScalarFieldEnum[] | FormPembelianScalarFieldEnum
    having?: formPembelianScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FormPembelianCountAggregateInputType | true
    _avg?: FormPembelianAvgAggregateInputType
    _sum?: FormPembelianSumAggregateInputType
    _min?: FormPembelianMinAggregateInputType
    _max?: FormPembelianMaxAggregateInputType
  }

  export type FormPembelianGroupByOutputType = {
    id: number
    start: Date
    end: Date | null
    nama_lengkap_user: string | null
    alamat_lengkap_user: string | null
    kode_pos_user: number | null
    no_hp_user: bigint | null
    catatan_pengiriman: string | null
    cartID: string
    _count: FormPembelianCountAggregateOutputType | null
    _avg: FormPembelianAvgAggregateOutputType | null
    _sum: FormPembelianSumAggregateOutputType | null
    _min: FormPembelianMinAggregateOutputType | null
    _max: FormPembelianMaxAggregateOutputType | null
  }

  type GetFormPembelianGroupByPayload<T extends formPembelianGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FormPembelianGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FormPembelianGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FormPembelianGroupByOutputType[P]>
            : GetScalarType<T[P], FormPembelianGroupByOutputType[P]>
        }
      >
    >


  export type formPembelianSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    end?: boolean
    nama_lengkap_user?: boolean
    alamat_lengkap_user?: boolean
    kode_pos_user?: boolean
    no_hp_user?: boolean
    catatan_pengiriman?: boolean
    cartID?: boolean
    user?: boolean | cartDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formPembelian"]>

  export type formPembelianSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    end?: boolean
    nama_lengkap_user?: boolean
    alamat_lengkap_user?: boolean
    kode_pos_user?: boolean
    no_hp_user?: boolean
    catatan_pengiriman?: boolean
    cartID?: boolean
    user?: boolean | cartDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["formPembelian"]>

  export type formPembelianSelectScalar = {
    id?: boolean
    start?: boolean
    end?: boolean
    nama_lengkap_user?: boolean
    alamat_lengkap_user?: boolean
    kode_pos_user?: boolean
    no_hp_user?: boolean
    catatan_pengiriman?: boolean
    cartID?: boolean
  }

  export type formPembelianInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | cartDefaultArgs<ExtArgs>
  }
  export type formPembelianIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | cartDefaultArgs<ExtArgs>
  }

  export type $formPembelianPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "formPembelian"
    objects: {
      user: Prisma.$cartPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      start: Date
      end: Date | null
      nama_lengkap_user: string | null
      alamat_lengkap_user: string | null
      kode_pos_user: number | null
      no_hp_user: bigint | null
      catatan_pengiriman: string | null
      cartID: string
    }, ExtArgs["result"]["formPembelian"]>
    composites: {}
  }

  type formPembelianGetPayload<S extends boolean | null | undefined | formPembelianDefaultArgs> = $Result.GetResult<Prisma.$formPembelianPayload, S>

  type formPembelianCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<formPembelianFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FormPembelianCountAggregateInputType | true
    }

  export interface formPembelianDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['formPembelian'], meta: { name: 'formPembelian' } }
    /**
     * Find zero or one FormPembelian that matches the filter.
     * @param {formPembelianFindUniqueArgs} args - Arguments to find a FormPembelian
     * @example
     * // Get one FormPembelian
     * const formPembelian = await prisma.formPembelian.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends formPembelianFindUniqueArgs>(args: SelectSubset<T, formPembelianFindUniqueArgs<ExtArgs>>): Prisma__formPembelianClient<$Result.GetResult<Prisma.$formPembelianPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FormPembelian that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {formPembelianFindUniqueOrThrowArgs} args - Arguments to find a FormPembelian
     * @example
     * // Get one FormPembelian
     * const formPembelian = await prisma.formPembelian.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends formPembelianFindUniqueOrThrowArgs>(args: SelectSubset<T, formPembelianFindUniqueOrThrowArgs<ExtArgs>>): Prisma__formPembelianClient<$Result.GetResult<Prisma.$formPembelianPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FormPembelian that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formPembelianFindFirstArgs} args - Arguments to find a FormPembelian
     * @example
     * // Get one FormPembelian
     * const formPembelian = await prisma.formPembelian.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends formPembelianFindFirstArgs>(args?: SelectSubset<T, formPembelianFindFirstArgs<ExtArgs>>): Prisma__formPembelianClient<$Result.GetResult<Prisma.$formPembelianPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FormPembelian that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formPembelianFindFirstOrThrowArgs} args - Arguments to find a FormPembelian
     * @example
     * // Get one FormPembelian
     * const formPembelian = await prisma.formPembelian.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends formPembelianFindFirstOrThrowArgs>(args?: SelectSubset<T, formPembelianFindFirstOrThrowArgs<ExtArgs>>): Prisma__formPembelianClient<$Result.GetResult<Prisma.$formPembelianPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FormPembelians that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formPembelianFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FormPembelians
     * const formPembelians = await prisma.formPembelian.findMany()
     * 
     * // Get first 10 FormPembelians
     * const formPembelians = await prisma.formPembelian.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const formPembelianWithIdOnly = await prisma.formPembelian.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends formPembelianFindManyArgs>(args?: SelectSubset<T, formPembelianFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$formPembelianPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FormPembelian.
     * @param {formPembelianCreateArgs} args - Arguments to create a FormPembelian.
     * @example
     * // Create one FormPembelian
     * const FormPembelian = await prisma.formPembelian.create({
     *   data: {
     *     // ... data to create a FormPembelian
     *   }
     * })
     * 
     */
    create<T extends formPembelianCreateArgs>(args: SelectSubset<T, formPembelianCreateArgs<ExtArgs>>): Prisma__formPembelianClient<$Result.GetResult<Prisma.$formPembelianPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FormPembelians.
     * @param {formPembelianCreateManyArgs} args - Arguments to create many FormPembelians.
     * @example
     * // Create many FormPembelians
     * const formPembelian = await prisma.formPembelian.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends formPembelianCreateManyArgs>(args?: SelectSubset<T, formPembelianCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FormPembelians and returns the data saved in the database.
     * @param {formPembelianCreateManyAndReturnArgs} args - Arguments to create many FormPembelians.
     * @example
     * // Create many FormPembelians
     * const formPembelian = await prisma.formPembelian.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FormPembelians and only return the `id`
     * const formPembelianWithIdOnly = await prisma.formPembelian.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends formPembelianCreateManyAndReturnArgs>(args?: SelectSubset<T, formPembelianCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$formPembelianPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a FormPembelian.
     * @param {formPembelianDeleteArgs} args - Arguments to delete one FormPembelian.
     * @example
     * // Delete one FormPembelian
     * const FormPembelian = await prisma.formPembelian.delete({
     *   where: {
     *     // ... filter to delete one FormPembelian
     *   }
     * })
     * 
     */
    delete<T extends formPembelianDeleteArgs>(args: SelectSubset<T, formPembelianDeleteArgs<ExtArgs>>): Prisma__formPembelianClient<$Result.GetResult<Prisma.$formPembelianPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FormPembelian.
     * @param {formPembelianUpdateArgs} args - Arguments to update one FormPembelian.
     * @example
     * // Update one FormPembelian
     * const formPembelian = await prisma.formPembelian.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends formPembelianUpdateArgs>(args: SelectSubset<T, formPembelianUpdateArgs<ExtArgs>>): Prisma__formPembelianClient<$Result.GetResult<Prisma.$formPembelianPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FormPembelians.
     * @param {formPembelianDeleteManyArgs} args - Arguments to filter FormPembelians to delete.
     * @example
     * // Delete a few FormPembelians
     * const { count } = await prisma.formPembelian.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends formPembelianDeleteManyArgs>(args?: SelectSubset<T, formPembelianDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FormPembelians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formPembelianUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FormPembelians
     * const formPembelian = await prisma.formPembelian.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends formPembelianUpdateManyArgs>(args: SelectSubset<T, formPembelianUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FormPembelian.
     * @param {formPembelianUpsertArgs} args - Arguments to update or create a FormPembelian.
     * @example
     * // Update or create a FormPembelian
     * const formPembelian = await prisma.formPembelian.upsert({
     *   create: {
     *     // ... data to create a FormPembelian
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FormPembelian we want to update
     *   }
     * })
     */
    upsert<T extends formPembelianUpsertArgs>(args: SelectSubset<T, formPembelianUpsertArgs<ExtArgs>>): Prisma__formPembelianClient<$Result.GetResult<Prisma.$formPembelianPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of FormPembelians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formPembelianCountArgs} args - Arguments to filter FormPembelians to count.
     * @example
     * // Count the number of FormPembelians
     * const count = await prisma.formPembelian.count({
     *   where: {
     *     // ... the filter for the FormPembelians we want to count
     *   }
     * })
    **/
    count<T extends formPembelianCountArgs>(
      args?: Subset<T, formPembelianCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FormPembelianCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FormPembelian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FormPembelianAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FormPembelianAggregateArgs>(args: Subset<T, FormPembelianAggregateArgs>): Prisma.PrismaPromise<GetFormPembelianAggregateType<T>>

    /**
     * Group by FormPembelian.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {formPembelianGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends formPembelianGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: formPembelianGroupByArgs['orderBy'] }
        : { orderBy?: formPembelianGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, formPembelianGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFormPembelianGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the formPembelian model
   */
  readonly fields: formPembelianFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for formPembelian.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__formPembelianClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends cartDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cartDefaultArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the formPembelian model
   */ 
  interface formPembelianFieldRefs {
    readonly id: FieldRef<"formPembelian", 'Int'>
    readonly start: FieldRef<"formPembelian", 'DateTime'>
    readonly end: FieldRef<"formPembelian", 'DateTime'>
    readonly nama_lengkap_user: FieldRef<"formPembelian", 'String'>
    readonly alamat_lengkap_user: FieldRef<"formPembelian", 'String'>
    readonly kode_pos_user: FieldRef<"formPembelian", 'Int'>
    readonly no_hp_user: FieldRef<"formPembelian", 'BigInt'>
    readonly catatan_pengiriman: FieldRef<"formPembelian", 'String'>
    readonly cartID: FieldRef<"formPembelian", 'String'>
  }
    

  // Custom InputTypes
  /**
   * formPembelian findUnique
   */
  export type formPembelianFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formPembelian
     */
    select?: formPembelianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formPembelianInclude<ExtArgs> | null
    /**
     * Filter, which formPembelian to fetch.
     */
    where: formPembelianWhereUniqueInput
  }

  /**
   * formPembelian findUniqueOrThrow
   */
  export type formPembelianFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formPembelian
     */
    select?: formPembelianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formPembelianInclude<ExtArgs> | null
    /**
     * Filter, which formPembelian to fetch.
     */
    where: formPembelianWhereUniqueInput
  }

  /**
   * formPembelian findFirst
   */
  export type formPembelianFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formPembelian
     */
    select?: formPembelianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formPembelianInclude<ExtArgs> | null
    /**
     * Filter, which formPembelian to fetch.
     */
    where?: formPembelianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formPembelians to fetch.
     */
    orderBy?: formPembelianOrderByWithRelationInput | formPembelianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for formPembelians.
     */
    cursor?: formPembelianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formPembelians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formPembelians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of formPembelians.
     */
    distinct?: FormPembelianScalarFieldEnum | FormPembelianScalarFieldEnum[]
  }

  /**
   * formPembelian findFirstOrThrow
   */
  export type formPembelianFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formPembelian
     */
    select?: formPembelianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formPembelianInclude<ExtArgs> | null
    /**
     * Filter, which formPembelian to fetch.
     */
    where?: formPembelianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formPembelians to fetch.
     */
    orderBy?: formPembelianOrderByWithRelationInput | formPembelianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for formPembelians.
     */
    cursor?: formPembelianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formPembelians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formPembelians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of formPembelians.
     */
    distinct?: FormPembelianScalarFieldEnum | FormPembelianScalarFieldEnum[]
  }

  /**
   * formPembelian findMany
   */
  export type formPembelianFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formPembelian
     */
    select?: formPembelianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formPembelianInclude<ExtArgs> | null
    /**
     * Filter, which formPembelians to fetch.
     */
    where?: formPembelianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of formPembelians to fetch.
     */
    orderBy?: formPembelianOrderByWithRelationInput | formPembelianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing formPembelians.
     */
    cursor?: formPembelianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` formPembelians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` formPembelians.
     */
    skip?: number
    distinct?: FormPembelianScalarFieldEnum | FormPembelianScalarFieldEnum[]
  }

  /**
   * formPembelian create
   */
  export type formPembelianCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formPembelian
     */
    select?: formPembelianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formPembelianInclude<ExtArgs> | null
    /**
     * The data needed to create a formPembelian.
     */
    data: XOR<formPembelianCreateInput, formPembelianUncheckedCreateInput>
  }

  /**
   * formPembelian createMany
   */
  export type formPembelianCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many formPembelians.
     */
    data: formPembelianCreateManyInput | formPembelianCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * formPembelian createManyAndReturn
   */
  export type formPembelianCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formPembelian
     */
    select?: formPembelianSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many formPembelians.
     */
    data: formPembelianCreateManyInput | formPembelianCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formPembelianIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * formPembelian update
   */
  export type formPembelianUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formPembelian
     */
    select?: formPembelianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formPembelianInclude<ExtArgs> | null
    /**
     * The data needed to update a formPembelian.
     */
    data: XOR<formPembelianUpdateInput, formPembelianUncheckedUpdateInput>
    /**
     * Choose, which formPembelian to update.
     */
    where: formPembelianWhereUniqueInput
  }

  /**
   * formPembelian updateMany
   */
  export type formPembelianUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update formPembelians.
     */
    data: XOR<formPembelianUpdateManyMutationInput, formPembelianUncheckedUpdateManyInput>
    /**
     * Filter which formPembelians to update
     */
    where?: formPembelianWhereInput
  }

  /**
   * formPembelian upsert
   */
  export type formPembelianUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formPembelian
     */
    select?: formPembelianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formPembelianInclude<ExtArgs> | null
    /**
     * The filter to search for the formPembelian to update in case it exists.
     */
    where: formPembelianWhereUniqueInput
    /**
     * In case the formPembelian found by the `where` argument doesn't exist, create a new formPembelian with this data.
     */
    create: XOR<formPembelianCreateInput, formPembelianUncheckedCreateInput>
    /**
     * In case the formPembelian was found with the provided `where` argument, update it with this data.
     */
    update: XOR<formPembelianUpdateInput, formPembelianUncheckedUpdateInput>
  }

  /**
   * formPembelian delete
   */
  export type formPembelianDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formPembelian
     */
    select?: formPembelianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formPembelianInclude<ExtArgs> | null
    /**
     * Filter which formPembelian to delete.
     */
    where: formPembelianWhereUniqueInput
  }

  /**
   * formPembelian deleteMany
   */
  export type formPembelianDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which formPembelians to delete
     */
    where?: formPembelianWhereInput
  }

  /**
   * formPembelian without action
   */
  export type formPembelianDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the formPembelian
     */
    select?: formPembelianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: formPembelianInclude<ExtArgs> | null
  }


  /**
   * Model ongkosKirim
   */

  export type AggregateOngkosKirim = {
    _count: OngkosKirimCountAggregateOutputType | null
    _avg: OngkosKirimAvgAggregateOutputType | null
    _sum: OngkosKirimSumAggregateOutputType | null
    _min: OngkosKirimMinAggregateOutputType | null
    _max: OngkosKirimMaxAggregateOutputType | null
  }

  export type OngkosKirimAvgAggregateOutputType = {
    id: number | null
    price: number | null
    quantity: number | null
  }

  export type OngkosKirimSumAggregateOutputType = {
    id: number | null
    price: bigint | null
    quantity: number | null
  }

  export type OngkosKirimMinAggregateOutputType = {
    id: number | null
    start: Date | null
    end: Date | null
    productName: string | null
    price: bigint | null
    quantity: number | null
    cartID: string | null
  }

  export type OngkosKirimMaxAggregateOutputType = {
    id: number | null
    start: Date | null
    end: Date | null
    productName: string | null
    price: bigint | null
    quantity: number | null
    cartID: string | null
  }

  export type OngkosKirimCountAggregateOutputType = {
    id: number
    start: number
    end: number
    productName: number
    price: number
    quantity: number
    cartID: number
    _all: number
  }


  export type OngkosKirimAvgAggregateInputType = {
    id?: true
    price?: true
    quantity?: true
  }

  export type OngkosKirimSumAggregateInputType = {
    id?: true
    price?: true
    quantity?: true
  }

  export type OngkosKirimMinAggregateInputType = {
    id?: true
    start?: true
    end?: true
    productName?: true
    price?: true
    quantity?: true
    cartID?: true
  }

  export type OngkosKirimMaxAggregateInputType = {
    id?: true
    start?: true
    end?: true
    productName?: true
    price?: true
    quantity?: true
    cartID?: true
  }

  export type OngkosKirimCountAggregateInputType = {
    id?: true
    start?: true
    end?: true
    productName?: true
    price?: true
    quantity?: true
    cartID?: true
    _all?: true
  }

  export type OngkosKirimAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ongkosKirim to aggregate.
     */
    where?: ongkosKirimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ongkosKirims to fetch.
     */
    orderBy?: ongkosKirimOrderByWithRelationInput | ongkosKirimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ongkosKirimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ongkosKirims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ongkosKirims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ongkosKirims
    **/
    _count?: true | OngkosKirimCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OngkosKirimAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OngkosKirimSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OngkosKirimMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OngkosKirimMaxAggregateInputType
  }

  export type GetOngkosKirimAggregateType<T extends OngkosKirimAggregateArgs> = {
        [P in keyof T & keyof AggregateOngkosKirim]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOngkosKirim[P]>
      : GetScalarType<T[P], AggregateOngkosKirim[P]>
  }




  export type ongkosKirimGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ongkosKirimWhereInput
    orderBy?: ongkosKirimOrderByWithAggregationInput | ongkosKirimOrderByWithAggregationInput[]
    by: OngkosKirimScalarFieldEnum[] | OngkosKirimScalarFieldEnum
    having?: ongkosKirimScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OngkosKirimCountAggregateInputType | true
    _avg?: OngkosKirimAvgAggregateInputType
    _sum?: OngkosKirimSumAggregateInputType
    _min?: OngkosKirimMinAggregateInputType
    _max?: OngkosKirimMaxAggregateInputType
  }

  export type OngkosKirimGroupByOutputType = {
    id: number
    start: Date
    end: Date | null
    productName: string | null
    price: bigint | null
    quantity: number | null
    cartID: string
    _count: OngkosKirimCountAggregateOutputType | null
    _avg: OngkosKirimAvgAggregateOutputType | null
    _sum: OngkosKirimSumAggregateOutputType | null
    _min: OngkosKirimMinAggregateOutputType | null
    _max: OngkosKirimMaxAggregateOutputType | null
  }

  type GetOngkosKirimGroupByPayload<T extends ongkosKirimGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OngkosKirimGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OngkosKirimGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OngkosKirimGroupByOutputType[P]>
            : GetScalarType<T[P], OngkosKirimGroupByOutputType[P]>
        }
      >
    >


  export type ongkosKirimSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    end?: boolean
    productName?: boolean
    price?: boolean
    quantity?: boolean
    cartID?: boolean
    user?: boolean | cartDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ongkosKirim"]>

  export type ongkosKirimSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    end?: boolean
    productName?: boolean
    price?: boolean
    quantity?: boolean
    cartID?: boolean
    user?: boolean | cartDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ongkosKirim"]>

  export type ongkosKirimSelectScalar = {
    id?: boolean
    start?: boolean
    end?: boolean
    productName?: boolean
    price?: boolean
    quantity?: boolean
    cartID?: boolean
  }

  export type ongkosKirimInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | cartDefaultArgs<ExtArgs>
  }
  export type ongkosKirimIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | cartDefaultArgs<ExtArgs>
  }

  export type $ongkosKirimPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ongkosKirim"
    objects: {
      user: Prisma.$cartPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      start: Date
      end: Date | null
      productName: string | null
      price: bigint | null
      quantity: number | null
      cartID: string
    }, ExtArgs["result"]["ongkosKirim"]>
    composites: {}
  }

  type ongkosKirimGetPayload<S extends boolean | null | undefined | ongkosKirimDefaultArgs> = $Result.GetResult<Prisma.$ongkosKirimPayload, S>

  type ongkosKirimCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ongkosKirimFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OngkosKirimCountAggregateInputType | true
    }

  export interface ongkosKirimDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ongkosKirim'], meta: { name: 'ongkosKirim' } }
    /**
     * Find zero or one OngkosKirim that matches the filter.
     * @param {ongkosKirimFindUniqueArgs} args - Arguments to find a OngkosKirim
     * @example
     * // Get one OngkosKirim
     * const ongkosKirim = await prisma.ongkosKirim.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ongkosKirimFindUniqueArgs>(args: SelectSubset<T, ongkosKirimFindUniqueArgs<ExtArgs>>): Prisma__ongkosKirimClient<$Result.GetResult<Prisma.$ongkosKirimPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OngkosKirim that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ongkosKirimFindUniqueOrThrowArgs} args - Arguments to find a OngkosKirim
     * @example
     * // Get one OngkosKirim
     * const ongkosKirim = await prisma.ongkosKirim.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ongkosKirimFindUniqueOrThrowArgs>(args: SelectSubset<T, ongkosKirimFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ongkosKirimClient<$Result.GetResult<Prisma.$ongkosKirimPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OngkosKirim that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ongkosKirimFindFirstArgs} args - Arguments to find a OngkosKirim
     * @example
     * // Get one OngkosKirim
     * const ongkosKirim = await prisma.ongkosKirim.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ongkosKirimFindFirstArgs>(args?: SelectSubset<T, ongkosKirimFindFirstArgs<ExtArgs>>): Prisma__ongkosKirimClient<$Result.GetResult<Prisma.$ongkosKirimPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OngkosKirim that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ongkosKirimFindFirstOrThrowArgs} args - Arguments to find a OngkosKirim
     * @example
     * // Get one OngkosKirim
     * const ongkosKirim = await prisma.ongkosKirim.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ongkosKirimFindFirstOrThrowArgs>(args?: SelectSubset<T, ongkosKirimFindFirstOrThrowArgs<ExtArgs>>): Prisma__ongkosKirimClient<$Result.GetResult<Prisma.$ongkosKirimPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OngkosKirims that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ongkosKirimFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OngkosKirims
     * const ongkosKirims = await prisma.ongkosKirim.findMany()
     * 
     * // Get first 10 OngkosKirims
     * const ongkosKirims = await prisma.ongkosKirim.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ongkosKirimWithIdOnly = await prisma.ongkosKirim.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ongkosKirimFindManyArgs>(args?: SelectSubset<T, ongkosKirimFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ongkosKirimPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OngkosKirim.
     * @param {ongkosKirimCreateArgs} args - Arguments to create a OngkosKirim.
     * @example
     * // Create one OngkosKirim
     * const OngkosKirim = await prisma.ongkosKirim.create({
     *   data: {
     *     // ... data to create a OngkosKirim
     *   }
     * })
     * 
     */
    create<T extends ongkosKirimCreateArgs>(args: SelectSubset<T, ongkosKirimCreateArgs<ExtArgs>>): Prisma__ongkosKirimClient<$Result.GetResult<Prisma.$ongkosKirimPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OngkosKirims.
     * @param {ongkosKirimCreateManyArgs} args - Arguments to create many OngkosKirims.
     * @example
     * // Create many OngkosKirims
     * const ongkosKirim = await prisma.ongkosKirim.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ongkosKirimCreateManyArgs>(args?: SelectSubset<T, ongkosKirimCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OngkosKirims and returns the data saved in the database.
     * @param {ongkosKirimCreateManyAndReturnArgs} args - Arguments to create many OngkosKirims.
     * @example
     * // Create many OngkosKirims
     * const ongkosKirim = await prisma.ongkosKirim.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OngkosKirims and only return the `id`
     * const ongkosKirimWithIdOnly = await prisma.ongkosKirim.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ongkosKirimCreateManyAndReturnArgs>(args?: SelectSubset<T, ongkosKirimCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ongkosKirimPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OngkosKirim.
     * @param {ongkosKirimDeleteArgs} args - Arguments to delete one OngkosKirim.
     * @example
     * // Delete one OngkosKirim
     * const OngkosKirim = await prisma.ongkosKirim.delete({
     *   where: {
     *     // ... filter to delete one OngkosKirim
     *   }
     * })
     * 
     */
    delete<T extends ongkosKirimDeleteArgs>(args: SelectSubset<T, ongkosKirimDeleteArgs<ExtArgs>>): Prisma__ongkosKirimClient<$Result.GetResult<Prisma.$ongkosKirimPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OngkosKirim.
     * @param {ongkosKirimUpdateArgs} args - Arguments to update one OngkosKirim.
     * @example
     * // Update one OngkosKirim
     * const ongkosKirim = await prisma.ongkosKirim.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ongkosKirimUpdateArgs>(args: SelectSubset<T, ongkosKirimUpdateArgs<ExtArgs>>): Prisma__ongkosKirimClient<$Result.GetResult<Prisma.$ongkosKirimPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OngkosKirims.
     * @param {ongkosKirimDeleteManyArgs} args - Arguments to filter OngkosKirims to delete.
     * @example
     * // Delete a few OngkosKirims
     * const { count } = await prisma.ongkosKirim.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ongkosKirimDeleteManyArgs>(args?: SelectSubset<T, ongkosKirimDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OngkosKirims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ongkosKirimUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OngkosKirims
     * const ongkosKirim = await prisma.ongkosKirim.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ongkosKirimUpdateManyArgs>(args: SelectSubset<T, ongkosKirimUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OngkosKirim.
     * @param {ongkosKirimUpsertArgs} args - Arguments to update or create a OngkosKirim.
     * @example
     * // Update or create a OngkosKirim
     * const ongkosKirim = await prisma.ongkosKirim.upsert({
     *   create: {
     *     // ... data to create a OngkosKirim
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OngkosKirim we want to update
     *   }
     * })
     */
    upsert<T extends ongkosKirimUpsertArgs>(args: SelectSubset<T, ongkosKirimUpsertArgs<ExtArgs>>): Prisma__ongkosKirimClient<$Result.GetResult<Prisma.$ongkosKirimPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OngkosKirims.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ongkosKirimCountArgs} args - Arguments to filter OngkosKirims to count.
     * @example
     * // Count the number of OngkosKirims
     * const count = await prisma.ongkosKirim.count({
     *   where: {
     *     // ... the filter for the OngkosKirims we want to count
     *   }
     * })
    **/
    count<T extends ongkosKirimCountArgs>(
      args?: Subset<T, ongkosKirimCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OngkosKirimCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OngkosKirim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OngkosKirimAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OngkosKirimAggregateArgs>(args: Subset<T, OngkosKirimAggregateArgs>): Prisma.PrismaPromise<GetOngkosKirimAggregateType<T>>

    /**
     * Group by OngkosKirim.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ongkosKirimGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ongkosKirimGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ongkosKirimGroupByArgs['orderBy'] }
        : { orderBy?: ongkosKirimGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ongkosKirimGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOngkosKirimGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ongkosKirim model
   */
  readonly fields: ongkosKirimFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ongkosKirim.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ongkosKirimClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends cartDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cartDefaultArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ongkosKirim model
   */ 
  interface ongkosKirimFieldRefs {
    readonly id: FieldRef<"ongkosKirim", 'Int'>
    readonly start: FieldRef<"ongkosKirim", 'DateTime'>
    readonly end: FieldRef<"ongkosKirim", 'DateTime'>
    readonly productName: FieldRef<"ongkosKirim", 'String'>
    readonly price: FieldRef<"ongkosKirim", 'BigInt'>
    readonly quantity: FieldRef<"ongkosKirim", 'Int'>
    readonly cartID: FieldRef<"ongkosKirim", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ongkosKirim findUnique
   */
  export type ongkosKirimFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ongkosKirim
     */
    select?: ongkosKirimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ongkosKirimInclude<ExtArgs> | null
    /**
     * Filter, which ongkosKirim to fetch.
     */
    where: ongkosKirimWhereUniqueInput
  }

  /**
   * ongkosKirim findUniqueOrThrow
   */
  export type ongkosKirimFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ongkosKirim
     */
    select?: ongkosKirimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ongkosKirimInclude<ExtArgs> | null
    /**
     * Filter, which ongkosKirim to fetch.
     */
    where: ongkosKirimWhereUniqueInput
  }

  /**
   * ongkosKirim findFirst
   */
  export type ongkosKirimFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ongkosKirim
     */
    select?: ongkosKirimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ongkosKirimInclude<ExtArgs> | null
    /**
     * Filter, which ongkosKirim to fetch.
     */
    where?: ongkosKirimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ongkosKirims to fetch.
     */
    orderBy?: ongkosKirimOrderByWithRelationInput | ongkosKirimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ongkosKirims.
     */
    cursor?: ongkosKirimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ongkosKirims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ongkosKirims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ongkosKirims.
     */
    distinct?: OngkosKirimScalarFieldEnum | OngkosKirimScalarFieldEnum[]
  }

  /**
   * ongkosKirim findFirstOrThrow
   */
  export type ongkosKirimFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ongkosKirim
     */
    select?: ongkosKirimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ongkosKirimInclude<ExtArgs> | null
    /**
     * Filter, which ongkosKirim to fetch.
     */
    where?: ongkosKirimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ongkosKirims to fetch.
     */
    orderBy?: ongkosKirimOrderByWithRelationInput | ongkosKirimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ongkosKirims.
     */
    cursor?: ongkosKirimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ongkosKirims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ongkosKirims.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ongkosKirims.
     */
    distinct?: OngkosKirimScalarFieldEnum | OngkosKirimScalarFieldEnum[]
  }

  /**
   * ongkosKirim findMany
   */
  export type ongkosKirimFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ongkosKirim
     */
    select?: ongkosKirimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ongkosKirimInclude<ExtArgs> | null
    /**
     * Filter, which ongkosKirims to fetch.
     */
    where?: ongkosKirimWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ongkosKirims to fetch.
     */
    orderBy?: ongkosKirimOrderByWithRelationInput | ongkosKirimOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ongkosKirims.
     */
    cursor?: ongkosKirimWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ongkosKirims from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ongkosKirims.
     */
    skip?: number
    distinct?: OngkosKirimScalarFieldEnum | OngkosKirimScalarFieldEnum[]
  }

  /**
   * ongkosKirim create
   */
  export type ongkosKirimCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ongkosKirim
     */
    select?: ongkosKirimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ongkosKirimInclude<ExtArgs> | null
    /**
     * The data needed to create a ongkosKirim.
     */
    data: XOR<ongkosKirimCreateInput, ongkosKirimUncheckedCreateInput>
  }

  /**
   * ongkosKirim createMany
   */
  export type ongkosKirimCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ongkosKirims.
     */
    data: ongkosKirimCreateManyInput | ongkosKirimCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ongkosKirim createManyAndReturn
   */
  export type ongkosKirimCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ongkosKirim
     */
    select?: ongkosKirimSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ongkosKirims.
     */
    data: ongkosKirimCreateManyInput | ongkosKirimCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ongkosKirimIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ongkosKirim update
   */
  export type ongkosKirimUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ongkosKirim
     */
    select?: ongkosKirimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ongkosKirimInclude<ExtArgs> | null
    /**
     * The data needed to update a ongkosKirim.
     */
    data: XOR<ongkosKirimUpdateInput, ongkosKirimUncheckedUpdateInput>
    /**
     * Choose, which ongkosKirim to update.
     */
    where: ongkosKirimWhereUniqueInput
  }

  /**
   * ongkosKirim updateMany
   */
  export type ongkosKirimUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ongkosKirims.
     */
    data: XOR<ongkosKirimUpdateManyMutationInput, ongkosKirimUncheckedUpdateManyInput>
    /**
     * Filter which ongkosKirims to update
     */
    where?: ongkosKirimWhereInput
  }

  /**
   * ongkosKirim upsert
   */
  export type ongkosKirimUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ongkosKirim
     */
    select?: ongkosKirimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ongkosKirimInclude<ExtArgs> | null
    /**
     * The filter to search for the ongkosKirim to update in case it exists.
     */
    where: ongkosKirimWhereUniqueInput
    /**
     * In case the ongkosKirim found by the `where` argument doesn't exist, create a new ongkosKirim with this data.
     */
    create: XOR<ongkosKirimCreateInput, ongkosKirimUncheckedCreateInput>
    /**
     * In case the ongkosKirim was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ongkosKirimUpdateInput, ongkosKirimUncheckedUpdateInput>
  }

  /**
   * ongkosKirim delete
   */
  export type ongkosKirimDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ongkosKirim
     */
    select?: ongkosKirimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ongkosKirimInclude<ExtArgs> | null
    /**
     * Filter which ongkosKirim to delete.
     */
    where: ongkosKirimWhereUniqueInput
  }

  /**
   * ongkosKirim deleteMany
   */
  export type ongkosKirimDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ongkosKirims to delete
     */
    where?: ongkosKirimWhereInput
  }

  /**
   * ongkosKirim without action
   */
  export type ongkosKirimDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ongkosKirim
     */
    select?: ongkosKirimSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ongkosKirimInclude<ExtArgs> | null
  }


  /**
   * Model dataPesananItem
   */

  export type AggregateDataPesananItem = {
    _count: DataPesananItemCountAggregateOutputType | null
    _avg: DataPesananItemAvgAggregateOutputType | null
    _sum: DataPesananItemSumAggregateOutputType | null
    _min: DataPesananItemMinAggregateOutputType | null
    _max: DataPesananItemMaxAggregateOutputType | null
  }

  export type DataPesananItemAvgAggregateOutputType = {
    id: number | null
    price: number | null
    priceOriginal: number | null
    quantity: number | null
    dataPesananId: number | null
  }

  export type DataPesananItemSumAggregateOutputType = {
    id: number | null
    price: bigint | null
    priceOriginal: bigint | null
    quantity: number | null
    dataPesananId: number | null
  }

  export type DataPesananItemMinAggregateOutputType = {
    id: number | null
    start: Date | null
    end: Date | null
    note: string | null
    productName: string | null
    price: bigint | null
    priceOriginal: bigint | null
    quantity: number | null
    methodPayment: string | null
    image: string | null
    slugProduct: string | null
    merchantOrderId: string | null
    status: string | null
    noResi: string | null
    dataPesananId: number | null
  }

  export type DataPesananItemMaxAggregateOutputType = {
    id: number | null
    start: Date | null
    end: Date | null
    note: string | null
    productName: string | null
    price: bigint | null
    priceOriginal: bigint | null
    quantity: number | null
    methodPayment: string | null
    image: string | null
    slugProduct: string | null
    merchantOrderId: string | null
    status: string | null
    noResi: string | null
    dataPesananId: number | null
  }

  export type DataPesananItemCountAggregateOutputType = {
    id: number
    start: number
    end: number
    note: number
    productName: number
    price: number
    priceOriginal: number
    quantity: number
    methodPayment: number
    image: number
    slugProduct: number
    merchantOrderId: number
    status: number
    noResi: number
    dataPesananId: number
    _all: number
  }


  export type DataPesananItemAvgAggregateInputType = {
    id?: true
    price?: true
    priceOriginal?: true
    quantity?: true
    dataPesananId?: true
  }

  export type DataPesananItemSumAggregateInputType = {
    id?: true
    price?: true
    priceOriginal?: true
    quantity?: true
    dataPesananId?: true
  }

  export type DataPesananItemMinAggregateInputType = {
    id?: true
    start?: true
    end?: true
    note?: true
    productName?: true
    price?: true
    priceOriginal?: true
    quantity?: true
    methodPayment?: true
    image?: true
    slugProduct?: true
    merchantOrderId?: true
    status?: true
    noResi?: true
    dataPesananId?: true
  }

  export type DataPesananItemMaxAggregateInputType = {
    id?: true
    start?: true
    end?: true
    note?: true
    productName?: true
    price?: true
    priceOriginal?: true
    quantity?: true
    methodPayment?: true
    image?: true
    slugProduct?: true
    merchantOrderId?: true
    status?: true
    noResi?: true
    dataPesananId?: true
  }

  export type DataPesananItemCountAggregateInputType = {
    id?: true
    start?: true
    end?: true
    note?: true
    productName?: true
    price?: true
    priceOriginal?: true
    quantity?: true
    methodPayment?: true
    image?: true
    slugProduct?: true
    merchantOrderId?: true
    status?: true
    noResi?: true
    dataPesananId?: true
    _all?: true
  }

  export type DataPesananItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dataPesananItem to aggregate.
     */
    where?: dataPesananItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dataPesananItems to fetch.
     */
    orderBy?: dataPesananItemOrderByWithRelationInput | dataPesananItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: dataPesananItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dataPesananItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dataPesananItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned dataPesananItems
    **/
    _count?: true | DataPesananItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DataPesananItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DataPesananItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DataPesananItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DataPesananItemMaxAggregateInputType
  }

  export type GetDataPesananItemAggregateType<T extends DataPesananItemAggregateArgs> = {
        [P in keyof T & keyof AggregateDataPesananItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDataPesananItem[P]>
      : GetScalarType<T[P], AggregateDataPesananItem[P]>
  }




  export type dataPesananItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dataPesananItemWhereInput
    orderBy?: dataPesananItemOrderByWithAggregationInput | dataPesananItemOrderByWithAggregationInput[]
    by: DataPesananItemScalarFieldEnum[] | DataPesananItemScalarFieldEnum
    having?: dataPesananItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DataPesananItemCountAggregateInputType | true
    _avg?: DataPesananItemAvgAggregateInputType
    _sum?: DataPesananItemSumAggregateInputType
    _min?: DataPesananItemMinAggregateInputType
    _max?: DataPesananItemMaxAggregateInputType
  }

  export type DataPesananItemGroupByOutputType = {
    id: number
    start: Date
    end: Date | null
    note: string | null
    productName: string | null
    price: bigint | null
    priceOriginal: bigint | null
    quantity: number | null
    methodPayment: string | null
    image: string | null
    slugProduct: string | null
    merchantOrderId: string | null
    status: string | null
    noResi: string | null
    dataPesananId: number | null
    _count: DataPesananItemCountAggregateOutputType | null
    _avg: DataPesananItemAvgAggregateOutputType | null
    _sum: DataPesananItemSumAggregateOutputType | null
    _min: DataPesananItemMinAggregateOutputType | null
    _max: DataPesananItemMaxAggregateOutputType | null
  }

  type GetDataPesananItemGroupByPayload<T extends dataPesananItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DataPesananItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DataPesananItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DataPesananItemGroupByOutputType[P]>
            : GetScalarType<T[P], DataPesananItemGroupByOutputType[P]>
        }
      >
    >


  export type dataPesananItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    end?: boolean
    note?: boolean
    productName?: boolean
    price?: boolean
    priceOriginal?: boolean
    quantity?: boolean
    methodPayment?: boolean
    image?: boolean
    slugProduct?: boolean
    merchantOrderId?: boolean
    status?: boolean
    noResi?: boolean
    dataPesananId?: boolean
    dataPesanan?: boolean | dataPesananItem$dataPesananArgs<ExtArgs>
  }, ExtArgs["result"]["dataPesananItem"]>

  export type dataPesananItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    end?: boolean
    note?: boolean
    productName?: boolean
    price?: boolean
    priceOriginal?: boolean
    quantity?: boolean
    methodPayment?: boolean
    image?: boolean
    slugProduct?: boolean
    merchantOrderId?: boolean
    status?: boolean
    noResi?: boolean
    dataPesananId?: boolean
    dataPesanan?: boolean | dataPesananItem$dataPesananArgs<ExtArgs>
  }, ExtArgs["result"]["dataPesananItem"]>

  export type dataPesananItemSelectScalar = {
    id?: boolean
    start?: boolean
    end?: boolean
    note?: boolean
    productName?: boolean
    price?: boolean
    priceOriginal?: boolean
    quantity?: boolean
    methodPayment?: boolean
    image?: boolean
    slugProduct?: boolean
    merchantOrderId?: boolean
    status?: boolean
    noResi?: boolean
    dataPesananId?: boolean
  }

  export type dataPesananItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataPesanan?: boolean | dataPesananItem$dataPesananArgs<ExtArgs>
  }
  export type dataPesananItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataPesanan?: boolean | dataPesananItem$dataPesananArgs<ExtArgs>
  }

  export type $dataPesananItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "dataPesananItem"
    objects: {
      dataPesanan: Prisma.$dataPesananPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      start: Date
      end: Date | null
      note: string | null
      productName: string | null
      price: bigint | null
      priceOriginal: bigint | null
      quantity: number | null
      methodPayment: string | null
      image: string | null
      slugProduct: string | null
      merchantOrderId: string | null
      status: string | null
      noResi: string | null
      dataPesananId: number | null
    }, ExtArgs["result"]["dataPesananItem"]>
    composites: {}
  }

  type dataPesananItemGetPayload<S extends boolean | null | undefined | dataPesananItemDefaultArgs> = $Result.GetResult<Prisma.$dataPesananItemPayload, S>

  type dataPesananItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<dataPesananItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DataPesananItemCountAggregateInputType | true
    }

  export interface dataPesananItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['dataPesananItem'], meta: { name: 'dataPesananItem' } }
    /**
     * Find zero or one DataPesananItem that matches the filter.
     * @param {dataPesananItemFindUniqueArgs} args - Arguments to find a DataPesananItem
     * @example
     * // Get one DataPesananItem
     * const dataPesananItem = await prisma.dataPesananItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends dataPesananItemFindUniqueArgs>(args: SelectSubset<T, dataPesananItemFindUniqueArgs<ExtArgs>>): Prisma__dataPesananItemClient<$Result.GetResult<Prisma.$dataPesananItemPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DataPesananItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {dataPesananItemFindUniqueOrThrowArgs} args - Arguments to find a DataPesananItem
     * @example
     * // Get one DataPesananItem
     * const dataPesananItem = await prisma.dataPesananItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends dataPesananItemFindUniqueOrThrowArgs>(args: SelectSubset<T, dataPesananItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__dataPesananItemClient<$Result.GetResult<Prisma.$dataPesananItemPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DataPesananItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataPesananItemFindFirstArgs} args - Arguments to find a DataPesananItem
     * @example
     * // Get one DataPesananItem
     * const dataPesananItem = await prisma.dataPesananItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends dataPesananItemFindFirstArgs>(args?: SelectSubset<T, dataPesananItemFindFirstArgs<ExtArgs>>): Prisma__dataPesananItemClient<$Result.GetResult<Prisma.$dataPesananItemPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DataPesananItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataPesananItemFindFirstOrThrowArgs} args - Arguments to find a DataPesananItem
     * @example
     * // Get one DataPesananItem
     * const dataPesananItem = await prisma.dataPesananItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends dataPesananItemFindFirstOrThrowArgs>(args?: SelectSubset<T, dataPesananItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__dataPesananItemClient<$Result.GetResult<Prisma.$dataPesananItemPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DataPesananItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataPesananItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DataPesananItems
     * const dataPesananItems = await prisma.dataPesananItem.findMany()
     * 
     * // Get first 10 DataPesananItems
     * const dataPesananItems = await prisma.dataPesananItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dataPesananItemWithIdOnly = await prisma.dataPesananItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends dataPesananItemFindManyArgs>(args?: SelectSubset<T, dataPesananItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dataPesananItemPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DataPesananItem.
     * @param {dataPesananItemCreateArgs} args - Arguments to create a DataPesananItem.
     * @example
     * // Create one DataPesananItem
     * const DataPesananItem = await prisma.dataPesananItem.create({
     *   data: {
     *     // ... data to create a DataPesananItem
     *   }
     * })
     * 
     */
    create<T extends dataPesananItemCreateArgs>(args: SelectSubset<T, dataPesananItemCreateArgs<ExtArgs>>): Prisma__dataPesananItemClient<$Result.GetResult<Prisma.$dataPesananItemPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DataPesananItems.
     * @param {dataPesananItemCreateManyArgs} args - Arguments to create many DataPesananItems.
     * @example
     * // Create many DataPesananItems
     * const dataPesananItem = await prisma.dataPesananItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends dataPesananItemCreateManyArgs>(args?: SelectSubset<T, dataPesananItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DataPesananItems and returns the data saved in the database.
     * @param {dataPesananItemCreateManyAndReturnArgs} args - Arguments to create many DataPesananItems.
     * @example
     * // Create many DataPesananItems
     * const dataPesananItem = await prisma.dataPesananItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DataPesananItems and only return the `id`
     * const dataPesananItemWithIdOnly = await prisma.dataPesananItem.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends dataPesananItemCreateManyAndReturnArgs>(args?: SelectSubset<T, dataPesananItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dataPesananItemPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DataPesananItem.
     * @param {dataPesananItemDeleteArgs} args - Arguments to delete one DataPesananItem.
     * @example
     * // Delete one DataPesananItem
     * const DataPesananItem = await prisma.dataPesananItem.delete({
     *   where: {
     *     // ... filter to delete one DataPesananItem
     *   }
     * })
     * 
     */
    delete<T extends dataPesananItemDeleteArgs>(args: SelectSubset<T, dataPesananItemDeleteArgs<ExtArgs>>): Prisma__dataPesananItemClient<$Result.GetResult<Prisma.$dataPesananItemPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DataPesananItem.
     * @param {dataPesananItemUpdateArgs} args - Arguments to update one DataPesananItem.
     * @example
     * // Update one DataPesananItem
     * const dataPesananItem = await prisma.dataPesananItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends dataPesananItemUpdateArgs>(args: SelectSubset<T, dataPesananItemUpdateArgs<ExtArgs>>): Prisma__dataPesananItemClient<$Result.GetResult<Prisma.$dataPesananItemPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DataPesananItems.
     * @param {dataPesananItemDeleteManyArgs} args - Arguments to filter DataPesananItems to delete.
     * @example
     * // Delete a few DataPesananItems
     * const { count } = await prisma.dataPesananItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends dataPesananItemDeleteManyArgs>(args?: SelectSubset<T, dataPesananItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataPesananItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataPesananItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DataPesananItems
     * const dataPesananItem = await prisma.dataPesananItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends dataPesananItemUpdateManyArgs>(args: SelectSubset<T, dataPesananItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DataPesananItem.
     * @param {dataPesananItemUpsertArgs} args - Arguments to update or create a DataPesananItem.
     * @example
     * // Update or create a DataPesananItem
     * const dataPesananItem = await prisma.dataPesananItem.upsert({
     *   create: {
     *     // ... data to create a DataPesananItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DataPesananItem we want to update
     *   }
     * })
     */
    upsert<T extends dataPesananItemUpsertArgs>(args: SelectSubset<T, dataPesananItemUpsertArgs<ExtArgs>>): Prisma__dataPesananItemClient<$Result.GetResult<Prisma.$dataPesananItemPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DataPesananItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataPesananItemCountArgs} args - Arguments to filter DataPesananItems to count.
     * @example
     * // Count the number of DataPesananItems
     * const count = await prisma.dataPesananItem.count({
     *   where: {
     *     // ... the filter for the DataPesananItems we want to count
     *   }
     * })
    **/
    count<T extends dataPesananItemCountArgs>(
      args?: Subset<T, dataPesananItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DataPesananItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DataPesananItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataPesananItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DataPesananItemAggregateArgs>(args: Subset<T, DataPesananItemAggregateArgs>): Prisma.PrismaPromise<GetDataPesananItemAggregateType<T>>

    /**
     * Group by DataPesananItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataPesananItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends dataPesananItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: dataPesananItemGroupByArgs['orderBy'] }
        : { orderBy?: dataPesananItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, dataPesananItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDataPesananItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the dataPesananItem model
   */
  readonly fields: dataPesananItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for dataPesananItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__dataPesananItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dataPesanan<T extends dataPesananItem$dataPesananArgs<ExtArgs> = {}>(args?: Subset<T, dataPesananItem$dataPesananArgs<ExtArgs>>): Prisma__dataPesananClient<$Result.GetResult<Prisma.$dataPesananPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the dataPesananItem model
   */ 
  interface dataPesananItemFieldRefs {
    readonly id: FieldRef<"dataPesananItem", 'Int'>
    readonly start: FieldRef<"dataPesananItem", 'DateTime'>
    readonly end: FieldRef<"dataPesananItem", 'DateTime'>
    readonly note: FieldRef<"dataPesananItem", 'String'>
    readonly productName: FieldRef<"dataPesananItem", 'String'>
    readonly price: FieldRef<"dataPesananItem", 'BigInt'>
    readonly priceOriginal: FieldRef<"dataPesananItem", 'BigInt'>
    readonly quantity: FieldRef<"dataPesananItem", 'Int'>
    readonly methodPayment: FieldRef<"dataPesananItem", 'String'>
    readonly image: FieldRef<"dataPesananItem", 'String'>
    readonly slugProduct: FieldRef<"dataPesananItem", 'String'>
    readonly merchantOrderId: FieldRef<"dataPesananItem", 'String'>
    readonly status: FieldRef<"dataPesananItem", 'String'>
    readonly noResi: FieldRef<"dataPesananItem", 'String'>
    readonly dataPesananId: FieldRef<"dataPesananItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * dataPesananItem findUnique
   */
  export type dataPesananItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dataPesananItem
     */
    select?: dataPesananItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dataPesananItemInclude<ExtArgs> | null
    /**
     * Filter, which dataPesananItem to fetch.
     */
    where: dataPesananItemWhereUniqueInput
  }

  /**
   * dataPesananItem findUniqueOrThrow
   */
  export type dataPesananItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dataPesananItem
     */
    select?: dataPesananItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dataPesananItemInclude<ExtArgs> | null
    /**
     * Filter, which dataPesananItem to fetch.
     */
    where: dataPesananItemWhereUniqueInput
  }

  /**
   * dataPesananItem findFirst
   */
  export type dataPesananItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dataPesananItem
     */
    select?: dataPesananItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dataPesananItemInclude<ExtArgs> | null
    /**
     * Filter, which dataPesananItem to fetch.
     */
    where?: dataPesananItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dataPesananItems to fetch.
     */
    orderBy?: dataPesananItemOrderByWithRelationInput | dataPesananItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dataPesananItems.
     */
    cursor?: dataPesananItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dataPesananItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dataPesananItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dataPesananItems.
     */
    distinct?: DataPesananItemScalarFieldEnum | DataPesananItemScalarFieldEnum[]
  }

  /**
   * dataPesananItem findFirstOrThrow
   */
  export type dataPesananItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dataPesananItem
     */
    select?: dataPesananItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dataPesananItemInclude<ExtArgs> | null
    /**
     * Filter, which dataPesananItem to fetch.
     */
    where?: dataPesananItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dataPesananItems to fetch.
     */
    orderBy?: dataPesananItemOrderByWithRelationInput | dataPesananItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dataPesananItems.
     */
    cursor?: dataPesananItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dataPesananItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dataPesananItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dataPesananItems.
     */
    distinct?: DataPesananItemScalarFieldEnum | DataPesananItemScalarFieldEnum[]
  }

  /**
   * dataPesananItem findMany
   */
  export type dataPesananItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dataPesananItem
     */
    select?: dataPesananItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dataPesananItemInclude<ExtArgs> | null
    /**
     * Filter, which dataPesananItems to fetch.
     */
    where?: dataPesananItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dataPesananItems to fetch.
     */
    orderBy?: dataPesananItemOrderByWithRelationInput | dataPesananItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing dataPesananItems.
     */
    cursor?: dataPesananItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dataPesananItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dataPesananItems.
     */
    skip?: number
    distinct?: DataPesananItemScalarFieldEnum | DataPesananItemScalarFieldEnum[]
  }

  /**
   * dataPesananItem create
   */
  export type dataPesananItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dataPesananItem
     */
    select?: dataPesananItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dataPesananItemInclude<ExtArgs> | null
    /**
     * The data needed to create a dataPesananItem.
     */
    data?: XOR<dataPesananItemCreateInput, dataPesananItemUncheckedCreateInput>
  }

  /**
   * dataPesananItem createMany
   */
  export type dataPesananItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many dataPesananItems.
     */
    data: dataPesananItemCreateManyInput | dataPesananItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * dataPesananItem createManyAndReturn
   */
  export type dataPesananItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dataPesananItem
     */
    select?: dataPesananItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many dataPesananItems.
     */
    data: dataPesananItemCreateManyInput | dataPesananItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dataPesananItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * dataPesananItem update
   */
  export type dataPesananItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dataPesananItem
     */
    select?: dataPesananItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dataPesananItemInclude<ExtArgs> | null
    /**
     * The data needed to update a dataPesananItem.
     */
    data: XOR<dataPesananItemUpdateInput, dataPesananItemUncheckedUpdateInput>
    /**
     * Choose, which dataPesananItem to update.
     */
    where: dataPesananItemWhereUniqueInput
  }

  /**
   * dataPesananItem updateMany
   */
  export type dataPesananItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update dataPesananItems.
     */
    data: XOR<dataPesananItemUpdateManyMutationInput, dataPesananItemUncheckedUpdateManyInput>
    /**
     * Filter which dataPesananItems to update
     */
    where?: dataPesananItemWhereInput
  }

  /**
   * dataPesananItem upsert
   */
  export type dataPesananItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dataPesananItem
     */
    select?: dataPesananItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dataPesananItemInclude<ExtArgs> | null
    /**
     * The filter to search for the dataPesananItem to update in case it exists.
     */
    where: dataPesananItemWhereUniqueInput
    /**
     * In case the dataPesananItem found by the `where` argument doesn't exist, create a new dataPesananItem with this data.
     */
    create: XOR<dataPesananItemCreateInput, dataPesananItemUncheckedCreateInput>
    /**
     * In case the dataPesananItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<dataPesananItemUpdateInput, dataPesananItemUncheckedUpdateInput>
  }

  /**
   * dataPesananItem delete
   */
  export type dataPesananItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dataPesananItem
     */
    select?: dataPesananItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dataPesananItemInclude<ExtArgs> | null
    /**
     * Filter which dataPesananItem to delete.
     */
    where: dataPesananItemWhereUniqueInput
  }

  /**
   * dataPesananItem deleteMany
   */
  export type dataPesananItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dataPesananItems to delete
     */
    where?: dataPesananItemWhereInput
  }

  /**
   * dataPesananItem.dataPesanan
   */
  export type dataPesananItem$dataPesananArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dataPesanan
     */
    select?: dataPesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dataPesananInclude<ExtArgs> | null
    where?: dataPesananWhereInput
  }

  /**
   * dataPesananItem without action
   */
  export type dataPesananItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dataPesananItem
     */
    select?: dataPesananItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dataPesananItemInclude<ExtArgs> | null
  }


  /**
   * Model dataPesanan
   */

  export type AggregateDataPesanan = {
    _count: DataPesananCountAggregateOutputType | null
    _avg: DataPesananAvgAggregateOutputType | null
    _sum: DataPesananSumAggregateOutputType | null
    _min: DataPesananMinAggregateOutputType | null
    _max: DataPesananMaxAggregateOutputType | null
  }

  export type DataPesananAvgAggregateOutputType = {
    id: number | null
  }

  export type DataPesananSumAggregateOutputType = {
    id: number | null
  }

  export type DataPesananMinAggregateOutputType = {
    id: number | null
    start: Date | null
    end: Date | null
    payment: boolean | null
    reference: string | null
    merchantOrderId: string | null
    cartID: string | null
  }

  export type DataPesananMaxAggregateOutputType = {
    id: number | null
    start: Date | null
    end: Date | null
    payment: boolean | null
    reference: string | null
    merchantOrderId: string | null
    cartID: string | null
  }

  export type DataPesananCountAggregateOutputType = {
    id: number
    start: number
    end: number
    payment: number
    reference: number
    merchantOrderId: number
    cartID: number
    _all: number
  }


  export type DataPesananAvgAggregateInputType = {
    id?: true
  }

  export type DataPesananSumAggregateInputType = {
    id?: true
  }

  export type DataPesananMinAggregateInputType = {
    id?: true
    start?: true
    end?: true
    payment?: true
    reference?: true
    merchantOrderId?: true
    cartID?: true
  }

  export type DataPesananMaxAggregateInputType = {
    id?: true
    start?: true
    end?: true
    payment?: true
    reference?: true
    merchantOrderId?: true
    cartID?: true
  }

  export type DataPesananCountAggregateInputType = {
    id?: true
    start?: true
    end?: true
    payment?: true
    reference?: true
    merchantOrderId?: true
    cartID?: true
    _all?: true
  }

  export type DataPesananAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dataPesanan to aggregate.
     */
    where?: dataPesananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dataPesanans to fetch.
     */
    orderBy?: dataPesananOrderByWithRelationInput | dataPesananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: dataPesananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dataPesanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dataPesanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned dataPesanans
    **/
    _count?: true | DataPesananCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DataPesananAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DataPesananSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DataPesananMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DataPesananMaxAggregateInputType
  }

  export type GetDataPesananAggregateType<T extends DataPesananAggregateArgs> = {
        [P in keyof T & keyof AggregateDataPesanan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDataPesanan[P]>
      : GetScalarType<T[P], AggregateDataPesanan[P]>
  }




  export type dataPesananGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: dataPesananWhereInput
    orderBy?: dataPesananOrderByWithAggregationInput | dataPesananOrderByWithAggregationInput[]
    by: DataPesananScalarFieldEnum[] | DataPesananScalarFieldEnum
    having?: dataPesananScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DataPesananCountAggregateInputType | true
    _avg?: DataPesananAvgAggregateInputType
    _sum?: DataPesananSumAggregateInputType
    _min?: DataPesananMinAggregateInputType
    _max?: DataPesananMaxAggregateInputType
  }

  export type DataPesananGroupByOutputType = {
    id: number
    start: Date
    end: Date | null
    payment: boolean
    reference: string | null
    merchantOrderId: string | null
    cartID: string
    _count: DataPesananCountAggregateOutputType | null
    _avg: DataPesananAvgAggregateOutputType | null
    _sum: DataPesananSumAggregateOutputType | null
    _min: DataPesananMinAggregateOutputType | null
    _max: DataPesananMaxAggregateOutputType | null
  }

  type GetDataPesananGroupByPayload<T extends dataPesananGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DataPesananGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DataPesananGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DataPesananGroupByOutputType[P]>
            : GetScalarType<T[P], DataPesananGroupByOutputType[P]>
        }
      >
    >


  export type dataPesananSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    end?: boolean
    payment?: boolean
    reference?: boolean
    merchantOrderId?: boolean
    cartID?: boolean
    dataPesananItems?: boolean | dataPesanan$dataPesananItemsArgs<ExtArgs>
    cart?: boolean | cartDefaultArgs<ExtArgs>
    _count?: boolean | DataPesananCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dataPesanan"]>

  export type dataPesananSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    start?: boolean
    end?: boolean
    payment?: boolean
    reference?: boolean
    merchantOrderId?: boolean
    cartID?: boolean
    cart?: boolean | cartDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dataPesanan"]>

  export type dataPesananSelectScalar = {
    id?: boolean
    start?: boolean
    end?: boolean
    payment?: boolean
    reference?: boolean
    merchantOrderId?: boolean
    cartID?: boolean
  }

  export type dataPesananInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dataPesananItems?: boolean | dataPesanan$dataPesananItemsArgs<ExtArgs>
    cart?: boolean | cartDefaultArgs<ExtArgs>
    _count?: boolean | DataPesananCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type dataPesananIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart?: boolean | cartDefaultArgs<ExtArgs>
  }

  export type $dataPesananPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "dataPesanan"
    objects: {
      dataPesananItems: Prisma.$dataPesananItemPayload<ExtArgs>[]
      cart: Prisma.$cartPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      start: Date
      end: Date | null
      payment: boolean
      reference: string | null
      merchantOrderId: string | null
      cartID: string
    }, ExtArgs["result"]["dataPesanan"]>
    composites: {}
  }

  type dataPesananGetPayload<S extends boolean | null | undefined | dataPesananDefaultArgs> = $Result.GetResult<Prisma.$dataPesananPayload, S>

  type dataPesananCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<dataPesananFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DataPesananCountAggregateInputType | true
    }

  export interface dataPesananDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['dataPesanan'], meta: { name: 'dataPesanan' } }
    /**
     * Find zero or one DataPesanan that matches the filter.
     * @param {dataPesananFindUniqueArgs} args - Arguments to find a DataPesanan
     * @example
     * // Get one DataPesanan
     * const dataPesanan = await prisma.dataPesanan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends dataPesananFindUniqueArgs>(args: SelectSubset<T, dataPesananFindUniqueArgs<ExtArgs>>): Prisma__dataPesananClient<$Result.GetResult<Prisma.$dataPesananPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DataPesanan that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {dataPesananFindUniqueOrThrowArgs} args - Arguments to find a DataPesanan
     * @example
     * // Get one DataPesanan
     * const dataPesanan = await prisma.dataPesanan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends dataPesananFindUniqueOrThrowArgs>(args: SelectSubset<T, dataPesananFindUniqueOrThrowArgs<ExtArgs>>): Prisma__dataPesananClient<$Result.GetResult<Prisma.$dataPesananPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DataPesanan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataPesananFindFirstArgs} args - Arguments to find a DataPesanan
     * @example
     * // Get one DataPesanan
     * const dataPesanan = await prisma.dataPesanan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends dataPesananFindFirstArgs>(args?: SelectSubset<T, dataPesananFindFirstArgs<ExtArgs>>): Prisma__dataPesananClient<$Result.GetResult<Prisma.$dataPesananPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DataPesanan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataPesananFindFirstOrThrowArgs} args - Arguments to find a DataPesanan
     * @example
     * // Get one DataPesanan
     * const dataPesanan = await prisma.dataPesanan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends dataPesananFindFirstOrThrowArgs>(args?: SelectSubset<T, dataPesananFindFirstOrThrowArgs<ExtArgs>>): Prisma__dataPesananClient<$Result.GetResult<Prisma.$dataPesananPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DataPesanans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataPesananFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DataPesanans
     * const dataPesanans = await prisma.dataPesanan.findMany()
     * 
     * // Get first 10 DataPesanans
     * const dataPesanans = await prisma.dataPesanan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dataPesananWithIdOnly = await prisma.dataPesanan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends dataPesananFindManyArgs>(args?: SelectSubset<T, dataPesananFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dataPesananPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DataPesanan.
     * @param {dataPesananCreateArgs} args - Arguments to create a DataPesanan.
     * @example
     * // Create one DataPesanan
     * const DataPesanan = await prisma.dataPesanan.create({
     *   data: {
     *     // ... data to create a DataPesanan
     *   }
     * })
     * 
     */
    create<T extends dataPesananCreateArgs>(args: SelectSubset<T, dataPesananCreateArgs<ExtArgs>>): Prisma__dataPesananClient<$Result.GetResult<Prisma.$dataPesananPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DataPesanans.
     * @param {dataPesananCreateManyArgs} args - Arguments to create many DataPesanans.
     * @example
     * // Create many DataPesanans
     * const dataPesanan = await prisma.dataPesanan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends dataPesananCreateManyArgs>(args?: SelectSubset<T, dataPesananCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DataPesanans and returns the data saved in the database.
     * @param {dataPesananCreateManyAndReturnArgs} args - Arguments to create many DataPesanans.
     * @example
     * // Create many DataPesanans
     * const dataPesanan = await prisma.dataPesanan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DataPesanans and only return the `id`
     * const dataPesananWithIdOnly = await prisma.dataPesanan.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends dataPesananCreateManyAndReturnArgs>(args?: SelectSubset<T, dataPesananCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dataPesananPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DataPesanan.
     * @param {dataPesananDeleteArgs} args - Arguments to delete one DataPesanan.
     * @example
     * // Delete one DataPesanan
     * const DataPesanan = await prisma.dataPesanan.delete({
     *   where: {
     *     // ... filter to delete one DataPesanan
     *   }
     * })
     * 
     */
    delete<T extends dataPesananDeleteArgs>(args: SelectSubset<T, dataPesananDeleteArgs<ExtArgs>>): Prisma__dataPesananClient<$Result.GetResult<Prisma.$dataPesananPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DataPesanan.
     * @param {dataPesananUpdateArgs} args - Arguments to update one DataPesanan.
     * @example
     * // Update one DataPesanan
     * const dataPesanan = await prisma.dataPesanan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends dataPesananUpdateArgs>(args: SelectSubset<T, dataPesananUpdateArgs<ExtArgs>>): Prisma__dataPesananClient<$Result.GetResult<Prisma.$dataPesananPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DataPesanans.
     * @param {dataPesananDeleteManyArgs} args - Arguments to filter DataPesanans to delete.
     * @example
     * // Delete a few DataPesanans
     * const { count } = await prisma.dataPesanan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends dataPesananDeleteManyArgs>(args?: SelectSubset<T, dataPesananDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataPesanans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataPesananUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DataPesanans
     * const dataPesanan = await prisma.dataPesanan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends dataPesananUpdateManyArgs>(args: SelectSubset<T, dataPesananUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DataPesanan.
     * @param {dataPesananUpsertArgs} args - Arguments to update or create a DataPesanan.
     * @example
     * // Update or create a DataPesanan
     * const dataPesanan = await prisma.dataPesanan.upsert({
     *   create: {
     *     // ... data to create a DataPesanan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DataPesanan we want to update
     *   }
     * })
     */
    upsert<T extends dataPesananUpsertArgs>(args: SelectSubset<T, dataPesananUpsertArgs<ExtArgs>>): Prisma__dataPesananClient<$Result.GetResult<Prisma.$dataPesananPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DataPesanans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataPesananCountArgs} args - Arguments to filter DataPesanans to count.
     * @example
     * // Count the number of DataPesanans
     * const count = await prisma.dataPesanan.count({
     *   where: {
     *     // ... the filter for the DataPesanans we want to count
     *   }
     * })
    **/
    count<T extends dataPesananCountArgs>(
      args?: Subset<T, dataPesananCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DataPesananCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DataPesanan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataPesananAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DataPesananAggregateArgs>(args: Subset<T, DataPesananAggregateArgs>): Prisma.PrismaPromise<GetDataPesananAggregateType<T>>

    /**
     * Group by DataPesanan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {dataPesananGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends dataPesananGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: dataPesananGroupByArgs['orderBy'] }
        : { orderBy?: dataPesananGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, dataPesananGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDataPesananGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the dataPesanan model
   */
  readonly fields: dataPesananFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for dataPesanan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__dataPesananClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dataPesananItems<T extends dataPesanan$dataPesananItemsArgs<ExtArgs> = {}>(args?: Subset<T, dataPesanan$dataPesananItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$dataPesananItemPayload<ExtArgs>, T, "findMany"> | Null>
    cart<T extends cartDefaultArgs<ExtArgs> = {}>(args?: Subset<T, cartDefaultArgs<ExtArgs>>): Prisma__cartClient<$Result.GetResult<Prisma.$cartPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the dataPesanan model
   */ 
  interface dataPesananFieldRefs {
    readonly id: FieldRef<"dataPesanan", 'Int'>
    readonly start: FieldRef<"dataPesanan", 'DateTime'>
    readonly end: FieldRef<"dataPesanan", 'DateTime'>
    readonly payment: FieldRef<"dataPesanan", 'Boolean'>
    readonly reference: FieldRef<"dataPesanan", 'String'>
    readonly merchantOrderId: FieldRef<"dataPesanan", 'String'>
    readonly cartID: FieldRef<"dataPesanan", 'String'>
  }
    

  // Custom InputTypes
  /**
   * dataPesanan findUnique
   */
  export type dataPesananFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dataPesanan
     */
    select?: dataPesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dataPesananInclude<ExtArgs> | null
    /**
     * Filter, which dataPesanan to fetch.
     */
    where: dataPesananWhereUniqueInput
  }

  /**
   * dataPesanan findUniqueOrThrow
   */
  export type dataPesananFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dataPesanan
     */
    select?: dataPesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dataPesananInclude<ExtArgs> | null
    /**
     * Filter, which dataPesanan to fetch.
     */
    where: dataPesananWhereUniqueInput
  }

  /**
   * dataPesanan findFirst
   */
  export type dataPesananFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dataPesanan
     */
    select?: dataPesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dataPesananInclude<ExtArgs> | null
    /**
     * Filter, which dataPesanan to fetch.
     */
    where?: dataPesananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dataPesanans to fetch.
     */
    orderBy?: dataPesananOrderByWithRelationInput | dataPesananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dataPesanans.
     */
    cursor?: dataPesananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dataPesanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dataPesanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dataPesanans.
     */
    distinct?: DataPesananScalarFieldEnum | DataPesananScalarFieldEnum[]
  }

  /**
   * dataPesanan findFirstOrThrow
   */
  export type dataPesananFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dataPesanan
     */
    select?: dataPesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dataPesananInclude<ExtArgs> | null
    /**
     * Filter, which dataPesanan to fetch.
     */
    where?: dataPesananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dataPesanans to fetch.
     */
    orderBy?: dataPesananOrderByWithRelationInput | dataPesananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for dataPesanans.
     */
    cursor?: dataPesananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dataPesanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dataPesanans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of dataPesanans.
     */
    distinct?: DataPesananScalarFieldEnum | DataPesananScalarFieldEnum[]
  }

  /**
   * dataPesanan findMany
   */
  export type dataPesananFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dataPesanan
     */
    select?: dataPesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dataPesananInclude<ExtArgs> | null
    /**
     * Filter, which dataPesanans to fetch.
     */
    where?: dataPesananWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of dataPesanans to fetch.
     */
    orderBy?: dataPesananOrderByWithRelationInput | dataPesananOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing dataPesanans.
     */
    cursor?: dataPesananWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` dataPesanans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` dataPesanans.
     */
    skip?: number
    distinct?: DataPesananScalarFieldEnum | DataPesananScalarFieldEnum[]
  }

  /**
   * dataPesanan create
   */
  export type dataPesananCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dataPesanan
     */
    select?: dataPesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dataPesananInclude<ExtArgs> | null
    /**
     * The data needed to create a dataPesanan.
     */
    data: XOR<dataPesananCreateInput, dataPesananUncheckedCreateInput>
  }

  /**
   * dataPesanan createMany
   */
  export type dataPesananCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many dataPesanans.
     */
    data: dataPesananCreateManyInput | dataPesananCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * dataPesanan createManyAndReturn
   */
  export type dataPesananCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dataPesanan
     */
    select?: dataPesananSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many dataPesanans.
     */
    data: dataPesananCreateManyInput | dataPesananCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dataPesananIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * dataPesanan update
   */
  export type dataPesananUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dataPesanan
     */
    select?: dataPesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dataPesananInclude<ExtArgs> | null
    /**
     * The data needed to update a dataPesanan.
     */
    data: XOR<dataPesananUpdateInput, dataPesananUncheckedUpdateInput>
    /**
     * Choose, which dataPesanan to update.
     */
    where: dataPesananWhereUniqueInput
  }

  /**
   * dataPesanan updateMany
   */
  export type dataPesananUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update dataPesanans.
     */
    data: XOR<dataPesananUpdateManyMutationInput, dataPesananUncheckedUpdateManyInput>
    /**
     * Filter which dataPesanans to update
     */
    where?: dataPesananWhereInput
  }

  /**
   * dataPesanan upsert
   */
  export type dataPesananUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dataPesanan
     */
    select?: dataPesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dataPesananInclude<ExtArgs> | null
    /**
     * The filter to search for the dataPesanan to update in case it exists.
     */
    where: dataPesananWhereUniqueInput
    /**
     * In case the dataPesanan found by the `where` argument doesn't exist, create a new dataPesanan with this data.
     */
    create: XOR<dataPesananCreateInput, dataPesananUncheckedCreateInput>
    /**
     * In case the dataPesanan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<dataPesananUpdateInput, dataPesananUncheckedUpdateInput>
  }

  /**
   * dataPesanan delete
   */
  export type dataPesananDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dataPesanan
     */
    select?: dataPesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dataPesananInclude<ExtArgs> | null
    /**
     * Filter which dataPesanan to delete.
     */
    where: dataPesananWhereUniqueInput
  }

  /**
   * dataPesanan deleteMany
   */
  export type dataPesananDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which dataPesanans to delete
     */
    where?: dataPesananWhereInput
  }

  /**
   * dataPesanan.dataPesananItems
   */
  export type dataPesanan$dataPesananItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dataPesananItem
     */
    select?: dataPesananItemSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dataPesananItemInclude<ExtArgs> | null
    where?: dataPesananItemWhereInput
    orderBy?: dataPesananItemOrderByWithRelationInput | dataPesananItemOrderByWithRelationInput[]
    cursor?: dataPesananItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DataPesananItemScalarFieldEnum | DataPesananItemScalarFieldEnum[]
  }

  /**
   * dataPesanan without action
   */
  export type dataPesananDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the dataPesanan
     */
    select?: dataPesananSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: dataPesananInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CategoryProductScalarFieldEnum: {
    id: 'id',
    start: 'start',
    end: 'end',
    category: 'category',
    slugCategory: 'slugCategory',
    image: 'image',
    icon: 'icon',
    urlYoutube: 'urlYoutube',
    title: 'title',
    desc: 'desc',
    tags: 'tags'
  };

  export type CategoryProductScalarFieldEnum = (typeof CategoryProductScalarFieldEnum)[keyof typeof CategoryProductScalarFieldEnum]


  export const ListProductScalarFieldEnum: {
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
    subKategoriProduct: 'subKategoriProduct',
    productType: 'productType',
    tagProduct: 'tagProduct',
    productPrice: 'productPrice',
    productDiscount: 'productDiscount',
    productPriceFinal: 'productPriceFinal',
    urlYoutube: 'urlYoutube',
    productKategori: 'productKategori'
  };

  export type ListProductScalarFieldEnum = (typeof ListProductScalarFieldEnum)[keyof typeof ListProductScalarFieldEnum]


  export const SpecProductScalarFieldEnum: {
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

  export type SpecProductScalarFieldEnum = (typeof SpecProductScalarFieldEnum)[keyof typeof SpecProductScalarFieldEnum]


  export const ImageProductUtamaScalarFieldEnum: {
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
    pages: 'pages',
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

  export type ImageProductUtamaScalarFieldEnum = (typeof ImageProductUtamaScalarFieldEnum)[keyof typeof ImageProductUtamaScalarFieldEnum]


  export const ImageProductScalarFieldEnum: {
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
    pages: 'pages',
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

  export type ImageProductScalarFieldEnum = (typeof ImageProductScalarFieldEnum)[keyof typeof ImageProductScalarFieldEnum]


  export const PostArtikelScalarFieldEnum: {
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

  export type PostArtikelScalarFieldEnum = (typeof PostArtikelScalarFieldEnum)[keyof typeof PostArtikelScalarFieldEnum]


  export const ImageProductArtikelScalarFieldEnum: {
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
    pages: 'pages',
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

  export type ImageProductArtikelScalarFieldEnum = (typeof ImageProductArtikelScalarFieldEnum)[keyof typeof ImageProductArtikelScalarFieldEnum]


  export const CategoryArtikelScalarFieldEnum: {
    id: 'id',
    start: 'start',
    end: 'end',
    category: 'category',
    slugCategory: 'slugCategory',
    image: 'image',
    icon: 'icon',
    urlYoutube: 'urlYoutube',
    title: 'title',
    desc: 'desc',
    tags: 'tags'
  };

  export type CategoryArtikelScalarFieldEnum = (typeof CategoryArtikelScalarFieldEnum)[keyof typeof CategoryArtikelScalarFieldEnum]


  export const CartScalarFieldEnum: {
    IDCart: 'IDCart',
    email: 'email',
    clerkUserId: 'clerkUserId',
    name: 'name',
    avatar: 'avatar',
    id: 'id',
    start: 'start',
    end: 'end'
  };

  export type CartScalarFieldEnum = (typeof CartScalarFieldEnum)[keyof typeof CartScalarFieldEnum]


  export const CartItemScalarFieldEnum: {
    id: 'id',
    start: 'start',
    end: 'end',
    cartId: 'cartId',
    productId: 'productId',
    quantity: 'quantity',
    checkList: 'checkList',
    note: 'note'
  };

  export type CartItemScalarFieldEnum = (typeof CartItemScalarFieldEnum)[keyof typeof CartItemScalarFieldEnum]


  export const FormPembelianScalarFieldEnum: {
    id: 'id',
    start: 'start',
    end: 'end',
    nama_lengkap_user: 'nama_lengkap_user',
    alamat_lengkap_user: 'alamat_lengkap_user',
    kode_pos_user: 'kode_pos_user',
    no_hp_user: 'no_hp_user',
    catatan_pengiriman: 'catatan_pengiriman',
    cartID: 'cartID'
  };

  export type FormPembelianScalarFieldEnum = (typeof FormPembelianScalarFieldEnum)[keyof typeof FormPembelianScalarFieldEnum]


  export const OngkosKirimScalarFieldEnum: {
    id: 'id',
    start: 'start',
    end: 'end',
    productName: 'productName',
    price: 'price',
    quantity: 'quantity',
    cartID: 'cartID'
  };

  export type OngkosKirimScalarFieldEnum = (typeof OngkosKirimScalarFieldEnum)[keyof typeof OngkosKirimScalarFieldEnum]


  export const DataPesananItemScalarFieldEnum: {
    id: 'id',
    start: 'start',
    end: 'end',
    note: 'note',
    productName: 'productName',
    price: 'price',
    priceOriginal: 'priceOriginal',
    quantity: 'quantity',
    methodPayment: 'methodPayment',
    image: 'image',
    slugProduct: 'slugProduct',
    merchantOrderId: 'merchantOrderId',
    status: 'status',
    noResi: 'noResi',
    dataPesananId: 'dataPesananId'
  };

  export type DataPesananItemScalarFieldEnum = (typeof DataPesananItemScalarFieldEnum)[keyof typeof DataPesananItemScalarFieldEnum]


  export const DataPesananScalarFieldEnum: {
    id: 'id',
    start: 'start',
    end: 'end',
    payment: 'payment',
    reference: 'reference',
    merchantOrderId: 'merchantOrderId',
    cartID: 'cartID'
  };

  export type DataPesananScalarFieldEnum = (typeof DataPesananScalarFieldEnum)[keyof typeof DataPesananScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type categoryProductWhereInput = {
    AND?: categoryProductWhereInput | categoryProductWhereInput[]
    OR?: categoryProductWhereInput[]
    NOT?: categoryProductWhereInput | categoryProductWhereInput[]
    id?: IntFilter<"categoryProduct"> | number
    start?: DateTimeFilter<"categoryProduct"> | Date | string
    end?: DateTimeFilter<"categoryProduct"> | Date | string
    category?: StringFilter<"categoryProduct"> | string
    slugCategory?: StringFilter<"categoryProduct"> | string
    image?: StringNullableFilter<"categoryProduct"> | string | null
    icon?: StringNullableFilter<"categoryProduct"> | string | null
    urlYoutube?: StringNullableFilter<"categoryProduct"> | string | null
    title?: StringNullableFilter<"categoryProduct"> | string | null
    desc?: StringNullableFilter<"categoryProduct"> | string | null
    tags?: StringNullableFilter<"categoryProduct"> | string | null
    listProducts?: ListProductListRelationFilter
  }

  export type categoryProductOrderByWithRelationInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    category?: SortOrder
    slugCategory?: SortOrder
    image?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    urlYoutube?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    desc?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    listProducts?: listProductOrderByRelationAggregateInput
  }

  export type categoryProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    category?: string
    slugCategory?: string
    AND?: categoryProductWhereInput | categoryProductWhereInput[]
    OR?: categoryProductWhereInput[]
    NOT?: categoryProductWhereInput | categoryProductWhereInput[]
    start?: DateTimeFilter<"categoryProduct"> | Date | string
    end?: DateTimeFilter<"categoryProduct"> | Date | string
    image?: StringNullableFilter<"categoryProduct"> | string | null
    icon?: StringNullableFilter<"categoryProduct"> | string | null
    urlYoutube?: StringNullableFilter<"categoryProduct"> | string | null
    title?: StringNullableFilter<"categoryProduct"> | string | null
    desc?: StringNullableFilter<"categoryProduct"> | string | null
    tags?: StringNullableFilter<"categoryProduct"> | string | null
    listProducts?: ListProductListRelationFilter
  }, "id" | "category" | "slugCategory">

  export type categoryProductOrderByWithAggregationInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    category?: SortOrder
    slugCategory?: SortOrder
    image?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    urlYoutube?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    desc?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    _count?: categoryProductCountOrderByAggregateInput
    _avg?: categoryProductAvgOrderByAggregateInput
    _max?: categoryProductMaxOrderByAggregateInput
    _min?: categoryProductMinOrderByAggregateInput
    _sum?: categoryProductSumOrderByAggregateInput
  }

  export type categoryProductScalarWhereWithAggregatesInput = {
    AND?: categoryProductScalarWhereWithAggregatesInput | categoryProductScalarWhereWithAggregatesInput[]
    OR?: categoryProductScalarWhereWithAggregatesInput[]
    NOT?: categoryProductScalarWhereWithAggregatesInput | categoryProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"categoryProduct"> | number
    start?: DateTimeWithAggregatesFilter<"categoryProduct"> | Date | string
    end?: DateTimeWithAggregatesFilter<"categoryProduct"> | Date | string
    category?: StringWithAggregatesFilter<"categoryProduct"> | string
    slugCategory?: StringWithAggregatesFilter<"categoryProduct"> | string
    image?: StringNullableWithAggregatesFilter<"categoryProduct"> | string | null
    icon?: StringNullableWithAggregatesFilter<"categoryProduct"> | string | null
    urlYoutube?: StringNullableWithAggregatesFilter<"categoryProduct"> | string | null
    title?: StringNullableWithAggregatesFilter<"categoryProduct"> | string | null
    desc?: StringNullableWithAggregatesFilter<"categoryProduct"> | string | null
    tags?: StringNullableWithAggregatesFilter<"categoryProduct"> | string | null
  }

  export type listProductWhereInput = {
    AND?: listProductWhereInput | listProductWhereInput[]
    OR?: listProductWhereInput[]
    NOT?: listProductWhereInput | listProductWhereInput[]
    id?: IntFilter<"listProduct"> | number
    start?: DateTimeFilter<"listProduct"> | Date | string
    end?: DateTimeFilter<"listProduct"> | Date | string
    slugProduct?: StringFilter<"listProduct"> | string
    saveDraf?: BoolFilter<"listProduct"> | boolean
    descProduct?: StringNullableFilter<"listProduct"> | string | null
    productName?: StringNullableFilter<"listProduct"> | string | null
    stockProduct?: IntNullableFilter<"listProduct"> | number | null
    descMetaProduct?: StringNullableFilter<"listProduct"> | string | null
    viewProduct?: IntNullableFilter<"listProduct"> | number | null
    subKategoriProduct?: StringNullableFilter<"listProduct"> | string | null
    productType?: StringNullableFilter<"listProduct"> | string | null
    tagProduct?: JsonNullableFilter<"listProduct">
    productPrice?: BigIntNullableFilter<"listProduct"> | bigint | number | null
    productDiscount?: IntNullableFilter<"listProduct"> | number | null
    productPriceFinal?: BigIntNullableFilter<"listProduct"> | bigint | number | null
    urlYoutube?: StringNullableFilter<"listProduct"> | string | null
    productKategori?: IntFilter<"listProduct"> | number
    user?: XOR<CategoryProductRelationFilter, categoryProductWhereInput>
    url_image_product?: ImageProductListRelationFilter
    spec_product?: XOR<SpecProductNullableRelationFilter, specProductWhereInput> | null
    cartItem?: CartItemListRelationFilter
    imageProductUtama?: XOR<ImageProductUtamaNullableRelationFilter, imageProductUtamaWhereInput> | null
  }

  export type listProductOrderByWithRelationInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    slugProduct?: SortOrder
    saveDraf?: SortOrder
    descProduct?: SortOrderInput | SortOrder
    productName?: SortOrderInput | SortOrder
    stockProduct?: SortOrderInput | SortOrder
    descMetaProduct?: SortOrderInput | SortOrder
    viewProduct?: SortOrderInput | SortOrder
    subKategoriProduct?: SortOrderInput | SortOrder
    productType?: SortOrderInput | SortOrder
    tagProduct?: SortOrderInput | SortOrder
    productPrice?: SortOrderInput | SortOrder
    productDiscount?: SortOrderInput | SortOrder
    productPriceFinal?: SortOrderInput | SortOrder
    urlYoutube?: SortOrderInput | SortOrder
    productKategori?: SortOrder
    user?: categoryProductOrderByWithRelationInput
    url_image_product?: imageProductOrderByRelationAggregateInput
    spec_product?: specProductOrderByWithRelationInput
    cartItem?: cartItemOrderByRelationAggregateInput
    imageProductUtama?: imageProductUtamaOrderByWithRelationInput
  }

  export type listProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slugProduct?: string
    AND?: listProductWhereInput | listProductWhereInput[]
    OR?: listProductWhereInput[]
    NOT?: listProductWhereInput | listProductWhereInput[]
    start?: DateTimeFilter<"listProduct"> | Date | string
    end?: DateTimeFilter<"listProduct"> | Date | string
    saveDraf?: BoolFilter<"listProduct"> | boolean
    descProduct?: StringNullableFilter<"listProduct"> | string | null
    productName?: StringNullableFilter<"listProduct"> | string | null
    stockProduct?: IntNullableFilter<"listProduct"> | number | null
    descMetaProduct?: StringNullableFilter<"listProduct"> | string | null
    viewProduct?: IntNullableFilter<"listProduct"> | number | null
    subKategoriProduct?: StringNullableFilter<"listProduct"> | string | null
    productType?: StringNullableFilter<"listProduct"> | string | null
    tagProduct?: JsonNullableFilter<"listProduct">
    productPrice?: BigIntNullableFilter<"listProduct"> | bigint | number | null
    productDiscount?: IntNullableFilter<"listProduct"> | number | null
    productPriceFinal?: BigIntNullableFilter<"listProduct"> | bigint | number | null
    urlYoutube?: StringNullableFilter<"listProduct"> | string | null
    productKategori?: IntFilter<"listProduct"> | number
    user?: XOR<CategoryProductRelationFilter, categoryProductWhereInput>
    url_image_product?: ImageProductListRelationFilter
    spec_product?: XOR<SpecProductNullableRelationFilter, specProductWhereInput> | null
    cartItem?: CartItemListRelationFilter
    imageProductUtama?: XOR<ImageProductUtamaNullableRelationFilter, imageProductUtamaWhereInput> | null
  }, "id" | "slugProduct">

  export type listProductOrderByWithAggregationInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    slugProduct?: SortOrder
    saveDraf?: SortOrder
    descProduct?: SortOrderInput | SortOrder
    productName?: SortOrderInput | SortOrder
    stockProduct?: SortOrderInput | SortOrder
    descMetaProduct?: SortOrderInput | SortOrder
    viewProduct?: SortOrderInput | SortOrder
    subKategoriProduct?: SortOrderInput | SortOrder
    productType?: SortOrderInput | SortOrder
    tagProduct?: SortOrderInput | SortOrder
    productPrice?: SortOrderInput | SortOrder
    productDiscount?: SortOrderInput | SortOrder
    productPriceFinal?: SortOrderInput | SortOrder
    urlYoutube?: SortOrderInput | SortOrder
    productKategori?: SortOrder
    _count?: listProductCountOrderByAggregateInput
    _avg?: listProductAvgOrderByAggregateInput
    _max?: listProductMaxOrderByAggregateInput
    _min?: listProductMinOrderByAggregateInput
    _sum?: listProductSumOrderByAggregateInput
  }

  export type listProductScalarWhereWithAggregatesInput = {
    AND?: listProductScalarWhereWithAggregatesInput | listProductScalarWhereWithAggregatesInput[]
    OR?: listProductScalarWhereWithAggregatesInput[]
    NOT?: listProductScalarWhereWithAggregatesInput | listProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"listProduct"> | number
    start?: DateTimeWithAggregatesFilter<"listProduct"> | Date | string
    end?: DateTimeWithAggregatesFilter<"listProduct"> | Date | string
    slugProduct?: StringWithAggregatesFilter<"listProduct"> | string
    saveDraf?: BoolWithAggregatesFilter<"listProduct"> | boolean
    descProduct?: StringNullableWithAggregatesFilter<"listProduct"> | string | null
    productName?: StringNullableWithAggregatesFilter<"listProduct"> | string | null
    stockProduct?: IntNullableWithAggregatesFilter<"listProduct"> | number | null
    descMetaProduct?: StringNullableWithAggregatesFilter<"listProduct"> | string | null
    viewProduct?: IntNullableWithAggregatesFilter<"listProduct"> | number | null
    subKategoriProduct?: StringNullableWithAggregatesFilter<"listProduct"> | string | null
    productType?: StringNullableWithAggregatesFilter<"listProduct"> | string | null
    tagProduct?: JsonNullableWithAggregatesFilter<"listProduct">
    productPrice?: BigIntNullableWithAggregatesFilter<"listProduct"> | bigint | number | null
    productDiscount?: IntNullableWithAggregatesFilter<"listProduct"> | number | null
    productPriceFinal?: BigIntNullableWithAggregatesFilter<"listProduct"> | bigint | number | null
    urlYoutube?: StringNullableWithAggregatesFilter<"listProduct"> | string | null
    productKategori?: IntWithAggregatesFilter<"listProduct"> | number
  }

  export type specProductWhereInput = {
    AND?: specProductWhereInput | specProductWhereInput[]
    OR?: specProductWhereInput[]
    NOT?: specProductWhereInput | specProductWhereInput[]
    id?: IntFilter<"specProduct"> | number
    start?: DateTimeFilter<"specProduct"> | Date | string
    end?: DateTimeFilter<"specProduct"> | Date | string
    phase_spec?: StringNullableFilter<"specProduct"> | string | null
    frequency_spec?: StringNullableFilter<"specProduct"> | string | null
    gensetPower_spec?: StringNullableFilter<"specProduct"> | string | null
    ratedPower_spec?: StringNullableFilter<"specProduct"> | string | null
    maxPower_spec?: StringNullableFilter<"specProduct"> | string | null
    ratedACVoltage_spec?: StringNullableFilter<"specProduct"> | string | null
    starting_spec?: StringNullableFilter<"specProduct"> | string | null
    fuelConsumption_spec?: StringNullableFilter<"specProduct"> | string | null
    weight_spec?: IntNullableFilter<"specProduct"> | number | null
    dimension_spec?: StringNullableFilter<"specProduct"> | string | null
    IdProduct?: IntFilter<"specProduct"> | number
    user?: XOR<ListProductRelationFilter, listProductWhereInput>
  }

  export type specProductOrderByWithRelationInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    phase_spec?: SortOrderInput | SortOrder
    frequency_spec?: SortOrderInput | SortOrder
    gensetPower_spec?: SortOrderInput | SortOrder
    ratedPower_spec?: SortOrderInput | SortOrder
    maxPower_spec?: SortOrderInput | SortOrder
    ratedACVoltage_spec?: SortOrderInput | SortOrder
    starting_spec?: SortOrderInput | SortOrder
    fuelConsumption_spec?: SortOrderInput | SortOrder
    weight_spec?: SortOrderInput | SortOrder
    dimension_spec?: SortOrderInput | SortOrder
    IdProduct?: SortOrder
    user?: listProductOrderByWithRelationInput
  }

  export type specProductWhereUniqueInput = Prisma.AtLeast<{
    IdProduct?: number
    AND?: specProductWhereInput | specProductWhereInput[]
    OR?: specProductWhereInput[]
    NOT?: specProductWhereInput | specProductWhereInput[]
    id?: IntFilter<"specProduct"> | number
    start?: DateTimeFilter<"specProduct"> | Date | string
    end?: DateTimeFilter<"specProduct"> | Date | string
    phase_spec?: StringNullableFilter<"specProduct"> | string | null
    frequency_spec?: StringNullableFilter<"specProduct"> | string | null
    gensetPower_spec?: StringNullableFilter<"specProduct"> | string | null
    ratedPower_spec?: StringNullableFilter<"specProduct"> | string | null
    maxPower_spec?: StringNullableFilter<"specProduct"> | string | null
    ratedACVoltage_spec?: StringNullableFilter<"specProduct"> | string | null
    starting_spec?: StringNullableFilter<"specProduct"> | string | null
    fuelConsumption_spec?: StringNullableFilter<"specProduct"> | string | null
    weight_spec?: IntNullableFilter<"specProduct"> | number | null
    dimension_spec?: StringNullableFilter<"specProduct"> | string | null
    user?: XOR<ListProductRelationFilter, listProductWhereInput>
  }, "IdProduct">

  export type specProductOrderByWithAggregationInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    phase_spec?: SortOrderInput | SortOrder
    frequency_spec?: SortOrderInput | SortOrder
    gensetPower_spec?: SortOrderInput | SortOrder
    ratedPower_spec?: SortOrderInput | SortOrder
    maxPower_spec?: SortOrderInput | SortOrder
    ratedACVoltage_spec?: SortOrderInput | SortOrder
    starting_spec?: SortOrderInput | SortOrder
    fuelConsumption_spec?: SortOrderInput | SortOrder
    weight_spec?: SortOrderInput | SortOrder
    dimension_spec?: SortOrderInput | SortOrder
    IdProduct?: SortOrder
    _count?: specProductCountOrderByAggregateInput
    _avg?: specProductAvgOrderByAggregateInput
    _max?: specProductMaxOrderByAggregateInput
    _min?: specProductMinOrderByAggregateInput
    _sum?: specProductSumOrderByAggregateInput
  }

  export type specProductScalarWhereWithAggregatesInput = {
    AND?: specProductScalarWhereWithAggregatesInput | specProductScalarWhereWithAggregatesInput[]
    OR?: specProductScalarWhereWithAggregatesInput[]
    NOT?: specProductScalarWhereWithAggregatesInput | specProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"specProduct"> | number
    start?: DateTimeWithAggregatesFilter<"specProduct"> | Date | string
    end?: DateTimeWithAggregatesFilter<"specProduct"> | Date | string
    phase_spec?: StringNullableWithAggregatesFilter<"specProduct"> | string | null
    frequency_spec?: StringNullableWithAggregatesFilter<"specProduct"> | string | null
    gensetPower_spec?: StringNullableWithAggregatesFilter<"specProduct"> | string | null
    ratedPower_spec?: StringNullableWithAggregatesFilter<"specProduct"> | string | null
    maxPower_spec?: StringNullableWithAggregatesFilter<"specProduct"> | string | null
    ratedACVoltage_spec?: StringNullableWithAggregatesFilter<"specProduct"> | string | null
    starting_spec?: StringNullableWithAggregatesFilter<"specProduct"> | string | null
    fuelConsumption_spec?: StringNullableWithAggregatesFilter<"specProduct"> | string | null
    weight_spec?: IntNullableWithAggregatesFilter<"specProduct"> | number | null
    dimension_spec?: StringNullableWithAggregatesFilter<"specProduct"> | string | null
    IdProduct?: IntWithAggregatesFilter<"specProduct"> | number
  }

  export type imageProductUtamaWhereInput = {
    AND?: imageProductUtamaWhereInput | imageProductUtamaWhereInput[]
    OR?: imageProductUtamaWhereInput[]
    NOT?: imageProductUtamaWhereInput | imageProductUtamaWhereInput[]
    id?: IntFilter<"imageProductUtama"> | number
    start?: DateTimeFilter<"imageProductUtama"> | Date | string
    end?: DateTimeFilter<"imageProductUtama"> | Date | string
    asset_id?: StringNullableFilter<"imageProductUtama"> | string | null
    public_id?: StringNullableFilter<"imageProductUtama"> | string | null
    version?: IntNullableFilter<"imageProductUtama"> | number | null
    version_id?: StringNullableFilter<"imageProductUtama"> | string | null
    signature?: StringNullableFilter<"imageProductUtama"> | string | null
    width?: IntNullableFilter<"imageProductUtama"> | number | null
    height?: IntNullableFilter<"imageProductUtama"> | number | null
    format?: StringNullableFilter<"imageProductUtama"> | string | null
    resource_type?: StringNullableFilter<"imageProductUtama"> | string | null
    created_at?: DateTimeFilter<"imageProductUtama"> | Date | string
    pages?: IntNullableFilter<"imageProductUtama"> | number | null
    tags?: JsonNullableFilter<"imageProductUtama">
    bytes?: IntNullableFilter<"imageProductUtama"> | number | null
    type?: StringNullableFilter<"imageProductUtama"> | string | null
    etag?: StringNullableFilter<"imageProductUtama"> | string | null
    placeholder?: BoolNullableFilter<"imageProductUtama"> | boolean | null
    url?: StringNullableFilter<"imageProductUtama"> | string | null
    secure_url?: StringNullableFilter<"imageProductUtama"> | string | null
    asset_folder?: StringNullableFilter<"imageProductUtama"> | string | null
    display_name?: StringNullableFilter<"imageProductUtama"> | string | null
    original_filename?: StringNullableFilter<"imageProductUtama"> | string | null
    api_key?: StringNullableFilter<"imageProductUtama"> | string | null
    IdProduct?: IntFilter<"imageProductUtama"> | number
    user?: XOR<ListProductRelationFilter, listProductWhereInput>
  }

  export type imageProductUtamaOrderByWithRelationInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    asset_id?: SortOrderInput | SortOrder
    public_id?: SortOrderInput | SortOrder
    version?: SortOrderInput | SortOrder
    version_id?: SortOrderInput | SortOrder
    signature?: SortOrderInput | SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    format?: SortOrderInput | SortOrder
    resource_type?: SortOrderInput | SortOrder
    created_at?: SortOrder
    pages?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    bytes?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    etag?: SortOrderInput | SortOrder
    placeholder?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    secure_url?: SortOrderInput | SortOrder
    asset_folder?: SortOrderInput | SortOrder
    display_name?: SortOrderInput | SortOrder
    original_filename?: SortOrderInput | SortOrder
    api_key?: SortOrderInput | SortOrder
    IdProduct?: SortOrder
    user?: listProductOrderByWithRelationInput
  }

  export type imageProductUtamaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    asset_id?: string
    public_id?: string
    IdProduct?: number
    AND?: imageProductUtamaWhereInput | imageProductUtamaWhereInput[]
    OR?: imageProductUtamaWhereInput[]
    NOT?: imageProductUtamaWhereInput | imageProductUtamaWhereInput[]
    start?: DateTimeFilter<"imageProductUtama"> | Date | string
    end?: DateTimeFilter<"imageProductUtama"> | Date | string
    version?: IntNullableFilter<"imageProductUtama"> | number | null
    version_id?: StringNullableFilter<"imageProductUtama"> | string | null
    signature?: StringNullableFilter<"imageProductUtama"> | string | null
    width?: IntNullableFilter<"imageProductUtama"> | number | null
    height?: IntNullableFilter<"imageProductUtama"> | number | null
    format?: StringNullableFilter<"imageProductUtama"> | string | null
    resource_type?: StringNullableFilter<"imageProductUtama"> | string | null
    created_at?: DateTimeFilter<"imageProductUtama"> | Date | string
    pages?: IntNullableFilter<"imageProductUtama"> | number | null
    tags?: JsonNullableFilter<"imageProductUtama">
    bytes?: IntNullableFilter<"imageProductUtama"> | number | null
    type?: StringNullableFilter<"imageProductUtama"> | string | null
    etag?: StringNullableFilter<"imageProductUtama"> | string | null
    placeholder?: BoolNullableFilter<"imageProductUtama"> | boolean | null
    url?: StringNullableFilter<"imageProductUtama"> | string | null
    secure_url?: StringNullableFilter<"imageProductUtama"> | string | null
    asset_folder?: StringNullableFilter<"imageProductUtama"> | string | null
    display_name?: StringNullableFilter<"imageProductUtama"> | string | null
    original_filename?: StringNullableFilter<"imageProductUtama"> | string | null
    api_key?: StringNullableFilter<"imageProductUtama"> | string | null
    user?: XOR<ListProductRelationFilter, listProductWhereInput>
  }, "id" | "asset_id" | "public_id" | "IdProduct">

  export type imageProductUtamaOrderByWithAggregationInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    asset_id?: SortOrderInput | SortOrder
    public_id?: SortOrderInput | SortOrder
    version?: SortOrderInput | SortOrder
    version_id?: SortOrderInput | SortOrder
    signature?: SortOrderInput | SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    format?: SortOrderInput | SortOrder
    resource_type?: SortOrderInput | SortOrder
    created_at?: SortOrder
    pages?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    bytes?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    etag?: SortOrderInput | SortOrder
    placeholder?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    secure_url?: SortOrderInput | SortOrder
    asset_folder?: SortOrderInput | SortOrder
    display_name?: SortOrderInput | SortOrder
    original_filename?: SortOrderInput | SortOrder
    api_key?: SortOrderInput | SortOrder
    IdProduct?: SortOrder
    _count?: imageProductUtamaCountOrderByAggregateInput
    _avg?: imageProductUtamaAvgOrderByAggregateInput
    _max?: imageProductUtamaMaxOrderByAggregateInput
    _min?: imageProductUtamaMinOrderByAggregateInput
    _sum?: imageProductUtamaSumOrderByAggregateInput
  }

  export type imageProductUtamaScalarWhereWithAggregatesInput = {
    AND?: imageProductUtamaScalarWhereWithAggregatesInput | imageProductUtamaScalarWhereWithAggregatesInput[]
    OR?: imageProductUtamaScalarWhereWithAggregatesInput[]
    NOT?: imageProductUtamaScalarWhereWithAggregatesInput | imageProductUtamaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"imageProductUtama"> | number
    start?: DateTimeWithAggregatesFilter<"imageProductUtama"> | Date | string
    end?: DateTimeWithAggregatesFilter<"imageProductUtama"> | Date | string
    asset_id?: StringNullableWithAggregatesFilter<"imageProductUtama"> | string | null
    public_id?: StringNullableWithAggregatesFilter<"imageProductUtama"> | string | null
    version?: IntNullableWithAggregatesFilter<"imageProductUtama"> | number | null
    version_id?: StringNullableWithAggregatesFilter<"imageProductUtama"> | string | null
    signature?: StringNullableWithAggregatesFilter<"imageProductUtama"> | string | null
    width?: IntNullableWithAggregatesFilter<"imageProductUtama"> | number | null
    height?: IntNullableWithAggregatesFilter<"imageProductUtama"> | number | null
    format?: StringNullableWithAggregatesFilter<"imageProductUtama"> | string | null
    resource_type?: StringNullableWithAggregatesFilter<"imageProductUtama"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"imageProductUtama"> | Date | string
    pages?: IntNullableWithAggregatesFilter<"imageProductUtama"> | number | null
    tags?: JsonNullableWithAggregatesFilter<"imageProductUtama">
    bytes?: IntNullableWithAggregatesFilter<"imageProductUtama"> | number | null
    type?: StringNullableWithAggregatesFilter<"imageProductUtama"> | string | null
    etag?: StringNullableWithAggregatesFilter<"imageProductUtama"> | string | null
    placeholder?: BoolNullableWithAggregatesFilter<"imageProductUtama"> | boolean | null
    url?: StringNullableWithAggregatesFilter<"imageProductUtama"> | string | null
    secure_url?: StringNullableWithAggregatesFilter<"imageProductUtama"> | string | null
    asset_folder?: StringNullableWithAggregatesFilter<"imageProductUtama"> | string | null
    display_name?: StringNullableWithAggregatesFilter<"imageProductUtama"> | string | null
    original_filename?: StringNullableWithAggregatesFilter<"imageProductUtama"> | string | null
    api_key?: StringNullableWithAggregatesFilter<"imageProductUtama"> | string | null
    IdProduct?: IntWithAggregatesFilter<"imageProductUtama"> | number
  }

  export type imageProductWhereInput = {
    AND?: imageProductWhereInput | imageProductWhereInput[]
    OR?: imageProductWhereInput[]
    NOT?: imageProductWhereInput | imageProductWhereInput[]
    id?: IntFilter<"imageProduct"> | number
    start?: DateTimeFilter<"imageProduct"> | Date | string
    end?: DateTimeFilter<"imageProduct"> | Date | string
    asset_id?: StringNullableFilter<"imageProduct"> | string | null
    public_id?: StringNullableFilter<"imageProduct"> | string | null
    version?: IntNullableFilter<"imageProduct"> | number | null
    version_id?: StringNullableFilter<"imageProduct"> | string | null
    signature?: StringNullableFilter<"imageProduct"> | string | null
    width?: IntNullableFilter<"imageProduct"> | number | null
    height?: IntNullableFilter<"imageProduct"> | number | null
    format?: StringNullableFilter<"imageProduct"> | string | null
    resource_type?: StringNullableFilter<"imageProduct"> | string | null
    created_at?: DateTimeFilter<"imageProduct"> | Date | string
    pages?: IntNullableFilter<"imageProduct"> | number | null
    tags?: JsonNullableFilter<"imageProduct">
    bytes?: IntNullableFilter<"imageProduct"> | number | null
    type?: StringNullableFilter<"imageProduct"> | string | null
    etag?: StringNullableFilter<"imageProduct"> | string | null
    placeholder?: BoolNullableFilter<"imageProduct"> | boolean | null
    url?: StringNullableFilter<"imageProduct"> | string | null
    secure_url?: StringNullableFilter<"imageProduct"> | string | null
    asset_folder?: StringNullableFilter<"imageProduct"> | string | null
    display_name?: StringNullableFilter<"imageProduct"> | string | null
    original_filename?: StringNullableFilter<"imageProduct"> | string | null
    api_key?: StringNullableFilter<"imageProduct"> | string | null
    IdProduct?: IntFilter<"imageProduct"> | number
    user?: XOR<ListProductRelationFilter, listProductWhereInput>
  }

  export type imageProductOrderByWithRelationInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    asset_id?: SortOrderInput | SortOrder
    public_id?: SortOrderInput | SortOrder
    version?: SortOrderInput | SortOrder
    version_id?: SortOrderInput | SortOrder
    signature?: SortOrderInput | SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    format?: SortOrderInput | SortOrder
    resource_type?: SortOrderInput | SortOrder
    created_at?: SortOrder
    pages?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    bytes?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    etag?: SortOrderInput | SortOrder
    placeholder?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    secure_url?: SortOrderInput | SortOrder
    asset_folder?: SortOrderInput | SortOrder
    display_name?: SortOrderInput | SortOrder
    original_filename?: SortOrderInput | SortOrder
    api_key?: SortOrderInput | SortOrder
    IdProduct?: SortOrder
    user?: listProductOrderByWithRelationInput
  }

  export type imageProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    asset_id?: string
    public_id?: string
    AND?: imageProductWhereInput | imageProductWhereInput[]
    OR?: imageProductWhereInput[]
    NOT?: imageProductWhereInput | imageProductWhereInput[]
    start?: DateTimeFilter<"imageProduct"> | Date | string
    end?: DateTimeFilter<"imageProduct"> | Date | string
    version?: IntNullableFilter<"imageProduct"> | number | null
    version_id?: StringNullableFilter<"imageProduct"> | string | null
    signature?: StringNullableFilter<"imageProduct"> | string | null
    width?: IntNullableFilter<"imageProduct"> | number | null
    height?: IntNullableFilter<"imageProduct"> | number | null
    format?: StringNullableFilter<"imageProduct"> | string | null
    resource_type?: StringNullableFilter<"imageProduct"> | string | null
    created_at?: DateTimeFilter<"imageProduct"> | Date | string
    pages?: IntNullableFilter<"imageProduct"> | number | null
    tags?: JsonNullableFilter<"imageProduct">
    bytes?: IntNullableFilter<"imageProduct"> | number | null
    type?: StringNullableFilter<"imageProduct"> | string | null
    etag?: StringNullableFilter<"imageProduct"> | string | null
    placeholder?: BoolNullableFilter<"imageProduct"> | boolean | null
    url?: StringNullableFilter<"imageProduct"> | string | null
    secure_url?: StringNullableFilter<"imageProduct"> | string | null
    asset_folder?: StringNullableFilter<"imageProduct"> | string | null
    display_name?: StringNullableFilter<"imageProduct"> | string | null
    original_filename?: StringNullableFilter<"imageProduct"> | string | null
    api_key?: StringNullableFilter<"imageProduct"> | string | null
    IdProduct?: IntFilter<"imageProduct"> | number
    user?: XOR<ListProductRelationFilter, listProductWhereInput>
  }, "id" | "asset_id" | "public_id">

  export type imageProductOrderByWithAggregationInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    asset_id?: SortOrderInput | SortOrder
    public_id?: SortOrderInput | SortOrder
    version?: SortOrderInput | SortOrder
    version_id?: SortOrderInput | SortOrder
    signature?: SortOrderInput | SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    format?: SortOrderInput | SortOrder
    resource_type?: SortOrderInput | SortOrder
    created_at?: SortOrder
    pages?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    bytes?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    etag?: SortOrderInput | SortOrder
    placeholder?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    secure_url?: SortOrderInput | SortOrder
    asset_folder?: SortOrderInput | SortOrder
    display_name?: SortOrderInput | SortOrder
    original_filename?: SortOrderInput | SortOrder
    api_key?: SortOrderInput | SortOrder
    IdProduct?: SortOrder
    _count?: imageProductCountOrderByAggregateInput
    _avg?: imageProductAvgOrderByAggregateInput
    _max?: imageProductMaxOrderByAggregateInput
    _min?: imageProductMinOrderByAggregateInput
    _sum?: imageProductSumOrderByAggregateInput
  }

  export type imageProductScalarWhereWithAggregatesInput = {
    AND?: imageProductScalarWhereWithAggregatesInput | imageProductScalarWhereWithAggregatesInput[]
    OR?: imageProductScalarWhereWithAggregatesInput[]
    NOT?: imageProductScalarWhereWithAggregatesInput | imageProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"imageProduct"> | number
    start?: DateTimeWithAggregatesFilter<"imageProduct"> | Date | string
    end?: DateTimeWithAggregatesFilter<"imageProduct"> | Date | string
    asset_id?: StringNullableWithAggregatesFilter<"imageProduct"> | string | null
    public_id?: StringNullableWithAggregatesFilter<"imageProduct"> | string | null
    version?: IntNullableWithAggregatesFilter<"imageProduct"> | number | null
    version_id?: StringNullableWithAggregatesFilter<"imageProduct"> | string | null
    signature?: StringNullableWithAggregatesFilter<"imageProduct"> | string | null
    width?: IntNullableWithAggregatesFilter<"imageProduct"> | number | null
    height?: IntNullableWithAggregatesFilter<"imageProduct"> | number | null
    format?: StringNullableWithAggregatesFilter<"imageProduct"> | string | null
    resource_type?: StringNullableWithAggregatesFilter<"imageProduct"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"imageProduct"> | Date | string
    pages?: IntNullableWithAggregatesFilter<"imageProduct"> | number | null
    tags?: JsonNullableWithAggregatesFilter<"imageProduct">
    bytes?: IntNullableWithAggregatesFilter<"imageProduct"> | number | null
    type?: StringNullableWithAggregatesFilter<"imageProduct"> | string | null
    etag?: StringNullableWithAggregatesFilter<"imageProduct"> | string | null
    placeholder?: BoolNullableWithAggregatesFilter<"imageProduct"> | boolean | null
    url?: StringNullableWithAggregatesFilter<"imageProduct"> | string | null
    secure_url?: StringNullableWithAggregatesFilter<"imageProduct"> | string | null
    asset_folder?: StringNullableWithAggregatesFilter<"imageProduct"> | string | null
    display_name?: StringNullableWithAggregatesFilter<"imageProduct"> | string | null
    original_filename?: StringNullableWithAggregatesFilter<"imageProduct"> | string | null
    api_key?: StringNullableWithAggregatesFilter<"imageProduct"> | string | null
    IdProduct?: IntWithAggregatesFilter<"imageProduct"> | number
  }

  export type postArtikelWhereInput = {
    AND?: postArtikelWhereInput | postArtikelWhereInput[]
    OR?: postArtikelWhereInput[]
    NOT?: postArtikelWhereInput | postArtikelWhereInput[]
    id?: IntFilter<"postArtikel"> | number
    title?: StringFilter<"postArtikel"> | string
    slug?: StringFilter<"postArtikel"> | string
    content?: StringFilter<"postArtikel"> | string
    description?: StringNullableFilter<"postArtikel"> | string | null
    tags?: JsonNullableFilter<"postArtikel">
    createdAt?: DateTimeFilter<"postArtikel"> | Date | string
    updatedAt?: DateTimeFilter<"postArtikel"> | Date | string
    saveDraf?: BoolFilter<"postArtikel"> | boolean
    categoryArtikelId?: IntFilter<"postArtikel"> | number
    imageProductArtikel?: ImageProductArtikelListRelationFilter
    categoryArtikel?: XOR<CategoryArtikelRelationFilter, categoryArtikelWhereInput>
  }

  export type postArtikelOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    description?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    saveDraf?: SortOrder
    categoryArtikelId?: SortOrder
    imageProductArtikel?: imageProductArtikelOrderByRelationAggregateInput
    categoryArtikel?: categoryArtikelOrderByWithRelationInput
  }

  export type postArtikelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: postArtikelWhereInput | postArtikelWhereInput[]
    OR?: postArtikelWhereInput[]
    NOT?: postArtikelWhereInput | postArtikelWhereInput[]
    title?: StringFilter<"postArtikel"> | string
    content?: StringFilter<"postArtikel"> | string
    description?: StringNullableFilter<"postArtikel"> | string | null
    tags?: JsonNullableFilter<"postArtikel">
    createdAt?: DateTimeFilter<"postArtikel"> | Date | string
    updatedAt?: DateTimeFilter<"postArtikel"> | Date | string
    saveDraf?: BoolFilter<"postArtikel"> | boolean
    categoryArtikelId?: IntFilter<"postArtikel"> | number
    imageProductArtikel?: ImageProductArtikelListRelationFilter
    categoryArtikel?: XOR<CategoryArtikelRelationFilter, categoryArtikelWhereInput>
  }, "id" | "slug">

  export type postArtikelOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    description?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    saveDraf?: SortOrder
    categoryArtikelId?: SortOrder
    _count?: postArtikelCountOrderByAggregateInput
    _avg?: postArtikelAvgOrderByAggregateInput
    _max?: postArtikelMaxOrderByAggregateInput
    _min?: postArtikelMinOrderByAggregateInput
    _sum?: postArtikelSumOrderByAggregateInput
  }

  export type postArtikelScalarWhereWithAggregatesInput = {
    AND?: postArtikelScalarWhereWithAggregatesInput | postArtikelScalarWhereWithAggregatesInput[]
    OR?: postArtikelScalarWhereWithAggregatesInput[]
    NOT?: postArtikelScalarWhereWithAggregatesInput | postArtikelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"postArtikel"> | number
    title?: StringWithAggregatesFilter<"postArtikel"> | string
    slug?: StringWithAggregatesFilter<"postArtikel"> | string
    content?: StringWithAggregatesFilter<"postArtikel"> | string
    description?: StringNullableWithAggregatesFilter<"postArtikel"> | string | null
    tags?: JsonNullableWithAggregatesFilter<"postArtikel">
    createdAt?: DateTimeWithAggregatesFilter<"postArtikel"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"postArtikel"> | Date | string
    saveDraf?: BoolWithAggregatesFilter<"postArtikel"> | boolean
    categoryArtikelId?: IntWithAggregatesFilter<"postArtikel"> | number
  }

  export type imageProductArtikelWhereInput = {
    AND?: imageProductArtikelWhereInput | imageProductArtikelWhereInput[]
    OR?: imageProductArtikelWhereInput[]
    NOT?: imageProductArtikelWhereInput | imageProductArtikelWhereInput[]
    id?: IntFilter<"imageProductArtikel"> | number
    start?: DateTimeFilter<"imageProductArtikel"> | Date | string
    end?: DateTimeFilter<"imageProductArtikel"> | Date | string
    asset_id?: StringNullableFilter<"imageProductArtikel"> | string | null
    public_id?: StringNullableFilter<"imageProductArtikel"> | string | null
    version?: IntNullableFilter<"imageProductArtikel"> | number | null
    version_id?: StringNullableFilter<"imageProductArtikel"> | string | null
    signature?: StringNullableFilter<"imageProductArtikel"> | string | null
    width?: IntNullableFilter<"imageProductArtikel"> | number | null
    height?: IntNullableFilter<"imageProductArtikel"> | number | null
    format?: StringNullableFilter<"imageProductArtikel"> | string | null
    resource_type?: StringNullableFilter<"imageProductArtikel"> | string | null
    created_at?: DateTimeFilter<"imageProductArtikel"> | Date | string
    pages?: IntNullableFilter<"imageProductArtikel"> | number | null
    tags?: JsonNullableFilter<"imageProductArtikel">
    bytes?: IntNullableFilter<"imageProductArtikel"> | number | null
    type?: StringNullableFilter<"imageProductArtikel"> | string | null
    etag?: StringNullableFilter<"imageProductArtikel"> | string | null
    placeholder?: BoolNullableFilter<"imageProductArtikel"> | boolean | null
    url?: StringNullableFilter<"imageProductArtikel"> | string | null
    secure_url?: StringNullableFilter<"imageProductArtikel"> | string | null
    asset_folder?: StringNullableFilter<"imageProductArtikel"> | string | null
    display_name?: StringNullableFilter<"imageProductArtikel"> | string | null
    original_filename?: StringNullableFilter<"imageProductArtikel"> | string | null
    api_key?: StringNullableFilter<"imageProductArtikel"> | string | null
    IdProductArtikel?: IntFilter<"imageProductArtikel"> | number
    userd?: XOR<PostArtikelRelationFilter, postArtikelWhereInput>
  }

  export type imageProductArtikelOrderByWithRelationInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    asset_id?: SortOrderInput | SortOrder
    public_id?: SortOrderInput | SortOrder
    version?: SortOrderInput | SortOrder
    version_id?: SortOrderInput | SortOrder
    signature?: SortOrderInput | SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    format?: SortOrderInput | SortOrder
    resource_type?: SortOrderInput | SortOrder
    created_at?: SortOrder
    pages?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    bytes?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    etag?: SortOrderInput | SortOrder
    placeholder?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    secure_url?: SortOrderInput | SortOrder
    asset_folder?: SortOrderInput | SortOrder
    display_name?: SortOrderInput | SortOrder
    original_filename?: SortOrderInput | SortOrder
    api_key?: SortOrderInput | SortOrder
    IdProductArtikel?: SortOrder
    userd?: postArtikelOrderByWithRelationInput
  }

  export type imageProductArtikelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    asset_id?: string
    public_id?: string
    AND?: imageProductArtikelWhereInput | imageProductArtikelWhereInput[]
    OR?: imageProductArtikelWhereInput[]
    NOT?: imageProductArtikelWhereInput | imageProductArtikelWhereInput[]
    start?: DateTimeFilter<"imageProductArtikel"> | Date | string
    end?: DateTimeFilter<"imageProductArtikel"> | Date | string
    version?: IntNullableFilter<"imageProductArtikel"> | number | null
    version_id?: StringNullableFilter<"imageProductArtikel"> | string | null
    signature?: StringNullableFilter<"imageProductArtikel"> | string | null
    width?: IntNullableFilter<"imageProductArtikel"> | number | null
    height?: IntNullableFilter<"imageProductArtikel"> | number | null
    format?: StringNullableFilter<"imageProductArtikel"> | string | null
    resource_type?: StringNullableFilter<"imageProductArtikel"> | string | null
    created_at?: DateTimeFilter<"imageProductArtikel"> | Date | string
    pages?: IntNullableFilter<"imageProductArtikel"> | number | null
    tags?: JsonNullableFilter<"imageProductArtikel">
    bytes?: IntNullableFilter<"imageProductArtikel"> | number | null
    type?: StringNullableFilter<"imageProductArtikel"> | string | null
    etag?: StringNullableFilter<"imageProductArtikel"> | string | null
    placeholder?: BoolNullableFilter<"imageProductArtikel"> | boolean | null
    url?: StringNullableFilter<"imageProductArtikel"> | string | null
    secure_url?: StringNullableFilter<"imageProductArtikel"> | string | null
    asset_folder?: StringNullableFilter<"imageProductArtikel"> | string | null
    display_name?: StringNullableFilter<"imageProductArtikel"> | string | null
    original_filename?: StringNullableFilter<"imageProductArtikel"> | string | null
    api_key?: StringNullableFilter<"imageProductArtikel"> | string | null
    IdProductArtikel?: IntFilter<"imageProductArtikel"> | number
    userd?: XOR<PostArtikelRelationFilter, postArtikelWhereInput>
  }, "id" | "asset_id" | "public_id">

  export type imageProductArtikelOrderByWithAggregationInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    asset_id?: SortOrderInput | SortOrder
    public_id?: SortOrderInput | SortOrder
    version?: SortOrderInput | SortOrder
    version_id?: SortOrderInput | SortOrder
    signature?: SortOrderInput | SortOrder
    width?: SortOrderInput | SortOrder
    height?: SortOrderInput | SortOrder
    format?: SortOrderInput | SortOrder
    resource_type?: SortOrderInput | SortOrder
    created_at?: SortOrder
    pages?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    bytes?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    etag?: SortOrderInput | SortOrder
    placeholder?: SortOrderInput | SortOrder
    url?: SortOrderInput | SortOrder
    secure_url?: SortOrderInput | SortOrder
    asset_folder?: SortOrderInput | SortOrder
    display_name?: SortOrderInput | SortOrder
    original_filename?: SortOrderInput | SortOrder
    api_key?: SortOrderInput | SortOrder
    IdProductArtikel?: SortOrder
    _count?: imageProductArtikelCountOrderByAggregateInput
    _avg?: imageProductArtikelAvgOrderByAggregateInput
    _max?: imageProductArtikelMaxOrderByAggregateInput
    _min?: imageProductArtikelMinOrderByAggregateInput
    _sum?: imageProductArtikelSumOrderByAggregateInput
  }

  export type imageProductArtikelScalarWhereWithAggregatesInput = {
    AND?: imageProductArtikelScalarWhereWithAggregatesInput | imageProductArtikelScalarWhereWithAggregatesInput[]
    OR?: imageProductArtikelScalarWhereWithAggregatesInput[]
    NOT?: imageProductArtikelScalarWhereWithAggregatesInput | imageProductArtikelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"imageProductArtikel"> | number
    start?: DateTimeWithAggregatesFilter<"imageProductArtikel"> | Date | string
    end?: DateTimeWithAggregatesFilter<"imageProductArtikel"> | Date | string
    asset_id?: StringNullableWithAggregatesFilter<"imageProductArtikel"> | string | null
    public_id?: StringNullableWithAggregatesFilter<"imageProductArtikel"> | string | null
    version?: IntNullableWithAggregatesFilter<"imageProductArtikel"> | number | null
    version_id?: StringNullableWithAggregatesFilter<"imageProductArtikel"> | string | null
    signature?: StringNullableWithAggregatesFilter<"imageProductArtikel"> | string | null
    width?: IntNullableWithAggregatesFilter<"imageProductArtikel"> | number | null
    height?: IntNullableWithAggregatesFilter<"imageProductArtikel"> | number | null
    format?: StringNullableWithAggregatesFilter<"imageProductArtikel"> | string | null
    resource_type?: StringNullableWithAggregatesFilter<"imageProductArtikel"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"imageProductArtikel"> | Date | string
    pages?: IntNullableWithAggregatesFilter<"imageProductArtikel"> | number | null
    tags?: JsonNullableWithAggregatesFilter<"imageProductArtikel">
    bytes?: IntNullableWithAggregatesFilter<"imageProductArtikel"> | number | null
    type?: StringNullableWithAggregatesFilter<"imageProductArtikel"> | string | null
    etag?: StringNullableWithAggregatesFilter<"imageProductArtikel"> | string | null
    placeholder?: BoolNullableWithAggregatesFilter<"imageProductArtikel"> | boolean | null
    url?: StringNullableWithAggregatesFilter<"imageProductArtikel"> | string | null
    secure_url?: StringNullableWithAggregatesFilter<"imageProductArtikel"> | string | null
    asset_folder?: StringNullableWithAggregatesFilter<"imageProductArtikel"> | string | null
    display_name?: StringNullableWithAggregatesFilter<"imageProductArtikel"> | string | null
    original_filename?: StringNullableWithAggregatesFilter<"imageProductArtikel"> | string | null
    api_key?: StringNullableWithAggregatesFilter<"imageProductArtikel"> | string | null
    IdProductArtikel?: IntWithAggregatesFilter<"imageProductArtikel"> | number
  }

  export type categoryArtikelWhereInput = {
    AND?: categoryArtikelWhereInput | categoryArtikelWhereInput[]
    OR?: categoryArtikelWhereInput[]
    NOT?: categoryArtikelWhereInput | categoryArtikelWhereInput[]
    id?: IntFilter<"categoryArtikel"> | number
    start?: DateTimeFilter<"categoryArtikel"> | Date | string
    end?: DateTimeFilter<"categoryArtikel"> | Date | string
    category?: StringFilter<"categoryArtikel"> | string
    slugCategory?: StringFilter<"categoryArtikel"> | string
    image?: StringNullableFilter<"categoryArtikel"> | string | null
    icon?: StringNullableFilter<"categoryArtikel"> | string | null
    urlYoutube?: StringNullableFilter<"categoryArtikel"> | string | null
    title?: StringNullableFilter<"categoryArtikel"> | string | null
    desc?: StringNullableFilter<"categoryArtikel"> | string | null
    tags?: StringNullableFilter<"categoryArtikel"> | string | null
    postArtikel?: PostArtikelListRelationFilter
  }

  export type categoryArtikelOrderByWithRelationInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    category?: SortOrder
    slugCategory?: SortOrder
    image?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    urlYoutube?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    desc?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    postArtikel?: postArtikelOrderByRelationAggregateInput
  }

  export type categoryArtikelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    category?: string
    slugCategory?: string
    AND?: categoryArtikelWhereInput | categoryArtikelWhereInput[]
    OR?: categoryArtikelWhereInput[]
    NOT?: categoryArtikelWhereInput | categoryArtikelWhereInput[]
    start?: DateTimeFilter<"categoryArtikel"> | Date | string
    end?: DateTimeFilter<"categoryArtikel"> | Date | string
    image?: StringNullableFilter<"categoryArtikel"> | string | null
    icon?: StringNullableFilter<"categoryArtikel"> | string | null
    urlYoutube?: StringNullableFilter<"categoryArtikel"> | string | null
    title?: StringNullableFilter<"categoryArtikel"> | string | null
    desc?: StringNullableFilter<"categoryArtikel"> | string | null
    tags?: StringNullableFilter<"categoryArtikel"> | string | null
    postArtikel?: PostArtikelListRelationFilter
  }, "id" | "category" | "slugCategory">

  export type categoryArtikelOrderByWithAggregationInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    category?: SortOrder
    slugCategory?: SortOrder
    image?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    urlYoutube?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    desc?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    _count?: categoryArtikelCountOrderByAggregateInput
    _avg?: categoryArtikelAvgOrderByAggregateInput
    _max?: categoryArtikelMaxOrderByAggregateInput
    _min?: categoryArtikelMinOrderByAggregateInput
    _sum?: categoryArtikelSumOrderByAggregateInput
  }

  export type categoryArtikelScalarWhereWithAggregatesInput = {
    AND?: categoryArtikelScalarWhereWithAggregatesInput | categoryArtikelScalarWhereWithAggregatesInput[]
    OR?: categoryArtikelScalarWhereWithAggregatesInput[]
    NOT?: categoryArtikelScalarWhereWithAggregatesInput | categoryArtikelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"categoryArtikel"> | number
    start?: DateTimeWithAggregatesFilter<"categoryArtikel"> | Date | string
    end?: DateTimeWithAggregatesFilter<"categoryArtikel"> | Date | string
    category?: StringWithAggregatesFilter<"categoryArtikel"> | string
    slugCategory?: StringWithAggregatesFilter<"categoryArtikel"> | string
    image?: StringNullableWithAggregatesFilter<"categoryArtikel"> | string | null
    icon?: StringNullableWithAggregatesFilter<"categoryArtikel"> | string | null
    urlYoutube?: StringNullableWithAggregatesFilter<"categoryArtikel"> | string | null
    title?: StringNullableWithAggregatesFilter<"categoryArtikel"> | string | null
    desc?: StringNullableWithAggregatesFilter<"categoryArtikel"> | string | null
    tags?: StringNullableWithAggregatesFilter<"categoryArtikel"> | string | null
  }

  export type cartWhereInput = {
    AND?: cartWhereInput | cartWhereInput[]
    OR?: cartWhereInput[]
    NOT?: cartWhereInput | cartWhereInput[]
    IDCart?: StringFilter<"cart"> | string
    email?: StringFilter<"cart"> | string
    clerkUserId?: StringFilter<"cart"> | string
    name?: StringNullableFilter<"cart"> | string | null
    avatar?: StringNullableFilter<"cart"> | string | null
    id?: IntFilter<"cart"> | number
    start?: DateTimeFilter<"cart"> | Date | string
    end?: DateTimeNullableFilter<"cart"> | Date | string | null
    items?: CartItemListRelationFilter
    formData?: XOR<FormPembelianNullableRelationFilter, formPembelianWhereInput> | null
    dataPesanan?: DataPesananListRelationFilter
    ongkosKirim?: XOR<OngkosKirimNullableRelationFilter, ongkosKirimWhereInput> | null
  }

  export type cartOrderByWithRelationInput = {
    IDCart?: SortOrder
    email?: SortOrder
    clerkUserId?: SortOrder
    name?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    id?: SortOrder
    start?: SortOrder
    end?: SortOrderInput | SortOrder
    items?: cartItemOrderByRelationAggregateInput
    formData?: formPembelianOrderByWithRelationInput
    dataPesanan?: dataPesananOrderByRelationAggregateInput
    ongkosKirim?: ongkosKirimOrderByWithRelationInput
  }

  export type cartWhereUniqueInput = Prisma.AtLeast<{
    IDCart?: string
    email?: string
    clerkUserId?: string
    AND?: cartWhereInput | cartWhereInput[]
    OR?: cartWhereInput[]
    NOT?: cartWhereInput | cartWhereInput[]
    name?: StringNullableFilter<"cart"> | string | null
    avatar?: StringNullableFilter<"cart"> | string | null
    id?: IntFilter<"cart"> | number
    start?: DateTimeFilter<"cart"> | Date | string
    end?: DateTimeNullableFilter<"cart"> | Date | string | null
    items?: CartItemListRelationFilter
    formData?: XOR<FormPembelianNullableRelationFilter, formPembelianWhereInput> | null
    dataPesanan?: DataPesananListRelationFilter
    ongkosKirim?: XOR<OngkosKirimNullableRelationFilter, ongkosKirimWhereInput> | null
  }, "IDCart" | "email" | "clerkUserId">

  export type cartOrderByWithAggregationInput = {
    IDCart?: SortOrder
    email?: SortOrder
    clerkUserId?: SortOrder
    name?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    id?: SortOrder
    start?: SortOrder
    end?: SortOrderInput | SortOrder
    _count?: cartCountOrderByAggregateInput
    _avg?: cartAvgOrderByAggregateInput
    _max?: cartMaxOrderByAggregateInput
    _min?: cartMinOrderByAggregateInput
    _sum?: cartSumOrderByAggregateInput
  }

  export type cartScalarWhereWithAggregatesInput = {
    AND?: cartScalarWhereWithAggregatesInput | cartScalarWhereWithAggregatesInput[]
    OR?: cartScalarWhereWithAggregatesInput[]
    NOT?: cartScalarWhereWithAggregatesInput | cartScalarWhereWithAggregatesInput[]
    IDCart?: StringWithAggregatesFilter<"cart"> | string
    email?: StringWithAggregatesFilter<"cart"> | string
    clerkUserId?: StringWithAggregatesFilter<"cart"> | string
    name?: StringNullableWithAggregatesFilter<"cart"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"cart"> | string | null
    id?: IntWithAggregatesFilter<"cart"> | number
    start?: DateTimeWithAggregatesFilter<"cart"> | Date | string
    end?: DateTimeNullableWithAggregatesFilter<"cart"> | Date | string | null
  }

  export type cartItemWhereInput = {
    AND?: cartItemWhereInput | cartItemWhereInput[]
    OR?: cartItemWhereInput[]
    NOT?: cartItemWhereInput | cartItemWhereInput[]
    id?: IntFilter<"cartItem"> | number
    start?: DateTimeFilter<"cartItem"> | Date | string
    end?: DateTimeNullableFilter<"cartItem"> | Date | string | null
    cartId?: StringFilter<"cartItem"> | string
    productId?: IntFilter<"cartItem"> | number
    quantity?: IntFilter<"cartItem"> | number
    checkList?: BoolFilter<"cartItem"> | boolean
    note?: StringNullableFilter<"cartItem"> | string | null
    cart?: XOR<CartRelationFilter, cartWhereInput>
    product?: XOR<ListProductRelationFilter, listProductWhereInput>
  }

  export type cartItemOrderByWithRelationInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrderInput | SortOrder
    cartId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    checkList?: SortOrder
    note?: SortOrderInput | SortOrder
    cart?: cartOrderByWithRelationInput
    product?: listProductOrderByWithRelationInput
  }

  export type cartItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: cartItemWhereInput | cartItemWhereInput[]
    OR?: cartItemWhereInput[]
    NOT?: cartItemWhereInput | cartItemWhereInput[]
    start?: DateTimeFilter<"cartItem"> | Date | string
    end?: DateTimeNullableFilter<"cartItem"> | Date | string | null
    cartId?: StringFilter<"cartItem"> | string
    productId?: IntFilter<"cartItem"> | number
    quantity?: IntFilter<"cartItem"> | number
    checkList?: BoolFilter<"cartItem"> | boolean
    note?: StringNullableFilter<"cartItem"> | string | null
    cart?: XOR<CartRelationFilter, cartWhereInput>
    product?: XOR<ListProductRelationFilter, listProductWhereInput>
  }, "id">

  export type cartItemOrderByWithAggregationInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrderInput | SortOrder
    cartId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    checkList?: SortOrder
    note?: SortOrderInput | SortOrder
    _count?: cartItemCountOrderByAggregateInput
    _avg?: cartItemAvgOrderByAggregateInput
    _max?: cartItemMaxOrderByAggregateInput
    _min?: cartItemMinOrderByAggregateInput
    _sum?: cartItemSumOrderByAggregateInput
  }

  export type cartItemScalarWhereWithAggregatesInput = {
    AND?: cartItemScalarWhereWithAggregatesInput | cartItemScalarWhereWithAggregatesInput[]
    OR?: cartItemScalarWhereWithAggregatesInput[]
    NOT?: cartItemScalarWhereWithAggregatesInput | cartItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cartItem"> | number
    start?: DateTimeWithAggregatesFilter<"cartItem"> | Date | string
    end?: DateTimeNullableWithAggregatesFilter<"cartItem"> | Date | string | null
    cartId?: StringWithAggregatesFilter<"cartItem"> | string
    productId?: IntWithAggregatesFilter<"cartItem"> | number
    quantity?: IntWithAggregatesFilter<"cartItem"> | number
    checkList?: BoolWithAggregatesFilter<"cartItem"> | boolean
    note?: StringNullableWithAggregatesFilter<"cartItem"> | string | null
  }

  export type formPembelianWhereInput = {
    AND?: formPembelianWhereInput | formPembelianWhereInput[]
    OR?: formPembelianWhereInput[]
    NOT?: formPembelianWhereInput | formPembelianWhereInput[]
    id?: IntFilter<"formPembelian"> | number
    start?: DateTimeFilter<"formPembelian"> | Date | string
    end?: DateTimeNullableFilter<"formPembelian"> | Date | string | null
    nama_lengkap_user?: StringNullableFilter<"formPembelian"> | string | null
    alamat_lengkap_user?: StringNullableFilter<"formPembelian"> | string | null
    kode_pos_user?: IntNullableFilter<"formPembelian"> | number | null
    no_hp_user?: BigIntNullableFilter<"formPembelian"> | bigint | number | null
    catatan_pengiriman?: StringNullableFilter<"formPembelian"> | string | null
    cartID?: StringFilter<"formPembelian"> | string
    user?: XOR<CartRelationFilter, cartWhereInput>
  }

  export type formPembelianOrderByWithRelationInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrderInput | SortOrder
    nama_lengkap_user?: SortOrderInput | SortOrder
    alamat_lengkap_user?: SortOrderInput | SortOrder
    kode_pos_user?: SortOrderInput | SortOrder
    no_hp_user?: SortOrderInput | SortOrder
    catatan_pengiriman?: SortOrderInput | SortOrder
    cartID?: SortOrder
    user?: cartOrderByWithRelationInput
  }

  export type formPembelianWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cartID?: string
    AND?: formPembelianWhereInput | formPembelianWhereInput[]
    OR?: formPembelianWhereInput[]
    NOT?: formPembelianWhereInput | formPembelianWhereInput[]
    start?: DateTimeFilter<"formPembelian"> | Date | string
    end?: DateTimeNullableFilter<"formPembelian"> | Date | string | null
    nama_lengkap_user?: StringNullableFilter<"formPembelian"> | string | null
    alamat_lengkap_user?: StringNullableFilter<"formPembelian"> | string | null
    kode_pos_user?: IntNullableFilter<"formPembelian"> | number | null
    no_hp_user?: BigIntNullableFilter<"formPembelian"> | bigint | number | null
    catatan_pengiriman?: StringNullableFilter<"formPembelian"> | string | null
    user?: XOR<CartRelationFilter, cartWhereInput>
  }, "id" | "cartID">

  export type formPembelianOrderByWithAggregationInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrderInput | SortOrder
    nama_lengkap_user?: SortOrderInput | SortOrder
    alamat_lengkap_user?: SortOrderInput | SortOrder
    kode_pos_user?: SortOrderInput | SortOrder
    no_hp_user?: SortOrderInput | SortOrder
    catatan_pengiriman?: SortOrderInput | SortOrder
    cartID?: SortOrder
    _count?: formPembelianCountOrderByAggregateInput
    _avg?: formPembelianAvgOrderByAggregateInput
    _max?: formPembelianMaxOrderByAggregateInput
    _min?: formPembelianMinOrderByAggregateInput
    _sum?: formPembelianSumOrderByAggregateInput
  }

  export type formPembelianScalarWhereWithAggregatesInput = {
    AND?: formPembelianScalarWhereWithAggregatesInput | formPembelianScalarWhereWithAggregatesInput[]
    OR?: formPembelianScalarWhereWithAggregatesInput[]
    NOT?: formPembelianScalarWhereWithAggregatesInput | formPembelianScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"formPembelian"> | number
    start?: DateTimeWithAggregatesFilter<"formPembelian"> | Date | string
    end?: DateTimeNullableWithAggregatesFilter<"formPembelian"> | Date | string | null
    nama_lengkap_user?: StringNullableWithAggregatesFilter<"formPembelian"> | string | null
    alamat_lengkap_user?: StringNullableWithAggregatesFilter<"formPembelian"> | string | null
    kode_pos_user?: IntNullableWithAggregatesFilter<"formPembelian"> | number | null
    no_hp_user?: BigIntNullableWithAggregatesFilter<"formPembelian"> | bigint | number | null
    catatan_pengiriman?: StringNullableWithAggregatesFilter<"formPembelian"> | string | null
    cartID?: StringWithAggregatesFilter<"formPembelian"> | string
  }

  export type ongkosKirimWhereInput = {
    AND?: ongkosKirimWhereInput | ongkosKirimWhereInput[]
    OR?: ongkosKirimWhereInput[]
    NOT?: ongkosKirimWhereInput | ongkosKirimWhereInput[]
    id?: IntFilter<"ongkosKirim"> | number
    start?: DateTimeFilter<"ongkosKirim"> | Date | string
    end?: DateTimeNullableFilter<"ongkosKirim"> | Date | string | null
    productName?: StringNullableFilter<"ongkosKirim"> | string | null
    price?: BigIntNullableFilter<"ongkosKirim"> | bigint | number | null
    quantity?: IntNullableFilter<"ongkosKirim"> | number | null
    cartID?: StringFilter<"ongkosKirim"> | string
    user?: XOR<CartRelationFilter, cartWhereInput>
  }

  export type ongkosKirimOrderByWithRelationInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrderInput | SortOrder
    productName?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    cartID?: SortOrder
    user?: cartOrderByWithRelationInput
  }

  export type ongkosKirimWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cartID?: string
    AND?: ongkosKirimWhereInput | ongkosKirimWhereInput[]
    OR?: ongkosKirimWhereInput[]
    NOT?: ongkosKirimWhereInput | ongkosKirimWhereInput[]
    start?: DateTimeFilter<"ongkosKirim"> | Date | string
    end?: DateTimeNullableFilter<"ongkosKirim"> | Date | string | null
    productName?: StringNullableFilter<"ongkosKirim"> | string | null
    price?: BigIntNullableFilter<"ongkosKirim"> | bigint | number | null
    quantity?: IntNullableFilter<"ongkosKirim"> | number | null
    user?: XOR<CartRelationFilter, cartWhereInput>
  }, "id" | "cartID">

  export type ongkosKirimOrderByWithAggregationInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrderInput | SortOrder
    productName?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    cartID?: SortOrder
    _count?: ongkosKirimCountOrderByAggregateInput
    _avg?: ongkosKirimAvgOrderByAggregateInput
    _max?: ongkosKirimMaxOrderByAggregateInput
    _min?: ongkosKirimMinOrderByAggregateInput
    _sum?: ongkosKirimSumOrderByAggregateInput
  }

  export type ongkosKirimScalarWhereWithAggregatesInput = {
    AND?: ongkosKirimScalarWhereWithAggregatesInput | ongkosKirimScalarWhereWithAggregatesInput[]
    OR?: ongkosKirimScalarWhereWithAggregatesInput[]
    NOT?: ongkosKirimScalarWhereWithAggregatesInput | ongkosKirimScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ongkosKirim"> | number
    start?: DateTimeWithAggregatesFilter<"ongkosKirim"> | Date | string
    end?: DateTimeNullableWithAggregatesFilter<"ongkosKirim"> | Date | string | null
    productName?: StringNullableWithAggregatesFilter<"ongkosKirim"> | string | null
    price?: BigIntNullableWithAggregatesFilter<"ongkosKirim"> | bigint | number | null
    quantity?: IntNullableWithAggregatesFilter<"ongkosKirim"> | number | null
    cartID?: StringWithAggregatesFilter<"ongkosKirim"> | string
  }

  export type dataPesananItemWhereInput = {
    AND?: dataPesananItemWhereInput | dataPesananItemWhereInput[]
    OR?: dataPesananItemWhereInput[]
    NOT?: dataPesananItemWhereInput | dataPesananItemWhereInput[]
    id?: IntFilter<"dataPesananItem"> | number
    start?: DateTimeFilter<"dataPesananItem"> | Date | string
    end?: DateTimeNullableFilter<"dataPesananItem"> | Date | string | null
    note?: StringNullableFilter<"dataPesananItem"> | string | null
    productName?: StringNullableFilter<"dataPesananItem"> | string | null
    price?: BigIntNullableFilter<"dataPesananItem"> | bigint | number | null
    priceOriginal?: BigIntNullableFilter<"dataPesananItem"> | bigint | number | null
    quantity?: IntNullableFilter<"dataPesananItem"> | number | null
    methodPayment?: StringNullableFilter<"dataPesananItem"> | string | null
    image?: StringNullableFilter<"dataPesananItem"> | string | null
    slugProduct?: StringNullableFilter<"dataPesananItem"> | string | null
    merchantOrderId?: StringNullableFilter<"dataPesananItem"> | string | null
    status?: StringNullableFilter<"dataPesananItem"> | string | null
    noResi?: StringNullableFilter<"dataPesananItem"> | string | null
    dataPesananId?: IntNullableFilter<"dataPesananItem"> | number | null
    dataPesanan?: XOR<DataPesananNullableRelationFilter, dataPesananWhereInput> | null
  }

  export type dataPesananItemOrderByWithRelationInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    productName?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    priceOriginal?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    methodPayment?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    slugProduct?: SortOrderInput | SortOrder
    merchantOrderId?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    noResi?: SortOrderInput | SortOrder
    dataPesananId?: SortOrderInput | SortOrder
    dataPesanan?: dataPesananOrderByWithRelationInput
  }

  export type dataPesananItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: dataPesananItemWhereInput | dataPesananItemWhereInput[]
    OR?: dataPesananItemWhereInput[]
    NOT?: dataPesananItemWhereInput | dataPesananItemWhereInput[]
    start?: DateTimeFilter<"dataPesananItem"> | Date | string
    end?: DateTimeNullableFilter<"dataPesananItem"> | Date | string | null
    note?: StringNullableFilter<"dataPesananItem"> | string | null
    productName?: StringNullableFilter<"dataPesananItem"> | string | null
    price?: BigIntNullableFilter<"dataPesananItem"> | bigint | number | null
    priceOriginal?: BigIntNullableFilter<"dataPesananItem"> | bigint | number | null
    quantity?: IntNullableFilter<"dataPesananItem"> | number | null
    methodPayment?: StringNullableFilter<"dataPesananItem"> | string | null
    image?: StringNullableFilter<"dataPesananItem"> | string | null
    slugProduct?: StringNullableFilter<"dataPesananItem"> | string | null
    merchantOrderId?: StringNullableFilter<"dataPesananItem"> | string | null
    status?: StringNullableFilter<"dataPesananItem"> | string | null
    noResi?: StringNullableFilter<"dataPesananItem"> | string | null
    dataPesananId?: IntNullableFilter<"dataPesananItem"> | number | null
    dataPesanan?: XOR<DataPesananNullableRelationFilter, dataPesananWhereInput> | null
  }, "id">

  export type dataPesananItemOrderByWithAggregationInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    productName?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    priceOriginal?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    methodPayment?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    slugProduct?: SortOrderInput | SortOrder
    merchantOrderId?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    noResi?: SortOrderInput | SortOrder
    dataPesananId?: SortOrderInput | SortOrder
    _count?: dataPesananItemCountOrderByAggregateInput
    _avg?: dataPesananItemAvgOrderByAggregateInput
    _max?: dataPesananItemMaxOrderByAggregateInput
    _min?: dataPesananItemMinOrderByAggregateInput
    _sum?: dataPesananItemSumOrderByAggregateInput
  }

  export type dataPesananItemScalarWhereWithAggregatesInput = {
    AND?: dataPesananItemScalarWhereWithAggregatesInput | dataPesananItemScalarWhereWithAggregatesInput[]
    OR?: dataPesananItemScalarWhereWithAggregatesInput[]
    NOT?: dataPesananItemScalarWhereWithAggregatesInput | dataPesananItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"dataPesananItem"> | number
    start?: DateTimeWithAggregatesFilter<"dataPesananItem"> | Date | string
    end?: DateTimeNullableWithAggregatesFilter<"dataPesananItem"> | Date | string | null
    note?: StringNullableWithAggregatesFilter<"dataPesananItem"> | string | null
    productName?: StringNullableWithAggregatesFilter<"dataPesananItem"> | string | null
    price?: BigIntNullableWithAggregatesFilter<"dataPesananItem"> | bigint | number | null
    priceOriginal?: BigIntNullableWithAggregatesFilter<"dataPesananItem"> | bigint | number | null
    quantity?: IntNullableWithAggregatesFilter<"dataPesananItem"> | number | null
    methodPayment?: StringNullableWithAggregatesFilter<"dataPesananItem"> | string | null
    image?: StringNullableWithAggregatesFilter<"dataPesananItem"> | string | null
    slugProduct?: StringNullableWithAggregatesFilter<"dataPesananItem"> | string | null
    merchantOrderId?: StringNullableWithAggregatesFilter<"dataPesananItem"> | string | null
    status?: StringNullableWithAggregatesFilter<"dataPesananItem"> | string | null
    noResi?: StringNullableWithAggregatesFilter<"dataPesananItem"> | string | null
    dataPesananId?: IntNullableWithAggregatesFilter<"dataPesananItem"> | number | null
  }

  export type dataPesananWhereInput = {
    AND?: dataPesananWhereInput | dataPesananWhereInput[]
    OR?: dataPesananWhereInput[]
    NOT?: dataPesananWhereInput | dataPesananWhereInput[]
    id?: IntFilter<"dataPesanan"> | number
    start?: DateTimeFilter<"dataPesanan"> | Date | string
    end?: DateTimeNullableFilter<"dataPesanan"> | Date | string | null
    payment?: BoolFilter<"dataPesanan"> | boolean
    reference?: StringNullableFilter<"dataPesanan"> | string | null
    merchantOrderId?: StringNullableFilter<"dataPesanan"> | string | null
    cartID?: StringFilter<"dataPesanan"> | string
    dataPesananItems?: DataPesananItemListRelationFilter
    cart?: XOR<CartRelationFilter, cartWhereInput>
  }

  export type dataPesananOrderByWithRelationInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrderInput | SortOrder
    payment?: SortOrder
    reference?: SortOrderInput | SortOrder
    merchantOrderId?: SortOrderInput | SortOrder
    cartID?: SortOrder
    dataPesananItems?: dataPesananItemOrderByRelationAggregateInput
    cart?: cartOrderByWithRelationInput
  }

  export type dataPesananWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    reference?: string
    merchantOrderId?: string
    AND?: dataPesananWhereInput | dataPesananWhereInput[]
    OR?: dataPesananWhereInput[]
    NOT?: dataPesananWhereInput | dataPesananWhereInput[]
    start?: DateTimeFilter<"dataPesanan"> | Date | string
    end?: DateTimeNullableFilter<"dataPesanan"> | Date | string | null
    payment?: BoolFilter<"dataPesanan"> | boolean
    cartID?: StringFilter<"dataPesanan"> | string
    dataPesananItems?: DataPesananItemListRelationFilter
    cart?: XOR<CartRelationFilter, cartWhereInput>
  }, "id" | "reference" | "merchantOrderId">

  export type dataPesananOrderByWithAggregationInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrderInput | SortOrder
    payment?: SortOrder
    reference?: SortOrderInput | SortOrder
    merchantOrderId?: SortOrderInput | SortOrder
    cartID?: SortOrder
    _count?: dataPesananCountOrderByAggregateInput
    _avg?: dataPesananAvgOrderByAggregateInput
    _max?: dataPesananMaxOrderByAggregateInput
    _min?: dataPesananMinOrderByAggregateInput
    _sum?: dataPesananSumOrderByAggregateInput
  }

  export type dataPesananScalarWhereWithAggregatesInput = {
    AND?: dataPesananScalarWhereWithAggregatesInput | dataPesananScalarWhereWithAggregatesInput[]
    OR?: dataPesananScalarWhereWithAggregatesInput[]
    NOT?: dataPesananScalarWhereWithAggregatesInput | dataPesananScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"dataPesanan"> | number
    start?: DateTimeWithAggregatesFilter<"dataPesanan"> | Date | string
    end?: DateTimeNullableWithAggregatesFilter<"dataPesanan"> | Date | string | null
    payment?: BoolWithAggregatesFilter<"dataPesanan"> | boolean
    reference?: StringNullableWithAggregatesFilter<"dataPesanan"> | string | null
    merchantOrderId?: StringNullableWithAggregatesFilter<"dataPesanan"> | string | null
    cartID?: StringWithAggregatesFilter<"dataPesanan"> | string
  }

  export type categoryProductCreateInput = {
    start?: Date | string
    end?: Date | string
    category: string
    slugCategory: string
    image?: string | null
    icon?: string | null
    urlYoutube?: string | null
    title?: string | null
    desc?: string | null
    tags?: string | null
    listProducts?: listProductCreateNestedManyWithoutUserInput
  }

  export type categoryProductUncheckedCreateInput = {
    id?: number
    start?: Date | string
    end?: Date | string
    category: string
    slugCategory: string
    image?: string | null
    icon?: string | null
    urlYoutube?: string | null
    title?: string | null
    desc?: string | null
    tags?: string | null
    listProducts?: listProductUncheckedCreateNestedManyWithoutUserInput
  }

  export type categoryProductUpdateInput = {
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    slugCategory?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    urlYoutube?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    listProducts?: listProductUpdateManyWithoutUserNestedInput
  }

  export type categoryProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    slugCategory?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    urlYoutube?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    listProducts?: listProductUncheckedUpdateManyWithoutUserNestedInput
  }

  export type categoryProductCreateManyInput = {
    id?: number
    start?: Date | string
    end?: Date | string
    category: string
    slugCategory: string
    image?: string | null
    icon?: string | null
    urlYoutube?: string | null
    title?: string | null
    desc?: string | null
    tags?: string | null
  }

  export type categoryProductUpdateManyMutationInput = {
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    slugCategory?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    urlYoutube?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoryProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    slugCategory?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    urlYoutube?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type listProductCreateInput = {
    start?: Date | string
    end?: Date | string
    slugProduct: string
    saveDraf?: boolean
    descProduct?: string | null
    productName?: string | null
    stockProduct?: number | null
    descMetaProduct?: string | null
    viewProduct?: number | null
    subKategoriProduct?: string | null
    productType?: string | null
    tagProduct?: NullableJsonNullValueInput | InputJsonValue
    productPrice?: bigint | number | null
    productDiscount?: number | null
    productPriceFinal?: bigint | number | null
    urlYoutube?: string | null
    user: categoryProductCreateNestedOneWithoutListProductsInput
    url_image_product?: imageProductCreateNestedManyWithoutUserInput
    spec_product?: specProductCreateNestedOneWithoutUserInput
    cartItem?: cartItemCreateNestedManyWithoutProductInput
    imageProductUtama?: imageProductUtamaCreateNestedOneWithoutUserInput
  }

  export type listProductUncheckedCreateInput = {
    id?: number
    start?: Date | string
    end?: Date | string
    slugProduct: string
    saveDraf?: boolean
    descProduct?: string | null
    productName?: string | null
    stockProduct?: number | null
    descMetaProduct?: string | null
    viewProduct?: number | null
    subKategoriProduct?: string | null
    productType?: string | null
    tagProduct?: NullableJsonNullValueInput | InputJsonValue
    productPrice?: bigint | number | null
    productDiscount?: number | null
    productPriceFinal?: bigint | number | null
    urlYoutube?: string | null
    productKategori: number
    url_image_product?: imageProductUncheckedCreateNestedManyWithoutUserInput
    spec_product?: specProductUncheckedCreateNestedOneWithoutUserInput
    cartItem?: cartItemUncheckedCreateNestedManyWithoutProductInput
    imageProductUtama?: imageProductUtamaUncheckedCreateNestedOneWithoutUserInput
  }

  export type listProductUpdateInput = {
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    slugProduct?: StringFieldUpdateOperationsInput | string
    saveDraf?: BoolFieldUpdateOperationsInput | boolean
    descProduct?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    stockProduct?: NullableIntFieldUpdateOperationsInput | number | null
    descMetaProduct?: NullableStringFieldUpdateOperationsInput | string | null
    viewProduct?: NullableIntFieldUpdateOperationsInput | number | null
    subKategoriProduct?: NullableStringFieldUpdateOperationsInput | string | null
    productType?: NullableStringFieldUpdateOperationsInput | string | null
    tagProduct?: NullableJsonNullValueInput | InputJsonValue
    productPrice?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    productDiscount?: NullableIntFieldUpdateOperationsInput | number | null
    productPriceFinal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    urlYoutube?: NullableStringFieldUpdateOperationsInput | string | null
    user?: categoryProductUpdateOneRequiredWithoutListProductsNestedInput
    url_image_product?: imageProductUpdateManyWithoutUserNestedInput
    spec_product?: specProductUpdateOneWithoutUserNestedInput
    cartItem?: cartItemUpdateManyWithoutProductNestedInput
    imageProductUtama?: imageProductUtamaUpdateOneWithoutUserNestedInput
  }

  export type listProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    slugProduct?: StringFieldUpdateOperationsInput | string
    saveDraf?: BoolFieldUpdateOperationsInput | boolean
    descProduct?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    stockProduct?: NullableIntFieldUpdateOperationsInput | number | null
    descMetaProduct?: NullableStringFieldUpdateOperationsInput | string | null
    viewProduct?: NullableIntFieldUpdateOperationsInput | number | null
    subKategoriProduct?: NullableStringFieldUpdateOperationsInput | string | null
    productType?: NullableStringFieldUpdateOperationsInput | string | null
    tagProduct?: NullableJsonNullValueInput | InputJsonValue
    productPrice?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    productDiscount?: NullableIntFieldUpdateOperationsInput | number | null
    productPriceFinal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    urlYoutube?: NullableStringFieldUpdateOperationsInput | string | null
    productKategori?: IntFieldUpdateOperationsInput | number
    url_image_product?: imageProductUncheckedUpdateManyWithoutUserNestedInput
    spec_product?: specProductUncheckedUpdateOneWithoutUserNestedInput
    cartItem?: cartItemUncheckedUpdateManyWithoutProductNestedInput
    imageProductUtama?: imageProductUtamaUncheckedUpdateOneWithoutUserNestedInput
  }

  export type listProductCreateManyInput = {
    id?: number
    start?: Date | string
    end?: Date | string
    slugProduct: string
    saveDraf?: boolean
    descProduct?: string | null
    productName?: string | null
    stockProduct?: number | null
    descMetaProduct?: string | null
    viewProduct?: number | null
    subKategoriProduct?: string | null
    productType?: string | null
    tagProduct?: NullableJsonNullValueInput | InputJsonValue
    productPrice?: bigint | number | null
    productDiscount?: number | null
    productPriceFinal?: bigint | number | null
    urlYoutube?: string | null
    productKategori: number
  }

  export type listProductUpdateManyMutationInput = {
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    slugProduct?: StringFieldUpdateOperationsInput | string
    saveDraf?: BoolFieldUpdateOperationsInput | boolean
    descProduct?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    stockProduct?: NullableIntFieldUpdateOperationsInput | number | null
    descMetaProduct?: NullableStringFieldUpdateOperationsInput | string | null
    viewProduct?: NullableIntFieldUpdateOperationsInput | number | null
    subKategoriProduct?: NullableStringFieldUpdateOperationsInput | string | null
    productType?: NullableStringFieldUpdateOperationsInput | string | null
    tagProduct?: NullableJsonNullValueInput | InputJsonValue
    productPrice?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    productDiscount?: NullableIntFieldUpdateOperationsInput | number | null
    productPriceFinal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    urlYoutube?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type listProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    slugProduct?: StringFieldUpdateOperationsInput | string
    saveDraf?: BoolFieldUpdateOperationsInput | boolean
    descProduct?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    stockProduct?: NullableIntFieldUpdateOperationsInput | number | null
    descMetaProduct?: NullableStringFieldUpdateOperationsInput | string | null
    viewProduct?: NullableIntFieldUpdateOperationsInput | number | null
    subKategoriProduct?: NullableStringFieldUpdateOperationsInput | string | null
    productType?: NullableStringFieldUpdateOperationsInput | string | null
    tagProduct?: NullableJsonNullValueInput | InputJsonValue
    productPrice?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    productDiscount?: NullableIntFieldUpdateOperationsInput | number | null
    productPriceFinal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    urlYoutube?: NullableStringFieldUpdateOperationsInput | string | null
    productKategori?: IntFieldUpdateOperationsInput | number
  }

  export type specProductCreateInput = {
    id?: number
    start?: Date | string
    end?: Date | string
    phase_spec?: string | null
    frequency_spec?: string | null
    gensetPower_spec?: string | null
    ratedPower_spec?: string | null
    maxPower_spec?: string | null
    ratedACVoltage_spec?: string | null
    starting_spec?: string | null
    fuelConsumption_spec?: string | null
    weight_spec?: number | null
    dimension_spec?: string | null
    user: listProductCreateNestedOneWithoutSpec_productInput
  }

  export type specProductUncheckedCreateInput = {
    id?: number
    start?: Date | string
    end?: Date | string
    phase_spec?: string | null
    frequency_spec?: string | null
    gensetPower_spec?: string | null
    ratedPower_spec?: string | null
    maxPower_spec?: string | null
    ratedACVoltage_spec?: string | null
    starting_spec?: string | null
    fuelConsumption_spec?: string | null
    weight_spec?: number | null
    dimension_spec?: string | null
    IdProduct: number
  }

  export type specProductUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    phase_spec?: NullableStringFieldUpdateOperationsInput | string | null
    frequency_spec?: NullableStringFieldUpdateOperationsInput | string | null
    gensetPower_spec?: NullableStringFieldUpdateOperationsInput | string | null
    ratedPower_spec?: NullableStringFieldUpdateOperationsInput | string | null
    maxPower_spec?: NullableStringFieldUpdateOperationsInput | string | null
    ratedACVoltage_spec?: NullableStringFieldUpdateOperationsInput | string | null
    starting_spec?: NullableStringFieldUpdateOperationsInput | string | null
    fuelConsumption_spec?: NullableStringFieldUpdateOperationsInput | string | null
    weight_spec?: NullableIntFieldUpdateOperationsInput | number | null
    dimension_spec?: NullableStringFieldUpdateOperationsInput | string | null
    user?: listProductUpdateOneRequiredWithoutSpec_productNestedInput
  }

  export type specProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    phase_spec?: NullableStringFieldUpdateOperationsInput | string | null
    frequency_spec?: NullableStringFieldUpdateOperationsInput | string | null
    gensetPower_spec?: NullableStringFieldUpdateOperationsInput | string | null
    ratedPower_spec?: NullableStringFieldUpdateOperationsInput | string | null
    maxPower_spec?: NullableStringFieldUpdateOperationsInput | string | null
    ratedACVoltage_spec?: NullableStringFieldUpdateOperationsInput | string | null
    starting_spec?: NullableStringFieldUpdateOperationsInput | string | null
    fuelConsumption_spec?: NullableStringFieldUpdateOperationsInput | string | null
    weight_spec?: NullableIntFieldUpdateOperationsInput | number | null
    dimension_spec?: NullableStringFieldUpdateOperationsInput | string | null
    IdProduct?: IntFieldUpdateOperationsInput | number
  }

  export type specProductCreateManyInput = {
    id?: number
    start?: Date | string
    end?: Date | string
    phase_spec?: string | null
    frequency_spec?: string | null
    gensetPower_spec?: string | null
    ratedPower_spec?: string | null
    maxPower_spec?: string | null
    ratedACVoltage_spec?: string | null
    starting_spec?: string | null
    fuelConsumption_spec?: string | null
    weight_spec?: number | null
    dimension_spec?: string | null
    IdProduct: number
  }

  export type specProductUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    phase_spec?: NullableStringFieldUpdateOperationsInput | string | null
    frequency_spec?: NullableStringFieldUpdateOperationsInput | string | null
    gensetPower_spec?: NullableStringFieldUpdateOperationsInput | string | null
    ratedPower_spec?: NullableStringFieldUpdateOperationsInput | string | null
    maxPower_spec?: NullableStringFieldUpdateOperationsInput | string | null
    ratedACVoltage_spec?: NullableStringFieldUpdateOperationsInput | string | null
    starting_spec?: NullableStringFieldUpdateOperationsInput | string | null
    fuelConsumption_spec?: NullableStringFieldUpdateOperationsInput | string | null
    weight_spec?: NullableIntFieldUpdateOperationsInput | number | null
    dimension_spec?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type specProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    phase_spec?: NullableStringFieldUpdateOperationsInput | string | null
    frequency_spec?: NullableStringFieldUpdateOperationsInput | string | null
    gensetPower_spec?: NullableStringFieldUpdateOperationsInput | string | null
    ratedPower_spec?: NullableStringFieldUpdateOperationsInput | string | null
    maxPower_spec?: NullableStringFieldUpdateOperationsInput | string | null
    ratedACVoltage_spec?: NullableStringFieldUpdateOperationsInput | string | null
    starting_spec?: NullableStringFieldUpdateOperationsInput | string | null
    fuelConsumption_spec?: NullableStringFieldUpdateOperationsInput | string | null
    weight_spec?: NullableIntFieldUpdateOperationsInput | number | null
    dimension_spec?: NullableStringFieldUpdateOperationsInput | string | null
    IdProduct?: IntFieldUpdateOperationsInput | number
  }

  export type imageProductUtamaCreateInput = {
    start?: Date | string
    end?: Date | string
    asset_id?: string | null
    public_id?: string | null
    version?: number | null
    version_id?: string | null
    signature?: string | null
    width?: number | null
    height?: number | null
    format?: string | null
    resource_type?: string | null
    created_at?: Date | string
    pages?: number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    bytes?: number | null
    type?: string | null
    etag?: string | null
    placeholder?: boolean | null
    url?: string | null
    secure_url?: string | null
    asset_folder?: string | null
    display_name?: string | null
    original_filename?: string | null
    api_key?: string | null
    user: listProductCreateNestedOneWithoutImageProductUtamaInput
  }

  export type imageProductUtamaUncheckedCreateInput = {
    id?: number
    start?: Date | string
    end?: Date | string
    asset_id?: string | null
    public_id?: string | null
    version?: number | null
    version_id?: string | null
    signature?: string | null
    width?: number | null
    height?: number | null
    format?: string | null
    resource_type?: string | null
    created_at?: Date | string
    pages?: number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    bytes?: number | null
    type?: string | null
    etag?: string | null
    placeholder?: boolean | null
    url?: string | null
    secure_url?: string | null
    asset_folder?: string | null
    display_name?: string | null
    original_filename?: string | null
    api_key?: string | null
    IdProduct: number
  }

  export type imageProductUtamaUpdateInput = {
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    asset_id?: NullableStringFieldUpdateOperationsInput | string | null
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    version_id?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    format?: NullableStringFieldUpdateOperationsInput | string | null
    resource_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    bytes?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    etag?: NullableStringFieldUpdateOperationsInput | string | null
    placeholder?: NullableBoolFieldUpdateOperationsInput | boolean | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    secure_url?: NullableStringFieldUpdateOperationsInput | string | null
    asset_folder?: NullableStringFieldUpdateOperationsInput | string | null
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    original_filename?: NullableStringFieldUpdateOperationsInput | string | null
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    user?: listProductUpdateOneRequiredWithoutImageProductUtamaNestedInput
  }

  export type imageProductUtamaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    asset_id?: NullableStringFieldUpdateOperationsInput | string | null
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    version_id?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    format?: NullableStringFieldUpdateOperationsInput | string | null
    resource_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    bytes?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    etag?: NullableStringFieldUpdateOperationsInput | string | null
    placeholder?: NullableBoolFieldUpdateOperationsInput | boolean | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    secure_url?: NullableStringFieldUpdateOperationsInput | string | null
    asset_folder?: NullableStringFieldUpdateOperationsInput | string | null
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    original_filename?: NullableStringFieldUpdateOperationsInput | string | null
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    IdProduct?: IntFieldUpdateOperationsInput | number
  }

  export type imageProductUtamaCreateManyInput = {
    id?: number
    start?: Date | string
    end?: Date | string
    asset_id?: string | null
    public_id?: string | null
    version?: number | null
    version_id?: string | null
    signature?: string | null
    width?: number | null
    height?: number | null
    format?: string | null
    resource_type?: string | null
    created_at?: Date | string
    pages?: number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    bytes?: number | null
    type?: string | null
    etag?: string | null
    placeholder?: boolean | null
    url?: string | null
    secure_url?: string | null
    asset_folder?: string | null
    display_name?: string | null
    original_filename?: string | null
    api_key?: string | null
    IdProduct: number
  }

  export type imageProductUtamaUpdateManyMutationInput = {
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    asset_id?: NullableStringFieldUpdateOperationsInput | string | null
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    version_id?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    format?: NullableStringFieldUpdateOperationsInput | string | null
    resource_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    bytes?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    etag?: NullableStringFieldUpdateOperationsInput | string | null
    placeholder?: NullableBoolFieldUpdateOperationsInput | boolean | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    secure_url?: NullableStringFieldUpdateOperationsInput | string | null
    asset_folder?: NullableStringFieldUpdateOperationsInput | string | null
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    original_filename?: NullableStringFieldUpdateOperationsInput | string | null
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type imageProductUtamaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    asset_id?: NullableStringFieldUpdateOperationsInput | string | null
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    version_id?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    format?: NullableStringFieldUpdateOperationsInput | string | null
    resource_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    bytes?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    etag?: NullableStringFieldUpdateOperationsInput | string | null
    placeholder?: NullableBoolFieldUpdateOperationsInput | boolean | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    secure_url?: NullableStringFieldUpdateOperationsInput | string | null
    asset_folder?: NullableStringFieldUpdateOperationsInput | string | null
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    original_filename?: NullableStringFieldUpdateOperationsInput | string | null
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    IdProduct?: IntFieldUpdateOperationsInput | number
  }

  export type imageProductCreateInput = {
    start?: Date | string
    end?: Date | string
    asset_id?: string | null
    public_id?: string | null
    version?: number | null
    version_id?: string | null
    signature?: string | null
    width?: number | null
    height?: number | null
    format?: string | null
    resource_type?: string | null
    created_at?: Date | string
    pages?: number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    bytes?: number | null
    type?: string | null
    etag?: string | null
    placeholder?: boolean | null
    url?: string | null
    secure_url?: string | null
    asset_folder?: string | null
    display_name?: string | null
    original_filename?: string | null
    api_key?: string | null
    user: listProductCreateNestedOneWithoutUrl_image_productInput
  }

  export type imageProductUncheckedCreateInput = {
    id?: number
    start?: Date | string
    end?: Date | string
    asset_id?: string | null
    public_id?: string | null
    version?: number | null
    version_id?: string | null
    signature?: string | null
    width?: number | null
    height?: number | null
    format?: string | null
    resource_type?: string | null
    created_at?: Date | string
    pages?: number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    bytes?: number | null
    type?: string | null
    etag?: string | null
    placeholder?: boolean | null
    url?: string | null
    secure_url?: string | null
    asset_folder?: string | null
    display_name?: string | null
    original_filename?: string | null
    api_key?: string | null
    IdProduct: number
  }

  export type imageProductUpdateInput = {
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    asset_id?: NullableStringFieldUpdateOperationsInput | string | null
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    version_id?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    format?: NullableStringFieldUpdateOperationsInput | string | null
    resource_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    bytes?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    etag?: NullableStringFieldUpdateOperationsInput | string | null
    placeholder?: NullableBoolFieldUpdateOperationsInput | boolean | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    secure_url?: NullableStringFieldUpdateOperationsInput | string | null
    asset_folder?: NullableStringFieldUpdateOperationsInput | string | null
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    original_filename?: NullableStringFieldUpdateOperationsInput | string | null
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    user?: listProductUpdateOneRequiredWithoutUrl_image_productNestedInput
  }

  export type imageProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    asset_id?: NullableStringFieldUpdateOperationsInput | string | null
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    version_id?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    format?: NullableStringFieldUpdateOperationsInput | string | null
    resource_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    bytes?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    etag?: NullableStringFieldUpdateOperationsInput | string | null
    placeholder?: NullableBoolFieldUpdateOperationsInput | boolean | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    secure_url?: NullableStringFieldUpdateOperationsInput | string | null
    asset_folder?: NullableStringFieldUpdateOperationsInput | string | null
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    original_filename?: NullableStringFieldUpdateOperationsInput | string | null
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    IdProduct?: IntFieldUpdateOperationsInput | number
  }

  export type imageProductCreateManyInput = {
    id?: number
    start?: Date | string
    end?: Date | string
    asset_id?: string | null
    public_id?: string | null
    version?: number | null
    version_id?: string | null
    signature?: string | null
    width?: number | null
    height?: number | null
    format?: string | null
    resource_type?: string | null
    created_at?: Date | string
    pages?: number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    bytes?: number | null
    type?: string | null
    etag?: string | null
    placeholder?: boolean | null
    url?: string | null
    secure_url?: string | null
    asset_folder?: string | null
    display_name?: string | null
    original_filename?: string | null
    api_key?: string | null
    IdProduct: number
  }

  export type imageProductUpdateManyMutationInput = {
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    asset_id?: NullableStringFieldUpdateOperationsInput | string | null
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    version_id?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    format?: NullableStringFieldUpdateOperationsInput | string | null
    resource_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    bytes?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    etag?: NullableStringFieldUpdateOperationsInput | string | null
    placeholder?: NullableBoolFieldUpdateOperationsInput | boolean | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    secure_url?: NullableStringFieldUpdateOperationsInput | string | null
    asset_folder?: NullableStringFieldUpdateOperationsInput | string | null
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    original_filename?: NullableStringFieldUpdateOperationsInput | string | null
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type imageProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    asset_id?: NullableStringFieldUpdateOperationsInput | string | null
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    version_id?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    format?: NullableStringFieldUpdateOperationsInput | string | null
    resource_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    bytes?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    etag?: NullableStringFieldUpdateOperationsInput | string | null
    placeholder?: NullableBoolFieldUpdateOperationsInput | boolean | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    secure_url?: NullableStringFieldUpdateOperationsInput | string | null
    asset_folder?: NullableStringFieldUpdateOperationsInput | string | null
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    original_filename?: NullableStringFieldUpdateOperationsInput | string | null
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    IdProduct?: IntFieldUpdateOperationsInput | number
  }

  export type postArtikelCreateInput = {
    title: string
    slug: string
    content: string
    description?: string | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    saveDraf?: boolean
    imageProductArtikel?: imageProductArtikelCreateNestedManyWithoutUserdInput
    categoryArtikel: categoryArtikelCreateNestedOneWithoutPostArtikelInput
  }

  export type postArtikelUncheckedCreateInput = {
    id?: number
    title: string
    slug: string
    content: string
    description?: string | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    saveDraf?: boolean
    categoryArtikelId: number
    imageProductArtikel?: imageProductArtikelUncheckedCreateNestedManyWithoutUserdInput
  }

  export type postArtikelUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saveDraf?: BoolFieldUpdateOperationsInput | boolean
    imageProductArtikel?: imageProductArtikelUpdateManyWithoutUserdNestedInput
    categoryArtikel?: categoryArtikelUpdateOneRequiredWithoutPostArtikelNestedInput
  }

  export type postArtikelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saveDraf?: BoolFieldUpdateOperationsInput | boolean
    categoryArtikelId?: IntFieldUpdateOperationsInput | number
    imageProductArtikel?: imageProductArtikelUncheckedUpdateManyWithoutUserdNestedInput
  }

  export type postArtikelCreateManyInput = {
    id?: number
    title: string
    slug: string
    content: string
    description?: string | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    saveDraf?: boolean
    categoryArtikelId: number
  }

  export type postArtikelUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saveDraf?: BoolFieldUpdateOperationsInput | boolean
  }

  export type postArtikelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saveDraf?: BoolFieldUpdateOperationsInput | boolean
    categoryArtikelId?: IntFieldUpdateOperationsInput | number
  }

  export type imageProductArtikelCreateInput = {
    start?: Date | string
    end?: Date | string
    asset_id?: string | null
    public_id?: string | null
    version?: number | null
    version_id?: string | null
    signature?: string | null
    width?: number | null
    height?: number | null
    format?: string | null
    resource_type?: string | null
    created_at?: Date | string
    pages?: number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    bytes?: number | null
    type?: string | null
    etag?: string | null
    placeholder?: boolean | null
    url?: string | null
    secure_url?: string | null
    asset_folder?: string | null
    display_name?: string | null
    original_filename?: string | null
    api_key?: string | null
    userd: postArtikelCreateNestedOneWithoutImageProductArtikelInput
  }

  export type imageProductArtikelUncheckedCreateInput = {
    id?: number
    start?: Date | string
    end?: Date | string
    asset_id?: string | null
    public_id?: string | null
    version?: number | null
    version_id?: string | null
    signature?: string | null
    width?: number | null
    height?: number | null
    format?: string | null
    resource_type?: string | null
    created_at?: Date | string
    pages?: number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    bytes?: number | null
    type?: string | null
    etag?: string | null
    placeholder?: boolean | null
    url?: string | null
    secure_url?: string | null
    asset_folder?: string | null
    display_name?: string | null
    original_filename?: string | null
    api_key?: string | null
    IdProductArtikel: number
  }

  export type imageProductArtikelUpdateInput = {
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    asset_id?: NullableStringFieldUpdateOperationsInput | string | null
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    version_id?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    format?: NullableStringFieldUpdateOperationsInput | string | null
    resource_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    bytes?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    etag?: NullableStringFieldUpdateOperationsInput | string | null
    placeholder?: NullableBoolFieldUpdateOperationsInput | boolean | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    secure_url?: NullableStringFieldUpdateOperationsInput | string | null
    asset_folder?: NullableStringFieldUpdateOperationsInput | string | null
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    original_filename?: NullableStringFieldUpdateOperationsInput | string | null
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    userd?: postArtikelUpdateOneRequiredWithoutImageProductArtikelNestedInput
  }

  export type imageProductArtikelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    asset_id?: NullableStringFieldUpdateOperationsInput | string | null
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    version_id?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    format?: NullableStringFieldUpdateOperationsInput | string | null
    resource_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    bytes?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    etag?: NullableStringFieldUpdateOperationsInput | string | null
    placeholder?: NullableBoolFieldUpdateOperationsInput | boolean | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    secure_url?: NullableStringFieldUpdateOperationsInput | string | null
    asset_folder?: NullableStringFieldUpdateOperationsInput | string | null
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    original_filename?: NullableStringFieldUpdateOperationsInput | string | null
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    IdProductArtikel?: IntFieldUpdateOperationsInput | number
  }

  export type imageProductArtikelCreateManyInput = {
    id?: number
    start?: Date | string
    end?: Date | string
    asset_id?: string | null
    public_id?: string | null
    version?: number | null
    version_id?: string | null
    signature?: string | null
    width?: number | null
    height?: number | null
    format?: string | null
    resource_type?: string | null
    created_at?: Date | string
    pages?: number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    bytes?: number | null
    type?: string | null
    etag?: string | null
    placeholder?: boolean | null
    url?: string | null
    secure_url?: string | null
    asset_folder?: string | null
    display_name?: string | null
    original_filename?: string | null
    api_key?: string | null
    IdProductArtikel: number
  }

  export type imageProductArtikelUpdateManyMutationInput = {
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    asset_id?: NullableStringFieldUpdateOperationsInput | string | null
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    version_id?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    format?: NullableStringFieldUpdateOperationsInput | string | null
    resource_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    bytes?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    etag?: NullableStringFieldUpdateOperationsInput | string | null
    placeholder?: NullableBoolFieldUpdateOperationsInput | boolean | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    secure_url?: NullableStringFieldUpdateOperationsInput | string | null
    asset_folder?: NullableStringFieldUpdateOperationsInput | string | null
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    original_filename?: NullableStringFieldUpdateOperationsInput | string | null
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type imageProductArtikelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    asset_id?: NullableStringFieldUpdateOperationsInput | string | null
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    version_id?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    format?: NullableStringFieldUpdateOperationsInput | string | null
    resource_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    bytes?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    etag?: NullableStringFieldUpdateOperationsInput | string | null
    placeholder?: NullableBoolFieldUpdateOperationsInput | boolean | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    secure_url?: NullableStringFieldUpdateOperationsInput | string | null
    asset_folder?: NullableStringFieldUpdateOperationsInput | string | null
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    original_filename?: NullableStringFieldUpdateOperationsInput | string | null
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
    IdProductArtikel?: IntFieldUpdateOperationsInput | number
  }

  export type categoryArtikelCreateInput = {
    start?: Date | string
    end?: Date | string
    category: string
    slugCategory: string
    image?: string | null
    icon?: string | null
    urlYoutube?: string | null
    title?: string | null
    desc?: string | null
    tags?: string | null
    postArtikel?: postArtikelCreateNestedManyWithoutCategoryArtikelInput
  }

  export type categoryArtikelUncheckedCreateInput = {
    id?: number
    start?: Date | string
    end?: Date | string
    category: string
    slugCategory: string
    image?: string | null
    icon?: string | null
    urlYoutube?: string | null
    title?: string | null
    desc?: string | null
    tags?: string | null
    postArtikel?: postArtikelUncheckedCreateNestedManyWithoutCategoryArtikelInput
  }

  export type categoryArtikelUpdateInput = {
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    slugCategory?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    urlYoutube?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    postArtikel?: postArtikelUpdateManyWithoutCategoryArtikelNestedInput
  }

  export type categoryArtikelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    slugCategory?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    urlYoutube?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
    postArtikel?: postArtikelUncheckedUpdateManyWithoutCategoryArtikelNestedInput
  }

  export type categoryArtikelCreateManyInput = {
    id?: number
    start?: Date | string
    end?: Date | string
    category: string
    slugCategory: string
    image?: string | null
    icon?: string | null
    urlYoutube?: string | null
    title?: string | null
    desc?: string | null
    tags?: string | null
  }

  export type categoryArtikelUpdateManyMutationInput = {
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    slugCategory?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    urlYoutube?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoryArtikelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    slugCategory?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    urlYoutube?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cartCreateInput = {
    IDCart: string
    email: string
    clerkUserId: string
    name?: string | null
    avatar?: string | null
    id?: number
    start?: Date | string
    end?: Date | string | null
    items?: cartItemCreateNestedManyWithoutCartInput
    formData?: formPembelianCreateNestedOneWithoutUserInput
    dataPesanan?: dataPesananCreateNestedManyWithoutCartInput
    ongkosKirim?: ongkosKirimCreateNestedOneWithoutUserInput
  }

  export type cartUncheckedCreateInput = {
    IDCart: string
    email: string
    clerkUserId: string
    name?: string | null
    avatar?: string | null
    id?: number
    start?: Date | string
    end?: Date | string | null
    items?: cartItemUncheckedCreateNestedManyWithoutCartInput
    formData?: formPembelianUncheckedCreateNestedOneWithoutUserInput
    dataPesanan?: dataPesananUncheckedCreateNestedManyWithoutCartInput
    ongkosKirim?: ongkosKirimUncheckedCreateNestedOneWithoutUserInput
  }

  export type cartUpdateInput = {
    IDCart?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: cartItemUpdateManyWithoutCartNestedInput
    formData?: formPembelianUpdateOneWithoutUserNestedInput
    dataPesanan?: dataPesananUpdateManyWithoutCartNestedInput
    ongkosKirim?: ongkosKirimUpdateOneWithoutUserNestedInput
  }

  export type cartUncheckedUpdateInput = {
    IDCart?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: cartItemUncheckedUpdateManyWithoutCartNestedInput
    formData?: formPembelianUncheckedUpdateOneWithoutUserNestedInput
    dataPesanan?: dataPesananUncheckedUpdateManyWithoutCartNestedInput
    ongkosKirim?: ongkosKirimUncheckedUpdateOneWithoutUserNestedInput
  }

  export type cartCreateManyInput = {
    IDCart: string
    email: string
    clerkUserId: string
    name?: string | null
    avatar?: string | null
    id?: number
    start?: Date | string
    end?: Date | string | null
  }

  export type cartUpdateManyMutationInput = {
    IDCart?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cartUncheckedUpdateManyInput = {
    IDCart?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cartItemCreateInput = {
    start?: Date | string
    end?: Date | string | null
    quantity?: number
    checkList?: boolean
    note?: string | null
    cart: cartCreateNestedOneWithoutItemsInput
    product: listProductCreateNestedOneWithoutCartItemInput
  }

  export type cartItemUncheckedCreateInput = {
    id?: number
    start?: Date | string
    end?: Date | string | null
    cartId: string
    productId: number
    quantity?: number
    checkList?: boolean
    note?: string | null
  }

  export type cartItemUpdateInput = {
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    checkList?: BoolFieldUpdateOperationsInput | boolean
    note?: NullableStringFieldUpdateOperationsInput | string | null
    cart?: cartUpdateOneRequiredWithoutItemsNestedInput
    product?: listProductUpdateOneRequiredWithoutCartItemNestedInput
  }

  export type cartItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cartId?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    checkList?: BoolFieldUpdateOperationsInput | boolean
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cartItemCreateManyInput = {
    id?: number
    start?: Date | string
    end?: Date | string | null
    cartId: string
    productId: number
    quantity?: number
    checkList?: boolean
    note?: string | null
  }

  export type cartItemUpdateManyMutationInput = {
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    checkList?: BoolFieldUpdateOperationsInput | boolean
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cartItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cartId?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    checkList?: BoolFieldUpdateOperationsInput | boolean
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type formPembelianCreateInput = {
    start?: Date | string
    end?: Date | string | null
    nama_lengkap_user?: string | null
    alamat_lengkap_user?: string | null
    kode_pos_user?: number | null
    no_hp_user?: bigint | number | null
    catatan_pengiriman?: string | null
    user: cartCreateNestedOneWithoutFormDataInput
  }

  export type formPembelianUncheckedCreateInput = {
    id?: number
    start?: Date | string
    end?: Date | string | null
    nama_lengkap_user?: string | null
    alamat_lengkap_user?: string | null
    kode_pos_user?: number | null
    no_hp_user?: bigint | number | null
    catatan_pengiriman?: string | null
    cartID: string
  }

  export type formPembelianUpdateInput = {
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nama_lengkap_user?: NullableStringFieldUpdateOperationsInput | string | null
    alamat_lengkap_user?: NullableStringFieldUpdateOperationsInput | string | null
    kode_pos_user?: NullableIntFieldUpdateOperationsInput | number | null
    no_hp_user?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    catatan_pengiriman?: NullableStringFieldUpdateOperationsInput | string | null
    user?: cartUpdateOneRequiredWithoutFormDataNestedInput
  }

  export type formPembelianUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nama_lengkap_user?: NullableStringFieldUpdateOperationsInput | string | null
    alamat_lengkap_user?: NullableStringFieldUpdateOperationsInput | string | null
    kode_pos_user?: NullableIntFieldUpdateOperationsInput | number | null
    no_hp_user?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    catatan_pengiriman?: NullableStringFieldUpdateOperationsInput | string | null
    cartID?: StringFieldUpdateOperationsInput | string
  }

  export type formPembelianCreateManyInput = {
    id?: number
    start?: Date | string
    end?: Date | string | null
    nama_lengkap_user?: string | null
    alamat_lengkap_user?: string | null
    kode_pos_user?: number | null
    no_hp_user?: bigint | number | null
    catatan_pengiriman?: string | null
    cartID: string
  }

  export type formPembelianUpdateManyMutationInput = {
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nama_lengkap_user?: NullableStringFieldUpdateOperationsInput | string | null
    alamat_lengkap_user?: NullableStringFieldUpdateOperationsInput | string | null
    kode_pos_user?: NullableIntFieldUpdateOperationsInput | number | null
    no_hp_user?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    catatan_pengiriman?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type formPembelianUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nama_lengkap_user?: NullableStringFieldUpdateOperationsInput | string | null
    alamat_lengkap_user?: NullableStringFieldUpdateOperationsInput | string | null
    kode_pos_user?: NullableIntFieldUpdateOperationsInput | number | null
    no_hp_user?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    catatan_pengiriman?: NullableStringFieldUpdateOperationsInput | string | null
    cartID?: StringFieldUpdateOperationsInput | string
  }

  export type ongkosKirimCreateInput = {
    start?: Date | string
    end?: Date | string | null
    productName?: string | null
    price?: bigint | number | null
    quantity?: number | null
    user: cartCreateNestedOneWithoutOngkosKirimInput
  }

  export type ongkosKirimUncheckedCreateInput = {
    id?: number
    start?: Date | string
    end?: Date | string | null
    productName?: string | null
    price?: bigint | number | null
    quantity?: number | null
    cartID: string
  }

  export type ongkosKirimUpdateInput = {
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    user?: cartUpdateOneRequiredWithoutOngkosKirimNestedInput
  }

  export type ongkosKirimUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    cartID?: StringFieldUpdateOperationsInput | string
  }

  export type ongkosKirimCreateManyInput = {
    id?: number
    start?: Date | string
    end?: Date | string | null
    productName?: string | null
    price?: bigint | number | null
    quantity?: number | null
    cartID: string
  }

  export type ongkosKirimUpdateManyMutationInput = {
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ongkosKirimUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    cartID?: StringFieldUpdateOperationsInput | string
  }

  export type dataPesananItemCreateInput = {
    start?: Date | string
    end?: Date | string | null
    note?: string | null
    productName?: string | null
    price?: bigint | number | null
    priceOriginal?: bigint | number | null
    quantity?: number | null
    methodPayment?: string | null
    image?: string | null
    slugProduct?: string | null
    merchantOrderId?: string | null
    status?: string | null
    noResi?: string | null
    dataPesanan?: dataPesananCreateNestedOneWithoutDataPesananItemsInput
  }

  export type dataPesananItemUncheckedCreateInput = {
    id?: number
    start?: Date | string
    end?: Date | string | null
    note?: string | null
    productName?: string | null
    price?: bigint | number | null
    priceOriginal?: bigint | number | null
    quantity?: number | null
    methodPayment?: string | null
    image?: string | null
    slugProduct?: string | null
    merchantOrderId?: string | null
    status?: string | null
    noResi?: string | null
    dataPesananId?: number | null
  }

  export type dataPesananItemUpdateInput = {
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priceOriginal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    methodPayment?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    slugProduct?: NullableStringFieldUpdateOperationsInput | string | null
    merchantOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    noResi?: NullableStringFieldUpdateOperationsInput | string | null
    dataPesanan?: dataPesananUpdateOneWithoutDataPesananItemsNestedInput
  }

  export type dataPesananItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priceOriginal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    methodPayment?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    slugProduct?: NullableStringFieldUpdateOperationsInput | string | null
    merchantOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    noResi?: NullableStringFieldUpdateOperationsInput | string | null
    dataPesananId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type dataPesananItemCreateManyInput = {
    id?: number
    start?: Date | string
    end?: Date | string | null
    note?: string | null
    productName?: string | null
    price?: bigint | number | null
    priceOriginal?: bigint | number | null
    quantity?: number | null
    methodPayment?: string | null
    image?: string | null
    slugProduct?: string | null
    merchantOrderId?: string | null
    status?: string | null
    noResi?: string | null
    dataPesananId?: number | null
  }

  export type dataPesananItemUpdateManyMutationInput = {
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priceOriginal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    methodPayment?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    slugProduct?: NullableStringFieldUpdateOperationsInput | string | null
    merchantOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    noResi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type dataPesananItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priceOriginal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    methodPayment?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    slugProduct?: NullableStringFieldUpdateOperationsInput | string | null
    merchantOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    noResi?: NullableStringFieldUpdateOperationsInput | string | null
    dataPesananId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type dataPesananCreateInput = {
    start?: Date | string
    end?: Date | string | null
    payment?: boolean
    reference?: string | null
    merchantOrderId?: string | null
    dataPesananItems?: dataPesananItemCreateNestedManyWithoutDataPesananInput
    cart: cartCreateNestedOneWithoutDataPesananInput
  }

  export type dataPesananUncheckedCreateInput = {
    id?: number
    start?: Date | string
    end?: Date | string | null
    payment?: boolean
    reference?: string | null
    merchantOrderId?: string | null
    cartID: string
    dataPesananItems?: dataPesananItemUncheckedCreateNestedManyWithoutDataPesananInput
  }

  export type dataPesananUpdateInput = {
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment?: BoolFieldUpdateOperationsInput | boolean
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    merchantOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    dataPesananItems?: dataPesananItemUpdateManyWithoutDataPesananNestedInput
    cart?: cartUpdateOneRequiredWithoutDataPesananNestedInput
  }

  export type dataPesananUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment?: BoolFieldUpdateOperationsInput | boolean
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    merchantOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    cartID?: StringFieldUpdateOperationsInput | string
    dataPesananItems?: dataPesananItemUncheckedUpdateManyWithoutDataPesananNestedInput
  }

  export type dataPesananCreateManyInput = {
    id?: number
    start?: Date | string
    end?: Date | string | null
    payment?: boolean
    reference?: string | null
    merchantOrderId?: string | null
    cartID: string
  }

  export type dataPesananUpdateManyMutationInput = {
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment?: BoolFieldUpdateOperationsInput | boolean
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    merchantOrderId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type dataPesananUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment?: BoolFieldUpdateOperationsInput | boolean
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    merchantOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    cartID?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ListProductListRelationFilter = {
    every?: listProductWhereInput
    some?: listProductWhereInput
    none?: listProductWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type listProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoryProductCountOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    category?: SortOrder
    slugCategory?: SortOrder
    image?: SortOrder
    icon?: SortOrder
    urlYoutube?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    tags?: SortOrder
  }

  export type categoryProductAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type categoryProductMaxOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    category?: SortOrder
    slugCategory?: SortOrder
    image?: SortOrder
    icon?: SortOrder
    urlYoutube?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    tags?: SortOrder
  }

  export type categoryProductMinOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    category?: SortOrder
    slugCategory?: SortOrder
    image?: SortOrder
    icon?: SortOrder
    urlYoutube?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    tags?: SortOrder
  }

  export type categoryProductSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type CategoryProductRelationFilter = {
    is?: categoryProductWhereInput
    isNot?: categoryProductWhereInput
  }

  export type ImageProductListRelationFilter = {
    every?: imageProductWhereInput
    some?: imageProductWhereInput
    none?: imageProductWhereInput
  }

  export type SpecProductNullableRelationFilter = {
    is?: specProductWhereInput | null
    isNot?: specProductWhereInput | null
  }

  export type CartItemListRelationFilter = {
    every?: cartItemWhereInput
    some?: cartItemWhereInput
    none?: cartItemWhereInput
  }

  export type ImageProductUtamaNullableRelationFilter = {
    is?: imageProductUtamaWhereInput | null
    isNot?: imageProductUtamaWhereInput | null
  }

  export type imageProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cartItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type listProductCountOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    slugProduct?: SortOrder
    saveDraf?: SortOrder
    descProduct?: SortOrder
    productName?: SortOrder
    stockProduct?: SortOrder
    descMetaProduct?: SortOrder
    viewProduct?: SortOrder
    subKategoriProduct?: SortOrder
    productType?: SortOrder
    tagProduct?: SortOrder
    productPrice?: SortOrder
    productDiscount?: SortOrder
    productPriceFinal?: SortOrder
    urlYoutube?: SortOrder
    productKategori?: SortOrder
  }

  export type listProductAvgOrderByAggregateInput = {
    id?: SortOrder
    stockProduct?: SortOrder
    viewProduct?: SortOrder
    productPrice?: SortOrder
    productDiscount?: SortOrder
    productPriceFinal?: SortOrder
    productKategori?: SortOrder
  }

  export type listProductMaxOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    slugProduct?: SortOrder
    saveDraf?: SortOrder
    descProduct?: SortOrder
    productName?: SortOrder
    stockProduct?: SortOrder
    descMetaProduct?: SortOrder
    viewProduct?: SortOrder
    subKategoriProduct?: SortOrder
    productType?: SortOrder
    productPrice?: SortOrder
    productDiscount?: SortOrder
    productPriceFinal?: SortOrder
    urlYoutube?: SortOrder
    productKategori?: SortOrder
  }

  export type listProductMinOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    slugProduct?: SortOrder
    saveDraf?: SortOrder
    descProduct?: SortOrder
    productName?: SortOrder
    stockProduct?: SortOrder
    descMetaProduct?: SortOrder
    viewProduct?: SortOrder
    subKategoriProduct?: SortOrder
    productType?: SortOrder
    productPrice?: SortOrder
    productDiscount?: SortOrder
    productPriceFinal?: SortOrder
    urlYoutube?: SortOrder
    productKategori?: SortOrder
  }

  export type listProductSumOrderByAggregateInput = {
    id?: SortOrder
    stockProduct?: SortOrder
    viewProduct?: SortOrder
    productPrice?: SortOrder
    productDiscount?: SortOrder
    productPriceFinal?: SortOrder
    productKategori?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type ListProductRelationFilter = {
    is?: listProductWhereInput
    isNot?: listProductWhereInput
  }

  export type specProductCountOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    phase_spec?: SortOrder
    frequency_spec?: SortOrder
    gensetPower_spec?: SortOrder
    ratedPower_spec?: SortOrder
    maxPower_spec?: SortOrder
    ratedACVoltage_spec?: SortOrder
    starting_spec?: SortOrder
    fuelConsumption_spec?: SortOrder
    weight_spec?: SortOrder
    dimension_spec?: SortOrder
    IdProduct?: SortOrder
  }

  export type specProductAvgOrderByAggregateInput = {
    id?: SortOrder
    weight_spec?: SortOrder
    IdProduct?: SortOrder
  }

  export type specProductMaxOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    phase_spec?: SortOrder
    frequency_spec?: SortOrder
    gensetPower_spec?: SortOrder
    ratedPower_spec?: SortOrder
    maxPower_spec?: SortOrder
    ratedACVoltage_spec?: SortOrder
    starting_spec?: SortOrder
    fuelConsumption_spec?: SortOrder
    weight_spec?: SortOrder
    dimension_spec?: SortOrder
    IdProduct?: SortOrder
  }

  export type specProductMinOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    phase_spec?: SortOrder
    frequency_spec?: SortOrder
    gensetPower_spec?: SortOrder
    ratedPower_spec?: SortOrder
    maxPower_spec?: SortOrder
    ratedACVoltage_spec?: SortOrder
    starting_spec?: SortOrder
    fuelConsumption_spec?: SortOrder
    weight_spec?: SortOrder
    dimension_spec?: SortOrder
    IdProduct?: SortOrder
  }

  export type specProductSumOrderByAggregateInput = {
    id?: SortOrder
    weight_spec?: SortOrder
    IdProduct?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type imageProductUtamaCountOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    asset_id?: SortOrder
    public_id?: SortOrder
    version?: SortOrder
    version_id?: SortOrder
    signature?: SortOrder
    width?: SortOrder
    height?: SortOrder
    format?: SortOrder
    resource_type?: SortOrder
    created_at?: SortOrder
    pages?: SortOrder
    tags?: SortOrder
    bytes?: SortOrder
    type?: SortOrder
    etag?: SortOrder
    placeholder?: SortOrder
    url?: SortOrder
    secure_url?: SortOrder
    asset_folder?: SortOrder
    display_name?: SortOrder
    original_filename?: SortOrder
    api_key?: SortOrder
    IdProduct?: SortOrder
  }

  export type imageProductUtamaAvgOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    width?: SortOrder
    height?: SortOrder
    pages?: SortOrder
    bytes?: SortOrder
    IdProduct?: SortOrder
  }

  export type imageProductUtamaMaxOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    asset_id?: SortOrder
    public_id?: SortOrder
    version?: SortOrder
    version_id?: SortOrder
    signature?: SortOrder
    width?: SortOrder
    height?: SortOrder
    format?: SortOrder
    resource_type?: SortOrder
    created_at?: SortOrder
    pages?: SortOrder
    bytes?: SortOrder
    type?: SortOrder
    etag?: SortOrder
    placeholder?: SortOrder
    url?: SortOrder
    secure_url?: SortOrder
    asset_folder?: SortOrder
    display_name?: SortOrder
    original_filename?: SortOrder
    api_key?: SortOrder
    IdProduct?: SortOrder
  }

  export type imageProductUtamaMinOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    asset_id?: SortOrder
    public_id?: SortOrder
    version?: SortOrder
    version_id?: SortOrder
    signature?: SortOrder
    width?: SortOrder
    height?: SortOrder
    format?: SortOrder
    resource_type?: SortOrder
    created_at?: SortOrder
    pages?: SortOrder
    bytes?: SortOrder
    type?: SortOrder
    etag?: SortOrder
    placeholder?: SortOrder
    url?: SortOrder
    secure_url?: SortOrder
    asset_folder?: SortOrder
    display_name?: SortOrder
    original_filename?: SortOrder
    api_key?: SortOrder
    IdProduct?: SortOrder
  }

  export type imageProductUtamaSumOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    width?: SortOrder
    height?: SortOrder
    pages?: SortOrder
    bytes?: SortOrder
    IdProduct?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type imageProductCountOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    asset_id?: SortOrder
    public_id?: SortOrder
    version?: SortOrder
    version_id?: SortOrder
    signature?: SortOrder
    width?: SortOrder
    height?: SortOrder
    format?: SortOrder
    resource_type?: SortOrder
    created_at?: SortOrder
    pages?: SortOrder
    tags?: SortOrder
    bytes?: SortOrder
    type?: SortOrder
    etag?: SortOrder
    placeholder?: SortOrder
    url?: SortOrder
    secure_url?: SortOrder
    asset_folder?: SortOrder
    display_name?: SortOrder
    original_filename?: SortOrder
    api_key?: SortOrder
    IdProduct?: SortOrder
  }

  export type imageProductAvgOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    width?: SortOrder
    height?: SortOrder
    pages?: SortOrder
    bytes?: SortOrder
    IdProduct?: SortOrder
  }

  export type imageProductMaxOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    asset_id?: SortOrder
    public_id?: SortOrder
    version?: SortOrder
    version_id?: SortOrder
    signature?: SortOrder
    width?: SortOrder
    height?: SortOrder
    format?: SortOrder
    resource_type?: SortOrder
    created_at?: SortOrder
    pages?: SortOrder
    bytes?: SortOrder
    type?: SortOrder
    etag?: SortOrder
    placeholder?: SortOrder
    url?: SortOrder
    secure_url?: SortOrder
    asset_folder?: SortOrder
    display_name?: SortOrder
    original_filename?: SortOrder
    api_key?: SortOrder
    IdProduct?: SortOrder
  }

  export type imageProductMinOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    asset_id?: SortOrder
    public_id?: SortOrder
    version?: SortOrder
    version_id?: SortOrder
    signature?: SortOrder
    width?: SortOrder
    height?: SortOrder
    format?: SortOrder
    resource_type?: SortOrder
    created_at?: SortOrder
    pages?: SortOrder
    bytes?: SortOrder
    type?: SortOrder
    etag?: SortOrder
    placeholder?: SortOrder
    url?: SortOrder
    secure_url?: SortOrder
    asset_folder?: SortOrder
    display_name?: SortOrder
    original_filename?: SortOrder
    api_key?: SortOrder
    IdProduct?: SortOrder
  }

  export type imageProductSumOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    width?: SortOrder
    height?: SortOrder
    pages?: SortOrder
    bytes?: SortOrder
    IdProduct?: SortOrder
  }

  export type ImageProductArtikelListRelationFilter = {
    every?: imageProductArtikelWhereInput
    some?: imageProductArtikelWhereInput
    none?: imageProductArtikelWhereInput
  }

  export type CategoryArtikelRelationFilter = {
    is?: categoryArtikelWhereInput
    isNot?: categoryArtikelWhereInput
  }

  export type imageProductArtikelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type postArtikelCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    description?: SortOrder
    tags?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    saveDraf?: SortOrder
    categoryArtikelId?: SortOrder
  }

  export type postArtikelAvgOrderByAggregateInput = {
    id?: SortOrder
    categoryArtikelId?: SortOrder
  }

  export type postArtikelMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    saveDraf?: SortOrder
    categoryArtikelId?: SortOrder
  }

  export type postArtikelMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    slug?: SortOrder
    content?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    saveDraf?: SortOrder
    categoryArtikelId?: SortOrder
  }

  export type postArtikelSumOrderByAggregateInput = {
    id?: SortOrder
    categoryArtikelId?: SortOrder
  }

  export type PostArtikelRelationFilter = {
    is?: postArtikelWhereInput
    isNot?: postArtikelWhereInput
  }

  export type imageProductArtikelCountOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    asset_id?: SortOrder
    public_id?: SortOrder
    version?: SortOrder
    version_id?: SortOrder
    signature?: SortOrder
    width?: SortOrder
    height?: SortOrder
    format?: SortOrder
    resource_type?: SortOrder
    created_at?: SortOrder
    pages?: SortOrder
    tags?: SortOrder
    bytes?: SortOrder
    type?: SortOrder
    etag?: SortOrder
    placeholder?: SortOrder
    url?: SortOrder
    secure_url?: SortOrder
    asset_folder?: SortOrder
    display_name?: SortOrder
    original_filename?: SortOrder
    api_key?: SortOrder
    IdProductArtikel?: SortOrder
  }

  export type imageProductArtikelAvgOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    width?: SortOrder
    height?: SortOrder
    pages?: SortOrder
    bytes?: SortOrder
    IdProductArtikel?: SortOrder
  }

  export type imageProductArtikelMaxOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    asset_id?: SortOrder
    public_id?: SortOrder
    version?: SortOrder
    version_id?: SortOrder
    signature?: SortOrder
    width?: SortOrder
    height?: SortOrder
    format?: SortOrder
    resource_type?: SortOrder
    created_at?: SortOrder
    pages?: SortOrder
    bytes?: SortOrder
    type?: SortOrder
    etag?: SortOrder
    placeholder?: SortOrder
    url?: SortOrder
    secure_url?: SortOrder
    asset_folder?: SortOrder
    display_name?: SortOrder
    original_filename?: SortOrder
    api_key?: SortOrder
    IdProductArtikel?: SortOrder
  }

  export type imageProductArtikelMinOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    asset_id?: SortOrder
    public_id?: SortOrder
    version?: SortOrder
    version_id?: SortOrder
    signature?: SortOrder
    width?: SortOrder
    height?: SortOrder
    format?: SortOrder
    resource_type?: SortOrder
    created_at?: SortOrder
    pages?: SortOrder
    bytes?: SortOrder
    type?: SortOrder
    etag?: SortOrder
    placeholder?: SortOrder
    url?: SortOrder
    secure_url?: SortOrder
    asset_folder?: SortOrder
    display_name?: SortOrder
    original_filename?: SortOrder
    api_key?: SortOrder
    IdProductArtikel?: SortOrder
  }

  export type imageProductArtikelSumOrderByAggregateInput = {
    id?: SortOrder
    version?: SortOrder
    width?: SortOrder
    height?: SortOrder
    pages?: SortOrder
    bytes?: SortOrder
    IdProductArtikel?: SortOrder
  }

  export type PostArtikelListRelationFilter = {
    every?: postArtikelWhereInput
    some?: postArtikelWhereInput
    none?: postArtikelWhereInput
  }

  export type postArtikelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoryArtikelCountOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    category?: SortOrder
    slugCategory?: SortOrder
    image?: SortOrder
    icon?: SortOrder
    urlYoutube?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    tags?: SortOrder
  }

  export type categoryArtikelAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type categoryArtikelMaxOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    category?: SortOrder
    slugCategory?: SortOrder
    image?: SortOrder
    icon?: SortOrder
    urlYoutube?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    tags?: SortOrder
  }

  export type categoryArtikelMinOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    category?: SortOrder
    slugCategory?: SortOrder
    image?: SortOrder
    icon?: SortOrder
    urlYoutube?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    tags?: SortOrder
  }

  export type categoryArtikelSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FormPembelianNullableRelationFilter = {
    is?: formPembelianWhereInput | null
    isNot?: formPembelianWhereInput | null
  }

  export type DataPesananListRelationFilter = {
    every?: dataPesananWhereInput
    some?: dataPesananWhereInput
    none?: dataPesananWhereInput
  }

  export type OngkosKirimNullableRelationFilter = {
    is?: ongkosKirimWhereInput | null
    isNot?: ongkosKirimWhereInput | null
  }

  export type dataPesananOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cartCountOrderByAggregateInput = {
    IDCart?: SortOrder
    email?: SortOrder
    clerkUserId?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
  }

  export type cartAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type cartMaxOrderByAggregateInput = {
    IDCart?: SortOrder
    email?: SortOrder
    clerkUserId?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
  }

  export type cartMinOrderByAggregateInput = {
    IDCart?: SortOrder
    email?: SortOrder
    clerkUserId?: SortOrder
    name?: SortOrder
    avatar?: SortOrder
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
  }

  export type cartSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CartRelationFilter = {
    is?: cartWhereInput
    isNot?: cartWhereInput
  }

  export type cartItemCountOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    cartId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    checkList?: SortOrder
    note?: SortOrder
  }

  export type cartItemAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
  }

  export type cartItemMaxOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    cartId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    checkList?: SortOrder
    note?: SortOrder
  }

  export type cartItemMinOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    cartId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    checkList?: SortOrder
    note?: SortOrder
  }

  export type cartItemSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
  }

  export type formPembelianCountOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    nama_lengkap_user?: SortOrder
    alamat_lengkap_user?: SortOrder
    kode_pos_user?: SortOrder
    no_hp_user?: SortOrder
    catatan_pengiriman?: SortOrder
    cartID?: SortOrder
  }

  export type formPembelianAvgOrderByAggregateInput = {
    id?: SortOrder
    kode_pos_user?: SortOrder
    no_hp_user?: SortOrder
  }

  export type formPembelianMaxOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    nama_lengkap_user?: SortOrder
    alamat_lengkap_user?: SortOrder
    kode_pos_user?: SortOrder
    no_hp_user?: SortOrder
    catatan_pengiriman?: SortOrder
    cartID?: SortOrder
  }

  export type formPembelianMinOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    nama_lengkap_user?: SortOrder
    alamat_lengkap_user?: SortOrder
    kode_pos_user?: SortOrder
    no_hp_user?: SortOrder
    catatan_pengiriman?: SortOrder
    cartID?: SortOrder
  }

  export type formPembelianSumOrderByAggregateInput = {
    id?: SortOrder
    kode_pos_user?: SortOrder
    no_hp_user?: SortOrder
  }

  export type ongkosKirimCountOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    productName?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    cartID?: SortOrder
  }

  export type ongkosKirimAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
  }

  export type ongkosKirimMaxOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    productName?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    cartID?: SortOrder
  }

  export type ongkosKirimMinOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    productName?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    cartID?: SortOrder
  }

  export type ongkosKirimSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
  }

  export type DataPesananNullableRelationFilter = {
    is?: dataPesananWhereInput | null
    isNot?: dataPesananWhereInput | null
  }

  export type dataPesananItemCountOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    note?: SortOrder
    productName?: SortOrder
    price?: SortOrder
    priceOriginal?: SortOrder
    quantity?: SortOrder
    methodPayment?: SortOrder
    image?: SortOrder
    slugProduct?: SortOrder
    merchantOrderId?: SortOrder
    status?: SortOrder
    noResi?: SortOrder
    dataPesananId?: SortOrder
  }

  export type dataPesananItemAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    priceOriginal?: SortOrder
    quantity?: SortOrder
    dataPesananId?: SortOrder
  }

  export type dataPesananItemMaxOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    note?: SortOrder
    productName?: SortOrder
    price?: SortOrder
    priceOriginal?: SortOrder
    quantity?: SortOrder
    methodPayment?: SortOrder
    image?: SortOrder
    slugProduct?: SortOrder
    merchantOrderId?: SortOrder
    status?: SortOrder
    noResi?: SortOrder
    dataPesananId?: SortOrder
  }

  export type dataPesananItemMinOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    note?: SortOrder
    productName?: SortOrder
    price?: SortOrder
    priceOriginal?: SortOrder
    quantity?: SortOrder
    methodPayment?: SortOrder
    image?: SortOrder
    slugProduct?: SortOrder
    merchantOrderId?: SortOrder
    status?: SortOrder
    noResi?: SortOrder
    dataPesananId?: SortOrder
  }

  export type dataPesananItemSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    priceOriginal?: SortOrder
    quantity?: SortOrder
    dataPesananId?: SortOrder
  }

  export type DataPesananItemListRelationFilter = {
    every?: dataPesananItemWhereInput
    some?: dataPesananItemWhereInput
    none?: dataPesananItemWhereInput
  }

  export type dataPesananItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type dataPesananCountOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    payment?: SortOrder
    reference?: SortOrder
    merchantOrderId?: SortOrder
    cartID?: SortOrder
  }

  export type dataPesananAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type dataPesananMaxOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    payment?: SortOrder
    reference?: SortOrder
    merchantOrderId?: SortOrder
    cartID?: SortOrder
  }

  export type dataPesananMinOrderByAggregateInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    payment?: SortOrder
    reference?: SortOrder
    merchantOrderId?: SortOrder
    cartID?: SortOrder
  }

  export type dataPesananSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type listProductCreateNestedManyWithoutUserInput = {
    create?: XOR<listProductCreateWithoutUserInput, listProductUncheckedCreateWithoutUserInput> | listProductCreateWithoutUserInput[] | listProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: listProductCreateOrConnectWithoutUserInput | listProductCreateOrConnectWithoutUserInput[]
    createMany?: listProductCreateManyUserInputEnvelope
    connect?: listProductWhereUniqueInput | listProductWhereUniqueInput[]
  }

  export type listProductUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<listProductCreateWithoutUserInput, listProductUncheckedCreateWithoutUserInput> | listProductCreateWithoutUserInput[] | listProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: listProductCreateOrConnectWithoutUserInput | listProductCreateOrConnectWithoutUserInput[]
    createMany?: listProductCreateManyUserInputEnvelope
    connect?: listProductWhereUniqueInput | listProductWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type listProductUpdateManyWithoutUserNestedInput = {
    create?: XOR<listProductCreateWithoutUserInput, listProductUncheckedCreateWithoutUserInput> | listProductCreateWithoutUserInput[] | listProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: listProductCreateOrConnectWithoutUserInput | listProductCreateOrConnectWithoutUserInput[]
    upsert?: listProductUpsertWithWhereUniqueWithoutUserInput | listProductUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: listProductCreateManyUserInputEnvelope
    set?: listProductWhereUniqueInput | listProductWhereUniqueInput[]
    disconnect?: listProductWhereUniqueInput | listProductWhereUniqueInput[]
    delete?: listProductWhereUniqueInput | listProductWhereUniqueInput[]
    connect?: listProductWhereUniqueInput | listProductWhereUniqueInput[]
    update?: listProductUpdateWithWhereUniqueWithoutUserInput | listProductUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: listProductUpdateManyWithWhereWithoutUserInput | listProductUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: listProductScalarWhereInput | listProductScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type listProductUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<listProductCreateWithoutUserInput, listProductUncheckedCreateWithoutUserInput> | listProductCreateWithoutUserInput[] | listProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: listProductCreateOrConnectWithoutUserInput | listProductCreateOrConnectWithoutUserInput[]
    upsert?: listProductUpsertWithWhereUniqueWithoutUserInput | listProductUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: listProductCreateManyUserInputEnvelope
    set?: listProductWhereUniqueInput | listProductWhereUniqueInput[]
    disconnect?: listProductWhereUniqueInput | listProductWhereUniqueInput[]
    delete?: listProductWhereUniqueInput | listProductWhereUniqueInput[]
    connect?: listProductWhereUniqueInput | listProductWhereUniqueInput[]
    update?: listProductUpdateWithWhereUniqueWithoutUserInput | listProductUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: listProductUpdateManyWithWhereWithoutUserInput | listProductUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: listProductScalarWhereInput | listProductScalarWhereInput[]
  }

  export type categoryProductCreateNestedOneWithoutListProductsInput = {
    create?: XOR<categoryProductCreateWithoutListProductsInput, categoryProductUncheckedCreateWithoutListProductsInput>
    connectOrCreate?: categoryProductCreateOrConnectWithoutListProductsInput
    connect?: categoryProductWhereUniqueInput
  }

  export type imageProductCreateNestedManyWithoutUserInput = {
    create?: XOR<imageProductCreateWithoutUserInput, imageProductUncheckedCreateWithoutUserInput> | imageProductCreateWithoutUserInput[] | imageProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: imageProductCreateOrConnectWithoutUserInput | imageProductCreateOrConnectWithoutUserInput[]
    createMany?: imageProductCreateManyUserInputEnvelope
    connect?: imageProductWhereUniqueInput | imageProductWhereUniqueInput[]
  }

  export type specProductCreateNestedOneWithoutUserInput = {
    create?: XOR<specProductCreateWithoutUserInput, specProductUncheckedCreateWithoutUserInput>
    connectOrCreate?: specProductCreateOrConnectWithoutUserInput
    connect?: specProductWhereUniqueInput
  }

  export type cartItemCreateNestedManyWithoutProductInput = {
    create?: XOR<cartItemCreateWithoutProductInput, cartItemUncheckedCreateWithoutProductInput> | cartItemCreateWithoutProductInput[] | cartItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: cartItemCreateOrConnectWithoutProductInput | cartItemCreateOrConnectWithoutProductInput[]
    createMany?: cartItemCreateManyProductInputEnvelope
    connect?: cartItemWhereUniqueInput | cartItemWhereUniqueInput[]
  }

  export type imageProductUtamaCreateNestedOneWithoutUserInput = {
    create?: XOR<imageProductUtamaCreateWithoutUserInput, imageProductUtamaUncheckedCreateWithoutUserInput>
    connectOrCreate?: imageProductUtamaCreateOrConnectWithoutUserInput
    connect?: imageProductUtamaWhereUniqueInput
  }

  export type imageProductUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<imageProductCreateWithoutUserInput, imageProductUncheckedCreateWithoutUserInput> | imageProductCreateWithoutUserInput[] | imageProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: imageProductCreateOrConnectWithoutUserInput | imageProductCreateOrConnectWithoutUserInput[]
    createMany?: imageProductCreateManyUserInputEnvelope
    connect?: imageProductWhereUniqueInput | imageProductWhereUniqueInput[]
  }

  export type specProductUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<specProductCreateWithoutUserInput, specProductUncheckedCreateWithoutUserInput>
    connectOrCreate?: specProductCreateOrConnectWithoutUserInput
    connect?: specProductWhereUniqueInput
  }

  export type cartItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<cartItemCreateWithoutProductInput, cartItemUncheckedCreateWithoutProductInput> | cartItemCreateWithoutProductInput[] | cartItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: cartItemCreateOrConnectWithoutProductInput | cartItemCreateOrConnectWithoutProductInput[]
    createMany?: cartItemCreateManyProductInputEnvelope
    connect?: cartItemWhereUniqueInput | cartItemWhereUniqueInput[]
  }

  export type imageProductUtamaUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<imageProductUtamaCreateWithoutUserInput, imageProductUtamaUncheckedCreateWithoutUserInput>
    connectOrCreate?: imageProductUtamaCreateOrConnectWithoutUserInput
    connect?: imageProductUtamaWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type categoryProductUpdateOneRequiredWithoutListProductsNestedInput = {
    create?: XOR<categoryProductCreateWithoutListProductsInput, categoryProductUncheckedCreateWithoutListProductsInput>
    connectOrCreate?: categoryProductCreateOrConnectWithoutListProductsInput
    upsert?: categoryProductUpsertWithoutListProductsInput
    connect?: categoryProductWhereUniqueInput
    update?: XOR<XOR<categoryProductUpdateToOneWithWhereWithoutListProductsInput, categoryProductUpdateWithoutListProductsInput>, categoryProductUncheckedUpdateWithoutListProductsInput>
  }

  export type imageProductUpdateManyWithoutUserNestedInput = {
    create?: XOR<imageProductCreateWithoutUserInput, imageProductUncheckedCreateWithoutUserInput> | imageProductCreateWithoutUserInput[] | imageProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: imageProductCreateOrConnectWithoutUserInput | imageProductCreateOrConnectWithoutUserInput[]
    upsert?: imageProductUpsertWithWhereUniqueWithoutUserInput | imageProductUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: imageProductCreateManyUserInputEnvelope
    set?: imageProductWhereUniqueInput | imageProductWhereUniqueInput[]
    disconnect?: imageProductWhereUniqueInput | imageProductWhereUniqueInput[]
    delete?: imageProductWhereUniqueInput | imageProductWhereUniqueInput[]
    connect?: imageProductWhereUniqueInput | imageProductWhereUniqueInput[]
    update?: imageProductUpdateWithWhereUniqueWithoutUserInput | imageProductUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: imageProductUpdateManyWithWhereWithoutUserInput | imageProductUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: imageProductScalarWhereInput | imageProductScalarWhereInput[]
  }

  export type specProductUpdateOneWithoutUserNestedInput = {
    create?: XOR<specProductCreateWithoutUserInput, specProductUncheckedCreateWithoutUserInput>
    connectOrCreate?: specProductCreateOrConnectWithoutUserInput
    upsert?: specProductUpsertWithoutUserInput
    disconnect?: specProductWhereInput | boolean
    delete?: specProductWhereInput | boolean
    connect?: specProductWhereUniqueInput
    update?: XOR<XOR<specProductUpdateToOneWithWhereWithoutUserInput, specProductUpdateWithoutUserInput>, specProductUncheckedUpdateWithoutUserInput>
  }

  export type cartItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<cartItemCreateWithoutProductInput, cartItemUncheckedCreateWithoutProductInput> | cartItemCreateWithoutProductInput[] | cartItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: cartItemCreateOrConnectWithoutProductInput | cartItemCreateOrConnectWithoutProductInput[]
    upsert?: cartItemUpsertWithWhereUniqueWithoutProductInput | cartItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: cartItemCreateManyProductInputEnvelope
    set?: cartItemWhereUniqueInput | cartItemWhereUniqueInput[]
    disconnect?: cartItemWhereUniqueInput | cartItemWhereUniqueInput[]
    delete?: cartItemWhereUniqueInput | cartItemWhereUniqueInput[]
    connect?: cartItemWhereUniqueInput | cartItemWhereUniqueInput[]
    update?: cartItemUpdateWithWhereUniqueWithoutProductInput | cartItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: cartItemUpdateManyWithWhereWithoutProductInput | cartItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: cartItemScalarWhereInput | cartItemScalarWhereInput[]
  }

  export type imageProductUtamaUpdateOneWithoutUserNestedInput = {
    create?: XOR<imageProductUtamaCreateWithoutUserInput, imageProductUtamaUncheckedCreateWithoutUserInput>
    connectOrCreate?: imageProductUtamaCreateOrConnectWithoutUserInput
    upsert?: imageProductUtamaUpsertWithoutUserInput
    disconnect?: imageProductUtamaWhereInput | boolean
    delete?: imageProductUtamaWhereInput | boolean
    connect?: imageProductUtamaWhereUniqueInput
    update?: XOR<XOR<imageProductUtamaUpdateToOneWithWhereWithoutUserInput, imageProductUtamaUpdateWithoutUserInput>, imageProductUtamaUncheckedUpdateWithoutUserInput>
  }

  export type imageProductUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<imageProductCreateWithoutUserInput, imageProductUncheckedCreateWithoutUserInput> | imageProductCreateWithoutUserInput[] | imageProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: imageProductCreateOrConnectWithoutUserInput | imageProductCreateOrConnectWithoutUserInput[]
    upsert?: imageProductUpsertWithWhereUniqueWithoutUserInput | imageProductUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: imageProductCreateManyUserInputEnvelope
    set?: imageProductWhereUniqueInput | imageProductWhereUniqueInput[]
    disconnect?: imageProductWhereUniqueInput | imageProductWhereUniqueInput[]
    delete?: imageProductWhereUniqueInput | imageProductWhereUniqueInput[]
    connect?: imageProductWhereUniqueInput | imageProductWhereUniqueInput[]
    update?: imageProductUpdateWithWhereUniqueWithoutUserInput | imageProductUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: imageProductUpdateManyWithWhereWithoutUserInput | imageProductUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: imageProductScalarWhereInput | imageProductScalarWhereInput[]
  }

  export type specProductUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<specProductCreateWithoutUserInput, specProductUncheckedCreateWithoutUserInput>
    connectOrCreate?: specProductCreateOrConnectWithoutUserInput
    upsert?: specProductUpsertWithoutUserInput
    disconnect?: specProductWhereInput | boolean
    delete?: specProductWhereInput | boolean
    connect?: specProductWhereUniqueInput
    update?: XOR<XOR<specProductUpdateToOneWithWhereWithoutUserInput, specProductUpdateWithoutUserInput>, specProductUncheckedUpdateWithoutUserInput>
  }

  export type cartItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<cartItemCreateWithoutProductInput, cartItemUncheckedCreateWithoutProductInput> | cartItemCreateWithoutProductInput[] | cartItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: cartItemCreateOrConnectWithoutProductInput | cartItemCreateOrConnectWithoutProductInput[]
    upsert?: cartItemUpsertWithWhereUniqueWithoutProductInput | cartItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: cartItemCreateManyProductInputEnvelope
    set?: cartItemWhereUniqueInput | cartItemWhereUniqueInput[]
    disconnect?: cartItemWhereUniqueInput | cartItemWhereUniqueInput[]
    delete?: cartItemWhereUniqueInput | cartItemWhereUniqueInput[]
    connect?: cartItemWhereUniqueInput | cartItemWhereUniqueInput[]
    update?: cartItemUpdateWithWhereUniqueWithoutProductInput | cartItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: cartItemUpdateManyWithWhereWithoutProductInput | cartItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: cartItemScalarWhereInput | cartItemScalarWhereInput[]
  }

  export type imageProductUtamaUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<imageProductUtamaCreateWithoutUserInput, imageProductUtamaUncheckedCreateWithoutUserInput>
    connectOrCreate?: imageProductUtamaCreateOrConnectWithoutUserInput
    upsert?: imageProductUtamaUpsertWithoutUserInput
    disconnect?: imageProductUtamaWhereInput | boolean
    delete?: imageProductUtamaWhereInput | boolean
    connect?: imageProductUtamaWhereUniqueInput
    update?: XOR<XOR<imageProductUtamaUpdateToOneWithWhereWithoutUserInput, imageProductUtamaUpdateWithoutUserInput>, imageProductUtamaUncheckedUpdateWithoutUserInput>
  }

  export type listProductCreateNestedOneWithoutSpec_productInput = {
    create?: XOR<listProductCreateWithoutSpec_productInput, listProductUncheckedCreateWithoutSpec_productInput>
    connectOrCreate?: listProductCreateOrConnectWithoutSpec_productInput
    connect?: listProductWhereUniqueInput
  }

  export type listProductUpdateOneRequiredWithoutSpec_productNestedInput = {
    create?: XOR<listProductCreateWithoutSpec_productInput, listProductUncheckedCreateWithoutSpec_productInput>
    connectOrCreate?: listProductCreateOrConnectWithoutSpec_productInput
    upsert?: listProductUpsertWithoutSpec_productInput
    connect?: listProductWhereUniqueInput
    update?: XOR<XOR<listProductUpdateToOneWithWhereWithoutSpec_productInput, listProductUpdateWithoutSpec_productInput>, listProductUncheckedUpdateWithoutSpec_productInput>
  }

  export type listProductCreateNestedOneWithoutImageProductUtamaInput = {
    create?: XOR<listProductCreateWithoutImageProductUtamaInput, listProductUncheckedCreateWithoutImageProductUtamaInput>
    connectOrCreate?: listProductCreateOrConnectWithoutImageProductUtamaInput
    connect?: listProductWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type listProductUpdateOneRequiredWithoutImageProductUtamaNestedInput = {
    create?: XOR<listProductCreateWithoutImageProductUtamaInput, listProductUncheckedCreateWithoutImageProductUtamaInput>
    connectOrCreate?: listProductCreateOrConnectWithoutImageProductUtamaInput
    upsert?: listProductUpsertWithoutImageProductUtamaInput
    connect?: listProductWhereUniqueInput
    update?: XOR<XOR<listProductUpdateToOneWithWhereWithoutImageProductUtamaInput, listProductUpdateWithoutImageProductUtamaInput>, listProductUncheckedUpdateWithoutImageProductUtamaInput>
  }

  export type listProductCreateNestedOneWithoutUrl_image_productInput = {
    create?: XOR<listProductCreateWithoutUrl_image_productInput, listProductUncheckedCreateWithoutUrl_image_productInput>
    connectOrCreate?: listProductCreateOrConnectWithoutUrl_image_productInput
    connect?: listProductWhereUniqueInput
  }

  export type listProductUpdateOneRequiredWithoutUrl_image_productNestedInput = {
    create?: XOR<listProductCreateWithoutUrl_image_productInput, listProductUncheckedCreateWithoutUrl_image_productInput>
    connectOrCreate?: listProductCreateOrConnectWithoutUrl_image_productInput
    upsert?: listProductUpsertWithoutUrl_image_productInput
    connect?: listProductWhereUniqueInput
    update?: XOR<XOR<listProductUpdateToOneWithWhereWithoutUrl_image_productInput, listProductUpdateWithoutUrl_image_productInput>, listProductUncheckedUpdateWithoutUrl_image_productInput>
  }

  export type imageProductArtikelCreateNestedManyWithoutUserdInput = {
    create?: XOR<imageProductArtikelCreateWithoutUserdInput, imageProductArtikelUncheckedCreateWithoutUserdInput> | imageProductArtikelCreateWithoutUserdInput[] | imageProductArtikelUncheckedCreateWithoutUserdInput[]
    connectOrCreate?: imageProductArtikelCreateOrConnectWithoutUserdInput | imageProductArtikelCreateOrConnectWithoutUserdInput[]
    createMany?: imageProductArtikelCreateManyUserdInputEnvelope
    connect?: imageProductArtikelWhereUniqueInput | imageProductArtikelWhereUniqueInput[]
  }

  export type categoryArtikelCreateNestedOneWithoutPostArtikelInput = {
    create?: XOR<categoryArtikelCreateWithoutPostArtikelInput, categoryArtikelUncheckedCreateWithoutPostArtikelInput>
    connectOrCreate?: categoryArtikelCreateOrConnectWithoutPostArtikelInput
    connect?: categoryArtikelWhereUniqueInput
  }

  export type imageProductArtikelUncheckedCreateNestedManyWithoutUserdInput = {
    create?: XOR<imageProductArtikelCreateWithoutUserdInput, imageProductArtikelUncheckedCreateWithoutUserdInput> | imageProductArtikelCreateWithoutUserdInput[] | imageProductArtikelUncheckedCreateWithoutUserdInput[]
    connectOrCreate?: imageProductArtikelCreateOrConnectWithoutUserdInput | imageProductArtikelCreateOrConnectWithoutUserdInput[]
    createMany?: imageProductArtikelCreateManyUserdInputEnvelope
    connect?: imageProductArtikelWhereUniqueInput | imageProductArtikelWhereUniqueInput[]
  }

  export type imageProductArtikelUpdateManyWithoutUserdNestedInput = {
    create?: XOR<imageProductArtikelCreateWithoutUserdInput, imageProductArtikelUncheckedCreateWithoutUserdInput> | imageProductArtikelCreateWithoutUserdInput[] | imageProductArtikelUncheckedCreateWithoutUserdInput[]
    connectOrCreate?: imageProductArtikelCreateOrConnectWithoutUserdInput | imageProductArtikelCreateOrConnectWithoutUserdInput[]
    upsert?: imageProductArtikelUpsertWithWhereUniqueWithoutUserdInput | imageProductArtikelUpsertWithWhereUniqueWithoutUserdInput[]
    createMany?: imageProductArtikelCreateManyUserdInputEnvelope
    set?: imageProductArtikelWhereUniqueInput | imageProductArtikelWhereUniqueInput[]
    disconnect?: imageProductArtikelWhereUniqueInput | imageProductArtikelWhereUniqueInput[]
    delete?: imageProductArtikelWhereUniqueInput | imageProductArtikelWhereUniqueInput[]
    connect?: imageProductArtikelWhereUniqueInput | imageProductArtikelWhereUniqueInput[]
    update?: imageProductArtikelUpdateWithWhereUniqueWithoutUserdInput | imageProductArtikelUpdateWithWhereUniqueWithoutUserdInput[]
    updateMany?: imageProductArtikelUpdateManyWithWhereWithoutUserdInput | imageProductArtikelUpdateManyWithWhereWithoutUserdInput[]
    deleteMany?: imageProductArtikelScalarWhereInput | imageProductArtikelScalarWhereInput[]
  }

  export type categoryArtikelUpdateOneRequiredWithoutPostArtikelNestedInput = {
    create?: XOR<categoryArtikelCreateWithoutPostArtikelInput, categoryArtikelUncheckedCreateWithoutPostArtikelInput>
    connectOrCreate?: categoryArtikelCreateOrConnectWithoutPostArtikelInput
    upsert?: categoryArtikelUpsertWithoutPostArtikelInput
    connect?: categoryArtikelWhereUniqueInput
    update?: XOR<XOR<categoryArtikelUpdateToOneWithWhereWithoutPostArtikelInput, categoryArtikelUpdateWithoutPostArtikelInput>, categoryArtikelUncheckedUpdateWithoutPostArtikelInput>
  }

  export type imageProductArtikelUncheckedUpdateManyWithoutUserdNestedInput = {
    create?: XOR<imageProductArtikelCreateWithoutUserdInput, imageProductArtikelUncheckedCreateWithoutUserdInput> | imageProductArtikelCreateWithoutUserdInput[] | imageProductArtikelUncheckedCreateWithoutUserdInput[]
    connectOrCreate?: imageProductArtikelCreateOrConnectWithoutUserdInput | imageProductArtikelCreateOrConnectWithoutUserdInput[]
    upsert?: imageProductArtikelUpsertWithWhereUniqueWithoutUserdInput | imageProductArtikelUpsertWithWhereUniqueWithoutUserdInput[]
    createMany?: imageProductArtikelCreateManyUserdInputEnvelope
    set?: imageProductArtikelWhereUniqueInput | imageProductArtikelWhereUniqueInput[]
    disconnect?: imageProductArtikelWhereUniqueInput | imageProductArtikelWhereUniqueInput[]
    delete?: imageProductArtikelWhereUniqueInput | imageProductArtikelWhereUniqueInput[]
    connect?: imageProductArtikelWhereUniqueInput | imageProductArtikelWhereUniqueInput[]
    update?: imageProductArtikelUpdateWithWhereUniqueWithoutUserdInput | imageProductArtikelUpdateWithWhereUniqueWithoutUserdInput[]
    updateMany?: imageProductArtikelUpdateManyWithWhereWithoutUserdInput | imageProductArtikelUpdateManyWithWhereWithoutUserdInput[]
    deleteMany?: imageProductArtikelScalarWhereInput | imageProductArtikelScalarWhereInput[]
  }

  export type postArtikelCreateNestedOneWithoutImageProductArtikelInput = {
    create?: XOR<postArtikelCreateWithoutImageProductArtikelInput, postArtikelUncheckedCreateWithoutImageProductArtikelInput>
    connectOrCreate?: postArtikelCreateOrConnectWithoutImageProductArtikelInput
    connect?: postArtikelWhereUniqueInput
  }

  export type postArtikelUpdateOneRequiredWithoutImageProductArtikelNestedInput = {
    create?: XOR<postArtikelCreateWithoutImageProductArtikelInput, postArtikelUncheckedCreateWithoutImageProductArtikelInput>
    connectOrCreate?: postArtikelCreateOrConnectWithoutImageProductArtikelInput
    upsert?: postArtikelUpsertWithoutImageProductArtikelInput
    connect?: postArtikelWhereUniqueInput
    update?: XOR<XOR<postArtikelUpdateToOneWithWhereWithoutImageProductArtikelInput, postArtikelUpdateWithoutImageProductArtikelInput>, postArtikelUncheckedUpdateWithoutImageProductArtikelInput>
  }

  export type postArtikelCreateNestedManyWithoutCategoryArtikelInput = {
    create?: XOR<postArtikelCreateWithoutCategoryArtikelInput, postArtikelUncheckedCreateWithoutCategoryArtikelInput> | postArtikelCreateWithoutCategoryArtikelInput[] | postArtikelUncheckedCreateWithoutCategoryArtikelInput[]
    connectOrCreate?: postArtikelCreateOrConnectWithoutCategoryArtikelInput | postArtikelCreateOrConnectWithoutCategoryArtikelInput[]
    createMany?: postArtikelCreateManyCategoryArtikelInputEnvelope
    connect?: postArtikelWhereUniqueInput | postArtikelWhereUniqueInput[]
  }

  export type postArtikelUncheckedCreateNestedManyWithoutCategoryArtikelInput = {
    create?: XOR<postArtikelCreateWithoutCategoryArtikelInput, postArtikelUncheckedCreateWithoutCategoryArtikelInput> | postArtikelCreateWithoutCategoryArtikelInput[] | postArtikelUncheckedCreateWithoutCategoryArtikelInput[]
    connectOrCreate?: postArtikelCreateOrConnectWithoutCategoryArtikelInput | postArtikelCreateOrConnectWithoutCategoryArtikelInput[]
    createMany?: postArtikelCreateManyCategoryArtikelInputEnvelope
    connect?: postArtikelWhereUniqueInput | postArtikelWhereUniqueInput[]
  }

  export type postArtikelUpdateManyWithoutCategoryArtikelNestedInput = {
    create?: XOR<postArtikelCreateWithoutCategoryArtikelInput, postArtikelUncheckedCreateWithoutCategoryArtikelInput> | postArtikelCreateWithoutCategoryArtikelInput[] | postArtikelUncheckedCreateWithoutCategoryArtikelInput[]
    connectOrCreate?: postArtikelCreateOrConnectWithoutCategoryArtikelInput | postArtikelCreateOrConnectWithoutCategoryArtikelInput[]
    upsert?: postArtikelUpsertWithWhereUniqueWithoutCategoryArtikelInput | postArtikelUpsertWithWhereUniqueWithoutCategoryArtikelInput[]
    createMany?: postArtikelCreateManyCategoryArtikelInputEnvelope
    set?: postArtikelWhereUniqueInput | postArtikelWhereUniqueInput[]
    disconnect?: postArtikelWhereUniqueInput | postArtikelWhereUniqueInput[]
    delete?: postArtikelWhereUniqueInput | postArtikelWhereUniqueInput[]
    connect?: postArtikelWhereUniqueInput | postArtikelWhereUniqueInput[]
    update?: postArtikelUpdateWithWhereUniqueWithoutCategoryArtikelInput | postArtikelUpdateWithWhereUniqueWithoutCategoryArtikelInput[]
    updateMany?: postArtikelUpdateManyWithWhereWithoutCategoryArtikelInput | postArtikelUpdateManyWithWhereWithoutCategoryArtikelInput[]
    deleteMany?: postArtikelScalarWhereInput | postArtikelScalarWhereInput[]
  }

  export type postArtikelUncheckedUpdateManyWithoutCategoryArtikelNestedInput = {
    create?: XOR<postArtikelCreateWithoutCategoryArtikelInput, postArtikelUncheckedCreateWithoutCategoryArtikelInput> | postArtikelCreateWithoutCategoryArtikelInput[] | postArtikelUncheckedCreateWithoutCategoryArtikelInput[]
    connectOrCreate?: postArtikelCreateOrConnectWithoutCategoryArtikelInput | postArtikelCreateOrConnectWithoutCategoryArtikelInput[]
    upsert?: postArtikelUpsertWithWhereUniqueWithoutCategoryArtikelInput | postArtikelUpsertWithWhereUniqueWithoutCategoryArtikelInput[]
    createMany?: postArtikelCreateManyCategoryArtikelInputEnvelope
    set?: postArtikelWhereUniqueInput | postArtikelWhereUniqueInput[]
    disconnect?: postArtikelWhereUniqueInput | postArtikelWhereUniqueInput[]
    delete?: postArtikelWhereUniqueInput | postArtikelWhereUniqueInput[]
    connect?: postArtikelWhereUniqueInput | postArtikelWhereUniqueInput[]
    update?: postArtikelUpdateWithWhereUniqueWithoutCategoryArtikelInput | postArtikelUpdateWithWhereUniqueWithoutCategoryArtikelInput[]
    updateMany?: postArtikelUpdateManyWithWhereWithoutCategoryArtikelInput | postArtikelUpdateManyWithWhereWithoutCategoryArtikelInput[]
    deleteMany?: postArtikelScalarWhereInput | postArtikelScalarWhereInput[]
  }

  export type cartItemCreateNestedManyWithoutCartInput = {
    create?: XOR<cartItemCreateWithoutCartInput, cartItemUncheckedCreateWithoutCartInput> | cartItemCreateWithoutCartInput[] | cartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: cartItemCreateOrConnectWithoutCartInput | cartItemCreateOrConnectWithoutCartInput[]
    createMany?: cartItemCreateManyCartInputEnvelope
    connect?: cartItemWhereUniqueInput | cartItemWhereUniqueInput[]
  }

  export type formPembelianCreateNestedOneWithoutUserInput = {
    create?: XOR<formPembelianCreateWithoutUserInput, formPembelianUncheckedCreateWithoutUserInput>
    connectOrCreate?: formPembelianCreateOrConnectWithoutUserInput
    connect?: formPembelianWhereUniqueInput
  }

  export type dataPesananCreateNestedManyWithoutCartInput = {
    create?: XOR<dataPesananCreateWithoutCartInput, dataPesananUncheckedCreateWithoutCartInput> | dataPesananCreateWithoutCartInput[] | dataPesananUncheckedCreateWithoutCartInput[]
    connectOrCreate?: dataPesananCreateOrConnectWithoutCartInput | dataPesananCreateOrConnectWithoutCartInput[]
    createMany?: dataPesananCreateManyCartInputEnvelope
    connect?: dataPesananWhereUniqueInput | dataPesananWhereUniqueInput[]
  }

  export type ongkosKirimCreateNestedOneWithoutUserInput = {
    create?: XOR<ongkosKirimCreateWithoutUserInput, ongkosKirimUncheckedCreateWithoutUserInput>
    connectOrCreate?: ongkosKirimCreateOrConnectWithoutUserInput
    connect?: ongkosKirimWhereUniqueInput
  }

  export type cartItemUncheckedCreateNestedManyWithoutCartInput = {
    create?: XOR<cartItemCreateWithoutCartInput, cartItemUncheckedCreateWithoutCartInput> | cartItemCreateWithoutCartInput[] | cartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: cartItemCreateOrConnectWithoutCartInput | cartItemCreateOrConnectWithoutCartInput[]
    createMany?: cartItemCreateManyCartInputEnvelope
    connect?: cartItemWhereUniqueInput | cartItemWhereUniqueInput[]
  }

  export type formPembelianUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<formPembelianCreateWithoutUserInput, formPembelianUncheckedCreateWithoutUserInput>
    connectOrCreate?: formPembelianCreateOrConnectWithoutUserInput
    connect?: formPembelianWhereUniqueInput
  }

  export type dataPesananUncheckedCreateNestedManyWithoutCartInput = {
    create?: XOR<dataPesananCreateWithoutCartInput, dataPesananUncheckedCreateWithoutCartInput> | dataPesananCreateWithoutCartInput[] | dataPesananUncheckedCreateWithoutCartInput[]
    connectOrCreate?: dataPesananCreateOrConnectWithoutCartInput | dataPesananCreateOrConnectWithoutCartInput[]
    createMany?: dataPesananCreateManyCartInputEnvelope
    connect?: dataPesananWhereUniqueInput | dataPesananWhereUniqueInput[]
  }

  export type ongkosKirimUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<ongkosKirimCreateWithoutUserInput, ongkosKirimUncheckedCreateWithoutUserInput>
    connectOrCreate?: ongkosKirimCreateOrConnectWithoutUserInput
    connect?: ongkosKirimWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type cartItemUpdateManyWithoutCartNestedInput = {
    create?: XOR<cartItemCreateWithoutCartInput, cartItemUncheckedCreateWithoutCartInput> | cartItemCreateWithoutCartInput[] | cartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: cartItemCreateOrConnectWithoutCartInput | cartItemCreateOrConnectWithoutCartInput[]
    upsert?: cartItemUpsertWithWhereUniqueWithoutCartInput | cartItemUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: cartItemCreateManyCartInputEnvelope
    set?: cartItemWhereUniqueInput | cartItemWhereUniqueInput[]
    disconnect?: cartItemWhereUniqueInput | cartItemWhereUniqueInput[]
    delete?: cartItemWhereUniqueInput | cartItemWhereUniqueInput[]
    connect?: cartItemWhereUniqueInput | cartItemWhereUniqueInput[]
    update?: cartItemUpdateWithWhereUniqueWithoutCartInput | cartItemUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: cartItemUpdateManyWithWhereWithoutCartInput | cartItemUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: cartItemScalarWhereInput | cartItemScalarWhereInput[]
  }

  export type formPembelianUpdateOneWithoutUserNestedInput = {
    create?: XOR<formPembelianCreateWithoutUserInput, formPembelianUncheckedCreateWithoutUserInput>
    connectOrCreate?: formPembelianCreateOrConnectWithoutUserInput
    upsert?: formPembelianUpsertWithoutUserInput
    disconnect?: formPembelianWhereInput | boolean
    delete?: formPembelianWhereInput | boolean
    connect?: formPembelianWhereUniqueInput
    update?: XOR<XOR<formPembelianUpdateToOneWithWhereWithoutUserInput, formPembelianUpdateWithoutUserInput>, formPembelianUncheckedUpdateWithoutUserInput>
  }

  export type dataPesananUpdateManyWithoutCartNestedInput = {
    create?: XOR<dataPesananCreateWithoutCartInput, dataPesananUncheckedCreateWithoutCartInput> | dataPesananCreateWithoutCartInput[] | dataPesananUncheckedCreateWithoutCartInput[]
    connectOrCreate?: dataPesananCreateOrConnectWithoutCartInput | dataPesananCreateOrConnectWithoutCartInput[]
    upsert?: dataPesananUpsertWithWhereUniqueWithoutCartInput | dataPesananUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: dataPesananCreateManyCartInputEnvelope
    set?: dataPesananWhereUniqueInput | dataPesananWhereUniqueInput[]
    disconnect?: dataPesananWhereUniqueInput | dataPesananWhereUniqueInput[]
    delete?: dataPesananWhereUniqueInput | dataPesananWhereUniqueInput[]
    connect?: dataPesananWhereUniqueInput | dataPesananWhereUniqueInput[]
    update?: dataPesananUpdateWithWhereUniqueWithoutCartInput | dataPesananUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: dataPesananUpdateManyWithWhereWithoutCartInput | dataPesananUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: dataPesananScalarWhereInput | dataPesananScalarWhereInput[]
  }

  export type ongkosKirimUpdateOneWithoutUserNestedInput = {
    create?: XOR<ongkosKirimCreateWithoutUserInput, ongkosKirimUncheckedCreateWithoutUserInput>
    connectOrCreate?: ongkosKirimCreateOrConnectWithoutUserInput
    upsert?: ongkosKirimUpsertWithoutUserInput
    disconnect?: ongkosKirimWhereInput | boolean
    delete?: ongkosKirimWhereInput | boolean
    connect?: ongkosKirimWhereUniqueInput
    update?: XOR<XOR<ongkosKirimUpdateToOneWithWhereWithoutUserInput, ongkosKirimUpdateWithoutUserInput>, ongkosKirimUncheckedUpdateWithoutUserInput>
  }

  export type cartItemUncheckedUpdateManyWithoutCartNestedInput = {
    create?: XOR<cartItemCreateWithoutCartInput, cartItemUncheckedCreateWithoutCartInput> | cartItemCreateWithoutCartInput[] | cartItemUncheckedCreateWithoutCartInput[]
    connectOrCreate?: cartItemCreateOrConnectWithoutCartInput | cartItemCreateOrConnectWithoutCartInput[]
    upsert?: cartItemUpsertWithWhereUniqueWithoutCartInput | cartItemUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: cartItemCreateManyCartInputEnvelope
    set?: cartItemWhereUniqueInput | cartItemWhereUniqueInput[]
    disconnect?: cartItemWhereUniqueInput | cartItemWhereUniqueInput[]
    delete?: cartItemWhereUniqueInput | cartItemWhereUniqueInput[]
    connect?: cartItemWhereUniqueInput | cartItemWhereUniqueInput[]
    update?: cartItemUpdateWithWhereUniqueWithoutCartInput | cartItemUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: cartItemUpdateManyWithWhereWithoutCartInput | cartItemUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: cartItemScalarWhereInput | cartItemScalarWhereInput[]
  }

  export type formPembelianUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<formPembelianCreateWithoutUserInput, formPembelianUncheckedCreateWithoutUserInput>
    connectOrCreate?: formPembelianCreateOrConnectWithoutUserInput
    upsert?: formPembelianUpsertWithoutUserInput
    disconnect?: formPembelianWhereInput | boolean
    delete?: formPembelianWhereInput | boolean
    connect?: formPembelianWhereUniqueInput
    update?: XOR<XOR<formPembelianUpdateToOneWithWhereWithoutUserInput, formPembelianUpdateWithoutUserInput>, formPembelianUncheckedUpdateWithoutUserInput>
  }

  export type dataPesananUncheckedUpdateManyWithoutCartNestedInput = {
    create?: XOR<dataPesananCreateWithoutCartInput, dataPesananUncheckedCreateWithoutCartInput> | dataPesananCreateWithoutCartInput[] | dataPesananUncheckedCreateWithoutCartInput[]
    connectOrCreate?: dataPesananCreateOrConnectWithoutCartInput | dataPesananCreateOrConnectWithoutCartInput[]
    upsert?: dataPesananUpsertWithWhereUniqueWithoutCartInput | dataPesananUpsertWithWhereUniqueWithoutCartInput[]
    createMany?: dataPesananCreateManyCartInputEnvelope
    set?: dataPesananWhereUniqueInput | dataPesananWhereUniqueInput[]
    disconnect?: dataPesananWhereUniqueInput | dataPesananWhereUniqueInput[]
    delete?: dataPesananWhereUniqueInput | dataPesananWhereUniqueInput[]
    connect?: dataPesananWhereUniqueInput | dataPesananWhereUniqueInput[]
    update?: dataPesananUpdateWithWhereUniqueWithoutCartInput | dataPesananUpdateWithWhereUniqueWithoutCartInput[]
    updateMany?: dataPesananUpdateManyWithWhereWithoutCartInput | dataPesananUpdateManyWithWhereWithoutCartInput[]
    deleteMany?: dataPesananScalarWhereInput | dataPesananScalarWhereInput[]
  }

  export type ongkosKirimUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<ongkosKirimCreateWithoutUserInput, ongkosKirimUncheckedCreateWithoutUserInput>
    connectOrCreate?: ongkosKirimCreateOrConnectWithoutUserInput
    upsert?: ongkosKirimUpsertWithoutUserInput
    disconnect?: ongkosKirimWhereInput | boolean
    delete?: ongkosKirimWhereInput | boolean
    connect?: ongkosKirimWhereUniqueInput
    update?: XOR<XOR<ongkosKirimUpdateToOneWithWhereWithoutUserInput, ongkosKirimUpdateWithoutUserInput>, ongkosKirimUncheckedUpdateWithoutUserInput>
  }

  export type cartCreateNestedOneWithoutItemsInput = {
    create?: XOR<cartCreateWithoutItemsInput, cartUncheckedCreateWithoutItemsInput>
    connectOrCreate?: cartCreateOrConnectWithoutItemsInput
    connect?: cartWhereUniqueInput
  }

  export type listProductCreateNestedOneWithoutCartItemInput = {
    create?: XOR<listProductCreateWithoutCartItemInput, listProductUncheckedCreateWithoutCartItemInput>
    connectOrCreate?: listProductCreateOrConnectWithoutCartItemInput
    connect?: listProductWhereUniqueInput
  }

  export type cartUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<cartCreateWithoutItemsInput, cartUncheckedCreateWithoutItemsInput>
    connectOrCreate?: cartCreateOrConnectWithoutItemsInput
    upsert?: cartUpsertWithoutItemsInput
    connect?: cartWhereUniqueInput
    update?: XOR<XOR<cartUpdateToOneWithWhereWithoutItemsInput, cartUpdateWithoutItemsInput>, cartUncheckedUpdateWithoutItemsInput>
  }

  export type listProductUpdateOneRequiredWithoutCartItemNestedInput = {
    create?: XOR<listProductCreateWithoutCartItemInput, listProductUncheckedCreateWithoutCartItemInput>
    connectOrCreate?: listProductCreateOrConnectWithoutCartItemInput
    upsert?: listProductUpsertWithoutCartItemInput
    connect?: listProductWhereUniqueInput
    update?: XOR<XOR<listProductUpdateToOneWithWhereWithoutCartItemInput, listProductUpdateWithoutCartItemInput>, listProductUncheckedUpdateWithoutCartItemInput>
  }

  export type cartCreateNestedOneWithoutFormDataInput = {
    create?: XOR<cartCreateWithoutFormDataInput, cartUncheckedCreateWithoutFormDataInput>
    connectOrCreate?: cartCreateOrConnectWithoutFormDataInput
    connect?: cartWhereUniqueInput
  }

  export type cartUpdateOneRequiredWithoutFormDataNestedInput = {
    create?: XOR<cartCreateWithoutFormDataInput, cartUncheckedCreateWithoutFormDataInput>
    connectOrCreate?: cartCreateOrConnectWithoutFormDataInput
    upsert?: cartUpsertWithoutFormDataInput
    connect?: cartWhereUniqueInput
    update?: XOR<XOR<cartUpdateToOneWithWhereWithoutFormDataInput, cartUpdateWithoutFormDataInput>, cartUncheckedUpdateWithoutFormDataInput>
  }

  export type cartCreateNestedOneWithoutOngkosKirimInput = {
    create?: XOR<cartCreateWithoutOngkosKirimInput, cartUncheckedCreateWithoutOngkosKirimInput>
    connectOrCreate?: cartCreateOrConnectWithoutOngkosKirimInput
    connect?: cartWhereUniqueInput
  }

  export type cartUpdateOneRequiredWithoutOngkosKirimNestedInput = {
    create?: XOR<cartCreateWithoutOngkosKirimInput, cartUncheckedCreateWithoutOngkosKirimInput>
    connectOrCreate?: cartCreateOrConnectWithoutOngkosKirimInput
    upsert?: cartUpsertWithoutOngkosKirimInput
    connect?: cartWhereUniqueInput
    update?: XOR<XOR<cartUpdateToOneWithWhereWithoutOngkosKirimInput, cartUpdateWithoutOngkosKirimInput>, cartUncheckedUpdateWithoutOngkosKirimInput>
  }

  export type dataPesananCreateNestedOneWithoutDataPesananItemsInput = {
    create?: XOR<dataPesananCreateWithoutDataPesananItemsInput, dataPesananUncheckedCreateWithoutDataPesananItemsInput>
    connectOrCreate?: dataPesananCreateOrConnectWithoutDataPesananItemsInput
    connect?: dataPesananWhereUniqueInput
  }

  export type dataPesananUpdateOneWithoutDataPesananItemsNestedInput = {
    create?: XOR<dataPesananCreateWithoutDataPesananItemsInput, dataPesananUncheckedCreateWithoutDataPesananItemsInput>
    connectOrCreate?: dataPesananCreateOrConnectWithoutDataPesananItemsInput
    upsert?: dataPesananUpsertWithoutDataPesananItemsInput
    disconnect?: dataPesananWhereInput | boolean
    delete?: dataPesananWhereInput | boolean
    connect?: dataPesananWhereUniqueInput
    update?: XOR<XOR<dataPesananUpdateToOneWithWhereWithoutDataPesananItemsInput, dataPesananUpdateWithoutDataPesananItemsInput>, dataPesananUncheckedUpdateWithoutDataPesananItemsInput>
  }

  export type dataPesananItemCreateNestedManyWithoutDataPesananInput = {
    create?: XOR<dataPesananItemCreateWithoutDataPesananInput, dataPesananItemUncheckedCreateWithoutDataPesananInput> | dataPesananItemCreateWithoutDataPesananInput[] | dataPesananItemUncheckedCreateWithoutDataPesananInput[]
    connectOrCreate?: dataPesananItemCreateOrConnectWithoutDataPesananInput | dataPesananItemCreateOrConnectWithoutDataPesananInput[]
    createMany?: dataPesananItemCreateManyDataPesananInputEnvelope
    connect?: dataPesananItemWhereUniqueInput | dataPesananItemWhereUniqueInput[]
  }

  export type cartCreateNestedOneWithoutDataPesananInput = {
    create?: XOR<cartCreateWithoutDataPesananInput, cartUncheckedCreateWithoutDataPesananInput>
    connectOrCreate?: cartCreateOrConnectWithoutDataPesananInput
    connect?: cartWhereUniqueInput
  }

  export type dataPesananItemUncheckedCreateNestedManyWithoutDataPesananInput = {
    create?: XOR<dataPesananItemCreateWithoutDataPesananInput, dataPesananItemUncheckedCreateWithoutDataPesananInput> | dataPesananItemCreateWithoutDataPesananInput[] | dataPesananItemUncheckedCreateWithoutDataPesananInput[]
    connectOrCreate?: dataPesananItemCreateOrConnectWithoutDataPesananInput | dataPesananItemCreateOrConnectWithoutDataPesananInput[]
    createMany?: dataPesananItemCreateManyDataPesananInputEnvelope
    connect?: dataPesananItemWhereUniqueInput | dataPesananItemWhereUniqueInput[]
  }

  export type dataPesananItemUpdateManyWithoutDataPesananNestedInput = {
    create?: XOR<dataPesananItemCreateWithoutDataPesananInput, dataPesananItemUncheckedCreateWithoutDataPesananInput> | dataPesananItemCreateWithoutDataPesananInput[] | dataPesananItemUncheckedCreateWithoutDataPesananInput[]
    connectOrCreate?: dataPesananItemCreateOrConnectWithoutDataPesananInput | dataPesananItemCreateOrConnectWithoutDataPesananInput[]
    upsert?: dataPesananItemUpsertWithWhereUniqueWithoutDataPesananInput | dataPesananItemUpsertWithWhereUniqueWithoutDataPesananInput[]
    createMany?: dataPesananItemCreateManyDataPesananInputEnvelope
    set?: dataPesananItemWhereUniqueInput | dataPesananItemWhereUniqueInput[]
    disconnect?: dataPesananItemWhereUniqueInput | dataPesananItemWhereUniqueInput[]
    delete?: dataPesananItemWhereUniqueInput | dataPesananItemWhereUniqueInput[]
    connect?: dataPesananItemWhereUniqueInput | dataPesananItemWhereUniqueInput[]
    update?: dataPesananItemUpdateWithWhereUniqueWithoutDataPesananInput | dataPesananItemUpdateWithWhereUniqueWithoutDataPesananInput[]
    updateMany?: dataPesananItemUpdateManyWithWhereWithoutDataPesananInput | dataPesananItemUpdateManyWithWhereWithoutDataPesananInput[]
    deleteMany?: dataPesananItemScalarWhereInput | dataPesananItemScalarWhereInput[]
  }

  export type cartUpdateOneRequiredWithoutDataPesananNestedInput = {
    create?: XOR<cartCreateWithoutDataPesananInput, cartUncheckedCreateWithoutDataPesananInput>
    connectOrCreate?: cartCreateOrConnectWithoutDataPesananInput
    upsert?: cartUpsertWithoutDataPesananInput
    connect?: cartWhereUniqueInput
    update?: XOR<XOR<cartUpdateToOneWithWhereWithoutDataPesananInput, cartUpdateWithoutDataPesananInput>, cartUncheckedUpdateWithoutDataPesananInput>
  }

  export type dataPesananItemUncheckedUpdateManyWithoutDataPesananNestedInput = {
    create?: XOR<dataPesananItemCreateWithoutDataPesananInput, dataPesananItemUncheckedCreateWithoutDataPesananInput> | dataPesananItemCreateWithoutDataPesananInput[] | dataPesananItemUncheckedCreateWithoutDataPesananInput[]
    connectOrCreate?: dataPesananItemCreateOrConnectWithoutDataPesananInput | dataPesananItemCreateOrConnectWithoutDataPesananInput[]
    upsert?: dataPesananItemUpsertWithWhereUniqueWithoutDataPesananInput | dataPesananItemUpsertWithWhereUniqueWithoutDataPesananInput[]
    createMany?: dataPesananItemCreateManyDataPesananInputEnvelope
    set?: dataPesananItemWhereUniqueInput | dataPesananItemWhereUniqueInput[]
    disconnect?: dataPesananItemWhereUniqueInput | dataPesananItemWhereUniqueInput[]
    delete?: dataPesananItemWhereUniqueInput | dataPesananItemWhereUniqueInput[]
    connect?: dataPesananItemWhereUniqueInput | dataPesananItemWhereUniqueInput[]
    update?: dataPesananItemUpdateWithWhereUniqueWithoutDataPesananInput | dataPesananItemUpdateWithWhereUniqueWithoutDataPesananInput[]
    updateMany?: dataPesananItemUpdateManyWithWhereWithoutDataPesananInput | dataPesananItemUpdateManyWithWhereWithoutDataPesananInput[]
    deleteMany?: dataPesananItemScalarWhereInput | dataPesananItemScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel> | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type listProductCreateWithoutUserInput = {
    start?: Date | string
    end?: Date | string
    slugProduct: string
    saveDraf?: boolean
    descProduct?: string | null
    productName?: string | null
    stockProduct?: number | null
    descMetaProduct?: string | null
    viewProduct?: number | null
    subKategoriProduct?: string | null
    productType?: string | null
    tagProduct?: NullableJsonNullValueInput | InputJsonValue
    productPrice?: bigint | number | null
    productDiscount?: number | null
    productPriceFinal?: bigint | number | null
    urlYoutube?: string | null
    url_image_product?: imageProductCreateNestedManyWithoutUserInput
    spec_product?: specProductCreateNestedOneWithoutUserInput
    cartItem?: cartItemCreateNestedManyWithoutProductInput
    imageProductUtama?: imageProductUtamaCreateNestedOneWithoutUserInput
  }

  export type listProductUncheckedCreateWithoutUserInput = {
    id?: number
    start?: Date | string
    end?: Date | string
    slugProduct: string
    saveDraf?: boolean
    descProduct?: string | null
    productName?: string | null
    stockProduct?: number | null
    descMetaProduct?: string | null
    viewProduct?: number | null
    subKategoriProduct?: string | null
    productType?: string | null
    tagProduct?: NullableJsonNullValueInput | InputJsonValue
    productPrice?: bigint | number | null
    productDiscount?: number | null
    productPriceFinal?: bigint | number | null
    urlYoutube?: string | null
    url_image_product?: imageProductUncheckedCreateNestedManyWithoutUserInput
    spec_product?: specProductUncheckedCreateNestedOneWithoutUserInput
    cartItem?: cartItemUncheckedCreateNestedManyWithoutProductInput
    imageProductUtama?: imageProductUtamaUncheckedCreateNestedOneWithoutUserInput
  }

  export type listProductCreateOrConnectWithoutUserInput = {
    where: listProductWhereUniqueInput
    create: XOR<listProductCreateWithoutUserInput, listProductUncheckedCreateWithoutUserInput>
  }

  export type listProductCreateManyUserInputEnvelope = {
    data: listProductCreateManyUserInput | listProductCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type listProductUpsertWithWhereUniqueWithoutUserInput = {
    where: listProductWhereUniqueInput
    update: XOR<listProductUpdateWithoutUserInput, listProductUncheckedUpdateWithoutUserInput>
    create: XOR<listProductCreateWithoutUserInput, listProductUncheckedCreateWithoutUserInput>
  }

  export type listProductUpdateWithWhereUniqueWithoutUserInput = {
    where: listProductWhereUniqueInput
    data: XOR<listProductUpdateWithoutUserInput, listProductUncheckedUpdateWithoutUserInput>
  }

  export type listProductUpdateManyWithWhereWithoutUserInput = {
    where: listProductScalarWhereInput
    data: XOR<listProductUpdateManyMutationInput, listProductUncheckedUpdateManyWithoutUserInput>
  }

  export type listProductScalarWhereInput = {
    AND?: listProductScalarWhereInput | listProductScalarWhereInput[]
    OR?: listProductScalarWhereInput[]
    NOT?: listProductScalarWhereInput | listProductScalarWhereInput[]
    id?: IntFilter<"listProduct"> | number
    start?: DateTimeFilter<"listProduct"> | Date | string
    end?: DateTimeFilter<"listProduct"> | Date | string
    slugProduct?: StringFilter<"listProduct"> | string
    saveDraf?: BoolFilter<"listProduct"> | boolean
    descProduct?: StringNullableFilter<"listProduct"> | string | null
    productName?: StringNullableFilter<"listProduct"> | string | null
    stockProduct?: IntNullableFilter<"listProduct"> | number | null
    descMetaProduct?: StringNullableFilter<"listProduct"> | string | null
    viewProduct?: IntNullableFilter<"listProduct"> | number | null
    subKategoriProduct?: StringNullableFilter<"listProduct"> | string | null
    productType?: StringNullableFilter<"listProduct"> | string | null
    tagProduct?: JsonNullableFilter<"listProduct">
    productPrice?: BigIntNullableFilter<"listProduct"> | bigint | number | null
    productDiscount?: IntNullableFilter<"listProduct"> | number | null
    productPriceFinal?: BigIntNullableFilter<"listProduct"> | bigint | number | null
    urlYoutube?: StringNullableFilter<"listProduct"> | string | null
    productKategori?: IntFilter<"listProduct"> | number
  }

  export type categoryProductCreateWithoutListProductsInput = {
    start?: Date | string
    end?: Date | string
    category: string
    slugCategory: string
    image?: string | null
    icon?: string | null
    urlYoutube?: string | null
    title?: string | null
    desc?: string | null
    tags?: string | null
  }

  export type categoryProductUncheckedCreateWithoutListProductsInput = {
    id?: number
    start?: Date | string
    end?: Date | string
    category: string
    slugCategory: string
    image?: string | null
    icon?: string | null
    urlYoutube?: string | null
    title?: string | null
    desc?: string | null
    tags?: string | null
  }

  export type categoryProductCreateOrConnectWithoutListProductsInput = {
    where: categoryProductWhereUniqueInput
    create: XOR<categoryProductCreateWithoutListProductsInput, categoryProductUncheckedCreateWithoutListProductsInput>
  }

  export type imageProductCreateWithoutUserInput = {
    start?: Date | string
    end?: Date | string
    asset_id?: string | null
    public_id?: string | null
    version?: number | null
    version_id?: string | null
    signature?: string | null
    width?: number | null
    height?: number | null
    format?: string | null
    resource_type?: string | null
    created_at?: Date | string
    pages?: number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    bytes?: number | null
    type?: string | null
    etag?: string | null
    placeholder?: boolean | null
    url?: string | null
    secure_url?: string | null
    asset_folder?: string | null
    display_name?: string | null
    original_filename?: string | null
    api_key?: string | null
  }

  export type imageProductUncheckedCreateWithoutUserInput = {
    id?: number
    start?: Date | string
    end?: Date | string
    asset_id?: string | null
    public_id?: string | null
    version?: number | null
    version_id?: string | null
    signature?: string | null
    width?: number | null
    height?: number | null
    format?: string | null
    resource_type?: string | null
    created_at?: Date | string
    pages?: number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    bytes?: number | null
    type?: string | null
    etag?: string | null
    placeholder?: boolean | null
    url?: string | null
    secure_url?: string | null
    asset_folder?: string | null
    display_name?: string | null
    original_filename?: string | null
    api_key?: string | null
  }

  export type imageProductCreateOrConnectWithoutUserInput = {
    where: imageProductWhereUniqueInput
    create: XOR<imageProductCreateWithoutUserInput, imageProductUncheckedCreateWithoutUserInput>
  }

  export type imageProductCreateManyUserInputEnvelope = {
    data: imageProductCreateManyUserInput | imageProductCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type specProductCreateWithoutUserInput = {
    id?: number
    start?: Date | string
    end?: Date | string
    phase_spec?: string | null
    frequency_spec?: string | null
    gensetPower_spec?: string | null
    ratedPower_spec?: string | null
    maxPower_spec?: string | null
    ratedACVoltage_spec?: string | null
    starting_spec?: string | null
    fuelConsumption_spec?: string | null
    weight_spec?: number | null
    dimension_spec?: string | null
  }

  export type specProductUncheckedCreateWithoutUserInput = {
    id?: number
    start?: Date | string
    end?: Date | string
    phase_spec?: string | null
    frequency_spec?: string | null
    gensetPower_spec?: string | null
    ratedPower_spec?: string | null
    maxPower_spec?: string | null
    ratedACVoltage_spec?: string | null
    starting_spec?: string | null
    fuelConsumption_spec?: string | null
    weight_spec?: number | null
    dimension_spec?: string | null
  }

  export type specProductCreateOrConnectWithoutUserInput = {
    where: specProductWhereUniqueInput
    create: XOR<specProductCreateWithoutUserInput, specProductUncheckedCreateWithoutUserInput>
  }

  export type cartItemCreateWithoutProductInput = {
    start?: Date | string
    end?: Date | string | null
    quantity?: number
    checkList?: boolean
    note?: string | null
    cart: cartCreateNestedOneWithoutItemsInput
  }

  export type cartItemUncheckedCreateWithoutProductInput = {
    id?: number
    start?: Date | string
    end?: Date | string | null
    cartId: string
    quantity?: number
    checkList?: boolean
    note?: string | null
  }

  export type cartItemCreateOrConnectWithoutProductInput = {
    where: cartItemWhereUniqueInput
    create: XOR<cartItemCreateWithoutProductInput, cartItemUncheckedCreateWithoutProductInput>
  }

  export type cartItemCreateManyProductInputEnvelope = {
    data: cartItemCreateManyProductInput | cartItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type imageProductUtamaCreateWithoutUserInput = {
    start?: Date | string
    end?: Date | string
    asset_id?: string | null
    public_id?: string | null
    version?: number | null
    version_id?: string | null
    signature?: string | null
    width?: number | null
    height?: number | null
    format?: string | null
    resource_type?: string | null
    created_at?: Date | string
    pages?: number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    bytes?: number | null
    type?: string | null
    etag?: string | null
    placeholder?: boolean | null
    url?: string | null
    secure_url?: string | null
    asset_folder?: string | null
    display_name?: string | null
    original_filename?: string | null
    api_key?: string | null
  }

  export type imageProductUtamaUncheckedCreateWithoutUserInput = {
    id?: number
    start?: Date | string
    end?: Date | string
    asset_id?: string | null
    public_id?: string | null
    version?: number | null
    version_id?: string | null
    signature?: string | null
    width?: number | null
    height?: number | null
    format?: string | null
    resource_type?: string | null
    created_at?: Date | string
    pages?: number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    bytes?: number | null
    type?: string | null
    etag?: string | null
    placeholder?: boolean | null
    url?: string | null
    secure_url?: string | null
    asset_folder?: string | null
    display_name?: string | null
    original_filename?: string | null
    api_key?: string | null
  }

  export type imageProductUtamaCreateOrConnectWithoutUserInput = {
    where: imageProductUtamaWhereUniqueInput
    create: XOR<imageProductUtamaCreateWithoutUserInput, imageProductUtamaUncheckedCreateWithoutUserInput>
  }

  export type categoryProductUpsertWithoutListProductsInput = {
    update: XOR<categoryProductUpdateWithoutListProductsInput, categoryProductUncheckedUpdateWithoutListProductsInput>
    create: XOR<categoryProductCreateWithoutListProductsInput, categoryProductUncheckedCreateWithoutListProductsInput>
    where?: categoryProductWhereInput
  }

  export type categoryProductUpdateToOneWithWhereWithoutListProductsInput = {
    where?: categoryProductWhereInput
    data: XOR<categoryProductUpdateWithoutListProductsInput, categoryProductUncheckedUpdateWithoutListProductsInput>
  }

  export type categoryProductUpdateWithoutListProductsInput = {
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    slugCategory?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    urlYoutube?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoryProductUncheckedUpdateWithoutListProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    slugCategory?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    urlYoutube?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type imageProductUpsertWithWhereUniqueWithoutUserInput = {
    where: imageProductWhereUniqueInput
    update: XOR<imageProductUpdateWithoutUserInput, imageProductUncheckedUpdateWithoutUserInput>
    create: XOR<imageProductCreateWithoutUserInput, imageProductUncheckedCreateWithoutUserInput>
  }

  export type imageProductUpdateWithWhereUniqueWithoutUserInput = {
    where: imageProductWhereUniqueInput
    data: XOR<imageProductUpdateWithoutUserInput, imageProductUncheckedUpdateWithoutUserInput>
  }

  export type imageProductUpdateManyWithWhereWithoutUserInput = {
    where: imageProductScalarWhereInput
    data: XOR<imageProductUpdateManyMutationInput, imageProductUncheckedUpdateManyWithoutUserInput>
  }

  export type imageProductScalarWhereInput = {
    AND?: imageProductScalarWhereInput | imageProductScalarWhereInput[]
    OR?: imageProductScalarWhereInput[]
    NOT?: imageProductScalarWhereInput | imageProductScalarWhereInput[]
    id?: IntFilter<"imageProduct"> | number
    start?: DateTimeFilter<"imageProduct"> | Date | string
    end?: DateTimeFilter<"imageProduct"> | Date | string
    asset_id?: StringNullableFilter<"imageProduct"> | string | null
    public_id?: StringNullableFilter<"imageProduct"> | string | null
    version?: IntNullableFilter<"imageProduct"> | number | null
    version_id?: StringNullableFilter<"imageProduct"> | string | null
    signature?: StringNullableFilter<"imageProduct"> | string | null
    width?: IntNullableFilter<"imageProduct"> | number | null
    height?: IntNullableFilter<"imageProduct"> | number | null
    format?: StringNullableFilter<"imageProduct"> | string | null
    resource_type?: StringNullableFilter<"imageProduct"> | string | null
    created_at?: DateTimeFilter<"imageProduct"> | Date | string
    pages?: IntNullableFilter<"imageProduct"> | number | null
    tags?: JsonNullableFilter<"imageProduct">
    bytes?: IntNullableFilter<"imageProduct"> | number | null
    type?: StringNullableFilter<"imageProduct"> | string | null
    etag?: StringNullableFilter<"imageProduct"> | string | null
    placeholder?: BoolNullableFilter<"imageProduct"> | boolean | null
    url?: StringNullableFilter<"imageProduct"> | string | null
    secure_url?: StringNullableFilter<"imageProduct"> | string | null
    asset_folder?: StringNullableFilter<"imageProduct"> | string | null
    display_name?: StringNullableFilter<"imageProduct"> | string | null
    original_filename?: StringNullableFilter<"imageProduct"> | string | null
    api_key?: StringNullableFilter<"imageProduct"> | string | null
    IdProduct?: IntFilter<"imageProduct"> | number
  }

  export type specProductUpsertWithoutUserInput = {
    update: XOR<specProductUpdateWithoutUserInput, specProductUncheckedUpdateWithoutUserInput>
    create: XOR<specProductCreateWithoutUserInput, specProductUncheckedCreateWithoutUserInput>
    where?: specProductWhereInput
  }

  export type specProductUpdateToOneWithWhereWithoutUserInput = {
    where?: specProductWhereInput
    data: XOR<specProductUpdateWithoutUserInput, specProductUncheckedUpdateWithoutUserInput>
  }

  export type specProductUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    phase_spec?: NullableStringFieldUpdateOperationsInput | string | null
    frequency_spec?: NullableStringFieldUpdateOperationsInput | string | null
    gensetPower_spec?: NullableStringFieldUpdateOperationsInput | string | null
    ratedPower_spec?: NullableStringFieldUpdateOperationsInput | string | null
    maxPower_spec?: NullableStringFieldUpdateOperationsInput | string | null
    ratedACVoltage_spec?: NullableStringFieldUpdateOperationsInput | string | null
    starting_spec?: NullableStringFieldUpdateOperationsInput | string | null
    fuelConsumption_spec?: NullableStringFieldUpdateOperationsInput | string | null
    weight_spec?: NullableIntFieldUpdateOperationsInput | number | null
    dimension_spec?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type specProductUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    phase_spec?: NullableStringFieldUpdateOperationsInput | string | null
    frequency_spec?: NullableStringFieldUpdateOperationsInput | string | null
    gensetPower_spec?: NullableStringFieldUpdateOperationsInput | string | null
    ratedPower_spec?: NullableStringFieldUpdateOperationsInput | string | null
    maxPower_spec?: NullableStringFieldUpdateOperationsInput | string | null
    ratedACVoltage_spec?: NullableStringFieldUpdateOperationsInput | string | null
    starting_spec?: NullableStringFieldUpdateOperationsInput | string | null
    fuelConsumption_spec?: NullableStringFieldUpdateOperationsInput | string | null
    weight_spec?: NullableIntFieldUpdateOperationsInput | number | null
    dimension_spec?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cartItemUpsertWithWhereUniqueWithoutProductInput = {
    where: cartItemWhereUniqueInput
    update: XOR<cartItemUpdateWithoutProductInput, cartItemUncheckedUpdateWithoutProductInput>
    create: XOR<cartItemCreateWithoutProductInput, cartItemUncheckedCreateWithoutProductInput>
  }

  export type cartItemUpdateWithWhereUniqueWithoutProductInput = {
    where: cartItemWhereUniqueInput
    data: XOR<cartItemUpdateWithoutProductInput, cartItemUncheckedUpdateWithoutProductInput>
  }

  export type cartItemUpdateManyWithWhereWithoutProductInput = {
    where: cartItemScalarWhereInput
    data: XOR<cartItemUpdateManyMutationInput, cartItemUncheckedUpdateManyWithoutProductInput>
  }

  export type cartItemScalarWhereInput = {
    AND?: cartItemScalarWhereInput | cartItemScalarWhereInput[]
    OR?: cartItemScalarWhereInput[]
    NOT?: cartItemScalarWhereInput | cartItemScalarWhereInput[]
    id?: IntFilter<"cartItem"> | number
    start?: DateTimeFilter<"cartItem"> | Date | string
    end?: DateTimeNullableFilter<"cartItem"> | Date | string | null
    cartId?: StringFilter<"cartItem"> | string
    productId?: IntFilter<"cartItem"> | number
    quantity?: IntFilter<"cartItem"> | number
    checkList?: BoolFilter<"cartItem"> | boolean
    note?: StringNullableFilter<"cartItem"> | string | null
  }

  export type imageProductUtamaUpsertWithoutUserInput = {
    update: XOR<imageProductUtamaUpdateWithoutUserInput, imageProductUtamaUncheckedUpdateWithoutUserInput>
    create: XOR<imageProductUtamaCreateWithoutUserInput, imageProductUtamaUncheckedCreateWithoutUserInput>
    where?: imageProductUtamaWhereInput
  }

  export type imageProductUtamaUpdateToOneWithWhereWithoutUserInput = {
    where?: imageProductUtamaWhereInput
    data: XOR<imageProductUtamaUpdateWithoutUserInput, imageProductUtamaUncheckedUpdateWithoutUserInput>
  }

  export type imageProductUtamaUpdateWithoutUserInput = {
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    asset_id?: NullableStringFieldUpdateOperationsInput | string | null
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    version_id?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    format?: NullableStringFieldUpdateOperationsInput | string | null
    resource_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    bytes?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    etag?: NullableStringFieldUpdateOperationsInput | string | null
    placeholder?: NullableBoolFieldUpdateOperationsInput | boolean | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    secure_url?: NullableStringFieldUpdateOperationsInput | string | null
    asset_folder?: NullableStringFieldUpdateOperationsInput | string | null
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    original_filename?: NullableStringFieldUpdateOperationsInput | string | null
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type imageProductUtamaUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    asset_id?: NullableStringFieldUpdateOperationsInput | string | null
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    version_id?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    format?: NullableStringFieldUpdateOperationsInput | string | null
    resource_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    bytes?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    etag?: NullableStringFieldUpdateOperationsInput | string | null
    placeholder?: NullableBoolFieldUpdateOperationsInput | boolean | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    secure_url?: NullableStringFieldUpdateOperationsInput | string | null
    asset_folder?: NullableStringFieldUpdateOperationsInput | string | null
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    original_filename?: NullableStringFieldUpdateOperationsInput | string | null
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type listProductCreateWithoutSpec_productInput = {
    start?: Date | string
    end?: Date | string
    slugProduct: string
    saveDraf?: boolean
    descProduct?: string | null
    productName?: string | null
    stockProduct?: number | null
    descMetaProduct?: string | null
    viewProduct?: number | null
    subKategoriProduct?: string | null
    productType?: string | null
    tagProduct?: NullableJsonNullValueInput | InputJsonValue
    productPrice?: bigint | number | null
    productDiscount?: number | null
    productPriceFinal?: bigint | number | null
    urlYoutube?: string | null
    user: categoryProductCreateNestedOneWithoutListProductsInput
    url_image_product?: imageProductCreateNestedManyWithoutUserInput
    cartItem?: cartItemCreateNestedManyWithoutProductInput
    imageProductUtama?: imageProductUtamaCreateNestedOneWithoutUserInput
  }

  export type listProductUncheckedCreateWithoutSpec_productInput = {
    id?: number
    start?: Date | string
    end?: Date | string
    slugProduct: string
    saveDraf?: boolean
    descProduct?: string | null
    productName?: string | null
    stockProduct?: number | null
    descMetaProduct?: string | null
    viewProduct?: number | null
    subKategoriProduct?: string | null
    productType?: string | null
    tagProduct?: NullableJsonNullValueInput | InputJsonValue
    productPrice?: bigint | number | null
    productDiscount?: number | null
    productPriceFinal?: bigint | number | null
    urlYoutube?: string | null
    productKategori: number
    url_image_product?: imageProductUncheckedCreateNestedManyWithoutUserInput
    cartItem?: cartItemUncheckedCreateNestedManyWithoutProductInput
    imageProductUtama?: imageProductUtamaUncheckedCreateNestedOneWithoutUserInput
  }

  export type listProductCreateOrConnectWithoutSpec_productInput = {
    where: listProductWhereUniqueInput
    create: XOR<listProductCreateWithoutSpec_productInput, listProductUncheckedCreateWithoutSpec_productInput>
  }

  export type listProductUpsertWithoutSpec_productInput = {
    update: XOR<listProductUpdateWithoutSpec_productInput, listProductUncheckedUpdateWithoutSpec_productInput>
    create: XOR<listProductCreateWithoutSpec_productInput, listProductUncheckedCreateWithoutSpec_productInput>
    where?: listProductWhereInput
  }

  export type listProductUpdateToOneWithWhereWithoutSpec_productInput = {
    where?: listProductWhereInput
    data: XOR<listProductUpdateWithoutSpec_productInput, listProductUncheckedUpdateWithoutSpec_productInput>
  }

  export type listProductUpdateWithoutSpec_productInput = {
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    slugProduct?: StringFieldUpdateOperationsInput | string
    saveDraf?: BoolFieldUpdateOperationsInput | boolean
    descProduct?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    stockProduct?: NullableIntFieldUpdateOperationsInput | number | null
    descMetaProduct?: NullableStringFieldUpdateOperationsInput | string | null
    viewProduct?: NullableIntFieldUpdateOperationsInput | number | null
    subKategoriProduct?: NullableStringFieldUpdateOperationsInput | string | null
    productType?: NullableStringFieldUpdateOperationsInput | string | null
    tagProduct?: NullableJsonNullValueInput | InputJsonValue
    productPrice?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    productDiscount?: NullableIntFieldUpdateOperationsInput | number | null
    productPriceFinal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    urlYoutube?: NullableStringFieldUpdateOperationsInput | string | null
    user?: categoryProductUpdateOneRequiredWithoutListProductsNestedInput
    url_image_product?: imageProductUpdateManyWithoutUserNestedInput
    cartItem?: cartItemUpdateManyWithoutProductNestedInput
    imageProductUtama?: imageProductUtamaUpdateOneWithoutUserNestedInput
  }

  export type listProductUncheckedUpdateWithoutSpec_productInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    slugProduct?: StringFieldUpdateOperationsInput | string
    saveDraf?: BoolFieldUpdateOperationsInput | boolean
    descProduct?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    stockProduct?: NullableIntFieldUpdateOperationsInput | number | null
    descMetaProduct?: NullableStringFieldUpdateOperationsInput | string | null
    viewProduct?: NullableIntFieldUpdateOperationsInput | number | null
    subKategoriProduct?: NullableStringFieldUpdateOperationsInput | string | null
    productType?: NullableStringFieldUpdateOperationsInput | string | null
    tagProduct?: NullableJsonNullValueInput | InputJsonValue
    productPrice?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    productDiscount?: NullableIntFieldUpdateOperationsInput | number | null
    productPriceFinal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    urlYoutube?: NullableStringFieldUpdateOperationsInput | string | null
    productKategori?: IntFieldUpdateOperationsInput | number
    url_image_product?: imageProductUncheckedUpdateManyWithoutUserNestedInput
    cartItem?: cartItemUncheckedUpdateManyWithoutProductNestedInput
    imageProductUtama?: imageProductUtamaUncheckedUpdateOneWithoutUserNestedInput
  }

  export type listProductCreateWithoutImageProductUtamaInput = {
    start?: Date | string
    end?: Date | string
    slugProduct: string
    saveDraf?: boolean
    descProduct?: string | null
    productName?: string | null
    stockProduct?: number | null
    descMetaProduct?: string | null
    viewProduct?: number | null
    subKategoriProduct?: string | null
    productType?: string | null
    tagProduct?: NullableJsonNullValueInput | InputJsonValue
    productPrice?: bigint | number | null
    productDiscount?: number | null
    productPriceFinal?: bigint | number | null
    urlYoutube?: string | null
    user: categoryProductCreateNestedOneWithoutListProductsInput
    url_image_product?: imageProductCreateNestedManyWithoutUserInput
    spec_product?: specProductCreateNestedOneWithoutUserInput
    cartItem?: cartItemCreateNestedManyWithoutProductInput
  }

  export type listProductUncheckedCreateWithoutImageProductUtamaInput = {
    id?: number
    start?: Date | string
    end?: Date | string
    slugProduct: string
    saveDraf?: boolean
    descProduct?: string | null
    productName?: string | null
    stockProduct?: number | null
    descMetaProduct?: string | null
    viewProduct?: number | null
    subKategoriProduct?: string | null
    productType?: string | null
    tagProduct?: NullableJsonNullValueInput | InputJsonValue
    productPrice?: bigint | number | null
    productDiscount?: number | null
    productPriceFinal?: bigint | number | null
    urlYoutube?: string | null
    productKategori: number
    url_image_product?: imageProductUncheckedCreateNestedManyWithoutUserInput
    spec_product?: specProductUncheckedCreateNestedOneWithoutUserInput
    cartItem?: cartItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type listProductCreateOrConnectWithoutImageProductUtamaInput = {
    where: listProductWhereUniqueInput
    create: XOR<listProductCreateWithoutImageProductUtamaInput, listProductUncheckedCreateWithoutImageProductUtamaInput>
  }

  export type listProductUpsertWithoutImageProductUtamaInput = {
    update: XOR<listProductUpdateWithoutImageProductUtamaInput, listProductUncheckedUpdateWithoutImageProductUtamaInput>
    create: XOR<listProductCreateWithoutImageProductUtamaInput, listProductUncheckedCreateWithoutImageProductUtamaInput>
    where?: listProductWhereInput
  }

  export type listProductUpdateToOneWithWhereWithoutImageProductUtamaInput = {
    where?: listProductWhereInput
    data: XOR<listProductUpdateWithoutImageProductUtamaInput, listProductUncheckedUpdateWithoutImageProductUtamaInput>
  }

  export type listProductUpdateWithoutImageProductUtamaInput = {
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    slugProduct?: StringFieldUpdateOperationsInput | string
    saveDraf?: BoolFieldUpdateOperationsInput | boolean
    descProduct?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    stockProduct?: NullableIntFieldUpdateOperationsInput | number | null
    descMetaProduct?: NullableStringFieldUpdateOperationsInput | string | null
    viewProduct?: NullableIntFieldUpdateOperationsInput | number | null
    subKategoriProduct?: NullableStringFieldUpdateOperationsInput | string | null
    productType?: NullableStringFieldUpdateOperationsInput | string | null
    tagProduct?: NullableJsonNullValueInput | InputJsonValue
    productPrice?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    productDiscount?: NullableIntFieldUpdateOperationsInput | number | null
    productPriceFinal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    urlYoutube?: NullableStringFieldUpdateOperationsInput | string | null
    user?: categoryProductUpdateOneRequiredWithoutListProductsNestedInput
    url_image_product?: imageProductUpdateManyWithoutUserNestedInput
    spec_product?: specProductUpdateOneWithoutUserNestedInput
    cartItem?: cartItemUpdateManyWithoutProductNestedInput
  }

  export type listProductUncheckedUpdateWithoutImageProductUtamaInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    slugProduct?: StringFieldUpdateOperationsInput | string
    saveDraf?: BoolFieldUpdateOperationsInput | boolean
    descProduct?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    stockProduct?: NullableIntFieldUpdateOperationsInput | number | null
    descMetaProduct?: NullableStringFieldUpdateOperationsInput | string | null
    viewProduct?: NullableIntFieldUpdateOperationsInput | number | null
    subKategoriProduct?: NullableStringFieldUpdateOperationsInput | string | null
    productType?: NullableStringFieldUpdateOperationsInput | string | null
    tagProduct?: NullableJsonNullValueInput | InputJsonValue
    productPrice?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    productDiscount?: NullableIntFieldUpdateOperationsInput | number | null
    productPriceFinal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    urlYoutube?: NullableStringFieldUpdateOperationsInput | string | null
    productKategori?: IntFieldUpdateOperationsInput | number
    url_image_product?: imageProductUncheckedUpdateManyWithoutUserNestedInput
    spec_product?: specProductUncheckedUpdateOneWithoutUserNestedInput
    cartItem?: cartItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type listProductCreateWithoutUrl_image_productInput = {
    start?: Date | string
    end?: Date | string
    slugProduct: string
    saveDraf?: boolean
    descProduct?: string | null
    productName?: string | null
    stockProduct?: number | null
    descMetaProduct?: string | null
    viewProduct?: number | null
    subKategoriProduct?: string | null
    productType?: string | null
    tagProduct?: NullableJsonNullValueInput | InputJsonValue
    productPrice?: bigint | number | null
    productDiscount?: number | null
    productPriceFinal?: bigint | number | null
    urlYoutube?: string | null
    user: categoryProductCreateNestedOneWithoutListProductsInput
    spec_product?: specProductCreateNestedOneWithoutUserInput
    cartItem?: cartItemCreateNestedManyWithoutProductInput
    imageProductUtama?: imageProductUtamaCreateNestedOneWithoutUserInput
  }

  export type listProductUncheckedCreateWithoutUrl_image_productInput = {
    id?: number
    start?: Date | string
    end?: Date | string
    slugProduct: string
    saveDraf?: boolean
    descProduct?: string | null
    productName?: string | null
    stockProduct?: number | null
    descMetaProduct?: string | null
    viewProduct?: number | null
    subKategoriProduct?: string | null
    productType?: string | null
    tagProduct?: NullableJsonNullValueInput | InputJsonValue
    productPrice?: bigint | number | null
    productDiscount?: number | null
    productPriceFinal?: bigint | number | null
    urlYoutube?: string | null
    productKategori: number
    spec_product?: specProductUncheckedCreateNestedOneWithoutUserInput
    cartItem?: cartItemUncheckedCreateNestedManyWithoutProductInput
    imageProductUtama?: imageProductUtamaUncheckedCreateNestedOneWithoutUserInput
  }

  export type listProductCreateOrConnectWithoutUrl_image_productInput = {
    where: listProductWhereUniqueInput
    create: XOR<listProductCreateWithoutUrl_image_productInput, listProductUncheckedCreateWithoutUrl_image_productInput>
  }

  export type listProductUpsertWithoutUrl_image_productInput = {
    update: XOR<listProductUpdateWithoutUrl_image_productInput, listProductUncheckedUpdateWithoutUrl_image_productInput>
    create: XOR<listProductCreateWithoutUrl_image_productInput, listProductUncheckedCreateWithoutUrl_image_productInput>
    where?: listProductWhereInput
  }

  export type listProductUpdateToOneWithWhereWithoutUrl_image_productInput = {
    where?: listProductWhereInput
    data: XOR<listProductUpdateWithoutUrl_image_productInput, listProductUncheckedUpdateWithoutUrl_image_productInput>
  }

  export type listProductUpdateWithoutUrl_image_productInput = {
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    slugProduct?: StringFieldUpdateOperationsInput | string
    saveDraf?: BoolFieldUpdateOperationsInput | boolean
    descProduct?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    stockProduct?: NullableIntFieldUpdateOperationsInput | number | null
    descMetaProduct?: NullableStringFieldUpdateOperationsInput | string | null
    viewProduct?: NullableIntFieldUpdateOperationsInput | number | null
    subKategoriProduct?: NullableStringFieldUpdateOperationsInput | string | null
    productType?: NullableStringFieldUpdateOperationsInput | string | null
    tagProduct?: NullableJsonNullValueInput | InputJsonValue
    productPrice?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    productDiscount?: NullableIntFieldUpdateOperationsInput | number | null
    productPriceFinal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    urlYoutube?: NullableStringFieldUpdateOperationsInput | string | null
    user?: categoryProductUpdateOneRequiredWithoutListProductsNestedInput
    spec_product?: specProductUpdateOneWithoutUserNestedInput
    cartItem?: cartItemUpdateManyWithoutProductNestedInput
    imageProductUtama?: imageProductUtamaUpdateOneWithoutUserNestedInput
  }

  export type listProductUncheckedUpdateWithoutUrl_image_productInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    slugProduct?: StringFieldUpdateOperationsInput | string
    saveDraf?: BoolFieldUpdateOperationsInput | boolean
    descProduct?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    stockProduct?: NullableIntFieldUpdateOperationsInput | number | null
    descMetaProduct?: NullableStringFieldUpdateOperationsInput | string | null
    viewProduct?: NullableIntFieldUpdateOperationsInput | number | null
    subKategoriProduct?: NullableStringFieldUpdateOperationsInput | string | null
    productType?: NullableStringFieldUpdateOperationsInput | string | null
    tagProduct?: NullableJsonNullValueInput | InputJsonValue
    productPrice?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    productDiscount?: NullableIntFieldUpdateOperationsInput | number | null
    productPriceFinal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    urlYoutube?: NullableStringFieldUpdateOperationsInput | string | null
    productKategori?: IntFieldUpdateOperationsInput | number
    spec_product?: specProductUncheckedUpdateOneWithoutUserNestedInput
    cartItem?: cartItemUncheckedUpdateManyWithoutProductNestedInput
    imageProductUtama?: imageProductUtamaUncheckedUpdateOneWithoutUserNestedInput
  }

  export type imageProductArtikelCreateWithoutUserdInput = {
    start?: Date | string
    end?: Date | string
    asset_id?: string | null
    public_id?: string | null
    version?: number | null
    version_id?: string | null
    signature?: string | null
    width?: number | null
    height?: number | null
    format?: string | null
    resource_type?: string | null
    created_at?: Date | string
    pages?: number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    bytes?: number | null
    type?: string | null
    etag?: string | null
    placeholder?: boolean | null
    url?: string | null
    secure_url?: string | null
    asset_folder?: string | null
    display_name?: string | null
    original_filename?: string | null
    api_key?: string | null
  }

  export type imageProductArtikelUncheckedCreateWithoutUserdInput = {
    id?: number
    start?: Date | string
    end?: Date | string
    asset_id?: string | null
    public_id?: string | null
    version?: number | null
    version_id?: string | null
    signature?: string | null
    width?: number | null
    height?: number | null
    format?: string | null
    resource_type?: string | null
    created_at?: Date | string
    pages?: number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    bytes?: number | null
    type?: string | null
    etag?: string | null
    placeholder?: boolean | null
    url?: string | null
    secure_url?: string | null
    asset_folder?: string | null
    display_name?: string | null
    original_filename?: string | null
    api_key?: string | null
  }

  export type imageProductArtikelCreateOrConnectWithoutUserdInput = {
    where: imageProductArtikelWhereUniqueInput
    create: XOR<imageProductArtikelCreateWithoutUserdInput, imageProductArtikelUncheckedCreateWithoutUserdInput>
  }

  export type imageProductArtikelCreateManyUserdInputEnvelope = {
    data: imageProductArtikelCreateManyUserdInput | imageProductArtikelCreateManyUserdInput[]
    skipDuplicates?: boolean
  }

  export type categoryArtikelCreateWithoutPostArtikelInput = {
    start?: Date | string
    end?: Date | string
    category: string
    slugCategory: string
    image?: string | null
    icon?: string | null
    urlYoutube?: string | null
    title?: string | null
    desc?: string | null
    tags?: string | null
  }

  export type categoryArtikelUncheckedCreateWithoutPostArtikelInput = {
    id?: number
    start?: Date | string
    end?: Date | string
    category: string
    slugCategory: string
    image?: string | null
    icon?: string | null
    urlYoutube?: string | null
    title?: string | null
    desc?: string | null
    tags?: string | null
  }

  export type categoryArtikelCreateOrConnectWithoutPostArtikelInput = {
    where: categoryArtikelWhereUniqueInput
    create: XOR<categoryArtikelCreateWithoutPostArtikelInput, categoryArtikelUncheckedCreateWithoutPostArtikelInput>
  }

  export type imageProductArtikelUpsertWithWhereUniqueWithoutUserdInput = {
    where: imageProductArtikelWhereUniqueInput
    update: XOR<imageProductArtikelUpdateWithoutUserdInput, imageProductArtikelUncheckedUpdateWithoutUserdInput>
    create: XOR<imageProductArtikelCreateWithoutUserdInput, imageProductArtikelUncheckedCreateWithoutUserdInput>
  }

  export type imageProductArtikelUpdateWithWhereUniqueWithoutUserdInput = {
    where: imageProductArtikelWhereUniqueInput
    data: XOR<imageProductArtikelUpdateWithoutUserdInput, imageProductArtikelUncheckedUpdateWithoutUserdInput>
  }

  export type imageProductArtikelUpdateManyWithWhereWithoutUserdInput = {
    where: imageProductArtikelScalarWhereInput
    data: XOR<imageProductArtikelUpdateManyMutationInput, imageProductArtikelUncheckedUpdateManyWithoutUserdInput>
  }

  export type imageProductArtikelScalarWhereInput = {
    AND?: imageProductArtikelScalarWhereInput | imageProductArtikelScalarWhereInput[]
    OR?: imageProductArtikelScalarWhereInput[]
    NOT?: imageProductArtikelScalarWhereInput | imageProductArtikelScalarWhereInput[]
    id?: IntFilter<"imageProductArtikel"> | number
    start?: DateTimeFilter<"imageProductArtikel"> | Date | string
    end?: DateTimeFilter<"imageProductArtikel"> | Date | string
    asset_id?: StringNullableFilter<"imageProductArtikel"> | string | null
    public_id?: StringNullableFilter<"imageProductArtikel"> | string | null
    version?: IntNullableFilter<"imageProductArtikel"> | number | null
    version_id?: StringNullableFilter<"imageProductArtikel"> | string | null
    signature?: StringNullableFilter<"imageProductArtikel"> | string | null
    width?: IntNullableFilter<"imageProductArtikel"> | number | null
    height?: IntNullableFilter<"imageProductArtikel"> | number | null
    format?: StringNullableFilter<"imageProductArtikel"> | string | null
    resource_type?: StringNullableFilter<"imageProductArtikel"> | string | null
    created_at?: DateTimeFilter<"imageProductArtikel"> | Date | string
    pages?: IntNullableFilter<"imageProductArtikel"> | number | null
    tags?: JsonNullableFilter<"imageProductArtikel">
    bytes?: IntNullableFilter<"imageProductArtikel"> | number | null
    type?: StringNullableFilter<"imageProductArtikel"> | string | null
    etag?: StringNullableFilter<"imageProductArtikel"> | string | null
    placeholder?: BoolNullableFilter<"imageProductArtikel"> | boolean | null
    url?: StringNullableFilter<"imageProductArtikel"> | string | null
    secure_url?: StringNullableFilter<"imageProductArtikel"> | string | null
    asset_folder?: StringNullableFilter<"imageProductArtikel"> | string | null
    display_name?: StringNullableFilter<"imageProductArtikel"> | string | null
    original_filename?: StringNullableFilter<"imageProductArtikel"> | string | null
    api_key?: StringNullableFilter<"imageProductArtikel"> | string | null
    IdProductArtikel?: IntFilter<"imageProductArtikel"> | number
  }

  export type categoryArtikelUpsertWithoutPostArtikelInput = {
    update: XOR<categoryArtikelUpdateWithoutPostArtikelInput, categoryArtikelUncheckedUpdateWithoutPostArtikelInput>
    create: XOR<categoryArtikelCreateWithoutPostArtikelInput, categoryArtikelUncheckedCreateWithoutPostArtikelInput>
    where?: categoryArtikelWhereInput
  }

  export type categoryArtikelUpdateToOneWithWhereWithoutPostArtikelInput = {
    where?: categoryArtikelWhereInput
    data: XOR<categoryArtikelUpdateWithoutPostArtikelInput, categoryArtikelUncheckedUpdateWithoutPostArtikelInput>
  }

  export type categoryArtikelUpdateWithoutPostArtikelInput = {
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    slugCategory?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    urlYoutube?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoryArtikelUncheckedUpdateWithoutPostArtikelInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    slugCategory?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    urlYoutube?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type postArtikelCreateWithoutImageProductArtikelInput = {
    title: string
    slug: string
    content: string
    description?: string | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    saveDraf?: boolean
    categoryArtikel: categoryArtikelCreateNestedOneWithoutPostArtikelInput
  }

  export type postArtikelUncheckedCreateWithoutImageProductArtikelInput = {
    id?: number
    title: string
    slug: string
    content: string
    description?: string | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    saveDraf?: boolean
    categoryArtikelId: number
  }

  export type postArtikelCreateOrConnectWithoutImageProductArtikelInput = {
    where: postArtikelWhereUniqueInput
    create: XOR<postArtikelCreateWithoutImageProductArtikelInput, postArtikelUncheckedCreateWithoutImageProductArtikelInput>
  }

  export type postArtikelUpsertWithoutImageProductArtikelInput = {
    update: XOR<postArtikelUpdateWithoutImageProductArtikelInput, postArtikelUncheckedUpdateWithoutImageProductArtikelInput>
    create: XOR<postArtikelCreateWithoutImageProductArtikelInput, postArtikelUncheckedCreateWithoutImageProductArtikelInput>
    where?: postArtikelWhereInput
  }

  export type postArtikelUpdateToOneWithWhereWithoutImageProductArtikelInput = {
    where?: postArtikelWhereInput
    data: XOR<postArtikelUpdateWithoutImageProductArtikelInput, postArtikelUncheckedUpdateWithoutImageProductArtikelInput>
  }

  export type postArtikelUpdateWithoutImageProductArtikelInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saveDraf?: BoolFieldUpdateOperationsInput | boolean
    categoryArtikel?: categoryArtikelUpdateOneRequiredWithoutPostArtikelNestedInput
  }

  export type postArtikelUncheckedUpdateWithoutImageProductArtikelInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saveDraf?: BoolFieldUpdateOperationsInput | boolean
    categoryArtikelId?: IntFieldUpdateOperationsInput | number
  }

  export type postArtikelCreateWithoutCategoryArtikelInput = {
    title: string
    slug: string
    content: string
    description?: string | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    saveDraf?: boolean
    imageProductArtikel?: imageProductArtikelCreateNestedManyWithoutUserdInput
  }

  export type postArtikelUncheckedCreateWithoutCategoryArtikelInput = {
    id?: number
    title: string
    slug: string
    content: string
    description?: string | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    saveDraf?: boolean
    imageProductArtikel?: imageProductArtikelUncheckedCreateNestedManyWithoutUserdInput
  }

  export type postArtikelCreateOrConnectWithoutCategoryArtikelInput = {
    where: postArtikelWhereUniqueInput
    create: XOR<postArtikelCreateWithoutCategoryArtikelInput, postArtikelUncheckedCreateWithoutCategoryArtikelInput>
  }

  export type postArtikelCreateManyCategoryArtikelInputEnvelope = {
    data: postArtikelCreateManyCategoryArtikelInput | postArtikelCreateManyCategoryArtikelInput[]
    skipDuplicates?: boolean
  }

  export type postArtikelUpsertWithWhereUniqueWithoutCategoryArtikelInput = {
    where: postArtikelWhereUniqueInput
    update: XOR<postArtikelUpdateWithoutCategoryArtikelInput, postArtikelUncheckedUpdateWithoutCategoryArtikelInput>
    create: XOR<postArtikelCreateWithoutCategoryArtikelInput, postArtikelUncheckedCreateWithoutCategoryArtikelInput>
  }

  export type postArtikelUpdateWithWhereUniqueWithoutCategoryArtikelInput = {
    where: postArtikelWhereUniqueInput
    data: XOR<postArtikelUpdateWithoutCategoryArtikelInput, postArtikelUncheckedUpdateWithoutCategoryArtikelInput>
  }

  export type postArtikelUpdateManyWithWhereWithoutCategoryArtikelInput = {
    where: postArtikelScalarWhereInput
    data: XOR<postArtikelUpdateManyMutationInput, postArtikelUncheckedUpdateManyWithoutCategoryArtikelInput>
  }

  export type postArtikelScalarWhereInput = {
    AND?: postArtikelScalarWhereInput | postArtikelScalarWhereInput[]
    OR?: postArtikelScalarWhereInput[]
    NOT?: postArtikelScalarWhereInput | postArtikelScalarWhereInput[]
    id?: IntFilter<"postArtikel"> | number
    title?: StringFilter<"postArtikel"> | string
    slug?: StringFilter<"postArtikel"> | string
    content?: StringFilter<"postArtikel"> | string
    description?: StringNullableFilter<"postArtikel"> | string | null
    tags?: JsonNullableFilter<"postArtikel">
    createdAt?: DateTimeFilter<"postArtikel"> | Date | string
    updatedAt?: DateTimeFilter<"postArtikel"> | Date | string
    saveDraf?: BoolFilter<"postArtikel"> | boolean
    categoryArtikelId?: IntFilter<"postArtikel"> | number
  }

  export type cartItemCreateWithoutCartInput = {
    start?: Date | string
    end?: Date | string | null
    quantity?: number
    checkList?: boolean
    note?: string | null
    product: listProductCreateNestedOneWithoutCartItemInput
  }

  export type cartItemUncheckedCreateWithoutCartInput = {
    id?: number
    start?: Date | string
    end?: Date | string | null
    productId: number
    quantity?: number
    checkList?: boolean
    note?: string | null
  }

  export type cartItemCreateOrConnectWithoutCartInput = {
    where: cartItemWhereUniqueInput
    create: XOR<cartItemCreateWithoutCartInput, cartItemUncheckedCreateWithoutCartInput>
  }

  export type cartItemCreateManyCartInputEnvelope = {
    data: cartItemCreateManyCartInput | cartItemCreateManyCartInput[]
    skipDuplicates?: boolean
  }

  export type formPembelianCreateWithoutUserInput = {
    start?: Date | string
    end?: Date | string | null
    nama_lengkap_user?: string | null
    alamat_lengkap_user?: string | null
    kode_pos_user?: number | null
    no_hp_user?: bigint | number | null
    catatan_pengiriman?: string | null
  }

  export type formPembelianUncheckedCreateWithoutUserInput = {
    id?: number
    start?: Date | string
    end?: Date | string | null
    nama_lengkap_user?: string | null
    alamat_lengkap_user?: string | null
    kode_pos_user?: number | null
    no_hp_user?: bigint | number | null
    catatan_pengiriman?: string | null
  }

  export type formPembelianCreateOrConnectWithoutUserInput = {
    where: formPembelianWhereUniqueInput
    create: XOR<formPembelianCreateWithoutUserInput, formPembelianUncheckedCreateWithoutUserInput>
  }

  export type dataPesananCreateWithoutCartInput = {
    start?: Date | string
    end?: Date | string | null
    payment?: boolean
    reference?: string | null
    merchantOrderId?: string | null
    dataPesananItems?: dataPesananItemCreateNestedManyWithoutDataPesananInput
  }

  export type dataPesananUncheckedCreateWithoutCartInput = {
    id?: number
    start?: Date | string
    end?: Date | string | null
    payment?: boolean
    reference?: string | null
    merchantOrderId?: string | null
    dataPesananItems?: dataPesananItemUncheckedCreateNestedManyWithoutDataPesananInput
  }

  export type dataPesananCreateOrConnectWithoutCartInput = {
    where: dataPesananWhereUniqueInput
    create: XOR<dataPesananCreateWithoutCartInput, dataPesananUncheckedCreateWithoutCartInput>
  }

  export type dataPesananCreateManyCartInputEnvelope = {
    data: dataPesananCreateManyCartInput | dataPesananCreateManyCartInput[]
    skipDuplicates?: boolean
  }

  export type ongkosKirimCreateWithoutUserInput = {
    start?: Date | string
    end?: Date | string | null
    productName?: string | null
    price?: bigint | number | null
    quantity?: number | null
  }

  export type ongkosKirimUncheckedCreateWithoutUserInput = {
    id?: number
    start?: Date | string
    end?: Date | string | null
    productName?: string | null
    price?: bigint | number | null
    quantity?: number | null
  }

  export type ongkosKirimCreateOrConnectWithoutUserInput = {
    where: ongkosKirimWhereUniqueInput
    create: XOR<ongkosKirimCreateWithoutUserInput, ongkosKirimUncheckedCreateWithoutUserInput>
  }

  export type cartItemUpsertWithWhereUniqueWithoutCartInput = {
    where: cartItemWhereUniqueInput
    update: XOR<cartItemUpdateWithoutCartInput, cartItemUncheckedUpdateWithoutCartInput>
    create: XOR<cartItemCreateWithoutCartInput, cartItemUncheckedCreateWithoutCartInput>
  }

  export type cartItemUpdateWithWhereUniqueWithoutCartInput = {
    where: cartItemWhereUniqueInput
    data: XOR<cartItemUpdateWithoutCartInput, cartItemUncheckedUpdateWithoutCartInput>
  }

  export type cartItemUpdateManyWithWhereWithoutCartInput = {
    where: cartItemScalarWhereInput
    data: XOR<cartItemUpdateManyMutationInput, cartItemUncheckedUpdateManyWithoutCartInput>
  }

  export type formPembelianUpsertWithoutUserInput = {
    update: XOR<formPembelianUpdateWithoutUserInput, formPembelianUncheckedUpdateWithoutUserInput>
    create: XOR<formPembelianCreateWithoutUserInput, formPembelianUncheckedCreateWithoutUserInput>
    where?: formPembelianWhereInput
  }

  export type formPembelianUpdateToOneWithWhereWithoutUserInput = {
    where?: formPembelianWhereInput
    data: XOR<formPembelianUpdateWithoutUserInput, formPembelianUncheckedUpdateWithoutUserInput>
  }

  export type formPembelianUpdateWithoutUserInput = {
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nama_lengkap_user?: NullableStringFieldUpdateOperationsInput | string | null
    alamat_lengkap_user?: NullableStringFieldUpdateOperationsInput | string | null
    kode_pos_user?: NullableIntFieldUpdateOperationsInput | number | null
    no_hp_user?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    catatan_pengiriman?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type formPembelianUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nama_lengkap_user?: NullableStringFieldUpdateOperationsInput | string | null
    alamat_lengkap_user?: NullableStringFieldUpdateOperationsInput | string | null
    kode_pos_user?: NullableIntFieldUpdateOperationsInput | number | null
    no_hp_user?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    catatan_pengiriman?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type dataPesananUpsertWithWhereUniqueWithoutCartInput = {
    where: dataPesananWhereUniqueInput
    update: XOR<dataPesananUpdateWithoutCartInput, dataPesananUncheckedUpdateWithoutCartInput>
    create: XOR<dataPesananCreateWithoutCartInput, dataPesananUncheckedCreateWithoutCartInput>
  }

  export type dataPesananUpdateWithWhereUniqueWithoutCartInput = {
    where: dataPesananWhereUniqueInput
    data: XOR<dataPesananUpdateWithoutCartInput, dataPesananUncheckedUpdateWithoutCartInput>
  }

  export type dataPesananUpdateManyWithWhereWithoutCartInput = {
    where: dataPesananScalarWhereInput
    data: XOR<dataPesananUpdateManyMutationInput, dataPesananUncheckedUpdateManyWithoutCartInput>
  }

  export type dataPesananScalarWhereInput = {
    AND?: dataPesananScalarWhereInput | dataPesananScalarWhereInput[]
    OR?: dataPesananScalarWhereInput[]
    NOT?: dataPesananScalarWhereInput | dataPesananScalarWhereInput[]
    id?: IntFilter<"dataPesanan"> | number
    start?: DateTimeFilter<"dataPesanan"> | Date | string
    end?: DateTimeNullableFilter<"dataPesanan"> | Date | string | null
    payment?: BoolFilter<"dataPesanan"> | boolean
    reference?: StringNullableFilter<"dataPesanan"> | string | null
    merchantOrderId?: StringNullableFilter<"dataPesanan"> | string | null
    cartID?: StringFilter<"dataPesanan"> | string
  }

  export type ongkosKirimUpsertWithoutUserInput = {
    update: XOR<ongkosKirimUpdateWithoutUserInput, ongkosKirimUncheckedUpdateWithoutUserInput>
    create: XOR<ongkosKirimCreateWithoutUserInput, ongkosKirimUncheckedCreateWithoutUserInput>
    where?: ongkosKirimWhereInput
  }

  export type ongkosKirimUpdateToOneWithWhereWithoutUserInput = {
    where?: ongkosKirimWhereInput
    data: XOR<ongkosKirimUpdateWithoutUserInput, ongkosKirimUncheckedUpdateWithoutUserInput>
  }

  export type ongkosKirimUpdateWithoutUserInput = {
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ongkosKirimUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type cartCreateWithoutItemsInput = {
    IDCart: string
    email: string
    clerkUserId: string
    name?: string | null
    avatar?: string | null
    id?: number
    start?: Date | string
    end?: Date | string | null
    formData?: formPembelianCreateNestedOneWithoutUserInput
    dataPesanan?: dataPesananCreateNestedManyWithoutCartInput
    ongkosKirim?: ongkosKirimCreateNestedOneWithoutUserInput
  }

  export type cartUncheckedCreateWithoutItemsInput = {
    IDCart: string
    email: string
    clerkUserId: string
    name?: string | null
    avatar?: string | null
    id?: number
    start?: Date | string
    end?: Date | string | null
    formData?: formPembelianUncheckedCreateNestedOneWithoutUserInput
    dataPesanan?: dataPesananUncheckedCreateNestedManyWithoutCartInput
    ongkosKirim?: ongkosKirimUncheckedCreateNestedOneWithoutUserInput
  }

  export type cartCreateOrConnectWithoutItemsInput = {
    where: cartWhereUniqueInput
    create: XOR<cartCreateWithoutItemsInput, cartUncheckedCreateWithoutItemsInput>
  }

  export type listProductCreateWithoutCartItemInput = {
    start?: Date | string
    end?: Date | string
    slugProduct: string
    saveDraf?: boolean
    descProduct?: string | null
    productName?: string | null
    stockProduct?: number | null
    descMetaProduct?: string | null
    viewProduct?: number | null
    subKategoriProduct?: string | null
    productType?: string | null
    tagProduct?: NullableJsonNullValueInput | InputJsonValue
    productPrice?: bigint | number | null
    productDiscount?: number | null
    productPriceFinal?: bigint | number | null
    urlYoutube?: string | null
    user: categoryProductCreateNestedOneWithoutListProductsInput
    url_image_product?: imageProductCreateNestedManyWithoutUserInput
    spec_product?: specProductCreateNestedOneWithoutUserInput
    imageProductUtama?: imageProductUtamaCreateNestedOneWithoutUserInput
  }

  export type listProductUncheckedCreateWithoutCartItemInput = {
    id?: number
    start?: Date | string
    end?: Date | string
    slugProduct: string
    saveDraf?: boolean
    descProduct?: string | null
    productName?: string | null
    stockProduct?: number | null
    descMetaProduct?: string | null
    viewProduct?: number | null
    subKategoriProduct?: string | null
    productType?: string | null
    tagProduct?: NullableJsonNullValueInput | InputJsonValue
    productPrice?: bigint | number | null
    productDiscount?: number | null
    productPriceFinal?: bigint | number | null
    urlYoutube?: string | null
    productKategori: number
    url_image_product?: imageProductUncheckedCreateNestedManyWithoutUserInput
    spec_product?: specProductUncheckedCreateNestedOneWithoutUserInput
    imageProductUtama?: imageProductUtamaUncheckedCreateNestedOneWithoutUserInput
  }

  export type listProductCreateOrConnectWithoutCartItemInput = {
    where: listProductWhereUniqueInput
    create: XOR<listProductCreateWithoutCartItemInput, listProductUncheckedCreateWithoutCartItemInput>
  }

  export type cartUpsertWithoutItemsInput = {
    update: XOR<cartUpdateWithoutItemsInput, cartUncheckedUpdateWithoutItemsInput>
    create: XOR<cartCreateWithoutItemsInput, cartUncheckedCreateWithoutItemsInput>
    where?: cartWhereInput
  }

  export type cartUpdateToOneWithWhereWithoutItemsInput = {
    where?: cartWhereInput
    data: XOR<cartUpdateWithoutItemsInput, cartUncheckedUpdateWithoutItemsInput>
  }

  export type cartUpdateWithoutItemsInput = {
    IDCart?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    formData?: formPembelianUpdateOneWithoutUserNestedInput
    dataPesanan?: dataPesananUpdateManyWithoutCartNestedInput
    ongkosKirim?: ongkosKirimUpdateOneWithoutUserNestedInput
  }

  export type cartUncheckedUpdateWithoutItemsInput = {
    IDCart?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    formData?: formPembelianUncheckedUpdateOneWithoutUserNestedInput
    dataPesanan?: dataPesananUncheckedUpdateManyWithoutCartNestedInput
    ongkosKirim?: ongkosKirimUncheckedUpdateOneWithoutUserNestedInput
  }

  export type listProductUpsertWithoutCartItemInput = {
    update: XOR<listProductUpdateWithoutCartItemInput, listProductUncheckedUpdateWithoutCartItemInput>
    create: XOR<listProductCreateWithoutCartItemInput, listProductUncheckedCreateWithoutCartItemInput>
    where?: listProductWhereInput
  }

  export type listProductUpdateToOneWithWhereWithoutCartItemInput = {
    where?: listProductWhereInput
    data: XOR<listProductUpdateWithoutCartItemInput, listProductUncheckedUpdateWithoutCartItemInput>
  }

  export type listProductUpdateWithoutCartItemInput = {
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    slugProduct?: StringFieldUpdateOperationsInput | string
    saveDraf?: BoolFieldUpdateOperationsInput | boolean
    descProduct?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    stockProduct?: NullableIntFieldUpdateOperationsInput | number | null
    descMetaProduct?: NullableStringFieldUpdateOperationsInput | string | null
    viewProduct?: NullableIntFieldUpdateOperationsInput | number | null
    subKategoriProduct?: NullableStringFieldUpdateOperationsInput | string | null
    productType?: NullableStringFieldUpdateOperationsInput | string | null
    tagProduct?: NullableJsonNullValueInput | InputJsonValue
    productPrice?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    productDiscount?: NullableIntFieldUpdateOperationsInput | number | null
    productPriceFinal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    urlYoutube?: NullableStringFieldUpdateOperationsInput | string | null
    user?: categoryProductUpdateOneRequiredWithoutListProductsNestedInput
    url_image_product?: imageProductUpdateManyWithoutUserNestedInput
    spec_product?: specProductUpdateOneWithoutUserNestedInput
    imageProductUtama?: imageProductUtamaUpdateOneWithoutUserNestedInput
  }

  export type listProductUncheckedUpdateWithoutCartItemInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    slugProduct?: StringFieldUpdateOperationsInput | string
    saveDraf?: BoolFieldUpdateOperationsInput | boolean
    descProduct?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    stockProduct?: NullableIntFieldUpdateOperationsInput | number | null
    descMetaProduct?: NullableStringFieldUpdateOperationsInput | string | null
    viewProduct?: NullableIntFieldUpdateOperationsInput | number | null
    subKategoriProduct?: NullableStringFieldUpdateOperationsInput | string | null
    productType?: NullableStringFieldUpdateOperationsInput | string | null
    tagProduct?: NullableJsonNullValueInput | InputJsonValue
    productPrice?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    productDiscount?: NullableIntFieldUpdateOperationsInput | number | null
    productPriceFinal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    urlYoutube?: NullableStringFieldUpdateOperationsInput | string | null
    productKategori?: IntFieldUpdateOperationsInput | number
    url_image_product?: imageProductUncheckedUpdateManyWithoutUserNestedInput
    spec_product?: specProductUncheckedUpdateOneWithoutUserNestedInput
    imageProductUtama?: imageProductUtamaUncheckedUpdateOneWithoutUserNestedInput
  }

  export type cartCreateWithoutFormDataInput = {
    IDCart: string
    email: string
    clerkUserId: string
    name?: string | null
    avatar?: string | null
    id?: number
    start?: Date | string
    end?: Date | string | null
    items?: cartItemCreateNestedManyWithoutCartInput
    dataPesanan?: dataPesananCreateNestedManyWithoutCartInput
    ongkosKirim?: ongkosKirimCreateNestedOneWithoutUserInput
  }

  export type cartUncheckedCreateWithoutFormDataInput = {
    IDCart: string
    email: string
    clerkUserId: string
    name?: string | null
    avatar?: string | null
    id?: number
    start?: Date | string
    end?: Date | string | null
    items?: cartItemUncheckedCreateNestedManyWithoutCartInput
    dataPesanan?: dataPesananUncheckedCreateNestedManyWithoutCartInput
    ongkosKirim?: ongkosKirimUncheckedCreateNestedOneWithoutUserInput
  }

  export type cartCreateOrConnectWithoutFormDataInput = {
    where: cartWhereUniqueInput
    create: XOR<cartCreateWithoutFormDataInput, cartUncheckedCreateWithoutFormDataInput>
  }

  export type cartUpsertWithoutFormDataInput = {
    update: XOR<cartUpdateWithoutFormDataInput, cartUncheckedUpdateWithoutFormDataInput>
    create: XOR<cartCreateWithoutFormDataInput, cartUncheckedCreateWithoutFormDataInput>
    where?: cartWhereInput
  }

  export type cartUpdateToOneWithWhereWithoutFormDataInput = {
    where?: cartWhereInput
    data: XOR<cartUpdateWithoutFormDataInput, cartUncheckedUpdateWithoutFormDataInput>
  }

  export type cartUpdateWithoutFormDataInput = {
    IDCart?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: cartItemUpdateManyWithoutCartNestedInput
    dataPesanan?: dataPesananUpdateManyWithoutCartNestedInput
    ongkosKirim?: ongkosKirimUpdateOneWithoutUserNestedInput
  }

  export type cartUncheckedUpdateWithoutFormDataInput = {
    IDCart?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: cartItemUncheckedUpdateManyWithoutCartNestedInput
    dataPesanan?: dataPesananUncheckedUpdateManyWithoutCartNestedInput
    ongkosKirim?: ongkosKirimUncheckedUpdateOneWithoutUserNestedInput
  }

  export type cartCreateWithoutOngkosKirimInput = {
    IDCart: string
    email: string
    clerkUserId: string
    name?: string | null
    avatar?: string | null
    id?: number
    start?: Date | string
    end?: Date | string | null
    items?: cartItemCreateNestedManyWithoutCartInput
    formData?: formPembelianCreateNestedOneWithoutUserInput
    dataPesanan?: dataPesananCreateNestedManyWithoutCartInput
  }

  export type cartUncheckedCreateWithoutOngkosKirimInput = {
    IDCart: string
    email: string
    clerkUserId: string
    name?: string | null
    avatar?: string | null
    id?: number
    start?: Date | string
    end?: Date | string | null
    items?: cartItemUncheckedCreateNestedManyWithoutCartInput
    formData?: formPembelianUncheckedCreateNestedOneWithoutUserInput
    dataPesanan?: dataPesananUncheckedCreateNestedManyWithoutCartInput
  }

  export type cartCreateOrConnectWithoutOngkosKirimInput = {
    where: cartWhereUniqueInput
    create: XOR<cartCreateWithoutOngkosKirimInput, cartUncheckedCreateWithoutOngkosKirimInput>
  }

  export type cartUpsertWithoutOngkosKirimInput = {
    update: XOR<cartUpdateWithoutOngkosKirimInput, cartUncheckedUpdateWithoutOngkosKirimInput>
    create: XOR<cartCreateWithoutOngkosKirimInput, cartUncheckedCreateWithoutOngkosKirimInput>
    where?: cartWhereInput
  }

  export type cartUpdateToOneWithWhereWithoutOngkosKirimInput = {
    where?: cartWhereInput
    data: XOR<cartUpdateWithoutOngkosKirimInput, cartUncheckedUpdateWithoutOngkosKirimInput>
  }

  export type cartUpdateWithoutOngkosKirimInput = {
    IDCart?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: cartItemUpdateManyWithoutCartNestedInput
    formData?: formPembelianUpdateOneWithoutUserNestedInput
    dataPesanan?: dataPesananUpdateManyWithoutCartNestedInput
  }

  export type cartUncheckedUpdateWithoutOngkosKirimInput = {
    IDCart?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: cartItemUncheckedUpdateManyWithoutCartNestedInput
    formData?: formPembelianUncheckedUpdateOneWithoutUserNestedInput
    dataPesanan?: dataPesananUncheckedUpdateManyWithoutCartNestedInput
  }

  export type dataPesananCreateWithoutDataPesananItemsInput = {
    start?: Date | string
    end?: Date | string | null
    payment?: boolean
    reference?: string | null
    merchantOrderId?: string | null
    cart: cartCreateNestedOneWithoutDataPesananInput
  }

  export type dataPesananUncheckedCreateWithoutDataPesananItemsInput = {
    id?: number
    start?: Date | string
    end?: Date | string | null
    payment?: boolean
    reference?: string | null
    merchantOrderId?: string | null
    cartID: string
  }

  export type dataPesananCreateOrConnectWithoutDataPesananItemsInput = {
    where: dataPesananWhereUniqueInput
    create: XOR<dataPesananCreateWithoutDataPesananItemsInput, dataPesananUncheckedCreateWithoutDataPesananItemsInput>
  }

  export type dataPesananUpsertWithoutDataPesananItemsInput = {
    update: XOR<dataPesananUpdateWithoutDataPesananItemsInput, dataPesananUncheckedUpdateWithoutDataPesananItemsInput>
    create: XOR<dataPesananCreateWithoutDataPesananItemsInput, dataPesananUncheckedCreateWithoutDataPesananItemsInput>
    where?: dataPesananWhereInput
  }

  export type dataPesananUpdateToOneWithWhereWithoutDataPesananItemsInput = {
    where?: dataPesananWhereInput
    data: XOR<dataPesananUpdateWithoutDataPesananItemsInput, dataPesananUncheckedUpdateWithoutDataPesananItemsInput>
  }

  export type dataPesananUpdateWithoutDataPesananItemsInput = {
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment?: BoolFieldUpdateOperationsInput | boolean
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    merchantOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    cart?: cartUpdateOneRequiredWithoutDataPesananNestedInput
  }

  export type dataPesananUncheckedUpdateWithoutDataPesananItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment?: BoolFieldUpdateOperationsInput | boolean
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    merchantOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    cartID?: StringFieldUpdateOperationsInput | string
  }

  export type dataPesananItemCreateWithoutDataPesananInput = {
    start?: Date | string
    end?: Date | string | null
    note?: string | null
    productName?: string | null
    price?: bigint | number | null
    priceOriginal?: bigint | number | null
    quantity?: number | null
    methodPayment?: string | null
    image?: string | null
    slugProduct?: string | null
    merchantOrderId?: string | null
    status?: string | null
    noResi?: string | null
  }

  export type dataPesananItemUncheckedCreateWithoutDataPesananInput = {
    id?: number
    start?: Date | string
    end?: Date | string | null
    note?: string | null
    productName?: string | null
    price?: bigint | number | null
    priceOriginal?: bigint | number | null
    quantity?: number | null
    methodPayment?: string | null
    image?: string | null
    slugProduct?: string | null
    merchantOrderId?: string | null
    status?: string | null
    noResi?: string | null
  }

  export type dataPesananItemCreateOrConnectWithoutDataPesananInput = {
    where: dataPesananItemWhereUniqueInput
    create: XOR<dataPesananItemCreateWithoutDataPesananInput, dataPesananItemUncheckedCreateWithoutDataPesananInput>
  }

  export type dataPesananItemCreateManyDataPesananInputEnvelope = {
    data: dataPesananItemCreateManyDataPesananInput | dataPesananItemCreateManyDataPesananInput[]
    skipDuplicates?: boolean
  }

  export type cartCreateWithoutDataPesananInput = {
    IDCart: string
    email: string
    clerkUserId: string
    name?: string | null
    avatar?: string | null
    id?: number
    start?: Date | string
    end?: Date | string | null
    items?: cartItemCreateNestedManyWithoutCartInput
    formData?: formPembelianCreateNestedOneWithoutUserInput
    ongkosKirim?: ongkosKirimCreateNestedOneWithoutUserInput
  }

  export type cartUncheckedCreateWithoutDataPesananInput = {
    IDCart: string
    email: string
    clerkUserId: string
    name?: string | null
    avatar?: string | null
    id?: number
    start?: Date | string
    end?: Date | string | null
    items?: cartItemUncheckedCreateNestedManyWithoutCartInput
    formData?: formPembelianUncheckedCreateNestedOneWithoutUserInput
    ongkosKirim?: ongkosKirimUncheckedCreateNestedOneWithoutUserInput
  }

  export type cartCreateOrConnectWithoutDataPesananInput = {
    where: cartWhereUniqueInput
    create: XOR<cartCreateWithoutDataPesananInput, cartUncheckedCreateWithoutDataPesananInput>
  }

  export type dataPesananItemUpsertWithWhereUniqueWithoutDataPesananInput = {
    where: dataPesananItemWhereUniqueInput
    update: XOR<dataPesananItemUpdateWithoutDataPesananInput, dataPesananItemUncheckedUpdateWithoutDataPesananInput>
    create: XOR<dataPesananItemCreateWithoutDataPesananInput, dataPesananItemUncheckedCreateWithoutDataPesananInput>
  }

  export type dataPesananItemUpdateWithWhereUniqueWithoutDataPesananInput = {
    where: dataPesananItemWhereUniqueInput
    data: XOR<dataPesananItemUpdateWithoutDataPesananInput, dataPesananItemUncheckedUpdateWithoutDataPesananInput>
  }

  export type dataPesananItemUpdateManyWithWhereWithoutDataPesananInput = {
    where: dataPesananItemScalarWhereInput
    data: XOR<dataPesananItemUpdateManyMutationInput, dataPesananItemUncheckedUpdateManyWithoutDataPesananInput>
  }

  export type dataPesananItemScalarWhereInput = {
    AND?: dataPesananItemScalarWhereInput | dataPesananItemScalarWhereInput[]
    OR?: dataPesananItemScalarWhereInput[]
    NOT?: dataPesananItemScalarWhereInput | dataPesananItemScalarWhereInput[]
    id?: IntFilter<"dataPesananItem"> | number
    start?: DateTimeFilter<"dataPesananItem"> | Date | string
    end?: DateTimeNullableFilter<"dataPesananItem"> | Date | string | null
    note?: StringNullableFilter<"dataPesananItem"> | string | null
    productName?: StringNullableFilter<"dataPesananItem"> | string | null
    price?: BigIntNullableFilter<"dataPesananItem"> | bigint | number | null
    priceOriginal?: BigIntNullableFilter<"dataPesananItem"> | bigint | number | null
    quantity?: IntNullableFilter<"dataPesananItem"> | number | null
    methodPayment?: StringNullableFilter<"dataPesananItem"> | string | null
    image?: StringNullableFilter<"dataPesananItem"> | string | null
    slugProduct?: StringNullableFilter<"dataPesananItem"> | string | null
    merchantOrderId?: StringNullableFilter<"dataPesananItem"> | string | null
    status?: StringNullableFilter<"dataPesananItem"> | string | null
    noResi?: StringNullableFilter<"dataPesananItem"> | string | null
    dataPesananId?: IntNullableFilter<"dataPesananItem"> | number | null
  }

  export type cartUpsertWithoutDataPesananInput = {
    update: XOR<cartUpdateWithoutDataPesananInput, cartUncheckedUpdateWithoutDataPesananInput>
    create: XOR<cartCreateWithoutDataPesananInput, cartUncheckedCreateWithoutDataPesananInput>
    where?: cartWhereInput
  }

  export type cartUpdateToOneWithWhereWithoutDataPesananInput = {
    where?: cartWhereInput
    data: XOR<cartUpdateWithoutDataPesananInput, cartUncheckedUpdateWithoutDataPesananInput>
  }

  export type cartUpdateWithoutDataPesananInput = {
    IDCart?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: cartItemUpdateManyWithoutCartNestedInput
    formData?: formPembelianUpdateOneWithoutUserNestedInput
    ongkosKirim?: ongkosKirimUpdateOneWithoutUserNestedInput
  }

  export type cartUncheckedUpdateWithoutDataPesananInput = {
    IDCart?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    clerkUserId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    items?: cartItemUncheckedUpdateManyWithoutCartNestedInput
    formData?: formPembelianUncheckedUpdateOneWithoutUserNestedInput
    ongkosKirim?: ongkosKirimUncheckedUpdateOneWithoutUserNestedInput
  }

  export type listProductCreateManyUserInput = {
    id?: number
    start?: Date | string
    end?: Date | string
    slugProduct: string
    saveDraf?: boolean
    descProduct?: string | null
    productName?: string | null
    stockProduct?: number | null
    descMetaProduct?: string | null
    viewProduct?: number | null
    subKategoriProduct?: string | null
    productType?: string | null
    tagProduct?: NullableJsonNullValueInput | InputJsonValue
    productPrice?: bigint | number | null
    productDiscount?: number | null
    productPriceFinal?: bigint | number | null
    urlYoutube?: string | null
  }

  export type listProductUpdateWithoutUserInput = {
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    slugProduct?: StringFieldUpdateOperationsInput | string
    saveDraf?: BoolFieldUpdateOperationsInput | boolean
    descProduct?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    stockProduct?: NullableIntFieldUpdateOperationsInput | number | null
    descMetaProduct?: NullableStringFieldUpdateOperationsInput | string | null
    viewProduct?: NullableIntFieldUpdateOperationsInput | number | null
    subKategoriProduct?: NullableStringFieldUpdateOperationsInput | string | null
    productType?: NullableStringFieldUpdateOperationsInput | string | null
    tagProduct?: NullableJsonNullValueInput | InputJsonValue
    productPrice?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    productDiscount?: NullableIntFieldUpdateOperationsInput | number | null
    productPriceFinal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    urlYoutube?: NullableStringFieldUpdateOperationsInput | string | null
    url_image_product?: imageProductUpdateManyWithoutUserNestedInput
    spec_product?: specProductUpdateOneWithoutUserNestedInput
    cartItem?: cartItemUpdateManyWithoutProductNestedInput
    imageProductUtama?: imageProductUtamaUpdateOneWithoutUserNestedInput
  }

  export type listProductUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    slugProduct?: StringFieldUpdateOperationsInput | string
    saveDraf?: BoolFieldUpdateOperationsInput | boolean
    descProduct?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    stockProduct?: NullableIntFieldUpdateOperationsInput | number | null
    descMetaProduct?: NullableStringFieldUpdateOperationsInput | string | null
    viewProduct?: NullableIntFieldUpdateOperationsInput | number | null
    subKategoriProduct?: NullableStringFieldUpdateOperationsInput | string | null
    productType?: NullableStringFieldUpdateOperationsInput | string | null
    tagProduct?: NullableJsonNullValueInput | InputJsonValue
    productPrice?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    productDiscount?: NullableIntFieldUpdateOperationsInput | number | null
    productPriceFinal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    urlYoutube?: NullableStringFieldUpdateOperationsInput | string | null
    url_image_product?: imageProductUncheckedUpdateManyWithoutUserNestedInput
    spec_product?: specProductUncheckedUpdateOneWithoutUserNestedInput
    cartItem?: cartItemUncheckedUpdateManyWithoutProductNestedInput
    imageProductUtama?: imageProductUtamaUncheckedUpdateOneWithoutUserNestedInput
  }

  export type listProductUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    slugProduct?: StringFieldUpdateOperationsInput | string
    saveDraf?: BoolFieldUpdateOperationsInput | boolean
    descProduct?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    stockProduct?: NullableIntFieldUpdateOperationsInput | number | null
    descMetaProduct?: NullableStringFieldUpdateOperationsInput | string | null
    viewProduct?: NullableIntFieldUpdateOperationsInput | number | null
    subKategoriProduct?: NullableStringFieldUpdateOperationsInput | string | null
    productType?: NullableStringFieldUpdateOperationsInput | string | null
    tagProduct?: NullableJsonNullValueInput | InputJsonValue
    productPrice?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    productDiscount?: NullableIntFieldUpdateOperationsInput | number | null
    productPriceFinal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    urlYoutube?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type imageProductCreateManyUserInput = {
    id?: number
    start?: Date | string
    end?: Date | string
    asset_id?: string | null
    public_id?: string | null
    version?: number | null
    version_id?: string | null
    signature?: string | null
    width?: number | null
    height?: number | null
    format?: string | null
    resource_type?: string | null
    created_at?: Date | string
    pages?: number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    bytes?: number | null
    type?: string | null
    etag?: string | null
    placeholder?: boolean | null
    url?: string | null
    secure_url?: string | null
    asset_folder?: string | null
    display_name?: string | null
    original_filename?: string | null
    api_key?: string | null
  }

  export type cartItemCreateManyProductInput = {
    id?: number
    start?: Date | string
    end?: Date | string | null
    cartId: string
    quantity?: number
    checkList?: boolean
    note?: string | null
  }

  export type imageProductUpdateWithoutUserInput = {
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    asset_id?: NullableStringFieldUpdateOperationsInput | string | null
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    version_id?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    format?: NullableStringFieldUpdateOperationsInput | string | null
    resource_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    bytes?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    etag?: NullableStringFieldUpdateOperationsInput | string | null
    placeholder?: NullableBoolFieldUpdateOperationsInput | boolean | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    secure_url?: NullableStringFieldUpdateOperationsInput | string | null
    asset_folder?: NullableStringFieldUpdateOperationsInput | string | null
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    original_filename?: NullableStringFieldUpdateOperationsInput | string | null
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type imageProductUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    asset_id?: NullableStringFieldUpdateOperationsInput | string | null
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    version_id?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    format?: NullableStringFieldUpdateOperationsInput | string | null
    resource_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    bytes?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    etag?: NullableStringFieldUpdateOperationsInput | string | null
    placeholder?: NullableBoolFieldUpdateOperationsInput | boolean | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    secure_url?: NullableStringFieldUpdateOperationsInput | string | null
    asset_folder?: NullableStringFieldUpdateOperationsInput | string | null
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    original_filename?: NullableStringFieldUpdateOperationsInput | string | null
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type imageProductUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    asset_id?: NullableStringFieldUpdateOperationsInput | string | null
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    version_id?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    format?: NullableStringFieldUpdateOperationsInput | string | null
    resource_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    bytes?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    etag?: NullableStringFieldUpdateOperationsInput | string | null
    placeholder?: NullableBoolFieldUpdateOperationsInput | boolean | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    secure_url?: NullableStringFieldUpdateOperationsInput | string | null
    asset_folder?: NullableStringFieldUpdateOperationsInput | string | null
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    original_filename?: NullableStringFieldUpdateOperationsInput | string | null
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cartItemUpdateWithoutProductInput = {
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    checkList?: BoolFieldUpdateOperationsInput | boolean
    note?: NullableStringFieldUpdateOperationsInput | string | null
    cart?: cartUpdateOneRequiredWithoutItemsNestedInput
  }

  export type cartItemUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cartId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    checkList?: BoolFieldUpdateOperationsInput | boolean
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cartItemUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cartId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    checkList?: BoolFieldUpdateOperationsInput | boolean
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type imageProductArtikelCreateManyUserdInput = {
    id?: number
    start?: Date | string
    end?: Date | string
    asset_id?: string | null
    public_id?: string | null
    version?: number | null
    version_id?: string | null
    signature?: string | null
    width?: number | null
    height?: number | null
    format?: string | null
    resource_type?: string | null
    created_at?: Date | string
    pages?: number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    bytes?: number | null
    type?: string | null
    etag?: string | null
    placeholder?: boolean | null
    url?: string | null
    secure_url?: string | null
    asset_folder?: string | null
    display_name?: string | null
    original_filename?: string | null
    api_key?: string | null
  }

  export type imageProductArtikelUpdateWithoutUserdInput = {
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    asset_id?: NullableStringFieldUpdateOperationsInput | string | null
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    version_id?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    format?: NullableStringFieldUpdateOperationsInput | string | null
    resource_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    bytes?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    etag?: NullableStringFieldUpdateOperationsInput | string | null
    placeholder?: NullableBoolFieldUpdateOperationsInput | boolean | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    secure_url?: NullableStringFieldUpdateOperationsInput | string | null
    asset_folder?: NullableStringFieldUpdateOperationsInput | string | null
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    original_filename?: NullableStringFieldUpdateOperationsInput | string | null
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type imageProductArtikelUncheckedUpdateWithoutUserdInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    asset_id?: NullableStringFieldUpdateOperationsInput | string | null
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    version_id?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    format?: NullableStringFieldUpdateOperationsInput | string | null
    resource_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    bytes?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    etag?: NullableStringFieldUpdateOperationsInput | string | null
    placeholder?: NullableBoolFieldUpdateOperationsInput | boolean | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    secure_url?: NullableStringFieldUpdateOperationsInput | string | null
    asset_folder?: NullableStringFieldUpdateOperationsInput | string | null
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    original_filename?: NullableStringFieldUpdateOperationsInput | string | null
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type imageProductArtikelUncheckedUpdateManyWithoutUserdInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    asset_id?: NullableStringFieldUpdateOperationsInput | string | null
    public_id?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableIntFieldUpdateOperationsInput | number | null
    version_id?: NullableStringFieldUpdateOperationsInput | string | null
    signature?: NullableStringFieldUpdateOperationsInput | string | null
    width?: NullableIntFieldUpdateOperationsInput | number | null
    height?: NullableIntFieldUpdateOperationsInput | number | null
    format?: NullableStringFieldUpdateOperationsInput | string | null
    resource_type?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    pages?: NullableIntFieldUpdateOperationsInput | number | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    bytes?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    etag?: NullableStringFieldUpdateOperationsInput | string | null
    placeholder?: NullableBoolFieldUpdateOperationsInput | boolean | null
    url?: NullableStringFieldUpdateOperationsInput | string | null
    secure_url?: NullableStringFieldUpdateOperationsInput | string | null
    asset_folder?: NullableStringFieldUpdateOperationsInput | string | null
    display_name?: NullableStringFieldUpdateOperationsInput | string | null
    original_filename?: NullableStringFieldUpdateOperationsInput | string | null
    api_key?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type postArtikelCreateManyCategoryArtikelInput = {
    id?: number
    title: string
    slug: string
    content: string
    description?: string | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    saveDraf?: boolean
  }

  export type postArtikelUpdateWithoutCategoryArtikelInput = {
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saveDraf?: BoolFieldUpdateOperationsInput | boolean
    imageProductArtikel?: imageProductArtikelUpdateManyWithoutUserdNestedInput
  }

  export type postArtikelUncheckedUpdateWithoutCategoryArtikelInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saveDraf?: BoolFieldUpdateOperationsInput | boolean
    imageProductArtikel?: imageProductArtikelUncheckedUpdateManyWithoutUserdNestedInput
  }

  export type postArtikelUncheckedUpdateManyWithoutCategoryArtikelInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saveDraf?: BoolFieldUpdateOperationsInput | boolean
  }

  export type cartItemCreateManyCartInput = {
    id?: number
    start?: Date | string
    end?: Date | string | null
    productId: number
    quantity?: number
    checkList?: boolean
    note?: string | null
  }

  export type dataPesananCreateManyCartInput = {
    id?: number
    start?: Date | string
    end?: Date | string | null
    payment?: boolean
    reference?: string | null
    merchantOrderId?: string | null
  }

  export type cartItemUpdateWithoutCartInput = {
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    quantity?: IntFieldUpdateOperationsInput | number
    checkList?: BoolFieldUpdateOperationsInput | boolean
    note?: NullableStringFieldUpdateOperationsInput | string | null
    product?: listProductUpdateOneRequiredWithoutCartItemNestedInput
  }

  export type cartItemUncheckedUpdateWithoutCartInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    checkList?: BoolFieldUpdateOperationsInput | boolean
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cartItemUncheckedUpdateManyWithoutCartInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    checkList?: BoolFieldUpdateOperationsInput | boolean
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type dataPesananUpdateWithoutCartInput = {
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment?: BoolFieldUpdateOperationsInput | boolean
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    merchantOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    dataPesananItems?: dataPesananItemUpdateManyWithoutDataPesananNestedInput
  }

  export type dataPesananUncheckedUpdateWithoutCartInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment?: BoolFieldUpdateOperationsInput | boolean
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    merchantOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    dataPesananItems?: dataPesananItemUncheckedUpdateManyWithoutDataPesananNestedInput
  }

  export type dataPesananUncheckedUpdateManyWithoutCartInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    payment?: BoolFieldUpdateOperationsInput | boolean
    reference?: NullableStringFieldUpdateOperationsInput | string | null
    merchantOrderId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type dataPesananItemCreateManyDataPesananInput = {
    id?: number
    start?: Date | string
    end?: Date | string | null
    note?: string | null
    productName?: string | null
    price?: bigint | number | null
    priceOriginal?: bigint | number | null
    quantity?: number | null
    methodPayment?: string | null
    image?: string | null
    slugProduct?: string | null
    merchantOrderId?: string | null
    status?: string | null
    noResi?: string | null
  }

  export type dataPesananItemUpdateWithoutDataPesananInput = {
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priceOriginal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    methodPayment?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    slugProduct?: NullableStringFieldUpdateOperationsInput | string | null
    merchantOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    noResi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type dataPesananItemUncheckedUpdateWithoutDataPesananInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priceOriginal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    methodPayment?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    slugProduct?: NullableStringFieldUpdateOperationsInput | string | null
    merchantOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    noResi?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type dataPesananItemUncheckedUpdateManyWithoutDataPesananInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    priceOriginal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    methodPayment?: NullableStringFieldUpdateOperationsInput | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    slugProduct?: NullableStringFieldUpdateOperationsInput | string | null
    merchantOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    noResi?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CategoryProductCountOutputTypeDefaultArgs instead
     */
    export type CategoryProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryProductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ListProductCountOutputTypeDefaultArgs instead
     */
    export type ListProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ListProductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PostArtikelCountOutputTypeDefaultArgs instead
     */
    export type PostArtikelCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PostArtikelCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryArtikelCountOutputTypeDefaultArgs instead
     */
    export type CategoryArtikelCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryArtikelCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CartCountOutputTypeDefaultArgs instead
     */
    export type CartCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CartCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DataPesananCountOutputTypeDefaultArgs instead
     */
    export type DataPesananCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DataPesananCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use categoryProductDefaultArgs instead
     */
    export type categoryProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = categoryProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use listProductDefaultArgs instead
     */
    export type listProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = listProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use specProductDefaultArgs instead
     */
    export type specProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = specProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use imageProductUtamaDefaultArgs instead
     */
    export type imageProductUtamaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = imageProductUtamaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use imageProductDefaultArgs instead
     */
    export type imageProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = imageProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use postArtikelDefaultArgs instead
     */
    export type postArtikelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = postArtikelDefaultArgs<ExtArgs>
    /**
     * @deprecated Use imageProductArtikelDefaultArgs instead
     */
    export type imageProductArtikelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = imageProductArtikelDefaultArgs<ExtArgs>
    /**
     * @deprecated Use categoryArtikelDefaultArgs instead
     */
    export type categoryArtikelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = categoryArtikelDefaultArgs<ExtArgs>
    /**
     * @deprecated Use cartDefaultArgs instead
     */
    export type cartArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = cartDefaultArgs<ExtArgs>
    /**
     * @deprecated Use cartItemDefaultArgs instead
     */
    export type cartItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = cartItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use formPembelianDefaultArgs instead
     */
    export type formPembelianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = formPembelianDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ongkosKirimDefaultArgs instead
     */
    export type ongkosKirimArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ongkosKirimDefaultArgs<ExtArgs>
    /**
     * @deprecated Use dataPesananItemDefaultArgs instead
     */
    export type dataPesananItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = dataPesananItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use dataPesananDefaultArgs instead
     */
    export type dataPesananArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = dataPesananDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
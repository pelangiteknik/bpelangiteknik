
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
    imageProduct: 'imageProduct',
    postArtikel: 'postArtikel',
    imageProductArtikel: 'imageProductArtikel',
    categoryArtikel: 'categoryArtikel'
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
      modelProps: "categoryProduct" | "listProduct" | "specProduct" | "imageProduct" | "postArtikel" | "imageProductArtikel" | "categoryArtikel"
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
  }

  export type ListProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    url_image_product?: boolean | ListProductCountOutputTypeCountUrl_image_productArgs
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
    image: string | null
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
    image: string | null
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
    image: number
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
    image?: true
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
    image?: true
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
    image?: true
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
    image: string | null
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
    image?: boolean
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
    image?: boolean
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
    image?: boolean
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
      image: string | null
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
    readonly image: FieldRef<"categoryProduct", 'String'>
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
    bytes: number | null
    IdProduct: number | null
  }

  export type ImageProductSumAggregateOutputType = {
    id: number | null
    version: number | null
    width: number | null
    height: number | null
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
    bytes?: true
    IdProduct?: true
  }

  export type ImageProductSumAggregateInputType = {
    id?: true
    version?: true
    width?: true
    height?: true
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
    bytes: number | null
    IdProductArtikel: number | null
  }

  export type ImageProductArtikelSumAggregateOutputType = {
    id: number | null
    version: number | null
    width: number | null
    height: number | null
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
    bytes?: true
    IdProductArtikel?: true
  }

  export type ImageProductArtikelSumAggregateInputType = {
    id?: true
    version?: true
    width?: true
    height?: true
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
    image: string | null
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
    image: string | null
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
    image: number
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
    image?: true
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
    image?: true
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
    image?: true
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
    image: string | null
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
    image?: boolean
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
    image?: boolean
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
    image?: boolean
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
      image: string | null
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
    readonly image: FieldRef<"categoryArtikel", 'String'>
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
    image: 'image',
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
    image: 'image',
    urlYoutube: 'urlYoutube',
    title: 'title',
    desc: 'desc',
    tags: 'tags'
  };

  export type CategoryArtikelScalarFieldEnum = (typeof CategoryArtikelScalarFieldEnum)[keyof typeof CategoryArtikelScalarFieldEnum]


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
    image?: StringNullableFilter<"categoryProduct"> | string | null
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
    image?: SortOrderInput | SortOrder
    urlYoutube?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    desc?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    listProducts?: listProductOrderByRelationAggregateInput
  }

  export type categoryProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    category?: string
    AND?: categoryProductWhereInput | categoryProductWhereInput[]
    OR?: categoryProductWhereInput[]
    NOT?: categoryProductWhereInput | categoryProductWhereInput[]
    start?: DateTimeFilter<"categoryProduct"> | Date | string
    end?: DateTimeFilter<"categoryProduct"> | Date | string
    image?: StringNullableFilter<"categoryProduct"> | string | null
    urlYoutube?: StringNullableFilter<"categoryProduct"> | string | null
    title?: StringNullableFilter<"categoryProduct"> | string | null
    desc?: StringNullableFilter<"categoryProduct"> | string | null
    tags?: StringNullableFilter<"categoryProduct"> | string | null
    listProducts?: ListProductListRelationFilter
  }, "id" | "category">

  export type categoryProductOrderByWithAggregationInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    category?: SortOrder
    image?: SortOrderInput | SortOrder
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
    image?: StringNullableWithAggregatesFilter<"categoryProduct"> | string | null
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
    image?: StringNullableFilter<"categoryArtikel"> | string | null
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
    image?: SortOrderInput | SortOrder
    urlYoutube?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    desc?: SortOrderInput | SortOrder
    tags?: SortOrderInput | SortOrder
    postArtikel?: postArtikelOrderByRelationAggregateInput
  }

  export type categoryArtikelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    category?: string
    AND?: categoryArtikelWhereInput | categoryArtikelWhereInput[]
    OR?: categoryArtikelWhereInput[]
    NOT?: categoryArtikelWhereInput | categoryArtikelWhereInput[]
    start?: DateTimeFilter<"categoryArtikel"> | Date | string
    end?: DateTimeFilter<"categoryArtikel"> | Date | string
    image?: StringNullableFilter<"categoryArtikel"> | string | null
    urlYoutube?: StringNullableFilter<"categoryArtikel"> | string | null
    title?: StringNullableFilter<"categoryArtikel"> | string | null
    desc?: StringNullableFilter<"categoryArtikel"> | string | null
    tags?: StringNullableFilter<"categoryArtikel"> | string | null
    postArtikel?: PostArtikelListRelationFilter
  }, "id" | "category">

  export type categoryArtikelOrderByWithAggregationInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    category?: SortOrder
    image?: SortOrderInput | SortOrder
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
    image?: StringNullableWithAggregatesFilter<"categoryArtikel"> | string | null
    urlYoutube?: StringNullableWithAggregatesFilter<"categoryArtikel"> | string | null
    title?: StringNullableWithAggregatesFilter<"categoryArtikel"> | string | null
    desc?: StringNullableWithAggregatesFilter<"categoryArtikel"> | string | null
    tags?: StringNullableWithAggregatesFilter<"categoryArtikel"> | string | null
  }

  export type categoryProductCreateInput = {
    start?: Date | string
    end?: Date | string
    category: string
    image?: string | null
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
    image?: string | null
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
    image?: NullableStringFieldUpdateOperationsInput | string | null
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
    image?: NullableStringFieldUpdateOperationsInput | string | null
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
    image?: string | null
    urlYoutube?: string | null
    title?: string | null
    desc?: string | null
    tags?: string | null
  }

  export type categoryProductUpdateManyMutationInput = {
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
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
    image?: NullableStringFieldUpdateOperationsInput | string | null
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
    image?: string | null
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
    image?: string | null
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
    image?: NullableStringFieldUpdateOperationsInput | string | null
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
    image?: NullableStringFieldUpdateOperationsInput | string | null
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
    image?: string | null
    urlYoutube?: string | null
    title?: string | null
    desc?: string | null
    tags?: string | null
  }

  export type categoryArtikelUpdateManyMutationInput = {
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
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
    image?: NullableStringFieldUpdateOperationsInput | string | null
    urlYoutube?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    desc?: NullableStringFieldUpdateOperationsInput | string | null
    tags?: NullableStringFieldUpdateOperationsInput | string | null
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
    image?: SortOrder
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
    image?: SortOrder
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
    image?: SortOrder
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

  export type imageProductOrderByRelationAggregateInput = {
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
    image?: SortOrder
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
    image?: SortOrder
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
    image?: SortOrder
    urlYoutube?: SortOrder
    title?: SortOrder
    desc?: SortOrder
    tags?: SortOrder
  }

  export type categoryArtikelSumOrderByAggregateInput = {
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

  export type listProductCreateNestedOneWithoutUrl_image_productInput = {
    create?: XOR<listProductCreateWithoutUrl_image_productInput, listProductUncheckedCreateWithoutUrl_image_productInput>
    connectOrCreate?: listProductCreateOrConnectWithoutUrl_image_productInput
    connect?: listProductWhereUniqueInput
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
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
    image?: string | null
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
    image?: string | null
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
    image?: NullableStringFieldUpdateOperationsInput | string | null
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
    image?: NullableStringFieldUpdateOperationsInput | string | null
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
    image?: string | null
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
    image?: string | null
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
    image?: NullableStringFieldUpdateOperationsInput | string | null
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
    image?: NullableStringFieldUpdateOperationsInput | string | null
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
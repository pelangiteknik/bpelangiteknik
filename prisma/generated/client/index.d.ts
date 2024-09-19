
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
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more ListProducts
 * const listProducts = await prisma.listProduct.findMany()
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
   * // Fetch zero or more ListProducts
   * const listProducts = await prisma.listProduct.findMany()
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
    listProduct: 'listProduct',
    specProduct: 'specProduct',
    imageProduct: 'imageProduct'
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
      modelProps: "listProduct" | "specProduct" | "imageProduct"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
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
   * Models
   */

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
    productPrice: number | null
    productDiscount: number | null
    productPriceFinal: number | null
  }

  export type ListProductSumAggregateOutputType = {
    id: number | null
    stockProduct: number | null
    productPrice: bigint | null
    productDiscount: number | null
    productPriceFinal: bigint | null
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
    productType: string | null
    subProductType: string | null
    productPrice: bigint | null
    productDiscount: number | null
    productPriceFinal: bigint | null
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
    productType: string | null
    subProductType: string | null
    productPrice: bigint | null
    productDiscount: number | null
    productPriceFinal: bigint | null
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
    productType: number
    subProductType: number
    tagProduct: number
    productPrice: number
    productDiscount: number
    productPriceFinal: number
    _all: number
  }


  export type ListProductAvgAggregateInputType = {
    id?: true
    stockProduct?: true
    productPrice?: true
    productDiscount?: true
    productPriceFinal?: true
  }

  export type ListProductSumAggregateInputType = {
    id?: true
    stockProduct?: true
    productPrice?: true
    productDiscount?: true
    productPriceFinal?: true
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
    productType?: true
    subProductType?: true
    productPrice?: true
    productDiscount?: true
    productPriceFinal?: true
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
    productType?: true
    subProductType?: true
    productPrice?: true
    productDiscount?: true
    productPriceFinal?: true
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
    productType?: true
    subProductType?: true
    tagProduct?: true
    productPrice?: true
    productDiscount?: true
    productPriceFinal?: true
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
    productType: string | null
    subProductType: string | null
    tagProduct: JsonValue | null
    productPrice: bigint | null
    productDiscount: number | null
    productPriceFinal: bigint | null
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
    productType?: boolean
    subProductType?: boolean
    tagProduct?: boolean
    productPrice?: boolean
    productDiscount?: boolean
    productPriceFinal?: boolean
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
    productType?: boolean
    subProductType?: boolean
    tagProduct?: boolean
    productPrice?: boolean
    productDiscount?: boolean
    productPriceFinal?: boolean
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
    productType?: boolean
    subProductType?: boolean
    tagProduct?: boolean
    productPrice?: boolean
    productDiscount?: boolean
    productPriceFinal?: boolean
  }

  export type listProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    url_image_product?: boolean | listProduct$url_image_productArgs<ExtArgs>
    spec_product?: boolean | listProduct$spec_productArgs<ExtArgs>
    _count?: boolean | ListProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type listProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $listProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "listProduct"
    objects: {
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
      productType: string | null
      subProductType: string | null
      tagProduct: Prisma.JsonValue | null
      productPrice: bigint | null
      productDiscount: number | null
      productPriceFinal: bigint | null
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
    readonly productType: FieldRef<"listProduct", 'String'>
    readonly subProductType: FieldRef<"listProduct", 'String'>
    readonly tagProduct: FieldRef<"listProduct", 'Json'>
    readonly productPrice: FieldRef<"listProduct", 'BigInt'>
    readonly productDiscount: FieldRef<"listProduct", 'Int'>
    readonly productPriceFinal: FieldRef<"listProduct", 'BigInt'>
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
  }

  export type SpecProductSumAggregateOutputType = {
    id: number | null
    weight_spec: number | null
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
    IdProduct: string | null
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
    IdProduct: string | null
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
  }

  export type SpecProductSumAggregateInputType = {
    id?: true
    weight_spec?: true
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
    IdProduct: string
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
      IdProduct: string
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
    readonly IdProduct: FieldRef<"specProduct", 'String'>
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
  }

  export type ImageProductSumAggregateOutputType = {
    id: number | null
    version: number | null
    width: number | null
    height: number | null
    bytes: number | null
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
    IdProduct: string | null
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
    IdProduct: string | null
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
  }

  export type ImageProductSumAggregateInputType = {
    id?: true
    version?: true
    width?: true
    height?: true
    bytes?: true
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
    IdProduct: string
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
      IdProduct: string
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
    readonly IdProduct: FieldRef<"imageProduct", 'String'>
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
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ListProductScalarFieldEnum: {
    id: 'id',
    start: 'start',
    end: 'end',
    slugProduct: 'slugProduct',
    saveDraf: 'saveDraf',
    descProduct: 'descProduct',
    productName: 'productName',
    stockProduct: 'stockProduct',
    productType: 'productType',
    subProductType: 'subProductType',
    tagProduct: 'tagProduct',
    productPrice: 'productPrice',
    productDiscount: 'productDiscount',
    productPriceFinal: 'productPriceFinal'
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


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
    productType?: StringNullableFilter<"listProduct"> | string | null
    subProductType?: StringNullableFilter<"listProduct"> | string | null
    tagProduct?: JsonNullableFilter<"listProduct">
    productPrice?: BigIntNullableFilter<"listProduct"> | bigint | number | null
    productDiscount?: IntNullableFilter<"listProduct"> | number | null
    productPriceFinal?: BigIntNullableFilter<"listProduct"> | bigint | number | null
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
    productType?: SortOrderInput | SortOrder
    subProductType?: SortOrderInput | SortOrder
    tagProduct?: SortOrderInput | SortOrder
    productPrice?: SortOrderInput | SortOrder
    productDiscount?: SortOrderInput | SortOrder
    productPriceFinal?: SortOrderInput | SortOrder
    url_image_product?: imageProductOrderByRelationAggregateInput
    spec_product?: specProductOrderByWithRelationInput
  }

  export type listProductWhereUniqueInput = Prisma.AtLeast<{
    slugProduct?: string
    AND?: listProductWhereInput | listProductWhereInput[]
    OR?: listProductWhereInput[]
    NOT?: listProductWhereInput | listProductWhereInput[]
    id?: IntFilter<"listProduct"> | number
    start?: DateTimeFilter<"listProduct"> | Date | string
    end?: DateTimeFilter<"listProduct"> | Date | string
    saveDraf?: BoolFilter<"listProduct"> | boolean
    descProduct?: StringNullableFilter<"listProduct"> | string | null
    productName?: StringNullableFilter<"listProduct"> | string | null
    stockProduct?: IntNullableFilter<"listProduct"> | number | null
    productType?: StringNullableFilter<"listProduct"> | string | null
    subProductType?: StringNullableFilter<"listProduct"> | string | null
    tagProduct?: JsonNullableFilter<"listProduct">
    productPrice?: BigIntNullableFilter<"listProduct"> | bigint | number | null
    productDiscount?: IntNullableFilter<"listProduct"> | number | null
    productPriceFinal?: BigIntNullableFilter<"listProduct"> | bigint | number | null
    url_image_product?: ImageProductListRelationFilter
    spec_product?: XOR<SpecProductNullableRelationFilter, specProductWhereInput> | null
  }, "slugProduct" | "slugProduct">

  export type listProductOrderByWithAggregationInput = {
    id?: SortOrder
    start?: SortOrder
    end?: SortOrder
    slugProduct?: SortOrder
    saveDraf?: SortOrder
    descProduct?: SortOrderInput | SortOrder
    productName?: SortOrderInput | SortOrder
    stockProduct?: SortOrderInput | SortOrder
    productType?: SortOrderInput | SortOrder
    subProductType?: SortOrderInput | SortOrder
    tagProduct?: SortOrderInput | SortOrder
    productPrice?: SortOrderInput | SortOrder
    productDiscount?: SortOrderInput | SortOrder
    productPriceFinal?: SortOrderInput | SortOrder
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
    productType?: StringNullableWithAggregatesFilter<"listProduct"> | string | null
    subProductType?: StringNullableWithAggregatesFilter<"listProduct"> | string | null
    tagProduct?: JsonNullableWithAggregatesFilter<"listProduct">
    productPrice?: BigIntNullableWithAggregatesFilter<"listProduct"> | bigint | number | null
    productDiscount?: IntNullableWithAggregatesFilter<"listProduct"> | number | null
    productPriceFinal?: BigIntNullableWithAggregatesFilter<"listProduct"> | bigint | number | null
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
    IdProduct?: StringFilter<"specProduct"> | string
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
    IdProduct?: string
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
    IdProduct?: StringWithAggregatesFilter<"specProduct"> | string
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
    IdProduct?: StringFilter<"imageProduct"> | string
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
    IdProduct?: StringFilter<"imageProduct"> | string
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
    IdProduct?: StringWithAggregatesFilter<"imageProduct"> | string
  }

  export type listProductCreateInput = {
    id?: number
    start?: Date | string
    end?: Date | string
    slugProduct: string
    saveDraf?: boolean
    descProduct?: string | null
    productName?: string | null
    stockProduct?: number | null
    productType?: string | null
    subProductType?: string | null
    tagProduct?: NullableJsonNullValueInput | InputJsonValue
    productPrice?: bigint | number | null
    productDiscount?: number | null
    productPriceFinal?: bigint | number | null
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
    productType?: string | null
    subProductType?: string | null
    tagProduct?: NullableJsonNullValueInput | InputJsonValue
    productPrice?: bigint | number | null
    productDiscount?: number | null
    productPriceFinal?: bigint | number | null
    url_image_product?: imageProductUncheckedCreateNestedManyWithoutUserInput
    spec_product?: specProductUncheckedCreateNestedOneWithoutUserInput
  }

  export type listProductUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    slugProduct?: StringFieldUpdateOperationsInput | string
    saveDraf?: BoolFieldUpdateOperationsInput | boolean
    descProduct?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    stockProduct?: NullableIntFieldUpdateOperationsInput | number | null
    productType?: NullableStringFieldUpdateOperationsInput | string | null
    subProductType?: NullableStringFieldUpdateOperationsInput | string | null
    tagProduct?: NullableJsonNullValueInput | InputJsonValue
    productPrice?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    productDiscount?: NullableIntFieldUpdateOperationsInput | number | null
    productPriceFinal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
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
    productType?: NullableStringFieldUpdateOperationsInput | string | null
    subProductType?: NullableStringFieldUpdateOperationsInput | string | null
    tagProduct?: NullableJsonNullValueInput | InputJsonValue
    productPrice?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    productDiscount?: NullableIntFieldUpdateOperationsInput | number | null
    productPriceFinal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
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
    productType?: string | null
    subProductType?: string | null
    tagProduct?: NullableJsonNullValueInput | InputJsonValue
    productPrice?: bigint | number | null
    productDiscount?: number | null
    productPriceFinal?: bigint | number | null
  }

  export type listProductUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    slugProduct?: StringFieldUpdateOperationsInput | string
    saveDraf?: BoolFieldUpdateOperationsInput | boolean
    descProduct?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    stockProduct?: NullableIntFieldUpdateOperationsInput | number | null
    productType?: NullableStringFieldUpdateOperationsInput | string | null
    subProductType?: NullableStringFieldUpdateOperationsInput | string | null
    tagProduct?: NullableJsonNullValueInput | InputJsonValue
    productPrice?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    productDiscount?: NullableIntFieldUpdateOperationsInput | number | null
    productPriceFinal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
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
    productType?: NullableStringFieldUpdateOperationsInput | string | null
    subProductType?: NullableStringFieldUpdateOperationsInput | string | null
    tagProduct?: NullableJsonNullValueInput | InputJsonValue
    productPrice?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    productDiscount?: NullableIntFieldUpdateOperationsInput | number | null
    productPriceFinal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
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
    IdProduct: string
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
    IdProduct?: StringFieldUpdateOperationsInput | string
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
    IdProduct: string
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
    IdProduct?: StringFieldUpdateOperationsInput | string
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
    IdProduct: string
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
    IdProduct?: StringFieldUpdateOperationsInput | string
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
    IdProduct: string
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
    IdProduct?: StringFieldUpdateOperationsInput | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type ImageProductListRelationFilter = {
    every?: imageProductWhereInput
    some?: imageProductWhereInput
    none?: imageProductWhereInput
  }

  export type SpecProductNullableRelationFilter = {
    is?: specProductWhereInput | null
    isNot?: specProductWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
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
    productType?: SortOrder
    subProductType?: SortOrder
    tagProduct?: SortOrder
    productPrice?: SortOrder
    productDiscount?: SortOrder
    productPriceFinal?: SortOrder
  }

  export type listProductAvgOrderByAggregateInput = {
    id?: SortOrder
    stockProduct?: SortOrder
    productPrice?: SortOrder
    productDiscount?: SortOrder
    productPriceFinal?: SortOrder
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
    productType?: SortOrder
    subProductType?: SortOrder
    productPrice?: SortOrder
    productDiscount?: SortOrder
    productPriceFinal?: SortOrder
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
    productType?: SortOrder
    subProductType?: SortOrder
    productPrice?: SortOrder
    productDiscount?: SortOrder
    productPriceFinal?: SortOrder
  }

  export type listProductSumOrderByAggregateInput = {
    id?: SortOrder
    stockProduct?: SortOrder
    productPrice?: SortOrder
    productDiscount?: SortOrder
    productPriceFinal?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
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

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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
    IdProduct?: StringFilter<"imageProduct"> | string
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
    id?: number
    start?: Date | string
    end?: Date | string
    slugProduct: string
    saveDraf?: boolean
    descProduct?: string | null
    productName?: string | null
    stockProduct?: number | null
    productType?: string | null
    subProductType?: string | null
    tagProduct?: NullableJsonNullValueInput | InputJsonValue
    productPrice?: bigint | number | null
    productDiscount?: number | null
    productPriceFinal?: bigint | number | null
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
    productType?: string | null
    subProductType?: string | null
    tagProduct?: NullableJsonNullValueInput | InputJsonValue
    productPrice?: bigint | number | null
    productDiscount?: number | null
    productPriceFinal?: bigint | number | null
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
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    slugProduct?: StringFieldUpdateOperationsInput | string
    saveDraf?: BoolFieldUpdateOperationsInput | boolean
    descProduct?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    stockProduct?: NullableIntFieldUpdateOperationsInput | number | null
    productType?: NullableStringFieldUpdateOperationsInput | string | null
    subProductType?: NullableStringFieldUpdateOperationsInput | string | null
    tagProduct?: NullableJsonNullValueInput | InputJsonValue
    productPrice?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    productDiscount?: NullableIntFieldUpdateOperationsInput | number | null
    productPriceFinal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
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
    productType?: NullableStringFieldUpdateOperationsInput | string | null
    subProductType?: NullableStringFieldUpdateOperationsInput | string | null
    tagProduct?: NullableJsonNullValueInput | InputJsonValue
    productPrice?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    productDiscount?: NullableIntFieldUpdateOperationsInput | number | null
    productPriceFinal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    url_image_product?: imageProductUncheckedUpdateManyWithoutUserNestedInput
  }

  export type listProductCreateWithoutUrl_image_productInput = {
    id?: number
    start?: Date | string
    end?: Date | string
    slugProduct: string
    saveDraf?: boolean
    descProduct?: string | null
    productName?: string | null
    stockProduct?: number | null
    productType?: string | null
    subProductType?: string | null
    tagProduct?: NullableJsonNullValueInput | InputJsonValue
    productPrice?: bigint | number | null
    productDiscount?: number | null
    productPriceFinal?: bigint | number | null
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
    productType?: string | null
    subProductType?: string | null
    tagProduct?: NullableJsonNullValueInput | InputJsonValue
    productPrice?: bigint | number | null
    productDiscount?: number | null
    productPriceFinal?: bigint | number | null
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
    id?: IntFieldUpdateOperationsInput | number
    start?: DateTimeFieldUpdateOperationsInput | Date | string
    end?: DateTimeFieldUpdateOperationsInput | Date | string
    slugProduct?: StringFieldUpdateOperationsInput | string
    saveDraf?: BoolFieldUpdateOperationsInput | boolean
    descProduct?: NullableStringFieldUpdateOperationsInput | string | null
    productName?: NullableStringFieldUpdateOperationsInput | string | null
    stockProduct?: NullableIntFieldUpdateOperationsInput | number | null
    productType?: NullableStringFieldUpdateOperationsInput | string | null
    subProductType?: NullableStringFieldUpdateOperationsInput | string | null
    tagProduct?: NullableJsonNullValueInput | InputJsonValue
    productPrice?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    productDiscount?: NullableIntFieldUpdateOperationsInput | number | null
    productPriceFinal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
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
    productType?: NullableStringFieldUpdateOperationsInput | string | null
    subProductType?: NullableStringFieldUpdateOperationsInput | string | null
    tagProduct?: NullableJsonNullValueInput | InputJsonValue
    productPrice?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    productDiscount?: NullableIntFieldUpdateOperationsInput | number | null
    productPriceFinal?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    spec_product?: specProductUncheckedUpdateOneWithoutUserNestedInput
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



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ListProductCountOutputTypeDefaultArgs instead
     */
    export type ListProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ListProductCountOutputTypeDefaultArgs<ExtArgs>
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

/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model Group
 * 
 */
export type Group = $Result.DefaultSelection<Prisma.$GroupPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Model
 * 
 */
export type Model = $Result.DefaultSelection<Prisma.$ModelPayload>
/**
 * Model Type
 * 
 */
export type Type = $Result.DefaultSelection<Prisma.$TypePayload>
/**
 * Model Capacity
 * 
 */
export type Capacity = $Result.DefaultSelection<Prisma.$CapacityPayload>
/**
 * Model Height
 * 
 */
export type Height = $Result.DefaultSelection<Prisma.$HeightPayload>
/**
 * Model Power
 * 
 */
export type Power = $Result.DefaultSelection<Prisma.$PowerPayload>
/**
 * Model InputOutput
 * 
 */
export type InputOutput = $Result.DefaultSelection<Prisma.$InputOutputPayload>
/**
 * Model Propose
 * 
 */
export type Propose = $Result.DefaultSelection<Prisma.$ProposePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs>;

  /**
   * `prisma.group`: Exposes CRUD operations for the **Group** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groups
    * const groups = await prisma.group.findMany()
    * ```
    */
  get group(): Prisma.GroupDelegate<ExtArgs>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs>;

  /**
   * `prisma.model`: Exposes CRUD operations for the **Model** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Models
    * const models = await prisma.model.findMany()
    * ```
    */
  get model(): Prisma.ModelDelegate<ExtArgs>;

  /**
   * `prisma.type`: Exposes CRUD operations for the **Type** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Types
    * const types = await prisma.type.findMany()
    * ```
    */
  get type(): Prisma.TypeDelegate<ExtArgs>;

  /**
   * `prisma.capacity`: Exposes CRUD operations for the **Capacity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Capacities
    * const capacities = await prisma.capacity.findMany()
    * ```
    */
  get capacity(): Prisma.CapacityDelegate<ExtArgs>;

  /**
   * `prisma.height`: Exposes CRUD operations for the **Height** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Heights
    * const heights = await prisma.height.findMany()
    * ```
    */
  get height(): Prisma.HeightDelegate<ExtArgs>;

  /**
   * `prisma.power`: Exposes CRUD operations for the **Power** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Powers
    * const powers = await prisma.power.findMany()
    * ```
    */
  get power(): Prisma.PowerDelegate<ExtArgs>;

  /**
   * `prisma.inputOutput`: Exposes CRUD operations for the **InputOutput** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more InputOutputs
    * const inputOutputs = await prisma.inputOutput.findMany()
    * ```
    */
  get inputOutput(): Prisma.InputOutputDelegate<ExtArgs>;

  /**
   * `prisma.propose`: Exposes CRUD operations for the **Propose** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Proposes
    * const proposes = await prisma.propose.findMany()
    * ```
    */
  get propose(): Prisma.ProposeDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.6.0
   * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
    User: 'User',
    Client: 'Client',
    Group: 'Group',
    Product: 'Product',
    Model: 'Model',
    Type: 'Type',
    Capacity: 'Capacity',
    Height: 'Height',
    Power: 'Power',
    InputOutput: 'InputOutput',
    Propose: 'Propose'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'client' | 'group' | 'product' | 'model' | 'type' | 'capacity' | 'height' | 'power' | 'inputOutput' | 'propose'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>,
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      Group: {
        payload: Prisma.$GroupPayload<ExtArgs>
        fields: Prisma.GroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findFirst: {
            args: Prisma.GroupFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          findMany: {
            args: Prisma.GroupFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>[]
          }
          create: {
            args: Prisma.GroupCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          createMany: {
            args: Prisma.GroupCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GroupDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          update: {
            args: Prisma.GroupUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          deleteMany: {
            args: Prisma.GroupDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GroupUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GroupUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupPayload>
          }
          aggregate: {
            args: Prisma.GroupAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGroup>
          }
          groupBy: {
            args: Prisma.GroupGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupCountArgs<ExtArgs>,
            result: $Utils.Optional<GroupCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>,
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Model: {
        payload: Prisma.$ModelPayload<ExtArgs>
        fields: Prisma.ModelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ModelFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ModelFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          findFirst: {
            args: Prisma.ModelFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ModelFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          findMany: {
            args: Prisma.ModelFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>[]
          }
          create: {
            args: Prisma.ModelCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          createMany: {
            args: Prisma.ModelCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ModelDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          update: {
            args: Prisma.ModelUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          deleteMany: {
            args: Prisma.ModelDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ModelUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ModelUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ModelPayload>
          }
          aggregate: {
            args: Prisma.ModelAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateModel>
          }
          groupBy: {
            args: Prisma.ModelGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ModelGroupByOutputType>[]
          }
          count: {
            args: Prisma.ModelCountArgs<ExtArgs>,
            result: $Utils.Optional<ModelCountAggregateOutputType> | number
          }
        }
      }
      Type: {
        payload: Prisma.$TypePayload<ExtArgs>
        fields: Prisma.TypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TypeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TypeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          findFirst: {
            args: Prisma.TypeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TypeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          findMany: {
            args: Prisma.TypeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TypePayload>[]
          }
          create: {
            args: Prisma.TypeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          createMany: {
            args: Prisma.TypeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TypeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          update: {
            args: Prisma.TypeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          deleteMany: {
            args: Prisma.TypeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TypeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TypeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TypePayload>
          }
          aggregate: {
            args: Prisma.TypeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateType>
          }
          groupBy: {
            args: Prisma.TypeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.TypeCountArgs<ExtArgs>,
            result: $Utils.Optional<TypeCountAggregateOutputType> | number
          }
        }
      }
      Capacity: {
        payload: Prisma.$CapacityPayload<ExtArgs>
        fields: Prisma.CapacityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CapacityFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CapacityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CapacityFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CapacityPayload>
          }
          findFirst: {
            args: Prisma.CapacityFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CapacityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CapacityFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CapacityPayload>
          }
          findMany: {
            args: Prisma.CapacityFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CapacityPayload>[]
          }
          create: {
            args: Prisma.CapacityCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CapacityPayload>
          }
          createMany: {
            args: Prisma.CapacityCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CapacityDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CapacityPayload>
          }
          update: {
            args: Prisma.CapacityUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CapacityPayload>
          }
          deleteMany: {
            args: Prisma.CapacityDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CapacityUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CapacityUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CapacityPayload>
          }
          aggregate: {
            args: Prisma.CapacityAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCapacity>
          }
          groupBy: {
            args: Prisma.CapacityGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CapacityGroupByOutputType>[]
          }
          count: {
            args: Prisma.CapacityCountArgs<ExtArgs>,
            result: $Utils.Optional<CapacityCountAggregateOutputType> | number
          }
        }
      }
      Height: {
        payload: Prisma.$HeightPayload<ExtArgs>
        fields: Prisma.HeightFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HeightFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HeightPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HeightFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HeightPayload>
          }
          findFirst: {
            args: Prisma.HeightFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HeightPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HeightFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HeightPayload>
          }
          findMany: {
            args: Prisma.HeightFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HeightPayload>[]
          }
          create: {
            args: Prisma.HeightCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HeightPayload>
          }
          createMany: {
            args: Prisma.HeightCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.HeightDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HeightPayload>
          }
          update: {
            args: Prisma.HeightUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HeightPayload>
          }
          deleteMany: {
            args: Prisma.HeightDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.HeightUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.HeightUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$HeightPayload>
          }
          aggregate: {
            args: Prisma.HeightAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateHeight>
          }
          groupBy: {
            args: Prisma.HeightGroupByArgs<ExtArgs>,
            result: $Utils.Optional<HeightGroupByOutputType>[]
          }
          count: {
            args: Prisma.HeightCountArgs<ExtArgs>,
            result: $Utils.Optional<HeightCountAggregateOutputType> | number
          }
        }
      }
      Power: {
        payload: Prisma.$PowerPayload<ExtArgs>
        fields: Prisma.PowerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PowerFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PowerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PowerFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PowerPayload>
          }
          findFirst: {
            args: Prisma.PowerFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PowerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PowerFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PowerPayload>
          }
          findMany: {
            args: Prisma.PowerFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PowerPayload>[]
          }
          create: {
            args: Prisma.PowerCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PowerPayload>
          }
          createMany: {
            args: Prisma.PowerCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PowerDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PowerPayload>
          }
          update: {
            args: Prisma.PowerUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PowerPayload>
          }
          deleteMany: {
            args: Prisma.PowerDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PowerUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PowerUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PowerPayload>
          }
          aggregate: {
            args: Prisma.PowerAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePower>
          }
          groupBy: {
            args: Prisma.PowerGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PowerGroupByOutputType>[]
          }
          count: {
            args: Prisma.PowerCountArgs<ExtArgs>,
            result: $Utils.Optional<PowerCountAggregateOutputType> | number
          }
        }
      }
      InputOutput: {
        payload: Prisma.$InputOutputPayload<ExtArgs>
        fields: Prisma.InputOutputFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InputOutputFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InputOutputPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InputOutputFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InputOutputPayload>
          }
          findFirst: {
            args: Prisma.InputOutputFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InputOutputPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InputOutputFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InputOutputPayload>
          }
          findMany: {
            args: Prisma.InputOutputFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InputOutputPayload>[]
          }
          create: {
            args: Prisma.InputOutputCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InputOutputPayload>
          }
          createMany: {
            args: Prisma.InputOutputCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.InputOutputDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InputOutputPayload>
          }
          update: {
            args: Prisma.InputOutputUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InputOutputPayload>
          }
          deleteMany: {
            args: Prisma.InputOutputDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.InputOutputUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.InputOutputUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$InputOutputPayload>
          }
          aggregate: {
            args: Prisma.InputOutputAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateInputOutput>
          }
          groupBy: {
            args: Prisma.InputOutputGroupByArgs<ExtArgs>,
            result: $Utils.Optional<InputOutputGroupByOutputType>[]
          }
          count: {
            args: Prisma.InputOutputCountArgs<ExtArgs>,
            result: $Utils.Optional<InputOutputCountAggregateOutputType> | number
          }
        }
      }
      Propose: {
        payload: Prisma.$ProposePayload<ExtArgs>
        fields: Prisma.ProposeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProposeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProposePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProposeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProposePayload>
          }
          findFirst: {
            args: Prisma.ProposeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProposePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProposeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProposePayload>
          }
          findMany: {
            args: Prisma.ProposeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProposePayload>[]
          }
          create: {
            args: Prisma.ProposeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProposePayload>
          }
          createMany: {
            args: Prisma.ProposeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ProposeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProposePayload>
          }
          update: {
            args: Prisma.ProposeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProposePayload>
          }
          deleteMany: {
            args: Prisma.ProposeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ProposeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ProposeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ProposePayload>
          }
          aggregate: {
            args: Prisma.ProposeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePropose>
          }
          groupBy: {
            args: Prisma.ProposeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ProposeGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProposeCountArgs<ExtArgs>,
            result: $Utils.Optional<ProposeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
   * Count Type GroupCountOutputType
   */

  export type GroupCountOutputType = {
    products: number
  }

  export type GroupCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | GroupCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes

  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupCountOutputType
     */
    select?: GroupCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * GroupCountOutputType without action
   */
  export type GroupCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }



  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    models: number
    types: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    models?: boolean | ProductCountOutputTypeCountModelsArgs
    types?: boolean | ProductCountOutputTypeCountTypesArgs
  }

  // Custom InputTypes

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountModelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModelWhereInput
  }


  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountTypesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TypeWhereInput
  }



  /**
   * Count Type ModelCountOutputType
   */

  export type ModelCountOutputType = {
    capacities: number
  }

  export type ModelCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    capacities?: boolean | ModelCountOutputTypeCountCapacitiesArgs
  }

  // Custom InputTypes

  /**
   * ModelCountOutputType without action
   */
  export type ModelCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ModelCountOutputType
     */
    select?: ModelCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ModelCountOutputType without action
   */
  export type ModelCountOutputTypeCountCapacitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CapacityWhereInput
  }



  /**
   * Count Type CapacityCountOutputType
   */

  export type CapacityCountOutputType = {
    heights: number
  }

  export type CapacityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    heights?: boolean | CapacityCountOutputTypeCountHeightsArgs
  }

  // Custom InputTypes

  /**
   * CapacityCountOutputType without action
   */
  export type CapacityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CapacityCountOutputType
     */
    select?: CapacityCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CapacityCountOutputType without action
   */
  export type CapacityCountOutputTypeCountHeightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HeightWhereInput
  }



  /**
   * Count Type HeightCountOutputType
   */

  export type HeightCountOutputType = {
    powers: number
  }

  export type HeightCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    powers?: boolean | HeightCountOutputTypeCountPowersArgs
  }

  // Custom InputTypes

  /**
   * HeightCountOutputType without action
   */
  export type HeightCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HeightCountOutputType
     */
    select?: HeightCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * HeightCountOutputType without action
   */
  export type HeightCountOutputTypeCountPowersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PowerWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    username: string | null
    email: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    username: string | null
    email: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    username: number
    email: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    username?: true
    email?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    username: string
    email: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    username?: boolean
    email?: boolean
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      username: string
      email: string
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
  }



  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientAvgAggregateOutputType = {
    id: number | null
  }

  export type ClientSumAggregateOutputType = {
    id: number | null
  }

  export type ClientMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    city: string | null
    state: string | null
    zip: string | null
  }

  export type ClientMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
    address: string | null
    city: string | null
    state: string | null
    zip: string | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    address: number
    city: number
    state: number
    zip: number
    _all: number
  }


  export type ClientAvgAggregateInputType = {
    id?: true
  }

  export type ClientSumAggregateInputType = {
    id?: true
  }

  export type ClientMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    city?: true
    state?: true
    zip?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    city?: true
    state?: true
    zip?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    address?: true
    city?: true
    state?: true
    zip?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _avg?: ClientAvgAggregateInputType
    _sum?: ClientSumAggregateInputType
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: number
    name: string
    email: string
    phone: string
    address: string
    city: string
    state: string
    zip: string
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zip?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    city?: boolean
    state?: boolean
    zip?: boolean
  }


  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      phone: string
      address: string
      city: string
      state: string
      zip: string
    }, ExtArgs["result"]["client"]>
    composites: {}
  }


  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ClientFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>
    ): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Client that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ClientFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>
    ): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ClientFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
    **/
    create<T extends ClientCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ClientCreateArgs<ExtArgs>>
    ): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Clients.
     *     @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     *     @example
     *     // Create many Clients
     *     const client = await prisma.client.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ClientCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
    **/
    delete<T extends ClientDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>
    ): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ClientUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>
    ): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ClientDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ClientUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
    **/
    upsert<T extends ClientUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>
    ): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
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
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Client model
   */ 
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'Int'>
    readonly name: FieldRef<"Client", 'String'>
    readonly email: FieldRef<"Client", 'String'>
    readonly phone: FieldRef<"Client", 'String'>
    readonly address: FieldRef<"Client", 'String'>
    readonly city: FieldRef<"Client", 'String'>
    readonly state: FieldRef<"Client", 'String'>
    readonly zip: FieldRef<"Client", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }


  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }


  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }


  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }


  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }


  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }


  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }


  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
  }


  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }


  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }


  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
  }


  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
  }



  /**
   * Model Group
   */

  export type AggregateGroup = {
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  export type GroupAvgAggregateOutputType = {
    id: number | null
  }

  export type GroupSumAggregateOutputType = {
    id: number | null
  }

  export type GroupMinAggregateOutputType = {
    id: number | null
    title: string | null
  }

  export type GroupMaxAggregateOutputType = {
    id: number | null
    title: string | null
  }

  export type GroupCountAggregateOutputType = {
    id: number
    title: number
    _all: number
  }


  export type GroupAvgAggregateInputType = {
    id?: true
  }

  export type GroupSumAggregateInputType = {
    id?: true
  }

  export type GroupMinAggregateInputType = {
    id?: true
    title?: true
  }

  export type GroupMaxAggregateInputType = {
    id?: true
    title?: true
  }

  export type GroupCountAggregateInputType = {
    id?: true
    title?: true
    _all?: true
  }

  export type GroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Group to aggregate.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groups
    **/
    _count?: true | GroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupMaxAggregateInputType
  }

  export type GetGroupAggregateType<T extends GroupAggregateArgs> = {
        [P in keyof T & keyof AggregateGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroup[P]>
      : GetScalarType<T[P], AggregateGroup[P]>
  }




  export type GroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupWhereInput
    orderBy?: GroupOrderByWithAggregationInput | GroupOrderByWithAggregationInput[]
    by: GroupScalarFieldEnum[] | GroupScalarFieldEnum
    having?: GroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupCountAggregateInputType | true
    _avg?: GroupAvgAggregateInputType
    _sum?: GroupSumAggregateInputType
    _min?: GroupMinAggregateInputType
    _max?: GroupMaxAggregateInputType
  }

  export type GroupGroupByOutputType = {
    id: number
    title: string
    _count: GroupCountAggregateOutputType | null
    _avg: GroupAvgAggregateOutputType | null
    _sum: GroupSumAggregateOutputType | null
    _min: GroupMinAggregateOutputType | null
    _max: GroupMaxAggregateOutputType | null
  }

  type GetGroupGroupByPayload<T extends GroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupGroupByOutputType[P]>
            : GetScalarType<T[P], GroupGroupByOutputType[P]>
        }
      >
    >


  export type GroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    products?: boolean | Group$productsArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["group"]>

  export type GroupSelectScalar = {
    id?: boolean
    title?: boolean
  }

  export type GroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Group$productsArgs<ExtArgs>
    _count?: boolean | GroupCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $GroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Group"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
    }, ExtArgs["result"]["group"]>
    composites: {}
  }


  type GroupGetPayload<S extends boolean | null | undefined | GroupDefaultArgs> = $Result.GetResult<Prisma.$GroupPayload, S>

  type GroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GroupFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: GroupCountAggregateInputType | true
    }

  export interface GroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Group'], meta: { name: 'Group' } }
    /**
     * Find zero or one Group that matches the filter.
     * @param {GroupFindUniqueArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GroupFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GroupFindUniqueArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Group that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GroupFindUniqueOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GroupFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Group that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GroupFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupFindFirstArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Group that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindFirstOrThrowArgs} args - Arguments to find a Group
     * @example
     * // Get one Group
     * const group = await prisma.group.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GroupFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Groups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groups
     * const groups = await prisma.group.findMany()
     * 
     * // Get first 10 Groups
     * const groups = await prisma.group.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupWithIdOnly = await prisma.group.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GroupFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Group.
     * @param {GroupCreateArgs} args - Arguments to create a Group.
     * @example
     * // Create one Group
     * const Group = await prisma.group.create({
     *   data: {
     *     // ... data to create a Group
     *   }
     * })
     * 
    **/
    create<T extends GroupCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GroupCreateArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Groups.
     *     @param {GroupCreateManyArgs} args - Arguments to create many Groups.
     *     @example
     *     // Create many Groups
     *     const group = await prisma.group.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GroupCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Group.
     * @param {GroupDeleteArgs} args - Arguments to delete one Group.
     * @example
     * // Delete one Group
     * const Group = await prisma.group.delete({
     *   where: {
     *     // ... filter to delete one Group
     *   }
     * })
     * 
    **/
    delete<T extends GroupDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GroupDeleteArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Group.
     * @param {GroupUpdateArgs} args - Arguments to update one Group.
     * @example
     * // Update one Group
     * const group = await prisma.group.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GroupUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GroupUpdateArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Groups.
     * @param {GroupDeleteManyArgs} args - Arguments to filter Groups to delete.
     * @example
     * // Delete a few Groups
     * const { count } = await prisma.group.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GroupDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groups
     * const group = await prisma.group.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GroupUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GroupUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Group.
     * @param {GroupUpsertArgs} args - Arguments to update or create a Group.
     * @example
     * // Update or create a Group
     * const group = await prisma.group.upsert({
     *   create: {
     *     // ... data to create a Group
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Group we want to update
     *   }
     * })
    **/
    upsert<T extends GroupUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GroupUpsertArgs<ExtArgs>>
    ): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Groups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupCountArgs} args - Arguments to filter Groups to count.
     * @example
     * // Count the number of Groups
     * const count = await prisma.group.count({
     *   where: {
     *     // ... the filter for the Groups we want to count
     *   }
     * })
    **/
    count<T extends GroupCountArgs>(
      args?: Subset<T, GroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupAggregateArgs>(args: Subset<T, GroupAggregateArgs>): Prisma.PrismaPromise<GetGroupAggregateType<T>>

    /**
     * Group by Group.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupGroupByArgs} args - Group by arguments.
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
      T extends GroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupGroupByArgs['orderBy'] }
        : { orderBy?: GroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Group model
   */
  readonly fields: GroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Group.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    products<T extends Group$productsArgs<ExtArgs> = {}>(args?: Subset<T, Group$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Group model
   */ 
  interface GroupFieldRefs {
    readonly id: FieldRef<"Group", 'Int'>
    readonly title: FieldRef<"Group", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Group findUnique
   */
  export type GroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }


  /**
   * Group findUniqueOrThrow
   */
  export type GroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where: GroupWhereUniqueInput
  }


  /**
   * Group findFirst
   */
  export type GroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }


  /**
   * Group findFirstOrThrow
   */
  export type GroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Group to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groups.
     */
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }


  /**
   * Group findMany
   */
  export type GroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter, which Groups to fetch.
     */
    where?: GroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groups to fetch.
     */
    orderBy?: GroupOrderByWithRelationInput | GroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groups.
     */
    cursor?: GroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groups.
     */
    skip?: number
    distinct?: GroupScalarFieldEnum | GroupScalarFieldEnum[]
  }


  /**
   * Group create
   */
  export type GroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to create a Group.
     */
    data: XOR<GroupCreateInput, GroupUncheckedCreateInput>
  }


  /**
   * Group createMany
   */
  export type GroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groups.
     */
    data: GroupCreateManyInput | GroupCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Group update
   */
  export type GroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The data needed to update a Group.
     */
    data: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
    /**
     * Choose, which Group to update.
     */
    where: GroupWhereUniqueInput
  }


  /**
   * Group updateMany
   */
  export type GroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groups.
     */
    data: XOR<GroupUpdateManyMutationInput, GroupUncheckedUpdateManyInput>
    /**
     * Filter which Groups to update
     */
    where?: GroupWhereInput
  }


  /**
   * Group upsert
   */
  export type GroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * The filter to search for the Group to update in case it exists.
     */
    where: GroupWhereUniqueInput
    /**
     * In case the Group found by the `where` argument doesn't exist, create a new Group with this data.
     */
    create: XOR<GroupCreateInput, GroupUncheckedCreateInput>
    /**
     * In case the Group was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupUpdateInput, GroupUncheckedUpdateInput>
  }


  /**
   * Group delete
   */
  export type GroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
    /**
     * Filter which Group to delete.
     */
    where: GroupWhereUniqueInput
  }


  /**
   * Group deleteMany
   */
  export type GroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groups to delete
     */
    where?: GroupWhereInput
  }


  /**
   * Group.products
   */
  export type Group$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Group without action
   */
  export type GroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Group
     */
    select?: GroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupInclude<ExtArgs> | null
  }



  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    groupId: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    groupId: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    title: string | null
    groupId: number | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    title: string | null
    groupId: number | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    title: number
    groupId: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    groupId?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    groupId?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    title?: true
    groupId?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    title?: true
    groupId?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    title?: true
    groupId?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    title: string
    groupId: number
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    groupId?: boolean
    group?: boolean | GroupDefaultArgs<ExtArgs>
    models?: boolean | Product$modelsArgs<ExtArgs>
    types?: boolean | Product$typesArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    title?: boolean
    groupId?: boolean
  }

  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    group?: boolean | GroupDefaultArgs<ExtArgs>
    models?: boolean | Product$modelsArgs<ExtArgs>
    types?: boolean | Product$typesArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      group: Prisma.$GroupPayload<ExtArgs>
      models: Prisma.$ModelPayload<ExtArgs>[]
      types: Prisma.$TypePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      groupId: number
    }, ExtArgs["result"]["product"]>
    composites: {}
  }


  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProductFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProductFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProductFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
    **/
    create<T extends ProductCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductCreateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Products.
     *     @param {ProductCreateManyArgs} args - Arguments to create many Products.
     *     @example
     *     // Create many Products
     *     const product = await prisma.product.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProductCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
    **/
    delete<T extends ProductDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProductUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProductDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProductUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
    **/
    upsert<T extends ProductUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>
    ): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    group<T extends GroupDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupDefaultArgs<ExtArgs>>): Prisma__GroupClient<$Result.GetResult<Prisma.$GroupPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    models<T extends Product$modelsArgs<ExtArgs> = {}>(args?: Subset<T, Product$modelsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, 'findMany'> | Null>;

    types<T extends Product$typesArgs<ExtArgs> = {}>(args?: Subset<T, Product$typesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly title: FieldRef<"Product", 'String'>
    readonly groupId: FieldRef<"Product", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }


  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }


  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }


  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }


  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }


  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }


  /**
   * Product.models
   */
  export type Product$modelsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude<ExtArgs> | null
    where?: ModelWhereInput
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[]
    cursor?: ModelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ModelScalarFieldEnum | ModelScalarFieldEnum[]
  }


  /**
   * Product.types
   */
  export type Product$typesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypeInclude<ExtArgs> | null
    where?: TypeWhereInput
    orderBy?: TypeOrderByWithRelationInput | TypeOrderByWithRelationInput[]
    cursor?: TypeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TypeScalarFieldEnum | TypeScalarFieldEnum[]
  }


  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ProductInclude<ExtArgs> | null
  }



  /**
   * Model Model
   */

  export type AggregateModel = {
    _count: ModelCountAggregateOutputType | null
    _avg: ModelAvgAggregateOutputType | null
    _sum: ModelSumAggregateOutputType | null
    _min: ModelMinAggregateOutputType | null
    _max: ModelMaxAggregateOutputType | null
  }

  export type ModelAvgAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type ModelSumAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type ModelMinAggregateOutputType = {
    id: number | null
    title: string | null
    productId: number | null
  }

  export type ModelMaxAggregateOutputType = {
    id: number | null
    title: string | null
    productId: number | null
  }

  export type ModelCountAggregateOutputType = {
    id: number
    title: number
    productId: number
    _all: number
  }


  export type ModelAvgAggregateInputType = {
    id?: true
    productId?: true
  }

  export type ModelSumAggregateInputType = {
    id?: true
    productId?: true
  }

  export type ModelMinAggregateInputType = {
    id?: true
    title?: true
    productId?: true
  }

  export type ModelMaxAggregateInputType = {
    id?: true
    title?: true
    productId?: true
  }

  export type ModelCountAggregateInputType = {
    id?: true
    title?: true
    productId?: true
    _all?: true
  }

  export type ModelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Model to aggregate.
     */
    where?: ModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Models
    **/
    _count?: true | ModelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ModelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ModelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ModelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ModelMaxAggregateInputType
  }

  export type GetModelAggregateType<T extends ModelAggregateArgs> = {
        [P in keyof T & keyof AggregateModel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateModel[P]>
      : GetScalarType<T[P], AggregateModel[P]>
  }




  export type ModelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ModelWhereInput
    orderBy?: ModelOrderByWithAggregationInput | ModelOrderByWithAggregationInput[]
    by: ModelScalarFieldEnum[] | ModelScalarFieldEnum
    having?: ModelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ModelCountAggregateInputType | true
    _avg?: ModelAvgAggregateInputType
    _sum?: ModelSumAggregateInputType
    _min?: ModelMinAggregateInputType
    _max?: ModelMaxAggregateInputType
  }

  export type ModelGroupByOutputType = {
    id: number
    title: string
    productId: number
    _count: ModelCountAggregateOutputType | null
    _avg: ModelAvgAggregateOutputType | null
    _sum: ModelSumAggregateOutputType | null
    _min: ModelMinAggregateOutputType | null
    _max: ModelMaxAggregateOutputType | null
  }

  type GetModelGroupByPayload<T extends ModelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ModelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ModelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ModelGroupByOutputType[P]>
            : GetScalarType<T[P], ModelGroupByOutputType[P]>
        }
      >
    >


  export type ModelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    capacities?: boolean | Model$capacitiesArgs<ExtArgs>
    _count?: boolean | ModelCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["model"]>

  export type ModelSelectScalar = {
    id?: boolean
    title?: boolean
    productId?: boolean
  }

  export type ModelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    capacities?: boolean | Model$capacitiesArgs<ExtArgs>
    _count?: boolean | ModelCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ModelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Model"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      capacities: Prisma.$CapacityPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      productId: number
    }, ExtArgs["result"]["model"]>
    composites: {}
  }


  type ModelGetPayload<S extends boolean | null | undefined | ModelDefaultArgs> = $Result.GetResult<Prisma.$ModelPayload, S>

  type ModelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ModelFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ModelCountAggregateInputType | true
    }

  export interface ModelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Model'], meta: { name: 'Model' } }
    /**
     * Find zero or one Model that matches the filter.
     * @param {ModelFindUniqueArgs} args - Arguments to find a Model
     * @example
     * // Get one Model
     * const model = await prisma.model.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ModelFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ModelFindUniqueArgs<ExtArgs>>
    ): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Model that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ModelFindUniqueOrThrowArgs} args - Arguments to find a Model
     * @example
     * // Get one Model
     * const model = await prisma.model.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ModelFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ModelFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Model that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelFindFirstArgs} args - Arguments to find a Model
     * @example
     * // Get one Model
     * const model = await prisma.model.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ModelFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ModelFindFirstArgs<ExtArgs>>
    ): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Model that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelFindFirstOrThrowArgs} args - Arguments to find a Model
     * @example
     * // Get one Model
     * const model = await prisma.model.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ModelFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ModelFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Models that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Models
     * const models = await prisma.model.findMany()
     * 
     * // Get first 10 Models
     * const models = await prisma.model.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const modelWithIdOnly = await prisma.model.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ModelFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ModelFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Model.
     * @param {ModelCreateArgs} args - Arguments to create a Model.
     * @example
     * // Create one Model
     * const Model = await prisma.model.create({
     *   data: {
     *     // ... data to create a Model
     *   }
     * })
     * 
    **/
    create<T extends ModelCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ModelCreateArgs<ExtArgs>>
    ): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Models.
     *     @param {ModelCreateManyArgs} args - Arguments to create many Models.
     *     @example
     *     // Create many Models
     *     const model = await prisma.model.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ModelCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ModelCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Model.
     * @param {ModelDeleteArgs} args - Arguments to delete one Model.
     * @example
     * // Delete one Model
     * const Model = await prisma.model.delete({
     *   where: {
     *     // ... filter to delete one Model
     *   }
     * })
     * 
    **/
    delete<T extends ModelDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ModelDeleteArgs<ExtArgs>>
    ): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Model.
     * @param {ModelUpdateArgs} args - Arguments to update one Model.
     * @example
     * // Update one Model
     * const model = await prisma.model.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ModelUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ModelUpdateArgs<ExtArgs>>
    ): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Models.
     * @param {ModelDeleteManyArgs} args - Arguments to filter Models to delete.
     * @example
     * // Delete a few Models
     * const { count } = await prisma.model.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ModelDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ModelDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Models
     * const model = await prisma.model.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ModelUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ModelUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Model.
     * @param {ModelUpsertArgs} args - Arguments to update or create a Model.
     * @example
     * // Update or create a Model
     * const model = await prisma.model.upsert({
     *   create: {
     *     // ... data to create a Model
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Model we want to update
     *   }
     * })
    **/
    upsert<T extends ModelUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ModelUpsertArgs<ExtArgs>>
    ): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Models.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelCountArgs} args - Arguments to filter Models to count.
     * @example
     * // Count the number of Models
     * const count = await prisma.model.count({
     *   where: {
     *     // ... the filter for the Models we want to count
     *   }
     * })
    **/
    count<T extends ModelCountArgs>(
      args?: Subset<T, ModelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ModelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Model.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ModelAggregateArgs>(args: Subset<T, ModelAggregateArgs>): Prisma.PrismaPromise<GetModelAggregateType<T>>

    /**
     * Group by Model.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ModelGroupByArgs} args - Group by arguments.
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
      T extends ModelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ModelGroupByArgs['orderBy'] }
        : { orderBy?: ModelGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ModelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetModelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Model model
   */
  readonly fields: ModelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Model.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ModelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    capacities<T extends Model$capacitiesArgs<ExtArgs> = {}>(args?: Subset<T, Model$capacitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CapacityPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Model model
   */ 
  interface ModelFieldRefs {
    readonly id: FieldRef<"Model", 'Int'>
    readonly title: FieldRef<"Model", 'String'>
    readonly productId: FieldRef<"Model", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Model findUnique
   */
  export type ModelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Model to fetch.
     */
    where: ModelWhereUniqueInput
  }


  /**
   * Model findUniqueOrThrow
   */
  export type ModelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Model to fetch.
     */
    where: ModelWhereUniqueInput
  }


  /**
   * Model findFirst
   */
  export type ModelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Model to fetch.
     */
    where?: ModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Models.
     */
    cursor?: ModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Models.
     */
    distinct?: ModelScalarFieldEnum | ModelScalarFieldEnum[]
  }


  /**
   * Model findFirstOrThrow
   */
  export type ModelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Model to fetch.
     */
    where?: ModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Models.
     */
    cursor?: ModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Models.
     */
    distinct?: ModelScalarFieldEnum | ModelScalarFieldEnum[]
  }


  /**
   * Model findMany
   */
  export type ModelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter, which Models to fetch.
     */
    where?: ModelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Models to fetch.
     */
    orderBy?: ModelOrderByWithRelationInput | ModelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Models.
     */
    cursor?: ModelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Models from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Models.
     */
    skip?: number
    distinct?: ModelScalarFieldEnum | ModelScalarFieldEnum[]
  }


  /**
   * Model create
   */
  export type ModelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * The data needed to create a Model.
     */
    data: XOR<ModelCreateInput, ModelUncheckedCreateInput>
  }


  /**
   * Model createMany
   */
  export type ModelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Models.
     */
    data: ModelCreateManyInput | ModelCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Model update
   */
  export type ModelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * The data needed to update a Model.
     */
    data: XOR<ModelUpdateInput, ModelUncheckedUpdateInput>
    /**
     * Choose, which Model to update.
     */
    where: ModelWhereUniqueInput
  }


  /**
   * Model updateMany
   */
  export type ModelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Models.
     */
    data: XOR<ModelUpdateManyMutationInput, ModelUncheckedUpdateManyInput>
    /**
     * Filter which Models to update
     */
    where?: ModelWhereInput
  }


  /**
   * Model upsert
   */
  export type ModelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * The filter to search for the Model to update in case it exists.
     */
    where: ModelWhereUniqueInput
    /**
     * In case the Model found by the `where` argument doesn't exist, create a new Model with this data.
     */
    create: XOR<ModelCreateInput, ModelUncheckedCreateInput>
    /**
     * In case the Model was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ModelUpdateInput, ModelUncheckedUpdateInput>
  }


  /**
   * Model delete
   */
  export type ModelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude<ExtArgs> | null
    /**
     * Filter which Model to delete.
     */
    where: ModelWhereUniqueInput
  }


  /**
   * Model deleteMany
   */
  export type ModelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Models to delete
     */
    where?: ModelWhereInput
  }


  /**
   * Model.capacities
   */
  export type Model$capacitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capacity
     */
    select?: CapacitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CapacityInclude<ExtArgs> | null
    where?: CapacityWhereInput
    orderBy?: CapacityOrderByWithRelationInput | CapacityOrderByWithRelationInput[]
    cursor?: CapacityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CapacityScalarFieldEnum | CapacityScalarFieldEnum[]
  }


  /**
   * Model without action
   */
  export type ModelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Model
     */
    select?: ModelSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ModelInclude<ExtArgs> | null
  }



  /**
   * Model Type
   */

  export type AggregateType = {
    _count: TypeCountAggregateOutputType | null
    _avg: TypeAvgAggregateOutputType | null
    _sum: TypeSumAggregateOutputType | null
    _min: TypeMinAggregateOutputType | null
    _max: TypeMaxAggregateOutputType | null
  }

  export type TypeAvgAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type TypeSumAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type TypeMinAggregateOutputType = {
    id: number | null
    title: string | null
    productId: number | null
  }

  export type TypeMaxAggregateOutputType = {
    id: number | null
    title: string | null
    productId: number | null
  }

  export type TypeCountAggregateOutputType = {
    id: number
    title: number
    productId: number
    _all: number
  }


  export type TypeAvgAggregateInputType = {
    id?: true
    productId?: true
  }

  export type TypeSumAggregateInputType = {
    id?: true
    productId?: true
  }

  export type TypeMinAggregateInputType = {
    id?: true
    title?: true
    productId?: true
  }

  export type TypeMaxAggregateInputType = {
    id?: true
    title?: true
    productId?: true
  }

  export type TypeCountAggregateInputType = {
    id?: true
    title?: true
    productId?: true
    _all?: true
  }

  export type TypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Type to aggregate.
     */
    where?: TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypeOrderByWithRelationInput | TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Types
    **/
    _count?: true | TypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TypeMaxAggregateInputType
  }

  export type GetTypeAggregateType<T extends TypeAggregateArgs> = {
        [P in keyof T & keyof AggregateType]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateType[P]>
      : GetScalarType<T[P], AggregateType[P]>
  }




  export type TypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TypeWhereInput
    orderBy?: TypeOrderByWithAggregationInput | TypeOrderByWithAggregationInput[]
    by: TypeScalarFieldEnum[] | TypeScalarFieldEnum
    having?: TypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TypeCountAggregateInputType | true
    _avg?: TypeAvgAggregateInputType
    _sum?: TypeSumAggregateInputType
    _min?: TypeMinAggregateInputType
    _max?: TypeMaxAggregateInputType
  }

  export type TypeGroupByOutputType = {
    id: number
    title: string
    productId: number
    _count: TypeCountAggregateOutputType | null
    _avg: TypeAvgAggregateOutputType | null
    _sum: TypeSumAggregateOutputType | null
    _min: TypeMinAggregateOutputType | null
    _max: TypeMaxAggregateOutputType | null
  }

  type GetTypeGroupByPayload<T extends TypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TypeGroupByOutputType[P]>
            : GetScalarType<T[P], TypeGroupByOutputType[P]>
        }
      >
    >


  export type TypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["type"]>

  export type TypeSelectScalar = {
    id?: boolean
    title?: boolean
    productId?: boolean
  }

  export type TypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }


  export type $TypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Type"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      productId: number
    }, ExtArgs["result"]["type"]>
    composites: {}
  }


  type TypeGetPayload<S extends boolean | null | undefined | TypeDefaultArgs> = $Result.GetResult<Prisma.$TypePayload, S>

  type TypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TypeFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: TypeCountAggregateInputType | true
    }

  export interface TypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Type'], meta: { name: 'Type' } }
    /**
     * Find zero or one Type that matches the filter.
     * @param {TypeFindUniqueArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TypeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TypeFindUniqueArgs<ExtArgs>>
    ): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Type that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TypeFindUniqueOrThrowArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TypeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TypeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Type that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeFindFirstArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TypeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TypeFindFirstArgs<ExtArgs>>
    ): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Type that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeFindFirstOrThrowArgs} args - Arguments to find a Type
     * @example
     * // Get one Type
     * const type = await prisma.type.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TypeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TypeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Types that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Types
     * const types = await prisma.type.findMany()
     * 
     * // Get first 10 Types
     * const types = await prisma.type.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const typeWithIdOnly = await prisma.type.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TypeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TypeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Type.
     * @param {TypeCreateArgs} args - Arguments to create a Type.
     * @example
     * // Create one Type
     * const Type = await prisma.type.create({
     *   data: {
     *     // ... data to create a Type
     *   }
     * })
     * 
    **/
    create<T extends TypeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TypeCreateArgs<ExtArgs>>
    ): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Types.
     *     @param {TypeCreateManyArgs} args - Arguments to create many Types.
     *     @example
     *     // Create many Types
     *     const type = await prisma.type.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TypeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TypeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Type.
     * @param {TypeDeleteArgs} args - Arguments to delete one Type.
     * @example
     * // Delete one Type
     * const Type = await prisma.type.delete({
     *   where: {
     *     // ... filter to delete one Type
     *   }
     * })
     * 
    **/
    delete<T extends TypeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TypeDeleteArgs<ExtArgs>>
    ): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Type.
     * @param {TypeUpdateArgs} args - Arguments to update one Type.
     * @example
     * // Update one Type
     * const type = await prisma.type.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TypeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TypeUpdateArgs<ExtArgs>>
    ): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Types.
     * @param {TypeDeleteManyArgs} args - Arguments to filter Types to delete.
     * @example
     * // Delete a few Types
     * const { count } = await prisma.type.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TypeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TypeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Types
     * const type = await prisma.type.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TypeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TypeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Type.
     * @param {TypeUpsertArgs} args - Arguments to update or create a Type.
     * @example
     * // Update or create a Type
     * const type = await prisma.type.upsert({
     *   create: {
     *     // ... data to create a Type
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Type we want to update
     *   }
     * })
    **/
    upsert<T extends TypeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TypeUpsertArgs<ExtArgs>>
    ): Prisma__TypeClient<$Result.GetResult<Prisma.$TypePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Types.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeCountArgs} args - Arguments to filter Types to count.
     * @example
     * // Count the number of Types
     * const count = await prisma.type.count({
     *   where: {
     *     // ... the filter for the Types we want to count
     *   }
     * })
    **/
    count<T extends TypeCountArgs>(
      args?: Subset<T, TypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TypeAggregateArgs>(args: Subset<T, TypeAggregateArgs>): Prisma.PrismaPromise<GetTypeAggregateType<T>>

    /**
     * Group by Type.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TypeGroupByArgs} args - Group by arguments.
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
      T extends TypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TypeGroupByArgs['orderBy'] }
        : { orderBy?: TypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Type model
   */
  readonly fields: TypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Type.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Type model
   */ 
  interface TypeFieldRefs {
    readonly id: FieldRef<"Type", 'Int'>
    readonly title: FieldRef<"Type", 'String'>
    readonly productId: FieldRef<"Type", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Type findUnique
   */
  export type TypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Type to fetch.
     */
    where: TypeWhereUniqueInput
  }


  /**
   * Type findUniqueOrThrow
   */
  export type TypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Type to fetch.
     */
    where: TypeWhereUniqueInput
  }


  /**
   * Type findFirst
   */
  export type TypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Type to fetch.
     */
    where?: TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypeOrderByWithRelationInput | TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Types.
     */
    cursor?: TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Types.
     */
    distinct?: TypeScalarFieldEnum | TypeScalarFieldEnum[]
  }


  /**
   * Type findFirstOrThrow
   */
  export type TypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Type to fetch.
     */
    where?: TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypeOrderByWithRelationInput | TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Types.
     */
    cursor?: TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Types.
     */
    distinct?: TypeScalarFieldEnum | TypeScalarFieldEnum[]
  }


  /**
   * Type findMany
   */
  export type TypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter, which Types to fetch.
     */
    where?: TypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Types to fetch.
     */
    orderBy?: TypeOrderByWithRelationInput | TypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Types.
     */
    cursor?: TypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Types from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Types.
     */
    skip?: number
    distinct?: TypeScalarFieldEnum | TypeScalarFieldEnum[]
  }


  /**
   * Type create
   */
  export type TypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * The data needed to create a Type.
     */
    data: XOR<TypeCreateInput, TypeUncheckedCreateInput>
  }


  /**
   * Type createMany
   */
  export type TypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Types.
     */
    data: TypeCreateManyInput | TypeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Type update
   */
  export type TypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * The data needed to update a Type.
     */
    data: XOR<TypeUpdateInput, TypeUncheckedUpdateInput>
    /**
     * Choose, which Type to update.
     */
    where: TypeWhereUniqueInput
  }


  /**
   * Type updateMany
   */
  export type TypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Types.
     */
    data: XOR<TypeUpdateManyMutationInput, TypeUncheckedUpdateManyInput>
    /**
     * Filter which Types to update
     */
    where?: TypeWhereInput
  }


  /**
   * Type upsert
   */
  export type TypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * The filter to search for the Type to update in case it exists.
     */
    where: TypeWhereUniqueInput
    /**
     * In case the Type found by the `where` argument doesn't exist, create a new Type with this data.
     */
    create: XOR<TypeCreateInput, TypeUncheckedCreateInput>
    /**
     * In case the Type was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TypeUpdateInput, TypeUncheckedUpdateInput>
  }


  /**
   * Type delete
   */
  export type TypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypeInclude<ExtArgs> | null
    /**
     * Filter which Type to delete.
     */
    where: TypeWhereUniqueInput
  }


  /**
   * Type deleteMany
   */
  export type TypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Types to delete
     */
    where?: TypeWhereInput
  }


  /**
   * Type without action
   */
  export type TypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Type
     */
    select?: TypeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TypeInclude<ExtArgs> | null
  }



  /**
   * Model Capacity
   */

  export type AggregateCapacity = {
    _count: CapacityCountAggregateOutputType | null
    _avg: CapacityAvgAggregateOutputType | null
    _sum: CapacitySumAggregateOutputType | null
    _min: CapacityMinAggregateOutputType | null
    _max: CapacityMaxAggregateOutputType | null
  }

  export type CapacityAvgAggregateOutputType = {
    id: number | null
    modelId: number | null
  }

  export type CapacitySumAggregateOutputType = {
    id: number | null
    modelId: number | null
  }

  export type CapacityMinAggregateOutputType = {
    id: number | null
    title: string | null
    modelId: number | null
  }

  export type CapacityMaxAggregateOutputType = {
    id: number | null
    title: string | null
    modelId: number | null
  }

  export type CapacityCountAggregateOutputType = {
    id: number
    title: number
    modelId: number
    _all: number
  }


  export type CapacityAvgAggregateInputType = {
    id?: true
    modelId?: true
  }

  export type CapacitySumAggregateInputType = {
    id?: true
    modelId?: true
  }

  export type CapacityMinAggregateInputType = {
    id?: true
    title?: true
    modelId?: true
  }

  export type CapacityMaxAggregateInputType = {
    id?: true
    title?: true
    modelId?: true
  }

  export type CapacityCountAggregateInputType = {
    id?: true
    title?: true
    modelId?: true
    _all?: true
  }

  export type CapacityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Capacity to aggregate.
     */
    where?: CapacityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Capacities to fetch.
     */
    orderBy?: CapacityOrderByWithRelationInput | CapacityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CapacityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Capacities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Capacities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Capacities
    **/
    _count?: true | CapacityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CapacityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CapacitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CapacityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CapacityMaxAggregateInputType
  }

  export type GetCapacityAggregateType<T extends CapacityAggregateArgs> = {
        [P in keyof T & keyof AggregateCapacity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCapacity[P]>
      : GetScalarType<T[P], AggregateCapacity[P]>
  }




  export type CapacityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CapacityWhereInput
    orderBy?: CapacityOrderByWithAggregationInput | CapacityOrderByWithAggregationInput[]
    by: CapacityScalarFieldEnum[] | CapacityScalarFieldEnum
    having?: CapacityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CapacityCountAggregateInputType | true
    _avg?: CapacityAvgAggregateInputType
    _sum?: CapacitySumAggregateInputType
    _min?: CapacityMinAggregateInputType
    _max?: CapacityMaxAggregateInputType
  }

  export type CapacityGroupByOutputType = {
    id: number
    title: string
    modelId: number
    _count: CapacityCountAggregateOutputType | null
    _avg: CapacityAvgAggregateOutputType | null
    _sum: CapacitySumAggregateOutputType | null
    _min: CapacityMinAggregateOutputType | null
    _max: CapacityMaxAggregateOutputType | null
  }

  type GetCapacityGroupByPayload<T extends CapacityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CapacityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CapacityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CapacityGroupByOutputType[P]>
            : GetScalarType<T[P], CapacityGroupByOutputType[P]>
        }
      >
    >


  export type CapacitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    modelId?: boolean
    model?: boolean | ModelDefaultArgs<ExtArgs>
    heights?: boolean | Capacity$heightsArgs<ExtArgs>
    _count?: boolean | CapacityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["capacity"]>

  export type CapacitySelectScalar = {
    id?: boolean
    title?: boolean
    modelId?: boolean
  }

  export type CapacityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    model?: boolean | ModelDefaultArgs<ExtArgs>
    heights?: boolean | Capacity$heightsArgs<ExtArgs>
    _count?: boolean | CapacityCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CapacityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Capacity"
    objects: {
      model: Prisma.$ModelPayload<ExtArgs>
      heights: Prisma.$HeightPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      modelId: number
    }, ExtArgs["result"]["capacity"]>
    composites: {}
  }


  type CapacityGetPayload<S extends boolean | null | undefined | CapacityDefaultArgs> = $Result.GetResult<Prisma.$CapacityPayload, S>

  type CapacityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CapacityFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CapacityCountAggregateInputType | true
    }

  export interface CapacityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Capacity'], meta: { name: 'Capacity' } }
    /**
     * Find zero or one Capacity that matches the filter.
     * @param {CapacityFindUniqueArgs} args - Arguments to find a Capacity
     * @example
     * // Get one Capacity
     * const capacity = await prisma.capacity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CapacityFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CapacityFindUniqueArgs<ExtArgs>>
    ): Prisma__CapacityClient<$Result.GetResult<Prisma.$CapacityPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Capacity that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CapacityFindUniqueOrThrowArgs} args - Arguments to find a Capacity
     * @example
     * // Get one Capacity
     * const capacity = await prisma.capacity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CapacityFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CapacityFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CapacityClient<$Result.GetResult<Prisma.$CapacityPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Capacity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapacityFindFirstArgs} args - Arguments to find a Capacity
     * @example
     * // Get one Capacity
     * const capacity = await prisma.capacity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CapacityFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CapacityFindFirstArgs<ExtArgs>>
    ): Prisma__CapacityClient<$Result.GetResult<Prisma.$CapacityPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Capacity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapacityFindFirstOrThrowArgs} args - Arguments to find a Capacity
     * @example
     * // Get one Capacity
     * const capacity = await prisma.capacity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CapacityFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CapacityFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CapacityClient<$Result.GetResult<Prisma.$CapacityPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Capacities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapacityFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Capacities
     * const capacities = await prisma.capacity.findMany()
     * 
     * // Get first 10 Capacities
     * const capacities = await prisma.capacity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const capacityWithIdOnly = await prisma.capacity.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CapacityFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CapacityFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CapacityPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Capacity.
     * @param {CapacityCreateArgs} args - Arguments to create a Capacity.
     * @example
     * // Create one Capacity
     * const Capacity = await prisma.capacity.create({
     *   data: {
     *     // ... data to create a Capacity
     *   }
     * })
     * 
    **/
    create<T extends CapacityCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CapacityCreateArgs<ExtArgs>>
    ): Prisma__CapacityClient<$Result.GetResult<Prisma.$CapacityPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Capacities.
     *     @param {CapacityCreateManyArgs} args - Arguments to create many Capacities.
     *     @example
     *     // Create many Capacities
     *     const capacity = await prisma.capacity.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CapacityCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CapacityCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Capacity.
     * @param {CapacityDeleteArgs} args - Arguments to delete one Capacity.
     * @example
     * // Delete one Capacity
     * const Capacity = await prisma.capacity.delete({
     *   where: {
     *     // ... filter to delete one Capacity
     *   }
     * })
     * 
    **/
    delete<T extends CapacityDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CapacityDeleteArgs<ExtArgs>>
    ): Prisma__CapacityClient<$Result.GetResult<Prisma.$CapacityPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Capacity.
     * @param {CapacityUpdateArgs} args - Arguments to update one Capacity.
     * @example
     * // Update one Capacity
     * const capacity = await prisma.capacity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CapacityUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CapacityUpdateArgs<ExtArgs>>
    ): Prisma__CapacityClient<$Result.GetResult<Prisma.$CapacityPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Capacities.
     * @param {CapacityDeleteManyArgs} args - Arguments to filter Capacities to delete.
     * @example
     * // Delete a few Capacities
     * const { count } = await prisma.capacity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CapacityDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CapacityDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Capacities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapacityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Capacities
     * const capacity = await prisma.capacity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CapacityUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CapacityUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Capacity.
     * @param {CapacityUpsertArgs} args - Arguments to update or create a Capacity.
     * @example
     * // Update or create a Capacity
     * const capacity = await prisma.capacity.upsert({
     *   create: {
     *     // ... data to create a Capacity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Capacity we want to update
     *   }
     * })
    **/
    upsert<T extends CapacityUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CapacityUpsertArgs<ExtArgs>>
    ): Prisma__CapacityClient<$Result.GetResult<Prisma.$CapacityPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Capacities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapacityCountArgs} args - Arguments to filter Capacities to count.
     * @example
     * // Count the number of Capacities
     * const count = await prisma.capacity.count({
     *   where: {
     *     // ... the filter for the Capacities we want to count
     *   }
     * })
    **/
    count<T extends CapacityCountArgs>(
      args?: Subset<T, CapacityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CapacityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Capacity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapacityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CapacityAggregateArgs>(args: Subset<T, CapacityAggregateArgs>): Prisma.PrismaPromise<GetCapacityAggregateType<T>>

    /**
     * Group by Capacity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CapacityGroupByArgs} args - Group by arguments.
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
      T extends CapacityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CapacityGroupByArgs['orderBy'] }
        : { orderBy?: CapacityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CapacityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCapacityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Capacity model
   */
  readonly fields: CapacityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Capacity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CapacityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    model<T extends ModelDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ModelDefaultArgs<ExtArgs>>): Prisma__ModelClient<$Result.GetResult<Prisma.$ModelPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    heights<T extends Capacity$heightsArgs<ExtArgs> = {}>(args?: Subset<T, Capacity$heightsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeightPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Capacity model
   */ 
  interface CapacityFieldRefs {
    readonly id: FieldRef<"Capacity", 'Int'>
    readonly title: FieldRef<"Capacity", 'String'>
    readonly modelId: FieldRef<"Capacity", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Capacity findUnique
   */
  export type CapacityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capacity
     */
    select?: CapacitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CapacityInclude<ExtArgs> | null
    /**
     * Filter, which Capacity to fetch.
     */
    where: CapacityWhereUniqueInput
  }


  /**
   * Capacity findUniqueOrThrow
   */
  export type CapacityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capacity
     */
    select?: CapacitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CapacityInclude<ExtArgs> | null
    /**
     * Filter, which Capacity to fetch.
     */
    where: CapacityWhereUniqueInput
  }


  /**
   * Capacity findFirst
   */
  export type CapacityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capacity
     */
    select?: CapacitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CapacityInclude<ExtArgs> | null
    /**
     * Filter, which Capacity to fetch.
     */
    where?: CapacityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Capacities to fetch.
     */
    orderBy?: CapacityOrderByWithRelationInput | CapacityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Capacities.
     */
    cursor?: CapacityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Capacities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Capacities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Capacities.
     */
    distinct?: CapacityScalarFieldEnum | CapacityScalarFieldEnum[]
  }


  /**
   * Capacity findFirstOrThrow
   */
  export type CapacityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capacity
     */
    select?: CapacitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CapacityInclude<ExtArgs> | null
    /**
     * Filter, which Capacity to fetch.
     */
    where?: CapacityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Capacities to fetch.
     */
    orderBy?: CapacityOrderByWithRelationInput | CapacityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Capacities.
     */
    cursor?: CapacityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Capacities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Capacities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Capacities.
     */
    distinct?: CapacityScalarFieldEnum | CapacityScalarFieldEnum[]
  }


  /**
   * Capacity findMany
   */
  export type CapacityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capacity
     */
    select?: CapacitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CapacityInclude<ExtArgs> | null
    /**
     * Filter, which Capacities to fetch.
     */
    where?: CapacityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Capacities to fetch.
     */
    orderBy?: CapacityOrderByWithRelationInput | CapacityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Capacities.
     */
    cursor?: CapacityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Capacities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Capacities.
     */
    skip?: number
    distinct?: CapacityScalarFieldEnum | CapacityScalarFieldEnum[]
  }


  /**
   * Capacity create
   */
  export type CapacityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capacity
     */
    select?: CapacitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CapacityInclude<ExtArgs> | null
    /**
     * The data needed to create a Capacity.
     */
    data: XOR<CapacityCreateInput, CapacityUncheckedCreateInput>
  }


  /**
   * Capacity createMany
   */
  export type CapacityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Capacities.
     */
    data: CapacityCreateManyInput | CapacityCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Capacity update
   */
  export type CapacityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capacity
     */
    select?: CapacitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CapacityInclude<ExtArgs> | null
    /**
     * The data needed to update a Capacity.
     */
    data: XOR<CapacityUpdateInput, CapacityUncheckedUpdateInput>
    /**
     * Choose, which Capacity to update.
     */
    where: CapacityWhereUniqueInput
  }


  /**
   * Capacity updateMany
   */
  export type CapacityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Capacities.
     */
    data: XOR<CapacityUpdateManyMutationInput, CapacityUncheckedUpdateManyInput>
    /**
     * Filter which Capacities to update
     */
    where?: CapacityWhereInput
  }


  /**
   * Capacity upsert
   */
  export type CapacityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capacity
     */
    select?: CapacitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CapacityInclude<ExtArgs> | null
    /**
     * The filter to search for the Capacity to update in case it exists.
     */
    where: CapacityWhereUniqueInput
    /**
     * In case the Capacity found by the `where` argument doesn't exist, create a new Capacity with this data.
     */
    create: XOR<CapacityCreateInput, CapacityUncheckedCreateInput>
    /**
     * In case the Capacity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CapacityUpdateInput, CapacityUncheckedUpdateInput>
  }


  /**
   * Capacity delete
   */
  export type CapacityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capacity
     */
    select?: CapacitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CapacityInclude<ExtArgs> | null
    /**
     * Filter which Capacity to delete.
     */
    where: CapacityWhereUniqueInput
  }


  /**
   * Capacity deleteMany
   */
  export type CapacityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Capacities to delete
     */
    where?: CapacityWhereInput
  }


  /**
   * Capacity.heights
   */
  export type Capacity$heightsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Height
     */
    select?: HeightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HeightInclude<ExtArgs> | null
    where?: HeightWhereInput
    orderBy?: HeightOrderByWithRelationInput | HeightOrderByWithRelationInput[]
    cursor?: HeightWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HeightScalarFieldEnum | HeightScalarFieldEnum[]
  }


  /**
   * Capacity without action
   */
  export type CapacityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Capacity
     */
    select?: CapacitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CapacityInclude<ExtArgs> | null
  }



  /**
   * Model Height
   */

  export type AggregateHeight = {
    _count: HeightCountAggregateOutputType | null
    _avg: HeightAvgAggregateOutputType | null
    _sum: HeightSumAggregateOutputType | null
    _min: HeightMinAggregateOutputType | null
    _max: HeightMaxAggregateOutputType | null
  }

  export type HeightAvgAggregateOutputType = {
    id: number | null
    capacityId: number | null
  }

  export type HeightSumAggregateOutputType = {
    id: number | null
    capacityId: number | null
  }

  export type HeightMinAggregateOutputType = {
    id: number | null
    title: string | null
    recommended: boolean | null
    capacityId: number | null
  }

  export type HeightMaxAggregateOutputType = {
    id: number | null
    title: string | null
    recommended: boolean | null
    capacityId: number | null
  }

  export type HeightCountAggregateOutputType = {
    id: number
    title: number
    recommended: number
    capacityId: number
    _all: number
  }


  export type HeightAvgAggregateInputType = {
    id?: true
    capacityId?: true
  }

  export type HeightSumAggregateInputType = {
    id?: true
    capacityId?: true
  }

  export type HeightMinAggregateInputType = {
    id?: true
    title?: true
    recommended?: true
    capacityId?: true
  }

  export type HeightMaxAggregateInputType = {
    id?: true
    title?: true
    recommended?: true
    capacityId?: true
  }

  export type HeightCountAggregateInputType = {
    id?: true
    title?: true
    recommended?: true
    capacityId?: true
    _all?: true
  }

  export type HeightAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Height to aggregate.
     */
    where?: HeightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Heights to fetch.
     */
    orderBy?: HeightOrderByWithRelationInput | HeightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HeightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Heights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Heights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Heights
    **/
    _count?: true | HeightCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HeightAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HeightSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HeightMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HeightMaxAggregateInputType
  }

  export type GetHeightAggregateType<T extends HeightAggregateArgs> = {
        [P in keyof T & keyof AggregateHeight]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHeight[P]>
      : GetScalarType<T[P], AggregateHeight[P]>
  }




  export type HeightGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HeightWhereInput
    orderBy?: HeightOrderByWithAggregationInput | HeightOrderByWithAggregationInput[]
    by: HeightScalarFieldEnum[] | HeightScalarFieldEnum
    having?: HeightScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HeightCountAggregateInputType | true
    _avg?: HeightAvgAggregateInputType
    _sum?: HeightSumAggregateInputType
    _min?: HeightMinAggregateInputType
    _max?: HeightMaxAggregateInputType
  }

  export type HeightGroupByOutputType = {
    id: number
    title: string
    recommended: boolean
    capacityId: number
    _count: HeightCountAggregateOutputType | null
    _avg: HeightAvgAggregateOutputType | null
    _sum: HeightSumAggregateOutputType | null
    _min: HeightMinAggregateOutputType | null
    _max: HeightMaxAggregateOutputType | null
  }

  type GetHeightGroupByPayload<T extends HeightGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HeightGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HeightGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HeightGroupByOutputType[P]>
            : GetScalarType<T[P], HeightGroupByOutputType[P]>
        }
      >
    >


  export type HeightSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    recommended?: boolean
    capacityId?: boolean
    capacity?: boolean | CapacityDefaultArgs<ExtArgs>
    powers?: boolean | Height$powersArgs<ExtArgs>
    _count?: boolean | HeightCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["height"]>

  export type HeightSelectScalar = {
    id?: boolean
    title?: boolean
    recommended?: boolean
    capacityId?: boolean
  }

  export type HeightInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    capacity?: boolean | CapacityDefaultArgs<ExtArgs>
    powers?: boolean | Height$powersArgs<ExtArgs>
    _count?: boolean | HeightCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $HeightPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Height"
    objects: {
      capacity: Prisma.$CapacityPayload<ExtArgs>
      powers: Prisma.$PowerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      recommended: boolean
      capacityId: number
    }, ExtArgs["result"]["height"]>
    composites: {}
  }


  type HeightGetPayload<S extends boolean | null | undefined | HeightDefaultArgs> = $Result.GetResult<Prisma.$HeightPayload, S>

  type HeightCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HeightFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: HeightCountAggregateInputType | true
    }

  export interface HeightDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Height'], meta: { name: 'Height' } }
    /**
     * Find zero or one Height that matches the filter.
     * @param {HeightFindUniqueArgs} args - Arguments to find a Height
     * @example
     * // Get one Height
     * const height = await prisma.height.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends HeightFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, HeightFindUniqueArgs<ExtArgs>>
    ): Prisma__HeightClient<$Result.GetResult<Prisma.$HeightPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Height that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {HeightFindUniqueOrThrowArgs} args - Arguments to find a Height
     * @example
     * // Get one Height
     * const height = await prisma.height.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends HeightFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HeightFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__HeightClient<$Result.GetResult<Prisma.$HeightPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Height that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeightFindFirstArgs} args - Arguments to find a Height
     * @example
     * // Get one Height
     * const height = await prisma.height.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends HeightFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, HeightFindFirstArgs<ExtArgs>>
    ): Prisma__HeightClient<$Result.GetResult<Prisma.$HeightPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Height that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeightFindFirstOrThrowArgs} args - Arguments to find a Height
     * @example
     * // Get one Height
     * const height = await prisma.height.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends HeightFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, HeightFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__HeightClient<$Result.GetResult<Prisma.$HeightPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Heights that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeightFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Heights
     * const heights = await prisma.height.findMany()
     * 
     * // Get first 10 Heights
     * const heights = await prisma.height.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const heightWithIdOnly = await prisma.height.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends HeightFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HeightFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeightPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Height.
     * @param {HeightCreateArgs} args - Arguments to create a Height.
     * @example
     * // Create one Height
     * const Height = await prisma.height.create({
     *   data: {
     *     // ... data to create a Height
     *   }
     * })
     * 
    **/
    create<T extends HeightCreateArgs<ExtArgs>>(
      args: SelectSubset<T, HeightCreateArgs<ExtArgs>>
    ): Prisma__HeightClient<$Result.GetResult<Prisma.$HeightPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Heights.
     *     @param {HeightCreateManyArgs} args - Arguments to create many Heights.
     *     @example
     *     // Create many Heights
     *     const height = await prisma.height.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends HeightCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HeightCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Height.
     * @param {HeightDeleteArgs} args - Arguments to delete one Height.
     * @example
     * // Delete one Height
     * const Height = await prisma.height.delete({
     *   where: {
     *     // ... filter to delete one Height
     *   }
     * })
     * 
    **/
    delete<T extends HeightDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, HeightDeleteArgs<ExtArgs>>
    ): Prisma__HeightClient<$Result.GetResult<Prisma.$HeightPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Height.
     * @param {HeightUpdateArgs} args - Arguments to update one Height.
     * @example
     * // Update one Height
     * const height = await prisma.height.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends HeightUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, HeightUpdateArgs<ExtArgs>>
    ): Prisma__HeightClient<$Result.GetResult<Prisma.$HeightPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Heights.
     * @param {HeightDeleteManyArgs} args - Arguments to filter Heights to delete.
     * @example
     * // Delete a few Heights
     * const { count } = await prisma.height.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends HeightDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, HeightDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Heights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeightUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Heights
     * const height = await prisma.height.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends HeightUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, HeightUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Height.
     * @param {HeightUpsertArgs} args - Arguments to update or create a Height.
     * @example
     * // Update or create a Height
     * const height = await prisma.height.upsert({
     *   create: {
     *     // ... data to create a Height
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Height we want to update
     *   }
     * })
    **/
    upsert<T extends HeightUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, HeightUpsertArgs<ExtArgs>>
    ): Prisma__HeightClient<$Result.GetResult<Prisma.$HeightPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Heights.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeightCountArgs} args - Arguments to filter Heights to count.
     * @example
     * // Count the number of Heights
     * const count = await prisma.height.count({
     *   where: {
     *     // ... the filter for the Heights we want to count
     *   }
     * })
    **/
    count<T extends HeightCountArgs>(
      args?: Subset<T, HeightCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HeightCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Height.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeightAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HeightAggregateArgs>(args: Subset<T, HeightAggregateArgs>): Prisma.PrismaPromise<GetHeightAggregateType<T>>

    /**
     * Group by Height.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeightGroupByArgs} args - Group by arguments.
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
      T extends HeightGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HeightGroupByArgs['orderBy'] }
        : { orderBy?: HeightGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HeightGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHeightGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Height model
   */
  readonly fields: HeightFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Height.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HeightClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    capacity<T extends CapacityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CapacityDefaultArgs<ExtArgs>>): Prisma__CapacityClient<$Result.GetResult<Prisma.$CapacityPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    powers<T extends Height$powersArgs<ExtArgs> = {}>(args?: Subset<T, Height$powersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PowerPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Height model
   */ 
  interface HeightFieldRefs {
    readonly id: FieldRef<"Height", 'Int'>
    readonly title: FieldRef<"Height", 'String'>
    readonly recommended: FieldRef<"Height", 'Boolean'>
    readonly capacityId: FieldRef<"Height", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Height findUnique
   */
  export type HeightFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Height
     */
    select?: HeightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HeightInclude<ExtArgs> | null
    /**
     * Filter, which Height to fetch.
     */
    where: HeightWhereUniqueInput
  }


  /**
   * Height findUniqueOrThrow
   */
  export type HeightFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Height
     */
    select?: HeightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HeightInclude<ExtArgs> | null
    /**
     * Filter, which Height to fetch.
     */
    where: HeightWhereUniqueInput
  }


  /**
   * Height findFirst
   */
  export type HeightFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Height
     */
    select?: HeightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HeightInclude<ExtArgs> | null
    /**
     * Filter, which Height to fetch.
     */
    where?: HeightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Heights to fetch.
     */
    orderBy?: HeightOrderByWithRelationInput | HeightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Heights.
     */
    cursor?: HeightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Heights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Heights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Heights.
     */
    distinct?: HeightScalarFieldEnum | HeightScalarFieldEnum[]
  }


  /**
   * Height findFirstOrThrow
   */
  export type HeightFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Height
     */
    select?: HeightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HeightInclude<ExtArgs> | null
    /**
     * Filter, which Height to fetch.
     */
    where?: HeightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Heights to fetch.
     */
    orderBy?: HeightOrderByWithRelationInput | HeightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Heights.
     */
    cursor?: HeightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Heights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Heights.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Heights.
     */
    distinct?: HeightScalarFieldEnum | HeightScalarFieldEnum[]
  }


  /**
   * Height findMany
   */
  export type HeightFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Height
     */
    select?: HeightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HeightInclude<ExtArgs> | null
    /**
     * Filter, which Heights to fetch.
     */
    where?: HeightWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Heights to fetch.
     */
    orderBy?: HeightOrderByWithRelationInput | HeightOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Heights.
     */
    cursor?: HeightWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Heights from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Heights.
     */
    skip?: number
    distinct?: HeightScalarFieldEnum | HeightScalarFieldEnum[]
  }


  /**
   * Height create
   */
  export type HeightCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Height
     */
    select?: HeightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HeightInclude<ExtArgs> | null
    /**
     * The data needed to create a Height.
     */
    data: XOR<HeightCreateInput, HeightUncheckedCreateInput>
  }


  /**
   * Height createMany
   */
  export type HeightCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Heights.
     */
    data: HeightCreateManyInput | HeightCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Height update
   */
  export type HeightUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Height
     */
    select?: HeightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HeightInclude<ExtArgs> | null
    /**
     * The data needed to update a Height.
     */
    data: XOR<HeightUpdateInput, HeightUncheckedUpdateInput>
    /**
     * Choose, which Height to update.
     */
    where: HeightWhereUniqueInput
  }


  /**
   * Height updateMany
   */
  export type HeightUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Heights.
     */
    data: XOR<HeightUpdateManyMutationInput, HeightUncheckedUpdateManyInput>
    /**
     * Filter which Heights to update
     */
    where?: HeightWhereInput
  }


  /**
   * Height upsert
   */
  export type HeightUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Height
     */
    select?: HeightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HeightInclude<ExtArgs> | null
    /**
     * The filter to search for the Height to update in case it exists.
     */
    where: HeightWhereUniqueInput
    /**
     * In case the Height found by the `where` argument doesn't exist, create a new Height with this data.
     */
    create: XOR<HeightCreateInput, HeightUncheckedCreateInput>
    /**
     * In case the Height was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HeightUpdateInput, HeightUncheckedUpdateInput>
  }


  /**
   * Height delete
   */
  export type HeightDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Height
     */
    select?: HeightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HeightInclude<ExtArgs> | null
    /**
     * Filter which Height to delete.
     */
    where: HeightWhereUniqueInput
  }


  /**
   * Height deleteMany
   */
  export type HeightDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Heights to delete
     */
    where?: HeightWhereInput
  }


  /**
   * Height.powers
   */
  export type Height$powersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Power
     */
    select?: PowerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PowerInclude<ExtArgs> | null
    where?: PowerWhereInput
    orderBy?: PowerOrderByWithRelationInput | PowerOrderByWithRelationInput[]
    cursor?: PowerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PowerScalarFieldEnum | PowerScalarFieldEnum[]
  }


  /**
   * Height without action
   */
  export type HeightDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Height
     */
    select?: HeightSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: HeightInclude<ExtArgs> | null
  }



  /**
   * Model Power
   */

  export type AggregatePower = {
    _count: PowerCountAggregateOutputType | null
    _avg: PowerAvgAggregateOutputType | null
    _sum: PowerSumAggregateOutputType | null
    _min: PowerMinAggregateOutputType | null
    _max: PowerMaxAggregateOutputType | null
  }

  export type PowerAvgAggregateOutputType = {
    id: number | null
    heightId: number | null
  }

  export type PowerSumAggregateOutputType = {
    id: number | null
    heightId: number | null
  }

  export type PowerMinAggregateOutputType = {
    id: number | null
    title: string | null
    recommended: boolean | null
    heightId: number | null
  }

  export type PowerMaxAggregateOutputType = {
    id: number | null
    title: string | null
    recommended: boolean | null
    heightId: number | null
  }

  export type PowerCountAggregateOutputType = {
    id: number
    title: number
    recommended: number
    heightId: number
    _all: number
  }


  export type PowerAvgAggregateInputType = {
    id?: true
    heightId?: true
  }

  export type PowerSumAggregateInputType = {
    id?: true
    heightId?: true
  }

  export type PowerMinAggregateInputType = {
    id?: true
    title?: true
    recommended?: true
    heightId?: true
  }

  export type PowerMaxAggregateInputType = {
    id?: true
    title?: true
    recommended?: true
    heightId?: true
  }

  export type PowerCountAggregateInputType = {
    id?: true
    title?: true
    recommended?: true
    heightId?: true
    _all?: true
  }

  export type PowerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Power to aggregate.
     */
    where?: PowerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Powers to fetch.
     */
    orderBy?: PowerOrderByWithRelationInput | PowerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PowerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Powers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Powers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Powers
    **/
    _count?: true | PowerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PowerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PowerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PowerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PowerMaxAggregateInputType
  }

  export type GetPowerAggregateType<T extends PowerAggregateArgs> = {
        [P in keyof T & keyof AggregatePower]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePower[P]>
      : GetScalarType<T[P], AggregatePower[P]>
  }




  export type PowerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PowerWhereInput
    orderBy?: PowerOrderByWithAggregationInput | PowerOrderByWithAggregationInput[]
    by: PowerScalarFieldEnum[] | PowerScalarFieldEnum
    having?: PowerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PowerCountAggregateInputType | true
    _avg?: PowerAvgAggregateInputType
    _sum?: PowerSumAggregateInputType
    _min?: PowerMinAggregateInputType
    _max?: PowerMaxAggregateInputType
  }

  export type PowerGroupByOutputType = {
    id: number
    title: string
    recommended: boolean
    heightId: number
    _count: PowerCountAggregateOutputType | null
    _avg: PowerAvgAggregateOutputType | null
    _sum: PowerSumAggregateOutputType | null
    _min: PowerMinAggregateOutputType | null
    _max: PowerMaxAggregateOutputType | null
  }

  type GetPowerGroupByPayload<T extends PowerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PowerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PowerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PowerGroupByOutputType[P]>
            : GetScalarType<T[P], PowerGroupByOutputType[P]>
        }
      >
    >


  export type PowerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    recommended?: boolean
    heightId?: boolean
    height?: boolean | HeightDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["power"]>

  export type PowerSelectScalar = {
    id?: boolean
    title?: boolean
    recommended?: boolean
    heightId?: boolean
  }

  export type PowerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    height?: boolean | HeightDefaultArgs<ExtArgs>
  }


  export type $PowerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Power"
    objects: {
      height: Prisma.$HeightPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      recommended: boolean
      heightId: number
    }, ExtArgs["result"]["power"]>
    composites: {}
  }


  type PowerGetPayload<S extends boolean | null | undefined | PowerDefaultArgs> = $Result.GetResult<Prisma.$PowerPayload, S>

  type PowerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PowerFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: PowerCountAggregateInputType | true
    }

  export interface PowerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Power'], meta: { name: 'Power' } }
    /**
     * Find zero or one Power that matches the filter.
     * @param {PowerFindUniqueArgs} args - Arguments to find a Power
     * @example
     * // Get one Power
     * const power = await prisma.power.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PowerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PowerFindUniqueArgs<ExtArgs>>
    ): Prisma__PowerClient<$Result.GetResult<Prisma.$PowerPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Power that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PowerFindUniqueOrThrowArgs} args - Arguments to find a Power
     * @example
     * // Get one Power
     * const power = await prisma.power.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PowerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PowerFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PowerClient<$Result.GetResult<Prisma.$PowerPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Power that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PowerFindFirstArgs} args - Arguments to find a Power
     * @example
     * // Get one Power
     * const power = await prisma.power.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PowerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PowerFindFirstArgs<ExtArgs>>
    ): Prisma__PowerClient<$Result.GetResult<Prisma.$PowerPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Power that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PowerFindFirstOrThrowArgs} args - Arguments to find a Power
     * @example
     * // Get one Power
     * const power = await prisma.power.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PowerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PowerFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PowerClient<$Result.GetResult<Prisma.$PowerPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Powers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PowerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Powers
     * const powers = await prisma.power.findMany()
     * 
     * // Get first 10 Powers
     * const powers = await prisma.power.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const powerWithIdOnly = await prisma.power.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PowerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PowerFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PowerPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Power.
     * @param {PowerCreateArgs} args - Arguments to create a Power.
     * @example
     * // Create one Power
     * const Power = await prisma.power.create({
     *   data: {
     *     // ... data to create a Power
     *   }
     * })
     * 
    **/
    create<T extends PowerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PowerCreateArgs<ExtArgs>>
    ): Prisma__PowerClient<$Result.GetResult<Prisma.$PowerPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Powers.
     *     @param {PowerCreateManyArgs} args - Arguments to create many Powers.
     *     @example
     *     // Create many Powers
     *     const power = await prisma.power.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PowerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PowerCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Power.
     * @param {PowerDeleteArgs} args - Arguments to delete one Power.
     * @example
     * // Delete one Power
     * const Power = await prisma.power.delete({
     *   where: {
     *     // ... filter to delete one Power
     *   }
     * })
     * 
    **/
    delete<T extends PowerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PowerDeleteArgs<ExtArgs>>
    ): Prisma__PowerClient<$Result.GetResult<Prisma.$PowerPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Power.
     * @param {PowerUpdateArgs} args - Arguments to update one Power.
     * @example
     * // Update one Power
     * const power = await prisma.power.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PowerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PowerUpdateArgs<ExtArgs>>
    ): Prisma__PowerClient<$Result.GetResult<Prisma.$PowerPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Powers.
     * @param {PowerDeleteManyArgs} args - Arguments to filter Powers to delete.
     * @example
     * // Delete a few Powers
     * const { count } = await prisma.power.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PowerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PowerDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Powers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PowerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Powers
     * const power = await prisma.power.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PowerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PowerUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Power.
     * @param {PowerUpsertArgs} args - Arguments to update or create a Power.
     * @example
     * // Update or create a Power
     * const power = await prisma.power.upsert({
     *   create: {
     *     // ... data to create a Power
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Power we want to update
     *   }
     * })
    **/
    upsert<T extends PowerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PowerUpsertArgs<ExtArgs>>
    ): Prisma__PowerClient<$Result.GetResult<Prisma.$PowerPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Powers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PowerCountArgs} args - Arguments to filter Powers to count.
     * @example
     * // Count the number of Powers
     * const count = await prisma.power.count({
     *   where: {
     *     // ... the filter for the Powers we want to count
     *   }
     * })
    **/
    count<T extends PowerCountArgs>(
      args?: Subset<T, PowerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PowerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Power.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PowerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PowerAggregateArgs>(args: Subset<T, PowerAggregateArgs>): Prisma.PrismaPromise<GetPowerAggregateType<T>>

    /**
     * Group by Power.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PowerGroupByArgs} args - Group by arguments.
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
      T extends PowerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PowerGroupByArgs['orderBy'] }
        : { orderBy?: PowerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PowerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPowerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Power model
   */
  readonly fields: PowerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Power.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PowerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    height<T extends HeightDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HeightDefaultArgs<ExtArgs>>): Prisma__HeightClient<$Result.GetResult<Prisma.$HeightPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Power model
   */ 
  interface PowerFieldRefs {
    readonly id: FieldRef<"Power", 'Int'>
    readonly title: FieldRef<"Power", 'String'>
    readonly recommended: FieldRef<"Power", 'Boolean'>
    readonly heightId: FieldRef<"Power", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Power findUnique
   */
  export type PowerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Power
     */
    select?: PowerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PowerInclude<ExtArgs> | null
    /**
     * Filter, which Power to fetch.
     */
    where: PowerWhereUniqueInput
  }


  /**
   * Power findUniqueOrThrow
   */
  export type PowerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Power
     */
    select?: PowerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PowerInclude<ExtArgs> | null
    /**
     * Filter, which Power to fetch.
     */
    where: PowerWhereUniqueInput
  }


  /**
   * Power findFirst
   */
  export type PowerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Power
     */
    select?: PowerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PowerInclude<ExtArgs> | null
    /**
     * Filter, which Power to fetch.
     */
    where?: PowerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Powers to fetch.
     */
    orderBy?: PowerOrderByWithRelationInput | PowerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Powers.
     */
    cursor?: PowerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Powers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Powers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Powers.
     */
    distinct?: PowerScalarFieldEnum | PowerScalarFieldEnum[]
  }


  /**
   * Power findFirstOrThrow
   */
  export type PowerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Power
     */
    select?: PowerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PowerInclude<ExtArgs> | null
    /**
     * Filter, which Power to fetch.
     */
    where?: PowerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Powers to fetch.
     */
    orderBy?: PowerOrderByWithRelationInput | PowerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Powers.
     */
    cursor?: PowerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Powers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Powers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Powers.
     */
    distinct?: PowerScalarFieldEnum | PowerScalarFieldEnum[]
  }


  /**
   * Power findMany
   */
  export type PowerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Power
     */
    select?: PowerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PowerInclude<ExtArgs> | null
    /**
     * Filter, which Powers to fetch.
     */
    where?: PowerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Powers to fetch.
     */
    orderBy?: PowerOrderByWithRelationInput | PowerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Powers.
     */
    cursor?: PowerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Powers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Powers.
     */
    skip?: number
    distinct?: PowerScalarFieldEnum | PowerScalarFieldEnum[]
  }


  /**
   * Power create
   */
  export type PowerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Power
     */
    select?: PowerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PowerInclude<ExtArgs> | null
    /**
     * The data needed to create a Power.
     */
    data: XOR<PowerCreateInput, PowerUncheckedCreateInput>
  }


  /**
   * Power createMany
   */
  export type PowerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Powers.
     */
    data: PowerCreateManyInput | PowerCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Power update
   */
  export type PowerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Power
     */
    select?: PowerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PowerInclude<ExtArgs> | null
    /**
     * The data needed to update a Power.
     */
    data: XOR<PowerUpdateInput, PowerUncheckedUpdateInput>
    /**
     * Choose, which Power to update.
     */
    where: PowerWhereUniqueInput
  }


  /**
   * Power updateMany
   */
  export type PowerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Powers.
     */
    data: XOR<PowerUpdateManyMutationInput, PowerUncheckedUpdateManyInput>
    /**
     * Filter which Powers to update
     */
    where?: PowerWhereInput
  }


  /**
   * Power upsert
   */
  export type PowerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Power
     */
    select?: PowerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PowerInclude<ExtArgs> | null
    /**
     * The filter to search for the Power to update in case it exists.
     */
    where: PowerWhereUniqueInput
    /**
     * In case the Power found by the `where` argument doesn't exist, create a new Power with this data.
     */
    create: XOR<PowerCreateInput, PowerUncheckedCreateInput>
    /**
     * In case the Power was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PowerUpdateInput, PowerUncheckedUpdateInput>
  }


  /**
   * Power delete
   */
  export type PowerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Power
     */
    select?: PowerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PowerInclude<ExtArgs> | null
    /**
     * Filter which Power to delete.
     */
    where: PowerWhereUniqueInput
  }


  /**
   * Power deleteMany
   */
  export type PowerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Powers to delete
     */
    where?: PowerWhereInput
  }


  /**
   * Power without action
   */
  export type PowerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Power
     */
    select?: PowerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PowerInclude<ExtArgs> | null
  }



  /**
   * Model InputOutput
   */

  export type AggregateInputOutput = {
    _count: InputOutputCountAggregateOutputType | null
    _avg: InputOutputAvgAggregateOutputType | null
    _sum: InputOutputSumAggregateOutputType | null
    _min: InputOutputMinAggregateOutputType | null
    _max: InputOutputMaxAggregateOutputType | null
  }

  export type InputOutputAvgAggregateOutputType = {
    id: number | null
  }

  export type InputOutputSumAggregateOutputType = {
    id: number | null
  }

  export type InputOutputMinAggregateOutputType = {
    id: number | null
    input: string | null
    output: string | null
  }

  export type InputOutputMaxAggregateOutputType = {
    id: number | null
    input: string | null
    output: string | null
  }

  export type InputOutputCountAggregateOutputType = {
    id: number
    input: number
    output: number
    _all: number
  }


  export type InputOutputAvgAggregateInputType = {
    id?: true
  }

  export type InputOutputSumAggregateInputType = {
    id?: true
  }

  export type InputOutputMinAggregateInputType = {
    id?: true
    input?: true
    output?: true
  }

  export type InputOutputMaxAggregateInputType = {
    id?: true
    input?: true
    output?: true
  }

  export type InputOutputCountAggregateInputType = {
    id?: true
    input?: true
    output?: true
    _all?: true
  }

  export type InputOutputAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InputOutput to aggregate.
     */
    where?: InputOutputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InputOutputs to fetch.
     */
    orderBy?: InputOutputOrderByWithRelationInput | InputOutputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InputOutputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InputOutputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InputOutputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned InputOutputs
    **/
    _count?: true | InputOutputCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InputOutputAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InputOutputSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InputOutputMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InputOutputMaxAggregateInputType
  }

  export type GetInputOutputAggregateType<T extends InputOutputAggregateArgs> = {
        [P in keyof T & keyof AggregateInputOutput]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInputOutput[P]>
      : GetScalarType<T[P], AggregateInputOutput[P]>
  }




  export type InputOutputGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InputOutputWhereInput
    orderBy?: InputOutputOrderByWithAggregationInput | InputOutputOrderByWithAggregationInput[]
    by: InputOutputScalarFieldEnum[] | InputOutputScalarFieldEnum
    having?: InputOutputScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InputOutputCountAggregateInputType | true
    _avg?: InputOutputAvgAggregateInputType
    _sum?: InputOutputSumAggregateInputType
    _min?: InputOutputMinAggregateInputType
    _max?: InputOutputMaxAggregateInputType
  }

  export type InputOutputGroupByOutputType = {
    id: number
    input: string
    output: string
    _count: InputOutputCountAggregateOutputType | null
    _avg: InputOutputAvgAggregateOutputType | null
    _sum: InputOutputSumAggregateOutputType | null
    _min: InputOutputMinAggregateOutputType | null
    _max: InputOutputMaxAggregateOutputType | null
  }

  type GetInputOutputGroupByPayload<T extends InputOutputGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InputOutputGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InputOutputGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InputOutputGroupByOutputType[P]>
            : GetScalarType<T[P], InputOutputGroupByOutputType[P]>
        }
      >
    >


  export type InputOutputSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    input?: boolean
    output?: boolean
  }, ExtArgs["result"]["inputOutput"]>

  export type InputOutputSelectScalar = {
    id?: boolean
    input?: boolean
    output?: boolean
  }


  export type $InputOutputPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "InputOutput"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      input: string
      output: string
    }, ExtArgs["result"]["inputOutput"]>
    composites: {}
  }


  type InputOutputGetPayload<S extends boolean | null | undefined | InputOutputDefaultArgs> = $Result.GetResult<Prisma.$InputOutputPayload, S>

  type InputOutputCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<InputOutputFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: InputOutputCountAggregateInputType | true
    }

  export interface InputOutputDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['InputOutput'], meta: { name: 'InputOutput' } }
    /**
     * Find zero or one InputOutput that matches the filter.
     * @param {InputOutputFindUniqueArgs} args - Arguments to find a InputOutput
     * @example
     * // Get one InputOutput
     * const inputOutput = await prisma.inputOutput.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends InputOutputFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, InputOutputFindUniqueArgs<ExtArgs>>
    ): Prisma__InputOutputClient<$Result.GetResult<Prisma.$InputOutputPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one InputOutput that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {InputOutputFindUniqueOrThrowArgs} args - Arguments to find a InputOutput
     * @example
     * // Get one InputOutput
     * const inputOutput = await prisma.inputOutput.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends InputOutputFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InputOutputFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__InputOutputClient<$Result.GetResult<Prisma.$InputOutputPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first InputOutput that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InputOutputFindFirstArgs} args - Arguments to find a InputOutput
     * @example
     * // Get one InputOutput
     * const inputOutput = await prisma.inputOutput.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends InputOutputFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, InputOutputFindFirstArgs<ExtArgs>>
    ): Prisma__InputOutputClient<$Result.GetResult<Prisma.$InputOutputPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first InputOutput that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InputOutputFindFirstOrThrowArgs} args - Arguments to find a InputOutput
     * @example
     * // Get one InputOutput
     * const inputOutput = await prisma.inputOutput.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends InputOutputFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, InputOutputFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__InputOutputClient<$Result.GetResult<Prisma.$InputOutputPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more InputOutputs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InputOutputFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all InputOutputs
     * const inputOutputs = await prisma.inputOutput.findMany()
     * 
     * // Get first 10 InputOutputs
     * const inputOutputs = await prisma.inputOutput.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inputOutputWithIdOnly = await prisma.inputOutput.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends InputOutputFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InputOutputFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InputOutputPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a InputOutput.
     * @param {InputOutputCreateArgs} args - Arguments to create a InputOutput.
     * @example
     * // Create one InputOutput
     * const InputOutput = await prisma.inputOutput.create({
     *   data: {
     *     // ... data to create a InputOutput
     *   }
     * })
     * 
    **/
    create<T extends InputOutputCreateArgs<ExtArgs>>(
      args: SelectSubset<T, InputOutputCreateArgs<ExtArgs>>
    ): Prisma__InputOutputClient<$Result.GetResult<Prisma.$InputOutputPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many InputOutputs.
     *     @param {InputOutputCreateManyArgs} args - Arguments to create many InputOutputs.
     *     @example
     *     // Create many InputOutputs
     *     const inputOutput = await prisma.inputOutput.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends InputOutputCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InputOutputCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a InputOutput.
     * @param {InputOutputDeleteArgs} args - Arguments to delete one InputOutput.
     * @example
     * // Delete one InputOutput
     * const InputOutput = await prisma.inputOutput.delete({
     *   where: {
     *     // ... filter to delete one InputOutput
     *   }
     * })
     * 
    **/
    delete<T extends InputOutputDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, InputOutputDeleteArgs<ExtArgs>>
    ): Prisma__InputOutputClient<$Result.GetResult<Prisma.$InputOutputPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one InputOutput.
     * @param {InputOutputUpdateArgs} args - Arguments to update one InputOutput.
     * @example
     * // Update one InputOutput
     * const inputOutput = await prisma.inputOutput.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends InputOutputUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, InputOutputUpdateArgs<ExtArgs>>
    ): Prisma__InputOutputClient<$Result.GetResult<Prisma.$InputOutputPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more InputOutputs.
     * @param {InputOutputDeleteManyArgs} args - Arguments to filter InputOutputs to delete.
     * @example
     * // Delete a few InputOutputs
     * const { count } = await prisma.inputOutput.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends InputOutputDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, InputOutputDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more InputOutputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InputOutputUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many InputOutputs
     * const inputOutput = await prisma.inputOutput.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends InputOutputUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, InputOutputUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one InputOutput.
     * @param {InputOutputUpsertArgs} args - Arguments to update or create a InputOutput.
     * @example
     * // Update or create a InputOutput
     * const inputOutput = await prisma.inputOutput.upsert({
     *   create: {
     *     // ... data to create a InputOutput
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the InputOutput we want to update
     *   }
     * })
    **/
    upsert<T extends InputOutputUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, InputOutputUpsertArgs<ExtArgs>>
    ): Prisma__InputOutputClient<$Result.GetResult<Prisma.$InputOutputPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of InputOutputs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InputOutputCountArgs} args - Arguments to filter InputOutputs to count.
     * @example
     * // Count the number of InputOutputs
     * const count = await prisma.inputOutput.count({
     *   where: {
     *     // ... the filter for the InputOutputs we want to count
     *   }
     * })
    **/
    count<T extends InputOutputCountArgs>(
      args?: Subset<T, InputOutputCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InputOutputCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a InputOutput.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InputOutputAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InputOutputAggregateArgs>(args: Subset<T, InputOutputAggregateArgs>): Prisma.PrismaPromise<GetInputOutputAggregateType<T>>

    /**
     * Group by InputOutput.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InputOutputGroupByArgs} args - Group by arguments.
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
      T extends InputOutputGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InputOutputGroupByArgs['orderBy'] }
        : { orderBy?: InputOutputGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InputOutputGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInputOutputGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the InputOutput model
   */
  readonly fields: InputOutputFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for InputOutput.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InputOutputClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the InputOutput model
   */ 
  interface InputOutputFieldRefs {
    readonly id: FieldRef<"InputOutput", 'Int'>
    readonly input: FieldRef<"InputOutput", 'String'>
    readonly output: FieldRef<"InputOutput", 'String'>
  }
    

  // Custom InputTypes

  /**
   * InputOutput findUnique
   */
  export type InputOutputFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InputOutput
     */
    select?: InputOutputSelect<ExtArgs> | null
    /**
     * Filter, which InputOutput to fetch.
     */
    where: InputOutputWhereUniqueInput
  }


  /**
   * InputOutput findUniqueOrThrow
   */
  export type InputOutputFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InputOutput
     */
    select?: InputOutputSelect<ExtArgs> | null
    /**
     * Filter, which InputOutput to fetch.
     */
    where: InputOutputWhereUniqueInput
  }


  /**
   * InputOutput findFirst
   */
  export type InputOutputFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InputOutput
     */
    select?: InputOutputSelect<ExtArgs> | null
    /**
     * Filter, which InputOutput to fetch.
     */
    where?: InputOutputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InputOutputs to fetch.
     */
    orderBy?: InputOutputOrderByWithRelationInput | InputOutputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InputOutputs.
     */
    cursor?: InputOutputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InputOutputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InputOutputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InputOutputs.
     */
    distinct?: InputOutputScalarFieldEnum | InputOutputScalarFieldEnum[]
  }


  /**
   * InputOutput findFirstOrThrow
   */
  export type InputOutputFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InputOutput
     */
    select?: InputOutputSelect<ExtArgs> | null
    /**
     * Filter, which InputOutput to fetch.
     */
    where?: InputOutputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InputOutputs to fetch.
     */
    orderBy?: InputOutputOrderByWithRelationInput | InputOutputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for InputOutputs.
     */
    cursor?: InputOutputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InputOutputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InputOutputs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of InputOutputs.
     */
    distinct?: InputOutputScalarFieldEnum | InputOutputScalarFieldEnum[]
  }


  /**
   * InputOutput findMany
   */
  export type InputOutputFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InputOutput
     */
    select?: InputOutputSelect<ExtArgs> | null
    /**
     * Filter, which InputOutputs to fetch.
     */
    where?: InputOutputWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of InputOutputs to fetch.
     */
    orderBy?: InputOutputOrderByWithRelationInput | InputOutputOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing InputOutputs.
     */
    cursor?: InputOutputWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` InputOutputs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` InputOutputs.
     */
    skip?: number
    distinct?: InputOutputScalarFieldEnum | InputOutputScalarFieldEnum[]
  }


  /**
   * InputOutput create
   */
  export type InputOutputCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InputOutput
     */
    select?: InputOutputSelect<ExtArgs> | null
    /**
     * The data needed to create a InputOutput.
     */
    data: XOR<InputOutputCreateInput, InputOutputUncheckedCreateInput>
  }


  /**
   * InputOutput createMany
   */
  export type InputOutputCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many InputOutputs.
     */
    data: InputOutputCreateManyInput | InputOutputCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * InputOutput update
   */
  export type InputOutputUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InputOutput
     */
    select?: InputOutputSelect<ExtArgs> | null
    /**
     * The data needed to update a InputOutput.
     */
    data: XOR<InputOutputUpdateInput, InputOutputUncheckedUpdateInput>
    /**
     * Choose, which InputOutput to update.
     */
    where: InputOutputWhereUniqueInput
  }


  /**
   * InputOutput updateMany
   */
  export type InputOutputUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update InputOutputs.
     */
    data: XOR<InputOutputUpdateManyMutationInput, InputOutputUncheckedUpdateManyInput>
    /**
     * Filter which InputOutputs to update
     */
    where?: InputOutputWhereInput
  }


  /**
   * InputOutput upsert
   */
  export type InputOutputUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InputOutput
     */
    select?: InputOutputSelect<ExtArgs> | null
    /**
     * The filter to search for the InputOutput to update in case it exists.
     */
    where: InputOutputWhereUniqueInput
    /**
     * In case the InputOutput found by the `where` argument doesn't exist, create a new InputOutput with this data.
     */
    create: XOR<InputOutputCreateInput, InputOutputUncheckedCreateInput>
    /**
     * In case the InputOutput was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InputOutputUpdateInput, InputOutputUncheckedUpdateInput>
  }


  /**
   * InputOutput delete
   */
  export type InputOutputDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InputOutput
     */
    select?: InputOutputSelect<ExtArgs> | null
    /**
     * Filter which InputOutput to delete.
     */
    where: InputOutputWhereUniqueInput
  }


  /**
   * InputOutput deleteMany
   */
  export type InputOutputDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which InputOutputs to delete
     */
    where?: InputOutputWhereInput
  }


  /**
   * InputOutput without action
   */
  export type InputOutputDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InputOutput
     */
    select?: InputOutputSelect<ExtArgs> | null
  }



  /**
   * Model Propose
   */

  export type AggregatePropose = {
    _count: ProposeCountAggregateOutputType | null
    _avg: ProposeAvgAggregateOutputType | null
    _sum: ProposeSumAggregateOutputType | null
    _min: ProposeMinAggregateOutputType | null
    _max: ProposeMaxAggregateOutputType | null
  }

  export type ProposeAvgAggregateOutputType = {
    id: number | null
  }

  export type ProposeSumAggregateOutputType = {
    id: number | null
  }

  export type ProposeMinAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    createdAt: Date | null
    observation: string | null
    groups: string | null
    inputOutputs: string | null
    equipment: string | null
    product: string | null
    model: string | null
    capacity: string | null
    height: string | null
    power: string | null
    input: string | null
    output: string | null
  }

  export type ProposeMaxAggregateOutputType = {
    id: number | null
    title: string | null
    content: string | null
    createdAt: Date | null
    observation: string | null
    groups: string | null
    inputOutputs: string | null
    equipment: string | null
    product: string | null
    model: string | null
    capacity: string | null
    height: string | null
    power: string | null
    input: string | null
    output: string | null
  }

  export type ProposeCountAggregateOutputType = {
    id: number
    title: number
    content: number
    createdAt: number
    observation: number
    groups: number
    inputOutputs: number
    equipment: number
    product: number
    model: number
    capacity: number
    height: number
    power: number
    input: number
    output: number
    _all: number
  }


  export type ProposeAvgAggregateInputType = {
    id?: true
  }

  export type ProposeSumAggregateInputType = {
    id?: true
  }

  export type ProposeMinAggregateInputType = {
    id?: true
    title?: true
    content?: true
    createdAt?: true
    observation?: true
    groups?: true
    inputOutputs?: true
    equipment?: true
    product?: true
    model?: true
    capacity?: true
    height?: true
    power?: true
    input?: true
    output?: true
  }

  export type ProposeMaxAggregateInputType = {
    id?: true
    title?: true
    content?: true
    createdAt?: true
    observation?: true
    groups?: true
    inputOutputs?: true
    equipment?: true
    product?: true
    model?: true
    capacity?: true
    height?: true
    power?: true
    input?: true
    output?: true
  }

  export type ProposeCountAggregateInputType = {
    id?: true
    title?: true
    content?: true
    createdAt?: true
    observation?: true
    groups?: true
    inputOutputs?: true
    equipment?: true
    product?: true
    model?: true
    capacity?: true
    height?: true
    power?: true
    input?: true
    output?: true
    _all?: true
  }

  export type ProposeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Propose to aggregate.
     */
    where?: ProposeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proposes to fetch.
     */
    orderBy?: ProposeOrderByWithRelationInput | ProposeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProposeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proposes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proposes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Proposes
    **/
    _count?: true | ProposeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProposeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProposeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProposeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProposeMaxAggregateInputType
  }

  export type GetProposeAggregateType<T extends ProposeAggregateArgs> = {
        [P in keyof T & keyof AggregatePropose]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePropose[P]>
      : GetScalarType<T[P], AggregatePropose[P]>
  }




  export type ProposeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProposeWhereInput
    orderBy?: ProposeOrderByWithAggregationInput | ProposeOrderByWithAggregationInput[]
    by: ProposeScalarFieldEnum[] | ProposeScalarFieldEnum
    having?: ProposeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProposeCountAggregateInputType | true
    _avg?: ProposeAvgAggregateInputType
    _sum?: ProposeSumAggregateInputType
    _min?: ProposeMinAggregateInputType
    _max?: ProposeMaxAggregateInputType
  }

  export type ProposeGroupByOutputType = {
    id: number
    title: string
    content: string
    createdAt: Date
    observation: string | null
    groups: string
    inputOutputs: string
    equipment: string
    product: string
    model: string
    capacity: string
    height: string
    power: string
    input: string
    output: string
    _count: ProposeCountAggregateOutputType | null
    _avg: ProposeAvgAggregateOutputType | null
    _sum: ProposeSumAggregateOutputType | null
    _min: ProposeMinAggregateOutputType | null
    _max: ProposeMaxAggregateOutputType | null
  }

  type GetProposeGroupByPayload<T extends ProposeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProposeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProposeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProposeGroupByOutputType[P]>
            : GetScalarType<T[P], ProposeGroupByOutputType[P]>
        }
      >
    >


  export type ProposeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    observation?: boolean
    groups?: boolean
    inputOutputs?: boolean
    equipment?: boolean
    product?: boolean
    model?: boolean
    capacity?: boolean
    height?: boolean
    power?: boolean
    input?: boolean
    output?: boolean
  }, ExtArgs["result"]["propose"]>

  export type ProposeSelectScalar = {
    id?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    observation?: boolean
    groups?: boolean
    inputOutputs?: boolean
    equipment?: boolean
    product?: boolean
    model?: boolean
    capacity?: boolean
    height?: boolean
    power?: boolean
    input?: boolean
    output?: boolean
  }


  export type $ProposePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Propose"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      content: string
      createdAt: Date
      observation: string | null
      groups: string
      inputOutputs: string
      equipment: string
      product: string
      model: string
      capacity: string
      height: string
      power: string
      input: string
      output: string
    }, ExtArgs["result"]["propose"]>
    composites: {}
  }


  type ProposeGetPayload<S extends boolean | null | undefined | ProposeDefaultArgs> = $Result.GetResult<Prisma.$ProposePayload, S>

  type ProposeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProposeFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ProposeCountAggregateInputType | true
    }

  export interface ProposeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Propose'], meta: { name: 'Propose' } }
    /**
     * Find zero or one Propose that matches the filter.
     * @param {ProposeFindUniqueArgs} args - Arguments to find a Propose
     * @example
     * // Get one Propose
     * const propose = await prisma.propose.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ProposeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ProposeFindUniqueArgs<ExtArgs>>
    ): Prisma__ProposeClient<$Result.GetResult<Prisma.$ProposePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Propose that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ProposeFindUniqueOrThrowArgs} args - Arguments to find a Propose
     * @example
     * // Get one Propose
     * const propose = await prisma.propose.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ProposeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProposeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ProposeClient<$Result.GetResult<Prisma.$ProposePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Propose that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposeFindFirstArgs} args - Arguments to find a Propose
     * @example
     * // Get one Propose
     * const propose = await prisma.propose.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ProposeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ProposeFindFirstArgs<ExtArgs>>
    ): Prisma__ProposeClient<$Result.GetResult<Prisma.$ProposePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Propose that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposeFindFirstOrThrowArgs} args - Arguments to find a Propose
     * @example
     * // Get one Propose
     * const propose = await prisma.propose.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ProposeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ProposeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ProposeClient<$Result.GetResult<Prisma.$ProposePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Proposes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Proposes
     * const proposes = await prisma.propose.findMany()
     * 
     * // Get first 10 Proposes
     * const proposes = await prisma.propose.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const proposeWithIdOnly = await prisma.propose.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ProposeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProposeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProposePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Propose.
     * @param {ProposeCreateArgs} args - Arguments to create a Propose.
     * @example
     * // Create one Propose
     * const Propose = await prisma.propose.create({
     *   data: {
     *     // ... data to create a Propose
     *   }
     * })
     * 
    **/
    create<T extends ProposeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ProposeCreateArgs<ExtArgs>>
    ): Prisma__ProposeClient<$Result.GetResult<Prisma.$ProposePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Proposes.
     *     @param {ProposeCreateManyArgs} args - Arguments to create many Proposes.
     *     @example
     *     // Create many Proposes
     *     const propose = await prisma.propose.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ProposeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProposeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Propose.
     * @param {ProposeDeleteArgs} args - Arguments to delete one Propose.
     * @example
     * // Delete one Propose
     * const Propose = await prisma.propose.delete({
     *   where: {
     *     // ... filter to delete one Propose
     *   }
     * })
     * 
    **/
    delete<T extends ProposeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ProposeDeleteArgs<ExtArgs>>
    ): Prisma__ProposeClient<$Result.GetResult<Prisma.$ProposePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Propose.
     * @param {ProposeUpdateArgs} args - Arguments to update one Propose.
     * @example
     * // Update one Propose
     * const propose = await prisma.propose.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ProposeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ProposeUpdateArgs<ExtArgs>>
    ): Prisma__ProposeClient<$Result.GetResult<Prisma.$ProposePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Proposes.
     * @param {ProposeDeleteManyArgs} args - Arguments to filter Proposes to delete.
     * @example
     * // Delete a few Proposes
     * const { count } = await prisma.propose.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ProposeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ProposeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Proposes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Proposes
     * const propose = await prisma.propose.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ProposeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ProposeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Propose.
     * @param {ProposeUpsertArgs} args - Arguments to update or create a Propose.
     * @example
     * // Update or create a Propose
     * const propose = await prisma.propose.upsert({
     *   create: {
     *     // ... data to create a Propose
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Propose we want to update
     *   }
     * })
    **/
    upsert<T extends ProposeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ProposeUpsertArgs<ExtArgs>>
    ): Prisma__ProposeClient<$Result.GetResult<Prisma.$ProposePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Proposes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposeCountArgs} args - Arguments to filter Proposes to count.
     * @example
     * // Count the number of Proposes
     * const count = await prisma.propose.count({
     *   where: {
     *     // ... the filter for the Proposes we want to count
     *   }
     * })
    **/
    count<T extends ProposeCountArgs>(
      args?: Subset<T, ProposeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProposeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Propose.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProposeAggregateArgs>(args: Subset<T, ProposeAggregateArgs>): Prisma.PrismaPromise<GetProposeAggregateType<T>>

    /**
     * Group by Propose.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProposeGroupByArgs} args - Group by arguments.
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
      T extends ProposeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProposeGroupByArgs['orderBy'] }
        : { orderBy?: ProposeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProposeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProposeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Propose model
   */
  readonly fields: ProposeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Propose.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProposeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Propose model
   */ 
  interface ProposeFieldRefs {
    readonly id: FieldRef<"Propose", 'Int'>
    readonly title: FieldRef<"Propose", 'String'>
    readonly content: FieldRef<"Propose", 'String'>
    readonly createdAt: FieldRef<"Propose", 'DateTime'>
    readonly observation: FieldRef<"Propose", 'String'>
    readonly groups: FieldRef<"Propose", 'String'>
    readonly inputOutputs: FieldRef<"Propose", 'String'>
    readonly equipment: FieldRef<"Propose", 'String'>
    readonly product: FieldRef<"Propose", 'String'>
    readonly model: FieldRef<"Propose", 'String'>
    readonly capacity: FieldRef<"Propose", 'String'>
    readonly height: FieldRef<"Propose", 'String'>
    readonly power: FieldRef<"Propose", 'String'>
    readonly input: FieldRef<"Propose", 'String'>
    readonly output: FieldRef<"Propose", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Propose findUnique
   */
  export type ProposeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propose
     */
    select?: ProposeSelect<ExtArgs> | null
    /**
     * Filter, which Propose to fetch.
     */
    where: ProposeWhereUniqueInput
  }


  /**
   * Propose findUniqueOrThrow
   */
  export type ProposeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propose
     */
    select?: ProposeSelect<ExtArgs> | null
    /**
     * Filter, which Propose to fetch.
     */
    where: ProposeWhereUniqueInput
  }


  /**
   * Propose findFirst
   */
  export type ProposeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propose
     */
    select?: ProposeSelect<ExtArgs> | null
    /**
     * Filter, which Propose to fetch.
     */
    where?: ProposeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proposes to fetch.
     */
    orderBy?: ProposeOrderByWithRelationInput | ProposeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proposes.
     */
    cursor?: ProposeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proposes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proposes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proposes.
     */
    distinct?: ProposeScalarFieldEnum | ProposeScalarFieldEnum[]
  }


  /**
   * Propose findFirstOrThrow
   */
  export type ProposeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propose
     */
    select?: ProposeSelect<ExtArgs> | null
    /**
     * Filter, which Propose to fetch.
     */
    where?: ProposeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proposes to fetch.
     */
    orderBy?: ProposeOrderByWithRelationInput | ProposeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Proposes.
     */
    cursor?: ProposeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proposes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proposes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Proposes.
     */
    distinct?: ProposeScalarFieldEnum | ProposeScalarFieldEnum[]
  }


  /**
   * Propose findMany
   */
  export type ProposeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propose
     */
    select?: ProposeSelect<ExtArgs> | null
    /**
     * Filter, which Proposes to fetch.
     */
    where?: ProposeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Proposes to fetch.
     */
    orderBy?: ProposeOrderByWithRelationInput | ProposeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Proposes.
     */
    cursor?: ProposeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Proposes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Proposes.
     */
    skip?: number
    distinct?: ProposeScalarFieldEnum | ProposeScalarFieldEnum[]
  }


  /**
   * Propose create
   */
  export type ProposeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propose
     */
    select?: ProposeSelect<ExtArgs> | null
    /**
     * The data needed to create a Propose.
     */
    data: XOR<ProposeCreateInput, ProposeUncheckedCreateInput>
  }


  /**
   * Propose createMany
   */
  export type ProposeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Proposes.
     */
    data: ProposeCreateManyInput | ProposeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Propose update
   */
  export type ProposeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propose
     */
    select?: ProposeSelect<ExtArgs> | null
    /**
     * The data needed to update a Propose.
     */
    data: XOR<ProposeUpdateInput, ProposeUncheckedUpdateInput>
    /**
     * Choose, which Propose to update.
     */
    where: ProposeWhereUniqueInput
  }


  /**
   * Propose updateMany
   */
  export type ProposeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Proposes.
     */
    data: XOR<ProposeUpdateManyMutationInput, ProposeUncheckedUpdateManyInput>
    /**
     * Filter which Proposes to update
     */
    where?: ProposeWhereInput
  }


  /**
   * Propose upsert
   */
  export type ProposeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propose
     */
    select?: ProposeSelect<ExtArgs> | null
    /**
     * The filter to search for the Propose to update in case it exists.
     */
    where: ProposeWhereUniqueInput
    /**
     * In case the Propose found by the `where` argument doesn't exist, create a new Propose with this data.
     */
    create: XOR<ProposeCreateInput, ProposeUncheckedCreateInput>
    /**
     * In case the Propose was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProposeUpdateInput, ProposeUncheckedUpdateInput>
  }


  /**
   * Propose delete
   */
  export type ProposeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propose
     */
    select?: ProposeSelect<ExtArgs> | null
    /**
     * Filter which Propose to delete.
     */
    where: ProposeWhereUniqueInput
  }


  /**
   * Propose deleteMany
   */
  export type ProposeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Proposes to delete
     */
    where?: ProposeWhereInput
  }


  /**
   * Propose without action
   */
  export type ProposeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Propose
     */
    select?: ProposeSelect<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    username: 'username',
    email: 'email'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    address: 'address',
    city: 'city',
    state: 'state',
    zip: 'zip'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const GroupScalarFieldEnum: {
    id: 'id',
    title: 'title'
  };

  export type GroupScalarFieldEnum = (typeof GroupScalarFieldEnum)[keyof typeof GroupScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    title: 'title',
    groupId: 'groupId'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ModelScalarFieldEnum: {
    id: 'id',
    title: 'title',
    productId: 'productId'
  };

  export type ModelScalarFieldEnum = (typeof ModelScalarFieldEnum)[keyof typeof ModelScalarFieldEnum]


  export const TypeScalarFieldEnum: {
    id: 'id',
    title: 'title',
    productId: 'productId'
  };

  export type TypeScalarFieldEnum = (typeof TypeScalarFieldEnum)[keyof typeof TypeScalarFieldEnum]


  export const CapacityScalarFieldEnum: {
    id: 'id',
    title: 'title',
    modelId: 'modelId'
  };

  export type CapacityScalarFieldEnum = (typeof CapacityScalarFieldEnum)[keyof typeof CapacityScalarFieldEnum]


  export const HeightScalarFieldEnum: {
    id: 'id',
    title: 'title',
    recommended: 'recommended',
    capacityId: 'capacityId'
  };

  export type HeightScalarFieldEnum = (typeof HeightScalarFieldEnum)[keyof typeof HeightScalarFieldEnum]


  export const PowerScalarFieldEnum: {
    id: 'id',
    title: 'title',
    recommended: 'recommended',
    heightId: 'heightId'
  };

  export type PowerScalarFieldEnum = (typeof PowerScalarFieldEnum)[keyof typeof PowerScalarFieldEnum]


  export const InputOutputScalarFieldEnum: {
    id: 'id',
    input: 'input',
    output: 'output'
  };

  export type InputOutputScalarFieldEnum = (typeof InputOutputScalarFieldEnum)[keyof typeof InputOutputScalarFieldEnum]


  export const ProposeScalarFieldEnum: {
    id: 'id',
    title: 'title',
    content: 'content',
    createdAt: 'createdAt',
    observation: 'observation',
    groups: 'groups',
    inputOutputs: 'inputOutputs',
    equipment: 'equipment',
    product: 'product',
    model: 'model',
    capacity: 'capacity',
    height: 'height',
    power: 'power',
    input: 'input',
    output: 'output'
  };

  export type ProposeScalarFieldEnum = (typeof ProposeScalarFieldEnum)[keyof typeof ProposeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: IntFilter<"Client"> | number
    name?: StringFilter<"Client"> | string
    email?: StringFilter<"Client"> | string
    phone?: StringFilter<"Client"> | string
    address?: StringFilter<"Client"> | string
    city?: StringFilter<"Client"> | string
    state?: StringFilter<"Client"> | string
    zip?: StringFilter<"Client"> | string
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    name?: StringFilter<"Client"> | string
    email?: StringFilter<"Client"> | string
    phone?: StringFilter<"Client"> | string
    address?: StringFilter<"Client"> | string
    city?: StringFilter<"Client"> | string
    state?: StringFilter<"Client"> | string
    zip?: StringFilter<"Client"> | string
  }, "id">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _avg?: ClientAvgOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
    _sum?: ClientSumOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Client"> | number
    name?: StringWithAggregatesFilter<"Client"> | string
    email?: StringWithAggregatesFilter<"Client"> | string
    phone?: StringWithAggregatesFilter<"Client"> | string
    address?: StringWithAggregatesFilter<"Client"> | string
    city?: StringWithAggregatesFilter<"Client"> | string
    state?: StringWithAggregatesFilter<"Client"> | string
    zip?: StringWithAggregatesFilter<"Client"> | string
  }

  export type GroupWhereInput = {
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    id?: IntFilter<"Group"> | number
    title?: StringFilter<"Group"> | string
    products?: ProductListRelationFilter
  }

  export type GroupOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    products?: ProductOrderByRelationAggregateInput
  }

  export type GroupWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GroupWhereInput | GroupWhereInput[]
    OR?: GroupWhereInput[]
    NOT?: GroupWhereInput | GroupWhereInput[]
    title?: StringFilter<"Group"> | string
    products?: ProductListRelationFilter
  }, "id">

  export type GroupOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    _count?: GroupCountOrderByAggregateInput
    _avg?: GroupAvgOrderByAggregateInput
    _max?: GroupMaxOrderByAggregateInput
    _min?: GroupMinOrderByAggregateInput
    _sum?: GroupSumOrderByAggregateInput
  }

  export type GroupScalarWhereWithAggregatesInput = {
    AND?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    OR?: GroupScalarWhereWithAggregatesInput[]
    NOT?: GroupScalarWhereWithAggregatesInput | GroupScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Group"> | number
    title?: StringWithAggregatesFilter<"Group"> | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    title?: StringFilter<"Product"> | string
    groupId?: IntFilter<"Product"> | number
    group?: XOR<GroupRelationFilter, GroupWhereInput>
    models?: ModelListRelationFilter
    types?: TypeListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    groupId?: SortOrder
    group?: GroupOrderByWithRelationInput
    models?: ModelOrderByRelationAggregateInput
    types?: TypeOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    title?: StringFilter<"Product"> | string
    groupId?: IntFilter<"Product"> | number
    group?: XOR<GroupRelationFilter, GroupWhereInput>
    models?: ModelListRelationFilter
    types?: TypeListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    groupId?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    title?: StringWithAggregatesFilter<"Product"> | string
    groupId?: IntWithAggregatesFilter<"Product"> | number
  }

  export type ModelWhereInput = {
    AND?: ModelWhereInput | ModelWhereInput[]
    OR?: ModelWhereInput[]
    NOT?: ModelWhereInput | ModelWhereInput[]
    id?: IntFilter<"Model"> | number
    title?: StringFilter<"Model"> | string
    productId?: IntFilter<"Model"> | number
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    capacities?: CapacityListRelationFilter
  }

  export type ModelOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    productId?: SortOrder
    product?: ProductOrderByWithRelationInput
    capacities?: CapacityOrderByRelationAggregateInput
  }

  export type ModelWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ModelWhereInput | ModelWhereInput[]
    OR?: ModelWhereInput[]
    NOT?: ModelWhereInput | ModelWhereInput[]
    title?: StringFilter<"Model"> | string
    productId?: IntFilter<"Model"> | number
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    capacities?: CapacityListRelationFilter
  }, "id">

  export type ModelOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    productId?: SortOrder
    _count?: ModelCountOrderByAggregateInput
    _avg?: ModelAvgOrderByAggregateInput
    _max?: ModelMaxOrderByAggregateInput
    _min?: ModelMinOrderByAggregateInput
    _sum?: ModelSumOrderByAggregateInput
  }

  export type ModelScalarWhereWithAggregatesInput = {
    AND?: ModelScalarWhereWithAggregatesInput | ModelScalarWhereWithAggregatesInput[]
    OR?: ModelScalarWhereWithAggregatesInput[]
    NOT?: ModelScalarWhereWithAggregatesInput | ModelScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Model"> | number
    title?: StringWithAggregatesFilter<"Model"> | string
    productId?: IntWithAggregatesFilter<"Model"> | number
  }

  export type TypeWhereInput = {
    AND?: TypeWhereInput | TypeWhereInput[]
    OR?: TypeWhereInput[]
    NOT?: TypeWhereInput | TypeWhereInput[]
    id?: IntFilter<"Type"> | number
    title?: StringFilter<"Type"> | string
    productId?: IntFilter<"Type"> | number
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type TypeOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    productId?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type TypeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TypeWhereInput | TypeWhereInput[]
    OR?: TypeWhereInput[]
    NOT?: TypeWhereInput | TypeWhereInput[]
    title?: StringFilter<"Type"> | string
    productId?: IntFilter<"Type"> | number
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "id">

  export type TypeOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    productId?: SortOrder
    _count?: TypeCountOrderByAggregateInput
    _avg?: TypeAvgOrderByAggregateInput
    _max?: TypeMaxOrderByAggregateInput
    _min?: TypeMinOrderByAggregateInput
    _sum?: TypeSumOrderByAggregateInput
  }

  export type TypeScalarWhereWithAggregatesInput = {
    AND?: TypeScalarWhereWithAggregatesInput | TypeScalarWhereWithAggregatesInput[]
    OR?: TypeScalarWhereWithAggregatesInput[]
    NOT?: TypeScalarWhereWithAggregatesInput | TypeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Type"> | number
    title?: StringWithAggregatesFilter<"Type"> | string
    productId?: IntWithAggregatesFilter<"Type"> | number
  }

  export type CapacityWhereInput = {
    AND?: CapacityWhereInput | CapacityWhereInput[]
    OR?: CapacityWhereInput[]
    NOT?: CapacityWhereInput | CapacityWhereInput[]
    id?: IntFilter<"Capacity"> | number
    title?: StringFilter<"Capacity"> | string
    modelId?: IntFilter<"Capacity"> | number
    model?: XOR<ModelRelationFilter, ModelWhereInput>
    heights?: HeightListRelationFilter
  }

  export type CapacityOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    modelId?: SortOrder
    model?: ModelOrderByWithRelationInput
    heights?: HeightOrderByRelationAggregateInput
  }

  export type CapacityWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CapacityWhereInput | CapacityWhereInput[]
    OR?: CapacityWhereInput[]
    NOT?: CapacityWhereInput | CapacityWhereInput[]
    title?: StringFilter<"Capacity"> | string
    modelId?: IntFilter<"Capacity"> | number
    model?: XOR<ModelRelationFilter, ModelWhereInput>
    heights?: HeightListRelationFilter
  }, "id">

  export type CapacityOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    modelId?: SortOrder
    _count?: CapacityCountOrderByAggregateInput
    _avg?: CapacityAvgOrderByAggregateInput
    _max?: CapacityMaxOrderByAggregateInput
    _min?: CapacityMinOrderByAggregateInput
    _sum?: CapacitySumOrderByAggregateInput
  }

  export type CapacityScalarWhereWithAggregatesInput = {
    AND?: CapacityScalarWhereWithAggregatesInput | CapacityScalarWhereWithAggregatesInput[]
    OR?: CapacityScalarWhereWithAggregatesInput[]
    NOT?: CapacityScalarWhereWithAggregatesInput | CapacityScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Capacity"> | number
    title?: StringWithAggregatesFilter<"Capacity"> | string
    modelId?: IntWithAggregatesFilter<"Capacity"> | number
  }

  export type HeightWhereInput = {
    AND?: HeightWhereInput | HeightWhereInput[]
    OR?: HeightWhereInput[]
    NOT?: HeightWhereInput | HeightWhereInput[]
    id?: IntFilter<"Height"> | number
    title?: StringFilter<"Height"> | string
    recommended?: BoolFilter<"Height"> | boolean
    capacityId?: IntFilter<"Height"> | number
    capacity?: XOR<CapacityRelationFilter, CapacityWhereInput>
    powers?: PowerListRelationFilter
  }

  export type HeightOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    recommended?: SortOrder
    capacityId?: SortOrder
    capacity?: CapacityOrderByWithRelationInput
    powers?: PowerOrderByRelationAggregateInput
  }

  export type HeightWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HeightWhereInput | HeightWhereInput[]
    OR?: HeightWhereInput[]
    NOT?: HeightWhereInput | HeightWhereInput[]
    title?: StringFilter<"Height"> | string
    recommended?: BoolFilter<"Height"> | boolean
    capacityId?: IntFilter<"Height"> | number
    capacity?: XOR<CapacityRelationFilter, CapacityWhereInput>
    powers?: PowerListRelationFilter
  }, "id">

  export type HeightOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    recommended?: SortOrder
    capacityId?: SortOrder
    _count?: HeightCountOrderByAggregateInput
    _avg?: HeightAvgOrderByAggregateInput
    _max?: HeightMaxOrderByAggregateInput
    _min?: HeightMinOrderByAggregateInput
    _sum?: HeightSumOrderByAggregateInput
  }

  export type HeightScalarWhereWithAggregatesInput = {
    AND?: HeightScalarWhereWithAggregatesInput | HeightScalarWhereWithAggregatesInput[]
    OR?: HeightScalarWhereWithAggregatesInput[]
    NOT?: HeightScalarWhereWithAggregatesInput | HeightScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Height"> | number
    title?: StringWithAggregatesFilter<"Height"> | string
    recommended?: BoolWithAggregatesFilter<"Height"> | boolean
    capacityId?: IntWithAggregatesFilter<"Height"> | number
  }

  export type PowerWhereInput = {
    AND?: PowerWhereInput | PowerWhereInput[]
    OR?: PowerWhereInput[]
    NOT?: PowerWhereInput | PowerWhereInput[]
    id?: IntFilter<"Power"> | number
    title?: StringFilter<"Power"> | string
    recommended?: BoolFilter<"Power"> | boolean
    heightId?: IntFilter<"Power"> | number
    height?: XOR<HeightRelationFilter, HeightWhereInput>
  }

  export type PowerOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    recommended?: SortOrder
    heightId?: SortOrder
    height?: HeightOrderByWithRelationInput
  }

  export type PowerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PowerWhereInput | PowerWhereInput[]
    OR?: PowerWhereInput[]
    NOT?: PowerWhereInput | PowerWhereInput[]
    title?: StringFilter<"Power"> | string
    recommended?: BoolFilter<"Power"> | boolean
    heightId?: IntFilter<"Power"> | number
    height?: XOR<HeightRelationFilter, HeightWhereInput>
  }, "id">

  export type PowerOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    recommended?: SortOrder
    heightId?: SortOrder
    _count?: PowerCountOrderByAggregateInput
    _avg?: PowerAvgOrderByAggregateInput
    _max?: PowerMaxOrderByAggregateInput
    _min?: PowerMinOrderByAggregateInput
    _sum?: PowerSumOrderByAggregateInput
  }

  export type PowerScalarWhereWithAggregatesInput = {
    AND?: PowerScalarWhereWithAggregatesInput | PowerScalarWhereWithAggregatesInput[]
    OR?: PowerScalarWhereWithAggregatesInput[]
    NOT?: PowerScalarWhereWithAggregatesInput | PowerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Power"> | number
    title?: StringWithAggregatesFilter<"Power"> | string
    recommended?: BoolWithAggregatesFilter<"Power"> | boolean
    heightId?: IntWithAggregatesFilter<"Power"> | number
  }

  export type InputOutputWhereInput = {
    AND?: InputOutputWhereInput | InputOutputWhereInput[]
    OR?: InputOutputWhereInput[]
    NOT?: InputOutputWhereInput | InputOutputWhereInput[]
    id?: IntFilter<"InputOutput"> | number
    input?: StringFilter<"InputOutput"> | string
    output?: StringFilter<"InputOutput"> | string
  }

  export type InputOutputOrderByWithRelationInput = {
    id?: SortOrder
    input?: SortOrder
    output?: SortOrder
  }

  export type InputOutputWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: InputOutputWhereInput | InputOutputWhereInput[]
    OR?: InputOutputWhereInput[]
    NOT?: InputOutputWhereInput | InputOutputWhereInput[]
    input?: StringFilter<"InputOutput"> | string
    output?: StringFilter<"InputOutput"> | string
  }, "id">

  export type InputOutputOrderByWithAggregationInput = {
    id?: SortOrder
    input?: SortOrder
    output?: SortOrder
    _count?: InputOutputCountOrderByAggregateInput
    _avg?: InputOutputAvgOrderByAggregateInput
    _max?: InputOutputMaxOrderByAggregateInput
    _min?: InputOutputMinOrderByAggregateInput
    _sum?: InputOutputSumOrderByAggregateInput
  }

  export type InputOutputScalarWhereWithAggregatesInput = {
    AND?: InputOutputScalarWhereWithAggregatesInput | InputOutputScalarWhereWithAggregatesInput[]
    OR?: InputOutputScalarWhereWithAggregatesInput[]
    NOT?: InputOutputScalarWhereWithAggregatesInput | InputOutputScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"InputOutput"> | number
    input?: StringWithAggregatesFilter<"InputOutput"> | string
    output?: StringWithAggregatesFilter<"InputOutput"> | string
  }

  export type ProposeWhereInput = {
    AND?: ProposeWhereInput | ProposeWhereInput[]
    OR?: ProposeWhereInput[]
    NOT?: ProposeWhereInput | ProposeWhereInput[]
    id?: IntFilter<"Propose"> | number
    title?: StringFilter<"Propose"> | string
    content?: StringFilter<"Propose"> | string
    createdAt?: DateTimeFilter<"Propose"> | Date | string
    observation?: StringNullableFilter<"Propose"> | string | null
    groups?: StringFilter<"Propose"> | string
    inputOutputs?: StringFilter<"Propose"> | string
    equipment?: StringFilter<"Propose"> | string
    product?: StringFilter<"Propose"> | string
    model?: StringFilter<"Propose"> | string
    capacity?: StringFilter<"Propose"> | string
    height?: StringFilter<"Propose"> | string
    power?: StringFilter<"Propose"> | string
    input?: StringFilter<"Propose"> | string
    output?: StringFilter<"Propose"> | string
  }

  export type ProposeOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    observation?: SortOrderInput | SortOrder
    groups?: SortOrder
    inputOutputs?: SortOrder
    equipment?: SortOrder
    product?: SortOrder
    model?: SortOrder
    capacity?: SortOrder
    height?: SortOrder
    power?: SortOrder
    input?: SortOrder
    output?: SortOrder
  }

  export type ProposeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProposeWhereInput | ProposeWhereInput[]
    OR?: ProposeWhereInput[]
    NOT?: ProposeWhereInput | ProposeWhereInput[]
    title?: StringFilter<"Propose"> | string
    content?: StringFilter<"Propose"> | string
    createdAt?: DateTimeFilter<"Propose"> | Date | string
    observation?: StringNullableFilter<"Propose"> | string | null
    groups?: StringFilter<"Propose"> | string
    inputOutputs?: StringFilter<"Propose"> | string
    equipment?: StringFilter<"Propose"> | string
    product?: StringFilter<"Propose"> | string
    model?: StringFilter<"Propose"> | string
    capacity?: StringFilter<"Propose"> | string
    height?: StringFilter<"Propose"> | string
    power?: StringFilter<"Propose"> | string
    input?: StringFilter<"Propose"> | string
    output?: StringFilter<"Propose"> | string
  }, "id">

  export type ProposeOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    observation?: SortOrderInput | SortOrder
    groups?: SortOrder
    inputOutputs?: SortOrder
    equipment?: SortOrder
    product?: SortOrder
    model?: SortOrder
    capacity?: SortOrder
    height?: SortOrder
    power?: SortOrder
    input?: SortOrder
    output?: SortOrder
    _count?: ProposeCountOrderByAggregateInput
    _avg?: ProposeAvgOrderByAggregateInput
    _max?: ProposeMaxOrderByAggregateInput
    _min?: ProposeMinOrderByAggregateInput
    _sum?: ProposeSumOrderByAggregateInput
  }

  export type ProposeScalarWhereWithAggregatesInput = {
    AND?: ProposeScalarWhereWithAggregatesInput | ProposeScalarWhereWithAggregatesInput[]
    OR?: ProposeScalarWhereWithAggregatesInput[]
    NOT?: ProposeScalarWhereWithAggregatesInput | ProposeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Propose"> | number
    title?: StringWithAggregatesFilter<"Propose"> | string
    content?: StringWithAggregatesFilter<"Propose"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Propose"> | Date | string
    observation?: StringNullableWithAggregatesFilter<"Propose"> | string | null
    groups?: StringWithAggregatesFilter<"Propose"> | string
    inputOutputs?: StringWithAggregatesFilter<"Propose"> | string
    equipment?: StringWithAggregatesFilter<"Propose"> | string
    product?: StringWithAggregatesFilter<"Propose"> | string
    model?: StringWithAggregatesFilter<"Propose"> | string
    capacity?: StringWithAggregatesFilter<"Propose"> | string
    height?: StringWithAggregatesFilter<"Propose"> | string
    power?: StringWithAggregatesFilter<"Propose"> | string
    input?: StringWithAggregatesFilter<"Propose"> | string
    output?: StringWithAggregatesFilter<"Propose"> | string
  }

  export type UserCreateInput = {
    name: string
    username: string
    email: string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    username: string
    email: string
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    username: string
    email: string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type ClientCreateInput = {
    name: string
    email: string
    phone: string
    address: string
    city: string
    state: string
    zip: string
  }

  export type ClientUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    phone: string
    address: string
    city: string
    state: string
    zip: string
  }

  export type ClientUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
  }

  export type ClientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
  }

  export type ClientCreateManyInput = {
    id?: number
    name: string
    email: string
    phone: string
    address: string
    city: string
    state: string
    zip: string
  }

  export type ClientUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    zip?: StringFieldUpdateOperationsInput | string
  }

  export type GroupCreateInput = {
    title: string
    products?: ProductCreateNestedManyWithoutGroupInput
  }

  export type GroupUncheckedCreateInput = {
    id?: number
    title: string
    products?: ProductUncheckedCreateNestedManyWithoutGroupInput
  }

  export type GroupUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    products?: ProductUpdateManyWithoutGroupNestedInput
  }

  export type GroupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    products?: ProductUncheckedUpdateManyWithoutGroupNestedInput
  }

  export type GroupCreateManyInput = {
    id?: number
    title: string
  }

  export type GroupUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type GroupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateInput = {
    title: string
    group: GroupCreateNestedOneWithoutProductsInput
    models?: ModelCreateNestedManyWithoutProductInput
    types?: TypeCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    title: string
    groupId: number
    models?: ModelUncheckedCreateNestedManyWithoutProductInput
    types?: TypeUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    group?: GroupUpdateOneRequiredWithoutProductsNestedInput
    models?: ModelUpdateManyWithoutProductNestedInput
    types?: TypeUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    groupId?: IntFieldUpdateOperationsInput | number
    models?: ModelUncheckedUpdateManyWithoutProductNestedInput
    types?: TypeUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    title: string
    groupId: number
  }

  export type ProductUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    groupId?: IntFieldUpdateOperationsInput | number
  }

  export type ModelCreateInput = {
    title: string
    product: ProductCreateNestedOneWithoutModelsInput
    capacities?: CapacityCreateNestedManyWithoutModelInput
  }

  export type ModelUncheckedCreateInput = {
    id?: number
    title: string
    productId: number
    capacities?: CapacityUncheckedCreateNestedManyWithoutModelInput
  }

  export type ModelUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutModelsNestedInput
    capacities?: CapacityUpdateManyWithoutModelNestedInput
  }

  export type ModelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
    capacities?: CapacityUncheckedUpdateManyWithoutModelNestedInput
  }

  export type ModelCreateManyInput = {
    id?: number
    title: string
    productId: number
  }

  export type ModelUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type ModelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type TypeCreateInput = {
    title: string
    product: ProductCreateNestedOneWithoutTypesInput
  }

  export type TypeUncheckedCreateInput = {
    id?: number
    title: string
    productId: number
  }

  export type TypeUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutTypesNestedInput
  }

  export type TypeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type TypeCreateManyInput = {
    id?: number
    title: string
    productId: number
  }

  export type TypeUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type TypeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type CapacityCreateInput = {
    title: string
    model: ModelCreateNestedOneWithoutCapacitiesInput
    heights?: HeightCreateNestedManyWithoutCapacityInput
  }

  export type CapacityUncheckedCreateInput = {
    id?: number
    title: string
    modelId: number
    heights?: HeightUncheckedCreateNestedManyWithoutCapacityInput
  }

  export type CapacityUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    model?: ModelUpdateOneRequiredWithoutCapacitiesNestedInput
    heights?: HeightUpdateManyWithoutCapacityNestedInput
  }

  export type CapacityUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    modelId?: IntFieldUpdateOperationsInput | number
    heights?: HeightUncheckedUpdateManyWithoutCapacityNestedInput
  }

  export type CapacityCreateManyInput = {
    id?: number
    title: string
    modelId: number
  }

  export type CapacityUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type CapacityUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    modelId?: IntFieldUpdateOperationsInput | number
  }

  export type HeightCreateInput = {
    title: string
    recommended: boolean
    capacity: CapacityCreateNestedOneWithoutHeightsInput
    powers?: PowerCreateNestedManyWithoutHeightInput
  }

  export type HeightUncheckedCreateInput = {
    id?: number
    title: string
    recommended: boolean
    capacityId: number
    powers?: PowerUncheckedCreateNestedManyWithoutHeightInput
  }

  export type HeightUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    recommended?: BoolFieldUpdateOperationsInput | boolean
    capacity?: CapacityUpdateOneRequiredWithoutHeightsNestedInput
    powers?: PowerUpdateManyWithoutHeightNestedInput
  }

  export type HeightUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    recommended?: BoolFieldUpdateOperationsInput | boolean
    capacityId?: IntFieldUpdateOperationsInput | number
    powers?: PowerUncheckedUpdateManyWithoutHeightNestedInput
  }

  export type HeightCreateManyInput = {
    id?: number
    title: string
    recommended: boolean
    capacityId: number
  }

  export type HeightUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    recommended?: BoolFieldUpdateOperationsInput | boolean
  }

  export type HeightUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    recommended?: BoolFieldUpdateOperationsInput | boolean
    capacityId?: IntFieldUpdateOperationsInput | number
  }

  export type PowerCreateInput = {
    title: string
    recommended: boolean
    height: HeightCreateNestedOneWithoutPowersInput
  }

  export type PowerUncheckedCreateInput = {
    id?: number
    title: string
    recommended: boolean
    heightId: number
  }

  export type PowerUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    recommended?: BoolFieldUpdateOperationsInput | boolean
    height?: HeightUpdateOneRequiredWithoutPowersNestedInput
  }

  export type PowerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    recommended?: BoolFieldUpdateOperationsInput | boolean
    heightId?: IntFieldUpdateOperationsInput | number
  }

  export type PowerCreateManyInput = {
    id?: number
    title: string
    recommended: boolean
    heightId: number
  }

  export type PowerUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    recommended?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PowerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    recommended?: BoolFieldUpdateOperationsInput | boolean
    heightId?: IntFieldUpdateOperationsInput | number
  }

  export type InputOutputCreateInput = {
    input: string
    output: string
  }

  export type InputOutputUncheckedCreateInput = {
    id?: number
    input: string
    output: string
  }

  export type InputOutputUpdateInput = {
    input?: StringFieldUpdateOperationsInput | string
    output?: StringFieldUpdateOperationsInput | string
  }

  export type InputOutputUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    input?: StringFieldUpdateOperationsInput | string
    output?: StringFieldUpdateOperationsInput | string
  }

  export type InputOutputCreateManyInput = {
    id?: number
    input: string
    output: string
  }

  export type InputOutputUpdateManyMutationInput = {
    input?: StringFieldUpdateOperationsInput | string
    output?: StringFieldUpdateOperationsInput | string
  }

  export type InputOutputUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    input?: StringFieldUpdateOperationsInput | string
    output?: StringFieldUpdateOperationsInput | string
  }

  export type ProposeCreateInput = {
    title: string
    content: string
    createdAt?: Date | string
    observation?: string | null
    groups: string
    inputOutputs: string
    equipment?: string
    product?: string
    model?: string
    capacity?: string
    height?: string
    power?: string
    input?: string
    output?: string
  }

  export type ProposeUncheckedCreateInput = {
    id?: number
    title: string
    content: string
    createdAt?: Date | string
    observation?: string | null
    groups: string
    inputOutputs: string
    equipment?: string
    product?: string
    model?: string
    capacity?: string
    height?: string
    power?: string
    input?: string
    output?: string
  }

  export type ProposeUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    groups?: StringFieldUpdateOperationsInput | string
    inputOutputs?: StringFieldUpdateOperationsInput | string
    equipment?: StringFieldUpdateOperationsInput | string
    product?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    capacity?: StringFieldUpdateOperationsInput | string
    height?: StringFieldUpdateOperationsInput | string
    power?: StringFieldUpdateOperationsInput | string
    input?: StringFieldUpdateOperationsInput | string
    output?: StringFieldUpdateOperationsInput | string
  }

  export type ProposeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    groups?: StringFieldUpdateOperationsInput | string
    inputOutputs?: StringFieldUpdateOperationsInput | string
    equipment?: StringFieldUpdateOperationsInput | string
    product?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    capacity?: StringFieldUpdateOperationsInput | string
    height?: StringFieldUpdateOperationsInput | string
    power?: StringFieldUpdateOperationsInput | string
    input?: StringFieldUpdateOperationsInput | string
    output?: StringFieldUpdateOperationsInput | string
  }

  export type ProposeCreateManyInput = {
    id?: number
    title: string
    content: string
    createdAt?: Date | string
    observation?: string | null
    groups: string
    inputOutputs: string
    equipment?: string
    product?: string
    model?: string
    capacity?: string
    height?: string
    power?: string
    input?: string
    output?: string
  }

  export type ProposeUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    groups?: StringFieldUpdateOperationsInput | string
    inputOutputs?: StringFieldUpdateOperationsInput | string
    equipment?: StringFieldUpdateOperationsInput | string
    product?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    capacity?: StringFieldUpdateOperationsInput | string
    height?: StringFieldUpdateOperationsInput | string
    power?: StringFieldUpdateOperationsInput | string
    input?: StringFieldUpdateOperationsInput | string
    output?: StringFieldUpdateOperationsInput | string
  }

  export type ProposeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    observation?: NullableStringFieldUpdateOperationsInput | string | null
    groups?: StringFieldUpdateOperationsInput | string
    inputOutputs?: StringFieldUpdateOperationsInput | string
    equipment?: StringFieldUpdateOperationsInput | string
    product?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    capacity?: StringFieldUpdateOperationsInput | string
    height?: StringFieldUpdateOperationsInput | string
    power?: StringFieldUpdateOperationsInput | string
    input?: StringFieldUpdateOperationsInput | string
    output?: StringFieldUpdateOperationsInput | string
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

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    username?: SortOrder
    email?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
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

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
  }

  export type ClientAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    city?: SortOrder
    state?: SortOrder
    zip?: SortOrder
  }

  export type ClientSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type GroupAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GroupMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type GroupMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type GroupSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GroupRelationFilter = {
    is?: GroupWhereInput
    isNot?: GroupWhereInput
  }

  export type ModelListRelationFilter = {
    every?: ModelWhereInput
    some?: ModelWhereInput
    none?: ModelWhereInput
  }

  export type TypeListRelationFilter = {
    every?: TypeWhereInput
    some?: TypeWhereInput
    none?: TypeWhereInput
  }

  export type ModelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TypeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    groupId?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    groupId?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    groupId?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    groupId?: SortOrder
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type CapacityListRelationFilter = {
    every?: CapacityWhereInput
    some?: CapacityWhereInput
    none?: CapacityWhereInput
  }

  export type CapacityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ModelCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    productId?: SortOrder
  }

  export type ModelAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type ModelMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    productId?: SortOrder
  }

  export type ModelMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    productId?: SortOrder
  }

  export type ModelSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type TypeCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    productId?: SortOrder
  }

  export type TypeAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type TypeMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    productId?: SortOrder
  }

  export type TypeMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    productId?: SortOrder
  }

  export type TypeSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type ModelRelationFilter = {
    is?: ModelWhereInput
    isNot?: ModelWhereInput
  }

  export type HeightListRelationFilter = {
    every?: HeightWhereInput
    some?: HeightWhereInput
    none?: HeightWhereInput
  }

  export type HeightOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CapacityCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    modelId?: SortOrder
  }

  export type CapacityAvgOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
  }

  export type CapacityMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    modelId?: SortOrder
  }

  export type CapacityMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    modelId?: SortOrder
  }

  export type CapacitySumOrderByAggregateInput = {
    id?: SortOrder
    modelId?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type CapacityRelationFilter = {
    is?: CapacityWhereInput
    isNot?: CapacityWhereInput
  }

  export type PowerListRelationFilter = {
    every?: PowerWhereInput
    some?: PowerWhereInput
    none?: PowerWhereInput
  }

  export type PowerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HeightCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    recommended?: SortOrder
    capacityId?: SortOrder
  }

  export type HeightAvgOrderByAggregateInput = {
    id?: SortOrder
    capacityId?: SortOrder
  }

  export type HeightMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    recommended?: SortOrder
    capacityId?: SortOrder
  }

  export type HeightMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    recommended?: SortOrder
    capacityId?: SortOrder
  }

  export type HeightSumOrderByAggregateInput = {
    id?: SortOrder
    capacityId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type HeightRelationFilter = {
    is?: HeightWhereInput
    isNot?: HeightWhereInput
  }

  export type PowerCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    recommended?: SortOrder
    heightId?: SortOrder
  }

  export type PowerAvgOrderByAggregateInput = {
    id?: SortOrder
    heightId?: SortOrder
  }

  export type PowerMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    recommended?: SortOrder
    heightId?: SortOrder
  }

  export type PowerMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    recommended?: SortOrder
    heightId?: SortOrder
  }

  export type PowerSumOrderByAggregateInput = {
    id?: SortOrder
    heightId?: SortOrder
  }

  export type InputOutputCountOrderByAggregateInput = {
    id?: SortOrder
    input?: SortOrder
    output?: SortOrder
  }

  export type InputOutputAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type InputOutputMaxOrderByAggregateInput = {
    id?: SortOrder
    input?: SortOrder
    output?: SortOrder
  }

  export type InputOutputMinOrderByAggregateInput = {
    id?: SortOrder
    input?: SortOrder
    output?: SortOrder
  }

  export type InputOutputSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProposeCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    observation?: SortOrder
    groups?: SortOrder
    inputOutputs?: SortOrder
    equipment?: SortOrder
    product?: SortOrder
    model?: SortOrder
    capacity?: SortOrder
    height?: SortOrder
    power?: SortOrder
    input?: SortOrder
    output?: SortOrder
  }

  export type ProposeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProposeMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    observation?: SortOrder
    groups?: SortOrder
    inputOutputs?: SortOrder
    equipment?: SortOrder
    product?: SortOrder
    model?: SortOrder
    capacity?: SortOrder
    height?: SortOrder
    power?: SortOrder
    input?: SortOrder
    output?: SortOrder
  }

  export type ProposeMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    observation?: SortOrder
    groups?: SortOrder
    inputOutputs?: SortOrder
    equipment?: SortOrder
    product?: SortOrder
    model?: SortOrder
    capacity?: SortOrder
    height?: SortOrder
    power?: SortOrder
    input?: SortOrder
    output?: SortOrder
  }

  export type ProposeSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductCreateNestedManyWithoutGroupInput = {
    create?: XOR<ProductCreateWithoutGroupInput, ProductUncheckedCreateWithoutGroupInput> | ProductCreateWithoutGroupInput[] | ProductUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutGroupInput | ProductCreateOrConnectWithoutGroupInput[]
    createMany?: ProductCreateManyGroupInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutGroupInput = {
    create?: XOR<ProductCreateWithoutGroupInput, ProductUncheckedCreateWithoutGroupInput> | ProductCreateWithoutGroupInput[] | ProductUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutGroupInput | ProductCreateOrConnectWithoutGroupInput[]
    createMany?: ProductCreateManyGroupInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutGroupNestedInput = {
    create?: XOR<ProductCreateWithoutGroupInput, ProductUncheckedCreateWithoutGroupInput> | ProductCreateWithoutGroupInput[] | ProductUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutGroupInput | ProductCreateOrConnectWithoutGroupInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutGroupInput | ProductUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: ProductCreateManyGroupInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutGroupInput | ProductUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutGroupInput | ProductUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutGroupNestedInput = {
    create?: XOR<ProductCreateWithoutGroupInput, ProductUncheckedCreateWithoutGroupInput> | ProductCreateWithoutGroupInput[] | ProductUncheckedCreateWithoutGroupInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutGroupInput | ProductCreateOrConnectWithoutGroupInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutGroupInput | ProductUpsertWithWhereUniqueWithoutGroupInput[]
    createMany?: ProductCreateManyGroupInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutGroupInput | ProductUpdateWithWhereUniqueWithoutGroupInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutGroupInput | ProductUpdateManyWithWhereWithoutGroupInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type GroupCreateNestedOneWithoutProductsInput = {
    create?: XOR<GroupCreateWithoutProductsInput, GroupUncheckedCreateWithoutProductsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutProductsInput
    connect?: GroupWhereUniqueInput
  }

  export type ModelCreateNestedManyWithoutProductInput = {
    create?: XOR<ModelCreateWithoutProductInput, ModelUncheckedCreateWithoutProductInput> | ModelCreateWithoutProductInput[] | ModelUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ModelCreateOrConnectWithoutProductInput | ModelCreateOrConnectWithoutProductInput[]
    createMany?: ModelCreateManyProductInputEnvelope
    connect?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
  }

  export type TypeCreateNestedManyWithoutProductInput = {
    create?: XOR<TypeCreateWithoutProductInput, TypeUncheckedCreateWithoutProductInput> | TypeCreateWithoutProductInput[] | TypeUncheckedCreateWithoutProductInput[]
    connectOrCreate?: TypeCreateOrConnectWithoutProductInput | TypeCreateOrConnectWithoutProductInput[]
    createMany?: TypeCreateManyProductInputEnvelope
    connect?: TypeWhereUniqueInput | TypeWhereUniqueInput[]
  }

  export type ModelUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ModelCreateWithoutProductInput, ModelUncheckedCreateWithoutProductInput> | ModelCreateWithoutProductInput[] | ModelUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ModelCreateOrConnectWithoutProductInput | ModelCreateOrConnectWithoutProductInput[]
    createMany?: ModelCreateManyProductInputEnvelope
    connect?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
  }

  export type TypeUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<TypeCreateWithoutProductInput, TypeUncheckedCreateWithoutProductInput> | TypeCreateWithoutProductInput[] | TypeUncheckedCreateWithoutProductInput[]
    connectOrCreate?: TypeCreateOrConnectWithoutProductInput | TypeCreateOrConnectWithoutProductInput[]
    createMany?: TypeCreateManyProductInputEnvelope
    connect?: TypeWhereUniqueInput | TypeWhereUniqueInput[]
  }

  export type GroupUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<GroupCreateWithoutProductsInput, GroupUncheckedCreateWithoutProductsInput>
    connectOrCreate?: GroupCreateOrConnectWithoutProductsInput
    upsert?: GroupUpsertWithoutProductsInput
    connect?: GroupWhereUniqueInput
    update?: XOR<XOR<GroupUpdateToOneWithWhereWithoutProductsInput, GroupUpdateWithoutProductsInput>, GroupUncheckedUpdateWithoutProductsInput>
  }

  export type ModelUpdateManyWithoutProductNestedInput = {
    create?: XOR<ModelCreateWithoutProductInput, ModelUncheckedCreateWithoutProductInput> | ModelCreateWithoutProductInput[] | ModelUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ModelCreateOrConnectWithoutProductInput | ModelCreateOrConnectWithoutProductInput[]
    upsert?: ModelUpsertWithWhereUniqueWithoutProductInput | ModelUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ModelCreateManyProductInputEnvelope
    set?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    disconnect?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    delete?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    connect?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    update?: ModelUpdateWithWhereUniqueWithoutProductInput | ModelUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ModelUpdateManyWithWhereWithoutProductInput | ModelUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ModelScalarWhereInput | ModelScalarWhereInput[]
  }

  export type TypeUpdateManyWithoutProductNestedInput = {
    create?: XOR<TypeCreateWithoutProductInput, TypeUncheckedCreateWithoutProductInput> | TypeCreateWithoutProductInput[] | TypeUncheckedCreateWithoutProductInput[]
    connectOrCreate?: TypeCreateOrConnectWithoutProductInput | TypeCreateOrConnectWithoutProductInput[]
    upsert?: TypeUpsertWithWhereUniqueWithoutProductInput | TypeUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: TypeCreateManyProductInputEnvelope
    set?: TypeWhereUniqueInput | TypeWhereUniqueInput[]
    disconnect?: TypeWhereUniqueInput | TypeWhereUniqueInput[]
    delete?: TypeWhereUniqueInput | TypeWhereUniqueInput[]
    connect?: TypeWhereUniqueInput | TypeWhereUniqueInput[]
    update?: TypeUpdateWithWhereUniqueWithoutProductInput | TypeUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: TypeUpdateManyWithWhereWithoutProductInput | TypeUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: TypeScalarWhereInput | TypeScalarWhereInput[]
  }

  export type ModelUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ModelCreateWithoutProductInput, ModelUncheckedCreateWithoutProductInput> | ModelCreateWithoutProductInput[] | ModelUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ModelCreateOrConnectWithoutProductInput | ModelCreateOrConnectWithoutProductInput[]
    upsert?: ModelUpsertWithWhereUniqueWithoutProductInput | ModelUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ModelCreateManyProductInputEnvelope
    set?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    disconnect?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    delete?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    connect?: ModelWhereUniqueInput | ModelWhereUniqueInput[]
    update?: ModelUpdateWithWhereUniqueWithoutProductInput | ModelUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ModelUpdateManyWithWhereWithoutProductInput | ModelUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ModelScalarWhereInput | ModelScalarWhereInput[]
  }

  export type TypeUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<TypeCreateWithoutProductInput, TypeUncheckedCreateWithoutProductInput> | TypeCreateWithoutProductInput[] | TypeUncheckedCreateWithoutProductInput[]
    connectOrCreate?: TypeCreateOrConnectWithoutProductInput | TypeCreateOrConnectWithoutProductInput[]
    upsert?: TypeUpsertWithWhereUniqueWithoutProductInput | TypeUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: TypeCreateManyProductInputEnvelope
    set?: TypeWhereUniqueInput | TypeWhereUniqueInput[]
    disconnect?: TypeWhereUniqueInput | TypeWhereUniqueInput[]
    delete?: TypeWhereUniqueInput | TypeWhereUniqueInput[]
    connect?: TypeWhereUniqueInput | TypeWhereUniqueInput[]
    update?: TypeUpdateWithWhereUniqueWithoutProductInput | TypeUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: TypeUpdateManyWithWhereWithoutProductInput | TypeUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: TypeScalarWhereInput | TypeScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutModelsInput = {
    create?: XOR<ProductCreateWithoutModelsInput, ProductUncheckedCreateWithoutModelsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutModelsInput
    connect?: ProductWhereUniqueInput
  }

  export type CapacityCreateNestedManyWithoutModelInput = {
    create?: XOR<CapacityCreateWithoutModelInput, CapacityUncheckedCreateWithoutModelInput> | CapacityCreateWithoutModelInput[] | CapacityUncheckedCreateWithoutModelInput[]
    connectOrCreate?: CapacityCreateOrConnectWithoutModelInput | CapacityCreateOrConnectWithoutModelInput[]
    createMany?: CapacityCreateManyModelInputEnvelope
    connect?: CapacityWhereUniqueInput | CapacityWhereUniqueInput[]
  }

  export type CapacityUncheckedCreateNestedManyWithoutModelInput = {
    create?: XOR<CapacityCreateWithoutModelInput, CapacityUncheckedCreateWithoutModelInput> | CapacityCreateWithoutModelInput[] | CapacityUncheckedCreateWithoutModelInput[]
    connectOrCreate?: CapacityCreateOrConnectWithoutModelInput | CapacityCreateOrConnectWithoutModelInput[]
    createMany?: CapacityCreateManyModelInputEnvelope
    connect?: CapacityWhereUniqueInput | CapacityWhereUniqueInput[]
  }

  export type ProductUpdateOneRequiredWithoutModelsNestedInput = {
    create?: XOR<ProductCreateWithoutModelsInput, ProductUncheckedCreateWithoutModelsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutModelsInput
    upsert?: ProductUpsertWithoutModelsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutModelsInput, ProductUpdateWithoutModelsInput>, ProductUncheckedUpdateWithoutModelsInput>
  }

  export type CapacityUpdateManyWithoutModelNestedInput = {
    create?: XOR<CapacityCreateWithoutModelInput, CapacityUncheckedCreateWithoutModelInput> | CapacityCreateWithoutModelInput[] | CapacityUncheckedCreateWithoutModelInput[]
    connectOrCreate?: CapacityCreateOrConnectWithoutModelInput | CapacityCreateOrConnectWithoutModelInput[]
    upsert?: CapacityUpsertWithWhereUniqueWithoutModelInput | CapacityUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: CapacityCreateManyModelInputEnvelope
    set?: CapacityWhereUniqueInput | CapacityWhereUniqueInput[]
    disconnect?: CapacityWhereUniqueInput | CapacityWhereUniqueInput[]
    delete?: CapacityWhereUniqueInput | CapacityWhereUniqueInput[]
    connect?: CapacityWhereUniqueInput | CapacityWhereUniqueInput[]
    update?: CapacityUpdateWithWhereUniqueWithoutModelInput | CapacityUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: CapacityUpdateManyWithWhereWithoutModelInput | CapacityUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: CapacityScalarWhereInput | CapacityScalarWhereInput[]
  }

  export type CapacityUncheckedUpdateManyWithoutModelNestedInput = {
    create?: XOR<CapacityCreateWithoutModelInput, CapacityUncheckedCreateWithoutModelInput> | CapacityCreateWithoutModelInput[] | CapacityUncheckedCreateWithoutModelInput[]
    connectOrCreate?: CapacityCreateOrConnectWithoutModelInput | CapacityCreateOrConnectWithoutModelInput[]
    upsert?: CapacityUpsertWithWhereUniqueWithoutModelInput | CapacityUpsertWithWhereUniqueWithoutModelInput[]
    createMany?: CapacityCreateManyModelInputEnvelope
    set?: CapacityWhereUniqueInput | CapacityWhereUniqueInput[]
    disconnect?: CapacityWhereUniqueInput | CapacityWhereUniqueInput[]
    delete?: CapacityWhereUniqueInput | CapacityWhereUniqueInput[]
    connect?: CapacityWhereUniqueInput | CapacityWhereUniqueInput[]
    update?: CapacityUpdateWithWhereUniqueWithoutModelInput | CapacityUpdateWithWhereUniqueWithoutModelInput[]
    updateMany?: CapacityUpdateManyWithWhereWithoutModelInput | CapacityUpdateManyWithWhereWithoutModelInput[]
    deleteMany?: CapacityScalarWhereInput | CapacityScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutTypesInput = {
    create?: XOR<ProductCreateWithoutTypesInput, ProductUncheckedCreateWithoutTypesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutTypesInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutTypesNestedInput = {
    create?: XOR<ProductCreateWithoutTypesInput, ProductUncheckedCreateWithoutTypesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutTypesInput
    upsert?: ProductUpsertWithoutTypesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutTypesInput, ProductUpdateWithoutTypesInput>, ProductUncheckedUpdateWithoutTypesInput>
  }

  export type ModelCreateNestedOneWithoutCapacitiesInput = {
    create?: XOR<ModelCreateWithoutCapacitiesInput, ModelUncheckedCreateWithoutCapacitiesInput>
    connectOrCreate?: ModelCreateOrConnectWithoutCapacitiesInput
    connect?: ModelWhereUniqueInput
  }

  export type HeightCreateNestedManyWithoutCapacityInput = {
    create?: XOR<HeightCreateWithoutCapacityInput, HeightUncheckedCreateWithoutCapacityInput> | HeightCreateWithoutCapacityInput[] | HeightUncheckedCreateWithoutCapacityInput[]
    connectOrCreate?: HeightCreateOrConnectWithoutCapacityInput | HeightCreateOrConnectWithoutCapacityInput[]
    createMany?: HeightCreateManyCapacityInputEnvelope
    connect?: HeightWhereUniqueInput | HeightWhereUniqueInput[]
  }

  export type HeightUncheckedCreateNestedManyWithoutCapacityInput = {
    create?: XOR<HeightCreateWithoutCapacityInput, HeightUncheckedCreateWithoutCapacityInput> | HeightCreateWithoutCapacityInput[] | HeightUncheckedCreateWithoutCapacityInput[]
    connectOrCreate?: HeightCreateOrConnectWithoutCapacityInput | HeightCreateOrConnectWithoutCapacityInput[]
    createMany?: HeightCreateManyCapacityInputEnvelope
    connect?: HeightWhereUniqueInput | HeightWhereUniqueInput[]
  }

  export type ModelUpdateOneRequiredWithoutCapacitiesNestedInput = {
    create?: XOR<ModelCreateWithoutCapacitiesInput, ModelUncheckedCreateWithoutCapacitiesInput>
    connectOrCreate?: ModelCreateOrConnectWithoutCapacitiesInput
    upsert?: ModelUpsertWithoutCapacitiesInput
    connect?: ModelWhereUniqueInput
    update?: XOR<XOR<ModelUpdateToOneWithWhereWithoutCapacitiesInput, ModelUpdateWithoutCapacitiesInput>, ModelUncheckedUpdateWithoutCapacitiesInput>
  }

  export type HeightUpdateManyWithoutCapacityNestedInput = {
    create?: XOR<HeightCreateWithoutCapacityInput, HeightUncheckedCreateWithoutCapacityInput> | HeightCreateWithoutCapacityInput[] | HeightUncheckedCreateWithoutCapacityInput[]
    connectOrCreate?: HeightCreateOrConnectWithoutCapacityInput | HeightCreateOrConnectWithoutCapacityInput[]
    upsert?: HeightUpsertWithWhereUniqueWithoutCapacityInput | HeightUpsertWithWhereUniqueWithoutCapacityInput[]
    createMany?: HeightCreateManyCapacityInputEnvelope
    set?: HeightWhereUniqueInput | HeightWhereUniqueInput[]
    disconnect?: HeightWhereUniqueInput | HeightWhereUniqueInput[]
    delete?: HeightWhereUniqueInput | HeightWhereUniqueInput[]
    connect?: HeightWhereUniqueInput | HeightWhereUniqueInput[]
    update?: HeightUpdateWithWhereUniqueWithoutCapacityInput | HeightUpdateWithWhereUniqueWithoutCapacityInput[]
    updateMany?: HeightUpdateManyWithWhereWithoutCapacityInput | HeightUpdateManyWithWhereWithoutCapacityInput[]
    deleteMany?: HeightScalarWhereInput | HeightScalarWhereInput[]
  }

  export type HeightUncheckedUpdateManyWithoutCapacityNestedInput = {
    create?: XOR<HeightCreateWithoutCapacityInput, HeightUncheckedCreateWithoutCapacityInput> | HeightCreateWithoutCapacityInput[] | HeightUncheckedCreateWithoutCapacityInput[]
    connectOrCreate?: HeightCreateOrConnectWithoutCapacityInput | HeightCreateOrConnectWithoutCapacityInput[]
    upsert?: HeightUpsertWithWhereUniqueWithoutCapacityInput | HeightUpsertWithWhereUniqueWithoutCapacityInput[]
    createMany?: HeightCreateManyCapacityInputEnvelope
    set?: HeightWhereUniqueInput | HeightWhereUniqueInput[]
    disconnect?: HeightWhereUniqueInput | HeightWhereUniqueInput[]
    delete?: HeightWhereUniqueInput | HeightWhereUniqueInput[]
    connect?: HeightWhereUniqueInput | HeightWhereUniqueInput[]
    update?: HeightUpdateWithWhereUniqueWithoutCapacityInput | HeightUpdateWithWhereUniqueWithoutCapacityInput[]
    updateMany?: HeightUpdateManyWithWhereWithoutCapacityInput | HeightUpdateManyWithWhereWithoutCapacityInput[]
    deleteMany?: HeightScalarWhereInput | HeightScalarWhereInput[]
  }

  export type CapacityCreateNestedOneWithoutHeightsInput = {
    create?: XOR<CapacityCreateWithoutHeightsInput, CapacityUncheckedCreateWithoutHeightsInput>
    connectOrCreate?: CapacityCreateOrConnectWithoutHeightsInput
    connect?: CapacityWhereUniqueInput
  }

  export type PowerCreateNestedManyWithoutHeightInput = {
    create?: XOR<PowerCreateWithoutHeightInput, PowerUncheckedCreateWithoutHeightInput> | PowerCreateWithoutHeightInput[] | PowerUncheckedCreateWithoutHeightInput[]
    connectOrCreate?: PowerCreateOrConnectWithoutHeightInput | PowerCreateOrConnectWithoutHeightInput[]
    createMany?: PowerCreateManyHeightInputEnvelope
    connect?: PowerWhereUniqueInput | PowerWhereUniqueInput[]
  }

  export type PowerUncheckedCreateNestedManyWithoutHeightInput = {
    create?: XOR<PowerCreateWithoutHeightInput, PowerUncheckedCreateWithoutHeightInput> | PowerCreateWithoutHeightInput[] | PowerUncheckedCreateWithoutHeightInput[]
    connectOrCreate?: PowerCreateOrConnectWithoutHeightInput | PowerCreateOrConnectWithoutHeightInput[]
    createMany?: PowerCreateManyHeightInputEnvelope
    connect?: PowerWhereUniqueInput | PowerWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type CapacityUpdateOneRequiredWithoutHeightsNestedInput = {
    create?: XOR<CapacityCreateWithoutHeightsInput, CapacityUncheckedCreateWithoutHeightsInput>
    connectOrCreate?: CapacityCreateOrConnectWithoutHeightsInput
    upsert?: CapacityUpsertWithoutHeightsInput
    connect?: CapacityWhereUniqueInput
    update?: XOR<XOR<CapacityUpdateToOneWithWhereWithoutHeightsInput, CapacityUpdateWithoutHeightsInput>, CapacityUncheckedUpdateWithoutHeightsInput>
  }

  export type PowerUpdateManyWithoutHeightNestedInput = {
    create?: XOR<PowerCreateWithoutHeightInput, PowerUncheckedCreateWithoutHeightInput> | PowerCreateWithoutHeightInput[] | PowerUncheckedCreateWithoutHeightInput[]
    connectOrCreate?: PowerCreateOrConnectWithoutHeightInput | PowerCreateOrConnectWithoutHeightInput[]
    upsert?: PowerUpsertWithWhereUniqueWithoutHeightInput | PowerUpsertWithWhereUniqueWithoutHeightInput[]
    createMany?: PowerCreateManyHeightInputEnvelope
    set?: PowerWhereUniqueInput | PowerWhereUniqueInput[]
    disconnect?: PowerWhereUniqueInput | PowerWhereUniqueInput[]
    delete?: PowerWhereUniqueInput | PowerWhereUniqueInput[]
    connect?: PowerWhereUniqueInput | PowerWhereUniqueInput[]
    update?: PowerUpdateWithWhereUniqueWithoutHeightInput | PowerUpdateWithWhereUniqueWithoutHeightInput[]
    updateMany?: PowerUpdateManyWithWhereWithoutHeightInput | PowerUpdateManyWithWhereWithoutHeightInput[]
    deleteMany?: PowerScalarWhereInput | PowerScalarWhereInput[]
  }

  export type PowerUncheckedUpdateManyWithoutHeightNestedInput = {
    create?: XOR<PowerCreateWithoutHeightInput, PowerUncheckedCreateWithoutHeightInput> | PowerCreateWithoutHeightInput[] | PowerUncheckedCreateWithoutHeightInput[]
    connectOrCreate?: PowerCreateOrConnectWithoutHeightInput | PowerCreateOrConnectWithoutHeightInput[]
    upsert?: PowerUpsertWithWhereUniqueWithoutHeightInput | PowerUpsertWithWhereUniqueWithoutHeightInput[]
    createMany?: PowerCreateManyHeightInputEnvelope
    set?: PowerWhereUniqueInput | PowerWhereUniqueInput[]
    disconnect?: PowerWhereUniqueInput | PowerWhereUniqueInput[]
    delete?: PowerWhereUniqueInput | PowerWhereUniqueInput[]
    connect?: PowerWhereUniqueInput | PowerWhereUniqueInput[]
    update?: PowerUpdateWithWhereUniqueWithoutHeightInput | PowerUpdateWithWhereUniqueWithoutHeightInput[]
    updateMany?: PowerUpdateManyWithWhereWithoutHeightInput | PowerUpdateManyWithWhereWithoutHeightInput[]
    deleteMany?: PowerScalarWhereInput | PowerScalarWhereInput[]
  }

  export type HeightCreateNestedOneWithoutPowersInput = {
    create?: XOR<HeightCreateWithoutPowersInput, HeightUncheckedCreateWithoutPowersInput>
    connectOrCreate?: HeightCreateOrConnectWithoutPowersInput
    connect?: HeightWhereUniqueInput
  }

  export type HeightUpdateOneRequiredWithoutPowersNestedInput = {
    create?: XOR<HeightCreateWithoutPowersInput, HeightUncheckedCreateWithoutPowersInput>
    connectOrCreate?: HeightCreateOrConnectWithoutPowersInput
    upsert?: HeightUpsertWithoutPowersInput
    connect?: HeightWhereUniqueInput
    update?: XOR<XOR<HeightUpdateToOneWithWhereWithoutPowersInput, HeightUpdateWithoutPowersInput>, HeightUncheckedUpdateWithoutPowersInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type ProductCreateWithoutGroupInput = {
    title: string
    models?: ModelCreateNestedManyWithoutProductInput
    types?: TypeCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutGroupInput = {
    id?: number
    title: string
    models?: ModelUncheckedCreateNestedManyWithoutProductInput
    types?: TypeUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutGroupInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutGroupInput, ProductUncheckedCreateWithoutGroupInput>
  }

  export type ProductCreateManyGroupInputEnvelope = {
    data: ProductCreateManyGroupInput | ProductCreateManyGroupInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutGroupInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutGroupInput, ProductUncheckedUpdateWithoutGroupInput>
    create: XOR<ProductCreateWithoutGroupInput, ProductUncheckedCreateWithoutGroupInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutGroupInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutGroupInput, ProductUncheckedUpdateWithoutGroupInput>
  }

  export type ProductUpdateManyWithWhereWithoutGroupInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutGroupInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: IntFilter<"Product"> | number
    title?: StringFilter<"Product"> | string
    groupId?: IntFilter<"Product"> | number
  }

  export type GroupCreateWithoutProductsInput = {
    title: string
  }

  export type GroupUncheckedCreateWithoutProductsInput = {
    id?: number
    title: string
  }

  export type GroupCreateOrConnectWithoutProductsInput = {
    where: GroupWhereUniqueInput
    create: XOR<GroupCreateWithoutProductsInput, GroupUncheckedCreateWithoutProductsInput>
  }

  export type ModelCreateWithoutProductInput = {
    title: string
    capacities?: CapacityCreateNestedManyWithoutModelInput
  }

  export type ModelUncheckedCreateWithoutProductInput = {
    id?: number
    title: string
    capacities?: CapacityUncheckedCreateNestedManyWithoutModelInput
  }

  export type ModelCreateOrConnectWithoutProductInput = {
    where: ModelWhereUniqueInput
    create: XOR<ModelCreateWithoutProductInput, ModelUncheckedCreateWithoutProductInput>
  }

  export type ModelCreateManyProductInputEnvelope = {
    data: ModelCreateManyProductInput | ModelCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type TypeCreateWithoutProductInput = {
    title: string
  }

  export type TypeUncheckedCreateWithoutProductInput = {
    id?: number
    title: string
  }

  export type TypeCreateOrConnectWithoutProductInput = {
    where: TypeWhereUniqueInput
    create: XOR<TypeCreateWithoutProductInput, TypeUncheckedCreateWithoutProductInput>
  }

  export type TypeCreateManyProductInputEnvelope = {
    data: TypeCreateManyProductInput | TypeCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type GroupUpsertWithoutProductsInput = {
    update: XOR<GroupUpdateWithoutProductsInput, GroupUncheckedUpdateWithoutProductsInput>
    create: XOR<GroupCreateWithoutProductsInput, GroupUncheckedCreateWithoutProductsInput>
    where?: GroupWhereInput
  }

  export type GroupUpdateToOneWithWhereWithoutProductsInput = {
    where?: GroupWhereInput
    data: XOR<GroupUpdateWithoutProductsInput, GroupUncheckedUpdateWithoutProductsInput>
  }

  export type GroupUpdateWithoutProductsInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type GroupUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type ModelUpsertWithWhereUniqueWithoutProductInput = {
    where: ModelWhereUniqueInput
    update: XOR<ModelUpdateWithoutProductInput, ModelUncheckedUpdateWithoutProductInput>
    create: XOR<ModelCreateWithoutProductInput, ModelUncheckedCreateWithoutProductInput>
  }

  export type ModelUpdateWithWhereUniqueWithoutProductInput = {
    where: ModelWhereUniqueInput
    data: XOR<ModelUpdateWithoutProductInput, ModelUncheckedUpdateWithoutProductInput>
  }

  export type ModelUpdateManyWithWhereWithoutProductInput = {
    where: ModelScalarWhereInput
    data: XOR<ModelUpdateManyMutationInput, ModelUncheckedUpdateManyWithoutProductInput>
  }

  export type ModelScalarWhereInput = {
    AND?: ModelScalarWhereInput | ModelScalarWhereInput[]
    OR?: ModelScalarWhereInput[]
    NOT?: ModelScalarWhereInput | ModelScalarWhereInput[]
    id?: IntFilter<"Model"> | number
    title?: StringFilter<"Model"> | string
    productId?: IntFilter<"Model"> | number
  }

  export type TypeUpsertWithWhereUniqueWithoutProductInput = {
    where: TypeWhereUniqueInput
    update: XOR<TypeUpdateWithoutProductInput, TypeUncheckedUpdateWithoutProductInput>
    create: XOR<TypeCreateWithoutProductInput, TypeUncheckedCreateWithoutProductInput>
  }

  export type TypeUpdateWithWhereUniqueWithoutProductInput = {
    where: TypeWhereUniqueInput
    data: XOR<TypeUpdateWithoutProductInput, TypeUncheckedUpdateWithoutProductInput>
  }

  export type TypeUpdateManyWithWhereWithoutProductInput = {
    where: TypeScalarWhereInput
    data: XOR<TypeUpdateManyMutationInput, TypeUncheckedUpdateManyWithoutProductInput>
  }

  export type TypeScalarWhereInput = {
    AND?: TypeScalarWhereInput | TypeScalarWhereInput[]
    OR?: TypeScalarWhereInput[]
    NOT?: TypeScalarWhereInput | TypeScalarWhereInput[]
    id?: IntFilter<"Type"> | number
    title?: StringFilter<"Type"> | string
    productId?: IntFilter<"Type"> | number
  }

  export type ProductCreateWithoutModelsInput = {
    title: string
    group: GroupCreateNestedOneWithoutProductsInput
    types?: TypeCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutModelsInput = {
    id?: number
    title: string
    groupId: number
    types?: TypeUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutModelsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutModelsInput, ProductUncheckedCreateWithoutModelsInput>
  }

  export type CapacityCreateWithoutModelInput = {
    title: string
    heights?: HeightCreateNestedManyWithoutCapacityInput
  }

  export type CapacityUncheckedCreateWithoutModelInput = {
    id?: number
    title: string
    heights?: HeightUncheckedCreateNestedManyWithoutCapacityInput
  }

  export type CapacityCreateOrConnectWithoutModelInput = {
    where: CapacityWhereUniqueInput
    create: XOR<CapacityCreateWithoutModelInput, CapacityUncheckedCreateWithoutModelInput>
  }

  export type CapacityCreateManyModelInputEnvelope = {
    data: CapacityCreateManyModelInput | CapacityCreateManyModelInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithoutModelsInput = {
    update: XOR<ProductUpdateWithoutModelsInput, ProductUncheckedUpdateWithoutModelsInput>
    create: XOR<ProductCreateWithoutModelsInput, ProductUncheckedCreateWithoutModelsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutModelsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutModelsInput, ProductUncheckedUpdateWithoutModelsInput>
  }

  export type ProductUpdateWithoutModelsInput = {
    title?: StringFieldUpdateOperationsInput | string
    group?: GroupUpdateOneRequiredWithoutProductsNestedInput
    types?: TypeUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutModelsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    groupId?: IntFieldUpdateOperationsInput | number
    types?: TypeUncheckedUpdateManyWithoutProductNestedInput
  }

  export type CapacityUpsertWithWhereUniqueWithoutModelInput = {
    where: CapacityWhereUniqueInput
    update: XOR<CapacityUpdateWithoutModelInput, CapacityUncheckedUpdateWithoutModelInput>
    create: XOR<CapacityCreateWithoutModelInput, CapacityUncheckedCreateWithoutModelInput>
  }

  export type CapacityUpdateWithWhereUniqueWithoutModelInput = {
    where: CapacityWhereUniqueInput
    data: XOR<CapacityUpdateWithoutModelInput, CapacityUncheckedUpdateWithoutModelInput>
  }

  export type CapacityUpdateManyWithWhereWithoutModelInput = {
    where: CapacityScalarWhereInput
    data: XOR<CapacityUpdateManyMutationInput, CapacityUncheckedUpdateManyWithoutModelInput>
  }

  export type CapacityScalarWhereInput = {
    AND?: CapacityScalarWhereInput | CapacityScalarWhereInput[]
    OR?: CapacityScalarWhereInput[]
    NOT?: CapacityScalarWhereInput | CapacityScalarWhereInput[]
    id?: IntFilter<"Capacity"> | number
    title?: StringFilter<"Capacity"> | string
    modelId?: IntFilter<"Capacity"> | number
  }

  export type ProductCreateWithoutTypesInput = {
    title: string
    group: GroupCreateNestedOneWithoutProductsInput
    models?: ModelCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutTypesInput = {
    id?: number
    title: string
    groupId: number
    models?: ModelUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutTypesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutTypesInput, ProductUncheckedCreateWithoutTypesInput>
  }

  export type ProductUpsertWithoutTypesInput = {
    update: XOR<ProductUpdateWithoutTypesInput, ProductUncheckedUpdateWithoutTypesInput>
    create: XOR<ProductCreateWithoutTypesInput, ProductUncheckedCreateWithoutTypesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutTypesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutTypesInput, ProductUncheckedUpdateWithoutTypesInput>
  }

  export type ProductUpdateWithoutTypesInput = {
    title?: StringFieldUpdateOperationsInput | string
    group?: GroupUpdateOneRequiredWithoutProductsNestedInput
    models?: ModelUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutTypesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    groupId?: IntFieldUpdateOperationsInput | number
    models?: ModelUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ModelCreateWithoutCapacitiesInput = {
    title: string
    product: ProductCreateNestedOneWithoutModelsInput
  }

  export type ModelUncheckedCreateWithoutCapacitiesInput = {
    id?: number
    title: string
    productId: number
  }

  export type ModelCreateOrConnectWithoutCapacitiesInput = {
    where: ModelWhereUniqueInput
    create: XOR<ModelCreateWithoutCapacitiesInput, ModelUncheckedCreateWithoutCapacitiesInput>
  }

  export type HeightCreateWithoutCapacityInput = {
    title: string
    recommended: boolean
    powers?: PowerCreateNestedManyWithoutHeightInput
  }

  export type HeightUncheckedCreateWithoutCapacityInput = {
    id?: number
    title: string
    recommended: boolean
    powers?: PowerUncheckedCreateNestedManyWithoutHeightInput
  }

  export type HeightCreateOrConnectWithoutCapacityInput = {
    where: HeightWhereUniqueInput
    create: XOR<HeightCreateWithoutCapacityInput, HeightUncheckedCreateWithoutCapacityInput>
  }

  export type HeightCreateManyCapacityInputEnvelope = {
    data: HeightCreateManyCapacityInput | HeightCreateManyCapacityInput[]
    skipDuplicates?: boolean
  }

  export type ModelUpsertWithoutCapacitiesInput = {
    update: XOR<ModelUpdateWithoutCapacitiesInput, ModelUncheckedUpdateWithoutCapacitiesInput>
    create: XOR<ModelCreateWithoutCapacitiesInput, ModelUncheckedCreateWithoutCapacitiesInput>
    where?: ModelWhereInput
  }

  export type ModelUpdateToOneWithWhereWithoutCapacitiesInput = {
    where?: ModelWhereInput
    data: XOR<ModelUpdateWithoutCapacitiesInput, ModelUncheckedUpdateWithoutCapacitiesInput>
  }

  export type ModelUpdateWithoutCapacitiesInput = {
    title?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutModelsNestedInput
  }

  export type ModelUncheckedUpdateWithoutCapacitiesInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type HeightUpsertWithWhereUniqueWithoutCapacityInput = {
    where: HeightWhereUniqueInput
    update: XOR<HeightUpdateWithoutCapacityInput, HeightUncheckedUpdateWithoutCapacityInput>
    create: XOR<HeightCreateWithoutCapacityInput, HeightUncheckedCreateWithoutCapacityInput>
  }

  export type HeightUpdateWithWhereUniqueWithoutCapacityInput = {
    where: HeightWhereUniqueInput
    data: XOR<HeightUpdateWithoutCapacityInput, HeightUncheckedUpdateWithoutCapacityInput>
  }

  export type HeightUpdateManyWithWhereWithoutCapacityInput = {
    where: HeightScalarWhereInput
    data: XOR<HeightUpdateManyMutationInput, HeightUncheckedUpdateManyWithoutCapacityInput>
  }

  export type HeightScalarWhereInput = {
    AND?: HeightScalarWhereInput | HeightScalarWhereInput[]
    OR?: HeightScalarWhereInput[]
    NOT?: HeightScalarWhereInput | HeightScalarWhereInput[]
    id?: IntFilter<"Height"> | number
    title?: StringFilter<"Height"> | string
    recommended?: BoolFilter<"Height"> | boolean
    capacityId?: IntFilter<"Height"> | number
  }

  export type CapacityCreateWithoutHeightsInput = {
    title: string
    model: ModelCreateNestedOneWithoutCapacitiesInput
  }

  export type CapacityUncheckedCreateWithoutHeightsInput = {
    id?: number
    title: string
    modelId: number
  }

  export type CapacityCreateOrConnectWithoutHeightsInput = {
    where: CapacityWhereUniqueInput
    create: XOR<CapacityCreateWithoutHeightsInput, CapacityUncheckedCreateWithoutHeightsInput>
  }

  export type PowerCreateWithoutHeightInput = {
    title: string
    recommended: boolean
  }

  export type PowerUncheckedCreateWithoutHeightInput = {
    id?: number
    title: string
    recommended: boolean
  }

  export type PowerCreateOrConnectWithoutHeightInput = {
    where: PowerWhereUniqueInput
    create: XOR<PowerCreateWithoutHeightInput, PowerUncheckedCreateWithoutHeightInput>
  }

  export type PowerCreateManyHeightInputEnvelope = {
    data: PowerCreateManyHeightInput | PowerCreateManyHeightInput[]
    skipDuplicates?: boolean
  }

  export type CapacityUpsertWithoutHeightsInput = {
    update: XOR<CapacityUpdateWithoutHeightsInput, CapacityUncheckedUpdateWithoutHeightsInput>
    create: XOR<CapacityCreateWithoutHeightsInput, CapacityUncheckedCreateWithoutHeightsInput>
    where?: CapacityWhereInput
  }

  export type CapacityUpdateToOneWithWhereWithoutHeightsInput = {
    where?: CapacityWhereInput
    data: XOR<CapacityUpdateWithoutHeightsInput, CapacityUncheckedUpdateWithoutHeightsInput>
  }

  export type CapacityUpdateWithoutHeightsInput = {
    title?: StringFieldUpdateOperationsInput | string
    model?: ModelUpdateOneRequiredWithoutCapacitiesNestedInput
  }

  export type CapacityUncheckedUpdateWithoutHeightsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    modelId?: IntFieldUpdateOperationsInput | number
  }

  export type PowerUpsertWithWhereUniqueWithoutHeightInput = {
    where: PowerWhereUniqueInput
    update: XOR<PowerUpdateWithoutHeightInput, PowerUncheckedUpdateWithoutHeightInput>
    create: XOR<PowerCreateWithoutHeightInput, PowerUncheckedCreateWithoutHeightInput>
  }

  export type PowerUpdateWithWhereUniqueWithoutHeightInput = {
    where: PowerWhereUniqueInput
    data: XOR<PowerUpdateWithoutHeightInput, PowerUncheckedUpdateWithoutHeightInput>
  }

  export type PowerUpdateManyWithWhereWithoutHeightInput = {
    where: PowerScalarWhereInput
    data: XOR<PowerUpdateManyMutationInput, PowerUncheckedUpdateManyWithoutHeightInput>
  }

  export type PowerScalarWhereInput = {
    AND?: PowerScalarWhereInput | PowerScalarWhereInput[]
    OR?: PowerScalarWhereInput[]
    NOT?: PowerScalarWhereInput | PowerScalarWhereInput[]
    id?: IntFilter<"Power"> | number
    title?: StringFilter<"Power"> | string
    recommended?: BoolFilter<"Power"> | boolean
    heightId?: IntFilter<"Power"> | number
  }

  export type HeightCreateWithoutPowersInput = {
    title: string
    recommended: boolean
    capacity: CapacityCreateNestedOneWithoutHeightsInput
  }

  export type HeightUncheckedCreateWithoutPowersInput = {
    id?: number
    title: string
    recommended: boolean
    capacityId: number
  }

  export type HeightCreateOrConnectWithoutPowersInput = {
    where: HeightWhereUniqueInput
    create: XOR<HeightCreateWithoutPowersInput, HeightUncheckedCreateWithoutPowersInput>
  }

  export type HeightUpsertWithoutPowersInput = {
    update: XOR<HeightUpdateWithoutPowersInput, HeightUncheckedUpdateWithoutPowersInput>
    create: XOR<HeightCreateWithoutPowersInput, HeightUncheckedCreateWithoutPowersInput>
    where?: HeightWhereInput
  }

  export type HeightUpdateToOneWithWhereWithoutPowersInput = {
    where?: HeightWhereInput
    data: XOR<HeightUpdateWithoutPowersInput, HeightUncheckedUpdateWithoutPowersInput>
  }

  export type HeightUpdateWithoutPowersInput = {
    title?: StringFieldUpdateOperationsInput | string
    recommended?: BoolFieldUpdateOperationsInput | boolean
    capacity?: CapacityUpdateOneRequiredWithoutHeightsNestedInput
  }

  export type HeightUncheckedUpdateWithoutPowersInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    recommended?: BoolFieldUpdateOperationsInput | boolean
    capacityId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductCreateManyGroupInput = {
    id?: number
    title: string
  }

  export type ProductUpdateWithoutGroupInput = {
    title?: StringFieldUpdateOperationsInput | string
    models?: ModelUpdateManyWithoutProductNestedInput
    types?: TypeUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    models?: ModelUncheckedUpdateManyWithoutProductNestedInput
    types?: TypeUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type ModelCreateManyProductInput = {
    id?: number
    title: string
  }

  export type TypeCreateManyProductInput = {
    id?: number
    title: string
  }

  export type ModelUpdateWithoutProductInput = {
    title?: StringFieldUpdateOperationsInput | string
    capacities?: CapacityUpdateManyWithoutModelNestedInput
  }

  export type ModelUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    capacities?: CapacityUncheckedUpdateManyWithoutModelNestedInput
  }

  export type ModelUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type TypeUpdateWithoutProductInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type TypeUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type TypeUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type CapacityCreateManyModelInput = {
    id?: number
    title: string
  }

  export type CapacityUpdateWithoutModelInput = {
    title?: StringFieldUpdateOperationsInput | string
    heights?: HeightUpdateManyWithoutCapacityNestedInput
  }

  export type CapacityUncheckedUpdateWithoutModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    heights?: HeightUncheckedUpdateManyWithoutCapacityNestedInput
  }

  export type CapacityUncheckedUpdateManyWithoutModelInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type HeightCreateManyCapacityInput = {
    id?: number
    title: string
    recommended: boolean
  }

  export type HeightUpdateWithoutCapacityInput = {
    title?: StringFieldUpdateOperationsInput | string
    recommended?: BoolFieldUpdateOperationsInput | boolean
    powers?: PowerUpdateManyWithoutHeightNestedInput
  }

  export type HeightUncheckedUpdateWithoutCapacityInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    recommended?: BoolFieldUpdateOperationsInput | boolean
    powers?: PowerUncheckedUpdateManyWithoutHeightNestedInput
  }

  export type HeightUncheckedUpdateManyWithoutCapacityInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    recommended?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PowerCreateManyHeightInput = {
    id?: number
    title: string
    recommended: boolean
  }

  export type PowerUpdateWithoutHeightInput = {
    title?: StringFieldUpdateOperationsInput | string
    recommended?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PowerUncheckedUpdateWithoutHeightInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    recommended?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PowerUncheckedUpdateManyWithoutHeightInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    recommended?: BoolFieldUpdateOperationsInput | boolean
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use GroupCountOutputTypeDefaultArgs instead
     */
    export type GroupCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GroupCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductCountOutputTypeDefaultArgs instead
     */
    export type ProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ModelCountOutputTypeDefaultArgs instead
     */
    export type ModelCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ModelCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CapacityCountOutputTypeDefaultArgs instead
     */
    export type CapacityCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CapacityCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HeightCountOutputTypeDefaultArgs instead
     */
    export type HeightCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HeightCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClientDefaultArgs instead
     */
    export type ClientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClientDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GroupDefaultArgs instead
     */
    export type GroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GroupDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ModelDefaultArgs instead
     */
    export type ModelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ModelDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TypeDefaultArgs instead
     */
    export type TypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CapacityDefaultArgs instead
     */
    export type CapacityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CapacityDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HeightDefaultArgs instead
     */
    export type HeightArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HeightDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PowerDefaultArgs instead
     */
    export type PowerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PowerDefaultArgs<ExtArgs>
    /**
     * @deprecated Use InputOutputDefaultArgs instead
     */
    export type InputOutputArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = InputOutputDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProposeDefaultArgs instead
     */
    export type ProposeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProposeDefaultArgs<ExtArgs>

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
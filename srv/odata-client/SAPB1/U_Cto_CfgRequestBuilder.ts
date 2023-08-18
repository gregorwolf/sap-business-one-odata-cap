/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  DefaultDeSerializers,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  CreateRequestBuilder,
  UpdateRequestBuilder,
  DeleteRequestBuilder,
  DeserializedType,
  RequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { U_Cto_Cfg } from './U_Cto_Cfg';

/**
 * Request builder class for operations supported on the {@link U_Cto_Cfg} entity.
 */
export class U_Cto_CfgRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<U_Cto_Cfg<T>, T> {
  /**
   * Returns a request builder for retrieving one `U_Cto_Cfg` entity based on its keys.
   * @param code Key property. See {@link U_Cto_Cfg.code}.
   * @returns A request builder for creating requests to retrieve one `U_Cto_Cfg` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<U_Cto_Cfg<T>, T> {
    return new GetByKeyRequestBuilder<U_Cto_Cfg<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `U_Cto_Cfg` entities.
   * @returns A request builder for creating requests to retrieve all `U_Cto_Cfg` entities.
   */
  getAll(): GetAllRequestBuilder<U_Cto_Cfg<T>, T> {
    return new GetAllRequestBuilder<U_Cto_Cfg<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `U_Cto_Cfg` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `U_Cto_Cfg`.
   */
  create(entity: U_Cto_Cfg<T>): CreateRequestBuilder<U_Cto_Cfg<T>, T> {
    return new CreateRequestBuilder<U_Cto_Cfg<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `U_Cto_Cfg`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `U_Cto_Cfg`.
   */
  update(entity: U_Cto_Cfg<T>): UpdateRequestBuilder<U_Cto_Cfg<T>, T> {
    return new UpdateRequestBuilder<U_Cto_Cfg<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `U_Cto_Cfg`.
   * @param code Key property. See {@link U_Cto_Cfg.code}.
   * @returns A request builder for creating requests that delete an entity of type `U_Cto_Cfg`.
   */
  delete(code: string): DeleteRequestBuilder<U_Cto_Cfg<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `U_Cto_Cfg`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `U_Cto_Cfg` by taking the entity as a parameter.
   */
  delete(entity: U_Cto_Cfg<T>): DeleteRequestBuilder<U_Cto_Cfg<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<U_Cto_Cfg<T>, T> {
    return new DeleteRequestBuilder<U_Cto_Cfg<T>, T>(
      this.entityApi,
      codeOrEntity instanceof U_Cto_Cfg ? codeOrEntity : { Code: codeOrEntity! }
    );
  }
}

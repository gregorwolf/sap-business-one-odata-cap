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
import { U_Bld_Gnrl } from './U_Bld_Gnrl';

/**
 * Request builder class for operations supported on the {@link U_Bld_Gnrl} entity.
 */
export class U_Bld_GnrlRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<U_Bld_Gnrl<T>, T> {
  /**
   * Returns a request builder for retrieving one `U_Bld_Gnrl` entity based on its keys.
   * @param code Key property. See {@link U_Bld_Gnrl.code}.
   * @returns A request builder for creating requests to retrieve one `U_Bld_Gnrl` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<U_Bld_Gnrl<T>, T> {
    return new GetByKeyRequestBuilder<U_Bld_Gnrl<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `U_Bld_Gnrl` entities.
   * @returns A request builder for creating requests to retrieve all `U_Bld_Gnrl` entities.
   */
  getAll(): GetAllRequestBuilder<U_Bld_Gnrl<T>, T> {
    return new GetAllRequestBuilder<U_Bld_Gnrl<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `U_Bld_Gnrl` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `U_Bld_Gnrl`.
   */
  create(entity: U_Bld_Gnrl<T>): CreateRequestBuilder<U_Bld_Gnrl<T>, T> {
    return new CreateRequestBuilder<U_Bld_Gnrl<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `U_Bld_Gnrl`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `U_Bld_Gnrl`.
   */
  update(entity: U_Bld_Gnrl<T>): UpdateRequestBuilder<U_Bld_Gnrl<T>, T> {
    return new UpdateRequestBuilder<U_Bld_Gnrl<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `U_Bld_Gnrl`.
   * @param code Key property. See {@link U_Bld_Gnrl.code}.
   * @returns A request builder for creating requests that delete an entity of type `U_Bld_Gnrl`.
   */
  delete(code: string): DeleteRequestBuilder<U_Bld_Gnrl<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `U_Bld_Gnrl`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `U_Bld_Gnrl` by taking the entity as a parameter.
   */
  delete(entity: U_Bld_Gnrl<T>): DeleteRequestBuilder<U_Bld_Gnrl<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<U_Bld_Gnrl<T>, T> {
    return new DeleteRequestBuilder<U_Bld_Gnrl<T>, T>(
      this.entityApi,
      codeOrEntity instanceof U_Bld_Gnrl
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}

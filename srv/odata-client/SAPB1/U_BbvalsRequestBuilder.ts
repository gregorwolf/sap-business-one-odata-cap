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
import { U_Bbvals } from './U_Bbvals';

/**
 * Request builder class for operations supported on the {@link U_Bbvals} entity.
 */
export class U_BbvalsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<U_Bbvals<T>, T> {
  /**
   * Returns a request builder for retrieving one `U_Bbvals` entity based on its keys.
   * @param code Key property. See {@link U_Bbvals.code}.
   * @returns A request builder for creating requests to retrieve one `U_Bbvals` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<U_Bbvals<T>, T> {
    return new GetByKeyRequestBuilder<U_Bbvals<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `U_Bbvals` entities.
   * @returns A request builder for creating requests to retrieve all `U_Bbvals` entities.
   */
  getAll(): GetAllRequestBuilder<U_Bbvals<T>, T> {
    return new GetAllRequestBuilder<U_Bbvals<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `U_Bbvals` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `U_Bbvals`.
   */
  create(entity: U_Bbvals<T>): CreateRequestBuilder<U_Bbvals<T>, T> {
    return new CreateRequestBuilder<U_Bbvals<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `U_Bbvals`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `U_Bbvals`.
   */
  update(entity: U_Bbvals<T>): UpdateRequestBuilder<U_Bbvals<T>, T> {
    return new UpdateRequestBuilder<U_Bbvals<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `U_Bbvals`.
   * @param code Key property. See {@link U_Bbvals.code}.
   * @returns A request builder for creating requests that delete an entity of type `U_Bbvals`.
   */
  delete(code: string): DeleteRequestBuilder<U_Bbvals<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `U_Bbvals`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `U_Bbvals` by taking the entity as a parameter.
   */
  delete(entity: U_Bbvals<T>): DeleteRequestBuilder<U_Bbvals<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<U_Bbvals<T>, T> {
    return new DeleteRequestBuilder<U_Bbvals<T>, T>(
      this.entityApi,
      codeOrEntity instanceof U_Bbvals ? codeOrEntity : { Code: codeOrEntity! }
    );
  }
}

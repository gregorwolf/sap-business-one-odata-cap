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
import { TaxExemptReasons } from './TaxExemptReasons';

/**
 * Request builder class for operations supported on the {@link TaxExemptReasons} entity.
 */
export class TaxExemptReasonsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TaxExemptReasons<T>, T> {
  /**
   * Returns a request builder for retrieving one `TaxExemptReasons` entity based on its keys.
   * @param code Key property. See {@link TaxExemptReasons.code}.
   * @returns A request builder for creating requests to retrieve one `TaxExemptReasons` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<TaxExemptReasons<T>, T> {
    return new GetByKeyRequestBuilder<TaxExemptReasons<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `TaxExemptReasons` entities.
   * @returns A request builder for creating requests to retrieve all `TaxExemptReasons` entities.
   */
  getAll(): GetAllRequestBuilder<TaxExemptReasons<T>, T> {
    return new GetAllRequestBuilder<TaxExemptReasons<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TaxExemptReasons` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TaxExemptReasons`.
   */
  create(
    entity: TaxExemptReasons<T>
  ): CreateRequestBuilder<TaxExemptReasons<T>, T> {
    return new CreateRequestBuilder<TaxExemptReasons<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TaxExemptReasons`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TaxExemptReasons`.
   */
  update(
    entity: TaxExemptReasons<T>
  ): UpdateRequestBuilder<TaxExemptReasons<T>, T> {
    return new UpdateRequestBuilder<TaxExemptReasons<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TaxExemptReasons`.
   * @param code Key property. See {@link TaxExemptReasons.code}.
   * @returns A request builder for creating requests that delete an entity of type `TaxExemptReasons`.
   */
  delete(code: string): DeleteRequestBuilder<TaxExemptReasons<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TaxExemptReasons`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TaxExemptReasons` by taking the entity as a parameter.
   */
  delete(
    entity: TaxExemptReasons<T>
  ): DeleteRequestBuilder<TaxExemptReasons<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<TaxExemptReasons<T>, T> {
    return new DeleteRequestBuilder<TaxExemptReasons<T>, T>(
      this.entityApi,
      codeOrEntity instanceof TaxExemptReasons
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}

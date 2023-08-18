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
import { DeductibleTaxs } from './DeductibleTaxs';

/**
 * Request builder class for operations supported on the {@link DeductibleTaxs} entity.
 */
export class DeductibleTaxsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DeductibleTaxs<T>, T> {
  /**
   * Returns a request builder for retrieving one `DeductibleTaxs` entity based on its keys.
   * @param code Key property. See {@link DeductibleTaxs.code}.
   * @returns A request builder for creating requests to retrieve one `DeductibleTaxs` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DeductibleTaxs<T>, T> {
    return new GetByKeyRequestBuilder<DeductibleTaxs<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `DeductibleTaxs` entities.
   * @returns A request builder for creating requests to retrieve all `DeductibleTaxs` entities.
   */
  getAll(): GetAllRequestBuilder<DeductibleTaxs<T>, T> {
    return new GetAllRequestBuilder<DeductibleTaxs<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DeductibleTaxs` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DeductibleTaxs`.
   */
  create(
    entity: DeductibleTaxs<T>
  ): CreateRequestBuilder<DeductibleTaxs<T>, T> {
    return new CreateRequestBuilder<DeductibleTaxs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `DeductibleTaxs`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DeductibleTaxs`.
   */
  update(
    entity: DeductibleTaxs<T>
  ): UpdateRequestBuilder<DeductibleTaxs<T>, T> {
    return new UpdateRequestBuilder<DeductibleTaxs<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `DeductibleTaxs`.
   * @param code Key property. See {@link DeductibleTaxs.code}.
   * @returns A request builder for creating requests that delete an entity of type `DeductibleTaxs`.
   */
  delete(code: string): DeleteRequestBuilder<DeductibleTaxs<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DeductibleTaxs`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DeductibleTaxs` by taking the entity as a parameter.
   */
  delete(entity: DeductibleTaxs<T>): DeleteRequestBuilder<DeductibleTaxs<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<DeductibleTaxs<T>, T> {
    return new DeleteRequestBuilder<DeductibleTaxs<T>, T>(
      this.entityApi,
      codeOrEntity instanceof DeductibleTaxs
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}

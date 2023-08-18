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
import { DunningTerms } from './DunningTerms';

/**
 * Request builder class for operations supported on the {@link DunningTerms} entity.
 */
export class DunningTermsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DunningTerms<T>, T> {
  /**
   * Returns a request builder for retrieving one `DunningTerms` entity based on its keys.
   * @param code Key property. See {@link DunningTerms.code}.
   * @returns A request builder for creating requests to retrieve one `DunningTerms` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<DunningTerms<T>, T> {
    return new GetByKeyRequestBuilder<DunningTerms<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `DunningTerms` entities.
   * @returns A request builder for creating requests to retrieve all `DunningTerms` entities.
   */
  getAll(): GetAllRequestBuilder<DunningTerms<T>, T> {
    return new GetAllRequestBuilder<DunningTerms<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DunningTerms` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DunningTerms`.
   */
  create(entity: DunningTerms<T>): CreateRequestBuilder<DunningTerms<T>, T> {
    return new CreateRequestBuilder<DunningTerms<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `DunningTerms`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DunningTerms`.
   */
  update(entity: DunningTerms<T>): UpdateRequestBuilder<DunningTerms<T>, T> {
    return new UpdateRequestBuilder<DunningTerms<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `DunningTerms`.
   * @param code Key property. See {@link DunningTerms.code}.
   * @returns A request builder for creating requests that delete an entity of type `DunningTerms`.
   */
  delete(code: string): DeleteRequestBuilder<DunningTerms<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DunningTerms`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DunningTerms` by taking the entity as a parameter.
   */
  delete(entity: DunningTerms<T>): DeleteRequestBuilder<DunningTerms<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<DunningTerms<T>, T> {
    return new DeleteRequestBuilder<DunningTerms<T>, T>(
      this.entityApi,
      codeOrEntity instanceof DunningTerms
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}

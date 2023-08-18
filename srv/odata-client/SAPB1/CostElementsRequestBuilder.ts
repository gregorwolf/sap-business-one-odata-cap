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
import { CostElements } from './CostElements';

/**
 * Request builder class for operations supported on the {@link CostElements} entity.
 */
export class CostElementsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CostElements<T>, T> {
  /**
   * Returns a request builder for retrieving one `CostElements` entity based on its keys.
   * @param code Key property. See {@link CostElements.code}.
   * @returns A request builder for creating requests to retrieve one `CostElements` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<CostElements<T>, T> {
    return new GetByKeyRequestBuilder<CostElements<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `CostElements` entities.
   * @returns A request builder for creating requests to retrieve all `CostElements` entities.
   */
  getAll(): GetAllRequestBuilder<CostElements<T>, T> {
    return new GetAllRequestBuilder<CostElements<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CostElements` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CostElements`.
   */
  create(entity: CostElements<T>): CreateRequestBuilder<CostElements<T>, T> {
    return new CreateRequestBuilder<CostElements<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `CostElements`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CostElements`.
   */
  update(entity: CostElements<T>): UpdateRequestBuilder<CostElements<T>, T> {
    return new UpdateRequestBuilder<CostElements<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CostElements`.
   * @param code Key property. See {@link CostElements.code}.
   * @returns A request builder for creating requests that delete an entity of type `CostElements`.
   */
  delete(code: string): DeleteRequestBuilder<CostElements<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CostElements`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CostElements` by taking the entity as a parameter.
   */
  delete(entity: CostElements<T>): DeleteRequestBuilder<CostElements<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<CostElements<T>, T> {
    return new DeleteRequestBuilder<CostElements<T>, T>(
      this.entityApi,
      codeOrEntity instanceof CostElements
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}

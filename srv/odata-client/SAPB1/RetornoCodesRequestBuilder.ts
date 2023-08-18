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
import { RetornoCodes } from './RetornoCodes';

/**
 * Request builder class for operations supported on the {@link RetornoCodes} entity.
 */
export class RetornoCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<RetornoCodes<T>, T> {
  /**
   * Returns a request builder for retrieving one `RetornoCodes` entity based on its keys.
   * @param absEntry Key property. See {@link RetornoCodes.absEntry}.
   * @returns A request builder for creating requests to retrieve one `RetornoCodes` entity based on its keys.
   */
  getByKey(
    absEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<RetornoCodes<T>, T> {
    return new GetByKeyRequestBuilder<RetornoCodes<T>, T>(this.entityApi, {
      AbsEntry: absEntry
    });
  }

  /**
   * Returns a request builder for querying all `RetornoCodes` entities.
   * @returns A request builder for creating requests to retrieve all `RetornoCodes` entities.
   */
  getAll(): GetAllRequestBuilder<RetornoCodes<T>, T> {
    return new GetAllRequestBuilder<RetornoCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `RetornoCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RetornoCodes`.
   */
  create(entity: RetornoCodes<T>): CreateRequestBuilder<RetornoCodes<T>, T> {
    return new CreateRequestBuilder<RetornoCodes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `RetornoCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RetornoCodes`.
   */
  update(entity: RetornoCodes<T>): UpdateRequestBuilder<RetornoCodes<T>, T> {
    return new UpdateRequestBuilder<RetornoCodes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RetornoCodes`.
   * @param absEntry Key property. See {@link RetornoCodes.absEntry}.
   * @returns A request builder for creating requests that delete an entity of type `RetornoCodes`.
   */
  delete(absEntry: number): DeleteRequestBuilder<RetornoCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `RetornoCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RetornoCodes` by taking the entity as a parameter.
   */
  delete(entity: RetornoCodes<T>): DeleteRequestBuilder<RetornoCodes<T>, T>;
  delete(absEntryOrEntity: any): DeleteRequestBuilder<RetornoCodes<T>, T> {
    return new DeleteRequestBuilder<RetornoCodes<T>, T>(
      this.entityApi,
      absEntryOrEntity instanceof RetornoCodes
        ? absEntryOrEntity
        : { AbsEntry: absEntryOrEntity! }
    );
  }
}

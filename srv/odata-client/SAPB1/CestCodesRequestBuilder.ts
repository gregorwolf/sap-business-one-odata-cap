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
import { CestCodes } from './CestCodes';

/**
 * Request builder class for operations supported on the {@link CestCodes} entity.
 */
export class CestCodesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<CestCodes<T>, T> {
  /**
   * Returns a request builder for retrieving one `CestCodes` entity based on its keys.
   * @param absEntry Key property. See {@link CestCodes.absEntry}.
   * @returns A request builder for creating requests to retrieve one `CestCodes` entity based on its keys.
   */
  getByKey(
    absEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<CestCodes<T>, T> {
    return new GetByKeyRequestBuilder<CestCodes<T>, T>(this.entityApi, {
      AbsEntry: absEntry
    });
  }

  /**
   * Returns a request builder for querying all `CestCodes` entities.
   * @returns A request builder for creating requests to retrieve all `CestCodes` entities.
   */
  getAll(): GetAllRequestBuilder<CestCodes<T>, T> {
    return new GetAllRequestBuilder<CestCodes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `CestCodes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CestCodes`.
   */
  create(entity: CestCodes<T>): CreateRequestBuilder<CestCodes<T>, T> {
    return new CreateRequestBuilder<CestCodes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `CestCodes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CestCodes`.
   */
  update(entity: CestCodes<T>): UpdateRequestBuilder<CestCodes<T>, T> {
    return new UpdateRequestBuilder<CestCodes<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CestCodes`.
   * @param absEntry Key property. See {@link CestCodes.absEntry}.
   * @returns A request builder for creating requests that delete an entity of type `CestCodes`.
   */
  delete(absEntry: number): DeleteRequestBuilder<CestCodes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `CestCodes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CestCodes` by taking the entity as a parameter.
   */
  delete(entity: CestCodes<T>): DeleteRequestBuilder<CestCodes<T>, T>;
  delete(absEntryOrEntity: any): DeleteRequestBuilder<CestCodes<T>, T> {
    return new DeleteRequestBuilder<CestCodes<T>, T>(
      this.entityApi,
      absEntryOrEntity instanceof CestCodes
        ? absEntryOrEntity
        : { AbsEntry: absEntryOrEntity! }
    );
  }
}

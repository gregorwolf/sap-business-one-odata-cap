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
import { IndiaSacCode } from './IndiaSacCode';

/**
 * Request builder class for operations supported on the {@link IndiaSacCode} entity.
 */
export class IndiaSacCodeRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<IndiaSacCode<T>, T> {
  /**
   * Returns a request builder for retrieving one `IndiaSacCode` entity based on its keys.
   * @param absEntry Key property. See {@link IndiaSacCode.absEntry}.
   * @returns A request builder for creating requests to retrieve one `IndiaSacCode` entity based on its keys.
   */
  getByKey(
    absEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<IndiaSacCode<T>, T> {
    return new GetByKeyRequestBuilder<IndiaSacCode<T>, T>(this.entityApi, {
      AbsEntry: absEntry
    });
  }

  /**
   * Returns a request builder for querying all `IndiaSacCode` entities.
   * @returns A request builder for creating requests to retrieve all `IndiaSacCode` entities.
   */
  getAll(): GetAllRequestBuilder<IndiaSacCode<T>, T> {
    return new GetAllRequestBuilder<IndiaSacCode<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `IndiaSacCode` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `IndiaSacCode`.
   */
  create(entity: IndiaSacCode<T>): CreateRequestBuilder<IndiaSacCode<T>, T> {
    return new CreateRequestBuilder<IndiaSacCode<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `IndiaSacCode`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `IndiaSacCode`.
   */
  update(entity: IndiaSacCode<T>): UpdateRequestBuilder<IndiaSacCode<T>, T> {
    return new UpdateRequestBuilder<IndiaSacCode<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `IndiaSacCode`.
   * @param absEntry Key property. See {@link IndiaSacCode.absEntry}.
   * @returns A request builder for creating requests that delete an entity of type `IndiaSacCode`.
   */
  delete(absEntry: number): DeleteRequestBuilder<IndiaSacCode<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `IndiaSacCode`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `IndiaSacCode` by taking the entity as a parameter.
   */
  delete(entity: IndiaSacCode<T>): DeleteRequestBuilder<IndiaSacCode<T>, T>;
  delete(absEntryOrEntity: any): DeleteRequestBuilder<IndiaSacCode<T>, T> {
    return new DeleteRequestBuilder<IndiaSacCode<T>, T>(
      this.entityApi,
      absEntryOrEntity instanceof IndiaSacCode
        ? absEntryOrEntity
        : { AbsEntry: absEntryOrEntity! }
    );
  }
}

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
import { DnfCodeSetup } from './DnfCodeSetup';

/**
 * Request builder class for operations supported on the {@link DnfCodeSetup} entity.
 */
export class DnfCodeSetupRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<DnfCodeSetup<T>, T> {
  /**
   * Returns a request builder for retrieving one `DnfCodeSetup` entity based on its keys.
   * @param absEntry Key property. See {@link DnfCodeSetup.absEntry}.
   * @returns A request builder for creating requests to retrieve one `DnfCodeSetup` entity based on its keys.
   */
  getByKey(
    absEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<DnfCodeSetup<T>, T> {
    return new GetByKeyRequestBuilder<DnfCodeSetup<T>, T>(this.entityApi, {
      AbsEntry: absEntry
    });
  }

  /**
   * Returns a request builder for querying all `DnfCodeSetup` entities.
   * @returns A request builder for creating requests to retrieve all `DnfCodeSetup` entities.
   */
  getAll(): GetAllRequestBuilder<DnfCodeSetup<T>, T> {
    return new GetAllRequestBuilder<DnfCodeSetup<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `DnfCodeSetup` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `DnfCodeSetup`.
   */
  create(entity: DnfCodeSetup<T>): CreateRequestBuilder<DnfCodeSetup<T>, T> {
    return new CreateRequestBuilder<DnfCodeSetup<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `DnfCodeSetup`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `DnfCodeSetup`.
   */
  update(entity: DnfCodeSetup<T>): UpdateRequestBuilder<DnfCodeSetup<T>, T> {
    return new UpdateRequestBuilder<DnfCodeSetup<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `DnfCodeSetup`.
   * @param absEntry Key property. See {@link DnfCodeSetup.absEntry}.
   * @returns A request builder for creating requests that delete an entity of type `DnfCodeSetup`.
   */
  delete(absEntry: number): DeleteRequestBuilder<DnfCodeSetup<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `DnfCodeSetup`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `DnfCodeSetup` by taking the entity as a parameter.
   */
  delete(entity: DnfCodeSetup<T>): DeleteRequestBuilder<DnfCodeSetup<T>, T>;
  delete(absEntryOrEntity: any): DeleteRequestBuilder<DnfCodeSetup<T>, T> {
    return new DeleteRequestBuilder<DnfCodeSetup<T>, T>(
      this.entityApi,
      absEntryOrEntity instanceof DnfCodeSetup
        ? absEntryOrEntity
        : { AbsEntry: absEntryOrEntity! }
    );
  }
}

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
import { LegalData } from './LegalData';

/**
 * Request builder class for operations supported on the {@link LegalData} entity.
 */
export class LegalDataRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<LegalData<T>, T> {
  /**
   * Returns a request builder for retrieving one `LegalData` entity based on its keys.
   * @param docEntry Key property. See {@link LegalData.docEntry}.
   * @returns A request builder for creating requests to retrieve one `LegalData` entity based on its keys.
   */
  getByKey(
    docEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<LegalData<T>, T> {
    return new GetByKeyRequestBuilder<LegalData<T>, T>(this.entityApi, {
      DocEntry: docEntry
    });
  }

  /**
   * Returns a request builder for querying all `LegalData` entities.
   * @returns A request builder for creating requests to retrieve all `LegalData` entities.
   */
  getAll(): GetAllRequestBuilder<LegalData<T>, T> {
    return new GetAllRequestBuilder<LegalData<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `LegalData` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LegalData`.
   */
  create(entity: LegalData<T>): CreateRequestBuilder<LegalData<T>, T> {
    return new CreateRequestBuilder<LegalData<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `LegalData`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LegalData`.
   */
  update(entity: LegalData<T>): UpdateRequestBuilder<LegalData<T>, T> {
    return new UpdateRequestBuilder<LegalData<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `LegalData`.
   * @param docEntry Key property. See {@link LegalData.docEntry}.
   * @returns A request builder for creating requests that delete an entity of type `LegalData`.
   */
  delete(docEntry: number): DeleteRequestBuilder<LegalData<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `LegalData`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LegalData` by taking the entity as a parameter.
   */
  delete(entity: LegalData<T>): DeleteRequestBuilder<LegalData<T>, T>;
  delete(docEntryOrEntity: any): DeleteRequestBuilder<LegalData<T>, T> {
    return new DeleteRequestBuilder<LegalData<T>, T>(
      this.entityApi,
      docEntryOrEntity instanceof LegalData
        ? docEntryOrEntity
        : { DocEntry: docEntryOrEntity! }
    );
  }
}

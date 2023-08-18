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
import { NfModels } from './NfModels';

/**
 * Request builder class for operations supported on the {@link NfModels} entity.
 */
export class NfModelsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<NfModels<T>, T> {
  /**
   * Returns a request builder for retrieving one `NfModels` entity based on its keys.
   * @param absEntry Key property. See {@link NfModels.absEntry}.
   * @returns A request builder for creating requests to retrieve one `NfModels` entity based on its keys.
   */
  getByKey(
    absEntry: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<NfModels<T>, T> {
    return new GetByKeyRequestBuilder<NfModels<T>, T>(this.entityApi, {
      AbsEntry: absEntry
    });
  }

  /**
   * Returns a request builder for querying all `NfModels` entities.
   * @returns A request builder for creating requests to retrieve all `NfModels` entities.
   */
  getAll(): GetAllRequestBuilder<NfModels<T>, T> {
    return new GetAllRequestBuilder<NfModels<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `NfModels` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `NfModels`.
   */
  create(entity: NfModels<T>): CreateRequestBuilder<NfModels<T>, T> {
    return new CreateRequestBuilder<NfModels<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `NfModels`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `NfModels`.
   */
  update(entity: NfModels<T>): UpdateRequestBuilder<NfModels<T>, T> {
    return new UpdateRequestBuilder<NfModels<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `NfModels`.
   * @param absEntry Key property. See {@link NfModels.absEntry}.
   * @returns A request builder for creating requests that delete an entity of type `NfModels`.
   */
  delete(absEntry: string): DeleteRequestBuilder<NfModels<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `NfModels`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `NfModels` by taking the entity as a parameter.
   */
  delete(entity: NfModels<T>): DeleteRequestBuilder<NfModels<T>, T>;
  delete(absEntryOrEntity: any): DeleteRequestBuilder<NfModels<T>, T> {
    return new DeleteRequestBuilder<NfModels<T>, T>(
      this.entityApi,
      absEntryOrEntity instanceof NfModels
        ? absEntryOrEntity
        : { AbsEntry: absEntryOrEntity! }
    );
  }
}

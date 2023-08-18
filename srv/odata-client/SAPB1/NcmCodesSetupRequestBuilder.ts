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
import { NcmCodesSetup } from './NcmCodesSetup';

/**
 * Request builder class for operations supported on the {@link NcmCodesSetup} entity.
 */
export class NcmCodesSetupRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<NcmCodesSetup<T>, T> {
  /**
   * Returns a request builder for retrieving one `NcmCodesSetup` entity based on its keys.
   * @param absEntry Key property. See {@link NcmCodesSetup.absEntry}.
   * @returns A request builder for creating requests to retrieve one `NcmCodesSetup` entity based on its keys.
   */
  getByKey(
    absEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<NcmCodesSetup<T>, T> {
    return new GetByKeyRequestBuilder<NcmCodesSetup<T>, T>(this.entityApi, {
      AbsEntry: absEntry
    });
  }

  /**
   * Returns a request builder for querying all `NcmCodesSetup` entities.
   * @returns A request builder for creating requests to retrieve all `NcmCodesSetup` entities.
   */
  getAll(): GetAllRequestBuilder<NcmCodesSetup<T>, T> {
    return new GetAllRequestBuilder<NcmCodesSetup<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `NcmCodesSetup` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `NcmCodesSetup`.
   */
  create(entity: NcmCodesSetup<T>): CreateRequestBuilder<NcmCodesSetup<T>, T> {
    return new CreateRequestBuilder<NcmCodesSetup<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `NcmCodesSetup`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `NcmCodesSetup`.
   */
  update(entity: NcmCodesSetup<T>): UpdateRequestBuilder<NcmCodesSetup<T>, T> {
    return new UpdateRequestBuilder<NcmCodesSetup<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `NcmCodesSetup`.
   * @param absEntry Key property. See {@link NcmCodesSetup.absEntry}.
   * @returns A request builder for creating requests that delete an entity of type `NcmCodesSetup`.
   */
  delete(absEntry: number): DeleteRequestBuilder<NcmCodesSetup<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `NcmCodesSetup`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `NcmCodesSetup` by taking the entity as a parameter.
   */
  delete(entity: NcmCodesSetup<T>): DeleteRequestBuilder<NcmCodesSetup<T>, T>;
  delete(absEntryOrEntity: any): DeleteRequestBuilder<NcmCodesSetup<T>, T> {
    return new DeleteRequestBuilder<NcmCodesSetup<T>, T>(
      this.entityApi,
      absEntryOrEntity instanceof NcmCodesSetup
        ? absEntryOrEntity
        : { AbsEntry: absEntryOrEntity! }
    );
  }
}

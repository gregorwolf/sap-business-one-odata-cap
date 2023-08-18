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
import { TerminationReason } from './TerminationReason';

/**
 * Request builder class for operations supported on the {@link TerminationReason} entity.
 */
export class TerminationReasonRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TerminationReason<T>, T> {
  /**
   * Returns a request builder for retrieving one `TerminationReason` entity based on its keys.
   * @param reasonId Key property. See {@link TerminationReason.reasonId}.
   * @returns A request builder for creating requests to retrieve one `TerminationReason` entity based on its keys.
   */
  getByKey(
    reasonId: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<TerminationReason<T>, T> {
    return new GetByKeyRequestBuilder<TerminationReason<T>, T>(this.entityApi, {
      ReasonID: reasonId
    });
  }

  /**
   * Returns a request builder for querying all `TerminationReason` entities.
   * @returns A request builder for creating requests to retrieve all `TerminationReason` entities.
   */
  getAll(): GetAllRequestBuilder<TerminationReason<T>, T> {
    return new GetAllRequestBuilder<TerminationReason<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TerminationReason` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TerminationReason`.
   */
  create(
    entity: TerminationReason<T>
  ): CreateRequestBuilder<TerminationReason<T>, T> {
    return new CreateRequestBuilder<TerminationReason<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TerminationReason`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TerminationReason`.
   */
  update(
    entity: TerminationReason<T>
  ): UpdateRequestBuilder<TerminationReason<T>, T> {
    return new UpdateRequestBuilder<TerminationReason<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TerminationReason`.
   * @param reasonId Key property. See {@link TerminationReason.reasonId}.
   * @returns A request builder for creating requests that delete an entity of type `TerminationReason`.
   */
  delete(reasonId: number): DeleteRequestBuilder<TerminationReason<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TerminationReason`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TerminationReason` by taking the entity as a parameter.
   */
  delete(
    entity: TerminationReason<T>
  ): DeleteRequestBuilder<TerminationReason<T>, T>;
  delete(reasonIdOrEntity: any): DeleteRequestBuilder<TerminationReason<T>, T> {
    return new DeleteRequestBuilder<TerminationReason<T>, T>(
      this.entityApi,
      reasonIdOrEntity instanceof TerminationReason
        ? reasonIdOrEntity
        : { ReasonID: reasonIdOrEntity! }
    );
  }
}

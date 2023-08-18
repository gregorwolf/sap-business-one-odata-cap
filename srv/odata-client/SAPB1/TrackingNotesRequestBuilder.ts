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
import { TrackingNotes } from './TrackingNotes';

/**
 * Request builder class for operations supported on the {@link TrackingNotes} entity.
 */
export class TrackingNotesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<TrackingNotes<T>, T> {
  /**
   * Returns a request builder for retrieving one `TrackingNotes` entity based on its keys.
   * @param trackingNoteNumber Key property. See {@link TrackingNotes.trackingNoteNumber}.
   * @returns A request builder for creating requests to retrieve one `TrackingNotes` entity based on its keys.
   */
  getByKey(
    trackingNoteNumber: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<TrackingNotes<T>, T> {
    return new GetByKeyRequestBuilder<TrackingNotes<T>, T>(this.entityApi, {
      TrackingNoteNumber: trackingNoteNumber
    });
  }

  /**
   * Returns a request builder for querying all `TrackingNotes` entities.
   * @returns A request builder for creating requests to retrieve all `TrackingNotes` entities.
   */
  getAll(): GetAllRequestBuilder<TrackingNotes<T>, T> {
    return new GetAllRequestBuilder<TrackingNotes<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `TrackingNotes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TrackingNotes`.
   */
  create(entity: TrackingNotes<T>): CreateRequestBuilder<TrackingNotes<T>, T> {
    return new CreateRequestBuilder<TrackingNotes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `TrackingNotes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TrackingNotes`.
   */
  update(entity: TrackingNotes<T>): UpdateRequestBuilder<TrackingNotes<T>, T> {
    return new UpdateRequestBuilder<TrackingNotes<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `TrackingNotes`.
   * @param trackingNoteNumber Key property. See {@link TrackingNotes.trackingNoteNumber}.
   * @returns A request builder for creating requests that delete an entity of type `TrackingNotes`.
   */
  delete(trackingNoteNumber: number): DeleteRequestBuilder<TrackingNotes<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `TrackingNotes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TrackingNotes` by taking the entity as a parameter.
   */
  delete(entity: TrackingNotes<T>): DeleteRequestBuilder<TrackingNotes<T>, T>;
  delete(
    trackingNoteNumberOrEntity: any
  ): DeleteRequestBuilder<TrackingNotes<T>, T> {
    return new DeleteRequestBuilder<TrackingNotes<T>, T>(
      this.entityApi,
      trackingNoteNumberOrEntity instanceof TrackingNotes
        ? trackingNoteNumberOrEntity
        : { TrackingNoteNumber: trackingNoteNumberOrEntity! }
    );
  }
}

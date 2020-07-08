/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core/v4';
import { TrackingNotes } from './TrackingNotes';

/**
 * Request builder class for operations supported on the [[TrackingNotes]] entity.
 */
export class TrackingNotesRequestBuilder extends RequestBuilder<TrackingNotes> {
  /**
   * Returns a request builder for retrieving one `TrackingNotes` entity based on its keys.
   * @param trackingNoteNumber Key property. See [[TrackingNotes.trackingNoteNumber]].
   * @returns A request builder for creating requests to retrieve one `TrackingNotes` entity based on its keys.
   */
  getByKey(trackingNoteNumber: number): GetByKeyRequestBuilder<TrackingNotes> {
    return new GetByKeyRequestBuilder(TrackingNotes, { TrackingNoteNumber: trackingNoteNumber });
  }

  /**
   * Returns a request builder for querying all `TrackingNotes` entities.
   * @returns A request builder for creating requests to retrieve all `TrackingNotes` entities.
   */
  getAll(): GetAllRequestBuilder<TrackingNotes> {
    return new GetAllRequestBuilder(TrackingNotes);
  }

  /**
   * Returns a request builder for creating a `TrackingNotes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TrackingNotes`.
   */
  create(entity: TrackingNotes): CreateRequestBuilder<TrackingNotes> {
    return new CreateRequestBuilder(TrackingNotes, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `TrackingNotes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TrackingNotes`.
   */
  update(entity: TrackingNotes): UpdateRequestBuilder<TrackingNotes> {
    return new UpdateRequestBuilder(TrackingNotes, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TrackingNotes`.
   * @param trackingNoteNumber Key property. See [[TrackingNotes.trackingNoteNumber]].
   * @returns A request builder for creating requests that delete an entity of type `TrackingNotes`.
   */
  delete(trackingNoteNumber: number): DeleteRequestBuilder<TrackingNotes>;
  /**
   * Returns a request builder for deleting an entity of type `TrackingNotes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TrackingNotes` by taking the entity as a parameter.
   */
  delete(entity: TrackingNotes): DeleteRequestBuilder<TrackingNotes>;
  delete(trackingNoteNumberOrEntity: any): DeleteRequestBuilder<TrackingNotes> {
    return new DeleteRequestBuilder(TrackingNotes, trackingNoteNumberOrEntity instanceof TrackingNotes ? trackingNoteNumberOrEntity : { TrackingNoteNumber: trackingNoteNumberOrEntity! });
  }
}

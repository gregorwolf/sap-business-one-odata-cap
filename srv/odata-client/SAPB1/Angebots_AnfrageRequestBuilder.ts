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
import { Angebots_Anfrage } from './Angebots_Anfrage';

/**
 * Request builder class for operations supported on the {@link Angebots_Anfrage} entity.
 */
export class Angebots_AnfrageRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Angebots_Anfrage<T>, T> {
  /**
   * Returns a request builder for retrieving one `Angebots_Anfrage` entity based on its keys.
   * @param docEntry Key property. See {@link Angebots_Anfrage.docEntry}.
   * @returns A request builder for creating requests to retrieve one `Angebots_Anfrage` entity based on its keys.
   */
  getByKey(
    docEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<Angebots_Anfrage<T>, T> {
    return new GetByKeyRequestBuilder<Angebots_Anfrage<T>, T>(this.entityApi, {
      DocEntry: docEntry
    });
  }

  /**
   * Returns a request builder for querying all `Angebots_Anfrage` entities.
   * @returns A request builder for creating requests to retrieve all `Angebots_Anfrage` entities.
   */
  getAll(): GetAllRequestBuilder<Angebots_Anfrage<T>, T> {
    return new GetAllRequestBuilder<Angebots_Anfrage<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Angebots_Anfrage` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Angebots_Anfrage`.
   */
  create(
    entity: Angebots_Anfrage<T>
  ): CreateRequestBuilder<Angebots_Anfrage<T>, T> {
    return new CreateRequestBuilder<Angebots_Anfrage<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `Angebots_Anfrage`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Angebots_Anfrage`.
   */
  update(
    entity: Angebots_Anfrage<T>
  ): UpdateRequestBuilder<Angebots_Anfrage<T>, T> {
    return new UpdateRequestBuilder<Angebots_Anfrage<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `Angebots_Anfrage`.
   * @param docEntry Key property. See {@link Angebots_Anfrage.docEntry}.
   * @returns A request builder for creating requests that delete an entity of type `Angebots_Anfrage`.
   */
  delete(docEntry: number): DeleteRequestBuilder<Angebots_Anfrage<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Angebots_Anfrage`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Angebots_Anfrage` by taking the entity as a parameter.
   */
  delete(
    entity: Angebots_Anfrage<T>
  ): DeleteRequestBuilder<Angebots_Anfrage<T>, T>;
  delete(docEntryOrEntity: any): DeleteRequestBuilder<Angebots_Anfrage<T>, T> {
    return new DeleteRequestBuilder<Angebots_Anfrage<T>, T>(
      this.entityApi,
      docEntryOrEntity instanceof Angebots_Anfrage
        ? docEntryOrEntity
        : { DocEntry: docEntryOrEntity! }
    );
  }
}

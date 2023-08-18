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
import { JournalEntries } from './JournalEntries';

/**
 * Request builder class for operations supported on the {@link JournalEntries} entity.
 */
export class JournalEntriesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<JournalEntries<T>, T> {
  /**
   * Returns a request builder for retrieving one `JournalEntries` entity based on its keys.
   * @param jdtNum Key property. See {@link JournalEntries.jdtNum}.
   * @returns A request builder for creating requests to retrieve one `JournalEntries` entity based on its keys.
   */
  getByKey(
    jdtNum: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<JournalEntries<T>, T> {
    return new GetByKeyRequestBuilder<JournalEntries<T>, T>(this.entityApi, {
      JdtNum: jdtNum
    });
  }

  /**
   * Returns a request builder for querying all `JournalEntries` entities.
   * @returns A request builder for creating requests to retrieve all `JournalEntries` entities.
   */
  getAll(): GetAllRequestBuilder<JournalEntries<T>, T> {
    return new GetAllRequestBuilder<JournalEntries<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `JournalEntries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JournalEntries`.
   */
  create(
    entity: JournalEntries<T>
  ): CreateRequestBuilder<JournalEntries<T>, T> {
    return new CreateRequestBuilder<JournalEntries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `JournalEntries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JournalEntries`.
   */
  update(
    entity: JournalEntries<T>
  ): UpdateRequestBuilder<JournalEntries<T>, T> {
    return new UpdateRequestBuilder<JournalEntries<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `JournalEntries`.
   * @param jdtNum Key property. See {@link JournalEntries.jdtNum}.
   * @returns A request builder for creating requests that delete an entity of type `JournalEntries`.
   */
  delete(jdtNum: number): DeleteRequestBuilder<JournalEntries<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `JournalEntries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JournalEntries` by taking the entity as a parameter.
   */
  delete(entity: JournalEntries<T>): DeleteRequestBuilder<JournalEntries<T>, T>;
  delete(jdtNumOrEntity: any): DeleteRequestBuilder<JournalEntries<T>, T> {
    return new DeleteRequestBuilder<JournalEntries<T>, T>(
      this.entityApi,
      jdtNumOrEntity instanceof JournalEntries
        ? jdtNumOrEntity
        : { JdtNum: jdtNumOrEntity! }
    );
  }
}

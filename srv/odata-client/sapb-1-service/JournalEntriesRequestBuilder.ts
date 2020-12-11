/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { JournalEntries } from './JournalEntries';

/**
 * Request builder class for operations supported on the [[JournalEntries]] entity.
 */
export class JournalEntriesRequestBuilder extends RequestBuilder<JournalEntries> {
  /**
   * Returns a request builder for retrieving one `JournalEntries` entity based on its keys.
   * @param jdtNum Key property. See [[JournalEntries.jdtNum]].
   * @returns A request builder for creating requests to retrieve one `JournalEntries` entity based on its keys.
   */
  getByKey(jdtNum: number): GetByKeyRequestBuilderV4<JournalEntries> {
    return new GetByKeyRequestBuilderV4(JournalEntries, { JdtNum: jdtNum });
  }

  /**
   * Returns a request builder for querying all `JournalEntries` entities.
   * @returns A request builder for creating requests to retrieve all `JournalEntries` entities.
   */
  getAll(): GetAllRequestBuilderV4<JournalEntries> {
    return new GetAllRequestBuilderV4(JournalEntries);
  }

  /**
   * Returns a request builder for creating a `JournalEntries` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JournalEntries`.
   */
  create(entity: JournalEntries): CreateRequestBuilderV4<JournalEntries> {
    return new CreateRequestBuilderV4(JournalEntries, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `JournalEntries`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JournalEntries`.
   */
  update(entity: JournalEntries): UpdateRequestBuilderV4<JournalEntries> {
    return new UpdateRequestBuilderV4(JournalEntries, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `JournalEntries`.
   * @param jdtNum Key property. See [[JournalEntries.jdtNum]].
   * @returns A request builder for creating requests that delete an entity of type `JournalEntries`.
   */
  delete(jdtNum: number): DeleteRequestBuilderV4<JournalEntries>;
  /**
   * Returns a request builder for deleting an entity of type `JournalEntries`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JournalEntries` by taking the entity as a parameter.
   */
  delete(entity: JournalEntries): DeleteRequestBuilderV4<JournalEntries>;
  delete(jdtNumOrEntity: any): DeleteRequestBuilderV4<JournalEntries> {
    return new DeleteRequestBuilderV4(JournalEntries, jdtNumOrEntity instanceof JournalEntries ? jdtNumOrEntity : { JdtNum: jdtNumOrEntity! });
  }
}

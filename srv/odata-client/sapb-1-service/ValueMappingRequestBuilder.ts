/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { ValueMapping } from './ValueMapping';

/**
 * Request builder class for operations supported on the [[ValueMapping]] entity.
 */
export class ValueMappingRequestBuilder extends RequestBuilder<ValueMapping> {
  /**
   * Returns a request builder for retrieving one `ValueMapping` entity based on its keys.
   * @param absEntry Key property. See [[ValueMapping.absEntry]].
   * @returns A request builder for creating requests to retrieve one `ValueMapping` entity based on its keys.
   */
  getByKey(absEntry: number): GetByKeyRequestBuilderV4<ValueMapping> {
    return new GetByKeyRequestBuilderV4(ValueMapping, { AbsEntry: absEntry });
  }

  /**
   * Returns a request builder for querying all `ValueMapping` entities.
   * @returns A request builder for creating requests to retrieve all `ValueMapping` entities.
   */
  getAll(): GetAllRequestBuilderV4<ValueMapping> {
    return new GetAllRequestBuilderV4(ValueMapping);
  }

  /**
   * Returns a request builder for creating a `ValueMapping` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ValueMapping`.
   */
  create(entity: ValueMapping): CreateRequestBuilderV4<ValueMapping> {
    return new CreateRequestBuilderV4(ValueMapping, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ValueMapping`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ValueMapping`.
   */
  update(entity: ValueMapping): UpdateRequestBuilderV4<ValueMapping> {
    return new UpdateRequestBuilderV4(ValueMapping, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ValueMapping`.
   * @param absEntry Key property. See [[ValueMapping.absEntry]].
   * @returns A request builder for creating requests that delete an entity of type `ValueMapping`.
   */
  delete(absEntry: number): DeleteRequestBuilderV4<ValueMapping>;
  /**
   * Returns a request builder for deleting an entity of type `ValueMapping`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ValueMapping` by taking the entity as a parameter.
   */
  delete(entity: ValueMapping): DeleteRequestBuilderV4<ValueMapping>;
  delete(absEntryOrEntity: any): DeleteRequestBuilderV4<ValueMapping> {
    return new DeleteRequestBuilderV4(ValueMapping, absEntryOrEntity instanceof ValueMapping ? absEntryOrEntity : { AbsEntry: absEntryOrEntity! });
  }
}

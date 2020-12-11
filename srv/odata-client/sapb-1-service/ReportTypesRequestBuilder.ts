/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { ReportTypes } from './ReportTypes';

/**
 * Request builder class for operations supported on the [[ReportTypes]] entity.
 */
export class ReportTypesRequestBuilder extends RequestBuilder<ReportTypes> {
  /**
   * Returns a request builder for retrieving one `ReportTypes` entity based on its keys.
   * @param typeCode Key property. See [[ReportTypes.typeCode]].
   * @returns A request builder for creating requests to retrieve one `ReportTypes` entity based on its keys.
   */
  getByKey(typeCode: string): GetByKeyRequestBuilderV4<ReportTypes> {
    return new GetByKeyRequestBuilderV4(ReportTypes, { TypeCode: typeCode });
  }

  /**
   * Returns a request builder for querying all `ReportTypes` entities.
   * @returns A request builder for creating requests to retrieve all `ReportTypes` entities.
   */
  getAll(): GetAllRequestBuilderV4<ReportTypes> {
    return new GetAllRequestBuilderV4(ReportTypes);
  }

  /**
   * Returns a request builder for creating a `ReportTypes` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReportTypes`.
   */
  create(entity: ReportTypes): CreateRequestBuilderV4<ReportTypes> {
    return new CreateRequestBuilderV4(ReportTypes, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ReportTypes`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReportTypes`.
   */
  update(entity: ReportTypes): UpdateRequestBuilderV4<ReportTypes> {
    return new UpdateRequestBuilderV4(ReportTypes, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ReportTypes`.
   * @param typeCode Key property. See [[ReportTypes.typeCode]].
   * @returns A request builder for creating requests that delete an entity of type `ReportTypes`.
   */
  delete(typeCode: string): DeleteRequestBuilderV4<ReportTypes>;
  /**
   * Returns a request builder for deleting an entity of type `ReportTypes`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReportTypes` by taking the entity as a parameter.
   */
  delete(entity: ReportTypes): DeleteRequestBuilderV4<ReportTypes>;
  delete(typeCodeOrEntity: any): DeleteRequestBuilderV4<ReportTypes> {
    return new DeleteRequestBuilderV4(ReportTypes, typeCodeOrEntity instanceof ReportTypes ? typeCodeOrEntity : { TypeCode: typeCodeOrEntity! });
  }
}

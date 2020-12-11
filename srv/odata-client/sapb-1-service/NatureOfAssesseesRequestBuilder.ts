/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { NatureOfAssessees } from './NatureOfAssessees';

/**
 * Request builder class for operations supported on the [[NatureOfAssessees]] entity.
 */
export class NatureOfAssesseesRequestBuilder extends RequestBuilder<NatureOfAssessees> {
  /**
   * Returns a request builder for retrieving one `NatureOfAssessees` entity based on its keys.
   * @param absEntry Key property. See [[NatureOfAssessees.absEntry]].
   * @returns A request builder for creating requests to retrieve one `NatureOfAssessees` entity based on its keys.
   */
  getByKey(absEntry: number): GetByKeyRequestBuilderV4<NatureOfAssessees> {
    return new GetByKeyRequestBuilderV4(NatureOfAssessees, { AbsEntry: absEntry });
  }

  /**
   * Returns a request builder for querying all `NatureOfAssessees` entities.
   * @returns A request builder for creating requests to retrieve all `NatureOfAssessees` entities.
   */
  getAll(): GetAllRequestBuilderV4<NatureOfAssessees> {
    return new GetAllRequestBuilderV4(NatureOfAssessees);
  }

  /**
   * Returns a request builder for creating a `NatureOfAssessees` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `NatureOfAssessees`.
   */
  create(entity: NatureOfAssessees): CreateRequestBuilderV4<NatureOfAssessees> {
    return new CreateRequestBuilderV4(NatureOfAssessees, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `NatureOfAssessees`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `NatureOfAssessees`.
   */
  update(entity: NatureOfAssessees): UpdateRequestBuilderV4<NatureOfAssessees> {
    return new UpdateRequestBuilderV4(NatureOfAssessees, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `NatureOfAssessees`.
   * @param absEntry Key property. See [[NatureOfAssessees.absEntry]].
   * @returns A request builder for creating requests that delete an entity of type `NatureOfAssessees`.
   */
  delete(absEntry: number): DeleteRequestBuilderV4<NatureOfAssessees>;
  /**
   * Returns a request builder for deleting an entity of type `NatureOfAssessees`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `NatureOfAssessees` by taking the entity as a parameter.
   */
  delete(entity: NatureOfAssessees): DeleteRequestBuilderV4<NatureOfAssessees>;
  delete(absEntryOrEntity: any): DeleteRequestBuilderV4<NatureOfAssessees> {
    return new DeleteRequestBuilderV4(NatureOfAssessees, absEntryOrEntity instanceof NatureOfAssessees ? absEntryOrEntity : { AbsEntry: absEntryOrEntity! });
  }
}

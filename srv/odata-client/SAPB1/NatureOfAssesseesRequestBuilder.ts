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
import { NatureOfAssessees } from './NatureOfAssessees';

/**
 * Request builder class for operations supported on the {@link NatureOfAssessees} entity.
 */
export class NatureOfAssesseesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<NatureOfAssessees<T>, T> {
  /**
   * Returns a request builder for retrieving one `NatureOfAssessees` entity based on its keys.
   * @param absEntry Key property. See {@link NatureOfAssessees.absEntry}.
   * @returns A request builder for creating requests to retrieve one `NatureOfAssessees` entity based on its keys.
   */
  getByKey(
    absEntry: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<NatureOfAssessees<T>, T> {
    return new GetByKeyRequestBuilder<NatureOfAssessees<T>, T>(this.entityApi, {
      AbsEntry: absEntry
    });
  }

  /**
   * Returns a request builder for querying all `NatureOfAssessees` entities.
   * @returns A request builder for creating requests to retrieve all `NatureOfAssessees` entities.
   */
  getAll(): GetAllRequestBuilder<NatureOfAssessees<T>, T> {
    return new GetAllRequestBuilder<NatureOfAssessees<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `NatureOfAssessees` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `NatureOfAssessees`.
   */
  create(
    entity: NatureOfAssessees<T>
  ): CreateRequestBuilder<NatureOfAssessees<T>, T> {
    return new CreateRequestBuilder<NatureOfAssessees<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `NatureOfAssessees`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `NatureOfAssessees`.
   */
  update(
    entity: NatureOfAssessees<T>
  ): UpdateRequestBuilder<NatureOfAssessees<T>, T> {
    return new UpdateRequestBuilder<NatureOfAssessees<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `NatureOfAssessees`.
   * @param absEntry Key property. See {@link NatureOfAssessees.absEntry}.
   * @returns A request builder for creating requests that delete an entity of type `NatureOfAssessees`.
   */
  delete(absEntry: number): DeleteRequestBuilder<NatureOfAssessees<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `NatureOfAssessees`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `NatureOfAssessees` by taking the entity as a parameter.
   */
  delete(
    entity: NatureOfAssessees<T>
  ): DeleteRequestBuilder<NatureOfAssessees<T>, T>;
  delete(absEntryOrEntity: any): DeleteRequestBuilder<NatureOfAssessees<T>, T> {
    return new DeleteRequestBuilder<NatureOfAssessees<T>, T>(
      this.entityApi,
      absEntryOrEntity instanceof NatureOfAssessees
        ? absEntryOrEntity
        : { AbsEntry: absEntryOrEntity! }
    );
  }
}

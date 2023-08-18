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
import { ApprovalStages } from './ApprovalStages';

/**
 * Request builder class for operations supported on the {@link ApprovalStages} entity.
 */
export class ApprovalStagesRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ApprovalStages<T>, T> {
  /**
   * Returns a request builder for retrieving one `ApprovalStages` entity based on its keys.
   * @param code Key property. See {@link ApprovalStages.code}.
   * @returns A request builder for creating requests to retrieve one `ApprovalStages` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ApprovalStages<T>, T> {
    return new GetByKeyRequestBuilder<ApprovalStages<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `ApprovalStages` entities.
   * @returns A request builder for creating requests to retrieve all `ApprovalStages` entities.
   */
  getAll(): GetAllRequestBuilder<ApprovalStages<T>, T> {
    return new GetAllRequestBuilder<ApprovalStages<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ApprovalStages` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ApprovalStages`.
   */
  create(
    entity: ApprovalStages<T>
  ): CreateRequestBuilder<ApprovalStages<T>, T> {
    return new CreateRequestBuilder<ApprovalStages<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ApprovalStages`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ApprovalStages`.
   */
  update(
    entity: ApprovalStages<T>
  ): UpdateRequestBuilder<ApprovalStages<T>, T> {
    return new UpdateRequestBuilder<ApprovalStages<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ApprovalStages`.
   * @param code Key property. See {@link ApprovalStages.code}.
   * @returns A request builder for creating requests that delete an entity of type `ApprovalStages`.
   */
  delete(code: number): DeleteRequestBuilder<ApprovalStages<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ApprovalStages`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ApprovalStages` by taking the entity as a parameter.
   */
  delete(entity: ApprovalStages<T>): DeleteRequestBuilder<ApprovalStages<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<ApprovalStages<T>, T> {
    return new DeleteRequestBuilder<ApprovalStages<T>, T>(
      this.entityApi,
      codeOrEntity instanceof ApprovalStages
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}

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
import { ActivitySubjects } from './ActivitySubjects';

/**
 * Request builder class for operations supported on the {@link ActivitySubjects} entity.
 */
export class ActivitySubjectsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<ActivitySubjects<T>, T> {
  /**
   * Returns a request builder for retrieving one `ActivitySubjects` entity based on its keys.
   * @param code Key property. See {@link ActivitySubjects.code}.
   * @returns A request builder for creating requests to retrieve one `ActivitySubjects` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.Int32'>
  ): GetByKeyRequestBuilder<ActivitySubjects<T>, T> {
    return new GetByKeyRequestBuilder<ActivitySubjects<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `ActivitySubjects` entities.
   * @returns A request builder for creating requests to retrieve all `ActivitySubjects` entities.
   */
  getAll(): GetAllRequestBuilder<ActivitySubjects<T>, T> {
    return new GetAllRequestBuilder<ActivitySubjects<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `ActivitySubjects` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ActivitySubjects`.
   */
  create(
    entity: ActivitySubjects<T>
  ): CreateRequestBuilder<ActivitySubjects<T>, T> {
    return new CreateRequestBuilder<ActivitySubjects<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for updating an entity of type `ActivitySubjects`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ActivitySubjects`.
   */
  update(
    entity: ActivitySubjects<T>
  ): UpdateRequestBuilder<ActivitySubjects<T>, T> {
    return new UpdateRequestBuilder<ActivitySubjects<T>, T>(
      this.entityApi,
      entity
    );
  }

  /**
   * Returns a request builder for deleting an entity of type `ActivitySubjects`.
   * @param code Key property. See {@link ActivitySubjects.code}.
   * @returns A request builder for creating requests that delete an entity of type `ActivitySubjects`.
   */
  delete(code: number): DeleteRequestBuilder<ActivitySubjects<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `ActivitySubjects`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ActivitySubjects` by taking the entity as a parameter.
   */
  delete(
    entity: ActivitySubjects<T>
  ): DeleteRequestBuilder<ActivitySubjects<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<ActivitySubjects<T>, T> {
    return new DeleteRequestBuilder<ActivitySubjects<T>, T>(
      this.entityApi,
      codeOrEntity instanceof ActivitySubjects
        ? codeOrEntity
        : { Code: codeOrEntity! }
    );
  }
}

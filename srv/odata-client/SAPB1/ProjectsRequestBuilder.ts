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
import { Projects } from './Projects';

/**
 * Request builder class for operations supported on the {@link Projects} entity.
 */
export class ProjectsRequestBuilder<
  T extends DeSerializers = DefaultDeSerializers
> extends RequestBuilder<Projects<T>, T> {
  /**
   * Returns a request builder for retrieving one `Projects` entity based on its keys.
   * @param code Key property. See {@link Projects.code}.
   * @returns A request builder for creating requests to retrieve one `Projects` entity based on its keys.
   */
  getByKey(
    code: DeserializedType<T, 'Edm.String'>
  ): GetByKeyRequestBuilder<Projects<T>, T> {
    return new GetByKeyRequestBuilder<Projects<T>, T>(this.entityApi, {
      Code: code
    });
  }

  /**
   * Returns a request builder for querying all `Projects` entities.
   * @returns A request builder for creating requests to retrieve all `Projects` entities.
   */
  getAll(): GetAllRequestBuilder<Projects<T>, T> {
    return new GetAllRequestBuilder<Projects<T>, T>(this.entityApi);
  }

  /**
   * Returns a request builder for creating a `Projects` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Projects`.
   */
  create(entity: Projects<T>): CreateRequestBuilder<Projects<T>, T> {
    return new CreateRequestBuilder<Projects<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Projects`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Projects`.
   */
  update(entity: Projects<T>): UpdateRequestBuilder<Projects<T>, T> {
    return new UpdateRequestBuilder<Projects<T>, T>(this.entityApi, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Projects`.
   * @param code Key property. See {@link Projects.code}.
   * @returns A request builder for creating requests that delete an entity of type `Projects`.
   */
  delete(code: string): DeleteRequestBuilder<Projects<T>, T>;
  /**
   * Returns a request builder for deleting an entity of type `Projects`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Projects` by taking the entity as a parameter.
   */
  delete(entity: Projects<T>): DeleteRequestBuilder<Projects<T>, T>;
  delete(codeOrEntity: any): DeleteRequestBuilder<Projects<T>, T> {
    return new DeleteRequestBuilder<Projects<T>, T>(
      this.entityApi,
      codeOrEntity instanceof Projects ? codeOrEntity : { Code: codeOrEntity! }
    );
  }
}
